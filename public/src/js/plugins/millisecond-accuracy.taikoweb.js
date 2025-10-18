export default class Plugin extends Patch{
	name = "Millisecond Accuracy"
	name_lang = {
		ja: "ミリ秒単位の精度",
		en: "Millisecond Accuracy",
		cn: "毫秒精度",
		tw: "毫秒精度",
		ko: "밀리초 단위 정밀도"
	}
	version = "25.10.18"
	description = "Replaces the judge score with the accuracy in milliseconds"
	description_lang = {
		ja: "判定点数をミリ秒単位の精度に置き換えます",
		en: "Replaces the judge score with the accuracy in milliseconds",
		cn: "将判定得分替换为以毫秒为单位的精度",
		tw: "將判定分數替換為毫秒單位的精度",
		ko: "판정 점수를 밀리초 단위의 정확도로 표시합니다"
	}
	author = "Katie Frogs(Tlanslate by ryo_001339)"
	
	load(){
		this.addEdits(
			new EditFunction(CanvasDraw.prototype, "score").load(str => {
				str = plugins.insertBefore(str, `!config.text && `, 'strings.good ===')
				return str.replace(/strings\.(good|ok|bad),/g, "config.text || $&")
			}),
			new EditFunction(Game.prototype, "checkScore").load(str => {
				return plugins.insertBefore(str,
				`this.lastRelative = relative
				`, 'relative = Math.abs(relative)')
			}),
			new EditFunction(View.prototype, "refresh").load(str => {
				return plugins.insertAfter(str, "scale: 1.35 * mul,",`
				text: (this.controller.game.lastRelative >= 0 ? "+" : "") + Math.floor(this.controller.game.lastRelative).toString(),`)
			}),
			new EditFunction(Mekadon.prototype, "playNow").load(str => {
				return plugins.insertBefore(str,
				`this.game.lastRelative = this.getMS() - ms
				`, 'this.controller.displayScore')
			})
		)
	}
}
