export default class Plugin extends Patch {
	name = "Change Timing Window"
	name_lang = {
		ja: "判定タイミングの調整",
		en: "Change Timing Window",
		cn: "调整判定时间窗口",
		tw: "調整判定時間窗口",
		ko: "판정 타이밍 조정"
	}
	version = "25.10.18"
	description = "Custom input interval for in-game notes"
	description_lang = {
		ja: "ゲーム内のノーツ判定タイミングを調整します",
		en: "Customize the input timing window for notes.",
		cn: "自定义游戏中音符的判定时间窗口。",
		tw: "自訂遊戲中音符的判定時間窗口。",
		ko: "게임 내 노트 판정 타이밍을 조정합니다."
	}
	author = "Katie Frogs(Tlanslated by ryo_001339)"
	
	score = {
		good: 25,
		ok: 75,
		bad: 108
	}
	disableMultiplayer = true
	
	strings = {
		good: {
			name: "GOOD",
			name_lang: {
				ja: "良",
				en: "GOOD",
				cn: "良",
				tw: "良",
				ko: "얼쑤"
			},
			description: "Default: 25ms",
			description_lang: {
				ja: "デフォルト: 25ms",
				en: "Default: 25ms",
				cn: "默认: 25毫秒",
				tw: "預設: 25毫秒",
				ko: "기본값: 25ms"
			},
			format: "%sms",
			format_lang: {
				ja: "%sms",
				en: "%sms",
				cn: "%sms",
				tw: "%sms",
				ko: "%sms"
			}
		},
		ok: {
			name: "OK",
			name_lang: {
				ja: "可",
				en: "OK",
				cn: "可",
				tw: "可",
				ko: "좋다"
			},
			description: "Default: 75ms",
			description_lang: {
				ja: "デフォルト: 75ms",
				en: "Default: 75ms",
				cn: "默认: 75毫秒",
				tw: "預設: 75毫秒",
				ko: "기본값: 75ms"
			},
			format: "%sms",
			format_lang: {
				ja: "%sms",
				en: "%sms",
				cn: "%sms",
				tw: "%sms",
				ko: "%sms"
			}
		},
		bad: {
			name: "BAD",
			name_lang: {
				ja: "不可",
				en: "BAD",
				cn: "不可",
				tw: "不可",
				ko: "에구"
			},
			description: "Default: 108ms",
			description_lang: {
				ja: "デフォルト: 108ms",
				en: "Default: 108ms",
				cn: "默认: 108毫秒",
				tw: "預設: 108毫秒",
				ko: "기본값: 108ms"
			},
			format: "%sms",
			format_lang: {
				ja: "%sms",
				en: "%sms",
				cn: "%sms",
				tw: "%sms",
				ko: "%sms"
			}
		}
	}
	
	load() {
		this.addEdits(
			new EditFunction(GameRules.prototype, "init").load(str => {
				return plugins.insertBefore(str,
				`this.good = this.getTiming("good")
				this.ok = this.getTiming("ok")
				this.bad = this.getTiming("bad")
				if(this.good > 25 || this.ok > 75){
					game.controller.saveScore = false
				}
				`, 'this.daiLeniency')
			}),
			new EditValue(GameRules.prototype, "getTiming").load(() => this.getTiming.bind(this))
		)
	}
	
	getTiming(name) {
		if (name === "bad") {
			return Math.max(...Object.values(this.score))
		} else {
			return this.score[name]
		}
	}
	
	start() {
		if (this.disableMultiplayer) {
			p2.disable()
		}
	}
	
	stop() {
		if (this.disableMultiplayer) {
			p2.enable()
		}
	}
	
	settings() {
		return Object.keys(this.strings).map(name => {
			var str = this.strings[name]
			return {
				name: str.name,
				name_lang: str.name_lang,
				description: str.description,
				description_lang: str.description_lang,
				format: str.format,
				format_lang: str.format_lang,
				type: "number",
				min: 0,
				default: this.score[name],
				getItem: () => this.score[name],
				setItem: value => {
					this.score[name] = value
				}
			}
		})
	}
}
