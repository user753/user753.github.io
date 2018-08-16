webpackJsonpNewGames([19],{

/***/ 139:
/*!************************************************!*\
  !*** ./src/games/mnemonics/soundstory/meta.ts ***!
  \************************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets__ = __webpack_require__(/*! ./assets */ 188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(/*! ./levels */ 264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic__ = __webpack_require__(/*! ./logic */ 265);




var gameId = "soundstory";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_2__levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 1, maxLevel: 100 }]
};
var metaData = {
    gameId: gameId,
    title: "Soundstory",
    logic: __WEBPACK_IMPORTED_MODULE_3__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_0__assets__["a" /* Images */].data,
    sounds: __WEBPACK_IMPORTED_MODULE_0__assets__["b" /* Sounds */].keys,
    atlasCount: 2,
    tutorialTaskCount: 1,
    size: {
        width: 2048,
        height: 1280,
        heightMin: 1152
    }
};


/***/ }),

/***/ 157:
/*!***************************************************************!*\
  !*** ./src/core/ui/components/games/baseMainGameComponent.ts ***!
  \***************************************************************/
/*! exports provided: durations, BaseMainGameComponent */
/*! exports used: BaseMainGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export durations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseMainGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets__ = __webpack_require__(/*! core/assets */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_assets_assetUtl__ = __webpack_require__(/*! core/assets/assetUtl */ 35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_logic_sys__ = __webpack_require__(/*! core/logic/sys */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_services__ = __webpack_require__(/*! core/services */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_answers_answerControlType__ = __webpack_require__(/*! core/ui/components/answers/answerControlType */ 65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dev__ = __webpack_require__(/*! dev */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_mobx__ = __webpack_require__(/*! mobx */ 10);











var bgLeftKey = "bg_left";
var introInterval = 2000;
var introDelay = 300;
var durations = {
    introAnimationDelay: 100,
    introInterval: introInterval,
    introDelay: introDelay
};
var BaseMainGameComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](BaseMainGameComponent, _super);
    function BaseMainGameComponent(context) {
        var _this = _super.call(this, context) || this;
        _this.statusOptions = {
            offset: 0,
            waitCompleteBeforeNewTask: false,
        };
        _this.introOptions = {
            disableSound: false,
            runOnNewTaskAfter: false
        };
        _this.answersControl = __WEBPACK_IMPORTED_MODULE_6_core_ui_components_answers_answerControlType__["a" /* AnswerControlType */].None;
        context.uiService.rootComponent = _this;
        context.gameState = _this.initialState();
        _this.fixedToCamera = true;
        _this.onDestroy.addOnce(function () {
            _this.context.uiService.mainComponent.onNewTask.dispose();
            _this.context.uiService.mainComponent.onAnswer.dispose();
            __WEBPACK_IMPORTED_MODULE_4_core_services__["d" /* audioService */].stopAll();
        });
        _this.onChangeForRun(function (x) { return __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["e" /* screenSizeService */].screenSize; }, function (x) {
            _this.cameraOffset.y = __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["e" /* screenSizeService */].topOffset;
        });
        return _this;
    }
    BaseMainGameComponent.prototype.initialState = function () {
        return {};
    };
    Object.defineProperty(BaseMainGameComponent.prototype, "cameraBottom", {
        get: function () {
            var bottom = __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["e" /* screenSizeService */].height - this.cameraOffset.y;
            return bottom;
        },
        enumerable: true,
        configurable: true
    });
    BaseMainGameComponent.prototype.prepareDefaultIntroAnimation = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = durations.introDelay; }
        var bgLeftOffset = 0;
        var bgLeft = undefined;
        if (!__WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["e" /* screenSizeService */].isPortrait && __WEBPACK_IMPORTED_MODULE_2_core_assets_assetUtl__["a" /* AssetUtl */].checkImageKey(this.gameKey(bgLeftKey))) {
            bgLeft = this.addImage([bgLeftKey, [0, 0]]);
            var width = -bgLeft.width + 2;
            bgLeft.x = width;
            bgLeftOffset = -width;
        }
        this.cameraOffset.x = -__WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["e" /* screenSizeService */].realLeftOffset + bgLeftOffset;
        var tween = this.game.add.tween(this.cameraOffset).to({ x: 0 }, durations.introInterval, Phaser.Easing.Cubic.InOut, false, delay);
        if (bgLeft) {
            tween.onComplete.addOnce(function () { return _this.remove(bgLeft, true); });
        }
        return tween;
    };
    BaseMainGameComponent.prototype.introAnimation = function () {
        var tween = this.prepareDefaultIntroAnimation();
        return tween;
    };
    BaseMainGameComponent.prototype.startIntro = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_3_core_logic_sys__["a" /* Sys */].devMode && !__WEBPACK_IMPORTED_MODULE_9_dev__["a" /* Dev */].devModeIntro) {
            this.context.uiService.mainComponent.onIntroComplete.dispatch();
            return __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_signals__["a" /* Signals */].memorize();
        }
        if (!this.introOptions.disableSound) {
            this.playSound(__WEBPACK_IMPORTED_MODULE_1_core_assets__["e" /* CoreSounds */].intro, false, true);
        }
        var tween = this.introAnimation();
        var signal = __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_signals__["a" /* Signals */].bind(this.delay(durations.introAnimationDelay), function () {
            tween.start();
            return tween.onComplete;
        });
        signal.addOnce(function () { return _this.context.uiService.mainComponent.onIntroComplete.dispatch(); });
        this.disableInputOn(signal);
        return signal;
    };
    BaseMainGameComponent.prototype.onAfterInit = function () {
        this.initTaskRendering();
    };
    BaseMainGameComponent.prototype.initTaskRendering = function () {
        var _this = this;
        this.onChangeFor(function () { return _this.gameState.lastAnswer; }, function (x) {
            _this.context.uiService.mainComponent.onAnswer.dispatch(x);
        });
        this.onChangeFor(function () { return _this.context.gameService.gameCycleService.state.levelTask.task; }, function (x) {
            if (_this.statusOptions.waitCompleteBeforeNewTask) {
                _this.disableInputOn(_this.context.uiService.answerStatus.onAnimationComplete).addOnce(function () {
                    _this.callRenderNewTask(x);
                });
            }
            else {
                _this.callRenderNewTask(x);
            }
        });
        this.callRenderNewTask(this.context.gameService.gameCycleService.state.levelTask.task);
    };
    BaseMainGameComponent.prototype.callRenderNewTask = function (task) {
        var _this = this;
        if (this.introOptions.runOnNewTaskAfter && this.isFirstTask) {
            this.context.uiService.mainComponent.onIntroComplete.addOnce(function () {
                _this.context.uiService.mainComponent.onNewTask.dispatch(Object(__WEBPACK_IMPORTED_MODULE_10_mobx__["f" /* toJS */])(task));
            });
        }
        else {
            this.context.uiService.mainComponent.onNewTask.dispatch(Object(__WEBPACK_IMPORTED_MODULE_10_mobx__["f" /* toJS */])(task));
        }
    };
    BaseMainGameComponent.prototype.playBackgroundLoop = function () {
        var _this = this;
        this.context.uiService.mainComponent.onIntroComplete.addOnce(function () { return _this.playSound("bg", true); });
    };
    return BaseMainGameComponent;
}(__WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 188:
/*!**************************************************!*\
  !*** ./src/games/mnemonics/soundstory/assets.ts ***!
  \**************************************************/
/*! exports provided: Sounds, texts, Translations, Images */
/*! exports used: Images, Sounds, Translations, texts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Sounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return texts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Translations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images; });
var Sounds;
(function (Sounds) {
    // export const sound = (id: number) => "sound_" + id;
    Sounds.sound_0 = "sound_0";
    Sounds.sound_1 = "sound_1";
    Sounds.sound_2 = "sound_2";
    Sounds.keys = [Sounds.sound_0, Sounds.sound_1, Sounds.sound_2];
    Sounds.item = function (id) { return "item_" + id; };
})(Sounds || (Sounds = {}));
var texts = [
    {
        audio: 'sound_0',
        answers: ['маленький домик', 'пароход', 'гуляющие люди', 'Волга', 'Часы на пристани'],
        wrongAnswers: ['фонарь', 'собака', 'поезд', 'катер', 'скамья']
    },
    {
        audio: 'sound_1',
        answers: ['ветер', 'фонарь', 'лошадь'],
        wrongAnswers: ['пароход', 'маленький домик', 'волк']
    },
    {
        audio: 'sound_2',
        answers: ['собака', 'воздушный змей', 'волейбол'],
        wrongAnswers: ['овощи', 'попугай', 'пароход']
    }
];
var Translations;
(function (Translations) {
    Translations.ready = 'ready';
})(Translations || (Translations = {}));
var Images;
(function (Images) {
    Images.bg = "bg";
    Images.data = {
        sprites: []
    };
})(Images || (Images = {}));


/***/ }),

/***/ 262:
/*!********************************************************************!*\
  !*** ./src/games/mnemonics/soundstory/components/mainComponent.ts ***!
  \********************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets__ = __webpack_require__(/*! ../assets */ 188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionComponent__ = __webpack_require__(/*! ./questionComponent */ 263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_mnemonics_soundstory_assets__ = __webpack_require__(/*! games/mnemonics/soundstory/assets */ 188);







var durations = {};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
            question: { x: 750, y: 600 },
            readyBtn: [900, 1000]
        });
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_4__assets__["a" /* Images */].bg);
        _this.question = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_5__questionComponent__["a" /* QuestionComponent */])).setPos(_this.positions.question);
        _this.readyBtn = _this.add(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__["a" /* Btn */](_this.translate(__WEBPACK_IMPORTED_MODULE_6_games_mnemonics_soundstory_assets__["c" /* Translations */].ready), function () {
            _this.readyBtn.visible = false;
            _this.question.onReady();
        })).setPos(_this.positions.readyBtn);
        return _this;
    }
    MainComponent.prototype.onInit = function () {
        this.startIntro();
    };
    MainComponent.prototype.onNewTask = function (task) {
        this.readyBtn.visible = true;
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 263:
/*!************************************************************************!*\
  !*** ./src/games/mnemonics/soundstory/components/questionComponent.ts ***!
  \************************************************************************/
/*! exports provided: QuestionComponent */
/*! exports used: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_controls__ = __webpack_require__(/*! core/ui/controls */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils__ = __webpack_require__(/*! core/utils */ 9);






var QuestionComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](QuestionComponent, _super);
    function QuestionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_5_core_utils__["e" /* RandomGenerator */]();
        _this.positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
            margin: { x: 100 },
        });
        return _this;
    }
    QuestionComponent.prototype.onAnswer = function (answer) {
    };
    QuestionComponent.prototype.createAnswers = function () {
        var _this = this;
        var allAnswers = this.allAnswers.map(function (answer) {
            return _this.answersGroup.add(_this.addAnswerBehavior(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__["a" /* Btn */](answer, function () { }), answer, { dark: true, location: "top" }));
        });
        this.answersGroup.visible = false;
        __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.rng.derangement(allAnswers), 3, this.positions.margin);
        this.answersAreReady();
    };
    QuestionComponent.prototype.showAnswers = function () {
        this.disableInput(false);
        this.answersGroup.visible = true;
    };
    QuestionComponent.prototype.onReady = function () {
        var _this = this;
        this.createAnswers();
        this.playSound(this.audio).addOnce(function () { return _this.showAnswers(); });
    };
    QuestionComponent.prototype.onNewTask = function (task) {
        this.removeAll(true);
        this.disableInput(true);
        this.audio = task.audio;
        this.answers = task.answers;
        this.allAnswers = task.allAnswers;
        this.answersGroup = this.add(new __WEBPACK_IMPORTED_MODULE_2_core_ui_controls__["b" /* Control */]());
    };
    return QuestionComponent;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 264:
/*!**************************************************!*\
  !*** ./src/games/mnemonics/soundstory/levels.ts ***!
  \**************************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);

function level(answers, wrongAnswers, isSeq) {
    return { answers: answers, wrongAnswers: wrongAnswers, isSeq: isSeq };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])([
    level(1, 2, false),
    level(1, 3, false),
    level(2, 2, false),
    level(3, 1, false),
    level(2, 3, false),
    level(3, 2, false),
    level(4, 1, false),
    level(3, 2, true),
    level(2, 4, true),
    level(3, 3, true),
    level(4, 2, true),
    level(3, 4, true),
    level(4, 3, true),
    level(3, 5, true),
    level(4, 4, true),
    level(5, 3, true)
]);


/***/ }),

/***/ 265:
/*!*************************************************!*\
  !*** ./src/games/mnemonics/soundstory/logic.ts ***!
  \*************************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_mnemonics_soundstory_assets__ = __webpack_require__(/*! games/mnemonics/soundstory/assets */ 188);




var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_2_core_utils__["e" /* RandomGenerator */]();
        return _this;
    }
    Logic.prototype.createTask = function (text, level) {
        var rightAnswersArr = this.rng.takeRandomSeq(text.answers, level.answers), audio = text.audio;
        var answers, allAnswers;
        if (level.isSeq) {
            answers = { seq: rightAnswersArr };
            allAnswers = answers.seq.concat(this.rng.take(text.wrongAnswers, level.wrongAnswers));
        }
        else {
            answers = rightAnswersArr;
            allAnswers = answers.concat(this.rng.take(text.wrongAnswers, level.wrongAnswers));
        }
        return { audio: audio, answers: answers, allAnswers: allAnswers };
    };
    Logic.prototype.nextTask = function (level) {
        var _this = this;
        var tasks = this.rng.shuffle(__WEBPACK_IMPORTED_MODULE_3_games_mnemonics_soundstory_assets__["d" /* texts */]).map(function (text) { return _this.createTask(text, level); });
        return this.rng.sample(tasks);
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ })

});
//# sourceMappingURL=19.bundle.js.map