webpackJsonpNewGames([4],{

/***/ 135:
/*!*************************************!*\
  !*** ./src/games/detective/meta.ts ***!
  \*************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_games_detective_components_mainComponent__ = __webpack_require__(/*! games/detective/components/mainComponent */ 232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_detective_logic__ = __webpack_require__(/*! games/detective/logic */ 241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets__ = __webpack_require__(/*! ./assets */ 169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levels__ = __webpack_require__(/*! ./levels */ 207);




var gameId = "detective";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_3__levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 1, maxLevel: 100 }]
};
var metaData = {
    gameId: gameId,
    title: "Detective",
    logic: __WEBPACK_IMPORTED_MODULE_1_games_detective_logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_0_games_detective_components_mainComponent__["a" /* MainComponent */],
    levelOptions: levelOptions,
    scoreOptions: scoreOptions,
    ignoreError: true,
    darkBg: true,
    tutorialTaskCount: "manual",
    images: __WEBPACK_IMPORTED_MODULE_2__assets__["c" /* Images */].data,
    sounds: __WEBPACK_IMPORTED_MODULE_2__assets__["d" /* Sounds */].keys,
    atlasCount: 7,
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

/***/ 163:
/*!*****************************************************************!*\
  !*** ./src/core/ui/components/games/introAnimationComponent.ts ***!
  \*****************************************************************/
/*! exports provided: IntroAnimationComponent */
/*! exports used: IntroAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroAnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);




var durations = {
    animation: 1000,
    delay: 700
};
var IntroAnimationComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](IntroAnimationComponent, _super);
    function IntroAnimationComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            wordMargin: { x: 20, y: 0 }
        });
        return _this;
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

/***/ 165:
/*!*************************************************************************!*\
  !*** ./src/core/ui/controls/behaviors/introComplexAnimationBehavior.ts ***!
  \*************************************************************************/
/*! exports provided: IntroComplexAnimationBehavior */
/*! exports used: IntroComplexAnimationBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComplexAnimationBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_introAnimationComponent__ = __webpack_require__(/*! core/ui/components/games/introAnimationComponent */ 163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_behaviors_behavior__ = __webpack_require__(/*! core/ui/controls/behaviors/behavior */ 30);




var IntroComplexAnimationBehavior = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](IntroComplexAnimationBehavior, _super);
    function IntroComplexAnimationBehavior() {
        return _super.call(this) || this;
    }
    IntroComplexAnimationBehavior.prototype.onInit = function () {
        var duration = __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_introAnimationComponent__["a" /* IntroAnimationComponent */].durations.delay;
        this.tween = this.control.prepareDefaultIntroAnimation(duration);
        this.intro = this.control.add(this.control.createComponent(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_introAnimationComponent__["a" /* IntroAnimationComponent */]))
            .anchorCenter().updatePos(__WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].w2, __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].h2);
        this.intro.x -= this.control.cameraOffset.x;
        this.onComplete = this.tween.onComplete;
    };
    IntroComplexAnimationBehavior.prototype.start = function () {
        this.intro.startAnimation();
        this.tween.start();
    };
    return IntroComplexAnimationBehavior;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_controls_behaviors_behavior__["a" /* Behavior */]));



/***/ }),

/***/ 169:
/*!***************************************!*\
  !*** ./src/games/detective/assets.ts ***!
  \***************************************/
/*! exports provided: Fonts, Sounds, Colors, Images, Translations */
/*! exports used: Colors, Fonts, Images, Sounds, Translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Fonts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Sounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Images; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Translations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_detective_mainLogic__ = __webpack_require__(/*! games/detective/mainLogic */ 205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



var Fonts;
(function (Fonts) {
    Fonts.wordText = {
        fontSize: 70, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].white
    };
})(Fonts || (Fonts = {}));
var Sounds;
(function (Sounds) {
    Sounds.click_letter = "click_letter";
    Sounds.folder = "folder";
    Sounds.hover_letter = "hover_letter";
    Sounds.moving_cards = "moving_cards";
    Sounds.bg = "bg";
    Sounds.cards = "cards";
    Sounds.lamp_on = "lamp_on";
    Sounds.level_up = "level_up";
    Sounds.keys = [
        Sounds.click_letter,
        Sounds.folder,
        Sounds.hover_letter,
        Sounds.moving_cards,
        Sounds.bg,
        Sounds.cards,
        Sounds.lamp_on,
        Sounds.level_up,
    ];
})(Sounds || (Sounds = {}));
var Colors;
(function (Colors) {
    Colors.nit = 0xDE3918;
    Colors.panel = 0x281203;
})(Colors || (Colors = {}));
var Images;
(function (Images) {
    Images.bg = "bg";
    Images.bg1 = function (i) { return "bg1_" + i; };
    Images.card_mini = "card_mini";
    Images.card = "card";
    Images.folder = "folder";
    Images.paper = "paper";
    Images.polosk = "polosk";
    Images.knopka = "knopka";
    function item(id) {
        return "item_" + id;
    }
    Images.item = item;
    function nit(id) {
        return "nit_" + id;
    }
    Images.nit = nit;
    function itemSmall(id) {
        return "item_small_" + id;
    }
    Images.itemSmall = itemSmall;
    var itemList = __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](__WEBPACK_IMPORTED_MODULE_1_games_detective_mainLogic__["b" /* itemCount */]).map(item);
    Images.keys = [
        Images.bg,
        "bg_left",
        "bg_intro",
        Images.card_mini,
        Images.card,
        Images.folder,
        Images.paper,
        Images.polosk
    ].concat(itemList);
    Images.data = {
        sprites: Images.keys
    };
})(Images || (Images = {}));
var Translations;
(function (Translations) {
    Translations.title = "title";
    Translations.subtitle = "subtitle";
})(Translations || (Translations = {}));


/***/ }),

/***/ 170:
/*!*****************************************************************!*\
  !*** ./src/core/ui/controls/behaviors/btnAlphaHoverBehavior.ts ***!
  \*****************************************************************/
/*! exports provided: BtnAlphaHover */
/*! exports used: BtnAlphaHover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnAlphaHover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_controls_behaviors_behavior__ = __webpack_require__(/*! core/ui/controls/behaviors/behavior */ 30);


var BtnAlphaHover = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](BtnAlphaHover, _super);
    function BtnAlphaHover() {
        return _super.call(this) || this;
    }
    BtnAlphaHover.prototype.onInit = function () {
        var _this = this;
        var alpha = 0.5;
        this.control.alpha = alpha;
        this.control.onHover(function (out) {
            _this.control.alpha = out ? alpha : 1;
        });
    };
    return BtnAlphaHover;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_controls_behaviors_behavior__["a" /* Behavior */]));



/***/ }),

/***/ 205:
/*!******************************************!*\
  !*** ./src/games/detective/mainLogic.ts ***!
  \******************************************/
/*! exports provided: itemCount, Logic */
/*! exports used: Logic, itemCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return itemCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_utils_index__ = __webpack_require__(/*! core/utils/index */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_detective_words__ = __webpack_require__(/*! games/detective/words */ 233);




var itemCount = 71;
var Logic = /** @class */ (function () {
    function Logic() {
        this.words = __WEBPACK_IMPORTED_MODULE_3_games_detective_words__["a" /* Words */].getWords();
        this.rng = new __WEBPACK_IMPORTED_MODULE_1_core_utils_index__["e" /* RandomGenerator */]();
        this.uniqItem = new __WEBPACK_IMPORTED_MODULE_0_core_utils_circleSeq__["b" /* UniqSeq */](itemCount, this.rng);
        this.uniqWord = new __WEBPACK_IMPORTED_MODULE_0_core_utils_circleSeq__["b" /* UniqSeq */](this.words.easy.length, this.rng);
        this.index = 0;
    }
    Logic.prototype.nextTask = function (level) {
        if (this.index == level.taskCount) {
            return undefined;
        }
        var isLast = this.index == level.taskCount - 1;
        var allWords = this.words[level.difficulty];
        var words = this.uniqWord.nextSubsetFrom(allWords, level.wordCount);
        var itemId = __WEBPACK_IMPORTED_MODULE_2_core_utils_undef__["a" /* Undef */].map(this.prevTask, function (x) { return x.nextItemId; }) || this.uniqItem.next();
        var nextItemId = isLast ? undefined : this.uniqItem.next();
        var task = {
            words: words,
            itemId: itemId,
            nextItemId: nextItemId,
            isMain: true,
            nonScore: true,
            answers: { count: level.memorizeCount }
        };
        this.prevTask = task;
        this.index++;
        return task;
    };
    return Logic;
}());



/***/ }),

/***/ 206:
/*!*****************************************************!*\
  !*** ./src/core/ui/controls/imageWithBackground.ts ***!
  \*****************************************************/
/*! exports provided: ImageWithBackground */
/*! exports used: ImageWithBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageWithBackground; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);


var ImageWithBackground = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ImageWithBackground, _super);
    function ImageWithBackground(back, key) {
        var _this = _super.call(this, back) || this;
        _this.frontImg = _this.add(new __WEBPACK_IMPORTED_MODULE_1_core_ui_controls_index__["d" /* Img */](key));
        _this.updatePosition();
        return _this;
    }
    Object.defineProperty(ImageWithBackground.prototype, "frontKey", {
        get: function () {
            return this.frontImg.key;
        },
        set: function (v) {
            this.frontImg.key = v;
        },
        enumerable: true,
        configurable: true
    });
    ImageWithBackground.prototype.updatePosition = function () {
        this.frontImg.img.anchor.set(0.5, 0.5);
        this.frontImg.position.set(this.img.width / 2, this.img.height / 2);
    };
    return ImageWithBackground;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_controls_index__["d" /* Img */]));



/***/ }),

/***/ 207:
/*!***************************************!*\
  !*** ./src/games/detective/levels.ts ***!
  \***************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);

function level(difficulty, taskCount, wordCount, answerCount, memorizeCount) {
    if (memorizeCount === void 0) { memorizeCount = 1; }
    return { difficulty: difficulty, taskCount: taskCount, wordCount: wordCount, answerCount: answerCount, memorizeCount: memorizeCount };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])([
    level("easy", 3, 5, 2),
    level("easy", 3, 5, 3),
    level("easy", 4, 5, 3),
    level("easy", 5, 5, 3),
    level("easy", 5, 4, 4),
    level("normal", 6, 4, 4),
    level("normal", 7, 3, 4),
    level("normal", 8, 3, 5),
    level("normal", 9, 2, 5),
    level("normal", 10, 2, 6),
    level("normal", 10, 1, 6),
    level("normal", 6, 5, 6, 2),
    level("normal", 5, 5, 6, 3),
    level("hard", 8, 2, 6, 2),
    level("hard", 6, 3, 6, 3),
]);


/***/ }),

/***/ 232:
/*!*********************************************************!*\
  !*** ./src/games/detective/components/mainComponent.ts ***!
  \*********************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_controls_behaviors_introComplexAnimationBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/introComplexAnimationBehavior */ 165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_detective_assets__ = __webpack_require__(/*! games/detective/assets */ 169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_mainComponent__ = __webpack_require__(/*! ./main/mainComponent */ 235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__remember_mainComponent__ = __webpack_require__(/*! ./remember/mainComponent */ 239);






var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.main = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_4__main_mainComponent__["a" /* MainComponent */]));
        return _this;
    }
    MainComponent.prototype.onInit = function () {
        this.startIntro();
        this.playBackgroundLoop();
    };
    MainComponent.prototype.introAnimation = function () {
        var behavior = new __WEBPACK_IMPORTED_MODULE_2_core_ui_controls_behaviors_introComplexAnimationBehavior__["a" /* IntroComplexAnimationBehavior */]();
        this.addBehavior(behavior);
        return behavior;
    };
    MainComponent.prototype.onNewTask = function (task) {
        var _this = this;
        this.context.uiService.answerStatus.hide = task.isMain;
        if (task.isMain) {
            if (!this.main) {
                var signal = this.context.uiService.answerStatus.onAnimationComplete;
                this.disableInputOn(signal).addOnce(function () {
                    _this.main = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_4__main_mainComponent__["a" /* MainComponent */]));
                    _this.main.setProps(task);
                    if (_this.rememeber) {
                        _this.rememeber.destroy(true);
                        _this.rememeber = undefined;
                    }
                });
            }
            else {
                this.main.setProps(task);
            }
        }
        else {
            if (!this.rememeber) {
                this.playSound(__WEBPACK_IMPORTED_MODULE_3_games_detective_assets__["d" /* Sounds */].level_up);
                this.rememeber = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_5__remember_mainComponent__["a" /* MainComponent */]));
                if (this.main) {
                    this.main.destroy(true);
                    this.main = undefined;
                }
            }
            this.rememeber.setProps(task);
        }
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 233:
/*!**************************************!*\
  !*** ./src/games/detective/words.ts ***!
  \**************************************/
/*! exports provided: Words */
/*! exports used: Words */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Words; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__ = __webpack_require__(/*! core/logic/cnst */ 36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_instances__ = __webpack_require__(/*! core/services/instances */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordsRu__ = __webpack_require__(/*! ./wordsRu */ 234);



var wordsDB = {
    ru: __WEBPACK_IMPORTED_MODULE_2__wordsRu__["a" /* default */]
};
var Words;
(function (Words) {
    function getWords() {
        var localeWords = wordsDB[__WEBPACK_IMPORTED_MODULE_1_core_services_instances__["d" /* settingService */].settings.locale] || wordsDB[__WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__["a" /* Cnst */].defaultLocale];
        return {
            easy: localeWords[1],
            normal: localeWords[1].concat(localeWords[2]),
            hard: localeWords[1].concat(localeWords[2], localeWords[3])
        };
    }
    Words.getWords = getWords;
})(Words || (Words = {}));


/***/ }),

/***/ 234:
/*!****************************************!*\
  !*** ./src/games/detective/wordsRu.ts ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    1: ["виадук", "метла", "дерево", "грива", "ландыш", "самолет", "винтик", "локомотив", "медведь", "бордюр", "газета", "бревно", "чайник", "локон", "слон", "бритва", "кость", "бланк", "кнопка", "гиря", "обувь", "письмо", "конверт", "карман", "грабли", "листья", "корона", "кукуруза", "лестница", "платье", "двигатель", "труба", "стих", "растения", "мозг", "компьютер", "музей", "студент", "камень", "суд", "кресло", "полковник", "существо", "молоко", "голос", "металл", "кабинет", "чиновник", "имущество", "академия", "директор", "деревня", "озеро", "секунда", "художник", "деталь", "профессор", "поездка", "бумага", "ресторан", "концерт", "остров", "подарок", "представитель", "режиссер", "монастырь", "кофе", "гость", "сотня", "планета", "ракета", "стекло", "книжка", "рис", "помощник", "ручей", "окружность", "комета", "корабль", "князь"],
    2: ["настроение", "аромат", "счастье", "гребля", "верность", "сила", "крик", "утро", "гармония", "воздух", "голод", "рельеф", "племя", "производство", "смирение", "железо", "погода", "буря", "совет", "граница", "логово", "грезы", "океан", "блеск", "работа", "логика", "решение", "интрига", "легенда", "тайна", "запах", "история", "ребята", "музыка", "должность", "реформа", "местность", "жизнь", "модель", "институт", "сцена", "грусть", "часть", "шаг", "вид", "адрес", "культура", "содержание", "средство", "наука", "талант", "вода", "генетика", "земля", "боль", "уважение", "вкус", "шаг", "стабильность", "установка", "холод", "состав", "молчание", "название", "праздник", "голос", "сутки", "руководство", "соглашение", "обстановка", "скорость", "давление", "количество", "будущее", "удивление", "успех", "частность", "прибыль", "ночь", "сезон", "польза", "размер", "действие", "влияние", "смысл", "июнь", "выступление", "конфликт", "мощность", "шанс", "защита", "предел", "шутка", "указание", "цифра", "корень", "фактор", "задачка", "причина", "устройство", "журнал", "чувство", "эффект", "искусство", "угроза", "атмосфера", "игра", "развитие", "интерес", "свобода", "желание", "эксперимент", "храм", "линия", "форма", "звонок", "слой", "пропасть", "красота", "глубина", "стиль", "совесть", "передача", "разработка", "акция"],
    3: ["быть", "сказать", "говорить", "хотеть", "иметь", "видеть", "думать", "сделать", "понимать", "жить", "делать", "работать", "стоять", "пойти", "считать", "смотреть", "взять", "получать", "сидеть", "становиться", "спросить", "являться", "принимать", "любить", "оказаться", "оставаться", "увидеть", "прийти", "представлять", "ждать", "писать", "казаться", "называть", "начинать", "понять", "дать", "начать", "остаться", "помнить", "находить", "выйти", "следовать", "проводить", "происходить", "написать", "создавать", "посмотреть", "играть", "подумать", "решить", "вернуться", "проходить", "приходить", "ходить", "ответить", "отвечать", "лежать", "бывать", "читать", "использовать", "выходить", "рассказывать", "пройти", "занимать", "существовать", "получить", "продолжать", "показывать", "слышать", "стоить", "жалеть", "облако", "покупатель", "минута", "уходить", "прийтись", "вести", "смочь", "бояться", "спрашивать", "появиться", "находиться", "составлять", "позволять", "найти", "чувствовать", "слушать", "предлагать", "решать", "уйти", "пытаться", "помогать", "оказываться", "просить", "вызывать"]
});


/***/ }),

/***/ 235:
/*!**************************************************************!*\
  !*** ./src/games/detective/components/main/mainComponent.ts ***!
  \**************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_instances__ = __webpack_require__(/*! core/services/instances */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_detective_assets__ = __webpack_require__(/*! games/detective/assets */ 169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_games_detective_components_main_carouselComponent__ = __webpack_require__(/*! games/detective/components/main/carouselComponent */ 236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__answersComponent__ = __webpack_require__(/*! ./answersComponent */ 237);











var duratoins = {
    delay: 1800
};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].bi({
            item: { x: 627, y: 40 },
            answer: { x: 1350, y: 170 },
            mainGroup: { y: 120 }
        }, {
            item: { x: 665, y: 290 },
            answer: { x: 1023, y: 480 },
            mainGroup: { y: 180 },
        });
        _this.bg = _this.addImage([__WEBPACK_IMPORTED_MODULE_8_games_detective_assets__["c" /* Images */].bg, [0, 0]]);
        _this.mainGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_control__["a" /* Control */]());
        _this.item = _this.mainGroup.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_9_games_detective_components_main_carouselComponent__["a" /* CarouselComponent */]))
            .setBiPos(_this.biPositions.item);
        _this.answers = _this.mainGroup.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_10__answersComponent__["a" /* AnswersComponent */])).anchorCenterX()
            .setBiPos(_this.biPositions.answer);
        return _this;
    }
    MainComponent.prototype.onInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7_core_ui_services_instances__["e" /* screenSizeService */].isPortrait) {
            this.answers.symmetricScale = 0.9;
            this.item.symmetricScale = 0.6;
        }
        if (this.isTutorial) {
            this.tutorial = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */]).make({ textAlign: "center" }));
            this.tutorial.setProps(__WEBPACK_IMPORTED_MODULE_1_core_services_instances__["e" /* translationService */].getTranslation(__WEBPACK_IMPORTED_MODULE_8_games_detective_assets__["e" /* Translations */].title));
            this.mainGroup.setBiPos(this.biPositions.mainGroup);
        }
        if (__WEBPACK_IMPORTED_MODULE_7_core_ui_services_instances__["e" /* screenSizeService */].isPortrait) {
            if (this.isFirstTask) {
                if (this.tutorial) {
                    this.tutorial.visible = false;
                }
                this.item.visible = false;
                this.delay(this.isFirstTask ? duratoins.delay : 0).addOnce(function () {
                    if (_this.tutorial) {
                        __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].setVisible(_this.tutorial, true);
                    }
                    __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].setVisible(_this.item, true);
                });
            }
        }
    };
    MainComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        var task = this.props;
        this.item.setProps([task.itemId, task.nextItemId]);
        this.answers.setProps(task.words);
        if (this.isFirstTask) {
            this.answers.visible = false;
            this.context.uiService.mainComponent.onIntroComplete.addOnce(function () {
                _this.answers.visible = true;
                _this.playSound(__WEBPACK_IMPORTED_MODULE_8_games_detective_assets__["d" /* Sounds */].folder);
                _this.disableInputOn(__WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].appearFromBottom(_this.answers).onComplete);
            });
        }
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 236:
/*!******************************************************************!*\
  !*** ./src/games/detective/components/main/carouselComponent.ts ***!
  \******************************************************************/
/*! exports provided: CarouselComponent */
/*! exports used: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_imageWithBackground__ = __webpack_require__(/*! core/ui/controls/imageWithBackground */ 206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_detective_assets__ = __webpack_require__(/*! games/detective/assets */ 169);







var durations = {
    animation: 300
};
var scale = 0.7;
var alpha = 0.2;
var CarouselComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](CarouselComponent, _super);
    function CarouselComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
            next: { x: 0, y: 300 },
            current: { x: 0, y: 600 },
            prev: { x: 0, y: 900 },
        }, {
            next: { x: 300, y: 0 },
            current: { x: 600, y: 0 },
            prev: { x: 900, y: 0 },
        });
        _this.first = true;
        return _this;
    }
    CarouselComponent.prototype.onInit = function () {
        this.prev2Img = this.createImg(this.biPositions.prev).updateFields({ visible: false });
        this.prevImg = this.createImg(this.biPositions.prev).updateFields({ visible: false });
        this.nextImg = this.createImg(this.biPositions.next);
        this.currentImg = this.createImg(this.biPositions.current, true);
    };
    CarouselComponent.prototype.createImg = function (pos, isCurrent) {
        if (isCurrent === void 0) { isCurrent = false; }
        return this.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_imageWithBackground__["a" /* ImageWithBackground */](this.gameKey(__WEBPACK_IMPORTED_MODULE_6_games_detective_assets__["c" /* Images */].card), this.gameKey(__WEBPACK_IMPORTED_MODULE_6_games_detective_assets__["c" /* Images */].item(0))))
            .setBiPos(pos)
            .anchorCenter().fluentUpdate(function (x) {
            x.symmetricScale = isCurrent ? 1 : scale;
            x.frontImg.alpha = isCurrent ? 1 : alpha;
        });
    };
    CarouselComponent.prototype.animation = function () {
        var _this = this;
        this.playSound(__WEBPACK_IMPORTED_MODULE_6_games_detective_assets__["d" /* Sounds */].moving_cards);
        var nextPos = this.current(this.biPositions.next);
        var currentPos = this.current(this.biPositions.current);
        this.currentImg.setPos(nextPos);
        this.currentImg.symmetricScale = scale;
        this.currentImg.frontImg.alpha = alpha;
        this.bringToTop(this.prevImg);
        this.disableInput(true);
        __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.prevImg.frontImg,
            reverse: true,
            to: { alpha: 1 },
            duration: durations.animation
        });
        __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].onPercent(__WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.prevImg,
            reverse: true,
            to: __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, currentPos, { symmetricScale: 1 }),
            easing: Phaser.Easing.Sinusoidal.In,
            duration: durations.animation,
        }), 30, function () {
            _this.bringToTop(_this.currentImg);
            __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
                target: _this.currentImg,
                to: __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, currentPos, { symmetricScale: 1 }),
                easing: Phaser.Easing.Sinusoidal.Out,
                duration: durations.animation,
                onComplete: function () {
                    if (!_this.first) {
                        _this.prev2Img.visible = true;
                    }
                    _this.disableInput(false);
                }
            });
            __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
                target: _this.currentImg.frontImg,
                to: { alpha: 1 },
                duration: durations.animation
            });
        });
    };
    CarouselComponent.prototype.onPropsUpdate = function () {
        if (!this.first) {
            this.prevImg.visible = true;
        }
        this.prev2Img.frontKey = this.prevImg.frontKey;
        this.prevImg.frontKey = this.currentImg.frontKey;
        if (this.first) {
            this.currentImg.frontKey = this.gameKey(__WEBPACK_IMPORTED_MODULE_6_games_detective_assets__["c" /* Images */].item(this.props[0]));
        }
        else {
            this.currentImg.frontKey = this.nextImg.frontKey;
        }
        var nextItem = this.props[1];
        if (__WEBPACK_IMPORTED_MODULE_5_core_utils_undef__["a" /* Undef */].is(nextItem)) {
            this.nextImg.visible = false;
        }
        else {
            this.nextImg.frontKey = this.gameKey(__WEBPACK_IMPORTED_MODULE_6_games_detective_assets__["c" /* Images */].item(nextItem));
        }
        if (!this.first) {
            this.animation();
        }
        this.first = false;
    };
    return CarouselComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 237:
/*!*****************************************************************!*\
  !*** ./src/games/detective/components/main/answersComponent.ts ***!
  \*****************************************************************/
/*! exports provided: AnswersComponent */
/*! exports used: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_index__ = __webpack_require__(/*! core/assets/index */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_btnAlphaHoverBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/btnAlphaHoverBehavior */ 170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_behaviors_btnHoverSoundBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/btnHoverSoundBehavior */ 238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_detective_assets__ = __webpack_require__(/*! games/detective/assets */ 169);











var AnswersComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AnswersComponent, _super);
    function AnswersComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            margin: { x: 50, y: 20 },
            group: { x: 140, y: 270 },
            maxWidth: 600
        });
        _this.positionsPortrait = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].expand(_this.positions, {
            margin: { x: 0, y: 0 }
        });
        _this.getPositions = function () { return __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? _this.positionsPortrait : _this.positions; };
        _this.folder = _this.addImage([__WEBPACK_IMPORTED_MODULE_10_games_detective_assets__["c" /* Images */].folder, [0, 0]]);
        _this.btns = [];
        _this.group = _this.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_index__["b" /* Control */]()).setPos(_this.positions.group);
        return _this;
    }
    AnswersComponent.prototype.onInit = function () {
        var _this = this;
        this.onChangeForRun(function () { return __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].isPortrait; }, function (x) {
            _this.updatePositions();
        });
    };
    AnswersComponent.prototype.onAnswer = function (answer) {
        if (answer.status == __WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].CorrectPartial) {
            this.btns.find(function (x) { return x.tag == answer.answerId; }).visible = false;
        }
    };
    AnswersComponent.prototype.updatePositions = function () {
        __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableColumn(this.btns, this.getPositions().margin);
    };
    AnswersComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.group.removeAll(true);
        this.btns = this.props.map(function (word) {
            var btn = _this.addAnswerBehavior(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_index__["a" /* Btn */](word, function () {
            }, __WEBPACK_IMPORTED_MODULE_1_core_assets_index__["c" /* CoreFonts */].button(__WEBPACK_IMPORTED_MODULE_1_core_assets_index__["b" /* CoreColors */].lightBlack, 60))
                .updateFields({ tag: word })
                .addBehavior(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_btnAlphaHoverBehavior__["a" /* BtnAlphaHover */]())
                .addBehavior(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_behaviors_btnHoverSoundBehavior__["a" /* BtnHoverSoundBehavior */](_this, __WEBPACK_IMPORTED_MODULE_10_games_detective_assets__["d" /* Sounds */].hover_letter)), word, { location: "right" });
            return __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_controlUtl__["a" /* ControlUtl */].scaleToFit(btn, _this.positions.maxWidth);
        });
        this.group.addChildren(this.btns);
        this.updatePositions();
        this.group.updatePivot();
    };
    return AnswersComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 238:
/*!*****************************************************************!*\
  !*** ./src/core/ui/controls/behaviors/btnHoverSoundBehavior.ts ***!
  \*****************************************************************/
/*! exports provided: BtnHoverSoundBehavior */
/*! exports used: BtnHoverSoundBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnHoverSoundBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_controls_behaviors_behavior__ = __webpack_require__(/*! core/ui/controls/behaviors/behavior */ 30);


var BtnHoverSoundBehavior = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](BtnHoverSoundBehavior, _super);
    function BtnHoverSoundBehavior(gameCompoent, key) {
        var _this = _super.call(this) || this;
        _this.gameCompoent = gameCompoent;
        _this.key = key;
        return _this;
    }
    BtnHoverSoundBehavior.prototype.onInit = function () {
        var _this = this;
        this.control.onHover(function (out) {
            if (!out) {
                _this.gameCompoent.playSound(_this.key);
            }
        });
    };
    return BtnHoverSoundBehavior;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_controls_behaviors_behavior__["a" /* Behavior */]));



/***/ }),

/***/ 239:
/*!******************************************************************!*\
  !*** ./src/games/detective/components/remember/mainComponent.ts ***!
  \******************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_instances__ = __webpack_require__(/*! core/services/instances */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameUI_textPanelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/textPanelComponent */ 162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_detective_assets__ = __webpack_require__(/*! games/detective/assets */ 169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__answersComponent__ = __webpack_require__(/*! ./answersComponent */ 240);













var biValues = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_positions__["a" /* BiValue */].create({
    bgVisible: true,
    panelColor: __WEBPACK_IMPORTED_MODULE_11_games_detective_assets__["a" /* Colors */].panel
}, {
    bgVisible: false,
    panelColor: undefined
});
var durations = {
    lightDelay: 300
};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
            item: { y: 260 },
            panel: { width: 680, height: 150 },
            tutorial: { y: 840 },
            tutorialPanel: { width: 1100 },
            mainGroup: { y: 0 },
            maxWidth: 660
        });
        _this.positionsPortrait = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].update(_this.positions, {
            item: { y: 100 },
            tutorialPanel: { width: undefined },
            mainGroup: { y: -80 },
            tutorial: { y: 1020 },
        });
        _this.getPositions = function () { return __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? _this.positionsPortrait : _this.positions; };
        _this.bg = _this.addImage([__WEBPACK_IMPORTED_MODULE_11_games_detective_assets__["c" /* Images */].bg, [0, 0]]);
        _this.bg1 = _this.addImage([__WEBPACK_IMPORTED_MODULE_11_games_detective_assets__["c" /* Images */].bg1(0), [0, 0]]).onBiValueChange(biValues.bgVisible, function (c, v) { return c.visible = v; });
        _this.mainGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_index__["b" /* Control */]());
        _this.answers = _this.mainGroup.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_12__answersComponent__["a" /* AnswersComponent */]));
        _this.index = 0;
        return _this;
    }
    MainComponent.prototype.onInit = function () {
        this.item = this.mainGroup.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameUI_textPanelComponent__["a" /* TextPanelComponent */]({
            size: this.positions.panel,
            font: __WEBPACK_IMPORTED_MODULE_11_games_detective_assets__["b" /* Fonts */].wordText,
            color: __WEBPACK_IMPORTED_MODULE_11_games_detective_assets__["a" /* Colors */].panel
        }))
            .anchorCenterX().updatePos(__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2, this.getPositions().item.y);
        if (this.isTutorial) {
            this.tutorial = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */]).make({
                marginTop: this.getPositions().tutorial.y,
                textAlign: "center",
                panel: { color: this.current(biValues.panelColor), size: this.getPositions().tutorialPanel }
            }));
            this.tutorial.setProps(__WEBPACK_IMPORTED_MODULE_1_core_services_instances__["e" /* translationService */].getTranslation(__WEBPACK_IMPORTED_MODULE_11_games_detective_assets__["e" /* Translations */].subtitle));
            this.mainGroup.setPos(this.getPositions().mainGroup);
        }
    };
    MainComponent.prototype.onAnswer = function (answer) {
        this.index++;
        this.updateTask();
        if (__WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].isMain(answer.status)) {
            this.answers.showFinalScene(this.props);
            this.item.visible = false;
        }
        if (this.isTutorial && answer.status == __WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].Correct) {
            this.tutorial.visible = false;
            this.item.visible = false;
        }
    };
    MainComponent.prototype.updateTask = function () {
        if (this.index >= this.props.data.length) {
            return;
        }
        var task = this.props.data[this.index];
        this.item.setProps(task.words[0]);
        this.answers.setProps(task.itemIds);
    };
    MainComponent.prototype.lightOn = function () {
        var _this = this;
        this.item.visible = false;
        this.answers.visible = false;
        this.bg1.key = this.gameKey(__WEBPACK_IMPORTED_MODULE_11_games_detective_assets__["c" /* Images */].bg1(0));
        __WEBPACK_IMPORTED_MODULE_10_core_utils_undef__["a" /* Undef */].map(this.tutorial, function (x) { return x.visible = false; });
        this.delay(durations.lightDelay).addOnce(function () {
            _this.playSound(__WEBPACK_IMPORTED_MODULE_11_games_detective_assets__["d" /* Sounds */].lamp_on);
            _this.bg1.key = _this.gameKey(__WEBPACK_IMPORTED_MODULE_11_games_detective_assets__["c" /* Images */].bg1(1));
            _this.item.visible = true;
            _this.answers.visible = true;
            __WEBPACK_IMPORTED_MODULE_10_core_utils_undef__["a" /* Undef */].map(_this.tutorial, function (x) { return x.visible = true; });
        });
    };
    MainComponent.prototype.onPropsUpdate = function () {
        // this.answers.showFinalScene(this.props)
        this.index = 0;
        this.updateTask();
        if (!__WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].isPortrait) {
            this.lightOn();
        }
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 240:
/*!*********************************************************************!*\
  !*** ./src/games/detective/components/remember/answersComponent.ts ***!
  \*********************************************************************/
/*! exports provided: AnswersComponent */
/*! exports used: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_index__ = __webpack_require__(/*! core/assets/index */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_GraphicsImg__ = __webpack_require__(/*! core/ui/controls/GraphicsImg */ 155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_imageWithBackground__ = __webpack_require__(/*! core/ui/controls/imageWithBackground */ 206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_utils_index__ = __webpack_require__(/*! core/utils/index */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_games_detective_assets__ = __webpack_require__(/*! games/detective/assets */ 169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash__);















var maxFinalSceneImageCount = 6;
var durations = {
    animation: 500,
    angle: { move: 300, fall: 800 }
};
var AnswersComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AnswersComponent, _super);
    function AnswersComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].create({
            margin: { x: 340, y: 320, absolute: true },
            maxWidth: 1200,
            nitStart: [300, -80],
            cardMinOffset: { x: 0, y: 50 },
            lineWidth: 20,
            lineMargin: 15,
            curve: 80,
            answerY: 750,
            shift: 30,
        });
        _this.positionsPortrait = __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].update(_this.positions, {
            maxWidth: 700,
            answerY: 760,
        });
        _this.getPositions = function () { return __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? _this.positionsPortrait : _this.positions; };
        _this.images = [];
        _this.group = _this.add(new __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_index__["b" /* Control */]()).anchorCenter().updatePos(__WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].w2, _this.getPositions().answerY);
        _this.rng = new __WEBPACK_IMPORTED_MODULE_12_core_utils_index__["e" /* RandomGenerator */]();
        _this.colCount = function () { return __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? 2 : 3; };
        _this.rowCount = function () { return __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? 3 : 2; };
        return _this;
    }
    AnswersComponent.prototype.onInit = function () {
        var _this = this;
        this.onChangeForRun(function () { return __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].isPortrait; }, function (x) {
            _this.updatePositions();
        });
    };
    AnswersComponent.prototype.showFinalScene = function (task) {
        var _this = this;
        this.group.removeAll(true);
        var images = __WEBPACK_IMPORTED_MODULE_14_lodash__["take"](task.answers.seq, maxFinalSceneImageCount).map(function (x) { return _this.createImage(x).anchorCenterX(); });
        var colCount = this.colCount();
        this.group.addChildren(images);
        __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].tableFromList(images, colCount, __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.getPositions().margin, { x: this.getPositions().maxWidth / colCount }));
        images.forEach(function (x) {
            __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_controlUtl__["a" /* ControlUtl */].randomPositionShift(_this.rng, x, 0, 10);
            // x.visible = false
        });
        this.group.updatePivot();
        var imagePositions = images.map(function (img) { return [img.x, img.y]; });
        this.drawNits(imagePositions);
        this.group.alpha = 0;
        __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.group,
            to: { alpha: 1 },
            duration: durations.animation
        });
    };
    AnswersComponent.prototype.drawNit = function (graphics, _a, _b) {
        var xs = _a[0], ys = _a[1];
        var x = _b[0], y = _b[1];
        graphics.moveTo(xs, ys);
        var to = [x + this.positions.cardMinOffset.x, y + this.positions.cardMinOffset.y];
        graphics.bezierCurveTo(xs, ys, xs * 1.3, ys * 0.3, to[0], to[1]);
        return to;
    };
    AnswersComponent.prototype.drawNits = function (pos) {
        var _this = this;
        var knopkaPositoin = [];
        var nits = this.group.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_GraphicsImg__["b" /* GraphicsImg */](function (g) {
            g.lineStyle(_this.positions.lineWidth, __WEBPACK_IMPORTED_MODULE_13_games_detective_assets__["a" /* Colors */].nit);
            knopkaPositoin = pos.map(function (x) { return _this.drawNit(g, _this.positions.nitStart, x); });
        }));
        knopkaPositoin.forEach(function (to) { return _this.group.add(_this.makeImage([__WEBPACK_IMPORTED_MODULE_13_games_detective_assets__["c" /* Images */].knopka, to]).anchorCenter()); });
        nits.updatePos(pos[0][0] - this.positions.lineMargin, this.positions.nitStart[1] - this.positions.lineMargin);
        this.group.add(this.makeImage([__WEBPACK_IMPORTED_MODULE_13_games_detective_assets__["c" /* Images */].knopka, this.positions.nitStart]).anchorCenter());
    };
    AnswersComponent.prototype.onAnswer = function (answer) {
        if (__WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].isMain(answer.status)) {
        }
    };
    AnswersComponent.prototype.updatePositions = function () {
        __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.images, this.colCount(), this.getPositions().margin);
    };
    AnswersComponent.prototype.createImage = function (item) {
        return new __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_imageWithBackground__["a" /* ImageWithBackground */](this.gameKey(__WEBPACK_IMPORTED_MODULE_13_games_detective_assets__["c" /* Images */].card_mini), this.gameKey(__WEBPACK_IMPORTED_MODULE_13_games_detective_assets__["c" /* Images */].itemSmall(item)))
            .fluentUpdate(function (x) {
            x.updatePosition();
        });
    };
    AnswersComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.group.removeAll(true);
        this.images = this.props.map(function (item) {
            return _this.addAnswerBehavior(new __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_index__["a" /* Btn */]("", function () {
            }, __WEBPACK_IMPORTED_MODULE_1_core_assets_index__["c" /* CoreFonts */].button(__WEBPACK_IMPORTED_MODULE_1_core_assets_index__["b" /* CoreColors */].black), _this.createImage(item)).anchorCenterX(), item, { location: "top", dark: true })
                .onHover(function (out, btn) {
                if (out) {
                    __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].angleElasticZero(btn, durations.angle.fall);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].toAngle(btn, _this.rng.sign() * 5, durations.angle.move);
                    _this.playSound(__WEBPACK_IMPORTED_MODULE_13_games_detective_assets__["d" /* Sounds */].cards);
                }
            });
        });
        this.group.addChildren(this.images);
        this.updatePositions();
        this.group.updatePivot();
        this.answersAreReady();
    };
    return AnswersComponent;
}(__WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 241:
/*!**************************************!*\
  !*** ./src/games/detective/logic.ts ***!
  \**************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic_index__ = __webpack_require__(/*! core/logic/index */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levels__ = __webpack_require__(/*! ./levels */ 207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mainLogic__ = __webpack_require__(/*! ./mainLogic */ 205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rememberLogic__ = __webpack_require__(/*! ./rememberLogic */ 242);






var tutorialTaskCount = 2;
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainLogic = new __WEBPACK_IMPORTED_MODULE_4__mainLogic__["a" /* Logic */]();
        _this.mainTaskIndex = 0;
        return _this;
    }
    Logic.prototype.nextTask = function (level) {
        if (this.isTutorial) {
            if (this.mainTaskIndex >= tutorialTaskCount) {
                return undefined;
            }
            level = __WEBPACK_IMPORTED_MODULE_3__levels__["a" /* levels */][1];
        }
        // return {data: [{
        //     words: ["sldfkjs", "slkdfjssf"],
        //     itemIds: [1,2,3],
        //     reverse: false
        //   }],
        //   isMain: false,
        //   // answers: {seq: [1,2,3,4,5,6,7,8,9,10]}
        //   answers: {seq: [1,2,3,5]}
        // }
        var task = this.mainLogic.nextTask(level);
        if (task) {
            return task;
        }
        else {
            this.mainTaskIndex += 1;
            this.mainLogic = new __WEBPACK_IMPORTED_MODULE_4__mainLogic__["a" /* Logic */]();
            this.rememberLogic = new __WEBPACK_IMPORTED_MODULE_5__rememberLogic__["a" /* RememberLogic */]();
            this.rememberLogic.setTaskAnswers(__WEBPACK_IMPORTED_MODULE_2_lodash__["takeRight"](this.getTaskAnswers(), level.taskCount));
            var remember = this.rememberLogic.nextTask(level);
            return remember;
        }
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic_index__["c" /* GameLogic */]));



/***/ }),

/***/ 242:
/*!**********************************************!*\
  !*** ./src/games/detective/rememberLogic.ts ***!
  \**********************************************/
/*! exports provided: RememberLogic */
/*! exports used: RememberLogic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RememberLogic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_utils_arrays__ = __webpack_require__(/*! core/utils/arrays */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_utils_index__ = __webpack_require__(/*! core/utils/index */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);




var RememberLogic = /** @class */ (function () {
    function RememberLogic() {
        this.rng = new __WEBPACK_IMPORTED_MODULE_1_core_utils_index__["e" /* RandomGenerator */]();
    }
    RememberLogic.prototype.setTaskAnswers = function (taskAnswers) {
        this.allTasks = this.rng.derangement(__WEBPACK_IMPORTED_MODULE_3_lodash__["flatMap"](taskAnswers, function (_a) {
            var task = _a[0], answers = _a[1];
            return answers
                .map(function (answer) { return Object(__WEBPACK_IMPORTED_MODULE_2_core_utils_tuples__["a" /* tuple */])(task.itemId, answer); });
        }));
        var _a = __WEBPACK_IMPORTED_MODULE_0_core_utils_arrays__["a" /* Arrays */].unzip(this.allTasks), items = _a[0], words = _a[1];
        this.allWords = __WEBPACK_IMPORTED_MODULE_3_lodash__["uniq"](words);
        this.allItems = __WEBPACK_IMPORTED_MODULE_3_lodash__["uniq"](items);
    };
    RememberLogic.prototype.getAnswers = function (prev, allAnswers, level) {
        var otherAnswers = this.rng.subset(__WEBPACK_IMPORTED_MODULE_3_lodash__["difference"](allAnswers, [prev]), level.answerCount - 1);
        return this.rng.shuffle([prev], otherAnswers);
    };
    RememberLogic.prototype.createAnswer = function (prevItem, prevAnswer, level) {
        var reverse = true;
        var itemIds = reverse
            ? this.getAnswers(prevItem, this.allItems, level)
            : [prevItem];
        var words = reverse ? [prevAnswer] : this.getAnswers(prevAnswer, this.allWords, level);
        var answer = reverse ? prevItem : prevAnswer;
        var answerTask = {
            words: words,
            itemIds: itemIds,
            reverse: reverse,
            answer: answer
        };
        return answerTask;
    };
    RememberLogic.prototype.nextTask = function (level) {
        var _this = this;
        var data = this.allTasks.map(function (x) { return _this.createAnswer(x[0], x[1], level); });
        var answers = { seq: data.map(function (x) { return x.answer; }) };
        var task = {
            isMain: false,
            data: data,
            answers: answers
        };
        return task;
    };
    return RememberLogic;
}());



/***/ })

});
//# sourceMappingURL=4.bundle.js.map