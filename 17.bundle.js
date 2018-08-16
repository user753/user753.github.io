webpackJsonpNewGames([17],{

/***/ 149:
/*!************************************************!*\
  !*** ./src/games/speedread/findletter/meta.ts ***!
  \************************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets__ = __webpack_require__(/*! ./assets */ 202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(/*! ./levels */ 221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic__ = __webpack_require__(/*! ./logic */ 220);




var gameId = "findletter";
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
    title: "findletter",
    logic: __WEBPACK_IMPORTED_MODULE_3__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_0__assets__["b" /* Images */].data,
    sounds: __WEBPACK_IMPORTED_MODULE_0__assets__["c" /* Sounds */].keys,
    atlasCount: 5,
    tutorialTaskCount: "manual",
    size: {
        width: 2048,
        height: 1280,
        heightMin: 1152
    }
};


/***/ }),

/***/ 154:
/*!*********************************************!*\
  !*** ./src/core/ui/controls/GraphicsImg.ts ***!
  \*********************************************/
/*! exports provided: GraphicsImg, BtnDefaultImg */
/*! exports used: BtnDefaultImg, GraphicsImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GraphicsImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnDefaultImg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);




var GraphicsImg = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](GraphicsImg, _super);
    function GraphicsImg(draw) {
        var _this = _super.call(this) || this;
        _this.draw = draw;
        _this.img = _this.add(__WEBPACK_IMPORTED_MODULE_3_core_ui_services_instances__["b" /* phaserService */].drawSprite(draw));
        return _this;
    }
    GraphicsImg.prototype.updateGraphics = function () {
        if (this.game) {
            var graphics = this.game.make.graphics(0, 0);
            this.draw(graphics);
            this.img.loadTexture(graphics.generateTexture());
            graphics.destroy(true);
        }
    };
    return GraphicsImg;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_controls_control__["a" /* Control */]));

var BtnDefaultImg = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](BtnDefaultImg, _super);
    function BtnDefaultImg(props) {
        var _this = this;
        var size = props.size || __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({ width: 500, height: 100 });
        _this = _super.call(this, function (g) {
            g.beginFill(props.color);
            g.drawRoundedRect(0, 0, size.width, size.height, size.height / 2);
        }) || this;
        return _this;
    }
    return BtnDefaultImg;
}(GraphicsImg));



/***/ }),

/***/ 155:
/*!***************************************************************!*\
  !*** ./src/core/ui/components/games/gameUI/panelComponent.ts ***!
  \***************************************************************/
/*! exports provided: PanelComponent */
/*! exports used: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_component__ = __webpack_require__(/*! core/ui/components/component */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_GraphicsImg__ = __webpack_require__(/*! core/ui/controls/GraphicsImg */ 154);




var PanelComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](PanelComponent, _super);
    // private control: NinePatchComponent
    function PanelComponent() {
        var _this = _super.call(this) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
            radius: 20,
        });
        // this.control = this.add(new NinePatchComponent(CoreImages.panelList))
        _this.control = _this.add(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_GraphicsImg__["b" /* GraphicsImg */](function (g) {
            if (_this.props) {
                g.beginFill(_this.props.color, _this.props.alpha || 0.4);
                g.drawRoundedRect(0, 0, _this.props.size.width, _this.props.size.height, _this.positions.radius);
                g.endFill();
            }
        }));
        return _this;
    }
    PanelComponent.prototype.update = function () {
    };
    PanelComponent.prototype.onPropsUpdate = function () {
        this.control.updateGraphics();
        // this.control.setSize(this.props.size)
    };
    return PanelComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_component__["a" /* Component */]));



/***/ }),

/***/ 156:
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

/***/ 159:
/*!****************************************************************!*\
  !*** ./src/core/ui/controls/behaviors/textOnCenterBehavior.ts ***!
  \****************************************************************/
/*! exports provided: TextOnCenterBehavior */
/*! exports used: TextOnCenterBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextOnCenterBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_controls_behaviors_behavior__ = __webpack_require__(/*! core/ui/controls/behaviors/behavior */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 62);





var TextOnCenterBehavior = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TextOnCenterBehavior, _super);
    function TextOnCenterBehavior(font, margin) {
        var _this = _super.call(this) || this;
        _this.font = font;
        _this.margin = margin;
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
            margin: 30,
        });
        _this.maxWidth = 0;
        _this.margin = _this.margin || _this.positions.margin;
        return _this;
    }
    TextOnCenterBehavior.prototype.onInit = function () {
        this.text = __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_controlUtl__["a" /* ControlUtl */].addOnCenter(this.control, new __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_txt__["a" /* Txt */]("    ", this.font));
        this.text.textControl.wordWrap = true;
    };
    TextOnCenterBehavior.prototype.refreshSize = function () {
        this.text.visible = false;
        this.maxWidth = this.control.width - 2 * this.margin;
        this.text.textControl.wordWrapWidth = this.maxWidth * 1.5;
        this.text.setPos(this.control.center());
        this.text.visible = true;
        __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_controlUtl__["a" /* ControlUtl */].scaleToFit(this.text, this.maxWidth);
        this.text.updatePivot();
    };
    TextOnCenterBehavior.prototype.setText = function (txt) {
        this.text.text = txt;
        this.refreshSize();
    };
    return TextOnCenterBehavior;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_controls_behaviors_behavior__["a" /* Behavior */]));



/***/ }),

/***/ 161:
/*!*******************************************************************!*\
  !*** ./src/core/ui/components/games/gameUI/textPanelComponent.ts ***!
  \*******************************************************************/
/*! exports provided: TextPanelComponent */
/*! exports used: TextPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_index__ = __webpack_require__(/*! core/assets/index */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_component__ = __webpack_require__(/*! core/ui/components/component */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameUI_panelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/panelComponent */ 155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_textOnCenterBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/textOnCenterBehavior */ 159);






var TextPanelComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TextPanelComponent, _super);
    function TextPanelComponent(props) {
        var _this = _super.call(this) || this;
        _this.positions = function () { return __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            marginTop: 30,
            textMarginX: 40,
            padding: 60
        }); };
        _this.background = _this.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameUI_panelComponent__["a" /* PanelComponent */]());
        _this.background.setProps(props);
        _this.textBehavior = new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_textOnCenterBehavior__["a" /* TextOnCenterBehavior */](__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, (props.font || __WEBPACK_IMPORTED_MODULE_1_core_assets_index__["c" /* CoreFonts */].tutorial(false)), { wordWrap: false }));
        _this.background.addBehavior(_this.textBehavior);
        return _this;
    }
    TextPanelComponent.prototype.changePanel = function (props) {
        this.background.setProps(props);
        this.textBehavior.refreshSize();
        this.updatePivot();
    };
    TextPanelComponent.prototype.onPropsUpdate = function () {
        this.textBehavior.setText(this.props);
    };
    return TextPanelComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_component__["a" /* Component */]));



/***/ }),

/***/ 202:
/*!**************************************************!*\
  !*** ./src/games/speedread/findletter/assets.ts ***!
  \**************************************************/
/*! exports provided: Sounds, Fonts, Images */
/*! exports used: Fonts, Images, Sounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Sounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);

var Sounds;
(function (Sounds) {
    Sounds.bg = "bg";
    Sounds.paper = "paper";
    Sounds.keys = [Sounds.bg, Sounds.paper];
})(Sounds || (Sounds = {}));
var Fonts;
(function (Fonts) {
    Fonts.letter = function (sizeIndex, isRed, bold) { return ({
        fontSize: sizeIndex,
        font: bold ? __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratBold : __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratLight,
        fill: isRed ? __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].red : __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black,
        align: "center",
        wordWrap: true
    }); };
})(Fonts || (Fonts = {}));
var Images;
(function (Images) {
    Images.bg = "bg";
    Images.arm = "arm";
    Images.book = "book";
    Images.correct = "correct";
    Images.book_open = "book_open";
    Images.list = function (index) { return "list_" + index; };
    Images.page = "page";
    Images.paper = "paper";
    Images.intro = "intro";
    Images.data = {
        sprites: []
    };
})(Images || (Images = {}));


/***/ }),

/***/ 220:
/*!*************************************************!*\
  !*** ./src/games/speedread/findletter/logic.ts ***!
  \*************************************************/
/*! exports provided: getAllSymbols, Logic */
/*! exports used: Logic, getAllSymbols */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getAllSymbols;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_logic_sys__ = __webpack_require__(/*! core/logic/sys */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__levels__ = __webpack_require__(/*! ./levels */ 221);







var allLetters = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");
// const allLetters = "щщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщщ".split("")
// const allLetters = "ууууууууууууууууууууууууууууууууу".split("")
// const allLetters = "ббббббббббббббббббббббббббббббббб".split("")
// const allLetters = "ффффффффффффффффффффффффффффффффф".split("")
var allNumbers = __WEBPACK_IMPORTED_MODULE_5_lodash__["range"](100).map(function (x) { return (x + 1).toString(); });
// const allNumbers = _.range(100).map(x => "34")
function getAllSymbols(isNumber) {
    return isNumber ? allNumbers : allLetters;
}
function newSymbol(letter, isRed) {
    var id = letter + "_" + (isRed ? "red" : "black");
    return { id: id, letter: letter, isRed: isRed };
}
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_3_core_utils__["e" /* RandomGenerator */]();
        return _this;
    }
    Logic.prototype.createLetters = function (isNumber, count, isRed) {
        var symbols = getAllSymbols(isNumber);
        return __WEBPACK_IMPORTED_MODULE_5_lodash__["take"](symbols, count).map(function (x) { return newSymbol(x, isRed); });
    };
    Logic.prototype.createTaskSymbols = function (level) {
        var withColor = level.modification.color;
        var isNumber = level.isNumber;
        var maxCount = level.smallCount ? 30 : 48;
        if (withColor) {
            var count = maxCount / 2;
            var parts = [
                this.createLetters(isNumber, count, false),
                this.createLetters(isNumber, count, true)
            ];
            return __WEBPACK_IMPORTED_MODULE_5_lodash__["flatMap"](__WEBPACK_IMPORTED_MODULE_3_core_utils__["a" /* Arrays */].zip(parts[0], parts[1]), function (x) { return x; });
        }
        return this.createLetters(isNumber, maxCount, false);
    };
    Logic.prototype.createAnswers = function (modification, symbols) {
        if (modification.onlyOne) {
            var answer = this.rng.sample(symbols);
            return [answer];
        }
        if (modification.odd && modification.color) {
            return __WEBPACK_IMPORTED_MODULE_5_lodash__["flatten"](__WEBPACK_IMPORTED_MODULE_5_lodash__["chunk"](symbols, 2).filter(function (x, i) { return __WEBPACK_IMPORTED_MODULE_4_core_utils_numbers__["a" /* Numbers */].odd(i); }));
        }
        if (modification.odd) {
            return symbols.filter(function (x, i) { return __WEBPACK_IMPORTED_MODULE_4_core_utils_numbers__["a" /* Numbers */].odd(i); });
        }
        if (modification.reverse) {
            return __WEBPACK_IMPORTED_MODULE_5_lodash__["reverse"](symbols);
        }
        return symbols;
    };
    Logic.prototype.nextTask = function (lvl) {
        if (this.isTutorial && this.taskIndex >= __WEBPACK_IMPORTED_MODULE_6__levels__["b" /* tutorialLevels */].length) {
            return undefined;
        }
        var level = this.isTutorial ? __WEBPACK_IMPORTED_MODULE_6__levels__["b" /* tutorialLevels */][this.taskIndex] : lvl;
        var modification = level.modification;
        var taskSymbols = this.createTaskSymbols(level);
        var letters = this.rng.shuffle(taskSymbols);
        var answerSymbols = this.createAnswers(modification, taskSymbols);
        var answers = { seq: answerSymbols.map(function (x) { return x.id; }) };
        var oneSymbol = modification.onlyOne ? answerSymbols[0].letter : undefined;
        var isNumber = level.isNumber;
        var task = {
            isNumber: isNumber,
            letters: letters,
            oneSymbol: oneSymbol,
            modification: modification,
            answers: answers
        };
        if (__WEBPACK_IMPORTED_MODULE_2_core_logic_sys__["a" /* Sys */].showLog) {
            console.log("task", task);
        }
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ }),

/***/ 221:
/*!**************************************************!*\
  !*** ./src/games/speedread/findletter/levels.ts ***!
  \**************************************************/
/*! exports provided: levels, tutorialLevels */
/*! exports used: levels, tutorialLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tutorialLevels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


function level(smallCount, modification) {
    var types = modification.odd ? [true] : [true, false];
    return types.map(function (isNumber) { return ({ smallCount: smallCount && isNumber, isNumber: isNumber, modification: modification }); });
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])(__WEBPACK_IMPORTED_MODULE_1_lodash__["flatten"]([
    level(true, {}),
    level(true, { odd: true }),
    level(true, { onlyOne: true }),
    level(false, { odd: true }),
    level(false, { onlyOne: true }),
    level(false, { color: true }),
    level(false, { color: true, odd: true }),
    level(false, { reverse: true }),
]));
var tutorialLevels = level(true, { onlyOne: true });


/***/ }),

/***/ 344:
/*!********************************************************************!*\
  !*** ./src/games/speedread/findletter/components/mainComponent.ts ***!
  \********************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameUI_textPanelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/textPanelComponent */ 161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_speedread_findletter_assets__ = __webpack_require__(/*! games/speedread/findletter/assets */ 202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_speedread_findletter_components_introComponent__ = __webpack_require__(/*! games/speedread/findletter/components/introComponent */ 345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_speedread_findletter_components_questionComponent__ = __webpack_require__(/*! games/speedread/findletter/components/questionComponent */ 346);









var durations = {
    introHideDelay: 300
};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            taskDescSize: { width: 800, height: 120 }
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].bi({
            taskDesc: { x: 1020, y: 195 },
            question: { x: 1020, y: 720 }
        }, {
            taskDesc: { x: 1020, y: 125 },
            question: { x: 1020, y: 720 }
        });
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_6_games_speedread_findletter_assets__["b" /* Images */].bg);
        _this.question = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_8_games_speedread_findletter_components_questionComponent__["a" /* QuestionComponent */])).anchorCenter().setBiPos(_this.biPositions.question);
        return _this;
    }
    MainComponent.prototype.onInit = function () {
        var _this = this;
        this.context.uiService.answerStatus.hidePartial = true;
        this.statusOptions.waitCompleteBeforeNewTask = true;
        this.startIntro();
        this.taskDesc = this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameUI_textPanelComponent__["a" /* TextPanelComponent */]({
            size: this.positions.taskDescSize
        }))
            .anchorCenter()
            .setBiPos(this.biPositions.taskDesc);
        this.taskDesc.visible = false;
        this.onIntroCompleteOrMemorize.addOnce(function () {
            _this.taskDesc.visible = true;
        });
    };
    MainComponent.prototype.introAnimation = function () {
        var intro = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_7_games_speedread_findletter_components_introComponent__["a" /* IntroComponent */]));
        var tween = intro.playTween();
        // tween.onComplete.addOnce(() => {
        //   intro.destroy()
        // })
        return {
            start: function () {
                // this.playSound("bg", true)
                tween.start();
            },
            // onComplete: tween.onComplete,
            onComplete: __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__["a" /* Signals */].bind(tween.onComplete, function () {
                var signal = __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].show(intro, false, undefined, durations.introHideDelay).onComplete;
                signal.addOnce(function () {
                    intro.destroy();
                });
                return signal;
            })
        };
    };
    MainComponent.prototype.onNewTask = function (task) {
        var isNumber = task.isNumber ? "_number" : "_letter";
        var odd = task.modification.odd ? "_odd" : "";
        var color = task.modification.color ? "_color" : "";
        var onlyOne = task.modification.onlyOne ? "_onlyone" : "";
        var reverse = task.modification.reverse ? "_reverse" : "";
        this.taskDesc.setProps(this.translate('task' + isNumber + odd + color + reverse + onlyOne)
            + (task.oneSymbol ? " " + task.oneSymbol : ""));
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 345:
/*!*********************************************************************!*\
  !*** ./src/games/speedread/findletter/components/introComponent.ts ***!
  \*********************************************************************/
/*! exports provided: IntroComponent */
/*! exports used: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);




var durations = {
    arm: 1000
};
var IntroComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](IntroComponent, _super);
    function IntroComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            from: { x: 1155, y: 418 },
            to: { x: 1155, y: 860 }
        });
        _this.intro = _this.addImage("intro");
        _this.arm = _this.addImage("arm");
        return _this;
    }
    IntroComponent.prototype.onInit = function () {
    };
    IntroComponent.prototype.playTween = function () {
        this.arm.setPos(this.positions.from);
        return __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.arm,
            delay: 300,
            to: this.positions.to,
            duration: durations.arm,
            onComplete: function () {
            }
        });
    };
    return IntroComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 346:
/*!************************************************************************!*\
  !*** ./src/games/speedread/findletter/components/questionComponent.ts ***!
  \************************************************************************/
/*! exports provided: QuestionComponent */
/*! exports used: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls__ = __webpack_require__(/*! core/ui/controls */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_utils_randomGenerator__ = __webpack_require__(/*! core/utils/randomGenerator */ 64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_speedread_findletter_assets__ = __webpack_require__(/*! games/speedread/findletter/assets */ 202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_speedread_findletter_logic__ = __webpack_require__(/*! games/speedread/findletter/logic */ 220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash__);













var durations = {
    turn: 2500,
    hover: 200,
    correctPartial: 500,
    correct: 900
};
var biValues = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_positions__["a" /* BiValue */].create({
    data: {
        angle: 0,
        scale: 1
    }
}, {
    data: {
        angle: 90,
        scale: 0.75
    }
});
var QuestionComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](QuestionComponent, _super);
    function QuestionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
            // paper: {
            //   x: 20,
            //   y: 20
            // },
            list: {
                x: 88,
                y: 86
            },
            book: {
                x: 0,
                y: 0
            },
            fields: [
                [
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(300, 360, "312"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(950, 630, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(700, 300, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(460, 220, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(680, 680, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(250, 220, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(680, 120, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1250, 120, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1220, 410, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(270, 720, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(100, 90, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(150, 600, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1280, 290, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(960, 170, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(980, 300, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(700, 560, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(940, 420, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1050, 480, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(520, 120, "100"),
                    // tuple(220, 380, "100"), // 39
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(120, 430, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(550, 720, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1180, 760, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1260, 610, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(840, 120, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(260, 100, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(600, 830, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1100, 350, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1180, 350, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1280, 720, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1000, 120, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(860, 230, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1100, 140, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(390, 170, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1230, 250, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(960, 270, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1140, 440, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(820, 560, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(840, 470, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1170, 640, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1200, 700, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(720, 500, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(160, 750, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(380, 320, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(720, 240, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(450, 750, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(160, 280, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1330, 390, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1330, 580, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(410, 820, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(100, 550, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(90, 360, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(460, 90, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(630, 90, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(800, 90, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1165, 275, "40"),
                ],
                [
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(280, 370, "312"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(500, 100, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(670, 500, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(980, 310, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(980, 520, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(150, 320, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(940, 100, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(820, 350, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(90, 550, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1260, 350, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(120, 120, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(150, 730, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(280, 760, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(480, 700, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(650, 750, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1100, 700, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1230, 740, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(360, 230, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(710, 100, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(850, 190, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1180, 460, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1230, 570, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1140, 100, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1240, 180, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(680, 320, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(880, 760, "100"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(280, 150, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(260, 220, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(500, 300, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(220, 510, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(590, 350, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(760, 450, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1280, 130, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1150, 230, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(990, 280, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1200, 320, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(590, 800, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(880, 650, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(780, 710, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(800, 810, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(940, 720, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1020, 800, "50"),
                    // tuple(1030, 750, "50"), // 50
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(740, 270, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(850, 80, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(410, 160, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(380, 710, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(270, 360, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(115, 265, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(340, 100, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(100, 465, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1330, 680, "40"),
                    // tuple(850, 480, "40"), // 39
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1100, 85, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1340, 270, "40"),
                ],
                [
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(440, 115, "312"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(200, 500, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(100, 200, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(980, 200, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1080, 420, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(450, 800, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(900, 680, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(860, 430, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(800, 520, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1220, 220, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(100, 640, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(110, 740, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(250, 780, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(450, 600, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(600, 730, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(800, 740, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1080, 760, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1220, 760, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1180, 630, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1280, 560, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1250, 370, "70"),
                    // tuple(1080, 320, "70"), // 36
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1200, 120, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(830, 130, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(350, 130, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(390, 400, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(840, 330, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(630, 530, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(950, 550, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(200, 100, "50"),
                    // tuple(120, 230, "50"), // 2
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(280, 390, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(150, 500, "50"),
                    // tuple(190, 660, "50"), // 5
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(650, 620, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(370, 320, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(350, 230, "50"),
                    // tuple(430, 270, "50"), // 15
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(490, 500, "50"),
                    // tuple(730, 470, "50"), // 27
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(750, 620, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(910, 260, "50"),
                    // tuple(870, 480, "50"), // 31
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(780, 450, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(110, 160, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(110, 445, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(345, 820, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(750, 810, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(960, 820, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1025, 830, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1340, 715, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1140, 715, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1320, 250, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1140, 110, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(930, 100, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(740, 90, "40"),
                ],
                [
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(500, 500, "312"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(140, 120, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(420, 340, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(850, 120, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1160, 230, "163"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(150, 330, "83"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1050, 470, "83"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(710, 320, "83"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1010, 320, "83"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(120, 450, "83"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(190, 550, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(220, 770, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(400, 700, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(360, 520, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(650, 250, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(920, 410, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1000, 600, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1150, 670, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1220, 780, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1230, 550, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1090, 180, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(510, 190, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(950, 770, "70"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(380, 180, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(300, 370, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(100, 600, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(250, 690, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(150, 720, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(350, 640, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(590, 100, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(760, 180, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1150, 430, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1180, 110, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1280, 150, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1290, 450, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1180, 500, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1060, 700, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(840, 420, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(880, 800, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(920, 520, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(950, 700, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(330, 280, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1120, 800, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(450, 120, "50"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(100, 670, "40"),
                    // tuple(410, 830, "40"), // 45
                    // tuple(810, 830, "40"), // 46
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1335, 660, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(1330, 730, "40"),
                    Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(730, 90, "40"),
                ]
            ]
        });
        _this.letterLists = [0, 1];
        _this.numberLists = [2, 3];
        _this.rng = new __WEBPACK_IMPORTED_MODULE_8_core_utils_randomGenerator__["a" /* RandomGenerator */]();
        _this.group = _this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls__["b" /* Control */]());
        _this.buttons = [];
        return _this;
        // generateDots(context: any) { // какой тип?
        //   const size = this.positions.size,
        //     width = size.width,
        //     height = size.height;
        //     // buffer = 1, // отступ между границами
        //     // maxDistance = 1 - buffer;
        //
        //   const sides = [
        //     tuple(
        //       {x: [0, width]},
        //       {y: 0}
        //     ),
        //     tuple(
        //       {y: [0, height]},
        //       {x: width}
        //     ),
        //     tuple(
        //       {x: [0, width]},
        //       {y: height}
        //     ),
        //     tuple(
        //       {y: [0, height]},
        //       {x: 0}
        //     )
        //   ];
        //
        //   const sidesDots = _.flatMap(sides, ([x, y]) => {
        //     return this.createSideDots(x, y, 4)
        //   })
        //
        //   const lineCount = 6,
        //     stepHeight = height/(lineCount + 1),
        //     stepWidth = width/(lineCount + 1);
        //
        //   // console.log('stepHeight', 0, stepHeight, stepHeight*2, stepHeight*3, stepHeight*4, stepHeight*5, height);
        //   // console.log('stepWidth', 0, stepWidth, stepWidth*2, stepWidth*3, stepWidth*4, stepWidth*5, width);
        //
        //   const lines = [
        //     tuple(
        //       {x: stepWidth},
        //       {y: stepHeight}
        //     ),
        //     tuple(
        //       {x: stepWidth * 2},
        //       {y: stepHeight * 2}
        //     ),
        //     tuple(
        //       {x: stepWidth * 3},
        //       {y: stepHeight * 3}
        //     ),
        //     tuple(
        //       {x: stepWidth * 4},
        //       {y: stepHeight * 4}
        //     ),
        //     tuple(
        //       {x: stepWidth * 5},
        //       {y: stepHeight * 5}
        //     ),
        //     tuple(
        //       {x: stepWidth * 6},
        //       {y: stepHeight * 6}
        //     )
        //   ];
        //
        //   const innerDots = _.flatMap(lines, ([x, y], lineIndex) => {
        //     return this.createInnerDots(x, y, 6, lineIndex, width, height)
        //   });
        //
        //   const allDots = [...sidesDots, ...innerDots]
        //
        //   // console.log('alldots:', allDots)
        //   allDots.forEach(dot => {
        //     this.drawDot(context, dot)
        //   });
        //
        //   // setTimeout(() => {
        //     this.drawStructure(context, sidesDots, innerDots)
        //   // }, 0)
        // }
        // createSideDots(dynamicPart:{x?:number[], y?:number[]}, staticPart: {x?:number, y?:number}, maxDotsLength: number) {
        //   const sidesDotsLength = 4 // this.rng.count(maxDotsLength, 2)
        //
        //   return _.range(sidesDotsLength).map(index => {
        //     const dotDynamicPart = Objects.mapValues(dynamicPart,line => {
        //       const lineLength = line![1],
        //         segment = lineLength/(sidesDotsLength + 1); // расстояние между двумя точками
        //
        //       const position = (index + 1) * segment, // позиция каждой точки по очереди
        //         maxDispersion = segment * 0.3, // 0.3 - отклонение на 30% от позиции точки
        //         dispersion = this.rng.floatWithMinus() * maxDispersion; // выбираем в какую сторону будет происходить отклонение
        //
        //       return position + dispersion;
        //     });
        //
        //     return {...dotDynamicPart, ...staticPart}
        //   });
        // }
        //
        // createInnerDots(
        //   dynamicWidthPart:{x:number},
        //   dynamicHeightPart: {y:number},
        //   maxDotsLength: number,
        //   lineIndex: number,
        //   width: number,
        //   height: number
        // ) {
        //   const innerDotsLength = 6 // this.rng.count(maxDotsLength, 2);
        //
        //   return _.range(innerDotsLength).map(index => {
        //     const dotXPart = Objects.mapValues(dynamicWidthPart,line => {
        //       const segment = width/(innerDotsLength + 1); // расстояние между двумя ближайшими горизонтальными точками
        //
        //       const position = (index + 1) * segment, // позиция каждой точки по очереди по оси х
        //         maxDispersion = segment * 0.3, // 0.3 - отклонение на 30% от позиции точки
        //         dispersion = maxDispersion * this.rng.floatWithMinus(); // выбираем в какую сторону будет происходить отклонение
        //
        //       return position + dispersion;
        //     });
        //
        //     const dotYPart = Objects.mapValues(dynamicHeightPart,line => {
        //       const segment = height/(maxDotsLength + 1); // усредненное расстояние между двумя ближайшими линиями
        //
        //       const position = (lineIndex + 1) * segment, // позиция каждой точки по очереди
        //         maxDispersion = segment * 0.3, // 0.3 - отклонение на 30% от позиции точки
        //         dispersion = maxDispersion * this.rng.floatWithMinus(); // выбираем в какую сторону будет происходить отклонение
        //
        //       return position + dispersion;
        //     });
        //
        //     return {...dotXPart, ...dotYPart}
        //   })
        // }
        //
        // drawStructure(context: Phaser.Graphics, sidesDots: any, innerDots: any) {
        //   const structure: any = _.map([...sidesDots, ...innerDots], (dot, index) => {
        //     return {x: dot.x, y: dot.y, id: index, linesWithDots: []}
        //   });
        //
        //   let nearestDot:any = null;
        //   let range = 1200;
        //
        //   _.each(innerDots, innerDot => {
        //     // console.log(findNearestDots(innerDot));
        //
        //     _.each(structure, structureDot => {
        //       const xRange = Math.pow(structureDot.x - innerDot.x, 2),
        //         yRange = Math.pow(structureDot.y - innerDot.y, 2),
        //         distance = Math.sqrt(Math.abs(xRange + yRange)); // высчитываем расстояние между точками
        //
        //       const isDotsTheSame = structureDot.x !== innerDot.x && structureDot.y !== innerDot.y;
        //
        //
        //
        //       if (isDotsTheSame && distance < range) {
        //         range = distance;
        //         nearestDot = structureDot;
        //       }
        //     });
        //
        //     if (nearestDot) {
        //       let dotHasEnoughLines = false;
        //
        //       _.each(structure, dot => {
        //         if (dot === nearestDot) {
        //
        //           if (dot.linesWithDots.length <= 2) {
        //             dot.linesWithDots.push(innerDot);
        //           } else {
        //             dotHasEnoughLines = true;
        //           }
        //         }
        //       })
        //
        //       if (dotHasEnoughLines) {
        //         return;
        //       }
        //
        //       this.drawLine(context, innerDot, nearestDot);
        //
        //       nearestDot = null;
        //       range = 1200;
        //     }
        //   })
        //
        //   function findNearestDots(innerDot: any) {
        //     let nearestDot = null;
        //
        //     _.each(structure, structureDot => {
        //       const xRange = Math.pow(structureDot.x - innerDot.x, 2),
        //         yRange = Math.pow(structureDot.y - innerDot.y, 2),
        //         distance = Math.sqrt(Math.abs(xRange + yRange)); // высчитываем расстояние между точками
        //
        //       const isDotsTheSame = structureDot.x !== innerDot.x && structureDot.y !== innerDot.y;
        //
        //       if (isDotsTheSame && distance < range) {
        //         range = distance;
        //         nearestDot = structureDot;
        //       }
        //     });
        //
        //     console.log(nearestDot)
        //
        //     return nearestDot;
        //   }
        // }
        //
        // drawLine(context: Phaser.Graphics, startLine: any, endLine: any) {
        //   context.moveTo(startLine.x, startLine.y);
        //   context.beginFill(0x000);
        //   context.lineStyle(2, 0x000);
        //   context.lineTo(endLine.x, endLine.y);
        // }
        //
        // drawDot(context: Phaser.Graphics, dot: {x?:number, y?:number}) {
        //   context.beginFill(0x000)
        //   context.lineStyle(0, 0x000)
        //   context.drawCircle(dot.x || 0, dot.y || 0, 10);
        // }
    }
    QuestionComponent.prototype.onInit = function () {
        var _this = this;
        this.onBiValueChange(biValues.data, function (c, v) {
            _this.updateScale(v);
        });
        this.updateScale(this.current(biValues.data));
    };
    QuestionComponent.prototype.updateScale = function (v) {
        this.angle = v.angle;
        this.symmetricScale = v.scale;
        this.buttons.forEach(function (x) {
            x.angle = -v.angle;
        });
    };
    QuestionComponent.prototype.onAnswer = function (answer) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].isCorrect(answer.status)) {
            this.correct.visible = true;
            var delay = answer.status == __WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].CorrectPartial
                ? durations.correctPartial
                : durations.correct;
            this.delay(delay).addOnce(function () { return _this.correct.visible = false; });
        }
        // this.buttons.find(x => x.tag == answer.answerId)!.visible = false
    };
    QuestionComponent.prototype.createNewTask = function (task) {
        var _this = this;
        this.removeAll(true);
        var listIndex = this.rng.sample(task.isNumber ? this.numberLists : this.letterLists);
        this.correct = this.addImage(__WEBPACK_IMPORTED_MODULE_10_games_speedread_findletter_assets__["b" /* Images */].correct)
            .setPos(this.positions.book).fluentUpdate(function (x) { return x.visible = false; });
        this.addImage(__WEBPACK_IMPORTED_MODULE_10_games_speedread_findletter_assets__["b" /* Images */].book)
            .setPos(this.positions.book);
        this.group = this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls__["b" /* Control */]());
        // this.paper = this.addImage(Images.paper)
        //   .setPos(this.positions.paper)
        this.group.add(this.makeImage(__WEBPACK_IMPORTED_MODULE_10_games_speedread_findletter_assets__["b" /* Images */].list(listIndex)))
            .setPos(this.positions.list);
        // this.animationPageTurn() // запускаем анимацию страницы
        var fixedLetters = __WEBPACK_IMPORTED_MODULE_12_lodash__["filter"](this.positions.fields[listIndex], function (letter) {
            return letter[2] !== "50";
        });
        var floatLetters = __WEBPACK_IMPORTED_MODULE_12_lodash__["filter"](this.positions.fields[listIndex], function (letter) {
            return letter[2] === "50";
        });
        // const sortedData = fixedLetters.concat(this.rng.derangement(floatLetters)).slice(0, 48)
        var sortedData = fixedLetters.concat(this.rng.derangement(floatLetters));
        var maxCount = sortedData.length;
        var fillLettersLength = maxCount - task.letters.length;
        var allSymbols = task.isNumber ? Object(__WEBPACK_IMPORTED_MODULE_11_games_speedread_findletter_logic__["b" /* getAllSymbols */])(false) : __WEBPACK_IMPORTED_MODULE_12_lodash__["range"](10).map(function (x) { return x.toString(); });
        var fillLetters = __WEBPACK_IMPORTED_MODULE_12_lodash__["range"](fillLettersLength).map(function () { return _this.rng.sample(allSymbols); })
            .map(function (letter) { return ({ id: "", letter: letter, isRed: false }); });
        // Вставляем буквы
        this.buttons = task.letters.concat(fillLetters).map(function (letter, index) {
            var data = sortedData[index];
            var btn = new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_btn__["a" /* Btn */](letter.letter, function () {
            }, __WEBPACK_IMPORTED_MODULE_10_games_speedread_findletter_assets__["a" /* Fonts */].letter(parseInt(data[2]), letter.isRed, _this.rng.bool())).anchorCenter();
            // btn.showDebug()
            btn.updatePos(data[0] + btn.width / 2, data[1] + btn.height / 2);
            // btn.updatePos(data[0], data[1])
            return _this.addAnswerBehavior(// отвечает за отображение правильных ответов
            _this.group.add(btn), letter.id, {
                dark: true
            })
                .fluentUpdate(function (btn) { return btn.tag = letter; });
        });
        // для создания анимации сначала добавляем картинку, и выставляем ей координаты
        // this.addImage(Images.paper)
        // .setPos(this.positions.page)
        // .anchorCenter()
        // .setPos(this.center())
        this.updatePivot();
        this.answersAreReady();
        __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].show(this.group, true).onComplete.addOnce(function () { return _this.disableInput(false); });
        this.updateScale(this.current(biValues.data));
    };
    QuestionComponent.prototype.onNewTask = function (task) {
        var _this = this;
        this.disableInput(true);
        if (!this.isFirstTask) {
            __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].show(this.group, false).onComplete.addOnce(function () { return _this.createNewTask(task); });
        }
        else {
            this.createNewTask(task);
        }
        this.playSound(__WEBPACK_IMPORTED_MODULE_10_games_speedread_findletter_assets__["c" /* Sounds */].paper);
    };
    return QuestionComponent;
}(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ })

});
//# sourceMappingURL=17.bundle.js.map