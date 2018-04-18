webpackJsonpNewGames([0],{

/***/ 131:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_polyglot_common_commonMeta__ = __webpack_require__(/*! games/polyglot/common/commonMeta */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_polyglot_common_wordsSounds__ = __webpack_require__(/*! games/polyglot/common/wordsSounds */ 145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_polyglot_journalist_images__ = __webpack_require__(/*! games/polyglot/journalist/images */ 185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__levels__ = __webpack_require__(/*! ./levels */ 225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logic__ = __webpack_require__(/*! ./logic */ 226);







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

/***/ 138:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_assets_assetUtl__ = __webpack_require__(/*! core/assets/assetUtl */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_logic_sys__ = __webpack_require__(/*! core/logic/sys */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_services__ = __webpack_require__(/*! core/services */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_answers_answerControlType__ = __webpack_require__(/*! core/ui/components/answers/answerControlType */ 62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mobx__ = __webpack_require__(/*! mobx */ 9);










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
        _this.answersControl = __WEBPACK_IMPORTED_MODULE_6_core_ui_components_answers_answerControlType__["a" /* AnswerControlType */].None;
        context.uiService.rootComponent = _this;
        context.gameState = _this.initialState();
        _this.fixedToCamera = true;
        _this.onDestroy.addOnce(function () {
            _this.context.uiService.mainComponent.onNewTask.dispose();
            _this.context.uiService.mainComponent.onAnswer.dispose();
            __WEBPACK_IMPORTED_MODULE_4_core_services__["d" /* audioService */].stopAll();
        });
        _this.onChangeForRun(function (x) { return __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["d" /* screenSizeService */].screenSize; }, function (x) {
            _this.cameraOffset.y = __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["d" /* screenSizeService */].topOffset;
        });
        return _this;
    }
    BaseMainGameComponent.prototype.initialState = function () {
        return {};
    };
    Object.defineProperty(BaseMainGameComponent.prototype, "cameraBottom", {
        get: function () {
            var bottom = __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["d" /* screenSizeService */].height - this.cameraOffset.y;
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
        if (!__WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["d" /* screenSizeService */].isPortrait && __WEBPACK_IMPORTED_MODULE_2_core_assets_assetUtl__["a" /* AssetUtl */].checkImageKey(this.gameKey(bgLeftKey))) {
            bgLeft = this.addImage([bgLeftKey, [0, 0]]);
            var width = -bgLeft.width + 2;
            bgLeft.x = width;
            bgLeftOffset = -width;
        }
        this.cameraOffset.x = -__WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["d" /* screenSizeService */].realLeftOffset + bgLeftOffset;
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
        if (__WEBPACK_IMPORTED_MODULE_3_core_logic_sys__["a" /* Sys */].devMode) {
            this.context.uiService.mainComponent.onIntroComplete.dispatch();
            return __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_signals__["a" /* Signals */].memorize();
        }
        __WEBPACK_IMPORTED_MODULE_4_core_services__["d" /* audioService */].play(__WEBPACK_IMPORTED_MODULE_1_core_assets__["e" /* CoreSounds */].intro);
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
        this.context.uiService.mainComponent.onNewTask.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9_mobx__["f" /* toJS */])(task));
    };
    return BaseMainGameComponent;
}(__WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 139:
/*!********************************************************!*\
  !*** ./src/core/ui/components/games/panelComponent.ts ***!
  \********************************************************/
/*! exports provided: PanelComponent */
/*! exports used: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_component__ = __webpack_require__(/*! core/ui/components/component */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_GraphicsImg__ = __webpack_require__(/*! core/ui/controls/GraphicsImg */ 143);




var positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
    radius: 20,
});
var PanelComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](PanelComponent, _super);
    // private control: NinePatchComponent
    function PanelComponent() {
        var _this = _super.call(this) || this;
        // this.control = this.add(new NinePatchComponent(CoreImages.panelList))
        _this.control = _this.add(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_GraphicsImg__["a" /* GraphicsImg */](function (g) {
            if (_this.props) {
                g.beginFill(_this.props.color, _this.props.alpha || 0.4);
                g.drawRoundedRect(0, 0, _this.props.size.width, _this.props.size.height, positions.radius);
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

/***/ 140:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var CircleSeq = /** @class */ (function () {
    function CircleSeq(max) {
        this.max = max;
        this.current = 0;
    }
    CircleSeq.prototype.next = function () {
        var v = this.current;
        this.current = (this.current + 1) % this.max;
        return v;
    };
    return CircleSeq;
}());

var UniqSeq = /** @class */ (function () {
    function UniqSeq(max, rng) {
        if (rng === void 0) { rng = new __WEBPACK_IMPORTED_MODULE_0_core_utils_randomGenerator__["a" /* RandomGenerator */](); }
        this.max = max;
        this.rng = rng;
        this.index = 0;
        this.updateList();
    }
    UniqSeq.prototype.checkMax = function (newMax) {
        if (newMax != this.max) {
            this.max = newMax;
            this.updateList();
        }
    };
    UniqSeq.prototype.updateList = function () {
        var newList = this.rng.uniqArray(this.max, this.max);
        if (this.list) {
            var prev = __WEBPACK_IMPORTED_MODULE_1_lodash__["last"](this.list);
            if (prev == newList[0]) {
                newList = __WEBPACK_IMPORTED_MODULE_1_lodash__["tail"](newList);
                newList.push(prev);
            }
        }
        this.list = newList;
    };
    UniqSeq.prototype.updateIndex = function () {
        this.index += 1;
        if (this.index >= this.list.length) {
            this.updateList();
            this.index = 0;
        }
    };
    UniqSeq.prototype.nextArray = function (count) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](count).map(function () { return _this.next(); });
    };
    UniqSeq.prototype.next = function () {
        var v = this.list[this.index];
        this.updateIndex();
        return v;
    };
    UniqSeq.prototype.nextFrom = function (arr) {
        this.checkMax(arr.length);
        return arr[this.next()];
    };
    UniqSeq.prototype.nextSubsetFrom = function (arr, count) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](count).map(function () { return _this.nextFrom(arr); });
    };
    return UniqSeq;
}());



/***/ }),

/***/ 141:
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

/***/ 142:
/*!***************************************************************!*\
  !*** ./src/core/ui/components/games/tutorialTextComponent.ts ***!
  \***************************************************************/
/*! exports provided: TutorialTextComponent */
/*! exports used: TutorialTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets__ = __webpack_require__(/*! core/assets */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_assets_images__ = __webpack_require__(/*! core/assets/images */ 44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_panelComponent__ = __webpack_require__(/*! core/ui/components/games/panelComponent */ 139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls__ = __webpack_require__(/*! core/ui/controls */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 10);











var positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
    marginTop: 40,
    textMarginX: 40,
    padding: 80,
    buttonMargin: 10,
    btnWidth: 200,
    btn: { x: 250, y: 90 }
});
var positionsPortrait = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].update(positions, {
    marginTop: 20,
    textMarginX: 40,
    padding: 40,
});
var getPositions = function () { return __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["d" /* screenSizeService */].isPortrait ? positionsPortrait : positions; };
var TutorialTextComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TutorialTextComponent, _super);
    function TutorialTextComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.marginTop = 0;
        return _this;
    }
    TutorialTextComponent.prototype.make = function (props) {
        var _this = this;
        if (props === void 0) { props = {}; }
        this.marginTop = props.marginTop || getPositions().marginTop;
        this.minHeight = props.minHeight;
        this.panel = props.panel || {};
        this.back = this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_panelComponent__["a" /* PanelComponent */]()).anchorCenterX();
        this.text = this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls__["g" /* Txt */]("", __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_1_core_assets__["c" /* CoreFonts */].tutorial(false), { align: props.textAlign || "left" }))).anchorCenter();
        var stepCount = props.stepCount || 1;
        if (stepCount > 1) {
            this.tutorialStore.setStepCount(stepCount);
            this.nextBtn = this.back.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__["b" /* IconBtn */]("далее", __WEBPACK_IMPORTED_MODULE_2_core_assets_images__["a" /* CoreImages */].next, function () {
                _this.tutorialStore.nextTutorialState();
            }, positions.buttonMargin));
            __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].highlight(this.nextBtn);
            this.onChangeForRun(function () { return _this.tutorialStore.isLastStep; }, function (isLastStep) {
                _this.nextBtn.visible = !isLastStep;
            });
        }
        this.onChangeForRun(function () { return __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["d" /* screenSizeService */].screenSize; }, function (_a) {
            var width = _a.width, height = _a.height;
            // const btnWidth = this.nextBtn ? positions.btnWidth : 0
            var btnWidth = 0;
            _this.text.textControl.wordWrapWidth = __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["d" /* screenSizeService */].realWidth - getPositions().textMarginX * 2 - btnWidth;
            _this.updateSize();
        });
        return this;
    };
    TutorialTextComponent.prototype.updateSize = function () {
        var textHeight = this.text.height + getPositions().padding;
        var height = this.minHeight ? Math.max(this.minHeight, textHeight) : textHeight;
        this.back.updatePos(__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2, this.marginTop - __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["d" /* screenSizeService */].topOffset);
        var width = __WEBPACK_IMPORTED_MODULE_10_core_utils_undef__["a" /* Undef */].map(this.panel.size, function (x) { return x.width; }) || __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["d" /* screenSizeService */].realWidth - getPositions().padding;
        this.back.setProps(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.panel, { size: { width: width, height: height } }));
        this.text.updatePos(__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2, this.back.height / 2 + this.back.y);
        this.text.updatePivot();
        this.back.visible = !!this.text.text;
        if (this.nextBtn) {
            this.nextBtn.updatePos(this.back.width - positions.btn.x, this.back.height - positions.btn.y);
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

/***/ 143:
/*!*********************************************!*\
  !*** ./src/core/ui/controls/GraphicsImg.ts ***!
  \*********************************************/
/*! exports provided: GraphicsImg */
/*! exports used: GraphicsImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphicsImg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 59);



var GraphicsImg = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](GraphicsImg, _super);
    function GraphicsImg(draw) {
        var _this = _super.call(this) || this;
        _this.draw = draw;
        var graphics = _this.game.make.graphics(0, 0);
        draw(graphics);
        _this.img = _this.add(__WEBPACK_IMPORTED_MODULE_2_core_ui_controls_controlUtl__["a" /* ControlUtl */].createSprite(graphics));
        return _this;
    }
    GraphicsImg.prototype.updateGraphics = function () {
        var graphics = this.game.make.graphics(0, 0);
        this.draw(graphics);
        this.img.loadTexture(graphics.generateTexture());
        graphics.destroy(true);
    };
    return GraphicsImg;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_controls_control__["a" /* Control */]));



/***/ }),

/***/ 144:
/*!*****************************************************************!*\
  !*** ./src/core/ui/components/games/introAnimationComponent.ts ***!
  \*****************************************************************/
/*! exports provided: IntroAnimationComponent */
/*! exports used: IntroAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroAnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 26);




var positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
    wordMargin: { x: 20, y: 0 }
});
var durations = {
    animation: 1000,
    delay: 700
};
var IntroAnimationComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](IntroAnimationComponent, _super);
    function IntroAnimationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
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

/***/ 145:
/*!**************************************************!*\
  !*** ./src/games/polyglot/common/wordsSounds.ts ***!
  \**************************************************/
/*! exports provided: WordsSounds */
/*! exports used: WordsSounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsSounds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_sounds__ = __webpack_require__(/*! core/assets/sounds */ 65);

var WordsSounds;
(function (WordsSounds) {
    WordsSounds.type = "type";
    WordsSounds.paper = "paper";
    WordsSounds.keys = [WordsSounds.type, WordsSounds.paper, __WEBPACK_IMPORTED_MODULE_0_core_assets_sounds__["a" /* CoreSounds */].bg];
})(WordsSounds || (WordsSounds = {}));


/***/ }),

/***/ 146:
/*!************************************************************!*\
  !*** ./src/core/ui/components/games/textPanelComponent.ts ***!
  \************************************************************/
/*! exports provided: TextPanelComponent */
/*! exports used: TextPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets__ = __webpack_require__(/*! core/assets */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_component__ = __webpack_require__(/*! core/ui/components/component */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_panelComponent__ = __webpack_require__(/*! core/ui/components/games/panelComponent */ 139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_textOnCenterBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/textOnCenterBehavior */ 147);






var positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
    marginTop: 30,
    textMarginX: 40,
    padding: 60
});
var TextPanelComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TextPanelComponent, _super);
    function TextPanelComponent(props) {
        var _this = _super.call(this) || this;
        _this.background = _this.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_panelComponent__["a" /* PanelComponent */]());
        _this.background.setProps(props);
        _this.textBehavior = new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_textOnCenterBehavior__["a" /* TextOnCenterBehavior */](__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, (props.font || __WEBPACK_IMPORTED_MODULE_1_core_assets__["c" /* CoreFonts */].tutorial(false)), { wordWrap: false }));
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

/***/ 147:
/*!****************************************************************!*\
  !*** ./src/core/ui/controls/behaviors/textOnCenterBehavior.ts ***!
  \****************************************************************/
/*! exports provided: TextOnCenterBehavior */
/*! exports used: TextOnCenterBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextOnCenterBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_controls_behaviors_behavior__ = __webpack_require__(/*! core/ui/controls/behaviors/behavior */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 63);





var positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
    margin: 30,
});
var TextOnCenterBehavior = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TextOnCenterBehavior, _super);
    function TextOnCenterBehavior(font, margin) {
        if (margin === void 0) { margin = positions.margin; }
        var _this = _super.call(this) || this;
        _this.font = font;
        _this.margin = margin;
        _this.maxWidth = 0;
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

/***/ 148:
/*!*************************************************************************!*\
  !*** ./src/core/ui/controls/behaviors/introComplexAnimationBehavior.ts ***!
  \*************************************************************************/
/*! exports provided: IntroComplexAnimationBehavior */
/*! exports used: IntroComplexAnimationBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComplexAnimationBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_introAnimationComponent__ = __webpack_require__(/*! core/ui/components/games/introAnimationComponent */ 144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_behaviors_behavior__ = __webpack_require__(/*! core/ui/controls/behaviors/behavior */ 28);




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

/***/ 149:
/*!********************************************!*\
  !*** ./src/games/polyglot/common/fonts.ts ***!
  \********************************************/
/*! exports provided: Fonts */
/*! exports used: Fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fonts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic_sys__ = __webpack_require__(/*! core/logic/sys */ 6);


var Fonts;
(function (Fonts) {
    var wordFontSizes = { 1: 50, 2: 70, 3: 90 };
    Fonts.wordText = function (size) { return ({
        fontSize: (wordFontSizes[size]) * __WEBPACK_IMPORTED_MODULE_1_core_logic_sys__["a" /* Sys */].pixelRatio,
        font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreFonts */].MontserratSemiBold,
        fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["a" /* CoreColors */].lightBlack
    }); };
    Fonts.typewriterText = {
        fontSize: 50 * __WEBPACK_IMPORTED_MODULE_1_core_logic_sys__["a" /* Sys */].pixelRatio, font: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["b" /* CoreFonts */].MontserratSemiBold, fill: __WEBPACK_IMPORTED_MODULE_0_core_assets_fonts__["a" /* CoreColors */].black, align: "center",
        wordWrap: true
    };
})(Fonts || (Fonts = {}));


/***/ }),

/***/ 153:
/*!*****************************************************************!*\
  !*** ./src/core/ui/controls/behaviors/btnAlphaHoverBehavior.ts ***!
  \*****************************************************************/
/*! exports provided: BtnAlphaHover */
/*! exports used: BtnAlphaHover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnAlphaHover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_controls_behaviors_behavior__ = __webpack_require__(/*! core/ui/controls/behaviors/behavior */ 28);


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

/***/ 156:
/*!****************************************************************!*\
  !*** ./src/games/polyglot/common/components/PaperComponent.ts ***!
  \****************************************************************/
/*! exports provided: PaperComponent */
/*! exports used: PaperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordImages__ = __webpack_require__(/*! ../wordImages */ 141);




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

/***/ 157:
/*!*************************************************!*\
  !*** ./src/games/polyglot/common/commonMeta.ts ***!
  \*************************************************/
/*! exports provided: metaData */
/*! exports used: metaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_logic_taskCount__ = __webpack_require__(/*! core/logic/taskCount */ 158);

var levelsTaskCount = [
    { taskCount: 8, maxLevel: 3 },
    { taskCount: 10, maxLevel: 5 },
    { taskCount: 12, maxLevel: 10 },
];
var taskCount = new __WEBPACK_IMPORTED_MODULE_0_core_logic_taskCount__["a" /* LevelsTaskCountCreator */](levelsTaskCount);
var metaData = {
    unlimitTime: true,
    darkBg: false,
    ignoreError: true,
    noResetSeqCountOnError: true,
    taskCount: taskCount,
    size: {
        width: 2048,
        height: 1280,
        heightMin: 1152
    }
};


/***/ }),

/***/ 158:
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

/***/ 159:
/*!***********************************************************************!*\
  !*** ./src/games/polyglot/common/components/baseWordMainComponent.ts ***!
  \***********************************************************************/
/*! exports provided: BaseWordMainComponent */
/*! exports used: BaseWordMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseWordMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_sounds__ = __webpack_require__(/*! core/assets/sounds */ 65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_hintComponent__ = __webpack_require__(/*! core/ui/components/games/hintComponent */ 160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_components_games_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/tutorialTextComponent */ 142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_behaviors_introComplexAnimationBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/introComplexAnimationBehavior */ 148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_games_polyglot_common_components_wordListComponent__ = __webpack_require__(/*! games/polyglot/common/components/wordListComponent */ 161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_games_polyglot_common_wordsSounds__ = __webpack_require__(/*! games/polyglot/common/wordsSounds */ 145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wordImages__ = __webpack_require__(/*! ../wordImages */ 141);















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
        _this.getPositions = function () { return __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["d" /* screenSizeService */].isPortrait ? _this.positionsPortrait : _this.positions; };
        _this.bg = _this.addImage([__WEBPACK_IMPORTED_MODULE_14__wordImages__["a" /* WordImages */].bg, [0, 0]]);
        _this.bgitem = __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["d" /* screenSizeService */].isPortrait || _this.isTutorial ? undefined : _this.addImage([__WEBPACK_IMPORTED_MODULE_14__wordImages__["a" /* WordImages */].bgitem, [0, 0]]).setPos(_this.positions.bgitem);
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
        return this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_8_core_ui_components_games_tutorialTextComponent__["a" /* TutorialTextComponent */])).make({ marginTop: this.getPositions().tutorial.y });
    };
    BaseWordMainComponent.prototype.onInit = function () {
        var _this = this;
        this.playSound(__WEBPACK_IMPORTED_MODULE_1_core_assets_sounds__["a" /* CoreSounds */].bg, true);
        this.statusOptions.waitCompleteBeforeNewTask = true;
        this.startIntro();
        if (this.hintComponent.show) {
            var hint_1 = this.mainGroup.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_hintComponent__["a" /* HintComponent */])).defaultPosition();
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
        this.onChangeFor(function () { return __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["d" /* screenSizeService */].isPortrait; }, function (x) {
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

/***/ 160:
/*!*******************************************************!*\
  !*** ./src/core/ui/components/games/hintComponent.ts ***!
  \*******************************************************/
/*! exports provided: positions, HintComponent */
/*! exports used: HintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export positions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_images__ = __webpack_require__(/*! core/assets/images */ 44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_logic_cnst__ = __webpack_require__(/*! core/logic/cnst */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_textPanelComponent__ = __webpack_require__(/*! core/ui/components/games/textPanelComponent */ 146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls_img__ = __webpack_require__(/*! core/ui/controls/img */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);












var durations = {
    hide: 300,
};
var positions = __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].create({
    margin: 10,
    tooltipSize: { width: 880, height: 120 },
    tooltip: { x: 60, y: 0 },
});
var HintComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](HintComponent, _super);
    function HintComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
        this.onChangeFor(function () { return __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["d" /* screenSizeService */].isPortrait; }, function (x) { return _this.defaultPosition(); });
        this.textPanel = this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_components_games_textPanelComponent__["a" /* TextPanelComponent */]({ size: positions.tooltipSize })).setPos(positions.tooltip);
        this.textPanel.visible = false;
    };
    HintComponent.prototype.defaultPosition = function () {
        var topOffset = __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["d" /* screenSizeService */].topOffset;
        this.updatePos(-__WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["d" /* screenSizeService */].realLeftOffset + this.btn.width / 2 - positions.margin, -topOffset + this.btn.height / 2 - positions.margin);
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

/***/ 161:
/*!*******************************************************************!*\
  !*** ./src/games/polyglot/common/components/wordListComponent.ts ***!
  \*******************************************************************/
/*! exports provided: WordListComponent */
/*! exports used: WordListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_behaviors_focusBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/focusBehavior */ 162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_polyglot_common_components_anagrammaComponent__ = __webpack_require__(/*! games/polyglot/common/components/anagrammaComponent */ 163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_polyglot_common_components_PaperComponent__ = __webpack_require__(/*! games/polyglot/common/components/PaperComponent */ 156);








var positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
    wordMargin: { x: 0, y: 20 },
    focus: [400, 400],
    focusSize: { width: 500, height: 400 }
});
var WordListComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](WordListComponent, _super);
    function WordListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
        __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].tableColumn(this.words, positions.wordMargin);
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

/***/ 162:
/*!*********************************************************!*\
  !*** ./src/core/ui/controls/behaviors/focusBehavior.ts ***!
  \*********************************************************/
/*! exports provided: FocusBehavior */
/*! exports used: FocusBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_behaviors_behavior__ = __webpack_require__(/*! core/ui/controls/behaviors/behavior */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_pointerBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/pointerBehavior */ 69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 12);








var positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
    radius: 5,
    margin: 40,
    pointerMaring: 40,
    border: 20
});
var FocusBehavior = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](FocusBehavior, _super);
    function FocusBehavior(context, callback) {
        var _this = _super.call(this) || this;
        _this.context = context;
        _this.callback = callback;
        _this.pointerBehavior = new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_pointerBehavior__["a" /* PointerBehavior */](_this.context, { location: "top", dark: true, margin: positions.pointerMaring });
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
        this.back.lineStyle(positions.border, __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["a" /* CoreColors */].focus, 1);
        this.back.drawRoundedRect(0, 0, this.control.width + positions.margin, this.control.height + positions.margin, positions.radius);
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

/***/ 163:
/*!********************************************************************!*\
  !*** ./src/games/polyglot/common/components/anagrammaComponent.ts ***!
  \********************************************************************/
/*! exports provided: AnagrammaComponent */
/*! exports used: AnagrammaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagrammaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_behaviors_answerBtnBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/answerBtnBehavior */ 68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_behaviors_btnAlphaHoverBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/btnAlphaHoverBehavior */ 153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_utils_arrays__ = __webpack_require__(/*! core/utils/arrays */ 32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_polyglot_common_fonts__ = __webpack_require__(/*! games/polyglot/common/fonts */ 149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_polyglot_common_wordImages__ = __webpack_require__(/*! games/polyglot/common/wordImages */ 141);












var positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
    wordMargin: { x: 50, y: 0 },
    wordWidth: 500
});
var maxColumn = 5;
var AnagrammaComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AnagrammaComponent, _super);
    function AnagrammaComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
            button.textControl.fill = __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["a" /* CoreColors */].hint;
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
        __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].table(buttons, { x: positions.wordWidth / buttons[0].length, y: buttons[0][0].height, absolute: true });
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
            }, __WEBPACK_IMPORTED_MODULE_10_games_polyglot_common_fonts__["a" /* Fonts */].wordText(_this.props.smallFont ? 2 : 3)).anchorCenter();
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

/***/ 164:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_polyglot_common_fonts__ = __webpack_require__(/*! games/polyglot/common/fonts */ 149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_polyglot_common_wordsSounds__ = __webpack_require__(/*! games/polyglot/common/wordsSounds */ 145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__wordImages__ = __webpack_require__(/*! ../wordImages */ 141);













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
        if (!__WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["d" /* screenSizeService */].isPortrait) {
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

/***/ 165:
/*!**************************************!*\
  !*** ./src/games/utils/localeUtl.ts ***!
  \**************************************/
/*! exports provided: LocaleUtl */
/*! exports used: LocaleUtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleUtl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__ = __webpack_require__(/*! core/logic/cnst */ 33);

var LocaleUtl;
(function (LocaleUtl) {
    function getData(data, locale) {
        return (data[locale || __WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__["a" /* Cnst */].defaultLocale] || data[__WEBPACK_IMPORTED_MODULE_0_core_logic_cnst__["a" /* Cnst */].defaultLocale]);
    }
    LocaleUtl.getData = getData;
})(LocaleUtl || (LocaleUtl = {}));


/***/ }),

/***/ 185:
/*!*************************************************!*\
  !*** ./src/games/polyglot/journalist/images.ts ***!
  \*************************************************/
/*! exports provided: Images */
/*! exports used: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_polyglot_common_wordImages__ = __webpack_require__(/*! games/polyglot/common/wordImages */ 141);


var Images;
(function (Images) {
    Images.type_part_1 = "type_part_1";
    Images.type_part_0 = "type_part_0";
    Images.typePartCount = 42;
    Images.sizes = __WEBPACK_IMPORTED_MODULE_0_core_ui_common_sizes__["a" /* Sizes */].create({
        type_part: { w: 762, h: 790 }
    });
    Images.sprites = __WEBPACK_IMPORTED_MODULE_1_games_polyglot_common_wordImages__["a" /* WordImages */].sprites.concat([
        Images.type_part_0,
        Images.type_part_1
    ]);
    // export const spritesheets: Spritesheet[] = [
    //   {key: type_part, width: sizes.type_part.w, height: sizes.type_part.h, count: typePartCount},
    // ]
    Images.data = { sprites: Images.sprites };
})(Images || (Images = {}));


/***/ }),

/***/ 186:
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

/***/ 221:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_polyglot_common_components_baseWordMainComponent__ = __webpack_require__(/*! games/polyglot/common/components/baseWordMainComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_polyglot_journalist_components_questionComponent__ = __webpack_require__(/*! games/polyglot/journalist/components/questionComponent */ 222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_polyglot_journalist_components_wordListComponent__ = __webpack_require__(/*! games/polyglot/journalist/components/wordListComponent */ 223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_polyglot_journalist_translations__ = __webpack_require__(/*! games/polyglot/journalist/translations */ 186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_typeWriterComponent__ = __webpack_require__(/*! ../components/typeWriterComponent */ 224);










var positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
    descY: 200,
});
var positionsPortrait = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].update(positions, {
    descY: 150,
});
var getPositions = function () { return __WEBPACK_IMPORTED_MODULE_4_core_ui_services_instances__["d" /* screenSizeService */].isPortrait ? positionsPortrait : positions; }; // move to gameComponent
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enableHint = true;
        _this.question = _this.mainGroup.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_6_games_polyglot_journalist_components_questionComponent__["a" /* QuestionComponent */]))
            .updatePos(__WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].w2, getPositions().descY)
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
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_5_games_polyglot_common_components_baseWordMainComponent__["a" /* BaseWordMainComponent */]));



/***/ }),

/***/ 222:
/*!***********************************************************************!*\
  !*** ./src/games/polyglot/journalist/components/questionComponent.ts ***!
  \***********************************************************************/
/*! exports provided: QuestionComponent */
/*! exports used: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_instances__ = __webpack_require__(/*! core/services/instances */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_panelComponent__ = __webpack_require__(/*! core/ui/components/games/panelComponent */ 139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_behaviors_highlightBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/highlightBehavior */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__ = __webpack_require__(/*! games/polyglot/journalist/translations */ 186);












var positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
    size: { width: 800, height: 120 },
    textMargin: 20,
    margin: { x: 4 }
});
var positionsPortrait = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].update(positions, {
    size: { width: 600, height: 120 },
});
var getPositions = function () { return __WEBPACK_IMPORTED_MODULE_10_core_ui_services_instances__["d" /* screenSizeService */].isPortrait ? positionsPortrait : positions; };
var taskTypeTranslation = {
    "antonym": [__WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].antonym, __WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].antonyms],
    "synonym": [__WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].synonym, __WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].synonyms],
    "unrelated": [__WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].unrelated, __WEBPACK_IMPORTED_MODULE_11_games_polyglot_journalist_translations__["a" /* Translations */].unrelateds]
};
var QuestionComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](QuestionComponent, _super);
    function QuestionComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionComponent.prototype.onInit = function () {
        var wordBack = this.add(new __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_panelComponent__["a" /* PanelComponent */]());
        wordBack.setProps({ size: getPositions().size });
        var font = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["b" /* CoreFonts */].tutorial(false), { wordWrap: false });
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
        __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableRow([this.questionLeft, this.questionRight], positions.margin);
        __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_controlUtl__["a" /* ControlUtl */].scaleToFit(this.group, getPositions().size.width - positions.textMargin);
        this.group.updatePivot();
    };
    return QuestionComponent;
}(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 223:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__ = __webpack_require__(/*! core/ui/components/index */ 26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__ = __webpack_require__(/*! core/ui/controls/controlUtl */ 59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_polyglot_common_components_PaperComponent__ = __webpack_require__(/*! games/polyglot/common/components/PaperComponent */ 156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_games_polyglot_common_fonts__ = __webpack_require__(/*! games/polyglot/common/fonts */ 149);










var positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
    wordMargin: { x: 0, y: 20 },
    wordMarginPlus: 30,
    offset: 25,
    textWidth: 540
});
var WordListComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](WordListComponent, _super);
    function WordListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
            btn.textControl.wordWrapWidth = positions.textWidth;
            btn.updateButtonSize();
            btn.alpha = 0.5;
            btn.onHover(function (out) { return btn.alpha = out ? 0.5 : 1; });
            __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_controlUtl__["a" /* ControlUtl */].scaleToFit(btn, positions.textWidth);
            return _this.addAnswerBehavior(btn, word, { dark: true, location: "left" });
        });
        this.wordsGroup.addChildren(this.words);
        var plus = positions.wordMarginPlus * __WEBPACK_IMPORTED_MODULE_7_core_utils_numbers__["a" /* Numbers */].coef(this.words.length, 3, 7);
        __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].tableColumn(this.words, { x: 0, y: positions.wordMargin.y + plus });
        this.paper.updatePaper(this.wordsGroup);
        this.wordsGroup.updatePos(this.center()[0] + positions.offset, this.center()[1]);
        this.wordsGroup.updatePivot();
        this.updatePivot();
    };
    return WordListComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_index__["e" /* GameComponent */]));



/***/ }),

/***/ 224:
/*!*************************************************************************!*\
  !*** ./src/games/polyglot/journalist/components/typeWriterComponent.ts ***!
  \*************************************************************************/
/*! exports provided: TypeWriterComponent */
/*! exports used: TypeWriterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeWriterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_polyglot_common_components_baseTypewriterComponent__ = __webpack_require__(/*! games/polyglot/common/components/baseTypewriterComponent */ 164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images__ = __webpack_require__(/*! ../images */ 185);






var positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
    partAnimation: -100,
    center: [383, 395]
});
var durations = {
    typePart: 150
};
var TypeWriterComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TypeWriterComponent, _super);
    function TypeWriterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
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
            .updateAnchor(0.5, 0.912).setPos(positions.center)
            .fluentUpdate(function (x) { return x.scaleY = 0; });
        _super.prototype.onInit.call(this);
        this.typePart0 = this.addImage([__WEBPACK_IMPORTED_MODULE_5__images__["a" /* Images */].type_part_0, [0, 0]])
            .updateAnchor(0.5, 0.088).setPos(positions.center);
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

/***/ 225:
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

/***/ 226:
/*!************************************************!*\
  !*** ./src/games/polyglot/journalist/logic.ts ***!
  \************************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_types_gameLogic__ = __webpack_require__(/*! core/types/gameLogic */ 46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_index__ = __webpack_require__(/*! core/utils/index */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_polyglot_journalist_words__ = __webpack_require__(/*! games/polyglot/journalist/words */ 227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);








var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_3_core_utils_index__["e" /* RandomGenerator */](); // [4, 2,8,10]
        _this.uniqSeq = new __WEBPACK_IMPORTED_MODULE_2_core_utils_circleSeq__["b" /* UniqSeq */](10, _this.rng);
        _this.tutorialTaskTypes = ["synonym", "antonym"];
        _this.tutorialSeq = new __WEBPACK_IMPORTED_MODULE_2_core_utils_circleSeq__["b" /* UniqSeq */](_this.tutorialTaskTypes.length, _this.rng);
        _this.items = __WEBPACK_IMPORTED_MODULE_6_games_polyglot_journalist_words__["a" /* SynonymsWords */].items(_this.gameData.settings.custom.locale);
        return _this;
    }
    Logic.prototype.possibleAnswersAndWrongWords = function (items, type, rest) {
        var synonyms = items[0].concat(items[1]);
        var antonyms = items[2];
        var wrongWord = __WEBPACK_IMPORTED_MODULE_7_lodash__["flatten"](this.rng.sample(rest));
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
        var items = this.items.filter(function (x) {
            return x[0].length + x[1].length > level.answerCount + 1
                && x[2].length >= level.answerCount;
        });
        var wordSet = this.uniqSeq.nextFrom(items);
        var rest = items.filter(function (x) { return x != wordSet; });
        var taskType = this.gameData.settings.isTutorial
            ? this.tutorialSeq.nextFrom(this.tutorialTaskTypes)
            : this.rng.sample(level.types);
        var _a = this.possibleAnswersAndWrongWords(wordSet, taskType, rest), word = _a[0], possibleAnswers = _a[1], wrong1 = _a[2], wrong2 = _a[3];
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

/***/ 227:
/*!************************************************!*\
  !*** ./src/games/polyglot/journalist/words.ts ***!
  \************************************************/
/*! exports provided: WordLength, SynonymsWords */
/*! exports used: SynonymsWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WordLength */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SynonymsWords; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_utils_strings__ = __webpack_require__(/*! core/utils/strings */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_polyglot_journalist_wordsEn__ = __webpack_require__(/*! games/polyglot/journalist/wordsEn */ 228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_polyglot_journalist_wordsRu__ = __webpack_require__(/*! games/polyglot/journalist/wordsRu */ 229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_utils_localeUtl__ = __webpack_require__(/*! games/utils/localeUtl */ 165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);





var WordLength;
(function (WordLength) {
    WordLength[WordLength["Small"] = 0] = "Small";
    WordLength[WordLength["Middle"] = 1] = "Middle";
    WordLength[WordLength["Big"] = 2] = "Big";
})(WordLength || (WordLength = {}));
var SynonymsWords;
(function (SynonymsWords) {
    var localeData = {
        ru: __WEBPACK_IMPORTED_MODULE_2_games_polyglot_journalist_wordsRu__["a" /* WordsRu */].data,
        en: __WEBPACK_IMPORTED_MODULE_1_games_polyglot_journalist_wordsEn__["a" /* WordsEn */].data
    };
    function fix(data) {
        return data.map(function (x) { return x.map(function (y) { return __WEBPACK_IMPORTED_MODULE_4_lodash__["uniq"](__WEBPACK_IMPORTED_MODULE_0_core_utils_strings__["a" /* Strings */].splitTrim(y).filter(function (x) { return x != ""; })); }); });
    }
    SynonymsWords.items = function (locale) { return fix(__WEBPACK_IMPORTED_MODULE_3_games_utils_localeUtl__["a" /* LocaleUtl */].getData(localeData, locale)); };
    // console.log(items.map(x => _(x).flatten().groupBy(x => x).value()))
})(SynonymsWords || (SynonymsWords = {}));


/***/ }),

/***/ 228:
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
    WordsEn.data = [["water", "Clear colorless liquid", "A drink to quench one's thirst"], ["sauna", "Bathroom", "Sudatory"], ["delusion", "Incoherent speech; Disease", "Meaningless, absurd, incoherent."], ["breeze", "Land breeze", "Blowing from the sea"], ["ford", "Rift", "A good place to wade"], ["brother", "Close relative", "Comrade, a like-minded person"], ["bridge", "Construction to transfer", "Reinforced concrete or wooden structure"], ["stud", "Horse, stallion", "Solid-hoofed animal"], ["auto", "Vehicle", "It carries passengers and cargo"], ["aloe", "Medicinal plant", "It is used in folk medicine"], ["stork", "Migrant bird", "Long-legged bird with long straight beak"], ["wool", "A substance made of cotton or wool", "It is used in sanitation and for insulation of clothes, dwellings, etc."], ["vein", "Blood vessel", "Part of the cardiovascular system"], ["wax", "Substance produced by bees", "They make candles out of it"], ["inhale", "Filling lungs with air", "Physiological process"], ["eye", "Organ of vision", "Human optical system"], ["cast", "Calcareous mineral matter", "Surgical dressing"], ["hymn", "Symbol of state unity", "Solemn song; A song of praise"], ["cargo", "Heaviness; Heavy object", "Object, goods accepted for transportation"], ["tribute", "Taxes paid by the population", "Fine"], ["debt", "Commitment, obligation", "Monetary liability"], ["friend", "The one who is in friendship with someone", "Joined at the hip"], ["dose", "A certain amount of something", "Portion, measure, part"], ["genre", "Kind of works of art", "Manner, style, plot feature"], ["wand", "A short stick with ornaments", "Serves as a symbol of power and honor"], ["sting", "Means of protection and attack of bees, wasps", "Point; spike"], ["hare", "Small animal with long ears", "Fast and jumpy"], ["ring", "The sound produced by blows", "The sound that is made with the bell"], ["ashes", "Residue of combustion", "Grayish dust"], ["caviar", "Eggs of fish and shellfish"], ["plum", "Dried berries of grapes", "Dried fruit"], ["result", "Total amount", "Bring to the result"], ["frame", "Single image", "A scene on the film"], ["kiwi", "A tropical fruit", "An exotic fruit"], ["clan", "Family community", "Close-knit group"], ["bay", "Southern evergreen plant", "Sweet leaves; spice"], ["leaf", "The external organ of the plant", "In botany; photosynthesis"], ["lens", "Magnifier", "A tool used by detectives"], ["mama", "Female parent", "One of the child's parents"], ["mist", "Opaque air", "Atmospheric phenomenon; atmospheric turbidity"], ["sea", "Part of the ocean; large area filled with water", "Beach; Coast; surf; breeze"], ["sky", "Visible atmosphere above the ground", "Blue arch; clouds"], ["niche", "Deepening in the wall used for decorations, statues, etc.", "Architectural structure"], ["note", "A sign for a sound", "Music text"], ["lunch", "Meal in the middle of the day", "Noon; food"], ["carts", "Group of waggons", "Set of vehicles"], ["oval", "Geometric figure", "Outline of a certain shape"], ["feather", "Floccus, birds", "Bird; wing"], ["raft", "Bonded logs used for floating", "Construction for sailing"], ["race", "Community; group of humans", "The existing number of signs"], ["rank", "Rating, degree, title, grade", "Category, class"], ["rune", "Ancient script", "Signs, symbols; ancient alphabet"], ["safe", "Fireproof cabinet", "A vault in a bank to store valuables"], ["pile", "A log or a beam driven into the ground", "Reinforced concrete rod"], ["power", "Physical energy", "Ability of living beings"], ["tabu", "Prohibition on something", "The system of specific prohibitions"], ["tank", "Combat vehicle", "Cannon armament; crawler-tread"], ["hoopoe", "Bird with motley plumage", "Tropical Bird"], ["sense", "Meaning", "Reasonable content"], ["iron", "Device for ironing", "Heated metal device"], ["pattern", "Harmonious and beautiful drawing", "A combination of lines, colors and shadow"], ["luck", "Good luck", "Success"], ["pound", "Measure of weight", "Currency"], ["dude", "Dandy", "Fashionable and empty young man"], ["cartilage", "Connective tissue in the body", "Part of the bone"], ["chrome", "Chemical element", "Lustrous metal"], ["zinc", "Ductile metal", "A vital microelement"], ["cycle", "Set of phenomena and processes", "Circuit for a known period"], ["color", "Light background", "Optical range parameter"], ["plague", "Epidemic", "Highly contageous desease"], ["watch", "Time measurement", "Time measuring device"], ["marvel", "Something unprecedented; supernatural", "Striking, outstanding, amazing"], ["bayonet", "Stabbing weapon", "Blade, mounted on the gun"], ["staff", "Governing body", "Headquarters"], ["charm", "Fascination, allure", "Attractive features"], ["asset", "Active part of the organization", "Controlled company resources"], ["allure", "A kind of horse running, racing", "Step; lynx; gallop"], ["anion", "Negatively charged particle", "Atom; molecule; ion"], ["banana", "Tropical plant", "Sweet, powdery fetus"], ["loaf", "White bread", "Bakery product"], ["wax", "Black ointment for shoe cleaning", "Shoe polish"], ["spring", "Season", "The awakening of nature"], ["raven", "Big bird with black plumage", "Bird symbolizing prophecy"], ["gamma", "Sequential number of sounds", "A sequence of homogeneous elements"], ["flue", "Infection", "Cold"], ["dam", "Hydraulic engineering structure", "Protection from flooding"], ["dyad", "A bunch of; fluidity", "Twinship"], ["jaeger", "Professional hunter", "Forester"], ["muzzle", "Narrow and deep hole", "Vertical channel"], ["token", "Metal circle, icon", "A conditional sign of something"], ["trial", "Running race", "Sport; cross-country race; sprint"], ["order", "A task to manufacture something", "Ordered item"], ["pledge", "Vow", "Oath; swear; charm"], ["irbis", "Snow Leopard", "Large predatory animal"], ["head", "Water source", "River, stream; primary source"], ["player", "Member of the game", "The one who plays"], ["boar", "Wild pig", "grice; pig; forest hog"], ["cahors", "Variety of red wine", "Unfortified and dry wine"], ["сocoon", "A casing in which the caterpillar lives", "A shell with witch insects surround themselves"], ["lamp", "Lighting or heating device", "Artificial light source"], ["liana", "South winding or tenacious plant", "A tenent part of the plant"], ["lily", "Beautiful flower in the form of a bell", "Bulb perennial plant"], ["motor", "Engine", "Engine; internal combustion device"], ["riot", "Armed action; conspiracy", "Rebellion against government"], ["alarm", "Chimes", "A signal of a threat, distress, fire, etc."], ["number", "Ordinal number of an object in a row of others", "Sign; number; sequence of digits"], ["horde", "A disorderly and noisy congestion of people", "Crowd; gathering; a large group"], ["pathos", "Passionate enthusiasm", "Rise of spirit; enthusiasm"], ["singer", "The one who knows how to sing", "A performer engaged in singing"], ["radar", "Detection system", "Radio detection and ranging"], ["trotter", "Pedigreed trotting horse", "A horse capable of trotting"], ["sugar", "Crystalline sweet substance", "Reed; white; crumbly"], ["cult", "Religious community", "Brotherhood, that accepted some doctrine of faith"], ["selenium", "Sulfuric acid waste", "Sulfuric acid precipitate"], ["tenor", "High male voice", "Voice of a singer"], ["title", "Honorary degree", "Privileged position"], ["shoe", "Footwear that is no higher than the ankles", "Heel; footwear"], ["vinegar", "Liquid with a sharp acidic taste", "Spicy seasoning for food"], ["success", "Good luck in achieving something", "Public recognition"], ["ounce", "Measure of pharmacy weight", "Weight unit"], ["fiacre", "Hired carriage", "City horse-drawn carriage"], ["finial", "Sacrificial Bowl", "Glass vessel in Ancient Greece"], ["facet", "The sharpened side of the blade", "Cutting edge of cardboard, glass, etc."], ["chord", "Axial skeleton", "Spinal cord of some animals"], ["canvas", "Linen", "Painting painted with oil paints"], ["chitin", "Organic matter", "Hard outer cover of insects"], ["grip", "Kernel; core part of anything", "The upper part of the weapon"], ["gypsy", "Ethnic group", "A people of Indian origins"], ["cynic", "A cynical person", "Disdainful attitude to the standards of morality"], ["digit", "A concept of quantity; amount", "Quantitative characteristic in mathematics"], ["pulp", "Low-quality reading", "Frivolous and entertaining literature"], ["alien", "Foreign person, stranger", "Foreign, strange, non-resident"], ["coven", "Saturday rest", "Night gathering of witches"], ["punks", "Hooligans; crooks", "Riff-raff; juvenile delinquents"], ["hovel", "A tent made of branches, straw, etc.", "Shelter made of improvised materials"], ["viand", "Food, provision", "Food in human life"], ["alphabet", "The same as primer", "A sum of the letters used for writing"], ["alliance", "Union; an association", "Organization based on commitments"], ["analysis", "Method of scientific research", "Comprehensive analysis, review"], ["balance", "Equilibrium, balancing", "Summary of cash receipts and expenses"], ["watchdog", "Large domestic dog", "Mongrel dog"], ["earplug", "Mufflers for ears", "Noise protection for ears"], ["beard", "Hair on the lower face", "External sign of masculinity"], ["currency", "Type of monetary system", "National, foreign and international money"], ["vassal", "Subordinate, dependent person", "Feodal lord subordinate"], ["trend", "Some direction", "Kick, vogue"], ["hair", "Horny appendages of the skin", "Filiform appendages of the skin"], ["hypnosis", "A condition similar to sleep or half asleep", "Method of indoctrination; narrowed consciousness"], ["flock", "A noisy group of people", "Big noisy company"], ["group", "The totality of people (or objects), animals, professions", "Community characterised by similar features"], ["danai", "The oldest name of the Greek tribes", "The name of the Greeks besieging Troy"], ["dispatch", "Same as telegram", "Hasty diplomatic notice"], ["act", "Action", "Consciously volitional action"], ["jumble", "Confusion, mess", "Huddle"], ["echidna", "Animal covered with needles and wool", "Half-woman and half-snake in Greek mythology"], ["trash", "Nonsense, trivia, ridicule", "Absurdity, blather."], ["jasmin", "Garden bush with white flowers", "A kind of evergreen shrubs that has a sweet smell"], ["meanie", "Penny pincher, miser", "Moneybag and cheapskate"], ["pearls", "A solid substance formed in shells of mollusks", "White; precious jewelery"], ["pupil", "Eye, eye-pupil", "Obsolete name for the pupil of the eye"], ["bell", "Metal instrument used for alerting", "Instrument for sound signals"], ["star", "Huge glowing gas balloon", "Sun"], ["vision", "Ability to see", "Physiological process of perception through the eyes"], ["isotope", "An atom of the same chemical element", "A variety of atoms, the same number of protons"], ["import", "Move-in from abroad", "Transfer, transportation of foreign goods and services"], ["ginger", "Spice made from the root", "Served in Asian cuisine"], ["verity", "Reflection of reality; truth", "Statement, judgment verified by practice"], ["mantrap", "Device for catching animals", "Trap for animals and birds"], ["corporal", "The junior commander in the armies of some countries", "Military rank"], ["rubber", "Raw material for the production of rubber", "Elastic substance extracted from milk sap of some plants"], ["valve", "Part of the the mechanism; type of lid", "A thing that closes the passage of a vapor, gas or liquid"], ["avalanche", "Mass of snow, snow blocks coming from the mountains", "Swiftly moving mass"], ["lampas", "Clearings of contrasting color on the trousers of officers", "Colored strip on the seam of the trousers"], ["lorgnette", "Folding glasses in a frame with a handle", "Variety of glasses; pair of lenses in the frame"], ["magnet", "Magnetizes iron and steel items", "A body, which can magnetize iron"], ["massif", "The main, highest part of the mountainous area", "Large space, homogeneous by geographical features"], ["Standard", "The sign of measurement, evaluation, comparison", "The one that serves as a measure, the basis for assessing"], ["lamprey", "Aquatic vertebrate with a serpentine body", "Lower vertebrate animals; cyclostomes"], ["nostril", "One of the paired outer holes of the nose", "Nasal hole; nasal canal"], ["onrush", "Strong pressure; persistent movement", "Stressful motion"], ["week", "The unit of time calculation, equal to seven days", "From Monday to Sunday inc"], ["blanket", "Bedding used to cover", "One can cover oneself with it"], ["hock", "Part of the carcass; hip", "The uppermost part of the hind leg"], ["homonym", "A word that sounds the same as the other, but different in meaning", "Words that are the same in sound, but different in meaning"], ["response", "The answer to the call, to the appeal", "A response to something"], ["baboon", "Monkey with an elongated snout", "Old World monkey with a doglike muzzle"], ["sunhat", "Summer wide-brimmed straw or cloth hat", "Headdress; light hat"], ["dimout", "Solid cover", "Something that closes, envelops from all sides"], ["radian", "Angle measure", "Angular measure"], ["rapier", "Thrusting cold weapon", "Four-edged sword in fencing"], ["reserve", "A store from which new strengths, resources can be taken", "Stock of anything in case of need"], ["siesta", "The hottest time of the day", "Afternoon rest"], ["Fable", "Folk-poetic fiction about fictional heroes", "Narrative work of oral folk art"], ["hiding", "A place that serves as a secret haven", "Repository; a place for secret storage"], ["term", "A word or a phrase; a name of a particular concept", "Word denoting the concept"], ["portal", "Passage space between the doors", "A small room between the entrance and exit doors"], ["abraser", "Solid material for metal grinding and polishing", "Material used in the processing of stone, glass, etc."], ["autobus", "Multi-seat car for carrying passengers", "Type of public urban transport"], ["veteran", "Elder, venerable man", "Head of the clan, venerable elderly man"], ["axiom", "Supposition adopted with no evidence", "That does not require proof"], ["butterfly", "Insect with two pairs of pollen-covered wings", "Field insect from the lepidoptera"], ["bastion", "Serfdom or field military fortification", "Five-sided long-term fortification"], ["benefit", "Performance in honor of one of the participants", "Collection of money from any performance in favor of the artist"], ["biscuit", "Variety of light biscuit cookies", "Confectionery dough and confectionary \"bread\""], ["option", "Modification; variety", "Sort, variation, version"], ["business card", "Card with contact information about a person", "Part of the image that forms the impression of a person"], ["joyance", "A carefree-joyful mood", "A good mood; willingness to joke"], ["delight", "A great uplift of the senses; escalation", "Joyful feeling of rapture"], ["fortuneteller", "Woman engaged in fortune-telling", "Wisewoman, witch"], ["howitzer", "An artillery cannon that fires curved fire", "Heavy cannon with short barrel"], ["combust", "Fuel in the broadest sense of the word", "Material that emits heat during its combustion"], ["glazing", "Coating on the surface of a ceramic product", "Dense sugar syrup used as covering for bakery products"], ["dictation", "Type of written task used in learning a language", "Writing words as dictated"], ["housekeeper", "The one who runs the house", "The one who is engaged in housekeeping"], ["kindness", "Responsiveness; affection for people", "The desire to do good to others"], ["one", "A digit representing the number 1", "Number equal to 1"], ["bishop", "The highest priestly rank", "A person who is entitled to a third degree of priesthood"], ["eparchy", "An area in the Christian church", "An administrative-territorial unit headed by the bishop"], ["blackberry", "Spiny shrub with edible black berries", "Berry, which is somewhat similar in form to raspberry"], ["sympathy", "Compassion, condolence", "Sadness, regret"], ["gelatine", "Mixture of albumenous substances of animal origin", "Joiner's (bone) glue, colorless or yellowish"], ["stallion", "The male horse", "Stud"], ["waistcoat", "Short men's clothing without collar and sleeves", "Part of a classic three-piece suit"], ["riddle", "An image or expression that needs to be solved", "Charade or rebus to be solved"], ["remark", "A sign made on anything", "Short entry"], ["zoo", "Zoological garden", "An institution for keeping animals for demonstration"], ["flack cannon", "Anti-aircraft gun", "Anti-aircraft cannon"], ["ideologist", "Voicer and defender of some ideology", "The head of some ideology"], ["idyll", "Peaceful, happy and harmonious existence", "Tranquil Life"], ["emerald", "Gemstone of bright green color", "A variety of mineral with a saturated green color"], ["history", "Reality in its development, movement", "The science of the development of society and nature"], ["cavalier", "A person awarded an order", "A male partner in dancing"], ["munchkin", "Playful name of a young child", "Thick, plump baby"], ["kangaroo", "Australian marsupial", "Jumping purse-bearing animal"], ["collapse", "The process of destruction of any structure under the influence of the crisis", "Heavy crisis in the economy and social life of the country"], ["lavender", "Strongly odorous shrub with dark blue flowers", "Perennial plant in the form of a bush with blue flowers "], ["lambada", "Latin American passionate social dance", "Musical style and dance that first appeared in the north of Brazil"], ["lemonade", "Sweet soft drink of lemon juice", "Fruit carbonated water with lemon flavor"], ["fretwork", "Embossed ornaments on the facade and interior of buildings", "Sculptural decoration on the facade"], ["marathon", "Long distance running", "Multistage competition"], ["matrix", "Form or template for casting", "Template collection system"], ["melody", "A harmonious sequence of sounds", "Musical unity; tune"], ["hammer", "Small percussion instrument", "Tool to hammer nails"], ["award", "Special thanks; honorary sign", "Order, which celebrates someone's merits"], ["news", "Relevant information", "Recently received information"], ["scissors", "Two fastened blades used for cutting", "Tool consisting of two blades used for cutting"], ["charm", "Attractive force", "Property of a person that makes him/her attractive"], ["outskirts", "The outer edge, border, or margin", "Surrounding area; district"], ["pantheon", "Monumental building - burial place", "In Ancient Greece: a temple dedicated to all the gods"], ["papyrus", "Tropical herbaceous plant", "Material for writing in Ancient Egypt and other countries"], ["pianist", "A musician playing the piano or grandpiano", "Performer on piano"], ["position", "Location", "Point of view; opinion in any matter"], ["plain", "Even ground without mountains and hills, the surface of Earth", "Flat land surface"], ["resistor", "Device current and voltage management", "Device that regulates voltage and current"], ["tapemeasure", "Tool used to measure length", "Device for gambling"], ["solution", "Decision, sentence", "Conclusion, output"], ["scooter", "Two-wheel vehicle"], ["second", "Stopwatch measures them", "A unit of time equal to 1/60 of a minute"], ["silver", "Precious lustrous metal of grayish white color", "Popular bright metal"], ["fiddler", "Musician who plays the violin", "Violin player"], ["rigging", "Combination of all ship gears", "Armament of a separate mast"], ["notebook", "Stitched sheets of blank paper with the cover", "Object for note-making"], ["tragedy", "The tragic element in a literary, musical work", "Same as tragicalness"], ["motocrane", "Crane on the car", "Self-propelled loading and unloading machine"], ["activist", "Active worker", "Action boy; public figure"], ["squadron", "Military unit of several troups", "Formation; level of the hierarchy of the army"], ["gossipry", "Inexhaustible conversations; idle talk", "Silly, useless conversation"], ["buncher", "Transmission device between the engine and the drive"], ["helicopter", "Rotorcraft", "An aircrat that takes a vertical takeoff and landing"], ["hematoma", "Bruise", "Organic accumulation of blood in case of damage"], ["herbarium", "Collection of dried plants", "Collection of dried plants"], ["brisket", "Variety of meat from the breat", "Meat product from the brest"], ["nobleman", "A person belonging to the nobility", "Privileged class in feudal society"], ["range", "Total of sounds of different heights", "Interval of values ​​of any value"], ["director", "Head of the enterprise or institution", "Manager; Chief"], ["european", "Residents of Europe", "Natives of European peoples"], ["eugenics", "Doctrine about hereditary human health", "Doctrine of methods of influence on hereditary qualities"], ["nature", "The very essence; natural property", "Same as wildlife"], ["cannikin", "Box made of tin", "Slice of tin"], ["metalware", "Anything made of iron", "A piece of iron; iron object"], ["carabus", "Carnivorous night beetle", "Predatory insect from the family of beetles"], ["animal", "A living being with the ability to move and feel"], ["kerfuffle", "Complex confusing business", "Unrest, anxiety, rebellion, discontent, distemper"], ["banket", "Low embankment", "Made for insulation"], ["menagerie", "A place where animals are kept for display", "Wild animals kept in cages"], ["goldsmith", "Gold-worker", "Silversmith; jeweller; nightman"], ["monument", "Sculptural image; a statue", "Cut-out sculpture"], ["news", "Message about something", "Letter, message"], ["inflation", "Devaluation of money due to the increase in their quantity", "Increase in the general level of prices for goods and services"], ["hieroglyph", "Sign; ideogram", "Name of the written sign"], ["quibble", "Joke; comical phrase", "Literary device, a pun"], ["curvature", "Curve; crooked place", "Deviation of properties"], ["carousel", "Rotating device for circling", "A ride in a form of a rotating platform"], ["petal", "Leaf from the corolla of a flower", "Internal modified leaf"], ["logarithm", "Exponent to which a number should be raised", "Power to which the base is to be raised"], ["bulbous", "Body of garlic or onion", "Spherical church dome"], ["magnesia", "White powder, a magnesium oxide", "Special powder to treat athletes' hands"], ["manager", "Hired production manager; administrator", "Entry level boss"], ["billion", "A number equal to a thousand million", "One and nine zeros"], ["outline", "Hasty drawing", "Preliminary outline in general terms"], ["partner", "An employee performing his duties in tandem with another", "The one who works in pair"], ["pipistrelle", "Big bat", "A kind of evening bats"], ["daughter-in-law", "Son's wife"], ["monkey", "Closest to a human mammal by body structure", "Quadrumane mammals"], ["district", "Neighbourhood, area", "Station subdivition"], ["optimist", "A person full of optimism", "A person who sees good prospect in everything"], ["parmesan", "Italian hard cheese", "A sort of cheese"], ["paragraph", "The subdivision of the text within the chapter", "Fine division of the text"], ["nursery", "Plants or animals breeding place", "Place for growing plants or breeding animals"], ["jealousy", "A painful doubt in someone's fidelity", "Negative feeling in love"], ["rosemary", "Sort of apples", "Plant; culinary seasoning"], ["manuscript", "Original or copy of a hand-written text", "Hand-written text"], ["drawing", "A game that ends in a draw", "A joke to fool someone"], ["dumper", "Special truck equipped with a vessel"], ["sanskrit", "Literary language of Ancient India", "The language of traditional Indian culture"], ["serenade", "Song in honor of the beloved one", "Musical genre"], ["sympathy", "Internal favor towards someone", "Internal favor; attraction"], ["tablet", "Round brick of pressed medicinal powder", "Solid dosage form"], ["tetrahedron", "The simplest polyhedron", "Tetrahedron"], ["tribunal", "Emergency court, often military", "General military court"], ["partier", "The one who takes part in hangouts", "Party animal"], ["accent", "Putting additional stress on a syllable when saying a word", "Highlighting a word or a phrase with phonetic means"], ["packaging", "Material used for packing", "Items, materials and devices used for the safety of goods"], ["uniform", "Service dress", "Identical work garment"], ["student", "Pupil, Schoolboy", "The one who is trying to master a learning course"], ["flamenco", "South-Spanish folk music, song and dance", "Style of some Spanish songs and dances"], ["physiologist", "Scientist, expert in physiology", "A person who is engaged in physiology"], ["packer", "Worker engaged in packing", "Employee engaged in packing"], ["futurist", "Follower of Futurism", "Devotee of Futurism"]];
})(WordsEn || (WordsEn = {}));


/***/ }),

/***/ 229:
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
    WordsRu.data = [
        ["Азбука,Букварь,Глаголица,Алфавит", "Азы", "Неграмотность,Незнание,Невежество,Серость"],
        ["Активный,Деятельный,Энергичный,Энергический,Интенсивный,Инициативный", "Предприимчивый,Динамичный,Наступательный", "Пассивный,Бездеятельный,Неэнергичный,Безынициативный,Безучастный,Инертный,Вялый"],
        ["Актуальный,Насущный,Злободневный,Животрепещущий,Острый", "Назревший,Жгучий,Жизненный", "Неактуальный,Неважный,Второстепенный,Неуместный,Ненужный"],
        ["Аккорд,Трезвучие,Созвучие", "Строй,Гармония,Сочетание", "Дисгармония,Дисгармоничный,Нестройный,Несочетаемый"],
        ["Аккуратный,Прилежный,Точный,Исправный,Чистоплотный", "Опрятный,Пунктуальный,Скрупулезный,Тщательный", "Небрежный,Неряшливый,Неточный,Неопрятный,Разболтанный,Разгильдяйский,Безалаберный"],
        ["Азарт,Пыл,Жар,Задор,Запал,Раж", "Страсть,Пыл,Горячность,Возбуждение,Увлечение", "Безучастность,Безразличие,Апатия,Разочарование,Пассивность"],
        ["Аксессуар,Атрибут,Принадлежность,Примочка", "Деталь,Причиндалы", "Беспредметный,Не сопутствующий"],
        ["Активизировать,Оживить,Давать импульс,Влить,Внести", "Вносить,Оживотворять,Животворить", "Замедлить,Затормозить,Ослаблять,Смягчать,Замедлять,Умерять"],
        ["Анализ,Разбор,Рассмотрение,Разбиение", "Исследование,Разбирание", "Синтез,Объединение,Формирование,Обобщение"],
        ["Ангел,Архангел,Серафим,Херувим,Святой", "Ангелок,Посланник,Агнец", "Демон,Бес"],
        ["Акцентировать,Выделить,Подчеркнуть", "Оттенить,Расставлять акценты,Выпячивать", "Скрыть,Утаить,Умолчать,Задвигать,Прятать,Не выделять"],
        ["Арестовать,Взять,Забрать,Задержать,Схватить", "Сцапать,Зацапать,Посадить,Упечь", "Освободить,Отпустить,Отдать,Не держать,Возвратить,Выпустить"],
        ["Алиби,Оправдание,Отмаз,Отмазка,Довод", "Выгораживание,Обоснование,Обеление", "Осуждение,Обвинение,Очернение"],
        ["Аллергия,Болезнь,Нетерпимость,Заболевание", "Раздражение,Отек", "Здоровье,Безболезненность,Здравие,Игнорирование"],
        ["Алтарь,Жертвенник,Святилище,Костел,Часовня", "Храм,Церковь", "Лаборатория,Академия,Институт"],
        ["Алчный,Жадный,Ненасытный,Загребущий", "Корыстолюбивый,Расчетливый,Прижимистый,Скупой,Прожорливый,Обжорливый", "Бескорыстный,Великодушный,Благородный,Некорыстный,Щедрый"],
        ["Альтернатива,Дилемма,Задача,Выбор,Вопрос", "Одно из двух,Отбор,Подбор,Разбор,Альтернативность", "Конкретика,Не вариативный,Прямолинейный,Однообразие,Ограничение,Точный"],
        ["Альтернативный,Другой,Противоположный,Многовариантный", "Избирательный,Прочий,Иной,Разный", "Конкретный,Однообразный,Прямой,Безвариантный,Однозначный"],
        ["Альянс,Группа,Объединение,Коалиция,Союз", "Организация,Группировка,Содружество", "Разъединение, Разрозненность,Разделение"],
        ["Альтруистический,Альтруистичный,Человеколюбивый,Бескорыстный", "Приветливый,Гуманистический,Человеческий,Добрый,Филантропический,Гуманный", "Эгоистический,Мизантропический,Человеконенавистный,Негуманный"],
        ["Амбиция,Гордость,Высокомерие,Чванство", "Самомнение,Надменность,Спесь,Самолюбие,Спесивость,Честолюбие", "Смирение,Скромность,Кротость,Безропотность,Сдерживание"],
        ["Ампутировать,Отнимать,Отнять,Отрезать,Оттяпывать", "Отхватить,Отделять,Откромсать,Срезать,Обрезать,Усекать", "Объединить,Соединить,Добавить,Связать"],
        ["Амурный,Любовный,Сердечный,Романтический", "Альковный,Заботливый,Ласковый,Нежный,Теплый", "Беспечный,Бессердечный,Приземленный,Отстраненный,Безразличный"],
        ["Анонимный,Неизвестный,Неподписанный,Безымянный", "Подметный,Неназванный,Без подписи,Неведомый", "Публичный,Раскрытый,Открытый,Известный,Именной"],
        ["Античность,Древность,Классика,Старина", "Старь,Прошлое,Стародавность,Старинушка", "Современность,Настоящее,Сегодня,Будущее "],
        ["Античный,Древний,Классический,Ортодоксальный", "Рухлядь,Прошлый,Стародавний", "Современный,Будущий,Сегодняшний"],
        ["Апатия,Бездеятельность,Апатичность,Лень,Вялость", "Пассивность,Праздность,Равнодушие,Безразличие,Холодность", "Воодушевление,Заинтересованность,Подъем,Увлечение,Энтузиазм"],
        ["Аплодировать,Плескать,Рукоплескать,Овации", "Хлопать,Бить в ладони", "Свистать,Освистывать"],
        ["Апартаменты,Комната,Квартира,Дом", "Жилище,Обиталище,Горница,Опочивальня,Каморка", "Нежилой,Пустынный,Безлюдный,Пустой,Опустелый"],
        ["Аппетитный,Вкусный,Лакомый,Смачный,Притягательный,Манящий", "Деликатесный,Аппетитненький,Привлекательный,Ужорный,Пикантный", "Горький,Невкусный,Противный,Неаппетитный,Несъедобный,Безвкусный"],
        ["Арбитр,Судья,Рефери,Блюститель", "Страж,Махало,Суперарбитр", "Подсудимый,Осужденный,Подчиненный,Приговоренный,Обвиняемый"],
        ["Аргументировать,Доказывать,Обосновывать,Доводить", "Давать обоснование,Утверждать,Подвести", "Опровергать,Отрицать,Отвергать,Не признавать"],
        ["Арендовать,Снять,Снимать,Напрокат", "Заарендовать,Нанимать,Заимствовать", "Сдавать,Не принимать,Не брать,Не получать"],
        ["Ароматичный,Пахучий,Ароматный,Благоуханный", "Душистый,Благовонный,Благоухающий,Духмяный", "Зловонный,Смрадный,Вонючий,Смердящий,Токсичный"],
        ["Артистичный,Умелый,Виртуозный,Мастерский", "Искусный,Театральный,Грамотный", "Неумелый,Неискусный,Безыскусный,Примитивный,Однообразный"],
        ["Ас,Мастер,Виртуоз,Умелец,Специалист", "Мастак,Дока", "Невежда,Бездарь,Бездарность,Неумеха,Профан"],
        ["Ассоциативный,Сочетательный,Схожий,Похожий", "Соединяющий,Комбинационный", "Непохожий,Разрозненный,Несходный,Своеобразный,Разобщенный,Раздельный"],
        ["Ассистировать,Поддерживать,Помогать,Подсобить,Содействовать", "Сотрудничать,Пособничать,Выручать", "Нападать,Обвинять,Конкурировать,Соперничать,Противоборствовать"],
        ["Атавизм,Архаизм,Пережиток, Анахронизм", "Реверсия, ", "Неологизм,Новшество,Инновация,Актуальный,Современный"],
        ["Атлет,Богатырь,Спортсмен,Силач", "Качок,Гиревик,Штангист", "Слабак,Тюфяк,Хиляк,Дохляк,Слюнтяй,Рохля"],
        ["Атлетический,Спортивный,Богатырский,Сильный", "Мощный,Крепкий,Ловкий", "Неспортивный,Слабый,Бессильный,Вялый,Астенический"],
        ["Атаковать,Нападать,Напасть,Штурмовать", "Пойти приступом,Ударить,Воевать,Поднять меч", "Контратаковать,Отражать,Охранять,Ограждать,Предохранить,Обороняться,Защищаться"],
        ["Аттестовать,Высказаться,Оценить,Отозваться,Характеризовать", "Выставлять,Рекомендовать,Квалифицировать", "Не аттестовать,Не допустить,Порицать,Не квалифицировать"],
        ["Аудитория,Помещение,Комната", "Слушатели", "Пустынный,Безлюдный,Неявка,Отсутствие"],
        ["Афишировать,Показывать,Оповещать,Демонстрировать", "Выставлять,Рекламировать,Объявлять", "Скрывать,Умалчивать,Молчать,Замалчивать,Недоговаривать,Утаивать"],
        ["Афера,Мошенничество,Надувательство,Шулерство", "Жульничество,Обман,Плутовство,Сделка", "Честность,Порядочность,Истина,Правда"],
        ["Абордаж,Столкновение,Сцепка,Захват", "Наступление,Штурм, Сцепиться  ", "Отступление,Уклонение,Отход,Бегство"],
        ["Аномалия,Отклонение,Неправильность,Анормальность", "Болезненность,Патология,Уродливость,Дефективность", "Норма,Норматив,Естественность,Нормальность,Адекватность,Обычность,Типичность"],
        ["Абрис,Контур,Очертания,Очерк", "Силуэт,Изображение,Описание,Зарисовка", "Детализация,Конкретизация,Заполненность,Законченность"],
        ["Абсцесс,Нарыв,Язва,Гнойник", "Скопление,Нагноение", "Чистота,Гигиена,Стерильность"],
        ["Авангард,Прогрессивный,Передовой", "Течение,Концептуализм", "Хвост,Пятки,Отсталый,Отставание"],
        ["Аврал,Спешка,Гонка,Запарка", "Поспешность,Горячка,Работа", "Привольность,Разгрузка,Вольность,Медлительность,Спокойствие"],
        ["Автоген,Сварка,Резка,Порезка", "Гравирование,Электросварка", "Размыкание,Рассоединение,Демонтаж,Разборка,Разделение"],
        ["Агитация,Подстрекательство,Побуждение,Подбивание", "Подзадоривание,Подговаривать,Науськивание", "Разубеждать,Разубеждение,Отклонять,Разуверять,Отсоветовать"],
        ["Агония,Умирание,Мучение,Страдание", "Мытарство,Боль,Мука,Пытка,Терзание", "Рождение,Наслаждение,Блаженство,Здоровье,Покой"],
        ["Аденоиды,Миндалины,Разрастания,Гланды", "Железа,Скопление", "Рассредоточение,Распределение"],
        ["Авторитаризм,Авторитарность,Дидактичность,Антидемократизм,Тоталитаризм", "Власть,Властный,Правление,Владычество,Господство", "Демократия,Народовластие,Подчинение,Безвластие,Повиновение,Покорность,Послушание,Безвольный"],
        ["Адъютант,Офицер,Поручик,Штабист", "Звание,Чин,Сотник", "Подчиненный,Подвластный,Подначальный"],
        ["Ажитация,Аффект,Нагнетание,Взволнованность,Горячность", "Трепет,Волнение,Смятение", "Спокойствие,Разрядка,Успокоение,Покой,Терпение,Хладнокровие"],
        ["Ажурный,Ювелирный,Кружевной,Искусный", "Филигранный,Сквозной,Решетчатый", "Грубый,Кустарный,Неумелый,Неквалифицированный"],
        ["Азимут,Угол,Дуга,Сгиб", "Меридиан,Полуденник,Экватор", "Прямая,Линия,Параллель"],
        ["Азарт,Пыл,Страсть,Задор", "Запал,Горячность", "Равнодушие,Терпеливость,Холодность"],
        ["Адепт,Последователь,Приверженец,Ученик", "Сторонник,Поборник", "Противник,Учитель,Воспитатель"],
        ["Академизм,Академичность,Умозрительность", "Книжность,Теоретичность", "Практичность"],
        ["Аккомодация,Приноровление,Приспособление", "Приспосабливание,Адаптация", "Отвыкание,Отучивание,Отвычка"],
        ["Аккомпанировать,Сопровождать,Сопутствовать,Подыгрывать", "Вторить,Подголосить,Подголоска", "Рассогласование,Рассинхронизация,Нестыковка,Несогласование"],
        ["Аксиома,Истина,Постулат,Правда", "Факт,Достоверность,Действительность", "Ложь,Вранье,Обман,Неправда,Заблуждение"],
        ["Аллегория,Иносказание,Иноречие,Инословие", "Околица,Преображение", "Просторечие "],
        ["Аляповатый,Некрасивый,Грубый,Простой,Грубоватый", "Неизящный,Безвкусный,Базарный", "Красивый,Искусный,Сложный,Виртуозный,Ажурный"],
        ["Амнистировать,Помиловать,Прощать,Простить", "Извинять,Даровать,Пощадить", "Осудить,Казнить,Приговорить,Заклеймить,Присудить"],
        ["Амнистия,Помилование,Прощение,Всепрощение", "Пощада,Отпущение,Милость,Отпускание", "Осуждение,Немилость,Казнь,Наказание"],
        ["Анархия,Безвластие,Беспорядок,Стихийность", "Неурядица,Безалаберщина,Неорганизованность", "Власть,Правление,Господство,Владычество,Диктатура"],
        ["Ангажировать,Пригласить,Приглашать,Нанять", "Позвать,Предложить,Вызвать", "Отказать,Отказывать,Забраковывать,Отозвать"],
        ["Анклав,Территория,Земля,Страна", "Владение,Регион,Местность", "Рассоединение,Распад,Размыкание,Отсоединенный"],
        ["Аннотация,Изложение,Резюме,Реферат", "Конспект,Содержание,Обзор,Изъяснение", "Преувеличение"],
        ["Антагонист,Враг,Противник,Соперник,Недруг", "Противоположность,Конкурент,Недоброжелатель,Неприятель", "Герой,Союзник,Друг,Сторонник,Соратник,Сопоставление,Дружественность,Союзничество "],
        ["Антикварный,Старинный,Ценный,Древний", "Архаичный,Античный,Драгоценный", "Современный,Новый,Актуальный,Дешевый"],
        ["Антипатия,Отвращение,Неприязнь,Недружелюбие", "Враждебность,Безразличие,Неприязненность,Нелюбовь", "Принятие,Симпатия,Дружелюбие,Дружелюбность,Благосклонность "],
        ["Апатичный,Вялый,Апатический,Равнодушный", "Бесчувственный,Нечувствительный,Индифферентный", "Активный,Чувственный,Стремительный,Отзывчивый,Неравнодушный,Добрый,Душевный"],
        ["Апеллировать,Обратиться,Воззвать,Обжаловать,Обращаться", "Просить,Жаловаться,Взывать", "Промолчать,Игнорировать"],
        ["Апогей,Разгар,Венец,Верх", "Зенит,Кульминация,Вершина", "Спад,Низина,Минимум,Стагнация,Регресс,Убывание "],
        [",Восприятие,Понимание, Апперцепция ", "Ощущения,Оценка,Уяснение,Мировосприятие", "Непонимание,Бесчувствие "],
        ["Аристократизм,Рыцарство,Утонченность,Изысканность", "Изящество,Породистость,Знатность", "Безызвестность,Неизвестность,Безымянность,Непритязательность"],
        ["Аристократический,Знатный,Изысканный,Утонченный", "Рафинированный,Изощренный", "Неизвестный,Незнаменитый,Непопулярный,Незнаемый,Неприхотливый"],
        ["Артистизм,Артистичность,Мастерство,Виртуозность", "Искусство,Искусность", "Безыскусность,Простота,Примитивность,Незамысловатость"],
        ["Архаичный,Архаический,Устаревший,Устарелый", "Допотопный,Старомодный,Ископаемый", "Актуальный,Новейший,Новый,Современный,Модный"],
        ["Аскет,Подвижник,Монах,Послушник", "Юродивый,Отшельник", "Отступник,Еретик,Отщепенец,Попятчик"],
        ["Аспект,Мнение,Предположение,Представление", "Рассуждение,Суждение,Взгляд,Понятие", "Безыдейный,Пустой"],
        ["Ассимилировать,Уподоблять,Усваивать,Сопоставлять", "Объединять,Отожествлять", "Разделить,Не усваивать,Нетождественный "],
        ["Афоризм,Пословица,Изречение,Мысль", " Перенесение,Высказывание", "Молчание,Безмолвие,Метафора"],
        ["Атрофия,Исхудание,Упадок,Притупление", "Омертвление,Усыхание,Отощание", "Подъем,Расцвет,Процветание,Расцветание "],
        ["Ахинея,Вздор,Нелепость,Околесица", "Абсурд,Чертовщина,Дребедень", "Реальность,Реалистичность,Действительность,Истинность,Очевидность,Предметность,Явь"],
        ["Багаж,Поклажа,Кладь,Вещи,Груз", "Ноша,Запас,Имущество,Шмотье,Шмотки,Барахло", "Банкротство"],
        ["Багровый,Багряный,Пурпурный", "Пурпуровый,Кровавый,Вишневый", "Белый"],
        ["Балерина,Танцовщица,Танцорка,Балетчица", "Фигурантка,Прима", "Танцор"],
        ["Балетный,Хореографический,Танцевальный", "Плясовой", "Неподвижный,Статичный,Покой"],
        ["Баловать,Нянчиться,Трястись,Разнеживать", "Избаловать,Дурачиться", "Стращать,Грозить,Придирчивость,Суровость,Грубость"],
        ["Банальный,Избитый,Стандартный,Затасканный,Затрепанный,Стереотипный", "Заношенный,Поношенный,Трафаретный,Шаблонный,Штампованный", "Удивительный,Нестандартный,Выдающийся,Необыкновенный,Уникальный,Особенный"],
        ["Бегло,Проворно,Скоро,Свободно,Неглубоко", "Неосновательно,Мельком,Эскизно", "Медленно,Растянуто,Неспешно,Замедленно,Нерасторопно"],
        ["Бедность,Нужда,Нищета,Нищенство,Скудность", "Беднота,Босота,Малообеспеченность,Убогость,Безденежье", "Богатство,Роскошь,Обеспеченность,Зажиточность"],
        ["Бежать,Нестись,Мчаться,Лететь,Трусить,Шпарить", "Передвигаться,Побежать,Помчаться", "Идти,Стоять,Ползти,Медлить,Замереть"],
        ["Безветрие,Штиль,Затишье,Тишь", "Безветренность,Маловетренность,Безветрица ", "Ветреность,Ураган,Буря"],
        ["Безвластие,Анархия,Бессилие", "Безначалие", "Власть,Руководство,Могущество,Господство"],
        ["Безвозвратный,Невозвратный,Невозвратимый,Безотдаточный", "Утраченный,Безобратный,Бесповоротный", "Возвратимый,Воротить,Вернуть"],
        ["Безграничный,Бесконечный,Беспредельный,Бескрайний", "Бескрайный,Безбрежный,Необъятный,Необозримый,Неоглядный", "Ограниченный,Крайний,Конечный,Предельный,Лимитированный"],
        ["Безгрешный,Непогрешимый,Непорочный,Целомудренный", "Святой,Безукоризненный,Честный,Неиспорченный", "Грешный,Греховный,Нечестивый,Подлец,Подлый,Бесчестный"],
        ["Бездарный,Неталантливый,Бесталанный,Неспособный,Бессильный", "Бездарь,Недаровитый", "Даровитый,Талантливый,Одаренный,Способный "],
        ["Бездельник,Тунеядец,Трутень,Захребетник", "Лодырь, Разгильдяй, Лежебока", "Труженик,Работяга,Трудящийся,Делец"],
        ["Бездна,Пропасть,Пучина,Глубь", "Омут,Глубина", "Поверхность,Наружность"],
        ["Бездушный,Бессердечный,Бесчувственный,Черствый,Беспощадный", "Сухой,Холодный,Каменный,Безжалостный,Жестокий", "Чуткий,Отзывчивый,Внимательный,Участливый,Эмпативный,Эмоциональный,Душевный"],
        ["Беззастенчивый,Бесцеремонный,Беспардонный,Бесстыжий,Бессовестный", "Дерзкий,Развязный,Наглый,Бесстыдный", "Робкий,Зажатый,Несмелый,Малодушный,Стыдливый,Оробелый,Безгласный"],
        ["Безнадзорный,Беспризорный,Заброшенный", "Запущенный", "Под надзором,Наблюдаемый,Наглядный"],
        ["Безнравственный,Аморальный,Порочный,Растленный", "Беспутный,Распутный,Развратный,Греховный", "Нравственный,Целомудренный,Этический,Моральный,Поучительный"],
        ["Безопасный,Безобидный,Предохранительный,Надежный,Прочный", "Устойчивый,Неопасный,Безвредный,Защищенный,Невредный", "Опасный,Вредный,Рискованный,Незащищенный,Ненадежный,Подозрительный,Обидный"],
        ["Безукоризненный,Безупречный,Идеальный,Незапятнанный,Безошибочный", "Безгрешный,Беспорочный,Непорочный,Идеальный", "Испорченный,Несовершенный,Запятнанный,Порочный"],
        ["Безуспешный,Напрасный,Безрезультатный,Бесплодный,Тщетный", "Провальный,Проваленный,", "Успешный,Удачный,Благополучный,Удачливый,Небезуспешный"],
        ["Безысходный,Беспросветный,Безнадежный,Безвыходный", "Обреченный,Отчаянный", "Надежный,Многогранный,Вариативный"],
        ["Белоручка,Барин,Чистоплюй,Барыня", "Барышня,Чистоплюйка,Ротозей,Ротозейка", "Трудолюб,Крестьянка,Крестьянин,Трудоголик,Работяга"],
        ["Белый,Белоснежный,Снежный,Меловой,Молочный", "Сахарный,Седой,Белесый,Чистый,Бледный", "Черный,Грязный,Ночной,Кофейный"],
        ["Бередить,Растравлять,Затрагивать,Растравливать", "Беспокоить,Раздражать,Вередить", "Успокаивать,Не трогать,Унимать,Умиротворять,Усмирять"],
        ["Бережливый,Экономичный,Расчетливый,Хозяйственный,Бережный", "Экономный,Заботливый,Прижимистый", "Расточительный,Небережливый,Неэкономный,Щедрый"],
        ["Бесконечный,Нескончаемый,Безграничный,Безмерный", "Неиссякающий,Постоянный,Неистощимый", "Конечный,Предельный,Ограниченный,Размерный "],
        ["Беспамятство,Обморок,Забывчивость,Беспамятность", "Забытье,Бесчувствие,Забвенье", "Ясность,Осознанность,Отчетливость,Внятность,Выразительность"],
        ["Бесплатный,Даровой,Безвозмездный", "Халявный,Безгонорарный", "Платный,Небесплатный,Оплачиваемый,Одноплатный"],
        ["Беспокоиться,Волноваться,Тревожиться,Переживать,Нервничать", "Болеть,Будоражиться,Ажитировать", "Спокойствие,Успокаиваться,Униматься,Затихать"],
        ["Бесполезный,Ненужный,Лишний,Никчемный", "Пропащий,Безрезультатный,Бесплодный", "Полезный,Нужный,Результативный,Плодотворный,Благотворный,Выгодный"],
        ["Беспорядок,Путаница,Неразбериха,Сумбур", "Хаос,Бедлам,Бардак,Беспредел", "Порядок,Организованность,Регламент,Налаженность,Режим,Распределение"],
        ["Беспримерный,Беспрецедентный,Невиданный,Необыкновенный", "Небывалый,Бесподобный,Неслыханный", "Банальный,Обычный,Бывалый,Обыкновенный"],
        ["Беспристрастный,Объективный,Правосудный,Справедливый ", "Нелицеприятный,Непредвзятый", "Пристрастный,Необъективный,Предвзятый,Несправедливый"],
        ["Бессознательный,Неосознанный,Безотчетный,Подсознательный", "Интуитивный,Инстинктивный", "Осознанный,Сознательный,Отчетный,Намеренный,Осмысленный"],
        ["Бесспорный,Неоспоримый,Неопровержимый,Непререкаемый", "Непреложный,Отчетливый,Безусловный", "Оспоримый,Спорный,Сомнительный,Дискуссионный"],
        ["Бессрочный,Пожизненный,Вечный,Бесконечный", "Бессменный,Беспеременный", "Быстротечный,Непродолжительный,Краткий,Скоропроходящий"],
        ["Бестактный,Нетактичный,Некорректный,Неприличный", "Неделикатный,Неблаговоспитанный", "Тактичный,Корректный,Приличный,Деликатный"],
        ["Библиотека,Книгохранилище,Читальня,Библиотечка", "Книжница,Дворец книги", "Магазин,Кинотеатр,Обсерватория"],
        ["Биография,Автобиография,Жизнеописание,Воспоминания,Мемуары", "Житье,Сказание,Прошлое", "Сегодняшнее,Настоящие,Повествование"],
        ["Бить,Избивать,Колотить,Лупить,Молотить", "Ударять, Стучать,  ,Шлепать,", "Гладить,Поглаживать,Приласкать,Ласкать,Миловать,Нежить"],
        ["Благодарный,Признательный,Обязанный", "Благодарственный,Покаянный", "Неблагодарный,Непризнательный,Необязательный"],
        ["Благотворитель,Спонсор,Филантроп,Меценат", "Покровитель,Поощритель,Жертвователь,Благодетель", "Мизантроп,Нелюдим,Ненавистник,Обидчик"],
        ["Блестеть,Блистать,Сверкать,Искриться", "Лучиться,Звездиться,Сиять,Светиться", "Тускнуть,Тускнеть,Меркнуть,Блекнуть,Темнеть,Жухнуть,Чернеть"],
        ["Блестящий,Глянцевитый,Лоснящийся,Атласный", "Глянцевый,Яркий,Атласистый", "Померкший,Потухший,Померклый,Затухающий,Погасший,Угасающий,Угасший"],
        ["Близко,Вблизи,Возле,Рядом,Подле", "Впритык,Впритирку,Впритирочку,Недалеко,Поблизости", "Далеко,Вдали,Вдалеке,Вдаль,Неблизко,Отдаленно,Далековато"],
        ["Бог,Господь,Творец,Создатель,Всевышний", "Вседержитель,Зиждитель,Спаситель", "Мефистофель,Бес,Лукавый"],
        ["Богатство,Изобилие,Состояние,Достаток", "Роскошь,Шик,Пышность,Обилие", "Бедность,Беднота,Недостаточность,Убогость,Нищета,Скудость"],
        ["Богатырь,Силач,Геркулес,Атлет", "Витязь", "Слабак,Хилый,Хиляк,Дохляк,Мямля "],
        ["Богородица,Богоматерь,Пресвятая", "Пречистая,Мадонна", "Нечестивая,Нечистая"],
        ["Боевой,Военный,Бранный,Ратный", "Бойкий,Воинственный,Огневой", "Гражданский,Мирный,Бесконфликтный,Безмятежный,Умиротворенный,Миролюбивый"],
        ["Боец,Солдат,Воин,Вояка", "Армеец,Воитель", "Гражданин,Мирный,Житель"],
        ["Бой,Сражение,Битва,Схватка,Стычка", "Побоище,Акция,Баталия,Дело,", "Перемирие,Мир,Оборона,Защита"],
        ["Болезнь,Недуг,Заболевание,Недомогание,Нездоровье", "Немощь,Хворь,Немочь,Хворость", "Здоровье,Безболезненность,Выздоровление,Поправка,Оздоровление,Излечение"],
        ["Болото,Трясина,Топь,Болотина", "Зыбун,Блато,Солончак,Торфяник", "Земля,Почва,Грунт,Берег"],
        ["Болтун,Пустомеля,Пустослов, ", "Звонарь, Балабон", "Молчун,Молчаливый,Неговорливый,Тихоня,Безмолвник"],
        ["Больница,Клиника,Лечебница,Лазарет", "Санчасть,Госпиталь,Амбулатория,Горбольница,Поликлиника", "Отель,Гостиница,Пансион,Пансионат"],
        ["Больной,Нездоровый,Хворый,Болящий", "Недужный,Болезненный,Недугующий,Немощный", "Здоровый,Здравый,Выносливый,Сильный,Крепкий,Толковый"],
        ["Большой,Крупный,Значительный,Немалый,Обширный,Изрядный,Огромный,Гигантский", "Солидный,Хороший,Знатный,Крупный,Внушительный", "Маленький,Мелкий,Невысокий"],
        ["Борьба,Противоборство,Конфронтация", "Борение", "Мир,Подчинение,Соглашательство,Союзничество"],
        ["Бояться,Страшиться,Трусить,Ужасаться,Побаиваться,Пугаться", "Опасаться,Робеть,Струхнуть, Испугаться,Затрепетать", "Отваживаться,Рисковать,Сметь,Смелость"],
        ["Брак,Супружество,Женитьба,Замужество", "Союз,Окольцовка,Бракосочетание", "Развод,Расхождение,Разлука,Расторжение "],
        ["Бремя,Гнет,Тяжесть,Груз,Тягость", "Давление,Обуза,Забота,Тяготы", "Свобода,Легкость,Равнодушие"],
        ["Бродить,Блуждать,Слоняться,Шататься", "Болтаться,Скитаться,Плестись,Мотаться,Бродяжничать", "Стоять,Замереть"],
        ["Бродяга,Скиталец,Побродяга,Шатун", "Босяк,Оборванец", "Домашний,Семейный,Домовой,Домочадец,Домосед,Прирученный,Семейный"],
        ["Бросать,Кидать,Метать,Швырять", "Забрасывать,Запускать,Отбрасывать", "Ловить,Принимать,Получать,Поймать,Улавливать"],
        ["Броситься,Кинуться,Устремиться,Ринуться,Рвануться", "Метнуться,Шарахнуться,Пуститься", "Отпрянуть,Отскочить,Отодвинуться,Шарахнуться,Отпрыгнуть"],
        ["Бугристый,Бугорчатый,Шишковатый,Бугорковатый,Неровный", "Холмообразный,Холмистый,Бугористый", "Гладкий,Ровный,Отшлифованный,Приглаженный,Плоский"],
        ["Будущее,Будущность,Грядущее,Перспектива", "Судьба,Завтра,Предстоящее", "Прошлое,История,Былое,Вчера,Пережитое"],
        ["Буква,Литера,Письмена", "Клинопись,Руны,Знак", "Звук,Гудение,Лязг"],
        ["Буквальный,Дословный,Текстуальный,Литеральный", "Подстрочный,Точный", "Неточный,Ошибочный,Примерный,Неверный,Ложный"],
        ["Буря,Ураган,Шторм,Шквал", "Циклон,Штормяга,Пурга,Буран,Тайфун", "Покой,Спокойствие,Тишина,Штиль"],
        ["Быстро,Скоро,Стремительно,Мгновенно,Моментально", "Молниеносно,Стремглав,Опрометью,Мигом,Разом", "Медленно,Медлительно,Нерасторопно,Протяжно,Замедленно,Неторопливо"],
        ["Оберегать,Беречь,Ограждать,Защищать,Уберегать", "Сохранять,Сберегать,Избавлять", "Губить,Удалять,Не беречь"],
        ["Обещать,Клятва,Обет,Обещалка,Зарекаться", "Зарок,Божба,Посул", "Отказ,Отлуп,Бойкот"],
        ["Обледенелый,Оледенелый,Обмерзлый,Оледеневший", "Льдистый,Замерзший", "Растаявший,Талый,Обогретый,Отогретый,Горелый,Нагретый "],
        ["Облик,Лицо,Лик,Физиономия", "Обличие,Внешность,Личина", "Внутренность,Нутро,Чрево"],
        ["Обломок,Осколок", "Кусок,Часть", "Целое,Система"],
        ["Обмануть,Провести,Надуть,Облапошить,Объегорить", "Обморочить,Обхитрить,Околпачить,Солгать", "Раскрыть,Оправдывать"],
        ["Обнять,Приобнять,Прижать,Обвить", "Облапить,Охватить", "Отдалиться,Отпустить,Оттолкнуть"],
        ["Обследовать,Исследовать,Осмотреть,Освидетельствовать", "Осмотреть,Проверять,Осматривать", "Не смотреть,Не исследовать"],
        ["Общаться,Водиться,Знаться,Якшаться", "Беседовать,Хороводить, Болтать,  Разговаривать ", "Молчать,Не разговаривать,Враждовать"],
        ["Общий,Всеобщий,Поголовный,Повальный", "Глобальный,Тотальный,Совокупный", "Частный,Детальный,Точный,Доскональный,Специальный"],
        ["Обыкновенный,Обычный,Обыденный,Повседневный", "Будничный,Обиходный,Заурядный,Дюжинный", "Необыкновенный,Уникальный,Удивительный,Незаурядный"],
        ["Обычай,Привычка,Традиция,Обряд,Уклад", "Обыкновение,Манера,Повадка,Замашка, ", "Отвычка,Отвыкание,Спонтанность"],
        ["Обычный,Обыкновенный,Всегдашний", "Простой,Очередной,Заурядный", "Сложный,Необычный,Незаурядный,Уникальный"],
        ["Обязательно,Непременно,Неукоснительно,Беспременно", "Всенепременно,Неупустительно", "Необязательно,Свободно,Добровольно,Факультативно"],
        ["Огонь,Пламя,Пламень", "Полымя", "Вода,Лед"],
        ["Одежда,Платье,Одежа,Одеяние", "Облачение,Наряд,Костюм", "Нагота,Обнаженность,Голь,Оголенность "],
        ["Опозорить,Обесчестить,Обесславить,Опорочить", "Осрамить,Запятнать", "Восстановить,Облагородить"],
        ["Опытный,Искушенный,Многоопытный,Наторелый", "Матерый,Хваткий,Прожженный,Ушлый", "Неопытный,Незрелый,Зеленый,Начинающий,Неискушенный"],
        ["Особенный,Особый,Необыкновенный,Необычайный", "Необычный,Недюжинный,Незаурядный,Оригинальный", "Простой,Обычный,Неисключительный,Неспецифический"],
        ["Отказываться,Отрекаться,Открещиваться,Отрешаться,Отказаться", "Отречься,Отнекиваться", "Соглашаться,Согласиться,Договориться,Уславливаться"],
        ["Откровенно,Чистосердечно,Открыто,Прямо", "Начистоту,Напрямик", "Закрыто,Лживо,Неискренне,Обманчиво"],
        ["Отличный,Превосходный,Прекрасный,Великолепный", "Замечательный,Первоклассный,Идеальный", "Плохой,Плохенький,Дрянной,Негодный"],
        ["Характер,Нрав,Натура,Норов,Темперамент", "Фасон,Тип", "Бесхарактерность,Непостоянный,Безличный,Мягкотелый,Нехарактерный"],
        ["Хвастаться,Хвастать,Хвалиться,Похваляться", "Бахвальство, Рисоваться, Самохвальство ,Пыжиться", "Скромничать,Деликатничать,Тулиться "],
        ["Хвалить,Восхвалять,Выхвалять,Расхваливать,Славить", "Выхваливать,Прославлять,Нахваливать", "Ругать,Порицать,Хулить,Бранить,Корить,Бичевать,Наказывать"],
        ["Хитрить,Лукавить,Изворачиваться,Лавировать,Вилять", "Темнить,Ловчить,Химичить", "Доверять,Полагаться,Обелить"],
        ["Хитрый,Лукавый,Жуликоватый,Плутоватый,Шельмоватый", "Ушлый,Дошлый,Продувной", "Честный,Простодушный,Доверчивый,Простой,Правдивый,Беспорочный"],
        ["Хозяин,Владелец,Собственник,Обладатель", "Владетель,Домохозяин", "Гость,Съемщик,Квартирант,Жилец,Постоялец,Неимущий "],
        ["Хотеть,Желать,Жаждать, Стремиться", "Зариться,Изволить,Позариться", "Слабодушие,Абулия,Безвольность"],
        ["Устойчивый,Постоянный,Неизменный,Стабильный", "Статический,Статичный,Константный", "Неустойчивый,Непостоянный,Лабильный,Изменчивый"],
        ["Работать,Трудиться,Вкладывать,Ишачить", "Горбатиться,Корпеть", "Лентяйничать,Бездельничать,Отдыхать,Лодырничать,Лоботрясничать,Филонить"],
        ["Развлечение,Забава,Затея,Увеселение", "Утеха,Потеха", "Уныние,Тоска,Скука,Печаль,Грусть"],
        ["Вместе,Совместно,Воедино,Сообща,Вкупе", "Гурьбой,Купно,Заодно", "Врозь,Раздельно,Отдельно,Порознь,Вразнобой"],
        ["Вспыхивать,Разражаться,Взрываться,Зарождаться,Разгораться", "Пылать,Вскипать", "Гаснуть,Угасать,Погасать,Замирать,Затихать"],
        ["Встречать,Встреча,Встретить,Встречаться,Натыкаться,Наскочить", "Набрести,Наталкиваться", "Провожать,Проводы,Проводить,Прощаться,Отправлять"],
        ["Гордость,Амбиции,Высокомерность,Надменность", "Высокомерие,Спесивость", "Смирение,Укрощение,Обуздание,Кроткость,Кротость"],
        ["Идеалист,Романтик,Мечтатель", "Теоретик", "Материалист,Реалист,Прагматик"],
        ["Мобилизация,Призыв,Привлечение", "Клич", "Демобилизация,Увольнение"],
        ["Обвинять,Винить,Обвинить,Упрекать", "Осуждать", "Оправдывать,Оправдать,Выгораживать,Прощать"],
        ["Предок,Праотец,Прародитель,Прадед", "Родоначальник,Тотем", "Потомок,Отродье, ,Отпрыск"],
        ["Прилив,Приток", "Наплыв", "Отлив,Утечка,Слив"],
        ["Голод,Глад,Голодание,Недостаток,Голодуха", "Бесхлебица,Голодовка,Недоедание", "Сытость,Насыщение,Жор"],
        ["Ум,Разум,Мыслить,Сметка", "Гений,Рассудок,Рассудительность,Интеллект", "Сердце,Чувство,Душа,Эмоция"]
    ];
})(WordsRu || (WordsRu = {}));


/***/ })

});
//# sourceMappingURL=0.bundle.js.map