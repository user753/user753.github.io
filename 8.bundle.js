webpackJsonpNewGames([8],{

/***/ 148:
/*!*********************************!*\
  !*** ./src/games/ships/meta.ts ***!
  \*********************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets__ = __webpack_require__(/*! ./assets */ 185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(/*! ./levels */ 332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic__ = __webpack_require__(/*! ./logic */ 333);




var gameId = "ships";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_2__levels__["a" /* levels */],
    levelsSeqCounts: __WEBPACK_IMPORTED_MODULE_2__levels__["b" /* levelsArray */].map(function (x, i) { return ({
        seqCount: (x.shipCount) * 3,
        maxLevel: i + 1
    }); })
};
var metaData = {
    gameId: gameId,
    title: "Word search",
    logic: __WEBPACK_IMPORTED_MODULE_3__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: false,
    images: __WEBPACK_IMPORTED_MODULE_0__assets__["a" /* Images */].data,
    sounds: __WEBPACK_IMPORTED_MODULE_0__assets__["b" /* Sounds */].keys,
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

/***/ 162:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameUI_panelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/panelComponent */ 156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_textOnCenterBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/textOnCenterBehavior */ 160);






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

/***/ 185:
/*!***********************************!*\
  !*** ./src/games/ships/assets.ts ***!
  \***********************************/
/*! exports provided: Translations, Sounds, Fonts, Images */
/*! exports used: Images, Sounds, Translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Translations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Sounds; });
/* unused harmony export Fonts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var Translations;
(function (Translations) {
    Translations.memorize = "memorize";
    Translations.remember = "remember";
    Translations.tutor1 = "tutor1";
    Translations.tutor2 = "tutor2";
})(Translations || (Translations = {}));
var Sounds;
(function (Sounds) {
    Sounds.bg = "bg";
    Sounds.gull = "gull";
    Sounds.wave = "wave";
    Sounds.keys = [
        Sounds.bg,
        Sounds.gull,
        Sounds.wave
    ];
})(Sounds || (Sounds = {}));
var Fonts;
(function (Fonts) {
    Fonts.instruction = {
        fontSize: 100, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].Arial, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].white, align: "center"
    };
})(Fonts || (Fonts = {}));
var Images;
(function (Images) {
    Images.landCount = 4;
    Images.bg = "bg";
    Images.arrow = "arrow";
    Images.intro = "intro";
    Images.intro_ship = "intro_ship";
    Images.sand = "sand";
    Images.circle = "circle";
    Images.line = "line";
    Images.landTypeList = ["mount", "tree"];
    Images.seaItems = ["ships_tree", "ships_mount"];
    Images.line_gradient = "line_gradient";
    Images.land = function (index, left, right) { return "land_" + index + "_" + left + "_" + right; };
    Images.landItem = function (type, index) { return "land_" + type + "_" + index; };
    Images.landItemList = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](3).map(function (i) { return Images.landItem("stone", i); }).concat(__WEBPACK_IMPORTED_MODULE_1_lodash__["range"](3).map(function (i) { return Images.landItem("tree", i); }));
    Images.coal = function (index, left, right) { return "coal_" + index + "_" + left + "_" + right; };
    Images.join = function (index, left, right) { return "join_" + index + "_" + left + "_" + right; };
    Images.boat = function (index) { return "boat_" + index; };
    Images.flow = function (index) { return "flow_" + index; };
    Images.flowList = __WEBPACK_IMPORTED_MODULE_1_lodash__["reverse"](__WEBPACK_IMPORTED_MODULE_1_lodash__["range"](4).map(Images.flow));
    Images.Coastline = {
        coal: Images.coal, land: Images.land, join: Images.join
    };
    Images.data = {
        sprites: []
    };
})(Images || (Images = {}));


/***/ }),

/***/ 191:
/*!***********************************!*\
  !*** ./src/core/utils/matrixs.ts ***!
  \***********************************/
/*! exports provided: Matrixs */
/*! exports used: Matrixs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matrixs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_utils_arrays__ = __webpack_require__(/*! core/utils/arrays */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);




var Matrixs;
(function (Matrixs) {
    Matrixs.matrixDirectionList = ["up", "down", "left", "right"];
    Matrixs.directions = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 }
    };
    Matrixs.oppositeDirections = {
        up: "down",
        down: "up",
        left: "right",
        right: "left"
    };
    function move(p, dirs) {
        console.log(p, dirs);
        return dirs.reduce(function (_a, v) {
            var x = _a[0], y = _a[1];
            var _b = Matrixs.directions[v], dx = _b.x, dy = _b.y;
            return Object(__WEBPACK_IMPORTED_MODULE_1_core_utils_tuples__["a" /* tuple */])(x + dx, y + dy);
        }, p);
    }
    Matrixs.move = move;
    function isInside(_a, _b) {
        var x = _a[0], y = _a[1];
        var width = _b.width, height = _b.height;
        return x >= 0 && y >= 0 && x < width && y < height;
    }
    Matrixs.isInside = isInside;
    function onBoard(_a, _b) {
        var x = _a[0], y = _a[1];
        var width = _b.width, height = _b.height;
        return x == 0 || y == 0 || x == width - 1 || y == height - 1;
    }
    Matrixs.onBoard = onBoard;
    function getSize(m) {
        return { width: m.length == 0 ? 0 : m[0].length, height: m.length };
    }
    Matrixs.getSize = getSize;
    function directionIsAvailable(dir, p, size, obstacles) {
        var newP = move(p, [dir]);
        return isInside(newP, size) && !__WEBPACK_IMPORTED_MODULE_0_core_utils_arrays__["a" /* Arrays */].includesWith(obstacles, newP);
    }
    Matrixs.directionIsAvailable = directionIsAvailable;
    function getAvailableDirections(p, size, obstacle) {
        return Matrixs.matrixDirectionList.filter(function (dir) { return directionIsAvailable(dir, p, size, obstacle); });
    }
    Matrixs.getAvailableDirections = getAvailableDirections;
    function get(m, _a, def) {
        var x = _a[0], y = _a[1];
        var row = m[y];
        return row ? row[x] : def;
    }
    Matrixs.get = get;
    function set(m, _a, value) {
        var x = _a[0], y = _a[1];
        var row = m[y];
        if (__WEBPACK_IMPORTED_MODULE_2_core_utils_undef__["a" /* Undef */].is(row)) {
            row = [];
            m[y] = row;
        }
        row[x] = value;
    }
    Matrixs.set = set;
    function compact(m) {
        return m.map(__WEBPACK_IMPORTED_MODULE_3_lodash__["compact"]);
    }
    Matrixs.compact = compact;
    function create(colCount, rowCount, fn) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](rowCount).map(function (y) { return __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](colCount).map(function (x) { return fn(x, y); }); });
    }
    Matrixs.create = create;
    function map(m, fn) {
        return m.map(function (row, y) { return row.map(function (item, x) { return fn(item, x, y); }); });
    }
    Matrixs.map = map;
    function intersection(f, s) {
        var first = [];
        var second = [];
        var both = [];
        __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](Math.max(f.length, s.length)).forEach(function (y) {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](Math.max((f[y] || []).length, (s[y] || []).length)).forEach(function (x) {
                var p = Object(__WEBPACK_IMPORTED_MODULE_1_core_utils_tuples__["a" /* tuple */])(x, y);
                var fe = get(f, p);
                var se = get(s, p);
                if (!__WEBPACK_IMPORTED_MODULE_2_core_utils_undef__["a" /* Undef */].is(fe) && !__WEBPACK_IMPORTED_MODULE_2_core_utils_undef__["a" /* Undef */].is(se)) {
                    both.push([fe, se, p]);
                }
                else if (!__WEBPACK_IMPORTED_MODULE_2_core_utils_undef__["a" /* Undef */].is(fe)) {
                    first.push([fe, p]);
                }
                else if (!__WEBPACK_IMPORTED_MODULE_2_core_utils_undef__["a" /* Undef */].is(se)) {
                    second.push([se, p]);
                }
            });
        });
        return Object(__WEBPACK_IMPORTED_MODULE_1_core_utils_tuples__["a" /* tuple */])(first, second, both);
    }
    Matrixs.intersection = intersection;
})(Matrixs || (Matrixs = {}));


/***/ }),

/***/ 327:
/*!*****************************************************!*\
  !*** ./src/games/ships/components/mainComponent.ts ***!
  \*****************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_components_games_gameUI_textPanelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/textPanelComponent */ 162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_ui_controls_GraphicsImg__ = __webpack_require__(/*! core/ui/controls/GraphicsImg */ 155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_games_ships_assets__ = __webpack_require__(/*! games/ships/assets */ 185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_games_ships_components_instructionComponent__ = __webpack_require__(/*! games/ships/components/instructionComponent */ 328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_games_ships_components_introComponent__ = __webpack_require__(/*! games/ships/components/introComponent */ 329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_games_ships_components_seaComponent__ = __webpack_require__(/*! games/ships/components/seaComponent */ 330);

















var durations = {
    sea: 300,
    gull: 10000,
    delay: 100
};
var biValues = __WEBPACK_IMPORTED_MODULE_5_core_ui_common_positions__["a" /* BiValue */].create({
    scale: 1,
}, {
    scale: 0.75,
});
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_13_games_ships_assets__["a" /* Images */].bg);
        _this.seaGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_11_core_ui_controls_control__["a" /* Control */]());
        _this.positions = __WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].create({
            tutorial: { y: 840 },
            taskDescSize: { width: 800, height: 120 },
            btnSize: { width: 500, height: 100 },
            tutorialBtnShift: 80,
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].bi({
            remember: { x: __WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 1130 },
            taskDesc: { x: __WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 130 },
            tutorialTaskDesc: { x: __WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 900 },
            shift: { x: 105, y: 105 },
            seaOffset: { y: 0 }
        }, {
            remember: { x: __WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 1210 },
            taskDesc: { x: __WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 60 },
            tutorialTaskDesc: { x: __WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 1100 },
            shift: { x: 130, y: 105 },
            seaOffset: { y: 0 }
        });
        _this.instruction = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_14_games_ships_components_instructionComponent__["a" /* InstructionComponent */]))
            .anchorCenterX().setBiPos(_this.isTutorial ? _this.biPositions.tutorialTaskDesc : _this.biPositions.taskDesc).fluentUpdate(function (x) { return x.visible = false; });
        _this.taskDesc = _this.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_components_games_gameUI_textPanelComponent__["a" /* TextPanelComponent */]({
            size: _this.positions.taskDescSize
        })).anchorCenterX().setBiPos(_this.biPositions.taskDesc).fluentUpdate(function (x) {
            x.setProps(_this.translate(_this.isTutorial ? __WEBPACK_IMPORTED_MODULE_13_games_ships_assets__["c" /* Translations */].tutor1 : __WEBPACK_IMPORTED_MODULE_13_games_ships_assets__["c" /* Translations */].memorize));
            x.visible = false;
        });
        _this.rememberBtn = _this.add(new __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_btn__["a" /* Btn */](_this.translate(__WEBPACK_IMPORTED_MODULE_13_games_ships_assets__["c" /* Translations */].remember), function () { return _this.setInstructionVisible(true, false); }, undefined, new __WEBPACK_IMPORTED_MODULE_12_core_ui_controls_GraphicsImg__["a" /* BtnDefaultImg */]({
            color: __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["a" /* CoreColorNumbers */].purple,
            size: _this.positions.btnSize
        }))).anchorCenter()
            .fluentUpdate(function (x) { return x.visible = false; })
            .setBiPos(_this.biPositions.remember);
        return _this;
    }
    MainComponent.prototype.setInstructionVisible = function (visible, begin) {
        var _this = this;
        this.sea.setShipsVisible(!visible, begin).addOnce(function () {
            __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].setVisible(_this.taskDesc, !_this.isTutorial && !visible, { instantHide: true });
            __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].setVisible(_this.rememberBtn, !visible, { instantHide: true });
        });
        this.instruction.visible = visible;
        if (this.tutorial) {
            this.tutorial.setProps(this.translate(visible ? __WEBPACK_IMPORTED_MODULE_13_games_ships_assets__["c" /* Translations */].tutor2 : __WEBPACK_IMPORTED_MODULE_13_games_ships_assets__["c" /* Translations */].tutor1));
        }
        this.sea.setButtonsEnabled(visible);
    };
    MainComponent.prototype.onAnswer = function (answer) {
        if (answer.status == __WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].Error) {
            this.setInstructionVisible(false, false);
        }
    };
    MainComponent.prototype.onInit = function () {
        var _this = this;
        this.playBackgroundLoop();
        this.interval(function () { return _this.playSound(__WEBPACK_IMPORTED_MODULE_13_games_ships_assets__["b" /* Sounds */].gull); }, durations.gull);
        this.introOptions.runOnNewTaskAfter = true;
        if (this.isTutorial) {
            this.tutorial = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_9_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */]).make({}));
            this.taskDesc.visible = false;
            this.rememberBtn.y -= this.positions.tutorialBtnShift;
        }
        this.startIntro();
        this.onBiValueChange(biValues.scale, function (c, v) {
            _this.seaGroup.symmetricScale = v;
            _this.updateSeaPosition();
        });
    };
    MainComponent.prototype.updateSeaPosition = function () {
        if (!this.sea) {
            return;
        }
        var fullSize = this.sea.getFullSize();
        var scale = this.current(biValues.scale);
        var shift = this.current(this.biPositions.shift);
        this.sea.updatePos(((__WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].width - fullSize.width * scale) / 2 + shift.x), ((__WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].height - fullSize.height * scale) / 2 + shift.y) +
            this.current(this.biPositions.seaOffset).y);
    };
    MainComponent.prototype.animationNewLevel = function (task) {
        var _this = this;
        this.instruction.visible = false;
        var prevSea = this.sea;
        if (prevSea) {
            prevSea.updatePos(this.sea.x - __WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].width, this.sea.y);
        }
        this.sea = this.seaGroup.add(this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_16_games_ships_components_seaComponent__["a" /* SeaComponent */], task));
        this.updateSeaPosition();
        if (!this.isFirstTask) {
            this.seaGroup.updatePos(__WEBPACK_IMPORTED_MODULE_6_core_ui_common_sizes__["a" /* Sizes */].width, 0);
            __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__["a" /* Tweens */].start({
                target: this.seaGroup,
                duration: durations.sea,
                to: { x: 0 },
                easing: Phaser.Easing.Sinusoidal.InOut,
                onComplete: function () {
                    _this.setInstructionVisible(false, true);
                    prevSea.destroy();
                }
            });
        }
        else {
            this.delay(durations.delay).addOnce(function () {
                _this.setInstructionVisible(false, true);
            });
            // this.sea.setButtonsVisible(true)
        }
    };
    MainComponent.prototype.introAnimation = function () {
        var intro = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_15_games_ships_components_introComponent__["a" /* IntroComponent */]));
        var tween = intro.playTween();
        tween.onComplete.addOnce(function () {
            return intro.destroy();
        });
        return {
            start: function () {
                tween.start();
            },
            onComplete: tween.onComplete
        };
    };
    MainComponent.prototype.onNewTask = function (task) {
        this.instruction.setProps(task);
        if (this.isNewLevel || this.isFirstTask) {
            this.animationNewLevel(task);
        }
        else {
            if (this.instruction.visible) {
                if (this.isFirstTask || this.isNewLevel) {
                    this.setInstructionVisible(false, true);
                }
                else {
                    this.setInstructionVisible(true, false);
                }
            }
        }
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 328:
/*!************************************************************!*\
  !*** ./src/games/ships/components/instructionComponent.ts ***!
  \************************************************************/
/*! exports provided: InstructionComponent */
/*! exports used: InstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameUI_panelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/panelComponent */ 156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_ships_assets__ = __webpack_require__(/*! games/ships/assets */ 185);







var up = -90;
var down = 90;
var left = 180;
var right = 0;
var biValues = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_positions__["a" /* BiValue */].create({
    arrows: {
        up: up,
        down: down,
        right: right,
        left: left,
    }
}, {
    arrows: {
        "left": up,
        "right": down,
        "up": left,
        "down": right,
    }
});
var scale = 0.4;
var InstructionComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](InstructionComponent, _super);
    function InstructionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            taskDescSize: { width: 700, height: 160 },
            arrows: { x: 130 },
            text: { x: 420, y: 80 },
            margin: { x: 10 }
        });
        _this.bg = _this.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameUI_panelComponent__["a" /* PanelComponent */]()).setProps({ size: _this.positions.taskDescSize });
        _this.group = _this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__["a" /* Control */]()).anchorCenter().setPos(_this.bg.center());
        return _this;
    }
    InstructionComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.onBiValueChange(biValues.arrows, function (c, v) {
            var task = _this.props;
            _this.group.removeAll(true);
            _this.group.add(_this.makeImage(__WEBPACK_IMPORTED_MODULE_6_games_ships_assets__["a" /* Images */].circle)).anchorCenter();
            var ship = _this.group.add(_this.makeImage(__WEBPACK_IMPORTED_MODULE_6_games_ships_assets__["a" /* Images */].boat(task.shipIndex)))
                .anchorCenter()
                .fluentUpdate(function (x) { return x.symmetricScale = scale; });
            var arrowsGroup = _this.group.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__["a" /* Control */]()).setPos(_this.positions.arrows);
            var arrows = task.instruction.map(function (arrow) {
                return arrowsGroup.add(_this.makeImage(__WEBPACK_IMPORTED_MODULE_6_games_ships_assets__["a" /* Images */].arrow)).anchorCenter()
                    .fluentUpdate(function (x) { return x.angle = v[arrow]; });
            });
            __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].tableRow(arrows, _this.positions.margin);
            _this.group.updatePivot();
        });
        this.updatePivot();
    };
    return InstructionComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 329:
/*!******************************************************!*\
  !*** ./src/games/ships/components/introComponent.ts ***!
  \******************************************************/
/*! exports provided: IntroComponent */
/*! exports used: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_ships_assets__ = __webpack_require__(/*! games/ships/assets */ 185);





var durations = {
    ship: 1000
};
var IntroComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](IntroComponent, _super);
    function IntroComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            from: { x: -300, y: 270 },
            to: { y: 270 },
        });
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_4_games_ships_assets__["a" /* Images */].intro);
        _this.item = _this.addImage(__WEBPACK_IMPORTED_MODULE_4_games_ships_assets__["a" /* Images */].intro_ship).setPos(_this.positions.from);
        return _this;
    }
    IntroComponent.prototype.playTween = function () {
        return __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.item,
            to: { x: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].width },
            duration: durations.ship,
        });
    };
    return IntroComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 330:
/*!****************************************************!*\
  !*** ./src/games/ships/components/seaComponent.ts ***!
  \****************************************************/
/*! exports provided: SeaComponent */
/*! exports used: SeaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_spriteAnimation__ = __webpack_require__(/*! core/ui/animations/spriteAnimation */ 331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_utils_arrays__ = __webpack_require__(/*! core/utils/arrays */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_utils_matrixs__ = __webpack_require__(/*! core/utils/matrixs */ 191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_utils_randomGenerator__ = __webpack_require__(/*! core/utils/randomGenerator */ 64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_games_ships_assets__ = __webpack_require__(/*! games/ships/assets */ 185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash__);

















function isInside(rect, _a) {
    var x = _a[0], y = _a[1];
    return rect.x <= x && x <= rect.x + rect.width && rect.y <= y && y < +rect.y + rect.height;
}
var durations = {
    flow: 300,
    shipDelay: 100,
    ship: 1000
};
var angles = {
    top: 0,
    right: 90,
    bottom: 180,
    left: 270
};
var flowAngles = {
    up: 270,
    down: 90,
    left: 180,
    right: 0
};
var maxHeight = 10;
var SeaComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](SeaComponent, _super);
    function SeaComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].create({
            answerMargin: -50,
            icon: [211, 170],
            size: 216
        });
        _this.ships = [];
        _this.landGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_control__["a" /* Control */]());
        _this.seaGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_control__["a" /* Control */]());
        _this.buttonsGroup = _this.seaGroup.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_control__["a" /* Control */]());
        _this.shipGroup = _this.seaGroup.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_control__["a" /* Control */]());
        _this.buttons = [];
        _this.state = {
            buttonEnabled: false
        };
        _this.rng = new __WEBPACK_IMPORTED_MODULE_13_core_utils_randomGenerator__["a" /* RandomGenerator */]();
        _this.itemUniqSeq = new __WEBPACK_IMPORTED_MODULE_10_core_utils_circleSeq__["b" /* UniqSeq */](__WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["a" /* Images */].landItemList.length);
        _this.unitSize = {
            width: 0,
            height: 0
        };
        return _this;
    }
    SeaComponent.prototype.getFullSize = function () {
        var units = this.unitSize;
        return {
            width: units.width * this.positions.size,
            height: units.height * this.positions.size
        };
    };
    SeaComponent.prototype.createImageKeyFromType = function (type) {
        if (type == "sand") {
            return __WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["a" /* Images */].sand;
        }
        else {
            var fn = __WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["a" /* Images */].Coastline[type.coastline.type];
            var count = type.coastline.type == "join" ? 2 : __WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["a" /* Images */].landCount;
            return fn(this.rng.int(count), type.coastline.left, type.coastline.right);
        }
    };
    SeaComponent.prototype.createLand = function (task) {
        var _this = this;
        this.landGroup.cacheAsBitmap = false;
        var _a = this.generate(task), inner = _a[0], data = _a[1];
        var land = __WEBPACK_IMPORTED_MODULE_16_lodash__["flatten"](__WEBPACK_IMPORTED_MODULE_11_core_utils_matrixs__["a" /* Matrixs */].map(data, function (item, x, y) {
            if (item.type) {
                var addTile = function (imgKey, rotate) {
                    if (rotate === void 0) { rotate = true; }
                    var tile = _this.makeImage(imgKey);
                    tile.anchorCenter();
                    if (rotate) {
                        tile.angle = item.angle;
                    }
                    tile.updatePos(x * _this.positions.size, y * _this.positions.size);
                    return tile;
                };
                var tiles = [];
                tiles.push(Object(__WEBPACK_IMPORTED_MODULE_14_core_utils_tuples__["a" /* tuple */])(addTile(_this.createImageKeyFromType(item.type)), true));
                if (item.type != "sand") {
                    // if (item.type.coastline.type == "land" && item.type.coastline.gradient
                    //   || item.type.coastline.type == "join") {
                    //   tiles.push(tuple(addTile(Images.line_gradient), false))
                    // }
                }
                else {
                    if (!__WEBPACK_IMPORTED_MODULE_11_core_utils_matrixs__["a" /* Matrixs */].onBoard([x, y], __WEBPACK_IMPORTED_MODULE_11_core_utils_matrixs__["a" /* Matrixs */].getSize(data))) {
                        var tile = addTile(_this.itemUniqSeq.nextFrom(__WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["a" /* Images */].landItemList), false);
                        var signX = __WEBPACK_IMPORTED_MODULE_12_core_utils_numbers__["a" /* Numbers */].sign(__WEBPACK_IMPORTED_MODULE_12_core_utils_numbers__["a" /* Numbers */].odd(y));
                        var signY = __WEBPACK_IMPORTED_MODULE_12_core_utils_numbers__["a" /* Numbers */].sign(__WEBPACK_IMPORTED_MODULE_12_core_utils_numbers__["a" /* Numbers */].odd(x));
                        tile.updatePos(tile.x + _this.rng.float() * signX * _this.positions.size * 0.2, tile.y + _this.rng.float() * signY * _this.positions.size * 0.2);
                        tiles.push(Object(__WEBPACK_IMPORTED_MODULE_14_core_utils_tuples__["a" /* tuple */])(tile, true));
                    }
                }
                return tiles;
            }
            return [];
        }));
        this.landGroup.removeAll(true);
        this.landGroup.addChildren(__WEBPACK_IMPORTED_MODULE_16_lodash__["sortBy"](__WEBPACK_IMPORTED_MODULE_16_lodash__["flatten"](land), function (x) { return !x[1]; }).map(function (x) { return x[0]; }));
        this.landGroup.cacheAsBitmap = true;
        return inner;
    };
    SeaComponent.prototype.onPropsUpdate = function () {
        this.generateContent();
        this.setButtonsVisible(false);
    };
    SeaComponent.prototype.generateContent = function () {
        this.landGroup.removeAll(true);
        this.buttonsGroup.removeAll(true);
        this.shipGroup.removeAll(true);
        var task = this.props;
        if (!task) {
            return;
        }
        var inner = this.createLand(task);
        this.seaGroup.updatePos(inner.x * this.positions.size, inner.y * this.positions.size);
        this.createAnswerButtons(task);
    };
    SeaComponent.prototype.getWH = function (task) {
        return this.isPortrait
            ? Object(__WEBPACK_IMPORTED_MODULE_14_core_utils_tuples__["a" /* tuple */])(task.sea.height, task.sea.width)
            : Object(__WEBPACK_IMPORTED_MODULE_14_core_utils_tuples__["a" /* tuple */])(task.sea.width, task.sea.height);
    };
    SeaComponent.prototype.createAnswerButtons = function (task) {
        var _this = this;
        var _a = this.getWH(task), width = _a[0], height = _a[1];
        var tiles = __WEBPACK_IMPORTED_MODULE_16_lodash__["flatten"](__WEBPACK_IMPORTED_MODULE_11_core_utils_matrixs__["a" /* Matrixs */].create(width, height, function (x0, y0) {
            var p = Object(__WEBPACK_IMPORTED_MODULE_14_core_utils_tuples__["a" /* tuple */])(x0, y0);
            var swapP = _this.swapXY(p);
            var isBlock = __WEBPACK_IMPORTED_MODULE_9_core_utils_arrays__["a" /* Arrays */].includesWith(task.sea.blocks, swapP);
            var flow = task.sea.flows.find(function (x) { return __WEBPACK_IMPORTED_MODULE_16_lodash__["isEqual"](x[0], swapP); });
            var imgKey = isBlock
                ? __WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["a" /* Images */].seaItems[0]
                : flow
                    ? __WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["a" /* Images */].flow(0)
                    : __WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["a" /* Images */].line;
            var isButton = !flow && !isBlock;
            var setPosition = function (c) {
                c.anchorCenter();
                c.updatePos(p[0] * _this.positions.size, p[1] * _this.positions.size);
            };
            if (isButton) {
                var btn = _this.addAnswerBehavior(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_btn__["c" /* ImageBtn */]("", _this.gameKey(imgKey), function () {
                }), swapP, { dark: true, margin: _this.positions.answerMargin });
                btn.button.input.enabled = false;
                setPosition(btn);
                return btn;
            }
            else {
                var img = _this.addImage(imgKey).anchorCenter();
                if (flow) {
                    __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_spriteAnimation__["a" /* SpriteAnimation */].play(img, __WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["a" /* Images */].flowList.map(function (x) { return _this.gameKey(x); }), durations.flow, true);
                    img.angle = flowAngles[flow[1]] + (_this.isPortrait ? 90 : 0);
                }
                setPosition(img);
                return img;
            }
        }));
        this.buttons = tiles.filter(function (x) { return x instanceof __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_btn__["c" /* ImageBtn */]; });
        this.buttonsGroup.removeAll(true);
        this.buttonsGroup.addChildren(tiles);
    };
    SeaComponent.prototype.setButtonsEnabled = function (enabled) {
        this.state.buttonEnabled = enabled;
        this.updateButtons();
    };
    SeaComponent.prototype.updateButtons = function () {
        var _this = this;
        this.buttons.forEach(function (x) { return x.button.input.enabled = _this.state.buttonEnabled; });
        if (this.state.buttonEnabled) {
            this.answersAreReady();
        }
    };
    SeaComponent.prototype.generateCoastline = function (rect) {
        var _this = this;
        var randomEdge = function () { return _this.rng.count(2, 1); };
        var start = [1, 1];
        var points = this.rectCoastlinePoints(rect).concat(this.rectCoastlinePointsBottom(rect));
        var tiles = __WEBPACK_IMPORTED_MODULE_16_lodash__["range"](points.length - 1).reduce(function (a, i) {
            var _a = a[0], prevLeft = _a[0], _ = _a[1];
            var right = i == points.length - 2 ? start[1] : randomEdge();
            return [[right, prevLeft]].concat(a);
        }, [start]);
        return __WEBPACK_IMPORTED_MODULE_9_core_utils_arrays__["a" /* Arrays */].zip(points, tiles).map(function (_a) {
            var p = _a[0], t = _a[1];
            return {
                pos: p.pos, angle: angles[p.rot],
                type: { coastline: { type: p.type, left: t[0], right: t[1], gradient: p.gradient } }
            };
        });
    };
    SeaComponent.prototype.createPoint = function (pos, rot, type, gradient) {
        if (gradient === void 0) { gradient = true; }
        return { pos: pos, rot: rot, type: type, gradient: gradient };
    };
    SeaComponent.prototype.swapXY = function (_a) {
        var x = _a[0], y = _a[1];
        return this.isPortrait ? [y, x] : [x, y];
    };
    SeaComponent.prototype.animationShips = function () {
        var _this = this;
        var task = this.getCurrentTask();
        var _a = this.getWH(task), width = _a[0], height = _a[1];
        var _b = [-this.positions.size / 2, (__WEBPACK_IMPORTED_MODULE_12_core_utils_numbers__["a" /* Numbers */].count(height, 2) - 0.5) * this.positions.size], x = _b[0], y = _b[1];
        // [this.positions.size*(width/2 - 0.5), (Numbers.count(height, 2) - 0.5) * this.positions.size]
        this.playSound(__WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["b" /* Sounds */].wave);
        var signals = this.ships.map(function (ship, i) {
            var x2 = ship.x, y2 = ship.y;
            ship.updatePos(-_this.seaGroup.x, y);
            // ship.updatePos(x, y)
            return __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__["a" /* Tweens */].start({
                target: ship,
                delay: i * durations.shipDelay,
                duration: durations.ship,
                interpolation: Phaser.Math.catmullRomInterpolation,
                easing: Phaser.Easing.Quadratic.Out,
                to: { x: [x, x2], y: [y, y2] },
                onComplete: function () {
                    ship.updatePos(x2, y2);
                }
            }).onComplete;
        });
        var complete = __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__["a" /* Signals */].waitAll(signals);
        this.disableInputOn(complete).addOnce(function () {
            _this.stopSound(__WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["b" /* Sounds */].wave);
            _this.buttonsGroup.visible = true;
            __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].show(_this.buttonsGroup, true);
        });
        return complete;
    };
    SeaComponent.prototype.createShips = function () {
        var _this = this;
        var task = this.getCurrentTask();
        if (!task) {
            return __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__["a" /* Signals */].memorize();
        }
        var isFirst = this.ships.length == 0;
        this.shipGroup.removeAll(true);
        this.ships = (task.positions.begin).map(function (p, i) {
            var _a = _this.swapXY(p), x = _a[0], y = _a[1];
            return _this.addImage(__WEBPACK_IMPORTED_MODULE_15_games_ships_assets__["a" /* Images */].boat(i)).updatePos(x * _this.positions.size, y * _this.positions.size).anchorCenter();
        });
        this.shipGroup.addChildren(this.ships);
        if (isFirst) {
            return this.animationShips();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__["a" /* Signals */].memorize();
        }
    };
    SeaComponent.prototype.setButtonsVisible = function (visible) {
        this.buttonsGroup.visible = visible;
    };
    SeaComponent.prototype.setShipsVisible = function (visible, begin) {
        this.shipGroup.visible = visible;
        return this.createShips();
    };
    SeaComponent.prototype.rangePoint = function (v1, v2) {
        if (v1 > v2) {
            return __WEBPACK_IMPORTED_MODULE_16_lodash__["range"](v2, v1 + 1).reverse();
        }
        return __WEBPACK_IMPORTED_MODULE_16_lodash__["range"](v1, v2 + 1);
    };
    SeaComponent.prototype.rectCoastlinePoints = function (rect) {
        var _this = this;
        var h2 = this.unitSize.height / 2;
        var leftLine = this.rangePoint(0, rect.x)
            .map(function (x, i) { return _this.createPoint([x, h2 - 1], "top", x == rect.x ? "join" : "land", false); });
        var rightLine = this.rangePoint(rect.x + rect.width, this.unitSize.width - 1)
            .map(function (x, i) { return _this.createPoint([x, h2 - 1], "top", "land", false); });
        var line = __WEBPACK_IMPORTED_MODULE_16_lodash__["range"](rect.x + 1, rect.x + rect.width)
            .map(function (x, i) { return _this.createPoint([x, rect.y], "top", i == rect.width - 2 ? "coal" : "land"); });
        var left = __WEBPACK_IMPORTED_MODULE_16_lodash__["range"](rect.y + 1, h2)
            .map(function (y, i) { return _this.createPoint([rect.x, y - 1], "left", i == 0 ? "coal" : "land"); });
        var right = __WEBPACK_IMPORTED_MODULE_16_lodash__["range"](rect.y + 1, h2)
            .map(function (y, i) { return _this.createPoint([rect.x + rect.width - 1, y], "right", y == h2 - 1 ? "join" : "land"); });
        return leftLine.concat(left.reverse(), line, right, rightLine);
    };
    SeaComponent.prototype.rectCoastlinePointsBottom = function (rect) {
        var _this = this;
        var h2 = this.unitSize.height / 2;
        var rightLine = this.rangePoint(this.unitSize.width - 1, rect.x + rect.width - 1)
            .map(function (x, i) { return _this.createPoint([x, h2], "bottom", x == rect.x + rect.width - 1 ? "join" : "land", false); });
        var leftLine = this.rangePoint(rect.x - 1, 0)
            .map(function (x, i) { return _this.createPoint([x, h2], "bottom", "land", false); });
        var line = __WEBPACK_IMPORTED_MODULE_16_lodash__["range"](rect.x, rect.x + rect.width - 1)
            .map(function (x, i) { return _this.createPoint([x, rect.y + rect.height - 1], "bottom", x == rect.x ? "coal" : "land"); });
        var left = __WEBPACK_IMPORTED_MODULE_16_lodash__["range"](h2 + 1, rect.y + rect.height)
            .map(function (y, i) { return _this.createPoint([rect.x, y - 1], "left", i == 0 ? "join" : "land"); });
        var right = __WEBPACK_IMPORTED_MODULE_16_lodash__["range"](h2 + 1, rect.y + rect.height)
            .map(function (y, i) { return _this.createPoint([rect.x + rect.width - 1, y], "right", y == rect.y + rect.height - 1 ? "coal" : "land"); });
        return rightLine.concat(right, line.reverse(), left.reverse(), leftLine); //left.reverse(), line, right, leftLine)
    };
    // rectCoastlinePoints(rect: {x: number, y: number, width: number, height: number}){
    //   const top = _.range(rect.x + 1, rect.x + rect.width)
    //     .map((x, i) => this.createPoint([x, rect.y], "top", i == rect.width - 2))
    //   const bottom = _.range(rect.x + 1, rect.x + rect.width)
    //     .map((x,i) => this.createPoint([x - 1, rect.y + rect.height - 1], "bottom", i == 0))
    //   const left = _.range(rect.y + 1, rect.y + rect.height)
    //     .map((y,i) => this.createPoint([rect.x, y - 1], "left", i == 0))
    //   const right = _.range(rect.y + 1, rect.y + rect.height)
    //     .map((y,i) => this.createPoint([rect.x + rect.width - 1, y], "right", i == rect.height - 2))
    //   return top.concat(right, bottom.reverse(), left.reverse())
    // }
    SeaComponent.prototype.getSectionIndex = function (full, inner, p) {
        function getIndex(full, inner, x) {
            var start = (full - inner) / 2;
            var end = (full + inner) / 2;
            return x < start ? 0 : (x >= end ? 2 : 1);
        }
        return getIndex(full.h, inner.h, p.y) * 3 + getIndex(full.w, inner.w, p.x);
    };
    SeaComponent.prototype.generate = function (task) {
        // const maxWidth = Math.ceil(Sizes.width/this.positions.size) + 1
        var maxWidth = Math.ceil(__WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].width / this.positions.size) + 1;
        // const maxHeight = Math.ceil(Sizes.height/this.positions.size) + 1
        var _a = this.getWH(task), width = _a[0], height = _a[1];
        var x = Math.ceil((maxWidth - width) / 2);
        var y = Math.ceil((maxHeight - height) / 2);
        var full = { w: width + x * 2, h: maxHeight };
        this.unitSize = {
            width: full.w,
            height: maxHeight
        };
        var inner = { x: x, y: y, width: width, height: height };
        var data = __WEBPACK_IMPORTED_MODULE_11_core_utils_matrixs__["a" /* Matrixs */].create(full.w, full.h, function (x, y) {
            var type = !isInside(inner, [x, y]) ? "sand" : undefined;
            return { type: type, angle: 0 };
        });
        var rect = {
            x: inner.x - 1,
            y: inner.y - 1,
            width: inner.width + 2,
            height: inner.height + 2
        };
        var coastline = this.generateCoastline(rect);
        coastline.forEach(function (x) {
            __WEBPACK_IMPORTED_MODULE_11_core_utils_matrixs__["a" /* Matrixs */].set(data, x.pos, { type: x.type, angle: x.angle });
        });
        return Object(__WEBPACK_IMPORTED_MODULE_14_core_utils_tuples__["a" /* tuple */])(inner, data);
    };
    SeaComponent.prototype.onInit = function () {
        var _this = this;
        this.onOrientationChange(function () {
            _this.generateContent();
            if (_this.seaGroup.visible && _this.ships.length > 0) {
                _this.createShips();
            }
            _this.updateButtons();
        });
    };
    return SeaComponent;
}(__WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 331:
/*!***************************************************!*\
  !*** ./src/core/ui/animations/spriteAnimation.ts ***!
  \***************************************************/
/*! exports provided: SpriteAnimation */
/*! exports used: SpriteAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpriteAnimation; });
var SpriteAnimation;
(function (SpriteAnimation) {
    function play(img, sprites, delay, loop, startFrame) {
        if (loop === void 0) { loop = false; }
        if (startFrame === void 0) { startFrame = 0; }
        var index = startFrame;
        var signal = new Phaser.Signal();
        img.key = sprites[index];
        var interval = img.interval(function () {
            index += 1;
            if (index >= sprites.length) {
                index = 0;
                if (!loop) {
                    clearInterval(interval);
                    signal.dispatch();
                }
            }
            img.key = sprites[index];
        }, delay);
        return signal;
    }
    SpriteAnimation.play = play;
})(SpriteAnimation || (SpriteAnimation = {}));


/***/ }),

/***/ 332:
/*!***********************************!*\
  !*** ./src/games/ships/levels.ts ***!
  \***********************************/
/*! exports provided: maxShipCount, levelsArray, levels */
/*! exports used: levels, levelsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export maxShipCount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return levelsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);

var maxShipCount = 7;
function level(width, height, shipCount, instructionLength, withBlocks, withFlows) {
    if (withBlocks === void 0) { withBlocks = false; }
    if (withFlows === void 0) { withFlows = false; }
    return { width: width, height: height, shipCount: shipCount, instructionLength: instructionLength, withBlocks: withBlocks, withFlows: withFlows };
}
var levelsArray = [
    level(3, 2, 1, 1),
    level(3, 3, 2, 1),
    level(3, 3, 2, 2, true, false),
    level(3, 3, 2, 2, false, true),
    level(4, 3, 2, 3),
    level(4, 3, 2, 3, true),
    level(4, 3, 2, 3, false, true),
    level(4, 3, 2, 3, true, true),
    level(4, 3, 3, 1),
    level(4, 4, 3, 3),
    level(4, 4, 3, 3, true, true),
    level(5, 4, 4, 5),
    level(5, 4, 4, 3, true, true),
    level(6, 4, 5, 5),
    level(6, 4, 5, 3, true, true),
    level(6, 4, 6, 5),
    level(6, 4, 6, 3, true, true),
    level(6, 4, maxShipCount, 5),
    level(6, 4, maxShipCount, 3, true, true),
    level(6, 4, maxShipCount, 5, true, true),
];
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])(levelsArray);


/***/ }),

/***/ 333:
/*!**********************************!*\
  !*** ./src/games/ships/logic.ts ***!
  \**********************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_matrixs__ = __webpack_require__(/*! core/utils/matrixs */ 191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);








var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_2_core_utils__["e" /* RandomGenerator */]();
        _this.uniqPosSeq = [new __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__["b" /* UniqSeq */](0), new __WEBPACK_IMPORTED_MODULE_3_core_utils_circleSeq__["b" /* UniqSeq */](0)];
        return _this;
    }
    Logic.prototype.move = function (p, dirs, blocks, flows) {
        var _this = this;
        return dirs.reduce(function (_a, v) {
            var x = _a[0], y = _a[1];
            var _b = __WEBPACK_IMPORTED_MODULE_4_core_utils_matrixs__["a" /* Matrixs */].directions[v], dx = _b.x, dy = _b.y;
            var newPosition = Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(x + dx, y + dy);
            if (__WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].includesWith(blocks, newPosition)) {
                return Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(x, y);
            }
            var flow = flows.find(function (x) { return __WEBPACK_IMPORTED_MODULE_7_lodash__["isEqual"](x[0], newPosition); });
            if (flow) {
                return _this.move(newPosition, [flow[1]], blocks, flows);
            }
            return newPosition;
        }, p);
    };
    Logic.prototype.getAllAvailableDirections = function (position, level, restrictPositions, blocks, flows) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_core_utils_matrixs__["a" /* Matrixs */].matrixDirectionList.filter(function (dir) {
            var newPosition = _this.move(position, [dir], blocks, flows);
            return __WEBPACK_IMPORTED_MODULE_4_core_utils_matrixs__["a" /* Matrixs */].isInside(newPosition, level)
                && !__WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].includesWith(restrictPositions, newPosition);
        });
    };
    Logic.prototype.generateInstruction = function (level, position, otherShips, blocks, flows) {
        var _this = this;
        var restrictPositions = blocks.concat(flows.map(function (x) { return x[0]; }), otherShips);
        return __WEBPACK_IMPORTED_MODULE_7_lodash__["range"](level.instructionLength).reduce(function (_a) {
            var dirs = _a[0], p = _a[1];
            var allAvailable = _this.getAllAvailableDirections(p, level, restrictPositions, blocks, flows);
            if (allAvailable.length != 0) {
                var lastDir_1 = __WEBPACK_IMPORTED_MODULE_7_lodash__["last"](dirs);
                var available = !lastDir_1 || allAvailable.length == 1
                    ? allAvailable
                    : allAvailable.filter(function (x) { return x != __WEBPACK_IMPORTED_MODULE_4_core_utils_matrixs__["a" /* Matrixs */].oppositeDirections[lastDir_1]; });
                var dir = _this.rng.sample(available);
                dirs.push(dir);
                return Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(dirs, _this.move(p, [dir], blocks, flows));
            }
            else {
                return Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(dirs, p);
            }
        }, Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])([], position));
    };
    Logic.prototype.generateBlocksAndFlows = function (level) {
        // const count = (withItem: boolean, withSecond: boolean) =>
        //   !withItem ? 0 : (level.width == 3 || (level.width == 4 && withSecond) ? 1 : 2)
        var _this = this;
        var positions = __WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].uniqWith(__WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].cartesianProduct([1, level.width - 2], [1, level.height - 2]));
        var count = level.withBlocks && level.withFlows
            ? __WEBPACK_IMPORTED_MODULE_5_core_utils_numbers__["a" /* Numbers */].count(positions.length, 2)
            : positions.length;
        var _a = this.rng.split(positions, count), firstPositions = _a[0], secondPositions = _a[1];
        var _b = level.withBlocks
            ? Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(firstPositions, secondPositions)
            : Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])([], firstPositions), blocks = _b[0], flowPositions = _b[1];
        var getFlowDirections = function (p) { return __WEBPACK_IMPORTED_MODULE_4_core_utils_matrixs__["a" /* Matrixs */].matrixDirectionList.filter(function (dir) {
            var nextPosition = __WEBPACK_IMPORTED_MODULE_4_core_utils_matrixs__["a" /* Matrixs */].move(p, [dir]);
            return !__WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].includesWith(positions, nextPosition);
        }); };
        var flows = level.withFlows ? flowPositions
            .map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(x, _this.rng.sample(getFlowDirections(x))); }) : [];
        return Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(blocks, flows);
    };
    Logic.prototype.generateBeginPositions = function (level) {
        var _this = this;
        var _a = this.generateBlocksAndFlows(level), blocks = _a[0], flows = _a[1];
        var restrictPositions = blocks.concat(flows.map(function (x) { return x[0]; }));
        this.uniqPosSeq.forEach(function (x) { return x.reset(); });
        var nextPosition = function () {
            var p = Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(_this.uniqPosSeq[0].next(level.width), _this.uniqPosSeq[1].next(level.height));
            if (__WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].includesWith(restrictPositions, p)
                || _this.getAllAvailableDirections(p, level, restrictPositions, blocks, flows).length == 0) {
                return nextPosition();
            }
            restrictPositions.push(p);
            return p;
        };
        return Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(__WEBPACK_IMPORTED_MODULE_7_lodash__["range"](level.shipCount).map(function (i) { return nextPosition(); }), blocks, flows);
    };
    Logic.prototype.nextTask = function (level) {
        var prevTask = this.getPrevTask();
        var usePrevTask = prevTask && !this.isNewLevel;
        var width = level.width, height = level.height;
        var _a = prevTask && usePrevTask
            ? Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(prevTask.positions.end, prevTask.sea.blocks, prevTask.sea.flows), (prevTask.shipIndex + 1) % level.shipCount)
            : Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(this.generateBeginPositions(level), 0), _b = _a[0], positionBeginList = _b[0], blocks = _b[1], flows = _b[2], shipIndex = _a[1];
        var positionEndList = prevTask && usePrevTask ? prevTask.positions.end : positionBeginList;
        var _c = __WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].partition(positionEndList, function (x, i) {
            return i == shipIndex;
        }), positionBegin = _c[0][0], otherPositions = _c[1];
        var _d = this.generateInstruction(level, positionBegin, otherPositions, blocks, flows), instruction = _d[0], positionEnd = _d[1];
        var positions = {
            begin: positionBeginList,
            end: __WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].updateAt(positionEndList, shipIndex, function () { return positionEnd; })
        };
        var answers = [positionEnd];
        return {
            sea: {
                width: width,
                height: height,
                flows: flows,
                blocks: blocks
            },
            shipIndex: shipIndex,
            instruction: instruction,
            positions: positions,
            answers: answers
        };
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ })

});
//# sourceMappingURL=8.bundle.js.map