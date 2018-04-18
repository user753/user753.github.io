webpackJsonpNewGames([2],{

/***/ 132:
/*!***********************************************!*\
  !*** ./src/games/polyglot/wordmaster/meta.ts ***!
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_polyglot_wordmaster_images__ = __webpack_require__(/*! games/polyglot/wordmaster/images */ 176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__levels__ = __webpack_require__(/*! ./levels */ 233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logic__ = __webpack_require__(/*! ./logic */ 234);







var gameId = "wordmaster";
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
var metaData = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_1_games_polyglot_common_commonMeta__["a" /* metaData */], { gameId: gameId, title: "WordMaster", logic: __WEBPACK_IMPORTED_MODULE_6__logic__["a" /* Logic */], 
    // selectLocale: true,
    images: __WEBPACK_IMPORTED_MODULE_3_games_polyglot_wordmaster_images__["b" /* Images */].data, component: __WEBPACK_IMPORTED_MODULE_4__components_mainComponent__["a" /* MainComponent */], tutorialTaskCount: 2, atlasCount: 4, sounds: __WEBPACK_IMPORTED_MODULE_2_games_polyglot_common_wordsSounds__["a" /* WordsSounds */].keys, scoreOptions: scoreOptions,
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

/***/ 176:
/*!*************************************************!*\
  !*** ./src/games/polyglot/wordmaster/images.ts ***!
  \*************************************************/
/*! exports provided: Colors, Images */
/*! exports used: Colors, Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_games_polyglot_common_wordImages__ = __webpack_require__(/*! games/polyglot/common/wordImages */ 141);

var Colors;
(function (Colors) {
    Colors.panel = 0x174917;
})(Colors || (Colors = {}));
var Images;
(function (Images) {
    Images.type_keyboard = "type_keyboard";
    Images.type_chert = "type_chert";
    Images.sprites = __WEBPACK_IMPORTED_MODULE_0_games_polyglot_common_wordImages__["a" /* WordImages */].sprites.concat([
        Images.type_keyboard,
        Images.type_chert
    ]);
    Images.data = { sprites: Images.sprites };
})(Images || (Images = {}));


/***/ }),

/***/ 230:
/*!*******************************************************************!*\
  !*** ./src/games/polyglot/wordmaster/components/mainComponent.ts ***!
  \*******************************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services__ = __webpack_require__(/*! core/services */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_textPanelComponent__ = __webpack_require__(/*! core/ui/components/games/textPanelComponent */ 146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/tutorialTextComponent */ 142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_polyglot_common_components_baseWordMainComponent__ = __webpack_require__(/*! games/polyglot/common/components/baseWordMainComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_games_polyglot_wordmaster_components_typeWriterComponent__ = __webpack_require__(/*! games/polyglot/wordmaster/components/typeWriterComponent */ 231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_polyglot_wordmaster_images__ = __webpack_require__(/*! games/polyglot/wordmaster/images */ 176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_games_polyglot_wordmaster_translations__ = __webpack_require__(/*! games/polyglot/wordmaster/translations */ 232);










var positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
    descY: 200,
    wordWidth: { width: 900, height: 120 }
});
var positionsPortrait = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].update(positions, {
    descY: 150,
    wordWidth: { width: 640, height: 120 }
});
var getPositions = function () { return __WEBPACK_IMPORTED_MODULE_5_core_ui_services_instances__["d" /* screenSizeService */].isPortrait ? positionsPortrait : positions; };
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainComponent.prototype.onInit = function () {
        this.hintComponent.show = false;
        this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].update(this.positions, {
            tutorial: { y: 40 },
            mainGroup: { y: 180 },
            wordlistOffset: { x: 0, y: (this.isTutorial && __WEBPACK_IMPORTED_MODULE_5_core_ui_services_instances__["d" /* screenSizeService */].isPortrait) ? -140 : 0 }
        });
        this.positionsPortrait = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].update(this.positionsPortrait, {
            tutorial: { y: 20 },
            mainGroup: { y: 190 },
            wordList: [__WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2, 900],
            typewriter: [650, 190],
        });
        this.typewriter = this.mainGroup.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_7_games_polyglot_wordmaster_components_typeWriterComponent__["a" /* TypeWriterComponent */]))
            .setPos(this.getPositions().typewriter);
        _super.prototype.onInit.call(this);
        this.textPanel = this.mainGroup.add(new __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_textPanelComponent__["a" /* TextPanelComponent */]({ size: getPositions().wordWidth, color: __WEBPACK_IMPORTED_MODULE_8_games_polyglot_wordmaster_images__["a" /* Colors */].panel }))
            .updatePos(__WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].w2, getPositions().descY).anchorCenter();
    };
    MainComponent.prototype.createTutorial = function () {
        return this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_tutorialTextComponent__["a" /* TutorialTextComponent */])).make({ panel: { color: __WEBPACK_IMPORTED_MODULE_8_games_polyglot_wordmaster_images__["a" /* Colors */].panel } });
    };
    MainComponent.prototype.onNewTask = function (task) {
        this.task = task;
        this.textPanel.setProps(this.task.desc);
        this.renderTask([task.anagramma.word], [task.anagramma]);
        if (this.tutorial) {
            this.bringToTop(this.tutorial);
            var key = task.isHide ? __WEBPACK_IMPORTED_MODULE_9_games_polyglot_wordmaster_translations__["a" /* Translations */].title2 : __WEBPACK_IMPORTED_MODULE_9_games_polyglot_wordmaster_translations__["a" /* Translations */].title1;
            this.tutorial.setProps(__WEBPACK_IMPORTED_MODULE_1_core_services__["f" /* translationService */].getTranslation(key));
        }
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_6_games_polyglot_common_components_baseWordMainComponent__["a" /* BaseWordMainComponent */]));



/***/ }),

/***/ 231:
/*!*************************************************************************!*\
  !*** ./src/games/polyglot/wordmaster/components/typeWriterComponent.ts ***!
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images__ = __webpack_require__(/*! ../images */ 176);






var positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
    keyboardY: 540
});
var durations = {
    animation: 500
};
var TypeWriterComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TypeWriterComponent, _super);
    function TypeWriterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeWriterComponent.prototype.onInit = function () {
        var _this = this;
        this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].update(this.positions, {
            text: Object(__WEBPACK_IMPORTED_MODULE_3_core_utils_tuples__["a" /* tuple */])(380, 285),
            maxWordWidth: 420,
            handsY: 470
        });
        _super.prototype.onInit.call(this);
        this.keyboard = this.addImage([__WEBPACK_IMPORTED_MODULE_5__images__["b" /* Images */].type_keyboard, [this.height / 2, positions.keyboardY]])
            .anchorCenter().fluentUpdate(function (x) {
            x.symmetricScale = 0;
            x.alpha = 0;
        });
        this.addHands();
        this.context.uiService.mainComponent.onIntroComplete.addOnce(function () { return _this.animationKeyboard(); });
    };
    TypeWriterComponent.prototype.animationKeyboard = function () {
        __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.keyboard,
            to: {
                symmetricScale: 1,
                alpha: 1
            },
            easing: Phaser.Easing.Sinusoidal.InOut,
            duration: durations.animation
        });
    };
    return TypeWriterComponent;
}(__WEBPACK_IMPORTED_MODULE_4_games_polyglot_common_components_baseTypewriterComponent__["a" /* BaseTypeWriterComponent */]));



/***/ }),

/***/ 232:
/*!*******************************************************!*\
  !*** ./src/games/polyglot/wordmaster/translations.ts ***!
  \*******************************************************/
/*! exports provided: Translations */
/*! exports used: Translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Translations; });
var Translations;
(function (Translations) {
    Translations.title1 = "title1";
    Translations.title2 = "title2";
})(Translations || (Translations = {}));


/***/ }),

/***/ 233:
/*!*************************************************!*\
  !*** ./src/games/polyglot/wordmaster/levels.ts ***!
  \*************************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


function level(wordLength, modify) {
    if (modify === void 0) { modify = []; }
    return { wordLength: wordLength, modify: modify };
}
var lengthList = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](5, 9);
var modifyList = [[], ["hide"]];
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])([level(4)].concat(__WEBPACK_IMPORTED_MODULE_1_lodash__["flatMap"](lengthList, (function (l) { return modifyList.map(function (m) { return level(l, m); }); }))));


/***/ }),

/***/ 234:
/*!************************************************!*\
  !*** ./src/games/polyglot/wordmaster/logic.ts ***!
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_strings__ = __webpack_require__(/*! core/utils/strings */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_polyglot_wordmaster_words__ = __webpack_require__(/*! games/polyglot/wordmaster/words */ 235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);








var letters = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_3_core_utils_index__["e" /* RandomGenerator */]();
        _this.uniqSeq = new __WEBPACK_IMPORTED_MODULE_2_core_utils_circleSeq__["b" /* UniqSeq */](10);
        _this.index = 0;
        _this.items = __WEBPACK_IMPORTED_MODULE_6_games_polyglot_wordmaster_words__["a" /* AnagrammaWords */].items(_this.gameData.settings.custom.locale);
        return _this;
    }
    Logic.prototype.createAnagramma = function (word) {
        return {
            anagramma: this.rng.derangementString(word),
            word: word
        };
    };
    Logic.prototype.addRandomLetter = function (anagramma) {
        var index = this.rng.int(anagramma.length);
        return __WEBPACK_IMPORTED_MODULE_4_core_utils_strings__["a" /* Strings */].insert(anagramma, this.rng.sample(letters, anagramma.split("")), index);
    };
    Logic.prototype.modify = function (type, anagramma) {
        switch (type) {
            case "hide": {
                var firstLetter_1 = anagramma.word[0];
                var firstWordIndex = anagramma.anagramma.split("").map(function (l, i) { return Object(__WEBPACK_IMPORTED_MODULE_5_core_utils_tuples__["a" /* tuple */])(l, i); })
                    .filter(function (_a) {
                    var l = _a[0], i = _a[1];
                    return l == firstLetter_1;
                })
                    .map(function (x) { return x[1]; });
                var hideIndex = this.rng.uniqArray(anagramma.word.length, 1, 0, firstWordIndex);
                return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, anagramma, { hideIndex: hideIndex });
            }
            case "extra":
                return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, anagramma, { anagramma: this.addRandomLetter(anagramma.anagramma) });
        }
    };
    Logic.prototype.nextTask = function (level) {
        var _this = this;
        var words = this.items[level.wordLength];
        var _a = this.uniqSeq.nextFrom(words), word = _a[0], descriptions = _a.slice(1);
        var desc = this.rng.sample(descriptions);
        var modify = this.isTutorial && this.index > 0 ? ["hide"] : level.modify;
        var anagramma = modify.reduce(function (a, x) { return _this.modify(x, a); }, this.createAnagramma(word));
        var answers = { seq: word.split("").map(function (x) { return x + "0"; }) };
        var isHide = __WEBPACK_IMPORTED_MODULE_7_lodash__["includes"](modify, "hide");
        var task = {
            anagramma: anagramma,
            desc: desc,
            isHide: isHide,
            answers: answers
        };
        this.index += 1;
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_types_gameLogic__["a" /* GameLogic */]));



/***/ }),

/***/ 235:
/*!************************************************!*\
  !*** ./src/games/polyglot/wordmaster/words.ts ***!
  \************************************************/
/*! exports provided: AnagrammaWords */
/*! exports used: AnagrammaWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnagrammaWords; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_games_polyglot_wordmaster_wordsEn__ = __webpack_require__(/*! games/polyglot/wordmaster/wordsEn */ 236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordmaster_wordsRu__ = __webpack_require__(/*! games/polyglot/wordmaster/wordsRu */ 237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_utils_localeUtl__ = __webpack_require__(/*! games/utils/localeUtl */ 165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);




var AnagrammaWords;
(function (AnagrammaWords) {
    var localeData = {
        ru: __WEBPACK_IMPORTED_MODULE_1_games_polyglot_wordmaster_wordsRu__["a" /* WordsRu */].data,
        en: __WEBPACK_IMPORTED_MODULE_0_games_polyglot_wordmaster_wordsEn__["a" /* WordsEn */].data
    };
    AnagrammaWords.items = function (locale) {
        var data = __WEBPACK_IMPORTED_MODULE_2_games_utils_localeUtl__["a" /* LocaleUtl */].getData(localeData, locale)
            .filter(function (x) { return x[0].indexOf(" ") < 0; })
            .map(function (_a) {
            var head = _a[0], tail = _a.slice(1);
            return [head].concat((tail.filter(function (x) { return x != ""; })));
        });
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["groupBy"](data, function (x) { return x[0].length; });
    };
})(AnagrammaWords || (AnagrammaWords = {}));


/***/ }),

/***/ 236:
/*!**************************************************!*\
  !*** ./src/games/polyglot/wordmaster/wordsEn.ts ***!
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

/***/ 237:
/*!**************************************************!*\
  !*** ./src/games/polyglot/wordmaster/wordsRu.ts ***!
  \**************************************************/
/*! exports provided: WordsRu */
/*! exports used: WordsRu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsRu; });
var WordsRu;
(function (WordsRu) {
    WordsRu.data = [
        ["вода", "Прозрачная бесцветная жидкость", "Напиток для утоления жажды"],
        ["баня", "Помещение для мытья человека", "Парильня"],
        ["бред", "Бессвязная речь; Заболевание", "Бессмысленное, вздорное, несвязное."],
        ["бриз", "Береговой ветер", "Дует с моря"],
        ["брод", "Мелкое место реки", "Удобное место для перехода в воде"],
        ["брат", "Близкий родственник", "Товарищ, единомышленник"],
        ["мост", "Сооружение для перехода", "Железобетонная или деревянная конструкция"],
        ["конь", "Скакун, жеребец", "Непарнокопытное животное"],
        ["авто", "Транспортное средство", "На нем перевозят пассажиров и грузы"],
        ["алоэ", "Лекарственное растение", "Применяется в народной медицине"],
        ["аист", "Перелетная птица", "Длинноногая птица с длинным прямым клювом"],
        ["вата", "Вещество из хлопка или шерсти", "Используется в санитарии и для утепления одежды, жилищ и пр."],
        ["вена", "Кровеносный сосуд", "Часть сердечно-сосудистой системы"],
        ["воск", "Вещество, вырабатываемое пчелами", "Из этого делают свечи"],
        ["вдох", "Получение воздуха легкими", "Физиологический процесс"],
        ["глаз", "Орган зрения", "Оптическая система человека"],
        ["гипс", "Известковое минеральное вещество", "Хирургическая повязка"],
        ["гимн", "Символ государственного единства", "Торжественная песня; Хвалебная песня"],
        ["груз", "Тяжесть; Тяжелый предмет", "Объект, товар принимаемый для перевозки"],
        ["дань", "Подать с населения или налог", "Денежный побор"],
        ["долг", "Обязательство, обязанность", "Денежная задолженность"],
        ["друг", "Тот, кто связан с кем-то дружбой", "Приятель не разлей вода"],
        ["доза", "Определенное количество чего-то", "Порция, мера, часть"],
        ["жанр", "Род произведений в области искусства", "Манера, стиль, сюжетный признак"],
        ["жезл", "Короткая палка с украшениями", "Служит символом власти и почета"],
        ["жало", "Орган защиты и нападения у пчел, ос", "Острие; шип"],
        ["заяц", "Небольшой зверек с длинными ушами", "Быстрый и прыгучий"],
        ["звон", "Звук, производимый ударами", "Звук, что издает колокол"],
        ["зола", "Остаток сжигания", "Серо-черная пыль"],
        ["икра", "Яйца рыб и моллюсков"],
        ["изюм", "Сушеные ягоды винограда", "Сухофрукт"],
        ["итог", "Общая сумма", "Подвести к результату"],
        ["кадр", "Отдельный снимок", "Сцена на кинопленке"],
        ["киви", "Тропический плод", "Экзотический фрукт"],
        ["клан", "Родовая община", "Группировка, связанная тесными отношениями"],
        ["лавр", "Южное вечнозеленое растение", "Душистые листья; пряность"],
        ["лист", "Наружный орган растения", "В ботанике; фотосинтез"],
        ["лупа", "Увеличительное стекло", "Инструмент сыщика"],
        ["мама", "Женщина-родитель", "Один из родителей ребенка"],
        ["мгла", "Непрозрачный воздух", "Атмосферное явление; помутнение воздуха"],
        ["море", "Часть океана; большое водное пространство", "Пляж; берег; прибой; бриз"],
        ["небо", "Видимая над землей атмосфера", "Голубой свод; облака"],
        ["ниша", "Углубление в стене для украшений, статуй и пр.", "Архитектурное сооружение"],
        ["нота", "Изображение звука", "Текст музыки"],
        ["обед", "Прием пищи в середине дня", "Полдень; еда"],
        ["обоз", "Группа повозок", "Совокупность перевозочных средств"],
        ["овал", "Геометрическая фигура", "Очертание определенной формы"],
        ["перо", "Пух; пернатые", "Птица; крыло"],
        ["плот", "Скрепленные бревна для сплава", "Конструкция для плавания"],
        ["раса", "Общность; группа человечества", "Сложившийся ряд признаков"],
        ["ранг", "Разряд, степень, звание, чин", "Категория; класс"],
        ["руна", "Древняя письменность", "Знаки, символы; древний алфавит"],
        ["сейф", "Несгораемый шкаф", "Помещение в банке для хранения ценностей"],
        ["свая", "Бревно, брус, забитый в грунт", "Железобетонный стержень"],
        ["сила", "Физическая энергия", "Способность живых существ"],
        ["табу", "Запрет на что-либо", "Система специфических запретов"],
        ["танк", "Боевая машина", "Пушечное вооружение; гусеничный ход"],
        ["удод", "Птица с пестрым оперением", "Тропическая птица"],
        ["толк", "Смысл", "Разумное содержание"],
        ["утюг", "Прибор для глаженья ткани", "Нагревающийся металлический прибор"],
        ["узор", "Гармоничный и красивый рисунок", "Сочетание линий, красок и тени"],
        ["фарт", "Удача", "Успешность"],
        ["фунт", "Мера веса", "Денежная единица"],
        ["хлыщ", "Франт", "Модный и пустой молодой человек"],
        ["хрящ", "Соединительная ткань в организме", "Часть кости"],
        ["хром", "Химический элемент", "Блестящий металл"],
        ["цинк", "Ковкий металл", "Жизненно важный микроэлемент"],
        ["цикл", "Совокупность явлений и процессов", "Кругооборот в течение известного периода"],
        ["цвет", "Световой фон", "Характеристика оптического диапазона"],
        ["чума", "Эпидемия", "Острозаразная болезнь"],
        ["часы", "Измерение времени", "Прибор для определения времени"],
        ["чудо", "Нечто небывалое; сверхъестественное", "Поразительное, выдающееся, удивительное"],
        ["штык", "Колющее оружие", "Клинок, насаживаемый на ружье"],
        ["штаб", "Руководящий орган", "Генеральное здание"],
        ["шарм", "Очарование, обаяние", "Привлекательные черты"],
        ["актив", "Деятельная часть организации", "Ресурсы контролируемые компанией"],
        ["аллюр", "Способ хода, бега лошади", "Шаг; рысь; галоп"],
        ["анион", "Отрицательно заряженная частица", "Атом; молекула; ион"],
        ["банан", "Тропическое растение", "Сладкий мучнистый плод"],
        ["батон", "Белый хлеб", "Хлебобулочное изделие"],
        ["вакса", "Черная мазь для чистки обуви", "Гуталин"],
        ["весна", "Время года", "Пробуждение природы"],
        ["ворон", "Большая птица с черным оперением", "Птица, символизирующая пророчество"],
        ["гамма", "Последовательный ряд звуков", "Последовательный ряд однородных элементов"],
        ["грипп", "Инфекционное заболевание", "Простуда"],
        ["дамба", "Гидротехническое сооружение", "Предохранения от затопления водой"],
        ["диада", "Множество; текучесть", "Двойственность"],
        ["егерь", "Охотник-профессионал", "Лесничий"],
        ["жерло", "Узкое и глубокое отверстие", "Вертикальный канал"],
        ["жетон", "Металлический кружок, значок", "Условный знак чего-нибудь"],
        ["забег", "Состязание в беге", "Спорт; кросс; спринт"],
        ["заказ", "Поручение на изготовление чего-нибудь", "Заказанный предмет"],
        ["зарок", "Клятвенное обещание", "Клятва; присяга; заклятие"],
        ["ирбис", "Снежный барс", "Крупное хищное животное"],
        ["исток", "Водный источник", "Река, ручей; первоисточник"],
        ["игрок", "Участник игры", "Тот, кто играет"],
        ["кабан", "Дикая свинья", "Вепрь; хряк; лесная свинья"],
        ["кагор", "Сорт красного вина", "Вино некрепленое и сухое"],
        ["кокон", "Оболочка, в которой гусеница", "Скорлупа, которой окружают себя насекомые"],
        ["лампа", "Осветительный или нагревательный прибор", "Искусственный источник света"],
        ["лиана", "Южное вьющееся или цепкое растение", "Цепкая часть растения"],
        ["лилия", "Красивый цветок в виде колокола", "Луковичный многолетник"],
        ["мотор", "Двигатель", "Движок; устройство внутреннего сгорания"],
        ["мятеж", "Вооруженное выступление; заговор", "Бунт против власти"],
        ["набат", "Удары в колокол", "Сигнал тревоги, бедствия, пожара и пр."],
        ["номер", "Порядковое число предмета в ряду других", "Знак; число; последовательность цифр"],
        ["орава", "Беспорядочное и шумное скопление людей", "Толпа; сборище; многочисленная группа"],
        ["пафос", "Страстное воодушевление", "Подъем; энтузиазм"],
        ["певец", "Тот, кто умеет петь", "Артист, занимающийся пением"],
        ["радар", "Радиолокационная установка", "Радиообнаружение и измерение дальности"],
        ["рысак", "Породистая рысистая лошадь", "Лошадь, способная к бегу рысью"],
        ["сахар", "Кристаллическое сладкое вещество", "Тростниковый; белый; рассыпчатый"],
        ["секта", "Религиозная община", "Братство, принявшее свое учение о вере"],
        ["селен", "Отходы серной кислоты", "Осадок серной кислоты"],
        ["тенор", "Высокий мужской голос", "Голос певца"],
        ["титул", "Почетное звание", "Привилегированное положение"],
        ["туфля", "Обувка, не выше щиколотки", "Каблук; обувь"],
        ["уксус", "Жидкость с резким кислым вкусом", "Острая приправа к пище"],
        ["успех", "Удача в достижении чего-то", "Общественное признание"],
        ["унция", "Мера аптекарского веса", "Единица измерения массы"],
        ["фиакр", "Наемный экипаж", "Городской экипаж на конной тяге"],
        ["фиала", "Жертвенная чаша", "Сосуд из стекла в Древней Греции"],
        ["фаска", "Отточенная сторона лезвия", "Скошенный край картона, стекла и пр."],
        ["хорда", "Осевой скелет", "Спинная струна у некоторых животных"],
        ["холст", "Льняная ткань", "Картина, писанная масляными красками"],
        ["хитин", "Органическое вещество", "Твердый наружный покров насекомых"],
        ["цевьё", "Стержень; стержневая часть чего-нибудь", "Верхняя часть оружия"],
        ["цыган", "Слой этнического населения", "Народность индийского происхождения"],
        ["циник", "Циничный человек", "Пренебрежительное отношение к нормам морали"],
        ["число", "Понятие количества; величина", "Количественная характеристика в математике"],
        ["чтиво", "Низкопробное, низкокачественное чтение", "Несерьезная и развлекательная литература"],
        ["чужак", "Пришлый, посторонний человек", "Чужеродный; чуждый; нездешний"],
        ["шабаш", "Субботний отдых", "Ночное сборище ведьм"],
        ["шпана", "Хулиганы; жулики", "Хулиганье; малолетние жулики"],
        ["шалаш", "Палатка из веток, соломы и т.п.", "Приют из подручных припасов"],
        ["яство", "Еда, кушанье", "Пища в жизни человека"],
        ["азбука", "То же, что букварь", "Совокупность букв, принятых в письменности"],
        ["альянс", "Союз; объединение", "Организация на основе обязательств"],
        ["анализ", "Метод научного исследования", "Всесторонний разбор, рассмотрение"],
        ["баланс", "Равновесие, уравновешивание", "Сводка денежных приходов и расходов"],
        ["барбос", "Большая дворовая собака", "Беспородная собака"],
        ["беруши", "Затычки для ушей", "Защита ушей от шума"],
        ["борода", "Волосяной покров на нижней части лица", "Внешний признак мужественности"],
        ["валюта", "Тип денежной системы", "Национальные, иностранные и международные деньги"],
        ["вассал", "Подчиненное, зависимое лицо", "Подчиненный сеньора"],
        ["веяние", "То или иное направление", "Дуновение; поветрие"],
        ["волосы", "Ороговевшие придатки кожи", "Нитевидные придатки кожи"],
        ["гипноз", "Состояние, похожее на сон или полусон", "Способ внушения; суженное сознание"],
        ["гурьба", "Шумливая группа людей", "Большая шумная компания"],
        ["группа", "Совокупность людей (или предметов), животных, профессий", "Общность, с близкими признаками"],
        ["данаец", "Древнейшее название греческих племен", "Название греков осаждающих Трою."],
        ["депеша", "То же, что телеграмма", "Спешное дипломатическое уведомление"],
        ["деяние", "Действие, поступок", "Сознательно-волевое действие"],
        ["ералаш", "Беспорядок, путаница", "Сумятица"],
        ["ехидна", "Животное покрытое иглами и шерстью", "Полуженщина-полузмея в греческой мифологии"],
        ["ерунда", "Вздор, пустяки, чепуха", "Нелепость, чушь."],
        ["жасмин", "Садовый кустарник с белыми цветками", "Род вечнозеленых кустарников; благоухает"],
        ["жадина", "Скупердяй, скряга", "Скупец и жмот"],
        ["жемчуг", "Твердое вещество, образующееся в раковинах моллюсков", "Белого цвета; драгоценное украшение"],
        ["зеница", "Глаз, зрачок", "Устаревшее название зрачка глаза"],
        ["звонок", "Металлический колокольчик для оповещения", "Прибор для звуковых сигналов"],
        ["звезда", "Огромный светящийся газовый шар", "Наше Солнце"],
        ["зрение", "Способность видеть", "Физиологический процесс восприятия за счет глаз"],
        ["изотоп", "Атом одного и того же химического элемента", "Разновидность атомов, с одинаковым числом протонов"],
        ["импорт", "Ввоз из-за границы", "Перемещение, перевоз иностранных товаров и услуг"],
        ["имбирь", "Пряность из корневища", "Подают в азиатской кухне"],
        ["истина", "Отражение действительности; правда", "Утверждение, суждение проверенное практикой"],
        ["капкан", "Приспособление для ловли зверей", "Ловушка для животных и птиц"],
        ["капрал", "Младший командир в армиях некоторых стран", "Воинское звание"],
        ["каучук", "Сырье для выработки резины", "Упругое вещество из млечного сока некоторых растений"],
        ["клапан", "Деталь в механизме; род крышки", "Закрывает проход пару, газу или жидкости"],
        ["лавина", "Массы снега, снежных глыб, идущих с гор", "То, что движется стремительно, массой"],
        ["лампасы", "Просветы контрастного цвета на брюках офицеров", "Цветная нашивка по шву брюк"],
        ["лорнет", "Складные очки в оправе с ручкой", "Разновидность очков; пара линз в оправе"],
        ["магнит", "Притягивает железные и стальные предметы", "Это тело, которое умеет притягивать железо"],
        ["массив", "Основная, наиболее высокая часть горной местности", "Большое пространство, однородное по географическим признакам"],
        ["мерило", "Признак измерения, оценка, сравнение", "То, что служит мерой, основание для оценки"],
        ["минога", "Водное позвоночное животное с змеевидным телом", "Низшие позвоночные животные; круглоротые"],
        ["ноздря", "Одно из парных наружных отверстий носа", "Носовая дырка; носовой канал"],
        ["натиск", "Сильный напор; настойчивое движение чего-либо", "Напряженное движение"],
        ["неделя", "Единица исчисления времени, равная семи дням", "От понедельника до воскресенья включительно"],
        ["одеяло", "Постельная принадлежность для покрывания тела", "То, чем можно укрыться"],
        ["окорок", "Часть туши; бедро", "Самая верхняя часть задней ноги"],
        ["омонимы", "Слова, созвучное с другим, но отличающиеся по значению", "Слова одинаковые по звучанию, но разные по значению"],
        ["отклик", "Ответ на зов, на обращение", "Тот или иной ответ на что-либо"],
        ["павиан", "Обезьяна с удлиненной мордой", "Узконосая обезьяна с собакообразной мордой"],
        ["панама", "Летняя широкополая соломенная или матерчатая шляпа", "Головной убор; легкая шляпа"],
        ["пелена", "Сплошной покров", "То, что закрывает, заволакивает со всех сторон"],
        ["радиан", "Градусная мера угла", "Угловая мера"],
        ["рапира", "Колющее холодное оружие", "Четырехгранный клинок в фехтовании"],
        ["резерв", "Запас, откуда черпаются новые силы, ресурсы", "Запас чего-либо на случай надобности"],
        ["сиеста", "Самое жаркое время дня", "Полуденный отдых"],
        ["сказка", "Народно-поэтическое произведение о вымышленных героях", "Повествовательное произведение устного народного творчества"],
        ["тайник", "Помещение, служащее тайным убежищем", "Хранилище; место для тайного хранения"],
        ["термин", "Слово или словосочетание; название определенного понятия", "Слово, обозначающее понятие"],
        ["тамбур", "Проходное пространство между дверями", "Небольшое помещение между входными и выходными дверьми"],
        ["абразив", "Твердое вещество для шлифовки и полировки металлов", "Материал, применяемый в обработке камня, стекла и т.д."],
        ["автобус", "Многоместный автомобиль для перевозки пассажиров", "Вид общественного наземного городского транспорта"],
        ["аксакал", "Старейшина, почтенный человек", "Глава рода, почтенный пожилой мужчина"],
        ["аксиома", "Положение, принимаемое без доказательств", "То, что не требует доказательств"],
        ["бабочка", "Насекомое с двумя парами покрытых пыльцой крыльев", "Полевое насекомое из разряда чешуекрылых"],
        ["бастион", "Крепостное или полевое военное укрепление", "Пятистороннее долговременное укрепление"],
        ["бенефис", "Спектакль в честь одного из участников", "Сбор с какого-либо представления в пользу артиста"],
        ["бисквит", "Сорт легкого сдобного печенья", "Кондитерское тесто и кондитерский «хлеб»"],
        ["вариант", "Видоизменение; разновидность", "Разновидность, вариация, версия"],
        ["визитка", "Карточка с контактной информацией о человеке", "Часть имиджа, формирующая впечатление о человеке"],
        ["веселье", "Беззаботно-радостное настроение", "Приподнятое настроение; готовность юморить"],
        ["восторг", "Большой подъем чувств; восхищение", "Радостное чувство упоения"],
        ["гадалка", "Женщина, занимающаяся гаданием", "Предсказательница, ведунья"],
        ["гаубица", "Артиллерийское орудие, стреляющее навесным огнем", "Тяжелая пушка с коротким стволом"],
        ["горючее", "Топливо в широком смысле слова", "Материал, выделяющий при своем сгорании тепло"],
        ["глазурь", "Покрытие на поверхности керамического изделия", "Густой сахарный сироп, покрывающий мучные изделия"],
        ["диктант", "Вид письменной работы при изучения языка", "Написание слов под диктовку"],
        ["домовод", "Тот, кто управляет домом", "Тот, кто занимается домашним хозяйством"],
        ["доброта", "Отзывчивость; душевное расположение к людям", "Стремление делать добро другим"],
        ["единица", "Цифра, изображающая число 1", "Число равное 1"],
        ["епископ", "Лицо высшего священнического сана", "Лицо, имеющее третью степень священства"],
        ["епархия", "Удел; область в христианской церкви", "Административно-территориальная единица во главе с епископом"],
        ["ежевика", "Колючий кустарник со съедобными черными ягодами", "Ягода, которая чем-то схожа с малиной по форме"],
        ["жалость", "Сострадание, соболезнование", "Печаль, сожаление"],
        ["желатин", "Смесь белковых веществ животного происхождения", "Столярный (костный) клей, бесцветный или желтоватый"],
        ["жеребец", "Самец лошади", "Конь"],
        ["жилетка", "Короткая мужская одежда без воротника и рукавов", "Составная часть классического костюма тройки"],
        ["загадка", "Изображение или выражение, нуждающееся в разгадке", "Шарада или ребус, которые нужно решить"],
        ["заметка", "Знак, сделанный на чем-нибудь", "Краткая запись"],
        ["зоопарк", "Зоологический парк", "Учреждение для содержания животных для демонстрации"],
        ["зенитка", "Зенитное орудие", "Зенитная пушка"],
        ["идеолог", "Выразитель и защитник идеологии", "Руководитель какого-нибудь идеологического направления"],
        ["идиллия", "Мирное, счастливое и гармоничное существование", "Безмятежная жизнь"],
        ["изумруд", "Драгоценный камень ярко-зеленного цвета", "Разновидность минерала с насыщенным зеленым цветом"],
        ["история", "Действительность в ее развитии, движении", "Наука о развитии общества и природы"],
        ["кавалер", "Человек, награжденный орденом", "Мужчина, танцующий в паре с дамой"],
        ["карапуз", "Шутливое название маленького ребенка", "Толстый, пухлый малыш"],
        ["кенгуру", "Австралийское сумчатое млекопитающее", "Прыгающее животное с сумкой на животе"],
        ["коллапс", "Процесс разрушения какой-либо структуры под влиянием кризиса", "Тяжелый кризис в экономике и социальной жизни страны"],
        ["лаванда", "Сильно пахучий полукустарник с темно-синими цветками", "Многолетнее растение в виде кустарника с синими цветами "],
        ["ламбада", "Латиноамериканский экспрессивный парный танец", "Музыкальный стиль и танец, возникший на севере Бразилии"],
        ["лимонад", "Сладкий прохладительный напиток из лимонного сока", "Фруктовая газированная вода со вкусом лимона"],
        ["лепнина", "Рельефные украшения на фасад и интерьер зданий", "Скульптурный декор на фасаде"],
        ["марафон", "Спортивный бег на длинную дистанцию", "Многоступенчатое соревнование"],
        ["матрица", "Форма, штамп для отливки литер", "Система набора шаблонов"],
        ["мелодия", "Благозвучная последовательность звуков", "Музыкальное единство; напев"],
        ["молоток", "Небольшой ударный инструмент", "То, чем забивают гвозди"],
        ["награда", "Особая благодарность; почетный знак", "Орден, которым отмечают чьи-нибудь заслуги"],
        ["новость", "Соответствующая действительности информация", "Недавно полученное известие"],
        ["ножницы", "Скрепленные два лезвия, для резания", "Инструмент из двух лезвий, для разрезания"],
        ["обаяние", "Очарование; притягательная сила", "Свойство человека, которое делает его привлекательным"],
        ["околица", "Изгородь вокруг всего селения", "Окружающая местность; округа"],
        ["пантеон", "Монументальное здание – место погребения", "У древних греков: храм, посвященный всем богам"],
        ["папирус", "Тропическое травянистое растение", "Материал для письма, у египтян и др. древних народов"],
        ["пианист", "Музыкант, играющий на пианино, рояле", "Исполнитель на фортепиано"],
        ["позиция", "Положение; расположение", "Точка зрения; мнение в каком-нибудь вопросе"],
        ["равнина", "Ровная без гор и холмов земная поверхность", "Ровный участок поверхности суши"],
        ["реостат", "Прибор для регулирования силы тока и его напряжения", "Прибор, регулирующий напряжение и ток"],
        ["рулетка", "Инструмент для измерения длины", "Устройство для азартной игры"],
        ["решение", "Постановление, приговор", "Заключение, вывод из чего-нибудь"],
        ["самокат", "Двухколесное средство передвижения"],
        ["секунда", "То, что измеряет секундомер", "Единица времени, равная 1/60 части минуты"],
        ["серебро", "Драгоценный блестящий металл серовато-белого цвета", "Востребованный белый металл"],
        ["скрипач", "Музыкант, играющий на скрипке", "Исполнитель музыки на скрипке"],
        ["такелаж", "Совокупность всех снастей судна", "Вооружение отдельной мачты"],
        ["тетрадь", "Сшитые листы чистой бумаги в обложке", "Предмет для произведения записей"],
        ["трагизм", "Трагический элемент в литературном, музыкальном произведении", "То же, что трагичность"],
        ["автокран", "Подъемный кран на автомобиле", "Самоходная погрузочно-разгрузочная машина"],
        ["активист", "Активный деятель коллектива", "Деятель; общественник"],
        ["батальон", "Войсковое подразделение из нескольких рот", "Формирование; ступень иерархии армии"],
        ["болтовня", "Бессодержательные разговоры; пустословие", "Глупый, никчемный разговор"],
        ["вариатор", "Передаточное устройство между двигателем и приводом"],
        ["вертолет", "Винтокрылый летательный аппарат", "Геликоптер; совершает вертикальный взлет и посадку"],
        ["гематома", "Синяк в простонародье", "Органическое скопление крови при повреждении"],
        ["гербарий", "Собрание засушенных растений", "Коллекция засушенных растений"],
        ["грудинка", "Сорт мяса из грудной части туши", "Мясной продукт из грудной части"],
        ["дворянин", "Лицо, принадлежащее к дворянству", "Привилегированное сословие в феодальном обществе"],
        ["диапазон", "Совокупность звуков разной высоты", "Интервал значений какой-либо величины"],
        ["директор", "Руководитель предприятия или учреждения", "Управляющий; начальник"],
        ["европеец", "Жители стран Европы", "Выходцы европейских народов"],
        ["евгеника", "Учение о наследственном здоровье человека", "Учение о методах влияния на наследственные качества"],
        ["естество", "Самая сущность; природное свойство", "То же, что природа"],
        ["жестянка", "Коробка из жести", "Кусочек жести"],
        ["железяка", "Что-либо, сделанное из железа", "Кусок железа; железный предмет"],
        ["жужелица", "Хищный ночной жук", "Хищное насекомое из семейства жуков"],
        ["животное", "Живое существо, обладающее способностью двигаться и чувствовать"],
        ["заваруха", "Сложное запутанное дело", "Волнения, беспокойства, беспорядки, недовольство, смута"],
        ["завалина", "Невысокая земляная насыпь", "Сделана для утепления"],
        ["зверинец", "Место, где содержат зверей для показа", "Собрание диких животных в клетках"],
        ["золотарь", "Золотых дел мастер", "Златокузнец; ювелир; ассенизатор"],
        ["изваяние", "Скульптурное изображение; статуя", "Вырезная фигура; скульптура"],
        ["известие", "Сообщение о чем-нибудь", "Письмо, сообщение, весть"],
        ["инфляция", "Обесценивание денег из-за увеличения их количества", "Повышение общего уровня цен на товары и услуги"],
        ["иероглиф", "Фигурный знак; идеограмма", "Название письменного знака"],
        ["каламбур", "Шутка; шуточные словосочетания", "Литературный прием игры слов"],
        ["кривизна", "Кривое; изогнутое место", "Отклонение свойств того или иного объекта"],
        ["карусель", "Вращающееся устройство для катания по кругу", "Аттракцион, представляющий собой вращающуюся платформу"],
        ["лепесток", "Листочек из венчика цветка", "Внутренний видоизмененный лист"],
        ["логарифм", "Показатель степени, в которую надо возвести число", "Степень, в которую надо возвести основание"],
        ["луковица", "Головка чеснока или лука", "Шаровидный церковный купол"],
        ["магнезия", "Белый порошок, представляющий собой окись магния", "Специальный порошок для обработки рук атлетов"],
        ["менеджер", "Наемный руководитель производства; администратор", "Руководитель начального уровня"],
        ["миллиард", "Число, равное тысяче миллионов", "Единица с девятью нулями"],
        ["набросок", "Беглый рисунок", "Предварительное изложение в общих чертах"],
        ["напарник", "Работник, исполняющий свои обязанности в паре с другим", "Тот, кто работает в паре"],
        ["нетопырь", "Крупная летучая мышь", "Род гладконосых летучих мышей"],
        ["невестка", "Жена брата или жена сына"],
        ["обезьяна", "Млекопитающее, наиболее близкое к человеку по строению тела", "Четверорукие млекопитающие"],
        ["околоток", "Соседняя местность; окрестность", "Подразделение участка"],
        ["оптимист", "Человек, полный оптимизма", "Человек, видящий во всем положительную перспективу"],
        ["пармезан", "Итальянский сыр твердых сортов", "Определенный вид сыра"],
        ["параграф", "Подразделение текста внутри главы", "Мелкое подразделение текста"],
        ["питомник", "Место разведения растений или животных", "Место выращивания животных или растений"],
        ["ревность", "Мучительное сомнение в чьей-либо неверности", "Негативное чувство в любви"],
        ["розмарин", "Сорт яблок", "Растение; кулинарная приправа"],
        ["рукопись", "Подлинник или копия текста, написанные от руки", "Текст, написанный от руки на бумаге"],
        ["розыгрыш", "Игра, окончившаяся вничью", "Шутка с целью кого-то одурачить"],
        ["самосвал", "Специальный грузовой автомобиль, оснащенный кузовом"],
        ["санскрит", "Литературный язык Древней Индии", "Язык традиционной индийской культуры"],
        ["серенада", "Песня в честь возлюбленной", "Род лирического музыкального произведения"],
        ["симпатия", "Внутреннее расположение к кому-нибудь", "Внутреннее расположение; влечение"],
        ["таблетка", "Круглая лепешечка из прессованного лекарственного порошка", "Твердая дозированная лекарственная форма"],
        ["тетраэдр", "Простейший многогранник", "Четырехгранник"],
        ["трибунал", "Чрезвычайный суд, нередко военный", "Суд общей юрисдикции, действующий в Вооруженных Силах"],
        ["тусовщик", "Тот, кто принимает участие в тусовках", "Завсегдатай сборищ или мероприятий"],
        ["ударение", "Выделение слога, слова силой голоса", "Выделение единицы речи с помощью фонетических средств"],
        ["упаковка", "Материал, которым пакуют", "Предметы, материалы и устройства для сохранности товара"],
        ["униформа", "Форменная одежда", "Одинаковая специальная одежда"],
        ["учащийся", "Ученик, студент", "Осваивающий учебный курс"],
        ["фламенко", "Южноиспанская народная музыка, песня и танец", "Стиль исполнения некоторых испанских песен и танцев"],
        ["физиолог", "Ученый, специалист по физиологии", "Человек, который занимается физиологией"],
        ["фасовщик", "Рабочий, занятый фасовкой", "Служащий, занятый фасовкой чего-нибудь"],
        ["футурист", "Последователь футуризма", "Приверженец футуризма"],
    ];
})(WordsRu || (WordsRu = {}));


/***/ })

});
//# sourceMappingURL=2.bundle.js.map