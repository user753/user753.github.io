webpackJsonpNewGames([11],{

/***/ 152:
/*!********************************************!*\
  !*** ./src/games/speedread/ticker/meta.ts ***!
  \********************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets__ = __webpack_require__(/*! ./assets */ 187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(/*! ./levels */ 359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic__ = __webpack_require__(/*! ./logic */ 360);




var gameId = "ticker";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_2__levels__["a" /* levels */],
    enableDescreaseLevel: true,
    levelsSeqCounts: [{ seqCount: 1, maxLevel: 100 }]
};
var metaData = {
    gameId: gameId,
    title: "Ticker",
    logic: __WEBPACK_IMPORTED_MODULE_3__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_0__assets__["b" /* Images */].data,
    sounds: __WEBPACK_IMPORTED_MODULE_0__assets__["c" /* Sounds */].keys,
    atlasCount: 2,
    tutorialTaskCount: "manual",
    size: {
        width: 2048,
        height: 1280,
        heightMin: 1152
    }
};


/***/ }),

/***/ 155:
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

/***/ 156:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_GraphicsImg__ = __webpack_require__(/*! core/ui/controls/GraphicsImg */ 155);




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

/***/ 158:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



var CircleSeq = /** @class */ (function () {
    function CircleSeq(array) {
        this.array = array;
        this.index = 0;
    }
    CircleSeq.prototype.next = function () {
        var index = this.index;
        this.index = (this.index + 1) % this.array.length;
        return this.array[index];
    };
    CircleSeq.prototype.nextArray = function (count) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](count).map(function () { return _this.next(); });
    };
    return CircleSeq;
}());

var UniqSeq = /** @class */ (function () {
    function UniqSeq(max, rng) {
        if (rng === void 0) { rng = new __WEBPACK_IMPORTED_MODULE_0_core_utils_randomGenerator__["a" /* RandomGenerator */](); }
        this.max = max;
        this.rng = rng;
        this.index = 0;
        this.list = [];
        this.reset();
    }
    UniqSeq.prototype.checkMax = function (newMax) {
        if (newMax != this.max) {
            this.max = newMax;
            this.reset();
        }
        return this;
    };
    UniqSeq.prototype.reset = function () {
        var newList = this.rng.uniqArray(this.max, this.max);
        if (this.list.length > 0) {
            var last = __WEBPACK_IMPORTED_MODULE_2_lodash__["drop"](this.list, Math.floor(this.list.length * 0.6));
            var first = __WEBPACK_IMPORTED_MODULE_2_lodash__["difference"](newList, last);
            newList = first.concat(this.rng.shuffle(last));
        }
        this.list = newList;
    };
    UniqSeq.prototype.updateIndex = function () {
        this.index += 1;
        if (this.index >= this.list.length) {
            this.reset();
            this.index = 0;
        }
    };
    UniqSeq.prototype.nextArray = function (count) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](count).map(function () { return _this.next(); });
    };
    UniqSeq.prototype.next = function (max) {
        if (max) {
            this.checkMax(max);
        }
        var v = this.list[this.index];
        this.updateIndex();
        return v;
    };
    UniqSeq.prototype.nextSkip = function (v) {
        var n = this.next();
        if (this.list.length > 1 && n == v) {
            return this.nextSkip(v);
        }
        return n;
    };
    UniqSeq.prototype.nextFrom = function (arr, skip) {
        this.checkMax(arr.length);
        return arr[__WEBPACK_IMPORTED_MODULE_1_core_utils_undef__["a" /* Undef */].is(skip) ? this.next() : this.nextSkip(arr.indexOf(skip))];
    };
    UniqSeq.prototype.nextSubsetFrom = function (arr, count) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](count).map(function () { return _this.nextFrom(arr); });
    };
    return UniqSeq;
}());



/***/ }),

/***/ 159:
/*!**********************************************************************!*\
  !*** ./src/core/ui/components/games/gameUI/tutorialTextComponent.ts ***!
  \**********************************************************************/
/*! exports provided: TutorialTextComponent */
/*! exports used: TutorialTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_index__ = __webpack_require__(/*! core/assets/index */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_assets_images__ = __webpack_require__(/*! core/assets/images */ 46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameUI_panelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/panelComponent */ 156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 8);











var TutorialTextComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TutorialTextComponent, _super);
    function TutorialTextComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
            marginTop: 40,
            textMarginX: 40,
            padding: 80,
            buttonMargin: 10,
            btnWidth: 200,
            btn: { x: 250, y: 90 }
        });
        _this.positionsPortrait = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].update(_this.positions, {
            marginTop: 20,
            textMarginX: 40,
            padding: 40,
        });
        _this.getPositions = function () { return __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? _this.positionsPortrait : _this.positions; };
        _this.marginTop = 0;
        return _this;
    }
    TutorialTextComponent.prototype.make = function (props) {
        var _this = this;
        if (props === void 0) { props = {}; }
        this.marginTop = props.marginTop || this.getPositions().marginTop;
        this.minHeight = props.minHeight;
        this.panel = props.panel || {};
        this.back = this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameUI_panelComponent__["a" /* PanelComponent */]()).anchorCenterX();
        this.text = this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_index__["g" /* Txt */]("", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_1_core_assets_index__["c" /* CoreFonts */].tutorial(false), { align: props.textAlign || "left" }))).anchorCenter();
        var stepCount = props.stepCount || 1;
        if (stepCount > 1) {
            this.tutorialStore.setStepCount(stepCount);
            this.nextBtn = this.back.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__["b" /* IconBtn */]("далее", __WEBPACK_IMPORTED_MODULE_2_core_assets_images__["a" /* CoreImages */].next, function () {
                _this.tutorialStore.nextTutorialState();
            }, this.positions.buttonMargin));
            __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].highlight(this.nextBtn);
            this.onChangeForRun(function () { return _this.tutorialStore.isLastStep; }, function (isLastStep) {
                _this.nextBtn.visible = !isLastStep;
            });
        }
        this.onChangeForRun(function () { return __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].screenSize; }, function (_a) {
            var width = _a.width, height = _a.height;
            // const btnWidth = this.nextBtn ? this.positions.btnWidth : 0
            var btnWidth = 0;
            _this.text.textControl.wordWrapWidth = __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].realWidth - _this.getPositions().textMarginX * 2 - btnWidth;
            _this.updateSize();
        });
        return this;
    };
    TutorialTextComponent.prototype.updateSize = function () {
        var textHeight = this.text.height + this.getPositions().padding;
        var height = this.minHeight ? Math.max(this.minHeight, textHeight) : textHeight;
        this.back.updatePos(__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2, this.marginTop - __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].topOffset);
        var width = __WEBPACK_IMPORTED_MODULE_10_core_utils_undef__["a" /* Undef */].map(this.panel.size, function (x) { return x.width; }) || __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].realWidth - this.getPositions().padding;
        this.back.setProps(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.panel, { size: { width: width, height: height } }));
        this.text.updatePos(__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2, this.back.height / 2 + this.back.y);
        this.text.updatePivot();
        this.back.visible = !!this.text.text;
        if (this.nextBtn) {
            this.nextBtn.updatePos(this.back.width - this.positions.btn.x, this.back.height - this.positions.btn.y);
        }
        this.back.updatePivot();
    };
    TutorialTextComponent.prototype.onPropsUpdate = function () {
        this.text.text = this.props;
        this.updateSize();
    };
    return TutorialTextComponent;
}(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 187:
/*!**********************************************!*\
  !*** ./src/games/speedread/ticker/assets.ts ***!
  \**********************************************/
/*! exports provided: Sounds, Translations, Fonts, Images */
/*! exports used: Fonts, Images, Sounds, Translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Sounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Translations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);

var Sounds;
(function (Sounds) {
    Sounds.navedenie = "navedenie";
    Sounds.slide_kard = "slide_kard";
    Sounds.slide = "slide";
    Sounds.keys = ["bg", Sounds.slide, Sounds.navedenie, Sounds.slide_kard];
})(Sounds || (Sounds = {}));
var Translations;
(function (Translations) {
    Translations.speed = "speed";
    Translations.tutor1 = "tutor1";
    Translations.tutor2 = "tutor2";
})(Translations || (Translations = {}));
var Fonts;
(function (Fonts) {
    Fonts.word = {
        fontSize: 60, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black, align: "center"
    };
    Fonts.speed = {
        fontSize: 90, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].white, align: "center"
    };
    Fonts.question = {
        fontSize: 40, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].white, align: "center"
    };
})(Fonts || (Fonts = {}));
var Images;
(function (Images) {
    Images.bg = "bg";
    Images.otvet_1 = "otvet_1";
    Images.otvet_2 = "otvet_2";
    Images.white = "white";
    Images.puz = function (i) { return "puz_" + i; };
    Images.vopros = "vopros";
    Images.data = {
        sprites: []
    };
})(Images || (Images = {}));


/***/ }),

/***/ 355:
/*!****************************************************************!*\
  !*** ./src/games/speedread/ticker/components/mainComponent.ts ***!
  \****************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_utils_randomGenerator__ = __webpack_require__(/*! core/utils/randomGenerator */ 64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_games_speedread_ticker_components_introComponent__ = __webpack_require__(/*! games/speedread/ticker/components/introComponent */ 356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_games_speedread_ticker_components_questionComponent__ = __webpack_require__(/*! games/speedread/ticker/components/questionComponent */ 357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_games_speedread_ticker_components_readComponent__ = __webpack_require__(/*! games/speedread/ticker/components/readComponent */ 358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets__ = __webpack_require__(/*! ../assets */ 187);
















var durations = {
    mainGroup: 500,
    question: 200,
    intro: 1000,
    readDelay: 1000,
    readDelayTutorial: 3000
};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            questionTo: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 830 },
            puz: [
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(400, 300, "0"),
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(700, 100, "3"),
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(1200, 300, "2"),
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(1700, 200, "4"),
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(1600, 600, "2"),
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(1500, 1100, "4"),
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(1000, 1000, "1"),
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(600, 1200, "3"),
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(500, 600, "2"),
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(300, 900, "2"),
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(900, 500, "0"),
                Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(1300, 700, "1"),
            ]
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].bi({
            questionFrom: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 650 },
            speed: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 210 },
        }, {
            questionFrom: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 670 },
            speed: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 110 },
        });
        _this.rng = new __WEBPACK_IMPORTED_MODULE_10_core_utils_randomGenerator__["a" /* RandomGenerator */]();
        _this.puzSeq = new __WEBPACK_IMPORTED_MODULE_9_core_utils_circleSeq__["b" /* UniqSeq */](1);
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_15__assets__["b" /* Images */].bg);
        _this.puzList = _this.positions.puz.map(function (_a) {
            var x = _a[0], y = _a[1], puz = _a[2];
            return _this.addImage(__WEBPACK_IMPORTED_MODULE_15__assets__["b" /* Images */].puz(puz)).anchorCenter().updatePos(x, y);
        });
        _this.mainGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_control__["a" /* Control */]());
        _this.speedText = _this.mainGroup.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_txt__["a" /* Txt */]("", __WEBPACK_IMPORTED_MODULE_15__assets__["a" /* Fonts */].speed))
            .anchorCenter()
            .setPos(__WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].center());
        return _this;
    }
    MainComponent.prototype.showRead = function (visible) {
        var _this = this;
        if (this.tutorial && !visible) {
            this.tutorial.setProps(this.translate(__WEBPACK_IMPORTED_MODULE_15__assets__["d" /* Translations */].tutor2));
        }
        if (this.isFirstTask && visible) {
            return;
        }
        var run = function () {
            _this.playSound(__WEBPACK_IMPORTED_MODULE_15__assets__["c" /* Sounds */].slide);
            var _a = visible ? [0, -__WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].width] : [-__WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].width, 0], start = _a[0], end = _a[1];
            _this.mainGroup.x = start;
            __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__["a" /* Tweens */].start({
                target: _this.mainGroup,
                to: { x: end },
                reverse: true,
                easing: Phaser.Easing.Sinusoidal.InOut,
                duration: durations.mainGroup,
                onComplete: function () {
                    if (!visible) {
                        _this.showSpeed(true);
                        var start_1 = _this.tweenQuestion(true);
                        start_1.chain(_this.question.tweenButtons(true));
                        start_1.start();
                    }
                    else {
                        _this.startRead();
                    }
                }
            });
        };
        if (visible) {
            var end = this.tweenQuestion(false);
            this.question.tweenButtons(false).chain(end).start();
            end.onComplete.addOnce(function () {
                run();
            });
        }
        else {
            this.question.showText();
            run();
        }
    };
    MainComponent.prototype.tweenQuestion = function (show) {
        this.question.y = this.current(this.biPositions.questionFrom).y;
        return __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.question,
            to: { y: this.positions.questionTo.y },
            reverse: show,
            notStart: true,
            easing: Phaser.Easing.Sinusoidal.InOut,
            duration: durations.question,
        });
    };
    MainComponent.prototype.introAnimation = function () {
        var intro = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_12_games_speedread_ticker_components_introComponent__["a" /* IntroComponent */]));
        return {
            start: function () {
            },
            onComplete: __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_signals__["a" /* Signals */].bind(this.delay(durations.intro), function () {
                return __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_controlUtl__["a" /* ControlUtl */].hideAndDestroy(intro);
            })
        };
    };
    MainComponent.prototype.onInit = function () {
        var _this = this;
        this.statusOptions.waitCompleteBeforeNewTask = true;
        this.introOptions.runOnNewTaskAfter = true;
        this.read = this.mainGroup.add(this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_14_games_speedread_ticker_components_readComponent__["a" /* ReadComponent */], { onComplete: function () { return _this.showRead(false); } })).anchorCenter()
            .setPos(__WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].center()).fluentUpdate(function (x) { return x.visible = false; });
        this.question = this.mainGroup.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_13_games_speedread_ticker_components_questionComponent__["a" /* QuestionComponent */])).anchorCenter()
            // .setBiPos(BiValue.map(this.biPositions.questionFrom, p => ({...p, x: p.x + Sizes.width}) ) )
            .updatePos(__WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].w2 + __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].width, this.positions.questionTo.y);
        this.startIntro();
        if (this.isTutorial) {
            this.tutorial = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */]).make());
        }
    };
    MainComponent.prototype.showSpeed = function (visible) {
        this.speedText.visible = visible;
        this.read.visible = !visible;
    };
    MainComponent.prototype.startRead = function () {
        var _this = this;
        var delay = this.isTutorial ? durations.readDelayTutorial : durations.readDelay;
        this.disableInputOn(this.delay(delay)).addOnce(function () {
            _this.showSpeed(false);
            _this.playSound(__WEBPACK_IMPORTED_MODULE_15__assets__["c" /* Sounds */].slide_kard);
            _this.read.showAllText();
        });
    };
    MainComponent.prototype.onNewTask = function (task) {
        if (this.tutorial) {
            this.tutorial.setProps(this.translate(__WEBPACK_IMPORTED_MODULE_15__assets__["d" /* Translations */].tutor1));
        }
        this.speedText.text = this.translate(__WEBPACK_IMPORTED_MODULE_15__assets__["d" /* Translations */].speed) + " " + task.speed;
        this.speedText.updatePivot();
        if (this.isFirstTask) {
            this.startRead();
        }
        else {
            this.showRead(true);
        }
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 356:
/*!*****************************************************************!*\
  !*** ./src/games/speedread/ticker/components/introComponent.ts ***!
  \*****************************************************************/
/*! exports provided: IntroComponent */
/*! exports used: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_randomGenerator__ = __webpack_require__(/*! core/utils/randomGenerator */ 64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_speedread_ticker_assets__ = __webpack_require__(/*! games/speedread/ticker/assets */ 187);








var durations = {
    puz: 1000,
    delay: 300
};
var IntroComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](IntroComponent, _super);
    function IntroComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            puz: [
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(400, 300, "0"),
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(700, 100, "3"),
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(1200, 300, "2"),
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(1700, 200, "4"),
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(1600, 600, "2"),
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(1500, 1100, "4"),
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(1000, 1000, "1"),
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(600, 1200, "3"),
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(500, 600, "2"),
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(300, 900, "2"),
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(900, 500, "0"),
                Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(1300, 700, "1"),
            ]
        });
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_7_games_speedread_ticker_assets__["b" /* Images */].bg);
        _this.puzSeq = new __WEBPACK_IMPORTED_MODULE_4_core_utils_circleSeq__["b" /* UniqSeq */](1);
        _this.rng = new __WEBPACK_IMPORTED_MODULE_5_core_utils_randomGenerator__["a" /* RandomGenerator */]();
        _this.puzList = _this.positions.puz.map(function (_a) {
            var x = _a[0], y = _a[1], puz = _a[2];
            return _this.addImage(__WEBPACK_IMPORTED_MODULE_7_games_speedread_ticker_assets__["b" /* Images */].puz(puz)).anchorCenter().updatePos(x, y);
        });
        return _this;
    }
    // .fluentUpdate(x => x.alpha = this.rng.float()))
    IntroComponent.prototype.onInit = function () {
        var _this = this;
        this.puzList.map(function (x) {
            return __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
                target: x,
                to: { alpha: 0 },
                simpleYoyo: true,
                repeat: -1,
                duration: _this.rng.int(durations.puz, durations.puz / 2),
            });
        });
    };
    return IntroComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 357:
/*!********************************************************************!*\
  !*** ./src/games/speedread/ticker/components/questionComponent.ts ***!
  \********************************************************************/
/*! exports provided: QuestionComponent */
/*! exports used: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_speedread_ticker_assets__ = __webpack_require__(/*! games/speedread/ticker/assets */ 187);









var durations = {
    buttons: 200
};
var biValues = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_positions__["a" /* BiValue */].create({
    buttonScale: 1,
}, {
    buttonScale: 0.9,
});
var QuestionComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](QuestionComponent, _super);
    function QuestionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            answerMarin: -100,
            btnTextWidth: 500,
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].bi({
            buttons: { x: 0, y: 500 },
            buttonDistance: 400,
            wordWrap: 900,
            margin: { x: 590, y: 0, absolute: true },
        }, {
            buttons: { x: 0, y: 590 },
            buttonDistance: 600,
            wordWrap: 700,
            margin: { x: 0, y: 300, absolute: true },
        });
        _this.buttonsGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_control__["a" /* Control */]()).anchorCenter().setPos(_this.current(_this.biPositions.buttons));
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_8_games_speedread_ticker_assets__["b" /* Images */].vopros).anchorCenter();
        _this.question = _this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_txt__["a" /* Txt */]("", __WEBPACK_IMPORTED_MODULE_8_games_speedread_ticker_assets__["a" /* Fonts */].question)).anchorCenter()
            .fluentUpdate(function (x) { return x.wordWrapWidth = _this.current(_this.biPositions.wordWrap); });
        _this.buttons = [];
        return _this;
    }
    QuestionComponent.prototype.onNewTask = function (task) {
        this.createButtons(task);
        this.question.alpha = 0;
        this.buttons.forEach(function (x) { return x.textControl.alpha = 0; });
    };
    QuestionComponent.prototype.showText = function () {
        this.question.alpha = 1;
        this.buttons.forEach(function (x) { return x.textControl.alpha = 1; });
    };
    QuestionComponent.prototype.tweenButtons = function (show) {
        var _this = this;
        this.buttonsGroup.setPos(this.current(this.biPositions.buttons));
        var buttons = __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.buttonsGroup,
            to: { y: this.buttonsGroup.y - this.current(this.biPositions.buttonDistance) },
            reverse: show,
            notStart: true,
            easing: Phaser.Easing.Sinusoidal.InOut,
            duration: durations.buttons,
            onComplete: function () {
                if (show) {
                    _this.answersAreReady();
                }
            }
        });
        return buttons;
    };
    QuestionComponent.prototype.createButtons = function (task) {
        var _this = this;
        this.buttonsGroup.removeAll(true);
        this.buttonsGroup.symmetricScale = this.current(biValues.buttonScale);
        this.question.text = task.question.text;
        this.question.updatePivot();
        this.buttons = task.question.answers.map(function (word, i) {
            var btn = new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_btn__["c" /* ImageBtn */](word, _this.gameKey(__WEBPACK_IMPORTED_MODULE_8_games_speedread_ticker_assets__["b" /* Images */].otvet_2), function () {
            }, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_8_games_speedread_ticker_assets__["a" /* Fonts */].question, { wordWrap: true, wordWrapWidth: _this.positions.btnTextWidth }));
            btn.onHover(function (out) {
                if (!out) {
                    _this.playSound(__WEBPACK_IMPORTED_MODULE_8_games_speedread_ticker_assets__["c" /* Sounds */].navedenie);
                }
                return btn.key = _this.gameKey(out ? __WEBPACK_IMPORTED_MODULE_8_games_speedread_ticker_assets__["b" /* Images */].otvet_2 : __WEBPACK_IMPORTED_MODULE_8_games_speedread_ticker_assets__["b" /* Images */].otvet_1);
            });
            return _this.buttonsGroup.add(_this.addAnswerBehavior(btn, i == 0, { dark: true, margin: _this.positions.answerMarin, location: _this.isPortrait ? "left" : "bottom" }));
        });
        if (this.isPortrait) {
            __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableColumn(this.buttons, this.current(this.biPositions.margin));
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableRow(this.buttons, this.current(this.biPositions.margin));
        }
        this.buttonsGroup.updatePivot();
        this.updatePivot();
        if (this.isFirstTask) {
            this.tweenButtons(false).start();
        }
    };
    QuestionComponent.prototype.onInit = function () {
    };
    return QuestionComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 358:
/*!****************************************************************!*\
  !*** ./src/games/speedread/ticker/components/readComponent.ts ***!
  \****************************************************************/
/*! exports provided: ReadComponent */
/*! exports used: ReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_speedread_ticker_assets__ = __webpack_require__(/*! games/speedread/ticker/assets */ 187);






var count = 9;
var durations = {
    startDelay: 500,
};
var biValues = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_positions__["a" /* BiValue */].create({
    angle: 0,
}, {
    angle: 90,
});
var ReadComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ReadComponent, _super);
    function ReadComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            words: { y: -30 }
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
            margin: { x: 350, y: 200, absolute: true },
            bg: {
                angle: 0,
                scale: 1
            }
        }, {
            margin: { x: 350, y: 100, absolute: true },
            bg: {
                angle: 90,
                scale: 0.8
            }
        });
        _this.card = _this.addImage(__WEBPACK_IMPORTED_MODULE_5_games_speedread_ticker_assets__["b" /* Images */].white).anchorCenter();
        _this.text = _this.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_txt__["a" /* Txt */]("", __WEBPACK_IMPORTED_MODULE_5_games_speedread_ticker_assets__["a" /* Fonts */].word)).anchorCenter();
        return _this;
    }
    // bgAnimation(word: string){
    //   const text = new TextOnCenterBehavior(Fonts.word)
    //   const cardLeft = this.addImage(Images.white).anchorCenter()
    //     .addBehavior(text)
    //   const cardRight = this.addImage(Images.white).anchorCenter()
    //     .updatePos(screenSizeService.screenSize.width, 0)
    //   this.bringToTop(this.card)
    //   this.bringToTop(this.text)
    //   Tweens.start({
    //     to: {x: -cardLeft.width},
    //     target: cardLeft,
    //     easing: Phaser.Easing.Sinusoidal.Out,
    //     duration: durations.move,
    //     onComplete: () => cardLeft.destroy()
    //   })
    //   Tweens.start({
    //     to: {x: 0},
    //     target: cardRight,
    //     easing: Phaser.Easing.Sinusoidal.In,
    //     duration: durations.move,
    //     onComplete: () => cardRight.destroy()
    //   })
    // }
    ReadComponent.prototype.onNewTask = function (task) {
    };
    ReadComponent.prototype.showAllText = function () {
        this.disableInput(true);
        this.showWord(this.getCurrentTask(), 0);
    };
    ReadComponent.prototype.showWord = function (task, index) {
        var _this = this;
        var delay = 60 * 1000 / task.speed;
        if (index >= task.textWords.length) {
            this.delay(durations.startDelay).addOnce(function () {
                _this.disableInput(false);
                _this.props.onComplete();
            });
            return;
        }
        else {
            this.text.text = task.textWords[index];
            this.text.updatePivot();
            var callback = function () {
                _this.delay((index == 0 && delay < durations.startDelay ? durations.startDelay : delay)).addOnce(function () {
                    return _this.showWord(task, index + 1);
                });
            };
            if (this.isGamePaused) {
                this.unpauseCallback = callback;
            }
            else {
                callback();
            }
        }
    };
    ReadComponent.prototype.onGamePauseChanged = function (isPaused) {
        if (!isPaused && this.unpauseCallback) {
            this.unpauseCallback();
            this.unpauseCallback = undefined;
        }
    };
    ReadComponent.prototype.onInit = function () {
        this.updatePivot();
    };
    return ReadComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 359:
/*!**********************************************!*\
  !*** ./src/games/speedread/ticker/levels.ts ***!
  \**********************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


function level(speed) {
    return { speed: speed };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])(__WEBPACK_IMPORTED_MODULE_1_lodash__["range"](20).map(function (x) { return level(100 + x * 50); }));


/***/ }),

/***/ 360:
/*!*********************************************!*\
  !*** ./src/games/speedread/ticker/logic.ts ***!
  \*********************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic_index__ = __webpack_require__(/*! core/logic/index */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_logic_sys__ = __webpack_require__(/*! core/logic/sys */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_index__ = __webpack_require__(/*! core/utils/index */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_strings__ = __webpack_require__(/*! core/utils/strings */ 67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_speedread_ticker_data__ = __webpack_require__(/*! games/speedread/ticker/data */ 361);







var tutorialSpeed = 50;
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_4_core_utils_index__["e" /* RandomGenerator */]();
        _this.textSeq = new __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__["b" /* UniqSeq */](__WEBPACK_IMPORTED_MODULE_6_games_speedread_ticker_data__["a" /* TickerData */].data.length);
        return _this;
    }
    Logic.prototype.nextTask = function (level) {
        if (this.isTutorial && this.taskIndex > 0) {
            return undefined;
        }
        var prevTask = this.getPrevTask();
        var speed = this.isTutorial ? tutorialSpeed : level.speed;
        var _a = prevTask && !prevTask.lastBlock
            ? [prevTask.textIndex, prevTask.blockIndex + 1]
            : [this.textSeq.next(), 0], textIndex = _a[0], blockIndex = _a[1];
        var text = this.isTutorial ? __WEBPACK_IMPORTED_MODULE_6_games_speedread_ticker_data__["a" /* TickerData */].tutorialText : __WEBPACK_IMPORTED_MODULE_6_games_speedread_ticker_data__["a" /* TickerData */].data[textIndex];
        var lastBlock = text.blocks.length <= blockIndex + 1;
        var block = text.blocks[blockIndex];
        var textWords = block.text.split(/\n|\s/).map(function (x) { return x.trim(); }).filter(function (x) { return /(\w|[А-Яа-я])+/.test(x); });
        var questionData = this.rng.sample(block.questions);
        var wrong = this.rng.sample(__WEBPACK_IMPORTED_MODULE_5_core_utils_strings__["a" /* Strings */].splitTrim(questionData.wrong, ";"));
        var correct = questionData.correct;
        var answer = this.rng.bool();
        var questionAnswers = answer ? [correct, wrong] : [wrong, correct];
        var answers = [answer];
        var question = {
            text: questionData.text,
            answers: questionAnswers
        };
        var task = {
            lastBlock: lastBlock,
            blockIndex: blockIndex,
            speed: speed,
            textIndex: textIndex,
            textWords: textWords,
            question: question,
            answers: answers
        };
        if (__WEBPACK_IMPORTED_MODULE_2_core_logic_sys__["a" /* Sys */].showLog) {
            console.log("task", task);
        }
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic_index__["c" /* GameLogic */]));



/***/ }),

/***/ 361:
/*!********************************************!*\
  !*** ./src/games/speedread/ticker/data.ts ***!
  \********************************************/
/*! exports provided: TickerData */
/*! exports used: TickerData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerData; });
var TickerData;
(function (TickerData) {
    TickerData.tutorialText = {
        text: "",
        blocks: [
            {
                text: "Игрушки испугались и стали прятаться кто куда. По улице игрушечного города мчался Тигр.",
                questions: [{
                        text: "Кто мчался по городу?",
                        correct: "Тигр",
                        wrong: "Пегас; Игорь; Лань"
                    }]
            }
        ]
    };
    TickerData.data = [
        {
            "text": "Текст 1. Елизавета I",
            "blocks": [
                {
                    "text": "Елизавета I, без сомнения, является одним из самых великих монархов Великобритании. На пути к престолу ей довелось пережить немало трудных моментов и справляться с бесчисленными происками политических оппонентов, но к моменту окончания ее правления Англия переживала эпоху благоденствия и небывалого расцвета.",
                    "questions": [
                        {
                            "text": "О ком идет речь в рассказе?",
                            "correct": "Елизавета I",
                            "wrong": "Карл II;  Екатерина V;  Генрих I"
                        },
                        {
                            "text": "С чем Елизавете I приходилось справляться?",
                            "correct": "происки политических оппонентов",
                            "wrong": "происки абонентов; житейские трудности"
                        }
                    ]
                },
                {
                    "text": "Елизавета стала полноправным игроком в политической игре еще в юном возрасте – после смерти короля Генриха VIII положение страны на мировой арене пошатнулось. Впрочем, изначально ее никто не рассматривал как кандидата на трон – она была третьей «в очереди» на корону, к тому же отец практически сразу дал ей статус незаконнорожденной. Королевой Англии она стала в 25 лет, пережив брата и сестру. ",
                    "questions": [
                        {
                            "text": "Сколько Елизавете было лет, когда она стала королевой Англии?",
                            "correct": "25",
                            "wrong": "31;  28 и с половиной;  55"
                        },
                        {
                            "text": "Правда ли, что изначально Елизавету I никто не рассматривал как кандидата на трон?",
                            "correct": "правда ",
                            "wrong": "неправда; неверно"
                        },
                        {
                            "text": "Каким по счету кандидатом Елизавета была в очереди на трон?",
                            "correct": "третий",
                            "wrong": "четвертый; первый; пятый "
                        }
                    ]
                },
                {
                    "text": "Взойдя на престол, приоритетом она определила для себя прекращение религиозных конфликтов, которые просто-таки разрывали страну на части. Но в историю она вошла прежде всего как Непорочная Королева – Елизавета так и не вышла замуж, что многие связывают с психологической травмой, полученной после казни ее матери, Анны Болейн. ",
                    "questions": [
                        {
                            "text": "Что условно разрывало страну на части?",
                            "correct": "религиозные конфликты ",
                            "wrong": "война; бюрократы; бандитизм"
                        },
                        {
                            "text": "Была ли Елизавета I замужем? ",
                            "correct": "нет",
                            "wrong": "да;  да, но не долго"
                        },
                        {
                            "text": "Как звали маму Елизаветы I?",
                            "correct": "Анна Болейн ",
                            "wrong": "Клара Блэк; Марлена Бодлер"
                        }
                    ]
                },
                {
                    "text": "Некоторые историки утверждают, что брак она рассматривала прежде всего как помеху и предпочла посвятить свою жизнь благополучию страны и народа. Время правления Eлизаветы І историки отмечают как период небывалого расцвета изящных искусств и мореплавания: именно в ее годы зажглись звезды таких талантов как Уильям Шекспир и Уолтер Рэлей. Но королеве также пришлось справляться и с большим количеством «неженских» вызовов, защищая территорию от «Непобедимой Армады» Испании или претензиями на британский престол Марии Стюарт.",
                    "questions": [
                        {
                            "text": "Что активно развивалось в годы правления Елизаветы I?",
                            "correct": "искусство и мореплавание",
                            "wrong": "аграрная промышленность; машиностроение "
                        },
                        {
                            "text": "Чему Елизавета I предпочла посвятить свою жизнь?",
                            "correct": "страна и народ",
                            "wrong": "церковь и больница; поиск мужа; изучение науки "
                        },
                        {
                            "text": "От кого приходилось защищать территорию?",
                            "correct": "испанская армада",
                            "wrong": "вторжение греков; эпидемия; нашествие варваров"
                        }
                    ]
                },
                {
                    "text": "Елизавета блестяще справилась со всеми трудностями – испанская армада была повержена, а Мария Стюарт казнена. Величественная и могущественная – именно так британцы отзываются об одной из наиболее ярких представительниц монархии. ",
                    "questions": [
                        {
                            "text": "Удалось ли Елизавете I справиться со всеми трудностями?",
                            "correct": "да",
                            "wrong": "нет"
                        },
                        {
                            "text": "Как о ней отзывались британцы?",
                            "correct": "положительно",
                            "wrong": "негативно "
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 2. Княгиня Ольга",
            "blocks": [
                {
                    "text": "Ольга, супруга киевского князя Игоря, отличалась исключительной для женщины того времени выдержкой, сильным характером и…бесконечной любовью к своему мужу. После того, как в 945 году его жестоко казнили древляне, все свои сильные стороны княгиня смогла проявить в полную силу. Некоторые считают, что ее мстительность и жестокость была неоправданной, но это каждый волен определить для себя сам.",
                    "questions": [
                        {
                            "text": "Кто казнил князя Игоря?",
                            "correct": "древляне",
                            "wrong": "сельчане; бояре; монголы"
                        },
                        {
                            "text": "Правда ли, что княгиня Ольга обладала сильным характером?",
                            "correct": "правда ",
                            "wrong": "неправда;  нет, не обладала  "
                        }
                    ]
                },
                {
                    "text": "Итак, сначала в запертой бане были сожжены живьем древлянские посланцы, миссией которых было убедить княгиню выйти замуж за их князя и передать киевские земли в его правление. \n\nДалее ее месть распространилась на целый город – так был сожжен дотла древний Искоростень, столица древлянских земель.\n",
                    "questions": [
                        {
                            "text": "В чем убеждали княгиню древлянские посланцы?",
                            "correct": "выйти замуж за их князя",
                            "wrong": "не мстить за убитого князя; передать им бразды правления"
                        },
                        {
                            "text": "Что сделала княгиня с древним городом Искоростень?",
                            "correct": "сожгла дотла ",
                            "wrong": "объехала стороной; взяла дань; лишила путей и сообщений"
                        }
                    ]
                },
                {
                    "text": "Ольге также пришлось одной воспитывать сына, которому было на момент смерти отца всего три года: она правила в качестве регента до наступления его совершеннолетия. Но на счету княгини не только массовые убийства – она вошла в историю как талантливый реформатор и мудрый правитель: пока ее сын Святослав возглавлял военные походы, Ольга брала власть в свои руки. ",
                    "questions": [
                        {
                            "text": "Как звали сына княгини Ольги?",
                            "correct": "Святослав",
                            "wrong": "Олег; Александр; Владимир"
                        },
                        {
                            "text": "Сколько лет было Святославу на момент смерти отца?",
                            "correct": "три",
                            "wrong": "девять; восемнадцать; четыре"
                        }
                    ]
                },
                {
                    "text": "Также известна как первая правительница Киевской Руси, принявшая христианство до крещения славян и получившая титул святой равноапостольной (только пять женщин за всю историю христианства были удостоены такой чести).",
                    "questions": [
                        {
                            "text": "Правда ли, что княгиня Ольга была первой правительницей Киевской Руси, принявшей христианство? ",
                            "correct": "да",
                            "wrong": "нет"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 3. Лакшми Бай",
            "blocks": [
                {
                    "text": "Лакшми Бай – героиня Индийского народного восстания (восстания сипаев) 1857 года. Была супругой джансийского князя Гангадара Рао. К сожалению, ее первенец погиб в младенчестве, а вскоре умер и любимый супруг. Перед его смертью они усыновили мальчика, которого британская власть отказалась признавать законным наследником трона несмотря на соблюдение всех бюрократических процедур. ",
                    "questions": [
                        {
                            "text": "Что отказывалась признавать британская власть?",
                            "correct": "законность наследования трона",
                            "wrong": "народное восстание; законность женитьбы"
                        },
                        {
                            "text": "В каком году было народное восстание?",
                            "correct": "1857 ",
                            "wrong": "1960; 1467"
                        }
                    ]
                },
                {
                    "text": "Рани получила приказ от генерал-губернатора Далхуси покинуть свой дом и отказаться от титула. Женщина разоблачила план коварного вельможи и отказалась передать свои владения в его руки. В мае 1857 года вспыхнул первый народный бунт, который вылился в Первую войну Индии за независимость от Британской империи. ",
                    "questions": [
                        {
                            "text": "Борьба за независимость от кого велась в 1857 году в Индии?",
                            "correct": "Британская империя",
                            "wrong": "Османская империя; Римская империя"
                        },
                        {
                            "text": "Что хотел генерал-губернатор Далхуси от Лакшми?",
                            "correct": "отказ от титула и владений",
                            "wrong": "руки и сердца; поддержать народный бунт"
                        }
                    ]
                },
                {
                    "text": "Поначалу Лакшми держалась в стороне от активных действий, но после дерзкой попытки британцев под командованием генерала Хью Роуза захватить Джанси с оружием в руках бросилась защищать свой народ. Лакшми также была отличным инструктором и обучила военному искусству многих женщин, с которыми рука об руку сражалась на поле боя. ",
                    "questions": [
                        {
                            "text": "Чему Лакшми обучала других женщин?",
                            "correct": "военное искусство",
                            "wrong": "рукоделие и кулинария; политическая стратегия  "
                        }
                    ]
                },
                {
                    "text": "После поражения индусов ей вместе с сыном пришлось бежать, но бороться против британской оккупации она не переставала – согласно исторической хронике, она умерла во время сражения. Эта женщина является одним из символов сопротивления и героизма для многих поколений, показывая пример выдержки и отваги.",
                    "questions": [
                        {
                            "text": "Что символизирует Лакшми? ",
                            "correct": "героизм и сопротивление ",
                            "wrong": "красота и здоровье; созерцание и спокойствие "
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 4. Зенобия",
            "blocks": [
                {
                    "text": "Зенобия была царицей Пальмиры (современная Сирия) в ІІІ веке. Историки описывают ее как женщину невероятной красоты и обладательницу исключительно «неженского» ума. Некоторые даже шутливо называют ее «пустынной суфражисткой» – Зенобия держалась в присутствии других с гордостью и достоинством, не уступающим мужским, а любимыми ее занятиями были верховая езда, охота и…хороший алкоголь.",
                    "questions": [
                        {
                            "text": "В каком веке Зенобия была царицей Пальмиры?",
                            "correct": "III",
                            "wrong": "VI; II; X"
                        },
                        {
                            "text": "Любимые занятия Зенобии? ",
                            "correct": "верховая езда и охота",
                            "wrong": "вышивание и коллекционирование; прогулки и наблюдения "
                        }
                    ]
                },
                {
                    "text": "Ее мужем был царь Оденат II, который признал себя вассалом Римской империи в 258 году и принял титул Август. После его смерти Зенобия стала фактическим правителем Пальмиры (регентом при младшем сыне). Ей удалось продолжить дело супруга и расширить границы своих владений. ",
                    "questions": [
                        {
                            "text": "Как назывался титул, который принял Оденат II ?",
                            "correct": "Август",
                            "wrong": "Сентябрь; Июль; Цезарь"
                        },
                        {
                            "text": "В каком году царь Оденат II признал себя вассалом Римской империи?",
                            "correct": "258",
                            "wrong": "328; 564; 846"
                        }
                    ]
                },
                {
                    "text": "Зенобия уделяла особое внимание профессиональной подготовке своей армии, которая вскоре не только охраняла рубежи Пальмиры, но и рискнула организовать захватническую экспедицию. Усилия ее были успешными – в 269 году ее войска захватили Египет. Далее последовали рейды на Анатолию, Сирию, Палестину и Ливан. ",
                    "questions": [
                        {
                            "text": "В каком году войска Зенобии захватили Египет?",
                            "correct": "269",
                            "wrong": "198; 356; 272"
                        },
                        {
                            "text": "Что делала армия Зенобии?",
                            "correct": "охрана рубежей Пальмиры и захват территории ",
                            "wrong": "у Зенобии не было армии; была распущена после охраны Египта"
                        }
                    ]
                },
                {
                    "text": "Под ее контролем оказались крупнейшие торговые маршруты Ближнего Востока – именно тогда она приняла решение чеканить монеты с собственным профилем, которые бы выступали в качестве доказательства ее могущественности. Но конец властвованию Зенобии положил римский император Аврелиан – разбив её войска в битвах при Антиохии и Эмесе, вновь подчинил Пальмирское царство Римской империи. ",
                    "questions": [
                        {
                            "text": "Что должно было выступать доказательством могущества Зенобии?",
                            "correct": "отчеканенные монеты с ее профилем",
                            "wrong": "портреты на рекламных плакатах; рассказы и легенды жителей"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 5. Базина и Клотильда",
            "blocks": [
                {
                    "text": "Базина (дочь короля франков Хильперика І) и Клотильда (дочь Хериберта I) были двоюродными сестрами. Вместе им пришлось пережить немало горьких минут. Семья Базины пострадала от эпидемии дизентерии, единственный выживший брат был жестоко убит, девочку же отправили в возрасте семи лет в Аббатство Святого Креста в Пуатье. ",
                    "questions": [
                        {
                            "text": "Кем друг другу приходились Базина и Клотильда? ",
                            "correct": "двоюродные сестры",
                            "wrong": "лучшие подружки"
                        },
                        {
                            "text": "От чего пострадала семья Базины?",
                            "correct": "эпидемия дизентерии",
                            "wrong": "эпидемия гриппа; власть короля"
                        }
                    ]
                },
                {
                    "text": "Там находилась и лишенная всех титулов и наследства ее кузина Клотильда. Несмотря на тяжелые условия принцессам удалось выжить и уже в 589 году они возглавляют бунт против аббатиссы. Двум хрупким девушкам удалось собрать практически целую армию головорезов, воров и прочих сомнительных личностей и захватить территорию аббатства. ",
                    "questions": [
                        {
                            "text": "Кто входил в армию двух принцесс?",
                            "correct": "воры и головорезы",
                            "wrong": "рыцари и лучники; интеллигенция и друзья; купцы и гастролеры "
                        }
                    ]
                },
                {
                    "text": "Официальная церковь призвала власть применить самые жестокие меры наказания к принцессам, но они были помилованы королем Хильдебертом. Базина впоследствии вернулась к затворнической монастырской жизни, а Клотильда получила часть своих земель и вернула свой титул. ",
                    "questions": [
                        {
                            "text": "Кто предложил применить жестокие меры наказания?",
                            "correct": "церковь",
                            "wrong": "король; судья; Клотильда"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 6. Пуговицы",
            "blocks": [
                {
                    "text": "В древности люди, чтобы скрепить между собой края одежды, просто связывали их или использовали шнуровку, шипы растений, кости рыбы и другие подручные материалы. Первые предметы, напоминающие пуговицы, были изобретены в Индии в 2800—2600 до н. э. ",
                    "questions": [
                        {
                            "text": "Для чего использовали шипы растений, кости рыб и др. в древности?",
                            "correct": "скрепление краев одежды ",
                            "wrong": "коллекционирование; чистка зубов; личная гигиена "
                        }
                    ]
                },
                {
                    "text": "Но использовались они не для скрепления одежды, а как предмет украшения, и изготовлялись из ракушек. Пуговицы были разной формы, в том числе и круглой, в них проделывали дырочки, чтобы было удобно пришивать к одежде. \n\nА вот первые пуговицы, которые использовались именно для скрепления одежды, были изобретены в Турции в 1500 г. до н.э. и изготовлялись они из камня. \n",
                    "questions": [
                        {
                            "text": "Где и когда были изобретены пуговицы? ",
                            "correct": "Турция 1500 г. до н.э.",
                            "wrong": "Гималаи 1500 г. до н.э.; Танзания 1500 г. до н.э."
                        },
                        {
                            "text": "Из какого материала были изготовлены первые функциональные пуговицы?",
                            "correct": "камень",
                            "wrong": "дерево; резина; глина"
                        }
                    ]
                },
                {
                    "text": "Из-за свободного цельного кроя одежды во времена Средневековья, надобности в пуговицах просто не было. Только в 18 веке в Германии, когда появилась мода на облегающие туалеты, изобрели пуговицы, которые продевались в петли на другом конце одежды. Они стали популярными и были показателем роскоши и богатства. Так некоторые мужские костюмы застегивались от шеи до талии, по всем рукавам на сотни пуговиц. ",
                    "questions": [
                        {
                            "text": "Показателем чего являлись пуговицы?",
                            "correct": "роскошь и богатство",
                            "wrong": "отсутствие вкуса; бедность"
                        }
                    ]
                },
                {
                    "text": "До 19 века около 90% всех пуговиц использовали именно для мужских туалетов. Их изготовляли из золота, серебра, драгоценных камней и слоновой кости, чтобы демонстрировать социальный статус.",
                    "questions": [
                        {
                            "text": "Что демонстрировали пуговицы до 19 века? ",
                            "correct": "социальный статус",
                            "wrong": "интеллектуальные способности; нравственность"
                        }
                    ]
                },
                {
                    "text": "Кроме этого, на Руси пуговицы были главным оберегом от нечистой силы. Долгое время они для этого и пришивались на одежду. Внутрь плоской пуговицы помешали камушек или кусочек железа, который при движении издавал стук. Так на Руси отгоняли от себя негативную энергию. Само слово «пуговица» пошло от «пугалка».  ",
                    "questions": [
                        {
                            "text": "На Руси считалось, что пуговицы оберегают от ….?",
                            "correct": "нечистая сила",
                            "wrong": "дикие хищники; плохая погода; разбойники"
                        },
                        {
                            "text": "Само слово «пуговица» пошло от …?",
                            "correct": "«пугалка» ",
                            "wrong": "«пуговка»; «испуг»; «подцепка» "
                        }
                    ]
                },
                {
                    "text": "Спустя некоторое время пуговицы несли информационный характер. Они пришивались как знак, определяющий профессию или военный ранг. Сейчас они трансформировались в значки.\n\nТолько с 1930-х годов появились пластиковые пуговицы, которые пользуются популярностью до сих пор.\n",
                    "questions": [
                        {
                            "text": "В каких годах появились пластиковые пуговицы? ",
                            "correct": "1930-е",
                            "wrong": "1920-е; 80-е; 1956"
                        },
                        {
                            "text": "Означали ли пуговицы определенную профессию или военный ранг?",
                            "correct": "да",
                            "wrong": "нет"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 7. Шампанское",
            "blocks": [
                {
                    "text": "К 19 веку французская провинция Шампань славилась на всю Европу своими непревзойденными красными винами. Но постепенно аристократы начали массово употреблять белое вино. Дом Пьер Периньон, монах бенедиктинского ордена и винодел, чтобы угодить королю, решил найти способ создавать белое вино из темных сортов винограда пино нуар. Ягоды давили, чтобы получить сок, затем разливали в бочки и подвергали брожению. ",
                    "questions": [
                        {
                            "text": "Какому ордену принадлежал Пьер Периньон?",
                            "correct": "бенедиктинский",
                            "wrong": "августинский; доминиканский; тевтонский"
                        }
                    ]
                },
                {
                    "text": "Однако, из-за холодного климата Шампани, виноград собирали и отжимали достаточно поздно, и вино не успевало добродить до наступления весны. Когда становилось тепло, вино начинало повторно бродить, в процессе чего выделялся углекислый газ в виде пузырьков. Такое вино считали бракованным и просто выливали.",
                    "questions": [
                        {
                            "text": "Из-за чего в вине начинал выделяться углекислый газ?",
                            "correct": "повторное брожение",
                            "wrong": "скопившиеся вредности; смешение спирта"
                        }
                    ]
                },
                {
                    "text": "Напиток, который уже был разлит по бутылкам и случайно доставлен до заказчика, настолько понравился людям, что Дом Периньон начал совершенствовать процесс производства. Вино с пузыриками щекотало язык, и монах называл это «вкусом звезд». ",
                    "questions": [
                        {
                            "text": "Что делало «вино с пузырьками»? ",
                            "correct": "щекотало язык",
                            "wrong": "отдавало горчинкой; подслащивало язык "
                        }
                    ]
                },
                {
                    "text": "Чтобы бутылки не разрывало от пузырьков, Периньон стал разливать игристый напиток в тару из более прочного стекла и закрывать пробкой из дуба. А сосед-винодел Периньона Жан Удар заметил, что попадание света на вино пагубно сказывается на его вкусе. Он предложил разливать продукт в темные бутылки. \n\nТаким образом, провинции Мон-де-Шало и Шампань до сих пор считаются родиной шампанского. \n",
                    "questions": [
                        {
                            "text": "В какую тару в итоге разливалось вино?",
                            "correct": "темные стеклянные бутылки",
                            "wrong": "бутылки из синего стекла; глиняный кувшин"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 8. Расческа",
            "blocks": [
                {
                    "text": "Трудно поверить, но такого простого предмета как расческа могло бы и не быть, если бы не изобретательность наших давних предков. Чтобы выглядеть привлекательными для мужчин, женщины в древности использовали рыбий скелет и расчесывали им свои длинные волосы.",
                    "questions": [
                        {
                            "text": "Что использовали древние женщины в качестве расчески? ",
                            "correct": "рыбий скелет",
                            "wrong": "ветки от дерева; пальцы руки"
                        }
                    ]
                },
                {
                    "text": "Первый гребень из кости животного был найден на территории Древнего Рима, у него были штучно вырезаны зубчики, и даже имелась удобная ручка. \n\nСо временем люди научились делать расчески из кораллов, панциря черепахи и слоновой кости. Эти материалы использовались до самого 19 века. \n",
                    "questions": [
                        {
                            "text": "На чьей территории был найден первый гребень?",
                            "correct": "Древний Рим",
                            "wrong": "Новый Рим; Константинополь; Древний Египет "
                        },
                        {
                            "text": "Что из материалов использовалось для создания расчесок до 19 века?",
                            "correct": "кораллы и слоновая кость",
                            "wrong": "глина и камень; стекло и тигровая кость"
                        }
                    ]
                },
                {
                    "text": "В некоторых странах гребень был не просто предметом для волос, он подчеркивал, в первую очередь, материальный статус. Богатые могли себе позволить украшать расчески камнями, золотом и серебром.\n\nСлавяне считали гребень магическим предметом, поэтому тщательно его берегли. Они были уверенны, что ведьмы используют расчески, чтобы накладывать заклятия и сглазы. \n",
                    "questions": [
                        {
                            "text": "Чем украшали расчески?",
                            "correct": "камни, золото и серебро",
                            "wrong": "олово, ракушки и цветы; бижутерия и бисер"
                        },
                        {
                            "text": "Для чего ведьмы использовали расчески, согласно представлениям Славян?",
                            "correct": "заклятия и сглаз",
                            "wrong": "приворот; удача и счастье"
                        }
                    ]
                },
                {
                    "text": "На Руси девушки часто гадали на гребнях: его прятали на всю ночь под подушку и говорили: «Суженый-ряженый, приходи кудри причесывать». Также пользовался популярностью способ приворожить юношу или девушку с помощью расчески.\n\nА вот в Японии существовала милая традиция, согласно которой каждому юноше нужно было собственноручно изготовить гребень для возлюбленной и принести ей в дар. \n",
                    "questions": [
                        {
                            "text": "Куда девушки прятали гребень во время гадания?",
                            "correct": "под подушку",
                            "wrong": "под кровать; в шкаф; в дом к суженому"
                        },
                        {
                            "text": "Что нужно было сделать влюбленному юноше с гребнем, согласно японской традиции?",
                            "correct": "изготовить вручную",
                            "wrong": "выиграть в состязании; подложить любимой"
                        }
                    ]
                },
                {
                    "text": "Если избранница вплетала его в косы, то это был знак, что девушка разделает чувства юноши. Японцы использовали гребни в боях и сражениях, чтобы острыми зубцами поражать противников. \nНа гребнях искусные мастера вытачивали узоры и расписывали разными цветами.\n",
                    "questions": [
                        {
                            "text": "Помимо подарка, для чего еще японцы использовали гребни?",
                            "correct": "бои и сражения",
                            "wrong": "приготовление пищи; массаж головы"
                        }
                    ]
                },
                {
                    "text": "С приходом эпохи Возрождения появилась мода на высокие замысловатые прически. На это время ручка расчески существенно удлинилась, чтобы дамы могли без труда поправить огромное сооружение на голове.\n\nВ 17 веке специальность «мастер гребня» стала очень популярной и престижной. Чтобы изучить все тонкости, нужно было обучаться больше десяти лет. Благодаря мастерам гребни стали удобней и функциональней. \n",
                    "questions": [
                        {
                            "text": "Какая специальность, связанная с расческой, стала популярной в 17 веке?",
                            "correct": "«мастер гребня»",
                            "wrong": "«парикмахер»; «мастер красоты»"
                        },
                        {
                            "text": "На что появилась мода с приходом эпохи Возрождения?",
                            "correct": "высокие и замысловатые прически",
                            "wrong": "замысловатые платья; туфли с высоким каблуком"
                        }
                    ]
                },
                {
                    "text": "Появились отдельно расчески для объема волос, для расчесывания пробора, для бритья… Изготавливали гребни, в большинстве, из дерева, только аристократы могли позволить себе черепаховые панцири.\n\nТолько после 1862 года, когда был изобретен пластик, гребни стали достоянием всех людей без исключения.  \n",
                    "questions": [
                        {
                            "text": "Кто мог себе позволить расческу из панциря черепахи?",
                            "correct": "аристократы ",
                            "wrong": "крестьяне; бояре"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 9. Сведения о черепахах",
            "blocks": [
                {
                    "text": "Черепахи появились на Земле 200 миллионов лет назад, то есть задолго до динозавров. Современниками динозавров являются также лягушки, скаты, акулы, вараны, миноги.\nСамой большой из всех живущих сегодня на Земле черепах является кожистая черепаха, обитающая в морской воде. Ее обычный вес — около 450 кг. \n",
                    "questions": [
                        {
                            "text": "Кто появился раньше – динозавры или черепахи?",
                            "correct": "черепахи ",
                            "wrong": "динозавры; лягушки"
                        },
                        {
                            "text": "Какая черепаха является самой большой из ныне живущих на Земле? ",
                            "correct": "кожистая черепаха ",
                            "wrong": "морская черепаха; акулья черепаха; коньковая черепаха"
                        },
                        {
                            "text": "Сколько весит кожистая черепаха? ",
                            "correct": "450 кг",
                            "wrong": "810 кг; около 150 кг"
                        }
                    ]
                },
                {
                    "text": "Отдельные особи набирают и до 700 кг и имеют длину около 2 м.\nБольшие морские черепахи понимают «язык»… дельфинов. Приплывая для откладки яиц к побережью Никобарских островов в Индийском океане, черепахи не сразу выходят на берег, а ждут особого сигнала от дельфинов, которые оценивают обстановку на побережье и, если она благоприятна (нет врагов, хорошая погода и т.п.), с помощью специального звука подают черепахам команду двигаться к берегу.\n",
                    "questions": [
                        {
                            "text": "Чей «язык» понимают большие морские черепахи?",
                            "correct": "дельфины",
                            "wrong": "скаты; акулы; морские ежи"
                        },
                        {
                            "text": "В каком океане расположены Никобарские острова? ",
                            "correct": "Индийский",
                            "wrong": "Тихий; Южный; Атлантический"
                        },
                        {
                            "text": "Чего от дельфинов ждут черепахи? ",
                            "correct": "сигнал к движению",
                            "wrong": "помощь в кормежке; сигнал к освобождению"
                        }
                    ]
                },
                {
                    "text": "В пресных водах Северной Америки обитает каймановая черепаха, использующая свой язык в качестве… приманки. Когда у черепахи разыгрывается аппетит, она выставляет наружу свой обычно белый или светло-серый червеобразный извивающийся язык, который тут же становится красным, и ждет. Рыбы, заметив красного «червячка», бросаются в атаку и… оказываются непосредственно во рту черепахи. ",
                    "questions": [
                        {
                            "text": "Что использует каймановая черепаха в качестве приманки?",
                            "correct": "свой язык",
                            "wrong": "свой хвост; водоросли; маленьких рыбок"
                        },
                        {
                            "text": "Что делают рыбы, заметив красный язык черепахи?",
                            "correct": "бросаются в атаку",
                            "wrong": "уплывают прочь; дразнят черепаху"
                        }
                    ]
                },
                {
                    "text": "«Черепаха-атлант» была самой большой из известных черепах. Она весила столько же, сколько весят 60 человек.\nВ Канаде обитает пестрая черепаха, которая, впадая зимой в спячку, превращается в …настоящую ледышку, то есть температура ее тела опускается ниже нуля градусов. При этом более половины всей влаги, которая есть в черепахе, становится льдом, но это, тем не менее, не убивает животное, так как его клетки содержат незамерзающий глицерин.\n",
                    "questions": [
                        {
                            "text": "Как называется черепаха, которая впадая зимой в спячку, превращается ледышку?",
                            "correct": "пестрая",
                            "wrong": "ледяная; глицериновая"
                        },
                        {
                            "text": "Где обитает пестрая черепаха?",
                            "correct": "Канада",
                            "wrong": "Гималаи; Джунгли; Америка "
                        }
                    ]
                },
                {
                    "text": "Кожистые морские черепахи способны нырять на глубину свыше 1200 м и пребывать там по нескольку десятков минут. Подобные способности черепах объединяются тем, что мозг этих животных может работать без поступления кислорода.",
                    "questions": [
                        {
                            "text": "На какую глубину способны нырять кожистые морские черепахи? ",
                            "correct": "свыше 1200 м",
                            "wrong": "меньше 700 м; меньше 200 м"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 11. Динозавры",
            "blocks": [
                {
                    "text": "Самыми большими животными, из всех живших когда-либо на суше нашей планеты, считаются динозавры, чей вес мог достигать 80 тонн.\nДинозавры населяли Землю примерно 180 миллионов лет назад, а вымерли около 60 миллионов лет назад, в конце так называемого мелового периода.\n",
                    "questions": [
                        {
                            "text": "Какого максимального веса могли достигать динозавры? ",
                            "correct": "80 тонн",
                            "wrong": "20 тонн; 180 тонн; 60 тонн"
                        },
                        {
                            "text": "Как назывался период, в котором вымерли динозавры? ",
                            "correct": "Меловой",
                            "wrong": "Юрский; Пермский; Триасовый"
                        }
                    ]
                },
                {
                    "text": "Диплодок использовал хвост для балансирования, а также взмахивал им, чтобы отпугивать врагов. Подобно другим травоядным динозаврам, диплодок глотал большие камни. Они помогали перетирать листья и ветки в желудке. Он передвигался на четырёх огромных сильных ногах, каждая – в два раза больше роста человека.",
                    "questions": [
                        {
                            "text": "Для чего диплодок глотал большие камни?",
                            "correct": "перетирка листьев и веток",
                            "wrong": "очистка зубов; получение витаминов; укрепление костей"
                        }
                    ]
                },
                {
                    "text": "У диплодока была маленькая голова с очень маленьким мозгом. Ноздри располагались на верхушке головы, поэтому животное могло дышать, находясь почти всем телом под водой.\nДиплодок был одним из самых длинных динозавров, живших когда-либо. Он достигал 26 м (85 футов) в длину и весил около 26 тонн. \n",
                    "questions": [
                        {
                            "text": "Где располагались дыхательные ноздри у диплодока?",
                            "correct": "верхушка головы",
                            "wrong": "низ подбородка; середина затылка; середина носа  "
                        },
                        {
                            "text": "Сколько метров в длину достигал диплодок?",
                            "correct": "26",
                            "wrong": "85; 96; 45"
                        }
                    ]
                },
                {
                    "text": "Сильный скелет поддерживал невероятный вес змееподобной шеи, длинного туловища и похожего на кнут хвоста. Длинная шея диплодока достигала 8 м (26 футов) длины, поэтому он мог питаться верхушками высоких деревьев. Диплодок обдирал листья деревьев, но не мог разжевать их, имея слабые зубы.",
                    "questions": [
                        {
                            "text": "За счет чего диплодок мог доставать до верхушек деревьев?",
                            "correct": "длинная шея",
                            "wrong": "длинные лапы; сильный скелет"
                        },
                        {
                            "text": "На что был похож хвост у диплодока? ",
                            "correct": "кнут",
                            "wrong": "жгут; прут; змея"
                        }
                    ]
                },
                {
                    "text": "Исследуя зубы динозавров, учёные могут сказать, чем они питались. Травоядные животные имели плоские зубы, чтобы перетирать ими жёсткие растения, а плотоядные – заострённые зубы, чтобы кусать и раздирать мясо.\nТакже точно, изучая окаменевшие испражнения динозавров, учёные могут сделать вывод, чем питались эти животные.\n",
                    "questions": [
                        {
                            "text": "Благодаря чему ученые могут сделать вывод о пище динозавров? ",
                            "correct": "зубы и окаменевшие испражнения ",
                            "wrong": "кости и окаменевшие следы; расположение и растительная культура "
                        }
                    ]
                },
                {
                    "text": "Считается, что самым большим динозавром был брахиозавр, достигавший 28 метров длины (92 фута), и весил он, вероятно, 100 тонн, что равно весу 15 больших слонов.",
                    "questions": [
                        {
                            "text": "Как называется динозавр, который считается самым большим?",
                            "correct": "брахиозавр",
                            "wrong": "тираннозавр; бакалавр; ихтиозавр "
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 12. Динозавры 2",
            "blocks": [
                {
                    "text": "Ихтиозавры, морские рептилии, по форме напоминали дельфинов. Большинство рептилий откладывают яйца, а ихтиозавры рожали младенцев. Это стало известно после того, как учёные обнаружили окаменелости беременных самок.",
                    "questions": [
                        {
                            "text": "Кого по форме напоминали ихтиозавры?",
                            "correct": "дельфины",
                            "wrong": "киты; акулы; черепахи"
                        }
                    ]
                },
                {
                    "text": "Чтобы защитить себя от питавшихся мясом динозавров, нодозавр был покрыт жёсткими, костистыми чешуйками на коже, начиная от головы и заканчивая хвостом. Его называли неуклюжей ящерицей, он достигал 5 м (17 футов) длинны.",
                    "questions": [
                        {
                            "text": "Как еще называли нодозавра?",
                            "correct": "неуклюжая ящерица",
                            "wrong": "красивое пресмыкающиеся; «защищенная спина»"
                        }
                    ]
                },
                {
                    "text": "Королевский тираннозавр, король всех тиранов-рептилий, весил более 8 тонн и длиной достигал 15 метров (50 футов). Он пользовался массивным хвостом, чтобы сохранить равновесие, стоя на задних лапах. У тираннозавра были огромные, сильные ноги, но он не мог быстро бегать, потому что был очень большим и тяжёлым. Тираннозавры убивали и съедали других динозавров. Они нападали на жертву, используя длинные зубы и острые когти.",
                    "questions": [
                        {
                            "text": "Почему тираннозавр не мог быстро бегать?",
                            "correct": "большой и тяжелый",
                            "wrong": "неумелый и неловкий; слабый и неповоротливый"
                        },
                        {
                            "text": "Кем питались тираннозавры? ",
                            "correct": "динозавры",
                            "wrong": "морская живность; древние люди"
                        }
                    ]
                },
                {
                    "text": "Эдмонтозавры были травоядными динозаврами, на которых нападали тираннозавры. Эдмонтозавры достигали 10 м (33 футов) длины, питались водяными растениями, пережёвывая их, как утки.\nНе все динозавры были огромными, медлительными существами. Некоторые достигали размеров не больше цыплёнка. Маленькие динозавры могли быстро бегать, до 56 км в час.\n",
                    "questions": [
                        {
                            "text": "Какие динозавры могли бегать со скоростью до 56 км в час?",
                            "correct": "маленькие",
                            "wrong": "крупные; ловкие; большие"
                        },
                        {
                            "text": "Чем питались эдмонтозавры?",
                            "correct": "водяные растения",
                            "wrong": "другие динозавры; мелкие птицы; морские рыбы "
                        }
                    ]
                },
                {
                    "text": "Одним из самых свирепых динозавров был деноничус, что означает ужасный коготь. Эти динозавры имели огромные когти, которыми пользовались, чтобы поймать и убить свою жертву. Эти динозавры, вероятно, охотились сообща, иногда нападая и на больших травоядных динозавров. У них было много длинных острых зубов, чтобы кусаться и раздирать жертву на куски.",
                    "questions": [
                        {
                            "text": "Что означало название динозавра «деноничус»? ",
                            "correct": "ужасный коготь",
                            "wrong": "ужас ночи; опасный хищник; коготь силы"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 13. Бабочки",
            "blocks": [
                {
                    "text": "В нашей полосе водится бабочка стеклянница — толстое рыжеватое существо, чье тело исполосовано ярко-желтыми поперечными черточками. Но это не главное: стеклянница обладает узкими и прозрачными крыльями и умеет… жужжать, что делает ее очень похожей на осу — ее злейшего врага. Осы, естественно, принимают ее за свою.",
                    "questions": [
                        {
                            "text": "На кого похожа бабочка-стеклянница благодаря своему жужжанию и своим крыльям? ",
                            "correct": "оса",
                            "wrong": "шмель; овод; комар"
                        },
                        {
                            "text": "Какого цвета туловище у бабочки-стеклянницы?",
                            "correct": "рыжеватое с ярко-желтыми полосками",
                            "wrong": "красное с серыми полосками; однотонное бордовое  "
                        }
                    ]
                },
                {
                    "text": "В Центральной и Южной Америке есть бабочки, которые выделяют особые едкие жидкости на своем теле, поэтому обычные враги бабочек — птицы и обезьяны — никогда не преследуют их, зная по опыту, что лучше поголодать, чем испробовать такое…",
                    "questions": [
                        {
                            "text": "Кто является обычными врагами бабочек в Центральной и Южной Америке? ",
                            "correct": "птицы и обезьяны",
                            "wrong": "змеи и коалы"
                        }
                    ]
                },
                {
                    "text": "В хвойных лесах водится бабочка вертунья, замечательная прежде всего своим очень странным полетом, во время которого она летит не в прямом направлении, а по немыслимой кривой, делая самые причудливые зигзаги и многократно переворачиваясь в воздухе. В чем здесь дело? Все просто: бабочка имитирует полет… семян хвойных деревьев, надеясь, что ее недруги-птицы могут спутать ее с падающими семечками.",
                    "questions": [
                        {
                            "text": "Как называется бабочка, которая водится в хвойных лесах?",
                            "correct": "вертунья",
                            "wrong": "плавунья; акробат; пестрянка"
                        }
                    ]
                },
                {
                    "text": "Существуют бабочки, которые мигрируют подобно птицам. Например, репейница, путешествующая каждую весну из Африки в Европу, преодолевая при этом просторы Средиземноморья.\nТропическая бабочка гамадриада из лесов Коста-Рики в полете так громко хлопает одним крылом о другое, что ее слышно по меньшей мере за 30 метров.\n",
                    "questions": [
                        {
                            "text": "Откуда и куда путешествует бабочка репейница?",
                            "correct": "из Африки в Европу",
                            "wrong": "из Америки в Азию; из Англии в Нигерию; из Германии в Австралию"
                        },
                        {
                            "text": "Из-за чего слышно полет тропической бабочки?",
                            "correct": "хлопки крыльев",
                            "wrong": "громкое жужжание"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 14. Крысы в городах",
            "blocks": [
                {
                    "text": "Родиной одних из самых распространенных — черных крыс является полуостров Малая Азия и некоторые страны Востока. В Европу же они попали вместе с крестоносцами, возвращавшимися после своих походов в Палестину.\nКоличество крыс в городах, судя по всему, не уступает количеству людей. В деревнях же на каждого человека приходится по 3-4 крысы.\n",
                    "questions": [
                        {
                            "text": "Благодаря кому черные крысы попали в Европу из восточных стран?",
                            "correct": "крестоносцы",
                            "wrong": "заключенные; беженцы"
                        },
                        {
                            "text": "Где на каждого человека приходится по 3-4 крысы?",
                            "correct": "деревня",
                            "wrong": "город; мегаполис; побережье"
                        }
                    ]
                },
                {
                    "text": "В каждой системе подземных ходов водяной крысы есть уходящие вниз «шахты», которые тянутся вплоть до подземных почвенных вод. В этих колодцах водяная крыса всегда может найти хотя бы каплю воды, если снаружи какие-то проблемы с водоснабжением. Крот также роет собирающие воду норки.",
                    "questions": [
                        {
                            "text": "Для чего водяной крысе нужны уходящие вниз «шахты» в системе подземных ходов?",
                            "correct": "добыча воды ",
                            "wrong": "скрываться от врагов"
                        }
                    ]
                },
                {
                    "text": "Домашние мыши — самые обычные млекопитающие. Они «соседствуют» с людьми по всему миру, за исключением Антарктики.\nЛесная мышь в Коста-Рике носит в своем мехе около двенадцати жуков в качестве пассажиров. Они помогают мыши сохранить здоровье, поедая блох, живущих в ее мехе. Мышь, в свою очередь, обеспечивает жуков хорошей пищей.\n",
                    "questions": [
                        {
                            "text": "Для чего лесная мышь носит жуков в своем меху?",
                            "correct": "сохранение здоровья",
                            "wrong": "пропитание; сохранение тепла"
                        },
                        {
                            "text": "Сколько примерно жуков находятся в меху лесной мыши?",
                            "correct": "двенадцать",
                            "wrong": "пятнадцать; всего семь; девять"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 15. Еноты",
            "blocks": [
                {
                    "text": "Барсуки из года в год селятся в одном и том же месте, в одной и той же норе. Они все время расширяют свое жилище, копают новые ходы и норки. В результате многолетних «разработок» нора превращается в целый город (кстати, старые барсучьи норы так и называют — «городки»), имеющий до 50 входных отверстий. Общая длина такой норы может достигать 200 м.",
                    "questions": [
                        {
                            "text": "Как называются старые барсучьи норы?",
                            "correct": "«городки»",
                            "wrong": "«мегаполис»; «городище»; «деревушка»"
                        },
                        {
                            "text": "Сколько примерно входных отверстий в барсучьей норе?",
                            "correct": "50",
                            "wrong": "20; 200; 65"
                        }
                    ]
                },
                {
                    "text": "Медоед, или медовый барсук, и птичка, называемая медовым указателем, помогают друг другу найти свою любимую еду. Барсук ест мёд, а птичка питается личинками пчелы. Птица летит в поисках пчелиного гнезда, но не может попасть туда сама. Она зовёт за собой медоеда, который может разрушить пчелиное гнездо. Тогда оба партнёра устраивают себе настоящий пир.",
                    "questions": [
                        {
                            "text": "Кто помогает медовому барсуку в поисках пчелиного гнезда?",
                            "correct": "птичка",
                            "wrong": "пчелы; муравьи; медведь"
                        },
                        {
                            "text": "Почему птичка зовет с собой медоеда, когда находит пчелиное гнездо?",
                            "correct": "он может его разрушить",
                            "wrong": "он отвлекает внимание на себя; он спасает ее от пчел"
                        }
                    ]
                },
                {
                    "text": "Еноты, прежде чем приступить к еде, моют свою пищу, правда, причина этого не в их излишней чистоплотности, скорее в том, что енотам нравится намоченная еда.",
                    "questions": [
                        {
                            "text": "Почему еноты моют свою пищу в воде?",
                            "correct": "нравится намоченная еда ",
                            "wrong": "из-за чистоплотности; очищают от вредностей"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 16. Киты",
            "blocks": [
                {
                    "text": "Первым, кто доказал, что кит – это не рыба, а зверь, был англичанин Джон Рей. Это произошло в 1693 году.\nВ голове чемпиона среди животных по нырянию (как по глубине, так и по продолжительности нахождения под водой) – у кашалота есть запасной резервуар воздуха, который включается в действие, когда исчерпывается содержание лёгких. Это правый носовой проход, пронизывающий насквозь спереди всю голову, которая занимает у кашалота более трети всей длины тела.\n",
                    "questions": [
                        {
                            "text": "В каком году англичанин Джон Рей доказал, что кит – это зверь?",
                            "correct": "1693",
                            "wrong": "1989; начало 1995; 1993"
                        },
                        {
                            "text": "Правда ли, что у кита есть запасной резервуар воздуха?",
                            "correct": "да",
                            "wrong": "нет; неправда"
                        }
                    ]
                },
                {
                    "text": "Киты вентилируют свои лёгкие (то есть обновляют их содержание) при вдохе на 85-90%. Для сравнения: человек и наземные животные имеют лишь 15-процентную вентиляцию.\nЖелудок крупных китов вмещает до тысячи литров пищи. Длина кишечника кашалота может достигать 160 метров. Более длинных кишечников просто не бывает.\n",
                    "questions": [
                        {
                            "text": "Сколько метров достигает длина кишечника кашалота?",
                            "correct": "около 160",
                            "wrong": "180; примерно 200"
                        },
                        {
                            "text": "В отличии от китов, сколько процентов вентиляции имеет человек?",
                            "correct": "15",
                            "wrong": "40; примерно 31; 60"
                        }
                    ]
                },
                {
                    "text": "Самым большим мозгом среди животных обладают киты. Так, у синего кита вес мозга может достигать 6800 граммов.\nКашалоты рождаются уже 4-метровыми. Новорождённый синий китёнок весит 2 тонны и имеет длину 7 м. Самое жирное молоко у китов и тюленей, в составе которого содержится соответственно 45 и 53% жира.\n",
                    "questions": [
                        {
                            "text": "Сколько весит новорожденный синий китенок? ",
                            "correct": "2 тонны",
                            "wrong": "7 тонн; 18 тонн; 2 кг"
                        },
                        {
                            "text": "У кого самое жирное молоко? ",
                            "correct": "киты и тюлени",
                            "wrong": "коровы и козы; верблюды и овцы; буйволы и коровы "
                        }
                    ]
                },
                {
                    "text": "У китов и дельфинов нет голосовых связок, поэтому у них «звучат» воздушные носовые мешки, складки гортани, горловые мешки, то есть органы, не имеющие никакого отношения к «шумовому оформлению». Голос голубого кита громче, чем звук реактивного самолёта.\nНе так давно число голубых китов в южных морях исчислялось сотнями тысяч, а теперь их всего пять с половиной тысяч.\n",
                    "questions": [
                        {
                            "text": "Что звучит у китов и дельфинов вместо голосовых связок?",
                            "correct": "носовые и горловые мешки",
                            "wrong": "нижнее небо и миндалины; пазухи и воздушный резервуар"
                        },
                        {
                            "text": "Что громче: голос голубого кита или звук реактивного самолета?",
                            "correct": "голос кита",
                            "wrong": "реактивный самолет"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 18. Броненосец",
            "blocks": [
                {
                    "text": "Роющий землю броненосец способен задерживать дыхание на время до 6 минут. Это делается для того, чтобы фонтанирующая из-под когтей пыль не набивалась в горло и лёгкие.\nОколо 20 миллионов лет назад в Южной Америке жили гигантские броненосцы размером с автомобиль. У них был огромный костяной панцирь на спине, а на кончике хвоста костная дубинка, чтобы отпугивать врагов. Один из найденных окаменелых панцирей использовался древними людьми как палатка.\n",
                    "questions": [
                        {
                            "text": "Для чего броненосец задерживает дыхание, когда роет землю? ",
                            "correct": "защита легких и горла ",
                            "wrong": "экономия сил и ресурсов; экономия кислорода "
                        },
                        {
                            "text": "Что располагалось на кончике хвоста у древних броненосцев?",
                            "correct": "костная дубинка",
                            "wrong": "защитные шипы; чувствительный сенсор"
                        }
                    ]
                },
                {
                    "text": "«Броня» (роговой или костяной панцирь на коже) как средство защиты от врагов имеется лишь у 21 вида броненосцев и 7 видов панголинов. Остальные тысячи и тысячи видов животных больше полагаются на быстроту своих ног, ловкость и хитрость.\nЧемпионом по количеству зубов среди сухопутных зверей является гигантский броненосец, имеющий минимум 65, в среднем — 78, максимально — 100.\n",
                    "questions": [
                        {
                            "text": "Каково минимальное количество зубов, которое насчитывается у гигантского броненосца? ",
                            "correct": "примерно 65",
                            "wrong": "примерно 33; около 150"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 18. Белка летяга",
            "blocks": [
                {
                    "text": "Белки-летяги, тело которых снабжено кожистыми складками, располагающимися между передними и задними лапами, способны планировать на расстояние до 30 м.\nЛетающие белки на самом деле не умеют летать, они просто парят до 450 м (1480 футов) между деревьями. Их «крылья» — пластины кожи, соединяющие вместе задние и передние ноги белки.\n",
                    "questions": [
                        {
                            "text": "Умеют ли белки-летяги по-настоящему летать?",
                            "correct": "нет, они парят",
                            "wrong": "да, они летают; да, они летают с попутным ветром"
                        }
                    ]
                },
                {
                    "text": "Земляные белки пустыни Калахари пользуются своими кустистыми хвостами, создавая тень. Белка поднимает хвост, растопыривает его ворсинки над головой и так защищается от палящего солнца.\nВо время длительной засухи пустынные белки до пяти дней в неделю спят под землей. Это помогает им сохранить прохладу и энергию.\n",
                    "questions": [
                        {
                            "text": "Для чего пустынным белкам нужны большие кустистые хвосты?",
                            "correct": "создавать тень",
                            "wrong": "рыть землю; защищаться от ветра; согреваться ночью"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 19. Крабы и омары",
            "blocks": [
                {
                    "text": "Крабы имеют целых шесть пар челюстей, которыми перерабатывают все, что им попадается, — от мусора до мелких рыбешек.\nКрабы и омары могут оставлять свои конечности, чтобы их не успели съесть целиком. Со временем конечности отрастают вновь.\nОмары могут жить по 50 лет и достигать веса 20 кг.\n",
                    "questions": [
                        {
                            "text": "Что могут сделать крабы и омары, чтобы их не успели съесть целиком?",
                            "correct": "оставить свои конечности",
                            "wrong": "выпустить маскирующие чернила; спрятаться в кораллах; спрятаться среди мелких рыбешек"
                        },
                        {
                            "text": "Примерная продолжительность жизни омара?",
                            "correct": "50 лет",
                            "wrong": "20 лет; 80 лет"
                        }
                    ]
                },
                {
                    "text": "Самка одного из маленьких крабов всю жизнь проводит, забравшись внутрь отверстия коралла, который разрастается вокруг краба. Пища и вода проникают внутрь через крохотные дырочки в коралле.\nВо время отливов можно увидеть группы крабов-скрипачей, стремительно передвигающихся по солончакам. У самца имеется очень большая, ярко окрашенная правая клешня, которой он отпугивает других самцов и привлекает самок в свою нору.\n",
                    "questions": [
                        {
                            "text": "Где проводит всю жизнь самка оного из маленьких крабов?",
                            "correct": "внутри коралла",
                            "wrong": "на песчаном дне; внутри скалы; под морскими камнями "
                        },
                        {
                            "text": "Каких крабов можно увидеть во время отливов?",
                            "correct": "скрипачи",
                            "wrong": "апачи; горбачи; циркачи"
                        }
                    ]
                },
                {
                    "text": "Колючего паукообразного краба не так легко заметить. Он собирает своими клешнями маленькие кусочки морских водорослей или губок и закрепляет их на колючках и щетинках, расположенных по всему панцирю, до тех пор, пока полностью не замаскируется.\nКрабы мечехвосты выползают на берег ранним сентябрем, чтобы отложить икру. Самка откладывает тысячи икринок в песке, вне досягаемости от всего, кроме приливов. Следующий прилив открывает икру как раз тогда, когда детеныши готовы вылупиться и отправиться в море.\n",
                    "questions": [
                        {
                            "text": "В начале какого месяца выползают крабы мечехвосты? ",
                            "correct": "сентябрь",
                            "wrong": "октябрь; август; ноябрь"
                        },
                        {
                            "text": "Что использует паукообразный краб для маскировки?",
                            "correct": "водоросли",
                            "wrong": "ракушки; чернозем"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 20. Кролики и зайцы",
            "blocks": [
                {
                    "text": "Крольчиха в возрасте 3-4 месяцев уже может стать матерью, принося в год от 3 до 6 пометов с 6-15 крольчатами в каждом. Кролик размножается очень быстро. За три года у одной пары может быть 13 700 потомков.\n\nМексиканские бесхвостые кролики тепоринго не умеют прыгать (а это родовой признак всех зайцеобразных), зато бойко бегают рысью.\n",
                    "questions": [
                        {
                            "text": "Чего не умеют делать мексиканские кролики тепоринго?",
                            "correct": "прыгать ",
                            "wrong": "бегать; прятаться"
                        },
                        {
                            "text": "За сколько лет у одной кроличьей пары может быть 13 700 потомков?",
                            "correct": "3",
                            "wrong": "0,5; 8; 1"
                        }
                    ]
                },
                {
                    "text": "Подушечки лап у зайца покрыты длинной шерстью, которая помогает ему удерживаться на обледенелой поверхности во время бега.\nУ зайцев огромные ступни, как снегоступы, что помогает им не проваливаться в снег. Их ступни также покрыты длинными волосками, что помогает зайцам сохранять уверенную походку на скользкой поверхности. Летом зайцы бурые, а зимой становятся белыми.\n",
                    "questions": [
                        {
                            "text": "Что помогает зайцам не проваливаться в снег?",
                            "correct": "огромные ступни",
                            "wrong": "легкий вес; подвижность; чувство равновесия "
                        },
                        {
                            "text": "Что помогает зайцам удерживаться на обледенелой поверхности во время бега?",
                            "correct": "шерсть на лапах",
                            "wrong": "когти на лапах; кожный жир; отличное зрение"
                        }
                    ]
                },
                {
                    "text": "Американские зайцы не единственные животные с длинными ушами. Фенек, африканская лисица и пустынный еж имеют длинные уши, чтобы охлаждать организм и прислушиваться в поисках добычи.\nУ американских зайцев огромные уши, в десять раз длинней, чем уши человека. Животные пользуются ими для охлаждения. Нагретая кровь течет по ушам и охлаждается воздухом. Если температура падает, зайцы опускают уши.\n",
                    "questions": [
                        {
                            "text": "Для чего американские зайцы используют огромные уши?",
                            "correct": "охлаждение",
                            "wrong": "координация; сопротивление;  запугивание"
                        },
                        {
                            "text": "Во сколько раз уши американских зайцев длиннее человеческих ушей?",
                            "correct": "в десять",
                            "wrong": "в двадцать; в пять; в восемь"
                        }
                    ]
                },
                {
                    "text": "На японском острове Рюкю обитают одноименные древесные зайцы, которые отлично лазают по деревьям и даже селятся в дуплах.",
                    "questions": [
                        {
                            "text": "Как называются зайцы, которые живут на японском острове Рюкю?",
                            "correct": "древесные",
                            "wrong": "лесные; древние; бамбуковые"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 21. Амфибии",
            "blocks": [
                {
                    "text": "Амфибии жили на суше, но должны были возвращаться в воду, чтобы откладывать там яйца. Первыми животными, живущими все время на суше, были ранние рептилии. Они являются предками динозавров.\nПервые существа на суше назывались чешуйчатыми плавниковыми рыбами. У них появились легкие для вдыхания воздуха, и они выталкивали себя из воды сильными, похожими на ноги плавниками.\n",
                    "questions": [
                        {
                            "text": "Где амфибии откладывали яйца?",
                            "correct": "вода",
                            "wrong": "берег; песок; нора"
                        }
                    ]
                },
                {
                    "text": "Ихтиостега была одной из первых амфибий. Живот ее покрывали чешуйки, она имела хвост, как рыба, но ходила на четырех лапах. Эта амфибия жила в Гренландии, бывшей 370 миллионов лет назад жаркой и влажной.\nАмфибии — первые существа, способные выбрасывать язык, чтобы поймать насекомых.\n",
                    "questions": [
                        {
                            "text": "Где жила ихтиостега – одна из первых амфибий? ",
                            "correct": "Гренландия",
                            "wrong": "Африка; Греция; Гималаи"
                        },
                        {
                            "text": "С помощью чего амфибии ловили насекомых?",
                            "correct": "язык",
                            "wrong": "лапы; плавники; хвост"
                        }
                    ]
                },
                {
                    "text": "Одна из ранних самых странных амфибий — диплокол. Ее голова имела форму бумеранга. Врагам, вероятно, было очень трудно проглотить ее.\nПервыми животными, появившимися на суше, были рыбы. Около 370 миллионов лет назад их группа покинула дома в водоемах и выбралась на сушу. Они превратились в амфибий — семейство животных, включающее лягушек и жаб.\n",
                    "questions": [
                        {
                            "text": "Какой формы была голова у диплокола? ",
                            "correct": "бумеранг ",
                            "wrong": "торпеда; овал; колокол"
                        },
                        {
                            "text": "Кем были первые появившиеся на суше животные?",
                            "correct": "рыбы",
                            "wrong": "планктон; дельфины; диплодоки "
                        }
                    ]
                },
                {
                    "text": "У амфибий может восстанавливаться… сердце. Во время опытов у тритонов буквально отрезали тот или иной участок сердечной мышцы, и она почти всегда регенерировала.",
                    "questions": [
                        {
                            "text": "Может ли у амфибий регенерировать сердце?",
                            "correct": "да",
                            "wrong": "нет"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 22. Летучие мыши",
            "blocks": [
                {
                    "text": "Существуют летучие мыши, размах крыльев которых достигает 2 м.\nЛетучие мыши являются едва ли не самым древним отрядом млекопитающих: известны окаменелые останки этих животных, которым около 60 миллионов лет.\nКонечности летучих мышей не приспособлены для ходьбы или стояния, поэтому эти млекопитающие отдыхают, повиснув вниз головой.\n",
                    "questions": [
                        {
                            "text": "О ком идет речь в данном рассказе?",
                            "correct": "летучая мышь ",
                            "wrong": "птица; динозавры; ископаемые"
                        },
                        {
                            "text": "Сколько примерно лет окаменелым останкам летучих мышей?",
                            "correct": "60 млн",
                            "wrong": "10 млн; 5 млн; 8 трлн"
                        }
                    ]
                },
                {
                    "text": "Единственными млекопитающими, которые способны передвигаться по воздуху, являются летучие мыши.\nИногда более 100 000 летучих мышей собираются в пещерах в стаю. Поздно в октябре по 5 000 мышей в минуту вылетает из пещер, чтобы двинуться в более тёплые места.\nСуществуют летучие мыши-вампиры, живущие в Центральной и Южной Америке и питающиеся кровью жертв – коров, лошадей, баранов…\n",
                    "questions": [
                        {
                            "text": "Куда летучие мыши отправляются из своих пещер в октябре?",
                            "correct": "теплые места",
                            "wrong": "к морю; на пастбище"
                        }
                    ]
                },
                {
                    "text": "Летучие мыши – вампиры Южной Африки – нападают ночью на скот и пьют его кровь. Они выпивают за день до двух чайных ложек крови. Иногда они так переполняют себя, что не могут улететь.\nУ летучей мыши большие уши и самое лучшее зрение из всех сухопутных млекопитающих. Длинноухая летучая мышь имеет тело длинной около 5 см (2 дюйма) и уши до 4 см (1,6 дюйма).\n",
                    "questions": [
                        {
                            "text": "Сколько примерно крови выпивают за день летучие мыши?",
                            "correct": "две чайные ложки",
                            "wrong": "два половника; пара литров; восемь унций"
                        },
                        {
                            "text": "Какого размера уши у длинноухой летучей мыши? ",
                            "correct": "4 см",
                            "wrong": "17 см; 8 см; до 2 см"
                        }
                    ]
                },
                {
                    "text": "Летучие мыши пользуются звуком, чтобы найти пищу и дорогу в темноте. Они издают очень высокие звуки, которые отражаются от объекта и возвращаются к ним эхом. Благодаря этому мыши могут легко определить, куда лететь, чтобы найти насекомое, и как преодолеть препятствие.\nЛетучие мыши – единственные млекопитающие, умеющие летать. Крылья состоят из кожи, натянутой между длинными пальцами. \n",
                    "questions": [
                        {
                            "text": "Что с помощью высоких звуков находят летучие мыши? ",
                            "correct": "пища и дорога",
                            "wrong": "источник света; попутный ветер "
                        },
                        {
                            "text": "Из чего состоят крылья летучих мышей?",
                            "correct": "кожа",
                            "wrong": "мельчайшие чешуйки; скелетные пластины"
                        }
                    ]
                },
                {
                    "text": "С приближением зимы некоторые млекопитающие передвигаются в тёплые места. Большие летучие мыши перелетают удивительные расстояния – до 2300 км (1430 миль) – от Москвы до Болгарии каждый год. Учёные думают, что у них внутри настоящие компасы.",
                    "questions": [
                        {
                            "text": "Какое примерное расстояние преодолевают летучие мыши?",
                            "correct": "от Москвы до Болгарии",
                            "wrong": "от Москвы до Венеции; от Болгарии до Петербурга "
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 23. Медузы-гиганты",
            "blocks": [
                {
                    "text": "Существуют медузы, чьи щупальца достигают 30 м в длину, а тело — 4 м в диаметре. Тело медузы на 98% состоит из воды. Опасной медузу делают её щупальца, снабжённые стрекательными клетками, которые способны вызывать ожоги.\nНа побережье Австралии обитает медуза морская оса, ожог которой может привести к смертельному исходу. Один укус морской осы, живущей на побережье Австралии, может за минуту убить человека. Более 60 человек погибло от укуса морской осы за последние 100 лет.\n",
                    "questions": [
                        {
                            "text": "Из чего состоит 98% тела медузы? ",
                            "correct": "вода",
                            "wrong": "кровь; лимфа; желе"
                        },
                        {
                            "text": "Как называется медуза, которая обитает на побережье Австралии?",
                            "correct": "морская оса",
                            "wrong": "подводная коза; смертоносный шмель; жуткая пчела"
                        },
                        {
                            "text": "Что может сделать всего один укус морской осы?",
                            "correct": "убить человека",
                            "wrong": "парализовать; поджечь "
                        }
                    ]
                },
                {
                    "text": "Многих морских существ, от крохотного зоопланктона до огромных медуз, уносят на большие расстояния сильные океанские течения. Некоторые всю жизнь проводят, странствуя по поверхности морей или в глубинах. Другим течения и приливы могут только помочь быстрее добраться до мест нереста и обратно.\nСамые ранние морские существа — медузы и губки. Первые медузы жили около 570 миллионов назад, а первые рыбы примерно 70 миллионов лет назад.\n",
                    "questions": [
                        {
                            "text": "Кем являются самые ранние морские существа? ",
                            "correct": "медузы и губки",
                            "wrong": "мурены и гуппи; морские коньки; палтусы и гиррела "
                        },
                        {
                            "text": "Что в океане уносит медуз на большие расстояния?",
                            "correct": "течения",
                            "wrong": "подводные гейзеры; лавина; древние черепахи "
                        }
                    ]
                },
                {
                    "text": "Окаменелости первых известных животных — гигантских медуз — были найдены в Австралии. Они умерли на берегу 670 миллионов лет назад.\nПортугальский солдатик не имеет врагов, но иногда морские черепахи нападают на него и съедают. Его жгучие щупальца могут парализовать и мгновенно убивать рыбу. Яд также очень болезнен для человека. Щупальца, достигающие длины свыше 2 м (6,6 футов), покрыты ядовитыми шипами, которые он выпускает в жертву, как только к нему прикасаются. \n",
                    "questions": [
                        {
                            "text": "Где были найдены окаменелости первых известных животных – гигантских медуз?",
                            "correct": "Австралия",
                            "wrong": "Англия;  Америка; Африка"
                        },
                        {
                            "text": "Как называется медуза, чьи щупальца покрыты ядовитыми шипами?",
                            "correct": "португальский солдатик",
                            "wrong": "африканский воин; мексиканский убийца; португальский акробат"
                        }
                    ]
                },
                {
                    "text": "В отличие от других видов медуз, солдатик — не просто единичное животное, это плывущая колония из сотен крохотных животных. У этих животных много забот, от ловли своих жертв, до рождения младенцев… Пузырь действует как парус, ловящий ветер, когда солдатик качается на волнах.",
                    "questions": [
                        {
                            "text": "Что действует как парус, когда солдатик качается на волнах? ",
                            "correct": "пузырь",
                            "wrong": "лопасть; полость; щупальца "
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 24. Кенгуру",
            "blocks": [
                {
                    "text": "Кенгуру способны прыгать в длину на 12-13 м, а в высоту — на 4 м.\nСумки сумчатых животных (кенгуру, опоссумов и др.) предназначены для донашивания их детенышей, которые рождаются недоразвитыми.\nЧтобы перехитрить нападающего, американский опоссум сворачивается и прикидывается мертвым. Глаза закатываются, язык вываливается. Враг вскоре теряет интерес и уходит. Опоссум приоткрывает глаза, чтобы убедиться, что опасность миновала, и возвращается к жизни.\n",
                    "questions": [
                        {
                            "text": "Что делает американский опоссум, чтобы перехитрить нападающего?",
                            "correct": "прикидывается мертвым",
                            "wrong": "впадает в спячку; прячется на дереве; маскируется с местностью "
                        },
                        {
                            "text": "На сколько в длину способны прыгать кенгуру?",
                            "correct": "12-13 м",
                            "wrong": "4-5 м; 18 м; 22 м"
                        }
                    ]
                },
                {
                    "text": "Мыши опоссумы имеют, вероятно, самых крохотных детенышей из всех млекопитающих. Они величиной всего с рисовое зернышко.\nИспользуя длинный хвост для равновесия, красный кенгуру может совершать каждый прыжок на длину 7,5 м (25 футов)». Кенгуру также хорошо прыгает в высоту. Испуганный серый кенгуру однажды прыгнул на 2,4 м (8 футов) в высоту, перепрыгнув через забор, когда горела машина.\n",
                    "questions": [
                        {
                            "text": "Для чего красный кенгуру использует свой хвост?",
                            "correct": "равновесие",
                            "wrong": "ускорение; отталкивание; маневренность"
                        },
                        {
                            "text": "С чем сравниваются детеныши мышей опоссум? ",
                            "correct": "зернышко",
                            "wrong": "копеечка; орешек; булавка"
                        }
                    ]
                },
                {
                    "text": "Потоотделение и учащенное дыхание помогают животным охладиться. Пустынные кенгуру в Австралии часто дышат для повышения слюноотделения. Они намазывают слюной тела и морды, чтобы сохранить прохладу.\nПомимо обычных кенгуру существуют так называемые древесные, которые обитают в Новой Гвинее и на северо-востоке Австралии. Эти 50-60-сантиметровые зверьки — прекрасные «дереволазы», ничуть не хуже обезьян, а также прыгуны, так как в случае опасности запросто прыгают с 15-20-метровой высоты.\n",
                    "questions": [
                        {
                            "text": "Для чего пустынные кенгуру в Австралии намазывают слюной тела и морды?",
                            "correct": "охлаждение",
                            "wrong": "забава; умывание; внимание"
                        },
                        {
                            "text": "Где обитают так называемые древесные кенгуру?",
                            "correct": "Новая Гвинея ",
                            "wrong": "Новая Зеландия; Япония; Америка"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 25. Насекомые",
            "blocks": [
                {
                    "text": "Самой многочисленной и разнообразной группой животных на Земле являются насекомые, насчитывающие 2-2,5 миллиона видов.\nНасекомые живут даже на ледниках Гималайских гор, где температура опускается до минус 15 градусов Цельсия.\nВ одном квадратном метре влажной почвы может находиться от 500 до 2000 насекомых самых разнообразных видов.\n",
                    "questions": [
                        {
                            "text": "Кто является самой многочисленной и разнообразной группой животных на Земле?",
                            "correct": "насекомые",
                            "wrong": "рыбы; птицы; динозавры"
                        }
                    ]
                },
                {
                    "text": "Самое острое обоняние у самцов обыкновенной моли, которые улавливают запах своих «подруг» за 11 км.\nНекоторые жуки при виде опасности подтягивают ножки и усики к туловищу, плотно прижимают к нему головку и делаются, таким образом, похожими на окоченевший труп. У некоторых из этих «трупов» на брюшке даже имеются специальные ямочки и бороздки, в которых они ловко прячут ножки и усики.\n",
                    "questions": [
                        {
                            "text": "На каком максимальном расстоянии улавливают запах своих «подруг» самцы моли?",
                            "correct": "11 км",
                            "wrong": "21 км; 60 км; 45 км"
                        },
                        {
                            "text": "Что делают некоторые жуки при виде опасности?",
                            "correct": "имитируют «труп» ",
                            "wrong": "бросаются в атаку; прячутся в камне; крутятся на брюшке"
                        }
                    ]
                },
                {
                    "text": "Великаном среди жуков является жук-геркулес. Его «габариты» — 16 см.\nСемейство жуков долгоносиков является самым многочисленным в животном мире — их насчитывается до 45 тысяч видов.\nЖучок мукоед суринамский, живущий по всему миру в отапливаемых продовольственных складах, ежегодно поедает столько зерна, что им можно было бы накормить десятки миллионов человек.\n",
                    "questions": [
                        {
                            "text": "Как называется жук, который является великаном среди жуков?",
                            "correct": "жук-геркулес",
                            "wrong": "жук-титан; жук-прометей; жук-великан"
                        },
                        {
                            "text": "Каковы габариты жука-геркулеса? ",
                            "correct": "16 см",
                            "wrong": "26 см; 85 см; 16 м"
                        }
                    ]
                },
                {
                    "text": "Рекордсменом по весу среди насекомых считается новозеландский гигантский сверчок, который при длине всего около 10 см может весить до 70 граммов, то есть в три раза тяжелее обычной домашней мыши.\nОдним из древнейших насекомых нашей планеты является обычная муха, чьи найденные окаменелые останки оцениваются учёными в миллионы и миллионы лет.\n",
                    "questions": [
                        {
                            "text": "Кто считается самым тяжелым среди насекомых?",
                            "correct": "гигантский сверчок",
                            "wrong": "большой паук; высокий кузнечик; крылатая бабочка"
                        }
                    ]
                },
                {
                    "text": "Некоторые мухи из семейства Syrphidae по внешнему виду – вылитые шмели. Благополучно избегая, таким образом, опасности со стороны насекомоядных птиц, мухи в свою очередь совершают налёты на… шмелей, проникая незаметно в их гнёзда и поедая их запасы, либо истребляя их личинок.\nВся жизнь мухи проходит в радиусе 100 м от того места, где она появилась на свет.\n",
                    "questions": [
                        {
                            "text": "На кого похожи некоторые мухи из семейства Syrphidae?",
                            "correct": "шмель",
                            "wrong": "бабочка; стрекоза; мотылек"
                        },
                        {
                            "text": "Чему равен радиус, в котором проходит вся жизнь мухи?",
                            "correct": "100 м",
                            "wrong": "20 м; 80 см; 400 м"
                        }
                    ]
                },
                {
                    "text": "Стая саранчи численностью в миллион особей съедает за день 20 тонн растительности, полностью оголяя землю.\nСаранча (короткоусый кузнечик) «поёт», потирая задними ногами о крылья.\nСверчки вовсе не «певцы», а «скрипачи», так как издают звуки, потирая острой стороной одного предкрылья о поверхность другого. Этим «пиликанием» занимаются только самцы, привлекая подобным образом к себе самок.\n",
                    "questions": [
                        {
                            "text": "Сколько тонн растительности съедает стая саранчи?",
                            "correct": "20",
                            "wrong": "5; 1-2; 4"
                        },
                        {
                            "text": "Чем издают звуки сверчки?",
                            "correct": "предкрылья",
                            "wrong": "усики; лапки; хвост"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 26. Муравьеды",
            "blocks": [
                {
                    "text": "Обладатель полуметрового липкого языка — муравьед — способен за день слизать им до тридцати тысяч муравьев и термитов. Обычная скорость работы языка муравьеда — 160 втягиваний-выпусков в минуту.\nМуравьеды не имеют зубов, поэтому их роль выполняют проглоченные галька и песок — они перетирают, мнут и давят съеденных насекомых и ягоды.\n",
                    "questions": [
                        {
                            "text": "О ком идет речь в этом рассказе?",
                            "correct": "муравьед",
                            "wrong": "пчелоед; мухолов; паукоед"
                        },
                        {
                            "text": "Что у муравьеда выполняет роль зубов?",
                            "correct": "галька и песок",
                            "wrong": "дерево и вода; трава и дерево"
                        }
                    ]
                },
                {
                    "text": "Муравьеды являются рекордсменами по длине языка среди наземных животных — 61 см.\nГигантский муравьед имеет длинный кустистый хвост и длинную узкую морду. У него тонкий язык, но он может достигнуть длины человеческой руки.\nМуравьеды разрушают гнезда муравьев сильными лапами. Затем они языком достают муравьев, несколько сотен сразу.\n",
                    "questions": [
                        {
                            "text": "Какой длины язык у муравьеда?",
                            "correct": "61 см",
                            "wrong": "83 см; 54 мм; 11 м"
                        },
                        {
                            "text": "Чем муравьед разрушает гнезда муравьев?",
                            "correct": "сильные лапы",
                            "wrong": "длинный язык; вес своего тела; мощные когти"
                        }
                    ]
                },
                {
                    "text": "Муравьед может высунуть и убрать назад язык сто пятьдесят раз в минуту, съедая несколько тысяч муравьев.",
                    "questions": [
                        {
                            "text": "Сколько раз в минуту муравьед достает и убирает свой язык?",
                            "correct": "150",
                            "wrong": "230; 5-10; 36"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 27. Млекопитающие",
            "blocks": [
                {
                    "text": "Млекопитающие – это особая группа животных, включая человека, собак, кошек и многих других мохнатых животных. Существует свыше 4000 различных типов млекопитающих.\nМлекопитающие живут по всему миру, от замерзающей Арктики до раскаленных жарких пустынь. Большинство из них живет на суше, но некоторые живут в пресных водах и в морях. Грызуны, семейство, включающее в себя мышей и крыс, — самая большая группа млекопитающих, в которую входят 1750 видов или различных типов.\n",
                    "questions": [
                        {
                            "text": "О какой особой группе животных идет речь?",
                            "correct": "млекопитающие",
                            "wrong": "рыбы и осьминоги; травоядные; динозавры и мамонты"
                        },
                        {
                            "text": "Какое семейство является самой большой группой млекопитающих?",
                            "correct": "грызуны",
                            "wrong": "кошачьи; волчьи; летуны"
                        }
                    ]
                },
                {
                    "text": "У всех млекопитающих есть легкие, им нужно дышать, чтобы остаться в живых. Их очень дальними предками были рыбы, дышащие под водой жабрами. Трубка, идущая от уха млекопитающих к горлу — все, что осталось от этих доисторических жабр.\nВолосы состоят из отмерших нитей кератина — вещества, из которого образованы также рога и ногти. Млекопитающие — единственные животные, которые имеют настоящие волосы. У некоторых густые волосяные покровы. У других, таких, как киты, только отдельные волоски на губах.\n",
                    "questions": [
                        {
                            "text": "Кто был дальними предками млекопитающих?",
                            "correct": "рыбы",
                            "wrong": "мамонты; моржи; змеи"
                        },
                        {
                            "text": "Что еще, помимо волос млекопитающих, образовано из кератина?",
                            "correct": "рога и ногти ",
                            "wrong": "зубы и кости; мышцы и суставы"
                        }
                    ]
                },
                {
                    "text": "Первые млекопитающие жили примерно 200 миллионов лет назад. Они были маленькими, как мыши. Они, вероятно, охотились по ночам, чтобы избежать голодных динозавров.\nОколо 90% энергии млекопитающих используется, чтобы поддержать тело в нужной температуре.\n",
                    "questions": [
                        {
                            "text": "Когда охотились млекопитающие, чтобы избежать голодных динозавров?",
                            "correct": "ночью",
                            "wrong": "в сумерках; ранним утром; ясным днем"
                        },
                        {
                            "text": "Сколько примерно энергии используют млекопитающие, чтобы поддержать тело в нужной температуре?",
                            "correct": "90%",
                            "wrong": "100%; 50 кДж.; 120-130%"
                        }
                    ]
                },
                {
                    "text": "Млекопитающие могут жить по всему миру, потому что они теплокровные. Температура их тела остается 36-39 градусов Цельсия, неважно, какова температура окружающей среды. Им нужно регулярно питаться, чтобы поддерживать себя в таком состоянии.\nНекоторые млекопитающие потеют, чтобы охладиться. У кошек и собак есть потовые железы на подушечках лап. У китов нет потовых желез.\n",
                    "questions": [
                        {
                            "text": "Что нужно регулярно делать млекопитающим, чтобы поддерживать постоянную температуру своего тела?",
                            "correct": "питаться",
                            "wrong": "скрываться; бегать; спать"
                        }
                    ]
                },
                {
                    "text": "Ни у каких животных, кроме млекопитающих, нет ушных раковин. Самые большие ушные раковины у африканских слонов. Они составляют около 1,8 м (6 футов) в ширину. Слоны хлопают ушами, чтобы охладиться, и, может быть, зовут этими звуками малышей.\nМлекопитающие — единственные животные, вскармливающие своих младенцев молоком. Они также ухаживают за своими детенышами, пока те не могут находиться без них. Одни млекопитающие – более хорошие родители, другие — менее. Африканский слон заботится о своих малышах, пока они не подрастут до юношеского возраста.\n",
                    "questions": [
                        {
                            "text": "У кого из животных самые большие ушные раковины?",
                            "correct": "африканские слоны",
                            "wrong": "летучие мыши; вислоухие кошки; кролики  "
                        },
                        {
                            "text": "Чем вскармливают своих детенышей млекопитающие?",
                            "correct": "молоко",
                            "wrong": "пережеванная пища; насекомые"
                        }
                    ]
                },
                {
                    "text": "Белый цвет молоку придает так называемый молочный белок, которого больше всего в молоке крольчих — до 15%.\nЖивотные проводят большую часть времени в поисках пищи. Им нужно регулярное питание, дающее много энергии, многие нашли достаточно умные способы нахождения пищи. Многие млекопитающие и сами находятся под прицелом других голодных животных, которые могут их съесть.\n",
                    "questions": [
                        {
                            "text": "В чьем молоке больше всего молочного белка?",
                            "correct": "кроличьи",
                            "wrong": "кошачьи; китообразные; молочные"
                        },
                        {
                            "text": "За какой деятельностью животные проводят большую часть времени?",
                            "correct": "поиск пищи",
                            "wrong": "воспитание детей; защита потомства; поиск партнера"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 28. День Сурка",
            "blocks": [
                {
                    "text": "Сурки способны спать до 9 месяцев в году.\nСурок в теплое время года и в бодрствующем состоянии совершает 72 тысячи дыхательных движений в течение двух дней. Во время спячки, за 6 месяцев, он дышит лишь 71 тысячу раз. Это значит, что он потребляет 1/90 часть того количества кислорода, в котором нуждается в период активности.\n",
                    "questions": [
                        {
                            "text": "До скольких месяцев в году способны спать сурки?",
                            "correct": "9",
                            "wrong": "4; 12; 5"
                        }
                    ]
                },
                {
                    "text": "Лесной североамериканский сурок впадает зимой в спячку, чтобы пережить холод и отсутствие пищи. Температура его тела падает, дыхание замедляется. Летом сурок дышит со скоростью двадцать восемь раз в минуту. Во время спячки он дышит только раз в минуту.",
                    "questions": [
                        {
                            "text": "Что делает зимой североамериканский сурок, чтобы пережить холод и голод?",
                            "correct": "впадает в спячку",
                            "wrong": "запасается едой; мигрирует на юг; меняет рацион "
                        }
                    ]
                },
                {
                    "text": "Байбаки (степные сурки) устраиваются на зимовку вместе. Они спят до восьми месяцев зимой, просыпаясь каждые три месяца, чтобы потянуться и почесаться. Байбаки питаются запасом жира, отложенным в их теле. Когда они просыпаются, то потеря веса составляет четвертую часть первоначального.",
                    "questions": [
                        {
                            "text": "Как называются степные сурки, которые устраиваются на зимовку вместе?",
                            "correct": "Байбаки",
                            "wrong": "Балалайки; Баркасы; Семейные сурки"
                        },
                        {
                            "text": "Для чего Байбаки просыпаются каждые три месяца во время спячки зимой?",
                            "correct": "потянуться и почесаться",
                            "wrong": "поесть и попить; прогуляться и перекусить; поохотиться и размяться"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 29. Жабы",
            "blocks": [
                {
                    "text": "Жабы обладают липким «стреляющим языком». Правда, он у них прикреплён во рту задом наперёд, то есть не задней частью (как у человека), а передней. Это позволяет высовывать его на большее расстояние, что, конечно же, очень помогает при ловле зазевавшихся насекомых.",
                    "questions": [
                        {
                            "text": "С помощью чего жабы ловят «зазевавшихся» насекомых?",
                            "correct": "язык",
                            "wrong": "лапы; ловушка; рот "
                        }
                    ]
                },
                {
                    "text": "Самой громогласной среди лягушек считается небольшая древесная лягушка – обитательница и даже символ острова Пуэрто-Рико в Карибском море. Имея длину менее 5 см и вес чуть больше 8 граммов, коки издаёт крики, чья громкость достигает 108 децибел. Для сравнения: примерно такой же шум исходит от низко летящего реактивного самолёта. Вся разница только в том, что коки свистит, а не грохочет двигателями.",
                    "questions": [
                        {
                            "text": "С чем автор сравнивает громкость крика древесной лягушки?",
                            "correct": "реактивный самолет",
                            "wrong": "быстрый поезд; гудок корабля; камнепад в горах"
                        },
                        {
                            "text": "На каком острове обитает громогласная древесная лягушка?",
                            "correct": "Пуэрто-Рико",
                            "wrong": "Сен-Мартин; Сент-Томас; Ронкадор-Кей"
                        },
                        {
                            "text": "Какую громкость достигает крик древесной лягушки?",
                            "correct": "108 децибел",
                            "wrong": "513 децибел; 814 децибел; 60 децибел "
                        }
                    ]
                },
                {
                    "text": "Из всего огромного видового количества лягушек лишь один вид является вегетарианским – это бразильские квакши. Миниатюрные лягушки (длиной всего 4 см) питаются только плодами двух видов растений – антуриума и коки.\nВ Австралии обитают пустынные лягушки, выделяющие вещество, которым можно эффективно склеивать швы при хирургических операциях.\n",
                    "questions": [
                        {
                            "text": "Как называется вид вегетарианских лягушек?",
                            "correct": "бразильские квакши",
                            "wrong": "аргентинские прыгуньи; островные квахи; американские клякухи"
                        }
                    ]
                },
                {
                    "text": "Некоторые виды лягушек, а именно – древесные лягушки, живут на деревьях. Как правило, это очень маленькие существа, имеющие на лапках липкие присоски, которые позволяют им удерживаться на ветках.",
                    "questions": [
                        {
                            "text": "Благодаря чему древесные лягушки удерживаются на ветках деревьев?",
                            "correct": "липкие присоски",
                            "wrong": "клейкое вещество; легкий вес; сильные лапы"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 30. Пауки-ткачи",
            "blocks": [
                {
                    "text": "Паук немезия лепит из глины пробку, форма которой в точности повторяет все изгибы выходного отверстия норы. Глиняная затычка наглухо изолирует жилище паука от внешнего мира и, следовательно, от его недругов.\nНазвание очень быстрого итальянского танца тарантелла связано с поверьем, согласно которому укушенного мохнатым пауком тарантулом человека можно было вылечить, лишь заставив его танцевать до полного изнеможения сил.\n",
                    "questions": [
                        {
                            "text": "Из чего паук немезия лепит пробку для своей норы?",
                            "correct": "глина",
                            "wrong": "песок; паутина; чернозем"
                        },
                        {
                            "text": "Согласно итальянскому поверью, что нужно было сделать человеку, которого укусил тарантул?",
                            "correct": "танцевать",
                            "wrong": "петь; пить много воды; спать"
                        }
                    ]
                },
                {
                    "text": "Обычно пауки ведут одиночный образ жизни. Однако в тропических лесах встречаются колонии пауков (до тысячи и более особей), что объясняется возможностью ведения более эффективной охоты. Так, стая пауков общими усилиями плетёт гигантскую паутину, площадь которой может достигать 5 и более квадратных метров. Такая паутина висит горизонтально на расположенных отвесно нитях. Что интересно – эти нити, в отличие от основной паутины, не липкие, они лишь поддерживают сеть.",
                    "questions": [
                        {
                            "text": "Для чего тропические пауки объединяются в большие колонии?",
                            "correct": "эффективная охота",
                            "wrong": "строительство гнезда; создание семьи; частные миграции"
                        },
                        {
                            "text": "Чем отличаются отвесные нити, поддерживающие сеть от основной паутины?",
                            "correct": "они не липкие",
                            "wrong": "они хрупкие; они ломкие"
                        }
                    ]
                },
                {
                    "text": "Пауки способны путешествовать на своей паутине на расстояния до 300-330 км. При этом полёт может происходить на высотах до 4,5 км. Но самое интересное – это то, что пауки непостижимым для науки образом могут менять направление полёта, то есть они вовсе не отдаются во власть ветра.",
                    "questions": [
                        {
                            "text": "На какой предельной высоте может происходить полет паука?",
                            "correct": "4,5 км",
                            "wrong": "5,6 км; 1 м; 30 км"
                        },
                        {
                            "text": "Могут ли пауки менять направление полёта? ",
                            "correct": "да",
                            "wrong": "нет; не могут "
                        }
                    ]
                },
                {
                    "text": "Если бы из паутины можно было сделать проволоку, то она была бы прочнее стали и эластичнее нейлона.\nПаутина служит паукам не только для ловли животных, но и для подготовки к размножению, для защиты от солнца (у пустынных пауков она исполняет роль тента над норой), для перелётов на большие расстояния.\n",
                    "questions": [
                        {
                            "text": "Прочнее чего была бы паутина, если бы из нее можно было сделать проволоку?",
                            "correct": "сталь",
                            "wrong": "камень; алмаз; золото"
                        },
                        {
                            "text": "Эластичнее чего была бы паутина, если бы из нее можно было сделать проволоку?",
                            "correct": "нейлон",
                            "wrong": "жвачка; пластилин; резина "
                        }
                    ]
                },
                {
                    "text": "Паучья паутина – исключительно полезное для человека приобретение. Так, ещё древние греки прикладывали её к ранам, чтобы остановить кровь. В недалёком прошлом из паутины изготовляли модные дамские сумочки, шляпки, перчатки и даже чулки. ",
                    "questions": [
                        {
                            "text": "Для чего древние греки прикладывали паутину к ранам?",
                            "correct": "остановить кровь",
                            "wrong": "дезинфицировать рану; в качестве обезболивающего; парализовать яд"
                        }
                    ]
                },
                {
                    "text": "Сегодня из паутины производят особо прочные и лёгкие соединения – композиты. В США, ФРГ и некоторых других странах паутина идёт на изготовление бронежилетов. А в Индонезии из неё делают рыболовные лески.\nНекоторые птицы используют паучью паутину для строительства своих гнезд. Паутина выполняет при этом роль среды, связующей различные материалы.\n",
                    "questions": [
                        {
                            "text": "На изготовление чего идет паутина в США, ФРГ и некоторых других странах?",
                            "correct": "бронежилет",
                            "wrong": "платье; защитные штаны; упаковки "
                        },
                        {
                            "text": "Что делают из паутины в Индонезии? ",
                            "correct": "рыболовные лески ",
                            "wrong": "паруса для лодок; сеть для сбора фруктов; укрепления крыш жилища "
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 31. Карликовые тушканчики",
            "blocks": [
                {
                    "text": "Тушканчики, чья длина тела не достигает и беличьих размеров, способны развивать скорость до 50 км/ч! Все дело в задних ногах (на которых тушканчик и бегает) — тонких и длинных, напоминающих складывающиеся ноги-рычаги известного прыгуна — кузнечика.",
                    "questions": [
                        {
                            "text": "Благодаря чему тушканчики способны развивать скорость до 50 км/ч?",
                            "correct": "задние ноги",
                            "wrong": "легкий вес; маленький рост; аэродинамика"
                        },
                        {
                            "text": "Как называется известный прыгун, чьи ноги напоминают задние лапы тушканчика?",
                            "correct": "кузнечик",
                            "wrong": "саранча; кенгуру; сверчок "
                        }
                    ]
                },
                {
                    "text": "Карликовый тушканчик сальпинготус запасает жир в… хвосте, который разбухает до размеров крупной морковки. Поэтому сальпинготусов называют еще жирохвостыми.\nОбитающие в пустынях родственники хомяков – тушканчики – способны не пить по 16 месяцев. И что интересно: большинство из них умирает естественной смертью в двухлетнем возрасте. Другими словами, тушканчики могут не пить… всю жизнь.\n",
                    "questions": [
                        {
                            "text": "Где запасает свой жир карликовый тушканчик – сальпинготус? ",
                            "correct": "хвост",
                            "wrong": "бока; передние лапы; шея; живот"
                        },
                        {
                            "text": "С чем сравнивается разбухший от жира хвост карликового тушканчика?",
                            "correct": "крупная морковка ",
                            "wrong": "беличий хвост; огурец; парус "
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 32. Превосходство кошек",
            "blocks": [
                {
                    "text": "Слух кошки в 3 раза совершеннее слуха человека, а её зрение в 6 раз острее.\nКошки независимо от возраста, пола и размера, мурлычат всегда на одной и той же частоте – 25,9 герца.\n",
                    "questions": [
                        {
                            "text": "Во сколько раз слух кошки совершеннее слуха человека?",
                            "correct": "3",
                            "wrong": "8; 15; 5"
                        },
                        {
                            "text": "Во сколько раз зрение кошки острее зрения человека?",
                            "correct": "6",
                            "wrong": "3; 12; 8"
                        }
                    ]
                },
                {
                    "text": "Никто не знает, когда кошки впервые стали развлечением и любимчиками. В Древнем Египте они были обожествлены, и их не держали для ловли мышей. Этим занимались домашние змеи.\nУже 4 тысячи лет назад у древних египтян были ручные кошки, которые считались священными животными, и когда кошки умирали, люди ходили в трауре.\n",
                    "questions": [
                        {
                            "text": "Кто занимался ловлей мышей в Древнем Египте?",
                            "correct": "домашние змеи",
                            "wrong": "любимые кошки; мышеловы; домашние собаки "
                        },
                        {
                            "text": "Кем считались ручные кошки в Древнем Египте?",
                            "correct": "священные животные",
                            "wrong": "член семьи; дикое животное; охотник на мышей "
                        }
                    ]
                },
                {
                    "text": "В Европе до 1000 года ручных кошек скорее всего не было, так как кошки считались животными, в которых заключён дьявольский дух.\nПо ночам, когда кошки выходят на охоту, они видят в шесть раз лучше, чем люди. Так происходит потому, что у них есть специальный слой на задней стенке глазного яблока. Он отражает свет, помогая кошке видеть.\n",
                    "questions": [
                        {
                            "text": "Что было заключено в кошках, согласно представлениям европейцев до 1000 года?",
                            "correct": "дьявольский дух",
                            "wrong": "человеческие грехи; магическая сила; удача"
                        },
                        {
                            "text": "Что делает специальный слой, который находится на задней стенке глазного яблока у кошки?",
                            "correct": "отражает свет",
                            "wrong": "впитывает темноту; рисует контраст; защищает глазное яблоко"
                        }
                    ]
                },
                {
                    "text": "Без усов кошка не может охотиться. Усы кошки по ширине достигают размером её тела. Они помогают животному определять расстояние и ориентироваться в темноте.",
                    "questions": [
                        {
                            "text": "Что помогает кошке определять расстояние и ориентироваться в темноте?",
                            "correct": "усы",
                            "wrong": "нюх; хвост"
                        },
                        {
                            "text": "Может лит кошка охотиться без усов?",
                            "correct": "нет",
                            "wrong": "да"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 33. Птицы рекордсмены",
            "blocks": [
                {
                    "text": "Самыми зоркими существами на Земле являются птицы. Зрение орлов, ястребов, соколов, грифов и других хищных птиц в 8 раз острее человеческого.\nДля улучшения пищеварения страусы иногда проглатывают большие камни, куски железа и другие предметы.\n",
                    "questions": [
                        {
                            "text": "Во сколько раз зрение орлов, ястребов и других хищных птиц острее зрения человека?",
                            "correct": "8",
                            "wrong": "28; 15; 3"
                        },
                        {
                            "text": "Что проглатывают страусы для улучшения пищеварения?",
                            "correct": "большие камни",
                            "wrong": "маленькие кости; зеленую траву; жидкую глину"
                        }
                    ]
                },
                {
                    "text": "Время начала перелёта птиц определяется только погодой, причём направление и сила дующих ветров более важны, чем температура окружающего воздуха.\nВальдшнеп видит всё, что происходит вокруг него, даже не поворачивая головы. Этой способностью он обязан своим замечательным глазам, которые разнесены необычно далеко – почти к затылку.\n",
                    "questions": [
                        {
                            "text": "Чем определяется время начала перелета птиц?",
                            "correct": "погода",
                            "wrong": "биологические циклы; географическое положение; солнечные условия"
                        },
                        {
                            "text": "Благодаря чему вальдшнеп видит все, что происходит вокруг него, даже не поворачивая головы?",
                            "correct": "расположение глаз",
                            "wrong": "чуткое обоняние; острое зрение; скрытая интуиция "
                        }
                    ]
                },
                {
                    "text": "В пустыне Гоби, на Алтае и в Забайкалье обитает воробей, который живёт в… глубоких норах. Его так и называют – земляной воробей. Птица гнездится, прячется, ночует в брошенных норах грызунов. Гнездо земляной воробей помещает на глубине до 75 см от входа в нору.",
                    "questions": [
                        {
                            "text": "Где располагает свое гнездо земляной воробей?",
                            "correct": "глубокая нора",
                            "wrong": "теплая земля; земляная насыпь"
                        }
                    ]
                },
                {
                    "text": "Океаническая птица фрегат промышляет тем, что отнимает рыбу у других птиц, то есть атакует птицу-жертву до тех пор, пока та не выпустит рыбину из клюва. После этого фрегат ловко подхватывает летящую вниз добычу – и был таков. (Интересно, что мешает птицам, потерявшим рыбу из-за фрегатов, в отместку делать им то же самое – атаковать, заставляя выпустить добычу из клюва.)",
                    "questions": [
                        {
                            "text": "Что делает птица-фрегат для того, чтобы отнять рыбу у других птиц?",
                            "correct": "атакует",
                            "wrong": "выпрашивает; дожидается объедков"
                        }
                    ]
                },
                {
                    "text": "Альбатрос способен целыми днями парить в воздухе, практически не взмахивая крыльями.\nПтица-палач накалывает мышей на шипы кустарника, делая, таким образом, запасы на чёрный день.\n",
                    "questions": [
                        {
                            "text": "Что способен делать альбатрос целыми днями в воздухе?",
                            "correct": "парить",
                            "wrong": "махать крыльями; охотиться"
                        },
                        {
                            "text": "Для чего птица-палач накалывает мышей на шипы кустарника?",
                            "correct": "запасы",
                            "wrong": "приманка; игра; отпугивание"
                        }
                    ]
                },
                {
                    "text": "Большинство птиц не поднимается выше 1 км, но есть среди пернатых и любители высоты. Так, гималайские гуси способны взлетать на высоту до 8,5 тысяч метров. А однажды в самолёт, летящий на высоте 6 тысяч метров, врезался южноамериканский кондор.\nЧемпионами среди птиц по налёту километров являются арктические крачки, которые за год во время перелётов покрывают расстояние, равное примерно 35 тысяч км.\n",
                    "questions": [
                        {
                            "text": "Во что однажды врезался южноамериканский кондор на высоте 6 тысяч метров?",
                            "correct": "самолет",
                            "wrong": "вертолет; аэроплан; дирижабль "
                        },
                        {
                            "text": "Примерно какое расстояние перелетов покрывают арктические крачки за год?",
                            "correct": "35 тыс. км",
                            "wrong": "80 тыс. км; 1 млн км; 65 тыс. км"
                        }
                    ]
                },
                {
                    "text": "Американская золотистая ржанка – чемпион по длительности «беспосадочных» перелётов: она способна преодолеть 3,5 тысяч км без единой остановки.",
                    "questions": [
                        {
                            "text": "По длительности каких перелетов американская золотистая ржанка «чемпион»?",
                            "correct": "«беспосадочных»",
                            "wrong": "«остановочных»; «групповых»; «навигационных»"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 34. Линза Нимруда",
            "blocks": [
                {
                    "text": "Как показывают современные исследования – наука древнего мира не была примитивной и утилитарной. Первые образцы аккумуляторов и планисфер – не единственные «гаджеты», которые удалось обнаружить в ходе проведения археологических исследований по всему миру. Наиболее значимыми находками считаются линза Нимруда и Антикитерский механизм. ",
                    "questions": [
                        {
                            "text": "Была ли наука древнего мира утилитарной и примитивной?",
                            "correct": "нет",
                            "wrong": "да"
                        }
                    ]
                },
                {
                    "text": "Линза была обнаружена археологами среди руин дворца Нимруда в Ираке. Ее возраст определен примерно в 3000 лет. Некоторые ученые полагают, что линза была составляющей частью древнего телескопа, который вавилоняне использовали для изучения небесных тел и составления астрономических расчетов высокой точности. ",
                    "questions": [
                        {
                            "text": "Частью чего могла быть линза, согласно мнению некоторых ученых?",
                            "correct": "древний телескоп",
                            "wrong": "древнее зеркало; часть осветительного прибора"
                        },
                        {
                            "text": "Где была обнаружена линза? ",
                            "correct": "руины дворца Нимруда",
                            "wrong": "руины домика Перуна; дворец Изумруда "
                        }
                    ]
                },
                {
                    "text": "Антикитерский механизм (200 г. до н.э.) использовался для расчета параметров движения небесных тел с целью определения потенциальных импактных событий. К сожалению, сказать со 100% точностью какое именно предназначение было у этих предметов, невозможно; так же сложно и предположить, почему эти изобретения оставались «за кадром» на протяжении нескольких тысяч лет. ",
                    "questions": [
                        {
                            "text": "Для чего использовался Антикитерский механизм?",
                            "correct": "расчет движения небесных тел",
                            "wrong": "расчет движения кораблей; исследование подводных глубин; высчитывание дней"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 35. Империя Рама",
            "blocks": [
                {
                    "text": "Несмотря на войны и несколько крупных набегов, древняя история Индии прочувствовала на себе разрушительное влияние агрессоров. Долгое время считалось, что история индийской цивилизации берет свое начало в 500 г. до н.э.; однако некоторые открытие прямо свидетельствуют о том, что эту дату следует передвинуть как минимум на несколько тысяч лет. ",
                    "questions": [
                        {
                            "text": "О какой стране идет речь в рассказе?",
                            "correct": "Индия",
                            "wrong": "Вьетнам; Иран; Израиль"
                        }
                    ]
                },
                {
                    "text": "В долине реки Инд были обнаружены руины древних городов Хараппа и Мохенджо-Даро. Города представляли собой настолько тщательно продуманные инженерные комплексы, что археологи всерьез задумались о том, насколько важное открытие им удалось сделать. Истоки и причина исчезновения хараппской цивилизации также остаются для специалистов загадкой, а письменность не смог расшифровать ни один лингвист. ",
                    "questions": [
                        {
                            "text": "Разгадали ли специалисты причину исчезновения древней хараппской цивилизации? ",
                            "correct": "нет",
                            "wrong": "да"
                        },
                        {
                            "text": "Правда ли, что лингвисты смогли расшифровать письмена древних городов? ",
                            "correct": "нет",
                            "wrong": "да"
                        }
                    ]
                },
                {
                    "text": "К слову, во время раскопок не было обнаружено ни одного культового сооружения (например, храма или места для жертвоприношения); также не обнаружено каких-либо свидетельств классовой структуры хараппского общества. Подобный уровень развития не встречается ни в одной из известных человеческих цивилизаций (за исключением некоторых общих черт с древнеегипетской и месопотамской культурами). ",
                    "questions": [
                        {
                            "text": "Чего не было обнаружено при раскопках древнего города?",
                            "correct": "культовые сооружения: храмы и жертвенники",
                            "wrong": "разветвленные улицы: перекрестки и тупики; жилые сооружения: дома и хибарки"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 36. Пещеры Лонгью",
            "blocks": [
                {
                    "text": "Китайцы считают пещеры Лонгью «девятым чудом древнего мира» — происхождения подземного комплекса из 24 пещер до сих пор считается загадкой. После открытия исследователями в 1992 году, ни один документальный источник или свидетельство проведенных когда-либо строительных работ в этом регионе не был найден – а ведь для создания комплекса потребовалось извлечь более миллиона кубических метров камня! ",
                    "questions": [
                        {
                            "text": "Сколько пещер насчитывает этот подземный комплекс? ",
                            "correct": "24",
                            "wrong": "35 пещер и один котлован; 28; 14"
                        },
                        {
                            "text": "В каком году был открыт этот комплекс пещер",
                            "correct": "1992",
                            "wrong": "672; 1939; 2000-е гг."
                        }
                    ]
                },
                {
                    "text": "Выдолбленные каменные коридоры интересны еще и тем, что на стенах пещер наблюдается повторяемый орнамент, который, по мнению ученых, имеет символическое значение. Этот орнамент встречается и на гончарных изделиях, датируемых между 500 и 800 гг. до н.э. ",
                    "questions": [
                        {
                            "text": "Чем интересны и необычны стены этих пещер? ",
                            "correct": "орнамент с символикой ",
                            "wrong": "узор из горных пород; сталактиты и глина"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 37. Город Над-Мадол",
            "blocks": [
                {
                    "text": "Нан-Мадол – город, существовавший на вулканическом острове Понпей в Микронезии. Он был возведен на коралловом рифе с использованием огромных (весом до 50 т) базальтовых блоков и представлял собой довольно сложную систему, объединенную многочисленными каналами и туннелями. По сложности конструкции и строительных работ его часто сравнивают с Великой Китайской стеной и Великой пирамидой.",
                    "questions": [
                        {
                            "text": "На чем был возведен город Нан-Мадол?",
                            "correct": "коралловый риф",
                            "wrong": "песчаный берег; скалистая местность; искусственный остров"
                        }
                    ]
                },
                {
                    "text": "Хотя средний вес блоков, которые использовались для возведения пирамиды, составлял не больше 3 т, ни в одном из существующих источников не обнаружено данных про период строительства, цель и, главное, зодчих. Радиоуглеродное датирование помогло установить примерный возраст – 200 г. до н.э. ",
                    "questions": [
                        {
                            "text": "Каков был средний вес блоков для возведения пирамиды?",
                            "correct": "не больше 3 т",
                            "wrong": "больше 3 т; 20 т"
                        }
                    ]
                },
                {
                    "text": "Происхождение базальтовых блоков также остается загадкой, как и способ их транспортировки (50 футов в высоту и 17 футов толщиной). Кроме того, останки жителей города указывают на их принадлежность к расе, которая не имеет ничего общего с современными микронезийцами. ",
                    "questions": [
                        {
                            "text": "Смогли ли исследователи разгадать происхождение базальтовых блоков?",
                            "correct": "нет",
                            "wrong": "да"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 38. Туннели каменного века",
            "blocks": [
                {
                    "text": "По всей территории от Шотландии до Турции под остатками сотен поселений времен неолита археологи обнаружили разветвленную сеть подземных туннелей. Глубина колеблется от 2300 футов (700 м) в Баварии (Германия) до 1200 футов (350 м) в Австрии, что является свидетельством исключительного мастерства строителей времен неолита, поскольку большая часть туннелей сохранилась практически в первоначальном виде несмотря на значительный возраст – 12000 лет.",
                    "questions": [
                        {
                            "text": "Что обнаружили ученые?",
                            "correct": "сеть подземных туннелей",
                            "wrong": "сеть туманных созвездий; древние ископаемые"
                        }
                    ]
                },
                {
                    "text": "Хотя не все туннели имеют структурные соединения, специалисты полагают, что их главным предназначением было предоставить людям возможность безопасно перемещаться по территории независимо от уровня внешней опасности. Также в системе туннелей были созданы специальные помещения – по всей вероятности, использовавшиеся в качестве складских помещений и бункеров. ",
                    "questions": [
                        {
                            "text": "В чем было главное предназначение туннелей?",
                            "correct": "безопасное перемещение",
                            "wrong": "место для тайных встреч; темница для преступников"
                        },
                        {
                            "text": "О каких специальных помещениях в туннелях шла речь?",
                            "correct": "склад и бункер ",
                            "wrong": "столовая и кухня"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 39. Пума Пунку",
            "blocks": [
                {
                    "text": "Пума Пунку – один из четырех структурных компонентов (комплексов строений) древнего доинкского города Тиванаку в Южной Америке. Возраст мегалитического комплекса до сих пор является предметом оживленных дискуссий, поскольку руины подвергались неоднократным «набегам» мародеров и археологов-любителей – все, что могло бы пролить свет на тайну Пума Пунку, было или уничтожено, или украдено. ",
                    "questions": [
                        {
                            "text": "Где находится древний город Тиванаку?",
                            "correct": "Южная Америка",
                            "wrong": "Южная Африка; штат Юта"
                        },
                        {
                            "text": "В связи с чем возникли трудности в установлении возраста города?  ",
                            "correct": "разграбление и уничтожение руин ",
                            "wrong": "отсутствие квалификации у специалистов; погодные условия"
                        }
                    ]
                },
                {
                    "text": "Ученые сходятся во мнении, что комплекс намного старше египетских пирамид, следовательно, речь идет о 15000 лет. Даже инки не владели достаточным количеством информации об этом объекте. На массивных каменных блоках, использовавшихся для возведения зданий, нет ни одного следа от соприкосновения с каким-либо строительным инструментом; также поражает то, насколько точно блоки подогнаны друг к другу. ",
                    "questions": [
                        {
                            "text": "Ученые сходятся во мнении, что комплекс намного старше….?",
                            "correct": "египетские пирамиды ",
                            "wrong": "пизанская башня; римский театр  "
                        },
                        {
                            "text": "Что использовалось для возведения зданий?",
                            "correct": "каменные блоки",
                            "wrong": "деревянные брусья; кирпичные блоки "
                        }
                    ]
                },
                {
                    "text": "Эти данные свидетельствуют о высоком уровне мастерства и познаний в области обработки камня, инженерных технологий и геометрии. В городе также функционировала ирригационная система, защищенная от воздействия воды канализация и комплекс гидравлических механизмов. Поскольку ученым так и не удалось обнаружить никаких свидетельств, информирующих нас о жителях города, уровень технологического развития остается одной из наиболее интригующих тайн. ",
                    "questions": [
                        {
                            "text": "Смогли ли ученые обнаружить какую-либо информацию о жителях города?",
                            "correct": "нет",
                            "wrong": "да"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 40. Город Баальбек",
            "blocks": [
                {
                    "text": "Древний ливанский город Баальбек является одной из самых сохранившихся памяток древнеримской культуры в мире. Известный под именем Гелиополиса в давние времена, он поражает своей величественностью и сложностью. Но ученых гораздо больше волнует не Гелиополис, а руины мегалитического комплекса, обнаруженные под фундаментом города. ",
                    "questions": [
                        {
                            "text": "К какой культуре относится город Баальбек?",
                            "correct": "древнеримская",
                            "wrong": "древнегреческая; древнеегипетская; древнерусская  "
                        }
                    ]
                },
                {
                    "text": "Найденные блоки весят не менее 1200 т каждый – это самые крупные обработанные вручную конструкции из камня в мире. Археологи датируют руины ІХ тыс. до н.э., поскольку в верхних слоях почвы были обнаружены артефакты Среднего (1900-1600 гг. до н.э.) и Раннего (2900-2300 гг. до н.э.) бронзового века. ",
                    "questions": [
                        {
                            "text": "Сколько весели найденные каменные блоки?",
                            "correct": "1200 т",
                            "wrong": "2000 т; 500 т"
                        }
                    ]
                },
                {
                    "text": "Невозможно объяснить то, каким образом материал для строительства был доставлен в этот регион из места добычи; архитекторы и инженеры в один голос твердят о том, что в указанный период не существовало технологий, которые можно было бы использовать для подъема огромных каменных блоков (среди приведенных аргументов — местоположение и ограниченность пространства для использования подобных механизмов). Впрочем, ни одна из современных строительных технологий не способна предоставить четкий ответ на этот вопрос. ",
                    "questions": [
                        {
                            "text": "Что не могут объяснить архитекторы и инженеры в строительстве древнего города?",
                            "correct": "доставка материала из места добычи",
                            "wrong": "материал строительных блоков; способ крепления "
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 41. Плато Гиза",
            "blocks": [
                {
                    "text": "Загадкам Древнего Египта посвящена не одна сотня научных трудов. Сегодня ни для кого не секрет, что конструкция Великой пирамиды Гизы представляет собой систему точнейших расчетов (это вызвало сомнения насчет истинного предназначения пирамиды, которая могла быть не просто гробницей для захоронения останков фараона). ",
                    "questions": [
                        {
                            "text": "О каких загадках Древнего Египта идет речь?",
                            "correct": "Великая пирамида Гиза",
                            "wrong": "Великий Египетский туннель; Аравийская пустыня"
                        }
                    ]
                },
                {
                    "text": "Более того, поскольку доказано, что разрушения статуи Большого Сфинкса были спровоцированы в основном обильными осадками (продолжительные дожди не были редкостью на этой территории до начала засушливого периода), возраст пирамиды относят к V-VII тысячелетию до н.э. (некоторые ученые полагают, что дату следует «оттянуть» еще на несколько тысячелетий назад).",
                    "questions": [
                        {
                            "text": "Чем были спровоцированы разрушения статуи Большого Сфинкса?",
                            "correct": "обильные осадки ",
                            "wrong": "ураганный ветер; морозный снегопад; палящий зной"
                        }
                    ]
                },
                {
                    "text": "Внезапный подъем египетской цивилизации в ІІІ тысячелетии до н.э. стал поводом для выдвижения гипотезы о существовании более древней культуры, предшествующей египетской. Установлена также принадлежность к этой культуре и таких исторических памятников как Пирамида Хафры, Фиванский Некрополь и храм Менкаура (при их строительстве были использованы блоки из известняка – точно такие же обнаружены в фундаменте Сфинкса). ",
                    "questions": [
                        {
                            "text": "Что предполагали исследователи в связи с изучением египетской цивилизации?",
                            "correct": "существование более древней культуры",
                            "wrong": "наличие транспортных средств; развитую инфраструктуру"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 42. Гебекли-Тепе",
            "blocks": [
                {
                    "text": "Датированный концом последнего ледникового периода на планете (1200 лет назад), недавно обнаруженный археологами храмовый комплекс в южно-восточной части Турции был назван одним из наиболее значительных археологических открытий нашего времени. ",
                    "questions": [
                        {
                            "text": "Что обнаружили археологи в южно-восточной части Турции?",
                            "correct": "храмовый комплекс",
                            "wrong": "следы ледникового периода; открытые поля и пастбища; современный скрытый город"
                        }
                    ]
                },
                {
                    "text": "Образцы керамики, письменности, прототип колеса и примитивные металлургические комплексы представляют собой настолько совершенные с точки зрения технологий конструкции, что «выпадают» из исторического контекста эпохи палеолита. Будучи старше Стоунхенджа на тысячи лет, комплекс состоит из 20 строений круглой формы (на данный момент раскопаны и изучены только четыре) и украшенных причудливым орнаментом опор высотой 18 футов и весом приблизительно 15 т каждая. ",
                    "questions": [
                        {
                            "text": "Сколько строений комплекса были раскопаны и изучены на данный момент?",
                            "correct": "четыре",
                            "wrong": "восемь; 20; пятнадцать  "
                        },
                        {
                            "text": "Сколько весели опоры, украшенные орнаментом? ",
                            "correct": "15 т",
                            "wrong": "18 т; 20 т"
                        }
                    ]
                },
                {
                    "text": "При этом не установлено, кто спроектировал и построил этот комплекс – остается также много вопросов по поводу того, как примитивная цивилизация охотников-собирателей смогла блестяще проявить себя в строительстве и искусстве каменной кладки.",
                    "questions": [
                        {
                            "text": "В чем проявила себя цивилизация охотников-собирателей?",
                            "correct": "строительство",
                            "wrong": "охота; рыболовство; сбор урожая"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 43. Йенненга",
            "blocks": [
                {
                    "text": "Йенненга известная немногим женщина правила королевством Дагомаба в ХІІ веке (север современной Ганы) и была дочерью короля Недеги. Девочку с юных лет обучали военному искусству, воспитывая в спартанских условиях, которые выдерживали далеко не все мужчины. Йенненга показывала блестящие результаты во всем – метание копья, стрельба из лука и верховая езда (в этом она превзошла даже своих братьев). ",
                    "questions": [
                        {
                            "text": "В каком веке Йенненга правила королевством? ",
                            "correct": "XII",
                            "wrong": "V; XIX; XVII"
                        },
                        {
                            "text": "Чему обучали принцессу с юных лет?",
                            "correct": "военное искусство",
                            "wrong": "политическая дипломатия; искусство переговоров; исследовательская деятельность"
                        }
                    ]
                },
                {
                    "text": "Девушка даже успела покомандовать целым военным подразделением! Но был один нюанс – отец настолько ценил ее в качестве советника и воина, что всячески препятствовал ее браку. Согласно найденным на территории северной Ганы документальным свидетельствам, девушка не стала мириться с тиранией родителя. ",
                    "questions": [
                        {
                            "text": "Чему препятствовал отец принцессы?",
                            "correct": "ее брак",
                            "wrong": "ее развитие; ее политическое влияние"
                        },
                        {
                            "text": "С чем не стала мириться принцесса? ",
                            "correct": "тирания отца",
                            "wrong": "нищета; отсутствие власти"
                        }
                    ]
                },
                {
                    "text": "Один из охранников короля помог ей бежать на север, но в пути был убит представителями местного племени. Йенненга продолжала свой путь до тех пор, пока не набрела на дом Риаля, известного охотника на слонов. Так она встретила свою судьбу. Королева Йенненга считается прародительницей западноафриканского народа моси.",
                    "questions": [
                        {
                            "text": "Кто помог принцессе бежать?",
                            "correct": "охранник короля ",
                            "wrong": "придворная служанка; городская жительница; родной брат"
                        },
                        {
                            "text": "Чем известен Риаль?",
                            "correct": "охота на слонов ",
                            "wrong": "военные подвиги; большие богатства; вздорный характер"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 44. Пинг Янг",
            "blocks": [
                {
                    "text": "Если бы вам довелось жить в конце эпохи правления китайской династии Суй да еще и иметь неосторожность родиться крестьянином – вам пришлось бы нелегко. Именно этот период отмечен такими грандиозными общегосударственными проектами как Великая китайская стена – император Янг прославился именно благодаря им.",
                    "questions": [
                        {
                            "text": "Чем примечателен период китайской династии Суй?",
                            "correct": "проект Великой китайской стены ",
                            "wrong": "проект Великого китайского моста; строительство Великого китайского дворца"
                        }
                    ]
                },
                {
                    "text": "При этом любая попытка усомниться в важности этой задумки жестоко каралась. Так, именно во время его правления было казнено большинство его генералов: в опасности оказался и отец Пинг Янг – Ли Юань. Генерал инициировал бунт, к которому вскоре присоединилась и его дочь. Пинг Янг удалось без помощи оружия склонить на свою сторону подавляющее большинство представителей военной элиты. ",
                    "questions": [
                        {
                            "text": "Что сделал генерал Ли Юань?",
                            "correct": "инициировал бунт",
                            "wrong": "возглавил управление постройками; жестоко карал инакомыслящих"
                        }
                    ]
                },
                {
                    "text": "Крестьянам она щедро раздавала деньги, вырученные от продажи семейных реликвий. В итоге ей удалось собрать под своими знаменами больше 70 000 солдат, которые действовали в соответствии с разработанным ею кодексом, исключавшим проявление агрессии или пренебрежения к крестьянам. Эта армия получила название «Войско Прекрасной Госпожи». ",
                    "questions": [
                        {
                            "text": "Что раздавала крестьянам принцесса?",
                            "correct": "деньги ",
                            "wrong": "свои владения; продукты и лекарства"
                        },
                        {
                            "text": "О чем говорилось в разработанном ею кодексе?",
                            "correct": "уважение к крестьянам ",
                            "wrong": "правила служения; честь и нравственность"
                        }
                    ]
                },
                {
                    "text": "Дело Ли Юаня получило достойное завершение – император был свергнут, основана новая династия – Танг, во времена правления которой Китай вошел в «золотую эпоху». Принцесса Пинг Янг до сих пор остается единственной женщиной в китайской истории, которая была похоронена с военными почестями. ",
                    "questions": [
                        {
                            "text": "Во времена какой династии Китай вошел в «золотую эпоху»?",
                            "correct": "Танг",
                            "wrong": "Цинь; Лайг; Кронг"
                        },
                        {
                            "text": "Что удалось сделать Ли Юаню?",
                            "correct": "свергнуть императора",
                            "wrong": "построить дворец; сбежать из страны "
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 45. Боудикка",
            "blocks": [
                {
                    "text": "Когда анимационная студия «Pixar» готовилась к созданию нового шедевра под названием «Храбрая сердцем», у зрителей впоследствии не было ни малейшего сомнения – образ дерзкой и отважной рыжеволосой принцессы был точной копией одной известной исторической личности.",
                    "questions": [
                        {
                            "text": "Какой цвет волос был у принцессы?",
                            "correct": "рыжий ",
                            "wrong": "черный; светлый; каштановый"
                        }
                    ]
                },
                {
                    "text": "Источником вдохновения для аниматоров стала королева Боудикка. Рыжеволосая предводительница бриттского племени иценов. В свое время организовала целое восстание против римского императора Нерона. После смерти ее мужа половина владений должна была быть распределена между их дочерьми, а другая отойти во владение Рима. ",
                    "questions": [
                        {
                            "text": "Против кого организовала восстание рыжеволосая предводительница?",
                            "correct": "римский император Нерон",
                            "wrong": "французский князь Альбер; английский барон; немецкий губернатор Карон"
                        }
                    ]
                },
                {
                    "text": "Но римские войска под командованием губернатора Гая Светония Паулина оккупировали всю территорию, изгнав королеву. Ответом на такие действие стало восстание – Боудикка объединила несколько племен, которые также пострадали от римского произвола. Бунтовщики захватили несколько городов (современные Лондон, Колчестер и Сент-Олбенс), столкнувшись в конце лицом к лицу с самим Гаем Светонием Паулином. Войско королевы не выдержало натиска отлично подготовленных римских солдат и было повержено. Но слава Дерзкой и Отважной не померкла до сих пор.",
                    "questions": [
                        {
                            "text": "Кто победил в финальной битве?",
                            "correct": "Римская империя",
                            "wrong": "племена бриттов; королева Боудикка"
                        },
                        {
                            "text": "Кого объединила королева Боудикка?",
                            "correct": "пострадавшие племена",
                            "wrong": "современные территории; римское войско"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 46. Лозен",
            "blocks": [
                {
                    "text": "Воин и предсказательница, Лозен происходила из племени апачей, населявших в ХІХ веке территорию современной Аризоны. Лозен была сестрой великого вождя индейцев Викторио. Еще в юном возрасте Лозен в совершенстве овладела искусством ведения боя. ",
                    "questions": [
                        {
                            "text": "Из какого племени происходила Лозен?",
                            "correct": "апачи",
                            "wrong": "чероки; пауни; алеуты "
                        },
                        {
                            "text": "Как сейчас называется территория, на которой в XIX в. размещалось племя?",
                            "correct": "Аризона",
                            "wrong": "Аргентина; Калифорния; Альбукерке "
                        }
                    ]
                },
                {
                    "text": "Ее никогда не интересовали такие традиционные для женщин занятия как кулинария и рукоделие – ей была уготована другая судьба. Она сражалась рука об руку со своим братом в самых страшных боях. Также Лозен была обладательницей уникального дара – целительства. О личной жизни воительницы практически ничего не известно, но все свои радости и печали она делила с близкой подругой по имени Дахтесте.",
                    "questions": [
                        {
                            "text": "Какие женские занятия не интересовали Лозен?",
                            "correct": "кулинария и рукоделие",
                            "wrong": "уборка в доме; мойка и стирка"
                        },
                        {
                            "text": "С кем Лозен сражалась рука об руку?",
                            "correct": "брат",
                            "wrong": "сестра; боевой конь; муж"
                        },
                        {
                            "text": "Каким уникальным даром обладала Лозен?",
                            "correct": "целительство",
                            "wrong": "ясновидение; убеждение; связь с предками"
                        }
                    ]
                },
                {
                    "text": "Женщины были полной противоположностью друг другу – гордая и воинственная Лозен не доверяла своих секретов никому, кроме величественной и утонченной подруги. Известно, что Дахтесте часто сопровождала подругу во время военных кампаний и выступала в качестве дипломата и переводчика. Имя Лозен до сих пор особо почитается потомками индейских племен Северной Америки. ",
                    "questions": [
                        {
                            "text": "Кем для Лозен приходилась Дахтесте?",
                            "correct": "подруга ",
                            "wrong": "служанка; сестра"
                        },
                        {
                            "text": "У Лозен и Дахтесте был схожий характер?",
                            "correct": "нет",
                            "wrong": "да"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 47. Пришла зима",
            "blocks": [
                {
                    "text": "Пришла зима. С севера подул студеный ветер, и с неба посыпались снежинки. Кружатся в воздухе и падают на землю — одна красивее другой! Вот цветок с шестью лепестками; вот звездочка с шестью лучами; вот тончайшая пластинка с шестью гранями.",
                    "questions": [
                        {
                            "text": "О каком времени года идет речь в рассказе?",
                            "correct": "зима",
                            "wrong": "весна; жаркое лето; осень"
                        },
                        {
                            "text": "С чем сравниваются снежинки, упавшие на землю?",
                            "correct": "цветок и звездочка",
                            "wrong": "диск и сфера; треугольник и ромб; листок и остроконечник "
                        }
                    ]
                },
                {
                    "text": "Чем тише морозная погода, тем красивее падающие на землю снежинки. При сильном ветре у них обламываются лучи и грани, и белые цветы и звезды обращаются в снежную пыль. А когда мороз несильный, снежинки скатываются в плотные белые шарики, и мы говорим тогда, что с неба падает крупа.",
                    "questions": [
                        {
                            "text": "Из-за чего обламываются лучи и грани у снежинок?",
                            "correct": "сильный ветер",
                            "wrong": "яркое солнце; большая скорость; столкновения"
                        },
                        {
                            "text": "Что превращается в белые и плотные шарики в несильный мороз?",
                            "correct": "снежинки",
                            "wrong": "манка; облака; сугробы"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 48. Вот и ноябрь",
            "blocks": [
                {
                    "text": "Тусклы и коротки дни поздней осени. Непроглядно темны длинные ночи. Хмурится низко нависшее небо. «Дохнул ноябрь осенним хладом…».\nТолько серому волку поздняя осень и зима не в диковинку. Привольно зверю разгуливать по безлюдным полям. В ноябре волки не живут в большом лесу, бегают стаями из чащ в травянистые болота, в мелколесья, в овраги и ближе к деревне.\n",
                    "questions": [
                        {
                            "text": "Где живут волки в ноябре?",
                            "correct": "большой лес",
                            "wrong": "поле, ближе к деревне; большие горы"
                        },
                        {
                            "text": "Куда бегают стаи волков в осеннюю пору? ",
                            "correct": "мелколесье и овраги",
                            "wrong": "к реке и на берег"
                        }
                    ]
                },
                {
                    "text": "Быстро убывает короткий ноябрьский день. Темнеет. Стелется дымчатая вуаль сумерек, затуманились окрестности.\nВечером вороны и галки тянутся в деревню, сороки — в лес. А утром наоборот: ворона — в лес, а сорока — в деревню. Это верный ориентир заблудившемуся охотнику. По полету птиц, как по компасу, выйдешь из леса.\n",
                    "questions": [
                        {
                            "text": "В какое время суток сорока летит в деревню?",
                            "correct": "утро",
                            "wrong": "вечер; ночь; ближе к обеду"
                        },
                        {
                            "text": "Что выступает ориентиром для заблудившихся охотников? ",
                            "correct": "полет птиц ",
                            "wrong": "лай собак; туман окрестностей; короткий ноябрьский день"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 49. Ветер ",
            "blocks": [
                {
                    "text": "В давние времена ветер был человеком. Но затем он превратился в птицу и стал летать. И с тех пор уже не мог ходить по земле, как было раньше.\nПоселился ветер-птица в пещере, в горах. Днем он вылетал из пещеры и охотился весь день, а вечером вновь возвращался в горы, в свою пещеру и проводил там ночь.\n",
                    "questions": [
                        {
                            "text": "В кого превратился ветер?",
                            "correct": "птица",
                            "wrong": "человек; лань; воздух"
                        },
                        {
                            "text": "Где поселился ветер-птица?",
                            "correct": "горная пещера",
                            "wrong": "горный лес; темное гнездо"
                        }
                    ]
                },
                {
                    "text": "Случилось однажды, что человек увидал ветер. Подумал он, что это птица, и бросил камень в птицу-ветер. Рассердился ветер, разгневался, стал он летать и дуть. Поднялась пыль, посыпались камни. Ни один человек не мог ни охотиться, ни собирать коренья. Все сидели в своих хижинах, ожидая. Когда утихнет гнев ветра.",
                    "questions": [
                        {
                            "text": "Что сделал человек, когда увидел птицу-ветер?",
                            "correct": "бросил камень ",
                            "wrong": "бросил клич; рассердился; поздоровался;"
                        },
                        {
                            "text": "Где прятались люди, ожидая, когда утихнет гнев ветра? ",
                            "correct": "хижины",
                            "wrong": "лес; пещеры; открытое поле"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 50. Случай на охоте",
            "blocks": [
                {
                    "text": "Со мной на охоте такой случай был. Нашли мои собаки в лесу зайца и погнались за ним. Я стою на дороге и жду. Гоняют собаки по лесу, а зайца все нет. Вышел я на поляну. На ней высокие пни стояли. Собаки носятся по кустам, а зайца все не найдут.",
                    "questions": [
                        {
                            "text": "Кого нашли собаки в лесу?",
                            "correct": "заяц",
                            "wrong": "утка; рябчик; фазан"
                        },
                        {
                            "text": "Куда в итоге вышел охотник?",
                            "correct": "поляна",
                            "wrong": "окраина; бархан; болото"
                        }
                    ]
                },
                {
                    "text": "Взглянул я случайно в сторону и замер. В пяти шагах от меня на верхушке пня сидел заяц. Глядит он на меня, не шевелится.\nСтыдно мне стало. Не бежит от меня зверек. Как же я буду стрелять в него? Опустил я ружье, пошел прочь и собак отозвал.\n",
                    "questions": [
                        {
                            "text": "Где прятался заяц от охотника с собаками?",
                            "correct": "верхушка пня",
                            "wrong": "верхушка холма; низина в кустах; лес"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 51. Лисья школа",
            "blocks": [
                {
                    "text": "В самой чаще леса поселилась лиса. У нее было пятеро лисят. Они жили в темной норе. Дети были слепые и без зубов. Мать кормила их своим молоком.\nОткрылись у малышей глаза. Мать стала выгонять их из норы. Бегают шалуны, играют. Катаются братья и сестры по траве. А мать сторожит их. Услышит шорох, гонит детей в нору.\n",
                    "questions": [
                        {
                            "text": "Сколько детенышей было у лисы?",
                            "correct": "пятеро ",
                            "wrong": "двое; несколько; парочка; четверо"
                        },
                        {
                            "text": "Что стала делать мать-лиса, когда у малышей открылись глаза?",
                            "correct": "выпускать лисят из норы",
                            "wrong": "катать их с горки; кормить их своим молоком"
                        }
                    ]
                },
                {
                    "text": "Подросли лисята. Мать учит их ловить добычу. Пустит живую мышку между лисятами, а они ловят. Учительница строго следит за учениками. Чуть зевака упустит мышку, лиса цап его зубами.",
                    "questions": [
                        {
                            "text": "Чему мать обучала лисят?",
                            "correct": "ловить добычу",
                            "wrong": "прятаться от хищников; выбирать место для зимовки"
                        }
                    ]
                },
                {
                    "text": "Потом мать научила лисят ловить бабочек, жучков. Маленькие охотники смело бросаются на все, что движется. Теперь они и сами ищут пищу. Помогла им лисья школа.\nПришла зима. Звери стали большие. Шерсть у них рыжая, пушистая. Теперь они учатся лисьим хитростям. Умеют лисята слышать охотника. Молодые животные учатся путать след и убегать от собак.\n",
                    "questions": [
                        {
                            "text": "Какими лисьими хитростями владеют зверята?",
                            "correct": "слышать охотника и путать следы",
                            "wrong": "обманывать медведя и ориентироваться в лесу; добывать воду и пугать охотника"
                        },
                        {
                            "text": "Какая шерсть у лисят?",
                            "correct": "рыжая и пушистая",
                            "wrong": "оранжевая и гладкая; красная и жесткая "
                        }
                    ]
                },
                {
                    "text": "Скоро лисята станут взрослыми лисами. Разбегутся они от матери в разные стороны. Станут сами ходить на охоту. По следу найдут лисы зайчика. Будет хищникам в добычу и мышка, и птичка.",
                    "questions": [
                        {
                            "text": "Кого взрослые лисы найдут по следу?",
                            "correct": "зайчик",
                            "wrong": "енот; рыба; крот"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 52. На дне снежного моря",
            "blocks": [
                {
                    "text": "Хуже нет для полевых и лесных зверьков, чем малоснежное начало зимы! Голая земля промерзает все глубже и глубже, становится твердой, как камень. Холодно стало в норках.",
                    "questions": [
                        {
                            "text": "Что ухудшает жизнь полевым и лесным зверькам?",
                            "correct": "малоснежная зима",
                            "wrong": "обильный снегопад; снежный буран "
                        }
                    ]
                },
                {
                    "text": "Но вот повалил снег. Валит и валит и уже больше не тает. Сухое снежное море покрывает землю. Рябчики, тетерева, даже глухари ныряют в него с головой. Мышки-полевки выходят из своих подземных жилищ, бегают по дну снежного моря. ",
                    "questions": [
                        {
                            "text": "Кто ныряет в снежное море с головой?",
                            "correct": "глухари, рябчики и тетерева",
                            "wrong": "кукушки, индюшки и фазан; селезень, филин и куница"
                        }
                    ]
                },
                {
                    "text": "Без устали ныряет в нем хищная ласка, невидимкой подкрадывается к мышкам и птицам под снегом.\nНа дне снежного моря куда теплее, чем на его поверхности. Сюда не попадает леденящий ветер. Толстый слой сухой воды не пропускает к земле большого мороза. Многие мыши строят себе зимние гнезда прямо на земле под снегом — вроде как выезжают зимой на дачу.\n",
                    "questions": [
                        {
                            "text": "Кто строит себе зимние гнезда прямо под снегом?",
                            "correct": "мыши",
                            "wrong": "птицы; крот; барсук"
                        },
                        {
                            "text": "Попадает ли леденящий ветер на дно снежного моря?",
                            "correct": "нет",
                            "wrong": "да "
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 53. Волк",
            "blocks": [
                {
                    "text": "Волк — не такой уж хищник, каким его принято считать. Во всяком случае, он вполне может обходиться лягушками, насекомыми, даже ягодами и дарами полей и огородов, а в полную бескормицу и вовсе переходит на древесные почки, мхи и лишайники.",
                    "questions": [
                        {
                            "text": "Может ли волк в своем питании обходиться без мяса?",
                            "correct": "да",
                            "wrong": "нет"
                        }
                    ]
                },
                {
                    "text": "Волки воют, чтобы собрать свою стаю вместе после охоты и сообщить другим стаям о своём месте нахождения. Их завывающие голоса могут быть слышны на расстоянии 12 км (7,5 миль).\nИногда волки воют просто ради забавы. Один волк поднимает голову, устремив нос в небо, и начинает выть. Затем один за другим присоединяется вся стая.\n",
                    "questions": [
                        {
                            "text": "Как стая волков сообщает другим стаям о своем местонахождении?",
                            "correct": "с помощью воя",
                            "wrong": "с помощью запаха; с помощью меток"
                        },
                        {
                            "text": "На каком расстоянии может быть слышен волчий вой?",
                            "correct": "12 км",
                            "wrong": "18 км; 25 миль; 14 км"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 54. Лисы",
            "blocks": [
                {
                    "text": "Арктическая лисица меняет свой цвет в зависимости от времени года. Летом ее шкура коричневая, чтобы не выделяться на фоне голой, коричневой земли. Зимой она превращается в белую, чтобы сливаться со снегом.",
                    "questions": [
                        {
                            "text": "Какая лиса меняет свой цвет в зависимости от времени года?",
                            "correct": "арктическая лисица",
                            "wrong": "королевская лисица; канадская лисица; английская лисица"
                        },
                        {
                            "text": "Какого цвета шкура этой лисицы летом?",
                            "correct": "коричневая",
                            "wrong": "рыжая; оранжевая "
                        }
                    ]
                },
                {
                    "text": "Красная лисица обладает очень хорошим слухом, чтобы охотиться ночью. Ее слух такой острый, что она может различить шевеление червей в траве. Тогда она их и ловит.",
                    "questions": [
                        {
                            "text": "Какой способностью обладает красная лисица?",
                            "correct": "острый слух",
                            "wrong": "бесшумный шаг; громкий лай; быстрая скорость"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 55. Гиены",
            "blocks": [
                {
                    "text": "Гиены используют отличное чувство обоняния, когда охотятся в темноте. У гиен в носу чувствительных клеток почти в 50 раз больше, чем у нас. Это помогает гиене ощутить запах животного, прошедшего по дороге несколько часов назад.",
                    "questions": [
                        {
                            "text": "Какой способностью обладает гиена? ",
                            "correct": "отличное обоняние",
                            "wrong": "острый слух; тактильное восприятие"
                        }
                    ]
                },
                {
                    "text": "Гиены иногда издают хором громкие звуки, похожие на смех. Но люди — единственные существа, кто действительно может смеяться.",
                    "questions": [
                        {
                            "text": "На что похожи звуки, которые издают гиены?",
                            "correct": "смех",
                            "wrong": "истерика; плач"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 56. Самая ядовитая змея",
            "blocks": [
                {
                    "text": "Наиболее смертоносным считается яд королевской кобры. Известны случаи, когда люди умирали от укусов этой змеи в течение часа. Не менее страшная змея-убийца живёт в Индии — это крайт, от укусов которого умирают 77% людей, подвергшихся его нападениям. Из более чем 2 тысяч видов змей ядовитыми являются около 600, однако укус только четверти из них смертелен для человека. Единственной ядовитой змеёй, обитающей в Европе, является гадюка.",
                    "questions": [
                        {
                            "text": "Где живет страшная змея-убийца – крайт?",
                            "correct": "Индия",
                            "wrong": "Нигерия; Иран; Америка"
                        },
                        {
                            "text": "Как называется единственная ядовитая змея, обитающая в Европе?",
                            "correct": "гадюка",
                            "wrong": "гремучая змея; пустынный тайпан; черная мамба; морская змея"
                        },
                        {
                            "text": "Яд какой змеи считается наиболее смертоносным? ",
                            "correct": "королевская кобра",
                            "wrong": "кассава; мурена; анаконда"
                        }
                    ]
                },
                {
                    "text": "Ядовитую змею нельзя сделать неядовитой, удалив, например, её жалящие зубы, — взамен них вырастают новые.\nСамая ядовитая гадюка водится в Индии и имеет в длину до 1,5 м. Гадюка средних размеров, кусая жертву, может ввести в её тело до половины чайной ложки яда.\n",
                    "questions": [
                        {
                            "text": "Можно ли сделать ядовитую змею – неядовитой?",
                            "correct": "нет",
                            "wrong": "да"
                        },
                        {
                            "text": "Сколько примерно метров в длину самая ядовитая гадюка в Индии?",
                            "correct": "1,5",
                            "wrong": "3,5; 8"
                        }
                    ]
                },
                {
                    "text": "Существует пятьдесят типов морских змей, и почти все они ядовиты, при этом большая часть из них может испускать на жертву вещество, гораздо более токсичное, чем яд «сухопутных» змей. Самая распространённая и ядовитая разновидность морских змей — это Engydrina schistosa, которая обитает в водах между Персидским заливом, Вьетнамом и Северной Австралией. В среднем она выпускает 8,5 мг яда (при смертельной дозе для человека — 1,5-3,5 мг).",
                    "questions": [
                        {
                            "text": "Что может испускать большая часть морских змей?",
                            "correct": "токсическое вещество",
                            "wrong": "чернила; защитная жидкость; парализующий раствор"
                        }
                    ]
                },
                {
                    "text": "Все морские змеи ядовиты. Однако капли из жала морской змеи достаточно, чтобы убить пять человек. Рыбаки гибнут каждый год, укушенные змеями, попавшими в сети.\nОсновная пища крупнейших из ядовитых змей — королевской кобры — это… другие змеи, в том числе и её сородичи. Уничтожая большое количество ядовитых змей, королевская кобра во многих местах своего ареала снискала себе добрую славу.\n",
                    "questions": [
                        {
                            "text": "Кто гибнет почти каждый год от укуса морской змеи?",
                            "correct": "рыбаки",
                            "wrong": "птицы; морские котики"
                        },
                        {
                            "text": "Что является основной пищей королевской кобры?",
                            "correct": "другие змеи",
                            "wrong": "человек; насекомые; черепахи; игуаны "
                        }
                    ]
                },
                {
                    "text": "Мангусты известны тем, что уничтожают змей. Каждый раз, когда змея нападает, мангуст увёртывается от её удара. Он движется так быстро, что скоро это утомляет змею. Тогда мангуст хватает её и убивает.\nЗмеи определяют вкус и даже запах добычи… языком. Некоторые гремучие змеи используют язык для предупреждения, угрожающе размахивая им перед противником.\n",
                    "questions": [
                        {
                            "text": "Как называется зверек, который уничтожает змей?",
                            "correct": "мангуст",
                            "wrong": "барсук; опоссум; дикобраз "
                        },
                        {
                            "text": "С помощью чего большинство змей определяют вкус и даже запах добычи?",
                            "correct": "язык",
                            "wrong": "обоняние; глаза; хвост"
                        }
                    ]
                },
                {
                    "text": "Змеи не имеют слуха, зато очень чувствительны к самым разнообразным вибрациям, по которым узнают своих недругов и жертвы.\nПервые змеи жили около 80 миллионов лет назад. Они были потомками вымерших ящериц. Самая длинная доисторическая змея — огромный питон, одиннадцати метров (36 футов) длиной. Потомки этой змеи живы до сих пор.\n",
                    "questions": [
                        {
                            "text": "К чему очень чувствительно большинство змей?",
                            "correct": "разнообразные вибрации",
                            "wrong": "температура; порывы ветра; громкость звука"
                        },
                        {
                            "text": "Чьими потомками являются змеи?",
                            "correct": "ящерицы",
                            "wrong": "осьминоги; питоны; лягушки"
                        }
                    ]
                },
                {
                    "text": "Первое место по величине среди змей занимают королевские питоны, чья длина достигает 10 м. До 7-метровой длины вырастают анаконды, живущие в тропиках Южной Америки. Однако даже самый большой королевский питон едва ли не на полсотни кг легче анаконды «средней упитанности», чей вес может достигать 160 кг.",
                    "questions": [
                        {
                            "text": "Какой длины достигает королевский питон?",
                            "correct": "10 м",
                            "wrong": "300 м; 45 см; 18 м"
                        },
                        {
                            "text": "В каких тропиках живут анаконды? ",
                            "correct": "Южная Америка",
                            "wrong": "Южная Африка; Австралия; Южная Гвинея "
                        },
                        {
                            "text": "Кто легче: королевский питон или тропическая анаконда?",
                            "correct": "королевский питон",
                            "wrong": "тропическая анаконда"
                        }
                    ]
                },
                {
                    "text": "Некоторые животные ведут себя странно перед землетрясением. В 1975 году в Китае находящиеся в спячке змеи неожиданно покинули свои норы. Тысячи людей были спасены благодаря предупреждениям змей.",
                    "questions": [
                        {
                            "text": "Что сделали змеи в 1975 г. в Китае перед землетрясением?",
                            "correct": "покинули свои норы",
                            "wrong": "впали в спячку; закопались в норы; собрались в одну группу"
                        },
                        {
                            "text": "В каком году в Китае змеи покинули свои норы и тем самым предупредили людей? ",
                            "correct": "1975",
                            "wrong": "678; 1989; 2000"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 57. Цикады и скорпионы",
            "blocks": [
                {
                    "text": "Одна из разновидностей цикад живёт 17 лет, и это, по всей вероятности, является рекордом долгожительства среди насекомых. Правда, все 17 лет эта цикада находится под землёй в виде куколки, после чего появляется на свет божий, живёт 5 недель и умирает.",
                    "questions": [
                        {
                            "text": "Как называется насекомое, одна из разновидностей которых живет 17 лет?",
                            "correct": "цикада",
                            "wrong": "стрекоза; сверчок; кузнечик"
                        },
                        {
                            "text": "Сколько живет цикада после рождения из куколки?",
                            "correct": "5 недель",
                            "wrong": "5 лет; 9 недель; 2 дня"
                        }
                    ]
                },
                {
                    "text": "По мнению учёных, «поющий» орган цикады является самым сложным из всех подобных устройств, когда-либо созданных природой.\nУкус скорпиона дюранго, обитающего в Мексике, убивает человека всего за час. За последние 35 лет от укусов дюранго умерло около 1600 человек.\n",
                    "questions": [
                        {
                            "text": "Что по мнению ученых является самым сложным устройством у цикад?",
                            "correct": "«поющий» орган",
                            "wrong": "крылья; орган зрения"
                        },
                        {
                            "text": "Где обитает скорпион дюранго?",
                            "correct": "Мексика",
                            "wrong": "Мадагаскар; Марокко; Африка"
                        }
                    ]
                },
                {
                    "text": "В пауках, скорпионах, осьминогах, крабах и речных раках течёт… голубая кровь, что обусловлено содержанием в ней гемоциана – вещества, основу которого составляет медь.",
                    "questions": [
                        {
                            "text": "Какого цвета кровь у пауков, скорпионов, осьминогов, крабов и речных раков?",
                            "correct": "голубая",
                            "wrong": "красная; белесая; белая"
                        },
                        {
                            "text": "Что составляет основу вещества гемоциана, который содержится в голубой крови?",
                            "correct": "медь",
                            "wrong": "цинк; железо; ртуть"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 58. Колючки дикобраза",
            "blocks": [
                {
                    "text": "Пока детёнышам тапира не исполнилось восемь месяцев, их шкура покрыта пятнами и полосками. Такая окраска скрывает малышей среди света и тени их родных влажных тропических лесов.",
                    "questions": [
                        {
                            "text": "До какого возраста шкура детенышей тапира покрыта пятнами и полосками?",
                            "correct": "8 месяцев",
                            "wrong": "два года; 3 месяца; один год"
                        },
                        {
                            "text": "Где обитают тапиры?",
                            "correct": "тропические леса",
                            "wrong": "хвойные леса; полевые равнины; холмистая местность"
                        }
                    ]
                },
                {
                    "text": "Во время атаки дикобраз встает спиной к врагу и укалывает его колючками. Потом он отходит, часто оставляя за собой колючки. Канадский дикобраз имеет свыше 30 000 острых, как иглы, колючек, каждая до 12 см (5 дюймов) длиной. Они могут вызывать сильные повреждения.",
                    "questions": [
                        {
                            "text": "Что делает дикобраз во время атаки?",
                            "correct": "встает спиной и укалывает ",
                            "wrong": "бежит на пролом и колит; сворачивается в клубок"
                        },
                        {
                            "text": "Сколько в длину иглы канадского дикобраза?",
                            "correct": "12 см",
                            "wrong": "3 м; 25 см; 1 м"
                        }
                    ]
                },
                {
                    "text": "В случае опасности ехидны зарываются в землю, и недруг видит перед собой лишь острые иголки этого животного. Чтобы полностью закрыться, ехидне достаточно нескольких минут.",
                    "questions": [
                        {
                            "text": "Что делают ехидны в случае угрожающей им опасности?",
                            "correct": "зарываются в землю",
                            "wrong": "встают на дыбы; громко рычат; спасаются бегством"
                        },
                        {
                            "text": "Сколько примерно времени нужно ехидне, чтобы полностью закрыться от врага?",
                            "correct": "несколько минут",
                            "wrong": "несколько часов; более пяти минут; около часа"
                        }
                    ]
                },
                {
                    "text": "Ежи редко путешествуют на расстояние больше одного километра от своих домов. В 1979 году в СССР еж прошел 77 км, чтобы вернуться к своему «доктору», лечившему его. Это удивительное путешествие заняло около двух месяцев.",
                    "questions": [
                        {
                            "text": "В каком году еж прошел 77 км.  в СССР?",
                            "correct": "1979",
                            "wrong": "1809; 1998; 1879"
                        },
                        {
                            "text": "Сколько времени заняло путешествие ежа к своему «доктору»?",
                            "correct": "около двух месяцев",
                            "wrong": "пять недель; восемь месяцев; девять дней"
                        }
                    ]
                }
            ]
        },
        {
            "text": "Текст 59. Солнечная птица",
            "blocks": [
                {
                    "text": "Солнечная птица, живущая в лесах тропической Америки, названа так из-за имеющихся на её крыльях жёлтых пятен, напоминающих солнечный диск.\nКоличество ворон в стае, которая может собираться зимою на ночлег где-нибудь на лесной поляне, может достигать 200-300 тысяч.\n",
                    "questions": [
                        {
                            "text": "Где живет солнечная птица?",
                            "correct": "Тропические леса Америки",
                            "wrong": "Тропические леса Азии; Африканские джунгли; Тропические леса Аргентины"
                        },
                        {
                            "text": "Что напоминают желтые пятна на крыльях солнечной птицы?",
                            "correct": "солнечный диск",
                            "wrong": "сочный апельсин; желтую луну; солнечный луч"
                        }
                    ]
                },
                {
                    "text": "Птица пересмешник, обитающая от Канады до Аргентины, является, пожалуй, одним из самых «талантливых» звукоподражателей. Так, известен случай, когда в течение десяти минут пересмешник воспроизвёл трели 32 разных птиц.\nПтица-секретарь (отряд соколообразных), обитающая в саваннах Африки, называется так из-за того, что имеет на голове несколько направленных назад перьев, напоминающих гусиное перо за ухом писца.\n",
                    "questions": [
                        {
                            "text": "В чем талантлива птица пересмешник?",
                            "correct": "звукоподражание",
                            "wrong": "высмеивание; шутовство"
                        },
                        {
                            "text": "Где обитает птица секретарь?",
                            "correct": "саванны Африки ",
                            "wrong": "равнины Америки; пустыни Аравии; леса Австралии"
                        }
                    ]
                },
                {
                    "text": "Дятел, помимо своих достоинств, отличается ещё и языком. Он у него очень длинный, почти такой же длины, как и его обладатель, а ещё очень липкий. Дятлу остаётся только запускать своё «орудие» в трещину или проход и нащупать добычу, а та сама приклеивается.",
                    "questions": [
                        {
                            "text": "Чем еще отличается дятел, помимо всех своих достоинств?",
                            "correct": "язык",
                            "wrong": "клюв; крылья; окрас перьев"
                        },
                        {
                            "text": "Помимо длины, каким еще важным свойством обладает язык дятла?",
                            "correct": "липкий",
                            "wrong": "красный; твердый; быстрый"
                        }
                    ]
                },
                {
                    "text": "Птица фрегат не умеет плавать, но может летать быстрее любой другой морской птицы. С длинными крыльями, раздвоенным хвостом, удивительная птица фрегат может развить скорость более 150 км/час.\nФрегаты часто крадут пищу у других птиц прямо в небе. Иногда они добывают пищу сами, хватая летающую рыбу, выныривающую из волны, или ловя моллюска или медузу на гребне волны.\n",
                    "questions": [
                        {
                            "text": "Какую максимальную скорость может развить птица фрегат?",
                            "correct": "более 150 км/ч. ",
                            "wrong": "более 200 км/ч; 20 км/ч; 11 км/ч"
                        },
                        {
                            "text": "Что часто крадут фрегаты у других птиц?",
                            "correct": "пища",
                            "wrong": "птенцы; перья"
                        }
                    ]
                }
            ]
        }
    ];
})(TickerData || (TickerData = {}));


/***/ })

});
//# sourceMappingURL=11.bundle.js.map