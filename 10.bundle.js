webpackJsonpNewGames([10],{

/***/ 140:
/*!*****************************************************!*\
  !*** ./src/games/mnemonics/wordassociation/meta.ts ***!
  \*****************************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets__ = __webpack_require__(/*! ./assets */ 166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(/*! ./levels */ 270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic__ = __webpack_require__(/*! ./logic */ 271);




var gameId = "wordassociation";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_2__levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 2, maxLevel: 100 }]
};
var metaData = {
    gameId: gameId,
    title: "wordassociation",
    logic: __WEBPACK_IMPORTED_MODULE_3__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_0__assets__["b" /* Images */].data,
    sounds: __WEBPACK_IMPORTED_MODULE_0__assets__["c" /* Sounds */].keys,
    atlasCount: 1,
    tutorialTaskCount: 1,
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

/***/ 197:
/*!******************************************************!*\
  !*** ./src/games/mnemonics/common/mnemonicsWords.ts ***!
  \******************************************************/
/*! exports provided: MnemonicsWords */
/*! exports used: MnemonicsWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MnemonicsWords; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__ = __webpack_require__(/*! core/logic/cnst */ 36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_instances__ = __webpack_require__(/*! core/services/instances */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordsRu__ = __webpack_require__(/*! ./wordsRu */ 198);



var wordsDB = {
    ru: __WEBPACK_IMPORTED_MODULE_2__wordsRu__["a" /* default */]
};
var MnemonicsWords;
(function (MnemonicsWords) {
    function getWords() {
        var localeWords = wordsDB[__WEBPACK_IMPORTED_MODULE_1_core_services_instances__["d" /* settingService */].settings.locale] || wordsDB[__WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__["a" /* Cnst */].defaultLocale];
        return {
            easy: localeWords.object,
            normal: localeWords.object.concat(localeWords.abstract),
            hard: localeWords.abstract
        };
    }
    MnemonicsWords.getWords = getWords;
})(MnemonicsWords || (MnemonicsWords = {}));


/***/ }),

/***/ 198:
/*!***********************************************!*\
  !*** ./src/games/mnemonics/common/wordsRu.ts ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    "object": ["банан", "батон", "ворон", "дамба", "жерло", "жетон", "кабан", "лампа", "лиана", "мотор", "радар", "туфля", "холст", "барсук", "лиса", "жираф", "заяц", "кошка", "хомяк", "собака", "дрозд", "кукушка", "орел", "сова", "цапля", "чайка", "ястреб", "пингвин", "акула", "медуза", "омар", "моль", "паук", "комар", "груша", "дыня", "персик", "киви", "лимон", "кедр", "клен", "сверло", "гайка", "винт", "верстак", "краска", "топор", "кирка", "вешалка", "гамак", "диван", "кресло", "кровать", "кушетка", "полка", "стол", "стул", "чайник", "скалка", "ковш", "тарелка", "миска", "стакан", "кружка", "чашка", "ложка", "поезд", "вагон", "трамвай", "корабль", "яхта", "самолет", "ракета", "телега", "лодка", "самокат", "шлюпка", "санки", "мяч", "штанга", "гиря", "обруч", "свисток", "клюшка", "турник", "кисть", "колено", "палец", "журнал", "крем", "ручка", "тетрадь", "маркер", "кисточка", "скотч", "лупа", "автомат", "акваланг", "алмаз", "альбом", "амулет", "мост", "балка", "баллон", "бампер", "банка", "бант", "батут", "башмак", "башня", "датчик", "дверь", "дворец", "жезл", "лист", "перо", "танк", "гипс", "плот", "утюг", "часы", "панама", "изумруд", "молоток", "серебро", "нога", "монета", "орган", "нос", "камень", "зеркало", "кубок", "медаль", "ядро", "бревно", "горка", "десерт", "парта", "сейф", "сервант", "копье", "рогатка", "дротик", "болт", "бокал", "кран", "вентилятор", "лампочка", "молот", "лопата", "ключ", "лейка", "телефон", "глобус", "тележка", "дрель", "комод", "книга", "кошелек", "горшок", "тостер", "веревка", "карта", "сундук", "бочка", "меч", "сабля", "якорь", "медальон", "компас", "майка", "пальма", "ведро", "чемодан", "перчатки", "гармонь", "галстук", "газета", "пластинка", "магнитофон", "борода", "усы", "олень", "наушники", "велосипед", "шарф", "клубок", "подушка", "диск", "тапочки", "бинокль", "очки", "солнце", "шлепки", "полотенце", "фрегат", "краб", "ласты", "ананас", "линейка", "циркуль", "дневник", "ноутбук", "ваза", "картина", "блокнот", "диплом", "телескоп", "ворота", "мотоцикл", "шлем", "бутылка", "лыжи", "коньки", "шарик", "руль", "кегли", "елка", "гирлянда", "кукла", "посуда", "камера", "столб", "трактор", "лев", "тигр", "грива", "ландыш", "винтик", "локомотив", "медведь", "письмо", "карман", "труба", "мозг", "студент", "директор", "озеро", "секунда", "художник", "профессор", "остров", "ручей", "комета", "князь", "корона"],
    "abstract": ["время", "жизнь", "день", "работа", "случай", "власть", "война", "голос", "развитие", "процесс", "суд", "любовь", "путь", "минута", "вечер", "мысль", "внимание", "разговор", "чувство", "наука", "культура", "служба", "судьба", "искусство", "воздух", "характер", "свобода", "требование", "основание", "сон", "счастье", "сознание", "возраст", "радость", "реформа", "победа", "праздник", "впечатление", "частность", "детство", "вывод", "скорость", "энергия", "существование", "рождение", "реализация", "тень", "стиль", "гроза", "ливень", "пурга", "вьюга", "смерч", "затмение", "лавина", "беготня", "данность", "двусмыслица", "дебют", "авторитет", "активность", "альтруизм", "бдительность", "безмятежность", "безупречность", "бережливость", "бесстрашие", "благодарность", "благородство", "блаженство", "вдохновение", "верность", "воля", "воображение", "выносливость", "галантность", "героизм", "гибкость", "гордость", "гуманизм", "дисциплина", "доблесть", "добродетель", "доброта", "достоинство", "дружелюбие", "духовность", "помогать", "жизнелюбие", "законность", "здравомыслие", "идеализм", "изящность", "искренность", "интуитивность", "интуитивный", "искусный", "корректность", "красота", "легкость", "легкий", "лидерство", "ловкость", "любезность", "милость", "надежность", "нежность", "разумность", "независимость", "неуязвимость", "польза", "обаяние", "образование", "обучение", "общение", "объект", "озарение", "опрятность", "оптимизм", "организация", "оригинал", "осознание", "осторожно", "остроумие", "отвага", "очарование", "пластичность", "почтение", "честность", "честь", "практика", "практичность", "прилежность", "преданность", "прочность", "раскованность", "решение", "решимость", "сила", "симпатия", "смелость", "солидность", "стойкость", "талант", "творчество", "терпение", "точность", "уважение", "усердие", "уверенность", "упорство", "функция", "харизма", "храбрость", "бодрость", "яркость", "ясность", "вера", "выдержка", "мудрость", "мужество", "звезды", "земля", "снегопад", "засуха", "ураган", "шторм", "потоп", "буря", "туман", "дождь", "роса", "настроение", "аромат", "гребля", "блеск", "интрига", "тайна", "запах", "история", "музыка", "будущее", "успех", "ночь", "смысл", "конфликт", "шутка", "фактор", "линия", "передача", "разработка", "акция"]
});


/***/ }),

/***/ 210:
/*!*****************************************************************************!*\
  !*** ./src/games/mnemonics/wordassociation/components/wordListComponent.ts ***!
  \*****************************************************************************/
/*! exports provided: WordListComponent */
/*! exports used: WordListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_mnemonics_wordassociation_assets__ = __webpack_require__(/*! games/mnemonics/wordassociation/assets */ 166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);







var WordListComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](WordListComponent, _super);
    function WordListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
            wordsGroup: { x: 30 },
            margin: { x: 0 }
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].bi({}, {});
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_5_games_mnemonics_wordassociation_assets__["b" /* Images */].podloshka);
        _this.wordsGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_control__["a" /* Control */]()).anchorCenterY().setPos([_this.positions.wordsGroup.x, _this.height / 2]);
        _this.texts = [];
        _this.index = 1;
        return _this;
    }
    WordListComponent.prototype.setWords = function (words, additionalWordsCount) {
        var _this = this;
        if (additionalWordsCount === void 0) { additionalWordsCount = 0; }
        this.index = words.length;
        this.wordsGroup.removeAll(true);
        this.texts = words.concat(__WEBPACK_IMPORTED_MODULE_6_lodash__["times"](additionalWordsCount, function () { return ""; }))
            .map(function (word) { return _this.wordsGroup.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_txt__["a" /* Txt */](word, __WEBPACK_IMPORTED_MODULE_5_games_mnemonics_wordassociation_assets__["a" /* Fonts */].word)); });
        __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].tableColumn(this.texts, this.positions.margin);
        this.wordsGroup.updatePivot();
        return this;
    };
    WordListComponent.prototype.addWord = function (word) {
        this.texts[this.index].text = word;
        this.index += 1;
    };
    WordListComponent.prototype.onPropsUpdate = function () {
    };
    return WordListComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 266:
/*!*************************************************************************!*\
  !*** ./src/games/mnemonics/wordassociation/components/mainComponent.ts ***!
  \*************************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_GraphicsImg__ = __webpack_require__(/*! core/ui/controls/GraphicsImg */ 155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_games_mnemonics_wordassociation_components_answerComponent__ = __webpack_require__(/*! games/mnemonics/wordassociation/components/answerComponent */ 267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_mnemonics_wordassociation_components_introComponent__ = __webpack_require__(/*! games/mnemonics/wordassociation/components/introComponent */ 268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets__ = __webpack_require__(/*! ../assets */ 166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__questionComponent__ = __webpack_require__(/*! ./questionComponent */ 269);













var durations = {};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            marginTop: 70,
            pointsTop: [600, 350],
            pointsBottom: [600, 750],
            decor: [
            // [400,1030],
            // [-100,-100],
            // // [280,120],
            // [1400,1050],
            // [100,500],
            // [1800,600],
            ],
            btnSize: { width: 500, height: 100 },
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].bi({
            rememberBtn: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 1120 },
            question: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 661 },
            speed: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 210 },
        }, {
            rememberBtn: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 1210 },
            question: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 700 },
            speed: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 110 },
        });
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_11__assets__["b" /* Images */].bg);
        _this.points = _this.addImage(__WEBPACK_IMPORTED_MODULE_11__assets__["b" /* Images */].point).setPos(_this.positions.pointsBottom);
        _this.question = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_12__questionComponent__["a" /* QuestionComponent */])).anchorCenter()
            .setBiPos(_this.biPositions.question);
        _this.answer = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_9_games_mnemonics_wordassociation_components_answerComponent__["a" /* AnswerComponent */])).anchorCenter()
            .setBiPos(_this.biPositions.question).fluentUpdate(function (x) { return x.visible = false; });
        _this.rememberBtn = _this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_btn__["a" /* Btn */](_this.translate(__WEBPACK_IMPORTED_MODULE_11__assets__["d" /* Translations */].remember), function () { return _this.showQuestion(false); }, __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["c" /* CoreFonts */].button(__WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["b" /* CoreColors */].black), new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_GraphicsImg__["a" /* BtnDefaultImg */]({
            color: __WEBPACK_IMPORTED_MODULE_11__assets__["a" /* Fonts */].yellow,
            size: _this.positions.btnSize
        })))
            .anchorCenter()
            .setBiPos(_this.biPositions.rememberBtn);
        return _this;
    }
    MainComponent.prototype.showQuestion = function (visible) {
        var pointsPos = visible ? this.positions.pointsBottom : this.positions.pointsTop;
        this.points.setPos(pointsPos);
        var task = this.getCurrentTask();
        var key = visible ? __WEBPACK_IMPORTED_MODULE_11__assets__["d" /* Translations */].tutor : __WEBPACK_IMPORTED_MODULE_11__assets__["d" /* Translations */].question(task.correctAnswerCount);
        this.tutorial.setProps(this.translate(key));
        this.question.visible = visible;
        this.answer.visible = !visible;
        this.rememberBtn.visible = visible;
    };
    MainComponent.prototype.introAnimation = function () {
        var intro = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_10_games_mnemonics_wordassociation_components_introComponent__["a" /* IntroComponent */]));
        var tween = intro.playTween();
        return {
            start: function () {
                tween.start();
            },
            onComplete: __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__["a" /* Signals */].bind(tween.onComplete, function () {
                return __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_controlUtl__["a" /* ControlUtl */].hideAndDestroy(intro);
            })
        };
    };
    MainComponent.prototype.onInit = function () {
        var _this = this;
        this.positions.decor.forEach(function (p, i) {
            _this.addImage(__WEBPACK_IMPORTED_MODULE_11__assets__["b" /* Images */].decor(i)).setPos(p);
        });
        this.statusOptions.waitCompleteBeforeNewTask = true;
        this.introOptions.runOnNewTaskAfter = true;
        this.startIntro();
        this.tutorial = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */])
            .make({ marginTop: this.positions.marginTop }));
    };
    MainComponent.prototype.onNewTask = function (task) {
        this.tutorial.setProps(this.translate(__WEBPACK_IMPORTED_MODULE_11__assets__["d" /* Translations */].tutor));
        if (!this.isFirstTask) {
            this.showQuestion(true);
        }
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 267:
/*!***************************************************************************!*\
  !*** ./src/games/mnemonics/wordassociation/components/answerComponent.ts ***!
  \***************************************************************************/
/*! exports provided: AnswerComponent */
/*! exports used: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_answerBtnBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/answerBtnBehavior */ 69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_mnemonics_wordassociation_assets__ = __webpack_require__(/*! games/mnemonics/wordassociation/assets */ 166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_games_mnemonics_wordassociation_components_wordListComponent__ = __webpack_require__(/*! games/mnemonics/wordassociation/components/wordListComponent */ 210);










var biValues = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_positions__["a" /* BiValue */].create({
    scale: 1
}, {
    scale: 0.8
});
var durations = {
    delay: 500
};
var AnswerComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AnswerComponent, _super);
    function AnswerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            answerMarin: 0
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].bi({
            buttons: { y: 300 },
            margin: { x: 40, y: 20 },
        }, {
            buttons: { y: 500 },
            margin: { x: 60, y: 60 },
        });
        _this.words = _this.add(_this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_9_games_mnemonics_wordassociation_components_wordListComponent__["a" /* WordListComponent */], { hideWords: true })).anchorCenterX();
        _this.buttonGroups = _this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__["a" /* Control */]()).setBiPos(_this.biPositions.buttons);
        _this.buttons = [];
        return _this;
    }
    AnswerComponent.prototype.onNewTask = function (task) {
        this.createQuestion();
    };
    Object.defineProperty(AnswerComponent.prototype, "answerChecker", {
        get: function () {
            return this.context.gameService.gameCycleService.state.answers;
        },
        enumerable: true,
        configurable: true
    });
    AnswerComponent.prototype.onAnswer = function (answer) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].isCorrect(answer.status)) {
            this.words.addWord(answer.answerId);
        }
        if (answer.status == __WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].CorrectPartial && this.answerChecker.currentSeq.isEmpty) {
            this.disableInputOn(this.delay(durations.delay)).addOnce(function () {
                _this.createQuestion();
            });
        }
        else if (answer.status == __WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].Error) {
            __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_answerBtnBehavior__["a" /* AnswerBtnBehavior */].findByAnswerId(this.buttons, answer.answerId).textControl.fill = __WEBPACK_IMPORTED_MODULE_8_games_mnemonics_wordassociation_assets__["a" /* Fonts */].red;
            var answers = answer.answerChecker.currentSeq.restAnswers;
            answers.forEach(function (answerId) {
                __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_answerBtnBehavior__["a" /* AnswerBtnBehavior */].findByAnswerId(_this.buttons, answerId).textControl.fill = __WEBPACK_IMPORTED_MODULE_8_games_mnemonics_wordassociation_assets__["a" /* Fonts */].green;
                _this.words.addWord(answerId);
            });
        }
        // const correctAnswer = (answer.levelTask.task as Task).answers[0]
        // AnswerBtnBehavior.findByAnswerId(this.buttons, correctAnswer).textControl.fill = CoreColors.darkGreen
        // if (AnswerStatus.Error == answer.status) {
        //   AnswerBtnBehavior.findByAnswerId(this.buttons, answer.answerId).textControl.fill = CoreColors.wrong
        // }
    };
    AnswerComponent.prototype.createQuestion = function () {
        var _this = this;
        var task = this.getCurrentTask();
        var question = task.questions[this.answerChecker.index];
        this.buttonGroups.removeAll(true);
        this.buttons = question.answerOptions.map(function (word) {
            var btn = new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_btn__["c" /* ImageBtn */](word.word, _this.gameKey(__WEBPACK_IMPORTED_MODULE_8_games_mnemonics_wordassociation_assets__["b" /* Images */].button_stroke), function () {
            }, __WEBPACK_IMPORTED_MODULE_8_games_mnemonics_wordassociation_assets__["a" /* Fonts */].button);
            return _this.buttonGroups.add(_this.addAnswerBehavior(btn, word.answerId, {
                dark: true,
                margin: _this.positions.answerMarin
            }));
        });
        this.updatePositions();
        this.words.visible = false;
        this.words.setPos({ x: this.buttonGroups.width / 2 }).setWords(question.words, task.correctAnswerCount);
        this.words.visible = true;
        this.updatePivot();
        this.answersAreReady();
    };
    AnswerComponent.prototype.updatePositions = function () {
        var colCount = this.isPortrait ? 2 : 3;
        __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.buttons, colCount, this.current(this.biPositions.margin));
    };
    AnswerComponent.prototype.onInit = function () {
        var _this = this;
        this.onBiValueChange(biValues.scale, function (c, v) {
            c.symmetricScale = v;
            _this.createQuestion();
        });
    };
    return AnswerComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 268:
/*!**************************************************************************!*\
  !*** ./src/games/mnemonics/wordassociation/components/introComponent.ts ***!
  \**************************************************************************/
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





var durations = {
    move: 1000
};
var IntroComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](IntroComponent, _super);
    function IntroComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            size: {
                w: 100,
                h: 50
            },
            decor: [
                [400, 300],
                [400, -300],
                [-400, 300],
                [-400, -300],
            ]
        });
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_4_games_mnemonics_wordassociation_assets__["b" /* Images */].bg);
        return _this;
    }
    Object.defineProperty(IntroComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
        },
        enumerable: true,
        configurable: true
    });
    IntroComponent.prototype.playTween = function () {
        var tweens = this.decors.map(function (x) {
            return __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
                target: x,
                to: { pivotX: 0, pivotY: 0, angle: 360 * 2 },
                duration: durations.move,
            });
        });
        return tweens[0];
    };
    IntroComponent.prototype.onInit = function () {
        var _this = this;
        this.decors = this.positions.decor.map(function (p, i) {
            var img = _this.addImage(__WEBPACK_IMPORTED_MODULE_4_games_mnemonics_wordassociation_assets__["b" /* Images */].decor(i))
                .updatePos(__WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].w2 - _this.positions.size.w, __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].h2 - _this.positions.size.h);
            img.pivot.set(p[0], p[1]);
            return img;
        });
    };
    return IntroComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 269:
/*!*****************************************************************************!*\
  !*** ./src/games/mnemonics/wordassociation/components/questionComponent.ts ***!
  \*****************************************************************************/
/*! exports provided: QuestionComponent */
/*! exports used: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_mnemonics_wordassociation_components_wordListComponent__ = __webpack_require__(/*! games/mnemonics/wordassociation/components/wordListComponent */ 210);






var count = 9;
var biValues = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_positions__["a" /* BiValue */].create({
    scale: 1
}, {
    scale: 0.75
});
var columnCounts = {
    4: 2,
};
var QuestionComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](QuestionComponent, _super);
    function QuestionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({});
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
            margin: { x: 28 },
        }, {
            margin: { x: 20 },
        });
        _this.wordsGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_control__["a" /* Control */]());
        return _this;
    }
    QuestionComponent.prototype.onNewTask = function (task) {
        this.createControls();
    };
    QuestionComponent.prototype.createControls = function () {
        var _this = this;
        this.wordsGroup.removeAll(true);
        var task = this.getCurrentTask();
        var texts = task.groups.map(function (x) {
            return _this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_5_games_mnemonics_wordassociation_components_wordListComponent__["a" /* WordListComponent */], { hideWords: false })
                .setWords(x);
        });
        this.wordsGroup.addChildren(texts);
        var colCount = this.isPortrait ? 2 : (columnCounts[texts.length] || 3);
        __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].tableFromList(texts, colCount, this.current(this.biPositions.margin));
        this.updatePivot();
    };
    QuestionComponent.prototype.onInit = function () {
        var _this = this;
        this.onBiValueChange(biValues.scale, function (c, v) {
            _this.symmetricScale = v;
            _this.createControls();
        });
    };
    return QuestionComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 270:
/*!*******************************************************!*\
  !*** ./src/games/mnemonics/wordassociation/levels.ts ***!
  \*******************************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);

function level(groupCount, groupSize, correctAnswerCount, answerCount, wordDifficulty) {
    return { groupCount: groupCount, groupSize: groupSize, answerCount: answerCount, correctAnswerCount: correctAnswerCount, wordDifficulty: wordDifficulty };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])([
    level(3, 2, 1, 3, "easy"),
    level(4, 2, 1, 3, "easy"),
    level(3, 3, 1, 3, "easy"),
    level(6, 2, 1, 5, "easy"),
    level(4, 3, 1, 5, "easy"),
    level(8, 2, 1, 8, "easy"),
    level(3, 3, 2, 3, "normal"),
    level(6, 3, 1, 5, "normal"),
    level(4, 3, 2, 5, "normal"),
    level(8, 3, 1, 8, "normal"),
    level(6, 3, 2, 5, "hard"),
    level(8, 3, 2, 8, "hard"),
]);


/***/ }),

/***/ 271:
/*!******************************************************!*\
  !*** ./src/games/mnemonics/wordassociation/logic.ts ***!
  \******************************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic_index__ = __webpack_require__(/*! core/logic/index */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_index__ = __webpack_require__(/*! core/utils/index */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_mnemonics_common_mnemonicsWords__ = __webpack_require__(/*! games/mnemonics/common/mnemonicsWords */ 197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);






var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_3_core_utils_index__["e" /* RandomGenerator */]();
        _this.words = __WEBPACK_IMPORTED_MODULE_4_games_mnemonics_common_mnemonicsWords__["a" /* MnemonicsWords */].getWords();
        _this.wordsSeq = new __WEBPACK_IMPORTED_MODULE_2_core_utils_circleSeq__["b" /* UniqSeq */](0);
        return _this;
    }
    Logic.prototype.nextTask = function (level) {
        var _this = this;
        var groups = __WEBPACK_IMPORTED_MODULE_5_lodash__["range"](level.groupCount).map(function () {
            return _this.wordsSeq.nextSubsetFrom(_this.words[level.wordDifficulty], level.groupSize);
        });
        var allWords = __WEBPACK_IMPORTED_MODULE_5_lodash__["flatten"](groups);
        var prevCorrectAnswers = [];
        var questions = this.rng.shuffle(groups).map(function (group, i) {
            var _a = _this.rng.split(group, level.correctAnswerCount), correctAnswers = _a[0], words = _a[1];
            var answerWords = __WEBPACK_IMPORTED_MODULE_5_lodash__["difference"](allWords, group.concat(prevCorrectAnswers));
            var wrondAnswerWords = _this.rng.take(answerWords, level.answerCount - correctAnswers.length);
            var answerOptions = _this.rng.shuffle(correctAnswers.map(function (word) { return ({ word: word, answerId: word, isCorrect: true }); }), wrondAnswerWords.map(function (word) { return ({ word: word, answerId: word + i, isCorrect: false }); }));
            prevCorrectAnswers = correctAnswers;
            return {
                words: words,
                correctAnswers: correctAnswers,
                answerOptions: answerOptions
            };
        });
        var answers = { groups: questions.map(function (x) { return x.correctAnswers; }) };
        var correctAnswerCount = level.correctAnswerCount;
        var task = {
            groups: groups,
            correctAnswerCount: correctAnswerCount,
            questions: questions,
            answers: answers
        };
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic_index__["c" /* GameLogic */]));



/***/ })

});
//# sourceMappingURL=10.bundle.js.map