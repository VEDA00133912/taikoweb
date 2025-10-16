var languageList = ["ja", "en", "cn", "tw", "ko"]
var translations = {
	name: {
		ja: "日本語",
		en: "English",
		cn: "简体中文",
		tw: "正體中文",
		ko: "한국어"
	},
	regex: {
		ja: /^ja$|^ja-/,
		en: /^en$|^en-/,
		cn: /^zh$|^zh-CN$|^zh-SG$/,
		tw: /^zh-HK$|^zh-TW$/,
		ko: /^ko$|^ko-/
	},
	font: {
		ja: "TnT, Meiryo, sans-serif",
		en: "TnT, Meiryo, sans-serif",
		cn: "GW, sans-serif",
		tw: "HK, sans-serif",
		ko: "Kukde, sans-serif"
	},
	intl: {
		ja: "ja",
		en: "en-GB",
		cn: "zh-Hans",
		tw: "zh-Hant",
		ko: "ko"
	},
	
	taikoWeb: {
		en: "Re: TaikoWeb"
	},
	titleProceed: {
		ja: "クリックかEnterでスタート",
		en: "Click or Press Enter!",
		cn: "点击或按回车！",
		tw: "點擊或按確認！",
		ko: "클릭하거나 Enter를 누르세요!"
	},
	titleDisclaimer: {
		ja: "太鼓ウェブは非公式のシミュレーターです。バンダイナムコとは関係ありません",
		en: "This unofficial simulator is unaffiliated with BANDAI NAMCO.",
		cn: "这款非官方模拟器与BANDAI NAMCO无关。",
		tw: "這款非官方模擬器與 BANDAI NAMCO 無關。",
		ko: "이 비공식 시뮬레이터는 반다이 남코와 관련이 없습니다."
	},
	titleCopyright: {
		en: "Re: TaikoWeb - Ryo_001339"
	},
	selectSong: {
		ja: "曲をえらぶ",
		en: "Select Song",
		cn: "选择乐曲",
		tw: "選擇樂曲",
		ko: "곡 선택"
	},
	selectDifficulty: {
		ja: "むずかしさをえらぶ",
		en: "Select Difficulty",
		cn: "选择难度",
		tw: "選擇難度",
		ko: "난이도 선택"
	},
	back: {
		ja: "もどる",
		en: "Back",
		cn: "返回",
		tw: "返回",
		ko: "돌아가기"
	},
	songSearch: {
		ja: "検索",
		en: "Search",
		cn: "搜索",
		tw: "搜尋",
		ko: "검색"
	},
	random: {
		ja: "ランダム",
		en: "Random",
		cn: "随机",
		tw: "隨機",
		ko: "랜덤"
	},
	randomSong: {
		ja: "ランダムに曲をえらぶ",
		en: "Random Song",
		cn: "随机选曲",
		tw: "隨機選曲",
		ko: "랜덤"
	},
	howto: {
		ja: "説明",
		en: "Guide",
		cn: "说明",
		tw: "說明",
		ko: "설명"
	},
	howToPlay: {
		ja: "あそびかた説明",
		en: "How to Play",
		cn: "操作说明",
		tw: "操作說明",
		ko: "플레이 방법"
	},
	aboutSimulator: {
		ja: "このシミュレータについて",
		en: "About Simulator",
		cn: "关于模拟器",
		tw: "關於模擬器",
		ko: "시뮬레이터 정보"
	},
	custom: {
		ja: "カスタム",
		en: "Custom",
		cn: "自定义",
		tw: "自訂",
		ko: "커스텀"
	},
	options: {
		ja: "オプション",
		en: "Options",
		cn: "选项",
		tw: "選項",
		ko: "옵션"
	},
	setting: {
		ja: "設定",
		en: "Settings",
		cn: "设定",
		tw: "設定",
		ko: "설정"
	},
	gameSettings: {
		ja: "ゲーム設定",
		en: "Game Settings",
		cn: "游戏设定",
		tw: "遊戲設定",
		ko: "게임 설정"
	},
	songOptions: {
		ja: "演奏オプション",
		en: "Song Options",
		cn: "选项",
		tw: "選項",
		ko: "옵션"
	},
	download: {
		ja: "ダウンロード",
		en: "Download",
		cn: "下载",
		tw: "下載",
		ko: "다운로드"
	},
	delete: {
		ja: "曲を削除",
		en: "Delete Song",
		cn: "删除歌曲",
		tw: "刪除歌曲",
		ko: "노래 삭제"
	},
	selectSpeed: {
		ja: "曲選択速度",
		en: "Song Select Speed",
		cn: "歌曲选择速度",
		tw: "歌曲選擇速度",
		ko: "곡 선택 속도"
	},
	addSong: {
		ja: "曲を投稿",
		en: "Upload Song",
		cn: "上传歌曲",
		tw: "上傳歌曲",
		ko: "곡 업로드"
	},
	keijiban: {
		ja: "掲示板",
		en: "Bulletin Board",
		cn: "公告栏",
		tw: "留言板",
		ko: "게시판",
	},
	titleSort: {
		ja: "タイトル順に並び替え",
		en: "Sort by Title",
		cn: "按标题排序",
		tw: "依標題排序",
		ko: "제목순으로 정렬"
	},
	hs: {
		ja: "ハイスピ設定",
		en: "High-Speed Settings",
		cn: "高速设置",
		tw: "高速設定",
		ko: "하이스피드 설정",
	},
	baisoku: {
		ja: 'ばいそく',
		en: 'baisoku',
		cn: '倍速',
		tw: '倍速',
		ko: '배속',
	},
	sanbai: {
		ja: 'さんばい',
		en: 'sanbai',
		cn: '3倍速',
		tw: '3倍速',
		ko: '3배속',
	},
	yonbai: {
		ja: 'よんばい',
		en: 'yonbai',
		cn: '4倍速',
		tw: '4倍速',
		ko: '4배속',
	},
	tousoku: {
		ja: "等速(スコア保存無し)",
		en: "Constant speed (no score save)",
		cn: "等速（不保存分数）",
		tw: "等速（不保存分數）",
		ko: "등속(점수 저장 없음)"
	},
	allDon: {
		ja: "全てドン(スコア保存無し)",
		en: "All Don (no score save)",
		cn: "全部Don（不保存分数）",
		tw: "全部Don（不保存分數）",
		ko: "전부 Don(점수 저장 없음)"
	},
	allKat: {
		ja: "全てカッ(スコア保存無し)",
		en: "All Kat (no score save)",
		cn: "全部Kat（不保存分数）",
		tw: "全部Kat（不保存分數）",
		ko: "전부 Kat(점수 저장 없음)"
	},
	abekobe: {
		ja: 'あべこべ',
		en: 'Inverse',
		cn: '颠倒',
		tw: '顛倒',
		ko: '역전',
	},
	kimagure: {
		ja: 'きまぐれ',
		en: 'Whimsical',
		cn: '随兴',
		tw: '小亂',
		ko: '변덕',
	},
	detarame: {
		ja: 'でたらめ',
		en: 'Messy',
		cn: '随意',
		tw: '大亂',
		ko: '대충',
	},
	doron: {
		ja: 'ドロン',
		en: 'Vanish',
		cn: '隐身',
		tw: '隱譜',
		ko: '은신',
	},
	none: {
		ja: "なし",
		en: "None",
		cn: "无",
		tw: "無",
		ko: "없음"
	},
	auto: {
		ja: "オート",
		en: "Auto",
		cn: "自动",
		tw: "自動",
		ko: "자동"
	},
	netplay: {
		ja: "ネットプレイ",
		en: "Netplay",
		cn: "网络对战",
		tw: "網上對打",
		ko: "온라인 대전"
	},
	easy: {
		ja: "かんたん",
		en: "Easy",
		cn: "简单",
		tw: "簡單",
		ko: "쉬움"
	},
	normal: {
		ja: "ふつう",
		en: "Normal",
		cn: "普通",
		tw: "普通",
		ko: "보통"
	},
	hard: {
		ja: "むずかしい",
		en: "Hard",
		cn: "困难",
		tw: "困難",
		ko: "어려움"
	},
	oni: {
		ja: "おに",
		en: "Extreme",
		cn: "魔王",
		tw: "魔王",
		ko: "귀신"
	},
	songBranch: {
		ja: "譜面分岐あり",
		en: "Diverge Notes",
		cn: "有谱面分歧",
		tw: "有譜面分歧",
		ko: "악보 분기 있음"
	},
	defaultName: {
		ja: "どんちゃん",
		en: "Don-chan",
		cn: "小咚",
		tw: "小咚",
		ko: "동이"
	},
	default2PName: {
		ja: "かっちゃん",
		en: "Katsu-chan",
		cn: "小咔",
		tw: "小咔",
		ko: "딱이"
	},
	notLoggedIn: {
		ja: "ログインしていません",
		en: "Not logged in",
		cn: "未登录",
		tw: "未登錄",
		ko: "로그인하지 않았습니다"
	},
	sessionStart: {
		ja: "オンラインセッションを開始！",
		en: "Begin an Online Session!",
		cn: "开始在线会话！",
		tw: "開始多人模式！",
		ko: "온라인 세션 시작!"
	},
	sessionEnd: {
		ja: "オンラインセッションを終了！",
		en: "End Online Session",
		cn: "结束在线会话",
		tw: "結束多人模式",
		ko: "온라인 세션 끝내기"
	},
	scoreSaveFailed: {
		ja: "サーバーに接続できませんでした。スコアは保存されていません。\n\nログインするか、ページを更新して、再度スコアの保存をお試しください。",
		en: "Could not connect to the server, your score has not been saved.\n\nPlease log in or refresh the page to try saving the score again.",
		tw: "無法連接至伺服器，你的成績未能儲存。若要儲存成績，請登入或重新載入頁面。",
		ko: "서버에 연결되지 않아 점수가 저장되지 않았습니다.\n\n로그인하거나 페이지를 새로고침하여 점수를 다시 저장할 수 있습니다."
	},
	loadSongError: {
		ja: "曲「%s」を読み込むことができませんでした。（ID：%s）\n\n%s",
		en: "Could not load song %s with ID %s.\n\n%s",
		ko: "곡 %s (ID:%s)를 로드할 수 없습니다.\n\n%s"
	},
	accessNotGrantedError: {
		ja: "ファイルへのアクセスができませんでした",
		en: "Permission to access the file was not granted",
		ko: "파일에 접근할 수 있는 권한이 부여되지 않았습니다."
	},
	loading: {
		ja: "ロード中...",
		en: "Loading...",
		cn: "加载中...",
		tw: "讀取中...",
		ko: "로딩 중..."
	},
	waitingForP2: {
		ja: "相手を待っています...",
		en: "Waiting for Another Player...",
		cn: "正在等待对方玩家...",
		tw: "正在等待對方玩家...",
		ko: "다른 플레이어 대기 중..."
	},
	cancel: {
		ja: "キャンセル",
		en: "Cancel",
		cn: "取消",
		tw: "取消",
		ko: "취소"
	},
	note: {
		don: {
			ja: "ドン",
			en: "Don",
			cn: "咚",
			tw: "咚",
			ko: "쿵"
		},
		ka: {
			ja: "カッ",
			en: "Ka",
			cn: "咔",
			tw: "咔",
			ko: "딱"
		},
		daiDon: {
			ja: "ドン(大)",
			en: "DON",
			cn: "咚(大)",
			tw: "咚(大)",
			ko: "쿵(대)"
		},
		daiKa: {
			ja: "カッ(大)",
			en: "KA",
			cn: "咔(大)",
			tw: "咔(大)",
			ko: "딱(대)"
		},
		drumroll: {
			ja: "連打ーっ!!",
			en: "Drum rollー!!",
			cn: "连打ー!!",
			tw: "連打ー!!",
			ko: "연타ー!!"
		},
		daiDrumroll: {
			ja: "連打(大)ーっ!!",
			en: "DRUM ROLLー!!",
			cn: "连打(大)ー!!",
			tw: "連打(大)ー!!",
			ko: "연타(대)ー!!"
		},
		balloon: {
			ja: "ふうせん",
			en: "Balloon",
			cn: "气球",
			tw: "氣球",
			ko: "풍선"
		},
	},
	ex_note: {
		don: {
			ja: ["ド", "コ"],
			en: ["Do", "Do"],
			cn: ["咚", "咚"],
			tw: ["咚", "咚"],
			ko: ["쿠", "쿠"]
		},
		ka: {
			ja: ["カ"],
			en: ["Ka"],
			cn: ["咔"],
			tw: ["咔"],
			ko: ["딱"]
		},
		daiDon: {
			ja: ["ドン(大)", "ドン(大)"],
			en: ["DON", "DON"],
			cn: ["咚(大)", "咚(大)"],
			tw: ["咚(大)", "咚(大)"],
			ko: ["쿵(대)", "쿵(대)"]
		},
		daiKa: {
			ja: ["カッ(大)"],
			en: ["KA"],
			cn: ["咔(大)"],
			tw: ["咔(大)"],
			ko: ["딱(대)"]
		},
	},
	combo: {
		ja: "コンボ",
		en: "Combo",
		cn: "连段",
		tw: "連段",
		ko: "콤보"
	},
	clear: {
		ja: "クリア",
		en: "Clear",
		cn: "通关",
		tw: "通關",
		ko: "클리어"
	},
	good: {
		ja: "良",
		en: "GOOD",
		cn: "良",
		tw: "良",
		ko: "얼쑤"
	},
	ok: {
		ja: "可",
		en: "OK",
		cn: "可",
		tw: "可",
		ko: "좋다"
	},
	bad: {
		ja: "不可",
		en: "BAD",
		cn: "不可",
		tw: "不可",
		ko: "에구"
	},
	branch: {
		normal: {
			ja: "普通譜面",
			en: "Normal",
			cn: "一般谱面",
			tw: "一般譜面",
			ko: "보통 악보"
		},
		advanced: {
			ja: "玄人譜面",
			en: "Professional",
			cn: "进阶谱面",
			tw: "進階譜面",
			ko: "현인 악보"
		},
		master: {
			ja: "達人譜面",
			en: "Master",
			cn: "达人谱面",
			tw: "達人譜面",
			ko: "달인 악보"
		}
	},
	pauseOptions: {
		ja: [
			"演奏をつづける",
			"はじめからやりなおす",
			"「曲をえらぶ」にもどる"
		],
		en: [
			"Continue",
			"Retry",
			"Back to Select Song"
		],
		cn: [
			"继续演奏",
			"从头开始",
			"返回「选择乐曲」"
		],
		tw: [
			"繼續演奏",
			"從頭開始",
			"返回「選擇樂曲」"
		],
		ko: [
			"연주 계속하기",
			"처음부터 다시",
			"「곡 선택」으로"
		]
	},
	results: {
		ja: "成績発表",
		en: "Results",
		cn: "发表成绩",
		tw: "發表成績",
		ko: "성적 발표"
	},
	points: {
		ja: "点",
		en: "pts",
		cn: "点",
		tw: "分",
		ko: "점"
	},
	maxCombo: {
		ja: "最大コンボ数",
		en: "MAX Combo",
		cn: "最多连段数",
		tw: "最多連段數",
		ko: "최대 콤보 수"
	},
	drumroll: {
		ja: "連打数",
		en: "Drumroll",
		cn: "连打数",
		tw: "連打數",
		ko: "연타 횟수"
	},
	
	errorOccured: {
		ja: "エラーが発生しました。再読み込みしてください。",
		en: "An error occurred, please refresh",
		tw: "發生錯誤，請重新載入頁面。",
		ko: "오류가 발생했습니다. 페이지를 새로 고침하시기 바랍니다."
	},
	tutorial: {
		basics: {
			ja: [
				"流れてくる音符が枠に重なったら太鼓をたたこう！",
				"赤い音符は面をたたこう（%sまたは%s）",
				"青い音符はフチをたたこう（%sまたは%s）",
				"USBコントローラもサポートされています！"
			],
			en: [
				"When a note overlaps the frame, that is your cue to hit the drum!",
				"For red notes, hit the surface of the drum (%s or %s)...",
				"...and for blue notes, hit the rim! (%s or %s)",
				"USB controllers are also supported!"
			],
			cn: [
				"当流动的音符将与框框重叠时就用鼓棒敲打太鼓吧",
				"遇到红色音符要敲打鼓面（%s或%s）",
				"遇到蓝色音符则敲打鼓边（%s或%s）",
				"USB控制器也支持！"
			],
			tw: [
				"當流動的音符將與框框重疊時就用鼓棒敲打太鼓吧",
				"遇到紅色音符要敲打鼓面（%s或%s）",
				"遇到藍色音符則敲打鼓邊（%s或%s）",
				"USB控制器也支持！"
			],
			ko: [
				"이동하는 음표가 테두리와 겹쳐졌을 때 북채로 태고를 두드리자!",
				"빨간 음표는 면을 두드리자 (%s 또는 %s)",
				"파란 음표는 테를 두드리자 (%s 또는 %s)",
				"USB 컨트롤러도 지원됩니다!"
			],
		},
		otherControls: {
			ja: "他のコントロール",
			en: "Other controls",
			cn: "其他控制",
			tw: "其他控制",
			ko: "기타 컨트롤",
		},
		otherTutorial: {
			ja: [
				"%sはゲームを一時停止します",
				"曲をえらびながら%sか%sキーを押すとジャンルをスキップ",
				"むずかしさをえらびながら%sキーを押すとオートプレイを有効",
				"むずかしさをえらびながら%sキーを押すとネットプレイモードを有効"
			],
			en: [
				"%s \u2014 pause game",
				'%s and %s while selecting song \u2014 navigate categories',
				"%s while selecting difficulty \u2014 enable autoplay mode",
				"%s while selecting difficulty \u2014 enable 2P mode"
			],
			cn: [
				"%s暂停游戏",
				'%s 和 %s 选择歌曲时快速切换类别',
				"选择难度时按住%s以启用自动模式",
				"选择难度时按住%s以启用网络对战模式"
			],
			tw: [
				"%s暫停遊戲",
				'選擇歌曲時，按下 %s 或 %s 以快速切換類別',
				"選擇難度時，按住 %s 以啟用自動模式",
				"選擇難度時，按住 %s 以啟用網上對打模式"
			],
			ko: [
				"%s \u2014 게임을 일시 중지합니다",
				'곡 선택 중 %s 또는 %s \u2014 카테고리 이동',
				"난이도 선택 동안 %s 홀드 \u2014 자동 모드 활성화",
				"난이도 선택 동안 %s 홀드 \u2014 온라인 대전 모드 활성화"
			],
		},
		ok: {
			ja: "OK",
			en: "OK",
			cn: "确定",
			tw: "確定",
			ko: "확인"
		},
		key: {
			ctrl: {
				en: "CTRL"
			},
			shift: {
				en: "⇧ SHIFT"
			},
			leftArrow: {
				en: "\u2190"
			},
			rightArrow: {
				en: "\u2192"
			},
			esc: {
				en: "ESC"
			},
			join: {
				en: "+"
			},
			or: {
				ja: "または",
				en: " or ",
				cn: "或",
				tw: "或",
				ko: " 또는 "
			}
		}
	},
	about: {
		bugReporting: {
			ja: [
				"このシミュレータは現在開発中です。",
				"バグが発生した場合は、報告してください。",
				"Gitリポジトリかメールでバグを報告してください。"
			],
			en: [
				"This simulator is still in development.",
				"Please report any bugs you find.",
				"You can report bugs either via our Git repository or email."
			],
			cn: [
				"这款模拟器仍处于开发中，",
				"您可以向我们报告在游戏中出现的任何bug，",
				"可以通过我们的Github仓库或发送电子邮件来报告错误。"
			],
			tw: [
				"此模擬器仍處於開發階段，",
				"請回報任何你遇到的 bug。",
				"你可以透過 Github 或電子郵件回報。"
			],
			ko: [
				"이 시뮬레이터는 아직 개발 중입니다.",
				"버그를 찾으시면 신고해주시기 바랍니다.",
				"Github 레포지터리나 이메일을 통해 버그를 신고하실 수 있습니다."
			]
		},
		diagnosticWarning: {
			ja: "以下の端末診断情報も併せて報告してください！",
			en: "Be sure to include the following diagnostic data!",
			cn: "请确保您的报告包括以下诊断数据!",
			tw: "記得附上下方的診斷資料！",
			ko: "신고하실 때 반드시 다음 진단 정보를 포함해주시기 바랍니다!"
		},
		issueTemplate: {
			ja: "###### 下記の問題を説明してください。 スクリーンショットと診断情報を含めてください。",
			en: "###### Describe the problem you are having below. Please include a screenshot and the diagnostic information.",
			cn: "###### 请在下方描述您遇到的问题，并附上截图及诊断信息。",
			tw: "###### 在下方說明您遇到的問題。請一併傳送截圖及診斷資料。",
			ko: "###### 겪고 있는 문제를 아래에 적어주시기 바랍니다. 스크린샷과 진단 정보가 포함되어야 합니다."
		},
		issues: {
			ja: "課題",
			en: "Issues",
			cn: "工单",
			tw: "問題",
			ko: "이슈"
		}
	},
	session: {
		multiplayerSession: {
			ja: "オンラインセッション",
			en: "Multiplayer Session",
			cn: "在线会话",
			tw: "多人模式",
			ko: "멀티플레이어 세션"
		},
		linkTutorial: {
			ja: "このリンクをシェアして友達とプレイしよう！相手が参加するまではこの画面から離れないでね",
			en: "Share this link with your friend to start playing together! Do not leave this screen while they join.",
			cn: "复制下方地址，给你的朋友即可开始一起游戏！当他们与您联系之前，请不要离开此页面。",
			tw: "分享下方網址給你的朋友即可開始一起遊戲！在他們加入時，請不要離開此頁面。",
			ko: "링크를 공유하여 친구와 플레이하세요! 친구가 입장하기 전에 페이지를 나가지 말아주세요."
		},
		cancel: {
			ja: "キャンセル",
			en: "Cancel",
			cn: "取消",
			tw: "取消",
			ko: "취소"
		}
	},
	settings: {
		language: {
			name: {
				ja: "言語",
				en: "Language",
				cn: "语言",
				tw: "語系",
				ko: "언어"
			}
		},
		resolution: {
			name: {
				ja: "ゲームの解像度",
				en: "Game Resolution",
				cn: "游戏分辨率",
				tw: "遊戲解析度",
				ko: "게임 해상도"
			},
			high: {
				ja: "高",
				en: "High",
				cn: "高",
				tw: "高",
				ko: "높음"
			},
			medium: {
				ja: "中",
				en: "Medium",
				cn: "中",
				tw: "中",
				ko: "중간"
			},
			low: {
				ja: "低",
				en: "Low",
				cn: "低",
				tw: "低",
				ko: "낮음"
			},
			lowest: {
				ja: "最低",
				en: "Lowest",
				cn: "最低",
				tw: "最低",
				ko: "매우 낮음"
			}
		},
		touchAnimation: {
			name: {
				ja: "タッチアニメーション",
				en: "Touch Animation",
				cn: "触摸动画",
				tw: "觸摸動畫",
				ko: "터치 애니메이션"
			}
		},
		keyboardSettings: {
			name: {
				ja: "キーボード設定",
				en: "Keyboard Settings",
				cn: "键盘设置",
				tw: "鍵盤設置",
				ko: "키보드 설정"
			},
			ka_l: {
				ja: "ふち(左)",
				en: "Left Rim",
				cn: "边缘（左）",
				tw: "邊緣（左）",
				ko: "가장자리 (왼쪽)"
			},
			don_l: {
				ja: "面(左)",
				en: "Left Surface",
				cn: "表面（左）",
				tw: "鼓面（左）",
				ko: "북 면 (왼쪽)"
			},
			don_r: {
				ja: "面(右)",
				en: "Right Surface",
				cn: "表面（右）",
				tw: "鼓面（右）",
				ko: "북 면 (오른쪽)"
			},
			ka_r: {
				ja: "ふち(右)",
				en: "Right Rim",
				cn: "边缘（右）",
				tw: "邊緣（右）",
				ko: "가장자리 (오른쪽)"
			}
		},
		gamepadLayout: {
			name: {
				ja: "そうさタイプ設定",
				en: "Gamepad Layout",
				cn: "操作类型设定",
				tw: "操作類型設定",
				ko: "조작 타입 설정"
			},
			a: {
				ja: "タイプA",
				en: "Type A",
				cn: "类型A",
				tw: "類型 A",
				ko: "타입 A"
			},
			b: {
				ja: "タイプB",
				en: "Type B",
				cn: "类型B",
				tw: "類型 B",
				ko: "타입 B"
			},
			c: {
				ja: "タイプC",
				en: "Type C",
				cn: "类型C",
				tw: "類型 C",
				ko: "타입 C"
			}
		},
		latency: {
			name: {
				ja: "レイテンシー",
				en: "Latency",
				cn: "延迟校准",
				tw: "延遲校準",
				ko: "레이턴시"
			},
			value: {
				ja: "オーディオ: %s, ビデオ: %s",
				en: "Audio: %s, Video: %s",
				cn: "音频: %s, 视频: %s",
				tw: "聲音: %s, 畫面: %s",
				ko: "오디오: %s, 비디오: %s"
			},
			calibration: {
				ja: "レイテンシー較正",
				en: "Latency Calibration",
				cn: "自动辅助校准",
				tw: "自動延遲校正",
				ko: "레이턴시 조절"
			},
			audio: {
				ja: "オーディオ",
				en: "Audio",
				cn: "音频",
				tw: "聲音",
				ko: "오디오"
			},
			video: {
				ja: "ビデオ",
				en: "Video",
				cn: "视频",
				tw: "畫面",
				ko: "비디오"
			},
			drumSounds: {
				ja: "太鼓の音",
				en: "Drum Sounds",
				cn: "鼓声",
				tw: "鼓聲",
				ko: "북 소리"
			}
		},
		easierBigNotes: {
			name: {
				ja: "大音符サポート",
				en: "Big Note Support",
				cn: "大音符辅助",
				tw: "大音符輔助",
				ko: "큰 음표 지원"
			}
		},
		showLyrics: {
			name: {
				ja: "歌詞の表示",
				en: "Show Lyrics",
				cn: "显示歌词",
				tw: "顯示歌詞",
				ko: "가사 표시하기"
			}
		},
		showBpm: {
            name: {
                ja: "BPMの表示",
                en: "Show BPM",
                cn: "BPM 显示",
                tw: "BPM 顯示",
                ko: "BPM 표시"
            }
        },
		showHs: {
			name: {
				ja: "HSの表示",
                en: "Show HS",
                cn: "HS 显示",
                tw: "HS 顯示",
                ko: "HS 표시"
			}
		},
		on: {
			ja: "オン",
			en: "On",
			cn: "开",
			tw: "開",
			ko: "켜짐"
		},
		off: {
			ja: "オフ",
			en: "Off",
			cn: "关",
			tw: "關",
			ko: "꺼짐"
		},
		default: {
			ja: "既定値にリセット",
			en: "Reset to Defaults",
			cn: "重置为默认值",
			tw: "重置為預設值",
			ko: "기본값으로 재설정"
		},
		ok: {
			ja: "OK",
			en: "OK",
			cn: "确定",
			tw: "確定",
			ko: "확인"
		}
	},
	calibration: {
		title: {
			ja: "レイテンシー・タイミング調整",
			en: "Latency Calibration",
			cn: "延迟与时机调整",
			tw: "延遲校正",
			ko: "레이턴시 조절"
		},
		ms: {
			en: "%sms",
		},
		back: {
			ja: "「ゲーム設定」に戻る",
			en: "Back to Settings",
			cn: "返回游戏设置",
			tw: "返回設定",
			ko: "설정으로 돌아가기"
		},
		retryPrevious: {
			ja: "前回のリトライ",
			en: "Retry Previous",
			cn: "重试上一次",
			tw: "重試",
			ko: "재시도"
		},
		start: {
			ja: "スタート",
			en: "Start",
			cn: "开始",
			tw: "開始",
			ko: "시작"
		},
		finish: {
			ja: "終了する",
			en: "Finish",
			cn: "完成",
			tw: "完成",
			ko: "완료"
		},
		audioHelp: {
			title: {
				ja: "オーディオ・レイテンシー・タイミング調整",
				en: "Audio Latency Calibration",
				cn: "音频时机调整",
				tw: "聲音延遲校正",
				ko: "오디오 레이턴시 조절"
				
			},
			content: {
				ja: "音が聞こえたら、太鼓の面（%sまたは%s）をたたこう！",
				en: "Hit the surface of the drum (%s or %s) as you hear it!",
				cn: "听到声音时，敲击鼓面（%s 或 %s）来确认时机。",
				tw: "聽到音效就敲打鼓面 (%s 或 %s)！",
				ko: "소리가 들리면 북(%s 나 %s)을 쳐주세요!"
			},
			contentAlt: {
				ja: "音が聞こえたら、太鼓の面をたたこう！",
				en: "Hit the surface of the drum as you hear it!",
				cn: "听到时敲击鼓面。",
				tw: "聽到音效就敲打鼓面！",
				ko: "소리가 들리면 북을 쳐주세요!"
			}
		},
		audioComplete: {
			ja: "音声タイミング調整完了！",
			en: "Audio Latency Calibration completed!",
			cn: "音频时机调整完成！",
			tw: "聲音延遲校正完成！",
			ko: "오디오 레이턴시 조절 완료!"
		},
		videoHelp: {
			title: {
				ja: "ビデオタイミング調整",
				en: "Video Latency Calibration",
				cn: "视频时机调整",
				tw: "畫面延遲校正",
				ko: "비디오 레이턴시 조절"
			},
			content: {
				ja: "今回は音が出ません。\n\n代わりに、丸い枠の中で音符が点滅しているのを見て、音符が現れたら太鼓をたたこう！",
				en: "This time there will be no sounds.\n\nInstead, watch for notes blinking on the circle-shaped frame, hit the drum as they appear!",
				cn: "这次不会有声音。\n\n请观察圆形框中闪烁的音符，音符出现时敲击鼓面来确认时机。",
				tw: "這次不會有音效。\n\n請注意正在閃爍音符的圓形框框，當音符出現時就敲打鼓面！",
				ko: "이번에는 소리가 나오지 않습니다.\n\n대신 원 안에서 깜빡이는 음표에 맞춰 북을 쳐주세요!"
			}
		},
		videoComplete: {
			ja: "ビデオタイミング調整完了！",
			en: "Video Latency Calibration completed!",
			cn: "视频时机调整完成！",
			tw: "畫面延遲校正完成！",
			ko: "비디오 레이턴시 조절 완료!"
		},
		results: {
			title: {
				ja: "タイミング調整結果",
				en: "Latency Calibration Results",
				cn: "时机调整结果",
				tw: "延遲校正結果",
				ko: "레이턴시 조절 결과"
			},
			content: {
				ja: "オーディオレイテンシー: %s\nビデオレイテンシ: %s\n\nこれらのレイテンシーの値は、設定で設定することができます。",
				en: "Audio latency: %s\nVideo latency: %s\n\nYou can configure these latency values in the settings.",
				cn: "音频延迟: %s\n视频延迟: %s\n\n这些数值可以在设置中调整。",
				tw: "聲音延遲 :%s\n畫面延遲: %s\n\n您可以在設定中調整這些數值。",
				ko: "오디오 레이턴시: %s\n비디오 레이턴시: %s\n\n설정에서 레이턴시 값들을 조절할 수 있습니다."
			}
		}
	},
	account: {
		username: {
			ja: "ユーザー名",
			en: "Username",
			cn: "登录名",
			tw: "使用者名稱",
			ko: "사용자 이름"
		},
		enterUsername: {
			ja: "ユーザー名を入力",
			en: "Enter Username",
			cn: "输入用户名",
			tw: "輸入用戶名",
			ko: "사용자 이름을 입력하십시오"
		},
		password: {
			ja: "パスワード",
			en: "Password",
			cn: "密码",
			tw: "密碼",
			ko: "비밀번호"
		},
		enterPassword: {
			ja: "パスワードを入力",
			en: "Enter Password",
			cn: "输入密码",
			tw: "輸入密碼",
			ko: "비밀번호 입력"
		},
		repeatPassword: {
			ja: "パスワードを再入力",
			en: "Repeat Password",
			cn: "重新输入密码",
			tw: "再次輸入密碼",
			ko: "비밀번호 재입력"
		},
		remember: {
			ja: "ログイン状態を保持する",
			en: "Remember me",
			cn: "记住登录",
			tw: "記住我",
			ko: "자동 로그인"
		},
		login: {
			ja: "ログイン",
			en: "Log In",
			cn: "登录",
			tw: "登入",
			ko: "로그인"
		},
		register: {
			ja: "登録",
			en: "Register",
			cn: "注册",
			tw: "註冊",
			ko: "가입하기"
		},
		privacy: {
			ja: "プライバシー",
			en: "Privacy",
			cn: "隐私权",
			tw: "隱私權",
			ko: "개인정보처리방침"
		},
		registerAccount: {
			ja: "アカウントを登録",
			en: "Register account",
			cn: "注册帐号",
			tw: "註冊帳號",
			ko: "계정 등록"
		},
		passwordsDoNotMatch: {
			ja: "パスワードが一致しません",
			en: "Passwords do not match",
			cn: "密码不匹配",
			tw: "密碼不符合",
			ko: "비밀번호가 일치하지 않습니다"
		},
		newPasswordsDoNotMatch: {
			ja: "新しいパスワードが一致しない",
			en: "New passwords do not match",
			tw: "新密碼不符合",
			ko: "새 비밀번호가 일치하지 않습니다"
		},
		cannotBeEmpty: {
			ja: "%sは空にできません",
			en: "%s cannot be empty",
			cn: "%s不能为空",
			tw: "%s不能為空",
			ko: "%s는 비어 있을 수 없습니다"
		},
		error: {
			ja: "リクエストの処理中にエラーが発生しました",
			en: "An error occurred while processing your request",
			cn: "处理您的请求时发生错误",
			tw: "處理您的請求時發生錯誤",
			ko: "요청을 처리하는 동안 오류가 발생했습니다"
		},
		logout: {
			ja: "ログアウト",
			en: "Log Out",
			cn: "登出",
			tw: "登出",
			ko: "로그아웃"
		},
		back: {
			ja: "もどる",
			en: "Back",
			cn: "返回",
			tw: "返回",
			ko: "돌아가기"
		},
		cancel: {
			ja: "キャンセル",
			en: "Cancel",
			cn: "取消",
			tw: "取消",
			ko: "취소"
		},
		save: {
			ja: "保存する",
			en: "Save",
			cn: "保存",
			tw: "儲存",
			ko: "저장"
		},
		displayName: {
			ja: "表示名",
			en: "Displayed Name",
			cn: "显示名",
			tw: "顯示名稱",
			ko: "닉네임"
		},
		customdon: {
			bodyFill: {
				ja: "どう",
				en: "Body",
				cn: "身体",
				tw: "身體",
				ko: "몸"
			},
			faceFill: {
				ja: "かお",
				en: "Face",
				cn: "脸",
				tw: "臉",
				ko: "얼굴"
			},
			reset: {
				ja: "リセット",
				en: "Reset",
				cn: "重置",
				tw: "重設",
				ko: "초기화"
			}
		},
		customrank: {
			rankName: {
				ja: "称号名",
				en: "Title Name",
				ch: "职称名称",
				tw: "職銜名稱",
				ko: "칭호 이름"
			},
			rankColor: {
				ja: "称号の色",
				en: "Title Name",
				ch: "标题颜色",
				tw: "標題的顏色",
				ko: "칭호 색상"
			},
			no_rank: {
				ja: "ドンだーデビュー！",
				en: "Donda Debut!",
				cn: "咚咚出道！",
				tw: "咚咚出道！",
				ko: "동더 데뷔!"
			},
			p2: {
				ja: "2Pプレイヤー",
				en: "2P Player",
				cn: "2P 玩家",
				tw: "2P 玩家",
				ko: "2P 플레이어"
			},
			autoPlaying: {
				ja: "オートプレイ",
				en: "AutoPlay",
				cn: "自动播放",
				tw: "自動播放",
				ko: "자동 재생"
			},
		},
		changePassword: {
			ja: "パスワードの変更",
			en: "Change Password",
			cn: "更改密码",
			tw: "更改密碼",
			ko: "비밀번호 변경"
		},
		currentNewRepeat: {
			ja: [
				"現在のパスワード",
				"新しいパスワード",
				"新しいパスワードをもう一度入力"
			],
			en: [
				"Current Password",
				"New Password",
				"Repeat New Password"
			],
			cn: [
				"当前密码",
				"新密码",
				"重复新密码"
			],
			tw: [
				"目前密碼",
				"新密碼",
				"重複新密碼"
			],
			ko: [
				"현재 비밀번호",
				"새 비밀번호",
				"새 비밀번호 재입력"
			],
		},
		deleteAccount: {
			ja: "アカウント削除",
			en: "Delete Account",
			cn: "删除账号",
			tw: "刪除帳號",
			ko: "계정 삭제"
		},
		verifyPassword: {
			ja: "パスワードの確認",
			en: "Verify password to delete this account",
			cn: "请确认您的密码以删除账号",
			tw: "請確認您的密碼以刪除帳號",
			ko: "계정을 삭제하기 위해 비밀번호를 인증해주세요"
		}
	},
	serverError: {
		not_logged_in: {
			ja: "ログインしていません",
			en: "Not logged in",
			cn: "未登录",
			tw: "未登入",
			ko: "로그인되지 않음"
		},
		invalid_username: {
			ja: "ユーザー名が無効です。ユーザー名には、文字、数字、アンダースコアのみを使用でき、3文字以上20文字以下である必要があります。",
			en: "Invalid username, a username can only contain letters, numbers, and underscores, and must be between 3 and 20 characters long",
			cn: "用户名无效，用户名只能包含字母、数字和下划线，长度必须在3到20个字符之间",
			tw: "使用者名稱無效，使用者名稱只能由字母、數字、及底線組成，且長度必須介於 3 到 20 個字之間",
			ko: "유효하지 않은 아이디. 아이디에는 글자, 숫자, 밑줄만 들어갈 수 있으며, 길이는 3자와 20자 사이여야 합니다."
		},
		username_in_use: {
			ja: "その名前のユーザーがすでに存在します",
			en: "A user already exists with that username",
			cn: "已有该用户名的用户存在",
			tw: "已有一位相同名稱的使用者",
			ko: "해당 아이디는 이미 다른 계정에서 사용하고 있습니다."
		},
		invalid_password: {
			ja: "このパスワードは使用できません。パスワードの長さが6文字以上であることを確認してください",
			en: "Cannot use this password, please check that your password is at least 6 characters long",
			cn: "无法使用此密码，请确保密码长度至少为6个字符",
			tw: "無法使用此密碼，密碼長度至少要 6 個字。",
			ko: "해당 비밀번호를 사용할 수 없습니다. 비밀번호가 6자 이상인지 확인하시기 바랍니다."
		},
		invalid_username_password: {
			ja: "ユーザー名またはパスワードが無効です",
			en: "Invalid Username or Password",
			cn: "用户名或密码无效",
			tw: "無效的使用者名稱或密碼",
			ko: "잘못된 아이디 혹은 비밀번호"
		},
		invalid_display_name: {
			ja: "この名前は使用できません。新しい名前が25文字以下であることを確認してください",
			en: "Cannot use this name, please check that your new name is at most 25 characters long",
			cn: "无法使用此名称，请确保新名称不超过25个字符",
			tw: "無法使用此名稱。名稱最多不能超過 25 個字。",
			ko: "해당 닉네임을 사용할 수 없습니다. 닉네임의 길이가 25자 미만인지 확인하시기 바랍니다."
		},
		invalid_don: {
			ja: "マイどんを保存できませんでした",
			en: "Could not save your custom Don",
			cn: "无法保存自定义咚",
			tw: "無法儲存小咚",
			ko: "커스텀 동이를 저장할 수 없습니다"
		},
		current_password_invalid: {
			ja: "現在のパスワードが一致しません",
			en: "Current password does not match",
			cn: "当前密码不匹配",
			tw: "目前密碼不符合",
			ko: "기존 비밀번호가 틀립니다."
		},
		invalid_new_password: {
			ja: "このパスワードは使用できません。新しいパスワードが6文字以上であることを確認してください",
			en: "Cannot use this password, please check that your new password is at least 6 characters long",
			cn: "无法使用此密码，请确保新密码长度至少为6个字符",
			tw: "無法使用此密碼，您的新密碼長度至少要 6 個字",
			ko: "해당 비밀번호를 사용할 수 없습니다. 비밀번호가 6자 이상인지 확인해주시기 바랍니다."
		},
		verify_password_invalid: {
			ja: "確認用パスワードが一致しません",
			en: "Verification password does not match",
			cn: "确认密码不匹配",
			tw: "確認密碼不符合",
			ko: "비밀번호가 일치하지 않습니다."
		},
		invalid_csrf: {
			ja: "セキュリティトークンの期限が切れました。ページを更新してください。",
			en: "Security token expired. Please refresh the page.",
			cn: "安全令牌已过期，请刷新页面",
			tw: "安全權杖過期。請重新載入頁面。",
			ko: "보안 토큰이 만료되었습니다. 페이지를 새로고침해주세요."
		}
	},
	browserSupport: {
		browserWarning: {
			ja: "サポートされていないブラウザを使用しています (%s)",
			en: "You are running an unsupported browser (%s)",
			cn: "您正在使用不受支持的浏览器 (%s)",
			tw: "您正在使用不支援的瀏覽器 (%s)",
			ko: "호환되지 않는 브라우저입니다. (%s)"
		},
		details: {
			ja: "詳細を見る",
			en: "Details...",
			cn: "查看详情",
			tw: "詳細資料",
			ko: "세부 사항"
		},
		failedTests: {
			ja: "以下のテストに失敗しました：",
			en: "The following tests have failed:",
			cn: "以下测试未通过：",
			tw: "以下的測試未通過：",
			ko: "다음 테스트에서 실패했습니다:"
		},
		supportedBrowser: {
			ja: "%sなどのサポートされているブラウザを使用してください",
			en: "Please use a supported browser such as %s",
			cn: "请使用受支持的浏览器，例如：%s",
			tw: "請使用支援的瀏覽器，例如：%s",
			ko: "%s 등의 호환되는 브라우저를 사용해주시기 바랍니다"
		}
	},
	creative: {
		creative: {
			ja: "創作譜面",
			en: "Creative",
			cn: "创作",
			tw: "創作",
			ko: "창작"
		},
		maker: {
			ja: "メーカー",
			en: "Maker:",
			cn: "制作者",
			tw: "製作者",
			ko: "제작자:"
		}
	},
	withLyrics: {
		ja: "歌詞あり",
		en: "With lyrics",
		cn: "带歌词",
		tw: "帶歌詞",
		ko: "가사 포함됨"
	},
	customSongs: {
		title: {
			ja: "カスタム曲リスト",
			en: "Custom Song List",
			cn: "自定义歌曲列表",
			tw: "自定義歌曲列表",
			ko: "커스텀 노래 목록"
		},
		default: {
			ja: "デフォルト曲リスト",
			en: "Default Song List",
			cn: "默认歌曲列表",
			tw: "預設歌曲列表",
			ko: "기본 노래 목록"
		},
		description: {
			ja: [
				"TJA形式の譜面ファイルが入ったフォルダを選んで、カスタム曲リストで演奏しよう!"
			],
			en: [
				"Pick a folder with Taiko chart files in TJA format to play on a custom song list!"
			],
			cn: [
				"请选择一个含有太鼓谱面文件（TJA格式）的文件夹，以用于在自定义歌单中游玩。"
			],
			tw: [
				"請選擇包含太鼓譜面檔案 (TJA格式) 的資料夾，即可在自訂歌單中遊玩。"
			],
			ko: [
				"TJA 확장자로 되어 있는 채보가 포함되어 있는 폴더를 골라 커스텀 곡을 플레이하세요!"
			]
		},
		localFolder: {
			ja: "ローカルフォルダ...",
			en: "Local Folder...",
			cn: "本地文件夹...",
			tw: "本機資料夾...",
			ko: "로컬 폴더..."
		},
		gdriveFolder: {
			ja: "Google ドライブ...",
			en: "Google Drive...",
			cn: "Google云端硬盘...",
			tw: "Google 雲端硬碟...",
			ko: "구글 드라이브..."
		},
		gdriveAccount: {
			ja: "アカウントの切り替え",
			en: "Switch Accounts",
			cn: "切换帐户",
			tw: "切換帳戶",
			ko: "계정 전환"
		},
		dropzone: {
			ja: "ここにファイルをドロップ",
			en: "Drop files here",
			cn: "将文件拖至此处",
			tw: "將文件拖至此處",
			ko: "파일을 여기에 드롭하세요"
		},
		importError: {
			ja: "インポートエラー",
			en: "Import Error",
			cn: "导入错误",
			tw: "匯入失敗",
			ko: "불러오기 오류"
		},
		noSongs: {
			ja: "提供されたフォルダーに譜面ファイルは見つかりませんでした。",
			en: "No Taiko chart files have been found in the provided folder.",
			cn: "在提供的文件夹中未找到TJA谱面文件。",
			tw: "在你選擇的資料夾中找不到譜面檔案。",
			ko: "해당 폴더에서 채보 파일을 찾을 수 없습니다."
		}
	},
	gpicker: {
		locale: {
			ja: "ja",
			en: "en-GB",
			cn: "zh-CN",
			tw: "zh-TW",
			ko: "ko"
		},
		myDrive: {
			ja: "マイドライブ",
			en: "My Drive",
			cn: "我的云端硬盘",
			tw: "我的雲端硬碟",
			ko: "내 드라이브"
		},
		starred: {
			ja: "スター付き",
			en: "Starred",
			cn: "已加星标",
			tw: "已加星號",
			ko: "중요 문서함"
		},
		sharedWithMe: {
			ja: "共有アイテム",
			en: "Shared with me",
			cn: "与我共享",
			tw: "與我共用",
			ko: "공유 문서함"
		},
		authError: {
			ja: "認証エラー: %s",
			en: "Auth error: %s",
			cn: "认证错误: %s",
			tw: "驗證錯誤：%s",
			ko: "인증 오류: %s"
		},
		cookieError: {
			ja: "この機能には、サードパーティのcookieが必要です。",
			en: "This function requires third party cookies.",
			cn: "此功能需要第三方 Cookie。",
			tw: "此功能需要第三方 cookies。",
			ko: "이 기능은 제3자 쿠키가 허용되어야 합니다."
		}
	},
	plugins: {
		title: {
			ja: "プラグイン",
			en: "Plugins",
			cn: "插件",
			tw: "外掛",
			ko: "플러그인"
		},
		unloadAll: {
			ja: "すべて無効にする",
			en: "Unload All",
			cn: "全部卸载",
			tw: "全部停用",
			ko: "모두 해제"
		},
		warning: {
			ja: "%sを読み込もうとしています。プラグインは信頼できる場合のみ読み込むようにしてください。続行しますか？",
			en: "You are about to load %s. Plugins should only be loaded if you trust them. Continue?",
			cn: "您即将加载 %s。请仅在信任插件时加载。是否继续？",
			tw: "您即將載入 %s。請僅在信任插件的情況下載入。是否繼續？",
			ko: "%s을 로드하려고 합니다. 신뢰할 수 있는 플러그인만 로드하시기 바랍니다. 계속할까요?"
		},
		plugin: {
			ja: {
				one: "%sつのプラグイン",
				other: "%sつのプラグイン"
			},
			en: {
				one: "%s plugin",
				other: "%s plugins"
			},
			cn: {

				one: "%s 个插件",
				other: "%s 个插件"
			},
			tw: {
				one: "%s 個外掛",
				other: "%s 個外掛"
			},
			ko: {
				one: "%s 플러그인",
				other: "%s 플러그인들"
			}
		},
		author: {
			ja: "作成者：%s",
			en: "By %s",
			cn: "作者：%s",
			tw: "作者：%s",
			ko: "제작자:%s"
		},
		version: {
			ja: "Ver. %s",
			en: "Version %s",
			cn: "版本 %s",
			tw: "版本 %s",
			ko: "버전 %s"
		},
		browse: {
			ja: "参照する…",
			en: "Browse...",
			cn: "浏览…",
			tw: "開啟檔案…",
			ko: "찾아보기…"
		},
		noPlugins: {
			ja: "プラグインファイル(.taikoweb.js)が見つかりません",
			en: "No .taikoweb.js plugin files have been found in the provided file list.",
			cn: "在提供的文件列表中未找到任何 .taikoweb.js 插件文件。",
			tw: "在提供的檔案清單中未找到任何 .taikoweb.js 外掛檔案。",
			ko: "주어진 파일 리스트에서 .taikoweb.js 플러그인 파일들을 발견할 수 없습니다."
		}
	},
	search: {
		search: {
			ja: "曲を検索",
			en: "Search Songs",
			cn: "搜索曲目",
			tw: "搜尋曲目",
			ko: "노래 검색"
		},
		searchInput: {
			ja: "曲を検索...",
			en: "Search for songs...",
			cn: "搜索曲目...",
			tw: "搜尋曲目...",
			ko: "곡 검색..."
		},
		noResults: {
			ja: "見つかりませんでした。",
			en: "No results found.",
			cn: "未找到结果。",
			tw: "找不到結果。",
			ko: "결과 없음"
		},
		tip: {
			ja: "ヒント：",
			en: "Tip:",
			cn: "提示：",
			tw: "提示：",
			ko: "팁:"
		},
		tips: {
			ja: [
				"CTRL+Fで検索窓を開く!",
				"検索フィルタの組み合わせは自由自在！",
				"キーワードでジャンルを絞り込めます！(例: 「genre:variety」, 「genre:namco」)",
				"「oni:10」などのフィルターを使用して、特定の難易度の曲を検索してね！",
				"難易度フィルタはレベル範囲もサポートしています！ 「ura:1-5」 のように検索してね！",
				"フルコンボしている曲を見るには 「gold:any」 や, 「gold:oni」 のように検索してね！",
				"創作譜面だけを見たい場合は 「creative:yes」 をしてみてね！",
				"歌詞がある曲だけを見たい場合は 「lyrics:yes」 で検索してね！",
				" 「played:no」 を使うことでまだプレイしていない曲だけを表示できるよ！",
				"誰かの創作譜面を探してる？ 「maker:その人の名前」 で表示できるよ！"
			],
			en: [
				"Open the search window by pressing CTRL+F!",
				"Mix and match as many search filters as you want!",
				"Filter by genre by using the \"genre:\" keyword! (e.g. \"genre:variety\", \"genre:namco\")",
				"Use filters like \"oni:10\" to search for songs with a particular difficulty!",
				"Difficulty filters support ranges, too! Try \"ura:1-5\"!",
				"Want to see your full combos? Try \"gold:any\", \"gold:oni\", etc.!",
				"Only want to see creative songs? Use the \"creative:yes\" filter!",
				"Find songs with lyrics enabled with the \"lyrics:yes\" filter!",
				"Feel like trying something new? Use the \"played:no\" filter to only see songs you haven't played yet!",
				"Looking for creative courses from a specific creator? Use the \"maker:<name>\" filter!"
			],
			cn: [
				"按 CTRL+F 打开搜索窗口！",
				"搜索过滤器可以自由组合！",
				"使用 \"genre:\" 关键词按类别筛选！(例如: \"genre:variety\", \"genre:namco\")",
				"使用像 \"oni:10\" 的过滤器查找特定难度的曲目！",
				"难度过滤器支持范围！试试 \"ura:1-5\"！",
				"想查看全连曲目吗？试试 \"gold:any\"、\"gold:oni\" 等！",
				"只想看创作曲？使用 \"creative:yes\" 过滤器！",
				"用 \"lyrics:yes\" 过滤器查找有歌词的曲目！",
				"想尝试未玩过的曲目吗？用 \"played:no\" 只显示未玩的曲目！",
				"想找特定创作者的创作曲？使用 \"maker:<名字>\" 过滤器！"
			],
			tw: [
				"按 CTRL+F 開啟搜尋視窗！",
				"搜尋篩選器可以自由組合！",
				"使用 \"genre:\" 關鍵字篩選曲風！(例如: \"genre:variety\", \"genre:namco\")",
				"使用像 \"oni:10\" 的篩選器搜尋特定難度的曲目！",
				"難度篩選器也支援範圍！試試 \"ura:1-5\"！",
				"想查看全連曲目嗎？試試 \"gold:any\"、\"gold:oni\" 等！",
				"只想看創作曲？使用 \"creative:yes\" 篩選器！",
				"用 \"lyrics:yes\" 篩選器找有歌詞的曲目！",
				"想嘗試未玩過的曲目嗎？用 \"played:no\" 只顯示未玩的曲目！",
				"想找特定創作者的創作曲？使用 \"maker:<名字>\" 篩選器！"
			],
			ko: [
				"CTRL+F를 눌러 검색 창을 여세요!",
				"자유롭게 필터를 조합해 검색하세요!",
				"\"genre:\" 키워드로 원하는 장르의 곡만 찾아보세요! (예시: \"genre:variety\", \"genre:namco\")",
				"\"oni:10\" 같은 키워드로 원하는 난이도를 가진 곡을 찾아보세요!",
				"\"ura:1-5\" 같은 키워드로 여러 난이도를 선택할 수 있어요!",
				"풀 콤보한 곡을 찾아보고 싶나요? \"gold:any\", \"gold:oni\" 등의 키워드로 검색할 수 있습니다!",
				"창작 채보 곡들을 검색하고 싶나요? \"creative:yes\" 키워드를 사용하세요!",
				"\"lyrics:yes\" 키워드로 가사가 있는 곡들을 선택할 수 있어요!",
				"새로운 곡들을 플레이해보고 싶나요? \"played:no\" 키워드로 아직 플레이하지 않은 곡들만을 볼 수 있어요!",
				"특정 창작자가 만든 채보를 검색하고 싶으신가요? \"maker:<창작자 이름>\" 키워드를 사용하세요!"
			]
		}
	}
}
var allStrings = {}
function separateStrings(){
	for(var j in languageList){
		var lang = languageList[j]
		allStrings[lang] = {
			id: lang
		}
		var str = allStrings[lang]
		var translateObj = function(obj, name, str){
			if("en" in obj){
				for(var i in obj){
					str[name] = obj[lang] || obj.en
				}
			}else if(obj){
				str[name] = {}
				for(var i in obj){
					translateObj(obj[i], i, str[name])
				}
			}
		}
		for(var i in translations){
			translateObj(translations[i], i, str)
		}
	}
}
separateStrings()
