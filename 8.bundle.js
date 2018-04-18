webpackJsonpNewGames([8],{

/***/ 134:
/*!*********************************************!*\
  !*** ./src/games/polyglot/wordsort/meta.ts ***!
  \*********************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets__ = __webpack_require__(/*! ./assets */ 179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(/*! ./levels */ 190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic__ = __webpack_require__(/*! ./logic */ 252);




var gameId = "wordsort";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_2__levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 6, maxLevel: 100 }]
};
var metaData = {
    gameId: gameId,
    title: "Word search",
    logic: __WEBPACK_IMPORTED_MODULE_3__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_0__assets__["b" /* Images */].data,
    atlasCount: 6,
    tutorialTaskCount: 3,
    size: {
        width: 2048,
        height: 1280,
        heightMin: 1152
    }
};


/***/ }),

/***/ 138:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_assets_assetUtl__ = __webpack_require__(/*! core/assets/assetUtl */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_logic_sys__ = __webpack_require__(/*! core/logic/sys */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_services__ = __webpack_require__(/*! core/services */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_answers_answerControlType__ = __webpack_require__(/*! core/ui/components/answers/answerControlType */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mobx__ = __webpack_require__(/*! mobx */ 9);










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
        _this.answersControl = __WEBPACK_IMPORTED_MODULE_6_core_ui_components_answers_answerControlType__["a" /* AnswerControlType */].None;
        context.uiService.rootComponent = _this;
        context.gameState = _this.initialState();
        _this.fixedToCamera = true;
        _this.onDestroy.addOnce(function () {
            _this.context.uiService.mainComponent.onNewTask.dispose();
            _this.context.uiService.mainComponent.onAnswer.dispose();
            __WEBPACK_IMPORTED_MODULE_4_core_services__["d" /* audioService */].stopAll();
        });
        _this.onChangeForRun(function (x) { return __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["d" /* screenSizeService */].screenSize; }, function (x) {
            _this.cameraOffset.y = __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["d" /* screenSizeService */].topOffset;
        });
        return _this;
    }
    BaseMainGameComponent.prototype.initialState = function () {
        return {};
    };
    Object.defineProperty(BaseMainGameComponent.prototype, "cameraBottom", {
        get: function () {
            var bottom = __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["d" /* screenSizeService */].height - this.cameraOffset.y;
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
        if (!__WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["d" /* screenSizeService */].isPortrait && __WEBPACK_IMPORTED_MODULE_2_core_assets_assetUtl__["a" /* AssetUtl */].checkImageKey(this.gameKey(bgLeftKey))) {
            bgLeft = this.addImage([bgLeftKey, [0, 0]]);
            var width = -bgLeft.width + 2;
            bgLeft.x = width;
            bgLeftOffset = -width;
        }
        this.cameraOffset.x = -__WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["d" /* screenSizeService */].realLeftOffset + bgLeftOffset;
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
        if (__WEBPACK_IMPORTED_MODULE_3_core_logic_sys__["a" /* Sys */].devMode) {
            this.context.uiService.mainComponent.onIntroComplete.dispatch();
            return __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_signals__["a" /* Signals */].memorize();
        }
        __WEBPACK_IMPORTED_MODULE_4_core_services__["d" /* audioService */].play(__WEBPACK_IMPORTED_MODULE_1_core_assets__["e" /* CoreSounds */].intro);
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
        this.context.uiService.mainComponent.onNewTask.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9_mobx__["f" /* toJS */])(task));
    };
    return BaseMainGameComponent;
}(__WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 139:
/*!********************************************************!*\
  !*** ./src/core/ui/components/games/panelComponent.ts ***!
  \********************************************************/
/*! exports provided: PanelComponent */
/*! exports used: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_component__ = __webpack_require__(/*! core/ui/components/component */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_GraphicsImg__ = __webpack_require__(/*! core/ui/controls/GraphicsImg */ 143);




var positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
    radius: 20,
});
var PanelComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](PanelComponent, _super);
    // private control: NinePatchComponent
    function PanelComponent() {
        var _this = _super.call(this) || this;
        // this.control = this.add(new NinePatchComponent(CoreImages.panelList))
        _this.control = _this.add(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_GraphicsImg__["a" /* GraphicsImg */](function (g) {
            if (_this.props) {
                g.beginFill(_this.props.color, _this.props.alpha || 0.4);
                g.drawRoundedRect(0, 0, _this.props.size.width, _this.props.size.height, positions.radius);
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

/***/ 140:
/*!*************************************!*\
  !*** ./src/core/utils/circleSeq.ts ***!
  \*************************************/
/*! exports provided: CircleSeq, UniqSeq */
/*! exports used: CircleSeq, UniqSeq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UniqSeq; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_utils_randomGenerator__ = __webpack_require__(/*! core/utils/randomGenerator */ 64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var CircleSeq = /** @class */ (function () {
    function CircleSeq(max) {
        this.max = max;
        this.current = 0;
    }
    CircleSeq.prototype.next = function () {
        var v = this.current;
        this.current = (this.current + 1) % this.max;
        return v;
    };
    return CircleSeq;
}());

var UniqSeq = /** @class */ (function () {
    function UniqSeq(max, rng) {
        if (rng === void 0) { rng = new __WEBPACK_IMPORTED_MODULE_0_core_utils_randomGenerator__["a" /* RandomGenerator */](); }
        this.max = max;
        this.rng = rng;
        this.index = 0;
        this.updateList();
    }
    UniqSeq.prototype.checkMax = function (newMax) {
        if (newMax != this.max) {
            this.max = newMax;
            this.updateList();
        }
    };
    UniqSeq.prototype.updateList = function () {
        var newList = this.rng.uniqArray(this.max, this.max);
        if (this.list) {
            var prev = __WEBPACK_IMPORTED_MODULE_1_lodash__["last"](this.list);
            if (prev == newList[0]) {
                newList = __WEBPACK_IMPORTED_MODULE_1_lodash__["tail"](newList);
                newList.push(prev);
            }
        }
        this.list = newList;
    };
    UniqSeq.prototype.updateIndex = function () {
        this.index += 1;
        if (this.index >= this.list.length) {
            this.updateList();
            this.index = 0;
        }
    };
    UniqSeq.prototype.nextArray = function (count) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](count).map(function () { return _this.next(); });
    };
    UniqSeq.prototype.next = function () {
        var v = this.list[this.index];
        this.updateIndex();
        return v;
    };
    UniqSeq.prototype.nextFrom = function (arr) {
        this.checkMax(arr.length);
        return arr[this.next()];
    };
    UniqSeq.prototype.nextSubsetFrom = function (arr, count) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](count).map(function () { return _this.nextFrom(arr); });
    };
    return UniqSeq;
}());



/***/ }),

/***/ 143:
/*!*********************************************!*\
  !*** ./src/core/ui/controls/GraphicsImg.ts ***!
  \*********************************************/
/*! exports provided: GraphicsImg */
/*! exports used: GraphicsImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphicsImg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 59);



var GraphicsImg = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](GraphicsImg, _super);
    function GraphicsImg(draw) {
        var _this = _super.call(this) || this;
        _this.draw = draw;
        var graphics = _this.game.make.graphics(0, 0);
        draw(graphics);
        _this.img = _this.add(__WEBPACK_IMPORTED_MODULE_2_core_ui_controls_controlUtl__["a" /* ControlUtl */].createSprite(graphics));
        return _this;
    }
    GraphicsImg.prototype.updateGraphics = function () {
        var graphics = this.game.make.graphics(0, 0);
        this.draw(graphics);
        this.img.loadTexture(graphics.generateTexture());
        graphics.destroy(true);
    };
    return GraphicsImg;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_controls_control__["a" /* Control */]));



/***/ }),

/***/ 144:
/*!*****************************************************************!*\
  !*** ./src/core/ui/components/games/introAnimationComponent.ts ***!
  \*****************************************************************/
/*! exports provided: IntroAnimationComponent */
/*! exports used: IntroAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroAnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 26);




var positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
    wordMargin: { x: 20, y: 0 }
});
var durations = {
    animation: 1000,
    delay: 700
};
var IntroAnimationComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](IntroAnimationComponent, _super);
    function IntroAnimationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntroAnimationComponent.prototype.onInit = function () {
        this.addImage("bg_intro");
    };
    IntroAnimationComponent.prototype.startAnimation = function (notStart) {
        var _this = this;
        if (notStart === void 0) { notStart = false; }
        return __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this,
            to: { symmetricScale: 3.5, alpha: 0 },
            delay: durations.delay,
            duration: durations.animation,
            notStart: notStart,
            easing: Phaser.Easing.Sinusoidal.InOut,
            onComplete: function () { return _this.destroy(true); }
        });
    };
    IntroAnimationComponent.durations = durations;
    return IntroAnimationComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 146:
/*!************************************************************!*\
  !*** ./src/core/ui/components/games/textPanelComponent.ts ***!
  \************************************************************/
/*! exports provided: TextPanelComponent */
/*! exports used: TextPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets__ = __webpack_require__(/*! core/assets */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_component__ = __webpack_require__(/*! core/ui/components/component */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_panelComponent__ = __webpack_require__(/*! core/ui/components/games/panelComponent */ 139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_textOnCenterBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/textOnCenterBehavior */ 147);






var positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
    marginTop: 30,
    textMarginX: 40,
    padding: 60
});
var TextPanelComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TextPanelComponent, _super);
    function TextPanelComponent(props) {
        var _this = _super.call(this) || this;
        _this.background = _this.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_panelComponent__["a" /* PanelComponent */]());
        _this.background.setProps(props);
        _this.textBehavior = new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_textOnCenterBehavior__["a" /* TextOnCenterBehavior */](__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, (props.font || __WEBPACK_IMPORTED_MODULE_1_core_assets__["c" /* CoreFonts */].tutorial(false)), { wordWrap: false }));
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

/***/ 147:
/*!****************************************************************!*\
  !*** ./src/core/ui/controls/behaviors/textOnCenterBehavior.ts ***!
  \****************************************************************/
/*! exports provided: TextOnCenterBehavior */
/*! exports used: TextOnCenterBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextOnCenterBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_controls_behaviors_behavior__ = __webpack_require__(/*! core/ui/controls/behaviors/behavior */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 63);





var positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
    margin: 30,
});
var TextOnCenterBehavior = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TextOnCenterBehavior, _super);
    function TextOnCenterBehavior(font, margin) {
        if (margin === void 0) { margin = positions.margin; }
        var _this = _super.call(this) || this;
        _this.font = font;
        _this.margin = margin;
        _this.maxWidth = 0;
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

/***/ 179:
/*!***********************************************!*\
  !*** ./src/games/polyglot/wordsort/assets.ts ***!
  \***********************************************/
/*! exports provided: Translations, Fonts, Images */
/*! exports used: Fonts, Images, Translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Translations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic_sys__ = __webpack_require__(/*! core/logic/sys */ 6);


var Translations;
(function (Translations) {
    Translations.task = "task";
    Translations.category = function (id) { return "category" + id; };
})(Translations || (Translations = {}));
var Fonts;
(function (Fonts) {
    Fonts.word = {
        fontSize: 100 * __WEBPACK_IMPORTED_MODULE_1_core_logic_sys__["a" /* Sys */].pixelRatio, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["a" /* CoreColors */].lightBlack, align: "center"
    };
})(Fonts || (Fonts = {}));
var Images;
(function (Images) {
    Images.icon = function (index, right) { return "icon_" + index + "_" + (right ? "right" : "left"); };
    Images.arrow = function (right) { return "arrow_" + (right ? "right" : "left"); };
    Images.folder = function (index) { return "folder_" + index; };
    Images.bg = function (index) { return "bg_" + index; };
    Images.paper = "paper";
    Images.paper_all = "paper_all";
    Images.data = {
        sprites: []
    };
})(Images || (Images = {}));


/***/ }),

/***/ 190:
/*!***********************************************!*\
  !*** ./src/games/polyglot/wordsort/levels.ts ***!
  \***********************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__ = __webpack_require__(/*! games/polyglot/wordsort/words */ 191);


function level(category) {
    return { category: category };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])([
    level([__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Food]),
    level([__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Life]),
    level([__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Positive]),
    level([__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Countable]),
    level([__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Abstract]),
    level([__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Food, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Life]),
    level([__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Positive, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Countable]),
    level([__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Food, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Life, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Positive]),
    level([__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Positive, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Countable, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Abstract]),
    level([__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Food, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Life, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Positive, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Countable]),
    level([__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Life, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Positive, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Countable, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].Category.Abstract]),
    level(__WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordsort_words__["a" /* Words */].allCategories),
]);


/***/ }),

/***/ 191:
/*!**********************************************!*\
  !*** ./src/games/polyglot/wordsort/words.ts ***!
  \**********************************************/
/*! exports provided: Words */
/*! exports used: Words */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Words; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var Words;
(function (Words) {
    var Category;
    (function (Category) {
        Category[Category["Abstract"] = 0] = "Abstract";
        Category[Category["Food"] = 1] = "Food";
        Category[Category["Life"] = 2] = "Life";
        Category[Category["Countable"] = 3] = "Countable";
        Category[Category["Positive"] = 4] = "Positive";
    })(Category = Words.Category || (Words.Category = {}));
    Words.allCategories = [Category.Positive, Category.Life, Category.Abstract, Category.Food, Category.Countable];
    var data = (_a = {},
        _a[Category.Countable] = [
            ["почта", "трафик", "время", "музыка", "выражение", "свобода", "дружба", "помощь", "честность", "юмор", "воображение", "инфляция", "справедливость", "знания", "память", "мир", "прогресс", "реальность", "определение", "тишина", "красота", "мужество", "занятость", "веселье", "интеллект", "бедность", "удовлетворение", "правда", "богатство", "беседа", "трудность", "неприязность", "улучшение", "боль", "успех", "мышление", "одежда", "оборудование", "багаж", "ювелирные", "мусор", "мебель", "украшения", "кофе", "чай", "вода", "молоко", "еда", "хлеб", "сыр", "йогурт", "мясо", "бекон", "говядина", "паста", "сахар", "соль", "крупа", "пшеница", "ячмень", "гречка", "овсянка", "рис", "рожь", "мюсли", "мука", "сливки", "мороженое", "шоколад", "бумага", "шампунь", "мыло", "бензин", "кожа", "шерсть", "золото", "серебро", "сталь", "воздух", "пластик", "резина", "цемент", "грязь", "здоровье", "сон", "смех", "стресс", "здравомыслие", "безумие", "детство", "молодость", "возраст", "баскетбол", "футбол", "бейсбол", "волейбол", "теннис", "гимнастика", "атлетика", "плавание", "регби", "гольф", "шахматы", "шашки", "Язык", "математика", "физика", "химия", "биология", "медицина", "машиностроение", "электроника", "наука", "искусство", "история", "литература", "журналистика", "экономика", "закон", "философия", "политика", "реклама", "бухгалтерия", "грамматика", "фонетика", "энергия", "сила", "свет", "темнота", "электричество", "гравитация", "огонь", "звук", "шум", "пространство", "немецкий", "французский", "испанский", "арабский", "русский", "китайский", "японский", "корейский", "итальянский", "голландский", "английский", "гнев", "беспокойство", "спокойствие", "сострадание", "уверенность", "храбрость", "любопытство", "отчаяние", "разочарование", "сомнение", "энтузиазм", "зависть", "волнение", "прощение", "страх", "счастье", "ненависть", "ревность", "доброта", "радость", "любовь", "удача", "терпение", "удовольствие", "печаль ", "гордость", "чувствительность", "искренность", "горе", "симпатия", "терпимость", "доверие", "неуверенность", "дождь", "гром", "молния", "влажность", "снег", "иней", "град", "гололед", "роса", "тепло", "сияние", "лед", "барахло", "зола", "деньги", "краска", "инерция", "кроссовки", "перчатки", "гантели", "коньки", "клей", "пластилин", "картон", "гуашь", "палитра", "обувь", "абордаж", "абсолют", "абстиненция", "абстракция", "абсурд", "абсурдность", "авансирование", "авантюризм", "аварийность", "август", "аврал", "автономия", "авторство", "агитация", "агнозия", "агония", "аграфия", "агрегация", "агрессия", "адаптация", "адвокатство", "азарт", "азот", "акварель", "акклиматизация", "аккомодация", "аккредитация", "акмеизм", "акробатика", "активация", "актуализация", "алалия", "алгебра", "алгоритм", "алиби", "аллергия", "альпинизм", "альтернатива", "альтруизм", "альянс", "амфиболия", "анабиоз", "анализ", "аналогия", "анархизм", "анклав", "бриз", "базар", "бакалея", "балаган", "банальность", "баритон", "барщина", "бас", "баталия", "бег", "беготня", "беда", "давление", "давность", "даль", "данность", "движение", "дебют", "девиация", "пафос", "зрение", "лавина", "ревность", "розыгрыш", "серенада", "год", "время", "случай", "власть", "голос", "развитие", "процесс", "любовь", "путь", "вечер", "мысль", "внимание", "разговор", "чувство", "наука", "культура", "служба", "судьба", "искусство", "воздух", "характер", "свобода", "успех", "счастье", "сознание", "радость", "детство", "скорость", "энергия", "существование", "рождение", "красота", "тень", "стиль", "гроза", "снегопад", "буря", "ливень", "пурга", "вьюга", "смерч", "затмение", "лавина", "человек", "отношение", "земля"
            ], ["абажур", "абонемент", "авоська", "автобус", "автокран", "автопортрет", "авторучка", "агат", "адуляр", "акваланг", "аквариум", "акведук", "аккордеон", "аккумулятор", "аксельбант", "алмаз", "альбом", "амулет", "ангар", "анкета", "антенна", "бадья", "базука", "байдарка", "бак", "балахон", "балалайка", "мост", "бакенбарда", "баклажан", "балалайка", "балдахин", "балка", "балкон", "баллон", "баллончик", "бальзам", "бампер", "банджо", "банка", "банкнота", "баночка", "бантик", "барабан", "барометр", "батарейка", "батискаф", "батисфера", "батон", "батут", "башмак", "башня", "баян", "дамба", "датчик", "дача", "дверка", "дверца", "дверь", "двигатель", "движок", "дворец", "жезл", "лупа", "перо", "свая", "танк", "плот", "сейф", "утюг", "лампа", "мотор", "радар", "туфля", "лорнет", "магнит", "холст", "одеяло", "клапан", "панама", "рапира", "жилетка", "молоток", "тетрадь", "машина", "книга", "стол", "монета", "письмо", "палец", "автомобиль", "ухо", "нос", "камень", "зуб", "корабль", "кресло", "кровать", "стул", "ножницы", "стремянка", "ножовка", "плоскогубцы", "лом", "монтировка", "труборез", "стеклорез", "болторез", "отвертка", "сверло", "молоток", "пассатижи", "мультиметр", "штангенциркуль", "рулетка", "угольник", "угломер", "напильник", "шуруп", "болт", "гайка", "винт", "шило", "молот", "долото", "рубанок", "топор", "кувалда", "розетка", "лопата", "кирка", "перфоратор", "пила", "секатор", "шуруповёрт", "паяльник", "болгарка", "бензопила", "электропила", "гамак", "диван", "зеркало", "комод", "кушетка", "полка", "пуф", "раскладушка", "сейф", "скамья", "стол", "столик", "стул", "табурет", "трон", "шкаф", "тумбочка", "кастрюля", "сковорода", "сковородка", "сотейник", "чайник", "скалка", "мясорубка", "дуршлаг", "терка", "толкушка", "открывалка", "овощечистка", "казан", "скороварка", "кофемолка", "кофемашина", "половник", "лопатка", "шумовка", "блендер", "миксер", "пароварка", "соковыжималка", "кофейник", "турка", "ковш", "тостер", "измельчитель", "электрочайник", "черпак", "пароварка", "салатник", "тарелка", "миска", "стакан", "кружка", "чашка", "чаша", "нож", "вилка", "ложка", "соусник", "сахарница", "поднос", "бокал", "кувшин", "термос", "вагон", "электричка", "трамвай", "троллейбус", "грузовик", "самосвал", "погрузчик", "автофургон", "кабриолет", "снегоход", "мотоцикл", "скутер", "трактор", "бульдозер", "экскаватор", "мотороллер", "локомотив", "фургон", "паровоз", "электропоезд", "комбайн", "тягач", "фуникулер", "корабль", "пароход", "баржа", "судно", "яхта", "паром", "катер", "теплоход", "лайнер", "танкер", "линкор", "крейсер", "галера", "фрегат", "вертолет", "ракета", "аэроплан", "велосипед", "телега", "карета", "лодка", "самокат", "катамаран", "шлюпка", "байдарка", "повозка", "мяч", "гиря", "обруч", "свисток", "шлем", "майка", "клюшка", "шайба", "бита", "шар", "винтовка", "велосипед", "эспандер", "капа", "таймер", "кубок", "медаль", "ядро", "диск", "ворота", "купальник", "полотенце", "фотокамера", "видеокамера", "ручка", "тетрадь", "маркер", "линейка", "калькулятор", "блокнот", "кисточка", "степлер", "циркуль", "транспортир", "конверт", "чернильница", "метла", "бревно", "локон", "бритва", "бланк", "кнопка", "карман", "корона", "двигатель", "шашка", "рука", "глаз", "нога", "тысяча", "книга", "жена"
            ]
        ],
        _a[Category.Food] = [["баклажан", "баланда", "банан", "батон", "батончик", "абрикос", "аджика", "азу", "айва", "алыча", "ананас", "багет", "базилик", "баклажан", "артишок", "базилик", "горох", "кабачок", "картофель", "салат", "сельдерей", "томат", "укроп", "чеснок", "абрикос", "апельсин", "ананас", "арбуз", "гранат", "грейпфрут", "персик", "киви", "кокос", "лимон", "мандарин", "нектарин", "лайм", "петрушка", "картошка", "кукуруза", "морковь", "репа", "руккола", "свекла", "редька", "морковка", "груша", "дыня", "хурма", "вишня", "черешня", "рябина", "слива", "малина", "ежевика", "калина", "черемуха", "шелковица", "брусника", "клубника", "клюква", "смородина", "черника", "сахар", "бисквит", "имбирь", "окорок", "глазурь", "грудинка", "луковица", "пармезан", "авокадо", "бобы", "капуста", "брокколи", "горох", "кабачок", "петрушка", "редис", "картофель", "картошка", "лук", "огурец", "патиссон", "перец", "репа", "руккола", "салат", "свекла", "сельдерей", "спаржа", "томат", "помидор", "тыква", "укроп", "фасоль", "черри", "чеснок", "шпинат", "щавель", "кукуруза", "редька", "фасоль", "баклажан", "бобы", "апельсин", "гранат", "грейпфрут", "груша", "помело", "киви", "мандарин", "хурма", "нектарин", "яблоко", "манго", "бергамот", "личи", "маракуйя", "папайя", "черешня", "калина", "шелковица", "брусника", "смородина", "виноград", "крыжовник"],
            ["базамент", "базанит", "базар", "базаровщина", "базировка", "базис", "байдарка", "байдарочник", "байка", "бак", "бакалавр", "бакалейщик", "бакалея", "бакенбарда", "баклуша", "бактериофаг", "бактерия", "бал", "балаболка", "балаган", "балалайка", "балансировка", "балахон", "балдахин", "балет", "балетка", "балка", "балкон", "баллада", "балласт", "баллиста", "баллистика", "баллон", "баллончик", "бальзам", "балюстрада", "балясина", "бамбук", "бампер", "банда", "бандаж", "бандероль", "бандеролька", "банджо", "бандура", "банк", "банка", "банкнота", "баночка", "бант", "бантик", "банька", "баня", "баобаб", "барабан", "барахло", "баретка", "барометр", "баррикада", "бархан", "бархат", "бассейн", "бастион", "батальон", "батарейка", "батарея", "батискаф", "батисфера", "батуд", "батут", "бахилы", "бахрома", "башмак", "башня", "баян", "дамба", "дамка", "данные", "дата", "дача", "дверца", "дверь", "двигатель", "движок", "двор", "дворец", "дворик", "деаэратор", "абажур", "абонемент", "авоська", "автобус", "автокран", "автомат", " автопортрет", " авторучка", "агат", "адресок", "адуляр", "азбука", "акваланг", "аквариум", "акведук", "аккордеон", "аккумулятор", "аксельбант", "аксессуар", "акция", "алебастр", "амулет", "ангар", "анкета", "антенна", "бадья", "базука", "байдарка", "бак", "кадр", "лупа", "обоз", "овал", "перо", "сейф", "свая", "танк", "гипс", "плот", "сейф", "утюг", "часы", "вакса", "дамба", "лампа", "мотор", "радар", "туфля", "фиала", "холст", "цевьё", "депеша", "жемчуг", "звонок", "клапан", "каучук", "лорнет", "магнит", "одеяло", "панама", "рапира", "визитка", "жилетка", "изумруд", "молоток", "пантеон", "папирус", "серебро", "тетрадь", "вертолет", "изваяние", "лепесток", "деньги", "машина", "нога", "дверь", "книга", "стол", "монета", "орган", "письмо", "комната", "окно", "газета", "палец", "самолет", "завод", "журнал", "автомобиль", "бумага", "оружие", "ухо", "нос", "камень", "зуб", "корабль", "поверхность", "карта", "клуб", "станция", "революция", "колено", "министерство", "стекло", "этаж", "трубка", "газ", "механизм", "кресло", "одежда", "поезд", "университет", "ладонь", "оборудование", "концерт", "выставка", "кровать", "аппарат", "стул", "адонис", "азалия", "алоэ", "астра", "бамбук", "барбарис", "борщевик", "вербена", "гвоздика", "георгина", "гербера", "гиацинт", "гладиолус", "гортензия", "жасмин", "жимолость", "ирис", "василек", "кипарис", "клевер", "лаванда", "ландыш", "лилия", "лотос", "лютик", "магнолия", "мак", "мята", "нарцисс", "незабудка", "одуванчик", "орхидея", "осока", "пион", "подсолнечник", "подсолнух", "полынь", "роза", "ромашка", "тюльпан", "фиалка", "физалис", "хризантема", "ель", "пальма", "сирень", "фикус", "акация", "баобаб", "береза", "дуб", "ива", "каштан", "кедр", "ясень", "клен", "лиственница", "осина", "пихта", "сакура", "сосна", "тополь", "яблоня", "ножницы", "гвоздодер", "стремянка", "ножовка", "плоскогубцы", "лом", "монтировка", "труборез", "стеклорез", "болторез", "тиски", "отвертка", "сверло", "молоток", "пассатижи", "мультиметр", "штангенциркуль", "рулетка", "угольник", "угломер", "напильник", "гвозди", "шуруп", "болт", "гайка", "винт", "дрель", "шило", "молот", "верстак", "долото", "рубанок", "стамеска", "краска", "топор", "кувалда", "удлинитель", "кабель", "розетка", "шпатель", "вантуз", "лопата", "скотч", "кирка", "перфоратор", "пила", "секатор", "шуруповёрт", "паяльник", "болгарка", "бензопила", "электропила", "библиотека", "буфет", "буфетница", "вешалка", "гамак", "гардероб", "гарнитур", "диван", "зеркало", "колыбель", "комод", "консоль", "кушетка", "пенал", "полка", "пуф", "раскладушка", "сейф", "сервант", "скамья", "софа", "стеллаж", "стенка", "стол", "столик", "стул", "табурет", "тахта", "трон", "трюмо", "тумба", "шезлонг", "ширма", "шифоньер", "шкаф", "этажерка", "стулья", "тумбочка", "лавка", "столешница", "кастрюля", "сковорода", "сковородка", "сотейник", "чайник", "скалка", "мясорубка", "дуршлаг", "терка", "толкушка", "открывалка", "овощечистка", "противень", "казан", "скороварка", "кофемолка", "кофемашина", "половник", "лопатка", "шумовка", "заварник", "блендер", "миксер", "пароварка", "соковыжималка", "кофейник", "турка", "ковш", "тостер", "измельчитель", "электрочайник", "черпак", "пароварка", "салатник", "тарелка", "миска", "стакан", "кружка", "чашка", "чаша", "нож", "вилка", "ложка", "соусник", "сахарница", "поднос", "бокал", "сервиз", "кувшин", "контейнер", "термос", "солонка", "перечница", "вагон", "электричка", "трамвай", "троллейбус", "грузовик", "самосвал", "погрузчик", "автофургон", "кабриолет", "снегоход", "монорельс", "мотоцикл", "скутер", "трактор", "такси", "бульдозер", "экскаватор", "мотороллер", "локомотив", "фургон", "паровоз", "электропоезд", "комбайн", "тягач", "фуникулер", "корабль", "пароход", "баржа", "судно", "яхта", "паром", "регата", "катер", "теплоход", "лайнер", "танкер", "линкор", "крейсер", "ледокол", "галера", "фрегат", "шхуна", "вертолет", "ракета", "дирижабль", "дельтаплан", "аэроплан", "аэростат", "параплан", "велосипед", "санки", "телега", "карета", "лодка", "каноэ", "парашют", "самокат", "рикша", "катамаран", "шлюпка", "байдарка", "повозка", "мяч", "кроссовки", "ракетки", "перчатки", "скакалка", "штанга", "гантели", "гиря", "обруч", "свисток", "шлем", "майка", "коньки", "клюшка", "шайба", "турник", "брусья", "ринг", "бита", "мишень", "дротики", "бутсы", "кимоно", "шар", "кегли", "канат", "обруч", "шорты", "винтовка", "велосипед", "санки", "кеды", "эспандер", "лыжи", "татами", "батут", "ласты", "капа", "таймер", "кубок", "медаль", "сетка", "гетры", "щитки", "ядро", "диск", "ворота", "снаряд", "форма", "ласты", "купальник", "полотенце", "фотокамера", "видеокамера", "крем", "шлепанцы", "сланцы", "ручка", "пенал", "тетрадь", "папка", "замазка", "маркер", "линейка", "листки", "калькулятор", "блокнот", "органайзер", "клей", "кисточка", "краски", "степлер", "циркуль", "транспортир", "точилка", "ножницы", "дырокол", "ежедневник", "ластик", "пластилин", "скрепки", "скотч", "кнопки", "лупа", "стикер", "конверт", "файл", "картон", "гуашь", "чернильница", "перо", "обложка", "палитра", "грифель", "метла", "бревно", "локон", "бритва", "бланк", "кнопка", "обувь", "письмо", "карман", "корона", "двигатель"
            ]
        ],
        _a[Category.Abstract] = [["абажур", "абонемент", "авоська", "автобус", "автокран", "автомат", "автопортрет", "авторучка", "агат", "адуляр", "азбука", "азофоска", "акваланг", "аквариум", "акведук", "аккордеон", "аккумулятор", "аксельбант", "аксессуар", "аксиометр", "аксон", "алебастр", "алеврит", "алмаз", "альбом", "альманах", "амулет", "анализатор", "ангар", "анероид", "анкер", "анкета", "антенна", "бадья", "базука", "байдарка", "бак", "балахон", "балалайка", "мост", "базамент", "базанит", "байдарка", "бак", "бакенбарда", "баклажан", "баклуша", "балалайка", "балахон", "балдахин", "балетка", "балка", "балкон", "балласт", "баллиста", "баллон", "баллончик", "бальзам", "балюстрада", "балясина", "бампер", "бандероль", "бандеролька", "банджо", "бандура", "банка", "банкнота", "баночка", "бант", "бантик", "барабан", "барахло", "баретка", "барометр", "баррикада", "бархат", "батарейка", "батарея", "батискаф", "батисфера", "батон", "батончик", "батуд", "батут", "бахилы", "бахрома", "башмак", "башня", "баян", "дамба", "дамка", "датчик", "дача", "дверка", "дверца", "дверь", "двигатель", "движок", "дворец", "жезл", "зола", "кадр", "лист", "лупа", "обоз", "овал", "перо", "свая", "танк", "гипс", "плот", "сейф", "утюг", "часы", "вакса", "дамба", "лампа", "мотор", "радар", "туфля", "лорнет", "магнит", "фиала", "холст", "цевье", "депеша", "жемчуг", "звонок", "одеяло", "клапан", "панама", "рапира", "визитка", "жилетка", "изумруд", "молоток", "пантеон", "папирус", "серебро", "тетрадь", "изваяние", "деньги", "машина", "нога", "дверь", "книга", "стол", "монета", "орган", "письмо", "газета", "палец", "автомобиль", "бумага", "ухо", "нос", "камень", "зуб", "корабль", "механизм", "кресло", "кровать", "аппарат", "стул", "ножницы", "гвоздодер", "стремянка", "ножовка", "плоскогубцы", "лом", "монтировка", "труборез", "стеклорез", "болторез", "тиски", "отвертка", "сверло", "молоток", "пассатижи", "мультиметр", "штангенциркуль", "рулетка", "угольник", "угломер", "напильник", "гвозди", "шуруп", "болт", "гайка", "винт", "дрель", "шило", "молот", "верстак", "долото", "рубанок", "стамеска", "краска", "топор", "кувалда", "удлинитель", "кабель", "розетка", "шпатель", "вантуз", "лопата", "скотч", "кирка", "перфоратор", "пила", "секатор", "шуруповёрт", "паяльник", "болгарка", "бензопила", "электропила", "библиотека", "буфет", "буфетница", "вешалка", "гамак", "гардероб", "гарнитур", "диван", "зеркало", "колыбель", "комод", "консоль", "кушетка", "пенал", "полка", "пуф", "раскладушка", "сейф", "сервант", "скамья", "софа", "стеллаж", "стенка", "стол", "столик", "стул", "табурет", "тахта", "трон", "трюмо", "тумба", "шезлонг", "ширма", "шифоньер", "шкаф", "этажерка", "стулья", "тумбочка", "лавка", "столешница", "кастрюля", "сковорода", "сковородка", "сотейник", "чайник", "скалка", "мясорубка", "дуршлаг", "терка", "толкушка", "открывалка", "овощечистка", "противень", "казан", "скороварка", "кофемолка", "кофемашина", "половник", "лопатка", "шумовка", "заварник", "блендер", "миксер", "пароварка", "соковыжималка", "кофейник", "турка", "ковш", "тостер", "измельчитель", "электрочайник", "черпак", "пароварка", "салатник", "тарелка", "миска", "стакан", "кружка", "чашка", "чаша", "нож", "вилка", "ложка", "соусник", "сахарница", "поднос", "бокал", "сервиз", "кувшин", "контейнер", "термос", "солонка", "перечница", "вагон", "электричка", "трамвай", "троллейбус", "грузовик", "самосвал", "погрузчик", "автофургон", "кабриолет", "снегоход", "монорельс", "мотоцикл", "скутер", "трактор", "такси", "бульдозер", "экскаватор", "мотороллер", "локомотив", "фургон", "паровоз", "электропоезд", "комбайн", "тягач", "фуникулер", "корабль", "пароход", "баржа", "судно", "яхта", "паром", "регата", "катер", "теплоход", "лайнер", "танкер", "линкор", "крейсер", "ледокол", "галера", "фрегат", "шхуна", "вертолет", "ракета", "дирижабль", "дельтаплан", "аэроплан", "аэростат", "параплан", "велосипед", "санки", "телега", "карета", "лодка", "каноэ", "парашют", "самокат", "рикша", "катамаран", "шлюпка", "байдарка", "повозка", "мяч", "кроссовки", "ракетки", "перчатки", "скакалка", "штанга", "гантели", "гиря", "обруч", "свисток", "шлем", "майка", "коньки", "клюшка", "шайба", "турник", "брусья", "ринг", "бита", "мишень", "дротики", "бутсы", "кимоно", "шар", "кегли", "канат", "обруч", "шорты", "винтовка", "велосипед", "санки", "кеды", "эспандер", "лыжи", "татами", "батут", "ласты", "капа", "таймер", "кубок", "медаль", "сетка", "гетры", "щитки", "ядро", "диск", "ворота", "снаряд", "форма", "ласты", "купальник", "полотенце", "фотокамера", "видеокамера", "крем", "шлепанцы", "сланцы", "ручка", "пенал", "тетрадь", "папка", "замазка", "маркер", "линейка", "листки", "калькулятор", "блокнот", "органайзер", "клей", "кисточка", "краски", "степлер", "циркуль", "транспортир", "точилка", "ножницы", "дырокол", "ежедневник", "ластик", "пластилин", "скрепки", "скотч", "кнопки", "лупа", "стикер", "конверт", "файл", "картон", "гуашь", "чернильница", "перо", "обложка", "палитра", "грифель", "метла", "бревно", "локон", "бритва", "бланк", "кнопка", "обувь", "письмо", "карман", "корона", "двигатель"], [
                "абонирование", "абордаж", "абрис", "абсолют", "абстиненция", "абстрагирование", "абстракция", "абсурд", "абсурдность", "абулия", "авансирование", "авансировать", "авантюра", "авантюризм", "аварийность", " авария", "август", "авось", "аврал", "автоматизм", "автономия", "автономность", "авторизация", "авторитарность", "авторство", "агитация", "автохром", "агнозия", "агностицизм", "агония", "агорафобия", "аграфия", "агрегация", "агрессия", "агроботаника", "агрономия", "адаптация", "адвокатство", "адинамия", "адсорбция", "адъюнкта", "адюльтер", "азарт", "азот", "айсберг", "акварель", "аквилегия", "аккламация", "акклиматизация", "акколада", "аккомодация", "аккорд", "аккредитация", "акмеизм", "акробатика", "активация", "актуализация", "актуализм", "акцентология", "акцентуация", "акциз", "алалия", "алгебра", "алгоритм", "алиби", "аллеманда", "аллергия", "аллюзия", "алогизм", "альпинизм", "альтерация", "альтернат", "альтернатива", "альтруизм", " альянс", " аляповатость", "ампир", "амплитуда", " амплуа", "амфиболия", "анабиоз", "анакреонтика", "анализ", "аналитика", "аналог", "аналогия", "анархизм", "анархия", "анатомия", "анафаза", "аневризм", "анекдот", "анестезиология", "анклав", "аномалия", "антитеза", "бриз", "базар", "базаровщина", "базировка", "базис", "байка", "бакалея", "бал", "балаган", "балансировка", "балет", "баллада", "баллистика", "банальность", "банкет", "банька", "баня", "баритон", "бархан", "барщина", "бас", "баталия", "бег", "беготня", "беда", "бедлам", "давильня", "давка", "давление", "давность", "дактилография", "даль", "данность", "дар", "дарвинизм", "дарма", "дармовщина", "движение", "двусмыслица", "дебют", "девальвация", "девиация", "девиз", "аллюр", "весна", "пафос", "зрение", "импорт", "лавина", "трагизм", "болтовня", "ревность", "розыгрыш", "серенада", "год", "время", "жизнь", "день", "работа", "случай", "история", "власть", "война", "голос", "развитие", "процесс", "суд", "любовь", "путь", "минута", "вечер", "мысль", "внимание", "разговор", "чувство", "наука", "культура", "служба", "судьба", "искусство", "воздух", "характер", "свобода", "требование", "основание", "сон", "успех", "счастье", "сознание", "возраст", "радость", "реформа", "победа", "праздник", "впечатление", "частность", "детство", "вывод", "скорость", "энергия", "существование", "рождение", "реализация", "красота", "тень", "стиль", "гроза", "снегопад", "буря", "ливень", "пурга", "вьюга", "смерч", "затмение", "лавина"
            ]],
        _a[Category.Positive] = [["Авторитетность", "Авторитетный", "Авторитарный", "Авангардный", "Адекватность", "Адекватный", "Аккуратность", "Аккуратный", "Активность", "Активный", "Альтруизм", "Альтруистичный", "Артистизм", "Артистичность", "Артистичный", "Аристократичный", "Аппетитный", "Атлетичный", "Аскетизм", "Аскетичный", "Бдительность", "Бдительный", "Безмолвие", "Безмолвный", "Безмятежность", "Безмятежный", "Безобидность", "Безобидный", "Безукоризненность", "Безукоризненный", "Безупречность", "Безупречный", "Бережливость", "Бережливый", "Бескорыстие", "Бескорыстный", "Беспристрастие", "Беспристрастность", "Беспристрастный", "Бесподобный", "Бесценный", "Бесстрашие", "Бесстрашный", "Благоверие", "Благоверность", "Благоверный", "Благовоспитанность", "Благовоспитанный", "Благоговение", "Благодарность", "Благодарный", "Благодатность", "Благодатный", "Благодать", "Благодействие", "Благоденствие", "Благодетельность", "Благодетельный", "Благодеяние", "Благодушие", "Благодушный", "Благожелательность", "Благожелательный", "Благозвучность", "Благозвучный", "Благонадежность", "Благонадежный", "Благонамеренность", "Благополучие", "Благополучность", "Благополучный", "Благопристойность", "Благопристойный", "Благоразумие", "Благоразумный", "Благородство", "Благородный", "Благосклонность", "Благосклонный", "Благословение", "Благотворительность", "Благочестивость", "Благочестие", "Блаженность", "Блаженство", "Боговдохновленность", "Бодрость", "Бодрый", "Божественность", "Бойкость", "Бойкий", "Вдохновение", "Вдохновленный", "Вдохновленность", "Вдумчивость", "Вдумчивый", "Вежливость", "Вежливый", "Великодушие", "Великодушный", "Вера", "Верный", "Верность", "Весёлость", "Веселый", "Взаимоподдержка", "Взвешенность", "Внимательность", "Внимательный", "Вовлеченность", "Вовлеченный", "Возвышенность", "Возвышенный", "Волевой", "Воля", "Воздержанность", "Воодушевленность", "Воспитанность", "Воспитанный", "Восприимчивость", "Восприимчивый", "Восторженность", "Доброта", "Добрый", "Воображение", "Всепрощение", "Выдержанность", "Выдержка", "Выносливость", "Выносливый", "Галантность", "Галантный", "Гармоничность", "Гармоничный", "Героизм", "Героический", "Гибкость", "Гибкий", "Гордость", "Гордый", "Гостеприимность", "Гостеприимный", "Гостеприимство", "Грациозность", "Грациозный", "Гуманность", "Гуманный", "Гуманизм", "Дальновидность", "Дальновидный", "Деликатность", "Деликатный", "Демократичность", "Демократичный", "Джентльменство", "Дипломатичность", "Дисциплина", "Дисциплинированность", "Доблесть", "Доблестность", "Доблестный", "Добродушие", "Добродушный", "Добродетель", "Добродетельность", "Доброжелательность", "Добропорядочность", "Доброта", "Добрый", "Добросовестность", "Добросердечность", "Достаточность", "Достойность", "Достоинство", "Дружелюбие", "Дружелюбный", "Дружественность", "Духовность", "Душевность", "Естественность", "Помогать", "Жизнелюбие", "Жизнерадостность", "Заботливость", "Заботливый", "Заинтересованность", "Заинтересованный", "Законность", "Законный", "Законопослушность", "Законопослушный", "Заслуженность", "Заслуженный", "Здравомыслие", "Здравомыслящий", "Здравый", "Идеализм", "Идеальный", "Изобретательность", "Изобретательный", "Изысканность", "Изысканный", "Изящность", "Изящный", "Индивидуальность", "Индивидуальный", "Интеллектуальность", "Интеллектуальный", "Искренность", "Искренний", "Интуитивность", "Интуитивный", "Интеллигентность", "Интеллигентный", "Искусность", "Искусный", "Качественность", "Качественный", "Компетентность", "Компетентный", "Коммуникабельность", "Коммуникабельный", "Общительный", "Корректность", "Корректный", "Красноречивость", "Красноречивый", "Красноречие", "Красота", "Красивость", "Красивый", "Креативность", "Креативный", "Кропотливость", "Кропотливый", "Кроткий", "Кротость", "Культурность", "Культурный", "Легкость", "Легкий", "Лидерство", "Ловкость", "Ловкий", "Лучезарность", "Лучезарный", "Лучистость", "Любезность", "Любезный", "Любознательность", "Любознательный", "Методичность", "Методичный", "Мечтательность", "Мечтательный", "Милосердие", "Милосердный", "Благотворительность", "Добросердечность", "Добросердечный", "Милость", "Милый", "Мирный", "Миролюбие", "Миротворство", "Молодцовость", "Наблюдательность", "Наблюдательный", "Надежность", "Надежный", "Напористость", "Напористый", "Настойчивость", "Настойчивый", "Невинность", "Невинный", "Находчивость", "Находчивый", "Невозмутимость", "Невозмутимый", "Нежность", "Нежный", "Неискушенность", "Неискушенный", "Непобедимость", "Непобедимый", "Непредвзятость", "Непредвзятый", "Непринужденность", "Непринужденный", "Мотивированность", "Мотивированный", "Мудрость", "Мудрый", "Разумность", "Разумный", "Опытность", "Опытный", "Независимость", "Независимый", "Неподкупность", "Неподкупный", "Непоколебимость", "Непоколебимый", "Несгибаемость", "Нетривиальность", "Нетривиальный", "Неуязвимость", "Неуязвимый", "Новаторство", "Нужность", "Нужный", "Полезность", "Полезный", "Обаятельность", "Обязательный", "Обаяние", "Образованность", "Образованный", "Обучаемость", "Обучаемый", "Обходительность", "Обходительный", "Общительность", "Общительный", "Объективность", "Объективный", "Озаренность", "Озаренный", "Одаренность", "Одаренный", "Опрятность", "Опрятный", "Оптимальность", "Оптимальный", "Оптимизм", "Оптимистичный", "Организованность", "Организованный", "Оригинальность", "Оригинальный", "Осведомленность", "Осведомленный", "Осмотрительность", "Осмысленность", "Осознанность", "Осознанный", "Осторожность", "Осторожный", "Остроумие", "Остроумный", "Отважность", "Отважный", "Отвага", "Ответственность", "Ответственный", "Отзывчивость", "Отзывчивый", "Открытость", "Открытый", "Очаровательность", "Очаровательный", "Патриотизм", "Плавность", "Плавный", "Планирование", "Пластичность", "Плодотворность", "Плодотворный", "Подлинность", "Подлинный", "Истинность", "Правдивость", "Правдивый", "Позитивизм", "Позитивный", "Полезность", "Полезный", "Отходчивость", "Понимание", "Понимающий", "Открытость", "Понятливость", "Понятливый", "Последовательность", "Послушание", "Почтительность", "Почтительный", "Правдивость", "Правдивый", "Честность", "Честный", "Праведность", "Праведный", "Практичность", "Практичный", "Предприимчивость", "Предупредительность", "Предусмотрительность", "Приветливость", "Приветливый", "Прилежность", "Прилежный", "Прилежание", "Прилежный", "Приличный", "Преданность", "Преданный", "Прогрессивность", "Прогрессивный", "Продуктивность", "Продуктивный", "Проницательность", "Проницательный", "Прочность", "Прочный", "Работоспособность", "Разумность", "Разумный", "Раскованность", "Раскрепощенность", "Респектабельность", "Респектабельный", "Решимость", "Решительность", "Решительный", "Романтизм", "Романтичность", "Романтичный", "Светлость", "Светлый", "Сердобольность", "Сердобольный", "Сила", "Сильный", "Симпатия", "Симпатичный", "Систематичность", "Скорость", "Быстрота", "Быстрый", "Скромность", "Скромный", "Смелость", "Смелый", "Смиренность", "Человечность", "Человечный", "Совестливость", "Совестливый", "Сознательность", "Сознательный", "Солидность", "Солидный", "Сосредоточенность", "Сосредоточенный", "Внимательный", "Состоятельность", "Состоятельный", "Социальность", "Спокойствие", "Спокойный", "Сильный", "Созидать", "Стабильность", "Стабильность", "Стильность", "Сильный", "Стойкость", "Стойкий", "Стрессоустойчивость", "Тактичность", "Тактичный", "Толерантность", "Толерантный", "Талантливость", "Талантливый", "Творчество", "Убеждать", "Терпимость", "Терпимый", "Толковость", "Толковый", "Точность", "Точный", "Требовательность", "Требовательный", "Убедительность", "Убедительный", "Уважительность", "Уважительный", "Уважение", "Трудолюбие", "Трудолюбивый", "Усердие", "Усердный", "Удачливость", "Удачный", "Увлечённость", "Увлеченный", "Уверенность", "Уверенный", "Самоуверенность", "Самоуверенный", "Улыбчивость", "Благодарный", "Упорство", "Усердность", "Усердие", "Усидчивость", "Учтивость", "Учтивый", "Утонченность", "Функциональность", "Функциональный", "Харизматичность", "Харизматичный", "Хозяйственность", "Храбрость", "Храбрый", "Целеустремленность", "Человечность", "Человечный", "Честность", "Честный", "Чистосердечность", "Прекрасный", "Ответственный", "Перспективный", "Чуткость", "Чуткий", "Щедрость", "Щедрый", "Экономность", "Элегантность", "Тактичный", "Счастливый", "Счастье", "Спокойный", "Смирение", "Бодрый", "Бодрость", "Яркость", "Ясность", "Эффективность", "Эстетизм", "Энтузиазм"], ["Педантичность", "Педантичный", "Клоунада", "Лесть", "Льстивость", "Льстивый", "Показуха", "Показушный", "Гордыня", "Гордец", "Дерзновенность", "Дерзкий", "Мнительность", "Мнительный", "Безразличие", "Безразличный", "Выслуживание", "Вульгарность", "Вульгарный", "Надменность", "Надменный", "Высокомерие", "Высокомерный", "Эпатаж", "Эпатажный", "Косность", "Косный", "Скупость", "Скупой", "Бездействие", "Безответственность", "Безответственный", "Доверчивость", "Доверчивый", "Раболепие", "Глупость", "Глупый", "Стеснительность", "Стеснительный", "Апатия", "Апатичный", "Самобичевание", "Гипертрофированный", "Саморазрушение", "Жадность", "Жадный", "Алчность", "Алчный", "Строгость", "Строгий", "Слабость", "Слабый", "Насилие", "Навязчивость", "Навязчивый", "Вычурность", "Вычурный", "Авторитаризм", "Авторитарность", "Авторитарный", "Агрессивность", "Агрессивный", "Азартность", "Азартный", "Алкоголизм", "Аморальность", "Аморальный", "Анархизм", "Анархия", "Анархичность", "Анархист", "Антипатия", "Апатия", "Апатичность", "Балагурство", "Баловство", "Безалаберность", "Безалаберный", "Безапелляционность", "Безбожие", "Безволие", "Безвольный", "Бездарность", "Бездарный", "Безделие", "Бездумность", "Бездумство", "Бездумный", "Бездушие", "Бездушье", "Бездушность", "Бездушный", "Безжалостность", "Безжалостный", "Безликость", "Безликий", "Безмерность", "Безнравственность", "Безнравственный", "Безответственность", "Безответственный", "Безразличие", "Безразличность", "Безразличный", "Безрассудность", "Безрассудство", "Безрассудный", "Безропотность", "Безропотный", "Безынициативность,", "Безынициативный", "Бескультурье", "Бескультурный", "Некультурный", "Беспардонность", "Беспардонный", "Беспечность", "Беспечный", "Беспокойность", "Беспокойство", "Беспокойный", "Беспомощность", "Беспомощный", "Беспощадность", "Беспощадный", "Бесправие", "Бесправность", "Бесправный", "Беспринципность", "Беспринципный", "Беспросветность", "Беспросветный", "Бессердечие", "Бессердечность", "Бессердечный", "Бессмысленность", "Бессмысленный", "Бессовестность", "Бессовестный", "Бесстыдство", "Бестактность", "Бестактный", "Бесхарактерность", "Бесхарактерный", "Бесхребетность", "Бесхребетный", "Бесцеремонность", "Бесцеремонный", "Нецеремонный", "Бесчеловечность", "Бесчеловечный", "Бесчестность", "Бесчестие", "Бесчестный", "Бесчинство", "Бесчинствующий", "Бичевание", "Блажь", "Блатничество", "Блатной", "Богохульство", "Богохульный", "Болтливость", "Болтливый", "Боязливость", "Боязливый", "Бранный", "Брезгливость", "Брезгливый", "Брюзжание", "Брюзжащий", "Буйство", "Буйный", "Вероломство", "Вероломный", "Ветреность", "Ветренный", "Взбалмошность", "Взбалмошный", "Взвинченность", "Взвинченный", "Взволнованность", "Взволнованный", "Вздорность", "Вздорный", "Взяточничество", "Властность", "Властолюбие", "Властолюбивый", "Ворчливость", "Ворчливый", "Враждебность", "Враждебный", "Вредительство", "Вредность", "Вредный", "Вседозволенность", "Вспыльчивость", "Вспыльчивый", "Встревоженность", "Встревоженный", "Вульгарность", "Вульгарный", "Въедливость", "Въедливый", "Высокомерие", "Высокомерный", "Вялость", "Вялый", "Глупость", "Глупый", "Гневливость", "Гнев", "Гневный", "Гневливый", "Гнусность", "Гнусный", "Греховность", "Греховный", "Грубость", "Грубый", "Двуличность", "Двуличный", "Дебоширство", "Демонстративность", "Депрессивность", "Демонстративный", "Дерзкий", "Дерзость", "Деспотизм", "Деспотичность", "Деспотичный", "Дикость", "Дикий", "Диктаторство", "Дилетантизм", "Дилетант", "Дисгармоничность", "Дисгармоничный", "Дискредитация", "Доверчивость", "Доверчивый", "Догматизм", "Докучливость", "Докучливый", "Доносительство", "Доносчик", "Досада", "Досадность", "Досадный", "Драчливость", "Драчливый", "Дурачество", "Дурость", "Ехидность", "Ехидство", "Ехидный", "Желчность", "Желчный", "Жесткость", "Жесткий", "Жестокосердие", "Жестокость", "Жестокий", "Жлобство", "Жлоб", "Жуликоватость", "Жульничество", "Жулик", "Зависимость", "Зависимый", "Завистливость", "Зависть", "Завистливый", "Плагиат", "Загнанность", "Загнанный", "Задиристость", "Задиристый", "Зажатость", "Зажатый", "Зазнайство", "Закомплексованность", "Закомплексованный", "Закостенелость", "Закостенелый", "Закрепощенность", "Закрепощение", "Закрепощенный", "Замкнутость", "Замкнутый", "Заносчивость", "Заносчивый", "Занудство", "Занудный", "Запальчивость", "Запальчивый", "Запуганность", "Запугивание", "Запуганный", "Застенчивость", "Застенчивый", "Затруднительность", "Затруднительный", "Затуманенность", "Затуманенный", "Заумность", "Заумный", "Злобность", "Злоба", "Злобный", "Зловредность", "Зловредный", "Злодейство", "Злодеяние", "Злонамеренность", "Злонамеренный", "Злонравие", "Злонравный", "Злопамятность", "Злопамятство", "Злополучность", "Злополучный", "Злопыхательство", "Злорадство", "Злоречие", "Злословие", "Злость", "Злой", "Избалованность", "Избалованный", "Изворотливость", "Изворотливый", "Издевательство", "Бесчувственность", "Бесчувственный", "Импульсивность", "Импульсивный", "Искушение", "Искушенность", "Искушенный", "Исступленность", "Исступленный", "Истеричность", "Истеричный", "Истощенность", "Истощаемость", "Истощенный", "Капризность", "Капризный", "Коварство", "Коварный", "Конфликтность", "Конфликтный", "Корысть", "Корыстность", "Корыстный", "Критиканство", "Кровожадность", "Кровожадный", "Легкомысленность", "Легкомыслие", "Легкомысленный", "Лень", "Ленивость", "Ленивый", "Лесть", "Льстивый", "Лживость", "Ложь", "Лжец", "ЛихачествоЛицемерие", "Лицемерный", "Лютость", "Лютый", "Малодушие", "Малодушный", "Манерность", "Манерный", "Меланхоличность", "Меланхоличный", "Мелочность", "Мерзость", "Мерзостность", "Мерзопакостность", "Мерзкий", "Меркантильность", "Меркантильный", "Мнительность", "Мнительный", "Мрачность", "Мрачный", "Мстительность", "Мнительный", "Мягкотелость", "Мягкотелый", "Навязчивость", "Навязчивый", "Наглость", "Наглый", "Надменность", "Надменный", "Надоедливость", "Надоедливый", "Назойливость", "Назойливый", "Наивность", "Наивный", "Наигранность", "Наигранный", "Напыщенность", "Напыщенный", "Нарциссизм", "Насмешливость", "Насмешливый", "Настырность", "Настырный", "Нахальство", "Нахальный", "Неадекватность", "Неадекватный", "Неаккуратность", "Неаккуратный", "Неблагоразумие", "Неблагоразумный", "Небрежность", "Небрежный", "Невежественность", "Невежество", "Невнимательность", "Невнимательный", "Невнятность", "Невнятный", "Невоспитанность", "Невоспитанный", "Негативизм", "Негативный", "Негодность", "Негодный", "Негодование", "Недальновидность", "Недальновидный", "Недобросовестность", "Недобросовестный", "Недоверчивость", "Недоверчивый", "Недружелюбный", "Неестественность", "Неестественный", "Незрелость", "Незрелый", "Некорректность", "Некорректный", "Нелепость", "Нелепый", "Немилосердность", "Немилосердный", "Немощность", "Немощный", "Ненавистничество", "Ненависть", "Ненавистный", "Ненасытность", "Ненасытный", "Необразованность", "Необразованный", "Необузданность", "Необузданный", "Необщительность", "Необщительный", "Необязательность", "Необязательный", "Неопределённость", "Неопределенный", "Неопрятность", "Неопрятный", "Неорганизованность", "Неорганизованный", "Неосмотрительность", "Неосмотрительный", "Непереносимость", "Непереносимый", "Неподготовленность", "Неподготовленный", "Неполноценность", "Неполноценный", "Непоследовательность", "Непоследовательный", "Непостоянство", "Непостоянный", "Непотребность", "Непотребный", "Непочтительность", "Непочтительный", "Непредусмотрительность", "Непредусмотрительный", "Неприличность", "Неприличный", "Непримиримость", "Непримиримый", "Непринятие", "Непристойность", "Непристойный", "Неприязнь", "Нерадивость", "Нерадивый", "Неразборчивость", "Неразборчивый", "Нерассудительность", "Нерассудительный", "Нерасторопность", "Нерасторопный", "Нервозность", "Нервозный", "Нереалистичность", "Нереальность", "Нереалистичный", "Нерешительность", "Нерешительный", "Неряшливость", "Неряшливый", "Несдержанность", "Несдержанный", "Несерьезность", "Несерьезный", "Несчастный", "Нетерпеливость", "Нетерпение", "Нетерпимость", "Нетерпеливый", "Нетерпимый", "Неуважительность", "Неуважительный", "Неуверенность", "Неуверенный", "Неудачливость", "Неудачливый", "Неудержимость", "Неудержимый", "Неудовлетворенность", "Неудовлетворенный", "Неуемность", "Неуемный", "Неуживчивость", "Неуживчивый", "Неумолимость", "Неумолимый", "Неуравновешенность", "Неуравновешенный", "Неусидчивость", "Неусидчивый", "Неустойчивость", "Неустойчивый", "Неуступчивость", "Неуступчивый", "Неучтивость", "Неучтивый", "Нечестность", "Нечестный", "Неясность", "Неясный", "Нигилизм", "Никчемность", "Никчемный", "Нудность", "Нудный", "Обеспокоенность", "Обеспокоенный", "Обжорство", "Обидчивость", "Обида", "Обидчивый", "Обиженность", "Обиженный", "Обман", "Обманчивость", "Обманчивый", "Обременение", "Обремененный", "Огорчение", "Огорченный", "Ограниченность", "Ограниченный", "Ожесточенность", "Ожесточенный", "Озлобленность", "Озлобленный", "Омерзительность", "Омерзительный", "Опрометчивость", "Опрометчивый", "Опустошенность", "Опустошенный", "Оскорбительность", "Оскорбительный", "Отрицательность", "Отрицательный", "Ошибочность", "Ошибочный", "Паника", "Паникерство", "Паразитизм", "Пассивность", "Пассивный", "Паясничанье", "Переживание", "Пессимизм", "Пессимист", "Печаль", "Печальность", "Печальный", "Плаксивость", "Плаксивый", "Подлость", "Подлый", "Подстрекательство", "Подстрекатель", "Подхалимство", "Позорность", "Позорный", "Празднословие", "Праздность", "Праздный", "Предательство", "Предатель", "Предвзятость", "Предвзятый", "Презрение", "Презрительность", "Презрительный", "Пренебрежительность", "Пренебрежительный", "Привередливость", "Привередливый", "Придирчивость", "Придирчивый", "Проблемность", "Проблематичность", "Проблемный", "Проблематичный", "Пугливость", "Пугливый", "Пустозвонство", "Пустословие", "Разбитость", "Разбитый", "Раздражительность", "Раздражительный", "Рассеянность", "Рассеянный", "Расчетливость", "Расчетливый", "Ревность", "Ревнивость", "Ревнивый", "Резкость", "Резкий", "Самобичевание", "Самодовольство", "Самодурство", "Самоедство", "Сварливость", "Сварливый", "Симуляция", "Симулянт", "Скандальность", "Скандальный", "Склочность", "Склочный", "Скудоумие", "Скудоумный", "Скупость", "Скупой", "Скучность", "Скучный", "Слабоволие", "Слабовольный", "Слабодушие", "Слабодушный", "Слабохарактерность", "Слезливость", "Смутность", "Смутный", "Снобизм", "Спекуляция", "Спекулятивность", "Угрожать", "Запугивать", "Устрашать", "Суета", "Суетливость", "Суетливый", "Текучка", "Паника", "Сумбурность", "Сумбурный", "Суровость", "Суровый", "Тиранство", "Тирания", "Тоска", "Тоскливость", "Тоскливый", "Трагизм", "Трагичный", "Транжирство", "Транжира", "Тревожность", "Тревожный", "Трусливость", "Трусоватость", "Трусость", "Трусливый", "Тупость", "Тщеславие", "Тщеславный", "Угнетение", "Угнетенный", "Угнетенность", "Угрюмость", "Угрюмый", "Удрученность", "Удрученный", "Узколобость", "Узколобый", "Унижение", "Униженный", "Усталость", "Усталый", "Утомленность", "Утомляемость", "Утомленный", "Фальшивость", "Фальшивый", "Фамильярность", "Фамильярный", "Халатность", "Халатный", "Халтурность", "Халтурный", "Хамство", "Ханжество", "Хвастливость", "Хвастовство", "Хвастливый", "Хмурость", "Хмурый", "Холодность", "Холодный", "Цинизм", "Чванство", "Черствость", "Черствый", "Чопорность", "Чопорный", "Эгоизм", "Эгоист", "Шарлатанство", "Шарлатан", "Ябедничество", "Ядовитость", "Ядовитый", "Язвительность", "Язвительный", "Ярость", "Яростный"]],
        _a[Category.Life] = [
            ["абажур", "аббатство", "аббревиатура", "абзац", "абонемент", "абрис", "абстракт", "аванс", "авиабилет", "авиадвигатель", "авианосец", "автобус", "автовокзал", "автоклуб", "автокран", "автомат", "автопортрет", "авторучка", "автострада", "автосцепка", "автохром", "агат", "агрегат", "аджика", "адъюнктура", "ажур", "азот", "азофоска", "айсберг", "акваланг", "акварель", "аквариум", "акведук", "аккорд", "аккумулятор", "аксельбант", "аксессуар", "алеврит", "амбар", "базамент", "базанит", "базар", "базаровщина", "базировка", "базис", "байдарка", "байка", "бак", "бакалея", "бакенбарда", "баклуша", "бал", "балаган", "балалайка", "баланда", "балансировка", "балахон", "балдахин", "балет", "балетка", "балка", "балкон", "баллада", "балласт", "баллиста", "баллистика", "баллон", "баллончик", "бальзам", "балюстрада", "балясина", "бампер", "бандаж", "бандероль", "бандеролька", "банджо", "бандура", "банк", "банка", "банкет", "банкнота", "баночка", "бант", "бантик", "банька", "баня", "бар", "барабан", "барак", "барахло", "барахолка", "баретка", "баритон", "барометр", "баррикада", "бархан", "бархат", "бас", "басенка", "баскетбол", "басня", "бассейн", "бастион", "баталия", "батарейка", "батарея", "батискаф", "батисфера", "батут", "бахилы", "бахрома", "башмак", "башня", "баян", "дамба", "данные", "дань", "дата", "датировка", "датчик", "дача", "дверка", "дверца", "дверь", "двигатель", "движок", "двоечка", "двойка", "двор", "дворец", "дворик", "двустволка", "двухтомник", "деаэратор", "дебаркадер", "девятигранник", " абажур", "абонемент", "автобус", "автокран", "автомат", " автопортрет", " авторучка", "адресок", "адуляр", "азбука", "азофоска", "акведук", "аккордеон", "аккумулятор", "аксессуар", "акция", "алмаз", "альбом", "альманах", "ампула", "амулет", "амфора", "анализатор", " ангар", " анкер", "анкета", "антенна", "бадья", "базука", "байдарка", "бак", "балахон", " балалайка", "мост", "абонирование", "абордаж", "абсолют", " абстиненция", "абсурд", "абсурдность", "абулия", "ножовка", "монтировка", "рулетка", "гайка", "дрель", "краска", "кувалда", "розетка", "лопата", "кирка", "пила", "болгарка", "бензопила", "библиотека", "вешалка", "колыбель", "кровать", "кушетка", "полка", "скамья", "ширма", "этажерка", "тумбочка", "лавка", "кастрюля", "сковорода", "сковородка", "скалка", "мясорубка", "толкушка", "открывалка", "овощечистка", "скороварка", "лопатка", "пароварка", "соковыжималка", "турка", "пароварка", "тарелка", "миска", "кружка", "чашка", "чаша", "вилка", "ложка", "сахарница", "солонка", "перечница", "сахарница", "рюмка", "машина", "электричка", "баржа", "яхта", "регата", "галера", "шхуна", "ракета", "телега", "карета", "лодка", "рикша", "шлюпка", "байдарка", "повозка", "стрельба", "гимнастика", "скакалка", "штанга", "гиря", "клюшка", "шайба", "мишень", "медаль", "сила", "ловкость", "смелость", "мотивация", "растяжка", "зарядка", "усталость", "разминка", "команда", "воля", "скорость", "глазница", "глотка", "голова", "грудина", "диафрагма", "кисть", "ключица", "кожа", "лодыжка", "лопатка", "стопа", "книга", "газета", "видеокамера", "река", "пустыня", "степь", "ветка", "трава", "вода", "луна", "равнина", "скала", "флора", "роща", "волна", "земля", "засуха", "буря", "зима", "весна", "ночь", "радуга", "жара", "роса", "метель", "молния", "пурга", "лавина", "метла", "грива", "газета", "верность", "гармония", "бритва", "окружность", "кнопка", "граница", "корона", "работа", "логика", "интрига", "тайна", "лестница", "история", "музыка", "должность", "жизнь", "легенда", "грусть", "пропасть", "красота", "деталь", "поездка", "игра", "частность", "абстиненция", "абстракция", "артишок", "базилик", "горох", "кабачок", "картофель", "салат", "сельдерей", "томат", "укроп", "чеснок", "абрикос", "апельсин", "ананас", "арбуз", "банан", "гранат", "грейпфрут", "персик", "киви", "кокос", "лимон", "мандарин", "нектарин", "лайм", "адонис", "бамбук", "барбарис", "гиацинт", "гладиолус", "кипарис", "клевер", "ландыш", "нарцисс", "пион", "тюльпан", "эвкалипт", "баобаб", "каштан", "кедр", "ясень", "клен", "тополь", "жезл", "зола", "кадр", "лист", "лупа", "обоз", "овал", "перо", "сейф", "свая", "танк", "гипс", "плот", "сейф", "утюг", "часы", "вакса", "дамба", "лампа", "мотор", "радар", "туфля", "лорнет", "магнит", "фиала", "холст", "цевье", "депеша", "жемчуг", "звонок", "одеяло", "клапан", "панама", "рапира", "визитка", "жилетка", "изумруд", "молоток", "пантеон", "папирус", "серебро", "тетрадь", "изваяние", "лепесток", "автомат", " автопортрет", " деньги", "машина", "нога", "дверь", "книга", "стол", "монета", "орган", "письмо", "комната", "тело", "газета", "палец", "самолет", "завод", "журнал", "автомобиль", "бумага", "руководство", "оружие", "камень", "личность", "кожа", "кресло", "одежда", "поезд", "университет", "оборудование", "концерт", "выставка", "родина", "тайна", "трава", "лагерь", "кровать", "аппарат", "фронт", "стул", "ножницы", "гвоздодер", "стремянка", "ножовка", "плоскогубцы", "лом", "монтировка", "труборез", "стеклорез", "болторез", "тиски", "отвертка", "сверло", "молоток", "пассатижи", "мультиметр", "штангенциркуль", "рулетка", "угольник", "угломер", "напильник", "гвозди", "шуруп", "болт", "гайка", "винт", "дрель", "шило", "молот", "верстак", "долото", "рубанок", "стамеска", "краска", "топор", "кувалда", "удлинитель", "кабель", "розетка", "шпатель", "вантуз", "лопата", "скотч", "кирка", "перфоратор", "пила", "секатор", "шуруповёрт", "паяльник", "болгарка", "бензопила", "электропила", "библиотека", "буфет", "буфетница", "вешалка", "гамак", "гардероб", "гарнитур", "диван", "зеркало", "колыбель", "комод", "консоль", "кушетка", "пенал", "полка", "пуф", "раскладушка", "сейф", "сервант", "скамья", "софа", "стеллаж", "стенка", "стол", "столик", "стул", "табурет", "тахта", "трон", "трюмо", "тумба", "шезлонг", "ширма", "шифоньер", "шкаф", "этажерка", "стулья", "тумбочка", "лавка", "столешница", "кастрюля", "сковорода", "сковородка", "сотейник", "чайник", "скалка", "мясорубка", "дуршлаг", "терка", "толкушка", "открывалка", "овощечистка", "противень", "казан", "скороварка", "кофемолка", "кофемашина", "половник", "лопатка", "шумовка", "заварник", "блендер", "миксер", "пароварка", "соковыжималка", "кофейник", "турка", "ковш", "тостер", "измельчитель", "электрочайник", "черпак", "пароварка", "салатник", "тарелка", "миска", "стакан", "кружка", "чашка", "чаша", "нож", "вилка", "ложка", "соусник", "сахарница", "поднос", "бокал", "сервиз", "кувшин", "контейнер", "термос", "солонка", "перечница", "вагон", "электричка", "трамвай", "троллейбус", "грузовик", "самосвал", "погрузчик", "автофургон", "кабриолет", "снегоход", "монорельс", "мотоцикл", "скутер", "трактор", "такси", "бульдозер", "экскаватор", "мотороллер", "локомотив", "фургон", "паровоз", "электропоезд", "комбайн", "тягач", "фуникулер", "корабль", "пароход", "баржа", "судно", "яхта", "паром", "регата", "катер", "теплоход", "лайнер", "танкер", "линкор", "крейсер", "ледокол", "галера", "фрегат", "шхуна", "вертолет", "ракета", "дирижабль", "дельтаплан", "аэроплан", "аэростат", "параплан", "велосипед", "санки", "телега", "карета", "лодка", "каноэ", "парашют", "самокат", "рикша", "катамаран", "шлюпка", "байдарка", "повозка", "мяч", "кроссовки", "ракетки", "перчатки", "скакалка", "штанга", "гантели", "гиря", "обруч", "свисток", "шлем", "майка", "коньки", "клюшка", "шайба", "турник", "брусья", "ринг", "бита", "мишень", "дротики", "бутсы", "кимоно", "шар", "кегли", "канат", "обруч", "шорты", "винтовка", "велосипед", "санки", "кеды", "эспандер", "лыжи", "татами", "батут", "ласты", "капа", "таймер", "кубок", "медаль", "сетка", "гетры", "щитки", "ядро", "диск", "ворота", "снаряд", "форма", "волосы", "глаз", "голова", "горло", "гортань", "губы", "диафрагма", "желудок", "живот", "запястье", "зубы", "кисть", "кости", "легкие", "лицо", "лоб", "лодыжка", "локоть", "плечо", "позвоночник", "ребра", "ресницы", "рот", "рука", "сердце", "скелет", "стопа", "сустав", "ухо", "уши", "челюсть", "череп", "шея", "ласты", "купальник", "полотенце", "фотокамера", "видеокамера", "крем", "шлепанцы", "сланцы", "ручка", "пенал", "тетрадь", "папка", "замазка", "маркер", "линейка", "листки", "калькулятор", "блокнот", "органайзер", "клей", "кисточка", "краски", "степлер", "циркуль", "транспортир", "точилка", "ножницы", "дырокол", "ежедневник", "ластик", "пластилин", "скрепки", "скотч", "кнопки", "лупа", "стикер", "конверт", "файл", "картон", "гуашь", "чернильница", "перо", "обложка", "палитра", "грифель", "метла", "бревно", "локон", "бритва", "бланк", "кнопка", "обувь", "письмо", "карман", "корона", "двигатель"], ["абазинец", "абитуриент", "абонент", "абонентка", "абориген", "абстинент", "авантюрист", "авиатор", "автоматчик", " автомеханик", "автомобилист", "автомобилистка", "автор", "авторитет", "автослесарь", "агент", "агитатор", "агностик", "агрессор", "агробиолог", "агроном", "адвокат", "адепт", "администратор", "адмирал", "адонис", "адресат", "адъюнкт", "адъютант", "азиат", "азиатка", "аист", "академик", " аквалангист", "аквалангистка", "аккордеонист", "аккуратист", "аккуратистка", "акмеист", "акмеистка", "акробат", "акробатка", "аксакал", "актер", "актеришка", "актерка", " активист", "активистка", "актриса", "акула", "акушер", "акушерка", "акционер", "акционерка", "алеут", "алеутка", "аллигатор", "альбатрос", "альбинос", "альпака", "альпинист", "альпинистка", "альтруист", "альтруистка", "амазонка", "анаконда", "аналитик", "анархист", "анархистка", "англичанин", "англичанка", "анестезиолог", "анкилозавр", "аноним", "антилопа", "бабуля", "бабушка", "багетчик", "балерина", "брат", "сестра", "байдарочник", "бакалавр", "бакалейщик", "бактерия", "баловень", "баловница", "бандит", "бандитка", "банкир", "банкирша", "банкрот", "барабанщик", "барабанщица", "баран", "барашек", "бард", "барин", "бармен", "барменша", "барон", "баронесса", "барс", "барсук", "барынька", "барыня", "баскетболист", "баскетболистка", "бастард", "батенька", "батрак", "башмачник", "башмачница", "баянист", "бегемот", "беглец", "беглянка", "бегун", "бегунья", "давильщик", "далматинец", "дальтоник", "дама", "дамочка", "дантист", "даритель", "дарительница", "дачник", "дачница", "двоеборец", "двоечница", "дворник", "дворничиха", "дворняга", "дворняжка", "дворянин", "дворянка", "дворяночка", "дебютант", "дебютантка", "дева", "девица", "девушка", "девятиклассник", "девятиклассница", "барсук", "медведь", "бобр", "бык", "вол", "волк", "кабан", "еж", "жираф", "заяц", "кот", "крокодил", "кролик", "лев", "лось", "носорог", "олень", "слон", "тигр", "тюлень", "хорёк", "конь", "бизон", "леопард", "шакал", "крот", "хомяк", "лемур", "верблюд", "дикобраз", "бегемот", "буйвол", "ленивец", "зубр", "мамонт", "гепард", "ягуар", "мангуст", "горностай", "Аист", "воробей", "ворон", "голубь", "гусь", "дрозд", "дятел", "жаворонок", "журавль", "индюк", "орел", "павлин", "попугай", "сокол", "соловей", "страус", "тетерев", "ястреб", "пингвин", "пеликан", "коршун", "гриф", "грач", "снегирь", "чиж", "стервятник", "рябчик", "филин", "стриж", "кит", "дельфин", "осьминог", "краб", "карп", "рак", "омар", "тунец", "лосось", "спрут", "москит", "муравей", "паук", "червь", "комар", "кузнечик", "сверчок", "светлячок", "шершень", "шмель", "лебедь", "альбатрос", "белка", "лиса", "гадюка", "горилла", "зебра", "змея", "львица", "корова", "крыса", "лисица", "лошадь", "панда", "мышь", "обезьяна", "овца", "рысь", "черепаха", "лама", "кошка", "гиена", "собака", "пума", "коала", "воробей", "ворон", "голубь", "гусь", "дрозд", "дятел", "жаворонок", "журавль", "индюк", "орел", "павлин", "попугай", "сокол", "соловей", "страус", "тетерев", "ястреб", "пингвин", "пеликан", "коршун", "гриф", "снегирь", "чиж", "стервятник", "рябчик", "филин", "стриж", "ворона", "канарейка", "кукушка", "курица", "куропатка", "ласточка", "сова", "сорока", "утка", "цапля", "чайка", "синица", "сойка", "акула", "белуга", "каракатица", "горбуша", "косатка", "сельдь", "треска", "форель", "птица", "человек", "ирбис", "игрок", "кабан", "певец", "рысак", "чужак", "барбос", "вассал", "жадина", "минога", "павиан", "гадалка", "жеребец", "идеолог", "кавалер", "карапуз", "кенгуру", "пианист", "дворянин", "директор", "европеец", "животное", "менеджер", "напарник", "нетопырь", "невестка", "обезьяна", "тусовщик", "учащийся", "физиолог", "фасовщик", "футурист", "ребенок", "женщина", "отец", "жена", "душа", "мать", "президент", "сын", "муж", "автор", "мужчина", "товарищ", "гражданин", "принц", "принцесса", "гость", "мальчик", "девочка", "герой", "врач", "хозяин", "писатель", "руководитель", "специалист", "родитель", "поэт", "господин", "министр", "дух", "старик", "ребята", "участник", "папа", "доктор", "дочь", "председатель", "солдат", "художник", "парень", "генерал", "сотрудник", "собака", "немец", "сестра", "капитан", "работник", "офицер", "читатель", "учитель", "профессор", "командир", "враг", "дед", "дядя", "студент", "режиссер", "бабушка", "мастер", "артист", "сосед", "противник", "житель", "лидер", "зритель", "адъюнкта", "полковник", "князь"]
        ],
        _a);
    Words.words = __WEBPACK_IMPORTED_MODULE_0_lodash__(data).toPairs()
        .map(function (_a) {
        var k = _a[0], v = _a[1];
        return [k, v.map(function (x) { return x.map(function (y) { return y.toLowerCase(); }); })];
    }).fromPairs().value();
    var _a;
})(Words || (Words = {}));


/***/ }),

/***/ 250:
/*!*****************************************************************!*\
  !*** ./src/games/polyglot/wordsort/components/mainComponent.ts ***!
  \*****************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_introAnimationComponent__ = __webpack_require__(/*! core/ui/components/games/introAnimationComponent */ 144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_textPanelComponent__ = __webpack_require__(/*! core/ui/components/games/textPanelComponent */ 146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_behaviors_textOnCenterBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/textOnCenterBehavior */ 147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_utils_objects__ = __webpack_require__(/*! core/utils/objects */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_games_polyglot_wordsort_assets__ = __webpack_require__(/*! games/polyglot/wordsort/assets */ 179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_games_polyglot_wordsort_components_folderComponent__ = __webpack_require__(/*! games/polyglot/wordsort/components/folderComponent */ 251);

















var positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
    word: { y: 400 },
    wordMargin: 80,
    statusOffset: 150,
    paper: { y: -25 },
    animation: { y: 20 },
    arrow: { x: 160, y: 1040 },
});
var biPositions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].bi({
    button: { x: 520, y: 1030 },
    taskText: { y: 250 },
    paperInFolder: { x: [200, 215], y: [-400, 140] },
    taskSize: { width: 900, height: 160 },
}, {
    button: { x: 180, y: 1120 },
    taskText: { y: 220 },
    paperInFolder: { x: [215], y: [140] },
    taskSize: { width: 700, height: 160 },
});
var biValues = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_positions__["a" /* BiValue */].create({
    arrowVisible: true,
    paperDuration: 500,
    paperScale: 1
}, {
    arrowVisible: false,
    paperDuration: 300,
    paperScale: 0.9
});
var durations = {
    btn: 100
};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_15_games_polyglot_wordsort_assets__["b" /* Images */].bg(0));
        _this.taskText = _this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_textPanelComponent__["a" /* TextPanelComponent */]({ size: _this.current(biPositions.taskSize) }))
            .setBiPos(__WEBPACK_IMPORTED_MODULE_3_core_ui_common_positions__["a" /* BiValue */].map(biPositions.taskText, function (_a) {
            var y = _a.y;
            return ({ x: __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2, y: y });
        })).anchorCenter()
            .onOrientationChange(biPositions.taskSize, function (x, v) { return x.changePanel({ size: v }); });
        _this.paperGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_control__["a" /* Control */]()).anchorCenter().updatePos(__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2, __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].h2);
        _this.paperAll = _this.paperGroup.add(_this.makeImage(__WEBPACK_IMPORTED_MODULE_15_games_polyglot_wordsort_assets__["b" /* Images */].paper_all).anchorCenter()).onOrientationChange(biValues.paperScale, function (c, v) { return c.symmetricScale = v; });
        _this.btns = [_this.createButton(false), _this.createButton(true)];
        return _this;
    }
    MainComponent.prototype.createFolder = function (right) {
        return this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_16_games_polyglot_wordsort_components_folderComponent__["a" /* FolderComponent */], { right: right });
    };
    MainComponent.prototype.createArrow = function (right) {
        var pos = __WEBPACK_IMPORTED_MODULE_14_core_utils_objects__["a" /* Objects */].update(positions.arrow, { x: function (x) { return __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2 + __WEBPACK_IMPORTED_MODULE_13_core_utils_numbers__["a" /* Numbers */].sign(right) * x; } });
        return this.addImage(__WEBPACK_IMPORTED_MODULE_15_games_polyglot_wordsort_assets__["b" /* Images */].arrow(right)).setPos(pos).anchorCenter();
    };
    MainComponent.prototype.introAnimation = function () {
        return this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_introAnimationComponent__["a" /* IntroAnimationComponent */]))
            .anchorCenter().updatePos(__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2, __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].h2).startAnimation(false);
    };
    MainComponent.prototype.createButton = function (right) {
        var pos = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_positions__["a" /* BiValue */].map(biPositions.button, function (_a) {
            var x = _a.x, y = _a.y;
            return ({ x: __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2 + __WEBPACK_IMPORTED_MODULE_13_core_utils_numbers__["a" /* Numbers */].sign(right) * x, y: y });
        });
        var folder = this.createFolder(right);
        var arrow = this.createArrow(right).onOrientationChange(biValues.arrowVisible, function (x, v) {
            x.visible = v;
        });
        var btn = this.add(new __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_btn__["a" /* Btn */]("", function () {
        }, undefined, folder)).setBiPos(pos).setKey(right ? Phaser.KeyCode.RIGHT : Phaser.KeyCode.LEFT).anchorCenter();
        this.addAnswerBehavior(btn, right, { location: "top" });
        return { folder: folder, btn: btn, arrow: arrow };
    };
    MainComponent.prototype.onInit = function () {
        this.statusOptions.offset = positions.statusOffset;
        this.startIntro();
    };
    MainComponent.prototype.createTaskPaper = function () {
        if (this.isGameCompleted()) {
            return;
        }
        var text = this.getCurrentTask().word;
        var textOnCenter = new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_behaviors_textOnCenterBehavior__["a" /* TextOnCenterBehavior */](__WEBPACK_IMPORTED_MODULE_15_games_polyglot_wordsort_assets__["a" /* Fonts */].word, positions.wordMargin);
        var paper = this.paperGroup.add(this.makeImage(__WEBPACK_IMPORTED_MODULE_15_games_polyglot_wordsort_assets__["b" /* Images */].paper)).updatePos(0, positions.paper.y).anchorCenter()
            .addBehavior(textOnCenter).onOrientationChange(biValues.paperScale, function (c, v) { return c.symmetricScale = v; });
        textOnCenter.setText(text);
        this.paper = paper;
    };
    MainComponent.prototype.onAnswer = function (answer) {
        var arrow = this.btns[answer.answerId ? 1 : 0].arrow;
        __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].highlight(arrow, { repeat: 0, duration: this.current(biValues.paperDuration) / 2 });
        this.animationPaper();
    };
    MainComponent.prototype.animationPaper = function () {
        var _this = this;
        var oldPaper = this.paper;
        this.createTaskPaper();
        if (oldPaper) {
            this.bringToTop(oldPaper);
            var right_1 = this.prevTask.answers[0];
            var btn = this.btns[right_1 ? 1 : 0];
            var folder_1 = btn.folder;
            this.bringToTop(folder_1);
            __WEBPACK_IMPORTED_MODULE_11_core_ui_controls_controlUtl__["a" /* ControlUtl */].addAndSavePosition(folder_1, oldPaper, this);
            folder_1.setOnTop();
            this.btns.forEach(function (x) { return _this.bringToTop(x); });
            var sign = __WEBPACK_IMPORTED_MODULE_13_core_utils_numbers__["a" /* Numbers */].sign(right_1);
            var scale = { symmetricScale: [0.7, 0.32] };
            var to = __WEBPACK_IMPORTED_MODULE_12_core_ui_services_instances__["d" /* screenSizeService */].isPortrait
                ? this.current(biPositions.paperInFolder)
                : __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.current(biPositions.paperInFolder), { angle: [sign * -10, sign * 10] });
            __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__["a" /* Tweens */].start({
                target: oldPaper,
                to: __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, to, scale),
                easing: Phaser.Easing.Sinusoidal.In,
                onComplete: function () {
                    folder_1.addPaper();
                    _this.animationButton(right_1);
                    oldPaper.destroy(true);
                    _this.answersAreReady();
                },
                duration: this.current(biValues.paperDuration)
            });
        }
        else {
            this.answersAreReady();
        }
    };
    MainComponent.prototype.animationButton = function (right) {
        var btn = this.btns[right ? 1 : 0].btn;
        __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: btn,
            to: { y: btn.y + positions.animation.y, angle: __WEBPACK_IMPORTED_MODULE_13_core_utils_numbers__["a" /* Numbers */].sign(right) * 5 },
            easing: Phaser.Easing.Sinusoidal.InOut,
            duration: durations.btn,
            simpleYoyo: true
        });
    };
    MainComponent.prototype.onNewTask = function (task) {
        var _this = this;
        if (this.isFirstTask) {
            this.createTaskPaper();
            this.onIntroCompleteOrMemorize.addOnce(function () {
                _this.answersAreReady();
            });
        }
        var taskText = this.translate(__WEBPACK_IMPORTED_MODULE_15_games_polyglot_wordsort_assets__["c" /* Translations */].task) + "\n" +
            this.translate(__WEBPACK_IMPORTED_MODULE_15_games_polyglot_wordsort_assets__["c" /* Translations */].category(task.category));
        this.taskText.setProps(taskText);
        this.bg.key = this.gameKey(__WEBPACK_IMPORTED_MODULE_15_games_polyglot_wordsort_assets__["b" /* Images */].bg(task.category));
        this.btns.forEach(function (x) { return x.folder.setCategory(task.category); });
        this.prevTask = task;
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 251:
/*!*******************************************************************!*\
  !*** ./src/games/polyglot/wordsort/components/folderComponent.ts ***!
  \*******************************************************************/
/*! exports provided: FolderComponent */
/*! exports used: FolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_polyglot_wordsort_assets__ = __webpack_require__(/*! games/polyglot/wordsort/assets */ 179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);





var positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
    icon: [211, 176],
});
var FolderComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](FolderComponent, _super);
    function FolderComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nextPaperIndex = 0;
        return _this;
    }
    FolderComponent.prototype.onInit = function () {
        var _this = this;
        this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_polyglot_wordsort_assets__["b" /* Images */].folder(4));
        this.folderPapers = __WEBPACK_IMPORTED_MODULE_4_lodash__["range"](3).map(function (i) {
            return _this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_polyglot_wordsort_assets__["b" /* Images */].folder(3 - i)).fluentUpdate(function (x) { return x.visible = false; });
        });
        this.folderTop = this.addImage([__WEBPACK_IMPORTED_MODULE_3_games_polyglot_wordsort_assets__["b" /* Images */].folder(0), [0, 0]]);
        this.img = this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_polyglot_wordsort_assets__["b" /* Images */].icon(0, true)).setPos(positions.icon).anchorCenter();
    };
    FolderComponent.prototype.addPaper = function () {
        if (this.nextPaperIndex >= this.folderPapers.length) {
            return;
        }
        this.folderPapers[this.nextPaperIndex].visible = true;
        this.nextPaperIndex += 1;
    };
    FolderComponent.prototype.setOnTop = function () {
        var _this = this;
        var onTop = [
            this.folderPapers[1],
            this.folderPapers[2],
            this.folderTop,
            this.img
        ];
        onTop.forEach(function (x) { return _this.bringToTop(x); });
    };
    FolderComponent.prototype.setCategory = function (type) {
        this.img.key = this.gameKey(__WEBPACK_IMPORTED_MODULE_3_games_polyglot_wordsort_assets__["b" /* Images */].icon(type, this.props.right));
    };
    return FolderComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 252:
/*!**********************************************!*\
  !*** ./src/games/polyglot/wordsort/logic.ts ***!
  \**********************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils__ = __webpack_require__(/*! core/utils */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_polyglot_wordsort_words__ = __webpack_require__(/*! games/polyglot/wordsort/words */ 191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__levels__ = __webpack_require__(/*! ./levels */ 190);







var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_2_core_utils__["e" /* RandomGenerator */]();
        _this.wordSeq = __WEBPACK_IMPORTED_MODULE_5_lodash__["fromPairs"](__WEBPACK_IMPORTED_MODULE_4_games_polyglot_wordsort_words__["a" /* Words */].allCategories.map(function (x) { return [x, new __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__["b" /* UniqSeq */](1, _this.rng)]; }));
        _this.categorySeq = new __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__["b" /* UniqSeq */](1, _this.rng);
        return _this;
    }
    Logic.prototype.createTaskData = function (level) {
        if (this.isTutorial) {
            level = __WEBPACK_IMPORTED_MODULE_6__levels__["a" /* levels */][this.taskIndex + 1];
        }
        var right = this.rng.bool();
        var category = this.categorySeq.nextFrom(level.category);
        var word = this.wordSeq[category].nextFrom(__WEBPACK_IMPORTED_MODULE_4_games_polyglot_wordsort_words__["a" /* Words */].words[category][right ? 1 : 0]);
        var answers = [right];
        return {
            word: word,
            category: category,
            answers: answers
        };
    };
    Logic.prototype.nextTask = function (level) {
        var task = this.createTaskData(level);
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ })

});
//# sourceMappingURL=8.bundle.js.map