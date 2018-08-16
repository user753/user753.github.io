webpackJsonpNewGames([1],{

/***/ 147:
/*!*******************************************!*\
  !*** ./src/games/polyglot/writer/meta.ts ***!
  \*******************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_polyglot_common_commonMeta__ = __webpack_require__(/*! games/polyglot/common/commonMeta */ 176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_polyglot_writer_images__ = __webpack_require__(/*! games/polyglot/writer/images */ 218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_polyglot_writer_sounds__ = __webpack_require__(/*! games/polyglot/writer/sounds */ 219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__levels__ = __webpack_require__(/*! ./levels */ 322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logic__ = __webpack_require__(/*! ./logic */ 326);







var gameId = "writer";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5,
    onlyFullAnswer: true
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_5__levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 3, maxLevel: 10 }]
};
var metaData = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_common_commonMeta__["a" /* metaData */], { gameId: gameId, title: "Writer", images: __WEBPACK_IMPORTED_MODULE_2_games_polyglot_writer_images__["a" /* Images */].data, logic: __WEBPACK_IMPORTED_MODULE_6__logic__["a" /* Logic */], component: __WEBPACK_IMPORTED_MODULE_4__components_mainComponent__["a" /* MainComponent */], atlasCount: 4, 
    // selectLocale: true,
    tutorialTaskCount: "manual", sounds: __WEBPACK_IMPORTED_MODULE_3_games_polyglot_writer_sounds__["a" /* Sounds */].keys, scoreOptions: scoreOptions,
    levelOptions: levelOptions });


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

/***/ 161:
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

/***/ 164:
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

/***/ 167:
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

/***/ 174:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordImages__ = __webpack_require__(/*! ../wordImages */ 161);




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

/***/ 175:
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

/***/ 176:
/*!*************************************************!*\
  !*** ./src/games/polyglot/common/commonMeta.ts ***!
  \*************************************************/
/*! exports provided: metaData */
/*! exports used: metaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_logic_taskCount__ = __webpack_require__(/*! core/logic/taskCount */ 177);

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

/***/ 177:
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

/***/ 178:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameUI_hintComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/hintComponent */ 179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_behaviors_introComplexAnimationBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/introComplexAnimationBehavior */ 165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_games_polyglot_common_components_wordListComponent__ = __webpack_require__(/*! games/polyglot/common/components/wordListComponent */ 180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_games_polyglot_common_wordsSounds__ = __webpack_require__(/*! games/polyglot/common/wordsSounds */ 164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wordImages__ = __webpack_require__(/*! ../wordImages */ 161);















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

/***/ 179:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameUI_textPanelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/textPanelComponent */ 162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_img__ = __webpack_require__(/*! core/ui/controls/img */ 16);
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

/***/ 180:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_behaviors_focusBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/focusBehavior */ 181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_polyglot_common_components_anagrammaComponent__ = __webpack_require__(/*! games/polyglot/common/components/anagrammaComponent */ 182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_polyglot_common_components_PaperComponent__ = __webpack_require__(/*! games/polyglot/common/components/PaperComponent */ 174);








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

/***/ 181:
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

/***/ 182:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_behaviors_btnAlphaHoverBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/btnAlphaHoverBehavior */ 170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_utils_arrays__ = __webpack_require__(/*! core/utils/arrays */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_polyglot_common_fonts__ = __webpack_require__(/*! games/polyglot/common/fonts */ 167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_polyglot_common_wordImages__ = __webpack_require__(/*! games/polyglot/common/wordImages */ 161);












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

/***/ 183:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_polyglot_common_fonts__ = __webpack_require__(/*! games/polyglot/common/fonts */ 167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_polyglot_common_wordsSounds__ = __webpack_require__(/*! games/polyglot/common/wordsSounds */ 164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wordImages__ = __webpack_require__(/*! ../wordImages */ 161);













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

/***/ 218:
/*!*********************************************!*\
  !*** ./src/games/polyglot/writer/images.ts ***!
  \*********************************************/
/*! exports provided: Images */
/*! exports used: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_games_polyglot_common_wordImages__ = __webpack_require__(/*! games/polyglot/common/wordImages */ 161);

var Images;
(function (Images) {
    Images.type_part_0 = "type_part_0";
    Images.type_part_1 = "type_part_1";
    Images.type_paper = "type_paper";
    Images.sprites = __WEBPACK_IMPORTED_MODULE_0_games_polyglot_common_wordImages__["a" /* WordImages */].sprites.concat([
        Images.type_part_0,
        Images.type_part_1,
        Images.type_paper
    ]);
    Images.data = { sprites: Images.sprites };
})(Images || (Images = {}));


/***/ }),

/***/ 219:
/*!*********************************************!*\
  !*** ./src/games/polyglot/writer/sounds.ts ***!
  \*********************************************/
/*! exports provided: Sounds */
/*! exports used: Sounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sounds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_games_polyglot_common_wordsSounds__ = __webpack_require__(/*! games/polyglot/common/wordsSounds */ 164);

var Sounds;
(function (Sounds) {
    Sounds.backspace = "backspace";
    Sounds.keys = [Sounds.backspace].concat(__WEBPACK_IMPORTED_MODULE_0_games_polyglot_common_wordsSounds__["a" /* WordsSounds */].keys);
})(Sounds || (Sounds = {}));


/***/ }),

/***/ 220:
/*!********************************************!*\
  !*** ./src/games/polyglot/writer/words.ts ***!
  \********************************************/
/*! exports provided: WordLength, WordMasterWords */
/*! exports used: WordLength, WordMasterWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WordMasterWords; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_utils_strings__ = __webpack_require__(/*! core/utils/strings */ 67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_polyglot_common_commonWords__ = __webpack_require__(/*! games/polyglot/common/commonWords */ 323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_polyglot_writer_wordsEn__ = __webpack_require__(/*! games/polyglot/writer/wordsEn */ 324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_polyglot_writer_wordsRu__ = __webpack_require__(/*! games/polyglot/writer/wordsRu */ 325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_utils_localeUtl__ = __webpack_require__(/*! games/utils/localeUtl */ 175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);






var WordLength;
(function (WordLength) {
    WordLength[WordLength["Short"] = 0] = "Short";
    WordLength[WordLength["Medium"] = 1] = "Medium";
    WordLength[WordLength["Long"] = 2] = "Long";
    WordLength[WordLength["Longest"] = 3] = "Longest";
    WordLength[WordLength["Phrase"] = 4] = "Phrase";
})(WordLength || (WordLength = {}));
function getWordLength(word) {
    var l = word.length;
    if (l <= 4)
        return WordLength.Short;
    if (l <= 6)
        return WordLength.Medium;
    if (l <= 8)
        return WordLength.Long;
    return WordLength.Longest;
}
var WordMasterWords;
(function (WordMasterWords) {
    var localeData = {
        ru: __WEBPACK_IMPORTED_MODULE_3_games_polyglot_writer_wordsRu__["a" /* WordsRu */].data,
        en: __WEBPACK_IMPORTED_MODULE_2_games_polyglot_writer_wordsEn__["a" /* WordsEn */].data
    };
    WordMasterWords.minSubcategoryCount = 2;
    WordMasterWords.minWordCount = 3;
    WordMasterWords.minWordLength = 3;
    function wordLengthAndAnagrammasFilter(locale, wl) {
        var isPhrase = wl == WordLength.Phrase;
        var data = __WEBPACK_IMPORTED_MODULE_4_games_utils_localeUtl__["a" /* LocaleUtl */].getData(localeData, locale).words;
        var x = __WEBPACK_IMPORTED_MODULE_5_lodash__(data).toPairs().map(function (_a) {
            var k = _a[0], v = _a[1];
            return __WEBPACK_IMPORTED_MODULE_5_lodash__(v).toPairs()
                .filter(function (_a) {
                var k = _a[0], v = _a[1];
                return isPhrase ? k == "phrases" : k != "phrases";
            })
                .map(function (_a) {
                var k = _a[0], v = _a[1];
                return __WEBPACK_IMPORTED_MODULE_5_lodash__["uniq"](__WEBPACK_IMPORTED_MODULE_0_core_utils_strings__["a" /* Strings */].splitTrim(v).map(function (x) { return x.toLowerCase(); }))
                    .filter(function (x) {
                    return (isPhrase || getWordLength(x) == wl) && !__WEBPACK_IMPORTED_MODULE_1_games_polyglot_common_commonWords__["a" /* CommonWords */].anagramms.has(x)
                        && (isPhrase || x.indexOf(" ") < 0) && x.length >= WordMasterWords.minWordLength;
                });
            }).filter(function (v) { return v.length >= WordMasterWords.minWordCount; })
                .filter(function (v) { return v.length >= WordMasterWords.minSubcategoryCount; }).value();
        }).filter(function (v) { return !__WEBPACK_IMPORTED_MODULE_5_lodash__["isEmpty"](v); }).value();
        return x;
    }
    function groupByWordLength(words) {
        return __WEBPACK_IMPORTED_MODULE_5_lodash__["groupBy"](words, 'length');
    }
    WordMasterWords.wordLengthList = [
        WordLength.Short, WordLength.Medium,
        WordLength.Long, WordLength.Longest,
        WordLength.Phrase
    ];
    WordMasterWords.categoriesByLength = function (locale) {
        return __WEBPACK_IMPORTED_MODULE_5_lodash__["fromPairs"](WordMasterWords.wordLengthList.map(function (x) { return [x, wordLengthAndAnagrammasFilter(locale, x)]; }));
    };
    WordMasterWords.tutorial = function (locale) { return __WEBPACK_IMPORTED_MODULE_4_games_utils_localeUtl__["a" /* LocaleUtl */].getData(localeData, locale).tutorial; };
})(WordMasterWords || (WordMasterWords = {}));


/***/ }),

/***/ 319:
/*!***************************************************************!*\
  !*** ./src/games/polyglot/writer/components/mainComponent.ts ***!
  \***************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services__ = __webpack_require__(/*! core/services */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_polyglot_common_components_baseWordMainComponent__ = __webpack_require__(/*! games/polyglot/common/components/baseWordMainComponent */ 178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_polyglot_writer_components_typeWriterComponent__ = __webpack_require__(/*! games/polyglot/writer/components/typeWriterComponent */ 320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_games_polyglot_writer_translations__ = __webpack_require__(/*! games/polyglot/writer/translations */ 321);










var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions2 = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            tutorialMinHeight: 290,
        });
        _this.positionsPortrait2 = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].update(_this.positions2, {
            tutorialMinHeight: 450,
        });
        _this.getPositions2 = function () { return __WEBPACK_IMPORTED_MODULE_5_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? _this.positionsPortrait2 : _this.positions2; };
        return _this;
    }
    MainComponent.prototype.updateTutorialState = function (step) {
        var _this = this;
        var states = [
            function () {
                _this.tutorial.setProps("");
            },
            function () {
                _this.updateTutorial();
            },
            function () {
                _this.tutorial.setProps(_this.tutorialText2());
            },
            function () {
                _this.tutorial.setProps(__WEBPACK_IMPORTED_MODULE_1_core_services__["h" /* translationService */].getTranslation(__WEBPACK_IMPORTED_MODULE_9_games_polyglot_writer_translations__["a" /* Translations */].title3));
            },
        ];
        __WEBPACK_IMPORTED_MODULE_6_core_utils_undef__["a" /* Undef */].map(states[step], function (fn) { return fn(); });
    };
    MainComponent.prototype.onInit = function () {
        var _this = this;
        this.useTutorial = true;
        this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].update(this.positions, {
            mainGroup: { y: 130 },
            wordlistOffset: { x: -10, y: (this.isTutorial && __WEBPACK_IMPORTED_MODULE_5_core_ui_services_instances__["e" /* screenSizeService */].isPortrait) ? -80 : 0 }
        });
        this.positionsPortrait = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].update(this.positionsPortrait, {
            mainGroup: { y: 280 },
        });
        this.typewriter = this.mainGroup.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_8_games_polyglot_writer_components_typeWriterComponent__["a" /* TypeWriterComponent */]))
            .setPos(this.getPositions().typewriter);
        this.hintComponent.enableLetterHint = true;
        this.hintComponent.tooltip = __WEBPACK_IMPORTED_MODULE_1_core_services__["h" /* translationService */].getTranslation(__WEBPACK_IMPORTED_MODULE_9_games_polyglot_writer_translations__["a" /* Translations */].hint);
        _super.prototype.onInit.call(this);
        if (this.isTutorial) {
            this.onChangeFor(function () { return _this.tutorialStore.state; }, function (state) { return _this.updateTutorialState(state.step); });
        }
    };
    MainComponent.prototype.createTutorial = function () {
        return this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */])).make({
            minHeight: this.getPositions2().tutorialMinHeight,
            stepCount: 3,
            textAlign: "center"
        });
    };
    MainComponent.prototype.updateTutorial = function () {
        if (this.tutorial) {
            if (this.wordList) {
                this.wordList.setAnswerHightlightDisabled(true);
            }
            this.bringToTop(this.tutorial);
            var anagrammaText = this.getCurrentTask().anagrammas.map(function (x) { return x.anagramma + " ➜ " + x.word; }).join("\n");
            var lines = [__WEBPACK_IMPORTED_MODULE_1_core_services__["h" /* translationService */].getTranslation(__WEBPACK_IMPORTED_MODULE_9_games_polyglot_writer_translations__["a" /* Translations */].title1), anagrammaText];
            this.tutorial.setProps(lines.join("\n"));
        }
    };
    MainComponent.prototype.tutorialText2 = function () {
        return __WEBPACK_IMPORTED_MODULE_1_core_services__["h" /* translationService */].getTranslation(__WEBPACK_IMPORTED_MODULE_9_games_polyglot_writer_translations__["a" /* Translations */].title2) + ": "
            + this.getCurrentTask().answerAnagramma.word;
    };
    MainComponent.prototype.onNewTask = function (task) {
        var _this = this;
        this.renderTask([task.answerAnagramma.word], task.anagrammas);
        var signal = this.isFirstTask
            ? this.context.uiService.mainComponent.onIntroComplete
            : __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_signals__["a" /* Signals */].memorize();
        signal.addOnce(function () {
            _this.tutorialStore.initTutorial();
        });
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_7_games_polyglot_common_components_baseWordMainComponent__["a" /* BaseWordMainComponent */]));



/***/ }),

/***/ 320:
/*!*********************************************************************!*\
  !*** ./src/games/polyglot/writer/components/typeWriterComponent.ts ***!
  \*********************************************************************/
/*! exports provided: TypeWriterComponent */
/*! exports used: TypeWriterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeWriterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_polyglot_common_components_baseTypewriterComponent__ = __webpack_require__(/*! games/polyglot/common/components/baseTypewriterComponent */ 183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_polyglot_writer_images__ = __webpack_require__(/*! games/polyglot/writer/images */ 218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_polyglot_writer_sounds__ = __webpack_require__(/*! games/polyglot/writer/sounds */ 219);








var durations = {
    typePart: 100
};
var TypeWriterComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TypeWriterComponent, _super);
    function TypeWriterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions2 = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
            partAnimation: -100
        });
        return _this;
    }
    TypeWriterComponent.prototype.onInit = function () {
        this.positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].update(this.positions, {
            maxWordWidth: 420,
            text: Object(__WEBPACK_IMPORTED_MODULE_4_core_utils_tuples__["a" /* tuple */])(376, 145)
        });
        this.typePart1 = this.addImage([__WEBPACK_IMPORTED_MODULE_6_games_polyglot_writer_images__["a" /* Images */].type_part_1, [0, 0]]);
        this.addImage([__WEBPACK_IMPORTED_MODULE_6_games_polyglot_writer_images__["a" /* Images */].type_paper, [0, 0]]);
        this.addImage([__WEBPACK_IMPORTED_MODULE_6_games_polyglot_writer_images__["a" /* Images */].type_part_0, [0, 0]]);
        _super.prototype.onInit.call(this);
        this.addHands();
    };
    TypeWriterComponent.prototype.onAnswer = function (answer) {
        var task = answer.levelTask.task;
        if (answer.status == __WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].Correct && task.seqPart) {
            this.typeWord(task.answerAnagramma.word);
        }
        else {
            _super.prototype.onAnswer.call(this, answer);
        }
    };
    TypeWriterComponent.prototype.animationClean = function () {
        this.playSound(__WEBPACK_IMPORTED_MODULE_7_games_polyglot_writer_sounds__["a" /* Sounds */].backspace);
        __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.typePart1,
            to: { x: this.positions2.partAnimation },
            duration: durations.typePart,
            simpleYoyo: true
        });
    };
    return TypeWriterComponent;
}(__WEBPACK_IMPORTED_MODULE_5_games_polyglot_common_components_baseTypewriterComponent__["a" /* BaseTypeWriterComponent */]));



/***/ }),

/***/ 321:
/*!***************************************************!*\
  !*** ./src/games/polyglot/writer/translations.ts ***!
  \***************************************************/
/*! exports provided: Translations */
/*! exports used: Translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Translations; });
var Translations;
(function (Translations) {
    Translations.title1 = "title1";
    Translations.title2 = "title2";
    Translations.title3 = "title3";
    Translations.hint = "hint";
})(Translations || (Translations = {}));


/***/ }),

/***/ 322:
/*!*********************************************!*\
  !*** ./src/games/polyglot/writer/levels.ts ***!
  \*********************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__words__ = __webpack_require__(/*! ./words */ 220);



var wordLengthList = __WEBPACK_IMPORTED_MODULE_2__words__["b" /* WordMasterWords */].wordLengthList;
function level(wordLength, subcategory) {
    if (wordLength == __WEBPACK_IMPORTED_MODULE_2__words__["a" /* WordLength */].Phrase && subcategory)
        return undefined;
    return { wordLength: wordLength, subcategory: subcategory };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])(__WEBPACK_IMPORTED_MODULE_1_lodash__["compact"](__WEBPACK_IMPORTED_MODULE_1_lodash__["flatMap"](wordLengthList, function (l) { return [false, true].map(function (s) { return level(l, s); }); })));


/***/ }),

/***/ 323:
/*!**************************************************!*\
  !*** ./src/games/polyglot/common/commonWords.ts ***!
  \**************************************************/
/*! exports provided: CommonWords */
/*! exports used: CommonWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonWords; });
var CommonWords;
(function (CommonWords) {
    // const x = _.flatMap(Arrays.groupSublings(words).filter(([x,y]) => y.length > 1), x => x[1])
    var anagrammaWords = [
        "канонада",
        "анаконда",
        "казачка",
        "закачка",
        "чебурашка",
        "рубашечка",
        "баржа",
        "жабра",
        "банка",
        "кабан",
        "акробат",
        "работка",
        "барак",
        "барка",
        "карбас",
        "баркас",
        "араб",
        "раба",
        "арба",
        "глава",
        "влага",
        "развилка",
        "разливка",
        "травинка",
        "антиквар",
        "равнина",
        "нирвана",
        "рванина",
        "лавка",
        "валка",
        "отправка",
        "автопарк",
        "лавра",
        "аврал",
        "хвала",
        "халва",
        "навар",
        "варна",
        "варан",
        "аванс",
        "саван",
        "трава",
        "врата",
        "галка",
        "кагал",
        "каторга",
        "рогатка",
        "карга",
        "крага",
        "гамма",
        "магма",
        "ангар",
        "нагар",
        "гарант",
        "гранат",
        "петарда",
        "адаптер",
        "жандарм",
        "мандраж",
        "триада",
        "тирада",
        "ладошка",
        "лошадка",
        "парадокс",
        "распадок",
        "просадка",
        "драка",
        "карда",
        "драхма",
        "дхарма",
        "заметка",
        "каземат",
        "ракетка",
        "актерка",
        "каретка",
        "аптечка",
        "печатка",
        "ракета",
        "карета",
        "кража",
        "жарка",
        "харизма",
        "архаизм",
        "разница",
        "зарница",
        "казна",
        "наказ",
        "казан",
        "зачаток",
        "заточка",
        "фазан",
        "фанза",
        "ратификация",
        "тарификация",
        "машинка",
        "манишка",
        "канистра",
        "старинка",
        "старикан",
        "артистка",
        "каратист",
        "старина",
        "санитар",
        "майка",
        "кайма",
        "сарай",
        "сайра",
        "раскопка",
        "покраска",
        "красотка",
        "касторка",
        "краска",
        "каркас",
        "канал",
        "накал",
        "клапан",
        "планка",
        "палочка",
        "лапочка",
        "палка",
        "лапка",
        "скала",
        "ласка",
        "шкала",
        "шакал",
        "алкаш",
        "калаш",
        "ромашка",
        "мошкара",
        "рамка",
        "марка",
        "карма",
        "маска",
        "самка",
        "аркан",
        "ранка",
        "канат",
        "накат",
        "танка",
        "папка",
        "каппа",
        "арка",
        "кара",
        "рака",
        "арак",
        "раскат",
        "старка",
        "карта",
        "карат",
        "катар",
        "чакра",
        "чарка",
        "такса",
        "каста",
        "амплуа",
        "ампула",
        "талант",
        "атлант",
        "тантал",
        "оплата",
        "лопата",
        "плата",
        "лапта",
        "лапша",
        "шпала",
        "палаш",
        "салат",
        "атлас",
        "нарта",
        "таран",
        "фанат",
        "фанта",
        "аорта",
        "отара",
        "пара",
        "арап",
        "тара",
        "арат",
        "фара",
        "арфа",
        "отбывание",
        "бытование",
        "абвер",
        "верба",
        "обвал",
        "вобла",
        "рабство",
        "барство",
        "собрание",
        "бросание",
        "заборчик",
        "образчик",
        "образ",
        "забор",
        "пробирка",
        "приборка",
        "трибуна",
        "турбина",
        "коробка",
        "барокко",
        "бокал",
        "колба",
        "порубка",
        "парубок",
        "уборка",
        "кобура",
        "скоба",
        "басок",
        "бочка",
        "бачок",
        "брак",
        "краб",
        "барк",
        "скарб",
        "скраб",
        "рубка",
        "бурка",
        "бурак",
        "чурбак",
        "барчук",
        "рыбак",
        "рыбка",
        "бакс",
        "баск",
        "пломба",
        "апломб",
        "альбом",
        "мольба",
        "набор",
        "барон",
        "барыня",
        "рабыня",
        "табун",
        "бутан",
        "баня",
        "баян",
        "собрат",
        "торбас",
        "аборт",
        "табор",
        "торба",
        "бар",
        "раб",
        "бра",
        "табу",
        "туба",
        "гаврик",
        "гривка",
        "водопад",
        "подвода",
        "давление",
        "владение",
        "водила",
        "диавол",
        "подкова",
        "паводок",
        "вазелин",
        "левизна",
        "вертикаль",
        "кильватер",
        "реактивность",
        "креативность",
        "креатив",
        "реактив",
        "царствие",
        "австриец",
        "валек",
        "левак",
        "полвека",
        "полевка",
        "свекла",
        "левкас",
        "качество",
        "весточка",
        "верстак",
        "верстка",
        "свертка",
        "валет",
        "ветла",
        "вранье",
        "рванье",
        "весна",
        "навес",
        "верста",
        "стерва",
        "навоз",
        "вазон",
        "вилка",
        "валик",
        "листовка",
        "вокалист",
        "отливка",
        "литовка",
        "ксива",
        "сивка",
        "виола",
        "олива",
        "вина",
        "нива",
        "вокал",
        "валок",
        "коваль",
        "альков",
        "рукав",
        "курва",
        "волна",
        "волан",
        "новатор",
        "наворот",
        "право",
        "повар",
        "автор",
        "товар",
        "отвар",
        "рвота",
        "втора",
        "тавро",
        "вар",
        "рав",
        "врач",
        "рвач",
        "друган",
        "драгун",
        "реагент",
        "ренегат",
        "глазенки",
        "лезгинка",
        "кочегар",
        "кочерга",
        "газ",
        "зга",
        "газон",
        "загон",
        "гроза",
        "розга",
        "патопсихология",
        "психопатология",
        "логика",
        "иголка",
        "горилка",
        "рогалик",
        "игла",
        "лига",
        "горка",
        "кагор",
        "глас",
        "галс",
        "маг",
        "гам",
        "орган",
        "аргон",
        "ранг",
        "гран",
        "гора",
        "арго",
        "гусар",
        "аргус",
        "угар",
        "рагу",
        "дарение",
        "радение",
        "сделка",
        "следак",
        "чердак",
        "кедрач",
        "десятка",
        "детская",
        "детка",
        "кадет",
        "деталь",
        "дельта",
        "дрема",
        "дерма",
        "десна",
        "седан",
        "среда",
        "адрес",
        "динамо",
        "домина",
        "лодка",
        "оклад",
        "кодла",
        "мудак",
        "думка",
        "кода",
        "дока",
        "дурачок",
        "дурочка",
        "дочурка",
        "доска",
        "садок",
        "дурак",
        "дурка",
        "анод",
        "дона",
        "ротонда",
        "торнадо",
        "народ",
        "радон",
        "нарды",
        "рында",
        "сода",
        "даос",
        "чадо",
        "доча",
        "удар",
        "дура",
        "руда",
        "желание",
        "лежание",
        "пенсионерка",
        "покраснение",
        "настроение",
        "остранение",
        "растение",
        "старение",
        "катетер",
        "тетерка",
        "лежак",
        "лежка",
        "резка",
        "резак",
        "замес",
        "сезам",
        "материк",
        "метрика",
        "песчинка",
        "песчаник",
        "пасечник",
        "секира",
        "кариес",
        "апельсин",
        "спаниель",
        "теплица",
        "петлица",
        "реалист",
        "селитра",
        "испанец",
        "пациенс",
        "нищета",
        "щетина",
        "тщание",
        "лакей",
        "лейка",
        "ларек",
        "карел",
        "стрелка",
        "кластер",
        "сталкер",
        "кафель",
        "кефаль",
        "намек",
        "немка",
        "макет",
        "метка",
        "темка",
        "танкер",
        "нектар",
        "сеточка",
        "чесотка",
        "репка",
        "пакер",
        "парсек",
        "каперс",
        "паркет",
        "трепка",
        "река",
        "каре",
        "картер",
        "кратер",
        "актер",
        "катер",
        "терка",
        "церка",
        "царек",
        "сетка",
        "секта",
        "аскет",
        "тесак",
        "тетка",
        "катет",
        "чаек",
        "чека",
        "малое",
        "омела",
        "лента",
        "налет",
        "стапель",
        "пастель",
        "стела",
        "талес",
        "наем",
        "мена",
        "отмена",
        "монета",
        "немота",
        "мера",
        "рема",
        "мастер",
        "стрема",
        "тема",
        "мета",
        "стена",
        "сенат",
        "пехота",
        "потеха",
        "тапер",
        "патер",
        "чужак",
        "жучка",
        "ложа",
        "жало",
        "жар",
        "раж",
        "ржа",
        "приказ",
        "каприз",
        "замок",
        "мазок",
        "разок",
        "зарок",
        "зал",
        "лаз",
        "зола",
        "лоза",
        "знамя",
        "мазня",
        "проза",
        "запор",
        "мартини",
        "антимир",
        "минтай",
        "наймит",
        "кишлак",
        "шкалик",
        "кокаин",
        "иконка",
        "краник",
        "кринка",
        "пальтишко",
        "платьишко",
        "липка",
        "пилка",
        "капли",
        "сушилка",
        "силушка",
        "училка",
        "уличка",
        "миска",
        "макси",
        "соринка",
        "росинка",
        "скотина",
        "останки",
        "аконит",
        "катион",
        "тоника",
        "ратник",
        "кантри",
        "пика",
        "кипа",
        "пикап",
        "папик",
        "старик",
        "стирка",
        "рафик",
        "факир",
        "шарик",
        "рикша",
        "такси",
        "киста",
        "налим",
        "лиман",
        "плотина",
        "полтина",
        "липа",
        "пила",
        "сила",
        "лиса",
        "мина",
        "амин",
        "хроматин",
        "хиромант",
        "умница",
        "цунами",
        "мания",
        "ямина",
        "прима",
        "ампир",
        "фирма",
        "рифма",
        "истмат",
        "мастит",
        "спина",
        "псина",
        "сани",
        "анис",
        "ниша",
        "шина",
        "патриот",
        "паротит",
        "патио",
        "опиат",
        "пиар",
        "пари",
        "кулак",
        "кукла",
        "кочка",
        "качок",
        "каюк",
        "юкка",
        "лак",
        "кал",
        "школа",
        "лошак",
        "шлюпка",
        "плюшка",
        "капля",
        "пакля",
        "кома",
        "амок",
        "мако",
        "мокрота",
        "моторка",
        "комар",
        "корма",
        "ямочка",
        "маячок",
        "мошка",
        "кошма",
        "мука",
        "кума",
        "кумач",
        "чумак",
        "мышка",
        "камыш",
        "маяк",
        "ямка",
        "крона",
        "коран",
        "норка",
        "рокан",
        "картон",
        "контра",
        "носка",
        "аксон",
        "станок",
        "таксон",
        "кочан",
        "ночка",
        "курсант",
        "струнка",
        "танк",
        "кант",
        "порка",
        "парок",
        "капор",
        "прокат",
        "тропка",
        "капот",
        "топка",
        "рачок",
        "корча",
        "тоска",
        "сотка",
        "сачок",
        "часок",
        "кофта",
        "фотка",
        "парк",
        "карп",
        "крап",
        "пятка",
        "пятак",
        "тяпка",
        "паук",
        "купа",
        "шпак",
        "шкап",
        "рак",
        "кар",
        "акр",
        "крыса",
        "рысак",
        "крат",
        "трак",
        "карт",
        "рука",
        "урка",
        "кура",
        "ручка",
        "чурка",
        "круча",
        "сакэ",
        "эска",
        "акт",
        "кат",
        "шутка",
        "штука",
        "тушка",
        "щука",
        "куща",
        "масло",
        "смола",
        "марля",
        "маляр",
        "эталон",
        "этанол",
        "луна",
        "улан",
        "пола",
        "опал",
        "толпа",
        "плато",
        "пальто",
        "лапоть",
        "пластырь",
        "псалтырь",
        "альт",
        "таль",
        "роман",
        "норма",
        "масон",
        "осман",
        "моча",
        "мачо",
        "амур",
        "мура",
        "марш",
        "шрам",
        "шарм",
        "мать",
        "тьма",
        "мах",
        "хам",
        "сосна",
        "насос",
        "урна",
        "уран",
        "руна",
        "стан",
        "наст",
        "хан",
        "хна",
        "пастор",
        "стропа",
        "рота",
        "тора",
        "таро",
        "хаос",
        "соха",
        "прах",
        "храп",
        "пас",
        "спа",
        "сап",
        "спас",
        "пасс",
        "старт",
        "траст",
        "фрау",
        "фура",
        "шарф",
        "фарш",
        "туша",
        "ушат",
        "шах",
        "хаш",
        "богочеловек",
        "человекобог",
        "выбор",
        "обрыв",
        "погреб",
        "пробег",
        "герб",
        "брег",
        "грибок",
        "гробик",
        "киборг",
        "гриб",
        "бриг",
        "гроб",
        "горб",
        "одобрение",
        "ободрение",
        "бредни",
        "бренди",
        "дебри",
        "дерби",
        "добро",
        "бордо",
        "обстрел",
        "лобстер",
        "белорус",
        "лесоруб",
        "облик",
        "лобик",
        "микроб",
        "ромбик",
        "ботик",
        "биток",
        "брюки",
        "бирюк",
        "клубок",
        "клобук",
        "лубок",
        "кубло",
        "короб",
        "оброк",
        "борок",
        "бросок",
        "собкор",
        "куб",
        "бук",
        "ромб",
        "бром",
        "отбор",
        "робот",
        "брус",
        "сруб",
        "вызов",
        "вывоз",
        "ветрогон",
        "военторг",
        "говор",
        "ворог",
        "дуновение",
        "увиденное",
        "водоем",
        "ведомо",
        "древность",
        "вредность",
        "ведро",
        "древо",
        "скотовод",
        "водосток",
        "вход",
        "вдох",
        "выход",
        "выдох",
        "просвещение",
        "всепрощение",
        "сельсовет",
        "веселость",
        "сервер",
        "реверс",
        "вектор",
        "корвет",
        "верность",
        "ревность",
        "совет",
        "отвес",
        "отсев",
        "вес",
        "сев",
        "свет",
        "вест",
        "воз",
        "зов",
        "полковник",
        "клоповник",
        "вино",
        "воин",
        "овин",
        "винт",
        "твин",
        "вол",
        "лов",
        "слово",
        "волос",
        "ворон",
        "норов",
        "вонь",
        "новь",
        "вор",
        "ров",
        "год",
        "дог",
        "регион",
        "героин",
        "торгсин",
        "горнист",
        "йог",
        "гой",
        "гол",
        "лог",
        "голос",
        "логос",
        "луг",
        "гул",
        "гром",
        "морг",
        "торг",
        "грот",
        "директор",
        "кредитор",
        "лидер",
        "дилер",
        "едок",
        "деко",
        "декор",
        "кредо",
        "докер",
        "демон",
        "домен",
        "торпедо",
        "ортопед",
        "диктор",
        "дротик",
        "оксид",
        "диско",
        "кордон",
        "кондор",
        "код",
        "док",
        "дрок",
        "корд",
        "дно",
        "дон",
        "донор",
        "рондо",
        "родня",
        "рядно",
        "род",
        "одр",
        "уход",
        "худо",
        "ряд",
        "ярд",
        "стержень",
        "стрежень",
        "поручение",
        "упрочение",
        "трение",
        "терние",
        "лепесток",
        "телескоп",
        "плесень",
        "слепень",
        "реле",
        "леер",
        "зерно",
        "резон",
        "клиент",
        "летник",
        "никель",
        "ельник",
        "клише",
        "лишек",
        "инспектор",
        "пристенок",
        "спикер",
        "персик",
        "мерин",
        "минер",
        "метис",
        "семит",
        "шериф",
        "шифер",
        "истец",
        "ситец",
        "стейк",
        "скейт",
        "колесо",
        "оселок",
        "стекло",
        "костел",
        "котел",
        "телок",
        "леток",
        "склеп",
        "плеск",
        "клеть",
        "кельт",
        "шелк",
        "клеш",
        "клещ",
        "щелк",
        "керн",
        "крен",
        "костер",
        "сектор",
        "корсет",
        "крест",
        "треск",
        "отмель",
        "мотель",
        "член",
        "челн",
        "ленч",
        "пролет",
        "трепло",
        "полет",
        "тепло",
        "село",
        "осел",
        "тело",
        "лето",
        "отел",
        "ремонт",
        "монтер",
        "ментор",
        "метр",
        "терм",
        "турне",
        "унтер",
        "фен",
        "неф",
        "перо",
        "опер",
        "серп",
        "перс",
        "ер",
        "ре",
        "сет",
        "тес",
        "жмурик",
        "жмурки",
        "жирок",
        "рожки",
        "тритий",
        "иттрий",
        "носилки",
        "силикон",
        "синоптик",
        "истопник",
        "оклик",
        "клико",
        "милок",
        "ломик",
        "ослик",
        "силок",
        "столик",
        "листок",
        "слиток",
        "лучик",
        "кулич",
        "мостик",
        "мостки",
        "москит",
        "ник",
        "инк",
        "кино",
        "инок",
        "скорпион",
        "опросник",
        "носик",
        "оникс",
        "сотник",
        "токсин",
        "приток",
        "тропик",
        "портки",
        "портик",
        "ростик",
        "тросик",
        "трико",
        "ротик",
        "исток",
        "стоик",
        "прутик",
        "трупик",
        "шпик",
        "пшик",
        "иск",
        "икс",
        "скиф",
        "фикс",
        "кит",
        "тик",
        "полис",
        "сопли",
        "отчим",
        "томич",
        "ритм",
        "мирт",
        "пион",
        "пони",
        "трио",
        "тори",
        "рис",
        "сир",
        "осколок",
        "колосок",
        "окорок",
        "рококо",
        "скок",
        "кокс",
        "клоун",
        "уклон",
        "кулон",
        "колун",
        "сокол",
        "колос",
        "кольцо",
        "цоколь",
        "полк",
        "клоп",
        "лоск",
        "скол",
        "чулок",
        "лучок",
        "космы",
        "мысок",
        "контур",
        "котурн",
        "шнурок",
        "коршун",
        "рынок",
        "нырок",
        "сукно",
        "конус",
        "отрок",
        "рокот",
        "рок",
        "орк",
        "корт",
        "крот",
        "урок",
        "укор",
        "скот",
        "сток",
        "кот",
        "ток",
        "шток",
        "кошт",
        "шок",
        "кош",
        "пуск",
        "скуп",
        "трюк",
        "тюрк",
        "куст",
        "стук",
        "сук",
        "кус",
        "лом",
        "мол",
        "нуль",
        "лунь",
        "посол",
        "сопло",
        "стол",
        "слот",
        "соль",
        "лось",
        "лот",
        "тол",
        "флот",
        "лофт",
        "мор",
        "ром",
        "урон",
        "руно",
        "сон",
        "нос",
        "унт",
        "нут",
        "тун",
        "опрос",
        "просо",
        "топор",
        "отпор",
        "ропот",
        "спорт",
        "строп",
        "порт",
        "троп",
        "пот",
        "топ",
        "опт",
        "ор",
        "ро",
        "рост",
        "сорт",
        "трос",
        "торс",
        "рот",
        "тор",
        "торф",
        "форт",
        "фтор",
        "струп",
        "спрут",
        "труп",
        "прут",
        "рэп",
        "пэр",
        "трус",
        "руст",
        "рэ",
        "эр",
        "фут",
        "туф",
        "шут",
        "туш"
    ];
    // export const withE = "авиасъёмка авимимёнок автогидроподъёмник автомассажёр автоматно-пулемётный автоподъёмник авторьё автостaртер и автостартёр автощётка агитёр агитёрка агитёры агрегат-подъёмник (НВРЛ) адиёт (СРСЮЮ) адьё (из Паустовского) аистёнок айссёрфинг (НВРЛ) акантоцефаллёзы (САМ) актёр актёришка актёрка актёрски актёрский актёрство актёрствовать активно-ёмкостный (САМ) акрилзамещённый акрилозамещённый акрошкёры (Вл. Набоков «Камера-обскура») актинобациллёз акулёнок акушeр и акушёр акушeрка алё (разг.) алёкать алёна (БСРЖ) алёнка (БСРЖ) алёнка (жук) (САМ) алёнушка (БСРЖ) алёша (БСРЖ) алёшка (БСРЖ) алкоголёнок алкоголёночек аллёрик (БСРЖ) аллигаторёнок аллозаврёнок алощёкий алтарём [алтарь] алым-алёхонек алым-алёшенек альстрёмия (растен.) аматёр аматёрка амёба амёбиоз амёбный амёбовидный амёбоидный амёбоноситель амёбообразный амёбоциты амфисбенёнок анакондёнок анкетёр анкилозаврёнок антигорбачёвский (НВРЛ) антиёшник (В.Ч.) антиёшница (В.Ч.) антикремлёвский антисвёртывающий антрепренёр антрепренёрский антрепренёрство антрепренёрствовать антрепренёрша арилзамещённый артёк (БСРЖ) артёмовец (СГЖСССР) артёмовцы (СГЖСССР) артналёт архарёнок архи-всё архимёд (НВМ) архисерьёзный аскнём (аскать) (СРСЮЮ) аспергиллёз (болезнь) аспидно-чёрный асс-бобёр (БСРЖ) астролётчик (САМ) ! атлeт (атлёт — неправ.) ! атлeтика (атлётика — неправ.) ! афeра (афёра — неправ.) афёр (БСРЖ) аэрогаммасъёмка аэрогеосъёмка аэросъёмка аэросъёмочный аэрофинишёр (ВЭ) аэрофотосъёмка     Б бабёнка бабёночка бабёха бабёныш (РСЯР) бабёшка бабиёр (полынь, вятск.) бабка-ёшка бабьё (Даль) бабьёвое тряпьё (РСЯР) багрённый, -ён, -ена (npич. от багрить — окрашивать в багровый цвет) ба’гренный (прич. от багрить — вытаскивать багром из воды) багрянощёкий бадьёй [бадья] байрёйтец (СГЖСССР, Швеция) байрёйтцы (СГЖСССР, Швеция) бакланьё (СРВЖ) бактрозаврёнок баландёр (БСРЖ) балансёр (акробат) балансёрка балдёж (СРСЮЮ) балдёжник (СРСЮЮ) балдёжничать (СРСЮЮ) балдёжный (СРСЮЮ) балдёха (БСРЖ) балёжа (БСРЖ) балёк (БСРЖ) балёха (БСРЖ) банкомёт банкомётный барёха барёшка барёшница барсёнок ба’ртерно-чёрный (НВРЛ) басёк (БСРЖ) баталёр батожьё, батожьём бахчёвый (РСЯР) башлёвый (вульг.) бегемотёнок бегемотёночек беготнёй [беготня] бедёнковец (В.Ч.) бедёнковцы (В.Ч.) бедётчатый (РСЯР) безбуквиё (НВМ) безверетённый безгнёздный и безгнёздый безгрёзье (Иг. Сев.) безду’шно-казённый (НВРЛ) безъёшная, -ный (газета, текст) (В.Ч.) беззалёжная служба (РСЯР) беззачётность (Даль) беззачётный (Даль) беззвёздный безлёгочный безколёсный (РСЯР) безкормёжный промысел (РСЯР) безмёздрый (Даль) безнадёга безнадёжность и безнадeжность безнадёжный и безнадeжный гололёдица безножит скотину (РСЯР) безодёжить (РСЯР) безодёжный безотёмный безотъёмный (РСЯР) безотчётность безотчётный безрасчётный безрасчётливый безуёмный (Даль) безупрeчный (хотя упрёк ) безъёмкостный безъённый (Даль) безызъёмный безымённость безыскажённый безымённый (без имени) и (устар.) безыме’нный; не смешивать с безымя’нный (палец) безыскажённый безъённый (Даль) бейбёнок бейбёночек белёвец (СГЖСССР) белёвский белёвцы (СГЖСССР) белённый, белён (прич.) белёный (прилаг.) белёк (Даль) белёсо-голубой белёсость белёсо-чёрное белёсый (но есть и белeсый) белёхонький белёшенький белое-чёрное белозёр, но и белозе’рец белозёрный (с белым зерном) белозёры бело-золотисто-чёрный (НВРЛ) белопёрый белошёрстный и белошёрстый белощёкой белым-белёхонький белым-белёшенький бельё, бельём бельфлёр бельфлёр-китайка бережёный бережёт(ся) [бере’чь(ся)] бере’зник берёг(ся) [беречь(ся)] берёгший берёза берёзина берёзка берёзовец (СГЖСССР) берёзовица берёзовка берёзовцы (СГЖСССР) берёзовый берёзонька берёзья (кора) берёста и береста’ берёсто (Вологда) берёстка берёстовый, берестяно’й и бересто’вый берёт(ся) [брать(ся)] безбуквиё (НВМ) безбуквыё (НВМ) бесёнок (Даль) бесколёсный беспёрый (-ая) (Даль) бесполётный(ая) (зона) бесслёзный бессчётный (Даль) бесчерёмуха (БСРЖ) бесшёрстный (БСРЖ) бечёвка бечёвочка бечёвочный бёдерный и бедёрный бёдра [бедро] бёздник бёздничек бёздэй (БСРЖ) бёзник (БСРЖ) бёлит (минерал) бёрдечко бёрдо (принадлежность ткацкого станка) бёрдовый бёрздэй (БСРЖ) бёрце и берцо бздёх бздёха бздёшник библейско-кремлёвское имя («ЛГ», №16, 2005) бизнес-репортёр (НВРЛ) билетёр билетёрша бимбёр бимьё (Даль) битьё, битьём битьё (сплошные льды) бичёванный бичёвка (вульг.) бичёвский (СРСЮЮ) благонадёжность благонадёжный благоприобретённый и благоприобре’тенный благорасполо’женный и благорасположённый благорастворённый благословлённый, -ён, -ена (прич.) благоучреждённый бледнёхонький бледнёшенький блeдно-жёлтый блeдно-зелёный блеёт [бле’ять] блеснёт [блеснуть] блeф, неправ. блёф блёв блёвки блёвый (БСРЖ) блёкло-голубой и блeкло-голубой блёкло-жёлтый блёкло-зелёный блёкло-лиловый блёкло-синий блёкло-сирeневый блёклость и блeклость блёклый и доп. блeклый блёкнувший и блeкнувший блёкнул, блёкла, -ло блёкнуть и доп. блeкнуть, (прош.) блёк и блёкнул, блёкла блёнда (шахтёрская лампа) блёстки блёсткий блёсточки близёкое (К.Чук. «От 2 до 5») близёхонький близёхонько блуёвый (БСРЖ) блюдёт [блюсти] (прич.) блюдённый блюёт [блевать] бобёр (мех бобра) бобёр (морское животное) бобр (назв. континентального животного) бобрёнок бобылём [бобыль] богатырём [богатырь] богачьё боговручённый боготворённый бодёна бодёнушка бодёр ещё (РСЯР) бодрёхонокий бодрёшенький боек, бойка, бойко [бойкий] боёв [бой] боёвка (СРВЖ) боёк (кончик курка, ударник) бокрёнок (некий детёныш акад. Л.В. Щербы) боксёр (1. спортсмен, 2. порода собак) боксёрки (обувь) боксёрский болозё (Даль) болтно-озёрный болтнёт [болтнуть] болтовнёй [болтовни] больнёхонький больнёшенький большесёл (СГЖСССР) большесёлка (СГЖСССР) большесёлы (СГЖСССР) бомбанёшь, -ёт (бомбануть) (НВРЛ) бомбёжка бомбомёт бомбомётчик бородёнка бородёночка боронённый бортпаёк борщехлёб босотьё (Даль) ботовьё бочкарёвка (СРВЖ) бракёр бракера’жем [бракераж] браньё браулёз (болезнь) бреве’нчатый бревёшко бреденёк (Даль) брехомёт (СРВЖ) брёвна [бревно] брёвнышко бредёт [брести] брёл [брести] брёлка бретёр бретёрский бретёрство бреттёр брёх брехнёй [брехня] (простореч.) брехнёт бримёра (растение) бритьё, бритьём бритьё-пома’женье (Даль) брожёное (РСЯР) бромзамещённый бронёй и броней [бронь и броня] бронёк (БСРЖ) бронетранспортёр бронтозаврёнок бронхолёгочный брyтто-объём бруциллёз (болезнь) бруциллёзный брыкнёт [брыкнуть] бубён [бyбны] будённовец будённовка будённовский будёновка (БСРЖ) буёв [буй] буёк (уменьш. к буй) бузотёр бузотёрить бузотёрка бузотёрский бузотёрство букварём [букварь] буквиё (НВМ) буквоёд (НВМ) буквоёлог буквоёшник буквоёшничество (А. Прел.) буквославиё (НВМ) бултыхнёт(ся) [бултыхнyть(ся)] бунтарём [бунтарь] бурбулёзный бурёнка, бурёнушка бурённый буржуёв (р.п.м.) («У») буркозёл бурлёж (от бурлить) бyро-жёлтый бyро-зелёный бурозём бутылёк бухнём бухучёт бучённый, -ён, -ена (прич. от бутить — производить бутовую кладку) бу’ченный (прич. от бучить— кипятить в щёлоке) быльё (трава) быльём (быльём поросло) быстрёхонек быстрёхонько быстрёхонький быстрёшенький быстролётный быстроразъёмный быстросъёмный бытие, бытием, (не рек.: бытиё) бытьё (житьё-бытьё), бытьём бьёт(ся) [бить(ся)] бэбёнок (БСРЖ) бэбиёнок (БСРЖ)       В вайё (воловье дышло) (Даль) валeжник (неправ. валёжник) валёж на скот (РСЯР) валёжка (СРВЖ) валёк валёр валочно-трелёвочный валуёв, валуём (валуй —вид грибов) вальдшнепёнок вальдшнепёночек вальё (БСРЖ) ванёк (простак)(жарг.) ванёк (БСРЖ) варанёнок варёнка (ткань и изд. из неё) варёнки (штаны, брюки) варёно-копчёный варёный (прил.) варёха (БСРЖ) васёк (БСРЖ) василёвец (В.Ч.) василёвцы (В.Ч.) василёк, василёчек василёк (БСРЖ) ваучерёнок (БСРЖ) вафёл (БСРЖ) вафлёр (БСРЖ) вафлёрша (БСРЖ) вахтёр (не рек. устар. ва’хтер) вахтёрский вахтёрша вберёт(ся) [вобрать(ся)] вбрёл (в воду) введённый, -ён, -ена введёт(ся) [ввести(сь)] ввёз [ввезти] ввезённый ввезёт [ввезти] ввёзший ввёл(ся) [ввести(сь)] ввёрнутый; ввёрнут, -а, -о ввёрстанный, -ан, -ана ввёрстка ввёртка ввёртывание ввёртывать(ся) ввёрстывать(ся) ввёртывать вволочённый вволочёт [вволочь] вгрёб, вгрёбка (РСЯР) вгрызёт(ся) [вгрызть(ся)] вдёжка вдёргивание вдёржка вдёрнутый вдвоём вдёргивать(ся) вдёрнуть(ся) вдолбёжку вдолблённый, -ён, -ена вдохнёт [вдохнyть] вдохновлённый, -ён, -ена (прич.), но вдохновeнный ведённый, -ён, -ена ведёный (БСРЖ) ведёрница ведёрко ведёрный ведёрочко ведёрочко (БСРЖ) ведёрочный ведёрце ведёрышко ведёт [вести] ведьма-труболётка (РСЯР) везённый, -ён, -ена везёт [везти] векселёк векша (вёкша — неправ.) векшёнец (СГЖСССР, Швеция) векшёнцы (СГЖСССР, Швеция) велотренажёр венёвец (СГЖСССР) венёвцы (СГЖСССР) вензелёк вензелёчек верёва (БСРЖ) верёвка верёвочка верёвочник верёвочный вереёй [верея] вережёная лошадь (опоенная) (РСЯР) веретёна (мн. ч. от веретено) веретёнка (машинное масло) веретённый веретённое (масло) (О.К.) веретёнце и веретeнце веретёнщик веретьё (А. Прел.) веретьём и вере’тье, вере’тьем вернёт(ся) [вернyть(ся)] вернёхонько вертёж вертикально-подъёмный вертолёт вертолёт (СРСЮЮ) вертолёт-кран вертолётный вертолётовылет вертолётоносец вертолётоносный вертолётостроение вертолётостроитель вертолётостроительный вертолётчик вертолётчица верша и вёрша веселёхонький веселёхонько веселёшенький веcелёшенько весeльный и вёсельный весёленький весёлка 1. лопатка для размешивания растворов, 2. гриб) весёлка (БСРЖ) весёловец (СГЖСССР) весёловцы (СГЖСССР) весёлость весёлый, вёсел весьёгонский ветрожёлклый (РСЯР) ветролёт (НВМ) ветролётка (РСЯР) вечёрка (веч. смена, занятие) «Вечёрка» (вечерняя газета) вечёрница рыжая (летучая мышь) вечнозелёный вечномёрзлый вешённый вёдра, вёдер и т. д. [ведро] вёдро (о погоде) (Даль) вёдрышко вёз [везти] вёзший вёл [вести] в ём (в нём) вёрджинел вёрзни (лапти) вёрстанный, -ан, -ана вёрстка вёрстный вёрсты вёрстывать (РСЯР) вёрст (мн. ч. от верста) вёрстный (РСЯР) вёртки (БСРЖ) вёрткий вёрткость вёсла, вёсел и т. д. [весло] вёсла на’ воду! (СРВЖ) вёсны, вёсен и т. д. [весна] вётлы, вётел и т. д. [ветла] вёшенец (СГЖСССР) вёшенка (гриб) вёшенцы (СГЖСССР) вёшка, -и (палка, воткнутая в дно) (О.К.) вживлённый взаём и взаймы взаимозачёт взаиморасчёты взачёт взахлёб взахлёст взберётся [взобраться] взбешённость взбешённый, -ён, -ена взбодрённость взбодрённый, -ён, -ена взборождённый, -ён, -ена взбредёт [взбрести] взбрeдший взбрёл [взбрести] взбугрённый, -ён, -ена взбурлённый, -ён, -ена взва’ленный и взвалённый, -ён, -ена взведённый, -ён, -ена взведёт [взвести] взвезённый взвёзший взвёл [взвести] взвеселённый, -ён, -ена взви’хренный и взвихрённый, -ён, -ена взволочённый, -ён, -ена взволочёт(ся) [взволочь(ся)] взворошённый, -ён, -ена взгорячённый, -ён, -ена взгромождённый, -ён, -ена взгрустнёт(ся) [взгрустнуть(ся)] вздвоенный [вздвоить] вздвоённый [вздвоить] вздёв (РСЯР) и (Даль) вздёвка (Даль) вздёвочный, -ая (Даль) взлёжка (Даль) вздёргивание вздёргивать(ся) вздёржка вздёрнуть(ся) вздёрнуть (БСРЖ) вздёрнутый вздёрщик вздохнёт [вздохнуть] вздремнёт [вздремнуть] взлёт взлётка взлётно-посадочный взлётный взлёток (РСЯР) взлётчивый (РСЯР) взлущённый, -ён, -ена взманённый, -ён, -ена взмахнёт [взмахнуть] взмёл [взмести] взмёт взмётанный, -ан, -ана взмётка (РСЯР) взмётная монетка (РСЯР) взмётчик (РСЯР) взметённый, -ён, -ена взметёт [взмести] взметнёт [взметнуть] взмётший взмедитнёшь [взмедитнуть] рыба взмётывается из воды (РСЯР) взмётывание взмётывать(ся) взнёс [взнести] взнесённый, -ён, -ена взнесёт [взнести] взнёсший(ся) взобьёт [взбить] взовьёт(ся) [взвить(ся)] взойдёт [взойти] взорвёт(ся) [взорвать(ся)] взошёл [взойти] взрастёт [взрасти] взращённый, -ён, -ена взревёт [взреветь] взрёвывать взрывозащищённый взрыхлённый, -ён, -ена взряблённый, -ён, -ена взъём (РСЯР) взъёмный (РСЯР) взъёмистая гора (РСЯР) взъёмчивая пружина (РСЯР) взъёрзнул (Даль) взъёрш (РСЯР) взъярённый, -ён, -ена взятьё (штурм) (САМ) взятьём (штурмом) (САМ) виброзащищённый вибромассажёр видеоплёнка видеоприём (НВРЛ) вивёр вивёрство видни’м-виднёшенько визготнёй [визготня] визитёр визитёрша вильнёт [вильнуть] виндсёрфер виндсёрфинг (спорт) виндсёрфинговый (НВРЛ) винёвка (САМ) винно-ликёрный винохлёб винтёр виршеплёт виршеплётство висилёк (БСРЖ) вискарём (от виски) витьё, витьём вишнёвец (СГЖСССР) вишнёвцы (СГЖСССР) вишнёвка вишнёвочка вишнёвый вклёпанный, -ан, -ана вклёпка вклёпывание вклёпывать(ся) включённый, -ён, -ена вкоренённый, -ён, -ена вкрадётся [вкрасться] вкреплённый вкуёшь [вковать] вкушённый, -ён, -ена влагоёмкий влагоёмкость влечёт(ся) [влёчь(ся)] влёгкую в лёжку влёкшийся влёрец (СГЖСССР, Албания) влёрцы (СГЖСССР, Албания) влёт влюблённо влюблённость влюблённый, -ён, -ена влюблёшка (БСРЖ) вменённый, -ён, -ена вмёрзнуть вмёрзший вмёртвую вмёт (РСЯР) вмётка (РСЯР) вмётный (РСЯР) вмётанный, -ан, -ана вметённый, -ён, -ена вмётка вмётший вмётывание вмётывать(ся) вмещённый внаём и внаймы внахлёст внахлёстку внедрённый, -ён, -ена внеочерёдность внёс(ся) [внести(сь)] внесённый, -ён, -ена внесёт [внести] внетьё (Даль) внёсший(ся) внёжига (Даль) вновьё (НВРЛ) внутризвёздный внутризёренный внушённый, -ён, -ена вобьёт [вбить] вовлёк(ся) [вовлечь(-ся)] вовлёкший(ся) вовлечённый, -ён, -ена вовлечёт(ся) [вовлечь(ся)] вовьёт [ввить) вогнёт(ся) [вогнуть(ся)] водворённый, -ён, -ена водкохлёб (НВМ) водоём водоёмина (РСЯР) водоёмкий водоёмкость водоёмный водозащищённый водозащищённость водоизменённый водоклёв (РСЯР) водола’зно-приёмный (НВРЛ) водомёд (НВМ) водомёт водомётный водоподъём водоподъёмный водоприёмник водоприёмный водохлёб (человек, жук) водружённый, -ён, -ена воёшка (БСРЖ) вождём [вождь] вожмёт [вжать] возблагодарённый возбранённый возбуждённость возбуждённый, -ён, -ена возведённый, -ён, -ена возведёт [возвести] возвeдший возвёл [возвести] возвеселённый, -ён, -ена возвещённый, -ён, -ена возвращённый, -ён, -ена возглашённый, -ён, -ена возжёвый (РСЯР) возжёг [возжечь] возжёгший(ся) возжёт [возжечь] возжжённый, -ён, -ена возживём в духе (РСЯР) воззовёт [воззвать] возлёг [возлечь] возлёгший возмещённый, -ён, -ена возмущённо (нареч.) возмущённый, -ён, -ена вознаграждённый, -ён, -ена вознёй [возня] вознёс(ся) [вознести(сь)] вознесённый, -ён, -ена вознесёт(ся) [вознести(сь)] вознёсший(ся) возобновлённый, -ён, -ена возовьё (РСЯР) возрастёт [возрасти] возрождённый, -ён, -ена возьмёт(ся) [взять(ся)] войдёт [войти] волгарём [волгарь] волдырём [волдырь] воловёр (БСРЖ) волокёт [волочь] волонтёр волонтёрка волонтёрный и волонтёрский волопёр (Даль) волосёнки волочённый и волочeнный волочёный (прил.) волочёт(ся) [волочь(ся)] вольёт(ся) [влить(ся)] вольнёшенько (РСЯР) вольнонаёмный вольтижёр вомнёт [вмять] вонзённый, -ён, -ена воображённый, -ён, -ена воодушевлённо воодушевлённость воодушевлённый, -ён, -ена и (выражающий воодушевление) -ён, -ённа вооружёнка (СРВЖ) вооружённость Вооружённые силы РФ вооружённый, -ён, -ена воплощённость воплощённый, -ён, -ена вопрошённый, -ён, -ена вопьётся [впиться] ворёнок воркотнёй [воркотня] воробьём, воробьёв [воробей] воробьёнок ворожеёй [ворожея] воронёнок воронёночек воронёный воронённый, -ён, -ена вороньё, вороньём (Даль) ворохнёт(ся) [ворохнуть(ся)] ворошённый, -ён, -ена (прич.) ворошёный (прил.) ворьё воскрешённый, -ён, -ена воскрылённый, -ён, -ена воскурённый, -ён, -ена и воску’ренный воспалённый, -ён, -ена воспламенённый, -ён, -ена воспоённый, -ён, -ена воспоёт [воспеть] воспрещённый, -ён, -ена восприе’мник (устар.) восприе’мница (устар.) воспроизведённый, -ён, -ена воспроизведёт(ся) [воспроизвести(сь)] воспроизвёл(ся) [воспроизвести(сь)] воссоединённый, -ён, -ена восто’рженно-казённый (НВРЛ) восхвалённый, -ён, -ена восхищённо восхищённый, -ён, -ена и (выражающий восхищение) -ён, -ённа восьмёрка восьмёрка (СРВЖ) восьмётки (СРВЖ) восьмёрошник (СРВЖ) восьмиведёрный и восьмивёдерный восьмивесeльный и восьмивёсельный восьмилучёвый и восьмилучевой (восьмилучёвые полипы) восьмидесятирублёвый восьмирублёвый воткёт [воткать] воткнёт(ся) [воткнуть(ся)] вотрёт(ся) [втерёть(ся)] воцерковлённость воцерковлённый вошёл [войти] вошьёт [вшить] вощённый, -ён, -ена (прич.) вощёный (прил.) вояжёр впадёт [впасть] вперевёрт (нареч.) вперевёртку (нареч.) вперегрёб (РСЯР) впереёмку (наперерез) (РСЯР) вперёд вперёд-назад вперёдсмотрящий вперёный, -ён, -ена впечатлённый, -ён, -ена впёртый впёрший(ся) впихнёт(ся) [впихнуть(ся)] вплёл(ся), [вплести(сь)] вплёскивать(ся) вплеснёт(ся) [вплеснуть] вплёснутый, вплёснут, -а, -о вплетёт(ся) [вплести(сь)] вплетённый, -ён, -ена вплётший(ся) вплывёт [вплыть] в подмётки (не годится) вподъём (РСЯР) в подъём вползёт [вползти] впорхнёт [впорхнуть] в потёмках в почёте вприхлёбку впрочёт (РСЯР) впрядённый, -ён, -ена впрядёт(ся) [впрясть(ся)] впряжённый, -ён, -ена впряжёт(ся) [впрячь(ся)] вражьё враздёвку (нч.) (В.Ч.) вразлёт вразмёт вразумлённый, -ён, -ена вралём [враль] враньё, враньём врастёт [врасти] в расчёте (на что, на кого) вратарём [вратарь] вращённый, -ён, -ена времён [время] врёт(ся) [врать(ся)] врождённо-дегенеративный (НВРЛ) врождённость врождённый, -ён, -ена вручённый, -ён, -ена всёбдящий всё-все всё-в-одном всё, обо всём всё едино всё ж(е) всё ж таки всё и вся всё путём всё схвачено (СРСЮЮ) всё течёт вселeнная (существ.) [весь мир] вселённый, -ён, -ена (прич. от глагола вселить) всёнипочём всё путём всё равно всё схвачено всерьёз всё-таки всё-то (нареч.) вскипячённый, -ён, -ена всколупнёт [всколупнуть] всколыхнёт [всколыхнуть] вскормлённый, -ён, -ена и вско’рмленный вскрёс (РСЯР) всосёт(ся) [всосать(ся)] вспадёт (на ум) [вспасть] вспeненный и доп. устар. вспёненный, -ён, -ена всплакнёт [всплакнуть] всплеск (неправ. всплёск) всплёскивание всплёскивать(ся) всплеснёт(ся) [всплеснуть(ся)] всплывёт [всплыть] вспо’енный и вспоённый, -ён, -ена всползёт [всползти] всполоснёт [всполоснуть] всполохнёт(ся) [всполохнуть(ся)] всполошённый, -ён, -ена всполощённый («У») вспорхнёт [вспорхнуть] вспугнёт [вспугнуть] вспушённый, -ён, -ена встаёт [вставать] встаньё (РСЯР) встрёпанный, -ан, -ана встрёпчивый (РСЯР) встрепенётся [встрепенуться] встрёпка встрёпывание встрёпывать(ся) (разг.) встряхнёт(ся) [встряхнуть(ся)] всугрёб (РСЯР) всхолмлённый, -ён, -ена всхрапнёт [всхрапнуть] в счёт (чего) втёк [втечь] втёкший [втечь] втёмную втёр(ся), втёрла(сь), -ло(сь) [втереть(ся)] втёртый, -ая втёртый (СРСЮЮ) втёрший(ся) втёрши(сь) втеснённый, -ён, -ена втёсываться втечёт, втечёшь [втечь] втолкнёт(ся) [втолкнуть(ся)] втолчённый, -ён, -ена втолчёт [втолочь] вторсырьё втроём втроём-вчетвером в чём в чём (уж в чём в чём, а в этом я разберусь) в-четвёртых вчинённый, -ён, -ена въёрзнул (Даль) въёрзнуть (РСЯР) вы- — приставка.  1. При образовании глаголов совершенного вида прибавлением приставки вы- ударение переносится на эту приставку, поэтому в личных окончаниях глаголов соверш. вида, образованных с этой приставкой, никогда не пишется ё, а только е, напр.: бьёшь, но выбьешь; везёшь, но вывезешь; ведёшь, но выведешь и т. д.  2. Ударение сохраняется на приставке вы- и в причастиях прошедшего времени страдательных, поэтому в суффиксе причастий с приставкой вы- никогда не пишется ё, а только е: несённый, несён, но вынесенный, вынесен, -а, -о; ведённый, ведён, но выведенный, выведен, -а, -о, и т. п.  выблёвывать выведёныш (Н.В. Гоголь) вывёртывание вывёртывать(ся) выговорёшник (Новый Крокодил. № 1. 2004) выдаёт(ся) [выдавать(ся)] выделёнка выдёргивание выдёргивать(ся) выдрёнок выёживаться выжлёнок (птица выжловка) выклёвывание выклёвывать(ся) выклёпывание выклёпывать(ся) выкорчёвка выкорчёвывание выкорчёвывать(ся) вылёживать(ся) вымалёвывать(ся) вымежёвывание вымежёвывать(ся) вымён (мн. род. п. вымя) вымётывание вымётывать(ся) выпендрёж (СРСЮЮ) выпендрёжник (ца) выпендрёжничать выпендрёжность (БСРЖ) выплёвывание выплёвывать(ся) выплёскивание выплёскивать(ся) выражёвываться выскрёбывание выскрёбывать(ся) высокоманёвренный высокомерно-просвещённый (НВРЛ) высоконадёжный высокообогащённый высокообъёмный(ая) высокоодарённый высокооснащённый выстёбываться (БСРЖ) выстёгивание выстёгивать(ся) вытёсывание вытёсывать(ся) вытрёпывание вытрёпывать(ся) вытушёвывание вытушёвыть(ся) вытьё, вытьём выхлёбывание выхлёбывать(ся) выхлёстывать(ся) вычёркивание вычёркивать(ся) вычёсывание вычёсывать(ся) вышеприведённый вышёптывание вышёптывать(ся) вышеречённый (вышерече’нный — книжн. или иронич.) выщёлкивание выщёлкивать(ся) вы’щелочить (хотя щёлок) вьёт(ся) [вить(ся)]     Г гадёныш гадовьё (САМ) гаёв (мн., род. п. от гай) газетёнка газетёр газомёт гайковёрт гала’-приём (НВРЛ) галдёж галёра (СРСЮЮ) галёрка галёрный (СРСЮЮ) галиматьёй [галиматья] галчёнок галчёночек гальванёр гальё (вульг.) гальё (галки) (Даль) гальёта (судно) гамма-съёмка гарпунёр гарьё (гарь) (Даль) гастониёнок гастролёр гастролёрство гастролёрша гаттерёнок гашёнка (БСРЖ) га’шенный, -ен (прич.) гашёный (гашёная известь) (прил.) гвоздёвка гвоздём [гвоздь] гвоздодёр гвоздодёрный гейгёрл (БСРЖ) гекконёнок гельё (вульг.) геолого-съёмочный гепардёнок гепардёночек герлёнок (БСРЖ) герлёныш (СРСЮЮ) гёзы (ед. гёз) гёй-гёль (название коньяка) гёрл гёрла’ гёрлица гёрл-га’йдинг (НВРЛ) гёрл-га’йдовсий (НВРЛ) гёрл-гайдс (НВРЛ) гёрлс гёрлскаут гёрлфренд гётлышка (БСРЖ) гётеанец (от Гёте) гётеанский гётеборгский (от Гётеборг) гётеборжец гётеборжцы гётевский гётит (минерал) гёттингенский (от Гёттинген) гёттингенцы гигантозаврёнок гидролебёдка гидросамолёт гиенёнок гиенёночек гилёк (Даль) гильё гимнастёрка гипнотизёр склёзко (Даль) главарём [главарь] гладкошёрстный и гладкошёрстый глазёнки глазёночки глазёнушки глазоём (РСЯР) глёздалка – дорожка, прокатанная по льду (РСЯР) и (Даль) глёздовица (Даль) глёздать (Даль) глёк (Даль) глёско (Даль) глинозём глинозёмистый глинозёмный глинощебёночный глиссер и не рек. устар. глиссёр глотнёт [глотнуть] глумёж глумёжный (БСРЖ) глупёха (БСРЖ) глухарём [глухарь] глухарёнок глушённый, -ён, -ена (прич.) глушёный (прил.) гнёзда, гнёзд [гнездо] гнездовьё и гнездо’вье гнёздышко гнёт гнетёт [гнести] гнёт(ся) [гнуть(ся)] гниёт [гнить] гнильё, гнильём гнусёна (РСЯР) гнутоклеёный гнутьё, гнутьём гнуть(ся), гнёт(ся) говорённый, -ён, -ена гоголёк гоголёный голавлёвый (о рыбе) и гола’влевый голёшенький головёнка головёшка голодёр головнёвый головнёй [головня] гололёд гололёдица гололёдный голомёдный голубёнок голубо-блёсткий (И.Сев.) гольё (сущ.) гольём (нареч.) (простореч.) горбачёвец (НВРЛ) горбачёвский (от Горбачёв), но горбачом (горбач), кит горбачёвско-ельцинский (НВРЛ) горбачёвско-яковлевский (НВРЛ) горбачёвщина горбачёев (НВРЛ) горбылём [горбыль] горехлёст (РСЯР) горлодёр (простореч.) горно-пересечённый город-партнёр (НВРЛ) горьё (горе, беды) (РСЯР) горько-солёный госзаём госприёмка гостёк гостенёк гостёчек готовёж к праздникам (РСЯР) грабёж гравёр гравёрный грамотёшка гранатомёт гранатомётчик гранённый, -ён, -ена (прич.) гранёный (прил.) гранулёзный гранулёма графлённый, -ён, -ена (прич.) графлёный (прил.) грачёв-белодо’мский (СРВЖ) грачёвец (СГЖСССР) грачёвцы (СГЖСССР) гребе’нчатый гребён гребёный гребёнка гребёнки (феня) гребённый, -ён, -ена гребёночка гребёночный (РСЯР) гребёнчаный (РСЯР) гребёт, -ёшь [грести] гребёх гренаде’р, гренаде’ры и не рек. гренадёр, гренадёры гренаде’рский и не рек. гренадёрский грёб [грести] грёбан грёбанный (сленг) грёбка (РСЯР) грёбнутый грёбнуться бери грёбом (РСЯР) грёбший грёбывать (РСЯР) грёза, грёзы, грёз грёза-чародейка грёзер грёзерка грёзно (нареч.) грёзовиденье (Иг. Сев.) грёзовость (Иг. Сев.) грёзовый грёзофарс от грёзу (не сбудется) (РСЯР) грёзэрки гривопёрый (РСЯР) гримёр гримёрка (гримёрная комната) гримёрная гримёрный гримёрский гримёрша грифелёк грозновесёлый (РСЯР) громадьё громомётный (РСЯР) громыхнёт [громыхнуть] грубёж (НВМ) грубёхонек (РСЯР) грубодроблёный грубоизмельчённый грубошёрстный и грубошёрстый грудинорёберный грyженный и гружённый, -ён, -ена (прич.) гружёный (прил.} груздёвый груздём [груздь] грузнёхонек (РСЯР) грузнёшенек (РСЯР) грузонапряжённость грузоподъёмник грузоподъёмность грузоподъёмный грунтомёт группёха (БСРЖ) грызёт(ся) [грызть(ся)] грызнёй [грызня] грядёт грязёна (РСЯР) грязнённый грязнёхонький грязнёщенький грязно-жёлтый грязно-зелёный губёнка губёшку раскатать (СРВЖ) губодёрга (РСЯР) губошлёп (прост.) гувернёр гувернёрский гудёж (СРСЮЮ) гудёжный гудёт (3 л. ед. ч., нар.-поэт и прост. к гудит) гужёвка (вульг.) гулёж (НВРЛ) гулёкшить (БСРЖ) гулёна (прост.) гулёныш (РСЯР) гульнёт [гульнуть] (прост.) гумён (род. п. мн. ч. от гумно) гумённый гумёнце гумилёвский (от Гумилёв) гундёж (БСРЖ) гусёк гусёнок гусёночек гусёныш гусиноозёрский (от Гусиноозёрск) гусиноозёрцы густо-зелёный густонаселённость густонаселённый густотёртый густошёрстный и густошёрстый гущёный гэбьё (БСРЖ)     Д давёж давёжный (РСЯР) давнёхонько даёт(ся) [давать(ся)] даёшь (в знач. межд.) далеко’-далёко (В.Ч.) далеко’ и далёко (нареч.) или (отдалённое место) далёкий; далёк, далёко (прилаг.) далёко-далёко далёчник далёчница (Иг. Сев.) данке шён дарёный дать дёру даунёнок двадцатипятирублёвый двадцатирублёвый двадцатичетырёхвёсельный двадцатичетырёхчасовой двенадцатирублёвый двёрка (прост.) двоежёнство двулёгочный двулётный двухведёрный и доп. двухвёдерный двухвёрстка двухвёрстный двухве’сeльный и доп. двухвёсельный двухгнёздный двухзвёздный двухзвёздочный двухимённый двухколёсный двухлётная (листовёртка, бабочка) двухрублёвый двухсотрублёвый двух-трёхдневный (-трёхмесячный, -трёхнедельный) двушёрстный и двушёрстый двухъёмкостный дебёлить (РСЯР) дебёлый выговор (РСЯР) деверёк деверьё (РСЯР) деверьёв и дeверей [деверь] девушка-лётчик девьё (РСЯР) девятирублёвый дегтярёвка (СРВЖ) дезъёфикатор (В.Ч.) дезъёфикация (В.Ч.) дезъёфицированный текст (В.Ч.) декабрём [декабрь] декомпозёр делёж делёжка делёнка делёжник (РСЯР) денежно-расчётный денёк денёчек дёготь, дёгтя, дёгтю и т. д.  дергачёвец (СГЖСССР) дергачёвцы (СГЖСССР) дерёв (устар. род. п. мн. ч.  от де’рево) дерёвня (некультурный, невежливый тип) (О.К.) дерёт=орёт (громко поёт) огонь дёром дерёт по крышам (РСЯР) деревоклеёный дерзнёт [дерзнуть] десятивёрстка десятирублёвка десятирублёвый дерганёт [дергануть] дерёт(ся) [драть(ся)] детёнок детёночек детёныш дети-звёзды (НВРЛ) детприёмник децистрёмно (Е) дешёвенький дешёвенькое (О.К.) дешёвка дешёвый, дёшев дё (жилище нанайцев) дёготь дёготь (БСРЖ) дёгтебетон дёжи (мн. ч. от дежи) (обл.) дёжка [дежа] (обл.) дёма (БСРЖ) дёмич (БСРЖ) дёнышко (заготовка дна глиняного сосуда) (Вологда) дёр [задать дёру] дёра (БСРЖ) дёрг дёргалка дёрганный (прич.) дёрганый (прил.) дёрганье дёргать(ся) дёргом (РСЯР) дёрен (растение) дёренный, дёреновый дёрка (голый веник) дёрка ученику (РСЯР) дёрко бежит (РСЯР) дёрн дёрни дёрновое одеяльце (РСЯР) дёрнуть(ся) дёрнуть (СРСЮЮ) дёсенный дёсны, дёсен, дёснам [десна] дёшев дёшево дёшево-актёрский (НВРЛ) дзё-дан (НВРЛ) диагонально-перекрёстный дикарём [дикарь] дикобразёнок диктиокаулёзы (болезни) динозаврёнок динозаврёночек дирижёр дирижёрский дирижёрско-хоровой дирижёрство дисковёрт (БСРЖ) дисконтёр дитё, дитёй (прост. обл.) дли’нен, не рек. длинён длиннозёрный длинношёрстный и длинношёрстый днёвка днёвочный (РСЯР) днёвывал я там (РСЯР) днём [день] днём (нареч.) добелённый, -ён, -ена доберёг [доберечь] добережёт [доберечь] доберёт(ся) [добрать(ся)] добёр кр. прил. (РСЯР) доборонённый, -ён, -ена добредёт [добрести] добрёл [добрести] добьёт [добить] добьётся [добиться] доведённый, -ён, -ена доведёт(ся) [довести(сь)] довезённый, -ён, -ена довезёт [довезти] довернёт(ся) [довернуть(ся)] довершённый, -ён, -ена довёз [довести] довёзший довёл [довести] довёлся [довестись] довёрнутый довёрстка (РСЯР) довёрт (РСЯР) довёртка (РСЯР) довёртывать(ся) довоёвывать(ся) доволочённый, -ён, -ена доволочёт(ся) [доволочь(ся)] довооружённый, -ён, -ена доврётся [довраться] (разг.) довьёт(ся) [довить(ся)] догниёт [догнить] договорённость договорённый, -ён, -ена догрёб [догрести] догребённый, -ён, -ена догребёт [догрести] догрёбши(й) [догрести] догружённый, догружён, -а,-о догрызёт [догрызть] додаёт(ся) [додавать(ся)] доделённый, -ён, -ена додерёт(ся) [додрать(ся)] до’енный и доёный доёрзнул (Даль) дождеприёмник дождёвка дождём [дождь] дождётся [дождаться] дождь-пустёга дожёванный, -ан, -ана дожёвывание дожёвывать(ся) дожёг [дожечь] дожёгший дожжённый, -ён, -ена дожжёт [дожечь] доживёт [дожить] дожнёт [дожать] дожрёт [дожрать] (прост.) дожуёт [дожевать] дозвёздное (вещество) дозёр дознаёт(ся) [дознавать(ся)] дозна’ет(ся) [дознать(ся)] дозовётся [дозваться] доизберёт дойдёт [дойти] доймёт [донять] докалённый, -ён, -ена докладёт [докласть] доклёванный, -ан, -ана доклёвывать(ся) докопчённый, -ён, -ена доктринёр докринёрский доктринёрство докуёт [доковать] долбанёт [долбануть] (прост.) долбёж долбёж (СРСЮЮ) долбёжка долбёжка (СРСЮЮ) долбёжник долбёжный долбёнка (ковш-долбёнка) (НВРЛ) долблёнка (лодка, выдолбленная из бревна) долблённый, -ён, -ена (прич.) долблёный (прил.) долгопёр долгопёрый (РСЯР) долгошёрстный и долгошёрстый долёживать(ся) дольёт [долить] домахнёт [домахнуть] домётанный, -ан, -ана дометённый, -ён, -ена дометёт, домёл [домести] дометнёт [дометнуть] домётший домётывание домётывать(ся) домнёт [домять] домовёнок домовёночек домощённый, -ён, -ена донёс(ся) [донести(сь)] донесённый, -ён, -ена донесёт(ся) [донести(сь)] донёсший(ся) донырнёт [донырнуть] дообтёсывать (НВРЛ) землю ори – доорёшься до хлеба.  дооснащённый, -ён, -ена допасённый, -ён, -ена допасёт [допасти] допёк(ся) [допечь(ся)] допёкший(ся) допёр (пёр-пёр и наконец допёр) (Е) допёр(ся), допёрла(сь), допрёт(ся) [допереть(ся)] допёрло (Е) допёртый допёрший(ся) допечённый, -ён, -ена допечёт(ся) [допечь(ся)] доплёвывать (Даль) доплёл(ся) [доплести(сь)] доплёскивание доплёскивать(ся) доплеснёт(ся) [доплеснуть(ся)] доплёснутый, доплёснут, -а, -о доплетённый, -ён, -ена доплетёт(ся) [доплести(сь)] доплётший(ся) доплывёт [доплыть] допоёт(ся) [допеть(ся)] дополётный доползёт [доползти] доппаёк допрядённый, -ён, -ена допрядёт [допрясть] допьёт(ся) [допить(ся)] доразмещённый, -ён, -ена дорастёт [дорасти] доращённый, -ён, -ена дорвёт(ся) [дорвать(ся)] досберёт [дособрать] досверлённый, -ён, -ена доскакнёт [доскакнуть] доскрёб(ся) [доскрестись)] доскребёт(ся) [доскрести(сь)] доскрёбки доскрёбший(ся) доскрёбывание доскрёбывать(ся) доскрёбыши (РСЯР) досмолённый, -ён, -ена никак не доснёшь (РСЯР) досоздаёт(ся) [досоздавать(ся)] досо’ленный и досолённый, -ён дососёт(ся) [дососать(ся)] досочинённый, -ён, -ена достаёвщина (БСРЖ) достаёт(ся) [доставать(ся)] достёганный достёгивать(ся) достёжка достоёвщинка (Е) дострижёт(ся) [достричь(ся)] досьe (неправ. досьё) досягнёт [досягнуть] дотёкший дотрёп (РСЯР) дотрёпка (РСЯР) дотёпа (К. Чук.) дотёр(ся), дотёрла(сь), -ло(сь) [дотереть(ся)] дотёртый, дотёрт, -а, -о дотёрший(ся) доткёт(ся) [доткать(ся)] дотолчёт(ся) [дотолочь(ся)] дотрёт(ся) [дотерёть(ся)] дотушёванный дотушёвывать(ся) доту’шенный; доту’шен, -а, -о (доту’шенный пожар) дотушённый, -ён, -ена (дотушённое мясо) дохлёбанный дохлёбывать дохнёт от дохну’ть — (сделать один выдох), но до’хнет (от до’хнуть — умирать, околевать) доцвёл [доцвести] доцветёт [доцвести] дочёл книгу (РСЯР) до чёрта до чёртиков дочёсанный, -ан, -ана дочёсывать(ся) дочёт [дочесть] (Даль) дочётливый (Даль) дочтённый, -ён, -ена (Даль) дохлёнок (Даль) дохлёныш (РСЯР) дошагнёт [дошагнуть] дошвырнёт [дошвырнуть] дошёл [дойти] дошколёнок дошлёт(ся) [дослать(ся)] дошьёт [дошить] драконёнок драконёночек драконёныш драньё дранкулёз (болезнь) драпанёт [драпануть] драчёна древошёрстный дрема и дрёма (1) дремота, 2) вид трав) дрёманое (око) дрёмный дрена’жем [дренаж] в профес. речи дренажём дробемётный дроблёнка (дроблённое зерно) дроблённый, -ён, -ена (прич.) дроблёный (прил.) дрождёнка (Даль) дрожжёванный дроздёнок, -очек дрофёнок дрочёна (омлет с муко’й) дрочёнок дрочёный дрябьё (РСЯР) дружьё дублёнка (дублёный полушубок) дублённый, -ён, -ена (прич.) дублёный (прил.) дублёр дублёрский дублёрша дубьё, дубьём (прост.) дулёвец (СГЖСССР) дулёвский (от Дулёво) дулёвцы (СГЖСССР) дурак внагнёт (РСЯР) дурачьё, дурачьём дурёза дурёзина дурёзинка дурён дурёха (прост.) дурнёхонек дуроплёт (РСЯР) дутьё, дутьём духоподъёмен духоподъёмный душёнка дык-ёлы-палы (Е) дыхнёт [дыхнуть] дьяволёнок дьяволёночек дяди-Стёпин дядьёв (р.п. дядья) дятлёнок дятлёночек     Е едрён батон (СРСЮЮ) едрёна кочерыжка (Е) едрёный едрёныть (Е) её (р. и в. от она) еёный = её «Новый Крокодил», № 6, 2004) ежедённый ектеньёй (церк.) [ектень`я] епитимьёй (церк.)[епитимья] ербогачёнец ербогачёнцы ехидно-ёрнический, -ое ехнёт (ехнуть) (БСРЖ) ещё (нареч. в значении кроме того, более: повтори ещё раз; иди ещё скорее; в отличие от безударной частицы еще с другим значением: поезд еще не пришёл; ни одного письма еще не получил) ещё бы ещёжды (ещё раз) (Даль) ещё как ещёкать (К. Чук.) ещём (я иду за е.) (К. Чук.)     Ё ёllow = жёлтый (англ. yellow) ёmaker (русско-английское – внедряющий «ё» в печать) (В.Ч.) ёглить (обл. метаться от боли) ёдельник (ёфикатор) ёделя (ёфикатор) ёдна (В.Д.) ёж а) зверёк отряда насекомоядных класса млекопитающих, б) противотанковое или противопехотное сооружение, в) в значении наречия «ежом» — торчком, как у ежа (о волосах, шерсти и т.п.), г) морской ёж — беспозвоночное животное типа иглокожих ёжик а) уменьшительно-ласкательное к «ёж» в 1-м значении, б) коротко остриженные, стоящие торчком волосы, в) в значении наречия «ёжиком» — торчком (о волосах) ёжёднёвник (неологизм проф. И.Г. Добродомова, то же, что склёротник (см.) ёжики-рыжики ёжиков пасти (СРСЮЮ) ёжистое («У») ёжистый (Даль) ёжить, ёжу, ёжишь (морщить, стягивать (губы, нос, лицо), сводить (плечи), поводить, пожимать ими) ёжиться, ёжусь, ёжишься: а) пожиматься всем телом (от холода, болезни и т.д.); б) стесняться, дичиться, быть в нерешительности, колебаться ёжки-мошки ёж-рыба ёж твою сто двадцать (Е) ёз (плетень) (В.Д.) ёзгать (обл. ёрзать) ёйный=её ёк (татарск. нет) ёк (селезёнкой ёк да ёк) ёканье а) действие по глаголу «ёкать» в значении (б), а также звуки этого действия, б) произношение безударного Ё после мягких согласных: полё, горё, вынёсу ё-ка-лэ-мэ-нэ (СРСЮЮ) ё-ка-лэ-мэ-нейка (Е) ёкарный бабай ёкать, ёкаю, ёкну, ёкаешь, ёкнешь: а) издавать неопределённые, отрывистые звуки, напоминающие звуки при икоте, б) замирать, сжиматься от испуга, от неожиданности и т.п. (сердце ёкает), в) произносить звук Ё ёкаргана’ (межд. басс. рек Лены и Ангары) ёкаться (татарск. отнекиваться) (Даль) ёк-макарёк ёкнуть, ёкнуло (однократный вид к «ёкать» в значении а) ёкнуться (БСРЖ) ёксель-моксель (СРСЮЮ) ёктать (ёкать) (Даль) ёкнуть (Даль) ёкрос (Л. Беленький) - макрос для полуавтоматической расстановки в тексте буквы Ё ёктун (Даль) ёктунья (Даль) ёктуха (Даль) ёл (м.р. четырёхвесельный какбас) (Даль) ёла (обл.) (ж.р. шлюпка) (Даль) ёла (обл.) (удача, счастье) (Даль) ёлзать (Даль) ёлка, ёлки, ёлок, ёлкам: а) то же, что «ель», б) срубленная или украшенная ель в праздник Нового года или Рождества, детский новогодний или рождественский праздник с песнями, танцами, играми вокруг украшенной ёлки, в) в значении наречия «ёлкой», «в ёлку» — то же, что ёлочкой», «в ёлочку») ёлкий (Даль) ёлки-моталки (СРСЮЮ) ёлки-палки ёлкин (БСРЖ) ёлкин корень (СРСЮЮ) ёлкин пень (СРСЮЮ) ёлколесье (НВМ) ёловый (лес) ёлочка, ёлочек, ёлочкам а) уменьшительно-ласкательное к «ёлка», молодая ёлка, б) крытая площадка, с доильными станами, расположенными с двух сторон под углом к проходу, в) в значении наречия «ёлочкой», «в ёлочку» — в виде линии, от которой по обе стороны отходят под углом короткие параллельные чёрточки, г) о всякого рода узорах — вышивке, узорной кладке паркета, кирпича и т.д.  ёлочка (БСРЖ) ёлочный (прил. к «ёлка», во 2-м значении)) ёлочь, ёлчь (обл.)(осадок грязной соли) ёлс (леший) (Даль) ёлха (ольха) (Даль) ёлы-палы (БСРЖ) ём а) ём пчелы’ (взятка), б) ёму много, т.е. плата очень высокая, в) ходить по ёму, т.е. по найму.  ём (мест. при ём (при нём) в один ём (РСЯР) ёма (ростовщик) ёмка – взятие (РСЯР) ёмкий, ёмок, ёмка, ёмко (способный вместить большое количество чего-либо) ёмкостной (О.К.) ёмкость а) способность вместить в себя определённое количество чего-либо, вместимость, б) мн. ч. (ёмкости, -ей) — сосуды для хранения чего-либо; меры ёмкости — меры жидких и сыпучих тел ё-моё (межд.) ёмоёчить (тусоваться) (Вал. Лошкина) ёмче с. ст. ёмкий (Даль) ёмщик (ростовщик) (Даль) ёмщица (Даль) ён (БСРЖ) и (Даль) ёнка (женщина-однодворка) (Даль) ённый (БСРЖ) ёнтузиа’ст (шутл. энтузиаст) (В.Ч.) ёный (БСРЖ) ё-пе-ре-сэ-тэ (Е) ёперный театр (ё произносится либо с экспрессией (иногда - некоторой задержкой), либо протяжно: аналогично , в этом случае часто сочетается с усилительной частицей  ну :  Ну ё-о-о-перный театр! ).  ёпирайт (Л. Беленький) - специальный значок для полностью ёфицированного издания ёпонец (НВМ) ёпония (НВМ) ёпонский (НВМ) ёпонцы (НВМ) ЁПРСТ (Е) ёра (беспутный, тунеядный человек) ёра-ма’ра (НВРЛ) ёрга, ёрзала, ёрзалка (кто ёрзает) (Даль) ёргань (Усачёва В.В. Славянская ихтиологическая терминология. М., 2003) ёргать ёрдать (БСРЖ) ёрза (РСЯР) ёрзается (Даль) ёрзала (Даль) ёрзалка (Даль) ёрзанье (Даль) ёрзнул (Даль) ёрзать, ёрзаю, ёрзаешь (сидя, беспокойно двигаться, ворочаться) (взъёрзнуть, въёрзнуть, доёрзнуть, заёрзать, изъёрзать, наёрзать(ся), объёрзать, отъёрзать, поёрзать, подъёрзнуть, проёрзать, разъёрзать(ся), съёрзнуть, уёрзнуть) (Даль) ёрзкий (РСЯР) ёрить (БСРЖ) ёрка ёрник а) беспутный человек, повеса, озорник; б) кустарник и чахлый лес (Даль) ёрничанье (Даль) ёрничать, ёрничаю, ёрничаешь ёрнический, -ая, -ое (свойственный ёрнику) ёрнически-зага’дочно (НВРЛ) ёрнически-коке’тливый (НВРЛ) ёрничество (Даль) ёровать (шевелить, шараборить) ёрох (БСРЖ) ёрочный ёрш а) мелкая пресноводная рыба семейства о'куневых (но окунёвое филе), б) щётка для чистки ламповых стёкол, бутылок, частей механизмов и т.д., в) большой зазубренный железный гвоздь, г) причёска из коротких волос, зачёсанных, поднятых кверху д) в значении наречия «ершо’м» — торчком (о волосах) ёрш (смесь водки с пивом) ёршик (уменьшительное к ёрш) ёта’тор (компьютерная программа ёфикации текста) ё-твоё (В.Ч.) ёухикко (финский и карельский смычковый муз. инструмент) ёфика’тор (сторонник ёфикации) (В.Ч.) ёфика’ция (печатание буквы Ё с точками) (В.Ч.) ёфи’л (В.Ч.) ёфи’лики (В.Ч.) ёфи’лия (В.Ч.) ёфо’б (В.Ч.) ёфо’бики (В.Ч.) ёфо’бия (В.Ч.) ёханый, ёхарный (эвфемизмы) ёханый бабай (междом.) ёхмана (междом.) ёхнуть (сдвинуть с места) (Даль) ёхор (бурятские и монгольские хороводные песни) ёхор-да-ёхор-та (В. Май.) ёхорить (В. Май.) ёхорничать (В. Май.) ёчки (грудь) (Даль) ёшка (буква, буквица, литера, графема Ё) ёшколюб (В.Ч.) ёшколю’бие (В.Ч.) ёшконенавистник, -ца (В.Ч,) ёшконенави’стничество (В.Ч.) ёшконе’нависть (В.Ч.) ёшкофо’б (В.Ч.) ёшкофоби’ня (В.Ч.) ёшкофобинюшка (и) (В.Ч.) ёшкофо’бия (В.Ч.) ёш твою мышь (эвф.) (СРСЮЮ)     Ж жабёнок жабёныш (Е) жаве’лем и (разг.) жавелём [жавель] жалёна (РСЯР) жалёнушка (РСЯР) жалёный (РСЯР) жалнёр (линейный солдат на учении, параде) жалнёрский жалобнёхонек (РСЯР) жалобнёшенек (РСЯР) жамкнёт (жамкать) жарёнка жатьё (Даль) жданьё (РСЯР) жданьём (РСЯР) ждёт не дождётся ждёт-пождёт ждёт(ся) [ждать(ся)] желёз (род. п. мн. ч. от железа’ — же’лезы, железа’м) желе’зка 1) небольшая железная пластинка; 2) азартная карточная игра желёзка (уменьшит. к железа’) желтёхонек желтёшенек (В.Д.) желтозём желтощёк желудёвый и (обл.) желудо’вый жeнщина-шофёр жерёбая (жерёбая кобыла) жеребёнок жеребёнок-первак (РСЯР) жеребёнок-прошлогодок (РСЯР) жеребёночек жерёбость жеребьёвка жеребьёвщик жеребьёвый жерёха (еда) (прост.) жестылёвец (В.Ч.) жестылёвцы (В.Ч.) жёв (РСЯР) жёванный, -ан, -ана (прич.) жёваный (прил.) жёваный-пережёваный жёвка р. мн. жёвок жёг(ся) [жечь(ся)] жёглый (РСЯР) жёгший(ся) жёлоб, мн. ч. желоба жёлт, жёлто жёлтость (В.Д.) жёлтенький жёлто-голубой жёлто-красно-фиолетовый (НВРЛ) жёлто-красный жeлтопёрый жёлто-серый жёлтопузёнок жёлтый жёлудь, жёлудя, мн. ч. жёлуди жёлчно-ка’менный и же’лчно-ка’менный жёлчность и же’лчность жёлчный и же’лчный жёлчна жёлчь и жeлчь жёнка, жёнки, р. мн. жёнок жён-премьeр жёнушка жёны, жён и т. д. [жена] жёны-мироносицы жёпис (аббр. жёны писателей, «ЛГ», №5, 2005) жёрдочка жёрнов жёсткий, -ая, -ое жёсткозакреплённый жёстко-нежно жёстко-пристра’стно (НВРЛ) жёсткореалисти’чный (НВРЛ) жёсткость жесткошёрстный и жесткошёрстый жёсток, жёстко (но жесто’к) жёстче жжёнка (напиток) жжёнка (порошок) жжённый, жжён (прич.) жжёночка жжёный (прил.) жжёт(ся) [жечь(ся)] живе’те (название буквы) живёте-можете живётся (безличн.) живёхонький, -нек, -нька живёхонько живёшенький, -нек, -нька живёт [жить] жив-живёхонек живодёр живодёрка живодёрная шкура (РСЯР) живодёрничать живодёрня живодёрство живодёрствовать живорождённый животворённый, -ён, -ена живьё (Даль) живьём живьём (нареч.) жиганёт [жигануть] (прост.) жигулёвский, -ое жигулёнок жидёнок (Е) жидёныш жизнёнка («У») жиклёр жильё, жильём жиманёт [жимануть] жирафёнок жирафёночек жирдёла жирёна (РСЯР) жирёха (РСЯР) жирнозём жирорасчёт(ы) житие’, житие’м житиё-бытиё («ЛГ») житьё, житьём житьё-бытьё, житьём-бытьём житьё-убытьё (НВМ) жлобьё жмёт(ся) [жаться] жнеёй [жнея] жнёт(ся) [жать(ся)] жнивьё, жнивьём жолне’р, жолне’рский и жолнёр, жолнёрский жонглёр жонглёрский жонглёрство жонглёрша жраньё, жраньём (Даль) жрёт [жрать] (прост. вульг.) жуёт [жевать] жуётся [жеваться] жуклёнок (РСЯР) жульё, жульём журавлём [журавль] журавлёнок журавлёночек журёный [журить]     З забелённый, -ён, -ена заберёт(ся) [забрать(ся)] заблатнённый (БСРЖ) заблёванный, -ан, -ана заблёвывать(ся), -аю, -ана заблюёт [заблевать] заборонённый, -ён, -eна забредёт [забрести] забре’дший забубённо (К. Чук.) забубённый (разг.) забурённый, -ён, -ена забытовлённый, -ён, -ена забытьё, забытьём забьёт(ся) [забить(ся)] заведённый, -ён, -ена заведёт(ся) [завести(сь)] завезённый, -ён, -ена, неправ. заве’зенный завезёт [завезти] завернёт(ся) [завернуть(ся)] завершённый, -ён, -ена завёз [завезти] завёзший завёл(ся) [завести(-сь)] завёрнутый; завёрнут, -а, -о завёрнутый (СРСЮЮ) завёрстанный завёрстывать(ся) завёртка завёрточница завёрточный завёртчица завёртывание завёртывать(ся) завёртыш (Даль) завлёк(ся) [завлечь(-ся)] завлёкший(ся), завлёкши [завлечь(ся)] завлечённый, -ён, -ена завлечёт(ся) [завлечь(ся)] заводнённый, -ён, -ена завоёванный, -ан, -ана завоёвывание завоёвывать(ся) заволочённый, -ён, -ена заволочёт(ся) [заволочь(ся)] заворожённо (нареч.) заворожённость заворожённый, -ён, -ена заврётся [завраться] за всё про всё завьёт(ся) [завить(ся)] заглублённость заглублённый, -ён, -ена заглотнёт [заглотнуть] заглушённый, -ён, -ена, не рек. заглу’шенный загнёт(ся) [загнуть(ся)] загниёт [загнить] загноённый, -ён, -ена заговорённый, -ён, -ена заголённый, -ён, -ена заграждённый, -ён, -ена загрёб [загрести] загрёба (жадный и т.п. тип) (О.К.) загребённый, -ён, -ена загребёт(ся), загрёб(ся) [загрести(сь)] загрёбистый (прост.) загребёшь [загрести] (вульг.) загрёбший [загрести] загромождённый, -ён, -ена загружённость загружённый, -ён, -ена и загру’женный загрызёт [загрызть] загрязнённый, -ён, -ена загумённый загущённый, -ён, -ена задаёт(ся) [задавать(ся)] зада’ренный и задарённый, -ён, -ена задёва, задёв (РСЯР) задёрганность задёрганный, -ан, -ана задёргать(ся) задёргивание задёргивать(ся) задёржка – занавеска (РСЯР) и (Даль) задёржковый (Даль) задёржный занавес (РСЯР) задерёт(ся) [задрать(ся)] задёрнутый задёрнуть(ся) задешево и задёшево задненёбный задом наперёд задотёр (НВРЛ) задохнётся [задохнуться] задразнённый, -ён, -ена задрёмывание задрёмывать задрёпа (РСЯР) задрочённый («ЛГ» №52, 2003) задурённый, -ён, -ена, неправ. заду’ренный задымлённость задымлённый, -ён, -ена и доп. зады’мленный заершённый, -ён, -ена заёжился (Даль) заёжить (РСЯР) заёжиться заёкать (сердце заёкало) (разг.) заём (займ — неправ.), займа заёмничать (РСЯР) заёмный заёмное письмо заёмчивый (РСЯР) заёмщик заёмщица заёрдывать (БСРЖ) заёрзать, -ал (Даль) заёрзанный («У») заёршина (щука) (В.Д.) зажгёна (К. Чук.) заждётся [заждаться] зажелчёный, -ён, -ена зажёг(ся) [зажечь(-ся)] зажёвывать (Е) зажёгши(сь) зажёгший(ся) зажёлклый (РСЯР) зажжённый, -ён, -ена зажжёт(ся) [зажёчь(ся)] заживёт(ся) [зажить(ся)] заживлённый, -ён, -ена зажелчёный, зажелчён зажмёт(ся) [зажать(ся)] зажнёт [зажать] зажрётся [зажраться] зажуёт [зажевать] зажрёшь [зажрать] за здорово живёшь зазёвываться зазеленённый, -ён, -ена заземлённость заземлённый, -ён, -ена зазнается [зазнаться] зазнаётся [зазнаваться] зазовёшь [зазвать] зайдёт [зайти] займёт(ся) [занять(ся)] закабалённость закабалённый, -ён, -ена заказёниться (НВРЛ) закалён, закалённа (кр. ф. прил.) (выносливый) закалённый, -ён, -ена (прич.) закалённо («У») закартёжная ссора (РСЯР) закислённость закислённый, -ён, ена заклёванный, -ан, -ана заклёвывать(ся) заклеймённый, -ён, -ена заклёклый заклёкнувший заклёкнуть, заклёкнул заклёкла заклёкший заклёпанный заклёпка заклёпочно-сварной заклёпочный заклёпывание заклёпывать(ся) заклинённый, -ён, -ена и закли’ненный заклюёт(ся) [заклевать(ся)] заключённый, -ён, -ена заклянёт(ся) [заклясть(ся)] закогчённый, -ён, -ена заколёбывать (БСРЖ) заколёбываться (БСРЖ) законнорождённый закопённик (Даль) закопёрщик закопёрщица закопчённый, -ён, -ена зако’шенный и закошённый закрадётся [закрасться] закреплённость закреплённый, -ён, -ена закрепощённый, -ён, -ена закривлённый -ён, -ена закруглённость закруглён, -ённа (кр. ф. прил.) (стройный, законченный) закруглённый, -ён, -ена (прич.) закружённый, -ён, -ена и закру’женный закручённый, -ая, -ое (Мих. Кузьмин) закуёт [заковать] залёг [залечь] залёгши(й) заледенённый залёживаться залёжка залесённость залесённый, -ён, -ена залёт залёт (СРСЮЮ) залётистый (РСЯР) залётка, залёточка (ласкат.) залётная и зале’тная (СРСЮЮ) залётный и зале’тный (т.е. за пределом к.л. лет) (Даль) залётчик (Е) залётчик (СРВЖ) залётчица (БСРЖ) залжёт(ся) [залгать(ся)] залоснённый залужённый, -ён, -ена залупнётся [залупнуться] (вульг.) залучённый, -ён, -ена зальёт(ся) [залить(ся)] замалёванный, -ан, -ана замалёвывать(ся) зама’ненный и заманённый, -ён, -ена замахнётся [замахнуться] замежёванный замежёвывание замежёвывать(ся) замелённый, -ён, ена заменённый, -ён, -ена заметённый,-ён, -ена заметёт [замести] замещённый, -ён, -ена замёл [замести] замёрз, замёрзла, -ло [замёрзнуть] замёрзлый замёрзнет [замёрзнуть] замёрзнуть замёрзший замёрлый (РСЯР) замёт замётанный, -ан, -ана замётано замётано (СРСЮЮ) замётно на дворе (РСЯР) замётное погодье (РСЯР) замётывай невод (РСЯР) замётывать(ся) замирённый, -ён, -ена замкнёт(ся) [замкнуть(ся)] замнёт(ся) [замять(ся)] замолённый, -ён, -ена заморённый, -ён, -ена замощённый, -ён, -ена замрёт [замереть] замутнённость замутнённый, -ён, -ена занаряжённый, -ён, -ена и занаря’женный занёс [занести] занесённый, -ён, -ена занесёт [занести] занесётся [занестись] занёсся [занестись] занёсший(ся) [занести(сь)] заночёвка (РСЯР) заночёвывать заозёрец (РСЯР) заозёрновец (СГЖСССР) заозёрновцы (СГЖСССР) заозёрный заорёт [заорать] (разг.) заострённость заострённый, -ён, -ена западёт [запасть] западнёй [западня] запалённый, -ён, -ена запасённый, -ён, -ена запасёт(ся) [запасти(сь)] запа’хнет [запа’хнуть] запахнёт(ся) [запахну’ть(ся)] запелёнутый; запелёнут, -а, -о и запелёнатый запелёнывать(ся) запёк(ся) [запeчь(ся)] запёкший(ся), -ши(сь) запёр(ся), запрётся [запереть(ся)] запечатлённый, -ён, -ена запечённый, -ён, -ена запечёт(ся) [запeчь(ся)] запихнёт [запихнуть] заплачённая рубаха (РСЯР) заплеснёт [заплеснуть] заплетённый, -ён, -ена заплетёт(ся) [заплести(сь)] заплёванный, -ан, -ана заплёвывание заплёвывать(ся) заплёвыш (РСЯР) заплёл(ся) [заплести(сь)] заплёсканный, -ан, -ана заплёскивание заплёскивать(ся) заплёснутый; заплёснут, -а, -о заплёсок (РСЯР) заплётный (РСЯР) заплётший(ся) [прич. к заплести(сь)] заплывёт [заплыть] заплюёт [заплевать] запнётся [запнуться] запо’ем (нареч.) запоём, запоёт [запеть] запоённый, -ён, -ена и запо’енный заполёванный, -ан, -ана заползёт [заползти] заполонённый, -ён, -ена запоро’шенный и запорошённый, -ён, -ена запорхнёт [запорхнуть] започём (БСРЖ) запрёт(ся) [запереть(ся)] запрещённый, -ён, -ена запропадёт [запропасть] запру’женный и запружённый, -ён, -ена запря’г (произносится и запрёг) [запрячь] запря’гся (произносится и запрёгся) [запрячься] запря’гший (произносится и запрёгший) запрядёт [запрясть] запряжённый, -ён, -ена запряжёт(ся) [запрячь(ся)] запулённый, -ён, -ена запушённый, -ён, -ена запу’щенный и (поэт.) запущённый запылённость запылённый, -ён, -ена запьёт [запить] заражённость заражённый, -ён, -ена зарастёт [зарасти] заращённый, -ён, -ена зарвётся [зарваться] заревёт [зареветь] зарёв (РСЯР) зарёванный, -ая зарёвыш (РСЯР) зарёй [заря] зарёкся [заречься] зарёкшийся заречётся [заречься] зареше’ченный и зарешечённый, -ён, -ена заржёт [заржать] зарождённый, -ён, -ена заронённый, -ён, -ена заря’женный и заряжённый, -ён, -ена засдаётся [засдаваться] засёдлываться засёкший заселённость заселённый, -ён, -ена засеребрённый, -ён, -ена засерьёзненый засерьёзнить засечённый, -ён, -ена и (наказанный поркой — также засeченный), засечёт(ся), засёкся [засечь(ся)] засинённый, -ён, -ена заскребённый заскрёбшийся заскрёбыш (Е) заскребёт(ся), заскрёб(ся) [заскрести(сь)] заслащённый, -ён, -ена заслеплённый, -ён, -ена заслонённый, -ён, -ена заслюнённый, -ён, -ена засмеётся [засмеяться] засмолённый, -ён, ена засне’женный и заснежённый заснёт [заснуть] заснуёт [засновать] засолённость засо’ленный и засолённый, -ён, -ена засорённость засорённый, -ён, ена засосёт [засосать] засрамлённый, -ён, -ена застаёт [заставать] застёгивание застёгивать(ся) застёгнутый застегнёт(ся) [застегнуть(ся)] застёб застёбывать (Е) застёжечка застёжка застеклённый, -ён, -ена застолблённый, -ён, -ена застрёмать (БСРЖ) застрёмиться (Е) застыжённый, -ён, -ена засухарённый за счёт (кого, чего) засьёмка затаврённый, -ён, ена затаённо затаённость затаённый, -ён, -ена (прич.) затаён, затаённа (её грусть затаённа) (прил.) затвержённый, -ён, -ена и затве’рженный затенённый, -ён, -ена затереблённый, -ён, -ена затерёбыш (РСЯР) затемнённый, -ён, -ена затетёха (Даль) затечёт, затёк [затечь] затёк, затечёт [затечь] затёка (РСЯР) затёкши затёкший затёмок – тёмный угол (РСЯР) затёмки – недостаток в свете (РСЯР) затёпаться (РСЯР) затёр(ся), затёрла(сь), затрёт(ся) [затереть(-ся)] затёртый; затёрт, -а, -о затёрханный затёрший(ся) затёс затёсанный, -ан, -ана затёска затеснённый, -ён, -ена затёсывание затёсывать(ся) заткёт(ся) [заткать(ся)] заткнёт(ся) [заткнуть(ся)] затолкнёт [затолкнуть] затолчёт(ся) [затолочь(ся)] затормо’женность и заторможённость затормо’женный и заторможённый, -ён, -ена затормошённый, -ён, -ена (разг.) зато’ченный (прич. от заточить — заострить) заточённый, -ён, -ена (прич. от заточить — подвергнуть заточению, заключению, ссылке) заточён и зато’чен затретьё (Даль) затрёпок (РСЯР) затрёпанный, -ан, -ана (прич.) затрёпан, -анна (прил.) затрёпывать(ся) затрёт(ся) [затереть(ся)] затруднённо затруднённость затруднённый, -ён, -ена затряс (произносится и затрёс) [затрясти] затрясённый затрясёт(ся) [затрясти(сь)] затряс(ся) (произносится и затрёс(ся) [затрясти(сь)] заусёнок (РСЯР) затушёванный, -ан, -ана затушёвка затушёвывание затушёвывать(ся) заушённый; заушён захарчёванный (БСРЖ) захламлённость захламлённый, -ён, -ена захламощенный и захламощённый, -ён, -ена захлебнётся [захлебнуться] захлёб захлёбка (РСЯР) в захлёст (РСЯР) захлёстный (РСЯР) захлёсток (РСЯР) захлёстом (РСЯР) захлёбный (НВРЛ) захлёбывание захлёбывать(ся) захлёстанный, -ан, -ана захлестнёт(ся) [захлестнуть(ся)] захлёстнутый захлёстнут, -а, -о захлёстывать(ся) захоро’ненный и захоронённый зацвёл [зацвести] зацветёт [зацвести] зачёл [зачесть] зачёркивание зачёркивать(ся) зачеркнёт [зачеркнуть] зачёркнутый; зачёркнут, -а, -о зачернённый, -ён, -ена зачерпнёт(ся) [зачерпнуть(ся)] зачёс зачёсанный, -ан, -ана зачёсывание зачёсывать(ся) зачёт зачётка (зачётная книжка) зачётный зачехлённый, -ён, -ена зачи’ненный и зачинённый зачнёт(ся) [зачать(ся)] зачтённый, -ён, -ена зачтёт(ся) [зачесть(ся)] зачумлённый, -ён, -ена зачучелённый (САМ) зашёптанный зашёптывание зашёптывать(ся) зашвырнёт [зашвырнуть] зашёл [зайти] зашибёт(ся) [зашибить(ся)] зашлёпанный зашлёпать зашлёт [заслать] зашпаклёванный и зашпатлёваный, -а, -о зашпаклёвка и зашпатлёвка зашпаклёвывать(ся) и зашпатлёвывать(ся) заштабелёванный заштабелёван, -а, -о заштемпелёванный; заштемпелёван, -а, -о заштемпелёвывание заштемпелёвывать(ся) зашьёт(ся) [зашить(ся)] защебенённый, -нён, -нена защемлённый, -ён, -ена защеплённый, -ён, -ена защёканец (БСРЖ) защёканка (БСРЖ) защёкать (карамельку) (К. Чук.) защёлка защёлкать (начать щёлкать) защелка’ть (замучить щелчками) (простореч.) защёлкивание защёлкивать(ся) защёлкнутый защёлкнуть(ся) (запереться) защёчный (щека) (защёчные мешки) защипнёт(ся) [защипнуться)] защищённость защищённый, -ён, -ена звезданёшь, -ёт (звездануть) (НВРЛ) звездолёт звездолётчик звездочёт звездочёты (рыбы) зверёк зверёнок зверёныш зверьё, зверьём звёздка (РСЯР) звёздник, -ца (астроном, спец. по звёздам) звёздно-полосатый звёздность звёздный звёздочка звёздчатый (РСЯР) звёзды, звёзд и т. д.  звёнышко звонарём [звонарь] звyкоприёмник звукорежиссёр звурёныш (БСРЖ) здоровёхонький здоровёшенек здоровёшенький здоров-здоровёшенек здорово живёшь (живёте) зебрёнок зебрёночек зев и зёв зевнёт [зевнуть] зелёненькая (3 рубля) зелёненький билет зеленёхонький зелёнка 1) лекарство наружное, 2) зелёный массив, откуда стреляют по позиции говорящего зелёно-багровый зелёноборец (В.Ч.) зелёноборцы (В.Ч.) зелёно-бурый зелёновец (СГЖСССР) зелёновцы (СГЖСССР) зелёно-бро’нзовый (НВРЛ) зелёно-голубой зелёно-жёлтый зелёно-игольчатая зелёно-красный зелёно-лиственный зелёно-любопы’тный (НВРЛ) зелёно-оли’вковый (НВРЛ) зелёно-серый зелёно-синий зелёность зелёный зелёный (сущ. вульг.) зелёшенек землетрясённый (город) землёю, землёй [земля] землисто-чёрный зенитно-пулемётный зерёнчатый (РСЯР) зернённый (прич.) зернёный (прил.) зернотёрка зёв (один зевок) (Даль) зёва (простореч. разиня) зёрна, зёрен и т. д. (мн. ч. от зерно) зёрна (БСРЖ) зёма (Е) зёрнышко зигтёр (Е) зиктёр (Е) зихтёр (Е) зимне-зелёный златистогрёзый златобёдрый (НВРЛ) златопёрый злачёный (устар.) (золочёный) змеёвка (растение) змеёвник (день календаря) (В. Миронов) змеёвый змеёй, змеёю [змея] змеёк (змей — детская игрушка) змеёныш змеёныш (БСРЖ) змиёвец (СГЖСССР) змиёвцы (СГЖСССР) знамёна, знамён и т. д. [знамя] знамённый знамённое (возвышение) знамёнщик знатьё зовёт(ся) [звать(ся)] золёный, -ён, -ена (подвергшийся золению: золёная кожа) золёный (прил.) золотарём [золотарь] золотисто-жёлтый золочённый, -ён, -ена (прич.) золочёный (прил.) зоопарчёный (сторож) (К. Чук.) зубёнки зубодёр (разг.) зубрёж (школьн. арго) зубрёжка (школьн. арго) зубрёнок зубрёночек зубьё, зубьём (Кольцов) зуёв [зуй] зуёвец (В.Ч.) зуёвцы (В.Ч.) зуёк (род птиц) зурён (р.п. м.ч. зурна’) (САМ) зятёк зятьёв [зять]     И Иван-ёлкин (кабак) ивасёвый (кит) иглопёрая рыба (РСЯР) игранёт [игрануть] (прост.) игуанёнок игуанёночек игуанодонёнок игуанодонёночек идёмить (не хочу и. в столовую) (К.Чук.) идёт (межд. хорошо, согласен, да) идёт [идти] избёнка изберёт [избрать] избичёванный, -ан, -ана изблёванный (Даль) изблёвывать(ся) (Даль) изблюёт [изблевать] изборождённый, -ён, -ена избранённый, -ён, -ена избура-жёлтый изведён изведённый изведёныш (РСЯР) изведёт(ся) [извести(сь)] извернётся [извернуться] извещённый, -ён, -ена извёл(ся) [извести(сь)] извёрт (РСЯР) извёртка (РСЯР) извёртливый (РСЯР) извёрток дороги (РСЯР) извёртывать(ся) извёстка извинённый, -ён, -ена извлёк(ся) [извлечь(-ся)] извлёкши(сь) извлёкший(ся) извлечённый, -ён, -ена извлечёт(ся) [извлёчь(ся)] изволо’ченный и изволочённый, -ён, -ена извращённо извращённость извращённый, -ён, -ена (прич.) извращён, -ённа (прил.) брать изгнётом (РСЯР) изгниёт [изгнить] изграфлённый, -ён, -ена изгрёб, изгрёбка (РСЯР) изгрёба изгры’зенный; изгрызен, -а, -о изгрызёт [изгрызть] изгрязнённый, -ён, -ена издаёт(ся) [издавать(ся)] издалeка’ и издалёка (нареч.) издалёку (РСЯР) издёвка (издевательство) (прост.) издёрганность издёрганный, -ан, -ана издёргать(ся) издёргивать(ся) издёргом (РСЯР) издёрг (Даль) издёрга (Даль) издёржка (Даль) издерёт(ся) [изодрать(ся)] издолблённый, -ён, -ёна издроблённый, -ён, -ена изжёванный, -ан, -ана изжёвывать(ся) изжёг(ся) [изжечь(-ся)] изжёгши изжёгшийся изжелта-зелёный изжелчёный, -ён, -ена изживёт [изжить] изжуёт [изжевать] иззелена-жёлтый иззеленённый, -ён, -ена излепёшить (РСЯР) излёживаться излёт излётный (РСЯР) излётанный изле’ченный и излечённый, -ён, -ена излучённый, -ён, -ена измалёванный, -ан, -ана измалёвывать(ся) измелённый, -ён, -ена (испачканный мелом) измельчённый, -ён, -ена изменённый, -ён, -ена измёрзнуть, -ёрз, ёрзла измёрзший измётный, на измёте (РСЯР) измождённость измождённый, -ён, -ена и измождён, измождённа изморённый, -ён, -ена измышлённый и измы’шленный изнеможённо изнеможённость изнеможённый, -ён, -ена и изнеможён, изнеможённа изнурённо (нареч.) изнурённость изнурённый, -ён, -ена и изнурён, изнурённа изобличённый, -ён, -ена изображённый, -ён, -ена изобрёл [изобрести] изобретённый, -ён, -ена изобретёт [изобрести] изобьёт(ся) [избить(ся)] изоврётся [изовраться] (прост.) изовьёт(ся) [извить(ся)] изогнёт(ся) [изогнуть(ся)] изожжённый, -ён, -ена изожжёт(ся) [изжечь(ся)] изойдёт [изойти] изолжётся [изолгаться] изольёт(ся) [излить(ся)] изомнёт(ся) [измять(ся)] изопьёт [испить] (прост.) изорвёт(ся) [изорвать(ся)] изострённый, -ён, -ена изоткёт [изоткать] изотрёт(ся) [истереть(ся)] изошёл [изойти] изошьёт [исшить] изощрённо (нареч.) изощрённость изощрённый, -ён, -ена (прич.) и изощрён, изощрённа (прил.) изподмётка (РСЯР) изрежённость и изре’женность изрежённый, -ён, -ена и изре’женный изрёк [изречь] изре’кший и изрёкший изречённый, -ён, -ена изречёт [изречь] изрешечённый, -ён, -ена и изреше’ченный изрыгнёт [изрыгнуть] изрыхлённый, -ён, -ена изумлённый, -ён, -ена и изумлён, -ённа изумрyдно-зелёный изъёжилась (Даль) эк его изъёжило (РСЯР) изъёмный (РСЯР) изъёмок (РСЯР) изъёмщик (РСЯР) изъёрзанный изъёрзать(ся), -ал (Даль) изъёрзывать(ся) изъязвлённый, -ён, -ена изъяснённый, -ён, -ена икнёт [икнуть] икнётся (безличн.) икромёт ильичёвский ильичёвец (сторонник В.И. Ленина) ильичёвец (СГЖСССР) ильичёвцы (СГЖСССР) имбирём [имбирь] имён (род. п. мн. ч. от имя) импортёр инвентарём [инвентарь] инобытие’ (другая форма бытия чего-н.) иноимённый (РСЯР) инопартнёр инопартнёрша иноплемённый инотряпьё искажённо икажённость искажённый, -ён, -ена искартёжничаться (РСЯР) исклёванный, -ан, -ана исклёвывать(ся) исклюёт [исклевать] исключённый, -ён, -ена исколешённый, -ён, -ена ископчённый, -ён, -ена искорёженный искорёживание искорёживать(ся) искорёжить(ся) искорёпало (Бажов) искоренённый, -ён, -ена искорьё (РСЯР) искрасна-жёлтый искрещённый, -ён, -ена и искре’щенный искривлённость искривлённый, -ён, -ена искровенённый, -ён, -ена искрозащищённый искромётно искромётный искроплённый, -ён, -ена искуплённый, -ён, -ена и иску’пленный искушённость искушённый, -ён, -ена испарённый, -ён, -ена испёк(ся) [испечь(-ся)] испёкшись испепелённый, -ён, -ена испестрённый, -ён, -ена испечённый, -ён, -ена испечёт(ся) [испечь(ся)] испещрённый, -ён, -ена исплёванный; исплёван, -а, -о исплёвывать(ся) исплюёт [исплевать] исподтёмка (Даль) испрямлённый, -ён, -ена иссверлённый, -ён, -ена иссёк(ся), иссечётся(сь) [иссечь(ся)] иссечённый, -ён, -ена (наказанный поркой) и иссе’ченный иссечёт(ся), иссёк(ся) [иссечь(ся)] исскоблённый, -ён, -ена и исско’бленный иссо’ленный и иссолённый, -ён, -ена иссосёт(ся) [иссосать(ся)] исстёганный; исстёган, -а, -о исстёгивать(ся) исступлённо исступлённость исступлённый, -ён, -ённа исте’кший (прил.) (исте’кший год, день) истечёт, истёк [истечь] истёк [истечь] истёклый (РСЯР) истёкший (прич.) (истёкший кровью) истёпать (замучить, истерзать) (Вологда) истёр(ся), истёрла(сь), -ло(сь) [истереть(ся)] истёртый; истёрт, -а, -о истёрханный истёршийся истёсанный, -ан, -ана истёсывание истёсывать(ся) истёшенько такоё (РСЯР) истово-исступлённый (НВРЛ) истолчённый, -ён, -ена истолчёт(ся) [истолочь(ся)] истомлённый, -ён, -ена истончённый, -ён, -ена исто’ченный 1) сделавшийся тоньше путём точения; 2) издырявленный насекомыми или их личинками источённый, -ён, -ена (выделенный из чего-н. по каплям или струйками; дарованный, напр. милости, источённые кем-н.) истощённый, -ён,-ена и истощён, истощённо истреблённый, -ён, -ена истрёпанность истрёпанный, -ан, -ана истрёпок (РСЯР) истрёпывание, -я истрёпывать(ся) исхлёстанный, -ан, -ана исхлёстывать(ся) исцелённый, -ён, -ена исчервлённый, -ён, -ена исчёрканный, -ан, -ана исчёркать исчёркивание исчёркиваться исчерчённый, -ён, -ена исчёсанный, -ан, -ана кнут исшлёпался (РСЯР) итогомёт (НВМ) ихтиозаврёнок     Й йёнгчёпинец, йёнгчёпинцы (СГЖСССР, Швеция)     К кабёл (РСЯР) кадрёж (СРСЮЮ) кадрёжка (БСРЖ) кадрёжный (СРСЮЮ) каё (Даль) каём (род. п. мн. ч. от кайма) каёмка каёмочка каёмочный каёмчатый казёнка казённик казённо-администрати’вный (НВРЛ) казённо-бюрократический казённокоштный казённо-сиро’тский казённость казённый казёнщина казнённый, -ён, -ена кайлённый, -ён, -ена кайманёнок какао-сырьё как ни в чём не бывало кактусёнок кактусёночек календарём [календарь] калёванный калёвка калёвочный калёвщик калёнка (каменка) (РСЯР) калённый, -ён, -ена (прич.) калёный (прил.) каллёза и каллоза каллёзный и каллозный калоприёмник камелёк каменно-щебёночный каменотёс камёнка (Даль) камнемёт камнемётный камнетёс (САМ) камнетёсец (САМ) камнетёсный канарeечно-жёлтый канатно-верёвочный кандёр (БСРЖ) кандёхать (БСРЖ) канканёр канканёрка каноэ-шестёрка капиталоёмкий, -ёмок, -ёмка капиталоёмкость каптёр каптёрка карасёвый карасём [карась] карбункулёзный карёк (Даль) картёж картёжник картёжница картёжничать картёжничий (РСЯР) картёжный картофелетёрка карчеподъёмник карчеподъёмный каршевьё (Даль) каскадёр каскадёрский кассир-контроллёр катанёт [катануть] катышём (РСЯР) кафтёр (фр. стукач) качнёт(ся) [качнуть(ся)] квазизвёздный квартиросъёмщик квартиросъёмщица квартирёха (Е) квасохлёб квашнёй (тв. п. от квашня) квёлость квёлый (обл.) кельёнка (РСЯР) кендырём [кендырь] кенгурёнок кенгурёночек кентаврёнок кентаврёночек кентозаврёнок кесарёнок кесарёночек кеттлёвка кёльнский (от Кёльн) кёльнец кёльнцы кёнигсбергский кёнигсбержец кёнигсбержцы кёрлинг кёрлингист кёрлингистка кёровая дама (дама червей) кёрчех (якутская мутовка и взбитые ею сливки) (А. Прел.) кёшк (В.В. Лопатин) киёк киёв (мн. кий) киёвница (Даль) кивнёт [кивнуть] кием и киём [кий] киксанёт [киксануть] килёванный, -ан, -ана кильчёванный киндарёнок (БСРЖ) киндарёночек (БСРЖ) киноактёр кинозвёзды киноплёнка киноплёночный кинорежиссёр кинорепортёр киностёб (НВРЛ) киносъёмка кинофотоплёнка кинофотосьёмка кинохроникёр киоскёр [киоск] киоскёрша кипятнёй поливать и смолой (САМ) кипячённый, -ён, -ена (прич.) кипячёный (прилаг.) кипячёный (БСРЖ) кирнёшь [кирнуть] (вульг.) кисеёй [кисея] киселёвец киселёвский киселёвцы киселёк киселём [кисель] киснёт (кисну’ть, поцеловать, англ.) (СХ) (В.В. Лопатин) кистенём [кистeнь] кистенёк кистопёрые китаёз китаёза китаёзный китаёзовый кителёк китёнок китёныш кичёвка кичик-бёюк (НВРЛ) кирчёный (гладко обструганный) кишинёвский кишинёвец (СГЖСССР) кишинёвка (СГЖСССР) кишинёвцы (СГЖСССР) кладёт [класть] клакёр и клакер клебсиеллёз клеверотёрка клеверотёрочный кле’енный (прич.— клеенный столяром) клеёк клеёнка клеёночка клеёночный клеёнчатый клеёный (прил.— клеёная обувь) клеймённый, -ён, -ена (прич.) клеймёный (прил.) клен (не клён!) (БСРЖ) кленёк клечевьё (Даль) клешнёвый (РСЯР) клешнёй [клешни] клёв клёв дятла (РСЯР) наклёванная ягода (РСЯР) клёванный (прич.) клёваный (прил.) клёве (БСРЖ) клёвенький (БСРЖ) клёвенько (БСРЖ) клёво, клёвость (вульг.) клёвость (БСРЖ) клёвый (Даль) клёвый (СРСЮЮ) клёк 1) нечто твёрдое, заскорузлое, 2) игра (Даль) клёкать клёклый (Даль) клёкнувший клёком взяться (Даль) клёкнуть, клёкнул, клёкла клёкот (но клекотать) клёкт (РСЯР) клён клёноход клёпанный, -ан, -ана (прич.) клёпаный (прил.) клёпань клёпка клёпка (дощечка) клёпка (отпечатки пальцев) клёпочный клёск (РСЯР) и (Даль) клёст (птица) клёцки, клёцка (Даль) клёш клёш (БСРЖ) кнёпать (БСРЖ) климатизёр клонённый клонёнок (В.Ч.) клонёночек (В.Ч.) клубенёк клюёт [клевать] ключарём [ключарь] клянёт [клясть] князёк княжьё (РСЯР) кобелёк [прост.] кобелёчек кобелём [кобель] кобёл (Е) кобёлочный кобзарём [кобзарь] кобрёнок кобылёнка ковалём [коваль] ковёр ковёр (БСРЖ) ковёрный (в цирке) ковёрный ковёр-самолёт ковёрчик ковёрщик ковш-долбёнка (НВРЛ) ковылём [ковыль] ковыльё (В.Ч.) быльём да ковыльём поросло (РСЯР) ковырнёт [ковырнуть] кое в чём кое о чём коё (Даль) в коё место? (РСЯР) коёк (Даль) коёкаться (Даль) коёмка (Даль) кожедёр кожедёрный (РСЯР) кожсырьё кожьё (невыделанные шкуры) (Вологда) козёл козёл (БСРЖ) козёл-вэвэшник (СРВЖ) козёлик (БСРЖ) козлёнок (в т. ч. гриб) козлёночек козлодёр (Даль) козлодёрка (БСРЖ) козлодёрничать (РСЯР) козырёк козырёк (БСРЖ) колеёй [колея] коленопреклонённо коленопреклонённый колёса (мн. ч. от колесо) колёса (5 значений) (Е) колёсико колёсико (БСРЖ) колёсник колёсник (БСРЖ) колёсно-гyсеничный колёсный колёсопрокатный колёсотокарный коломёнок (САМ) колосоподъёмник колотье’ колотьё (БСРЖ) колупнёт [колупнуть] колыхнёт [колыхнyть] колючепёрые (зоолог.) кольё (Даль) кольнёт [кольнyть] комарьё комба’йнер и комбайнёр комбайнёрка комбайнёрша комелёк коммивояжёр коммивояжёрский коммивояжёрство комнатёнка кондёр (САМ) кондовьё (Даль) конёвий (навоз) (Даль) конёвый (О и Ш) конёк Конёк-Горбунок конёк-горбунок (СРВЖ) конём [конь] конёвина (Даль) конёнок (палиндром Гольдштейна) коноплёвый коноплёй [конопля] Константин-и-Олёна контактёр контрактёр контролёр контролёр-же’нщина (НВРЛ) контролёр-наблюда’тель (НВРЛ) контролёр-наста’вник (НВРЛ) контролёрский контролёрша контрольно-зачётный контрольно-учётный контрприём контрсчёт конышёвец (СГЖСССР) конышёвцы (СГЖСССР) коняшёнок (РСЯР) копёж (РСЯР) копён (род. п. мн. ч. от копна) копёнка копённое сено (РСЯР) копённый копёр копёрщик копёшка (РСЯР) копиручёт коплёные (деньги) копнёт [копнуть] копчёнка копчённый, -ён, -ена (прич.) копчёно-варёный копчёно-запечённый копчёности копчёный (прил.) копчёный (СРСЮЮ) копьё, копьём копьёвец (СГЖСССР) копьёвцы (СГЖСССР) кораблём [корабль] коренёвщина (А.П.) корёжащий(ся) корёженный корёжить(ся) (Даль) корёжник (РСЯР) кормёж (РСЯР) кормёжка кормёжничать (Даль) кормёжный (Даль) кормлёнка (Даль) кормлёнок (выращенный без матери) (РСЯР) корнёвка корнёвщик коровёнка королёвский (от С.П. Королёв или г. Королёв) королёвцы королёк королёк (СРСЮЮ) королём [король] коростелём [коростель] коротёшенек (РСЯР) короткоглавёнок короткошёрстный и короткошёрстый корсчёт корчевьё (РСЯР) корчёванный, -ан, -ана корчёвка корчёвщик корчмарём [корчмарь] корьё, корьём корьё (БСРЖ) косарём [косарь] коса’рь-пулемётчик (СРВЖ) косёнка космолёт космона’вт-учёный (НВРЛ) косморепортёр (НВРЛ) коснётся [коснуться] косоплётка костёл костёльный костёр костёр (БСРЖ) костёрчик костерёвец (В.Ч.) костерёвцы (В.Ч.) костерём (костерь — трава) костерённый костно-туберкулёзный костыледёр костылём [костыль] костюмёр косулёнок косулёночек косырём (косырь, нож) (В.Д.) косьё котелёнки котелёнок (г. Котельнич) котёл котёл-аккумулятор котёл-парообразователь котёл-утилизатор котёльчик котёнок котёнок (СРВЖ) котёночек котломёт (Е) кофеёк кофтёнка кочерёжка (от кочерги) кочерёг (кочерга) кочерёжный кочёвец (СГЖСССР) кочёвцы (СГЖСССР) кочёвка кошёвка кошелёк кошелём [кошель] кошелёчек кошелёчек (БСРЖ) кошелёчно-денежный кошёлка (Даль) кошёлка (БСРЖ) кошёлочка кошкодёр крабёнок, в т.ч. (БСРЖ) крабёночек крабошлёп (БСРЖ) крадёт(ся) [красть(ся)] краёв [край] кран-штабелёр кра’пленный, кра’плен (прич.) краплёный (прил.) красёнушка (РСЯР) красёха (РСЯР) краскотёр краскотёрка красновато-жёлтый краснодерёвщик красно-жёлтый краснозвёздный кра’сно-зелёный (НВРЛ) краснозём краснозёмный краснознамёнец краснознамённый краснопёр краснопёр (БСРЖ) краснопёрка краснопёрый красноплёкий (голубиный окрас) (САМ) красносёл (СГЖСССР) красносёлка (СГЖСССР) красносёлы (СГЖСССР) краснощёкий краснощёковец краснощёковка краснощёкгвцы кредитно-расчётный крезанётся [крезануться] (вульг.) кремённый (РСЯР) кремлёвец (НВРЛ) Кремлёвка (сорт водки) кремлёвка (спецсвязь, спецмедобслуживание) кремлёвская таблетка (СРВЖ) кремлёвский кремлёвский козёл (СРВЖ) кремлёвско-лубя’нский (НВРЛ) кремлём [кремль] кремнёвка кремнёвый кремнезём кремнезёмистый кремнезёмный кремнём [кремeнь] кренделёк крепёж крепёжный креплённый, -ён, -ена (прич.) креплёный (прил.) крёкшинец (В.Ч.) крёкшинцы (В.Ч.) крёне (БСРЖ) крёстная крeстный (прил. крестный путь) крёстный (крёстный отец, сын) крёстный (БСРЖ) кречётка крещённый, -ён, -ена крещёный (прил.) кривлённый криолофозаврёнок критикнёт [критикнуть] крова’во-чёрный (НВРЛ) кровоподтёк кровоподтёчный кровохлёбка кроенный (прич.) кроёный (прил.) крокодилёнок крокодилёночек кромешно-тёмный (НВРЛ) кроплённый, -ён, -ена кроплёный (прил.) кроссвордёнок (журнал) кротёнок кротёныш крохотаннёнькоё дитё, дитятко (Вологда) крошьё (РСЯР) круглённый, -ён, -ена круглёный (прил.) круглозёрный (рис) круглощёкий крупозёрный крутёж крутёжный (Е) крутоповёрнутый круподёрка кручёнка кру’ченный (прич.) кручёный (прил.) кручёный (БСРЖ) крушьё (РСЯР) крылолёт крысёнок крысёнок (БСРЖ) крысёночек кряжьё (РСЯР) ксёндз, а и ксендза ксёндз (БСРЖ) ксивёнка (БСРЖ) кто о чём куафёр куболёный кувыркнёт(ся) [кувыркнуть(ся)] куёлда (Даль) куёрда (Даль) куёрдиться (Даль) куёт(ся) [ковать(ся)] кужелёвец (В.Ч.) кужелёвцы (В.Ч.) куклёнок куклёночек (Е) кулачьё, кулачьём кулёк кулёк (СРСЮЮ) кулём [куль] кулёчек кулёчный кульё куманёк кумачём (д. п. кумач) (О.К.) кумёнец (пгт. Кумёны) кумёнка кумёнцы кумовьёв (род. п. мн. ч.  от кум) купёна (растение) купюросчётный курдонёр куренёк стать куренём (т.е. на привал) (РСЯР) курёж (Даль) курёнок (обл.) курёха (РСЯР) куркулёк куркулёнок куркулёночек куртёха (Е) курьёз (Даль) курьёзность курьёзный (Даль) куснёт [куснуть] кусовьё (РСЯР) и (Даль) кустарём [кустарь] кусьё (Даль) кутёж кутёжный кутёк (БСРЖ) кутёнок кутнёт [кутнуть] (разг.) кутьёй [кутья] кучерёнок (Даль) кучерёночек кучёвка кучёр (БСРЖ) кущёвец (СГЖСССР) кущёвцы (СГЖСССР) кьёккенмeдинги (термин археологии: кухонные остатки)     Л лабёж (БСРЖ) лабёжный (вульг.) лавё (БСРЖ) лавинно-пролётный ладьёй [ладья] лажанёшь(ся) [лажануть(ся)] лакнёт [лакнуть] ландёха (Даль) лаптёжник лаптёжник (СРВЖ) лапшемёт (БСРЖ) ларёвый (Даль) ларёк ларём [ларь] ларёчник ларёчница ларёчный ласёна (Даль) ласёха (Даль) ластёна (РСЯР) и (Даль) ластёха (Даль) лащёнок (БСРЖ) лащёночек лганьё, лганьём лебедёнок лебёдка лебёдочный лебёдушка лебёдчик лебёдчица лево-жёлтый (НВРЛ) левозавёрнутый левулёза и левулоза легкоусвояемоё («Новый Крокодил», №6, 2004) легионеллёз (болезнь) легковооружённый легкопоражённый легкоразъёмный лeжбище, лeжбищный и лёжбище, лёжбищный лежнёвка (дорога) (В.Ч.) лелёха (Даль) лен (река, шея) (БСРЖ) лен (земельное владение вассала) леопардёнок леопардёночек лепестьё (РСЯР) лепёльник (Даль) лепёха лепёха (БСРЖ) лепёшечка лепёшища (Даль) лепёшка лепёшка (БСРЖ) лепёшкообразный лепёшник (Даль) лепёшечник (Даль) лепёшечница (Даль) ле’ска и лёска, лёсы, лёс, ле’са, леса’ летёха (вульг.) летёшник (БСРЖ) лeченый и лечёный (прил.) лёг [лечь] лёгенький и лёгонький лёгкие (сущ.) лёгкий, лёгок лёгкие (БСРЖ) лёгко = легко’ (искажение для экспрессии) лёгко-музыкальный (НВРЛ) лёгкость лёглость лёглый лёгонький лёгость (РСЯР) лёгочник лёгочница лёгочно-сердечный лёгочный лёгший [лечь] лёд лёд (БСРЖ) лёд не несёт (РСЯР) лёд-цемeнт лёдчик (СРВЖ) лёдчик (поставщик льда в Грузии) лёжа (нареч.) лёжа (БСРЖ) лёживать лёжка лёжкий, кр. ф. лёжек, лёжка лёжкость устать в лёжку (РСЯР) лёлик (БСРЖ) лёллингит (болезнь) лёленька (Даль) лёля (Даль) лён (растение) лён-долгунeц лён-первак (Вологда) лёник (БСРЖ) лён-кудряш лёнька (БСРЖ) лёп (Е) лёскот (РСЯР) лёсс лёссовидный лёссовый лёт лётать (БСРЖ) лётка р. мн. лёток лётно-боевой лётно-испытательный лётно-тактический лётно-технический лётный лётовый (от лёт) лётом (нареч.) лётчик лётчик (БСРЖ) лётчик-испытатель лётчик-космонавт лётчица лётчицкий лёх (Даль) лёха (БСРЖ) и (Даль) лёшушка (Даль) лжёт [лгать] лжеучёный лживодёр (НВМ) ливнёвка (вид канализации) лизнёт [лизнуть] ликёр ликёр (БСРЖ) ликёрец ликёрный ликёроводочный ликёрчик ликинодулёвец (СГЖСССР) ликонодулёвцы (СГЖСССР) лимонно-жёлтый лимфоретикулёз линёк (РИБС) линемёт линемётный линём [линь] линчёванный линчёпинец (СГЖСССР, Швеция) линчёпинцы (СГЖСССР, Швеция) лиса-огнёвка (РСЯР) лисёнок лисёночек листолазёнок литьё, литьём лифтёр лифтёрский лифтёрша лиховьё (РСЯР) лишаём [лишай] лишённый, -ён, -ена лозьё (РСЯР) локтём (локоть) ошиб. произн.  ломанёшь(ся) [ломануть(ся)] (вульг.) ломтём [ломоть] лопотьё лопухнёшься [лопухнуться] (вульг.) лосёвый лосёнок лососёвый лошадёнка лощёный (прил.) лужённый; лужён (прич.) лужёный (прил.) лупёж (РСЯР) лупёжный (РСЯР) лучённый, -ён, -ена лучепёрые лошадёнка лощёнка лощённый, -ён, -ена лощёный (прил.) лощёнка (клеёнка) (Даль) лощёха (Даль) лужённый, -ён, -ена лужёный (прил.) лyнно-звёздный лутьё (Даль) лучённый, -ён, -ена (прич.) лучепёрые (зоол.) лущёвка лущённый, -ён, -ена (прич.) лущёный (прил.) лыкодёр львёнок льё (САМ) льёт(ся) [лить(ся)] льнёт (льнуть) льно-шёлковый (НВРЛ) людёнок людьё (Мандельштам) лютёшенек (РСЯР)     М магнетизёр магнетизёрка магнетизёрский магнетизёрство магнитно-жёсткий магнитно-твёрдый мадонёнок (К.Чук.) маёвец (Е) маёвка мазёво (БСРЖ) мазёвый (БСРЖ) мазёл (НВРЛ) мазнёй [мазня] мазьё (БСРЖ) маклёвый (БСРЖ) макнёт [макнуть] макрёш (СГЖСССР) макрёша (СГЖСССР) мактёши (СГЖСССР) макросъёмка макрофотосъёмка малёванный, -ан, -ана малёвка (БСРЖ) малёвщик (РСЯР) малёк малёк (БСРЖ) малёнка (мера сыпучих веществ) малёхонький (обл.) малёшенький (обл.) мал-малёхонек мал-малёшенек малозаселённый малозвёздное небо (РСЯР) малоискушённый, -ён, -ённа малонадёжный малонаселённость малонаселённый малообъёмный малоодарённый малоопределённый малооснащённый малопочётный малораспространённый малосолёный малошёрстный малышёнок (РСЯР) малыш-несмышлёныш малышнёй [малышня] мальё (БСРЖ) и (Даль) мальмёвец (СГЖСССР, Швеция) мальмёвцы (СГЖСССР, Швеция) мальчёнок (РСЯР) мамонтёнок мамонтёночек манёвр манёвренность и мане’вренность манёвренный и мане’вренный манёвры манёвры (БСРЖ) маневро’вый и манёвровый манёный маралёнок марёвец (СГЖСССР) марёвка (СГЖСССР) марёвцы (СГЖСССР) марёнка (БСРЖ) марёха (Е) марёшка (Е) маркёр (человек, прислуживающий игрокам на бильярде, ведущий счёт в игре); (А.С. Пушкин «Евгений Онегин») маркёр (более трёх значений) маркёрский маркёрство марлёвка мародёр мародёрка мародёрский мародёрство мародёрствовать марш-манёвр масёл (БСРЖ) маслёнка маслёнок [маслята] маслёнок (БСРЖ) маслёночек маслёнщик массажёр мастерённый мастёвый (Е) мастёра (СРСЮЮ) материалоёмкий материалоёмкость матёрая земля (РСЯР) матёроватый (РСЯР) матёронький (РСЯР) матёрость матёрые годы человека – средние (РСЯР) матёрый матрёна матрёниться матрёша матрёшечник матрёшечница матрёшечный матрёшка (кукла) матрёшка (БСРЖ) матрёшкообра’зный (НВРЛ) матюгнётся [матюгнуться] матюкнётся [матюкнуться] махнёт [махнуть] махолёт мачьё (БСРЖ) машиносчётный медвёдка (Даль) медвёдок (Даль) медсёстры, -сестёр, -сёстрам междурёберный межёванный, -ан, -ана межёвка межзвёздный межозёрный межрёберье (РСЯР) межрёберный мездрённый, -ён. -ена (прич.) мездрёный (прил.) мелённый, -ён, -ена (прич.) мелёный (прил.) мeлко дроблённый (прич.) мелкодроблёный (прил.) мелкозём мелкозёмистый мелкозернёный мелкопёстрый (НВРЛ) мeлкотолчённый (прич.) мелкотолчёный (прил.) мелкошёрстный и мелкошёрстый мелочёвка мелочёвка (СРВЖ) мелькнёт [мелькнуть] мельчёный мeнеджер-стажёр мерелёвец (В.Ч.) мерелёвцы (В.Ч.) мерёжа, (р. мн.) мерёж и мерёжка (снасть) мерёжка (паутина) мерёжный мерёта (Даль) мeртвенно-зелёный мертворождённость мертворождённый месьё металлёр (СРСЮЮ) металлоёмкий металлоёмкость метастронгилёз метелёк (Даль) метёвая рыба (Даль) метёлка метёлка (БСРЖ) метёлка (ботан.) метёлочка метёлочный метённый, -ён, -ена (прич.) метёный (прил.) метёт(ся) [мести(сь)] метнёт [метнуть] методьё мещёкинец (В.Ч.) мещёкинцы (В.Ч.) мещёрский мещёрцы Мёбиуса лента мёд мёд (БСРЖ) мёдагог (НВМ) мёдвытрезвитель (НВМ) мёдистый мёдовый мёдосмотр (НВМ) мёдсестра (НВМ) мёдсовет (НВМ) мёды мёл(ся) [мести(сь)] мёльндалец (СГЖСССР, Швеция) мёльндальцы (СГЖСССР, Швеция) мёрз, мёрзнул, мёрзла [мёрзнуть] мёрзлость мёрзлый мёрзнуть мёрзнуть (БСРЖ) мёрзнувший мёрлый (РСЯР) мёрзнущий мёртво (нареч.) мёртво-лимо’нный (НВРЛ) мёртворождённый (версия В. Жириновского) мёртвый, мёртв, мертва’, мёртво и мертво’ мёртвый (БСРЖ) мёрший мёт (РСЯР) мётанный, -ан, -ана мётка (РСЯР) мёткий, -ая (РСЯР) и (Даль) мёткий пёс (РСЯР) мёткость (Даль) мётное копьё (РСЯР) мётлы, мётел и т. д.  мётом (РСЯР) мётчик (банкомёт) и метчи’к (инструмент) мётший мигачёвец (В.Ч.) мигачёвцы (В.Ч.) мигнёт [мигнуть] микрообъём микроплёнка микроприёмник микрорадиоприёмник микросъёмка микротвёрдость микрофотосъёмка милёнок милёночек мимолётность мимолётный мимолётом мимолётчик (НВМ) мимомёт (НВМ) миндалём [миндаль] минёр минёрный ми’ни-самолёт ми’ни-тренажёр (НВРЛ) миномёт миномётный миномётчик миродёрство (НВРЛ) миродёрствовать (НВРЛ) митёк (Е) миткалёвый и митка’левый миткалём [миткаль] михалёвец (В.Ч.) михалёвцы (В.Ч.) младёхонький младёшенький младопёрый (РСЯР) млёха (БСРЖ) мнёвый (налимий) мнёт(ся) [мять, мяться] моёшка (БСРЖ) мозёнок (БСРЖ) мнёвая (Даль) мнёвья (Даль) многовёрстный многожёнство многозвёздный (НВРЛ) многозвёздочный (НВРЛ) многонаселённый многопёр многопёрые многоплемённый многоучёный многослёзная просьба (РСЯР) многотёмное дело (НВМ) моё, о моём могилёвский (от Могилёв) могилёвец (СГЖСССР) могилёвцы (СГЖСССР) можжеве’ловка и можжевёловка можжеве’ловый и можжевёловый можнёхонько (РСЯР) можнёшенько (РСЯР) мокрёхонький мокрёхонько мокрёшенький мокролёт (Даль) мокролётка (Даль) мокросолёный мо’ленный и молённый, -ён -ена (прич.) моле’нный (прил.) (от молeние) мо’леный и молёный (прил.) молёнка (мера для зерна) «Молодёжка» (сокр. назв. газеты) молодёжка (молодёжная сборная команда) молодёжник (РСЯР) молодёжный молодёжь молодёна (РСЯР) молодожён молодожёны монастырёвец (В.Ч.) монастырёвцы (В.Ч.) монастырёк монастырём [монастырь] монсиньёр монтажёр монтёр монтёрить монтёрский моргнёт [моргнуть] море’нный (от морeна) морёнка (НВРЛ) морённый, -ён -ена (прич.) морёный (прил.) мосёл (БСРЖ) мостовьё мотнёй [мотня] мотнёт [мотнуть] мотор-колёсный моторолёт мотылёк мотылёк (БСРЖ) мотылём [мотыль] мотылёчек мотылёчный (РСЯР) мо’ченный (прич.) мочёный (прил.) мочеприёмник мощённый, -ён -ена (прич.) мощёный (прил.) мрёт [мереть] мстёрский мсьё мудрёнее (от мудрёный, мудрено) мудрёненькая, -ий (Даль) мудрёно (нареч.) мудрено’ (в знач. сказ.) мудрёж мудрёность мудрёный, -ён, -ёна мужварьё (мужичьё) (САМ) муженёк (разг.) мужичьё, мужичьём мулёк (оруж. термин) мулёк (БСРЖ) мулёнок мумиё муравьём, муравьёв [муравей] мускололёт мусороприёмник мусороприёмный мухлёвка мухлёж (вульг.) мушкатёр (БСРЖ) мушкетёр мушкетёрский мшёный амбар (РСЯР) мытьё, мытьём мытьё-гла’женье (Даль) мягкошёрстный и мягкошёрстый мягчёный (прил.) мясошёрстный мятётся [мястись] мяльё (Даль) мятьё (Даль)     Н набелённый, -ён, -ена наберёт(ся) [набрать(ся)] набигудённая (голова) наблюдённый, -ён, -ена наблюдёт [наблюсти] набредёт [набрести] набрёл [набрести] от набрёху не уйдёшь (РСЯР) и (Даль) набурённый, -ён, -ена набьёт(ся) [набить(ся)] наведённый, -ён, -ена наведёт [навести] навезённый, -ён, -ена навезёт [навезти] навернёт(ся) [навернуть(ся)] навещённый, -ён, -ена навёз [навезти] навёзший навёл [навести] навёрнутый; навёрнут, -а, -о навёрнутый (СРСЮЮ) навёрстанный, -ан, -ана навёрстывание навёрстывать(ся) навёртка навёртывание навёртывать(ся) навлечённый, -ён, -ена навлечёт [навлечь] навлёк [навлечь] навлёкший наводнённый, -ён, -ена навоёванный, -ан, -ана наволочённый, -ён, -ена наволочёт [наволочь] наворожённый, -ён, -ена наворошённый, -ён, -ена наворшённый, -ён, -ена навострённый, -ён, -ена навощённый, -ён, -ена наврёт(ся) [наврать(ся)] на всё про всё (Е) навьёт(ся) [навить(ся)] навыдёргивать наглёж (Е) наглёжка (Е) наглушённый, -ён, -ена нагнёт нагнетённый, -ён, -ена нагнетёт [нагнести] нагнёт(ся) [нагнуть(ся)] нагнётный (РСЯР) нагнётший нагниёт [нагнить] нагноённый, -ён, -ена наговорённый, -ён, -ена наготьё (Даль) награждённый, -ён, -ена награнённый, -ён, -ена награфлённый, -ён, -ена нагрёб [нагрести] нагребённый, -ён, -ена нагребёт [нагрести] нагрёбом, внагрёб (РСЯР) нагрёбший из последних нагрёбышков (РСЯР) нагромождённый нагружённый, -ён, -ена и нагру’женный нагрызёт(ся) [нагрызть(ся)] надаёт [надавить] надвернёт [надвернуть] надвёрнутый надвёртывать(ся) надгниёт [надгнить] надгрызёт [надгрызть] наддаёт [наддавать] наддерёт(ся) [надодрать(ся)] наддолблённый, -ён, -ена наделённый, -ён, -ена надёванный, -ан, -ана надёва, надёвка (РСЯР) надёжа (но надежда) (обл.) надёжа-государь будь надёжен (РСЯР) надёжность надёжный, -жен, -жна, -жно надёрганный, -ан, -ана надёргать надёргивать(ся) надерёт(ся) [надрать(ся)] надёрнутый надёрнуть наджёвок (РСЯР) надзвёздный надклёванный, -ан, -ана надклёвывать(ся) надклёвок (Даль) надклёвщик, -щица (Даль) надклёвывать (Даль) надклёвыш (РСЯР) надклёпанный, -ан, -ана надклёпка надклёпывать надколёсный надкуёт [надковать] надлёдный надобьёт(ся) [надбить(ся)] надовьёт [надвить] надолблённый, -ён, -ена надопьёт [надпить] надорвёт(ся) [надорвать(ся)] надошьёт [надшить] надрёберный надроблённый, -ён, -ена надсверлённый, -ён, -ена надсёк надсeкший(ся) и надсёкший(ся) надсечённый, -ён, -ена надсечёт(ся) [надсечь(ся)] надтёк (РСЯР) и (Даль) надтёс надтёсанный, -ан, -ана надтёсывание надтёсывать(ся) надублённый, -ён, -ена надушённый (от надушить — надушённый платок), -ён, -ена и наду’шенный надъёмный (РСЯР) наёжился (Даль) наём наёмка (Даль) наёмник наёмница наёмничать (Даль) наёмнический наёмничество наёмничий наёмный наёмочные деньги (Даль) наёмчивый парень (Даль) наёмщик (Даль) наёмщина (РСЯР) наёмщица наёмыш (Даль) наёрзал(ся) (Даль) наёрничать (Даль) наждётся [наждаться] нажелчённый , -ён, -ена нажёванный, -ан, -ана нажёвывание нажёвывать(ся) нажёг(ся) [нажёчь(ся)] нажёгший(ся) нажёлклый (РСЯР) нажжённый, -ён, -ена нажжёт(ся) [нажёчь(ся)] наживёт(ся) [нажить(ся)] наживлённый, -ён, -ена наживлён нажмёт [нажать] нажнёт(ся) [нажать(ся)] нажрёт(ся) [нажрать(ся)] нажуёт(ся) [нажевать(ся)] назеленённый, -ён, -ена назём [навоз] назёмить поля (РСЯР) назёмистый (РСЯР) назовёт(ся) [назвать(ся)] наизлёте (РСЯР) найдён (Конёк-горбунок) найдёнка (РСЯР) найдёныш найдёт(ся) [найти(сь)] наймёт(ся) [нанять(ся)] накалённый, -ён, -ена накаутёнок (БСРЖ) накипячённый, -ён, -ена накладёт [накласть] наклёванный, -ан, -ана наклёвывать(ся) наклёп наклёпанный, -ан, -ана наклёпка наклёпывание наклёпывать(ся) наклёска (Даль) наклёскать (Даль) наклонённый, -ён, -ена наклюёт(ся) [наклевать(ся)] на ковёр (СРВЖ) накопённый (РСЯР) накопчённый, -ён, -ена накорчёванный, -ан, -ана накорчёвывать(ся) накочёвка (Даль) накочёвывать (Даль) накрадёт [накрасть] накренённый, -ён, -ена накрёпа (Даль) накрёпать (Даль) накрёпка (Даль) накрёпок (Даль) накуёт [наковать] налёгший налёзить бритву (РСЯР) налёжанный, -ан, -ана налёживать(ся) налёт налётанный, -ан, -ана налётный налётом (нареч.) налётчивый (РСЯР) налётчик налётчица налётывать(ся) налжёт [налгать] налично-рублёвый налощённый, -ён, -ена налущённый, -ён, -ена нальёт(ся) [налить(ся)] намалёванный, -ён, -ена намалёвывать(ся) наматрёниться намащённый, -ён, -ена намежёванный, -ан, -ана намежёвывание намежёвывать(ся) намелённый, -ён, -ена намельчённый, -ён, -ена намекнёт [намекнуть] наметённый наметёт [намести] намёк намёл [намести] намёрзнуть(ся) намёрзший намёт намётанность намётанный, -ён, -ена намётка намётная (РСЯР) намётный (РСЯР) намёточный намётший намётывание намётывать(ся) намнёт [намять] намолённый, -ая, -ое (место, икона) наморённый, -ён, -ена намощённый, -ён, -ена нанесённый, -ён, -ена (не нане’сен, не нанесе’нный) нанёс [нанести] нанёсший нанесёт [нанести] наодёжное украшение (РСЯР) наострённый, -ён, -ена наотлёт (нареч.) нападёт [напасть] напасённый, -ён, -ена напасёт(ся) [напасти(сь)] наперегрёб (РСЯР) напереём (РСЯР) наперекрёст наперечёт (нареч.) наперечёт наперёд (нареч.) (Даль) напечатлённый, -ён, -ена напечённый, -ён, -ена напечёт(ся) [напечь(ся)] напёк [напечь] напёкший(ся) напённый (напённая гниль) напёр(ся), напрёт(ся), напёрла(сь) [напереть(ся)] напёрсток напёрсточник напёрсточный напёртый напе’рченный и наперчённый, -ён, -ена напёрший(ся) наплёванный, -ан, -ана наплёвано (в знач. сказ.) наплёл [наплести] наплёсканный, -ан, -ана наплёскивать(ся) наплетённый, -ён, -ена наплетёт [наплести] наплётший наплоённый, -ён, -ена напложённый, -ён, -ена наплочённый, -ён, -ена наплывёт [наплыть] наплюёт(ся) [наплевать(ся)] напоённый, -ён, -ена (прил.) (наполненный, насыщенный) напоёт(ся) [напеть(ся)] наползёт [наползти] напорошённый, -ён, -ена напрёт [напереть] (прост.) напрдёр (РСЯР) напролёт (нареч.) напрочёт (РСЯР) напрядённый, -ён, -ена напрядёт [напрясть] напряжём («ЛГ», №31, 2004) напряжёнка (СРСЮЮ) напряжённо напряжённо-армированный напряжённость напряжённый, -ён, -ена (напрягшийся) и -ён, ённа (работа напряжённа) напряжёт(ся) [напрячь(ся)] напылённый, -ён, -ена напьётся [напиться] нарадёхаться (Е) нарадёхиваться (Е) нараёшный (Даль) наразмёт (РСЯР) и (Даль) нарастёт [нарасти] наращённый, -ён, -ена нарвёт(ся) [нарвать(ся)] нарёберный от нарёву лицо красное (РСЯР) нарёк [наречь] (Даль) нарёк(ся), наречёт(ся) [нарёчь(ся)] от нарёку не уйдёшь (РСЯР) наре’кший(ся) и нарёкший(ся) наречённый, -ён, -ена и нарече’нный наркозём (СРВЖ) наркошестёрка (из фени) нарождённый, -ён, -ена наря’женный (во всё новое) наряжённый, -ён, -ена (в караул) насаждённый, -ён, -ена насвежёванный, -ан, -ана насверлённый, -ён, -ена насдаёт [насдавать] насе’кший и насёкший населённость населённый, -ён, -ена насечённый, -ён, -ена насечёт(ся) [насечь(ся)] насёк (прош. вр. от насечь) для насёлу глухих мест (РСЯР) насинённый, -ён, -ена наскрёб [наскрести] наскребённый, -ён, -ена наскребёт(ся) [наскрести(сь)] наскрёбший наскрёбывать(ся) наслащённый, -ён, -ена наслоённый, -ён, -ена наслюнённый, -ён, -ена насмеётся [насмеяться] насмешённый насмолённый, -ён, -ена насосётся [насосаться] насочинённый, -ён, -ена настаёт [наставать] настёг (РСЯР) настёганный, -ан, -ана настёгивание настёгивать(ся) насторожённо и насторо’женно насторожённость и насторо’женность насторожённый, -ён, -ена (прич.) насторожённый и насторо’женный; -ён, -ена и -ожен, -ожена (насторожившийся), -ён, -ённа и -нна, -женна (выражающий напряжённое ожидание) (прил.) на стрёме (СРВЖ) настрижёт [настричь] настропалённый, -ён, -ена насуёт [насовать] (разг.) насулённый, -ён, -ена насурьмлённый, -ён, -ена насчёт (предлог) натаённые деньги (РСЯР) натворённый, -ён, -ена натёк (сущ.) натёк [натечь] натёка (РСЯР) натёклая вода (РСЯР) натёкший натёр(ся) [натерёть(ся)] натереблённый, -ён, -ена натёртый; натёрт, -а, -о натёрший(ся) натёс натёсанный, -ан, -ана натёсывание натёсывать(ся) натёчно-капельный натечёт [натечь] натёчный наткёт [наткать] наткнёт(ся) [наткнуть(ся)] натолкнёт(ся) [натолкнуть(ся)] натолчённый, -ён, -ена натолчёт [натолочь] наторённый, -ён, -ена наторчёк (РСЯР) натрёпанный, -ён, -ена натрёт(ся) [натереть(ся)] натру’женный и натружённый, -ён, -ена натрясённый, -ён, -ена натрясёт(ся) [натрясти(сь)] натушёвка (Даль) натушёвыванье (Даль) натушёвывать (Даль) наукоёмкий наукоёмкость наутёк (разг.) пошли наутёк (РСЯР) наущённый, -ён, -ена нахирёжники (БСРЖ) нахлёбывать(ся) нахлёст нахлёстанный, -ан, -ана нахлёстка, в нахлёстку нахлестнёт [нахлестнуть] нахлёстнутый; нахлёстнут, -а, -о нахлёстный (РСЯР) нахлёстом (нареч.) нахлёстывание нахлёстывать(ся) нахоложённый, -ён, -ена наценённый, -ён, -ена начаёпиться (К.Чу.) начернённый, -ён, -ена начерка’ть и начёркать начёл [начeсть] начёлок (РСЯР) начёрканный, -ён, -ена начёркивать(ся) начёс начёсанный, -ан, -ана начёсный начёсывание начёсывать(ся) начёт начётистый начётнический начётничество начётный (Даль) начётчик начётчица начи’ненный (начи’ненное за день бельё) начинённый, -ён, -ена (капустой пирог) начнёт [начать] начнётся [начаться] начтённый, -ён, -ена начтёт(ся) [начeсть(ся)] нашатырём [нашатырь] нашёл(ся), нашла(сь), -ло(сь) [найти(сь)] нашелушённый, -ён, -ена нашёптанный, -ан, -ана нашёптывание нашёптывать(ся) нашлёндаться (Даль) нашлёпанный, -ан, -ана нашлёпать (Даль) нашлёпка нашлёпнуть нашлёпывать(ся) (Даль) нашлёт [наслать] нашпаклёвка нашпаклёвывать (ся) нашьёт [нашить] нащёка (Даль) нащёкий (Даль) нащёлка (РСЯР) нащёлканный, -ан, -ана нащёлкать нащёлкивание (Даль) нащёлкивать нащёчники нащёчина (Даль) нащёчить (Даль) нащёчный (Даль) наярённый бык (РСЯР) небезнадёжность не белёный (прич.) небелёный (прил.) небеснорождённый (Р. Киплинг) небрёг, небрежёт [небрeчь] неблагонадёжнее неблагонадёжность неблагонадёжный небоскрёб небоскрёбец (НВРЛ) небрежёт, небрёг [небречь] небытие’ и небытиё, небытиём («ЛГ», №31, 2004) невдомёк невзачёт (разг.) невоёванный край (РСЯР) невозмущённый не волокёшь (вульг.) невооружённость невооружённый невподъём (РСЯР) невтерпёж негашёный (прил.) негрёнок (РСЯР) негритёнок недалёкий, -лёк, -лёко (близкий) недалёкий, -лёк, лёка (глуповатый) недалеко’ и недалёко (нареч. и в знач. сказ.) недалёкость недешёвый недёшево недовоплощённый, -ая недоберёт [недобрать] недобьёт [недобить] недовернёт(ся) [недовернуть(ся)] недовёрнутый недовёртывать(ся) недовершённость недовершённый, -ён, -ена недоговорённость недоговорённый недогру’женный и недогружённый, -ён, -ена недодаёт(ся) [недодавать(ся)] недожёв (Даль) недожмёт [недожать] (выжать меньше нужного) недожнёт [недожать] (сжать меньше нужного) недожжёт [недожечь] недожжённый недолёживать недолёт недольёт(ся) [недольёт(ся)] недооценённый, -ён, -ена недопечённый, -ён, -ена недопечёт(ся) [недопечь(ся)] недопёк недопёка (Даль) недопёклость (Даль) недопёклый (Даль) недопёсковая шубка (Даль) недопёсок (Даль) недопоймёт [недопонять] недопьёт [недопить] недорёв (Даль) недосо’ленный и недосолённый, -ён, -ена недостаёт [недоставать] недотёпа (разг.) недотёпистость недотёпистый недотёпство недоуме’нный и недоумённый недоучёл недоучёт недоучтёт [недоучесть] недоучтённый, -ён, -ена недочёт недочёт (БСРЖ) недошьёт [недошить] недошлёт [недослать] недурён неё (у неё) неёла (Даль) незавершёнка незавершённость незавершённый незаёмный незаёмный незаконнорождённый незажжённый, -ая незамутнённо-зорево’й (НВРЛ) незамутнённый незаселённость незаселённый незачёт незащищённость незащищённый незвёзды (астр.) незелёный (НВРЛ) неискоренённый неискушённость неискушённый, -ён, -ённа неисчётно (очень много) нейдёт [нейти] неймёт(ся) неймёт веры (РСЯР) нейтрофилёз неклеймёный (прил.) не крещённый (прич.) некрещёный (прил.) некулёма (РСЯР) и (Даль) нелёгкая (нечистая сила, чёрт) нелёгкий, нелёгок нелёжкий нелёсно (Даль) нелётный не лужённый (прич.) нелужёный (прил.) неметаллоёмкий не мощённый (прич.) немощёный (прил.) немудрёный, -ён, -ёна и -ена немчёнок ненадёванный, -ан, -ана ненадёжнее ненадёжность ненадёжный, -ёжен, -ёжна, -ёжно ненаречённсть (Мих. Кузьмин) необожжённый необтёсанный неодушевлённость неодушевлённый неопределённее неопределённо неопределённо-личный неопределённость неопределённый неоразумлённое чувство (РСЯР) неосведомлённость неосведомлённый неосвещённость неосвещённый неосёдланный неостепенённый неотёс (РСЯР) неотёсанность неотёсанный неотрёпа (РСЯР) неотчётливее неотчётливость неотчётливый неоце’нeнный (высокой, цены, исключительный: неоценeнная награда) неоценённый (не подвергшийся оценке, прич. от не оценить) неочёмность («ЛГ», №40, 2004) неочёсливый (ая) (невежливый (ая)) (САМ) непарноперисторассечённый (лист картофеля) непасённый пир (РСЯР) и (Даль) непервоочередно’й и непервоочерёдный непервоочерёдность неперёная (стрела) непёр (СРСЮЮ) неплатёж неплатёжеспособность неплатёжеспособный неплатёжка неплатёжный неподалёчку неподалёку неподотчётность неподотчётный неподъёмность неподъёмный не по-её непокорённый непосвящённость непосвящённый непочётливый (РСЯР) непревзойдённо (нареч.) непревзойдённость непревзойдённый непредубеждённо (нареч.) непредубеждённость непредубеждённый непредупреждённый неприёмный непринуждённее непринуждённо (нареч.) непринуждённость непринуждённый неприпасённый (Даль) непристёгнутый непрожёванный непросвещённее непросвещённость непросвещённый, -ён, -ённа непрторённый непробуждённый моя вина непрощённая (РСЯР) непрояснённость непрояснённый непутёвым матом кричат (РСЯР) непутёвый (разг.) непутём (нареч.) не разбери-поймёшь неразвёрнутость неразвёрнутый неразделённость неразделённый неразрешённость неразрешённый неразъёмный нераспространённость нераспространённый нерастёл (Даль) нерастёлом (Даль) нерасчёса (растрёпа и др.) (Даль) не расчёт (разг.) нерасчётливость нерасчётливый нерасчётный нерасчленённость нерасчленённый нервотрёпка нерешённое нерешённость нерешённый не ровён час неровнёй [неровня] нерождённый несённый, -ён, ена несерьёзность несерьёзнее несерьёзный несёт(ся) [нести(сь)] нескладёха неслёживаемость неслёживающийся несмещённый несмышлёный несмышлёныш несовращённолетний несовращённый, -ая несоверше’нный (несвободный от недостатков) несовершённый (вид) несовершённый (поступок) несолёный не со’ленный (прич.) неспроём (Даль) несравнeнный нестеснённость (НВРЛ) несчётно несчётность несчётный несъёмный нетвёрдость нетвёрдый; нетвёрд, нетвёрдо не твёрже нетерпеливо-раздражённый (НВРЛ) нетерпёж не тёсанный (прич.) нетёсаный (прил.) не торённый (прич.) неторёный (прил.) нeтто-объём неудовлетворённее неудовлетворённо неудовлетворённость неудовлетворённый неуём (РСЯР) неуёмность неуёмный неуме’ха и неумёха неусторожённый неутолённый неучёность неучёный неучтёнка нехитёр [нехитрый] нечернозёмный не чёсанный (прич.) нечёсаный (прил.) нечёткий нечёткость нечётность нечётный не чётче не шелушённый (прич.) нешелушёный (прил.) нёбно-зубной нёбный нёбо (в полости рта), но не’бо [небеса] нём (о нём) нёс(ся) [нести(сь)] нёсший(ся), нёсшая(ся) (два знач.: напр., паровоз и курица, нёсшая золотые яйца) нижеприведённый низведённый, -ён, -ена низведёт [низвести] низвёл [низвести] низёхонький низёхонько низёшенький (САМ) низёшенько (САМ) низкообогащённый низойдёт [низойти] низошёл [низойти] никчёмность никчёмный ни к чёрту ни о чём нипочём ниспадёт [ниспасть] ниспошлёт [ниспослать] нисшёл [низойти] ни то ни сё нитрошёлк ничьё, ни в чьём новёхонький новёшенький нововведённый новожёны (секта) новозаведённый (САМ) новоизобретённый новоиспечённый новокрещённый новонаречённый и новонарече’нный новонасаждённый новонаселённый новообращённый новопосвящённый (РСЯР) новоприобретённый новоприсоединённый новорождённый (прил.) новорождённый (сущ.) новосёл новосёлка новосёлец (В.Ч.) новосёлцы (В.Ч.) новотёл новохопёрский новохопёрец новохопёрцы новьё (БСРЖ) ногопёрые нодьё (Даль) ножёвщина (РСЯР) ноздрёвский (от Ноздрёв) ноздрёй [ноздря] нокаутёнок (БСРЖ) нокаутёр нолём [ноль] нормалёк носарём [носарь-рыба] носослёзный нотьё (Даль) ночевьё (РСЯР) с ночевьём (РСЯР) ночёв (РСЯР) ночёва (РСЯР) ночёвка (Даль) ночёвки (ночвы) (Даль) ночёвщик (САМ) нормалёк (БСРЖ) норчёпингец (СГЖСССР, Швеция) норчёпингцы (СГЖСССР, Швеция) ноябрём [ноябрь] нулемёт (НВМ) нулемётчик (НВМ) нулёвка нулёвка (БСРЖ) нулёвый (БСРЖ) нулём [нуль] нутрёнок нутрёночек нырнёт [нырнуть] нытьё, нытьём (Даль) нюхнёт [нюхнуть]     О обагрённый, -ён, -ена обведённый, -ён, -ена обведёт [обвести] обвёз [обвезти] обвезённый, -ён, -ена обвезёт [обвезти] обвёл [обвести] обвернёт(ся) [обвернуть(ся)] обвёрнутый обвёртка обвёртывание обвёртывать(ся) обве’шенный (при покупке товара) обве’шенный (украшениями) обвешённый, -ён, -ена (обозначенный вехами) обвинённый, -ён, -ена обводнённость обводнённый, -ён, -ена обволочённый, -ён, -ена обволочёт(ся) [обволочь(ся)] обворожённый, -ён, -ена обгниёт [обгнить] обговорённый, -ён, -ена обгрызёт [обгрызть] обдаёт(ся) [обдавать(ся)] обдарённый, -ён, -ена обделённость обделённый, -ён, -ена обдёргивать(ся) обдёрганный, -ён, -ена обдёргать обдёргивать(ся) обдёрнутый обдёрнуть(ся) обдерёт(ся) [ободрать(ся)] обдёрнуть(ся) обдурённый, -ён, -ена обеднённость обеднённый, -ён, -ена обезнёбеть, обезнёбел (Даль) обезъёшен, -ена (В.Ч.) обезъёшеный, -ая (текст, газета) (В.Ч.) обезъёшенный (прич.) (В.Ч.) обезнадёжение обезнадёженный, -ен, -ена обезнадёживание обезнадёживать(ся) обезнадёжить обезызвествлённый, -ён, -ена обелённый, -ён, -ена оберёг(ся) [оберечь(-ся)] оберёгшийся обережённый, -ён, -ена обережёт(ся) [оберечь(ся)] оберёмок (САМ) оберёт(ся) [обобрать(ся)] обернёт(ся) [обернуть(ся)] обёрнутый, обёрнут обёртка обёрточка обёрточница обёрточный обёртчица обёртывание обёртывать(ся) обжёванный, -ан, -ана обжёвывать(ся) обжёг(ся) [обжечь(ся)] обживёт(ся) [обжить(ся)] обжёгшийся обжог (но глаг. обжёг) обжуёт [обжевать] обзаведёт(ся) [обзавести(сь)] обзавёлся [обзавестись] обзвонённый, -ён, -ена обзёл (Даль) обзёлок (Даль) обзовёт [обозвать] обкалённый, -ён, -ена обклёванный, -ан, -ана обклёвывать обклeенный; обклeен, -а, -о обклюёт [обклевать] обкрадёт [обокрасть] облачённый, -ён, -ена облегчённо (нареч.) облегчённость облегчённый, -ён, -ена обледенённый (САМ) облесённость облесённый, -ён, -ена облечённый, -ён, -ена облечёт(ся) [облечь(ся)] облёванный, -ан, ана облёвывание облёвывать(ся) облёг [облечь] облёгся на перила (РСЯР) облёгший(ся) облёжанный, -ан, -ана (разг.) облёживать (разг.) облёза (Даль) облёк(ся) [облечь(ся)] облёт облётанный, -ан, -ана облётки (РСЯР) облётывание облётывать(ся) облётчивый (РСЯР) облизнёт(ся) [облизнуть(ся)] обличённый, -ён, -ена облосьёниться (НВРЛ) облучённость облучённый, -ён, -ена облущённый, -ён, -ена обмакнёт(ся) [обмакнуть(ся)] обмахнёт(ся) [обмахнуть(ся)] обмежёванный, -ан, -ана обмежёвка обмежёвывание обмежёвывать(ся) обмелёванный, -ан, -ана обмелённый, -ён, -ена обменённый, -ён, -ена обметённый, -ён, -ена обметёт [обмести] обмёл [обмести] обмёрз, -ла, -ло [обмёрзнуть] обмёрзлый обмёрзнуть, -ёрз, -ёрзла обмёрзший обмёт обмётанный, -ан, -ана обмётка обмётки (РСЯР) обмётные сети (РСЯР) обмётный венчик (РСЯР) обмёточный обмётший обмётывание обмётывать(ся) обмирщённый, -ён, -ена обнадёженный, -ан, -ана обнадёживание обнадёживать(ся) обнадёживающий(ся) обнадёжить(ся) обнадёжка (БСРЖ) обнадёжный (РСЯР) обнадёжитель (РСЯР) обнадёжливые вести (РСЯР) обнажёнка (напр., обнажённый участник спектакля) обнажёнка (БСРЖ) обнажённо (нареч.) обнажённость обнажённый, -ён, -ена обнёс [обнести] обнесённый, -ён, -ена обнесёт [обнести] обнесёшь [обнести] (вульг.) обнёсший обновлённость обновлённый, -ён, -ена обобрёл (обобрести) обобщённо (нареч.) обобщённо-личный обобщённость обобщённый, -ён, -ена, (прич.)(не затрагивающий частности) и -ён, -ённа (напр., выводы недостаточно обобщённы) обобществлённый, -ён, -ена обобьёт(ся) [оббить(ся)] обоврёт [обоврать] (В. Санчук) обовьёт(ся) [обвить(ся)] обогащённый, -ён, -ена обогнёт [обогнуть] обоготворённый, -ён, -ена ободрённый, -ён, -ена обождёт [обождать] обожествлённый, -ён, -ена обожжённый, -ён, -ена обожжёт(ся) [обжечь(ся)] обожмёт(ся) [обжать(ся)] обожнёт(ся) [обжать(ся)] обожрёт(ся) [обожрать(ся)] (прост.) обозёрье (РСЯР) обозлённо обозлённый, -ён, -ена обознаёт(ся) [обознавать(ся)] обои-плёнка, обоев-плёнки обойдённый, -ён, -ена обойдёт(ся) [обойти(сь)] обойдётся [обойтись] обоймёт(ся) [объять и прост. от обнять(ся)] оболжёт [оболгать] обольёт(ся) [облить(ся)] обольщённый, -ён, -ена обомнёт(ся) [обмять(ся)] обомрёт [обмереть] обопрёт(ся) [опереть(ся)] обопьёт(ся) [опить(ся)] оборвёт(ся) [оборвать(ся)] оборонённый, -ён, -ена обострённо (нареч.) обострённость обострённый, -ён, -ена оботрёт(ся) [обтереть(ся)] обочтёт(ся) [обчесть(ся)] обошёл [обойти] обошёлся [обойтись] обошьёт(ся) [обшить(ся)] обра’мленный (в раме) обрамлённый, -ён, -ена (окаймлённый) обрастёт [обрасти] обращённость обращённый, -ён, -ена обревёт(ся) [обреветь(ся)] обрёк [обречь] обрёкший(ся) обрёл [обрести] обременённый, -ён, -ена обретённый, -ён, -ена обретёт(ся) [обрести(сь)] обречённо (нареч.) обречённость обречённый, -ён, -ена обречёшь [обречь] обрешёт (НВРЛ) обрешётка обрешёточный обронённый, -ён, -ена обручённый, -ён, -ена обсeкший(ся) и обсёкший(ся) обсеменённость обсеменённый, -ён, -ена обсе’ченный (удалённый при помощи отсечения: обсeченные сучья) обсечённый, -ён, -ена (в значении обтёсанный: обсечённый камень) обсечёт(ся) [обсёчь(ся)] обслюнённый, -ён, -ена обсмеёт(ся) [обсмеять(ся)] обстрижёт(ся) [обстричь(ся)] обсосёт(ся) [обсосать(ся)] обстаётся(ся) [обставать(ся)] обстрёмывать, -ся (Е) обстрижёт(ся) [обстричь(ся)] обсуждённый, -ён, -ена обсчёт обтёк [обтечь] обтёкший обтёр(ся) [обтереть(ся)] обтёртый; обтёрт, -а, -о обтёрхать, -ся обтёрхивать, -ся (Е) обтёрший(ся) обтёсанный, -ан, -ана обтёска обтёсок (РСЯР) обтёсывание обтёсывать(ся) обтечёт [обтечь] обтрёпанный, -ан, -ана обтрёпывать(ся) обтрясённый, -ён, -ена обтрясёт [обтрясти] обтряхнёт(ся) [обтряхнуть(ся)] обурённый, -ён, -ена обхамлённый, -ён, -ена обхитрённый, -ён, -ена обчёл(ся) [обчесть(ся)] обчёсанный, -ан, -ана обчёска обчёсывание обчёсывать(ся) обчёт (РСЯР) рубль обчёту (РСЯР) обшибёт [обшибить] обшлёндать (Даль) обшлёалась (Даль) обшлёпанный обшлёпанье (Даль) обшлёпать(ся) обшлёпывать(ся) общёлканный, -ан, -ана общёлкать общнётся [общнуться] общепитьё (НВМ) общераспространённость общераспространённый общерублёвый (НВРЛ) объединённый, -ён, -ена объём объёмистость объёмистый объёмно-блочный объёмно-вращательный объёмно-оптический объёмно-планировочный объёмно-плоскостный объёмно-пространственный объёмность объёмный объёмчивый (РСЯР) объёрзать, -ал (Даль) объяснённый, -ён, -ена обыдёнкой (нареч.) обыдённость обыдённый, -ён, -ённа обыдёнщина обызвествлённый, -ён, -ена обытовлённый, -ён, -ена овеществлённый, -ён, -ена овёс овёс (БСРЖ) овёс-мешанка (РСЯР) овирапторёнок овьёт(ся) [овить(ся)] оглаше’нный (ведущий себя бестолково, шумно) оглашённый, -ён, -ена (объявленный) оглеённый, -ён, -ена оглуплённый, -ён, -ена оглушённый, -ён, -ена огнезащищённый огнемёт огнемёт (БСРЖ) огнемётный огнёва (РСЯР) огнёвка (два знач.: гриб и бабочка) огнёвка (БСРЖ) огнёвый жар (РСЯР) огнём [огонь] оговорённый, -ён, -ена оголённость оголённый, -ён, -ена огонёк огонёк (БСРЖ) огонёчек огорчённо (нареч.) огорчённый, -ён, -ена огосударствлённый ограждённость ограждённый, -ён, -ена огранённый, -ён, -ена огребённый, -ён, -ена огребёт(ся), огрёб(ся) [огрести(сь)] огрёб [огрести] огрёбки огрёбший(ся) огрублённо (нареч.) огрублённый, -ён, -ена огрызёт [огрызть] огрызнётся [огрызнуться] огублённый, -ён, -ена одарённость одарённый (прич. с дополн.) -ён, -ена и (прил. с дополн.) -ён, -ена, но (без дополн.) -ён, -ённа оделённый, -ён, -ена одёва (РСЯР) и (Даль) одёвка (Даль) одёжа (Даль) одёжина одёжка (прост.) одёжки-назва’ния (НВРЛ) одёжная (РСЯР) одёжный одёнки (Даль) одёнок (Даль) одёр (прост.) одёр (БСРЖ) одёрганный, -ан, -ана (от одёргать) одёргать одёргивание (от одёргивать) одёргивать(ся) одёрнутый одёрнуть(ся) одёрчатая (РСЯР) одёрчик (РСЯР) одинёхонек одинёшенек один-одинёхонек один-одинёшенек одна-одинёхонька одна-одинёшенька однёрка (обл. единица) однове’сeльный и одновёсельный одновремёнка (БСРЖ) однодерёвка одножён (РСЯР) одноимённость одноимённый, -ёнен, -ённа одноколёсный однопомётный однопомётчик однотёс (САМ) одночастёвка одношёрстный и одношёрстый одухотворённо одухотворённость одухотворённый, -ён, -ена и (прил.) -ён, -ённа одушевлённо (нареч.) одушевлённость одушевлённость-неодушевлённость одушевлённый, -ён, -ена и (прил.) -ён, -ённа оёжиться (Даль) ожерёб ожерёлок (воротник-стойка рубахи) (Вологда) ожесточённо (нареч.) ожесточённость ожесточённый, -ён, -ена и (прил.) -ён, -ённа ожёг(ся) [ожечь(ся)] ожёгший(ся) ожёсклый (РСЯР) ожёскнуть (РСЯР) ожжённый, -ён, -ена ожжёт(ся) [ожечь(ся)] оживёт [ожить] оживлённо (нареч.) оживлённость оживлённый, -ён, -ена и (прил.) -ён, -ённа оживотворённый, -ён, -ена ожидовлённый ожог, но (глаг.) ожёг озападнённый озарёнка («ЛГ», №1, 2005) озарённость озарённый, -ён, -ена оздоровлённый, -ён, -ена озеленённый, -ён, -ена озернённость озернённый, -ён, -ена озёв (НВРЛ) озёвник (Даль) с озёву (Даль) озёвывать (Даль) озёпать (Даль) озёра, озёр и т. д. (мн. ч.  от озеро) озёрец (СГЖСССР) озёрка (лодка-белозерка) (Даль) озёрцы (СГЖСССР) озёрко озёрно-болотный озёрно-ледниковый озёрно-лесной озёрно-речной озёрный озёрский (от Озёрск) озёрца, озёрец и т. д.  (мн. ч. от озерцо’) озёрец озёрка озёрцы озлённый, -ён, -ена озноблённый, -ён, -ена озолочённый, -ён, -ена ой-ё-ёй (междом.) ой-ё-ё-ёй окаёмка окаёмный окаёмок оказёненный оказёнивание оказёнивать(ся) оказёнить(ся) окаймлённый, -ён, -ена окислённый, -ён, -ена и окисленный оклёванный, -ан, -ана оклёвывать оклём (БСРЖ) оклёмываться оклёп (РСЯР) оклёпка (РСЯР) оклёпок (Даль) оклеймённый, -ён, -ена оклюёт [оклевать] узник, оключённый оковами (РСЯР) окоём (поэт.) околе’сица и околёсица околёсная (разг.) околозвёздный околокремлёвский (НВРЛ) окорённый, -ён, -ена окорёнок окременённый, -ён, -ена окрещённый, -ён, -ена окровенённый, -ён, -ена окроплённый, -ён, -ена округлённо-вогнутый округлённость округлённый, -ён, -ена окружённый, -ён, -ена окрылённо (нареч.) окрылённость окрылённый, -ён, -ена октябрём [октябрь] октябрёнок октябрёнок (СРВЖ) окуёт [оковать] о’куневый и окунёвый окунёк окунёт(ся) [окунуть(ся)] окунём-ка мы его в воду (В.Ч.) окуснётся [окуснуться] оледенённый, -ён, -ена олёкминец (СГЖСССР) олёкминский (от Олёкма и Олёкминск) олёкминцы (СГЖСССР) оленёк оленёкский (от р. Оленёк) оленёнок (от олень) оленёночек олёна (разварёна, запалёна) (Даль) олёнка (жук) олицетворённый, -ён, -ена Ольга-Фёдор (СРВЖ) омеднённый, -ён, -ена омертвлённый, -ён, -ена омёт (стог сена) омоложённый, -ён, -ена омоченный и омочённый, -ён, -ена омрачённость омрачённый, -ён, -ена омулёвый омылённый, -ён, -ена о нём онёр (со всеми онёрами) онёры опадёт [опасть] опалёвец (В.Ч.) опалёвцы (В.Ч.) опалённый, -ён, -ена опахнёт(ся) [опахнуть(ся)] опeка (опёка неправ.) опенённый, -ён, -ена опережённый, -ён, -ена оперёд (РСЯР) оперённый, -ён, -ена опёнковая похлёбка (Даль) опёночная (Даль) опёнок, опёнки и опята опёнок (БСРЖ) опёр(ся) [опереть(ся)] опёртый, опёрта, опёрто опёрший(ся) оплёванный, -ан, -ана оплёвывание оплёвывать(ся) оплёка (РСЯР) оплёл [оплести] оплёсканный, -ан, -ана оплёскивать(ся) оплеснёт(ся) [оплеснуть(ся)] оплёснутый оплетёт(ся) [оплести(сь)] оплетённый, -ён, -ена оплётка оплёточный оплётчик оплётчица оплётший оплодотворённый, -ён, -ена оплывёт [оплыть] оплюёт [оплевать] оповещённый, -ён, -ена опо’енный и опоённый, -ён, -ена опознает [опознать] опознаёт(ся) [опознавать(ся)] оползёт [оползти] ополоснёт(ся) [ополоснуть(ся)] ополчён своим именем (РСЯР) ополчённый, -ён, -ена опорожнённый, -ён, -ена и опоро’жненный определённо (нареч.) определённость определённый, -ён, -ена и (прил.) -ёнен, -ённа опреснёнка (НВРЛ) опреснённый, -ён, -ена опришённый опромёт (РСЯР) опромётка (РСЯР) опромётком (РСЯР) опромётный (РСЯР) опрощённый, -ён, -ена опустошённо (нареч.) опустошённость опустошённый, -ён, -ена опушённый, -ён, -ена опылённый, -ён, -ена опьянённый, -ён, -ена оранжево-жёлтый оребрённый, -ён, -ена орёл орёл (БСРЖ) орёл-змееяд орёлик орёл-могильник орёл-скоморох орёт [орать] (кричать и пахать) орлёнок орлёный (с изображением орла) орошённый, -ён, -ена оррёр («М.Д.», гл. 9) осаждённый, -ён, -ена осведомлённость осведомлённый, -ён, -ена освежёванный, -ан, -ана освежённый, -ён, -ена осветлённый, -ён, -ена освещённость освещённый, -ён, -ена освобождённый, -ён, -ена освящённейший (Суворов) освящённый, -ён, -ена осeкший(ся) и осёкший(ся) осеменённый, -ён, -ена осенённый, -ён, -ена осеребрённый, -ён, -ена осечёт(ся) [осёчь(ся)] осёдланный, -ан, -ана и осе’дланный осёдлость (НВРЛ) осёдлывать(ся) осёк(ся), -ла(сь), -ло(сь) [осечь(ся)] осёл и осе’л – силок, аркан (Даль) осёл (ишак) осёлка (Даль) осёстрить (Иг. Сев.) осётр осётр (СРВЖ) осквернённый, -ён, -ена оско’бленный и оскоблённый, -ён, -ена оскоплённый, -ён, -ена оскорблённо (нареч.) оскорблённый, -ён, -ена оскрёб [оскрести] оскребёт [оскрести] оскрёбка (РСЯР) оскрёбки, оскрёбок оскрёбший оскрёбывать оскрёбыш оскрёбыши (РСЯР) ослёнок ослеплённость ослеплённый, -ён, -ена осложнёнка (Е) осложнённый, -ён, -ена осмётки по И. Бунину — старая обувь (САМ) осмолённый, -ён, -ена оснащённость оснащённый, -ён, -ена оснежённый, -ён, -ена и осне’женный оснуёт(ся) [основать(ся)] оснуёшься особоодарённый осоложённый, -ён, -ена осолонённый, -ён, -ена осрамлённый, -ён, -ена осреднённый, -ён, -ена остаётся [оставаться] остеклённый, -ён, -ена остепенённый, -ён, -ена остервенённый, -ён, -ена остерёг(ся) [остеречь(ся)] остерёгший(ся) остережёт(ся) [остерёчь(ся)] остерёжный (Даль) остёгиванье (Даль) остёгивать (Даль) остёр [острый] остолбенённый, -ён, -ена остранённый, -ён, -ена острёмиться (Е) острённый, -ён, -ена остриё, остриёв, остреё, остриём, остреём острижёт(ся) [остричь(ся)] остропёстро острорёберный осуждёнка (НВРЛ) осуждённый, -ён, -ена осу’шенный и осушённый, -ён, -ена осуществлённый, -ён, -ена отбелённый, -ён, -ена отберёт(ся) [отобрать(ся)] отблагодарённый, -ён, -ена отблeскивать и отблёскивать отбредёт, отбрёл [отбрести] отбрёл в сторону (РСЯР) отбрёхиваться отведённый, -ён, -ена отведёт [отвести] отверждённый, -ён, -ена отвернёт(ся) [отвернуть(ся)] отвезённый, -ён, -ена отвезёт [отвезти] ответвлённый, -ён, -ена отвёз [отвезти] отвёзший отвёл [отвести] отвёрнутый отвёртка отвёртка (БСРЖ) отвёртник (БСРЖ) отвёрточник (Е) отвёртывание отвёртывать(ся) отвильнёт [отвильнуть] отвлечённо-инженерный (НВРЛ) отвлёк(ся) [отвлечь(-ся)] отвлёкший(ся) отвлечённо (нареч.) отвлечённость отвлечённый, -ён, -ена и (прил.) -ён, -ённа отвлечёт(ся) [отвлёчь(ся)] отвоёванный, -ан, -ана отвоёвывание отвоёвывать(ся) отволо’ченный и отволочённый, -ён, -ена отволочёт(ся) [отволочь(ся)] отво’ренный и отворённый, -ён, -ена отворожённый, -ён, -ена отвращённый, -ён, -ена отглотнёт [отглотнуть] отгниёт [отгнить] отговорённый, -ён, -ена отгранённый, -ён, -ена отграфлённый, -ён, -ена отгребённый, -ён, -ена отгребёт(ся) [отгрести(сь)] отгребёшь [отгрести] отгрёб [отгрести] бери в отгрёб (РСЯР) уходить наотгрёб (РСЯР) отгрёбка отгрёбки отгрёбший отгрёбщик отгру’женный и отгружённый, -ён, -ена отгрызёт(ся) [отгрызть(ся)] отгрызнёт(ся) [отгрызнуть(ся)] отдаёт(ся) [отдавать(ся)] стужа отдаёт (РСЯР) отдалённость отдалённый, -ён, -ена и (прил.) -ён, ённа отда’ренный и отдарённый, -ён, -ена отделённость отделённый, -ён, -ена (от отделить) отделённый (к отделение, воен.) отдёрганный отдёргать отдёргивание отдёргивать(ся) отдерёт(ся) [отодрать(ся)] отдёрнутый отдёрнуть(ся) отдохнёт [отдохнуть] отемнённый, -ён, -ена отенённый, -ён, -ена отеплённый, -ён, -ена отетёха (Даль) отёк (опухоль) отёк [отечь] отёкший отёл отёлочный отёр(ся) [отереть(-ся)] отёртый; отёрт, -а, -о отёрший(ся) отёсанный; отёсан, -а, -о отёска отёсывание отёсывать(ся) отечёт [отечь] отёчность отёчный отжёванный, -ан, -ана отжёвывать отжёг [отжечь] отжёгший отживёт [отжить] отживлённый, -ён, -ена отжог, но (глаг.) отжёг отжуёт [отжевать] отзовёт(ся) [отозвать(ся)] отзолённый, -ён, -ена откачнёт(ся) [откачнуть(ся)] отклёвывать отклёванный, -ан, -ана отклёвывать(ся) отклёп(ка) отклёпанный, -ан, -ана отклёпывание отклёпывать(ся) отклонённый, -ён, -ена отклюёт [отклевать] отключённый, -ён, -ена отковырнёт [отковырнуть] откозырнёт [откозырнуть] отколёсить отколупнёт [отколупнуть] откочёвка откочёвывание откочёвывать откреплённый, -ён, -ена откуёт(ся) [отковать(ся)] отлёг [отлечь] отлёживать(ся) отлёжник (НВРЛ) отлёт (сущ. от отлетать) отлёт (БСРЖ) отлётисто (Даль) отлётный отлётная птица (РСЯР) отлёток (Даль) отлётыш (Даль) отличённый, -ён, -ена отлучённый, -ён, -ена отмалёвывать отма’ненный и отманённый, -ён, -ена отмахнёт(ся) [отмахнуть(ся)] отмежёванный, -ан, -ана отмежёвка отмежёвывание отмежёвывать(ся) отмёл [отмести] отменённый, -нён, -нена отмёрз, отмёрзла [отмёрзнуть] отмёрзнуть отмёрзший отмётанный, -ан, -ана отметённый, -ён, -ена отметёт [отмести] отмёт гривы (РСЯР) отмётная земля (РСЯР) отмётший отмщённый, -ён, -ена отнедалёку (РСЯР) отнесённый, -ён, -ена отнесёт(ся) [отнести(сь)] отнёс(ся) [отнести(сь)] отнёсший(ся) отображённый, -ён, -ена отобрёл отобьёт(ся) [отбить(ся)] отовьёт [отвить] отогнёт(ся) [отогнуть(ся)] отождествлённый и отожествлённый, -ён, -ена отожжённый, -ён, -ена отожмёт(ся) [отжать(ся)] отожнёт(ся) [отжать(ся)] отойдёт [отойти] отолжётся [отолгаться] отольёт(ся) [отлить(ся)] отомкнёт(ся) [отомкнуть(ея)] о том о сём отомрёт [отмереть] отомщённый, -ён, -ена отопрёт(ся) [отперeть(ся)] отопьёт(ся) [отпить(ся)] оторвёт(ся) [оторвать(ся)] оторвёшься [оторваться] ототкнёт [ототкнуть] ототрёт(ся) [оттереть(ся)] отошёл [отойти] отошлёт [отослать] отошьёт [отшить] отпадёт [отпасть] отпасёт(ся) [отпасти(сь)] отпахнёт(ся) [отпахнуть(ся)] отпечённый, -ён, -ена отпечёт [отпечь] отпёк [отпечь] отпёкший отпётый, но о’тпер отпёрший(ся) отпихнёт(ся) [отпихнуть(ся)] отплеснёт [отплеснуть] отплетённый, -ён, -ена отплетёт(ся) [отплести(сь)] отплёвывать(ся) отплёл [отплести] отплёскивание (САМ) отплёскивать отплёснутый отплёсок (РСЯР) отплётший(ся) отплоённый (САМ) отплывёт [отплыть] отплюёт(ся) [отплевать(ся)] отпоёт [отпеть] отползёт [отползти] отпрядённый, -ён, -ена и отпря’денный отпрядёт [отпрясть] отпряжённый, -ён, -ена отпряжёт(ся) [отпрячь(ся)] отпугнёт [отпугнуть] отражённо (нареч.) отражённо-преломлённый отражённый, -ён, -ена отрастёт [отрасти] отращённый, -ён, -ена отревёт(ся) [отреветь(ся)] отрезвлённый, -ён, -ена отрече’нный (отрече’нные книги — апокрифы) отречённый, -ён, -ена отречёт(ся) [отрёчь(ся)] отрешённо (нареч.) отрешённость отрешённый (прич.), -ён, -ена и (прил.), -ён, -ена и -ён, -ённа отрёка (РСЯР) отрёкся [отречься] отрёкшийся отрёпанный, -ан, -ана отрёпистый (РСЯР) отрёпки отрёпывать(ся) отрёпыш отрёт(ся) [отереть(ся)] отроённый, -ён, -ена (о пчелином рое) отрыгнёт(ся) [отрыгнуть(ся)] отряжённый, -ён, -ена отрясённый, -ён, -ена отрясёт [отрясти] отряхнёт(ся) [отряхнуть(ся)] отсёк [отсечь] отсе’кший(ся) и отсёкший(ся) отселённый, -ён, -ена отсечённый, -ён, -ена отсечёт(ся) [отсечь(ся)] отсёлковый (РСЯР) отсёлок (отсюда) (САМ) отсёлочный (РСЯР) отскакнёт [отскакнуть] отскрёб [отскрести] отскребённый, -ён, -ена отскребёт(ся) [отскрести(сь)] отскрёбший отскрёбывать(ся) отслоённый, -ён, -ена отслонённый, -ён, -ена отслюнённый, -ён, -ена отсмеётся [отсмеяться] отсморкнётся [отсморкнуться] отсоединённый, -ён, -ена отсосёт, -ёшь [отсосать] отстаёт [отставать] отстегнёт(ся) [отстегнуть(ся)] отстёбывать (Е) отстёганный, -ан, -ана отстёгивание отстёгивать(ся) отстёгивать (БСРЖ) отстёгнутый отстёжка отстёжник отстёжник (БСРЖ) отстранённо (нареч.) отстранённость отстранённый, -ён, -ена и (прил.) -ён, -ённа отстрижёт(ся) [отстричь(ся)] отсчёт отсчётный оттёк [оттечь] оттёкший оттенённый, -ён, -ена оттёр(ся), оттёрла(сь), оттёрло(сь) [оттереть(ся)] оттереблённый, -ён, -ена оттёртый; оттёрт, -а, -о оттёрший(ся) оттёсанный, -ан, -ана оттёска оттеснённый, -ён, -ена оттёсывание оттёсывать(ся) оттолкнёт(ся) [оттолкнуть(ся)] оттрёпанный, -ан, -ана оттрёпывать(ся) оттрясённый, -ён, -ена оттрясёт [оттрясти] оттряхнёт [оттряхнуть] оттушёванный, -ан, -ана оттушёвка оттушёвывание оттушёвывать(ся) отхлебнёт [отхлебнуть] отхлёбнутый отхлёбывать(ся) отхлёстанный, -ан, -ана отхлёстывать(ся) отцвёл [отцвести] отцветёт [отцвести] отциклёванный, -ан, -ана отчаёвничать отчеркнёт [отчеркнуть] отчерпнёт(ся) [отчерпнуть] отчёркивание отчёркивать(ся) отчёркнутый, отчёркнут, -а, -о отчёсанный отчёсывание отчёсывать(ся) отчёт отчётисто (РСЯР) отчётистый отчётливо (нареч.) отчётливость отчётливый отчётно-вы’борный отчётно-перевы’борный отчётность отчётный отчётоёмкий (НВРЛ) отчленённый, -ён, -ена отчуждённо (нареч.) отчуждённость отчуждённый, -ён, -ена отшагнёт [отшагнуть] отшатнётся [отшатнуться] отшвырнёт [отшвырнуть] отшелушённый, -ён, -ена отшибёт [отшибить] отшлёпанный, -ан, -ана отшлёпать отшлёпывание отшлёпывать отщёлканный, -ан, -ана отщёлкать отщёлкивание отщёлкивать(ся) отщелкнёт [отщелкнуть] отщёлкнутый, отщёлкнут, -а, -о отщёлкнуть(ся) отщемлённый, -ён, -ена отщеплённый, -ён, -ена отщипнёт(ся) [отщипнуть(ся)] отъединённость отъединённый, -ён, -ена отъём отъёмистый (Даль) отъёмка отъёмник (Даль) отъёмный отъёмок (Даль) отъёмочный (Даль) отъёмщик (Даль) отъёмыш отъёрзал (Даль) отъёрзать (Даль) отъёрзнуть (Даль) отёрничать (Даль) отымённый и отыме’нный отьмён (Иг. Сев.) отягощённость отягощённый, -ён, -ена отягчённый, -ён, -ена отяжелённый, -ён, -ена офис-гёрл (НВРЛ) офицерьё офлёрить (И. Сев.) охлаждёнка охлаждённый, -ён, -ена охлестнёт(ся) [охлестнуть(ся)] охлёбки (РСЯР) охлёста (РСЯР) охлёстанный, -ан, -ана охлёстнутый охлёстывает (РСЯР) охлёстывание охлёстывать(ся) охлёстыш (РСЯР) охмелён охмелённый, -ён, -ена охмурёж охмурёжник (Е) охмурёжница (Е) охмурённый, -ён, -ена охолощённый, -ён, -ена охранённый, -ён, -ена охулённый, -ён, -ена оценённый, -ён, -ена оцепенённый, -ён, -ена очерёвочек мой (мать о ребёнке) (РСЯР) очерёдность очеркнёт [очеркнуть] очернённый, -ён, -ена очерствлённый, -ён, -ена очёлок (РСЯР) очёлыш (РСЯР) очёркивание очёркивать(ся) очёрец (СГЖСССР) очёрцы (СГЖСССР) очёркнутый очёртить, очёртив (Иг. Сев.) очёс очёсанный очёска очёски очёсочный очёсывание очёсывать(ся) очёчник и очeчник очёчный очнётся [очнуться] очувствлённый, -ён, -ена ошеломлённо (нареч.) ошеломлённость ошеломлённый, -ён, -ена ошелушённый, -ён, -ена ошёсток ошибётся [ошибиться] ошлёп (Даль) ошлёпанье (Даль) ошлёпка (Даль) ошлёпок (Даль) ошмётки (прост.) ощущённый, -ён, -ена оякорённый (Иг. Сев.)     П павлинёнок павлинёночек паголёнок (Е) падeж (грам.) падёж (скота) падёжный (от падёж) падёт [пасть] паёв (от пай) паёк паёк (БСРЖ) паёл (САМ) палёвый (БСРЖ) палёд (Даль) палёнка (БСРЖ) палённый, -ён, -ена (прич.) палёный (прил.) палёный (БСРЖ) палёный ствол (СРВЖ) палиндромьё (семейство палиндромов с буквой Ё) (В.Ч.) пальнёт [пальнуть] пальчато-рассечённый памфлетёр памфлетёрка панёва (РИБС) панёвница (САМ) панёр (морской термин) (САМ) паникёр паникёр (СРВЖ) паникёрство паникёрствовать паникёрша пантёма (Даль) пантёха (РСЯР) панцирощёкие (зоол.) папушёвка папушёвочный паратуберкулёз (болезнь) паратуберкулёзный паренёк парёнка парламентёр парламентёрский парламентёрство парно-твёрдый парольдонёр (честное слово) (РИБС) партнёр партнёрский партнёрство партнёрша партучёба парфён (СГЖСССР) парфёнка (СГЖСССР) парфёны (СГЖСССР) пасённый, -ён, -ена [пасти] (прич.) пасёт(ся) [пасти(сь)] пасёшь [пасти] паслён (бот.) (Даль) паслёновый пастереллёз (болезнь) пастерёк (корзина из берёсты) пасти ёжиков (СРСЮЮ) пахнёт [пахнуть] пацанёнок пацанёночек пацаньё пащёнок (БСРЖ) педикулёз (болезнь) пекелёк (Даль) пеклева’нный (прил.) пеклёванный, -ан, -ана (прич.) пеклёвка пелёва (Даль) пелён (р. п. мн. ч. от пелена) пелёнатый пелёнка пелёночка пелёночный пельменомёт (Е) пeнгё и пeнго пенёк (Даль) пенёк (БСРЖ) пенёчек пеньё (петь) пеньё (пень, пни) (Даль) топить пеньём (Даль) пень-пнём перволёдок первонамётка (НВРЛ) первоочередно’й и первоочерёдный первоочерёдность перворождённый первотёл первотёлка перебелённый, -ён, -ена переберёт(ся) [перебрать(ся)] переборонённый, -ён, -ена перебредёт [перебрести] перебрёл [перебрести] перебьёт(ся) [перебить(ся)] переведённый, -ён, -ена переведёт(ся) [перевести(сь)] перевезённый, -ён, -ена перевезёт [перевезти] перевернёт(ся) [перевернуть(ся)] перевёз [перевезти] перевёзший перевёл [перевести] перевёрнутый перевёрстанный, -ан, -ана перевёрстка перевёрстывание перевёрстывать(ся) перевёрт перевёртывание перевёртывать(ся) перевёртыш перевозбуждённый, -ён, -ена переволочённый, -ён, -ена переволочёт(ся) [переволочь(ся)] перевооружённость перевооружённый, -ён, -ена перевоплощённый, -ён, -ена переворошённый, -ён, -ена переврёт [переврать] (разг.) перевьёт(ся) [перевить(ся)] переглушённый, -ён, -ена перегнёт(ся) [перегнуть(ся)] перегниёт [перегнить] перегноённый, -ён, -ена переговорённый, -ён, -ена перегорчённый, -ён, -ена переграфлённый, -ён, -ена перегрёб [перегрести] перегребёт [перегрести] перегрёбший перегру’женность и перегружённость перегру’женный и перегружённый, -ён, -ена перегрязнённый, -ён, -ена перегущённый, -ён, -ена пeред (предлог) пeред и перёд (передняя часть) передаёт(ся) [передавать(ся)] переда’ренный и передарённый, -ён, -ена переделённый, -ён, -ена передёвка (РСЯР) передёрганный, -ан, -ана передёргать передёргивание передёргивать(ся) передерёт(ся) [передрать(ся)] передёрнутый передёрнуть(ся) передёрнуть (БСРЖ) передненёбный передохнёт [передохну’ть] и передо’хнет (передо’хнуть) передразнённый, -ён, -ена переёжилась (Даль) переёжиться (Даль) речка, лес с переёмами (РСЯР) переёмный (РСЯР) переёмчивый (РСЯР) шуба с переёмом (РСЯР) переёрз (Даль) переёрзал (Даль) переёрзались (Даль) переёрзанье (Даль) переёрзка (Даль) переёрзнуть (РСЯР) и (Даль) переёрзывать (Даль) переждёт [переждать] пережёв (РСЯР) пережёвка (РСЯР) пережёванный, -ан, -ана пережёвывание пережёвывать(ся) пережёг(ся) [пережечь(ся)] пережёгший(ся) пережжённый, -ан, -ана пережжёт [пережечь] переживёт [пережить] пережитьё (РСЯР) пережмёт [пережать] пережнёт [пережать] пережуёт [пережевать] перезаймёт [перезанять] перезаключённый, -ён, -ена перезакреплённый, -ён, -ена перезапряжённый, -ён, -ена перезаря’женный и перезаряжённый, -ён, -ена перезолённый, -ён, -ена перезоло’ченный и перезолочённый, -ён, -ена переизберёт(ся) [переизбрать(ся)] переиздаёт(ся) [переиздавать(ся)] перейдёт [перейти] перейдённый, -ён, -ена переймёт [перенять] перекажённые речи (РСЯР) перекалённый, -ён, -ена перекачнёт(ся) [перекачнуть(ся)] перекипячённый, -ён, -ена перекислённый, -ён, -ена переклёванный, -ан, -ана переклёвывать переклеймённый, -ён, -ена переклёкнуть (Даль) переклёпанный, -ан, -ана переклёпка переклёпывание переклёпывать(ся) переклюёт(ся) [переклевать(ся)] переключённый, -ён, -ена перекопчённый, -ён, -ена перекорёженный, -ен, -ена перекорёживать(ся) перекорёжить перекочёвка перекочёвщик (РСЯР) перекочёвывание перекочёвывать переко’шенный (выкошенный; искривлённый) перекошённый, -ён, -ена (искривлённый) перекреплённый, -ён, -ена перекрёст (в генетике) перекрёстно-диагональный перекрёстноопыляемый перекрёстный перекрёсток перекрещённый, -ён, -ена перекривлённый, -ён, -ена перекру’женный и перекружённый, -ён, -ена перекувыркнёт(ся) [перекувыркнуть(ся)] перекуёт(ся) [перековать(ся)] перелёг [перелечь] перелёгший перелёживать(ся) перелёт перелётный перелёт-ралли (НВРЛ) перелётчивый (РСЯР) перелёты (в XVII в. перебежчики, изменники) перелётывать перелу’женный и перелужённый, -ён, -ена перелущённый, -ён, -ена перельёт(ся) [перелить(ся)] перемалёванный, -ан, -ана перемалёвка перемалёвывать(ся) перема’ненный и переманённый, -ён, -ена перемахнёт(ся) [перемахнуть(ся)] перемежёванный, -ан, -ана перемежёвка перемежёвывание перемежёвывать(ся) перемежённый, -ён, -ена перемельчённый, -ён, -ена переменённый, -ён, -ена перемёрзлый перемёрзнуть перемёрзший перемёт перемётанный, -ан, -ана переметённый, -ён, -ена перемёрзлый переметёт [перемести] перемётенец (СГЖСССР) паремётенцы (СГЖСССР) перемётная перемётка переметнёт(ся) [переметнуть(ся)] перемётный перемётчик перемётший перемётывание перемётывать(ся) перемещённый, -ён, -ена перемёрзлый перемигнётся [перемигнуться] перемирённый, -ён, -ена перемнёт(ся) [перемять(ся)] переморённый, -ён, -ена перемощённый, -ён, -ена перемрёт [перемереть] перенаём перенапряжённый, -ён, -ена перенапряжёт(ся) [перенапрячь(ся)] перенаселёнка перенаселённость перенаселённый, -ён, -ена переначнётся (Тэффи) перенебрежён (РСЯР) перенесённый, -ён, -ена перенесёт(ся) [перенести(сь)] перенёс(ся) [перенести(сь)] перенёсший(ся) переночёвывать переоблачённый, -ён, -ена переобременённый, -ён, -ена переопылённый, -ён, -ена переорёт [переорать] (прост.) переоснащённый, -ён, -ена переохлаждённый, -ён, -ена переоценённый, -ён, -ена перепадёт [перепасть] перепалённый, -ён, -ена перепелёнат перепелёнут перепелёнатый и перепелёнутый перепелёнок перепелёночек перепелёнывание перепелёнывать(ся) перепестрённый, -ён, -ена перепечённый, -ён, -ена перепёк(ся) [перепечь(ся)] перепёкшийся перепёлка перепёлочка перепёлочки (хороводная игра) перепёртый перепёрший перепёк(ся), перепечёт(ся) [перепечь(ся)] перепихнёт [перепихнуть] перепихнёмся перепихнёшься переплёванный, -ан, -ана переплёвывать(ся) переплёл [переплести] переплёскивать(ся) переплеснёт [переплеснуть] переплёснутый переплёт переплёт (БСРЖ) переплетённый, -ён, -ена переплётно-брошюровочный переплетёт [переплести] переплётный переплётчик переплётчица переплётший(ся) переплочённый, -ён, -ена переплывёт [переплыть] переплюёт [переплевать] (прост.) переподаёт(ся) [переподавать(ся)] переподчинённый, -ён, -ена перепоёт [перепеть] переползёт [переползти] переполошённый, -ён, -ена перепотрошённый, -ён, -ена перепёр, перепёрла, перепрёт [перепереть] переползёт [переползти] перепорхнёт [перепорхнуть] переприём перепродаёт(ся) [перепродавать(ся)] перепряг (произносится и перепрёг) [перепрячь] перепря’денный и перепрядённый, -ён, -ена перепрядёт [перепрясть] перепряжённый, -ён, -ена перепряжёт [перепрячь] перепульнёшь [перепульнуть] перепылённый, -ён, -ена перепьёт(ся) [перепить(ся)] переразовьёт(ся) [переразвить(ся)] перераспределённый, -ён, -ена перерастёт [перерасти] перерасчёт перервёт(ся) [перервать(ся)] перерешённый, -ён, -ена перерождённый, -ён, -ена перерыхлённый, -ён, -ена пересдаёт(ся) [пересдавать(ся)] пересечёт(ся) [пересечь(ся)] пересе’кшийся и пересёкшийся переселёнка переселённый, -ён, -ена пересечёмся [пересечься] пересечённость пересечённый, -ён, -ена пересечёт(ся) [пересечь(ся)] пересёдланный, -ан, -ана пересёдлывать(ся) пересёк(ся) пересёк (сущ. кадка из бочки, полбочки) пересёмывать (РСЯР) пересинённый, -ён, -ена перескакнёт [перескакнуть] перескрёб, перескребёт [перескрести] перескрёбший переслащённый, -ён, -ена переслоённый, -ён, -ена переслюнённый, -ён, -ена пересмеёт [пересмеять] пересмехнётся [пересмехнуться] пересмолённый, -ён, -ена переснаряжённый, -ён, -ена переснащённый, -ён, -ена пересоединённый, -ён, -ена пересоложённый, -ён, -ена пересоздаёт [пересоздавать] пересо’ленный и пересолённый пересосёт(ся) [пересосать(ся)] пересочинённый, -ён, -ена перестаёт [переставать] перестёганный, -ан, -ана перестёгивание перестёгивать(ся) перестегнёт [перестегнуть] перестёгнутый перестёжка перестеклённый, -ён, -ена перестрижёт(ся) [перестричь(ся)] перестроечно-перевёртышный (НВРЛ) пересуёт [пересовать] пересчёт пересъёмка пересъёмщик перетёк, перетечёт [перетечь] перетёкший перетереблённый, -ён, -ена перетёр(ся), перетрёт(ся), -ла(сь), -ло(сь) [перетереть(ся)] перетёртый перетёршийся перетёсанный, -ан, -ана перетёсывание перетёсывать(ся) перетечёт [перетечь] переткёт [переткать) перетолкнёт [перетолкнуть] перетолчённый, -ён, -ена перетолчёт(ся) [перетолочь(ся)] перетомлённый, -ён, -ена перетонённый, -ён, -ена переторможённый, -ён, -ена перетомошённый, -ён, -ена перетрёпанный, -ан, -ана перетрёт [перетереть] перетрухнёт [перетрухнуть] перетряс (произносится и перетрёс) [перетрясти] перетрясённый, -ён, -ена перетрясёт [перетрясти] перетряхнёт [перетряхнуть] перетушёванный, -ан, -ана переубеждённый, -ён, -ена переувлажнённый, -ён, -ена переуплотнённый, -ён, -ена переутверждённый, -ён, -ена переутомлённый, -ён, -ена переучёл [переучесть] переучёт переучётный переучтённый, -ён, -ена переучтёт [переучесть] перехитрённый, -ён, -ена перехлёст перехлёстанный перехлестнёт [перехлестнуть] перехлёстнутый перехлестнуть(ся) перехлёстывать(ся) перехоложённый, -ён, -ена перехоро’неный и перехоронённый, -ён, -ена перечёл [перечесть] переценённый, -ён, -ена перечёрканный, ан, -ана перечёркать и перечерка’ть перечёркивание перечёркивать(ся) перечёркнутый перечеркнёт [перечеркнуть] перечернённый, -ён, -ена перечёс перечёсанный, -ан, -ана перечёска перечёсывать(ся) перечёт перечётный (РСЯР) поверь перечётом (РСЯР) перечтённый, -ан, -ана перечтёт [перечесть] перешагнёт [перешагнуть] перешвырнёт [перешвырнуть] перешёл [перейти] перешелушённый, -ён, -ена перешепнётся [перешепнуться] перешёптанный перешёпты (РСЯР) перешёптывать(ся) перешибёт [перешибить] перешлёт [переслать] перештемпелёванный, -ан, -ана перештемпелёвывание перештемпелёвывать(ся) перешьёт [перешить] перещёлк перещёлканный, -ан, -ана перещёлкать перещёлкивание перещёлкивать(ся) перещёлкнуть (НВРЛ) перещелочённый, -ён, -ена перёд (РСЯР) перёж (Даль) и (РСЯР) перёк дороги (РСЯР) перёное (окружённое перилами) перёла (прутья в улье) (Даль) перстенёк перстенёчек пе’рченный и перчённый, -ён, -ена (прич.) пeрченый (прил.) пескарём [пескарь] пескомёт пестрядёвый (Даль) петух-скороклёв (РСЯР) печёнка печёнка (БСРЖ) печённый, -ён, -ена (прич.) печёночник печёночница (гриб) печёночно-желудочный печёночный печёный (прил.) печёт(ся) [печь(ся)] пёк(ся) [печь(ся)] пёкло (Даль) пёкший(ся) пёль (народность в Сенегале) пёндышек (БСРЖ) пёнышки (Даль) и (РСЯР) пёр (сущ.) пёра (Даль) пёр, -ла, -ло [переть] (прост.) пёрный (БСРЖ) пёрший пёрка р. п. мн. ч. пёрок (Даль) пёрко зелёного луку (РСЯР) пёрщик пёрщица пёрышко пёрышко (БСРЖ) пёрышник (удачливый) пёрышница (удачливая) пёс пёс (БСРЖ) пёсенка (НВМ) пёсер (БСРЖ) пёсий (прост.) пёсик пёсик (БСРЖ) пёссовет (НВМ) пёстрая неделя пёстренький пёстро и пестро’ (нареч.) пёстроюбочный (НВРЛ) пёстро-яркий пёстрый; пёстр, пёстро пётр (БСРЖ) Пётр-полукма пёх (Даль) пёх (убыги, народность Сев. Кавказа) пёхать (Даль) пёхтать (Даль) пёхтусное масло (Даль) пёхом (нареч.) пивохлёб пикелёванный пикёр (САМ) пикинёр пикинёрный пилёжка (Е) пилёный (прил.) пингвинёнок пингвинёночек пиплёнок (БСРЖ) пиплёночек (БСРЖ) писарёк (САМ) писарёнок писарёночек писклёнок пистолeт-пулемёт письмён и письме’н [письмена] писюлёк (Е) питёра питонёнок питонёночек питьё, питьём пихнёт(ся) [пихнуть(ся)] пищёвка (пищевая промышленность) (прост.) плака’тно-розовощёкий (НВРЛ) планёр, планёра и т. д.  планёрка планёрный планетолёт пластьё (Даль) платеозаврёнок платёж платёжеспособность платёжеспособный платёжка платёжно-расчётный платёжный плезиозаврёнок племён (род. п. мн. ч.  от племя) пленённый, -ён, -ена плеозаврёнок плесканёт(ся) [плескануть(ся)] плеснёт [плеснуть] плетёж (РСЯР) плетёжное мастерство (РСЯР) плетёнка плетённый, -ён, -ена (прич.) плетёный (прил.) плетёт [плести] плетнёвый плетнём [плетень] плёвка (НВРЛ) плёвый (прост.) плёл(ся), пелетёт(ся) [плести(сь)] плёнка плёнкообразователь плёнкообразyющий плёнкопокры’тие плёночно-каркасный плёночный плёнчато-чесyйчатый плёнчатый плёс плётка плётка (БСРЖ) плёс плёт (РСЯР) плёточка плёточный плётший(ся) плёха (БСРЖ) плёхальница (БСРЖ) плёшница (распутная женщина) плодосъём плодосъёмник плоённый, -ён, -ена (прич.) плоёный (прил.) плотнонаселённый пло’шки-поварёшки (НВРЛ) плугарём [плугарь] плывёт [плыть] плюёт(ся) [плевать(ся)] пневмоёмкость пнемоколёсный пневмотранспортёр пнём [пень] пнёт, пнём [пнуть] по-актёрски поалёкать побасёнка побеждённый, -ён, -ена побелённый, -ён, -ена поберёг(ся) [поберечься)] побережённый , -ён, -ена побережёт(ся) [поберечь(ся)] поберёт [побрать] побёг (побежал, А. Чехов) поблёк, поблёкла и побле’к [поблёкнуть и поблeкнуть] поблёклый и побле’клый поблёкнуть, -ёк, ёкла и побле’кнуть поблёкший и побле’кший поблёскивать по-боксёрски побредёт [побрести] побрёл [побрести] побрёхивать побрёхивание побуждённый, -ён, -ена побузотёрить (ся) побьёт(ся) [побить(ся)] поварёнок поварёшка поведённый, -ён, -ена поведёт(ся) [повести(сь)] повёз [повезти] повезённый, -ён, -ена повезёт [повезти] повёл(ся), поведёт(ся) [повести(сь)] повернёт(ся) [повернуть(ся)] повёрнутый повёрстанный, -ан, -ана (от поверстать) повёрстный (от верста) повёртка (обл.) повёрток с дороги (РСЯР) для повёрту (РСЯР) повёртывать(ся) повершённый, -ён, -ена повещённый, -ён, -ена повлёк(ся) [повлечь(-ся)] повлёкший(ся) повлечёт(ся) [повлечь(ся)] поводырём [поводырь] повоёванный, -ан, -ана поволоченный, -ён, -ена поволочёт [поволочь] поворошённый, -ён, -ена повреждённый, -ён, -ена повремёнка и (реже) повреме’нка повреме’нный и (реже) повремённый поврёт [поврать] (разг.) повстаёт [повстать] повторённый, -ён, -ена и повто’ренный повывёртывать повыдёргивать повычёркивать повьёт [повить] поглёздывать (Даль) поглощённый, -ён, -ена погнёт [погнать] погниёт [погнить] погноённый, -ён, -ена погранённый, -ён, -ена погрёб [погрести] погребённый, -ён, -ена погрёбший погребёт [погрести] погромлённый, -ён, -ена погружённость погру’женный (мука, погруженная на повозку) погружённый , -ён, -ена (погружённый в воду) погрызёт [погрызть] подаёт(ся) [подавать(ся)] подбедёрок подбелённый, -ён, -ена подберёзовик подберёт(ся) [подобрать(ся)] подбодрённый, -ён, -ена подбредёт, подбрёл [подбрести] подбрёл к дому (РСЯР) подведённый, -ён, -ена подведёт [подвести] подвезённый, -ён, -ена подвезёт [подвезти] подвернёт(ся) [подвернуть(ся)] подвёз [подвезти] подвёзший подвёл [подвести] подвёрнутый подвёрстанный, -ан, -ана подвёрстка подвёрстывание подвёрстывать(ся) подвёртка подвёртки (портянки) подвёрточный подвёртывание подвёртывать(ся) подвильнёт [подвильнуть] подволочённый, -ён, -ена подволочёт [подволочь] подвощённый, -ён, -ена подвсплывёт [подвсплыть] под гнёт, под гнётом подгниёт [подгнить] подгноённый, -ён, -ена подговорённый, -ён, -ена подголублённый, -ён, -ена подгребёт(ся), подгрёб(ся) [подгрести(сь)] подгребённый, -ён, -ена подгребёт(ся) [подгрести(сь)] подгрёб (Е) подгрёбы (Е) подгрёбка (действие) подгрёбки (остатки) подгрёбшиуй(ся) подгру’женный и подгружённый, -ён, -ена подгущённый, -ён, -ена поддаёт(ся) [поддавать(ся)] поддёв поддёвка (Даль) поддёвочка поддёвочный поддёргивание поддёргивать(ся) поддерёт [пододрать] поддёрнутый поддёрнуть поддолблённый, -ён, -ена подеёшь 2-е л. ед.ч. (РСЯР) поделённый, -ён, -ена подерёт(ся) [подрать(ся)] по дешёвке подёнка подённый подёнщик подёнщина подёнщица подёрганный, -ан, -ана подёргать(ся) подёргивание подёргивать(ся) подъёрзни (Даль) подъёрзнуть (РСЯР) подёрнутый подёрнуть(ся) поджёг, подожжёт [поджечь] поджёгший подживёт [поджить] подживлённый, -ён, -ена поджог (поджог дома) подзавьёт [подзавить] подзагнёт [подзагнуть] подзаймёт(ся) [подзанять(ся)] подзалёт (Е) подзаряжённый, -ён, -ена и подзаря’женный подзём (почва под верхним слоем земли) подзёмок (РСЯР) подзоло’ченный и подзолочённый, -ён, -ена подкалённый, -ён, -ена подкипячённый, -ён, -ена подкислённый, -ён, -ена подклёв подклёванный, -ан, -ана подклёвание подклёвывать(ся) подклёпанный, -ан, -ана подклёпка подклёпывание подклёпывать(ся) подклюёт [подклевать] подключённый, -ён, -ена подковёрный подковырнёт [подковырнуть] подкопчённый, -ён, -ена подкрадётся [подкрасться] подкреплённый, -ён, -ена подкруглённый, -ён, -ена подкуёт(ся) [подковать(ся)] подлeдник (снасть) подлeток (подросток) подлёг [подлечь] подлёгочный подлёгший подлёдник (рыболов) подлёдный подлёза (Даль) подлёнок (подрост, подсед) (Даль) подлёт подлёт (БСРЖ) подлётный подлёток (птенец) подлётывать (БСРЖ) подлётышь (Даль) подлущёный, -ён, -ена подмалёванный, -ён, -ена подмалёвка подмалёвок подмалёвывание подмалёвывать(ся) подма’ненный и подманённый, -ён, -ена подмахнёт [подмахнуть] подмелённый, -ён, -ена подметёт [подмести] подменённый, -ён, -ена подметённый, -ён, -ена подмёл [подмести] подмёрз, -мёрзла, -ло [подмёрзнуть] подмёрзлый подмёрзнуть, -нет, -ёрз подмёрзший подмёрлый (РСЯР) подмётанный, -ан, -ана подмётка подмётный подмёточный подмётчик (САМ) подмётший подмётывание подмётывать(ся) подмигнёт [подмигнуть] подмоложённый, -ён, -ена подморгнёт [подморгнуть] подмощённый, -ён, -ена поднаберёт(ся) [поднабрать(ся)] поднаём поднажмёт [поднажать] подналёг [подналечь] поднапрёт [поднапереть] поднаряжёшь [поднапрячь] поднёс [поднести] поднесённый, -ён, -ена поднесёт(ся), поднёс(ся) [поднести] поднёсший(ся) подновлённый, -ён, -ена подобьёт(ся) [подбить(ся)) подовьё (Даль) подовьёт(ся) [подвить(ся)] подогнёт [подогнуть] пододёжки нет! (РСЯР) подождёт [подождать] подожжённый, -ён, -ена подожжёт [поджечь] подожмёт [поджать] подойдёт [подойти] подолблённый, -ён, -ена подольёт(ся) [подлить(ся)] подомнёт(ся) [подмять(ся)] подоплёка (кусок ткани) подоплёка подопрёт(ся) [подпереть(ся)] подопьёт [подпить] подорвёт(ся) [подорвать(ся)] подосёнок (от осень) (Даль) подострённый, -ён, -ена подоткёт [подоткать] подткнёт(ся) [подоткнуть(ся)] подотрёт(ся) [подтереть(ся)] подотчёт (подотчётная сумма) подотчётность подотчётный подошёл [подойти] подошлёт [подослать] подошьёт [подшить] подпадёт [подпасть] подпалённый, -ён, -ена подпёк подпёк [подпечь] подпёкся [подпечься] подпёкший(ся) подпёрся фертом (РСЯР) подпёртый; подпёрт, -а, -о подпёрший(ся) подпечённый, -ён, -ена подпихнёт [подпихнуть] подплёл [подплести] подплетённый, -ён, -ена подплётший подплетёт [подплести] подплывёт [подплыть] подпоёт [подпеть] подползёт [подползти] подпряг (произносится и подпрёг) подпряжённый, -ён, -ена подпряжёт(ся) [подпрячь(ся)] подпушённый, -ён, -ена подразделённый, -ён, -ена подразнённый, -ён, -ена подрастёт [подрасти] подращённый, -ён, -ена подрёберный подрежённый, -ён, -ена подрёмывать подрешётка подрулённый, -ён, -ена подрыхлённый, -ён, -ена подряжённый, -ён, -ена и подря’женный подсе’кший(ся) и подсёкший(ся) подселённый, -ён, -ена подсеребрённый, -ён, -ена подсечённый, -ён, -ена и подсе’ченный подсечёт [подсечь] подсёдланный, -ан, -ана подсёдлывать(ся) подсёкся (РСЯР) подсёл (Даль) подсёлка (Даль) подсёлок (Даль) подсинённый, -ён, -ена подскакнёт [подскакнуть] подскребённый, -ён, -ена подскребёт [подскрести] подскрёб [подскрести] подскрёбший подскрёбывание подскрёбывать(ся) подскрёбыш (Е) подскрёбышки (РСЯР) подслащённый, -ён, -ена подслоённый, -ён, -ена подсмолённый, -ён, -ена подсоберёт(ся) [подсобрать(ся)] подсоединённый, -ён, -ена подсокращённый, -ён, -ена подсосёт(ся) [подсосать(ся)] подстегнёт [подстегнуть] подстерёг [подстеречь] подстерёгший подстережённый, -ён, -ена подстережёт [подстеречь] подстёга подстёганный, -ан, -ана подстёгивание подстёгивать(ся) подстёгнутый; подстёгнут, -а, -о подстёжка подсторожённый, -ён, -ена подстрекнёт [подстрекнуть] подстрёк (РСЯР) подстрижёт(ся) [подстричь(ся)] подсуёт [подсовать] подсурьмлённый, -ён, -ена подсчёт подтаёжный подтверждённый, -ён, -ена подтёк (сущ.) подтёк [подтечь] подтёкший подтёлок (обл.) подтёр(ся) [подтереть(ся)] подтёртый подтёсанный, -ан, -ана подтёска подтёсчик подтёсывание подтёсывать(ся) подтечёт [подтечь] подтолкнёт [подтолкнуть] подтолчённый, -ён, -ена подтолчёт [подтолочь] подторможённый, -ён, -ена подтрёкать (Даль) подтрёкивает (Даль) подтрёкивать (Даль) подтрёпанный, -ан, -ана подтрясёт(ся) [подтрясти(сь)] подтушёванный, -ён, -ена подтушёвка подтушёвывание подтушёвывать(ся) подучётчик (БСРЖ) подушённый, -ён, -ена и поду’шенный (опрысканный духами) подхлёпать (Даль) подхлёстка подхлёстнутый; подхлёстнут, -а, -о подхлестнуть подхлёстывание подхлёстывать(ся) подчёркивание подчёркивать(ся) подчеркнёт [подчеркнуть] подчёркнутость подчёркнутый подчернённый, -ён, -ена подчерпнёт [подчерпнуть] подчёсанный, -ан, -ана подчёска подчёсывать(ся) подчинённость подчинённый, -ён, -ена (прич.) и -ён, -ена (прил.) с дополн.; -ён, -ённа без дополн.  подчинённый (сущ.) подшвырнёт [подшвырнуть] подшепнёт [подшепнуть] подшёптывание подшёптывать(ся) подшёрсток подшибёт [подшибить] подщёлкивание подщёлкивать подщелкнёт [подщелкнyть] подщёчный подъeм (от глагола подъесть) подъёжило (Даль) подъём (сущ.) подъём (сборы в дорогу) (Даль) подъём (СРСЮЮ) подъёлыш подъёмистый подъёмка (Даль) подъёмник подъёмник (БСРЖ) подъёмно-осмотровый подъёмно-пусковой подъёмно-транспортный подъёмный (Даль) подъёмный подъёмом (Даль) подъёмщик подъёрзни (Даль) подъёршик подъяре’мный и подъярёмный по-её (нареч.) поёживаться (Даль) поёжиться, поёжился (Даль) поём (Даль) поём (петь) поёмистый поёмка (Даль) поёмные (Даль) поёмный луга сейчас в поёме (РСЯР) поёмистые берега (РСЯР) поёмок (РСЯР) поёмчивая река (РСЯР) поёмы (Даль) поёный (прил.; телёнок, выкормленный молоком), по’енный (прич.), по’еный поёрдать (поехать) (БСРЖ) поёрзать, -ал (Даль) поёрить (БСРЖ) поёрничать поёт [петь] поётся [петься] поёхорить (потанцевать, русск.-бурят.) пождёт [пождать] пожелчённый, -ён, -ена пожёванный, -ан, -ана пожёвывать пожёг [пожечь] пожёгший пожёлкнуть (РСЯР) пожёстче пожжённый, -ён, -ена пожжёт [пожечь] поживёт [пожить] пожитьё (РСЯР) пожмёт(ся) [пожать(ся)] пожнёт [пожать] пожог (сущ.) пожрёт [пожрать] пожуёт [пожевать] пожурённый, -ён, -ена позавлёкся я этим делом (РСЯР) позадёрни занавеску (РСЯР) позаймётся [позаняться] позаклёкли (Даль) позамёл [позамести] позамёрзнуть, -мёрз, -мёрзла позамёрзший позаметённый, -ён, -ена позанесённый, -ён, -ена позанёс, позанесёт [позанести] позаймётся [позаняться] позапрёт(ся) [позапереть(ся)] позарастёт [позарасти] позднеём пришёл (РСЯР) позеленённый, -ён, -ена позёвывание позёвывать позём (Даль) позёмка позёмки (Даль) позёмный (Даль) позёмок (Даль) позёмковый (Даль) позёмочный (Даль) позёр позёрка позёрский позёрство позиционно-манёвренный позлащённый, -ён, -ена позлённый, -ён, -ена познаёт(ся) [познавать(ся)] позовёт [позвать] позоло’ченный и позолочённый, -ён, -ена поизорвёт(ся) [поизорвать(ся)] поизотрёт(ся), поистёр(ся) [поистереть(ся)] поимёнка (БСРЖ) поимённик (РСЯР) поимённо поимённый поистреблённый, -ён, -ена поистрёпанный, -ён, -ена пойдёт [пойти] поймёт [понять] покарёжить (Даль) покачнёт(ся) [покачнуть(ся)] покипячённый, -ён, -ена покладёт [покласть] поклёванный, -ан, -ана поклёвка поклёвочный (НВРЛ) поклёвывать поклёп поклёпанный, -ан, -ана поклёпок (Даль) поклёпщик поклёпывать (Даль) поклёпыш (Даль) поклюёт [поклевать] поклянётся [поклясться] покопчённый, -ён, -ена покорёженный, -ен, -ена покорёжить(ся) покорённый, -ён, -ена поко’шенный (выкошенный; искривлённый) покошённый (искривлённый) покрадёт [покрасть] покрещённый , -ён, -ена покрёпать (Даль) покрёпка (крепить) (Даль) покривлённый, -ён, -ена покроплённый, -ён, -ена покружённый, -ён, -ена и покру’женный покупатель-импортёр покря’хтывать и покрёхтывать покуёт [поковать] полводоёма полдёнышний (Даль) полежнёвец (В.Ч.) полежнёвцы (В.Ч.) полёвая (мышь) полёвка полёвка (БСРЖ) полёг [полечь] полёглый полёгший полёживать пол-ёмкости полёт полёт (БСРЖ) полётность полётный полётчивая птица (РСЯР) полётчик (ца) (амплуа в цирке) (В.Ч.) полётывать ползёт [ползти] политзаключённый политотчёт политучёба полнёхонький полнёшенький полномёдный полнощёкий половьё (Даль) полозко’вско-лихачёвский (НВРЛ) полонённый, -ён, -ена полоснёт [полоснуть] полотёр полотёрничать полотёный полотёрский полотьё полпоросёнка полуведёрный и полувёдерный полувёдер, полувёдра, полувёдрам [полуведро] полувёрстный полу’денный и (прост.) полудённый полудёнка (мотылёк) (Даль) полудёнком (Даль) полудённичать (Даль) полудёнок (Даль) полудёнщик (Даль) полудёнщина (Даль) полудёнщица (Даль) полудрёма полуёкта (Даль) полуёхта (Даль) полу’женный и полужённый, -ён, -ена полужёсткий полузабытьё, полузабытьём полузапрещённый (НВРЛ) полулёг [полулечь] полулёгкий полулёжа (нареч.) полумёрлый (РСЯР) полумёртвый полунамёк полуобнажённый, -ён, -ена полуосвещённый, -ён, -ена полуотво’ренный и полуотворённый, -ён, -ена полупереведённый (НВРЛ) полуперевёртыш полуПётр (В. Миронов) полупогружённый, -ён, -ена полуползём («У») полуприручённый (зверёк) полупчёлка (БСРЖ) полуразорённый, -ён, -ена полуребёнок полусерьёзный, -зен, -зна полусотрёт(ся), полустёр(ся) [полустереть(ся)] полстёртый полустёрший(ся) полусырьё полутёмный, -тёмен полутканьё полуторастарублёвый полутяжёлый полушёлк полушёлковый полушёпот полушёпотом (нареч.) полущённый, -ён, -ена полчетвёртого полыньёй [полынья] полыхнёт [полыхнуть] польёт(ся) [полить(ся)] польщённый, -ён, -ена пол-ягнёнка помалёвывать (разг.) помалёхоньку (РСЯР) помакнёт [помакнуть] пома’ненный и поманённый, -ён, -ена помелённый, -ён, -ена (от помелить) пометёт [помести] помехозащищённость помещённый, -ён, -ена помёл [помести] помёрз, -ла, -ло [помёрзнуть] помёрзлый помёрзнуть, -ёрз, -ёрзла помёрзший помёт помётанный, -ан, -ана помётный помётший помётывать помирённый, -ён, -ена помнёт(ся) [помять(ся)] поморённый, -ён, -ена помрачённый, -ён, -ена помрёт [помереть] помутнённый, -ён, -ена понаберёт(ся) [понабрать(ся)] понаведённый, -ён, -ена понаведёт [понавести] понавёз [понавезти] понавезённый, -ён, -ена понавезёт [понавезти] понавёл [понавести] понавыдёргивать понадаёт [понадавать] понадёжнее понадёрганный, -ан, -ана понадёргать понанёс [понанести] понанесённый, -ён, -ена понанесёт [понанести] понаплёл (понаплести) понаползёт [понаползти] понашлёт [понаслать] понесённый, -ён, -ена понесёт(ся) [понести(сь)] понёбо (Даль) понёбить (Даль) понёбный (Даль) понёбы (Даль) понёва (панёва) (Даль) понёвница понёс(ся) [понести(сь)] понёсший(ся) поновлённый, -ён, -ена пономарёвец (СГЖСССР) пономарёвцы (СГЖСССР) пономарём [пономарь] пономарёнок пономарёночек пончёвщик поночёвщица понтёр понтёр (БСРЖ) понтёрщик (вульг.) понтёрщица (вульг.) понтонёр понуждённый, -ён, -ена понукнёшь (понукать) пообживётся [пообжиться] пообобьёт(ся) [пооббить(ся)] пообживёт(ся) [пообжить(ся)] пообождёт [пообождать] пооборвёт(ся) [пооборвать(ся)] пооботрёт(ся) [пообтерёть(ся)] пообтёртый пообтёсанный, -ан, -ана пообтрёпанный, -ан, -ана пообтрясённый, -ён, -ена поорёт [поорать] поостерёгший(ся) поостережённый, -ён, -ена поостережёт(ся) [поостеречь(ся)] поотдохнёт [поотдохнуть] пооторвёт(ся) [пооторвать(ся)] поочерёдный поощрённый, -ён, -ена попадёт(ся) [попасть(ся)] попадьёй [попадья] попалённый, -ён, -ена попасённый, -ён, -ена попасёт(ся) [попасти(сь)] поперёд (обл., к вперёд) поперёк поперхнётся [поперхнуться] попе’рченный и поперчённый, -ён, -ена попечённый, -ён, -ена попечёт(ся) [попeчь(ся)] попёк(ся), попечёт(ся) [попечь(ся)] попёкший(ся) попённый (по пням) попёнок попёночек попёр, -ла, -ло [попереть] (простореч.) попёрла(сь), попрёт(ся) [попереть(ся)] попёртый попёхи или папёхи (Даль) поплёвывание поплёвывать, -аю, -ает поплёл(ся) [поплести(сь)] поплемённый поплёскивать, -аю, -ает поплетённый, -ён, -ена поплетёт(ся) [поплести(сь)] поплётший(ся) поплывёт [поплыть] поплюёт(ся) [поплевать(ся)] попо’енный и попоённый, -ён, -ена попоёт [попеть] поползёт [поползти] попрёк попрекнёт [попрекнуть] попрёшь [попереть] попривьёт(ся) [попривить(ся)] поприжмёт [поприжать] попрядёт [попрясть] по-пугачёвски (НВРЛ) попьёт [попить] порабощённый, -ён, -ена поражённый, -ён, -ена поразберёт(ся) [поразобрать(ся)] поразбредётся [поразбрестись] поразвлёк(ся) [поразвлечь(ся)] поразвлёкшийся поразвлечёт(ся) [поразвлечь(ся)] поразживётся [пораздавать] пораздаёт [поразжиться] поразойдётся [поразойтись] поразомнёт(ся) [поразмять(ся)] пораспродаёт [пораспродавать] порастёт [порасти] порастрясённый , -ён, -ена порасчёсывать (Кольцов «Урожай») поращённый, -ён, -ена порвёт(ся) [порвать(ся)] поревёт [пореветь] порешённый, -ён, -ена поржёт [поржать] породнённый, -ён, -ена порождённый, -ён, -ена порожнём (прост.) поросёнок поросёночек поросёночный (НВМ) порошённый, -ён, -ена порскнёт [порскнуть] портфёль, портфёли (из книг XIX в.) (В.Ч.) порхнёт [порхнуть] порчёный (СРВЖ) поршенёк порыхлённый, -ён, -ена поря’женный и поряжённый, -ён, -ена поса’женный (в землю) посажённый и посаже’нный (по саженям) посажённый (отец) посажённая (мать) посамолётно посветлённый, -ён, -ена посвящённость посвящённый, -ён, -ена поселе’нный (прилаг.; список жителей по селениям) поселённый, -ён, -ена (прич. от поселить) посеребрённый, -ён, -ена посерёд, по’средь (РСЯР) посерёдке (прост.) посерьёзневший посерьёзнеть посечённый, -ён, -ена и посе’ченный посечёт(ся) [посёчь(ся)] посещённый, -ён, -ена посёдланный, -ан, -ана посёк [посечь] посёкся [посечься] посёкший(ся) и посе’кший(ся) посёл (Даль) посёлок посёлочный поскользнётся [поскользнуться] поскрёб(ся) [поскрести(сь)] поскребённый, -ён, -ена поскребёт [поскрести] поскрёбки поскрёбывать(ся) поскрёбыш поскрёбыши послащённый, -ён, -ена послегорбачёвский (НВРЛ) послеполётные (СРВЖ) послеполётный послюнённый, -ён, -ена посмеётся [посмеяться] пособьёт(ся) [посбить(ся)] посо’ленный и посолённый, -ён, -ена пососёт [пососать] поспадёт [поспасть] посрамлённый, -ён, -ена поставщик-экспортёр постгорбачёвский -ая постерёгший(ся) постережённый, -ён, -ена постережёт постёганный, -ан, -ана постёг, постёжка (РСЯР) постёгивать(ся), постерёг(ся) [постеречь(ся)] постёхнуть (БСРЖ) постижёр постижёрный постижёрский пострелёнок, -нка пострижёт(ся) [постричь(ся)] постхрущёвский (НВРЛ) посуёт(ся) [посовать(ся)] посулённый, -ён, -ена (прост.) посурьмлённый, -ён, -ена посягнёт [посягнуть] потаённик (РСЯР) потаённый, -ён, -ена (прич.); -ён, -ённа (прил. тайный, секретный) потемнённый, -ён, -ена потепёлку придём (РСЯР) потетёшкать(ся) потечёт [потечь] потёк (след от жидкости) потёк [потечь] потёмистая ночь (РСЯР) потёмки потёмкинский (истор.) потёр(ся), -ла(сь), -ло(сь) [потереть(ся)] потёртость потёртый потёрший(ся) потёсанный, -ан, -ана потеснённый, -ён, -ена потёсывать поткёт [поткать] поток-жёлоб потолчённый, -ён, -ена потолчёт(ся) [потолочь(ся)] потомлённый, -ён, -ена потормошённый, -ён, -ена потреблённый, -ён, -ена потрёпанный; потрёпан, -а, -о потрёт(ея) [потереть(ся)] потрошённый, -ён, -ена потрошёный (прил.) потряс (произносится и потрёс) потрясённый, -ён, -ена потрясёт(ся) [потрясти(сь)] потурённый, -ён, -ена поуймёт(ся) [поунять(ся)] по-учёному поушьётся, впору будет похлёбанный, -ан, -ана похлёбка похлёбывать похлёстанный, -ан, -ана похлёстче похлёстывать похулённый, -ён, -ена почаёвничать почернённый, -ён, -ена почерпнёт [почерпнуть] почёл [почесть] почём почёрканный, -ан, -ана почёркать и (разг.) почерка’ть по-чёрному (нареч.) и (БСРЖ) почёсанный, -ан, -ана почёсывание почёсывать(ся) почёт почётка (Е) почётно-соли’дный (НВРЛ) почётность почётный почётчина (РСЯР) почнёт(ся) [почать(ся)] (обл.) почтарём [почтарь] почте’нный (внушающий уважение: почте’нный литератор) почтённый, -ён, -ена (прич.) (юбиляр был почтён) почтёт [почесть] пошатнёт(ся) [пошатнуть(ся)] пошевелённый, -ён, -ена пошевельнёт(ся) [пошевельнуть(ся)] пошёл [пойти] пошелохнёт(ся) [пошелохнуть(ся)] пошёптывать пошлёпанный, -ан, -ана пошлёпать пошлёпывать пошлёт(ся) [послать(ся)] по’шло-хлёсткий (НВРЛ) пошьёт [пошить] пощажённый, -ён, -ена пощёлканный, -ан, -ана пощёлкать пощёлкивание пощёлкивать пощёчина пояснённый, -ён, -ена правдёжка (НВРЛ) правёж правёжный превесёлый превзойдённый, -ён, -ена превзойдёт [превзойти] превзошёл [превзойти] превознесённый, -ён, -ена превознесёт(ся) [превознести(сь)] превознёсший(ся) превращённый, -ён, -ена преграждённый, -ён, -ена предаёт(ся) [предавать(ся)] предварённый, -ён, -ена предвкушённый, -ён, -ена предвозвещённый, -ён, -ена предопределённость предопределённый, -ён, -ена предостерёг [предостеречь] предостерёгший предостережённый, -ён, -ена предостережёт [предостеречь] предотвращённый, -ён, -ена предотлётный предохранённый, -ён, -ена предощущённый, -ён, -ена предплюснёвый предподъёмный предполётный предпочёл [предпочесть] предпочтённый, -ён, -ена предпочтёт [предпочесть] предпошлёт [предпослать] предрёк [предречь] предречённый, -ён, -ена предречёт [предречь] (устар.) предрешённость предрешённый, -ён, -ена предстаёт [представить] предубеждённо (нареч.) предубеждённость предубеждённый, -ён, -ена и -ён, -ённа (свидетельствующий о предубеждении; его отношение к нам предубеждённо) предуве’домленный и предуведомлённый, -ён, -ена предузнаёт [предузнавать] предупреждённый, -ён, -ена предъём предызберёт [предызбрать] прейдёт [прейти] преклонённый, -ён, -ена прекращённый, -ён, -ена прекурьёзный прелёгкий преломлённый, -ён, -ена прельщённый, -ён, -ена пренебрёг [пренебречь] пренебрежённый, -ён, -ена пренебрежёт [пренебречь] преображённый, -ён, -ена преобращённый, -ён, -ена преодолённый, -ён, -ена преподаёт(ся) [преподавать(ся)] преподнёс [преподнести] преподнесённый, -ён, -ена преподнесёт [преподнести] преподнёсший препровождённый, -ён, -ена прервёт(ся) [прервать(ся)] пресерьёзно (САМ) пресечённый; пресечён, -а, -о пресечёт(ся) [пресечь(ся)] пресёк(ся) [пресечься)] пресс-маслёнка пресуществлённый, -ён, -ена пресытёхонько претворённый, -ён, -ена преткнётся [преткнуться] преуме’ньшенный и преуменьшённый, -ён, -ена пречёрный прёт(ся) [переть(ся)] (просторен.) прёшь [переть] прибасёнка приберёг [приберечь] приберёгший прибережённый, -ён, -ена прибережёт [приберечь] приберёт(ся) [прибрать(ся)] приблатнённость приблатнённый, -ён, -ена приближённость прибли’женный (прич. от приблизить: приблизить к огню) приближённый, -ён, -ённа (прил.: приблизительный; сущ.: доверенный) приближённый (сущ.: царь со своими приближёнными) прибредёт [прибрести] прибрёл [прибрести] прибьёт(ся) [прибить(ся)] приведённый, -ён, -ена приведёт(ся) [привести(сь)] привёз [привезти] привезённый, -ён, -ена привезёт [привезти] привёзший привёл(ся) [привести(сь)] привернёт(ся) [привернуть(ся)] привёрнутый привёрстка привёрстывать(ся) привёртка привёртывание привёртывать(ся) привлёк [привлечь] привлёкший привлечёнка (НВРЛ) привлечённый, -ён, -ена привлечёт [привлечь] привнёс [привнести] привнесённый, -ён, -ена привнесёт [привнести] привнёсший приводнённый, -ён, -ена приволокнётся [приволокнуться] приволо’ченный и приволочённый, -ён, -ена (от приволочь и приволочить) приволочёт(ся) [приволочь(ся)] приворожённый, -ён, -ена приврёт [приврать] привстаёт [привставать] привьёт(ся) [привить(ся)] пригвождённый, -ён, -ена приглашённый, -ён, -ена приглушённо (нареч.) приглушённость приглушённый, -ён, -ена (прич.) и -ён, -ённа (прил.: голоса приглушённы) пригнетённый, -ён, -ена пригнётший пригнетёт [пригнести] пригнёт [пригнуть к земле] приговорённый, -ён, -ена пригрёб [пригрести] пригребённый, -ён, -ена пригрёбший(ся) пригребёт(ся) [пригрести(сь)] пригумённый (обл.) придаёт(ся) [придавать(ся)] придёргивать придерётся [придраться] придёржка (Даль) придёрнутый придёрнуть придёт(ся) [прийти(сь)] придётся [прийтись] придремнёт [придремнуть] придрёмывать прие’млет приём приёмистость приёмистый приёмище (РСЯР) приёмка нравом приёмна (РСЯР) приёмная приёмник приёмник-распределитель приёмничек приёмно-декоди’рующий (НВРЛ) приёмно-отправительный приёмно-передающий приёмно-сортировочный приёмно-технический приёмно-усилительный приёмный приёмозаготовительный приёмозаписывающий приёмоотвeтчик приёмопередаточный приёмопередатчик приёмопередающий приёмораздаточный приёмосдаточный приёмосдатчик приёмосдатчица приёмочный приёмчик приёмщик приёмщица приёмыш приёмышек (сирота, А. Чехов «Бабы») приёрдать (БСРЖ) прижёг [прижечь] прижёгший прижжённый, -ён, -ена прижжёт [прижечь] приживёт(ся) [прижить(ся)] приживлённый, -ён, -ена прижмёт(ся) [прижать(ся)] прижог (но глаг. прижёг) призаймёт(ся) [призанять(ся)] приземлённость приземлённый, -ён, -ена (прич.) и -ён, -ённа (прил.) (чуждый возвышенных стремлений) призёр призёрка призёрша признаёт(ся), признаём (ся) [признавать(ся)] призовёт(ся) [призвать(ся)] прикандёхать, прикондёхать (БСРЖ) прикеттлёванный, -ён, -ена приклёп приклёпанный, -ан, -ана приклёпка от приклёпу не уйдёшь (РСЯР) приклёпщик приклёпывание приклёпывать(ся) приклонённый, -ён, -ена приключённый, -ён, -ена прикорнёт [прикорнуть] прикоснётся [прикоснуться] прикочёвывать прикреплённость прикреплённый, -ён, -ена прикуёт(ся) [приковать(ся)] прикурнёт [прикурнуть] прилгнёт [прилгнуть] прилёг [прилечь] прилёгший прилёт прилётный прилжёт [прилгать] прилунённый, -ён, -ена прилучённый, -ён, -ена прильёт(ся) [прилить(ся)] прильнёт [прильнуть] приманённый, -ён, -ена и прима’ненный примастерённый, -ён, -ена приматрёниться примежёванный, -ан, -ана примежёвывать(ся) примёл [примести] применённый, -ён, -ена приметёт [примести] приметённый, -ён, -ена приметнёт [приметнуть] примёрз, -ла, -ло [примёрзнуть] примёрзлый примёрзнуть примёрзший примётанный, -ён, -ена примётка примётывание примётывать(ся) примирённость примирённый, -ён, -ена примкнёт(ся) [примкнуть(ся)] примнёт(ся) [примять(ся)] примощённый, -ён, -ена примрёт [примереть] принажмёт [принажать] принаймёт [принанять] приналёгший принёс [принести] принесённый, -ён, -ена принесёт(ся) [принести(сь)] принёсший(ся) принуждённо (нареч.) принуждённость принуждённый, -ён, -ена и -ён, -ённа (неестественный, нарочитый) приободрённый, -ён, -ена приобрёл [приобрести] приобретённый, -ён, -ена приобретёт [приобрести] приобщённый, -ён, -ена приодёжте его (РСЯР) приозёрный приозёрский (от Приозёрск) приозёрец (СГЖСССР) приозёрцы (СГЖСССР) припадёт [припасть] приостаёт [приоставать] приотво’ренный и приотворённый, -ён, -ена припалённый, -ён, -ена припасённый, -ён, -ена припасёт(ся) [припасти(сь)] припечённый, -ён, -ена припечёт(ся) [припечь(ся)] припёк (сущ.) (о хлебе и о припека’емом солнцем месте) припёк [припечь] припёка (прибавка, сбоку припёка) с припёками (Гоголь «М. Д.») припёкший(ся) припёр(ся), припёрла(сь), -ло(сь), припрёт(ся) [припереть(ся)] припёртый; припёрт, приперта, припёрто припе’рченный и приперчённый, -ён, -ена припёрший(ся) припихнёт [припихнуть] приплёл(ся) [приплести(сь)] приплёскивать(ся) приплеснёт(ся) [приплеснуть(ся)] приплёснутый приплетённый, -ён, -ена приплетёт(ся) [приплести(сь)] приплётший(ся) приплывёт [приплыть] приползёт [приползти] припорошённый, -ён, -ена и припоро’шенный припорхнёт [припорхнуть] припрёт [припереть] припрядённый, -ён, -ена и припря’денный припрядёт [припрясть] припряжённый, -ён, -ена припряжёт(ся) [припрячь(ся)] припугнёт [припугнуть] припушённый, -ён, -ена прирастёт [прирасти] приращённый, -ён, -ена прирождённый, -ён, -ена прирулённый, -ён, -ена приручённость приручённый, -ён, -ена присе’лeнный (находящийся при населённом пункте) приселённый, -ён, -ена (прич. от приселить) присёлок прислонённый, -ён, -ена присмирённый, -ён, -ена присмолённый, -ён, -ена присоберёт [присобрать] присовокуплённый, -ён, -ена присоединённый, -ён, -ена присосётся [присосаться] пристаёт [приставать] пристерёг (РСЯР) пристёганный, -ан, -ана пристёгивание пристёгивать(ся) пристегнёт [пристегнуть] пристёгнутый пристёгнутый (БСРЖ) пристёжка пристращённый, -ён, -ена пристру’ненный и приструнённый, -ён, -ена пристыжённый, -ён, -ена и присты’женный присуждённый, -ён, -ена присчёт присягнёт [присягнуть] притаёжный притво’ренный и притворённый, -ён, -ена притёк [притечь] притёкший притемнённый, -ён, -ена притенённый, -ён, -ена притёмки (НВРЛ) притёр(ся) [притереть(ся)] притёрла(сь) -ло(сь) [притереть(ся)] притёртый; притёрт, -а, -о притёрший(ся) притёсанный, -ан, -ана притёска притеснённый, -ён, -ена притёсывать(ся) притечёт [притечь] приткёт [приткать] приткнёт(ся) [приткнуть(ся)] притолкнёт [притолкнуть] притомлённый, -ён, -ена приторможённый, -ён, -ена притрёт(ся) [притереть(ся)] притуплённый, -ён, -ена и приту’пленный приуберёт(ся) [приубрать(ся)] приулёгся [приулечься] приумнёт [приумять] приуме’ньшенный (от приуме’ньшить) и приуменьшённый, -ён, -ена (устар.) (от приуменьши’ть) прихвастнёт [прихвастнуть] прихворнёт [прихворнуть] прихлебнёт [прихлебнуть] прихлёбывание прихлёбывать(ся) прихлестнёт [прихлестнуть] прихлёстнутый прихлёстывание прихлёстывать(ся) причащённый, -ён, -ена причёл [причесть] причём (союз) при чём (местоимение с предлогом) причёсанность причёсанный, -ан, -ана причёска причёсывание причёсывать(ся) причёт и при’чeт (причитание; причт) причинённый, -ён, -ена причтённый, -ён, -ена причтёт(ся) [причесть(ся)] пришёл [прийти] пришепётывание пришепётывать пришёптывание пришёптывать пришёптывать пришибёт [пришибить] пришлёпать пришлёпнутый пришлёпнуть(ся) пришлёпывать(ся) пришлёт [прислать] пришьёт [пришить] прищёлкивание прищёлкивать(ся) прищёлкнутый прищёлкнуть прищемлённый, -ён, -ена прищеплённый, -ён, -ена прищипнёт [прищипнуть] пробелённый, -ён, -ена проберёт(ся) [пробрать(ся)] проблёв (вульг.) проблёскивать и пробле’скивать проблеснёт [проблеснуть] прободённый, -ён, -ена проборождённый, -ён, -ена проборонённый, -ён, -ена пробредёт [пробрести] пробрёл [пробрести] пробубнённый, -ён, -ена пробуждённый, -ён, -ена пробурённый, -ён, -ена пробьёт(ся) [пробить(ся)] проведённый, -ён, -ена проведёт [провести] провёз [провезти] провезённый, -ён, -ена провезёт [провезти] провёл [провести] провернёт(ся) [провернуть(ся)] провёрнутый провёртывание провёртывать(ся) провeшенный (прич. от провесить) провешённый, -ён, -ена (обозначенный вехами; прич. от провешить) провоёванный, -ан, -ана провоёвывать провозвещённый, -ён, -ена провозглашённый, -ён, -ена проволо’ченный и проволочённый, -ён, -ена проволочёт(ся) [проволочь(ся)] провощённый, -ён, -ена проврёт(ся) [проврать(ся)] (разг.) прогневлённый, -ён, -ена прогнёт(ся) [прогнуть(ся)] прогниёт [прогниёт] прогноённый, -ён, -ена проговорённый, -ён, -ена прографлённый, -ён, -ена прогрёб [прогрести] прогребённый, -ён, -ена прогребёт [прогрести] прогрёбший прогрызёт(ся) [прогрызть(ся)] продаёт(ся) [продавать(ся)] продерёт(ся) [продрать(ся)] продешевлённый, -ён, -ена для продёвки в них руки’ (Даль) продёрганный, -ан, -ана продёргать(ся) продёргивание продёргивать(ся) продёржечный продёржка продёрнет [продёрнуть] продёрнутый продёрнуть(ся) продёрнуть (БСРЖ) продлёнка продлённый, -ён, -ена продолблённый, -ён, -ена продохнёт [продохнуть] продразвёрстка, а также (БСРЖ) продублённый, -ён, -ена продушённый, -ён, -ена и проду’шенный (пропитанный сильным запахом) продымлённый, -ён, -ена и проды’мленный продыхнёт [продыхнуть] проектёр (из газеты) (В.Ч.) проёжился (Даль) проём проём (Даль) проёмный проёрзал (Даль) проёрзала (Даль) проёрзанье (Даль) прождёт [прождать] прожектёр прожектёрка прожектёрский прожектёрство прожектёрствовать прожектёрша прожёванный, -ан, -ана прожёвывание прожёвывать(ся) прожёг [прожечь] прожёгший(ся) прожжённость прожжённый, -ён, -ена прожжёт(ся) [прожечь(ся)] проживёт(ся) [прожить(ся)] прожитьё, прожитьём (простореч.) прожмёт(ся) [прожать(ся)] прожнёт(ся) [прожать(ся)] прожог (сущ.) (но глаг. прожёг) прожрёт(ся) [прожрать(ся)] прозёванный, -ан, -ана прозёвывать, -аю, -ает прознаёт [прознавать] прозовёт(ся) [прозвать(ся)] произведённый, -ён, -ена произведёт(ся) [произвести(сь)] произвёл [произвести] произнёс [произнести] произнесённый, -ён, -ена произнесёт [произнести] произнёсший произойдёт, произошёл [произойти] произрастёт [произрасти] прозрачно-чёрный произращённый, -ён, -ена проистёк [проистечь] проистечёт [проистечь] про’йденный и пройдённый, -ён, -ена пройдёт(ся) [пройти(сь)] проймёт(ся) [пронять(ся)] дубьём не проймёшь (РСЯР) прокажённая прокажённый, а также (БСРЖ) прокалённый, -ён, -ена прокипячённый, -ён, -ена проклёванный, -ан, -ана проклёвывание проклёвывать(ся) проклёпанный, -ан, -ана прклёпывать(ся) проклюёт(ся) [проклевать(ся)] проклянёт [проклясть] проковырнёт [проковырнуть] проколёсина (РСЯР) прокопчённый, -ён, -ена прокрадётся [прокрасться] прокру’женный и прокружённый, -ён, -ена прокуёт(ся) [проковать(ся)] пролёг [пролечь] пролёгший пролёжанный, -ан, -ана пролёживать(ся) пролёжка (САМ) пролёт пролёт (СРСЮЮ) пролётка, а также (БСРЖ) пролётный пролётом (нареч.) пролёточка (САМ) пролёточный (САМ) пролётчик (Е) пролигачёвский (НВРЛ) пролистнёт [пролистнуть] прольёт(ся) [пролить(ся)] промахнёт(ся) [промахнуть(ся)] прометённый, -ён, -ена прометёт [промести] прометнёт(ся) [прометнуть(ся)] промелькнёт [промелькнуть] промёл [промести] промёрз [промёрзнуть] промёрзлый промёрзнуть, -ёрз, -ёрзла промётанный, -ан, -ана промётный (РСЯР) промётший промётывание промётывать(ся) промётывать (Даль) промнёт(ся) [промять(ся)] промокнёт [промокнуть] проморённый, -ён, -ена промощённый, -ён, -ена пронёс(ся) [пронести(сь)] пронесённый, -ён, -ена пронесёт(ся) [пронести(сь)] пронёсший(ся) пронзённый, -ён, -ена пронырнёт [пронырнуть] проорёт [проорать] (разг.) пропадёт [пропасть] пропалённый, -ён, -ена пропасённый, -ён, -ена пропасёт(ся) [пропасти(сь)] пропёк(ся) [пропечь (-ся)] пропёка (Даль) пропёклый парень (РСЯР) и (Даль) пропёковатый (Даль) пропёкший(ся) пропёртый пропе’рченный и проперчённый, -ён, -ена пропёрший(ся) пропечённый, -ён, -ена пропечёт(ся) [пропечь(ся)] пропихнёт(ся) [пропихнуть(ся)] проплёванный; проплёван, -а, -о проплёл [проплести] проплёлся [проплестись] проплетённый, -ён, -ена проплетёт(ся) [проплести(сь)] проплётший(ся) проплывёт [проплыть] проплюёт [проплевать] пропоёт [пропеть] проползёт [проползти] пропорхнёт [пропорхнуть] пропрёт(ся) [пропереть(ся)] пропрядёт [пропрясть] пропылённый, -ён, -ена пропьёт(ся) [пропить(ся)] прорастёт [прорасти] проращённый, -ён, -ена прорвёт(ся) [прорвать(ся)] проревёт(ся) [прореветь(ся)] прорежённый, -ён, -ена и проре’женный проречёт [проречь] (устар.) проржёт [проржать] проронённый, -ён, -ена и проро’ненный проро’ щенный (в проф. речи) прорыхлённый, -ён, -ена просверкнёт [просверкнуть] просверлённый, -ён, -ена просветлённо (нареч.) просветлённость просветлённый, -ён, -ена (прич.) и -ён, -ённа (прил.: музыка просветлённа) просвещённось просвещённо-умеренный (НВРЛ) просвещённый, -ён, -ена (прич.) и -ён, -ённа (прил.) (образованный, культурный) просёк(ся) [просечь(ся)] просёлок просёлком (И. Сев.) просе’кший(ся) и просёкший(ся) просёлочный просечённый, -ён, -ена и просе’ченный просечёт(ся) [просечь(ся)] просинённый, -ён, -ена проскользнёт [проскользнуть] проскребённый, -ён, -ена проскребёт(ся) [проскрести(сь)] проскрёбка проскрёб(ся) [проскрести(сь)] проскрёбом нч. (РСЯР) проскрёбший(ся) проскрёбывание проскрёбывать(ся) прослоённый, -ён, -ена прослывёт [прослыть] просмолённый, -ён, -ена проснётся [проснуться] просо’ленный и просолённый, -ён, -ена прсосёт(ся) [прососать(ся)] простёганный, -ан, -ана простёгивание простёгивать(ся) простёжка простёр, -ла, -ло [простереть] простёртый; простёрт, -а, -о простёрший(ся) простирнёт [простирнуть] в простоплётку (РСЯР) просторожённый, -ён, -ена прострёт(ся) [простереть(ся)] прострижёт [простричь] простынёй [простыня] просчёт рубль просчёту (РСЯР) протеёнок протёк (сущ.) протёк [протечь] протeкший (минувший) протёкший (давший течь) протёр(ся), протёрла(сь), -ло(сь) [протереть(ся)] протёртый протёрший(ся) протёс протёсанный, -ан, -ана протёска протёсывание протёсывать(ся) протечёт [протечь] противогололёдный противоотёчный противосамолётный противотуберкулёзный проткёт [проткать] проткнёт [проткнуть] протозвёздный протозвёзды протолкнёт(ся) [протолкнуть(ся)] протолчёт [протолочь] протолчённый, -ён, -ена протомлённый, -ён, -ена проторённость проторённый, -ён, -ена протрезвлённый, -ён, -ена протрёп (РСЯР) протрёпка (РСЯР) протрёт(ся) [протереть(ся)] протряс (произносится и протрёс) [протрясти] протрясённый, -ён, -ена протрясёт(ся) [протрясти(сь)] протряхнёт [протряхнуть] протурённый, -ён, -ена протяжённость протяжённый, -ён, -ённа профессорёнок профессорёночек прохлаждённый, -ён, -ена процвёл [процвести] процветёт [процвести] прочёл [прочесть] прочёркивание прочёркивать(ся) прочеркнёт [прочеркнуть] прочёркиваться (НВРЛ) прочёркнутый прочёс прочёсанный, -ан, -ана прочёска прочёсывание прочёсывать(ся) прочёт прочихнёт [прочихнуть] прочтённый, -ён, -ена прочтёт(ся) [прочесть(ся)] прошвырнёт(ся) [прошвырнуть] прошёл [пройти] прошёптанный, -ан, -ана прошибёт(ся) [прошибить(ся)] прошлёпать, -аю, -ает прошлёпаться (БСРЖ) прошмыгнёт [прошмыгнуть] прошпаклёванный, -ан, -ана и прошпатлёванный, -ан, -ана прошпаклёвывать(ся) и прошпатлёвывать(ся) проштемпелёванный, -ан, -ана прошьёт(ся) [прошить(ся)] прощёлкать, -аю, -ает прощённый, -ён, -ена (прич.) прощёное воскресенье прощёный (прил.) прояснённый, -ён, -ена пру’женный и пружённый, -ён, -ена прульё (Е) прядёт(ся) [прясть(ся)] прямёхонький прямёхонько прямёшенький прямёшенько прямлённый, -ён, -ена (прич.) прямлёный (прил.) наш брат прямьё (РСЯР) прямьём и прёт (РСЯР) псарём [псарь] псевдотуберкулёз псевдоучёность псевдоучёный псевдоучёт (НВРЛ) псёльский (от Псёл) психанёт, психанём [психануть] птеродактелёнок птицелётная пора (РСЯР) птичьё (РСЯР) пугачёвец, -цы (ист.) пугачёвец (СГЖСССР) пугачёвка (БСРЖ) пугачёвский (ист.) пугачёвцы (СГЖСССР) пугачёвщина пугачёныш (Е) пугач-пулемётчик (СРВЖ) пугнёт [пугнуть] пуделёк пузотёр (НВМ) пузочёс (Е) пузырёк, а также (БСРЖ) пузырём [пузырь] пузырёчек пукёныш (БСРЖ) пуклёвка (термин в металлообработке) (О.К.) пулемёт, а также (БСРЖ) пулемётный пулемётом (Е) пулемётчик, а также (БСРЖ) пулемётчица пульнёшь [пульнуть] пустобрёх (прост.) пустобрёшка пустозёва (РСЯР) пустозёр пустозёрка пустозёрки пустозёрец пустозёрцы пустозёры пустозёрница пустозёрность пустозёрный пустонаселённый (НВМ) пустоплёт пусторёва (РСЯР) пустулёзный пустырём [пустырь] путёвка путево’й (напр., сторож) путёвочка путёвочный путёвый (напр., человек) путём (нареч. и предлог) путём [путь] путеподъёмник пухлощёкий пуходёрка пушённый, -ён, -ена (прич.) пушёный (прил.) пхнёт [пхнуть] пчёлка пчёлы, пчёл (мн. ч. от пчела) пчёлинка пчёлонька пчёлушки пчёлынька пшёлты (шутливый посыл) пшёнка пшённик пшённый пылемёт (НВМ) пырнёт [пырнуть] пыхнёт [пыхнуть] пьёт [пить] пьётся [питься] пьянёхонький пьянёшенький пятернёй [пятерня] пятёра (Е) пятёрка, а также (БСРЖ) и (СРВЖ) пятёрочка пятёрочник пятёрочница пятёрочный пятиведёрный и пятивёдерный пятивёрстка пятивёрстный пятидесятирублёвый пятизвёздный, а также (СРВЖ) пятизвёздочный пятирублёвка пятирублёвый пятисотрублёвый пятитысячерублёвка (НВРЛ) пятнадцатирублёвый пятьсотвесёлый (СРВЖ)     Р работёнка работёшка равнёхонький равноимённый равноудалённый равным-равнёхонько (РСЯР) равным-равнёшенько (В.Ч.) рада-радёхонька (РСЯР) радёхонек радёхонький радёшенек радика’льно-чёрный (НВРЛ) радиозагрязнённый (НВРЛ) радиозвёзды радиомаркёр радиоприём радиоприёмник радиоприёмный радиорежиссёр радиорепортёр рад-радёхонек рад-радёшенек радым-радёшенек (РСЯР) раёк раёшник раёшный разбережённый, -ён, -ена разберёт(ся), -шь(ся) [разобрать(ся)] разбомблённый, -ён, -ена разборонённый, -ён, -ена разбранённый, -ён, -ена разбредётся [разбрестись] разбрёлся [разбрестись] разбурённый, -ён, -ена разбутёриться развальё (В.Ч.) разведёнка (напр., коньяк) разведёнка, -и (женщина, -ы) разведённый, -ён, -ена разведёт(ся) [развести(сь)] развезённый, -ён, -ена развезёт [развезти] развережённый, -ён, -ена развернёт(ся) [развернуть(ся)] развеселённый развесёленький развесёлый разветвлённость разветвлённый, -ён, -ена развёз [развезти] развёзший развёл(ся) [развести(сь)] развёрнутость развёрнутый; развёрнут, -а, -о развёрстанный, -ан, -ана развёрст (РСЯР) развёрстка развёрсточный развёрстывать развёрт (РСЯР) развёртка развёрточный развёртывание развёртка развёрточный развёртывание развёртывать(ся) развлёк(ся) [развлeчь(ся)] развлёкший(ся) развлечённый, -ён, -ена развлечёт(ся) [развлечь(ся)] разволочённый, -ён, -ена разволочёт [разволочь] развоплощённый, -ён, -ена разворошённый, -ён, -ена развращённость развращённый, -ён, -ена разглашённый, -ён, -ена разговорённый, -ён, -ена разгорячённый, -ён, -ена разграфлённый, -ён, -ена разгребённый, -ён, -ена разгребёт [разгрести] разгрёб [разгрести] разгрёбки (РСЯР) разгрёбший разгромлённый, -ён, -ена и разгро’мленный разгружённый, -ён, -ена и разгру’женный разгрызёт(ся) [разгрызть(ся)] раздаёт(ся) [раздавать(ся)] раздарённый, -ён, -ена и (разг.) разда’ренный раздвоённый, -ён, -ена и (разг.) раздво’енный разделённость разделённый, -ён, -ена раздёвкой (РСЯР) раздёвом (РСЯР) раздёвчиво спит (РСЯР) раздёрг (РСЯР) раздёржка (РСЯР) раздёрганность раздёрганный, -ан, -ана раздёргать(ся) раздёргивание раздёргивать(ся) раздёрнутый раздёрнуть(ся) раздерёт(ся) [разодрать(ся)] раздоённый, -ён, -ена и раздо’енный раздолблённый, -ён, -ена раздражённо (нареч.) раздражённость раздражённый, -ён, -ена и -ён, -ённа раздразнённый, -ён, -ена раздревеснённый, -ён, -ена раздроблённость и (разг.) раздро’бленность раздроблённый, -ён, -ена и (разг.) раздро’бленный разду’шенный и (разг.) раздушённый, -ён, -ена разёва (РСЯР) разжёванный -ан, -ана разжёвывание разжёвывать(ся) разжёг(ся) [разжечь(ся)] разжёгший(ся) разживётся [разжиться] разжи’женный и разжижённый, -ён, -ена разжуёт(ся) [разжевать(ся)] раззвонённый, -ён, -ена разземлетрясённый раззолочённый, -ён, -ена и раззоло’ченный, разлёв (Даль) разлёгся [разлечься] разлёгшийся разлёживаться разлёт разлётный (РСЯР) разлётывать (РСЯР) различённый, -ён, -ена разлучённый, -ён, -ена размазнёй [размазня] размалёванный, -ён, -ена размалёвка размалёвывание размалёвывать(ся) размахнётся [размахнуться] размежёванный, -ан, -ана размежёвка размежёвывание размежёвывать(ся) размельчённый, -ён, -ена разметённый, -ён, -ена разметёт [размести] размeтка (от размечать) размещённый, -ён, -ена размёл [размести] размёт размётное пламя (РСЯР) размётанный, -ан, -ана (от разметать) размётка (от разметать) размётная грамота (САМ) размётный (Даль) размётчивый (Даль) размётший размётывание размётывать(ся) разминёр разминётся [разминуться] разодёжкою (РСЯР) размозжённый, -ён, -ена разморённость разморённый, -ён, -ена размягчённость размягчённый, -ён, -ена разнёс(ся) [разнести(сь)] разнесённый, -ён, -ена разнесёт(ся) [разнести(сь)] разноимённость разноимённый разнопёстрый (НВРЛ) разнопёрый разноплемённость разноплемённый разношёрстность разношёрстный и разношёрстый разоблачённый, -ён, -ена разобщённость разобщённый, -ён, -ена разобьёт(ся) [разбить(ся)] разоврётся [разовраться] разовьёт(ся) [развить(ся)] разогнёт(ся) [разогнуть(ся)] разогорчённый, -ён, -ена разодолжённый, -ён, -ена разожжённый, -ён, -ена разожжёт(ся) [разжёчь(ся)] разожмёт(ся) [разжать(ся)] разозлённый, -ён, -ена разойдётся [разойтись] разолжётся [разолгаться] разольёт(ся) [разлить(ся)] разомнёт(ся) [размять(ся)] разопрёт(ся) [распереть(ся)] разопрёшься разопьёт [распить] разорвёт(ся) [разорвать(ся)] разорённейший («ЛГ» 2005) разорённый, -ён, -ена разорётся [разораться] разоружённый, -ён, -ена разоткёт [разоткать] разотрёт(ся) [растереть(ся)] разочтённый, -ён, -ена разочтёт(ся) [расчесть(ся)] разошёлся [разойтись] разошлёт [разослать] разошьёт(ся) [расшить(ся)] разрастётся [разрастись] разращённый, -ён, -ена разревётся [разреветься] разрежённость и разре’женность разрежённый, -ён, -ена и разре’женный разрешённый, -ён, -ена разрыхлённый, -ён, -ена разряжённость разря’женный и разряжённый, -ён, -ена (прич. от разрядить — вынуть заряд) разря’женный, -ен, -ена (прич. от разрядить — нарядно одеть) разубеждённый, -ён, -ена разуберёт(ся) [разубрать(ся)] разузнаёт(ся) [разузнавать(ся)] разукрупнённый, -ён, -ена разуплотнённый, -ён, -ена разъединённость разъединённый, -ён, -ена разъёжится (Даль) разъём разъёмистое (пиво, винцо) (Даль) разъёмный (Даль) разъёмчивый (Даль) разъёрзались (Даль) разъярённо разъярённый, -ён, -ена разъяснённый, -ён, -ена ракетопланёр рамотёс ранёхонько ранёшенько рани’м-ранёхонько рани’м-ранёшенько рапид-съёмка раскабалённый, -ён, -ена расказёнить (НВРЛ) расказнённый, -ён, -ена раскалённость раскалённый, -ён, -ена раската’ть губёшку (СРВЖ) расклёванный, -ан, -ана расклёвывать(ся) расклёпанный, -ан, -ана расклёпка расклёпывание расклёпывать(ся) расклёшенный, -ан, -ана расклёшивать(ся) расклёшить расклинённый, -ён, -ена и раскли’ненный расклюёт [расклевать] раскорчёванный, -ан, -ана раскорчёвка раскорчёвывание раскорчёвывать(ся) раскрадёт [раскрасть] раскреплённый, -ён, -ена раскрепощённо (нареч.) раскрепощённость раскрепощённый, -ён, -ена раскровенённый, -ён, -ена раскряжёвка раскряжёвочный раскряжёвщик раскряжёвывать(ся) раскуёт(ся) [расковать(ся)] распадётся [распасться] распалённый, -ён, -ена распахнёт(ся) [распахнуть(ся)] распелёнатый и распелёнутый распелёнывать(ся) распестрённый, -ён, -ена распечённый, -ён, -ена распечёт [распечь] распёк [распечь] распёкший распёрло [распереть] распёр [распереть] распёртый; распёрт, -а, -о распёрший распихнёт [распихнуть] расплеснёт(ся) расплеснёт [расплеснуть] расплетённый, -ён, -ена расплетёт(ся) [расплести(сь)] расплёв (БСРЖ) расплёвка (Даль) расплёвыванье (Даль) расплёвывать(ся) расплёл(ся) [расплести(сь)] расплёск (Даль) расплёсканный; расплёскан, -а, -о расплёскиванье (Даль) расплёскиватель (Даль) расплёскивать(ся) расплёснутый; расплёснут, -а, -о расплётший(ся) распложённый, -ён, -ена расплывётся [расплыться] распнёт [распять] распоёт(ся) [распеть(ся)] распознаёт(ся) [распознавать(ся)] расползёт(ся) [расползти(сь)] распорошённый, -ён, -ена распотрошённый, -ён, -ена распределённый, -ён, -ена распродаёт(ся) [распродавать(ся)] распростёр(ся) [распростереть(ся)] распростёртый; распростёрт, -а, -о распростёрший(ся) распространённость распространённый, -ён, -ена распрострёт(ся) [распростереть(ся)] распряг (произносится и распрёг) [распрячь] распрядёт [распрясть] распряжённый, -ён, -ена распряжёт(ся) [распрячь(ся)] распрямлённый, -ён, -ена распугнёт [распугнуть] распустёха распухлёна (РСЯР) распушённый, -ён, -ена распылённость распылённый, -ён, -ена рассверлённый, -ён, -ена рассветёт [рассвести] рассёдланный, -ан, -ана рассёдлывание рассёдлывать(ся) рассёк(ся) [рассечь(ся)] рассе’кший(ся) и рассёкший(ся) расселённый, -ён, -ена рассечённый, -ён, -ена рассечёт(ся) [рассечь(ся)] расслоённый, -ён, -ена рассмеётся [рассмеяться] рассмешённый, -ён, -ена расснащённый, -ён, -ена рассолённый, -ён, -ена рассорённый, -ён, -ена (прич. от рассорить) рассосётся [рассосаться] расстаётся [расставаться] расстегнёт(ся) [расстегнуть(ся)] расстёгивание расстёгиванье (Даль) расстёгивать(ся) расстёжка (РСЯР) расстёжливая (пуговица) (РСЯР) и (Даль) расстрижёт(ся) [расстричь(ся)] рассуёт [рассовать] растворённый, -ён, -ена (прич. от растворить — заставить раствориться) раство’ренный (прич. от растворить — широко открыть, распахнуть) растёкся [растечься] растёр(ся), -ла(сь) -ло(сь) [растереть(ся)] растёртый; растёрт, -а, -о растёсанный, -ан, -ана растёска (сущ. от растесать — растёсывать) растёсывать(ся) растереблённый, -ён, -ена растерёха растечётся [растечься] растёпа (Даль) растёртый растёрший(ся) растёсанный, -ан, -ана растёска растёсывание растёсывать(ся) у лосей растёл растёт [расти] растле’нный (прил.) растлёнка (НВРЛ) растлённый, -ён, -ена (прич.) растолчённый, -ён, -ена растолчёт(ся) [растолочь(ся)] растомлённый, -ён, -ена растормо’женность и расторможённость растормо’женный и расторможённый растормошённый, -ён, -ена расто’ченный (прич. от расточить — расширить точением) расточённый, -ён, -ена (прич. от расточить — безрассудно истратить) растрёпа растрёпанность растрёпанный, -ан, -ана растрёп (Даль) растрёпка растрёпок (Даль) растрёпщик (Даль) растрёпщица (Даль) растрёпыванье (Даль) растрёпывать(ся) растрёпыш (Даль) растряс (произносится и растрёс) растрясённый, -ён, -ена растрясёт(ся) [растрясти(сь)] растряхнёт [растряхнуть] растушёванный, -ан, -ана растушёвка растушёвывание растушёвывать(ся) расфранчённый, -ён, -ена расхлёб (РСЯР) расхлёбка (РСЯР) расхлёбанный, -ан, -ана расхлёбывание расхлёбывать(ся) расхлестнёт [расхлестнуть] расхлёстанный, -ан, -ана расхлёснутый расхлёстывать(ся) расцвёл [расцвести] расцветёт [расцвести] расценённый, -ён, -ена расчёл(ся) [расчесть(ся)] расчёркивание расчёркивать(ся) расчеркнётся [расчеркнуться] расчёркнутый расчёс расчёсанный, -ан, -ана расчёска, а также (БСРЖ) расчёсывание расчёсывать(ся) расчёт расчётливость расчётливый расчётник (БСРЖ) расчётный расчётно-кассовый расчётно-клиринговый расчётно-кредатный расчётно-платёжный расчётно-снабжeнческий расчётно-финансовый расчётный расчёт-прогно’з (НВРЛ) расчёт-спра’вка (НВРЛ) расчётчик, а также (БСРЖ) расчётчица расчленёнка расчленённость расчленённый, -ён, -ена расшевелённый, -ён, -ена расшибёт(ся) [расшибить(ся)] расшлёпанный, -ан, -ана расшлёпать(ся) расшлёпать (СРВЖ) расшлёпывать(ся) расщебенённый, -ён, -ена расщёлканный, -ан, -ана расщёлкать(ся) расщёлкивать(ся) расщёлкнут, -а, -о расщёлкнутый; расщёлкнуть расщемлённый, -ён, -ена расщеплённый, -ён, -ена ратовьё (древко копья) (САМ) рафинёр рафинёрный ращённый, -ён, -ена рванёт(ся) [рвануть(ся)] рваньё, рваньём рвёт(ся) [рвать(ся)] ребёнок ребёрные мышцы (РСЯР) ребёрце (РСЯР) ребёночек ребятё ребятёнок (прост.) ребятёночек ребятьё (А. Прел.) ребячьё (НВМ) ревёт [реветь] рёвма ревёт (РСЯР) редкозёмы (геолог.) реёк режиссёр режиссёр-постановщик режиссёрски режиссёрский режиссёрство режиссёрствовать режиссёрша резанёт [резануть] резкопересечённый резкорасчленённый резнёй [резня] резнёт [резнуть] резонёр резонёрка резонёрский резонёрство резонёрствовать рекрутёр ремённый и ремeнный ремёсла (мн. ч. от ремесло) ремнём [ремень] ремонтёр ремонтёрка рентгеноплёнка репеёк (2 значен.) репортёр репортёришка репортёрский репортёрство репортёрствовать репортёрша репортёры-пинкертоны (НВРЛ) репьё ресурсовооружённость ресурсоёмкий ресурсоёмко ресурсоёмкость ретикулёз ретушёванный ретушёвка ретушёр ретушёрный рефулёр (механизм для дноуглубительных работ) рефулёрный рехнётся [рехнуться] (прост.) речёвка (речевое действие как заклинание) речённый, -ён, -ена и рече’нный (от рещи — говорить, сказать) решечённый, -ён, -ена решёнка (Е) решённость решённый, -ён, -ена решённый (БСРЖ) решённый-перерешённый решёта [мн. ч. от решето] решётка, а также (БСРЖ) решётный (хлеб) решёточка решёточный решёточный-пожарный (Конёк-Горбунок) решётчатый и реше’тчатый рёберный рёбра, рёбер, рёбрам (мн. ч. от ребро) рёбрышко рёв рёва рёвка (Даль) рёвма ревёт (РСЯР) рёволюционерка (НВМ) рёвушка рёпка (ревность) (Даль) рёх (Даль) рёха (Даль) рёхать (Даль) рёхнуть (Даль) рёхнуться (Е) ржавьё (БСРЖ) ржёт [ржать] рижьё (БСРЖ) рискнёт [рискнуть] рисунок-чертёж (НВРЛ) рифлёный рифмоплёт рифмоплётка рифмоплётство ровён (не ровён час) ровнёхонький ровнёшенький ровнёхоньки (Даль) ровнёхонько ровнёшеньки (Даль) ровнёшенько ровным-ровнёхонько (Даль) ровным-ровнёшенько (Даль) рогачёвка (БСРЖ) роговьё (РСЯР) рогомёт (БСРЖ) родёный роднёй [родня] роёв [мн. ч. рой] роёвка роeвник и роёвник рое’вня, рое’вни и роёвня, роёвни роёк (уменьш. к рой) роённый, роён (прич.) рождённый, -ён, -ена рожёк берега (РСЯР) розовато-жёлтый розовощёкий рок-звёзды ротозёва (РСЯР) ротозёпа (РСЯР) рубанёт [рубануть] такой рубёж в лесу идёт (РСЯР) рублёвик Рублёвка (Рублёво-Успенское шоссе) рублёвка рублёво-валютный (НВРЛ) рублёво-купонный (НВРЛ) рублёвский (от Рублёво) рублёвый рублём [рубль] рубнёт [рубнуть] ругнёт(ся) [ругнуться)] рудомёт (САМ) рyдо-жёлтый рудоподъёмный ружьё, ружьём ружьё (СРВЖ) руководёр («Новый Крокодил», 2004) рукопёрые (зоол.) рукоположённый, -ён, -ена рукотёр (Даль) рукотёрник (Даль) рулёжка рулёжный рулёк (Даль) рулём [руль] румянощёкий русопёт и русопят рутёрка рутинёр рутинёрка рутинёрский рутинёрство ручеёк ручёшка (Даль) ручёшник (Даль) ручьём [ручей] рыбачьё (НВМ) рыбёшка рыбёшка (СРВЖ) рыбоподъём рыбоподъёмник рыбоподъёмный рыбоприёмник рыбоприёмный рыбоприёмщик рыбоприёмщица рыбоучётный (НВРЛ) рыгнёт [рыгнуть] рыжевьё (БСРЖ) рыжешёрстный и рыжешёрстый рыжьё рыкнёт [рыкнуть] рысёнок рысёночек рытьё, рытьём рыхлённый, -ён, -ена (прич.) рыхлёный (прил.) рэйванёт (рэйвануть) (БСРЖ)     С савёл (БСРЖ) саданёт [садануть] саёк (олень) сажёнка (от сажень) сажёнки (способ плавания) сажённый и саже’нный (прил. к сажень) сайгачёнок сайгачёночек саламандрёнок саламандрёночек сальмонеллёз самёнок (Е) (сын, ребёнок) самёночек (Е) самовлюблённо (нареч.) самовлюблённость самовлюблённый, -ён, -ённа самоё (форма местоим. сама) самолёт, а также (БСРЖ) самолёт-амфи’бия самолётик, а также (БСРЖ) самолёт-лаборато’рия самолётно-раке’тный самолётный самолётовожде’ние самолётовы’лет самолётомото’р (НВРЛ) самолётопаде’ние самолётостроение самолётострои’тель самолётострои’тельный самолёт-перехва’тчик самолёт-разве’дчик самолёт-разго’нщик самолёт-снаря’д самолёт-такси’ (НВРЛ) самолёт-цисце’рна самолётчик самолёт-шпио’н самонапряжённый, -ён, -ена самоопылённый, -ён, -ена самоотрешённость самоотрешённый самоотчёт самопоглощённость (Б.П.) самопоглощённый (Б.П.) самоподъёмный самопровозглашённый, -ён, -ена самосёл самосопряжённый, -ён, -ена самотёк самотёком (нареч.) самотёчный самоуглублённо (нареч.) самоуглублённость самоуглублённый, -ён, -ена самоудовлетворённость самоудовлетворённый сам-сём (неизм.) сам-четвёрт (неизм.) сам-шёст (неизм.) санчурёнок (СНЖСССР) сапёр, а также (БСРЖ) сапёрный сапожёшки саранчёвый сатанёнок (САМ) сатанёночек (В.Ч.) сатаньё сатинёр сачканёт [сачкануть] сберёг [сберечь(ся)] сберёгший(ся) сбережённый, -ён, -ена сбережёт(ся) [сберечь(ся)] сблёв (БСРЖ) сбоку-припёка сбоку-припёку сболтнёт [сболтнуть] сборённый, -ён, -ена и сбо’ренный сбредёт(ся), сбрёл(ся) [сбрести(сь)] сбрехнёт [сбрехнуть] сбрёл (со двора) сбрёх (Даль) сбрёхиванье (Даль) сбрёхивать (РСЯР) сбрёховат (Даль) сбрёховатый (РСЯР) сбрёху (РСЯР) сбрёшка (Даль) сбуквиё (НВМ) свалёхаться (БСРЖ) сватьё (РСЯР) сведёнка (термин монтажёров TВ) сведённый, -ён, -ена сведёт(ся) [свести(сь)] сведёте свежёванный, -ан, -ана свежеиспечённый свежьё свезённый, -ён, -ена свезёт [свезти] свербёж свербёжный (РСЯР) сверкнёт [сверкнуть] свеклоподъёмник сверлённый, -ён, -ена сверлёный (прил.) сверлильно-долбёжный свернёт(ся) [свернуть(ся)] сверхжёсткий сверхзвёзды сверхлёгкий сверхманёвренный сверхнадёжный сверхнапряжённый сверходарённость сверходарённый сверхсчётный (РСЯР) сверхтвёрдый сверхтяжёлый сверхъёмкий свершённый, -ён, -ена светёлка светёлочка светёлочный светлёхонько (САМ) свeтло-жёлтый свeтло-зелёный светоприёмник свёзший свёз [свезти] свёкла свёкор свёкров (РСЯР) свёл(ся) [свести(сь)] свёрла, свёрл (мн. ч. от сверло) свёрнутый; свёрнут, -а, -о свёрстанный, -ан, -ана свёрстка свёрстывание свёрстывать(ся) свёртка свёрток свёрток с дороги (РСЯР) свёрточек свёртываемость свёртывание свёртывать(ся) свёстка (Даль) свинарём [свинарь] свинёнок свинёночек свиноёжик (Е) свинокопчёности свинцово-чёрный свиньёй [свиньи] свинья-свиньёй свирестёлка свитёнка (САМ) свихнётся [свихнуться] свободнорождённый своё, о своём сволочённый, -ён, -ена (от сволочь и сволочить) сволочёт [сволочить] сволочьё свячённый, -ён, -ена свячёный (прил.) свящённый (САМ) сглотнёт [сглотнуть] сгнетёт, сгнёл [сгнести] сгнетённый, -ён, -ена сгрётка сгнётка (РСЯР) сгниёт [сгнить] сгноённый, -ён, -ена сговорёнка (Даль) сговорённость сговорённый, -ён, -ена сгребённый, -ён, -ена сгребёт(ся) [сгрести(сь)] сгрёб [сгрести] сгрёбки сгрёбший(ся) сгрёмать (БСРЖ) сгру’женный и сгружённый, -ён, -ена сгрустнёт(ся) [сгрустнуть(ся)] сгрызёт [сгрызть] сгущёнка, а также (БСРЖ) сгущённость сгущённый, -ён, -ена сдаёт(ся) [сдавать(ся)] сдача-приёмка сдво’енный и сдвоённый сдёргать сдёргивание сдёргивать(ся) сдерёт(ся) [содрать(ся)] сдёргом (РСЯР) сдёрнутый; сдёрнут, -а, -о сдёрнуть сдо’енный и сдоённый сдружённый, -ён, -ена сеансёр седёлка седёлко (Даль) седёлковый седёлочный седьё (БСРЖ) сезонно-мёрзлый сейсмоприёмник секретарём [секретарь] се’кший(ся) и сёкший(ся) селёдища (простореч.) селёдка, а также (БСРЖ) селёдочка селёдочник селёдочница селёдочный селезёнка селезёночник (трава) селезёночный се’лезневый и селезнёвый сельдёвые и се’льдевые семён (БСРЖ) семёновец семёновский (истор.) семёновцы семёновщина семёрка, а также (БСРЖ) семёрочный, -ая, -ое, -ые семивёрстный семизёрец (СГЖСССР) семизёрцы (СГЖСССР) семилёр (сплав) (Даль) семилёровая табакерка (Даль) семирублёвый семисажённый и семисаже’нный сем-пересём (Даль) семьёй [семьи] семяприёмник сенкевичёвка сеноподъёмник сентиментально-казённый (НВРЛ) сентябрём [сентябрь] сеньёр (вариант написания) (В.Ч.) сеньёра (В.Ч.) сердeчно-лёгочный серебрённый, -ён, -ена (прич.) серебрёный (прил.) серебри’сто-чёрный серёг (род. п. мн. ч. от серьги) серёга (БСРЖ) серёдка серёдочка серёдыш (Е) серёжа (Е, сержант) серёжка (БСРЖ) серёжечки серёжка, серёжки (ед. ч. серьга) сердцедёр (Е) серова’то-жёлтый се’ро-жёлтый се’ро-зелёный серозём серозёмный серьё (БСРЖ) серьёз серьёзневший серьёзнейший серьёзнеть серьёзничать серьёзность серьёзный сестёр (м.ч.р.п. сестра) сестрёнка, а также (БСРЖ) сетеподъёмник сетеподъёмный се’ченный и сечённый, -ён, -ена (прич.) сечёт(ся) [сечь(ся)] сечёшь [сечь] сё, о сём (указ. мест. только в выражениях: то да сё; то и сё; ни то ни сё; ни о том ни о сём) сёгyн (ист.) сёгунат (ист.) сёдла (мн. ч. от седло) сёдланный, -ан, -ана сёдлышко сёла (мн. ч. от село] сём (о сём, сей, сия, сии) сёма (БСРЖ) сём и сем (частица) сёмать (Даль) сёмый (Даль) сёмга сёмговый сём-ка и сем-ка (частица) сёмочка (БСРЖ) сёмужий сёмужка сёмужный (О.К.) сёмужья (икра) сёмушка сём-ка и сем-ка (частица) сёртает (Даль) сёртать (Даль) сёрфер сёрферский (НВРЛ) сёрфинг сёрфингист сёрфинговый (НВРЛ) сёстры (мн. ч. от сестра) сёхта (Даль) сёхтать (Даль) сжёванный, -ан, -ана сжёвывать(ся) сжёг(ся) [сжечь(ся)] сжёгший(ся) сживёт [сжить] сживётся [сжиться] сжуёт(ся) [сжевать(ся)] сжуётся [сжеваться] сиводёр (палёная водка, у Помяловского) (САМ) сидёлка (медсестра) сидёлко (сиденье для всадника) (Вологда) си’зо-зелёный силён [сильный] силёнка, силёнки силёночка (долблёное корытце для муки и теста) (Вологда) силикотуберкулёз силодёром (нареч., силом) (Вологда) сильё (Даль) сильнонапряжённый сильнопересечённый сильносолёный сильнощёлочный (Д. Розенталь) симаньё (верхняя одежда) (Вологда) синева’то-зелёный сине-жёлто-красный (НВРЛ) сине-зелёный синё синёк (конь) (Вологда) синённый, -ён, -ена (прич.) синёный (прил.) синим-синёшенек (РСЯР) сирёнок (сирота) (Вологда) ситуёвина (Е) сифилёк (БСРЖ) скабрёзничать скабрёзность скабрёзный сказанёт [сказануть] сказёвый (БСРЖ) скаканёт [скакануть] скакнёт [скакнуть] скалёный (всклень, доверху наполненный) (Вологда) скальё (берёста) (Вологда) (Даль) «Сканвордёнок» (назв. детского журнала) скандалёзный скандёж сканёр сканёрка сканьё (Даль) скарёбина, скарёжина (кривое дерево) (Вологда) скатёрка (уменьш. к скатерть) скатёрочка скачёная (жемчужина) скёт [скать] складенёк складенёчек склёванный, -ан, -ана склёвывание склёвывать(ся) склёзкий (Даль) склёзко (Даль) склёп (Даль) склёпанный, -ан, -ана склёпка склёпковый (Даль) склёпок (Даль) склёпочный склёпщик склёпывание склёпыватель (Даль) склёпывать(ся) склёпыш (Даль) склёротник (неологизм д.ф.н., проф. И.Г. Добродомова, то же, что ёжёднёвник (см.) склонённый, -ён, -ена склюёт(ся) [склевать(ся)] склянёхонький – налитый до краёв (РСЯР) скобёлка (инструмент для сдирания коры) (Вологда) скоблёнка скоблённый (прич.) скоблёный (прил.) сковырнёт(ся) [сковырнуть(ся)] сколёхонько («У») сколпарёк (дерев. ковш для вина с двумя ручками) (Вологда) сколупнёт [сколупнуть] скользнёт [скользнуть] скомлёха (БСРЖ) скоплённый, -ён, -ена скопнённый, -ён, -ена скорбно-чёрный (И. Сев.) скорёженный; скорёжен, -а, -о скорёжить(ся) скорёхонько и скорешенько скорженёк (кож. сапог) (Вологда) скоролётка скороподъёмник скороподъёмность скороподъёмный скоростёнка скорьё, скорьём (необделанные шкуры) скотоприёмный скошёвка скошённый, -ён, -ена (прич. от скосить — направить вкось, поместить косо) ско’шенный (прич. от скосить — срезать косой или косилкой) скощённый, -ён, -ена (прич. от скостить) (прост.) скрадёт(ся) [скрасть(ся)] скребёж (РСЯР) скребёлка (РСЯР) скребённый, -ён, -ена скребётся [скрести(сь)] скребнёт [скребнуть] скрежетнёт [скрежетнуть] скренённый (РСЯР) скреплённый, -ён, -ена скрещённый, -ён, -ена скрёб(ся) [скрести(сь)] скрёбка скрёбкий (РСЯР) скрёбла (мн. от скребло) скрёбший(ся) скрёс (покой, тишина) (Даль) (Вологда) скрёсный (Даль) скрёсток (Даль) скривлённый, -ён, -ена скромнёхонький скромнёшенький скромны’м-скромнёхонько скрофулёз скруглённый, -ён, -ена скрупулёзность скрупулёзный с кубарём (СРВЖ) скуёт(ся) [сковать(ся)] скулёж скулёнок (БСРЖ) скулёнка (БСРЖ) скундёпать (Е) скундёпывать (Е) скурлёха (БСРЖ) скурлёшный (БСРЖ) скуфьёй [скуфья] слабо-жёлтый слабозащищённый (НВРЛ) слабообогащённый слабопересечённый слаборасчленённый слабосолёный слабочернозёмный славёна (девушка, достигшая брачного возраста) (Вологда) славёшник (ряженый, в святочном костюме) (Вологда) славословиё (НВМ) сладкозём (Даль) сластёна (Даль) сластёник (сладкоежка) (Вологда) сластёха (РСЯР) слащённый, -ён, -ена слащёный (прил.) слезоём слепёхонек (РСЯР) слепёшенек (РСЯР) слепнёвец (В.Ч.) слепнёвцы (В.Ч.) слепнём [слепень] слепорождённый слетьё («МК»,от 10.3.2005) слёг [слечь] слёгший слёживаемость слёживание слёживаться слёжка (РСЯР) слёжная мука (В.Ч.) слёзка, слёзки слёзки (СРВЖ) слёзно-бума’жный (НВРЛ) слёзный слёзовый слёзоньки слёзопроли’тие (НВРЛ) слёзы (мн. ч. от слеза) слён (Даль) слёнда (шлёнда) (Даль) слёт с лёта и слёту слётанность слётки (Мих. Лермонтов) слётковый (Даль) слёток слётыш (Даль) слизнёт [слизнyть] сличённый, -ён, -ена словарём [словарь] словарьё (словарь употребления буквы Ё) (В.Ч.) слоёв (род. п. мн. ч. от слой) слоёк слоёный сло’женный (прич. от сложить — положить вместе, придав какой-нибудь порядок) сложённый, сложён (прил. — обладающий тем или иным телосложением) сложноподчинённый сложносокращённый сложносочинённый слонёнок случённый, -ён, -ена слывёт [слыть] слюнённый, -ён, -ена слюнотёк (РСЯР) сма’ненный и сманённый, -ён, -ена сманён, -а, -о смастерённый, -ён, -ена смахнёт [смахнуть] смеётся [смеяться] смежённый, -ён, -ена (от смежить — сомкнуть, закрыть глаза) смекнёт [смекнуть] сменённый, -ён, -ена смерёдушка (РСЯР) сметённый, -ён, -ена (прич. от смести) сметёрка (РСЯР) смерёточка (Даль) смерётушка (Даль) сметёт(ся) [смести(сь)] сметнёт [сметнуть] сметьё (РСЯР) смещённый, -ён, -ена смёл [смести] смёрдушка (Даль) смёрзнуть(ся) смёрз(ся), смёрзла(сь), смёрзлый (РСЯР) смёрзший(ся) смёртушка (Даль) смётанный, -ан, -ана (прич. от сметать — прошить крупными стежками) смётка [сметливость] смётка (совок) (Вологда) смёткая щётка (НВМ) смётки (на мельнице) смёточный смётший смётывание смётывать(ся) смёшивать (быть помехой) (Вологда) смигнёт(ся) [смигнуть(ся)] сми’рен и смирён (кр. прил.  от смирный) смирёна (кроткая женщина) (Вологда) смирёно (смирно, спокойно) (Вологда) смирённый, -ён, -ена (прич. от смирить) смире’нный (прил., исполненный смирения) смитёный (тихий, послушный) (Вологда) смирнёхонький смирнёшенький смола-животёка (РСЯР) смолёвка (трава) смолёвки (жуки) смолёвый (смолистый) (Вологда) смолённый, -ён, -ена (прич.) смолёный (прил.) смоложённый (ое) (простокваша) (Вологда) смольё (Даль) сморгнёт [сморгнуть] сморённый, -ён, -ена сморкнёт(ся) [сморкнуть(ся)] смуглёнок (РСЯР) смуглёный (РСЯР) смущённо (нареч.) смущённость смущённый, -ён, -ена и (выражающий смущение) -ён, -ённа смычьё (Даль) смышлённо (нареч.) смышлёность смышлёный, -ён, -ена смягчённость смягчённый, -ён, -ена снабжённый, -ён, -ена с налёта и с налёту снаряжённый, -ён, -ена снащённый, -ён, -ена (прич. от снастить) снегирёк снегирём [снегирь] снегосъёмка снеговёнок снеговёночек снеготранспортёр снегурёнок снегутёночек снесённый, -ён, -ена снесёт(ся) [снести(сь)] снём (Даль) снёмки (Даль) снёмцы (Даль) снёнка (лососёвая погибшая рыба) снёс(ся) [снести(сь)] снёсший(ся) снигирёвец (СГЖСССР) снигирёвцы (СГЖСССР) снизойдёт [снизойти] снизошёл [снизойти] сноповьё (Вологда) снопоподъёмник снуёт [сновать] соберёт(ся) [собрать(ся)] соблазнённый, -ён, -ена соблюдённый, -ён, -ена соблюдёт [соблюсти] со’болевый и соболёвый соболёк соболёнок соболёночек событьё собьёт(ся) [сбить(ся)] совёнок совёночек совершённый, -ён, -ена (прич. от совершить — совершённое преступление) соверше’нный (прил.: 1) обладающий совершенством; 2) несомненный, полный; соверше’нная красота; также соверше’нный вид глагола) совлёк(ся) [совлечь(ся)] совлёкший(ся) совлечённый, -ён, -ена совлечёт(ся) [совлечь(ся)] совмещённый, -ён, -ена совпадёт [совпасть] совращённый, -ён, -ена соврёт [соврать] совьёт(ся) [свить(ся)] соглашённый, -ён, -ена согнёт(ся) [согнуть(ся)] содрогнётся [содрогнуться] соединённый, -ён, -ена соёк (Даль) соёмбо (символика Бурятского герба) сожёгчи (уничтожено огнём) (Вологда) сожжённый, -ён, -ена сожжёт(ся) [сжечь(ся)] сожмёт(ся) [сжать(ся)] сожнёт(ся) [сжать(ся)] сожрёт [сожрать] (прост.) создаёт(ся) [создавать(ся)] сознаёт(ся) [сознавать(ся)] или созна’ется («У») созовёт [созвать] соимённый святой (РСЯР) сойдёт(ся) [сойти(сь)] соколёнок соколёночек сокращённый, -ён, -ена сокрушённо (нареч.) сокрушённый, -ён, -ена солдапёр (Е) солдапёрить (Е) солдапёриться (СРВЖ) солдапёрка (Е) солдапёрная ха’вка (СРВЖ) солдапёрный (Е) солдапёровый (Е) солдатнёй [солдатня] солдатьё солёненький солёно-кислый солёно-копчёный солёно-маринованный солёнопресноводная рыба (РСЯР) солёно-сладкий солёность солёный (прилаг.) солёный (БСРЖ) солжёт [солгать] солите’р (бриллиант) солитёр (червь) солновёрт (РСЯР) солнопёк (Даль) солнцепёк соловьёвский (от Соловьёв) соловьём, соловьёв [соловей] соловьёнок соловьёныш (Вологда) солодёлка (закваска из солода с хмелем) (Вологда) соложённый, -ён, -ена соломенно-жёлтый соломоподъёмник соломотранспортёр солоным-солонёшенько (РСЯР) сольёт(ся) [слить(ся)] сомёнок сомёночек сомкнёт(ся) [сомкнуть(ся)] сомнёт(ся) [смять(ся)] соньё (БСРЖ) соображённый, -ён, -ена сообщённый, -ён, -ена сооружённый, -ён, -ена соотнесённость соотнесённый, -ён, -ена соотнесёт(ся), соотнёс(ся) [соотнести(сь)] соотнёсший(ся) соподчинённость соподчинённый, -ён, -ена сопрёт(ся) [спереть(ся)] (прост.) соприкоснётся [соприкоснуться] сопричтёт [сопричесть] сопричтённый, -ён, -ена сопровождённый, -ён, -ена сопряжённость сопряжённый, -ён, -ена сопряжёт(ся) [сопрячь(ся)] сопьёт(ся) [спить(ся)] сорваньё (РСЯР) сорвёт(ся) [сорвать(ся)] сорежиссёр сорожьё (собир., плотва) (Вологда) сорокаведёрный сорокавёрстный сорокарублёвый сосборённый, -ён, -ена и сосбо’ренный со’сенка и сосёнка сосёт(ся) [сосать(ся)] сосёшь [сосать] соскользнёт [соскользнуть] соскребённый соскребёт(ся) [соскрести(сь)] соскрёб [соскрести] соскрёбины (РСЯР) соскрёбший(ся) соскрёбывать(ся) соснёт [соснуть] сосновоозёрец сосновоозёрцы состёганный, -ан, -ана состёгивать(ся) сострижёт(ся) [состричь(ся)] сосуньё (Е) сотворённый, -ён, -ена соткёт(ся) [соткать(ся)] соткнёт(ся) [соткнуть(ся)] сотонёнок (к ребёнку, бесёнок) (Вологда) сотрёт(ся) [стереть(ся)] сотру’дник-волонтёр (НВРЛ) сотру’дница-волонтёрка (НВРЛ) сотрясённый, -ён, -ена сотрясёт(ся) [сотрясти] сохранённый, -ён, -ена соченёк (тонко раскатанное тесто) (Вологда) соченьё (то же, что соченёк) (Вологда) сочёное молоко сочинённый, -ён, -ена сочленённый, -ён, -ена сочтённый, -ён, -ена сочтёт(ся) [счесть(ся)] сошёл(ся) [сойти(сь)] сошлёпать (наспех испечь) (Вологда) сошлёт(ся) [сослать(ся)] сошьёт(ся) [сшить(ся)] сощёлкать сощёлкнуть (задев, уронить) (Вологда) спадёт [спасть] спалённый, -ён, -ена спаньё, спаньём спарринг-партнёр спасённый, -ён, -ена спасёт(ся) [спасти(сь)] спекульнёт [спекульнуть] (разг.) спелёнатый спелёнут, -а, -о спелёнутый спенёк (Даль) спецпаёк спецприёмник спецсамолёт спецсчёт спецучёт спецэкспортёр спечённый, -ён, -ена спечёт(ся) [спечь(ся)] спёкший(ся) спёнки (Даль) спёр (спереть, украсть) спёрт, -а, -о спёртое русло (РСЯР) спёртость спёртый спёрший(ся) спинозаврёнок спихнёт [спихнуть] сплеснёт [сплеснуть] сплетённый, -ён, -ена сплетёт(ся) [сплести(сь)] сплёвывание сплёвывать(ся) сплёл(ся) [сплести(сь)] сплёск (Даль) сплёскиванье (Даль) сплёскивать(ся) сплёснутый сплётка сплётший(ся) сплёты (РСЯР) сплоённый, -ён, -ена сплочённо (нареч.) сплочённость сплочённый, -ён, -ена (прич.) и -ён, -ённа (прил.: единый, дружный) сплошённо и суплошённо (нареч., сплошь, по всей поверхности) (Вологда) сплывёт(ся) [сплыть(ся)] споёт(ся) [спеть(ся)] спознаёт(ся) [спознавать(ся)] сползёнка (Даль) сползёт(ся) [сползти(сь)] сполоснёт(ся) [сполоснуть(ся)] спондилёз спорыньёй [спорынья] споткнётся [споткнуться] спотыкнётся [спотыкнуться] справка-счёт спроём (Даль) спрядённый, -ён, -ена и спря’денный (от спрясть) спрядёт [спрясть] спряжённый спряжёт(ся) [спрячь(ся)] спрямлённый, -ён, -ена спугнёт [спугнуть] спускоподъёмный спущёнка (Е) сравнённый, -ён, -ена (прич. от сравнить — сопоставить для установления сходства или различия) и сра’вненный (от сравнять) сражённый, -ён, -ена срамёж (РСЯР) срастётся [срастись] сращённый, -ён, -ена средненёбный среднепересечённый среднесолёный сретьё (сретенье) (Вологда) сровнённый, -ён, -ена и сро’вненный (прич. от сровнять — сделать ровным) сроднённый, -ён, -ена сроённый, -ён, -ена срыгнёт [срыгнуть] сря’женный и сряжённый, -ён, -ена ссе’кший и ссёкший (от ссечь) ссе’ченный и ссечённый, -ён, -ена (от ссечь) сселённый, -ён, -ена ссечёт [ссечь] ссё-всё (Даль) ссёл (Даль) ссёлка (Даль) ссёмка (Даль) ссосёт [ссосать] ссосёт (ссосать) (БСРЖ) ссуёт [ссовать] эту лошадь потом не ссягнёшь (не даётся) (РСЯР) ставенёк, станёк (ставень) (Вологда) стаёт [ставать] (устар. и обл.  к становиться) не стаёт обиходца (РСЯР) стадёнко (РСЯР) стадёнушко (РСЯР) стажёр, а также (БСРЖ) стажёрка стакашёк (стакан) стакнётся [стакнуться] становьё (Даль) станьё (станина ткацкого станка) (Вологда) старёхонький старёшенький старичьё стародёжь (К. Чук.) (антитеза: молодёжь) старосёлы (РСЯР) старпёр (Е) старпёровский (НВРЛ) старпёрский (Е) ста’ртер и стартёр ста’ртерный и стартёрный старушьё (РСЯР) старьё, старьём старьёвщик старьёвщица статёнушка (РСЯР) статовьё (Даль) статотчёт статотчётность статьё (Даль) статьёй [статья] створённый, -ён, -ена стебанёт [стебануть] стебелёк стеблёвый и стеблево’й стеблеподъёмник стеганёт [стегануть] стегнёт [стегнуть] стезёй [стезя] стекленёхонький (Даль) стекленёшенький (Даль) стеклённый, -ён, -ена стеклоплёнка стеклоподъёмник стелёга (ко’злы для пилки дров) (Вологда) стервёж (В.Ч.) стерёг(ся) [стеречь(ся)] стерёгший(ся) стережённый, -ён, -ена стережёт(ся) [стеречь(ся)] стереосъёмка стереотипёр стерёж и стерёжь (плотные годовые кольца хвойных деревьев) (Вологда) стерёжа, стерёжка (РСЯР) стерженёк стёбла (мн. от стебло) стесёк (негодная для обработки древесина) (Вологда) стеснённость стеснённый, -ён, -ена стечёт(ся) стёб, а также (БСРЖ) стёбка (БСРЖ) стёбно (нареч.) (вульг.) стёбный (вульг.) стёбобитва стёбовый (вульг.) стёбочка (обшлаг рукава) (Вологда) стёбщик (БСРЖ) стёганка (Даль) стёганный, -ан, -ана (прич.) стёганый (прил.) стёгна (мн. от стегну) стёгнутый стёгнышко (часть ноги, бедро) (Вологда) стёжа (наказание ремнём) (Вологда) стёжка [сущ. от стегать] стёжка (дорожка) стёжник (Даль) стёжный (стёганый) (Вологда) стёжью – настеж (РСЯР) стёк [стечь] стёка (РСЯР) стёкла (мн. от стекло) стёкла (Е, очки) стёклый жир (Даль) стёклышки (БСРЖ) стёклышко стёклышко (СРВЖ) стёк(ся) [стечь(ся)] стёкший(ся) стёпа (Е) стёпка (Даль) стёпка (стипендия) (Е) стёр(ся), стёрла(сь) [стереть(ся)] стёртость стёртый; стёрт, -а, -о стёрший(ся) стёсанный, -ан, -ана стёсывание стёсыванье (Даль) стёха (Даль) стёша (Даль) стёшинец (В.Ч.) стёшинцы (В.Ч.) стёсывать(ся) стилёк (стиль) стихоплёт стихоплётство стланьё стовёрстный стогомёт столбёха (Даль) столблённый, -ён, -ена столкнёт(ся) [столкнуть(ся)] столчённый, -ён, -ена столчёт(ся) [столочь(ся)] сторублёвка сторублёвый страна-импортёр страна-партнёр (Россия – Германия 2005) страна-экспортёр страусёнок стреканёт [стрекануть] стрекнёт [стрекнуть] стрекозёл (СРСЮЮ) стрекотнёй [стрекотня] стрельнёт [стрельнуть] стремёшка стремёшки (штрипки) стрепетёнок стрепетёночек стрёк (Даль) стрёкать (Даль) стрёкать (БСРЖ) стрём (вульг.) стрёма (на стрёме, на стрёму) стрёма (дворник) стрёма! (берегись!) (Даль) стрёмистый (БСРЖ) стрёмить (БСРЖ) стрёмка (Е) стрёмки (стрёмок) (Е) стрёмкий (РСЯР) стрёмно (Е) стрёмный (вульг.) стрёмщик (Е) стрёмый (Даль) стрижёт(ся) [стричь(ся)] стриптизёр стриптизёрка стриптизёрша строгнёт [строгнуть] строёв (от строй — шеренга) стро’ев (от строй — система, устройство) строёк (гриб строчок) (Вологда) строённый, -ён, -ена (прич. от строи’ть — соединить по три) стро’енный (прич. от строить — сооружать) стойкрепёж стро’ченный и строчённый, -ён, -ена (прич.) строчёный (прилаг.) строщённый, -ён, -ена струёй [струя] струхнёт [струхнуть] стряпнёй [стряпня] стрясённый, -ён, -ена стрясёт(ся) [стрясти(сь)] стряхнёт(ся) [стряхнуть(ся)] студёная одежда (РСЯР) студёнка (Даль) студёно (холодно) (Вологда) студёность (Даль) студёный; студён, -а, -о стукотнёй [стукотня] ступенёк (лапоть) (Вологда) ступенёчек (Вологда) ступенёшка (Вологда) ступнёй [ступня] ступнёт [ступнуть] стушёванный, -ан, -ана стушёвка стушёвывать(ся) стырёк (приспособление для крепления лучины в светильнике) (Вологда) стяжённый (к стяжение) суботчёт сугрёб (рядок растущего картофеля) (Вологда) сугрёб, сугрёбок, сузём, сумёт (сугроб) (Вологда) судёнка (шкаф для посуды) (Вологда) судёнки (Даль) судёнышко судоподъём судоподъёмник судоподъёмный судьёй [судья] суетнёй [суетня] суём (Даль) суёма (собрание жителей деревни) (Вологда) суёмный (Даль) суёт(ся) [совать(ся)] суждённый, -ён, -ена сужерёбая сузём 1) вид почвы, 2) густой, непролазный лес (Вологда) сузёмистый (о почве: плодородная) (Вологда) сузёмок (сугроб) (Вологда) сулённый, -ён, -ена (прич.) (прост.) сулёный (прил.) сумёрзлый (о человеке: крепкий, сильный) (Вологда) сумёт (сугроб) (обл.) суперзвёзды, -звёзд суперприёмник супертёлочка супертёща супёрда (грузная женщина) (Вологда) суровьё сурмлёный сурьмлённый (прич.) сурьмленый (прил.) суслёнок сутенёр, а также (БСРЖ) сутенёрский сутенёрство сутенётша сутёмки (РСЯР) суфлёр, а также (БСРЖ) суфлёра (БСРЖ) суфлёрить (Е) суфлёр-сапyн суфлёрский сухарём [сухарь] сухмённый (сухой) (Вологда) сухорёбрый сухпаёк (СРВЖ) су’ченный (прич. от сучить) сучёнка (Даль) сучёный (прил.) сучёнок сучёночек сучьё сучьёвщик сучьёвщица су’шенный (npич.) сушеньё (щепки) (Вологда) сушёнка (сушёные грибы, овощи) (Вологда) сушёный (прил.) сушьё (сухоподстой в лесу) (Вологда) сушьё да крушьё (РСЯР) схвастнёт [схвастнуть] схлёбанный, -ан, -ана схлебнёт [схлебнуть] схлёбнутый схлёбывать(ся) схлёст схлёстанный, -ан, -ана схлестнёт(ся) [схлестнуть(ся)] схлёстнут, -а, -о схлёстнутый схлёстывать(ся) схоро’ненный и схоронёный, -ён, -ена счёл(ся) [счесть(ся)] счерпнёт [счерпнуть] счёс счёсан, -а, -о счёсанный счёсина (Даль) счёска, -и счёсный (Даль) счёсок (Даль) счёсывание счёсыванье (Даль) счёсывать(ся) счёт счетверённый, -ён, -ена счётец счётно-аналити’ческий счётно-вычисли’тельный счётно-де’нежный счётно-кла’вишный счётно-маши’нный счётно-перфорацио’нный счётно-пи’шущий счётно-реша’ющий счётный счётом (нареч.) счёт-фактура счётчик счётчик-регистра’тор (НВРЛ) счётчик-таймер счётчица счёты, счётов не счунёшь его – не проймёшь (РСЯР) сшибёт(ся) [сшибить(ся)] съёженный, -ен, -ена съёженье (Даль) съёживание съёживанье (Даль) съёживать(ся) (Даль) съёжить(ся) съёжили (Даль) съёжился (Даль) съёжиться (Даль) съёжка (Даль) съём (сущ. от глагола снимать — снять) съёмистый (Даль) съёмка съёмки (Е) съёмковый (Даль) съёмник съёмный съёмок (Даль) съёмочный съёмцы съёмчивый (РСЯР) съёмщик съёмщик (Даль) съёмщиков (Даль) съёмщичий (Даль) съёмщица съёмцы (Даль) съёрзнуть, -ну, -нет, -нул (Даль) съёрзывать, -аю, -ает съёрничать (НВРЛ) съёфамилиё (фамилия с буквой ё) (В.Ч.) съёхнуться (уменьшиться в объёме) (Вологда) сыгранёт [сыгрануть] сыпнёт(ся) [сыпнуть(ся)] сырёха (Даль) сырокопчёный сыроматёрая земля (РСЯР) сыросолёный (НВРЛ) сырьё, сырьём сытёхонек, сытёхонький сычёвец (СГЖСССР) сычёвцы (СГЖСССР) сычённый, -ён, -ена (прич.) сычёное – медовое (РСЯР) сычёвье гнездо (РСЯР) сычёнок (РСЯР) сычёный (прил.) до неба рукой не сягнёшь (РСЯР)     Т табелёк таврённый, -ён, -ена (прич.) таврёный (прил.) та ещё (СРСЮЮ) таёжник таёжница таёжно-романти’ческий (НВРЛ) таёжный тайёр (одежда, Вл. Набоков «Лолита») таймер-счётчик таломёрзлый тапёр тапёрша тащёный (Е) тварьё (РСЯР) твердозём твердонёбный тверёза тверёзый (прост. к трезвый) твержённый -ён, -ена и тве’рженный твёрденький твёрдо (нареч.) твёрдоконверти’руемый (НВРЛ) твёрдокопчёный твёрдость твёрд, тверда’ твёрдо твёрдолобый (Вен. Ерофеев) твёрды твёрдый твёрже твоё, (о) твоём творёный (прил.) творённый, -ён, -ена (прич.) тебенёвка тебенёвочный тебенёк тезоимённый (РСЯР) тексти’лем и (разг.) текстилём [текстиль] телезвёзды телекиносъёмка телёнок телёночек телёночий (РСЯР) телеприёмник телерепортёр телесъёмка телехроникёр темлёха (БСРЖ) темлёшник (БСРЖ) темлёшный (БСРЖ) темнёхонький темнёшенький темнущая-тёмная тенёвка (два знач.: теневая экономика и теневая сторона жизни) тенёк тенёта тенётник тенётный тенётчик (В.Ч.) тенётчики (В.Ч.) тенёчек по тепёлку (Даль) тепёлок (Даль) тепёлый (Даль) теплёхонький теплёшенький теплоёмкий теплоёмкость теплонапряжённость теплоогарёвец (СГЖСССР) теплоогарёвцы (СГЖСССР) теплым-теплёхонько (РСЯР) тереблённый, -ён, -ена (прич.) тереблёный (прил.) терёзвый (Даль) терёшка (Даль) термобельё термоупрочнённый, -ён, -ена терпёж терпёлый (Даль) (Терпёл Бог, кормилец наш!) террасёр тесёмка тесёмочка тесёмочник тесёмочница тесёмочный тесёмчатый теснённый, -ён, -ена (прич.) тест-тренажёр тетеревёнок тетёра тетёрка, тетёрок (р. мн.) тетёха (Даль) тетёшить (Даль) тетёшкать (Даль) технооснащённость (НВРЛ) течёт [течь] тетёшкать(ся), -аю(сь), -ает(ся) теслённый, -ён, -ена (прич.) тёзо, тезиво (навоз конёвий) (Даль) тёза (Даль) тёзка тёзкин (Даль) тёк; дать тёку тёк [течь] (Даль) тёка (Даль) тёковая (смола) (Даль) тёкший тёлгас (Даль) тёлдас (Даль) тёлка, а также (БСРЖ) тёлочка ночка тёмна – я боюся… тёмная (БСРЖ) тёмненький тёмно-багровый, -ая, -ые (Даль) тёмно-болотный (НВРЛ) тёмно-бордовый тёмно-бyрый тёмно-вишнёвый тёмноволосый (Даль) тёмно-гнедой (Даль) тёмно-голубой тёмно-жёлтый тёмно-зелёный тёмно-карий тёмно-каштановый тёмно-красный тёмномалиновый (Даль) тёмноокрашенный тёмно-оливковый, -ая, -ое (Даль) тёмно-рyсый тёмно-рыжий, -ая (Даль) тёмно-сeрый тёмно-синий тёмно-фиолeтовый тёмноцветный, -ая (Даль) тёмно-чалый, -ая (Даль) тёмно-шоколадный тёмный, тёмен (прил.) тёмный (БСРЖ) тёпать (В.Д.) тёпленький, а также (БСРЖ) тёплинец (СГЖСССР) тёплинцы (СГЖСССР) тёплый; тёпел, тепло’ (прил.) тёплый (БСРЖ) тёплышко (Даль) тёр(ся), тёрла(сь), -ло(сь) [тереть(ся)] тёрзывать (РСЯР) тёрка, а также (БСРЖ) и (СРВЖ) тёрлово (БСРЖ) тёрки тёркин (Е) тёрн (терновник) тёрочка тёрочки (БСРЖ) тёрочный тёртый; тёрт, -а, -о тёртый-перетёртый тёрший(ся) тёрщик, а также (БСРЖ) тёс тёсанный, -ан, -ана (прич.) тёсаный (прил.) тёска (от тесать) тёсла, тёсел, тёслам (от ед. тесло) тёсы, затеси (РСЯР) тёта (РСЯР) тётенька тётенька-психолог («ЛГ», №1, 2005) тётечка тёти-Валин тётка, тёток (р. мн.) тётка (БСРЖ) тёткин тётушка, -шек тётушкин тётя; тёть, тётей (р. мн.) тётя (БСРЖ) тёша (Даль) тёшка; тёшек (р. мн.) (Даль) тёща, а также см. (БСРЖ) тёщенька тёщин тёщины блины (Даль) тигрёнок тигрёночек тимашёвец (СГЖСССР) тимашёвцы (СГЖСССР) тинёк (Даль) (моржовый клык) тираннозаврёнок тираннозаврёночек тиснёнка тиснённый, -ён, -ена (прич.) тиснёный (имеющий тиснение: тиснёный корешок) тифулёз (болезнь) тихарёк (БСРЖ) ткальё (Даль) тканьё (Даль) тканьём тканьёвый тканьёвое (Даль) ткёт(ся) [ткать(ся)] ткнёт(ся) [ткнуть(ся)] тлёй [тля] тлёвые тоё (частица) (обл.) тоё-то (Даль) тождеимённый (РСЯР) токарёвец (СГЖСССР) токарёвцы (СГЖСССР) токоприёмник токосъёмник толканёт(ся) [толкануть(ся)] толкнёт(ся) [толкнуть(ся)] толкнёшь [толкнуть] толкотнёй [толкотни] толпёж (РСЯР) толпёжный (РСЯР) толчёк толчёнка (например, картофельное пюре) толчённый, -ён, -ена (прич.) толчёный (прил.) толчёт(ся) [толочь(ся)] томлённый, -ён, -ена (прич.) томлёный (прил.) томнёшенько тонёхонький тонёшенький тонкобрёха (НВМ) тонколёзый нож (Даль) тонкораспылённый тонкошёрстный и тонкошёрстый то’пленный (прич.) то’пленый (прил.) (то’пленая комната) топлёный (прил.) (топлёное молоко) то’полевый и тополёвый тополёк торённый, -ён, -ена (прич.) торёный (прил.) торможённый, -ён, -ена (прич.) тормознёт(ся), тормознёшь(ся) [тормознуть(ся)] торопёжка торчёк (РСЯР) торчёный (СРВЖ) торшёнок (Даль) то-сё тот ещё то’ченный (прич.) (от заострять, вытачивать) точёнка точённый, -ён, -ена (прич.) (от источать(ся)) точёный (прил.) точнёхонько точнёшенько (РСЯР) тошнёхонько тра’вленный и травлённый, -ён, -ена (прич.) тра’вленый и травлёный (прил.) трамблёр транзитёр транспортёр транспортётный трассёр (в пиротехнике) траханьё (Е) трезвёхонький трезу’бый и трёхзубый трелёванный, -ан, -ана трелёвка трелёвочник трелёвочный трелёвщик тренажёр тренажёрный трепанёт(ся) [трепануть(ся)] трепаньё («У») трепыхнёт(ся) [трепыхнуть(ся)] третьёводни (нареч.) (прост., устар. к третьего дня) третьёводнишний и третьёвошний трефёлка (БСРЖ) трёкало (БСРЖ) трёкать (Даль) трёкать (СРВЖ) трёкать (СРСЮЮ) трёкала (Даль) трёкалье (Даль) трёкальщик (Даль) трёканье (Даль) трёкивать (Даль) трёкнуть (БСРЖ) трёкнуться (БСРЖ) трём, трёх, о трёх [трое] (числ.) трёмстам, трёхсот, о трёхстах [триста] (числ.) трёп (вульг.) трёпанный, -ан, -ана трёпаный (прил.) трёпка трёпы (СРВЖ) трёт(ся) [терёть(ся)] трёх, трём, о трёх [три] (числ.) трёха (3 руб.) (вульг.) трёха (трёхочковый бросок в баскетболе) трёхактный трёхаршинный трёхатомный трёхать (Е) трёхбальник (НВРЛ) трёхбальный трёхбашенный трёхбревённая связка трёхвалентный трёхвалковый трёхведёрный и трёхвёдерный трёхвековой трёхвёрстка трёхвёрстный трёхвершинный трёхвершковый трёхвинтовой трёхглавёнок трёхглавёныш трёхглавый трёхгодичный трёхгодовалый трёхгодовой трёхголовочный трёхголовый трёхголосный «Трёхгорка» (АО «Трёхгорная мануфактура») трёхградусный трёхгранный трёхгрошовый трёхдечный трёхдисковый трёхдневный трёхдольный трёхдюймовка трёхдюймовый трёхжильный трёхзальный трёхзвёздник (тип НЛО) трёхзвёздный трёхзвёздочный трёхзвенный трёхзначный трёхзубый трёхимённый трёхимпульсный трёхкамерный трёхканальный трёхкарманный трёхкаскадный трёхкилограммовый трёхкилометровка трёхкилометровый трёхкилевой трёхкильватерный трёхклассный трёхколёсный трёхколонник трёхколонный трёхкомнатный трёхконтурный трёхкопеечный трёхкрасочный трёхкратный трёхкубовый трёхкулачковый трёхламповый трёхлепестковый трёхлетие трёхлетка трёхлетний трёхлеток трёхлинейка трёхлинейный трёхлистный трёхлитро’вка (НВРЛ) трёхлитровый трёхлопастный трёхма (РСЯР) и (Даль) трёхмастный трёхмачтовик трёхмачтовый трёхмерность трёхмерный трёхместный трёхмесячный трёхметровый трёхмиллиардный трёхмиллионный трёхмильный трёхминутка трёхминутный трёхмоторный трёхнедельный трёхнефный трёхногий (разг.) и трено’гий трёхнутый (СРСЮЮ) трёхнуться (Е) трёхокись трёхоконный трёхопорный трёхоска трёхосный трёхочковый трёхпалубный трёхпалый трёхпальцевый (НВРЛ) трёхперстка трёхпeрстный и троепeрстный трёхпланный трёхполозый трёхполый трёхполье трёхпольный трёхпольщина трёхприёмный трёхпрограммный трёхпроцентный трёхпрядная верёвка (РСЯР) трёхпудовый трёхразовый трёхраундовый трёхрeберник трёхрожковый трёхрублёвка трёхрублёвый трёхрядка трёхрядный трёхсаженный трёхсветный трёхсвятительский трёхсекундный трёхсекционный трёхсериный трёхсеялочный трёхскатный трёхскоростной трёхсложный трёхслойный трёхсменка трёхсменный трёхсотенный трёхсотка трёхсотлетие трёхсотлетний трёхсотместный трёхсо’тник трёхсотрублёвый трёхсотсильный трёхсоттысячник трёхсоттысячный трёхсотый, а также (БСРЖ) трёхспицевое (колесо велосипеда) (О.К.) трёхсполовинный трёхсрубный (дом) трёхстадийный трёхстволка трёхствольный трёхстворчатый трёхстенный трёхстепенный трёхстишие трёхстопный трёхсторонний трёхструнный трёхступенчатый трёхсуточный трёхсэтовый трёхтактный трёхтомник трёхтомный трёхтонка трёхтонный трёхтрубный трёхтысячелетний трёхтысячный трёхуровневый трёхфазный трёхфунтовый трёххвостка трёхходовка трёхходовой трёхходовый трёхцветка трёхцветный трёхцилиндровый трёхчасовой трёхчастный трёх-четырёх (три-четыре) трёхчлен (О.К.) трёхчлениковый трёхчленка (НВРЛ) трёхчленный трёхшёрстный трёхъядерный трёхъязычный трёхъярусный трёхэлектродный трёхэлементный трёхэтажный трёхтябловый иконостас (РСЯР) трёшка (трёхрублёвая бумажка) (прост.) трёшка (например, трамвай № 3) трёшник трёшница тридцативедёрный и тридцативёдерный тридцативёрстный тридцатирублёвка тридцатирублёвый тридцатитрёхлетний тридцатьчетвёрка (танк Т-34) тритонёнок трихинеллёз трихостронгилёз трихоцефаллёз трицератопсёнок троежeнец троежёнство троепе’рстный и трёхперстный троетёс трощённый, -ён, -ена (прич.) трощёный (ссyченный, свитый) трубковёрт труболёт (БСРЖ) трудоднём [трудодень] трудоёмкий трудоёмкость трухалёк (БСРЖ) трухнёт (трухнуть —струсить) (разг.) трындёж (СРВЖ) тряпьё, тряпьём тряпьёвый тряс (произносится и трёс) [трясти] трясённый, -ён, -ена (прич.) трясёт(ся) [трясти(сь)] тряханёт(ся) [тряхануть(ся)] тряхнёт(ся) [тряхнуть(ся)] туатарёнок туберкулёз туберкулёзник туберкулёзница туберкулёзный тузьё тунгуроолёкминец (СГЖСССР) тунгуроолёкминцы (СГЖСССР) тупеё (РСЯР) и (Даль) турбощётка турёнок (от тур) турёночек турнёт [турнуть] (разг.) турникет-контролёр (НВРЛ) турпутёвка турьё тyскло-зелёный тушёванный, -ан, -ана тушёвка тушёнка ту’шенный (прич. от тушить — гасить) тушённый, -ён, -ена (прич. от тушить — варить на медленном огне в закрытом сосуде) тушёный (прил.— приготовленный тушением) тысячевёрстный тысячерублёвка (НВРЛ) тысячерублёвый тычьё (В.Д.) тюленёнок тюленёночек тяговооружённость тяжелёнек тяжелогружённый (прил.) тяжёленький тяжёл, -жела, -жело тяжёл на ногу (РСЯР) тяжёлый     У убеждённо (нареч.) убеждённость убеждённый, -ён, -ена (прич. и прил.) убелённый, -ён, -ена уберёг(ся) [уберечь(ся)] уберёга (РСЯР) уберёгу нет лесу (Даль) убережённый, -ён, -ена убережёт(ся) [уберечь(ся)] уберёт(ся) [убрать(ся)] уберёшь [убрать] убёг (ну, я убёг) ублаготворённый, -ён, -ена ублажённый, -ён, -ена (разг.) убредёт, убрёл [убрести] убыстрённый, -ён, -ена убьёт(ся) [убить(ся)] убьёшься [убиться] уведённый, -ён, -ена уведёт, увёл [увести] увезённый, -ён, -ена увезёт [увезти] увеселённый, -ён, -ена увернётся [увернуться] увёз [увезти] увёзший увёл [увести] родник увёлся (РСЯР) увёрнутый увётст, увёрстка (РСЯР) увёртом нч. (РСЯР) увёрстанный, -ан, -ана увёрстывание увёрстывать(ся) увёртка увёртливость увёртливый; увёртлив, -а, -о увёртывать(ся) увёртыш увильнёт [увильнуть] увлажнённость увлажнённый, -ён, -ена увлёк(ся) [увлечь(ся)] увлёкший(ся) увлечённость увлечённый, -ён, -ена увлечёт(ся) [увлечь(ся)] уволо’ченный (от уволочить) уволочённый, -ён, -ена (от уволочь и уволочить) уволочёт [уволочь] (простореч.) увьёт(ся) [увить(ся)] углеподъёмник углеподъёмный углём и у’глем [уголь] углублённость углублённый, -ён, -ена (прич.) и -ён, -ённа (прил.: основательный, серьёзный) угнетённость угнетённый, -ён, -ена угнетёт [угнести] угнёт, угнётка (РСЯР) уговорённый, -ён, -ена уголёк уголёк (БСРЖ) уголёчек уголовно-запрещённый (НВРЛ) у’гольно-чёрный угомонённый, -ён, -ена угощённый, -ён, -ена угребёт(ся) [угрести(сь)] угрёбище (Е) угрёбищный (Е) угрёбок – род весла (РСЯР) угрёвый угрём [угорь] угрёнок угры’зенный и угрызённый, -ён, -ена угрызёт [угры’зть] удавёнок удавёночек удаётся [удаваться] удалённость удалённый, -ён, -ена удевятерённый, -ён, -ена уделённый, -ён, -ена удерёт [удрать] (разг.) удесятерённый, -ён, -ена удешевлённый, -ён, -ена удёбки (Даль) удивлённо (нареч.) удивлённый, -ён, -ена’ и -ён, -ённа удлинённость удлинённый, -ён, -ена удовлетворённо (нареч.) удовлетворённость удовлетворённый, -ён, -ена’ и -ён, -ённа удорожённый, -ён, -ена удочерённый, -ён, -ена удручённо (нареч.) удручённый, -ён, -ена и -ён, -ённа уединённо (нареч.) уединённость уединённый, -ён, -ена (прич.) и (прил.) -ён, -ённа уёв (м. ч. р. п. от у.е. — условная единица) уёжилась (Даль) уёжиться (Даль) уём, уёмка, уёму, нет уёму, без уёму уёмистый уёмный (РСЯР) уёмчивый (РСЯР) уёмщик (РСЯР) уёк (обл., мелкая рыбёшка) уёрзать (Даль) уёрзнул (Даль) уёрзнуть (РСЯР) и (Даль) ужаснёт(ся) [ужаснуть(ся)] ужесточённый, -ён, -ена уживётся [ужиться] ужмёт(ся) [ужать(ся)] ужнёт(ся) [ужать(ся)] узденём [уздень] узкоплёночный, а также (БСРЖ) узкоротёнок узнаёт(ся) [узнавать(ся)] уйдёт [уйти] уймёт(ся) [унять(ся)] уклёкнуть (Даль) уклонённый, -ён, -ена укоренённость укоренённый, -ён, -ена укоренённый, -ён, -ена укоснённый звук (РСЯР) украдёт [украсть] укреплённый, -ён, -ена укрощённый, -ён, -ена укрупнённо (нареч.) укрупнённость укрупнённый, -ён, -ена улещённый, -ён, -ена (прост.) улепетнёт [улепетнуть] (разг.) улепётывание улепётывать (разг.) улёгся [улечься] улёгший(ся) улёжное место (РСЯР) улёт (в т. ч. вульг.) улётно, улётный (вульг.) улётовец (СГЖСССР) улётовка (СГЖСССР) улётовцы (СГЖСССР) улизнёт [улизнуть] (разг.) уличённый, -ён, -ена улучённый, -ён, -ена (прич.) улыбнётся [улыбнуться] улягнёт [улягнуть] умалённый, -ён, -ена (прич.) умалишённый уманённый, -ён, -ена умащённый, -ён, -ена (книжн. устар.) умён [умный] уме’ньшенный и уменьшённый, -ён, -ен умерщвлённый, -ён, -ена умёт (постоялый двор, хутор в степи) умётанный, -ан, -ана (от уметать) уметённый, -ён, -ена (от умести) уметёт, умёл [умести] умётший умещённый, -ён, -ена умилённо (нареч.) умилённость умилённый, -ён, -ена умирённый, -ён, -ена умиротворённо (нареч.) умиротворённость умиротворённый, -ён, -ена (прич.) и -ён, -ённа (прил.) умнёт(ся) [умять(ся)] умоисступлённый умолённоеё дитё, дитятко (Вологда) умолённый, -ён, -ена умоповреждённый уморённый, -ён, -ена умощённый, -ён, -ена умрёт [умереть] умудрённость умудрённый, -ён, -ена умыкнёт [умыкнуть] умягчённый, -ён, -ена унёс(ся) [унести(сь)] унесённый, -ён, -ена унесёт(ся) [унести(сь)] унёсший(ся) уни’женность и (устар.) унижённость уни’женный, -ен, -ена (прич.) и (прил.: терпящий унижения) -ен, -енна унижённый, -ён, -ённа (прил.) (устар. к уни’женный) уничижённость уничижённый, -ён, -ена (прич.) и -ён, -ённа (прил.) унырнёт [унырнуть] упадёт, -ёшь, -ём [упасть] упасённый, -ён, -ена упасёт(ся) [упасти(сь)] упелёнатый и упелёнутый упелёнывыние упелёнывать(ся) упережённый, -ён, -ена упестрённый, -ён, -ена упечённый, -ён, -ена упёк (сущ.) упёка (Даль) упёк(ся) [упечь(ся)] упёкший(ся) упёр(ся) [упереть(ся)] упёртость упёртость (СРСЮЮ) упёртый; упёрт, -а, -о упёрший(ся) упечёт(ся) [упечь(ся)] упирёд (Даль) упихнёт(ся) [упихнуть(ся)] (прост.) уплетённый, -ён, -ена уплёл(ся), уплетёт(ся) [уплести(сь)] уплётка (РСЯР) уплётший(ся) уплотнённость уплотнённый, -ён, -ена уплощённость уплощённый, -ён, -ена уплывёт [уплыть] упо’енный (прич. от упоить) упоённо (нареч.) упоённо-радостный (НВРЛ) упоённость упоённый, -ён, -ена (прил.: испытывающий упоение) уползёт [уползти] упорхнёт [упорхнуть] употреблённый, -ён, -ена упразднённый, -ён, -ена упреждённый, -ён, -ена упрекнёт [упрекнуть] упрёк упрёт(ся) [упереть(ся)] упрёшься [упереться] упрочнённый, -ён, -ена упрощённо (нареч.) упрощённо-ма’ссовый (НВРЛ) упрощённо-политизи’рованный (НВРЛ) упрощённость упрощённый, -ён, -ена (прич.) и (прил.) -ён, -ённа упряжённый, -ён, -ена упряжёт(ся) [упрячь(ся)] упырём [упырь] упьётся [упиться] упятерённый, -ён, -ена уро’вненный и уравнённый, -ён, -ена урастёт [урасти] урвёт(ся) [урвать(ся)] уречённый день (РСЯР) урёк – упрёк (РСЯР) урёма и уре’ма (мелкий лес и кустарник, растущий в долинах рек) (обл.) урёмный (обл.) урождённая урождённый, -ён, -ена уро’ненный и уронённый, -ён, -ена усё (Даль) усёк (т. е. понял) усёкший усёнка – острая кромка (РСЯР) усемерённый, -ён, -ена усечённый, -ён, -ена усечёт, усёк [усечь] (отсекая, укоротить и понять) ускакнёт [ускакнуть] ускользнёт [ускользнуть] услаждённый, -ён, -ена услащённый, -ён, -ена усложнённость усложнённо усложнённость усложнённый, -ён, -ена усмехнётся [усмехнуться] усмирённый, -ён, -ена уснащённый, -ён, -ена уснёт [уснуть] усреднённость усреднённый, -ён, -ена устаёт [уставить] устерёг [устеречь] устерёгший(ся) устережёт(ся) [устеречь(ся)] усторожённый, -ён, -ена устранённый, -ён, -ена устрашённый, -ён, -ена устремлённость устремлённый, -ён, -ена устыжённый, -ён, -ена устьцилём (СГЖСССР) устьцылёмка (СГЖСССР) устьцылёмы (СГЖСССР) усугублённый, -ён, -ена усыновлённый, -ён, -ена усыплённый; , -ён, -ена утаённый, -ён, -ена утверждённый, -ён, -ена утемнённый, -ён, -ена утеплённый, -ён, -ена утеснённый, -ён, -ена утетёшкать(ся) утечёт [утечь] утёк [утечь] спаслись утёком (РСЯР) утёкший утёнок и утёныш утёнок (СРВЖ) утёночек утёр(ся), утрёт(ся), утёрла(сь), -ло(сь) [утереть(ся)] утёртый; утёрт, -а, -о утёрший(ся) утёс утёсанный, -ан, -ана утёсистость утёсистый утёсник утёсывать(ся) утильсырьё, утильсырьём утишённый, -ён, -ена уткёт(ся) [уткать(ся)] уткнёт(ся) [уткнуть(ся)] утолённость утолённый, -ён, -ена утолчёт(ся) [утолочь(ся)] утолчённый, -ён, -ена утолщённый, -ён, -ена утомлённо (нареч.) утомлённость утомлённый, -ён, -ена и (прил.) -ён, -ённа утончённо (нареч.) утонённый, -ён, -ена утончённость утончённый, -ён, -ена и (прил.) -ён, -ённа уторённый, -ён, -ена (от уторить) уточнённый, -ён, -ена утрёт(ся) [утереть(ся)] утруднённый, -ён, -ена утруждённый, -ён, -ена утрясённый, -ён, -ена утрясёт(ся) [утрясти(сь)] утучнённый, -ён, -ена утяжелённый, -ён, -ена ухажёр ухажёристый (из Т.В.) ухажёрка ухажёрский ухажёрство ухищрённость ухищрённый, -ая, -ое, -ён, -ённа ухлестнёт [ухлестнуть] ухлёбывать (РСЯР) ухлёстанный, -ан, -ана ухлёснутый ухлёстывать(ся) ухмыльнёт(ся) [ухмыльнуть(ся)] уховёртка уценёнка уценённый, -ён, -ена уценённый (СРСЮЮ) учащённо (нареч.) учащённый, -ён, -ена (прич.) и (прил.) -ён, -ённа учёба учёл учёнее (ср. ст. учёный) учёно (нареч.) учёность учёный; учён, -а, -о (прил.) учёный, -ого, -ные и т.д.  учёный-агроном учёный-аналитик (НВРЛ) учёный-востоковед учёный-паразитолог (НВРЛ) учёный-просветитель учёный-экспериментатор (НВРЛ) учёный-энциклопедист и т.д.  учёс учёсанный, -ан, -ана учёсывать(ся) учёт учетверённый, -ён, -ена учётно-издательский учётно-кредитный учётно-справочный учётно-ссyдный учётно-статистический учётно-экономический учётный учётчик учётчица учинён новый порядок (РСЯР) учинённый, -ён, -ена учнёт [учать] учреждённый, -ён, -ена учтёнка учтённость (НВМ) учтённый, -ён, -ена учтёт(ся) [учесть(ся)] ушвырнёт [ушвырнуть] ушёл [уйти] ушестерённый, -ён, -ена ушибёт(ся) [ушибить(ся)] ушлёт [услать] ушьёт(ся) [ушить(ся)] ущемлённый, -ён, -ена ущерблённый, -ён, -ена ущипнёт [ущипнуть] уязвлённо (нареч.) уязвлённость уязвлённый, -ён, -ена уяснённый, -ён, -ена     Ф фазанёнок, а также (БСРЖ) и (СРВЖ) фазанёночек фазёр (БСРЖ) фаланстёр фантазёр фантазёрка фантазёрство фарёрский (к Фарёрские острова) фарёрцы фарсёр фасциолёз (болезнь) фенёк (зверёк сем. псовых) февралём [февраль] фефёла (РСЯР) и (Даль) фёдор (БСРЖ) и (СРВЖ) фёдоровец (СГЖСССР) фёдоровский (истор.) фёдоровцы (СГЖСССР) Фёдор-Стратилат Фёдор-Тирон Фёкла-заревница (Даль) фён (тёплый сухой ветер в горной стране) фёрстый, -ая (БСРЖ) ферзём и фе’рзем [ферзь] ферментёр фефёла (прост.) фигнёй [фигня] (вульг.) филёвский (от Фили) филёнка филёночный филёнчатый филёр и фи’лер филёрский филинёнок филинёночек филиколлёз (болезнь) фили’стер и филистёр фили’стерский и филистёрский философи’чно-отстранённый (НВРЛ) финансоёмкий (НВРЛ) финёвец (В.Ч.) финёвцы (В.Ч.) финишёр финсчётрабо’тник (НВРЛ) фирмалёк (БСРЖ) фитилёк фитилём [фитиль] фиточаёв (р. п. от фиточай) флаг-трёхцветка (НВРЛ) фланёр (праздношатающийся) фланёрский фланёрство фланёрствовать фланкёр (обстреливающий противника с фланга продольным огнём) флёp флёрдоранж флёрдоранжевый флёрница (насекомое) флёровец (В.Ч.) флёровцы (В.Ч.) флёровый флёрт (И. Сев.) флёрту’ем (И. Сев.) флёртэр (И. Сев.) флёры (И. Сев.) флигелёк флэтёр (БСРЖ) фонарём [фонарь] фондовооружённость фондоёмкость фондооснащённость форснёт [форснуть] (прост.) фотокинопулемёт фотопелёнки (НВМ) фотоплёнка фотоприёмник фотопулемёт фоторепортёр фоторепортёрский фоторужьё фотосъёмка фразёр фразёрский фразёрство фразёрствовать франтирёр фришёванный, -ан, -ана фрондёр фрондёрка фрондёрский фрондёрство фрондёрствовать фторзамещённый и фторозамещённый фузилёр, фузелёр, фузельёр фузилёрный фуникулёр фуникулёрный фуражка-звёзды (СРВЖ) фурункулёз фурункулёзный фуфлёнка (БСРЖ) фуфлёрка (БСРЖ) фуфлёрша (БСРЖ) фуфломёт (БСРЖ) фуфырёк (БСРЖ)     Х хаёвый (БСРЖ) хамелеонёнок хамелеонёночек хамлёшка (БСРЖ) хамьё, хамьём хапанёт [хапануть] харёк (БСРЖ) хачьё (Е) хвалёна (РСЯР) хвалёнушка (РСЯР) хвалёный хвастнёт [хвастнуть] хватнёт [хватнуть] хвоёй (пр. п. хвоя) хворостьё (РСЯР) хёвдинг (ист., норв. воевода) (САМ) хилондонеллёз хитёр хитросплетённый хищёнка (унесённый с предприятия продукт) хладорёбрые хламодьё хламьё, хламьём хлебнёт [хлебнуть] хлебопёк хлебоприёмник хлебоприёмный хлестанёт(ся) [хлестануть(ся)] хлестнёт [хлестнуть] хлёб, хлёбка (РСЯР) и (Даль) наварные щи хлёбки (РСЯР) хлёбанный, -ан, -ана хлёбовать (Даль) хлёбово (Даль) хлёбово (БСРЖ) хлёз (Даль) хлёско (Даль) хлёст хлёстка (Даль) хлёстанный, -ан, -ана хлёсткий, хлёсток хлёстко хлёсткость хлёстче (сравн. ст.) хлёстывать хлёщ (Даль) хлобыстнёт(ся) [хлобыстнуть(ся)] хлопотнёй [хлопотня] хлорзамещённый и хлорозамещённый хлыстнёт [хлыстнуть] хмелёвка (сорт махорки) хмелёк хмелён [хмельной] хмельным-хмельнёхонек (РСЯР) хмельным-хмельнёшенек (РСЯР) хоботьё хозрасчёт хозрасчётный хо’ленный и холённый прич.) хо’леный и холёный (прил.) холмовьё (РСЯР) холоднёхонький, -нек, -нька холоднёшенький, -нек, -нька холодным-холоднёхонько (Даль) холодным-холоднёшенько (В.Ч.) холожённый, -ён, -ена (прич.) холожёный (прил.) холостёжь (разг.) холощённый, -ён, -ена (прич.) холощёный (прил.) холуём, холуёв [холуй] хольбёллия (ботан.) хомутьё (СХ) хопёрский (от Хопёр) хорёвая нора (В.Ч.) хорёвый хорёк (островок на реке или озере) (Даль) хорёк хорёнок (В.Ч.) хорёночек (В.Ч.) хорёчек (В.Ч.) храбёр (храбрый) (Ну, ты храбёр!) хранённый, -ён, -ена хрёк (Даль) хрёс (Даль) хрёсна (Даль) хрёсненька (Даль) хрёсной (Даль) хрёстовка (Даль) храпнёт [храпнуть] (прост.) хроникёр хроникёрский хрулёнок (БСРЖ) хрулёночек (БСРЖ) хрусталём [хрусталь] хрущёвка хрущёвский(ая) (от Хрущёв) хрущёвы (НВРЛ) хрущоба (дом) и хрущёба (с учётом истории появления этого слова) худошёрстный и худошёрстый хулённый, -ён, -ена (прич.) хулёный (прил.) хулигёл (хулиганка) хулиганьё, хулиганьём (разг.)     Ц цаплёнок цаплёночек царёв (прил. к царь) царёвка (Даль) царёвый царёк (Даль) царём [царь] царёнок царёночек царёныш (К. Чу.) царскосёлка, -и, -лок царскосёлы, -ов, -сёл цветёт [цвести] цветуёчек (Е) цвёл [цвести] цвёлый цвёра (Даль) цевьё, цевьём 1) стержень; 2) верхняя часть ружейного ложа цежёный (прил.) целеустремлённо (нареч.) целеустремлённость целеустремлённый, -ён, -ённа целёвка (Е) целёвщик (БСРЖ) целёхонький целёшенький цельё (неколотые дрова) (РСЯР) ценённый, -ён, ена (прич.) центрально-чернозёмный центрозаврёнок цепёха (БСРЖ) церёшка (мотылёк) (Даль) цёковки (Даль) цёлыш (Даль) циклёванный, -ан, -ана циклёвка циклёвочный циклёвщик циклонёнок (ТВ, НТВ) циклопёнок циклопёночек цирк-гастролёр (НВРЛ) цыганёнок цыганёночек цыплёнок цыплёночек     Ч чабер и чабёр (растение) чаехлёб (Е) чаехлёбка (Е) чаехлёбничать (Е) чаехлёбствовать (Е) чаёв (м. ч. р. п. чай) чаёвник чаёвница чаёвничанье чаёвничать чаёк на чаёк (Даль) чайлдёнок (БСРЖ) чайлдрёнок (англо-русский гибрид: ребёночек) (из газет) частёхонько чароплёт (маг, волшебник) чароплётница чароплётство чароплётствовать чароплётствующий чеботарём [чеботарь] чеботарёнок (В.Ч.) чекменём [чекмень] червёжная нажива (РСЯР) червём [червь] червлёность (Даль) червлёный (тёмно-красный, багряный) черепьё черёвный (РСЯР) черёвушек (РСЯР) черёвушка (РСЯР) черёд черёмуха черёмуховый черёмушник черёмушный черканёт [черкануть] черка’ние и чёрканье черка’ть(ся) и чёркать(ся) черкнёт [черкнуть] чернённый, -ён, -ена (прич.) чернёный (прил.) чернёхонький чернёшенький чернозём чернозёмный черноклён чернотрёп (НВМ) черпанёт [черпануть] черпнёт [черпнуть] чертенёнок (В.Ч.) чертенёночек (В.Ч.) чертёж чертёжик чертёжка (Е) чертёжник чертёжница чертёжно-графический чертёжно-констрyкторский чертёжно-копировальный чертёжный чертёнок чертыхнётся [чертыхнуться] чесанёт [чесануть] четверёнки («У») четвернёй [четверня] четвёрка [от четыре] четвёрка (СРВЖ) и (Даль) четвёрочка четвёрочник четвёрочница четвёрочный четвёртка [от четверть) четвёртковый (РСЯР) четвёртый четверчённый (например, тёс) четырёх, четырём (от четыре) четырёхадресный четырёхактный четырёхбальный четырёхбитный четырёхборье четырёхвалковый четырёхвёдерный и четырёхведёрный четырёхвесeльный и четырёхвёсельный четырёхглавый четырёхглазка четырёхглазый четырёхгодичный четырёхгодовалый четырёхголовочный четырёхголосный четырёхгранник четырёхгранный четырёхдневный четырёхдольный четырёхдорожечный четырёхжаберные четырёхзвенный четырёхзвёздный четырёхзвёздочный четырёхзначный четырёхзyбы четырёхканальный четырёхквартирный четырёхкилометровый четырёхклассный четырёхколёсный четырёхконечный четырёхкратный четырёхлетие четырёхлетка четырёхлетний четырёхлеток четырёхлистный четырёхлитровый четырёхлучевой четырёхмерный четырёхместный четырёхмесячный четырёхметровый четырёхмиллионный четырёхмоторный четырёхногий четырёхорудийный четырёхосный четырёхпалубный четырёхпалый четырёхполосный четырёхполье четырёхпольный четырёхполюсник четырёхпрограммный четырёхпроцентный четырёхрёберный четырёхручие (НВРЛ) четырёхручный четырёхрядный четырёхсерийный четырёхсекундный (НВРЛ) четырёхскатный четырёхскоростной четырёхсложный четырёхсоткилометровый четырёхсотлетие четырёхсотлетний четырёхсотый четырёхстенный четырёхстопный четырёхсторонний четырёхструнный четырёхтактный четырёхтактовый четырёхтомник четырёхтомный четырёхтонный четырёхтысячный четырёхугольник четырёхугольный четырёххлористый четырёхцветный четырёхцилиндровый четырёхчасовой четырёхчастный четырёхчленный четырёхъярусный четырёхэлементный четырёхэпатажный мат (НВМ) четырёхэтажный четырёшка (БСРЖ) чечётка чешуёй [чешуя] чещённый, -ён, -ена (прич. от честить) черношёрстный и черношёрстый чё ты? (из газет) (В.Ч.) чёботы (сапоги, башмаки) чёвый (БСРЖ) чё-дан (НВРЛ) чёзни! (исчезни!) (Даль) чёкалина (трещина) (Вологда) чёлка, а также (БСРЖ) чёлкогляделка (Е) чёлн чёлочка чём, о чём, на чём (предл. п. от что) чё? ничё! (из газет) (В.Ч.) чёрканный, -ан, ана чёрканье и черка’нье чёрная, а также (БСРЖ) чёрненький чёрно-бело-клетчатый (НВРЛ) чёрно-бeлый чёрно-бyрый чёрно-вишнёвый (НВРЛ) чёрно-белое (БСРЖ) чёрное-белое (БСРЖ) чёрно-жёлто-белый (НВРЛ) чёрно-никелиро’ванный (НВРЛ) чёрноогласка (НВМ) чёрно-пeгий чёрнопёрый (НВРЛ) чёрно-пёстрый чёрно-рыжий чёрно-сeрый чёрно-синий чёрно-солёный (НВРЛ) чёрноюмористи’ческий чёрный, чёрен чёрный (БСРЖ) чёрный-пречёрный чёрствость чёрствый, чёрств, черства, чёрство и черство чёрт (мн. ч. черти) чёрт (БСРЖ) чёрта с два чёртик (уменьш. к чёрт) чёртик (БСРЖ) чёртов чёртолесье (НВМ) чёртослив (НВМ) чёртоточина (НВМ) чёрточка (ум. к черта) чёртошёрстный (НВМ) чёрт-те чёртушка чёс чёс (музык. вульг.) чёсанец чёсанки (тонкие валенки) чёсанок чёсанный, -ан, -ана (прич.) чёсаный (прилаг.) чёска чёт чётка – чётное число (РСЯР) чётки, а также (БСРЖ) чёткий, чёток, четка’ и чётка чётко (нареч.) чёткость чёт-нeчет чётность чётный чётче (сравн. ст.) чибисёнок чибисёночек чи’ненный (прич. от чини’ть — исправлять) чинённый, -ён, -ена (прич. от чинить — устраивать; церемониться) чинёный (прил. от чини’ть) чинопёр (САМ) чин-чинарём чирёнок (птенец чирка) чистёха чистёхонький чистёшенький чистоозёрец (СГЖСССР) чистоозёрцы (СГЖСССР) чистоплемённый чихирём [чихирь] чихнёт [чихнуть] членённый, -ён, -ена чтёные деньги (РСЯР) чтёт [честь] что почём чубодёрка (НВМ) чувашнёй [чувашня] чудён и чyден [чудной] чутьё, чутьём чухрёнок (поросёнок) (РСЯР) чхнёт [чхнуть] чьё, (о) чьём чьё-либо чьё-нибудь чьё-то     Ш шабёр (сосед) (Даль) шабёрка (Даль) шабрёнка (соседка) (Даль) шабрёнок шагнёт [шагнуть] шакальё (БСРЖ) шалёванный, -ан, -ана шалёвка (тонкая доска) (Даль) шамилёвский (от Шамиль) шарнирно-сочленённый шасси-ликёр (СРВЖ) шатёр шатёрник (Даль) шатёрщик (Даль) шатёрный шатнёт(ся) [шатнуть] шахтёр шахтёрка (два знач.: лампочка и спецодежда) шахтёрский шахтоподъёмник шварёха (В.Д.) швеёй [швея] швырнёт(ся) [швырнуть(ся)] шебёл (Даль) шевелённый, -ён, -ена (прич.) шевелёный (прил.) шевельнёт(ся) [шевельнуть(ся)] шелёвка (В.Д.) шелковьё (БСРЖ) шеломчёный (покрытый крышей) шелохнёт(ся) [шелохнуться)] шелушённый, -ён, -ена (прич.) шелушёный (прил.) шепётка (В.Д.) шепнёт [шепнуть] шереспёр (Даль) шереспёриться (Даль) шестерёнка, а также (БСРЖ) шестерённый шестерёночный шестерёнчатый шестёра (Е) шестёрка (цифра 6; группа из шести единиц; слуга в трактире; подхалим) шестёрка (БСРЖ) шестёрочный шестерён [шестерня] шестивёрстный шестиве’сeльный и шестивёсельный шестирублёвый шестопёр (род булавы) шереспёр шестерёнка шёл [идти] шёлк, в (на) шёлке шёлковый шёлкокомбинат шёлкокрутильный шёлкокручение шёлкомотальный шёлкомотальня шёлкомотание шёлкомотальщик, -щица шёлкообрабатывающий шёлкоотделительный шёлкоотделочный шёлкопрядение шёлкопрядильный шёлкопрядильня шёлкотканый шёлкоткацкий шёлкоткачество шёлк-сырeц шёпот шёпотная беседа (РСЯР) шёпотом (нареч.) шёптанный шёрстка шёрстность шёрстный шибанёт [шибануть] шиканёт [шикануть] шикнёт [шикнуть] (прост.) шимпанзёнок шимпанзёночек шинкарём [шинкарь] ширёвка (Е) ширнёшь(ся) [ширнуть(ся)] шировьё (БСРЖ) широкобёдрый широкоплёночный шитьё, шитьём шкапёнок (БСРЖ) шкапёночек (БСРЖ) шкарёнки (БСРЖ) шкурёха (девица л.п., Л. Толстой «Власть тьмы») (САМ) шкуродёр, а также (БСРЖ) шкуродёрный (НВРЛ) шлеёй [шлея], шленёха (БСРЖ) шлепётья (НВРЛ) шлёвка шлём-блём (СРВЖ) шлёмка (БСРЖ) шлёная (дохлая рыба) (Даль) шлёнда шлёндать шлёндить шлёндра (СРВЖ) шлёндрать шлёндрить шлёнка (порода овец) шлёнка (БСРЖ) и (СРВЖ) шлёнский шлёп (шлёпанье) шлёп (неизм.) шлёпа (Даль) шлёпало, а также (БСРЖ) шлёпанцы (Даль) шлёпанье (Даль) шлёпать(ся) (Даль) шлёпень (Даль) шлёпка (разг.) шлёпки (НВРЛ) шлёпни (Даль) шлёп-нога (Е) шлёпни (В.Д.) шлёпнутый шлёпнуть(ся) шлёпнуть (СРВЖ) шлёпывать (Даль) шлёт(ся) [слать(ся)] шлёх (берберская народность) шляпёнка шмелём [шмель] шмелём (нареч.) (Е) шмотьё шмулём (нареч.) (Е) шмыгнёт [шмыгнуть] шнёная рыба (Даль) шнурёнок (БСРЖ) шнурёночек (БСРЖ) шнырнёт [шнырнуть] шофернёй [шоферня] шофёр шофёрить шофёр-лихач шофёрский шофёрство шофёр-тихач (НВМ) шофёрша шоффёр шпаклёванный и шпатлёванный шпаклёвка и шпатлёвка шпаклёвочный и шпатлёвочный шпаклёвщик и шпатлёвщик шпалёрка (СРВЖ) шпанёнок шпанёночек шпенёк (Даль) шпенёчек шпеночно-долбёжный шпётная (Даль) шпётно (Даль) шпётный (Даль) шпилёвка (Е) шпилёк (Даль) штабелёванный, -ан, -ана штабелёвка штабелёвочный штабелёк штабелёр штемпелёванный, -ан, -ана штемпелёк штeмпельно-гравёрный штё (Даль) штукарём [штукарь] штылёк (палочка у иконописцев) штырёк шубёнка шуганёт [шугануть] (прост.) шугнёт [шугнуть] (прост.) шумолёт (НВМ) шурьё (БСРЖ) шурьёв (мн. от шурин) шустёр (кр. прил. от шустрый) шустёрый плутяга (РСЯР) шутём – шутя (РСЯР) шьёт [шить] шьётся [шиться]     Щ щабёр (оплеуха) (Даль) щабёр (лещ) (Даль) щавелёк щавелём [щавeль] щажённый, -ён, -ена щебёнка щебёночный щебёнчатый щеглёнок щеглёночек щегольнёт [щегольнуть] щелкопёр щелкопёрство щелочённый щельё (Даль) щепьё щерблённый,-ён, -ена щерблёный (прил.) щетинно-щёточный щё (Даль) щёголь, щёголя щёки, щёк (мн. ч. от щека) щёкинский (от Щёкино) щёкинец (СГЖСССР) щёкинцы (СГЖСССР) щёкот (сущ. от щекотать) щёкот птиц лесных, баб (РСЯР) за щёку (В.Ч.) щёлк (от щёлкать) щёлк (неизм.) щёлка, щёлки (р. мн.) щёлок (от щель) щёлка (БСРЖ) щёлканцы (Даль) щёлканье щёлкать (пальцем, кнутом, языком и т. д.; петь — о птицах) щёлкать и щелка’ть (орехи) щёлкать (БСРЖ) щёлкивать (Даль) щёлкнуть(ся) щёлковец (СГЖСССР) щёлковский (от Щёлково) щёлковцы (СГЖСССР) щёлок щёлочестойкий щёлочеупорный щёлочеустойчивый щёлочка щёлочник (Даль) щёлочно-земeльный щёлочно-кислотный щёлочность щёлочный (Даль) щёлочь щённая, (кр. ф.) щённа щётка, щёток, а также (БСРЖ) щётка-половик (НВРЛ) щётка-смётка щёткодержатель щёточка щёточник щёточный щёчка, щёчек щёчка (БСРЖ) щёчный щипанёт [щипануть] щипнёт [щипнуть] щуклёнок – щучка (РСЯР) щурёнок (Даль), а также (БСРЖ)     Ы ыйбён (ист., корейские воины за правое дело; армия справедливости)     Э эвакоприёмник эгутёр экранолёт экспортёр экспресс-налёт (НВРЛ) электробалластёр электровооружённость электроёмкий электроёмкость электрокотёл электролебёдка электролизёр электромонтёр электронно-оснащённый электронно-счётный электрополотёр электроразъём электросвёрла (мн.) электросчётчик энерговооружённость энергоёмкий энергоёмкость энтамёбы (САМ) эскулапьё эуплоцефалёнок эфёнок     Ю юморалишённый (НВМ) юнкерьё юркнёт [юркнyть] ютарапторёнок     Я ягнёнок ягнёнок ягнёночек ягуарёнок ягуарёночек ядёр, ядрён (РСЯР) ядовито-солёный (НВРЛ) ядрён, -а, -о к ядрёне-фене (В.Ч.) ядрёность (Даль) ядрёный язёвина (Даль) язёвка (Даль) язёвый язычно-нёбный якорёк якутёнок (САМ) якутёночек (САМ) ямьё (РСЯР) и (Даль) январём [январь] янтарём [янтарь] ярко-жёлтый ярко-зелёный яснёхонький яснёшенький ястребёнок ястребёночек ячменёк ячменём [ячмень] ящерёнок (Даль) ящерёночек (В.Ч.) ящерёныш (Даль)".split(" ").filter(x => x.indexOf("ё") > 0)
    // export const replaceWordsWithE = _.fromPairs(
    //     [["актер", "актёр"],
    //   ["бабенка", "бабёнка"],
    //   ["тряпье", "тряпьё"],
    //   ["безнадежность", "безнадёжность"],
    //   ["упрек", "упрёк"],
    //   ["береза", "берёза"],
    //   ["березка", "берёзка"],
    //   ["бобер", "бобёр"],
    //   ["детеныш", "детёныш"],
    //   ["боксер", "боксёр"],
    //   ["бомбежка", "бомбёжка"],
    //   ["бронетранспортер", "бронетранспортёр"],
    //   ["вахтер", "вахтёр"],
    //   ["ведерко", "ведёрко"],
    //   ["веревка", "верёвка"],
    //   ["веревочка", "верёвочка"],
    //   ["вертолет", "вертолёт"],
    //   ["веселость", "весёлость"],
    //   ["верстка", "вёрстка"],
    //   ["взлет", "взлёт"],
    //   ["визитер", "визитёр"],
    //   ["влюбленность", "влюблённость"],
    //   ["водоем", "водоём"],
    //   ["волонтер", "волонтёр"],
    //   ["восьмерка", "восьмёрка"],
    //   ["подъем", "подъём"],
    //   ["счет", "счёт"],
    //   ["гастролер", "гастролёр"],
    //   ["гимнастерка", "гимнастёрка"],
    //   ["гнет", "гнёт"],
    //   ["грабеж", "грабёж"],
    //   ["гранатомет", "гранатомёт"],
    //   ["гример", "гримёр"],
    //   ["грузоподъемность", "грузоподъёмность"],
    //   ["дележ", "делёж"],
    //   ["денек", "денёк"],
    //   ["детеныш", "детёныш"],
    //   ["дешевка", "дешёвка"],
    //   ["деготь", "дёготь"],
    //   ["дирижер", "дирижёр"],
    //   ["договоренность", "договорённость"],
    //   ["дрема", "дрёма"],
    //   ["дубленка", "дублёнка"],
    //   ["дублер", "дублёр"],
    //   ["зверек", "зверёк"],
    //   ["щетка", "щётка"],
    //   ["прическа", "причёска"],
    //   ["жесткость", "жёсткость"],
    //   ["жигуленок", "жигулёнок"],
    //   ["заем", "заём"],
    //   ["заемщик", "заёмщик"],
    //   ["застежка", "застёжка"],
    //   ["счет", "счёт"],
    //   ["зачет", "зачёт"],
    //   ["защищенность", "защищённость"],
    //   ["звездолет", "звездолёт"],
    //   ["звездочет", "звездочёт"],
    //   ["зверек", "зверёк"],
    //   ["звездочка", "звёздочка"],
    //   ["зеленка", "зелёнка"],
    //   ["зернышко", "зёрнышко"],
    //   ["издевка", "издёвка"],
    //   ["импортер", "импортёр"],
    //   ["киноактер", "киноактёр"],
    //   ["кинорежиссер", "кинорежиссёр"],
    //   ["клеенка", "клеёнка"],
    //   ["клен", "клён"],
    //   ["ковер", "ковёр"],
    //   ["козел", "козёл"],
    //   ["козленок", "козлёнок"],
    //   ["козырек", "козырёк"],
    //   ["колесико", "колёсико"],
    //   ["конек", "конёк"],
    //   ["контролер", "контролёр"],
    //   ["костер", "костёр"],
    //   ["котел", "котёл"],
    //   ["котенок", "котёнок"],
    //   ["кошелек", "кошелёк"],
    //   ["кошелка", "кошёлка"],
    //   ["кулек", "кулёк"],
    //   ["курьез", "курьёз"],
    //   ["ларек", "ларёк"],
    //   ["лебедка", "лебёдка"],
    //   ["лепешка", "лепёшка"],
    //   ["легкость", "лёгкость"],
    //   ["лед", "лёд"],
    //   ["лен", "лён"],
    //   ["лет", "лёт"],
    //   ["летчик", "лётчик"],
    //   ["ликер", "ликёр"],
    //   ["малек", "малёк"],
    //   ["маневр", "манёвр"],
    //   ["маркер", "маркёр  и так и так"],
    //   ["счет", "счёт"],
    //   ["матрешка", "матрёшка"],
    //   ["месье", "месьё и так и так"],
    //   ["мед", "мёд"],
    //   ["мертвый", "мёртвый"],
    //   ["метка", "мётка"],
    //   ["пес", "пёс"],
    //   ["копье", "копьё"],
    //   ["миномет", "миномёт"],
    //   ["молодежь", "молодёжь"],
    //   ["монтер", "монтёр"],
    //   ["мотылек", "мотылёк"],
    //   ["мсье", "мсьё и так и так"],
    //   ["мушкетер", "мушкетёр"],
    //   ["надежность", "надёжность"],
    //   ["наем", "наём"],
    //   ["наемник", "наёмник"],
    //   ["ковер", "ковёр"],
    //   ["налет", "налёт"],
    //   ["намек", "намёк"],
    //   ["напряженность", "напряжённость"],
    //   ["настороженность", "насторожённость"],
    //   ["небоскреб", "небоскрёб"],
    //   ["неопределенность", "неопределённость"],
    //   ["расчет", "расчёт"],
    //   ["неудовлетворенность", "неудовлетворённость"],
    //   ["небо", "нёбо и так и так"],
    //   ["новорожденный", "новорождённый"],
    //   ["ночевка", "ночёвка"],
    //   ["обертка", "обёртка"],
    //   ["обреченность", "обречённость"],
    //   ["объем", "объём"],
    //   ["овес", "овёс"],
    //   ["огонек", "огонёк"],
    //   ["одаренность", "одарённость"],
    //   ["одежка", "одёжка"],
    //   ["похлебка", "похлёбка"],
    //   ["опенок", "опёнок"],
    //   ["определенность", "определённость"],
    //   ["орел", "орёл"],
    //   ["осведомленность", "осведомлённость"],
    //   ["осел", "осёл"],
    //   ["отвертка", "отвёртка"],
    //   ["отек", "отёк"],
    //   ["отлет", "отлёт и так и так"],
    //   ["отсек", "отсёк и так и так"],
    //   ["отсчет", "отсчёт"],
    //   ["отчет", "отчёт"],
    //   ["отчетность", "отчётность"],
    //   ["очередность", "очерёдность"],
    //   ["паек", "паёк"],
    //   ["паренек", "паренёк"],
    //   ["партнер", "партнёр"],
    //   ["партнерство", "партнёрство"],
    //   ["партнерша", "партнёрша"],
    //   ["пеленка", "пелёнка"],
    //   ["пенек", "пенёк"],
    //   ["перекресток", "перекрёсток"],
    //   ["перелет", "перелёт"],
    //   ["переплет", "переплёт"],
    //   ["пересчет", "пересчёт"],
    //   ["печенка", "печёнка"],
    //   ["перышко", "пёрышко"],
    //   ["пес", "пёс"],
    //   ["платеж", "платёж"],
    //   ["платежеспособность", "платёжеспособность"],
    //   ["пленка", "плёнка"],
    //   ["подоплека", "подоплёка"],
    //   ["подсчет", "подсчёт"],
    //   ["подчиненный", "подчинённый"],
    //   ["подъем", "подъём"],
    //   ["подъемник", "подъёмник"],
    //   ["поземка", "позёмка"],
    //   ["поклеп", "поклёп"],
    //   ["полет", "полёт"],
    //   ["помет", "помёт"],
    //   ["поросенок", "поросёнок"],
    //   ["поселок", "посёлок"],
    //   ["потемки", "потёмки"],
    //   ["похлебка", "похлёбка"],
    //   ["почет", "почёт"],
    //   ["пощечина", "пощёчина"],
    //   ["прием", "приём"],
    //   ["приемка", "приёмка"],
    //   ["приемная", "приёмная"],
    //   ["приемник", "приёмник"],
    //   ["призер", "призёр"],
    //   ["прилет", "прилёт"],
    //   ["прическа", "причёска"],
    //   ["проем", "проём"],
    //   ["пролет", "пролёт"],
    //   ["проселок", "просёлок"],
    //   ["просчет", "просчёт"],
    //   ["протяженность", "протяжённость"],
    //   ["путевка", "путёвка"],
    //   ["пчелка", "пчёлка"],
    //   ["радиоприемник", "радиоприёмник"],
    //   ["развертывание", "развёртывание"],
    //   ["расчет", "расчёт"],
    //   ["ребенок", "ребёнок"],
    //   ["ребеночек", "ребёночек"],
    //   ["режиссер", "режиссёр"],
    //   ["репортер", "репортёр"],
    //   ["рев", "рёв"],
    //   ["ружье", "ружьё"],
    //   ["ручеек", "ручеёк"],
    //   ["рыбешка", "рыбёшка"],
    //   ["самотек", "самотёк"],
    //   ["свекла", "свёкла и так и так"],
    //   ["сверток", "свёрток"],
    //   ["селезенка", "селезёнка"],
    //   ["сережка", "серёжка"],
    //   ["серьез", "серьёз"],
    //   ["серьезность", "серьёзность"],
    //   ["щетка", "щётка"],
    //   ["стеклышко", "стёклышко"],
    //   ["счет", "счёт"],
    //   ["счетчик", "счётчик"],
    //   ["съемка", "съёмка"],
    //   ["твердость", "твёрдость"],
    //   ["теленок", "телёнок"],
    //   ["тесемка", "тесёмка"],
    //   ["тезка", "тёзка"],
    //   ["тетенька", "тётенька"],
    //   ["тетка", "тётка"],
    //   ["тетя", "тётя"],
    //   ["транспортер", "транспортёр"],
    //   ["тренажер", "тренажёр"],
    //   ["треп", "трёп"],
    //   ["веревка", "верёвка"],
    //   ["трешка", "трёшка"],
    //   ["трудоемкость", "трудоёмкость"],
    //   ["туберкулез", "туберкулёз"],
    //   ["тушенка", "тушёнка"],
    //   ["убежденность", "убеждённость"],
    //   ["уголек", "уголёк"],
    //   ["упрек", "упрёк"],
    //   ["утенок", "утёнок"],
    //   ["утес", "утёс"],
    //   ["ухажер", "ухажёр"],
    //   ["учеба", "учёба"],
    //   ["учет", "учёт"],
    //   ["фантазер", "фантазёр"],
    //   ["хозрасчет", "хозрасчёт"],
    //   ["хорек", "хорёк"],
    //   ["цыпленок", "цыплёнок"],
    //   ["чаек", "чаёк"],
    //   ["черед", "черёд"],
    //   ["черемуха", "черёмуха"],
    //   ["чернозем", "чернозём"],
    //   ["чертеж", "чертёж"],
    //   ["четверка", "четвёрка"],
    //   ["черт", "чёрт"],
    //   ["чертик", "чёртик"],
    //   ["черточка", "чёрточка"],
    //   ["четкость", "чёткость"],
    //   ["шатер", "шатёр"],
    //   ["шахтер", "шахтёр"],
    //   ["шестерка", "шестёрка"],
    //   ["шепот", "шёпот"],
    //   ["шофер", "шофёр"],
    //   ["щелка", "щёлка"],
    //   ["щелочка", "щёлочка"],
    //   ["щечка", "щёчка"],
    //   ["экспортер", "экспортёр"],
    //   ["ягненок", "ягнёнок"]])
    CommonWords.anagramms = new Set(anagrammaWords);
})(CommonWords || (CommonWords = {}));


/***/ }),

/***/ 324:
/*!**********************************************!*\
  !*** ./src/games/polyglot/writer/wordsEn.ts ***!
  \**********************************************/
/*! exports provided: WordsEn */
/*! exports used: WordsEn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsEn; });
var WordsEn;
(function (WordsEn) {
    WordsEn.data = {
        tutorial: [["tape", "hand", "foot"], ["rope", "bear", "wolf"]],
        words: {
            "animal": {
                "single": "antelope, ram, badger, squirrel, bear, fox, beaver, bull, ox, wolf, viper, gorilla, boar, giraffe, hare, zebra, snake, lioness, kangaroo, goat, cow, cat, crocodile, rabbit, rat, lion, fox, elk, horse, panda, mouse, rhinoceros, monkey, sheep, deer, donkey, pony, piglet, lynx, elephant, tiger, seal, ferret, turtle, horse, llama, she-cat, sable, bison, leopard, jackal, mole, hamster, hyena, lemur, camel, porcupine, hippopotamus, dog, zebra, gopher, land-lance, chimpanzee, buffalo, sloth, puma, auroch, mammoth, baboon, cheetah, raccoon, koala, arctic fox, panther, jaguar, mongoose, ermine, manul cat",
                "phrases": "Asian elephant, springbok, African elephant, large cats, brown bear, painted hunting dog, long-tailed mole, pygmy hippopotamus, dhole, lesser panda, Persian cat, wild boar, two-humped camel, cow heron, yellow mongoose, Indian elephant, axis deer, bobcat, red wolf, bat, betta, icefish, sunfish, scallop, seahorse, seal, starfish, blue whale, giant squid, goldfish, hammer fish, giant pacific octopus, budgerigar, snowy owl, emperor penguin, white stork, white-winged woodpecker, blackbird, two-toed ostrich, gray heron, gray sparrow, hen, mountain eagle, pink flamingo, black swan, gray partridge, hooded crane, black swift, gray goose, white gull, screech-owl, yellow scorpion, May beetle, house cricket, Colorado beetle, ladybug, orange grasshopper, singing grasshopper, field cricket, housefly, luna moth, monarch butterfly, nomadic ants, human botfly, black scorpion, fire ant",
                "fish": "shark, vobla, whale, dolphin, octopus, Crab, anchovy, Barracuda, Beluga, Pigfish, devilfish, Humpback, Guppy, Carp, Kilka, Orca, Saury, Sardine, Herring, Gudgeon, Mackerel, Jellyfish, Octopus, Capelin, Mussels, Halibut, Squid, Crawfish, Lobster, Cod, Tuna, Eel, Trout, Salmon, Piranha, Corals, Plankton, Walrus, Skate, Seal, Shrimps, Shellfish, Shell, Cuttlefish, Perch, Sturgeon",
                "bird": "Stork, sparrow, raven, crow, pigeon, goose, thrush, woodpecker, lark, crane, turkey, canary, cuckoo, hen, partridge, swallow, swan, eagle, peacock, cock, parrot, owl, falcon, nightingale, magpie, ostrich, grouse, duck, pheasant, flamingo, heron, seagull, hawk, penguin, tit, pelican, kite, vulture, Erne, Colibri, Rook, Jay, Bullfinch, Siskin, Neophron, Hazel-hen, eagle-owl, Burgomaster, Redshank, Swift, Mallard",
                "insect": "butterfly, Locust, caterpillar, bedbug, mosquito, moth, ant, fly, wasp, spider, bee, scorpion, cockroach, worm, beetle, mosquito, grasshopper, Cricket, Firefly, Changa, Hornet, Bumblebee, Gadfly, Mantis, flea, Dragonfly, Mosquito, Gerris, Cicada, Mosquito, Daddy-long-legs, Tarantula, Termite, Tick, Worm, Gadfly, Centipede, Flea, Bloodworm, Louse, Weevil, Caterpillar, Midge"
            },
            "plant": {
                "vegetables": "Artichoke, Basil, Beans, Cabbage, Broccoli, Peas, zucchini, Parsley, Radish, Potato, Potato, Corn, Onion, Carrot, Cucumber, Patisson, Pepper, Turnip, Rucola, Salad, Beetroot, Celery, Asparagus, Tomato, Tomato, Pumpkin, Dill, Beans, Cherry, Garlic, Spinach, Sorrel, rutabaga, corn, mooli, haricot, Carrot, Eggplant",
                "fruits": "Avocado, Apricot, Orange, Pineapple, Watermelon, Banana, Pomegranate, Grapefruit, Pear, Melon, Peach, Pomelo, Kiwi, Coconut, Lemon, Tangerine, Persimmon, Nectarine, Apple, Mango, Lime, Bergamot, Maracuya, Papaya",
                "berries": "Berries, Cherry, Cherry, Rowan, Plum, Raspberry, Blackberry, Snowball, Hackberry, Mulberry, Clusterberry, strawberry, Cranberry, Currant, Blueberry, Grapes, gooseberry",
                "phrases": "Bell pepper, Pak Choi, Black radish, Sweet pepper, Cauliflower, Common barberry, Yellow honeysuckle, Orpin, Wild strawberry, White clover, Alpine forget-me-not, Wild orchid, Wild radish, Bush rose, Turfing daisy, Red onion, Goji berries, Argan tree, Star apple, White willow, Coconut tree, Coral tree",
                "flowers": "Adonis, Azalea, Aloe, Aster, Bamboo, Barberry, Hogweed, Verbena, Carnation, Gerbera, Hyacinth, Gladiolus, hydrangea, jasmine, honeysuckle, Iris, cornflower, Cypress, Clover, Lavender, Lily-of-the-valley, Lily, Lotus, Buttercup, Magnolia, Poppy, Mimosa, Mint, Narcissus, Forget-me-not, Dandelion, Orchid, Sedge, Peony, Sunflower, Sunflower, Sage, Rose, Daisy, Tulip, Violet, Heirloom, Chrysanthemum",
                "trees": "Spruce, Palmtree, Lilac, Ficus, Eucalyptus, Acacia, Baobab, Birch, Oak, Willow, Chestnut, Cedar, Ash, Maple, Linden, Larch, Aspen, Fir, Rowan, Sakura, Pine, Poplar, Apple-tree"
            },
            "tool": {
                "hand": "Scissors, Naildrawer, Ladder, Hacksaw, Pliers, Pry, Tyre Lever, pipe cutter, glass cutter, Pyrocutter, Nippers, Screwdriver, Drill, hammer, Clippers, Flat-nose pliers, Multimeter, Precise tweezer, Beam compass, Tape-measure, Angle meter, File, Nails, Screw, Bolt, Nut, Screw, Drill, Drift, Hammer, Workbench, Chisel, Wood plain, Former, Paint, Ax, Sledgehammer, Extension cable, Cable, Socket, Pallet, Force cup, Shovel, Adhesive tape, Pike, Perforator, Saw, Garden pruner",
                "electric": "Electric jigsaw, Screwdriver, Pipe bender, Thermocutter, Plasma cutter, Soldering-iron, Angle grinder, Chainsaw, Electric saw, Concrete mixer, Hot air gun",
                "phrases": "Utility knife, Craft knife, Diamond sharpener, Wire brush, Blacksmith hammer, Hand saw, Phillips screwdriver, Band saw, Lathe, Welding machine, Grinding machine, Milling machine, Hot knife, Vacuum pump, Laser cutter, Laser level, Kneepiece, Paint brush, Rubber gloves, Protective gloves, Rubber boots, Rubber hammer, Wrench, Construction mixer"
            },
            "furniture": {
                "single": "Bar, library, buffet, buffet, hanger, hammock, wardrobe, suite, Sofa, Mirror, Cradle, chest of drawers, console, armchair, bed, couch, Pencil case, shelf, pouf, camp-bed, safe, sideboard, bench, sofa, rack, wall cabinet, table, chair, stool, ottoman, throne, dressing table, bedside table, Lounge, folding screen, wardrobe, cupboard, shelf, chairs, bedside table, bench, countertop",
                "phrases": "Wall hanger, Playpen, Office sofa, Massage chair, Rocking chair, Crib, Wall shelf, Bookshelf, Office rack, Writing desk, Computer desk, Coffee table, Bar stool, Theater chair, Built-in wardrobe"
            },
            "crockery": {
                "cooking": "Casserole, Frying pan, Frying pan, Saucepan, Teapot, Rolling pin, Chopper, Grater, Masher, Opener, Peeler, Tray, Wok, Pressure pan, Coffee-grinder, Coffee machine, Ladle, Spatula, Skimmer, Pot, Blender, Mixer, Food steamer, Juicer, Coffee-pot, Toaster, Blender, Electric kettle, Ladle, Steamer",
                "eat": "Salad bowl, Plate, Bowl, Glass, Mug, Cup, Bowl, Knife, Fork, Spoon, Sauce bowl, Sugar bowl, Tray, Glass, Service, Jug, container, Thermos, Saltcellar, Pepperbox, Sugar bowl,shotglass, Wineglass",
                "phrases": "Teaspoon, Tablespoon, Fruit basket, Wooden spoon, Cutting board, Clay pot, Food processor, Tea set, Serving plate, Salad fork, Wooden spatula, Measuring spoon, Measuring cup, Can opener, Soup plate, Electric kettle, Dessert plate, Fruit fork, Fruit knife, Pancake pan"
            },
            "transport": {
                "land": "Bus, Autocar, Car, Train, Carriage, Train, Tram, Trolley, Truck, Tripper-car, Forklift, Waggon, Jeep, Convertible, Snowmobile, Monorail, Motorcycle, Scooter, Lorry, Taxi, Subway, Bulldozer, Excavator, Scooter, Lokomotiv, Van, Steam Engine, Electric Train, Harvester, Tracttion Engine, Cable Railway",
                "water": "Ship, Steamboat, Barge, Vessel, Yacht, Ferry, Regatta, Powerboat, Oil-ship, Liner, Tanker, Battleship, Cruiser, Icebreaker, Galley, Frigate, Schooner",
                "air": "Airplane, helicopter, Rocket, Airship, Hang-glider, Airplane, Shuttle, Aerostat, Paraglider",
                "hand": "Bicycle, Sledge, Cart, Coach, Boat, Canoe, Parachute, Scooter, Rickshaw, Catamaran, Boat, Kayak, Wagon",
                "phrases": "School bus, High-speed train, Freight train, Race car, Cruise ship, Motor boat, Submarine, Cargo ship, Passenger liner, Fire truck, Luggage car, Balloon, Dog sled"
            },
            "sport": {
                "single": "Badminton, Rugby, Volleyball, Basketball, Football, Skateboarding, Shooting, Tennis, Baseball, Cycling, Golf, Handball, Gymnastics, Fitness, Mountaineering, Billiards, Bowling, Darts",
                "fighting": "Aikido, Boxing, Judo, Karate, Kickboxing, Wrestling, Sambo, Wushu, Fencing, Martial Arts, Wrestling",
                "phrases": "Figure skating, Snow rugby, Alpine skiing, Cross-country skiing, Sledding, Mountain snowboarding, Water skiing, Synchronized swimming, Water polo, Sailing, Hand-to-hand combat, Combat Sambo, Wrestling, Graeco-Roman Wrestling, Rowing, Equestrianism, Track-and-field Athletics, Table tennis, Kettlebell lifting",
                "winter": "Hockey, Biathlon, Skeleton, Bobsleigh, Freestyle, Snowboard, Curling",
                "water": "Kayaking, Swimming, Surfing, Rowing, Diving, Windsurfing, Regatta",
                "equipment": "ball, sneakers, rackets, Gloves, skip-rope, barbell, dumbbell, kettlebell, hoop, whistle, helmet, top, skates, stick, washer, bar, bars, ring, bat, Target, Darts, cleats, kimono, bowl, pins, rope, Fitball, Hoop, Shorts, Rifle, Bicycle, Sledge, Sneakers, Espander, Skis, Tatami, trampoline, fins, Tap, ​​Timer, Cup, medal, Canvas, stockings, shields, shot, discis, goal, apparatus, gear"
            },
            "body": {
                "outer": "Thigh, Biceps, Eyelids, Hair, Eyes, Orbit, Pharynx, Ankle, Leg, Head, Throat, Larynx, Sternum, Lips, Diaphragm, Stomach, Abdomen, Carpus, Teeth, Adam's-Apple, Wrist, Bowel, Skin, Collarbone, Knee, Bones, Lungs, Face, Forehead, Ankle, Elbow, Shoulder, Shieldbone, Muscles, Nails, Nose, Finger, Liver, Shoulder, Chin, Spine, Kidney, Ribs, Eyelashes, Mouth, Hand, Heart, Skeleton, Foot, Joint, Ear, Ears, Skull, Jaw, Neck, Cheeks",
                "inner": "Adrenaline, Amino acids, Antibodies, Aorta, Artery, Proteins, Bronchi, Veins, Viruses, Blood, Hemoglobin, Genes, Hypophysis, Hormones, Glands, Immunity, Insulin, Capillaries, Cell, Leukocytes, Lymph, Neurons, Plasma, Reflexes, Receptors, Synapse, Carbohydrates, Platelets, Chromosomes",
                "phrases": "Eardrum, Thumb, Inner ear, Eyeball, Growth hormones, Chest, Blood type, Stomach acid, Blood vessels, Baby teeth, Facial muscles, Taste organ, Mouth cavity, Retina, Medulla"
            },
            "common": {
                "nature": "Forest, Mountains, Sea, Ocean, River, Desert, Beach, Jungle, Grassland, Field, Meadow, Volcano, Lake, Sand, Branch, Tree, Shrub, Grass, Water, Boulder, Rubble, Sun, Moon, Canyon, Island, Plain, Hill, Pond, Rock, Stone, Flora, Clouds, Flower, Grove, Snow, Wild Resort, Fire, Swamp, Waterfall, Wave, Snowdrift, Stem, Stars, earth, space, plant, bird, animal, shore",
                "phenomenon": "Thunderstorm, Snowfall, Drought, Hurricane, Storm, Earthquake, Flood, Gale, Fog, Winter, Autumn, Summer, Spring, Dawn, Sunset, Day, Night, Natural Day, Fire, Rainbow, Rain, Heat, Leaf Fall, Dew, Wind, Snowstorm, Glaze, Lightning, Thunder, Tornado, Typhoon, Landflood, Blowing snow, Blizzard, Thaw, Snow-melt Flood, Hail, Hoarfrost, Twister, Low Tide, Tsunami, Eclipse, Avalanche"
            },
            "stationery": {
                "simple": "Square, Pen, Pencil, Notebook, Folder, Correction fluid, Liquid paper, Marker, Ruler, Calculator, Notepad, Organizer, Glue, Paint brush, Paints, Stapler, Divider, Protractor, Pencil Sharpener, Eyelet-punch, Diary, Eraser, Clay, Paper Clips, Tape, Drawing Pins, Magnifier, Sticker, Envelope, File, Cardboard, Gouache, Ink-pot, Quill, Palette, State-pencil",
                "phrases": "Gel pen, Drawing folder, Colored cardboard, Colored paper, Counting sticks, Watercolor paints, Multicolored pens, Eraser, Letter opener"
            }
        }
    };
})(WordsEn || (WordsEn = {}));


/***/ }),

/***/ 325:
/*!**********************************************!*\
  !*** ./src/games/polyglot/writer/wordsRu.ts ***!
  \**********************************************/
/*! exports provided: WordsRu */
/*! exports used: WordsRu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsRu; });
var WordsRu;
(function (WordsRu) {
    WordsRu.data = {
        tutorial: [["муха", "рука", "нога"], ["ночь", "лиса", "волк"]],
        words: {
            animal: {
                single: "антилопа, баран, барсук, белка, медведь, лиса, бобр, бык, вол, волк,гадюка, горилла, кабан, жираф, заяц, зебра, змея, львица, кенгуру,козел, корова, кот, крокодил, кролик, крыса, лев, лисица, лось, лошадь, панда, мышь, носорог, обезьяна, овца, олень, осел, пони, поросенок, рысь, слон, тигр, тюлень, хорек, черепаха, конь, лама, кошка, cоболь, бизон, леопард, шакал, крот, хомяк, гиена, лемур, верблюд, дикобраз, бегемот, собака, зебра, суслик, песчанка, шимпанзе, буйвол, ленивец, пума, зубр, мамонт, бабуин, гепард, енот, коала, песец, пантера, ягуар, мангуст, горностай, манул",
                phrases: "азиатский слон, антилопа прыгун, африканский слон, большие кошки, бурый медведь, гиеновидная собака, длиннохвостый крот, карликовый бегемот, красный волк, малая панда, персидская кошка, дикий кабан, двугорбый верблюд, египетская цапля, желтый мангуст, индийский слон, пятнистый олень, рыжая рысь, рыжий волк, летучая мышь, Бойцовая рыбка, Ледяная рыба, Солнечная рыба, Морской гребешок, Морской конек, Морской котик, Морская звезда, Синий кит, Гигантский кальмар, Золотая рыбка, Рыба молот, Гигантский осьминог, волнистый попугайчик, белая сова, императорский пингвин, Белый аист, Белокрылый дятел, Черный дрозд, Африканский страус, Серая Цапля, Серый воробей, Домашняя курица, Горный орел, Розовый фламинго, Черный лебедь, Серая куропатка, Черный журавль, Черный стриж, Серый гусь, Белая чайка, Сова ушастая, Желтый скорпион, Майский жук, Сверчок домовой, Колорадский жук, божья коровка, Оранжевый кузнечик, Певчий кузнечик, Полевой сверчок, Домашняя муха, Лунный мотылек, Бабочка монарх, Кочевые муравьи, Человеческий овод, Черный скорпион, Огненный муравей",
                fish: "акула, вобла, Кит, дельфин, осьминог, Краб, анчоус, Барракуда, Белуга, Бычок, каракатица, Горбуша, Гуппи, Карп, Килька, Косатка, Сайра, Сардина, Сельдь, Пескарь, Скумбрия, Медуза, Осьминог, Мойва, Мидии, Палтус, Кальмар, Рак, Омар, Треска, Тунец, Угорь, Форель, Лосось, Пиранья, Кораллы, Планктон, Морж, Скат, Тюлень, Креветки, Моллюск, Ракушка, Спрут, Окунь, Осетр",
                bird: "Аист, воробей, ворон, ворона, голубь, гусь, дрозд, дятел, жаворонок, журавль, индюк, канарейка, кукушка, курица, куропатка, ласточка, лебедь, орел, павлин, петух, попугай, сова, сокол, соловей, сорока, страус, тетерев, утка, фазан, фламинго, цапля, чайка, ястреб, пингвин, синица, пеликан, коршун, гриф, Беркут, Колибри, Грач, Сойка, Снегирь, Чиж, Стервятник, Рябчик, филин, Бургомистр, Щеголь, Стриж, Кряква",
                insect: "бабочка, Саранча, гусеница, клоп, москит, моль, муравей, муха, оса, паук, пчела, скорпион, таракан, червь, жук, комар, кузнечик, Сверчок, Светлячок, Медведка, Шершень, Шмель, Слепень, Богомол, блоха, Стрекоза, Комар, Водомерка, Цикада, Москит, Долгоножка, Тарантул, Термит, Клещ, Червяк, Овод, Сороконожка, Блоха, Мотыль, Вошь, Долгоносик, Гусеница, Мошка",
            },
            plant: {
                vegetables: "Артишок, Базилик, Бобы, Капуста, Брокколи, Горох, кабачок, Петрушка, Редис, Картофель, Картошка, Кукуруза, Луковица, Морковь, Огурец, Патиссон, Перец, Репа, Руккола, Салат, Свекла, Сельдерей, Спаржа, Томат, Помидор, Тыква, Укроп, Фасоль, Черри, Чеснок, Шпинат, Щавель, брюква, кукуруза, Редька, фасоль, Морковка, Баклажан",
                fruits: "Авокадо, Абрикос, Апельсин, Ананас, Арбуз, Банан, Гранат, Грейпфрут, Груша, Дыня, Персик, Помело, Киви, Кокос, Лимон, Мандарин, Хурма, Нектарин, Яблоко, Манго, Лайм, Бергамот, Маракуйя, Папайя",
                berries: "Ягоды, Вишня, Черешня, Рябина, Слива, Малина, Ежевика, Калина, Черемуха, Шелковица, Брусника, клубника, Клюква, Смородина, Черника, Виноград, крыжовник",
                phrases: "Болгарский перец, Пекинская капуста, Редька черная, Сладкий перец, Цветная капуста, Барбарис обыкновенный, Жимолость желтая, Заячья капуста, Земляника лесная, Клевер белый, Незабудка альпийская, Ночная фиалка, Редька дикая, Кустовая роза, Хризантема кустовая, Красный лук, Годжи ягоды, Железное дерево, Звездное яблоко, Ива белая, Кокосовая пальма, Конфетное дерево",
                flowers: "Адонис, Азалия, Алоэ, Астра, Бамбук, Барбарис, Борщевик, Вербена, Гвоздика, Георгина, Гербера, Гиацинт, Гладиолус, гортензия, жасмин, жимолость, Ирис, Василек, Кипарис, Клевер, Лаванда, Ландыш, Лилия, Лотос, Лютик, Магнолия, Мак, Мимоза, Мята, Нарцисс, Незабудка, Одуванчик, Орхидея, Осока, Пион, Подсолнечник, Подсолнух, Полынь, Роза, Ромашка, Тюльпан, Фиалка, Физалис, Хризантема",
                trees: "Ель, Пальма, Сирень, Фикус, Эвкалипт, Акация, Баобаб, Береза, Дуб, Ива, Каштан, Кедр, Ясень, Клен, Липа, Лиственница, Осина, Пихта, Рябина, Сакура, Сосна, Тополь, Яблоня"
            },
            tool: {
                hand: "Ножницы, Гвоздодер, Стремянка, Ножовка, Плоскогубцы, Лом, Монтировка, Труборез, Стеклорез, Болторез, Тиски, Отвертка, Сверло, молоток, Кусачки, Пассатижи, Мультиметр, Микропинцет, Штангенциркуль, Рулетка, Угломер, Напильник, Гвозди, Шуруп, Болт, Гайка, Винт, Дрель, Шило, Молот, Верстак, Долото, Рубанок, Стамеска, Краска, Топор, Кувалда, Удлинитель, Кабель, Розетка, Шпатель, Вантуз, Лопата, Скотч, Кирка, Перфоратор, Пила, Секатор",
                electric: "Электролобзик, шуруповерт, Трубогиб, Терморезак, Плазморез, Паяльник, Болгарка, Бензопила, Электропила, Бетоносмеситель, Термопистолет",
                phrases: "Универсальный нож, Макетный нож, Алмазное точило, Проволочная щетка, Кузнечный молот, Ручная пила, Крестовая отвертка, Ленточная пила, Токарный станок, Сварочный аппарат, Заточной станок, Фрезерный станок, Горячий нож, Вакуумный насос, Лазерный резак, Лазерный уровень, Инженерный угольник, Малярная кисточка, Резиновые перчатки, Защитные перчатки, Резиновые сапоги, Резиновый молоток, Разводной ключ, Строительный миксер"
            },
            furniture: {
                single: "Бар, библиотека, буфет, буфетница, вешалка, гамак, гардероб, гарнитур, Диван, Зеркало, Колыбель, комод, консоль, кресло, кровать, кушетка, Пенал, полка, пуф, раскладушка, сейф, сервант, скамья, софа, стеллаж, стенка, стол, столик, стул, табурет, тахта, трон, трюмо, тумба, Шезлонг, ширма, шифоньер, шкаф, этажерка, стулья, тумбочка, лавка, столешница",
                phrases: "Настенная вешалка, Детский манеж, Офисный диван, Массажное кресло, Кресло качалка, Детская кровать, Настенная полка, Книжная полка, Офисный стеллаж, Письменный стол, Компьютерный стол, Журнальный столик, Барный стул, Театральное кресло, Встраиваемый шкаф"
            },
            crockery: {
                cooking: "Кастрюля, Сковорода, Сковородка, Сотейник, Чайник, Скалка, Мясорубка, Дуршлаг, Терка, Толкушка, Открывалка, Овощечистка, Противень, Казан, Скороварка, Кофемолка, Кофемашина, Половник, Лопатка, Шумовка, Заварник, Блендер, Миксер, Пароварка, Соковыжималка, Кофейник, Турка, Ковш, Тостер, Измельчитель, Электрочайник, Черпак, Пароварка",
                eat: "Салатник, Тарелка, Миска, Стакан, Кружка, Чашка, Чаша, Нож, Вилка, Ложка, Соусник, Сахарница, Поднос, Бокал, Сервиз, Кувшин, контейнер, Термос, Солонка, Перечница, Сахарница, рюмка, Фужер",
                phrases: "Чайная ложка, Столовая ложка, Фруктовая корзина, Деревянная ложка, Разделочная доска, Глиняный горшок, Кухонный комбайн, Чайный сервиз, Сервировочная тарелка, Салатная вилка, Деревянная лопатка, Мерная ложка, Мерный стаканчик, Консервный нож, Суповая тарелка, Чайник электрический, Десертная тарелка, Вилка фруктовая, Фруктовый нож, Блинная сковородка"
            },
            transport: {
                land: "Автобус, Автомобиль, Машина, Поезд, Вагон, Электричка, Трамвай, Троллейбус, Грузовик, Самосвал, Погрузчик, Автофургон, Джип, Кабриолет, Снегоход, Монорельс, Мотоцикл, Скутер, Трактор, Такси, Метро, Бульдозер, Экскаватор, Мотороллер, Локомотив, Фургон, Паровоз, Электропоезд, комбайн, Тягач, Фуникулер",
                water: "Корабль, Пароход, Баржа, Судно, Яхта, Паром, Регата , Катер, Теплоход, Лайнер, Танкер, Линкор, Крейсер, Ледокол, Галера, Фрегат, Шхуна",
                air: "Самолет, вертолет, Ракета, Дирижабль, Дельтаплан, Аэроплан, Шатал, Аэростат, Параплан",
                hand: "Велосипед, Санки, Телега, Карета, Лодка, Каноэ, Парашют, Самокат, Рикша, Катамаран, Шлюпка, Байдарка, Повозка",
                phrases: "Школьный автобус, Скоростной поезд, Товарный поезд, Гоночная машина, Круизное судно, Моторная лодка, Подводная лодка, Грузовое судно, Пассажирский лайнер, Пожарная машина, Багажный вагон, Воздушный шар, Собачья упряжка"
            },
            sport: {
                single: "Бадминтон, Регби, Волейбол, Баскетбол, Футбол, Скейтбординг, Стрельба, Теннис, Бейсбол, Велоспорт, Гольф, Гандбол, Гимнастика, Фитнес, Альпинизм, Бильярд, Боулинг, Дартс",
                fighting: "Айкидо, Бокс, Дзюдо, Каратэ, Кикбоксинг, Рестлинг, Самбо, Ушу, Фехтование, единоборства, Борьба",
                phrases: "Фигурное катание, Снежное регби, Горные лыжи, Лыжные гонки, Санный спорт, Горный сноуборд, Воднолыжный спорт, Синхронное плавание, Водное поло, Парусный спорт, Рукопашный бой, Боевое самбо, Вольная борьба, Классическая борьба, Гребной спорт, Конный спорт, Легкая атлетика, Настольный теннис, Гиревой спорт",
                winter: "Хоккей, Биатлон, Скелетон, Фристайл, Сноуборд, Керлинг",
                water: "Каякинг, Плавание, Серфинг, Гребля, Дайвинг, Виндсерфинг, Регата",
                equipment: "мяч, кроссовки, ракетки, Перчатки, скакалка, штанга, гантели, гиря, обруч, свисток, шлем, майка, коньки, клюшка, шайба, турник, брусья, ринг, бита, Мишень, Дротики, бутсы, кимоно, шар, кегли, Канат, Фитбол, Обруч, Шорты , Винтовка, Велосипед, Санки, Кеды, Эспандер , Лыжи, Татами , батут, ласты, Капа , Таймер, Кубок, медаль, Сетка, гетры, щитки, ядро, диск, ворота, снаряд, форма",
            },
            body: {
                outer: "Бедро, Бицепс, Веки, Волосы, Глаз, Глазница, Глотка, Голеностоп, Голень, Голова, Горло, Гортань, Грудина, Губы, Диафрагма, Желудок, Живот, Запястье, Зубы, Кисть , Кишечник, Ключица, Кожа, Колено, Кости, Легкие, Лицо, Лоб, лодыжка, Локоть, Лопатка, Мизинец, Мышцы, Ногти, Нос, Палец, Печень, Плечо, Подбородок, Позвоночник, Почка, Рёбра, Ресницы, Рот, Рука, Сердце, Скелет, Стопа, Сустав, Ухо, Уши, Челюсть, Череп, Шея, Щеки",
                inner: "Адреналин, Аминокислоты, Антитела, Аорта, Артерия, Белки, Бронхи, Вены, Вирусы, Кровь, Гемоглобин, Гены, Гипофиз, Гормоны, Железы, Иммунитет, Инсулин, Капилляры, Клетка, Лейкоциты, Лимфа, Нейроны, Плазма, Рефлексы, Рецепторы, Синапс, Углеводы, Тромбоциты, Хромосомы",
                phrases: "Барабанная перепонка, Большой палец, Внутреннее ухо, Глазное яблоко, Гормоны роста, Грудная клетка, Группа крови, Желудочный сок, Кровеносные сосуды, Молочные зубы, Мышцы лица, Орган вкуса, Полость рта, Сетчатка глаза, Спинной мозг"
            },
            common: {
                nature: "Лес, Горы, Море, Океан, Река, Пустыня, Пляж, Джунгли, Степь, Поле, Луг, Вулкан, Озеро, Песок, Ветка, Дерево, Куст, Трава, Вода, Валун, Щебень, Солнце, Луна, Каньон, Остров, равнина, Холм, Пруд, Скала, Камень, Флора, Облака, Цветок, Роща, Снег, Заповедник, Огонь, Болото, Водопад, Волна, Сугроб, Стебель, Звезды, земля, космос, растение, птица, животное, берег",
                phenomenon: "Гроза, Снегопад, Засуха, Ураган, Шторм, Землетрясение, Потоп, Буря, Туман, Зима, Осень, Лето, Весна, Рассвет, Закат, День, Ночь, Сутки, Пожар, Радуга, Дождь, Жара, Листопад, Роса, Ливень, Ветер, Метель, Гололед, Молния, Гром, Торнадо, Тайфун, Наводнение, Пурга, Вьюга, Оттепель, Половодье, Град, Иней, Смерч, Прилив, Отлив, Цунами, Затмение, Лавина",
            },
            stationery: {
                simple: "Угольник, Ручка, Пенал, Тетрадь, Папка, Корректор, Замазка, Маркер, Линейка, Листки, Калькулятор, блокнот, Органайзер, Клей, Кисточка, Краски, Степлер, Циркуль, Транспортир, Точилка, Дырокол, Ежедневник, Ластик, Пластилин, Скрепки, Скотч, Кнопки, Лупа, Стикер, Конверт, Файл, Картон, Гуашь , Чернильница, Перо, Обложка, Палитра, Грифель",
                phrases: "Гелевая ручка, Папка для черчения, Цветной картон, Цветная бумага, Счетные палочки, Акварельные краски, Разноцветные ручки, Стиральная резинка, Канцелярский нож"
            }
        }
    };
})(WordsRu || (WordsRu = {}));


/***/ }),

/***/ 326:
/*!********************************************!*\
  !*** ./src/games/polyglot/writer/logic.ts ***!
  \********************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_types_gameLogic__ = __webpack_require__(/*! core/types/gameLogic */ 47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils_index__ = __webpack_require__(/*! core/utils/index */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__words__ = __webpack_require__(/*! ./words */ 220);





var categoryCount = 2;
var wrongWordsCount = 3;
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_2_core_utils_index__["e" /* RandomGenerator */](); // [4, 2,8,10]
        _this.index = 0;
        _this.categoriesByLength = __WEBPACK_IMPORTED_MODULE_4__words__["b" /* WordMasterWords */].categoriesByLength(_this.gameData.settings.custom.locale);
        _this.tutorial = __WEBPACK_IMPORTED_MODULE_4__words__["b" /* WordMasterWords */].tutorial(_this.gameData.settings.custom.locale);
        return _this;
    }
    Logic.prototype.createAnagramma = function (word) {
        var _this = this;
        var words = word.split(" ");
        return {
            anagramma: words.map(function (x) { return _this.rng.derangementString(x); }).join(" "),
            word: word
        };
    };
    Logic.prototype.getSubcategories = function (categories) {
        var category = this.rng.sample(categories);
        var _a = this.rng.subset(category, __WEBPACK_IMPORTED_MODULE_4__words__["b" /* WordMasterWords */].minSubcategoryCount), answer = _a[0], wrong = _a[1];
        return [answer, wrong];
    };
    Logic.prototype.getCategories = function (categories) {
        var _a = this.rng.split(categories, 1), answerCategory = _a[0], wrongCategoriesData = _a[1];
        var wrongCategory = this.rng.sample(wrongCategoriesData);
        return [__WEBPACK_IMPORTED_MODULE_3_lodash__["flattenDeep"](answerCategory), __WEBPACK_IMPORTED_MODULE_3_lodash__["flattenDeep"](wrongCategory)];
    };
    Logic.prototype.createData = function (level) {
        var _this = this;
        var categoriesByLength = this.categoriesByLength[level.wordLength];
        var moreThenOneSubcategory = categoriesByLength.filter(function (x) { return x.length > 1; });
        var categories = level.subcategory ? moreThenOneSubcategory : categoriesByLength;
        var _a = level.subcategory
            ? this.getSubcategories(categories)
            : this.getCategories(categories), answerCategoryWords = _a[0], wrongCategoryWords = _a[1];
        var answerAnagramma = this.createAnagramma(this.rng.sample(answerCategoryWords));
        var wrongAnagrammas = this.rng.take(wrongCategoryWords, wrongWordsCount).map(function (x) { return _this.createAnagramma(x); });
        var anagrammas = this.rng.shuffle(wrongAnagrammas.concat([answerAnagramma]));
        return {
            answerAnagramma: answerAnagramma,
            anagrammas: anagrammas,
        };
    };
    Logic.prototype.createTutorial = function () {
        var _this = this;
        if (this.index >= this.tutorial.length) {
            return undefined;
        }
        var anagrammas = this.tutorial[this.index].map(function (x) { return _this.createAnagramma(x); });
        var answerAnagramma = anagrammas[0];
        this.index += 1;
        return {
            answerAnagramma: answerAnagramma,
            anagrammas: anagrammas,
        };
    };
    Logic.prototype.nextTask = function (level) {
        var data = this.isTutorial ? this.createTutorial() : this.createData(level);
        if (!data) {
            return undefined;
        }
        var answerAnagramma = data.answerAnagramma, anagrammas = data.anagrammas;
        var wordParts = answerAnagramma.word.split(" ");
        var seqPart = wordParts.length > 1;
        var seqCount = seqPart ? Math.ceil(wordParts[0].length / 2) : wordParts[0].length;
        var answerIndex = anagrammas.indexOf(answerAnagramma);
        var seq = __WEBPACK_IMPORTED_MODULE_3_lodash__["take"](answerAnagramma.word.split("").map(function (x) { return x + answerIndex.toString(); }), seqCount);
        var answers = { seq: seq };
        var task = {
            answerAnagramma: answerAnagramma,
            anagrammas: anagrammas,
            seqPart: seqPart,
            answers: answers
        };
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_types_gameLogic__["a" /* GameLogic */]));



/***/ })

});
//# sourceMappingURL=1.bundle.js.map