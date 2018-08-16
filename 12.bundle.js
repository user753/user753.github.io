webpackJsonpNewGames([12],{

/***/ 142:
/*!***********************************!*\
  !*** ./src/games/penalty/meta.ts ***!
  \***********************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets__ = __webpack_require__(/*! ./assets */ 190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(/*! ./levels */ 283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic__ = __webpack_require__(/*! ./logic */ 284);




var gameId = "penalty";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_2__levels__["a" /* levels */],
    levelsSeqCounts: __WEBPACK_IMPORTED_MODULE_2__levels__["b" /* levelsArray */].map(function (x, i) { return ({
        seqCount: (x.colorCount + x.valueCount) * 2,
        maxLevel: i + 1
    }); })
};
var metaData = {
    gameId: gameId,
    title: "Penalty",
    logic: __WEBPACK_IMPORTED_MODULE_3__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_0__assets__["b" /* Images */].data,
    sounds: __WEBPACK_IMPORTED_MODULE_0__assets__["c" /* Sounds */].keys,
    atlasCount: 3,
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

/***/ 160:
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

/***/ 190:
/*!*************************************!*\
  !*** ./src/games/penalty/assets.ts ***!
  \*************************************/
/*! exports provided: Sounds, Translations, Fonts, Images */
/*! exports used: Fonts, Images, Sounds, Translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Sounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Translations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var Sounds;
(function (Sounds) {
    Sounds.ball_down = "ball_down";
    Sounds.ball_up = "ball_up";
    Sounds.bg = "bg";
    Sounds.red_card = "red_card";
    Sounds.cup = "cup";
    Sounds.photo = "photo";
    // export const intro = "intro"
    Sounds.keys = [
        Sounds.ball_down,
        Sounds.ball_up,
        Sounds.photo,
        // intro,
        Sounds.bg,
        Sounds.red_card,
        Sounds.cup,
    ];
})(Sounds || (Sounds = {}));
var Translations;
(function (Translations) {
    Translations.tutor1 = "tutor1";
    Translations.tutor2 = "tutor2";
})(Translations || (Translations = {}));
var Fonts;
(function (Fonts) {
    Fonts.item = {
        fontSize: 100, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black, align: "center"
    };
    Fonts.ball = {
        fontSize: 170, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black, align: "center"
    };
    Fonts.scores = {
        fontSize: 40, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].white, align: "center"
    };
})(Fonts || (Fonts = {}));
var Images;
(function (Images) {
    Images.bg = function (id) { return "bg_" + id; };
    Images.vorota = "vorota";
    Images.hit = "hit";
    Images.ball_shadow = "ball_shadow";
    Images.red_card = "red_card";
    Images.cup = "cup";
    Images.target = function (id) { return "target_" + id; };
    Images.photo = function (id) { return "photo_game_" + id; };
    Images.photoList = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](3).map(Images.photo);
    Images.ball = function (id) { return "ball_" + id; };
    Images.number = function (id) { return "number_" + id; };
    Images.data = {
        sprites: []
    };
})(Images || (Images = {}));


/***/ }),

/***/ 279:
/*!*******************************************************!*\
  !*** ./src/games/penalty/components/mainComponent.ts ***!
  \*******************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_utils_randomGenerator__ = __webpack_require__(/*! core/utils/randomGenerator */ 64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__ = __webpack_require__(/*! games/penalty/assets */ 190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_games_penalty_components_ballComponent__ = __webpack_require__(/*! games/penalty/components/ballComponent */ 280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_games_penalty_components_introComponent__ = __webpack_require__(/*! games/penalty/components/introComponent */ 281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_games_penalty_components_targetComponent__ = __webpack_require__(/*! games/penalty/components/targetComponent */ 282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_lodash__);





















var durations = {
    ball: 300,
    photo: 100,
    createBall: 500,
    yoyoDelay: 500,
    sideObjectDelay: 200,
    introHideDelay: 300,
    flash: 200,
    flashDelay: 100,
    ballOut: 300,
};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__["a" /* Sizes */].create({
            goal: { x: 478, y: 291 },
            targets: { x: __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 630 },
            photo: { y: 450 },
            offset: 280,
            scoreCorrect: { x: __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2 - 35, y: 160 },
            scoreWrong: { x: __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2 + 35, y: 160 },
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__["a" /* Sizes */].bi({
            margin: { x: 260, y: 50 },
            // ballStart: {x: 1180, y: 700},
            ballStart: { x: 1300, y: 700 },
            ballEnd1: { x: 680, y: 700 },
            ballEnd2: { x: 280, y: 700 },
        }, {
            margin: { x: 100, y: 50 },
            // ballStart: {x: 630, y: 750},
            ballStart: { x: 800, y: 750 },
            ballEnd1: { x: 430, y: 750 },
            ballEnd2: { x: 200, y: 750 },
        });
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["b" /* Images */].bg(0));
        _this.bg2 = _this.addImage(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["b" /* Images */].bg(2));
        _this.scoreCorrect = _this.add(new __WEBPACK_IMPORTED_MODULE_12_core_ui_controls_txt__["a" /* Txt */]("0", __WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["a" /* Fonts */].scores)).setPos(_this.positions.scoreCorrect).anchorCenterX();
        _this.scoreWrong = _this.add(new __WEBPACK_IMPORTED_MODULE_12_core_ui_controls_txt__["a" /* Txt */]("0", __WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["a" /* Fonts */].scores)).setPos(_this.positions.scoreWrong).anchorCenterX();
        _this.photos = __WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["b" /* Images */].photoList.map(function (x) { return _this.addImage(x)
            .setPos(_this.positions.photo)
            .fluentUpdate(function (x) { return x.alpha = 0; }); });
        _this.vorota = _this.addImage(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["b" /* Images */].vorota).setPos(_this.positions.goal);
        _this.targets = _this.add(new __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_control__["a" /* Control */]()).anchorCenter().setPos(_this.positions.targets);
        _this.redCard = _this.addImage(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["b" /* Images */].red_card).anchorCenterY().fluentUpdate(function (x) { return x.visible = false; });
        _this.cup = _this.addImage(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["b" /* Images */].cup).anchorCenterY().fluentUpdate(function (x) { return x.visible = false; });
        _this.hit = _this.targets.add(_this.makeImage(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["b" /* Images */].hit)).anchorCenter().fluentUpdate(function (x) {
            x.alpha = 0;
            x.visible = false;
        });
        _this.rng = new __WEBPACK_IMPORTED_MODULE_15_core_utils_randomGenerator__["a" /* RandomGenerator */]();
        return _this;
    }
    MainComponent.prototype.createBall = function (task) {
        var _this = this;
        this.ball = this.targets.add(this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_17_games_penalty_components_ballComponent__["a" /* BallComponent */], task))
            .setPos(this.current(this.biPositions.ballStart));
        var end = task.target.partType == "number"
            ? this.biPositions.ballEnd1
            : this.biPositions.ballEnd2;
        __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.ball,
            to: { x: this.current(end).x, ballAngle: -359 },
            noAutoReset: true,
            duration: durations.createBall,
            onComplete: function () {
                _this.ball.setBiPos(end);
            }
        });
    };
    MainComponent.prototype.onInit = function () {
        var _this = this;
        this.introOptions.disableSound = true;
        this.onBiValueChange({}, function () {
            _this.cup.setPos({ x: __WEBPACK_IMPORTED_MODULE_13_core_ui_services_instances__["e" /* screenSizeService */].screenRigth, y: __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__["a" /* Sizes */].h2 });
            _this.redCard.setPos({ x: __WEBPACK_IMPORTED_MODULE_13_core_ui_services_instances__["e" /* screenSizeService */].screenLeft - _this.redCard.width, y: __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__["a" /* Sizes */].h2 });
        });
        if (this.isTutorial) {
            this.tutorial = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_9_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */]).make({ panel: { alpha: 0.6 } }));
            this.tutorial.setProps(this.translate(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["d" /* Translations */].tutor1));
        }
        this.startIntro();
    };
    MainComponent.prototype.introAnimation = function () {
        var _this = this;
        var intro = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_18_games_penalty_components_introComponent__["a" /* IntroComponent */]));
        var tween = intro.playTween();
        return {
            start: function () {
                _this.playSound("bg", true);
                tween.start();
            },
            onComplete: __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_signals__["a" /* Signals */].bind(tween.onComplete, function () {
                return __WEBPACK_IMPORTED_MODULE_11_core_ui_controls_controlUtl__["a" /* ControlUtl */].hideAndDestroy(intro);
            })
        };
        // return {
        //   start: () => {
        //   },
        //   onComplete: Signals.memorize()
        // }
    };
    MainComponent.prototype.animationBall = function (btn, isError) {
        var _this = this;
        var ball = this.ball;
        var _a = __WEBPACK_IMPORTED_MODULE_6_core_ui_common_positions__["b" /* PosUtl */].add(btn.xy(), { x: btn.btn.width / 2, y: btn.btn.height / 2 }), btnX = _a.x, btnY = _a.y;
        var x1 = (ball.x - btnX) / (3 + this.rng.float());
        var y1 = (ball.y - btnY) / (3 + this.rng.float());
        ball.targetY = btnY;
        __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: ball,
            to: { x: [btnX - x1, btnX], ballY: [btnY + y1, btnY], symmetricScale: 0.65 },
            easing: Phaser.Easing.Sinusoidal.Out,
            noAutoReset: true,
            interpolation: Phaser.Math.bezierInterpolation,
            duration: durations.ball,
            onComplete: function () {
                _this.playSound(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["c" /* Sounds */].ball_down);
                _this.hit.updatePos(btnX, btnY);
                _this.hit.alpha = 1;
                _this.hit.img.tint = isError ? __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["a" /* CoreColorNumbers */].wrong : __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["a" /* CoreColorNumbers */].correct;
                __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].show(_this.hit, false);
                __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_tweens__["a" /* Tweens */].start({
                    target: ball,
                    to: {
                        x: x1 > 0 ? -_this.targets.x : _this.targets.width + _this.targets.x,
                        ballY: btnY - (_this.targets.height - btnY), symmetricScale: 1
                    },
                    easing: Phaser.Easing.Sinusoidal.Out,
                    duration: durations.ballOut,
                    onComplete: function () {
                        ball.destroy(true);
                    }
                });
            }
        });
    };
    MainComponent.prototype.showRedCard = function () {
        var _this = this;
        this.redCard.visible = true;
        this.playSound(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["c" /* Sounds */].red_card);
        __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].yoyo(this.redCard, { x: this.redCard.x + this.redCard.width }, {
            simpleYoyoDelay: durations.yoyoDelay,
        }).onComplete.addOnce(function () { return _this.redCard.visible = false; });
    };
    MainComponent.prototype.showCup = function () {
        var _this = this;
        this.playSound(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["c" /* Sounds */].cup);
        this.cup.visible = true;
        __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].yoyo(this.cup, { x: this.cup.x - this.cup.width }, {
            simpleYoyoDelay: durations.yoyoDelay
        }).onComplete.addOnce(function () { return _this.cup.visible = false; });
    };
    MainComponent.prototype.showPhoto = function () {
        var _this = this;
        this.playSound(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["c" /* Sounds */].photo);
        this.rng.shuffle(this.photos).forEach(function (x, i) {
            _this.delay(durations.flashDelay * i).addOnce(function () {
                __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].flash(x, { duration: durations.flash });
            });
        });
    };
    MainComponent.prototype.onAnswer = function (answer) {
        var _this = this;
        this.playSound(__WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["c" /* Sounds */].ball_up);
        var prevTarget = answer.levelTask.task.target;
        var isError = answer.status == __WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].Error;
        if (isError) {
            this.items[prevTarget.index].setBtnItemPartVisible(prevTarget.partType, true);
            this.delay(durations.sideObjectDelay).addOnce(function () { return _this.showRedCard(); });
        }
        else {
            this.showPhoto();
        }
        var item = this.items[answer.answerId];
        item.setBtnItemPartVisible(prevTarget.partType, answer.status != __WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].Correct);
        this.animationBall(item, isError);
        this.updateScores();
    };
    MainComponent.prototype.updateScores = function () {
        var state = this.context.gameService.gameCycleService.state;
        this.scoreCorrect.text = (state.correctCount % 100).toString();
        this.scoreWrong.text = state.errorCount.toString();
        this.scoreCorrect.updatePivot();
        this.scoreWrong.updatePivot();
    };
    MainComponent.prototype.onNewTask = function (task) {
        var _this = this;
        if (this.isFirstTask) {
            this.items = task.items.map(function (item, index) {
                return _this.add(_this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_19_games_penalty_components_targetComponent__["a" /* TargetComponent */], { item: item, index: index }));
            });
            var shuffleItems_1 = this.isTutorial ? this.items : this.rng.shuffle(this.items);
            this.targets.addChildren(this.items);
            this.targets.onBiValueChange(this.biPositions.margin, function (x, v) {
                _this.hit.visible = false;
                __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__["a" /* Sizes */].tableFromList(shuffleItems_1, 3, v);
                if (_this.ball) {
                    _this.ball.visible = false;
                }
                _this.targets.updatePivot();
                if (_this.ball) {
                    _this.ball.visible = true;
                }
                _this.hit.visible = true;
            });
            this.targets.bringToTop(this.hit);
            this.hit.visible = true;
        }
        else {
            if (this.isNewLevel) {
                this.showCup();
            }
            if (this.tutorial) {
                this.tutorial.setProps(this.translate(__WEBPACK_IMPORTED_MODULE_14_core_utils_numbers__["a" /* Numbers */].odd(this.taskIndex)
                    ? __WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["d" /* Translations */].tutor2 : __WEBPACK_IMPORTED_MODULE_16_games_penalty_assets__["d" /* Translations */].tutor1));
            }
        }
        this.items.forEach(function (btn, i) {
            btn.visible = __WEBPACK_IMPORTED_MODULE_20_lodash__["includes"](task.allVisible, i);
            var visibleColor = __WEBPACK_IMPORTED_MODULE_20_lodash__["includes"](task.visibleColors, i);
            var visibleValue = __WEBPACK_IMPORTED_MODULE_20_lodash__["includes"](task.visibleValues, i);
            btn.updateParts(visibleColor, visibleValue);
        });
        this.answersAreReady();
        this.createBall(task);
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_8_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 280:
/*!*******************************************************!*\
  !*** ./src/games/penalty/components/ballComponent.ts ***!
  \*******************************************************/
/*! exports provided: BallComponent */
/*! exports used: BallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_behaviors_textOnCenterBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/textOnCenterBehavior */ 160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_penalty_assets__ = __webpack_require__(/*! games/penalty/assets */ 190);






var BallComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](BallComponent, _super);
    function BallComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
            shadow: { y: 110 },
            offset: 500
        });
        return _this;
    }
    BallComponent.prototype.onPropsUpdate = function () {
        this.shadow = this.addImage(__WEBPACK_IMPORTED_MODULE_5_games_penalty_assets__["b" /* Images */].ball_shadow).anchorCenter().setPos(this.positions.shadow);
        var task = this.props;
        var targetItem = task.items[task.target.index];
        var targetId = task.target.partType == "number" ? 0 : targetItem.color;
        var text = new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_behaviors_textOnCenterBehavior__["a" /* TextOnCenterBehavior */](__WEBPACK_IMPORTED_MODULE_5_games_penalty_assets__["a" /* Fonts */].ball);
        this.ball = this.addImage(__WEBPACK_IMPORTED_MODULE_5_games_penalty_assets__["b" /* Images */].ball(targetId)).anchorCenter().addBehavior(text);
        text.setText(task.target.partType == "number" ? targetItem.value.toString() : " ");
    };
    Object.defineProperty(BallComponent.prototype, "ballX", {
        get: function () {
            return this.x;
        },
        set: function (v) {
            this.x = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BallComponent.prototype, "ballY", {
        get: function () {
            return this.y;
        },
        set: function (v) {
            if (__WEBPACK_IMPORTED_MODULE_4_core_utils_undef__["a" /* Undef */].is(this.initY)) {
                this.initY = this.y;
            }
            this.y = v;
            var coef = (1 - (v - this.targetY) / (this.initY - this.targetY));
            this.shadow.y = this.positions.shadow.y + ((this.positions.offset - this.targetY) / this.symmetricScale) * coef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BallComponent.prototype, "ballAngle", {
        get: function () {
            return this.ball.angle;
        },
        set: function (v) {
            this.ball.angle = v;
        },
        enumerable: true,
        configurable: true
    });
    return BallComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 281:
/*!********************************************************!*\
  !*** ./src/games/penalty/components/introComponent.ts ***!
  \********************************************************/
/*! exports provided: IntroComponent */
/*! exports used: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);






var durations = {
    ball: 1000,
    flashDelay: 200,
    flash: 200
};
var IntroComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](IntroComponent, _super);
    function IntroComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            photo: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 660 },
            comand: { x: 350, y: 690 },
            player: { x: 900, y: 700 },
            ball: { x: 980, y: 930 },
        });
        _this.bg = _this.addImage("bg_0");
        _this.bg1 = _this.addImage("intro_bg_1");
        _this.photos = __WEBPACK_IMPORTED_MODULE_5_lodash__["range"](3).map(function (x) { return _this.addImage("intro_photo_" + x)
            .anchorCenter()
            .setPos(_this.positions.photo)
            .fluentUpdate(function (x) { return x.alpha = 0; }); });
        _this.comand = _this.addImage("intro_comand").setPos(_this.positions.comand);
        _this.player = _this.addImage("intro_player_1").setPos(_this.positions.player);
        _this.ball = _this.addImage("intro_ball").anchorCenter().updatePos(0, _this.positions.ball.y);
        return _this;
    }
    IntroComponent.prototype.showPhoto = function () {
        var _this = this;
        this.photos.concat(this.photos).forEach(function (x, i) {
            _this.delay(durations.flashDelay * i).addOnce(function () {
                __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].flash(x, { duration: durations.flash });
            });
        });
    };
    IntroComponent.prototype.onInit = function () {
    };
    IntroComponent.prototype.playTween = function () {
        var _this = this;
        this.showPhoto();
        return __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.ball,
            to: __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.positions.ball, { angle: 360 * 5 }),
            duration: durations.ball,
            onComplete: function () {
                _this.player.key = _this.gameKey("intro_player_0");
            }
        });
    };
    return IntroComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 282:
/*!*********************************************************!*\
  !*** ./src/games/penalty/components/targetComponent.ts ***!
  \*********************************************************/
/*! exports provided: TargetComponent */
/*! exports used: TargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TargetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_penalty_assets__ = __webpack_require__(/*! games/penalty/assets */ 190);





var TargetComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TargetComponent, _super);
    function TargetComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetComponent.prototype.onPropsUpdate = function () {
        if (!this.btn) {
            this.btn = this.addAnswerBehavior(this.add(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__["c" /* ImageBtn */]((this.props.item.value).toString(), this.gameKey(__WEBPACK_IMPORTED_MODULE_4_games_penalty_assets__["b" /* Images */].target(this.props.item.color)), function () {
            }, __WEBPACK_IMPORTED_MODULE_4_games_penalty_assets__["a" /* Fonts */].item)), this.props.index, {});
        }
    };
    TargetComponent.prototype.setBtnItemPartVisible = function (targetType, visible) {
        var item = this.props.item;
        if (targetType == "number") {
            this.btn.textControl.visible = this.visibleValue && visible;
        }
        else {
            var isWhite = !(visible && this.visibleColor);
            this.btn.key = this.gameKey(__WEBPACK_IMPORTED_MODULE_4_games_penalty_assets__["b" /* Images */].target(isWhite ? 0 : item.color));
            this.btn.textControl.fill = isWhite ? __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["b" /* CoreColors */].black : __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["b" /* CoreColors */].white;
        }
        if (this.btn.key == this.gameKey(__WEBPACK_IMPORTED_MODULE_4_games_penalty_assets__["b" /* Images */].target(0)) ||
            this.btn.key == this.gameKey(__WEBPACK_IMPORTED_MODULE_4_games_penalty_assets__["b" /* Images */].target(100))) {
            this.btn.key = this.gameKey(__WEBPACK_IMPORTED_MODULE_4_games_penalty_assets__["b" /* Images */].target(this.btn.textControl.visible ? 0 : 100));
        }
    };
    TargetComponent.prototype.updateParts = function (color, value) {
        if (color != this.visibleColor) {
            this.visibleColor = color;
            this.setBtnItemPartVisible("color", color);
        }
        if (value != this.visibleValue) {
            this.visibleValue = value;
            this.setBtnItemPartVisible("number", value);
        }
    };
    return TargetComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 283:
/*!*************************************!*\
  !*** ./src/games/penalty/levels.ts ***!
  \*************************************/
/*! exports provided: levelsArray, levels */
/*! exports used: levels, levelsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return levelsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



var all = ["color", "number"];
function level(colorCount, valueCount, newColor, partTypes) {
    return { colorCount: colorCount, valueCount: valueCount, newColor: newColor, partTypes: partTypes };
}
var levelsArray = __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](17).map(function (x) {
    var isOdd = __WEBPACK_IMPORTED_MODULE_1_core_utils_numbers__["a" /* Numbers */].odd(x);
    var count = __WEBPACK_IMPORTED_MODULE_1_core_utils_numbers__["a" /* Numbers */].count(x, 2);
    return level(count + 1 + (isOdd ? 0 : 1), count + 1, !isOdd, all);
});
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])(levelsArray);


/***/ }),

/***/ 284:
/*!************************************!*\
  !*** ./src/games/penalty/logic.ts ***!
  \************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_logic_sys__ = __webpack_require__(/*! core/logic/sys */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_arrays__ = __webpack_require__(/*! core/utils/arrays */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);







var maxItemCount = 9;
var localMax = 9;
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_3_core_utils__["e" /* RandomGenerator */]();
        _this.partSeq = new __WEBPACK_IMPORTED_MODULE_5_core_utils_circleSeq__["b" /* UniqSeq */](1);
        _this.colorSeq = new __WEBPACK_IMPORTED_MODULE_5_core_utils_circleSeq__["b" /* UniqSeq */](1);
        _this.valueSeq = new __WEBPACK_IMPORTED_MODULE_5_core_utils_circleSeq__["b" /* UniqSeq */](1);
        _this.tutorialParts = ["color", "color", "number", "number"];
        return _this;
    }
    Logic.prototype.generateItems = function () {
        var numbers = this.rng.derangement(__WEBPACK_IMPORTED_MODULE_6_lodash__["range"](maxItemCount));
        var colors = this.rng.derangement(__WEBPACK_IMPORTED_MODULE_6_lodash__["range"](maxItemCount));
        return __WEBPACK_IMPORTED_MODULE_4_core_utils_arrays__["a" /* Arrays */].zip(numbers, colors).map(function (_a) {
            var n = _a[0], c = _a[1];
            return ({
                value: n + 1,
                color: c + 1
            });
        });
    };
    Logic.prototype.nextTask = function (level) {
        if (this.isTutorial && this.taskIndex >= this.tutorialParts.length) {
            return undefined;
        }
        var isNewLevel = this.taskCreatorState.isNewLevel;
        var prevTask = this.getPrevTask();
        var skip = isNewLevel ? (level.newColor ? "number" : "color") : undefined;
        var partType = this.isTutorial
            ? this.tutorialParts[this.taskIndex]
            : this.partSeq.nextFrom(level.partTypes, skip);
        var visibleColors = __WEBPACK_IMPORTED_MODULE_6_lodash__["range"](level.colorCount);
        var visibleValues = __WEBPACK_IMPORTED_MODULE_6_lodash__["range"](localMax - 1, localMax - 1 - level.valueCount);
        var allVisible = visibleColors.concat(visibleValues);
        var _a = partType == "number"
            ? [visibleValues, this.valueSeq]
            : [visibleColors, this.colorSeq], visibleByType = _a[0], seq = _a[1];
        var items = prevTask ? prevTask.items : this.generateItems();
        var index = isNewLevel
            ? __WEBPACK_IMPORTED_MODULE_6_lodash__["last"](visibleByType)
            : seq.nextFrom(visibleByType);
        var answers = [index];
        var target = { index: index, partType: partType };
        var task = {
            visibleColors: visibleColors,
            visibleValues: visibleValues,
            allVisible: allVisible,
            target: target,
            items: items,
            answers: answers
        };
        if (__WEBPACK_IMPORTED_MODULE_2_core_logic_sys__["a" /* Sys */].showLog) {
            console.log("task", task);
        }
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ })

});
//# sourceMappingURL=12.bundle.js.map