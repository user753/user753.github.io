webpackJsonpNewGames([8],{

/***/ 136:
/*!*********************************************!*\
  !*** ./src/games/mnemonics/dossier/meta.ts ***!
  \*********************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets__ = __webpack_require__(/*! ./assets */ 173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(/*! ./levels */ 247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic__ = __webpack_require__(/*! ./logic */ 248);




var gameId = "dossier";
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
    title: "dossier",
    logic: __WEBPACK_IMPORTED_MODULE_3__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_0__assets__["b" /* Images */].data,
    videos: __WEBPACK_IMPORTED_MODULE_0__assets__["e" /* Videos */].keys,
    sounds: __WEBPACK_IMPORTED_MODULE_0__assets__["c" /* Sounds */].keys,
    atlasCount: 3,
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

/***/ 173:
/*!***********************************************!*\
  !*** ./src/games/mnemonics/dossier/assets.ts ***!
  \***********************************************/
/*! exports provided: Sounds, Translations, Videos, Fonts, Images */
/*! exports used: Fonts, Images, Sounds, Translations, Videos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Sounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Translations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Videos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var Sounds;
(function (Sounds) {
    Sounds.keys = [];
})(Sounds || (Sounds = {}));
var Translations;
(function (Translations) {
    Translations.remember = "remember";
    Translations.tutor1 = "tutor1";
    Translations.tutor2 = "tutor2";
})(Translations || (Translations = {}));
var Videos;
(function (Videos) {
    Videos.keys = ["intro"];
})(Videos || (Videos = {}));
var Fonts;
(function (Fonts) {
    Fonts.yellow = 0x7A46D3;
    Fonts.part = {
        fontSize: 30, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black
    };
    Fonts.partName = {
        fontSize: 25, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black, align: "center"
    };
    Fonts.answer = {
        fontSize: 25, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black, align: "center"
    };
})(Fonts || (Fonts = {}));
var Images;
(function (Images) {
    Images.bg = "bg";
    Images.podloshka = "podloshka";
    Images.empty = "empty";
    Images.line = "line";
    Images.intro = function (index) { return "intro_" + index; };
    Images.plashka = function (index) { return "plashka_" + index; };
    Images.part = function (feature, isMan, hairColor, index) {
        var manPart = isMan ? "man" : "woman";
        var colorPart = __WEBPACK_IMPORTED_MODULE_1_lodash__["includes"](["hair", "beard"], feature) ? hairColor : "";
        return [feature, colorPart, manPart].filter(function (x) { return x != ""; }).join("_") + "_" + index;
    };
    Images.data = {
        sprites: []
    };
})(Images || (Images = {}));


/***/ }),

/***/ 208:
/*!********************************************************************!*\
  !*** ./src/games/mnemonics/dossier/components/dossierComponent.ts ***!
  \********************************************************************/
/*! exports provided: DossierComponent */
/*! exports used: DossierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DossierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_behaviors_highlightBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/highlightBehavior */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_GraphicsImg__ = __webpack_require__(/*! core/ui/controls/GraphicsImg */ 155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_utils_arrays__ = __webpack_require__(/*! core/utils/arrays */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_utils_strings__ = __webpack_require__(/*! core/utils/strings */ 67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_games_mnemonics_dossier_assets__ = __webpack_require__(/*! games/mnemonics/dossier/assets */ 173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_games_mnemonics_dossier_components_personComponent__ = __webpack_require__(/*! games/mnemonics/dossier/components/personComponent */ 209);














var DossierComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](DossierComponent, _super);
    function DossierComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            podloshka: { x: 5 },
            lineSize: { width: 592 },
            lineWidth: 2,
            lineOffset: { y: -8 },
            infoOffset: 200,
            marginLine: { x: 5 },
            person: { y: 40 },
            dossier: { y: 570 },
        });
        _this.podloshka = _this.addImage(__WEBPACK_IMPORTED_MODULE_12_games_mnemonics_dossier_assets__["b" /* Images */].podloshka).anchorCenterX().setPos(_this.positions.podloshka);
        _this.person = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_13_games_mnemonics_dossier_components_personComponent__["a" /* PersonComponent */])).setPos(_this.positions.person).anchorCenterX();
        _this.dossierPartsGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__["a" /* Control */]()).setPos(_this.positions.dossier).anchorCenter();
        return _this;
    }
    DossierComponent.prototype.hightlightPart = function (part) {
        this.partNames.forEach(function (text) {
            text.getBehavior(__WEBPACK_IMPORTED_MODULE_4_core_ui_controls_behaviors_highlightBehavior__["a" /* HightlightBehavior */]).enableHighlight(text.tag == part);
        });
    };
    DossierComponent.prototype.hideParts = function () {
        this.person.setProps({ person: this.props, isQuestion: true });
        this.parts.forEach(function (x) { return x.visible = false; });
    };
    DossierComponent.prototype.showPart = function (part) {
        __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__["a" /* ControlUtl */].findByTag(this.parts, part).visible = true;
    };
    DossierComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.person.setProps({ person: this.props, isQuestion: false });
        this.dossierPartsGroup.removeAll(true);
        var _a = __WEBPACK_IMPORTED_MODULE_9_core_utils_arrays__["a" /* Arrays */].unzip3(this.props.dossierParts.map(function (_a) {
            var part = _a[0], value = _a[1];
            var group = _this.dossierPartsGroup.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__["a" /* Control */]());
            var info = group.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_txt__["a" /* Txt */](__WEBPACK_IMPORTED_MODULE_10_core_utils_strings__["a" /* Strings */].splitByLinesAndJoin(value, 20), __WEBPACK_IMPORTED_MODULE_12_games_mnemonics_dossier_assets__["a" /* Fonts */].part))
                .fluentUpdate(function (x) { return x.tag = part; }).updatePos(_this.positions.infoOffset, 0);
            var name = group.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_txt__["a" /* Txt */](_this.translate(part), __WEBPACK_IMPORTED_MODULE_12_games_mnemonics_dossier_assets__["a" /* Fonts */].partName))
                .addBehavior(new __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_behaviors_highlightBehavior__["a" /* HightlightBehavior */]())
                .fluentUpdate(function (x) { return x.tag = part; }).anchorOneY().updatePos(0, info.height);
            var line = new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_GraphicsImg__["b" /* GraphicsImg */](function (g) {
                g.lineStyle(_this.positions.lineWidth, __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["a" /* CoreColorNumbers */].black, 0.4);
                g.lineTo(_this.positions.lineSize.width, 0);
            });
            group.add(line).updatePos(0, info.height + _this.positions.lineOffset.y);
            // group.add(this.makeImage(Images.line).updatePos(0, info.height))
            return Object(__WEBPACK_IMPORTED_MODULE_11_core_utils_tuples__["a" /* tuple */])(group, name, info);
        })), groups = _a[0], partNames = _a[1], parts = _a[2];
        this.partNames = partNames;
        this.parts = parts;
        __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].tableColumn(groups, this.positions.marginLine);
        this.dossierPartsGroup.updatePivot();
    };
    return DossierComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 209:
/*!*******************************************************************!*\
  !*** ./src/games/mnemonics/dossier/components/personComponent.ts ***!
  \*******************************************************************/
/*! exports provided: PersonComponent */
/*! exports used: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_mnemonics_dossier_assets__ = __webpack_require__(/*! games/mnemonics/dossier/assets */ 173);





var PersonComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](PersonComponent, _super);
    function PersonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({});
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_4_games_mnemonics_dossier_assets__["b" /* Images */].empty);
        _this.group = _this.add(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_control__["a" /* Control */]());
        return _this;
    }
    PersonComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.group.removeAll(true);
        var person = this.props.person;
        var parts = this.props.isQuestion && person.partsOnQuestion.length > 0
            ? person.partsOnQuestion : person.parts;
        parts.forEach(function (_a) {
            var feature = _a[0], index = _a[1];
            _this.group.add(_this.makeImage(__WEBPACK_IMPORTED_MODULE_4_games_mnemonics_dossier_assets__["b" /* Images */].part(feature, person.isMan, person.hairColor, index)));
        });
        this.group.refreshCacheAsBitmap();
        this.updatePivot();
    };
    return PersonComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 243:
/*!*****************************************************************!*\
  !*** ./src/games/mnemonics/dossier/components/mainComponent.ts ***!
  \*****************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_video__ = __webpack_require__(/*! core/ui/controls/video */ 244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_mnemonics_dossier_components_rememberComponent__ = __webpack_require__(/*! games/mnemonics/dossier/components/rememberComponent */ 245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets__ = __webpack_require__(/*! ../assets */ 173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__questionComponent__ = __webpack_require__(/*! ./questionComponent */ 246);










var durations = {
    intro: 800
};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            statusOffset: -200,
            margin: { x: 10 }
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].bi({
            question: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 180 },
            remember: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 200 },
            btn: { x: 800, y: 1000 },
        }, {
            question: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 140 },
            remember: { x: __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 220 },
            btn: { x: 800, y: 1000 },
        });
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_8__assets__["b" /* Images */].bg);
        _this.remember = _this.add(_this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_7_games_mnemonics_dossier_components_rememberComponent__["a" /* RememberComponent */], { onComplete: function () { return _this.onComplete(); } }))
            .setBiPos(_this.biPositions.remember)
            .fluentUpdate(function (x) { return x.visible = false; });
        _this.question = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_9__questionComponent__["a" /* QuestionComponent */])).setBiPos(_this.biPositions.question)
            .fluentUpdate(function (x) { return x.visible = false; });
        return _this;
    }
    MainComponent.prototype.updateState = function (rememberState) {
        this.remember.visible = rememberState;
        this.question.visible = !rememberState;
        if (this.tutorial) {
            this.tutorial.setProps(this.translate(rememberState ? __WEBPACK_IMPORTED_MODULE_8__assets__["d" /* Translations */].tutor1 : __WEBPACK_IMPORTED_MODULE_8__assets__["d" /* Translations */].tutor2));
        }
    };
    MainComponent.prototype.onComplete = function () {
        this.updateState(false);
    };
    MainComponent.prototype.introAnimation = function () {
        var _this = this;
        var video = this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_video__["a" /* Video */](this.gameKey("intro"), __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].height * 0.5)).anchorCenter()
            .updatePos(__WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].w2, __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].h2);
        return {
            start: function () {
                _this.playSound("bg", true);
                video.play();
            },
            onComplete: __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__["a" /* Signals */].bind(this.delay(2000), function () {
                var signal = __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].show(video, false).onComplete;
                signal.addOnce(function () {
                    video.destroy();
                });
                return signal;
            })
        };
        // return {
        //   start: () => {
        //   },
        //   onComplete: Signals.memorize()
        // }
    };
    // introAnimation(): { start: () => void; onComplete: Phaser.Signal } {
    //   const intro = this.add(this.createComponent(IntroComponent))
    //   return {
    //     start: () => {
    //       intro.start()
    //     },
    //     onComplete: Signals.bind(this.delay(durations.intro), () => {
    //       return ControlUtl.hideAndDestroy(intro)
    //     })
    //   }
    // }
    MainComponent.prototype.onInit = function () {
        this.introOptions.runOnNewTaskAfter = true;
        this.statusOptions.offset = this.positions.statusOffset;
        this.statusOptions.waitCompleteBeforeNewTask = true;
        this.startIntro();
        if (this.isTutorial) {
            this.tutorial = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */]).make());
        }
    };
    MainComponent.prototype.onNewTask = function (task) {
        this.updateState(true);
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 244:
/*!***************************************!*\
  !*** ./src/core/ui/controls/video.ts ***!
  \***************************************/
/*! exports provided: Video */
/*! exports used: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_images__ = __webpack_require__(/*! core/assets/images */ 46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_instances__ = __webpack_require__(/*! core/services/instances */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);





var Video = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Video, _super);
    function Video(key, height) {
        var _this = _super.call(this) || this;
        _this.video = __WEBPACK_IMPORTED_MODULE_2_core_services_instances__["b" /* phaserVideoService */].get(key);
        var scale = height / _this.video.height;
        _this.videoImg = _this.add(_this.video.addToWorld(0, 0, 0, 0, scale, scale));
        _this.onDestroy.addOnce(function () {
            _this.video.video.currentTime = 0;
        });
        return _this;
    }
    Video.prototype.showPlayBtn = function () {
        var _this = this;
        this.add(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__["c" /* ImageBtn */]("", __WEBPACK_IMPORTED_MODULE_1_core_assets_images__["a" /* CoreImages */].btn_play, function (btn) {
            btn.destroy();
            _this.video.play();
        })).anchorCenter().setPos(this.center());
    };
    Video.prototype.play = function () {
        var _this = this;
        this.video.play();
        this.delay(100).addOnce(function () {
            if (_this.video.video.paused) {
                _this.showPlayBtn();
            }
        });
    };
    return Video;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_controls_control__["a" /* Control */]));



/***/ }),

/***/ 245:
/*!*********************************************************************!*\
  !*** ./src/games/mnemonics/dossier/components/rememberComponent.ts ***!
  \*********************************************************************/
/*! exports provided: RememberComponent */
/*! exports used: RememberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RememberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_behaviors_highlightBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/highlightBehavior */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_GraphicsImg__ = __webpack_require__(/*! core/ui/controls/GraphicsImg */ 155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_mnemonics_dossier_components_dossierComponent__ = __webpack_require__(/*! games/mnemonics/dossier/components/dossierComponent */ 208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_mnemonics_dossier_components_personComponent__ = __webpack_require__(/*! games/mnemonics/dossier/components/personComponent */ 209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets__ = __webpack_require__(/*! ../assets */ 173);










var durations = {};
var RememberComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](RememberComponent, _super);
    function RememberComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
            margin: { x: 120, y: 20 }
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].bi({
            btn: { y: 910 },
            dossier: { x: 5, y: 460 },
        }, {
            btn: { y: 966 },
            dossier: { x: 5, y: 530 },
        });
        _this.peopleGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__["a" /* Control */]())
            .fluentUpdate(function (x) { return x.symmetricScale = 0.4; })
            .anchorCenter().fluentUpdate(function (x) { return x.visible = !_this.isTutorial; });
        _this.dossier = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_7_games_mnemonics_dossier_components_dossierComponent__["a" /* DossierComponent */])).anchorCenter().setBiPos(_this.biPositions.dossier);
        _this.rememberBtn = _this.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_btn__["a" /* Btn */](_this.translate(__WEBPACK_IMPORTED_MODULE_9__assets__["d" /* Translations */].remember), function () { return _this.onRemember(); }, undefined, new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_GraphicsImg__["a" /* BtnDefaultImg */]({
            color: __WEBPACK_IMPORTED_MODULE_9__assets__["a" /* Fonts */].yellow,
        }))).anchorCenter().setBiPos(_this.biPositions.btn);
        _this.index = 0;
        return _this;
    }
    RememberComponent.prototype.onRemember = function () {
        this.index += 1;
        this.updateDossier();
    };
    RememberComponent.prototype.onInit = function () {
        var _this = this;
        this.onOrientationChange(function () { return _this.updatePositions(); });
    };
    RememberComponent.prototype.updateDossier = function () {
        var _this = this;
        var task = this.getCurrentTask();
        var person = task.people[this.index];
        this.people.forEach(function (p, i) { return p.alpha = i == _this.index ? 1 : 0.3; });
        if (person) {
            this.dossier.setProps(person);
        }
        else {
            this.props.onComplete();
        }
    };
    RememberComponent.prototype.updatePositions = function () {
        var colCount = this.isPortrait ? 4 : 8;
        __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.people, colCount, this.positions.margin);
        this.peopleGroup.updatePivot();
        this.dossier.updatePivot();
    };
    RememberComponent.prototype.onNewTask = function (task) {
        var _this = this;
        this.peopleGroup.removeAll(true);
        this.index = 0;
        this.people = task.people.map(function (person) { return _this.peopleGroup.add(_this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_8_games_mnemonics_dossier_components_personComponent__["a" /* PersonComponent */], {
            person: person,
            isQuestion: false
        })).addBehavior(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_behaviors_highlightBehavior__["a" /* HightlightBehavior */]()); });
        this.updateDossier();
        this.updatePositions();
    };
    return RememberComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 246:
/*!*********************************************************************!*\
  !*** ./src/games/mnemonics/dossier/components/questionComponent.ts ***!
  \*********************************************************************/
/*! exports provided: QuestionComponent */
/*! exports used: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_utils_strings__ = __webpack_require__(/*! core/utils/strings */ 67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_mnemonics_dossier_assets__ = __webpack_require__(/*! games/mnemonics/dossier/assets */ 173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_games_mnemonics_dossier_components_dossierComponent__ = __webpack_require__(/*! games/mnemonics/dossier/components/dossierComponent */ 208);










var durations = {
    delay: 500
};
var QuestionComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](QuestionComponent, _super);
    function QuestionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            margin: { x: 10 },
            tutorialOffset: 60,
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
            answer: { y: 880 },
        }, {
            answer: { y: 930 },
        });
        _this.text = _this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_txt__["a" /* Txt */](""));
        _this.dossierGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__["a" /* Control */]()).updatePos(0, _this.isTutorial ? _this.positions.tutorialOffset : 0);
        _this.answersGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__["a" /* Control */]()).anchorCenter().setBiPos(_this.biPositions.answer);
        return _this;
    }
    QuestionComponent.prototype.updatePositions = function () {
        var colCount = this.isPortrait ? 2 : 4;
        __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.answers, colCount, this.positions.margin);
        this.answersGroup.updatePivot();
    };
    QuestionComponent.prototype.showQuestion = function (question) {
        var _this = this;
        var dossier = this.dossierList[question.personIndex];
        dossier.visible = true;
        dossier.hightlightPart(question.dossierPart);
        this.answersGroup.removeAll(true);
        this.answers = question.answerOptions.map(function (answer, i) {
            var btn = _this.answersGroup.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_btn__["c" /* ImageBtn */](__WEBPACK_IMPORTED_MODULE_7_core_utils_strings__["a" /* Strings */].splitByLinesAndJoin(answer, 15), _this.gameKey(__WEBPACK_IMPORTED_MODULE_8_games_mnemonics_dossier_assets__["b" /* Images */].plashka(i)), function () {
            }, __WEBPACK_IMPORTED_MODULE_8_games_mnemonics_dossier_assets__["a" /* Fonts */].answer));
            return _this.addAnswerBehavior(btn, answer, { location: "top", dark: true });
        });
        this.updatePositions();
        this.answersAreReady();
    };
    QuestionComponent.prototype.onAnswer = function (answer) {
        var _this = this;
        var task = answer.levelTask.task;
        var index = answer.correctAnswerIndex || 0;
        var prevQuestion = task.questions[index];
        this.dossierList[prevQuestion.personIndex].showPart(prevQuestion.dossierPart);
        if (answer.status == __WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].CorrectPartial) {
            this.disableInputOn(this.delay(durations.delay)).addOnce(function () {
                _this.dossierList[prevQuestion.personIndex].visible = false;
                var question = task.questions[index + 1];
                _this.showQuestion(question);
            });
        }
    };
    QuestionComponent.prototype.onNewTask = function (task) {
        var _this = this;
        this.dossierGroup.removeAll(true);
        this.dossierList = task.people.map(function (person) {
            return _this.dossierGroup.add(_this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_9_games_mnemonics_dossier_components_dossierComponent__["a" /* DossierComponent */], person)).fluentUpdate(function (x) {
                x.hideParts();
                x.visible = false;
            });
        });
        this.showQuestion(task.questions[0]);
    };
    QuestionComponent.prototype.onInit = function () {
        var _this = this;
        this.onOrientationChange(function () { return _this.updatePositions(); });
    };
    return QuestionComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 247:
/*!***********************************************!*\
  !*** ./src/games/mnemonics/dossier/levels.ts ***!
  \***********************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);

function level(peopleCount, dossierPartCount, sameGender, randomOrder, hideFeature) {
    return { peopleCount: peopleCount, dossierPartCount: dossierPartCount, sameGender: sameGender, randomOrder: randomOrder, hideFeature: hideFeature };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])([
    level(2, 1, false, false, false),
    level(3, 1, false, false, false),
    level(2, 2, false, false, false),
    level(2, 3, false, false, false),
    level(3, 2, true, false, false),
    level(4, 2, false, false, false),
    level(3, 3, false, false, false),
    level(3, 3, true, false, false),
    level(3, 3, false, true, false),
    level(4, 3, false, false, false),
    level(5, 3, true, false, false),
    level(5, 4, false, false, false),
    level(5, 4, false, true, false),
    level(6, 4, false, false, true),
    level(6, 4, true, false, true),
    level(7, 4, false, true, true),
    level(7, 4, true, true, true),
    level(8, 4, false, false, true),
    level(8, 4, true, false, true),
    level(8, 4, false, true, true),
    level(8, 4, true, true, true),
]);


/***/ }),

/***/ 248:
/*!**********************************************!*\
  !*** ./src/games/mnemonics/dossier/logic.ts ***!
  \**********************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_mnemonics_dossier_words__ = __webpack_require__(/*! games/mnemonics/dossier/words */ 249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);








var answerOptionCount = 4;
var allFeatures = ["head", "hair", "clothes", "beard", "hat", "glass"];
var nameKey = "personname";
var maxFeatureCount = {
    man: {
        beard: 24,
        clothes: 7,
        hat: 7,
        head: 8,
        hair: 12,
        glass: 6
    },
    woman: {
        beard: 0,
        clothes: 9,
        hat: 5,
        head: 8,
        hair: 12,
        glass: 6
    }
};
var mainFeatures = ["head", "clothes", "hair"];
var genderAdditionalFeatures = {
    man: ["hat", "beard"],
    woman: ["hat", "glass"]
};
var allHairColors = ["black", "brown", "gray", "orange", "white"];
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_2_core_utils__["e" /* RandomGenerator */]();
        _this.words = __WEBPACK_IMPORTED_MODULE_6_games_mnemonics_dossier_words__["a" /* DossierWords */].getWords();
        _this.wordSeqList = __WEBPACK_IMPORTED_MODULE_7_lodash__["mapValues"](_this.words, function () { return new __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__["b" /* UniqSeq */](0); });
        _this.featureSeqList = __WEBPACK_IMPORTED_MODULE_7_lodash__["fromPairs"](["man", "woman"].map(function (manKey) {
            return Object(__WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__["a" /* tuple */])(manKey, __WEBPACK_IMPORTED_MODULE_7_lodash__["fromPairs"](allFeatures.map(function (feature) {
                return Object(__WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__["a" /* tuple */])(feature, new __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__["b" /* UniqSeq */](maxFeatureCount[manKey][feature]));
            })));
        }));
        _this.colorSeq = new __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__["b" /* UniqSeq */](0);
        return _this;
    }
    Logic.prototype.fullPartName = function (x, isMan) {
        return x + (x == nameKey ? (isMan ? "_man" : "_woman") : "");
    };
    Logic.prototype.createPerson = function (level, isMan, additionalPart) {
        var _this = this;
        var manKey = isMan ? "man" : "woman";
        var allAdditionalFeatures = genderAdditionalFeatures[manKey];
        var additionalFeatureCount = this.rng.int(allAdditionalFeatures.length, 1);
        var additionalFeatures = this.rng.subset(allAdditionalFeatures, additionalFeatureCount);
        var features = mainFeatures.concat(additionalFeatures);
        var parts = features.map(function (feature) {
            return Object(__WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__["a" /* tuple */])(feature, _this.featureSeqList[manKey][feature].next());
        });
        var partsOnQuestion = level.hideFeature
            ? parts.filter(function (_a) {
                var feature = _a[0];
                return __WEBPACK_IMPORTED_MODULE_7_lodash__["includes"](mainFeatures, feature);
            })
            : [];
        var additionalParts = level.dossierPartCount - __WEBPACK_IMPORTED_MODULE_6_games_mnemonics_dossier_words__["a" /* DossierWords */].allDossierParts.length > 0
            ? [additionalPart] : [];
        this.rng.subset(__WEBPACK_IMPORTED_MODULE_6_games_mnemonics_dossier_words__["a" /* DossierWords */].additionalDossierParts, level.dossierPartCount - __WEBPACK_IMPORTED_MODULE_6_games_mnemonics_dossier_words__["a" /* DossierWords */].allDossierParts.length);
        var allDossierParts = __WEBPACK_IMPORTED_MODULE_7_lodash__["take"](__WEBPACK_IMPORTED_MODULE_6_games_mnemonics_dossier_words__["a" /* DossierWords */].allDossierParts, level.dossierPartCount)
            .concat(additionalParts);
        var dossierParts = allDossierParts.map(function (x) {
            var name = _this.fullPartName(x, isMan);
            return Object(__WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__["a" /* tuple */])(x, _this.wordSeqList[name].nextFrom(_this.words[name]));
        });
        var hairColor = this.colorSeq.nextFrom(allHairColors);
        return { parts: parts, partsOnQuestion: partsOnQuestion, dossierParts: dossierParts, hairColor: hairColor, isMan: isMan };
    };
    Logic.prototype.nextTask = function (level) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_lodash__["forEach"](this.featureSeqList, function (x) { return __WEBPACK_IMPORTED_MODULE_7_lodash__["forEach"](x, function (y) { return y.reset(); }); });
        var isMan = this.rng.bool();
        var additionalPart = this.rng.sample(__WEBPACK_IMPORTED_MODULE_6_games_mnemonics_dossier_words__["a" /* DossierWords */].additionalDossierParts);
        var people = __WEBPACK_IMPORTED_MODULE_7_lodash__["range"](level.peopleCount).map(function (i) {
            return _this.createPerson(level, level.sameGender ? isMan : __WEBPACK_IMPORTED_MODULE_4_core_utils_numbers__["a" /* Numbers */].odd(i), additionalPart);
        });
        var dossierParts = __WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].group(__WEBPACK_IMPORTED_MODULE_7_lodash__["flatMap"](people, function (person) { return person.dossierParts; }));
        var allQuestions = __WEBPACK_IMPORTED_MODULE_7_lodash__["map"](people, function (person, personIndex) {
            var shuffle = function (x) { return level.randomOrder ? _this.rng.shuffle(x) : x; };
            return shuffle(person.dossierParts).map(function (_a) {
                var dossierPart = _a[0], answer = _a[1];
                var allParts = dossierParts[dossierPart];
                var otherParts = dossierPart == nameKey
                    ? []
                    : _this.rng.subset(allParts.filter(function (x) { return x != answer; }), answerOptionCount - 1);
                var otherOptions = _this.rng.subset(__WEBPACK_IMPORTED_MODULE_7_lodash__["difference"](_this.words[_this.fullPartName(dossierPart, person.isMan)], allParts), answerOptionCount - otherParts.length - 1);
                var answerOptions = _this.rng.shuffle([answer].concat(otherParts, otherOptions));
                return {
                    dossierPart: dossierPart,
                    personIndex: personIndex,
                    answer: answer,
                    answerOptions: answerOptions
                };
            });
        });
        var flatten = level.randomOrder ? __WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].flattenTranspose : __WEBPACK_IMPORTED_MODULE_7_lodash__["flatten"];
        var questions = flatten(this.rng.shuffle(allQuestions));
        var answers = { seq: questions.map(function (x) { return x.answer; }) };
        var task = {
            people: people,
            questions: questions,
            answers: answers
        };
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ }),

/***/ 249:
/*!**********************************************!*\
  !*** ./src/games/mnemonics/dossier/words.ts ***!
  \**********************************************/
/*! exports provided: DossierWords */
/*! exports used: DossierWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DossierWords; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__ = __webpack_require__(/*! core/logic/cnst */ 36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_instances__ = __webpack_require__(/*! core/services/instances */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils_strings__ = __webpack_require__(/*! core/utils/strings */ 67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wordsRu__ = __webpack_require__(/*! ./wordsRu */ 250);





var wordsDB = {
    ru: __WEBPACK_IMPORTED_MODULE_4__wordsRu__["a" /* default */]
};
var DossierWords;
(function (DossierWords) {
    DossierWords.maxLength2line = 20;
    DossierWords.maxLength3line = 15;
    DossierWords.allDossierParts = ["personname", "profession", "hobby"];
    DossierWords.additionalDossierParts = ["food", "dream", "pet"];
    function fix(key, strings) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["uniq"](strings).filter(function (x) {
            return key == "profession" ? x.length <= DossierWords.maxLength2line :
                (__WEBPACK_IMPORTED_MODULE_2_core_utils_strings__["a" /* Strings */].splitByLines(x, DossierWords.maxLength2line).length <= 2 &&
                    __WEBPACK_IMPORTED_MODULE_2_core_utils_strings__["a" /* Strings */].splitByLines(x, DossierWords.maxLength3line).length <= 3);
        });
    }
    function getWords() {
        var localeWords = wordsDB[__WEBPACK_IMPORTED_MODULE_1_core_services_instances__["c" /* settingService */].settings.locale] || wordsDB[__WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__["a" /* Cnst */].defaultLocale];
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["mapValues"](localeWords, function (v, k) { return fix(k, __WEBPACK_IMPORTED_MODULE_2_core_utils_strings__["a" /* Strings */].splitTrim(v)); });
    }
    DossierWords.getWords = getWords;
})(DossierWords || (DossierWords = {}));


/***/ }),

/***/ 250:
/*!************************************************!*\
  !*** ./src/games/mnemonics/dossier/wordsRu.ts ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    "personname_man": "Александр,Саша,Андриан,Арнольд,Артём,Алексей,Алёша,Лёша,Альфред,Анатолий,Толя,Артемий,Адам,Алан,Альберт,Антон,Аркадий,Арсений,Артур,Афанасий,Адонис,Алевтин,Андрей,Антоний,Аполлон,Архип,Артур,Богдан,Борис,Боря,Бруно,Борислав,Бернард,Варлам,Владимир,Володя,Вова,Вячеслав,Вадим,Виктор,Витя,Влад,Владислав,Валентин,Вениамин,Веня,Валерий,Валера,Вильям,Виталий,Гавриил,Гайдар,Габриель,Георгий,Гоша,Глеб,Гарри,Генри,Григорий,Гриша,Геннадий,Гена,Давид,Джон,Данила,Дмитрий,Дима,Денис,Добрыня,Дионис,Евгений,Женя,Егор,Елисей,Захар,Икар,Ипполит,Игорь,Игнат,Иннокентий,Иван,Ваня,Иосиф,Илья,Карен,Карл,Камиль,Константин,Костя,Кузьма,Кузя,Кирилл,Кристоф,Клим,Лев,Леон,Леонард,Людвиг,Леонид,Лёня,Леопольд,Лео,Макс,Максим,Марк,Макар,Марат,Михаил,Миша,Матвей,Мефодий,Николай,Коля,Никита,Олег,Павел,Паша,Пётр,Петя,Прохор,Рафаэль,Родион,Ричард,Рональд,Ренат,Роланд,Роман,Рома,Руслан,Роберт,Савелий,Сава,Семён,Слава,Степан,Стёпа,Стефан,Сергей,Серёжа,Станислав,Стас,Тимофей,Тимур,Томас,Фёдор,Фома,Филипп,Чарльз,Эдвард,Эдмонд,Эдуард,Эдгар,Эрнест,Эдмунд,Эрик,Юрий,Юра,Ярослав",
    "personname_woman": "Аврора,Агата,Аглая,Аделина,Адель,Адриана,Аксинья,Алевтина,Александра,Алена,Лена,Елена,Алина,Алиса,Алла,Альбина,Аля,Амелия,Анастасия,Настя,Ангелина,Анжела,Анжелика,Анна,Аня,Антонина,Тоня,Анфиса,Полина,Арина,Ассоль,Ася,Белла,Берта,Валентина,Валя,Валерия,Лера,Варвара,Василина,Василиса,Вера,Вероника,Виктория,Вика,Галина,Галя,Глория,Грета,Даниэла,Дарина,Дарья,Даша,Дебора,Дженнифер,Джессика,Джулия,Диана,Дина,Дора,Ева,Евгения,Женя,Екатерина,Катя,Елизавета,Лиза,Есения,Жанна,Жасмин,Злата,Зоя,Изабелла,Изольда,Илона,Инга,Инна,Ирина,Ира,Карина,Каролина,Кира,Клара,Кристина,Ксения,Ксюша,Лана,Лара,Лариса,Лаура,Леся,Лидия,Лилия,Лина,Линда,Лия,Лола,Лолита,Лора,Луиза,Людмила,Майя,Маргарита,Марго,Рита,Марина,Мария,Маша,Марта,Маруся,Марфа,Матильда,Милана,Мира,Мирослава,Моника,Мэри,Надежда,Надя,Наталья,Наташа,Нелли,Ника,Николь,Нина,Нора,Оксана,Олеся,Оливия,Ольга,Оля,Офелия,Пелагея,Раиса,Регина,Рема,Рената,Римма,Роза,Роксана,Сабина,Сабрина,Самира,Сандра,Сара,Светлана,Света,Снежана,Соня,София,Таисия,Тамара,Татьяна,Таня,Тереза,Тина,Ульяна,Фаина,Фелиция,Хилари,Хлоя,Шарлотта,Шелли,Шерил,Эвелина,Элеонора,Элиза,Элла,Эля,Эмма,Эмили,Эрика,Юлия,Юля,Юна,Яна,Ярослава",
    "profession": "Event-менеджер,SEO-оптимизатор,SMM-менеджер,Авиадиспетчер,Авиационный техник,Судоремонтник,Автомеханик,Агроинженер,Агроном,Фермер,Адвокат,Администратор БД,Актер,Актер театра,Оперный актер,Актер балета,Арт-директор,Архитектор ПО,Архитектор,Промышленный дизайнер,Аудитор,Банковский служащий,Бармен,Банкир,Бизнес-тренер,Биоинженер,Биоинформатик,Биолог,Почвовед,Биохимик,Микробиолог,Бренд-менеджер,Брокер,Трейдер,Бухгалтер,Веб-дизайнер,Верстальщик,Ветеринарный врач,Военнослужащий,Врач общей практики,Семейный доктор,Врач скорой помощи,Хирург,Врач-диагност,Врач-стоматолог,Врач-терапевт,Гейм-дизайнер,Генетик,Географ,Метеоролог,Геолог,Горный инженер,Гид,Экскурсовод,Переводчик,Градостроитель,Графический дизайнер,Аниматор,Декоратор,Дизайнер,Модельер,Делопроизводитель,Дефектолог,Дизайнер-макетчик,Дипломат ,Дошкольный педагог,Воспитатель,Журналист,Звукорежиссер,Зоолог,Кинолог,Инженер по качеству,Геодезист,Инженер-испытатель,Космонавт-испытатель,Инженер-конструктор,Инженер-металлург,Инженер-проектировщик,Инженер-робототехник,Инженер-строитель,Инженер-технолог,Инженер-химик,Инженер-эколог,Инженер-электронщик,Инженер-энергетик,Инструктор по туризму,Историк,Искусствовед,Культуролог,Каскадер,Постановщик трюков,Продавец,Конфликтолог,Копирайтер,Корректор,Косметолог,Коуч,Кризис-менеджер,Риск-менеджер,Ландшафтный дизайнер,Логист,Логопед,Маркетолог,Математик,Машинист электропоезда,Менеджер,Менеджер по персоналу,Менеджер по продажам,Аккаунт-менеджер,Менеджер по рекламе,Механик автосервиса,Налоговый инспектор,Нанотехнолог,Нейробиолог,Нейрофизиолог,Нотариус,Оператор ,Педагог,Переводчик-филолог,Печатник,Пилот,Штурман,Судоводитель,Повар-кондитер,Политолог,Философ,Программист,Продюсер,Проектировщик интерфейсов,Проектный менеджер,Предприниматель,Психолог-консультант,Редактор,Режиссер,Риелтор,Секретарь-референт,Сервисный инженер,Сетевой врач,Системный администратор,Системный аналитик,Следователь,Социальный работник,Социолог-статистик,Спасатель МЧС,Охранник,Стилист,Имиджмейкер,Парикмахер,Визажист,Сценарист,Таможенник,Телерадиоведущий,Телеведущий,Радиоведущий,Тестировщик ПО,Технический писатель,Технолог,Биотехник,Товаровед,Тренер,Фармацевт,Провизор,Физик,Биофизик,Финансовый аналитик,Финансовый консультант,Флорист,Декоратор,Цветовод,Фотограф,Видеооператор,Художник,Эколог,Аналитик,Экономист,Риелтор,Электрик,Ювелир,Юрист,Администратор гостиницы,Администратор ресторана,Администратор сайта,Архитектор,Астроном,Визажист,Востоковед,Главный бухгалтер,Главный редактор,Гример,Дегустатор,Грумер,Диетолог,Диджей,Дипломат,Зубной техник,Имиджмейкер,Инструктор по вождению,Картограф,Киновед,Кондитер,Корректор,Косметолог,Контент-менеджер,Криминалист,Критик,Лоббист,Логист,Массажист,Мастер по маникюру,Менеджер по развитию,Мерчендайзер,Менеджер проекта,Налоговый инспектор,Модельер,Мультипликатор,Налоговый консультант,Океанолог,Оператор ПК,Ортопед,Парикмахер,Пожарный,Политолог,Полицейский,Пресс-атташе,Провизор,Помощник бухгалтера,Прокурор,Редактор книг,Реабилитолог,Рекламный агент,Рекрутер,Ресторатор,Секретарь-референт,Риелтор,Сварщик,Следователь,Спичрайтер,Стилист,Страховой агент,Судья,Таможенник,Финансовый директор,Финансовый менеджер,Шеф-повар,Хореограф,Издатель,Диктор,Иммунолог,Кардиолог,Фельдшер,Ректор,Почтальон,Детектив",
    "hobby": "Играет в настольный теннис,Увлекается фотографией,Любит слушать музыку,Играет на электрогитаре,Играет на акустической гитаре,Пробует разные виды сыра,Катается на велосипеде,Рисует красками,Ходит в танцевальную школу,Играет в шахматы,Любит гулять с собакой,Играет на саксофоне,Играет в театре,Ловит рыбу,Любит рыбачить,Любит ходить на рыбалку,Бегает по утрам,Участвует в соревнованиях,Играет на скрипке,Поет в караоке,Любит путешествовать,Смотрит телевизор,Следит за новостями,Играет в компьютерные игры,Собирает пазлы,Катается на скейтборде,Играет в большой теннис,Ходит в тренажерный зал,Занимается тяжелой атлетикой,Катается на роликах,Увлекается фокусами,Занимается фитнесом,Ходит в солярий,Подтягивается на турнике,Бегает по вечерам,Ходит в лес за грибами,Посещает фотовыставки,Изучает каллиграфию,Коллекционирует марки,Рисует на воде,Коллекционирует монеты,Занимается резьбой по книгам,Занимается резьбой по дереву,Участвует в реконструкциях,Занимается садоводством,Увлекается чтением,Медитирует,Увлекается медитацией,Ведет персональный блог,Занимается командным спортом,Проходит онлайн-курсы,Увлекается изучением языков,Делает оригами,Занимается карате,Ходит в бассейн,Играет в бильярд,Играет в пейнтбол,Занимается дайвингом,Изучает программирование,Играет в настольные игры,Катается на лыжах,Играет в футбол,Наблюдает за звездами,Играет в пляжный волейбол,Играет на барабанах,Играет на пианино,Занимается йогой,Любит пешие прогулки,Занимается плаванием,Играет в боулинг,Играет в гольф,Занимается боксом,Ходит в кинотеатр,Играет в стритбол,Пишет стихи,Пишет прозу,Занимается программированием,Прыгает с парашютом,Прыгает с тарзанкой,Увлекается туризмом,Наблюдает за птицами,Увлекается археологией,Создает музыку на компьютере,Занимается видеосъемкой,Любит есть мороженое,Занимается созданием сайтов,Любит вязание и вышивку,Занимается резьбой по дереву,Увлекается выжиганием по дереву,Изучает кухни разных стран,Коллекционирует открытки,Коллекционирует календари,Занимается виноделием,Увлекается ландшафтным дизайном,Подрабатывает флористом,Занимается разведением рыбок,Любит играть в шашки,Составляет кроссворды,Участвует в соревнованиях по шахматам,Занимается изучением наук,Изучает историю,Увлекается астрологией,Придумывает различные тесты,Занимается гаданием на картах,Обожает журналистику,Изучает эльфийский язык,Осваивает диетическую кулинарию,Разрабатывает оригинальные рецепты,Создает развивающие игрушки,Устраивает онлайн-семинары,Посещает курсы самообразования,Устраивает мастер-классы,Держит дома крокодила,Увлекается бодибилдингом,Занимается бегом,Занимается аэробикой,Ходит на рукопашный бой,Любит стрелять из арбалета,Занимается стрельбой из лука,Увлекается бальными танцами,Занимается восточными танцами,Обожает стритрейсинг,Катается на горном велосипеде,Любит сплавы по рекам,Устраивает файер-шоу,Занимается серфингом,Играет в сокс,Занимается верховой ездой,Катается на квадроцикле,Ходит на тюбинговую горку,Рисует граффити,Собирает лесные ягоды,Занимается фехтованием,Играет в городки,Играет в гольф,Играет на синтезаторе,Занимается макраме,Изготавливает гобелены,Увлекается плетением из лозы,Занимается росписью по стеклу,Увлекается росписью по ткани,Вырезает шкатулки из дерева,Увлекается бисероплетением,Создает искусственные цветы,Занимается изготовлением кукол,Создает венецианские маски,Вяжет на спицах и крючком,Производит украшения,Производит изделия из кожи,Пишет статьи на заказ,Играет в маджонг,Разгадывает сканворды,Любит разгадывать судоку,Занимается аэрографией,Тюнингует машины,Проектирует мебель,Создает видеоролики,Придумывает видеоклипы,Играет в любительском театре,Общается в интернете,Обожает аниме,Смотрит фильмы по вечерам,Изучает хиромантию,Собирает модели самолетов,Создает костюмы для танцев,Помогает в реставрации храмов,Создает настольные игры,Увлекается фотоохотой,Набивает татуировки,Коллекционирует фантики,Коллекционирует магниты,Собирает гербарии,Коллекционирует бабочек,Коллекционирует наклейки,Записывает сновидения,Ведет личный дневник,Коллекционирует пуговицы,Делает аромасвечи,Коллекционирует автографы,Занимается боевыми искусствами,Изучает кунг-фу,Ухаживает за своей собакой,Занимается верховой ездой,Изучает литературу,Увлекается геологией,Ходит на пилатес,Собирает радиоприемники,Ведет онлайн-магазин,Создает декорации,Ухаживает за садиком,Занимается греблей на каноэ,Реставрирует автомобили,Ходит с друзьями в боулинг,Увлекается написанием писем,Гоняет на мотоцикле,Учится на сомелье",
    "food": "Барбекю,Бастурма,Бефстроганов,Бигос,Битки,Биточки,Бифштекс,Блины,Борщ,Брускетта,Буженина,Бульон,Буррито,Бутерброд,Вареники,Винегрет,Гаспачо,Голубцы,Гриль,Гуляш,Долма,Драники,Душенина,Жаркое,Жульен,Запеканка,Канапе,Каре ягненка,Каша,Каша гречневая,Овсянка,Овсяная каша,Кебаб,Геркулесовая каша,Кесадилья,Кишеня,Клёцки,Колбаса,Вареная колбаса,Сервелат,Котлета,Крокеты,Купаты,Курник,Кус-кус,Лагман,Лазанья,Лапша,Люля-кебаб,Манник,Манты,Маффины,Медальон,Мимоза,Огуречник,Окрошка,Оливье,Отбивная,Оладьи,Паста,Пастрома,Паэлья,Пельмени,Пицца,Печенье,Похлёбка,Пудинг,Пюре,Равиоли,Рагу,Рататуй,Рассольник,Ризотто,Роллы,Ростбиф,Рубцы,Рулет,Рулька,Рыбник,Салат,Савоярди,Сапсо,Сациви,Свекольник,Селедка под шубой,Сырники,Солянка,Стейк,Студень,Суп,Сурими,Суши,Сэндвич,Тарталетки,Тефтели,Тирамису,Тортилья,Тофу,Фондю,Картошка фри,Фрикадельки,Халва,Харчо,Ханум,Хашлама,Хинкали,Холодец,Хумус,Цыплёнок табака,Чахохбили,Чизкейк,Шаурма,Шашлык,Шницель,Шурпа,Щи,Яичница,Пицца,Аджапсандал,Бургер,Луковый суп,Уха по-фински,Фалафель,Пита,Лапша Фо Бо,Гречка,Макароны,Шоколад,Вареная кукуруза,Каравай,Карпаччо,Карамель,Сыр в кляре,Салат Цезарь,Греческий салат,Креветки,Омар,Крем-фреш,Блинчики с творогом,Красная икра,Венский шницель,Мидии,Жареная говядина,Хачапури,Борщ,Копченый лосось,Вареники,Вареники с картошкой,Гамбургер,Чизбургер,Азу по-татарски,Свинина с овощами,Картофель в мундире,Овощное рагу,Творожная запеканка,Мармелад,Яблочное повидло,Вишневый пирог,Индейка с яблоками,Картофельная запеканка,Куриное филе,Рис с яйцом по-китайски,Пирожок с капустой,Куриное филе с грибами,Запеченная курица,Буррито,Гуляш из говядины,Говядина по-строгановски,Вареники с творогом,Мясо по-французски,Узбекский плов,Драники с луком,Куриные грудки,Фахитос с курицей,Курица по-китайски,Мясные котлеты,Рыбные котлеты,Жареные ребрышки,Треска с помидорами,Свинина тушеная,Тушеная капуста,Жаркое в горшочке,Свиная отбивная,Филе индейки,Жареный рис,Куриные котлеты,Баклажаны по-пармски,Кальмары,Филе хека,Лапша с тыквой,Свинина с чесноком и сыром,Гречневая лапша с креветками,Гречка с мясом и томатами,Говядина по-бургундски,Свекольник,Форель в маринаде,Севиче,Чапати,Макароны в сосисках,Куриные наггетсы,Перец фаршированный,Куриные сердца,Морковные котлеты,Оладьи из кабачков,Тигровые креветки,Куриная печень,Сашими,Самса,Сибас,Мороженое,Эскимо,Курица с имбирем,Сырные палочки,Кексы,Фетучини с ветчиной,Ризотто с тыквой,Мясные тефтели,Рыба с овощами,Устрицы с лимоном,Брауни,Классическая шарлотка,Йогурт,Пирог «Зебра»,Медовик,Наполеон,Венские вафли,Маффины с голубикой,Овсяное печенье,Шоколадные кексы,Кефирные оладьи,Капустный пирог,Мясной рулет,Торт,Торт «Сметанник»,Французские тосты,Творожные маффины,Печенье песочное,Банановый пирог,Форшмак,Торт «Прага»,Торт «Панчо»,Бельгийские пирожные,Эклеры,Имбирное печенье,Имбирный пряник,Безе,Зефир,Пастила",
    "pet": "Немецкая овчарка,Лабрадор,Лабрадор-ретривер,Английский бульдог,Пудель,Бигль,Золотистый ретривер,Чихуахуа,Мопс,Йоркширский терьер,Ротвейлер,Сибирский хаски,Немецкий боксер,Французский бульдог,Английский мастиф,Немецкий дог,Такса,Доберман,Мальтийская болонка,Питбультерьер,Ши-тцу,Бобтейл,Акита-ину,Бордер-колли,Чау-чау,Английский пойнтер,Померанский шпиц,Грейхаунд,Аляскинский маламут,Австралийская овчарка,Кавказская овчарка,Ньюфаундленд,Вельш-корги пемброк,Вельш-корги,Сенбернар,Сиба-ину,Бассет-хаунд,Стаффордширский бультерьер,Далматинец,Курцхаар,Бернский зенненхунд,Бишон фризе,Английский кокер-спаниель,Карликовый пинчер,Бультерьер,Шелти,Афганская борзая,Кинг-чарльз-спаниель,Бостон-терьер,Колли,Эрдельтерьер,Лайка,Мейн-кун,Британская кошка,Персидская кошка,Рэгдолл,Сиамская кошка,Сфинкс,Абиссинская кошка,Бурма,Бенгальская кошка,Бирманская кошка,Сибирская кошка,Японский бобтейл,Русская голубая кошка,Американский бобтейл,Шотландская вислоухая,Девон-рекс,Корниш-рекс,Норвежская лесная кошка,Гималайская кошка,Мэнкс,Бомбейская кошка,Оцикет,Ангорская кошка,Тонкинская кошка,Египетский мау,Лаперм,Манчкин,Турецкий ван,Сингапурская кошка,Гавана,Рагамаффин,Пиксибоб,Бурмилла,Сноу-Шу,Кимрик,Нибелунг,Канарейка,Волнистый попугайчик,Кролик,Морская свинка,Хорек,Хомяк,Австралийский мист,Американский керл,Аравийский мау,Бородатый колли,Брюссельский грифон,Ирландский волкодав,Домашняя улитка,Попугай,Пираньи,Золотая рыбка,Енот,Крыса домашняя,Морская свинка,Хамелеон,Шиншилла,Ящерица,Питон,Удав,Песчанка,Скорпион,Игрунок,Мини-пиг,Черепахи,Игуана,Паук,Домашняя сова,Белки,Попугай корелла,Жако,Ара,Какаду,Попугая монах,Попугай кеа,Карликовый ёж,Африканский ёж,Домашний львенок,Домашний тигр,Носуха,Чилийская белка дегу,Красноухая черепаха,Среднеазиатская черепаха,Европейская черепаха,Мускусная черепаха,Крыса рекс,Атласная крыса,Бесхвостые крысы,Крыса сфинкс,Крыса дамбо,Радужный удав,Королевский питон,Императорский удав,Королевская кобра,Рыки гуппи,Арована азиатская,Карп кои,Пецилия пятнистая,Голубой неон,Зеленый меченосец,Суматранский барбус,Акулий балу,Боция клоун,Креветка амано,Обыкновенная скалярия,Глазчатый астронотус,Крылатка-зебра,Дискус равнополосый,Антенновая крылатка,Красный неон,Голубой сомик,Серпас вуалевый,Фахака,Бетта чёрная,Бетта смарагдовая,Зеленый тетраодон,Усатый сомик,Яванская макака,Обыкновенная лисица,Корсак,Афганская лиса,Доминиканская квакша,Австралийская квакша,Озерная лягушка,Чесночница,Домашние амадины,Зяблики,Аратинги,Хамелеон четырехрогий,Агама древесная,Обыкновенная игуана,Агама бородатая,Длиннохвостая неясыть,Домовой сычик,Сипуха,Домашний филин,Ушастая сова,Белая мышь,Вулкановая мышь,Мышь полевка,Декоративная мышь,Мышь фазза,Белополосая белка",
    "dream": "Дом на берегу озера,Морской круиз,Свой детский центр,Двое детей,Кругосветное путешествие,Написать портрет,Путешествовать каждый год,Посетить острова Малайзии,Устроить родителям Новый год,Сменить имя в паспорте,Пройти специальные курсы,Купить хороший телефон,Писать статьи для журнала,Выпустить сборник своих стихов,Побороть детские страхи,Слетать в Токио,Прыжок с тарзанкой,Купить кардиган и пальто,Увидеть Лувр во Франции,Посетить Антарктиду с экспедицией,Побывать в Канаде,Получить шенген,Сплав на байдарках,Уик-энд тур на джипе,Горный поход,Слетать в Коста-Рику,Попариться в русской бане,Увидеть Северное сияние,Дарить людям счастье и любовь,Спеть песню в караоке,Тур на машине по горам,Изучить новый язык,Посетить все чудеса мира,Добиться идеального веса,Попробовать новую профессию,Пробежать марафон,Заняться новым видом спорта,Покататься на лыжах в горах,Следовать своей мечте,Заняться своим бизнесом,Стать ментором для кого-то,Освоить скайдайвинг,Прыгнуть с парашютом,Сделать большой сюрприз,Сделать что-то значительное,Сделать что-то важное,Сделать добро 5 незнакомцам,Путешествовать на воздушном шаре,Встретить рассвет,Встретить закат,Увидеть солнечное затмение,Посадить дерево,Сделать мегавечеринку,Полностью изменить свой стиль,Сходить на слепое свидание,Победить в споре на деньги,Путешествовать автостопом,Поплавать с дельфинами,Снять фильм,Связать шарф,Создать дом своей мечты,Испечь торт,Пожить в лесу,Посетить пустыню,Стать волонтером,Запустить воздушного змея,Заночевать в стоге сена,Стать вегетарианцем,Обуздать свои страхи,Организовать пикник,Летать первым классом,Посетить вулкан,Полететь на вертолете,Влюбиться,Организовать романтическое свидание,Организовать романтический вечер,Посетить замок в Шотландии,Изменить мир,Помочь кому-нибудь,Посмотреть на оригинал Моны Лизы,Изучить язык жестов,Победить в соревнованиях,Просыпаться в 5 утра,Переехать в другую страну,Улучшить свой английский,Улучшить свой немецкий,Изучить китайский язык,Открыть свой интернет-магазин,Купить дом на берегу моря,Давать уроки йоги,Научиться водить самолет,Обновить свой гардероб,Танцевать под дождем,Выпустить свою линию одежды,Кататься на машине по стране,Написать роман,Купить новую доску для серфа,Связать свитер,Поехать с друзьями в Мексику,Нарисовать 10 футболок,Создать свою коллекцию украшений,Научиться стрелять из пистолета,Жить в мультике,Посадить сад перед домом,Сделать фотосессию,Прокатиться на гоночной машине,Посетить Лас-Вегас и казино,Сделать татуировку,Открыть отель на берегу моря,Ходить каждую неделю в кино,Научиться водить мотоцикл,Проколоть ухо,Написать картину маслом,Выиграть в лотерею,Собрать пазл,Организовать благотворительность,Потусить на Ибице,Увидеть Тадж-Махал,Побывать на Бора-Бора,Найти свое призвание в жизни,Написать книгу,Иметь дома в Европе,Научиться разбираться в людях,Накачать красивый пресс,Всегда быть в хорошем настроении,Научиться управлять финансами,Достигнуть финансовой свободы,Стать миллионером,Инвестировать в золото,Сходить на рок-концерт,Полететь на частном самолете,Вырасти как личность,Стать наставником,Изучить цифровую фотографию,Сняться в фильме,Наслаждаться жизнью,Быть примером для всех,Поймать лосося на Дальнем Востоке,Жить в радости,Построить во дворе беседку,Сделать дома настоящий камин,Купить квадроцикл,Нарисовать шедевр,Купить розовый кадиллак,Залезть на пирамиду Хеопса"
});


/***/ })

});
//# sourceMappingURL=8.bundle.js.map