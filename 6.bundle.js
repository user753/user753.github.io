webpackJsonpNewGames([6],{

/***/ 128:
/*!**************************************!*\
  !*** ./src/games/compositor/meta.ts ***!
  \**************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_games_compositor_sounds__ = __webpack_require__(/*! games/compositor/sounds */ 181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images__ = __webpack_require__(/*! ./images */ 151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levels__ = __webpack_require__(/*! ./levels */ 202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logic__ = __webpack_require__(/*! ./logic */ 169);





var gameId = "compositor";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_3__levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 3, maxLevel: 100 }]
};
var metaData = {
    gameId: gameId,
    title: "Compositor",
    logic: __WEBPACK_IMPORTED_MODULE_4__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_2__images__["a" /* Images */].data,
    sounds: __WEBPACK_IMPORTED_MODULE_0_games_compositor_sounds__["a" /* Sounds */].keys,
    atlasCount: 2,
    tutorialTaskCount: 2,
    size: {
        width: 2048,
        height: 1280,
        heightMin: 1152
    }
};


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

/***/ 151:
/*!****************************************!*\
  !*** ./src/games/compositor/images.ts ***!
  \****************************************/
/*! exports provided: Images */
/*! exports used: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_assets_images__ = __webpack_require__(/*! core/assets/images */ 44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_compositor_logic__ = __webpack_require__(/*! games/compositor/logic */ 169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);




var Images;
(function (Images) {
    var earCount = 2;
    var eguazCount = 40;
    Images.sizes = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
        sound: { w: 125, h: 100 },
        sound_color: { w: 180, h: 180 },
        eguaz: { w: 34, h: 138 },
        eguazMargin: { m: 1, s: 2 }
    });
    Images.bg = "bg";
    Images.ear_main = "ear_main";
    var eguazKey = "eguaz";
    Images.panel = "panel";
    Images.fon = "fon";
    Images.button = "button";
    Images.play = "play";
    Images.answer_full = "answer_full";
    Images.answer_empty = "answer_empty";
    Images.sounds = "sound";
    Images.soundColors = "sound_color";
    function equaz(id) {
        return eguazKey + "_" + id;
    }
    Images.equaz = equaz;
    function sound(sound) {
        return Images.sounds + "_" + sound;
    }
    Images.sound = sound;
    function sound_color(sound) {
        return Images.soundColors + "_" + sound;
    }
    Images.sound_color = sound_color;
    function ear(id) {
        return "ear_" + id;
    }
    Images.ear = ear;
    Images.earList = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](earCount).map(ear);
    Images.soundList = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](__WEBPACK_IMPORTED_MODULE_2_games_compositor_logic__["b" /* soundCount */]).map(sound);
    Images.soundColorList = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](__WEBPACK_IMPORTED_MODULE_2_games_compositor_logic__["b" /* soundCount */]).map(sound_color);
    Images.equazList = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](eguazCount).map(equaz);
    Images.keys = [
        Images.bg,
        Images.ear_main,
        __WEBPACK_IMPORTED_MODULE_0_core_assets_images__["a" /* CoreImages */].answerCorrect,
        __WEBPACK_IMPORTED_MODULE_0_core_assets_images__["a" /* CoreImages */].answerWrong,
        Images.button,
        Images.panel,
        Images.play,
        Images.fon,
        Images.answer_full,
        Images.answer_empty
    ].concat(Images.earList, Images.soundList, Images.soundColorList, Images.equazList);
    Images.data = {
        sprites: Images.keys
    };
})(Images || (Images = {}));


/***/ }),

/***/ 169:
/*!***************************************!*\
  !*** ./src/games/compositor/logic.ts ***!
  \***************************************/
/*! exports provided: soundCount, Logic */
/*! exports used: Logic, soundCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return soundCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils__ = __webpack_require__(/*! core/utils */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_arrays__ = __webpack_require__(/*! core/utils/arrays */ 32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);






var soundCount = 12;
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_2_core_utils__["e" /* RandomGenerator */]();
        _this.uniqSeq = new __WEBPACK_IMPORTED_MODULE_4_core_utils_circleSeq__["b" /* UniqSeq */](soundCount, _this.rng);
        return _this;
    }
    Logic.prototype.addDuplicate = function (sounds) {
        var index = this.rng.int(sounds.length);
        var possibleSounds = sounds.filter(function (x, i) { return i != index && i != index - 1; });
        return __WEBPACK_IMPORTED_MODULE_3_core_utils_arrays__["a" /* Arrays */].insert(sounds, index, [this.rng.sample(possibleSounds)]);
    };
    Logic.prototype.getPreAllSounds = function (level) {
        if (this.gameData.settings.isTutorial) {
            return this.uniqSeq.nextArray(level.soundCount);
        }
        return __WEBPACK_IMPORTED_MODULE_5_lodash__["take"](this.rng.range(soundCount), level.soundCount);
    };
    Logic.prototype.nextTask = function (level) {
        var preAllSounds = this.getPreAllSounds(level);
        var preSounds = __WEBPACK_IMPORTED_MODULE_5_lodash__["take"](preAllSounds, level.seqLength);
        var exclude = this.rng.subset(preSounds, level.excludeCount);
        var duplicate = level.excludeCount < 0;
        var sounds = duplicate ? this.addDuplicate(preSounds) : preSounds;
        var allSounds = this.rng.shuffle(preAllSounds);
        var answers = __WEBPACK_IMPORTED_MODULE_5_lodash__["difference"](sounds, exclude);
        var task = {
            sounds: sounds,
            allSounds: allSounds,
            exclude: exclude,
            answers: { seq: answers }
        };
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ }),

/***/ 170:
/*!**********************************************!*\
  !*** ./src/games/compositor/translations.ts ***!
  \**********************************************/
/*! exports provided: Translations, Fonts */
/*! exports used: Fonts, Translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Translations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fonts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_logic_sys__ = __webpack_require__(/*! core/logic/sys */ 6);

var Translations;
(function (Translations) {
    Translations.task1 = "task1";
    Translations.task2 = "task2";
    Translations.answer1 = "answer1";
    Translations.answer2 = "answer2";
    Translations.answer3 = "answer3";
    Translations.answers = [Translations.answer1, Translations.answer2, Translations.answer3];
    function getTask(skip) {
        return skip ? Translations.task2 : Translations.task1;
    }
    Translations.getTask = getTask;
})(Translations || (Translations = {}));
var Fonts;
(function (Fonts) {
    Fonts.adv = {
        fontSize: 36 * __WEBPACK_IMPORTED_MODULE_0_core_logic_sys__["a" /* Sys */].pixelRatio, font: "Arial", fill: "#3E4C59", fontStyle: "italic"
    };
    Fonts.copyright = {
        fontSize: 36 * __WEBPACK_IMPORTED_MODULE_0_core_logic_sys__["a" /* Sys */].pixelRatio, font: "Arial", fill: "#3E4C59"
    };
})(Fonts || (Fonts = {}));


/***/ }),

/***/ 181:
/*!****************************************!*\
  !*** ./src/games/compositor/sounds.ts ***!
  \****************************************/
/*! exports provided: Sounds */
/*! exports used: Sounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sounds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_games_compositor_logic__ = __webpack_require__(/*! games/compositor/logic */ 169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var Sounds;
(function (Sounds) {
    function sound(sound) {
        return "sound_" + sound;
    }
    Sounds.sound = sound;
    Sounds.sounds = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](__WEBPACK_IMPORTED_MODULE_0_games_compositor_logic__["b" /* soundCount */]).map(sound);
    Sounds.keys = Sounds.sounds;
})(Sounds || (Sounds = {}));


/***/ }),

/***/ 195:
/*!**********************************************************!*\
  !*** ./src/games/compositor/components/mainComponent.ts ***!
  \**********************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services_instances__ = __webpack_require__(/*! core/services/instances */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/tutorialTextComponent */ 142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_compositor_components_drumMachineComponent__ = __webpack_require__(/*! games/compositor/components/drumMachineComponent */ 196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_games_compositor_images__ = __webpack_require__(/*! games/compositor/images */ 151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_compositor_translations__ = __webpack_require__(/*! games/compositor/translations */ 170);











var durations = {
    intro: 1500
};
var positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
    tutorialY: 85,
    statusOffset: -260
});
var positionsPortrait = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].expand(positions, {
    tutorialY: 145
});
var getPositions = function () { return __WEBPACK_IMPORTED_MODULE_7_core_ui_services_instances__["d" /* screenSizeService */].isPortrait ? positionsPortrait : positions; };
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = _this.addImage([__WEBPACK_IMPORTED_MODULE_9_games_compositor_images__["a" /* Images */].bg, [0, 0]]);
        _this.machine = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_8_games_compositor_components_drumMachineComponent__["a" /* DrumMachineComponent */])).anchorCenter().updatePos(__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2, __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].h2)
            .fluentUpdate(function (x) { return x.showTutorial = function (x) { return _this.showTutorial(x); }; });
        return _this;
    }
    MainComponent.prototype.onInit = function () {
        this.statusOptions.offset = positions.statusOffset;
        this.statusOptions.waitCompleteBeforeNewTask = true;
        this.startIntro();
        if (this.isTutorial) {
            this.tutorial = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_tutorialTextComponent__["a" /* TutorialTextComponent */]).make());
        }
    };
    MainComponent.prototype.onAnswer = function (answer) {
        if (this.tutorial) {
            this.tutorial.visible = answer.status == __WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].Error;
        }
    };
    MainComponent.prototype.showTutorial = function (index) {
        if (this.isTutorial) {
            this.tutorial.setProps(__WEBPACK_IMPORTED_MODULE_1_core_services_instances__["c" /* translationService */].getTranslation(__WEBPACK_IMPORTED_MODULE_10_games_compositor_translations__["b" /* Translations */].answers[index]));
        }
    };
    MainComponent.prototype.introAnimation = function () {
        return __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.machine,
            duration: durations.intro,
            to: { x: -this.machine.width },
            reverse: true,
            easing: Phaser.Easing.Back.Out
        });
    };
    MainComponent.prototype.onNewTask = function (task) {
        this.machine.setProps(task);
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 196:
/*!*****************************************************************!*\
  !*** ./src/games/compositor/components/drumMachineComponent.ts ***!
  \*****************************************************************/
/*! exports provided: DrumMachineComponent */
/*! exports used: DrumMachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrumMachineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_services__ = __webpack_require__(/*! core/services */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls__ = __webpack_require__(/*! core/ui/controls */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_compositor_components_answerCountComponent__ = __webpack_require__(/*! games/compositor/components/answerCountComponent */ 197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_compositor_components_answersComponent__ = __webpack_require__(/*! games/compositor/components/answersComponent */ 199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_games_compositor_components_taskComponent__ = __webpack_require__(/*! games/compositor/components/taskComponent */ 200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_games_compositor_images__ = __webpack_require__(/*! games/compositor/images */ 151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_games_compositor_sounds__ = __webpack_require__(/*! games/compositor/sounds */ 181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_games_compositor_translations__ = __webpack_require__(/*! games/compositor/translations */ 170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash__);

















var positions = __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].create({
    answerCount: [194, 76],
    earMargin: { x: 20 },
    taskY: 250,
    panel: [380, 470],
    ear: [200, 250],
    adv: [890, 924],
    copyright: [1012, 913]
});
var durations = {
    ear: 800
};
var DrumMachineComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](DrumMachineComponent, _super);
    function DrumMachineComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fon = _this.addImage([__WEBPACK_IMPORTED_MODULE_13_games_compositor_images__["a" /* Images */].fon, [0, 0]]);
        _this.answerCount = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_10_games_compositor_components_answerCountComponent__["a" /* AnswerCountComponent */])).setPos(positions.answerCount);
        _this.answers = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_11_games_compositor_components_answersComponent__["a" /* AnswersComponent */])).anchorCenterX().updatePos(_this.center()[0], positions.panel[1]);
        _this.task = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_12_games_compositor_components_taskComponent__["a" /* TaskComponent */])).anchorCenter().updatePos(_this.center()[0], positions.taskY);
        _this.earPanel = _this.createPanel();
        return _this;
    }
    DrumMachineComponent.prototype.onInit = function () {
        this.add(new __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_txt__["a" /* Txt */]("Wikium", __WEBPACK_IMPORTED_MODULE_15_games_compositor_translations__["a" /* Fonts */].adv)).setPos(positions.adv);
        this.add(new __WEBPACK_IMPORTED_MODULE_9_core_ui_controls_txt__["a" /* Txt */]("©", __WEBPACK_IMPORTED_MODULE_15_games_compositor_translations__["a" /* Fonts */].copyright)).setPos(positions.copyright);
    };
    DrumMachineComponent.prototype.onAnswer = function (answer) {
        if (__WEBPACK_IMPORTED_MODULE_2_core_types_logic__["a" /* AnswerStatus */].isCorrect(answer.status) && this.isTutorial) {
            this.showTutorial((answer.correctAnswerIndex || 0) + 1);
        }
    };
    DrumMachineComponent.prototype.createPanel = function () {
        var _this = this;
        var panel = this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls__["b" /* Control */]());
        panel.add(this.makeImage([__WEBPACK_IMPORTED_MODULE_13_games_compositor_images__["a" /* Images */].panel, [0, 0]]));
        this.earGroup = panel.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls__["b" /* Control */]()).anchorCenter().setPos(panel.center());
        var images = [__WEBPACK_IMPORTED_MODULE_13_games_compositor_images__["a" /* Images */].ear_main].concat(__WEBPACK_IMPORTED_MODULE_13_games_compositor_images__["a" /* Images */].earList).map(function (x) { return _this.makeImage([x, [0, 0]]); });
        this.earGroup.addChildren(images);
        images[0].alpha = 0.8;
        __WEBPACK_IMPORTED_MODULE_16_lodash__["drop"](images, 1).forEach(function (x, i) {
            x.x = positions.ear[i];
            _this.delay(i ? 1000 : (1000 + durations.ear * 0.80)).addOnce(function () {
                __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__["a" /* Tweens */].start({
                    target: x,
                    to: { alpha: 0 },
                    duration: durations.ear,
                    simpleYoyo: true,
                    repeat: -1
                });
            });
        });
        this.earGroup.add(this.makeImage([__WEBPACK_IMPORTED_MODULE_13_games_compositor_images__["a" /* Images */].ear_main, [0, 0]]));
        this.earGroup.updatePivot();
        this.readyBtn = panel.add(new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_btn__["c" /* ImageBtn */]("", this.gameKey(__WEBPACK_IMPORTED_MODULE_13_games_compositor_images__["a" /* Images */].play), function () { return _this.updateState("equalizer"); })
            .anchorCenter().setPos(panel.center()));
        panel.setPos(positions.panel);
        return panel;
    };
    DrumMachineComponent.prototype.updateState = function (state) {
        this.earPanel.visible = state != "sound";
        this.answers.visible = state == "sound";
        this.readyBtn.visible = state == "text";
        this.earGroup.visible = state == "equalizer";
        this.task.setProps({ state: state, task: this.props });
        var soundCount = this.props.sounds.length;
        this.task.symmetricScale = state != "text" && soundCount > 3 ? (soundCount == 4 ? 0.7 : 0.57) : 1.0;
        if (state == "equalizer") {
            this.playSounds();
        }
        if (state == "sound") {
            this.showTutorial(0);
        }
    };
    DrumMachineComponent.prototype.play = function (index) {
        var _this = this;
        if (index >= this.props.sounds.length) {
            return __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_signals__["a" /* Signals */].memorize();
        }
        this.answerCount.setProps({ soundCount: index + 1 });
        this.task.play(index);
        var playSignal = __WEBPACK_IMPORTED_MODULE_1_core_services__["d" /* audioService */].play(this.gameKey(__WEBPACK_IMPORTED_MODULE_14_games_compositor_sounds__["a" /* Sounds */].sound(this.props.sounds[index])));
        return __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_signals__["a" /* Signals */].bind(playSignal, function () { return _this.play(index + 1); });
    };
    DrumMachineComponent.prototype.playSounds = function () {
        var _this = this;
        if (this.isTutorial) {
            __WEBPACK_IMPORTED_MODULE_1_core_services__["d" /* audioService */].setMute(false);
        }
        this.disableInputOn(this.play(0)).addOnce(function () {
            _this.updateState("sound");
        });
    };
    DrumMachineComponent.prototype.onPropsUpdate = function () {
        this.answerCount.setProps({ soundCount: 0 });
        this.updateState("text");
        var task = this.props;
        this.answers.setProps(task.allSounds);
    };
    return DrumMachineComponent;
}(__WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 197:
/*!*****************************************************************!*\
  !*** ./src/games/compositor/components/answerCountComponent.ts ***!
  \*****************************************************************/
/*! exports provided: AnswerCountComponent */
/*! exports used: AnswerCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerCountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_behaviors_changeImageKeyBehavior__ = __webpack_require__(/*! core/ui/controls/behaviors/changeImageKeyBehavior */ 198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils__ = __webpack_require__(/*! core/utils */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images__ = __webpack_require__(/*! ../images */ 151);









var positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
    x: [0, 1004],
    y: __WEBPACK_IMPORTED_MODULE_7_lodash__["range"](5).map(function (x) { return x * 73; })
});
var AnswerCountComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AnswerCountComponent, _super);
    function AnswerCountComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.behaviors = [];
        _this.rng = new __WEBPACK_IMPORTED_MODULE_5_core_utils__["e" /* RandomGenerator */]();
        return _this;
    }
    AnswerCountComponent.prototype.onInit = function () {
    };
    AnswerCountComponent.prototype.onAnswer = function (answer) {
        if (__WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].isCorrect(answer.status)) {
            this.behaviors[answer.correctAnswerIndex || 0].nextKey();
        }
    };
    AnswerCountComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        var pos = __WEBPACK_IMPORTED_MODULE_7_lodash__["flatMap"](positions.x, function (x) { return positions.y.map(function (y) { return Object(__WEBPACK_IMPORTED_MODULE_6_core_utils_tuples__["a" /* tuple */])(x, y); }); });
        this.removeAll(true);
        this.behaviors = __WEBPACK_IMPORTED_MODULE_7_lodash__["range"](this.props.soundCount).map(function (x, i) {
            var change = new __WEBPACK_IMPORTED_MODULE_4_core_ui_controls_behaviors_changeImageKeyBehavior__["a" /* ChangeImageKeyBehavior */]([_this.gameKey(__WEBPACK_IMPORTED_MODULE_8__images__["a" /* Images */].answer_empty), _this.gameKey(__WEBPACK_IMPORTED_MODULE_8__images__["a" /* Images */].answer_full)]);
            var img = _this.addImage([__WEBPACK_IMPORTED_MODULE_8__images__["a" /* Images */].answer_empty, pos[i]]).addBehavior(change);
            return change;
        });
    };
    return AnswerCountComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 198:
/*!******************************************************************!*\
  !*** ./src/core/ui/controls/behaviors/changeImageKeyBehavior.ts ***!
  \******************************************************************/
/*! exports provided: ChangeImageKeyBehavior */
/*! exports used: ChangeImageKeyBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeImageKeyBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_controls_behaviors_behavior__ = __webpack_require__(/*! core/ui/controls/behaviors/behavior */ 28);


var ChangeImageKeyBehavior = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ChangeImageKeyBehavior, _super);
    function ChangeImageKeyBehavior(keys) {
        var _this = _super.call(this) || this;
        _this.keys = keys;
        _this.index = 0;
        return _this;
    }
    ChangeImageKeyBehavior.prototype.onInit = function () {
        this.nextKey();
    };
    ChangeImageKeyBehavior.prototype.nextKey = function () {
        this.control.key = this.keys[this.index];
        this.index = (this.index + 1) % this.keys.length;
    };
    return ChangeImageKeyBehavior;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_controls_behaviors_behavior__["a" /* Behavior */]));



/***/ }),

/***/ 199:
/*!*************************************************************!*\
  !*** ./src/games/compositor/components/answersComponent.ts ***!
  \*************************************************************/
/*! exports provided: AnswersComponent */
/*! exports used: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__ = __webpack_require__(/*! core/ui/controls */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_utils__ = __webpack_require__(/*! core/utils */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_utils_arrays__ = __webpack_require__(/*! core/utils/arrays */ 32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_dev__ = __webpack_require__(/*! dev */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images__ = __webpack_require__(/*! ../images */ 151);












var positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
    margin: { x: 10, y: 10 }
});
var durations = {
    hover: 200,
    click: 200
};
var AnswersComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AnswersComponent, _super);
    function AnswersComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttons = [];
        _this.highlightTweens = [];
        _this.group = _this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__["b" /* Control */]());
        _this.rng = new __WEBPACK_IMPORTED_MODULE_7_core_utils__["e" /* RandomGenerator */]();
        return _this;
    }
    AnswersComponent.prototype.onInit = function () {
        var _this = this;
        this.onChangeForRun(function () { return __WEBPACK_IMPORTED_MODULE_6_core_ui_services_instances__["d" /* screenSizeService */].isPortrait; }, function (x) {
            _this.updatePositions();
        });
    };
    AnswersComponent.prototype.button = function (item) {
        var _this = this;
        var button = new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__["b" /* Control */]().anchorCenter();
        button.add(this.makeImage([__WEBPACK_IMPORTED_MODULE_11__images__["a" /* Images */].button, [0, 0]]));
        if (item >= 0) {
            var imgButton_1 = new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__["a" /* Btn */]("", function (btn) {
                _this.playerAnswer(item);
                __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__["a" /* Tweens */].start({
                    target: button,
                    to: { symmetricScale: 0.7 },
                    simpleYoyo: true,
                    duration: durations.click
                });
            }, undefined, new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__["d" /* Img */](this.gameKey(__WEBPACK_IMPORTED_MODULE_11__images__["a" /* Images */].sound(item)))).anchorCenter().setPos(button.center());
            button.add(imgButton_1);
            button.tag = item;
            imgButton_1.onHover(function (x) { return _this.hoverAnimation(imgButton_1, x); });
            imgButton_1.alpha = 0.5;
        }
        button.updatePivot();
        return button;
    };
    AnswersComponent.prototype.hoverAnimation = function (btn, reverse) {
        __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: btn,
            to: { symmetricScale: reverse ? 1.0 : 1.2, alpha: reverse ? 0.5 : 1.0 },
            duration: durations.hover
        });
    };
    AnswersComponent.prototype.updatePositions = function () {
        var colCount = 4;
        __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.buttons, colCount, positions.margin);
    };
    AnswersComponent.prototype.onAnswer = function () {
        this.highlightAnswers();
    };
    AnswersComponent.prototype.highlightAnswers = function () {
        var _this = this;
        if (this.isTutorial || __WEBPACK_IMPORTED_MODULE_9_dev__["a" /* Dev */].hightlightAnswers) {
            this.showHighlight(this.buttons.filter(function (x) { return __WEBPACK_IMPORTED_MODULE_10_lodash__["includes"](_this.gameState.answers.restAnswers, x.tag); }));
        }
    };
    AnswersComponent.prototype.showHighlight = function (controls) {
        this.highlightTweens.forEach(function (x) { return x.stop(true); });
        this.highlightTweens = controls.map(function (y) { return __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].highlight(y); });
    };
    AnswersComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.group.removeAll(true);
        this.buttons = __WEBPACK_IMPORTED_MODULE_8_core_utils_arrays__["a" /* Arrays */].fillToLength(this.props, 12, function () { return -1; }).map(function (item) { return _this.button(item); });
        this.group.addChildren(this.buttons);
        this.updatePositions();
        this.highlightAnswers();
        this.updatePivot();
    };
    return AnswersComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 200:
/*!**********************************************************!*\
  !*** ./src/games/compositor/components/taskComponent.ts ***!
  \**********************************************************/
/*! exports provided: TaskComponent */
/*! exports used: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services_instances__ = __webpack_require__(/*! core/services/instances */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__ = __webpack_require__(/*! core/ui/controls */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_txt__ = __webpack_require__(/*! core/ui/controls/txt */ 63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_games_compositor_components_equalizerComponent__ = __webpack_require__(/*! games/compositor/components/equalizerComponent */ 201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_compositor_translations__ = __webpack_require__(/*! games/compositor/translations */ 170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images__ = __webpack_require__(/*! ../images */ 151);












var positions = __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].create({
    marginSound: { x: 40, y: 50 },
    marginEqualizer: { x: 40, y: 100 },
    excludeY: 115,
    wordWrap: 650,
    excludeMargin: { x: 5 }
});
var TaskComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](TaskComponent, _super);
    function TaskComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sounds = [];
        _this.equalizers = [];
        _this.groupEqualizer = _this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__["b" /* Control */]());
        _this.groupSounds = _this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__["b" /* Control */]());
        _this.text = _this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls_txt__["a" /* Txt */]("", __WEBPACK_IMPORTED_MODULE_1_core_assets_fonts__["b" /* CoreFonts */].tutorial(false)));
        _this.groupExclude = _this.add(new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__["b" /* Control */]()).anchorCenterX();
        return _this;
    }
    TaskComponent.prototype.onInit = function () {
        var _this = this;
        this.text.textControl.wordWrapWidth = positions.wordWrap;
        this.onChangeForRun(function () { return __WEBPACK_IMPORTED_MODULE_7_core_ui_services_instances__["d" /* screenSizeService */].isPortrait; }, function (x) {
            _this.updatePositions();
        });
    };
    TaskComponent.prototype.sound = function (item) {
        return new __WEBPACK_IMPORTED_MODULE_5_core_ui_controls__["d" /* Img */](this.gameKey(__WEBPACK_IMPORTED_MODULE_11__images__["a" /* Images */].sound_color(item))).updateFields({ alpha: 0 });
    };
    TaskComponent.prototype.onAnswer = function (answer) {
        var index = this.isTutorial ? answer.correctAnswerIndex : answer.index;
        if (!__WEBPACK_IMPORTED_MODULE_8_core_utils_undef__["a" /* Undef */].is(index)) {
            var sound = this.sounds[index];
            if (sound) {
                sound.alpha = 1;
            }
        }
    };
    TaskComponent.prototype.updatePositions = function () {
        var colCount = 5;
        __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.sounds, colCount, positions.marginSound);
        __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.equalizers, colCount, positions.marginEqualizer);
    };
    TaskComponent.prototype.play = function (index) {
        this.equalizers.forEach(function (x) { return x.play(false); });
        this.equalizers[index].play(true);
    };
    TaskComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.groupEqualizer.removeAll(true);
        this.groupSounds.removeAll(true);
        this.groupExclude.removeAll(true);
        this.groupEqualizer.visible = false;
        this.groupSounds.visible = false;
        this.text.visible = false;
        this.groupExclude.visible = false;
        var states = {
            text: function () {
                _this.text.text = __WEBPACK_IMPORTED_MODULE_2_core_services_instances__["c" /* translationService */].getTranslation(__WEBPACK_IMPORTED_MODULE_10_games_compositor_translations__["b" /* Translations */].getTask(_this.props.task.exclude.length > 0));
                _this.text.visible = true;
                _this.groupExclude.visible = true;
                var exclude = _this.props.task.exclude.map(function (x) { return _this.makeImage([__WEBPACK_IMPORTED_MODULE_11__images__["a" /* Images */].sound(x), [0, 0]]); });
                _this.groupExclude.addChildren(exclude)
                    .updatePos(_this.text.width / 2, positions.excludeY);
                __WEBPACK_IMPORTED_MODULE_3_core_ui_common_sizes__["a" /* Sizes */].tableRow(exclude, positions.excludeMargin);
                _this.groupExclude.updatePivot();
            },
            equalizer: function () {
                _this.groupEqualizer.visible = true;
                _this.equalizers = _this.props.task.sounds.map(function (item, i) { return _this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_9_games_compositor_components_equalizerComponent__["a" /* EqualizerComponent */], i); });
                _this.groupEqualizer.addChildren(_this.equalizers);
            },
            sound: function () {
                _this.groupSounds.visible = true;
                _this.sounds = _this.props.task.answers.seq.map(function (item) { return _this.sound(item); });
                _this.groupSounds.addChildren(_this.sounds);
            }
        };
        states[this.props.state]();
        this.updatePositions();
        this.updatePivot();
        this.equalizers.forEach(function (x) { return x.setMinimum(); });
    };
    return TaskComponent;
}(__WEBPACK_IMPORTED_MODULE_4_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 201:
/*!***************************************************************!*\
  !*** ./src/games/compositor/components/equalizerComponent.ts ***!
  \***************************************************************/
/*! exports provided: EqualizerComponent */
/*! exports used: EqualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualizerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils__ = __webpack_require__(/*! core/utils */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_arrays__ = __webpack_require__(/*! core/utils/arrays */ 32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images__ = __webpack_require__(/*! ../images */ 151);








var positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
    margin: { x: 15, y: 0 },
    minHeight: 10
});
var colors = [0xff0000, 0x00ff00, 0x0000ff];
var barCount = 4;
var EqualizerComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](EqualizerComponent, _super);
    function EqualizerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.images = [];
        _this.rng = new __WEBPACK_IMPORTED_MODULE_4_core_utils__["e" /* RandomGenerator */]();
        return _this;
    }
    EqualizerComponent.prototype.onInit = function () {
    };
    EqualizerComponent.prototype.play = function (enable) {
        if (enable) {
            var durations = this.rng.range(this.images.length);
            __WEBPACK_IMPORTED_MODULE_5_core_utils_arrays__["a" /* Arrays */].zip(this.images, durations).forEach(function (_a) {
                var x = _a[0], y = _a[1];
                return __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
                    target: x,
                    to: { height: __WEBPACK_IMPORTED_MODULE_7__images__["a" /* Images */].sizes.eguaz.h * (y + 1) / barCount },
                    duration: 200,
                    delay: 100 * (y),
                    simpleYoyo: true,
                    noAutoReset: true,
                    repeat: -1
                });
            });
        }
        else {
            this.setMinimum(true);
        }
    };
    EqualizerComponent.prototype.setMinimum = function (animation) {
        if (animation === void 0) { animation = false; }
        this.images.forEach(__WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].stop);
        this.images.forEach(function (x) {
            if (!animation) {
                //   Tweens.start({
                //     target: x,
                //     to: {height: positions.minHeight},
                //     duration: 300,
                //   })
                // }else{
                x.height = positions.minHeight;
            }
        });
    };
    EqualizerComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.images = __WEBPACK_IMPORTED_MODULE_6_lodash__["zip"](__WEBPACK_IMPORTED_MODULE_6_lodash__["range"](barCount), this.rng.range(barCount)).map(function (_a, i) {
            var x = _a[0], y = _a[1];
            var img = _this.addImage([__WEBPACK_IMPORTED_MODULE_7__images__["a" /* Images */].equaz(_this.props * 4 + i), [0, 0]]).anchorOneY();
            img.y = img.height;
            return img;
        });
        __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].tableRow(this.images, positions.margin);
    };
    return EqualizerComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 202:
/*!****************************************!*\
  !*** ./src/games/compositor/levels.ts ***!
  \****************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types__ = __webpack_require__(/*! core/types */ 14);

function level(seqLength, excludeCount) {
    return { seqLength: seqLength, soundCount: seqLength + 2, excludeCount: excludeCount };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types__["c" /* createLevels */])({
    1: level(3, 0),
    2: level(3, -1),
    3: level(4, 0),
    4: level(4, -1),
    5: level(4, 1),
    6: level(5, 0),
    7: level(5, -1),
    8: level(5, 1),
    9: level(6, 0),
    10: level(6, -1),
    11: level(6, 1),
    12: level(6, 2),
    13: level(7, 0),
    14: level(7, -1),
    15: level(7, 1),
    16: level(7, 2),
    17: level(8, 0),
    18: level(8, -1),
    19: level(8, 1),
    20: level(8, 2),
    21: level(8, 3),
    22: level(9, 0),
    23: level(9, -1),
    24: level(9, 1),
    25: level(9, 2),
    26: level(9, 3),
    27: level(10, 0),
    28: level(10, 1),
    29: level(10, 2),
    30: level(10, 3)
});


/***/ })

});
//# sourceMappingURL=6.bundle.js.map