webpackJsonpNewGames([15],{

/***/ 137:
/*!*******************************************************!*\
  !*** ./src/games/mnemonics/numberassociation/meta.ts ***!
  \*******************************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets__ = __webpack_require__(/*! ./assets */ 196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(/*! ./levels */ 253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic__ = __webpack_require__(/*! ./logic */ 254);




var gameId = "numberassociation";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_2__levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 3, maxLevel: 100 }]
};
var metaData = {
    gameId: gameId,
    title: "numberassociation",
    logic: __WEBPACK_IMPORTED_MODULE_3__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_0__assets__["b" /* Images */].data,
    sounds: __WEBPACK_IMPORTED_MODULE_0__assets__["c" /* Sounds */].keys,
    atlasCount: 2,
    tutorialTaskCount: 3,
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

/***/ 166:
/*!*******************************************************!*\
  !*** ./src/games/mnemonics/wordassociation/assets.ts ***!
  \*******************************************************/
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
    Sounds.keys = [];
})(Sounds || (Sounds = {}));
var Translations;
(function (Translations) {
    Translations.remember = "remember";
    Translations.tutor = "tutor";
    Translations.question = function (count) { return "question" + count; };
})(Translations || (Translations = {}));
var Fonts;
(function (Fonts) {
    Fonts.yellow = 0xE9FF4D;
    Fonts.green = "#98ed48";
    Fonts.red = "#FC5F72";
    Fonts.word = {
        fontSize: 45, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black, align: "center"
    };
    Fonts.button = {
        fontSize: 55, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].white, align: "center"
    };
})(Fonts || (Fonts = {}));
var Images;
(function (Images) {
    Images.bg = "bg";
    Images.button_stroke = "button_stroke";
    Images.podloshka = "podloshka";
    Images.point = "point";
    Images.podloshka_hover = "podloshka_hove";
    Images.decor = function (index) { return "decor_" + index; };
    Images.bg_intro_eye = "bg_intro_eye";
    Images.data = {
        sprites: []
    };
})(Images || (Images = {}));


/***/ }),

/***/ 196:
/*!*********************************************************!*\
  !*** ./src/games/mnemonics/numberassociation/assets.ts ***!
  \*********************************************************/
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
    Sounds.keys = [];
})(Sounds || (Sounds = {}));
var Translations;
(function (Translations) {
    Translations.remember = "remember";
    Translations.tutor1 = "tutor1";
    Translations.tutor2 = "tutor2";
    Translations.tutor3 = "tutor3";
})(Translations || (Translations = {}));
var Fonts;
(function (Fonts) {
    Fonts.purple = 0x7A46D3;
    Fonts.highlight = 0xECFDAC;
    Fonts.word = {
        fontSize: 45, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black, align: "center"
    };
    Fonts.button = {
        fontSize: 55, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].white, align: "center"
    };
})(Fonts || (Fonts = {}));
var Images;
(function (Images) {
    Images.bg = "bg";
    Images.empty = "empty";
    Images.btn_white = "btn_white";
    Images.btn_hover = "btn_hover";
    Images.btn_hightlight = "btn_hightlight";
    Images.btn_outline = "btn_outline";
    Images.icon = function (number, index) { return "icon_" + number + "_" + index; };
    Images.number = function (number) { return "number_" + number; };
    Images.data = {
        sprites: []
    };
})(Images || (Images = {}));


/***/ }),

/***/ 250:
/*!***************************************************************************!*\
  !*** ./src/games/mnemonics/numberassociation/components/mainComponent.ts ***!
  \***************************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_ui_animations_signals__ = __webpack_require__(/*! ../../../../core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_ui_controls_controlUtl__ = __webpack_require__(/*! ../../../../core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets__ = __webpack_require__(/*! ../assets */ 196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__introComponent__ = __webpack_require__(/*! ./introComponent */ 251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionComponent__ = __webpack_require__(/*! ./questionComponent */ 252);








var durations = { intro: 700 };
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
            question: { x: 0, y: 0 },
        });
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_5__assets__["b" /* Images */].bg);
        _this.question = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_7__questionComponent__["a" /* QuestionComponent */])).setPos(_this.positions.question);
        return _this;
    }
    MainComponent.prototype.onInit = function () {
        this.statusOptions.waitCompleteBeforeNewTask = true;
        this.introOptions.runOnNewTaskAfter = true;
        this.startIntro();
    };
    MainComponent.prototype.introAnimation = function () {
        var intro = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_6__introComponent__["a" /* IntroComponent */]));
        intro.createTween();
        return {
            start: function () {
                intro.start();
            },
            onComplete: __WEBPACK_IMPORTED_MODULE_3__core_ui_animations_signals__["a" /* Signals */].bind(this.delay(durations.intro), function () {
                return __WEBPACK_IMPORTED_MODULE_4__core_ui_controls_controlUtl__["a" /* ControlUtl */].hideAndDestroy(intro);
            })
        };
    };
    MainComponent.prototype.onNewTask = function (task) {
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 251:
/*!****************************************************************************!*\
  !*** ./src/games/mnemonics/numberassociation/components/introComponent.ts ***!
  \****************************************************************************/
/*! exports provided: IntroComponent */
/*! exports used: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_mnemonics_wordassociation_assets__ = __webpack_require__(/*! games/mnemonics/wordassociation/assets */ 166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);






var durations = {
    move: 800,
    delay: 0,
    delayBird: 200
};
var IntroComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](IntroComponent, _super);
    function IntroComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            bird3: { x: 728 }
        });
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_4_games_mnemonics_wordassociation_assets__["b" /* Images */].bg);
        _this.bg1 = _this.addImage("intro_bg_1");
        _this.bg2 = _this.addImage("intro_bg_2").updatePos(_this.bg1.width, 0);
        _this.bg3 = _this.addImage("intro_bg_3").updatePos(_this.bg1.width, _this.bg2.height);
        _this.bg5 = _this.addImage("intro_bg_5").updatePos(0, _this.bg2.height);
        _this.bg4 = _this.addImage("intro_bg_4").updatePos(0, _this.bg1.height + _this.bg5.height);
        _this.bird2 = _this.addImage("intro_bird_2").updatePos(_this.bg1.width, _this.bg1.height).anchorOne();
        _this.bird1 = _this.addImage("intro_bird_1").updatePos(_this.bg1.width, _this.bg1.height).anchorOneY();
        _this.bird3 = _this.addImage("intro_bird_3").updatePos(_this.positions.bird3.x, _this.bg1.height);
        _this.tweens = [];
        return _this;
    }
    IntroComponent.prototype.moveTo = function (target, to, delay) {
        if (delay === void 0) { delay = false; }
        return __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: target,
            to: to,
            notStart: true,
            delay: durations.delay + (delay ? durations.delayBird : 0),
            duration: durations.move
        });
    };
    IntroComponent.prototype.createTween = function () {
        this.tweens = [
            this.moveTo(this.bg1, { x: -this.bg1.width, y: -this.bg1.height }),
            this.moveTo(this.bg2, { x: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].width + this.bg2.width, y: -this.bg2.height }),
            this.moveTo(this.bg3, { x: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].width + this.bg3.width, y: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].height + this.bg3.height }),
            this.moveTo(this.bg4, { x: -this.bg4.width, y: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].height + this.bg4.height }),
            this.moveTo(this.bg5, { x: -this.bg5.width }),
            this.moveTo(this.bird2, { x: -this.bg1.width, y: -this.bg1.height }, true),
            this.moveTo(this.bird1, { x: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].width + this.bg2.width, y: -this.bg2.height }, true),
            this.moveTo(this.bird3, { x: -this.bg4.width, y: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].height + this.bg4.height }, true)
        ];
        return __WEBPACK_IMPORTED_MODULE_5_lodash__["last"](this.tweens);
    };
    IntroComponent.prototype.start = function () {
        this.tweens.forEach(function (x) { return x.start(); });
    };
    IntroComponent.prototype.onInit = function () {
    };
    return IntroComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 252:
/*!*******************************************************************************!*\
  !*** ./src/games/mnemonics/numberassociation/components/questionComponent.ts ***!
  \*******************************************************************************/
/*! exports provided: QuestionComponent */
/*! exports used: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_behaviors_highlightBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/highlightBehavior */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_ui_controls_GraphicsImg__ = __webpack_require__(/*! core/ui/controls/GraphicsImg */ 155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__ = __webpack_require__(/*! games/mnemonics/numberassociation/assets */ 196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_assets_sounds__ = __webpack_require__(/*! ../../../../core/assets/sounds */ 68);















var biValues = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_positions__["a" /* BiValue */].create({
    scale: 1
}, {
    scale: 0.84
});
var QuestionComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](QuestionComponent, _super);
    function QuestionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
            btnSize: { width: 500, height: 100 },
            clickArea: { width: 100, height: 100 },
            clickAreaIcon: { width: 170, height: 170 },
            shift: -70
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].bi({
            marginIcon: { x: -50 },
            marginAnswers: { x: -50, y: -100 },
            numbers: { x: __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 550 },
            numbersTutorial: { x: __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 580 },
            icons: { x: __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 1030 },
            marginNumbers: { x: -40 }
        }, {
            marginIcon: { x: -80 },
            marginAnswers: { x: -110, y: -80 },
            numbers: { x: __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 530 },
            numbersTutorial: { x: __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 580 },
            icons: { x: __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 1120 },
            marginNumbers: { x: -70 }
        });
        _this.numbers = [];
        _this.icons = [];
        _this.index = 0;
        _this.numbersGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_control__["a" /* Control */]()).anchorCenter()
            .setBiPos(_this.isTutorial ? _this.biPositions.numbersTutorial : _this.biPositions.numbers);
        _this.iconsGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_control__["a" /* Control */]()).anchorCenter().setBiPos(_this.biPositions.icons);
        _this.rememberBtn = _this.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__["a" /* Btn */](_this.translate(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["d" /* Translations */].remember), function () { return _this.onRemember(); }, undefined, new __WEBPACK_IMPORTED_MODULE_11_core_ui_controls_GraphicsImg__["a" /* BtnDefaultImg */]({
            color: __WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["a" /* Fonts */].purple,
            size: _this.positions.btnSize
        }))).anchorCenter().setBiPos(_this.biPositions.icons);
        _this.answersGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_control__["a" /* Control */]()).anchorCenter().setBiPos(_this.biPositions.icons);
        return _this;
    }
    QuestionComponent.prototype.onRemember = function () {
        var _this = this;
        this.playSound(__WEBPACK_IMPORTED_MODULE_14__core_assets_sounds__["a" /* CoreSounds */].click, false, true);
        if (this.isTutorial) {
            this.tutorial.setProps(this.translate(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["d" /* Translations */].tutor3));
        }
        var task = this.getCurrentTask();
        task.hideIconIndexes.forEach(function (i) {
            _this.numbers[i].childAt(1).key = _this.gameKey(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].empty);
        });
        this.rememberBtn.visible = false;
        this.answersGroup.visible = true;
        this.numbers[0].getBehavior(__WEBPACK_IMPORTED_MODULE_7_core_ui_controls_behaviors_highlightBehavior__["a" /* HightlightBehavior */]).enableHighlight(true);
        this.updateNumbersPositions();
        this.answersAreReady();
    };
    QuestionComponent.prototype.chooseIconsComplete = function () {
        if (this.isTutorial) {
            this.tutorial.setProps(this.translate(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["d" /* Translations */].tutor2));
        }
        this.enableHighlight();
        this.index = 0;
        this.rememberBtn.visible = true;
        this.iconsGroup.visible = false;
    };
    QuestionComponent.prototype.onChooseIcon = function (number, imageIndex) {
        this.playSound(__WEBPACK_IMPORTED_MODULE_14__core_assets_sounds__["a" /* CoreSounds */].click, false, true);
        this.numbers[this.index].childAt(1).key = this.gameKey(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].icon(number, imageIndex));
        this.numbers[this.index].childAt(0).key = this.gameKey(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].btn_white);
        this.index += 1;
        if (this.index >= this.numbers.length) {
            this.chooseIconsComplete();
        }
        else {
            this.createCurrentNumberIcons();
        }
        this.updateNumbersPositions();
    };
    QuestionComponent.prototype.onAnswer = function (answer) {
        if (answer.status != __WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].Error) {
            var index = answer.correctAnswerIndex;
            var number = this.numbers[index];
            number.childAt(0).key = this.gameKey(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].btn_outline);
            number.childAt(1).key = this.gameKey(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].number(number.tag));
            this.enableHighlight(index + 1);
        }
    };
    QuestionComponent.prototype.enableHighlight = function (index) {
        var _this = this;
        if (index === void 0) { index = this.index; }
        this.numbers.forEach(function (x, i) {
            var highlight = i == (index);
            var tint = highlight && x.childAt(0).key == _this.gameKey(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].btn_outline)
                ? __WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["a" /* Fonts */].highlight
                : __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["a" /* CoreColorNumbers */].white;
            x.childAt(0).img.tint = tint;
            x.childAt(1).img.tint = tint;
            return x.getBehavior(__WEBPACK_IMPORTED_MODULE_7_core_ui_controls_behaviors_highlightBehavior__["a" /* HightlightBehavior */]).enableHighlight(highlight);
        });
    };
    QuestionComponent.prototype.createCurrentNumberIcons = function () {
        var _this = this;
        var task = this.getCurrentTask();
        var icons = task.icons[this.index];
        var number = this.numbers[this.index].tag;
        this.enableHighlight();
        this.iconsGroup.removeAll(true);
        this.icons = icons.map(function (i) {
            var hover = _this.makeImage(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].btn_hover).fluentUpdate(function (x) { return x.visible = false; });
            var back = __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_controlUtl__["a" /* ControlUtl */].stack(hover, _this.makeImage(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].btn_white), _this.makeImage(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].icon(number, i)));
            var icon = new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__["a" /* Btn */]("", function () { return _this.onChooseIcon(number, i); }, undefined, back, { clickArea: _this.positions.clickAreaIcon });
            icon.onHover(function (out) { return hover.visible = !out; });
            return _this.iconsGroup.add(icon);
        });
        this.updateIconsPositions();
    };
    QuestionComponent.prototype.updateIconsPositions = function () {
        var colCount = this.isPortrait ? 5 : 5;
        __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.icons, colCount, this.current(this.biPositions.marginIcon));
        this.iconsGroup.updatePivot();
    };
    QuestionComponent.prototype.updateNumbersPositions = function () {
        var colCount = this.isPortrait ? 4 : 6;
        __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.numbers, colCount, this.current(this.biPositions.marginNumbers));
        this.numbersGroup.updatePivot();
    };
    QuestionComponent.prototype.onNewTask = function (task) {
        var _this = this;
        if (this.isTutorial) {
            this.tutorial.setProps(this.translate(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["d" /* Translations */].tutor1));
        }
        this.index = 0;
        this.rememberBtn.visible = false;
        this.answersGroup.visible = false;
        this.iconsGroup.visible = true;
        this.numbersGroup.removeAll(true);
        this.numbers = task.numbers.map(function (number) {
            var img = _this.makeImage(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].number(number));
            return _this.numbersGroup.add(__WEBPACK_IMPORTED_MODULE_10_core_ui_controls_controlUtl__["a" /* ControlUtl */].stack(_this.makeImage(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].btn_outline), img))
                .addBehavior(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_behaviors_highlightBehavior__["a" /* HightlightBehavior */]()).fluentUpdate(function (x) {
                x.tag = number;
            });
        });
        this.updateNumbersPositions();
        this.createCurrentNumberIcons();
    };
    QuestionComponent.prototype.onInit = function () {
        var _this = this;
        var btns = __WEBPACK_IMPORTED_MODULE_13_lodash__["range"](1, 10).concat([0]).map(function (x) {
            var hover = _this.makeImage(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].btn_hover).fluentUpdate(function (x) { return x.visible = false; });
            var number = _this.makeImage(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_numberassociation_assets__["b" /* Images */].number(x));
            var back = __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_controlUtl__["a" /* ControlUtl */].stack(hover, number);
            var btn = _this.answersGroup.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__["a" /* Btn */]("", function () {
            }, undefined, back, { clickArea: _this.positions.clickArea }));
            btn.onHover(function (out) {
                hover.visible = !out;
            });
            _this.addAnswerBehavior(btn, x, { dark: true, location: "top", margin: _this.positions.shift });
            return btn;
        });
        this.onBiValueChange(biValues.scale, function (c, v) {
            _this.iconsGroup.symmetricScale = v;
            __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].tableFromList(btns, 5, _this.current(_this.biPositions.marginAnswers));
            _this.answersGroup.updatePivot();
            _this.updateNumbersPositions();
            _this.updateIconsPositions();
        });
        if (this.isTutorial) {
            this.tutorial = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */]).make({ textAlign: "center" }));
        }
        this.rememberBtn.visible = false;
        this.answersGroup.visible = false;
    };
    return QuestionComponent;
}(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 253:
/*!*********************************************************!*\
  !*** ./src/games/mnemonics/numberassociation/levels.ts ***!
  \*********************************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);

function level(numberCount, showIconCount, iconCount) {
    return { numberCount: numberCount, hideIconCount: numberCount - showIconCount, iconCount: iconCount };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])([
    level(3, 3, 5),
    level(4, 3, 5),
    level(5, 2, 5),
    level(6, 2, 5),
    level(7, 2, 4),
    level(8, 2, 4),
    level(9, 1, 4),
    level(10, 1, 3),
    level(11, 1, 3),
    level(12, 0, 3),
    level(13, 0, 2),
    level(14, 0, 2),
    level(15, 0, 2),
    level(16, 0, 1),
    level(17, 0, 1),
    level(18, 0, 1),
]);


/***/ }),

/***/ 254:
/*!********************************************************!*\
  !*** ./src/games/mnemonics/numberassociation/logic.ts ***!
  \********************************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);





var maxIconCount = 5;
var allNumbers = __WEBPACK_IMPORTED_MODULE_4_lodash__["range"](10);
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_2_core_utils__["e" /* RandomGenerator */]();
        _this.numberSeq = new __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__["b" /* UniqSeq */](0);
        _this.iconSeqs = allNumbers.map(function () { return new __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__["a" /* CircleSeq */](_this.rng.range(maxIconCount)); });
        return _this;
    }
    Logic.prototype.nextTask = function (level) {
        var _this = this;
        this.numberSeq.reset();
        var numbers = this.numberSeq.nextSubsetFrom(allNumbers, level.numberCount);
        var icons = numbers.map(function (number) { return _this.iconSeqs[number].nextArray(level.iconCount); });
        var answers = { seq: numbers };
        var hideIconIndexes = this.rng.subset(__WEBPACK_IMPORTED_MODULE_4_lodash__["range"](numbers.length), level.hideIconCount);
        var task = {
            numbers: numbers,
            icons: icons,
            hideIconIndexes: hideIconIndexes,
            answers: answers
        };
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ })

});
//# sourceMappingURL=15.bundle.js.map