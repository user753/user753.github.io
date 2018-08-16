webpackJsonpNewGames([0],{

/***/ 142:
/*!***********************************************!*\
  !*** ./src/games/polyglot/journalist/meta.ts ***!
  \***********************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_polyglot_common_commonMeta__ = __webpack_require__(/*! games/polyglot/common/commonMeta */ 175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_polyglot_common_wordsSounds__ = __webpack_require__(/*! games/polyglot/common/wordsSounds */ 163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_polyglot_journalist_images__ = __webpack_require__(/*! games/polyglot/journalist/images */ 210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__levels__ = __webpack_require__(/*! ./levels */ 289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logic__ = __webpack_require__(/*! ./logic */ 290);







var gameId = "journalist";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_5__levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 3, maxLevel: 10 }]
};
var metaData = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_common_commonMeta__["a" /* metaData */], { gameId: gameId, title: "Journalist", logic: __WEBPACK_IMPORTED_MODULE_6__logic__["a" /* Logic */], images: __WEBPACK_IMPORTED_MODULE_3_games_polyglot_journalist_images__["a" /* Images */].data, component: __WEBPACK_IMPORTED_MODULE_4__components_mainComponent__["a" /* MainComponent */], 
    // selectLocale: true,
    tutorialTaskCount: 2, sounds: __WEBPACK_IMPORTED_MODULE_2_games_polyglot_common_wordsSounds__["a" /* WordsSounds */].keys, atlasCount: 4, scoreOptions: scoreOptions,
    levelOptions: levelOptions });


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

/***/ 157:
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

/***/ 158:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameUI_panelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/panelComponent */ 155);
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

/***/ 160:
/*!*************************************************!*\
  !*** ./src/games/polyglot/common/wordImages.ts ***!
  \*************************************************/
/*! exports provided: WordImages */
/*! exports used: WordImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordImages; });
var WordImages;
(function (WordImages) {
    WordImages.bg = "bg";
    WordImages.bgitem = "bgitem";
    WordImages.bg_intro = "bg_intro";
    WordImages.paper = "paper";
    WordImages.paper_big = "paper_big";
    WordImages.hand_0 = "hand_0";
    WordImages.hand_1 = "hand_1";
    WordImages.type_main = "type_main";
    WordImages.poloska = "poloska";
    WordImages.sprites = [
        WordImages.bg,
        WordImages.bgitem,
        "bg_left",
        WordImages.poloska,
        WordImages.bg_intro,
        WordImages.paper,
        WordImages.paper_big,
        WordImages.hand_0,
        WordImages.hand_1,
        WordImages.type_main
    ];
})(WordImages || (WordImages = {}));


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

/***/ 162:
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

/***/ 163:
/*!**************************************************!*\
  !*** ./src/games/polyglot/common/wordsSounds.ts ***!
  \**************************************************/
/*! exports provided: WordsSounds */
/*! exports used: WordsSounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsSounds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_sounds__ = __webpack_require__(/*! core/assets/sounds */ 68);

var WordsSounds;
(function (WordsSounds) {
    WordsSounds.type = "type";
    WordsSounds.paper = "paper";
    WordsSounds.keys = [WordsSounds.type, WordsSounds.paper, __WEBPACK_IMPORTED_MODULE_0_core_assets_sounds__["a" /* CoreSounds */].bg];
})(WordsSounds || (WordsSounds = {}));


/***/ }),

/***/ 164:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_introAnimationComponent__ = __webpack_require__(/*! core/ui/components/games/introAnimationComponent */ 162);
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

/***/ 166:
/*!********************************************!*\
  !*** ./src/games/polyglot/common/fonts.ts ***!
  \********************************************/
/*! exports provided: Fonts */
/*! exports used: Fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fonts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);

var Fonts;
(function (Fonts) {
    var wordFontSizes = { 1: 50, 2: 70, 3: 90 };
    Fonts.wordText = function (size) { return ({
        fontSize: (wordFontSizes[size]),
        font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold,
        fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].lightBlack
    }); };
    Fonts.typewriterText = {
        fontSize: 50, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["c" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreColors */].black, align: "center",
        wordWrap: true
    };
})(Fonts || (Fonts = {}));


/***/ }),

/***/ 169:
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

/***/ 173:
/*!****************************************************************!*\
  !*** ./src/games/polyglot/common/components/PaperComponent.ts ***!
  \****************************************************************/
/*! exports provided: PaperComponent */
/*! exports used: PaperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordImages__ = __webpack_require__(/*! ../wordImages */ 160);




var PaperComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](PaperComponent, _super);
    function PaperComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paper = _this.addImage([__WEBPACK_IMPORTED_MODULE_3__wordImages__["a" /* WordImages */].paper, [0, 0]]);
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
            paperHeight: 650,
            heightDiff: 30
        });
        return _this;
    }
    PaperComponent.prototype.updatePaper = function (group) {
        this.paper.key = this.gameKey(group.height > this.positions.paperHeight ? __WEBPACK_IMPORTED_MODULE_3__wordImages__["a" /* WordImages */].paper_big : __WEBPACK_IMPORTED_MODULE_3__wordImages__["a" /* WordImages */].paper);
    };
    PaperComponent.prototype.onPropsUpdate = function () {
    };
    return PaperComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 174:
/*!**************************************!*\
  !*** ./src/games/utils/localeUtl.ts ***!
  \**************************************/
/*! exports provided: LocaleUtl */
/*! exports used: LocaleUtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleUtl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__ = __webpack_require__(/*! core/logic/cnst */ 36);

var LocaleUtl;
(function (LocaleUtl) {
    function getData(data, locale) {
        return (data[locale || __WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__["a" /* Cnst */].defaultLocale] || data[__WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__["a" /* Cnst */].defaultLocale]);
    }
    LocaleUtl.getData = getData;
})(LocaleUtl || (LocaleUtl = {}));


/***/ }),

/***/ 175:
/*!*************************************************!*\
  !*** ./src/games/polyglot/common/commonMeta.ts ***!
  \*************************************************/
/*! exports provided: metaData */
/*! exports used: metaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_logic_taskCount__ = __webpack_require__(/*! core/logic/taskCount */ 176);

var levelsTaskCount = [
    { taskCount: 8, maxLevel: 3 },
    { taskCount: 10, maxLevel: 5 },
    { taskCount: 12, maxLevel: 10 },
];
var taskCount = new __WEBPACK_IMPORTED_MODULE_0_core_logic_taskCount__["a" /* LevelsTaskCountCreator */](levelsTaskCount);
var metaData = {
    unlimitTime: true,
    darkBg: true,
    ignoreError: true,
    noResetSeqCountOnError: true,
    //selectLocale: true,
    taskCount: taskCount,
    size: {
        width: 2048,
        height: 1280,
        heightMin: 1152
    }
};


/***/ }),

/***/ 176:
/*!*************************************!*\
  !*** ./src/core/logic/taskCount.ts ***!
  \*************************************/
/*! exports provided: LevelsTaskCountCreator */
/*! exports used: LevelsTaskCountCreator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelsTaskCountCreator; });
var LevelsTaskCountCreator = /** @class */ (function () {
    function LevelsTaskCountCreator(levels) {
        this.levels = levels;
    }
    LevelsTaskCountCreator.prototype.get = function (startLevel) {
        var taskCount = this.levels.find(function (x) { return startLevel <= x.maxLevel; });
        return taskCount ? taskCount.taskCount : 0;
    };
    return LevelsTaskCountCreator;
}());



/***/ }),

/***/ 177:
/*!***********************************************************************!*\
  !*** ./src/games/polyglot/common/components/baseWordMainComponent.ts ***!
  \***********************************************************************/
/*! exports provided: BaseWordMainComponent */
/*! exports used: BaseWordMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseWordMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_sounds__ = __webpack_require__(/*! core/assets/sounds */ 68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameUI_hintComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/hintComponent */ 178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_behaviors_introComplexAnimationBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/introComplexAnimationBehavior */ 164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_games_polyglot_common_components_wordListComponent__ = __webpack_require__(/*! games/polyglot/common/components/wordListComponent */ 179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_games_polyglot_common_wordsSounds__ = __webpack_require__(/*! games/polyglot/common/wordsSounds */ 163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wordImages__ = __webpack_require__(/*! ../wordImages */ 160);















var durations = {
    wordList: 300,
};
var BaseWordMainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](BaseWordMainComponent, _super);
    function BaseWordMainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].create({
            wordMargin: { x: 0, y: 80 },
            wordList: [650, __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].heightNormal / 2 + 10],
            typewriter: [1000, 260],
            mainGroup: { y: 0 },
            tutorial: { y: 40 },
            animationX: 0,
            bgitem: [350, 1050],
            wordlistOffset: { x: 0, y: 0 }
        });
        _this.positionsPortrait = __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].update(_this.positions, {
            wordList: [__WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, 770],
            typewriter: [650, 80]
        });
        _this.getPositions = function () { return __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? _this.positionsPortrait : _this.positions; };
        _this.bg = _this.addImage([__WEBPACK_IMPORTED_MODULE_14__wordImages__["a" /* WordImages */].bg, [0, 0]]);
        _this.bgitem = __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].isPortrait || _this.isTutorial ? undefined : _this.addImage([__WEBPACK_IMPORTED_MODULE_14__wordImages__["a" /* WordImages */].bgitem, [0, 0]]).setPos(_this.positions.bgitem);
        _this.mainGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_index__["b" /* Control */]());
        _this.useTutorial = false;
        _this.hintComponent = {
            enableLetterHint: false,
            tooltip: "",
            show: true
        };
        return _this;
    }
    BaseWordMainComponent.prototype.createTutorial = function () {
        return this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_8_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */])).make({ marginTop: this.getPositions().tutorial.y });
    };
    BaseWordMainComponent.prototype.onInit = function () {
        var _this = this;
        this.playSound(__WEBPACK_IMPORTED_MODULE_1_core_assets_sounds__["a" /* CoreSounds */].bg, true);
        this.statusOptions.waitCompleteBeforeNewTask = true;
        this.startIntro();
        if (this.hintComponent.show) {
            var hint_1 = this.mainGroup.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameUI_hintComponent__["a" /* HintComponent */])).defaultPosition();
            this.hint = hint_1;
            hint_1.setProps(this.hintComponent.tooltip);
            hint_1.visible = false;
            if (!this.isTutorial) {
                this.context.uiService.mainComponent.onIntroComplete.addOnce(function () {
                    hint_1.visible = true;
                });
            }
        }
        if (this.isTutorial) {
            this.tutorial = this.createTutorial().updateFields({ visible: false });
            this.context.uiService.mainComponent.onIntroComplete.addOnce(function () {
                __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].setVisible(_this.tutorial, true);
            });
            this.mainGroup.y = this.getPositions().mainGroup.y;
        }
        this.onChangeFor(function () { return __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].isPortrait; }, function (x) {
            var p = _this.getPositions();
            _this.typewriter.setPos(_this.getPositions().typewriter);
            if (_this.wordList) {
                _this.wordList.setPos(_this.getPositions().wordList);
            }
        });
    };
    BaseWordMainComponent.prototype.introAnimation = function () {
        var behavior = new __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_behaviors_introComplexAnimationBehavior__["a" /* IntroComplexAnimationBehavior */]();
        this.addBehavior(behavior);
        return behavior;
    };
    BaseWordMainComponent.prototype.wordListAnimation = function (obj, remove) {
        var _this = this;
        obj.visible = true;
        var y = remove ? (__WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].height + obj.height / 2) : (this.cameraOffset.y - obj.height / 2);
        var to = { x: this.positions.animationX, y: y };
        __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: obj,
            duration: durations.wordList,
            easing: Phaser.Easing.Sinusoidal.InOut,
            to: to,
            reverse: !remove,
            onComplete: function () {
                if (remove) {
                    obj.destroy(true);
                }
                else {
                    _this.answersAreReady();
                }
            }
        });
    };
    BaseWordMainComponent.prototype.createWordListComponent = function () {
        var component = this.createComponent(__WEBPACK_IMPORTED_MODULE_12_games_polyglot_common_components_wordListComponent__["a" /* WordListComponent */]);
        return component;
    };
    BaseWordMainComponent.prototype.createWordListProps = function (wordListData, answerWord) {
        return {
            list: wordListData,
            enableHint: this.hintComponent.enableLetterHint,
            answerWord: answerWord,
            offset: this.positions.wordlistOffset
        };
    };
    BaseWordMainComponent.prototype.renderTask = function (words, wordListData) {
        var _this = this;
        this.typewriter.clearText();
        this.typewriter.setProps(words);
        if (this.wordList) {
            this.wordListAnimation(this.wordList, true);
        }
        this.wordList = this.mainGroup.add(this.createWordListComponent()).anchorCenter();
        this.wordList.visible = false;
        this.wordList.setPos(this.getPositions().wordList);
        this.wordList.setProps(this.createWordListProps(wordListData, words[0]));
        var signal = this.isFirstTask ? this.context.uiService.mainComponent.onIntroComplete : __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_signals__["a" /* Signals */].memorize();
        signal.addOnce(function () {
            _this.playSound(__WEBPACK_IMPORTED_MODULE_13_games_polyglot_common_wordsSounds__["a" /* WordsSounds */].paper);
            _this.wordListAnimation(_this.wordList, false);
        });
        if (this.hint) {
            this.mainGroup.bringToTop(this.hint);
        }
    };
    return BaseWordMainComponent;
}(__WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 178:
/*!**************************************************************!*\
  !*** ./src/core/ui/components/games/gameUI/hintComponent.ts ***!
  \**************************************************************/
/*! exports provided: HintComponent */
/*! exports used: HintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_images__ = __webpack_require__(/*! core/assets/images */ 46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_logic_cnst__ = __webpack_require__(/*! core/logic/cnst */ 36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameUI_textPanelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/textPanelComponent */ 161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_img__ = __webpack_require__(/*! core/ui/controls/img */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);












var durations = {
    hide: 300,
};
var HintComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](HintComponent, _super);
    function HintComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].create({
            margin: 10,
            tooltipSize: { width: 880, height: 120 },
            tooltip: { x: 60, y: 0 },
        });
        _this.hintCount = __WEBPACK_IMPORTED_MODULE_2_core_logic_cnst__["a" /* Cnst */].hintCount;
        return _this;
    }
    HintComponent.prototype.onAnswer = function (answer) {
        if (__WEBPACK_IMPORTED_MODULE_3_core_types_logic__["a" /* AnswerStatus */].isMain(answer.status)) {
            this.btn.disabled = false;
        }
    };
    HintComponent.prototype.onInit = function () {
        var _this = this;
        var group = new __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_control__["a" /* Control */]();
        var main = group.add(new __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_img__["a" /* Img */](__WEBPACK_IMPORTED_MODULE_1_core_assets_images__["a" /* CoreImages */].hint_main));
        this.hints = __WEBPACK_IMPORTED_MODULE_1_core_assets_images__["a" /* CoreImages */].hintList.map(function (x) { return new __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_img__["a" /* Img */](x); });
        group.addChildren(this.hints);
        this.btn = this.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__["a" /* Btn */]("", function () { return _this.hint(); }, undefined, group)).anchorCenter();
        this.btn.onHover(function (out) {
            main.key = out ? __WEBPACK_IMPORTED_MODULE_1_core_assets_images__["a" /* CoreImages */].hint_main : __WEBPACK_IMPORTED_MODULE_1_core_assets_images__["a" /* CoreImages */].hint_hover;
            _this.textPanel.visible = !out;
        });
        this.onChangeFor(function () { return __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].isPortrait; }, function (x) { return _this.defaultPosition(); });
        this.textPanel = this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameUI_textPanelComponent__["a" /* TextPanelComponent */]({ size: this.positions.tooltipSize })).setPos(this.positions.tooltip);
        this.textPanel.visible = false;
    };
    HintComponent.prototype.defaultPosition = function () {
        var topOffset = __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].topOffset;
        this.updatePos(-__WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].realLeftOffset + this.btn.width / 2 - this.positions.margin, -topOffset + this.btn.height / 2 - this.positions.margin);
        return this;
    };
    HintComponent.prototype.hint = function () {
        var _this = this;
        if (!this.context.inputService.enabled) {
            return;
        }
        this.hintCount = this.hintCount - 1;
        var hide = this.hintCount <= 0;
        this.btn.disabled = true;
        this.hints[this.hintCount].visible = false;
        this.context.uiService.hintComponent.onHint.dispatch();
        if (hide) {
            __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__["a" /* Tweens */].start({
                target: this.btn,
                duration: durations.hide,
                to: { symmetricScale: 0 },
                easing: Phaser.Easing.Back.In,
                onComplete: function () { return _this.destroy(true); }
            });
        }
    };
    HintComponent.prototype.onPropsUpdate = function () {
        this.textPanel.setProps(this.props);
    };
    HintComponent.prototype.beforeDestroy = function () {
        this.context.uiService.hintComponent.onHint.dispose();
    };
    return HintComponent;
}(__WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 179:
/*!*******************************************************************!*\
  !*** ./src/games/polyglot/common/components/wordListComponent.ts ***!
  \*******************************************************************/
/*! exports provided: WordListComponent */
/*! exports used: WordListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_behaviors_focusBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/focusBehavior */ 180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_polyglot_common_components_anagrammaComponent__ = __webpack_require__(/*! games/polyglot/common/components/anagrammaComponent */ 181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_polyglot_common_components_PaperComponent__ = __webpack_require__(/*! games/polyglot/common/components/PaperComponent */ 173);








var WordListComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](WordListComponent, _super);
    function WordListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
            wordMargin: { x: 0, y: 15 },
            focus: [400, 400],
            focusSize: { width: 500, height: 400 }
        });
        _this.paper = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_7_games_polyglot_common_components_PaperComponent__["a" /* PaperComponent */]));
        _this.wordsGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_control__["a" /* Control */]()).anchorCenter();
        return _this;
    }
    WordListComponent.prototype.onInit = function () {
        var _this = this;
        if (this.isTutorial) {
            this.onChangeFor(function () { return _this.tutorialStore.isLastStep; }, function (isLastStep) {
                _this.setAnswerHightlightDisabled(!isLastStep);
            });
        }
    };
    WordListComponent.prototype.setAnswerHightlightDisabled = function (disabled) {
        this.words.forEach(function (x) { return x.setAnswerHightlightDisabled(disabled); });
    };
    WordListComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.wordsGroup.removeAll(true);
        var smallFont = this.props.list.some(function (anagramma) { return anagramma.anagramma.length > 10; });
        this.words = this.props.list.map(function (anagramma, index) {
            var component = _this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_6_games_polyglot_common_components_anagrammaComponent__["a" /* AnagrammaComponent */], { anagramma: anagramma, index: index, enableHint: _this.props.enableHint, smallFont: smallFont });
            component.tag = anagramma.word == _this.props.answerWord;
            return component;
        });
        this.wordsGroup.addChildren(this.words);
        __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].tableColumn(this.words, this.positions.wordMargin);
        this.paper.updatePaper(this.wordsGroup);
        this.wordsGroup.updatePos(this.center()[0] + this.props.offset.x, this.center()[1] + this.props.offset.y);
        this.wordsGroup.updatePivot();
        this.updatePivot();
        __WEBPACK_IMPORTED_MODULE_5_core_utils_undef__["a" /* Undef */].map(this.wordsGroup.getBehavior(__WEBPACK_IMPORTED_MODULE_3_core_ui_controls_behaviors_focusBehavior__["a" /* FocusBehavior */]), function (x) {
            x.visible = false;
            x.updateSize();
            _this.context.uiService.mainComponent.onAnswersAreReady.addOnce(function () { return x.visible = true; });
        });
    };
    return WordListComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 180:
/*!*********************************************************!*\
  !*** ./src/core/ui/controls/behaviors/focusBehavior.ts ***!
  \*********************************************************/
/*! exports provided: FocusBehavior */
/*! exports used: FocusBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_behaviors_behavior__ = __webpack_require__(/*! core/ui/controls/behaviors/behavior */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_pointerBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/pointerBehavior */ 71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);








var FocusBehavior = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](FocusBehavior, _super);
    function FocusBehavior(context, callback) {
        var _this = _super.call(this) || this;
        _this.context = context;
        _this.callback = callback;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            radius: 5,
            margin: 40,
            pointerMaring: 40,
            border: 20
        });
        _this.pointerBehavior = new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_pointerBehavior__["a" /* PointerBehavior */](_this.context, { location: "top", dark: true, margin: _this.positions.pointerMaring });
        return _this;
    }
    Object.defineProperty(FocusBehavior.prototype, "visible", {
        get: function () {
            return this.btn.visible;
        },
        set: function (v) {
            if (v) {
                __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].setVisible(this.btn, v);
                __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].setVisible(this.pointerBehavior.arrow, v);
            }
            else {
                this.pointerBehavior.arrow.visible = false;
                this.btn.visible = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    FocusBehavior.prototype.updateSize = function () {
        this.back.clear();
        this.back.lineStyle(this.positions.border, __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["b" /* CoreColors */].focus, 1);
        this.back.drawRoundedRect(0, 0, this.control.width + this.positions.margin, this.control.height + this.positions.margin, this.positions.radius);
        var topLeft = this.control.calcTopLeftOnParent(this.context.uiService.rootComponent);
        if (!topLeft) {
            return;
        }
        var x = topLeft.x, y = topLeft.y;
        var _a = this.control.center(), cx = _a[0], cy = _a[1];
        this.btn.updatePos(x + cx, y + cy);
        this.btn.updateButtonSize();
        this.btn.updatePivot();
        this.pointerBehavior.updateArrowPosition();
    };
    FocusBehavior.prototype.onInit = function () {
        var _this = this;
        var rect = this.control.game.make.graphics();
        var group = new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__["a" /* Control */]();
        group.addChild(rect);
        this.back = rect;
        this.btn = new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_btn__["a" /* Btn */]("", function () { return _this.callback ? _this.callback() : undefined; }, undefined, group).anchorCenter();
        this.context.uiService.rootComponent.addChild(this.btn);
        __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].scalePulse(this.btn);
        this.control.addBehavior(this.pointerBehavior);
        this.updateSize();
    };
    return FocusBehavior;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_controls_behaviors_behavior__["a" /* Behavior */]));



/***/ }),

/***/ 181:
/*!********************************************************************!*\
  !*** ./src/games/polyglot/common/components/anagrammaComponent.ts ***!
  \********************************************************************/
/*! exports provided: AnagrammaComponent */
/*! exports used: AnagrammaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagrammaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_answerBtnBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/answerBtnBehavior */ 69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_behaviors_btnAlphaHoverBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/btnAlphaHoverBehavior */ 169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_utils_arrays__ = __webpack_require__(/*! core/utils/arrays */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_polyglot_common_fonts__ = __webpack_require__(/*! games/polyglot/common/fonts */ 166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_polyglot_common_wordImages__ = __webpack_require__(/*! games/polyglot/common/wordImages */ 160);












var maxColumn = 5;
var AnagrammaComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AnagrammaComponent, _super);
    function AnagrammaComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            wordMargin: { y: 0 },
            wordWidth: 450
        });
        _this.poloska = _this.addImage([__WEBPACK_IMPORTED_MODULE_11_games_polyglot_common_wordImages__["a" /* WordImages */].poloska, [0, 0]]);
        _this.buttonGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__["a" /* Control */]()).anchorCenterX().updatePos(_this.width / 2, 0);
        return _this;
    }
    AnagrammaComponent.prototype.onInit = function () {
        var _this = this;
        this.context.uiService.hintComponent.onHint.add(function () { return _this.showHint(); });
    };
    AnagrammaComponent.prototype.showHint = function () {
        var _this = this;
        if (this.props.enableHint) {
            var button = this.buttons.find(function (x) { return x.text == _this.props.anagramma.word[0]; });
            button.textControl.fill = __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["b" /* CoreColors */].hint;
        }
    };
    AnagrammaComponent.prototype.showTutorial = function () {
        var _this = this;
        var buttons = this.buttons.filter(function (x) { return _this.getCurrentTask().answers; });
    };
    AnagrammaComponent.prototype.onAnswer = function (answer) {
        if (answer.status == __WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].Correct || answer.status == __WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].Error && !this.isTutorial) {
            // this.removeAll(true)
            // this.add(new Txt(this.props.word, Fonts.wordText))
            this.createButtons(true);
            this.updatePositions();
        }
    };
    AnagrammaComponent.prototype.updatePositions = function () {
        var buttons = __WEBPACK_IMPORTED_MODULE_9_core_utils_arrays__["a" /* Arrays */].chunkEven(this.buttons, this.props.smallFont ? 8 : 6);
        __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].table(buttons, {
            x: this.positions.wordWidth,
            isFullWidth: true,
            y: 0
        });
        this.poloska.y = this.buttonGroup.height;
        // Sizes.tableColumn([this.buttonGroup, this.poloska], {x:0,y:-50})
    };
    AnagrammaComponent.prototype.setAnswerHightlightDisabled = function (disabled) {
        this.buttons.forEach(function (x) { return x.getBehavior(__WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_answerBtnBehavior__["a" /* AnswerBtnBehavior */]).setDisabled(disabled); });
    };
    AnagrammaComponent.prototype.createButtons = function (showWord) {
        var _this = this;
        this.buttonGroup.removeAll(true);
        this.buttons = __WEBPACK_IMPORTED_MODULE_9_core_utils_arrays__["a" /* Arrays */].zip(this.props.anagramma.anagramma.split(""), this.props.anagramma.word.split("")).map(function (_a, i) {
            var aLetter = _a[0], wLetter = _a[1];
            var txt = i == _this.props.anagramma.hideIndex ? "?" : aLetter;
            txt = showWord ? wLetter : txt == " " ? "_" : txt;
            var btn = new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_index__["a" /* Btn */](txt, function () {
            }, __WEBPACK_IMPORTED_MODULE_10_games_polyglot_common_fonts__["a" /* Fonts */].wordText(_this.props.smallFont ? 2 : 3));
            var answerId = (aLetter + _this.props.index.toString());
            return _this.addAnswerBehavior(btn, answerId, { dark: true, location: "bottom" }).addBehavior(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_behaviors_btnAlphaHoverBehavior__["a" /* BtnAlphaHover */]());
        });
        this.buttonGroup.addChildren(this.buttons);
        this.updatePositions();
        this.buttonGroup.updatePivot();
    };
    AnagrammaComponent.prototype.onPropsUpdate = function () {
        this.createButtons(false);
    };
    return AnagrammaComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 182:
/*!*************************************************************************!*\
  !*** ./src/games/polyglot/common/components/baseTypewriterComponent.ts ***!
  \*************************************************************************/
/*! exports provided: BaseTypeWriterComponent */
/*! exports used: BaseTypeWriterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTypeWriterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_polyglot_common_fonts__ = __webpack_require__(/*! games/polyglot/common/fonts */ 166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_polyglot_common_wordsSounds__ = __webpack_require__(/*! games/polyglot/common/wordsSounds */ 163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wordImages__ = __webpack_require__(/*! ../wordImages */ 160);













var durations = {
    hand: 100,
    type: 100
};
var secondHandSound = "secondHandSound";
var BaseTypeWriterComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](BaseTypeWriterComponent, _super);
    function BaseTypeWriterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
            text: Object(__WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__["a" /* tuple */])(0, 0),
            maxWordWidth: 500,
            handsY: 510,
            handsX: [90, 370]
        });
        _this.alwaysFullWord = false;
        _this.index = 1;
        return _this;
    }
    BaseTypeWriterComponent.prototype.onInit = function () {
        this.cloneSound(__WEBPACK_IMPORTED_MODULE_11_games_polyglot_common_wordsSounds__["a" /* WordsSounds */].type, secondHandSound);
        this.typeMain = this.addImage([__WEBPACK_IMPORTED_MODULE_12__wordImages__["a" /* WordImages */].type_main, [0, 0]]);
        this.text = this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_txt__["a" /* Txt */]("", __WEBPACK_IMPORTED_MODULE_10_games_polyglot_common_fonts__["a" /* Fonts */].typewriterText)).setPos(this.positions.text).anchorCenter();
    };
    BaseTypeWriterComponent.prototype.addHands = function () {
        var _this = this;
        this.hands = [__WEBPACK_IMPORTED_MODULE_12__wordImages__["a" /* WordImages */].hand_0, __WEBPACK_IMPORTED_MODULE_12__wordImages__["a" /* WordImages */].hand_1].map(function (x, i) { return _this.addImage([x, [_this.positions.handsX[i], __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].height]]); });
    };
    BaseTypeWriterComponent.prototype.animationClean = function () {
    };
    BaseTypeWriterComponent.prototype.clearText = function () {
        if (this.text.text) {
            this.text.text = "";
            this.animationClean();
        }
    };
    BaseTypeWriterComponent.prototype.handAnimation = function (handIndex, repeat) {
        if (repeat === void 0) { repeat = 0; }
        if (!__WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["e" /* screenSizeService */].isPortrait) {
            var hand = this.hands[handIndex];
            var type = this.handTypeAnimation(handIndex, repeat);
            var handShow = this.handShowAnimation(hand, true);
            handShow.chain(type, this.handShowAnimation(hand, false)).start();
            return (repeat > 0 ? handShow : type).onComplete;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__["a" /* Signals */].memorize();
        }
    };
    BaseTypeWriterComponent.prototype.handShowAnimation = function (hand, show) {
        return __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: hand,
            duration: durations.hand,
            to: { y: show ? this.positions.handsY : __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].height },
            notStart: true
        });
    };
    BaseTypeWriterComponent.prototype.handTypeAnimation = function (handIndex, repeat) {
        if (repeat === void 0) { repeat = 0; }
        var soundKey = handIndex ? secondHandSound : __WEBPACK_IMPORTED_MODULE_11_games_polyglot_common_wordsSounds__["a" /* WordsSounds */].type;
        this.playSound(soundKey);
        return __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.hands[handIndex],
            duration: durations.hand,
            to: { symmetricScale: 0.9 },
            simpleYoyo: true,
            repeat: repeat,
            notStart: true
        });
    };
    BaseTypeWriterComponent.prototype.onAnswer = function (answer) {
        var _this = this;
        if (this.alwaysFullWord) {
            if (!this.isTutorial || answer.status != __WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].Error) {
                var answerText = __WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].isCorrect(answer.status) ? answer.answerId : this.props.join("\n");
                this.typeWord(answerText);
            }
        }
        else {
            if (answer.status == __WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].Error) {
                if (!this.isTutorial) {
                    var answerText = this.props[0];
                    this.typeWord(answerText);
                }
            }
            else {
                this.index = (this.index + 1) % 2;
                this.handAnimation(this.index).addOnce(function () { return _this.text.text =
                    _this.props[0].substring(0, answer.correctAnswerIndex + 1); });
            }
        }
    };
    BaseTypeWriterComponent.prototype.typeWord = function (word) {
        var _this = this;
        this.handAnimation(1, 1).addOnce(function () {
            _this.text.text = word;
            __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__["a" /* ControlUtl */].scaleToFit(_this.text, _this.positions.maxWordWidth);
            _this.text.updatePivot();
        });
        this.delay(durations.type).addOnce(function () { return _this.handAnimation(0, 1); });
    };
    BaseTypeWriterComponent.prototype.onPropsUpdate = function () {
        this.text.text = this.props[0];
        __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__["a" /* ControlUtl */].scaleToFit(this.text, this.positions.maxWordWidth);
        this.text.updatePivot();
        this.text.text = "";
    };
    return BaseTypeWriterComponent;
}(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 210:
/*!*************************************************!*\
  !*** ./src/games/polyglot/journalist/images.ts ***!
  \*************************************************/
/*! exports provided: Images */
/*! exports used: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_games_polyglot_common_wordImages__ = __webpack_require__(/*! games/polyglot/common/wordImages */ 160);

var Images;
(function (Images) {
    Images.type_part_1 = "type_part_1";
    Images.type_part_0 = "type_part_0";
    Images.typePartCount = 42;
    Images.sprites = __WEBPACK_IMPORTED_MODULE_0_games_polyglot_common_wordImages__["a" /* WordImages */].sprites.concat([
        Images.type_part_0,
        Images.type_part_1
    ]);
    // export const spritesheets: Spritesheet[] = [
    //   {key: type_part, width: sizes.type_part.w, height: sizes.type_part.h, count: typePartCount},
    // ]
    Images.data = { sprites: Images.sprites };
})(Images || (Images = {}));


/***/ }),

/***/ 211:
/*!*******************************************************!*\
  !*** ./src/games/polyglot/journalist/translations.ts ***!
  \*******************************************************/
/*! exports provided: Translations */
/*! exports used: Translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Translations; });
var Translations;
(function (Translations) {
    Translations.title = "title";
    Translations.tutorialSynonym = "tutorialSynonym";
    Translations.tutorialAntonym = "tutorialAntonym";
    Translations.synonym = "synonym";
    Translations.synonyms = "synonyms";
    Translations.antonym = "antonym";
    Translations.antonyms = "antonyms";
    Translations.unrelated = "unrelated";
    Translations.unrelateds = "unrelateds";
})(Translations || (Translations = {}));


/***/ }),

/***/ 285:
/*!*******************************************************************!*\
  !*** ./src/games/polyglot/journalist/components/mainComponent.ts ***!
  \*******************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services__ = __webpack_require__(/*! core/services */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_polyglot_common_components_baseWordMainComponent__ = __webpack_require__(/*! games/polyglot/common/components/baseWordMainComponent */ 177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_polyglot_journalist_components_questionComponent__ = __webpack_require__(/*! games/polyglot/journalist/components/questionComponent */ 286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_polyglot_journalist_components_wordListComponent__ = __webpack_require__(/*! games/polyglot/journalist/components/wordListComponent */ 287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_polyglot_journalist_translations__ = __webpack_require__(/*! games/polyglot/journalist/translations */ 211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_typeWriterComponent__ = __webpack_require__(/*! ../components/typeWriterComponent */ 288);










var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions2 = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            descY: 200,
        });
        _this.positionsPortrait2 = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].update(_this.positions2, {
            descY: 150,
        });
        _this.getPositions2 = function () { return __WEBPACK_IMPORTED_MODULE_4_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? _this.positionsPortrait2 : _this.positions2; }; // move to gameComponent
        _this.enableHint = true;
        _this.question = _this.mainGroup.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_6_games_polyglot_journalist_components_questionComponent__["a" /* QuestionComponent */]))
            .updatePos(__WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].w2, _this.getPositions2().descY)
            .anchorCenter();
        return _this;
    }
    MainComponent.prototype.onInit = function () {
        this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].update(this.positions, {
            mainGroup: { y: 130 },
            typewriter: [1000, 257],
        });
        this.positionsPortrait = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].update(this.positionsPortrait, {
            wordList: [__WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, 870],
            mainGroup: { y: 110 },
            typewriter: [650, 180],
        });
        this.typewriter = this.mainGroup.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_9__components_typeWriterComponent__["a" /* TypeWriterComponent */]))
            .setPos(this.getPositions().typewriter);
        this.hintComponent.show = false;
        _super.prototype.onInit.call(this);
    };
    MainComponent.prototype.createWordListComponent = function () {
        return this.createComponent(__WEBPACK_IMPORTED_MODULE_7_games_polyglot_journalist_components_wordListComponent__["a" /* WordListComponent */]);
    };
    MainComponent.prototype.createWordListProps = function (wordListData) {
        return wordListData;
    };
    MainComponent.prototype.onAnswer = function (answer) {
        if (this.isTutorial && answer.status == __WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].Error) {
            this.tutorial.setProps(__WEBPACK_IMPORTED_MODULE_1_core_services__["f" /* translationService */].getTranslation(this.getCurrentTask().taskType == "synonym"
                ? __WEBPACK_IMPORTED_MODULE_8_games_polyglot_journalist_translations__["a" /* Translations */].tutorialSynonym
                : __WEBPACK_IMPORTED_MODULE_8_games_polyglot_journalist_translations__["a" /* Translations */].tutorialAntonym));
        }
    };
    MainComponent.prototype.onNewTask = function (task) {
        this.question.setProps(task);
        this.renderTask(task.answers, task);
        if (this.isTutorial) {
            this.tutorial.setProps(__WEBPACK_IMPORTED_MODULE_1_core_services__["f" /* translationService */].getTranslation(__WEBPACK_IMPORTED_MODULE_8_games_polyglot_journalist_translations__["a" /* Translations */].title));
            this.bringToTop(this.tutorial);
        }
        this.mainGroup.bringToTop(this.question);
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_5_games_polyglot_common_components_baseWordMainComponent__["a" /* BaseWordMainComponent */]));



/***/ }),

/***/ 286:
/*!***********************************************************************!*\
  !*** ./src/games/polyglot/journalist/components/questionComponent.ts ***!
  \***********************************************************************/
/*! exports provided: QuestionComponent */
/*! exports used: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_instances__ = __webpack_require__(/*! core/services/instances */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameUI_panelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/panelComponent */ 155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_behaviors_highlightBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/highlightBehavior */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__ = __webpack_require__(/*! games/polyglot/journalist/translations */ 211);












var taskTypeTranslation = {
    "antonym": [__WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].antonym, __WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].antonyms],
    "synonym": [__WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].synonym, __WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].synonyms],
    "unrelated": [__WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].unrelated, __WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].unrelateds]
};
var QuestionComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](QuestionComponent, _super);
    function QuestionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            size: { width: 800, height: 120 },
            textMargin: 20,
            margin: { x: 4 }
        });
        _this.positionsPortrait = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].update(_this.positions, {
            size: { width: 600, height: 120 },
        });
        _this.getPositions = function () { return __WEBPACK_IMPORTED_MODULE_10_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? _this.positionsPortrait : _this.positions; };
        return _this;
    }
    QuestionComponent.prototype.onInit = function () {
        var wordBack = this.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameUI_panelComponent__["a" /* PanelComponent */]());
        wordBack.setProps({ size: this.getPositions().size });
        var font = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["c" /* CoreFonts */].tutorial(false), { wordWrap: false });
        this.questionLeft = new __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_txt__["a" /* Txt */]("", font);
        this.questionRight = new __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_txt__["a" /* Txt */]("", font);
        if (this.isTutorial) {
            this.hightlight = new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_behaviors_highlightBehavior__["a" /* HightlightBehavior */]();
            this.questionRight.addBehavior(this.hightlight);
            this.hightlight.enableHighlight(true);
        }
        var texts = [this.questionLeft, this.questionRight];
        this.group = this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__["a" /* Control */]()).setPos(wordBack.center()).anchorCenter();
        this.group.addChildren(texts);
    };
    QuestionComponent.prototype.onPropsUpdate = function () {
        var task = this.props;
        var _a = task.answers.length > 1 ? [1, task.answers.length + " "] : [0, ""], taskNameIndex = _a[0], countTxt = _a[1];
        var taskNameKey = taskTypeTranslation[task.taskType][taskNameIndex];
        this.questionLeft.text = task.word + " — ";
        this.questionRight.text = countTxt + __WEBPACK_IMPORTED_MODULE_2_core_services_instances__["c" /* translationService */].getTranslation(taskNameKey);
        __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableRow([this.questionLeft, this.questionRight], this.positions.margin);
        __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_controlUtl__["a" /* ControlUtl */].scaleToFit(this.group, this.getPositions().size.width - this.positions.textMargin);
        this.group.updatePivot();
    };
    return QuestionComponent;
}(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 287:
/*!***********************************************************************!*\
  !*** ./src/games/polyglot/journalist/components/wordListComponent.ts ***!
  \***********************************************************************/
/*! exports provided: WordListComponent */
/*! exports used: WordListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_polyglot_common_components_PaperComponent__ = __webpack_require__(/*! games/polyglot/common/components/PaperComponent */ 173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_games_polyglot_common_fonts__ = __webpack_require__(/*! games/polyglot/common/fonts */ 166);










var WordListComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](WordListComponent, _super);
    function WordListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            wordMargin: { x: 0, y: 20 },
            wordMarginPlus: 30,
            offset: 25,
            textWidth: 540
        });
        _this.paper = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_8_games_polyglot_common_components_PaperComponent__["a" /* PaperComponent */]));
        _this.wordsGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__["a" /* Control */]()).anchorCenter();
        return _this;
    }
    WordListComponent.prototype.onAnswer = function (answer) {
        var level = answer.levelTask.level;
        if (__WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].isCorrect(answer.status) && level.answerCount > 1) {
            var btn = this.words.find(function (x) { return x.text == answer.answerId; });
            btn.visible = false;
        }
    };
    WordListComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.wordsGroup.removeAll(true);
        this.words = this.props.answerWords.map(function (word) {
            var size = 1;
            var btn = new __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_btn__["a" /* Btn */](word, function () {
            }, __WEBPACK_IMPORTED_MODULE_9_games_polyglot_common_fonts__["a" /* Fonts */].wordText(size));
            btn.textControl.wordWrap = true;
            btn.textControl.wordWrapWidth = _this.positions.textWidth;
            btn.updateButtonSize();
            btn.alpha = 0.5;
            btn.onHover(function (out) { return btn.alpha = out ? 0.5 : 1; });
            __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__["a" /* ControlUtl */].scaleToFit(btn, _this.positions.textWidth);
            return _this.addAnswerBehavior(btn, word, { dark: true, location: "left" });
        });
        this.wordsGroup.addChildren(this.words);
        var plus = this.positions.wordMarginPlus * __WEBPACK_IMPORTED_MODULE_7_core_utils_numbers__["a" /* Numbers */].coef(this.words.length, 3, 7);
        __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].tableColumn(this.words, { x: 0, y: this.positions.wordMargin.y + plus });
        this.paper.updatePaper(this.wordsGroup);
        this.wordsGroup.updatePos(this.center()[0] + this.positions.offset, this.center()[1]);
        this.wordsGroup.updatePivot();
        this.updatePivot();
    };
    return WordListComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 288:
/*!*************************************************************************!*\
  !*** ./src/games/polyglot/journalist/components/typeWriterComponent.ts ***!
  \*************************************************************************/
/*! exports provided: TypeWriterComponent */
/*! exports used: TypeWriterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeWriterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_polyglot_common_components_baseTypewriterComponent__ = __webpack_require__(/*! games/polyglot/common/components/baseTypewriterComponent */ 182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images__ = __webpack_require__(/*! ../images */ 210);






var durations = {
    typePart: 150
};
var TypeWriterComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TypeWriterComponent, _super);
    function TypeWriterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions2 = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            partAnimation: -100,
            center: [383, 395]
        });
        return _this;
    }
    TypeWriterComponent.prototype.onInit = function () {
        var _this = this;
        this.alwaysFullWord = true;
        this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].update(this.positions, {
            text: Object(__WEBPACK_IMPORTED_MODULE_3_core_utils_tuples__["a" /* tuple */])(383, 220),
            maxWordWidth: 460,
            handsY: 450
        });
        this.typePart1 = this.addImage([__WEBPACK_IMPORTED_MODULE_5__images__["a" /* Images */].type_part_1, [0, 0]])
            .updateAnchor(0.5, 0.912).setPos(this.positions2.center)
            .fluentUpdate(function (x) { return x.scaleY = 0; });
        _super.prototype.onInit.call(this);
        this.typePart0 = this.addImage([__WEBPACK_IMPORTED_MODULE_5__images__["a" /* Images */].type_part_0, [0, 0]])
            .updateAnchor(0.5, 0.088).setPos(this.positions2.center);
        this.addHands();
        this.context.uiService.mainComponent.onIntroComplete.addOnce(function () { return _this.animationParts(); });
    };
    TypeWriterComponent.prototype.animationParts = function () {
        var tweenUp = __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.typePart0,
            duration: durations.typePart,
            notStart: true,
            easing: Phaser.Easing.Sinusoidal.In,
            to: { scaleY: 0 }
        });
        var tweenDown = __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.typePart1,
            duration: durations.typePart,
            notStart: true,
            easing: Phaser.Easing.Sinusoidal.Out,
            to: { scaleY: 1 }
        });
        tweenUp.chain(tweenDown).start();
    };
    TypeWriterComponent.prototype.animationClean = function () {
    };
    return TypeWriterComponent;
}(__WEBPACK_IMPORTED_MODULE_4_games_polyglot_common_components_baseTypewriterComponent__["a" /* BaseTypeWriterComponent */]));



/***/ }),

/***/ 289:
/*!*************************************************!*\
  !*** ./src/games/polyglot/journalist/levels.ts ***!
  \*************************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);

function level(types, answerCount, wrongCount) {
    return { types: types, answerCount: answerCount, wrongCount: wrongCount };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])([
    level(["synonym"], 1, 2),
    level(["antonym"], 1, 2),
    level(["unrelated"], 1, 2),
    level(["synonym", "antonym"], 1, 3),
    level(["antonym", "unrelated"], 2, 3),
    level(["synonym", "unrelated"], 3, 3),
    level(["synonym", "antonym", "unrelated"], 1, 5),
    level(["synonym", "antonym", "unrelated"], 2, 5),
    level(["synonym", "antonym", "unrelated"], 3, 5)
]);


/***/ }),

/***/ 290:
/*!************************************************!*\
  !*** ./src/games/polyglot/journalist/logic.ts ***!
  \************************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_types_gameLogic__ = __webpack_require__(/*! core/types/gameLogic */ 47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_index__ = __webpack_require__(/*! core/utils/index */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_polyglot_journalist_enVersion_enLogic__ = __webpack_require__(/*! games/polyglot/journalist/enVersion/enLogic */ 291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_polyglot_journalist_words__ = __webpack_require__(/*! games/polyglot/journalist/words */ 294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);









var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_3_core_utils_index__["e" /* RandomGenerator */](); // [4, 2,8,10]
        _this.tutorialTaskTypes = ["synonym", "antonym"];
        _this.tutorialSeq = new __WEBPACK_IMPORTED_MODULE_2_core_utils_circleSeq__["b" /* UniqSeq */](_this.tutorialTaskTypes.length, _this.rng);
        _this.items = __WEBPACK_IMPORTED_MODULE_7_games_polyglot_journalist_words__["a" /* SynonymsWords */].items(_this.gameData.settings.custom.locale);
        _this.groupSeq = new __WEBPACK_IMPORTED_MODULE_2_core_utils_circleSeq__["b" /* UniqSeq */](_this.items.length);
        _this.uniqSeqs = _this.items.map(function (x) { return new __WEBPACK_IMPORTED_MODULE_2_core_utils_circleSeq__["b" /* UniqSeq */](x.length, _this.rng); });
        _this.enLogic = new __WEBPACK_IMPORTED_MODULE_6_games_polyglot_journalist_enVersion_enLogic__["a" /* EnLogic */]();
        return _this;
    }
    Logic.prototype.possibleAnswersAndWrongWords = function (items, type, rest) {
        var synonyms = items[0];
        var antonyms = items[1];
        var wrongWord = __WEBPACK_IMPORTED_MODULE_8_lodash__["flatten"](this.rng.sample(rest));
        var _a = this.rng.shuffle(synonyms), answer = _a[0], restSynonyms = _a.slice(1);
        if (type == "synonym") {
            return Object(__WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__["b" /* tuple4 */])(answer, restSynonyms, antonyms, wrongWord);
        }
        else if (type == "antonym") {
            return Object(__WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__["b" /* tuple4 */])(answer, antonyms, restSynonyms, wrongWord);
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__["b" /* tuple4 */])(answer, wrongWord, restSynonyms, antonyms);
        }
    };
    Logic.prototype.nextTask = function (level) {
        if (this.gameData.settings.custom.locale == "en") {
            return this.enLogic.nextTask(level, this.isTutorial);
        }
        var wordGroupIndex = this.groupSeq.next();
        var wordGroup = this.items[wordGroupIndex];
        var wrongItems = __WEBPACK_IMPORTED_MODULE_8_lodash__["flatten"](this.items.filter(function (x) { return x != wordGroup; }));
        var items = wordGroup.filter(function (x) {
            return x[0].length > level.answerCount + 1
                && x[1].length >= level.answerCount;
        });
        var wordSet = this.uniqSeqs[wordGroupIndex].nextFrom(items);
        var taskType = this.isTutorial
            ? this.tutorialSeq.nextFrom(this.tutorialTaskTypes)
            : this.rng.sample(level.types);
        var _a = this.possibleAnswersAndWrongWords(wordSet, taskType, wrongItems), word = _a[0], possibleAnswers = _a[1], wrong1 = _a[2], wrong2 = _a[3];
        if (wrong1.length + wrong2.length < level.wrongCount) {
            return this.nextTask(level);
        }
        var _b = __WEBPACK_IMPORTED_MODULE_4_core_utils_numbers__["a" /* Numbers */].splitEven(level.wrongCount, 2), wrong1Count = _b[0], wrong2Count = _b[1];
        var wrong1Words = this.rng.subset(wrong1, wrong1Count);
        var wrongWords = wrong1Words.concat(this.rng.subset(wrong2, level.wrongCount - wrong1Words.length));
        var answers = this.rng.subset(possibleAnswers, level.answerCount);
        var answerWords = this.rng.shuffle(answers, wrongWords);
        return {
            word: word,
            taskType: taskType,
            answerWords: answerWords,
            answers: answers
        };
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_types_gameLogic__["a" /* GameLogic */]));



/***/ }),

/***/ 291:
/*!************************************************************!*\
  !*** ./src/games/polyglot/journalist/enVersion/enLogic.ts ***!
  \************************************************************/
/*! exports provided: EnLogic */
/*! exports used: EnLogic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnLogic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_utils_index__ = __webpack_require__(/*! core/utils/index */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_polyglot_journalist_enVersion_enWords__ = __webpack_require__(/*! games/polyglot/journalist/enVersion/enWords */ 292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);






var EnLogic = /** @class */ (function () {
    function EnLogic() {
        this.rng = new __WEBPACK_IMPORTED_MODULE_1_core_utils_index__["e" /* RandomGenerator */](); // [4, 2,8,10]
        this.uniqSeq = new __WEBPACK_IMPORTED_MODULE_0_core_utils_circleSeq__["b" /* UniqSeq */](10, this.rng);
        this.tutorialTaskTypes = ["synonym", "antonym"];
        this.tutorialSeq = new __WEBPACK_IMPORTED_MODULE_0_core_utils_circleSeq__["b" /* UniqSeq */](this.tutorialTaskTypes.length, this.rng);
        this.items = __WEBPACK_IMPORTED_MODULE_4_games_polyglot_journalist_enVersion_enWords__["a" /* EnSynonymsWords */].items("en");
    }
    EnLogic.prototype.possibleAnswersAndWrongWords = function (items, type, rest) {
        var synonyms = items[0].concat(items[1]);
        var antonyms = items[2];
        var wrongWord = __WEBPACK_IMPORTED_MODULE_5_lodash__["flatten"](this.rng.sample(rest));
        var _a = this.rng.shuffle(synonyms), answer = _a[0], restSynonyms = _a.slice(1);
        if (type == "synonym") {
            return Object(__WEBPACK_IMPORTED_MODULE_3_core_utils_tuples__["b" /* tuple4 */])(answer, restSynonyms, antonyms, wrongWord);
        }
        else if (type == "antonym") {
            return Object(__WEBPACK_IMPORTED_MODULE_3_core_utils_tuples__["b" /* tuple4 */])(answer, antonyms, restSynonyms, wrongWord);
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_3_core_utils_tuples__["b" /* tuple4 */])(answer, wrongWord, restSynonyms, antonyms);
        }
    };
    EnLogic.prototype.nextTask = function (level, isTutorial) {
        var items = this.items.filter(function (x) {
            return x[0].length + x[1].length > level.answerCount + 1
                && x[2].length >= level.answerCount;
        });
        var wordSet = this.uniqSeq.nextFrom(items);
        var rest = items.filter(function (x) { return x != wordSet; });
        var taskType = isTutorial
            ? this.tutorialSeq.nextFrom(this.tutorialTaskTypes)
            : this.rng.sample(level.types);
        var _a = this.possibleAnswersAndWrongWords(wordSet, taskType, rest), word = _a[0], possibleAnswers = _a[1], wrong1 = _a[2], wrong2 = _a[3];
        if (wrong1.length + wrong2.length < level.wrongCount) {
            return this.nextTask(level, isTutorial);
        }
        var _b = __WEBPACK_IMPORTED_MODULE_2_core_utils_numbers__["a" /* Numbers */].splitEven(level.wrongCount, 2), wrong1Count = _b[0], wrong2Count = _b[1];
        var wrong1Words = this.rng.subset(wrong1, wrong1Count);
        var wrongWords = wrong1Words.concat(this.rng.subset(wrong2, level.wrongCount - wrong1Words.length));
        var answers = this.rng.subset(possibleAnswers, level.answerCount);
        var answerWords = this.rng.shuffle(answers, wrongWords);
        return {
            word: word,
            taskType: taskType,
            answerWords: answerWords,
            answers: answers
        };
    };
    return EnLogic;
}());



/***/ }),

/***/ 292:
/*!************************************************************!*\
  !*** ./src/games/polyglot/journalist/enVersion/enWords.ts ***!
  \************************************************************/
/*! exports provided: WordLength, EnSynonymsWords */
/*! exports used: EnSynonymsWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WordLength */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnSynonymsWords; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_utils_strings__ = __webpack_require__(/*! core/utils/strings */ 67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_polyglot_journalist_wordsEn__ = __webpack_require__(/*! games/polyglot/journalist/wordsEn */ 293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_utils_localeUtl__ = __webpack_require__(/*! games/utils/localeUtl */ 174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);




var WordLength;
(function (WordLength) {
    WordLength[WordLength["Small"] = 0] = "Small";
    WordLength[WordLength["Middle"] = 1] = "Middle";
    WordLength[WordLength["Big"] = 2] = "Big";
})(WordLength || (WordLength = {}));
var EnSynonymsWords;
(function (EnSynonymsWords) {
    var localeData = {
        en: __WEBPACK_IMPORTED_MODULE_1_games_polyglot_journalist_wordsEn__["a" /* WordsEn */].data
    };
    function fix(data) {
        return data.map(function (x) { return x.map(function (y) { return __WEBPACK_IMPORTED_MODULE_3_lodash__["uniq"](__WEBPACK_IMPORTED_MODULE_0_core_utils_strings__["a" /* Strings */].splitTrim(y).filter(function (x) { return x != ""; })).map(function (x) { return __WEBPACK_IMPORTED_MODULE_3_lodash__["capitalize"](x); }); }); })
            .filter(function (x) { return x.length == 3; });
    }
    EnSynonymsWords.items = function (locale) { return fix(__WEBPACK_IMPORTED_MODULE_2_games_utils_localeUtl__["a" /* LocaleUtl */].getData(localeData, locale)); };
    // console.log(items.map(x => _(x).flatten().groupBy(x => x).value()))
})(EnSynonymsWords || (EnSynonymsWords = {}));


/***/ }),

/***/ 293:
/*!**************************************************!*\
  !*** ./src/games/polyglot/journalist/wordsEn.ts ***!
  \**************************************************/
/*! exports provided: WordsEn */
/*! exports used: WordsEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsEn; });
var WordsEn;
(function (WordsEn) {
    WordsEn.data = [["ABC,Primer,Glagolitic,Alphabet", "Dactylology,Basics", "Illiteracy,Ignorance,Simplicity,Lack of education"], ["Active,Ever-busy,Energetic,Vigorous,Intensive,Initiative", "Savvy,Dynamic,Offensive", "Passive,Inactive,Non-Energetic,Non-Initiative,Indifferent,Inert,Sluggish"], ["Actual,Daily,Topical,Hottest,Acute", "Pending,Burning,Vital", "Outdated,Unimportant,Secondary,Inappropriate,Unnecessary"], ["Chord,Triad,Consonance", "Pitch,Harmony,Symphony", "Disharmony,Disharmonious,Dissonant,Incongruous"], ["Tidy,Diligent,Accurate,Correct,Clean", "Neat,Punctual,Scrupulous,Careful", "Careless,Slovenly,Inaccurate,Unkempt,Loosened,Delinquent,Disorganized"], ["Excitement,Ardency,Heat,Fight,Fervor,Rage", "Passion,Ardency,Blaze,Excitement,Crush", "Detachment,Indifference,Apathy,Disappointment,Inactivity"], ["Accessory,Attribute,Attachment,Gadget", "Detail,Belonings", "Pointless,Noncompliant"], ["Activate,Animate,Invigorate,Pour in,Bring in", "Contribute,Revive,Vivify", "Slow down,Brake,Weaken,Soften,Delay,Moderate"], ["Analysis,Critique,Rewiew,Breakdown", "Research,Investigation", "Synthesis,Unification,Formation,Generalization"], ["Angel,Arcangel,Seraph,Cherub,Holy", "Angelet,Apostle,Lamb", "Demon,Devil"], ["Accent,Highlight,Underscore", "Shade,Emphasize,Protrude", "Disguise,Conceal,Dissemble,Push back,Hide,Not to highlight"], ["Arrest,Take,Turn off,Hold,Seize", "Grab,Catch hold,Put,Clap", "Free,Liberate,Give back,Not to hold,Return,Release"], ["Alibi,Justification,Kickback,Excuse,Argument", "Cover-up,Justification,Whitewash", "Condemnation,Charging,Dirtying"], ["Allergy,Illness,Intolerance,Disease", "Irritation,Swelling", "Health,Painlessness,Wellness,Disregard"], ["Altar,Credence,Sanctuary,Church,Chapel", "Temple,Cathedtral", "Laboratory,Academy,Institute"], ["Avid,Greedy,Insatiable,Ravenous", "Self-serving,Calculating,Clingy,Mean,Gluttonous,Hoggish", "Disinterested,Magnanimous,Noble,Not mercenary-minded,Generous"], ["Alternative,Dilemma,Problem,Choice,Question", "One of the two,Selection,Assortment,Analysis,Alternative", "Specificity,Not variable,Straightforward,Monotony,Restriction,Exact"], ["Alternative,Other,Opposite,Multivariant", "Picky,Other,Different,Miscellaneous", "Specific,Monotonous,Direct,Non-variant,Clear-cut"], ["Alliance,Group,Association,Coalition,Union", "Organization,Grouping,Commonwealth", "Separation,Disunity,Severance"], ["Altruistic,Unselfish,Humane,Disinterested", "Friendly,Humanistic,Human,Kind,Philanthropic,Humane", "Egoistic,Misanthropic,Hateful,Inhumane"], ["Ambition,Pride,Arrogance,Swagger", "Self-conceit,Arrogance,Haughtiness,Vanity,Conceit,Ambition", "Humility,Modesty,Meekness,Resignation,Deterrence"], ["Amputate,Take-away,Bereave,Cut,Chop off", "Capture,Separate,Cut off,Cut,Trim,Truncate", "Merge,Unite,Add,Link"], ["Amour,Love,Intimate,Romantic", "Alcove,Caring,Affectionate,Gentle,Warm", "Careless,Heartless,Mundane,Distant,Indifferent"], ["Anonymous,Unknown,Unsigned,Unnamed", "Classified,Untitled,Unsigned,Unbeknown", "Public,Uncovered,Clear,Known,Named"], ["Antiquity,Ancientry,Classic,Olden time", "Old,Past,Old Age,Ancientnes", "Modern,Present,Today,Future "], ["Antique,Ancient,Classic,Orthodox", "Junk,Past,Ancient", "Present-day"], ["Apathy,Inactivity,Apathism,Laziness,Lassitude", "Passivity,Idleness,Aloofness,Indifference,Coldness", "Inspiration,Interest,Rise,Hobby,Enthusiasm"], ["Applaud,Clap up,Cheer,Applause", "Clap hands", "Whistle,Goose"], ["Apartment,Room,Flat,House", "Dwelling,Habitat,Chamber,Bedroom,Closet", "Uninhabited,Deserted,Desolate,Empty,Lonely"], ["Appetizing,Delicious,Tasty,Savoury,Attractive,Alluring", "Delicious,Toothsome,Alluring,Goluptious,Spicy", "Bitter,Tasteless,Disgusting,Unappetizing,Inedible,Tasteless"], ["Arbitrator,Judge,Referee,Warden", "Guardian,Signaling device,Chief umpire", "Defendant,Convicted,Subordinate,Sentenced,Accused"], ["Argue,Prove,Justify,Notify", "Give reasons,Approve,Draw", "Disprove,Deny,Reject,Not to recognize"], ["Rent,Lease,Take on lease,For rent", "Rent,Hire,Borrow", "Rent out,Not to accept,Not to take,Not to receive"], ["Aromatic,Smelly,Scented,Fragrant", "Sweet,Perfumed,Balmy,Sweet-scented", "Fetid,Stinking,Smelly,Malodorous,Toxic"], ["Artistic,Skillful,Virtuoso,Masterful", "Skilful,Theater,Literate", "Inept,Unskilful,Uncomplicated,Primitive,Uniform"], ["Ace,Master,Virtuoso,Fixer,Expert", "Jack-of-all-trades,Fixer-upper", "Ignoramus,Third-rater,Scrub,Dabster,Know-nothing"], ["Associative,Combinative,Related,Similar", "Connecting,Combinative", "Unlike,Disparate,Dissimilar,Peculiar,Separated,Divided"], ["Assist,Support,Help,Lend a hand,Promote", "Cooperate,Contribute,Rescue", "Attack,Blame,Compete,Rival,Counteract"], ["Atavism,Archaism,Relics,Anachronism", "Reversion,", "Neologism,Novelty,Innovation,Hot,Contemporary"], ["Athlete,Hero,Sportsman,Strongman", "Musclehead,Lifter,Olympic lifter", "Scrub,Seekly,Weakling,Tadpole,Wuss,Sissy"], ["Athletic,Sporty,Mighty,Strong", "Powerful,Resilient,Agile", "Unsportsmanlike,Weak,Impotent,Sluggish,Asthenic"], ["Attack,Round on,Assail,Storm", "Attack,Strike,Fight,Unsheathe one's sword", "Counterattack,Reflect,Guard,Protect,Safeguard,Defend,Hit back"], ["Certify,Express,Rate,Repute,Characterize", "Expose,Recommend,Qualify", "Not to certify,Not to admit,Reprimand,Not to qualify"], ["Audience,Premises,Room", "Audience", "Deserted,Desolate,Non-Appearance,Absence"], ["Post,Show,Announce,Demonstrate", "Expose,Advertise,Declare", "Hide,Hush,Keep silent,Silence,Talk round corners,Conceal"], ["Speculation,Fraud,Swindle,Cardsharping", "Scam,Deception,Roguery,Deal", "Honesty,Decency,Verity,Truth"], ["Boarding,Collision,Coupling,Capture", "Offensive,Assault,Scrap  ", "Retreat,Evasion,Departure,Escape"], ["Anomaly,Deviation,Incorrectness,Abnormality", "Soreness,Pathology,Ugliness,Defectiveness", "Norm,Normative,Naturalness,Sanity,Adequacy,Ordinary,Typicality"], ["Abris,Outline,Shape,Essay", "Silhouette,Image,Description,Sketch", "Detailing,Specification,Occupation,Fineness"], ["Abscess,Boil,Ulcer,Apostema", "Congestion,Suppuration", "Cleanliness,Hygiene,Sterility"], ["Avant-garde,Progressive,Advanced", "Trend,Conceptualism", "Tail,Heels,Retarded,Lag"], ["Big rush,Hurry,Race,Busy time", "Haste,Deadline pressure,Work", "Freedom,Unloading,Liberty,Slowness,Calmness"], ["Autogenous cutting,Welding,Cutting,Carving", "Engraving,Welding", "Breaking,Disconnection,Dismantling,Disassembly,Separation"], ["Agitation,Incitement,Motivation,Instigation", "Dare,Talk into,Inciting", "Dissuade,Dissuation,Reject,Persuade to the contrary,Disadvise"], ["Agony,Dying,Torment,Suffering", "Toil,Pain,Torment,Torture,Excruciation", "Birth,Delight,Bliss,Health,Peace"], ["Adenoids,Tonsils,Sprouting,Glands", "Glandula,Agglomeration", "Dispersal,Distribution"], ["Authoritarianism,Authoritativeness,Didacticism,Antidemocracy,Totalitarianism", "Power,Commanding,Rule,Dominion,Dominance", "Democracy,People power,Submission,Anarchy,Subordination,Obedience,Irresistance,Docility,Weak-willed"], ["Aide-de-camp,Officer,Lieutenant,Staffer", "Rank,Degree,Military unit commander", "Subordinate,Subject,Affiliated"], ["Agitation,Affect,Forcing,Emotion,Hotness", "Awe,Excitement,Confusion", "Tranquility,Discharge,Calm,Peace,Patience,Coolness"], ["Open-work,Jewelry,Lacy,Skilled", "Filigree,Through,Lattice", "Rough,Artisanal,Unskilled,Unqualified"], ["Azimuth,Angle,Arc,Fold", "Meridian,Midday,Equator", "Straightline,Line,Parallel"], ["Excitement,Ardency,Passion,Fuss", "Fuse,Fervency", "Indifference,Patience,Coldness"], ["Adept,Follower,Devotee,Disciple", "Proponent,Advocate", "Opponent,Teacher,Educator"], ["Academism,Academicism,Speculativeness", "Bookishness,Theoretical nature", "Usability"], ["Accommodation,Adaptation,Coaptation", "Adjustment,Adaptation", "Quitting,Dishabituation,Withdrawal"], ["Accompany,Escort,Come with,Play along", "Revoice,Echo,Supporting voice", "Noncoincidence,Desynchronization,Mismatch,Nonagreement"], ["Axiom,Verity,Theorem,Truth", "Fact,Reliability,Reality", "Lie,Lies,Deception,Falsehood,Misconception"], ["Allegory,Parable,Allegorism,Runabout", "Makeover,Transfiguration", "Colloquialism "], ["Ridiculous,Ugly,Rough,Simple,Rude", "Inelegant,Tasteless,Cheap", "Beautiful,Skillful,Complicated,Virtuoso,Openwork"], ["Amnesty,Pardon,Forgive,Pardon", "Excuse,Grant,Spare", "Condemn,Execute,Sentense,Denounce,Sue"], ["Amnesty,Pardon,Forgiveness,Absolution", "Mercy,Remission,Grace,Release", "Condemnation,Iniquity,Execution,Punishment"], ["Anarchy,Power vacuum,Disorder,Spontaneity", "Disorder,Muddle,disorganization", "Power,Government,Dominance,Dominion,Dictatorship"], ["Engage,Invite,Ask,Hire", "Call,Suggest,Call on", "Deny,Refuse,Disclaim,Withdraw"], ["Enclave,Territory,Land,Country", "Possession,Region,Terrain", "Disconnection,Disintegration,Breaking,Disconnected"], ["Annotation,Summary,Digest,Abstract", "Synopsis,Contents,Review,Explanation", "Exaggeration"], ["Antagonist,Enemy,Opponent,Contender,Foe", "Opposite,Competitor,Ill-Wisher,Adversary", "Hero,Ally,Friend,Supporter,Companion,Comparison,Friendliness,Alliance "], ["Antique,Vintage,Valuable,Ancient", "Archaic,Classic,Precious", "Modern,New,Hot,Cheap"], ["Antipathy,Disgust,Dislike,Unfriendliness", "Hostility,Indifference,Disaffection,Objection", "Acceptance,Sympathy,Amicability,Friendliness,Favor "], ["Apathetic,Listless,Anergic,Cool", "Insensitive,Thick-skinned,Indifferent", "Active,Sensual,Swift,Responsive,Sensitive,Kind,Sincere"], ["Appeal,Apply,Invoke,Claim,Address", "Ask,Complain,Cry", "Hold,Ignore"], ["Apogee,Height,Crown,Top", "Zenith,Climax,Peak", "Recession,Basin,Minimum,Stagnation,Regression,Decline "], [",Perception,Understanding,Apperception ", "Feelings,Evaluation,Clarification,World-view", "Misunderstanding,Insensibility "], ["Aristocratism,Knighthood,Subtlety,Sophistication", "Grace,Pure-breeding,Gentility", "Uncertainty,Obscurity,Anonymity,Modesty"], ["Aristocratic,Noble,Exquisite,Subtle", "Refined,Sophisticated", "Unknown,Unfamous,Unpopular,Unknowable,Unpretentious"], ["Showmanship,Artistry,Mastery,Virtuosity", "Art,Mastery", "Unpretentiousness,Simplicity,Primitiveness,Unsophistication"], ["Archaic,Archaical,Outdated,Obsolete", "Antediluvian,Old-fashioned,Antiquated", "Up-to-date,Newest,New,Contemporary,Fashionable"], ["Ascetic,Devotee,Monk,Novice", "Fool-for-Christ,Eremite", "Renegade,Heretic,Misfit,Defiant"], ["Aspect,Opinion,Guess,Idea", "Reasoning,Judgment,View,Concept", "Unprincipled,Empty"], ["Assimilate,Similarize,Adopt,Compare", "Unite,Identify", "Divide,Not to adopt,Nonidentical "], ["Aphorism,Proverb,Saying,Thought", " Transfer,Saying", "Silence,Stillness,Metaphor"], ["Atrophy,Weight Loss,Decline,Deemphasis", "Deadening,Desiccation,Emaciation", "Rise,Blossom,Prosperity,Blooming "], ["Gibberish,Nonsense,Ridicule,Rubbish", "Absurdity,Devilry,Trash", "Reality,Realism,Actuality,Truth,Evidence,Objectivity,Fruition"], ["Luggage,Baggage,Freight,Stuff,Cargo", "Burden,Stock,Property,Shmatte,Clothing,Junk", "Bankruptcy"], ["Crimson,Scarlet,Purple", "Purpureal,Bloody,Cherry", "White"], ["Ballerina,Dancer,Showgirl,Ballet-girl", "Figurante,Prima", "Dancer"], ["Ballet,Choreographic,Ballabile", "Dancing", "Fixed,Static,Peace"], ["Pamper,Nurse,Shake,Affect", "Spoil,Lolly", "Intimidate,Threaten,Faultfinding,Severity,Rudeness"], ["Commonplace,Hackneyed,Standard,Canned,Trite,Stereotyped", "Worn-out,Shabby,Stencilled,Conventional,Cliched", "Amazing,Unorthodox,Outstanding,Unusual,Unique,Special"], ["Fluently,Quickly,Soon,Loose,Shallow", "Frivolously,Fleetingly,Sketchy", "Slowly,Stretched,Unhurried,Decelerated,Unhastingly"], ["Poverty,Need,Beggary,Beggarhood,Scantiness", "Underclass,Chavs,Low-income,Squalor,Impecuniosity", "Wealth,Luxury,Wellbeing,Prosperity"], ["Run,Rush,Race,Fly,Jog,Dart", "Move,Run,Rush", "Go,Stand,Crawl,Delay,Freeze"], ["Calm,Lull,Standstill,Stillness", "Windlessness,Light air,Still air ", "Wind,Hurricane,Storm"], ["Power vaccum,Anarchy,Powerlessness", "Flouting of authority", "Power,Leadership,Might,Dominance"], ["Irretrievable,Irrevocable,Irreversible,Nonrecoverable", "Lost,Irremeable,Definitive", "Returnable,Get back,Return"], ["Limitless,Infinite,Boundless,Endless", "Immense,Vast,Spanless,Immeasurable,Unfathomable", "Constrained,Last,Ultimate,Finite,Limited"], ["Sinless,Infallible,Virgin,Chaste", "Holy,Immaculate,Honest,Unspoilt", "Sinful,Peccant,Wicked,Scoundrel,Vile,Dishonest"], ["Untalented,Ungifted,Mediocre,Unable,Impotent", "Third-rater,Untalented", "Lavish,Talented,Gifted,Capable "], ["Loafer,Twister,Grazer,Freeloader", "Idler,Slacker,Sluggard", "Toiler,Eager beaver,Worker,Dealer"], ["Gaping,Abyss,Vortex,Deep", "Whirlpool,Depth", "Surface,Appearance"], ["Soulless,Heartless,Insensitive,Stale,Merciless", "Dry,Cold,Stone,Ruthless,Cruel", "Sensitive,Responsive,Attentive,Compassionate,Empathetic,Emotional,Sincere"], ["Shameless,Unceremonious,Brazen,Insolent,Unscrupulous", "Cheeky,Loud,Impudent,Indecent", "Bashful,Tense,Timid,Coward,Shy,Wavering,Mute"], ["Watchless,Homeless,Abandoned", "Neglected", "Proctored,Observed,Visual"], ["Immoral,Amoral,Vicious,Defile", "Dissolute,Lickerish,Licentious,Sinful", "Ethic,Chaste,Ethical,Moral,Insightful"], ["Safe,Inoffensive,Precautionary,Reliable,Durable", "Stable,Non-hazardous,Harmless,Protected,Uninjurious", "Dangerous,Harmful,Risky,Unprotected,Unreliable,Suspicious,Insulting"], ["Immaculate,Flawless,Perfect,Spotless,Unmistakable", "Sinless,Blameless,Immaculate,Perfect", "Spoiled,Imperfect,Stained,Vicious"], ["Unsuccessful,Void,Ineffectual,Fruitless,Vain", "Disastrous,Failed,", "Successful,Prosperous,Smooth,Lucky,Not unsuccessful"], ["Desperate,Impenetrable,Hopeless,Dead-end", "Doomed,Wretched", "Reliable,Multifaceted,Variable"], ["Kid-glove,Lounger,Ciccy,Grand lady", "Young lady,Crazy aesthet,Gaper,Airhead", "Workafrolic,Peasant,Peasant,Workaholic,Worker"], ["White,Snowy-white,Snowy,Chalky-white,Milky", "Sugary,Gray-haired,Whitish,Pure,Pale", "Black,Dirty,Nightly,Coffee-coloured"], ["Chafe,Excoriate,Affect,Irritate", "Disturb,Annoy,Aggravate", "Soothe,Not to touch,Pacify,Placate,Subdue"], ["Lean,Thrifty,Calculating,Economic,Gentle", "Economical,Caring,Stingy", "Wasteful,Non-thrifty,Uneconomical,Generous"], ["Infinite,Unending,Unlimited,Immense", "Inexhaustible,Perpetual,Drainless", "Final,Limited,Restricted,Mesurable "], ["Unconsciousness,Fainting,Forgetfulness,Swoon", "Blankness,Insensibility,Oblivion", "Clarity,Awareness,Distinctness,Intelligibility,Expressiveness"], ["Free,Gratis,Gratuitous", "Freebee,Pro bono", "Paid,Not free,Payable,Singleboard"], ["Worry,Bother,Trouble,Be anxious,Be nervous", "Get sick,Get anxious,Agitate", "Calm,Calm down,Be quiet,Abate"], ["Useless,Unnecessary,Superfluous,Inutile", "Good-for-nothing,Ineffective,Fruitless", "Useful,Necessary,Effective,Fruitful,Salutary,Beneficial"], ["Confusion,Addlement,Muddle,Mishmash", "Chaos,Bedlam,Mess,Mayhem", "Order,Organization,Regulation,Coordination,Schedule,Distribution"], ["Unparalleled,Unprecedented,Unseen,Unusual", "Unparalleled,Unmatched,Incredible", "Commonplace,Common,Seasoned,Ordinary"], ["Impartial,Objective,Just,Fair ", "Unfavorable,Unbiased", "Partial,Prejudiced,Biased,Unjust"], ["Unconscious,Inconscient,Unaccountable,Subconscious", "Intuitive,Instinctive", "Conscious,Deliberate,Reportable,Intentional,Meaningful"], ["Indisputable,Incontestable,Irrefutable,Authoritative", "Incontestable,Distinct,Unconditional", "Controversial,Disputable,Doubtful,Speculative"], ["Unlimited,Lifetime,Eternal,Infinite", "Permanent,Non-variable", "Speedy,Brief,Short,Short-Running"], ["Tactless,Insensitive,Inappropriate,Indecent", "Indelicate,Lacking upbringing", "Tactful,Amiable,Decent,Delicate"], ["Library,Archives,Atheneum,Small library", "Bibliophile,Library centre", "Shop,Cinema,Observatory"], ["Biography,Autobiography,Biography,Recollections,Memoirs", "Life,Legend,Past", "Today's,Present,Narration"], ["Beat,Beat-up,Knock,Pummel,Thrash", "Hit,Tap,Slap,", "Stroke,Caress,Fondle,Pet,Canoodle,Pamper"], ["Appreciative,Thankful,Obliged", "Grateful,Penitential", "Ungrateful,Unappreciative,Unreliable"], ["Benefactor,Sponsor,Philanthropist,Supporter", "Patron,Encourager,Donator,Well-doer", "Misanthrope,Loner,Hater,Wrongdoer"], ["Gleam,Coruscate,Glitter,Sparkle", "Beam,Star,Shine,Glow", "Fade,Tarnish,Wane,Wither,Darken,Shrivel,Blacken"], ["Brilliant,Shiny,Sleek,Satin", "Glossy,Vivid,Satiny", "Faded,Extinct,Blighted,Fading,Extinguished,Dying,Extinct"], ["Close,Near,By,Beside,Anear", "But-joint,Tight,Tightly,About,Around", "Far away,Far,Afar,Afield,Distant,Remote,Pretty far"], ["God,Lord,Creator,All-Father,the HIghest", "Almighty,Author,Savior", "Mephistopheles,Demon,the Evil One"], ["Wealth,Abundance,Estate,Endowment", "Luxury,Chic,Magnificence,Opulence", "Poverty,Poors,Insecurity,Wretchedness,Beggary,Deficiency"], ["Knight,Strongman,Hercules,Athlete", "Champion", "Scrub,Seekly,Jellyfish,Tadpole,Sissy "], ["God's Mother,Our Lady,Most Holy", "Immaculate,Madonna", "Unholy,Devil"], ["Combat,Military,Martial,Warlike", "Bolder,Combative,Militant", "Civil,Peaceful,Conflict-free,Serene,Tranquil,Peace-loving"], ["Fighter,Soldier,Warrior,War-dog", "Army man,Man-at-arms", "Citizen,Peaceful,Civilian"], ["Action,Fight,Battle,Medley,Dust-up", "Struggle,Coup,Engagement,Case,", "Cease-fight,Peace,Defense,Protection"], ["Disease,Illness,Condition,Sickliness,Ill-being", "Feebleness,Malady,Sickness,Ailment", "Health,Painlessness,Recovery,Improvement,Wellness,Recuperation"], ["Swamp,Marsh,Moor,Marshy-place", "Bog,Morass,Saline,Peat-bog", "Earth,Soil,Ground,Shore"], ["Chatterbox,Gabber,Blabbermouth,", "Gossip,Chatter", "Shut-pan,Taciturn,Not talkative,Drabbie,Hermit"], ["Hospital,Clinic,Infirmary,Lazaret", "Medical unit,Dock,Outpatient,City hospital,Polyclinic", "Hotel,Auberge,Board,Boarding house"], ["Ill,Unhealthy,Sickly,Ailing", "Infirm,Morbid,Patient,Frail", "Healthy,Sound,Hardy,Strong,Resilient,Sober-minded"], ["Big,Large,Significant,Considerable,Extensive,Fair,Huge,Giant", "Imposing,Good,Notable,Massive,Impressive", "Small,Tiny,Short"], ["Fight,Head-to-head,Confrontation", "Wresling", "Peace,Submission,Consent,Alliance"], ["Be afraid,Dread,Quail,Blanch,Be leery of,Boogle", "Fear,Be timid,Chicken out,Get afraid,Shiver", "Dare,Risk,Venture,Courage"], ["Marriage,Matrimony,Settlement,Wifehood", "Match,Wedlock,Wedding", "Divorce,Split-up Separation,Termination "], ["Charge,Oppression,Heft,Load,Burden", "Pressure,Drag,Care,Hardships", "Freedom,Ease,Indifference"], ["Wander,Rove,Loiter,Knock about", "Hang out,Roam,Snail,Hang about,Tramp", "Stand,Freeze"], ["Rogue,Wanderer,Tramp,Strider", "Bum,Punk", "Home,Family,Brownie,Family member,Stay-at-home,Domesticated,Family"], ["Throw,Cast,Chunk,Fling", "Bombard,Launch,Drop", "Catch,Accept,Receive,Seize,Grasp"], ["Rush,Fling,Head for,Plunge,Sprint", "Dart,Startle,Start", "Recoil,Bounce back,Move away,Shrink back,Jump back"], ["Bumpy,Lumpy,Scrofulous,Clumpy,Uneven", "Hill-shaped,Hilly,Tuberous", "Smooth,Even,Polished,Sleek,Flat"], ["Future,Futurity,Hereafter,Prospect", "Fate,Tomorrow,Forthcoming", "Past,History,Yore,Yesterday,Bygone"], ["Letter,Character,Writing", "Cuneiform,Runes,Sign", "Sound,Buzz,Clang"], ["Verbal,Word-for-word,Textual,literal", "Subscript,Accurate", "Inaccurate,Erroneous,Approximate,Invalid,False"], ["Gale,Hurricane,Storm,Windflaw", "Cyclone,Dusting,Blizzard,Snowstorm,Typhoon", "Peace,Calm,Silence,Still air"], ["Fast,Soon,Swift,Instant,Instantly", "Flash-like,Headfirst,Headlong,In no time,At once", "Slowly,Sluggish,Careless,Drawlingly,Slow,Unhurried"], ["Protect,Keep safe,Guard,Defend,Save", "Keep,Preserve,Free", "Destroy,Remove,Not to protect"], ["Promise,Oath,Vow,Wannabe,Forswear", "Pledge,Swear,Bribe", "Failure,Picket fence,Boycott"], ["Icy,Frozen,Ice-covered,Ice-cold", "Ice-bearing,Numb", "Unfrozen,Thawed,Warm,Defrosted,Burnt,Heated "], ["Visage,Face,Face image,Phiz", "Disguise,Appearance,Mask", "Inside,Essence,Womb"], ["Chunk,Shard", "Fragment,Part", "Whole,System"], ["Deceive,Screw,Trick,Bamboozle,Rouge", "Decieve,Cheat,Hoodwink,Lie", "Solve,Justify"], ["Hug,Put arms around,Press,Embrace", "Hug,Cover", "Distract,Release,Push away"], ["Examine,Explore,Inspect,Witness", "View,Check,Scan", "Not to look,Not to explore"], ["Communicate,Associate with,Mix with,Rub elbows with", "Talk,Entice,Chat,Speak ", "Keep silent,Not to talk,Feud"], ["General,Overall,Wholesale,Universal", "Global,Total,Joint", "Private,Detailed,Accurate,Comprehensive,Special"], ["Ordinary,Usual,Trivial,Routine", "Day-to-day,Everyday,Mediocre,Common", "Unusual,Unique,Awesome,Uncommon"], ["Custom,Habit,Tradition,Rite,Way", "Practice,Manner,Grandeur,Ambition,", "Loss of habit,Withdrawal,Spontaneity"], ["Normal,Ordinary,Constant", "Simple,Regular,Mediocre", "Difficult,Unusual,Uncommon,Unique"], ["Mandatory,Certain,Meticulous,Unavoidable", "By all means,Unacceptable", "Optional,Free,Free-will,Non-binding"], ["Fire,Flare,Blaze", "Flame", "Water,Ice"], ["Clothing,Dress,Clothes,Robe", "Vestments,Attire,Costume", "Nudity,Nakedness,Have-not,Bareness "], ["Disgrace,Defame,Libel,Discredit", "Besmear,Besmirch", "Restore,Renovate"], ["Experienced,Sophisticated,Seasoned,Practiced", "Hardcore,Quick,Out-and-out,Shrewd", "Inexperienced,Immature,Wet-nose,Beginner,Unsophisticated"], ["Peculiar,Special,Extraordinary,Outlandish", "Unusual,Outstanding,Uncommon,Original", "Simple,Normal,Non-exclusive,Nonspecific"], ["Discard,Renounce,Disown,Decline,Refuse", "Abdicate,Deny", "Consent,Agree,Arrange,Settle"], ["Frankly,Purely,Openly,Straight", "Straightforward,Point-blank", "Shut,False,Insincere,Deceptive"], ["Excellent,Great,Admirable,Gorgeous", "Wonderful,First-class,Perfect", "Bad,Small-time,Cheesy,Nasty"], ["Character,Temper,Sort,Nature,Temperament", "Style,Type", "Spinelessness,Fickle,Impersonal,Weak,Unrepresentative"], ["Boast,Brag,Buck,Crow", "Bragging,Showboat,Self-Praise,Strut", "Be modest,Play nice,Skulk "], ["Compliment,Laud,Praise,Extol,Worship", "Boast,Glorify,Talk up", "Scold,Censure,Curse,Rebuke,Reprove,Scourge,Punish"], ["Dodge,Dissemble,Fox,Tack,Weasel", "Obscure,Cheat,Tamper", "Trust,Rely,Whiten"], ["Tricky,Crafty,Rougish,Dodgy,Scampish", "Screwd,Cunning,Sly", "Honest,Simple-minded,Credulous,Plain,Truthful,Immaculate"], ["Master,Owner,Holder,Proprietor", "Possessor,Householder", "Guest,Leaser,Tenant,Lodger,Resident,Indigent "], ["Want,Wish,Crave,Strive", "Desire,Deign,Covet", "Weakness,Abulia,Spinelessness"], ["Sustainable,Permanent,Eternal,Stable", "Steady-state,Static,Constant", "Unstable,Unsteady,Labile,Volatile"], ["Work,Labor,Invest,Toil", "Slave,Plod", "Idle,Laze,Relax,Goof,Loaf,Mike"], ["Entertainment,Amusement,Idea,Fun", "Joy,Lark", "Despondency,Sadness,Boredom,Joylessness,Sorrow"], ["Together,Joint,Mutual,United,Coupled", "Crowd,Conjointly,In suit with", "Apart,Separately,Individually,Asunder,Uncoordinately"], ["Flare,Burst,Explode,Arise,Spike", "Burn,Boil", "Extinguish,Gutter,Fade,Die,Still"], ["Meet,Meeting,Encounter,Hang out,Stumble,Bump", "Tumble,Run across", "See off,Seeing off,See to,Say goodbye,Send"], ["Pride,Ambition,Arrogance,Haughtiness", "Superbity,Conceit", "Humility,Taming,Restraint,Meekness,Placability"], ["Idealist,Romantic,Dreamer", "Theorist", "Materialist,Realist,Pragmatist"], ["Mobilization,Calling,Recruitment", "Call", "Demobilization,Dismissal"], ["Accuse,Blame,Charge,Reproach", "Condemn", "Justify,Clear,Excuse,Forgive"], ["Ancestor,Forefather,Progenitor,Great-grandfather", "Forebear,Totem", "Descendant,Breed,Offspring"], ["Tide,Inflow", "Wave", "Low-tide,Leakage,Drain"], ["Hunger,Shortage,Starvation,Deficiency,Starving time", "Bread-scarcity,Hunger-strike,Malnutrition", "Fullness,Satietion,Guttony"], ["Mind,Reason,Think,Quick-wittedness", "Genius,Reason,Discretion,Intelligence", "Heart,Feeling,Soul,Emotion"]];
})(WordsEn || (WordsEn = {}));


/***/ }),

/***/ 294:
/*!************************************************!*\
  !*** ./src/games/polyglot/journalist/words.ts ***!
  \************************************************/
/*! exports provided: WordLength, SynonymsWords */
/*! exports used: SynonymsWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WordLength */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SynonymsWords; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_games_polyglot_journalist_wordsRu__ = __webpack_require__(/*! games/polyglot/journalist/wordsRu */ 295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_utils_localeUtl__ = __webpack_require__(/*! games/utils/localeUtl */ 174);


var WordLength;
(function (WordLength) {
    WordLength[WordLength["Small"] = 0] = "Small";
    WordLength[WordLength["Middle"] = 1] = "Middle";
    WordLength[WordLength["Big"] = 2] = "Big";
})(WordLength || (WordLength = {}));
var SynonymsWords;
(function (SynonymsWords) {
    var localeData = {
        ru: __WEBPACK_IMPORTED_MODULE_0_games_polyglot_journalist_wordsRu__["a" /* WordsRu */].data,
    };
    // function fix(data: typeof WordsRu.data) {
    //   return data.map(x => x.map(y => _.uniq(Strings.splitTrim(y).filter(x => x != "")).map(x => _.capitalize(x))))
    //     .filter(x => x.length == 3)
    // }
    SynonymsWords.items = function (locale) { return __WEBPACK_IMPORTED_MODULE_1_games_utils_localeUtl__["a" /* LocaleUtl */].getData(localeData, locale); };
    // console.log(items.map(x => _(x).flatten().groupBy(x => x).value()))
})(SynonymsWords || (SynonymsWords = {}));


/***/ }),

/***/ 295:
/*!**************************************************!*\
  !*** ./src/games/polyglot/journalist/wordsRu.ts ***!
  \**************************************************/
/*! exports provided: WordsRu */
/*! exports used: WordsRu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsRu; });
var WordsRu;
(function (WordsRu) {
    WordsRu.data = [[
            [["разбор", "анализ"], ["синтез", "соединение", "объединение"]],
            [["серафим", "херувим", "ангел"], ["черт", "бес", "демон"]],
            [["благовоние", "благоухание", "аромат"], ["зловоние", "смрад"]],
            [["наступление", "штурм", "нападение", "атака"], ["контратака", "защита", "контрудар", "контрнаступление"]],
            [["необеспеченность", "безденежье", "беднота", "нищета", "бедность"], ["богатство", "роскошь", "шик", "изобилие", "благосостояние", "довольство", "достаток"]],
            [["веселье", "счастье", "радость", "наслаждение", "блаженство"], ["страдание", "горесть", "горе", "печаль", "скорбь", "несчастье", "мука"]],
            [["олигарх", "миллионер", "магнат", "богач"], ["бедняк", "босяк"]],
            [["майоритет", "множество", "большинство"], ["меньшинство", "миноритет"]],
            [["факт", "быль"], ["небылица", "легенда", "домысел", "выдумка", "вымысел"]],
            [["гигант", "богатырь", "великан"], ["карлик", "лилипут", "пигмей"]],
            [["царственность", "величие"], ["ничтожество", "незначительность", "ничтожность"]],
            [["уверенность", "убеждение", "вера"], ["неверие", "недоверие", "скепсис"]],
            [["вневременность", "бессрочность", "бесконечность", "вечность"], ["мгновение", "миг", "момент"]],
            [["развитие", "рост", "восхождение", "прогресс", "вдохновение", "подъем", "взлет"], ["падение", "упадок", "спад", "поражение", "регресс", "деградация"]],
            [["ущерб", "урон", "вред"], ["польза", "выгода", "прибыль"]],
            [["успех", "удача", "фортуна", "джекпот", "приз", "выигрыш"], ["проигрыш", "провал", "неуспех", "неудача"]],
            [["баланс", "строй", "система", "порядок", "гармония"], ["дисгармония", "беспорядок", "хаос", "дисбаланс"]],
            [["смельчак", "храбрец", "герой"], ["трус", "паникёр"]],
            [["невыносимость", "нетерпимость", "неприязнь", "антипатия"], ["милость", "благосклонность", "расположение", "симпатия", "вовлеченность", "интерес", "увлечение", "пристрастие"]],
            [["самоуважение", "самолюбие", "достоинство", "гордость"], ["скромность", "аскетичность", "непритязательность", "неприхотливость"]],
            [["царь", "властитель", "повелитель", "владыка", "господин"], ["раб", "невольник", "пленник"]],
            [["рост", "динамика", "движение"], ["застой", "неподвижность", "статика"]],
            [["инициатива", "деятельность", "активность", "действие"], ["бездействие", "пассивность", "праздность", "инертность"]],
            [["выгода", "выручка", "прибыль", "доход"], ["затрата", "убыток", "расход", "издержка"]],
            [["товарищ", "приятель", "друг"], ["враг", "зложелатель", "ненавистник", "недоброжелатель"]],
            [["братство", "совет", "приятельство", "товарищество", "дружба"], ["вражда", "рознь", "разлад", "противостояние"]],
            [["солидарность", "целостность", "близость", "соглашение", "единение"], ["разобщенность", "раздробленность", "разрозненность", "автономия", "раздор", "ссора"]],
            [["пекло", "зной", "жара"], ["холод", "мороз", "стужа"]],
            [["головоломка", "тайна", "ребус", "шарада", "загадка"], ["отгадка", "ответ", "решение", "разгадка"]],
            [["вечер", "заход", "закат"], ["рассвет", "заря", "утро"]],
            [["фантазёр", "романтик", "мечтатель", "идеалист"], ["материалист", "реалист", "прагматик"]],
            [["профицит", "избыток", "изобилие", "излишек"], ["недостача", "дефицит", "нехватка"]],
            [["открытость", "неподдельность", "правдивость", "честность", "искренность"], ["фальшь", "коварство", "вероломство"]],
            [["факт", "аксиома", "достоверность", "правда", "истина"], ["ложь", "неправда", "обман", "заблуждение"]],
            [["изысканность", "выразительность", "живописность", "красота"], ["безобразие", "невзрачность", "неказистость", "уродливость", "невзрачность", "непривлекательность"]],
            [["вершина", "пик", "верх", "крыша", "крышка"], ["дно", "низ", "подвал"]],
            [["ум", "проницательность", "мудрость"], ["глупость", "бестолковость", "неразумность"]],
            [["храбрость", "смелость", "стоицизм", "непреклонность", "непоколебимость", "стойкость", "мужество"], ["трусость", "робость", "нерешительность", "боязливость", "страх"]],
            [["удовольствие", "блаженство", "наслаждение"], ["страдание", "мучение", "терзание"]],
            [["открытие", "обретение", "находка"], ["потеря", "утрата"]],
            [["пролог", "старт", "завязка", "основа", "начало"], ["конец", "эпилог", "развязка", "финиш", "точка"]],
            [["самобытность", "новшество", "необычность", "оригинальность", "новизна"], ["старина", "античность", "древность", "архаика"]],
            [["жизнерадостность", "бодрость", "жизнелюбие", "оптимизм"], ["пессимизм", "апатия", "равнодушие"]],
            [["прототип", "подлинник", "первоисточник", "оригинал"], ["копия", "подделка", "имитация", "фальсификация", "подлог"]],
            [["преодоление", "покорение", "триумф", "победа"], ["поражение", "разгром"]],
            [["презрение", "позор"], ["честь", "почёт", "слава"]],
            [["превознесение", "восхваление", "одобрение", "похвала"], ["порицание", "укор", "упрёк", "осуждение", "неодобрение"]],
            [["родоначальник", "прародитель", "прадед", "дед", "предок"], ["потомок", "сын", "внук", "правнук"]],
            [["разделение", "разграничение", "дифференциация", "различие"], ["сходство", "классификация", "группировка", "систематизация"]],
            [["мерцание", "вспышка", "проблеск", "луч", "свет"], ["мрак", "тьма", "мгла", "темнота", "потёмки"]],
            [["независимость", "амнистия", "воля", "свобода"], ["неволя", "угнетение", "плен", "рабство", "зависимость"]],
            [["превосходство", "величие", "могущество", "власть", "мощь", "сила"], ["бессилие", "слабость", "безволие", "беспомощность"]],
            [["вовлеченность", "интерес", "увлечение", "пристрастие", "симпатия"], ["антипатия", "неприязнь", "нетерпимость"]],
            [["сущность", "содержание", "значение", "суть", "смысл"], ["бессмыслица", "нелепость", "вздор", "абсурд"]],
            [["изготовление", "становление", "образование", "формирование", "творчество", "строительство", "созидание"], ["разрушение", "уничтожение", "снос", "деструкция"]],
            [["способность", "гений", "дар", "талант"], ["бездарность", "посредственность"]],
            [["деятельность", "дело", "работа", "трудолюбие", "труд"], ["лень", "праздность", "отдых"]],
            [["культура", "цивилизация"], ["варварство", "вандализм", "дикость"]],
            [["безукоризненность", "кристальность", "безупречность", "незапятнанность", "чистота"], ["грязь", "порок"]],
            [["тишина", "тишь", "затишье", "штиль"], ["шторм", "буря", "ураган", "циклон", "стихия"]],
            [["бережливость", "расчетливость", "экономия"], ["расточительность", "щедрость"]],
            [["сбыт", "вывоз", "экспорт"], ["импорт", "ввоз", "закупка"]],
            [["отрава", "яд"], ["противоядие", "антидот", "лекарство"]],
            [["благотворитель", "филантроп", "гуманист"], ["мизантроп", "человеконенавистник"]],
            [["пыл", "азарт", "раж", "задор"], ["уныние", "скука", "тоска", "меланхолия", "сплин"]],
        ],
        [
            [["отвлеченно", "размыто", "философски", "теоретически", "абстрактно"], ["конкретно", "четко", "конструктивно", "точно", "существенно", "категорически", "предметно"]],
            [["вблизи", "возле", "около", "рядом", "близко"], ["далеко", "вдали", "вдалеке", "отдаленно"]],
            [["богато", "шикарно", "пышно", "обильно", "торжественно", "роскошно", "богато"], ["бедно", "скупо", "скудно", "убого", "дешево"]],
            [["резко", "резво", "шустро", "быстро"], ["медленно", "плавно", "неспешно"]],
            [["возле", "около", "рядом", "недалеко", "близко", "вблизи"], ["вдалеке", "далеко", "вдали", "отдаленно"]],
            [["задорно", "озорно", "счастливо", "радостно", "весело"], ["грустно", "угрюмо", "печально", "скучно"]],
            [["сообща", "коллективно", "заодно", "вкупе", "вместе"], ["раздельно", "врозь", "особняком", "порознь"]],
            [["тепло", "жарко", "горячо"], ["холодно", "промозгло", "свежо", "морозно"]],
            [["оглушающе", "звонко", "громко"], ["тихо", "глухо"]],
            [["искренне", "натурально", "естественно"], ["искусственно", "наигранно", "фальшиво"]],
            [["односложно", "сжато", "немногословно", "лаконично", "кратко"], ["длинно", "многословно", "пространно", "растянуто", "многоречиво", "словоохотливо"]],
            [["мягко", "нежно", "ласково"], ["грубо", "сурово", "жестко"]],
            [["просто", "легко"], ["трудно", "тяжело", "обременительно", "тягостно"]],
            [["умышленно", "преднамеренно", "нарочно"], ["случайно", "необдуманно", "безрассудно", "опрометчиво"]],
            [["свободно", "широко", "просторно"], ["тесно", "узко"]],
            [["ярко", "светло"], ["темно", "тускло"]],
            [["дерзко", "мужественно", "отважно", "бесстрашно", "храбро"], ["робко", "несмело", "боязливо"]],
            [["открыто", "явно"], ["загадочно", "секретно", "скрытно", "тайно"]],
            [["положительно", "недурно", "хорошо"], ["плохо", "дурно", "скверно", "отрицательно"]],
        ]
    ];
})(WordsRu || (WordsRu = {}));


/***/ })

});
//# sourceMappingURL=0.bundle.js.map