webpackJsonpNewGames([7],{

/***/ 138:
/*!**************************************************!*\
  !*** ./src/games/mnemonics/picturewords/meta.ts ***!
  \**************************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets__ = __webpack_require__(/*! ./assets */ 171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(/*! ./levels */ 260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic__ = __webpack_require__(/*! ./logic */ 261);




var gameId = "picturewords";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_2__levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 1, maxLevel: 100 }] // **
};
var metaData = {
    gameId: gameId,
    title: "picturewords",
    logic: __WEBPACK_IMPORTED_MODULE_3__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_0__assets__["b" /* Images */].data,
    sounds: __WEBPACK_IMPORTED_MODULE_0__assets__["c" /* Sounds */].keys,
    atlasCount: 2,
    tutorialTaskCount: 1,
    size: {
        width: 2048,
        height: 1280,
        heightMin: 1152
    }
};
// * - количество атласов, начинающихся с цифры 1, то есть atlas_1_0.png и atlas_1_1.png - итого их 2
// ** - seqCount - количество заданий для перехода на следующий уровень, то есть, чтоюы перейти на следующий уровень, нужно  два раза ответить правильно
// *** - количество раундов, которое нужно пройти человеку, чтобы выйти из туториала в игру


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

/***/ 171:
/*!****************************************************!*\
  !*** ./src/games/mnemonics/picturewords/assets.ts ***!
  \****************************************************/
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
    Translations.remember = "remember"; // "Запомнил"
    Translations.tutor1 = "tutor1"; // "Запомните какие слова принадлежат каким предметам и нажмите на кнопку 'Запомнил'"
    Translations.tutor2 = "tutor2"; // "Выберите слово из списка, которое было у мигающего предмета"
})(Translations || (Translations = {}));
var Fonts;
(function (Fonts) {
    Fonts.highlight = 0xECFDAC;
    Fonts.oneWord = {
        fontSize: 40, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black, align: "center"
    };
    Fonts.twoWords = {
        fontSize: 30, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black, align: "center"
    };
})(Fonts || (Fonts = {}));
var Images;
(function (Images) {
    Images.Button = "Button";
    Images.button_outline = "button_outline";
    Images.lampa_mob = "lampa_mob";
    Images.kover = "kover";
    Images.lampa_1 = "lampa_1";
    Images.lampa_2 = "lampa_2";
    Images.lampa_3 = "lampa_3";
    Images.lampa_4 = "lampa_4";
    Images.podloskka = "podloskka";
    Images.pol = "pol";
    Images.polka_3 = "polka_3";
    Images.svetok_3 = "svetok_3";
    Images.svetok_4 = "svetok_4";
    Images.tapok = "tapok";
    Images.bg = function (id) { return "bg_" + id; };
    Images.item = function (sign, isOutlined) {
        if (isOutlined === void 0) { isOutlined = false; }
        var outlined = isOutlined ? '_outline' : '';
        return "item_" + sign + outlined;
    };
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

/***/ 255:
/*!**********************************************************************!*\
  !*** ./src/games/mnemonics/picturewords/components/mainComponent.ts ***!
  \**********************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__ = __webpack_require__(/*! games/mnemonics/picturewords/assets */ 171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_mnemonics_picturewords_components_questionComponent__ = __webpack_require__(/*! games/mnemonics/picturewords/components/questionComponent */ 256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_ui_common_positions__ = __webpack_require__(/*! ../../../../core/ui/common/positions */ 66);






var durations = {};
var biValues = __WEBPACK_IMPORTED_MODULE_5__core_ui_common_positions__["a" /* BiValue */].create({
    data: {
        polkaVisible: true,
        koverVisible: true,
        lampa_2Visible: true,
        lampa_3Visible: true,
        lampa_4Visible: true,
        lampa_mobVisible: false,
        questionScale: 1
    }
}, {
    data: {
        polkaVisible: false,
        koverVisible: false,
        lampa_2Visible: false,
        lampa_3Visible: false,
        lampa_4Visible: false,
        lampa_mobVisible: true,
        questionScale: 0.9
    }
});
// const bg1 = {
//
// }
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
            kover: { x: 150, y: 1080 },
            lampa_2: { x: 1300, y: 0 },
            lampa_3: { x: 430, y: 0 },
            lampa_4: { x: 1130, y: 10 },
            polka_3: { x: 890, y: -58 },
            lampa_mob: { x: 665, y: 0 }
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].bi({
            bg: { x: 0, y: 35 },
            question: { x: __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 0 },
            tapok: { x: 1250, y: 990 },
            pol: { x: 1050, y: 773 },
        }, {
            bg: { x: 0, y: -80 },
            question: { x: __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, y: 0 },
            tapok: { x: 990, y: 1040 },
            pol: { x: 850, y: 655 },
        });
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__["b" /* Images */].bg(0)).setBiPos(_this.biPositions.bg);
        _this.kover = _this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__["b" /* Images */].kover).setPos(_this.positions.kover);
        _this.polka_3 = _this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__["b" /* Images */].polka_3).setPos(_this.positions.polka_3);
        _this.tapok = _this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__["b" /* Images */].tapok).setBiPos(_this.biPositions.tapok);
        _this.lampa_2 = _this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__["b" /* Images */].lampa_2).setPos(_this.positions.lampa_2);
        _this.lampa_3 = _this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__["b" /* Images */].lampa_3).setPos(_this.positions.lampa_3);
        _this.lampa_4 = _this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__["b" /* Images */].lampa_4).setPos(_this.positions.lampa_4);
        _this.pol = _this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__["b" /* Images */].pol).setBiPos(_this.biPositions.pol);
        _this.lampa_mob = _this.addImage(__WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__["b" /* Images */].lampa_mob).setPos(_this.positions.lampa_mob);
        _this.question = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_4_games_mnemonics_picturewords_components_questionComponent__["a" /* QuestionComponent */]))
            .setBiPos(_this.biPositions.question);
        return _this;
    }
    MainComponent.prototype.onInit = function () {
        var _this = this;
        this.onBiValueChange(biValues.data, function (control, data) {
            _this.polka_3.visible = data.polkaVisible;
            _this.kover.visible = data.koverVisible;
            _this.lampa_2.visible = data.lampa_2Visible;
            _this.lampa_3.visible = data.lampa_3Visible;
            _this.lampa_4.visible = data.lampa_4Visible;
            _this.lampa_mob.visible = data.lampa_mobVisible;
            _this.question.symmetricScale = data.questionScale;
        });
        this.startIntro(); // показывает верхнюю плашку с таймером, очками и левелами
    };
    MainComponent.prototype.onNewTask = function (task) {
        // this.question.showDebug(); // чтобы посмотреть границы группы
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 256:
/*!**************************************************************************!*\
  !*** ./src/games/mnemonics/picturewords/components/questionComponent.ts ***!
  \**************************************************************************/
/*! exports provided: QuestionComponent */
/*! exports used: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_types__ = __webpack_require__(/*! core/types */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_mnemonics_picturewords_components_itemComponent__ = __webpack_require__(/*! games/mnemonics/picturewords/components/itemComponent */ 257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_mnemonics_picturewords_components_answersComponent__ = __webpack_require__(/*! games/mnemonics/picturewords/components/answersComponent */ 259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets__ = __webpack_require__(/*! ../assets */ 171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_assets__ = __webpack_require__(/*! ../../../../core/assets */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_ui_controls_GraphicsImg__ = __webpack_require__(/*! ../../../../core/ui/controls/GraphicsImg */ 155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wordassociation_assets__ = __webpack_require__(/*! ../../wordassociation/assets */ 166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 66);















var biValues = __WEBPACK_IMPORTED_MODULE_14_core_ui_common_positions__["a" /* BiValue */].create({
    data: {
        svetok_4Visible: true,
        lampa_1Visible: true
    }
}, {
    data: {
        svetok_4Visible: false,
        lampa_1Visible: false
    }
});
var QuestionComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](QuestionComponent, _super);
    function QuestionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_4_core_utils__["e" /* RandomGenerator */]();
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            screenWidth: 800,
            btnSize: { width: 500, height: 100 },
            svetok_4: { x: 380, y: 720 },
            lampa_1: { x: 400, y: 100 }
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
            rememberBtn: { x: 0, y: 1140 },
            answers: { x: 0, y: 1071 },
            svetok_3: { x: -700, y: 0 }
        }, {
            rememberBtn: { x: 0, y: 1310 },
            answers: { x: 0, y: 1277 },
            svetok_3: { x: -300, y: -55 }
        });
        _this.screens = [
            {
                "1_0": {
                    biPositions: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: -420, y: 510 }
                    }, {
                        pos: { x: -250, y: 460 }
                    }),
                    alterBiPos: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: 375, y: 510 }
                    }, {
                        pos: { x: 230, y: 460 }
                    }),
                    type: 1,
                    alterZIndex: 1,
                    portrait: {
                        scale: false,
                        zIndex: 1
                    },
                    landscape: {
                        scale: false,
                        zIndex: 1
                    }
                },
                "1_1": {
                    biPositions: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: 375, y: 510 }
                    }, {
                        pos: { x: 285, y: 460 }
                    }),
                    alterBiPos: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: -420, y: 510 }
                    }, {
                        pos: { x: -190, y: 460 }
                    }),
                    type: 1,
                    alterZIndex: 2,
                    portrait: {
                        scale: false,
                        zIndex: 2
                    },
                    landscape: {
                        scale: false,
                        zIndex: 2
                    }
                },
                "2_0": {
                    biPositions: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: -340, y: 795 }
                    }, {
                        pos: { x: -180, y: 720 }
                    }),
                    alterBiPos: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: 440, y: 780 }
                    }, {
                        pos: { x: 220, y: 1020 }
                    }),
                    type: 2,
                    alterZIndex: 6,
                    portrait: {
                        scale: true,
                        zIndex: 3
                    },
                    landscape: {
                        scale: true,
                        zIndex: 3
                    }
                },
                "2_1": {
                    biPositions: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: 440, y: 780 }
                    }, {
                        pos: { x: 220, y: 1020 }
                    }),
                    alterBiPos: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: -340, y: 795 }
                    }, {
                        pos: { x: -200, y: 720 }
                    }),
                    type: 2,
                    alterZIndex: 3,
                    portrait: {
                        scale: true,
                        zIndex: 6
                    },
                    landscape: {
                        scale: true,
                        zIndex: 4
                    }
                },
                "3_0": {
                    biPositions: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: -615, y: 865 }
                    }, {
                        pos: { x: -250, y: 1050 }
                    }),
                    alterBiPos: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: 40, y: 770 }
                    }, {
                        pos: { x: 150, y: 700 }
                    }),
                    type: 3,
                    alterZIndex: 4,
                    portrait: {
                        scale: false,
                        zIndex: 5
                    },
                    landscape: {
                        scale: false,
                        zIndex: 5
                    }
                },
                "3_1": {
                    biPositions: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: 40, y: 770 }
                    }, {
                        pos: { x: 120, y: 700 }
                    }),
                    alterBiPos: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].bi({
                        pos: { x: -615, y: 865 }
                    }, {
                        pos: { x: -250, y: 1050 }
                    }),
                    type: 3,
                    alterZIndex: 5,
                    portrait: {
                        scale: false,
                        zIndex: 4
                    },
                    landscape: {
                        scale: false,
                        zIndex: 6
                    }
                }
            }
        ];
        _this.lampa_1 = _this.makeImage(__WEBPACK_IMPORTED_MODULE_9__assets__["b" /* Images */].lampa_1);
        _this.svetok_4 = _this.makeImage(__WEBPACK_IMPORTED_MODULE_9__assets__["b" /* Images */].svetok_4);
        return _this;
    }
    QuestionComponent.prototype.onAnswer = function (answer) {
        var task = answer.levelTask.task;
        if (answer.status == __WEBPACK_IMPORTED_MODULE_5_core_types__["a" /* AnswerStatus */].CorrectPartial) {
            var currentAnswer_1 = answer.answerId;
            var currentActiveItem = this.itemComponents.filter(function (itemGroup) { return __WEBPACK_IMPORTED_MODULE_6_lodash__["find"](itemGroup.txtWords, function (txtWord) { return txtWord.text === currentAnswer_1; }); })[0];
            var otherAnswers = currentActiveItem.txtWords.filter(function (txtWord) { return txtWord !== currentAnswer_1; });
            var asnwersSeq_1 = task.answers.seq;
            var wordsToShow = otherAnswers.filter(function (otherWord) { return asnwersSeq_1.indexOf(otherWord.text) < asnwersSeq_1.indexOf(currentAnswer_1); })
                .map(function (otherAnswer) { return otherAnswer.text; })
                .concat(currentAnswer_1);
            currentActiveItem.showSpecificWords(wordsToShow);
            currentActiveItem.hideHightLight();
            // answer.index - это индекс ответа (как правильного, так и не правильного)
            // answer.correctAnswerIndex - это индекс правильного ответа (то есть только правильного) - нужно в tutorial
            var nextQuestion_1 = task.questions[answer.correctAnswerIndex + 1];
            var nextImage_1 = __WEBPACK_IMPORTED_MODULE_6_lodash__["find"](this.itemComponents, function (itemGroup) { return itemGroup.props.item.id === nextQuestion_1.itemId; }).bgImage;
            this.itemComponents.filter(function (itemGroup) { return itemGroup.bgImage === nextImage_1; })[0].showHighlight();
            this.answersGroup.createAnswers(nextQuestion_1.allAnswers);
        }
    };
    QuestionComponent.prototype.createItemComponents = function (items) {
        var _this = this;
        if (!this.isFirstTask) {
            this.itemComponents.forEach(function (itemGroup) {
                itemGroup.removeAll(true);
            });
        }
        this.items = [];
        this.itemComponents = items.map(function (_a) {
            var item = _a.item, posData = _a.posData;
            return _this.add(_this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_7_games_mnemonics_picturewords_components_itemComponent__["a" /* ItemComponent */], { item: item, scale: false })).setBiPos(posData.biPos);
        });
    };
    QuestionComponent.prototype.onRemember = function () {
        var _this = this;
        if (this.isTutorial) {
            this.tutorial.setProps(this.translate(__WEBPACK_IMPORTED_MODULE_9__assets__["d" /* Translations */].tutor2));
        }
        this.disableInput(false);
        var task = this.getCurrentTask();
        if (task.changePositions) {
            this.itemComponents.forEach(function (itemGroup) {
                itemGroup.removeAll(true);
            });
            this.items = [];
            var orientation_1 = this.isPortrait ? 'portrait' : 'landscape';
            this.items = __WEBPACK_IMPORTED_MODULE_6_lodash__["sortBy"](task.items.map(function (item) {
                var currentItem = _this.currentScreen[item.sign];
                var posData = {
                    scale: currentItem[orientation_1].scale,
                    zIndex: currentItem.alterZIndex,
                    biPos: currentItem.alterBiPos.pos,
                };
                return { item: item, posData: posData };
            }), function (x) { return x.posData.zIndex; });
            this.itemComponents = this.items.map(function (_a) {
                var item = _a.item, posData = _a.posData;
                return _this.add(_this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_7_games_mnemonics_picturewords_components_itemComponent__["a" /* ItemComponent */], { item: item, scale: posData.scale })).setBiPos(posData.biPos);
            });
        }
        this.itemComponents.forEach(function (itemGroup) { return itemGroup.hideAllWords(); });
        this.bringToTop(this.answersGroup);
        this.bringToTop(this.svetok_3);
        this.answersGroup.show();
        this.answersGroup.setBiPos(this.biPositions.answers);
        var currentImage = __WEBPACK_IMPORTED_MODULE_6_lodash__["find"](this.itemComponents, function (itemGroup) { return itemGroup.props.item.id === task.items[0].id; }).bgImage;
        this.itemComponents.filter(function (itemGroup) { return itemGroup.bgImage === currentImage; })[0].showHighlight();
    };
    QuestionComponent.prototype.onNewTask = function (task) {
        var _this = this;
        if (this.isTutorial) {
            this.tutorial = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_13_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */]) // создаем табличку
                .make({ panel: { alpha: 0.6 } })); // make - добавляет ей параметры
            this.tutorial.setProps(this.translate(__WEBPACK_IMPORTED_MODULE_9__assets__["d" /* Translations */].tutor1)); // и перевод
        }
        this.disableInput(true);
        if (this.isFirstTask) {
            this.svetok_3 = this.addImage(__WEBPACK_IMPORTED_MODULE_9__assets__["b" /* Images */].svetok_3).setBiPos(this.biPositions.svetok_3);
        }
        else {
            this.answersGroup.removeAll(true);
        }
        this.currentScreen = this.screens[task.bgId];
        this.items = __WEBPACK_IMPORTED_MODULE_6_lodash__["sortBy"](task.items.map(function (item) {
            var currentItem = _this.currentScreen[item.sign];
            var orientation = _this.isPortrait ? 'portrait' : 'landscape';
            var posData = {
                scale: false,
                zIndex: currentItem[orientation].zIndex,
                biPos: currentItem.biPositions.pos,
            };
            return { item: item, posData: posData };
        }), function (x) { return x.posData.zIndex; });
        this.itemsPositions = task.items.map(function (item) {
            var currentItem = _this.currentScreen[item.sign];
            var orientation = _this.isPortrait ? 'portrait' : 'landscape';
            return {
                biPos: currentItem.biPositions.pos,
                type: currentItem.type,
                scale: currentItem[orientation].scale,
                zIndex: currentItem[orientation].zIndex,
                sign: item.sign
            };
        });
        this.createItemComponents(this.items);
        if (this.isFirstTask) {
            this.add(this.lampa_1).setPos(this.positions.lampa_1);
            this.add(this.svetok_4).setPos(this.positions.svetok_4);
            this.rememberBtn = this.add(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__["a" /* Btn */](this.translate(__WEBPACK_IMPORTED_MODULE_9__assets__["d" /* Translations */].remember), function () {
                _this.rememberBtn.visible = false;
                _this.onRemember();
            }, __WEBPACK_IMPORTED_MODULE_10__core_assets__["c" /* CoreFonts */].button(__WEBPACK_IMPORTED_MODULE_10__core_assets__["b" /* CoreColors */].black), new __WEBPACK_IMPORTED_MODULE_11__core_ui_controls_GraphicsImg__["a" /* BtnDefaultImg */]({
                color: __WEBPACK_IMPORTED_MODULE_12__wordassociation_assets__["a" /* Fonts */].yellow,
                size: this.positions.btnSize
            })))
                .anchorCenter()
                .setBiPos(this.biPositions.rememberBtn);
        }
        this.answersGroup = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_8_games_mnemonics_picturewords_components_answersComponent__["a" /* AnswersComponent */])).anchorCenter();
        this.answersGroup.createAnswers(task.questions[0].allAnswers);
        this.answersGroup.hide();
        if (!this.isFirstTask) {
            this.rememberBtn.visible = true;
        }
    };
    QuestionComponent.prototype.onInit = function () {
        var _this = this;
        this.onOrientationChange(function () {
            if (_this.items) {
                _this.createItemComponents(_this.items);
            }
        });
        this.onBiValueChange(biValues.data, function (control, data) {
            _this.lampa_1.visible = data.lampa_1Visible;
            _this.svetok_4.visible = data.svetok_4Visible;
        });
    };
    return QuestionComponent;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 257:
/*!**********************************************************************!*\
  !*** ./src/games/mnemonics/picturewords/components/itemComponent.ts ***!
  \**********************************************************************/
/*! exports provided: ItemComponent */
/*! exports used: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_mnemonics_picturewords_assets__ = __webpack_require__(/*! games/mnemonics/picturewords/assets */ 171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textComponent__ = __webpack_require__(/*! ./textComponent */ 258);





var ItemComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ItemComponent, _super);
    function ItemComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            offsetY: 30,
            offsetX: 20,
            oneWord: {
                offsetY: 15
            },
            twoWords: {
                offsetY: 5
            }
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].bi({
            "1_0": { x: -145, y: -105 },
            "1_1": { x: -140, y: -150 },
            "2_0": { x: -150, y: 0 },
            "2_1": { x: -145, y: -20 },
            "3_0": { x: -135, y: -225 },
            "3_1": { x: -140, y: -180 },
        }, {
            "1_0": { x: -125, y: -105 },
            "1_1": { x: -182, y: -220 },
            "2_0": { x: -170, y: -60 },
            "2_1": { x: -165, y: -20 },
            "3_0": { x: -135, y: -180 },
            "3_1": { x: -140, y: -90 }
        });
        _this.txtWords = [];
        return _this;
    }
    ItemComponent.prototype.hideHightLight = function () {
        this.outline.visible = false;
    };
    ItemComponent.prototype.showHighlight = function () {
        this.outline.visible = true;
    };
    ItemComponent.prototype.addHightLight = function () {
        this.outline = this.addImage(__WEBPACK_IMPORTED_MODULE_2_games_mnemonics_picturewords_assets__["b" /* Images */].item(this.props.item.sign, true)).anchorCenter();
    };
    // // changePositions(newPosition: any) {
    // changePositions(biPos: any, scale: boolean) {
    //   // if (newPosition.scale) {
    //   if (scale) {
    //     this.bgImage.scale.x = -1;
    //     this.outline.scale.x = -1;
    //   }
    //
    //   // console.log(77, newPosition)
    //
    //   // this.setBiPos(newPosition.biPos)
    //   this.setBiPos(biPos)
    // }
    ItemComponent.prototype.showSpecificWords = function (wordsToShow) {
        this.wordsGroup.showWords(wordsToShow);
    };
    ItemComponent.prototype.hideAllWords = function () {
        this.wordsGroup.hide();
    };
    ItemComponent.prototype.onPropsUpdate = function () {
        this.tag = {
            type: this.props.item.type,
            index: this.props.item.index,
            sign: this.props.item.sign
        };
        this.bgImage = this.add(this.makeImage(__WEBPACK_IMPORTED_MODULE_2_games_mnemonics_picturewords_assets__["b" /* Images */].item(this.props.item.sign))).anchorCenter();
        this.addHightLight();
        this.hideHightLight();
        if (this.props.scale) {
            this.bgImage.scale.x = -1;
            this.outline.scale.x = -1;
        }
        this.wordsGroup = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_4__textComponent__["a" /* TextComponent */]))
            .setBiPos(this.biPositions[this.props.item.sign]);
        this.wordsGroup.createWords(this.props.item.words);
        this.txtWords = this.wordsGroup.txtWords;
        // this.wordsGroup.showDebug(); // чтобы посмотреть границы группы
    };
    return ItemComponent;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 258:
/*!**********************************************************************!*\
  !*** ./src/games/mnemonics/picturewords/components/textComponent.ts ***!
  \**********************************************************************/
/*! exports provided: TextComponent */
/*! exports used: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__ = __webpack_require__(/*! games/mnemonics/picturewords/assets */ 171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__picturewords_assets__ = __webpack_require__(/*! ../../picturewords/assets */ 171);








var TextComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TextComponent, _super);
    function TextComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
            offsetY: 35,
            offsetX: 20,
            bgImageWidth: 290,
            oneWord: {
                offsetY: 15
            },
            twoWords: {
                offsetY: 5
            }
        });
        _this.bgImage = _this.add(_this.makeImage(__WEBPACK_IMPORTED_MODULE_3_games_mnemonics_picturewords_assets__["b" /* Images */].Button));
        _this.txtWords = [];
        return _this;
    }
    TextComponent.prototype.showWords = function (wordsToShow) {
        this.bgImage.visible = true;
        this.txtWords.forEach(function (txtWord) { return txtWord.visible = __WEBPACK_IMPORTED_MODULE_5_lodash__["includes"](wordsToShow, txtWord.text); });
    };
    TextComponent.prototype.show = function () {
        this.bgImage.visible = true;
        this.txtWords.forEach(function (txtWord) { return txtWord.visible = true; });
    };
    TextComponent.prototype.hide = function () {
        this.bgImage.visible = false;
        this.txtWords.forEach(function (txtWord) { return txtWord.visible = false; });
    };
    TextComponent.prototype.createWords = function (words) {
        var _this = this;
        var isOneWord = words.length === 1, wordType = isOneWord ? __WEBPACK_IMPORTED_MODULE_7__picturewords_assets__["a" /* Fonts */].oneWord : __WEBPACK_IMPORTED_MODULE_7__picturewords_assets__["a" /* Fonts */].twoWords, offsetY = isOneWord ? this.positions.oneWord.offsetY : this.positions.twoWords.offsetY;
        this.txtWords = words.map(function (word, i) {
            return _this.add(__WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__["a" /* ControlUtl */].scaleToFit(// чтобы слово умещалось в заданную ширину
            new __WEBPACK_IMPORTED_MODULE_2_core_ui_controls_txt__["a" /* Txt */](word, wordType).setPos([_this.positions.offsetX, i * _this.positions.offsetY + offsetY]), _this.positions.bgImageWidth - _this.positions.offsetX * 2));
        });
    };
    TextComponent.prototype.onPropsUpdate = function () {
    };
    return TextComponent;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 259:
/*!*************************************************************************!*\
  !*** ./src/games/mnemonics/picturewords/components/answersComponent.ts ***!
  \*************************************************************************/
/*! exports provided: AnswersComponent */
/*! exports used: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_mnemonics_picturewords_assets__ = __webpack_require__(/*! games/mnemonics/picturewords/assets */ 171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__ = __webpack_require__(/*! core/ui/controls */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_assets__ = __webpack_require__(/*! ../../../../core/assets */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_ui_common_positions__ = __webpack_require__(/*! ../../../../core/ui/common/positions */ 66);









var biValues = __WEBPACK_IMPORTED_MODULE_8__core_ui_common_positions__["a" /* BiValue */].create({
    scale: 1
}, {
    scale: 0.76
});
var AnswersComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AnswersComponent, _super);
    function AnswersComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_4_core_utils__["e" /* RandomGenerator */]();
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].bi({
            marginNumbers: { x: 30 },
            btnsGroup: { x: 380, y: 60 },
        }, {
            marginNumbers: { x: 20 },
            btnsGroup: { x: 678, y: 45 },
        });
        _this.answers = [];
        _this.bg = _this.add(_this.makeImage(__WEBPACK_IMPORTED_MODULE_2_games_mnemonics_picturewords_assets__["b" /* Images */].podloskka));
        _this.btnsGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__["b" /* Control */]()).setBiPos(_this.biPositions.btnsGroup);
        return _this;
    }
    AnswersComponent.prototype.hide = function () {
        this.visible = false;
    };
    AnswersComponent.prototype.show = function () {
        this.visible = true;
    };
    // changeBg() {
    //   const bgKey = this.isPortrait ? Images.podloskka : Images.podloskka;
    //
    //   this.bg.key = this.gameKey(bgKey) //.setPos([0, 200]); // key - это название спрайта
    //   // this.gameKey - добавляет приставку к названию картинки именем игры (был bg, стал pictureword-bg)
    //
    //   this.updatePivot();
    // }
    AnswersComponent.prototype.createAnswers = function (answers) {
        var _this = this;
        this.btnsGroup.removeAll(true);
        this.answers = [];
        this.answers = this.rng.derangement(answers.map(function (answer, i) {
            var bgImage = new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__["d" /* Img */](_this.gameKey(__WEBPACK_IMPORTED_MODULE_2_games_mnemonics_picturewords_assets__["b" /* Images */].Button));
            return _this.btnsGroup.add(_this.addAnswerBehavior(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_btn__["a" /* Btn */](answer, function () { }, __WEBPACK_IMPORTED_MODULE_7__core_assets__["c" /* CoreFonts */].button(__WEBPACK_IMPORTED_MODULE_7__core_assets__["b" /* CoreColors */].black), bgImage, 
            // чтобы слово умещалось в заданную ширину, а 20 - это чтобы был отступ по 10 слева и справа
            { maxTextWidth: bgImage.width - 40 }), answer, { dark: true, location: "top" }));
        }));
        this.add(this.btnsGroup);
        var colCount = this.isPortrait ? 3 : 4;
        __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.answers, colCount, this.current(this.biPositions.marginNumbers));
        this.answersAreReady();
    };
    AnswersComponent.prototype.updateAnswersPositions = function () {
        this.btnsGroup.setBiPos(this.biPositions.btnsGroup);
        var colCount = this.isPortrait ? 3 : 4;
        __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.answers, colCount, this.current(this.biPositions.marginNumbers));
    };
    AnswersComponent.prototype.onPropsUpdate = function () {
    };
    AnswersComponent.prototype.onInit = function () {
        var _this = this;
        this.onOrientationChange(function () {
            // this.changeBg();
            _this.updateAnswersPositions();
        });
        this.onBiValueChange(biValues.scale, function (c, v) {
            c.btnsGroup.symmetricScale = v;
        });
    };
    return AnswersComponent;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 260:
/*!****************************************************!*\
  !*** ./src/games/mnemonics/picturewords/levels.ts ***!
  \****************************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);

function level(elementsCount, changePositions, wordsCount, wordDifficulty) {
    return { elementsCount: elementsCount, wordsCount: wordsCount, changePositions: changePositions, wordDifficulty: wordDifficulty, allAnswersCount: 8 };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])([
    level(3, false, 1, "easy"),
    level(3, true, 1, "easy"),
    level(4, false, 1, "easy"),
    level(4, true, 1, "easy"),
    level(5, false, 1, "normal"),
    level(5, true, 1, "normal"),
    level(5, false, 2, "normal"),
    level(6, false, 1, "normal"),
    level(6, false, 2, "normal"),
    level(6, false, 2, "hard"),
    level(6, true, 2, "hard"),
    level(6, true, 2, "hard"),
    level(6, true, 2, "hard"),
]);


/***/ }),

/***/ 261:
/*!***************************************************!*\
  !*** ./src/games/mnemonics/picturewords/logic.ts ***!
  \***************************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_logic_sys__ = __webpack_require__(/*! core/logic/sys */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_mnemonicsWords__ = __webpack_require__(/*! ../common/mnemonicsWords */ 197);








var bgCount = [1, 2, 3, 4];
var allItemIds = __WEBPACK_IMPORTED_MODULE_4_lodash__["range"](6);
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_3_core_utils__["e" /* RandomGenerator */]();
        _this.words = __WEBPACK_IMPORTED_MODULE_7__common_mnemonicsWords__["a" /* MnemonicsWords */].getWords();
        _this.wordsSeq = new __WEBPACK_IMPORTED_MODULE_5_core_utils_circleSeq__["b" /* UniqSeq */](0);
        return _this;
    }
    Logic.prototype.chunkUnzip = function (array, count) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash__["flatten"](__WEBPACK_IMPORTED_MODULE_4_lodash__["unzip"](__WEBPACK_IMPORTED_MODULE_4_lodash__["chunk"](array, count)));
    };
    Logic.prototype.createQuestions = function (level) {
        var _this = this;
        var words = this.words[level.wordDifficulty];
        var bgGroups = [
            [
                {
                    type: 1,
                    index: __WEBPACK_IMPORTED_MODULE_4_lodash__["range"](2)
                },
                {
                    type: 2,
                    index: __WEBPACK_IMPORTED_MODULE_4_lodash__["range"](2)
                },
                {
                    type: 3,
                    index: __WEBPACK_IMPORTED_MODULE_4_lodash__["range"](2)
                }
            ]
        ];
        var bgId = 0; // this.rng.sample(this.bgGroups);
        var itemGroups = bgGroups[bgId];
        var items = this.rng.subset(allItemIds, level.elementsCount).map(function (id) {
            var randomItem = _this.rng.sample(itemGroups);
            if (randomItem.index.length === 0) {
                itemGroups = itemGroups.filter(function (itemGroup) { return itemGroup.index.length; });
                randomItem = _this.rng.sample(itemGroups);
            }
            var index = randomItem.index.shift();
            return {
                id: id,
                words: _this.wordsSeq.nextSubsetFrom(words, level.wordsCount),
                type: randomItem.type,
                index: index,
                sign: randomItem.type + "_" + index
            };
        });
        var allOneWordsFromEachItem = __WEBPACK_IMPORTED_MODULE_4_lodash__["flatMap"](items, function (x) { return _this.rng.sample(x.words); });
        var questionItems = this.chunkUnzip(__WEBPACK_IMPORTED_MODULE_4_lodash__["flatMap"](items, function (item) { return item.words.map(function (word) { return Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(item, word); }); }), level.wordsCount);
        var usedWords = __WEBPACK_IMPORTED_MODULE_4_lodash__["range"](questionItems.length).map(function (i) { return __WEBPACK_IMPORTED_MODULE_4_lodash__["take"](questionItems, i).map(function (x) { return x[1]; }); });
        var questions = questionItems.map(function (_a, i) {
            var item = _a[0], word = _a[1];
            var fakeAnswersFromItems = __WEBPACK_IMPORTED_MODULE_4_lodash__["difference"](allOneWordsFromEachItem, item.words.concat(usedWords[i]));
            var fakeAnswers = _this.wordsSeq.nextSubsetFrom(words, level.allAnswersCount - fakeAnswersFromItems.length - 1);
            var allAnswers = _this.rng.shuffle([word].concat(fakeAnswers, fakeAnswersFromItems));
            var question = {
                itemId: item.id,
                correctAnswer: word,
                allAnswers: allAnswers
            };
            return question;
        });
        return { bgId: bgId, items: items, questions: questions };
    };
    Logic.prototype.nextTask = function (level) {
        var _a = this.createQuestions(level), bgId = _a.bgId, items = _a.items, questions = _a.questions;
        var answers = { seq: questions.map(function (x) { return x.correctAnswer; }) };
        var changePositions = level.changePositions;
        var task = {
            bgId: bgId,
            questions: questions,
            items: items,
            answers: answers,
            changePositions: changePositions
        };
        if (__WEBPACK_IMPORTED_MODULE_2_core_logic_sys__["a" /* Sys */].showLog) {
            console.log("task", task.answers.seq);
        }
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ })

});
//# sourceMappingURL=7.bundle.js.map