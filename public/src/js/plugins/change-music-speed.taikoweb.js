export default class Plugin extends Patch {
	name = "Change Music Speed"
	name_lang = {
		ja: "音楽の速度を変更",
		en: "Change Music Speed",
		cn: "更改音乐速度",
		tw: "更改音樂速度",
		ko: "음악 속도 변경"
	}
	version = "25.10.18"
	description = "Slow down or speed up the music in game"
	description_lang = {
		ja: "音楽の速度を変更します",
		en: "Allows you to slow down or speed up the in-game music.",
		cn: "允许您在游戏中减慢或加快音乐速度。",
		tw: "允許您在遊戲中減慢或加快音樂速度。",
		ko: "게임 내 음악의 속도를 느리게 하거나 빠르게 조정할 수 있습니다."
	}
	author = "Katie Frogs(Tlanslated by ryo_001339)"
	
	playbackRate = 1.25
	disableMultiplayer = true
	
	strings = {
		playbackRate: {
			name: "Music Speed Multiplier",
			name_lang: {
				ja: "音楽の速度倍率",
				en: "Music Speed Multiplier",
				cn: "音乐速度倍率",
				tw: "音樂速度倍率",
				ko: "음악 속도 배율"
			},
			description: null,
			description_lang: {},
			format: "%sx",
			format_lang: {
				ja: "%sx",
				en: "%sx",
				cn: "%sx",
				tw: "%sx",
				ko: "%sx"
			}
		}
	}
	
	load() {
		var playbackRate = this.playbackRate
		this.addEdits(
			new EditFunction(Sound.prototype, "play").load((str, args) => {
				args.push("playbackRate")
				return plugins.insertBefore(str,
				`if(playbackRate){
					source.playbackRate.value = playbackRate
				}
				`, 'source.start')
			}),
			new EditFunction(Sound.prototype, "playLoop").load((str, args) => {
				args.push("playbackRate")
				str = plugins.strReplace(str,
				'started: time + until - seek1',
				`started: time + (until - seek1) / (playbackRate || 1),
				playbackRate: (playbackRate || 1)`)
				return plugins.insertAfter(str, 'this.play(time, true, seek1, until', `, playbackRate`)
			}),
			new EditFunction(Sound.prototype, "addLoop").load(str => {
				str = plugins.insertAfter(str, ', this.loop.until', `, this.loop.playbackRate`)
				return plugins.strReplace(str,
				'this.loop.until - this.loop.seek',
				`(this.loop.until - this.loop.seek) / this.loop.playbackRate`)
			}),
			new EditFunction(Game.prototype, "playMainMusic").load(str => {
				str = plugins.insertBefore(str,
				`ms = this.elapsedTime * this.controller.getPlaybackRate() + this.controller.offset
				`, 'this.mainAsset.play(')
				return plugins.insertAfter(str,
				'this.mainAsset.play((ms < 0 ? -ms : 0) / 1000, false, Math.max(0, ms / 1000)', `, undefined, this.controller.getPlaybackRate()`)
			}),
			new EditFunction(Controller.prototype, "init").load(str => {
				return plugins.insertBefore(str,
				`var playbackRate = this.getPlaybackRate()
				this.parsedSongData.beatInfo.beatInterval /= playbackRate
				this.parsedSongData.circles.forEach(circle => {
					circle.beatMS /= playbackRate
					circle.ms /= playbackRate
					circle.originalMS /= playbackRate
					circle.endTime /= playbackRate
					circle.originalEndTime /= playbackRate
					circle.lastFrame = circle.ms + 100
					circle.speed *= playbackRate
				})
				this.parsedSongData.measures.forEach(measure => {
					measure.ms /= playbackRate
					measure.originalMS /= playbackRate
					measure.speed *= playbackRate
				})
				this.parsedSongData.events.forEach(event => {
					if(event.type === "event"){
						event.beatMS /= playbackRate
						event.ms /= playbackRate
						event.originalMS /= playbackRate
						event.endTime /= playbackRate
						event.originalEndTime /= playbackRate
						event.endTime /= playbackRate
						event.speed *= playbackRate
					}
				})
				this.offset /= playbackRate
				this.parsedSongData.offset /= playbackRate
				this.parsedSongData.soundOffset /= playbackRate
				
				if(this.lyrics){
					this.lyrics.vttOffset /= playbackRate
					this.lyrics.lines.forEach(line => {
						line.start /= playbackRate
						line.end /= playbackRate
					})
				}
				if(playbackRate < 1){
					this.saveScore = false
				}
				`, 'this.game = new Game')
			}),
			new EditValue(Controller.prototype, "getPlaybackRate").load(() => this.getPlaybackRate.bind(this)),
			new EditFunction(SongSelect.prototype, "previewLoaded").load(str => {
				return plugins.insertAfter(str, 'this.preview.playLoop(delay / 1000, false, prvTime', `, undefined, undefined, this.getPlaybackRate()`)
			}),
			new EditValue(SongSelect.prototype, "getPlaybackRate").load(() => this.getPlaybackRate.bind(this))
		)
	}

	getPlaybackRate() {
		return this.playbackRate
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
		var str = this.strings.playbackRate
		return [{
			name: str.name,
			name_lang: str.name_lang,
			description: str.description,
			description_lang: str.description_lang,
			format: str.format,
			format_lang: str.format_lang,
			type: "number",
			min: 0.05,
			max: 5,
			fixedPoint: 2,
			step: 5,
			default: this.playbackRate,
			getItem: () => this.playbackRate,
			setItem: value => {
				this.playbackRate = value
			}
		}]
	}
}
