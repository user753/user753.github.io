webpackJsonpNewGames([5],{

/***/ 149:
/*!********************************!*\
  !*** ./src/games/shop/meta.ts ***!
  \********************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_games_shop_sounds__ = __webpack_require__(/*! games/shop/sounds */ 192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images__ = __webpack_require__(/*! ./images */ 172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__levels__ = __webpack_require__(/*! ./levels */ 343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logic__ = __webpack_require__(/*! ./logic */ 193);





var gameId = "chamber-of-secrets";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_3__levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 3, maxLevel: 20 }]
};
var metaData = {
    gameId: gameId,
    title: "Shop",
    logic: __WEBPACK_IMPORTED_MODULE_4__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_2__images__["a" /* Images */].data,
    sounds: __WEBPACK_IMPORTED_MODULE_0_games_shop_sounds__["a" /* Sounds */].keys,
    atlasCount: 3,
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

/***/ 172:
/*!**********************************!*\
  !*** ./src/games/shop/images.ts ***!
  \**********************************/
/*! exports provided: Images */
/*! exports used: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic__ = __webpack_require__(/*! ./logic */ 193);



var Images;
(function (Images) {
    var catCount = 4;
    var flowCount = 4;
    var fishJumpCount = 20;
    var fishCount = 4;
    var toktokCount = 17;
    var buttCount = 3;
    Images.bookCount = 3;
    Images.sizes = function () { return __WEBPACK_IMPORTED_MODULE_0_core_ui_common_sizes__["a" /* Sizes */].create({
        item: 120,
        itemSmall: 82,
        toktok: { h: 64, w: 73 },
        fish: { h: 118, w: 86 }
    }); };
    function fish(id) {
        return "fish_" + id;
    }
    Images.fish = fish;
    function item(id) {
        return "item_" + id;
    }
    Images.item = item;
    function book(id) {
        return "book_" + id;
    }
    Images.book = book;
    function cat(id) {
        return "cat_" + id;
    }
    Images.cat = cat;
    function flow(id) {
        return "flow_" + id;
    }
    Images.flow = flow;
    function butt(id) {
        return "butt_" + id;
    }
    Images.butt = butt;
    function fish_jump(id) {
        return "fish_jump_" + id;
    }
    Images.fish_jump = fish_jump;
    function toktok(id) {
        return "toktok_" + id;
    }
    Images.toktok = toktok;
    Images.arrow = "arrow";
    Images.light = "light";
    Images.day = "day";
    Images.bgLeft = "bg_left";
    Images.night = "night";
    Images.picture = "picture";
    Images.pictureDark = "picture_dark";
    Images.toktokDark = "toktok_dark";
    var catList = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](catCount).map(cat);
    var flowList = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](flowCount).map(flow);
    var fishList = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](fishCount).map(fish);
    Images.fishJumpList = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](fishJumpCount).map(fish_jump);
    var itemList = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](__WEBPACK_IMPORTED_MODULE_2__logic__["b" /* itemCount */]).map(item);
    var bookList = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](Images.bookCount).map(book);
    Images.toktokList = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](toktokCount).map(toktok);
    Images.buttList = __WEBPACK_IMPORTED_MODULE_1_lodash__["range"](buttCount).map(butt);
    Images.keys = [
        Images.bgLeft,
        Images.arrow,
        Images.light,
        Images.toktokDark,
        Images.day,
        Images.night,
        Images.picture,
        Images.pictureDark
    ].concat(catList, Images.buttList, fishList, flowList, Images.fishJumpList, itemList, bookList, Images.toktokList);
    Images.data = {
        sprites: Images.keys,
    };
})(Images || (Images = {}));


/***/ }),

/***/ 192:
/*!**********************************!*\
  !*** ./src/games/shop/sounds.ts ***!
  \**********************************/
/*! exports provided: Sounds */
/*! exports used: Sounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sounds; });
var Sounds;
(function (Sounds) {
    Sounds.light_on = "light_on";
    Sounds.light_off = "light_off";
    Sounds.picture_loop = "picture_loop";
    Sounds.mur_mur = "mur_mur";
    Sounds.dive_fish = "dive_fish";
    Sounds.emerges_fish = "emerges_fish";
    Sounds.clock_loop = "clock_loop";
    Sounds.cat = "cat";
    Sounds.bg = "bg";
    Sounds.keys = [Sounds.bg, Sounds.light_on, Sounds.light_off, Sounds.picture_loop, Sounds.mur_mur, Sounds.dive_fish, Sounds.emerges_fish, Sounds.clock_loop, Sounds.cat];
})(Sounds || (Sounds = {}));


/***/ }),

/***/ 193:
/*!*********************************!*\
  !*** ./src/games/shop/logic.ts ***!
  \*********************************/
/*! exports provided: itemCount, shelfMaxPositionCount, shelfCount, Logic */
/*! exports used: Logic, itemCount, shelfCount, shelfMaxPositionCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return itemCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return shelfMaxPositionCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return shelfCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);





var itemCount = 83;
var minSheft = 2;
var shelfMaxPositionCount = 5;
var shelfCount = 6;
var allItems = __WEBPACK_IMPORTED_MODULE_4_lodash__["range"](itemCount);
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_2_core_utils__["e" /* RandomGenerator */]();
        return _this;
    }
    Logic.prototype.createShelf = function (startIndex, max) {
        var maxShelf = Math.max(minSheft, max - minSheft);
        var length = this.rng.count(maxShelf, minSheft);
        var line = { startIndex: startIndex, length: max };
        return line;
    };
    Logic.prototype.createShelfs = function (positionCount) {
        var _this = this;
        var _a = __WEBPACK_IMPORTED_MODULE_3_core_utils_numbers__["a" /* Numbers */].countAndMod(positionCount, shelfMaxPositionCount), count = _a[0], mod = _a[1];
        var lineLengths = __WEBPACK_IMPORTED_MODULE_4_lodash__["times"](count, function () { return shelfMaxPositionCount; }).concat([mod]);
        return lineLengths.reduce(function (_a, v) {
            var l = _a[0], len = _a[1];
            return Object(__WEBPACK_IMPORTED_MODULE_2_core_utils__["f" /* tuple */])(l.concat([_this.createShelf(len, v)]), len + v);
        }, Object(__WEBPACK_IMPORTED_MODULE_2_core_utils__["f" /* tuple */])([], 0))[0];
    };
    Logic.prototype.itemPositions = function (items, positionCount) {
        var itemPositions = __WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].zip(items, __WEBPACK_IMPORTED_MODULE_4_lodash__["take"](this.rng.range(positionCount), items.length));
        function getItems(_a) {
            var startIndex = _a.startIndex, length = _a.length;
            var endIndex = startIndex + length;
            return itemPositions
                .filter(function (_a) {
                var item = _a[0], position = _a[1];
                return position >= startIndex && position < endIndex;
            })
                .map(function (_a) {
                var item = _a[0], position = _a[1];
                return ({ item: item, position: position - startIndex });
            });
        }
        var shelfLines = this.createShelfs(positionCount);
        return shelfLines.map(function (line) { return ({
            items: getItems(line),
            length: line.length
        }); });
    };
    Logic.prototype.nextTask = function (level) {
        var _a = this.rng.split(allItems, level.itemCount), initItems = _a[0], wrongItems = _a[1];
        var _b = this.rng.split(initItems, level.hiddenItemCount), missingItems = _b[0], questionItems = _b[1];
        var answers = missingItems;
        var allAnswers = this.rng.shuffle(answers.concat(__WEBPACK_IMPORTED_MODULE_4_lodash__["take"](wrongItems, level.wrongAnswerCount)));
        var shelfs = this.itemPositions(initItems, level.positionCount);
        var task = {
            shelfs: shelfs,
            missingItems: missingItems,
            allAnswers: allAnswers,
            answers: answers
        };
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ }),

/***/ 334:
/*!****************************************************!*\
  !*** ./src/games/shop/components/mainComponent.ts ***!
  \****************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets__ = __webpack_require__(/*! core/assets */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_services__ = __webpack_require__(/*! core/services */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_components_games_gameUI_tutorialTextComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/tutorialTextComponent */ 159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_ui_controls__ = __webpack_require__(/*! core/ui/controls */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_utils_numbers__ = __webpack_require__(/*! core/utils/numbers */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_games_shop_components_answersComponent__ = __webpack_require__(/*! games/shop/components/answersComponent */ 335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_games_shop_components_fishComponent__ = __webpack_require__(/*! games/shop/components/fishComponent */ 337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_games_shop_components_roomClockComponent__ = __webpack_require__(/*! games/shop/components/roomClockComponent */ 338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_games_shop_components_roomComponent__ = __webpack_require__(/*! games/shop/components/roomComponent */ 339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_games_shop_components_roomDarkComponent__ = __webpack_require__(/*! games/shop/components/roomDarkComponent */ 341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_games_shop_images__ = __webpack_require__(/*! games/shop/images */ 172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_games_shop_sounds__ = __webpack_require__(/*! games/shop/sounds */ 192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_games_shop_translations__ = __webpack_require__(/*! games/shop/translations */ 342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_lodash__);























var durations = {
    transition: 1000,
    toktok: 16,
    pictureStart: 400,
    picture: 4000,
    catSecond: 500,
    dark: 100,
    light: 1000,
    flash: 200,
    answers: 300
};
var tutorialText = {
    0: __WEBPACK_IMPORTED_MODULE_21_games_shop_translations__["a" /* Translations */].title,
    2: __WEBPACK_IMPORTED_MODULE_21_games_shop_translations__["a" /* Translations */].subtitle
};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__["a" /* Sizes */].create({
            statusOffset: -150,
            shelfs: Object(__WEBPACK_IMPORTED_MODULE_12_core_utils__["f" /* tuple */])(775, 216),
            buttonY: 1014,
            light: Object(__WEBPACK_IMPORTED_MODULE_12_core_utils__["f" /* tuple */])(354, 409),
            answersY: 880,
            tutorialMinHeight: 30,
            fish: [1475, 260],
            arrow: [1590, 228],
            cat: [[484, 547], [970, 84], [1497, 549], [970, 84]],
            flow: Object(__WEBPACK_IMPORTED_MODULE_12_core_utils__["f" /* tuple */])(819, 87)
        });
        _this.positionsPortrait = __WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__["a" /* Sizes */].expand(_this.positions, {
            cat: [[724, 92], [970, 84], [1260, 857], [900, 84]]
        });
        _this.getPositions = function () { return __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? _this.positionsPortrait : _this.positions; };
        _this.background = _this.addImage([__WEBPACK_IMPORTED_MODULE_19_games_shop_images__["a" /* Images */].day, [0, 0]]);
        _this.light = _this.addImage([__WEBPACK_IMPORTED_MODULE_19_games_shop_images__["a" /* Images */].light, _this.positions.light]);
        _this.fish = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_15_games_shop_components_fishComponent__["a" /* FishComponent */])).setPos(_this.positions.fish);
        _this.toktok = _this.addImage([__WEBPACK_IMPORTED_MODULE_19_games_shop_images__["a" /* Images */].toktok(0), __WEBPACK_IMPORTED_MODULE_18_games_shop_components_roomDarkComponent__["b" /* positions */]().toktok]);
        _this.backgroundDark = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_18_games_shop_components_roomDarkComponent__["a" /* RoomDarkComponent */])).updateFields({ alpha: 0 });
        _this.clock = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_16_games_shop_components_roomClockComponent__["a" /* RoomClockComponent */])).setPos(_this.positions.arrow);
        _this.shelfs = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_17_games_shop_components_roomComponent__["a" /* RoomComponent */]))
            .setPos(_this.positions.shelfs)
            .anchorCenterX();
        _this.flow = _this.addImage([__WEBPACK_IMPORTED_MODULE_19_games_shop_images__["a" /* Images */].flow(0), _this.positions.flow]);
        _this.picture = _this.addImage([__WEBPACK_IMPORTED_MODULE_19_games_shop_images__["a" /* Images */].picture, __WEBPACK_IMPORTED_MODULE_18_games_shop_components_roomDarkComponent__["b" /* positions */]().picture]).anchorCenterX();
        _this.cat = _this.addImage([__WEBPACK_IMPORTED_MODULE_19_games_shop_images__["a" /* Images */].cat(0), [0, 0]]);
        _this.catFrames = __WEBPACK_IMPORTED_MODULE_11_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? [0, 1, 3, 2] : [0, 1, 0, 2];
        return _this;
    }
    MainComponent.prototype.pictureAnimation = function (reverse) {
        this.playSound(__WEBPACK_IMPORTED_MODULE_20_games_shop_sounds__["a" /* Sounds */].picture_loop);
        var angle = 25 * (reverse ? 1 : -1);
        __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].gravityAngle(this.picture, angle, durations.pictureStart, durations.picture);
    };
    MainComponent.prototype.onInit = function () {
        var _this = this;
        this.context.uiService.mainComponent.onIntroComplete.addOnce(function () { return _this.playSound(__WEBPACK_IMPORTED_MODULE_20_games_shop_sounds__["a" /* Sounds */].bg, true); });
        this.statusOptions.offset = this.positions.statusOffset;
        this.statusOptions.waitCompleteBeforeNewTask = true;
        // this.toktok.img.animations.add("main", Images.toktokList.map(x => this.gameKey(x))).play(durations.toktok, true)
        this.readyBtn = this.add(new __WEBPACK_IMPORTED_MODULE_10_core_ui_controls__["f" /* ThreeSliceBtn */](__WEBPACK_IMPORTED_MODULE_22_lodash__["upperFirst"](__WEBPACK_IMPORTED_MODULE_2_core_services__["h" /* translationService */].getTranslation(__WEBPACK_IMPORTED_MODULE_21_games_shop_translations__["a" /* Translations */].remember)), __WEBPACK_IMPORTED_MODULE_19_games_shop_images__["a" /* Images */].buttList.map(function (x) { return _this.gameKey(x); }), function () { return _this.onReady(); }, __WEBPACK_IMPORTED_MODULE_1_core_assets__["c" /* CoreFonts */].button("#3D7AAD")))
            .anchorCenterX()
            .updatePos(__WEBPACK_IMPORTED_MODULE_7_core_ui_common_sizes__["a" /* Sizes */].w2, this.positions.buttonY);
        this.answers = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_14_games_shop_components_answersComponent__["a" /* AnswersComponent */]))
            // .anchorCenterX()
            .updatePos(0, this.getPositions().answersY);
        this.setAnswerVisible(false);
        if (this.isTutorial) {
            this.tutorial = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_9_core_ui_components_games_gameUI_tutorialTextComponent__["a" /* TutorialTextComponent */])).make();
        }
        this.updateState(0);
        this.startIntro();
    };
    MainComponent.prototype.showTutorial = function (state) {
        if (this.isTutorial) {
            var key = tutorialText[state];
            var text = key ? __WEBPACK_IMPORTED_MODULE_2_core_services__["h" /* translationService */].getTranslation(key) : "";
            this.tutorial.setProps(text);
        }
    };
    MainComponent.prototype.lightAnimation = function () {
        this.light.alpha = 0.3;
        __WEBPACK_IMPORTED_MODULE_6_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.light,
            to: { alpha: 1 },
            duration: durations.light,
            easing: Phaser.Easing.Bounce.Out
        });
    };
    MainComponent.prototype.lightFlash = function () {
        this.light.alpha = 1;
        __WEBPACK_IMPORTED_MODULE_6_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.light,
            to: { alpha: 0.3 },
            duration: durations.flash,
            simpleYoyo: true,
            repeat: 2
        });
    };
    MainComponent.prototype.updateCat = function (state) {
        var key = __WEBPACK_IMPORTED_MODULE_13_core_utils_numbers__["a" /* Numbers */].odd(state) ? __WEBPACK_IMPORTED_MODULE_20_games_shop_sounds__["a" /* Sounds */].mur_mur : __WEBPACK_IMPORTED_MODULE_20_games_shop_sounds__["a" /* Sounds */].cat;
        this.stopSound(__WEBPACK_IMPORTED_MODULE_20_games_shop_sounds__["a" /* Sounds */].mur_mur);
        this.playSound(key);
        var p = this.getPositions();
        this.cat.key = this.gameKey(__WEBPACK_IMPORTED_MODULE_19_games_shop_images__["a" /* Images */].cat(this.catFrames[state]));
        this.cat.setPos(p.cat[state]);
    };
    MainComponent.prototype.updateState = function (state) {
        this.showTutorial(state);
        var p = this.getPositions();
        var isLight = __WEBPACK_IMPORTED_MODULE_13_core_utils_numbers__["a" /* Numbers */].odd(state);
        if (!isLight) {
            this.shelfs.hideAllItems();
        }
        if (!this.isFirstTask) {
            var lightSound = isLight ? __WEBPACK_IMPORTED_MODULE_20_games_shop_sounds__["a" /* Sounds */].light_off : __WEBPACK_IMPORTED_MODULE_20_games_shop_sounds__["a" /* Sounds */].light_on;
            this.playSound(lightSound);
        }
        if (isLight) {
            this.lightAnimation();
        }
        this.setAnswerVisible(state == 2);
        __WEBPACK_IMPORTED_MODULE_6_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: this.backgroundDark,
            to: { alpha: isLight ? 0 : 1 },
            duration: durations.dark
        });
        this.updateCat(state);
        this.flow.key = this.gameKey(__WEBPACK_IMPORTED_MODULE_19_games_shop_images__["a" /* Images */].flow(state > 2 ? 1 : state));
        this.picture.key = this.gameKey(isLight ? __WEBPACK_IMPORTED_MODULE_19_games_shop_images__["a" /* Images */].picture : __WEBPACK_IMPORTED_MODULE_19_games_shop_images__["a" /* Images */].pictureDark);
        if (this.isInit && [1, 0].indexOf(state) >= 0) {
            this.pictureAnimation(isLight);
        }
    };
    MainComponent.prototype.changeItems = function (dark) {
        var _this = this;
        var _a = dark ? [1, 2] : [3, 0], startState = _a[0], endState = _a[1];
        this.updateState(startState);
        var signal = this.delay(durations.transition);
        this.subscribe(signal, function () { return _this.updateState(endState); });
        return signal;
    };
    MainComponent.prototype.setAnswerVisible = function (visible) {
        this.answers.visible = visible;
        if (visible) {
            this.shelfs.hideMissingItems();
            __WEBPACK_IMPORTED_MODULE_6_core_ui_animations_tweens__["a" /* Tweens */].start({
                target: this.answers,
                to: { alpha: 1 },
                duration: durations.answers
            });
        }
        else {
            this.answers.alpha = 0;
        }
    };
    MainComponent.prototype.onReady = function () {
        this.readyBtn.visible = false;
        return this.changeItems(true);
    };
    MainComponent.prototype.onAnswer = function (answer) {
        if (__WEBPACK_IMPORTED_MODULE_3_core_types_logic__["a" /* AnswerStatus */].isCorrect(answer.status)) {
            this.lightFlash();
        }
    };
    MainComponent.prototype.onNewTask = function (task) {
        var _this = this;
        var signal = this.isFirstTask
            ? __WEBPACK_IMPORTED_MODULE_5_core_ui_animations_signals__["a" /* Signals */].memorize()
            : this.changeItems(false);
        return this.disableInputOn(signal).addOnce(function () {
            _this.shelfs.setProps(task);
            _this.answers.setProps(task.allAnswers);
            _this.readyBtn.visible = true;
        });
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_8_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 335:
/*!*******************************************************!*\
  !*** ./src/games/shop/components/answersComponent.ts ***!
  \*******************************************************/
/*! exports provided: AnswersComponent */
/*! exports used: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets__ = __webpack_require__(/*! core/assets */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_controls__ = __webpack_require__(/*! core/ui/controls */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_imgWithShadow__ = __webpack_require__(/*! core/ui/controls/imgWithShadow */ 336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images__ = __webpack_require__(/*! ../images */ 172);












var durations = {
    click: 200,
    hover: 200
};
var AnswersComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](AnswersComponent, _super);
    function AnswersComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
            margin: { x: 50, y: 0 },
            y: 175
        });
        _this.positionsPortrait = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].expand(_this.positions, {
            margin: { x: 0, y: 0 },
            y: 20
        });
        _this.getPositions = function () { return __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? _this.positionsPortrait : _this.positions; };
        _this.images = [];
        _this.highlightTweens = [];
        _this.group = _this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls__["b" /* Control */]()).updateAnchor(0.5, __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? 0 : 0.5);
        _this.rng = new __WEBPACK_IMPORTED_MODULE_9_core_utils__["e" /* RandomGenerator */]();
        return _this;
    }
    AnswersComponent.prototype.onInit = function () {
        var _this = this;
        this.onChangeForRun(function () { return __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["e" /* screenSizeService */].isPortrait; }, function (x) {
            _this.updatePositions();
        });
    };
    AnswersComponent.prototype.updatePositions = function () {
        var colCount = __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? 4 : 8;
        __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].tableFromList(this.images, colCount, this.getPositions().margin);
        this.group.updatePivot();
        this.group.updatePos(__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].w2, this.getPositions().y);
    };
    AnswersComponent.prototype.highlightAnswers = function () {
        var _this = this;
        if (this.isTutorial) {
            this.showHighlight(this.images.filter(function (x) { return __WEBPACK_IMPORTED_MODULE_10_lodash__["includes"](_this.gameState.answers.restAnswers, x.tag); }).map(function (x) { return x.back; }));
        }
    };
    AnswersComponent.prototype.showHighlight = function (controls) {
        this.highlightTweens.forEach(function (x) { return x.stop(true); });
        this.highlightTweens = controls.map(function (y) { return __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].highlight(y); });
    };
    AnswersComponent.prototype.clickAnimation = function (btn) {
        btn.symmetricScale = 1;
        __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: btn,
            to: { symmetricScale: 1.33 },
            duration: durations.click,
            simpleYoyo: true
        });
    };
    AnswersComponent.prototype.hoverAnimation = function (btn, reverse) {
        if (!reverse) {
            this.playSound(__WEBPACK_IMPORTED_MODULE_1_core_assets__["e" /* CoreSounds */].hover, false, true);
        }
        __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__["a" /* Tweens */].start({
            target: btn,
            to: { angle: btn.angle + (reverse ? -1 : 1) * 38 },
            duration: durations.hover
        });
    };
    AnswersComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.group.removeAll(true);
        this.images = this.props.map(function (item) {
            var btn = new __WEBPACK_IMPORTED_MODULE_6_core_ui_controls__["a" /* Btn */]("", function (btn) {
                _this.clickAnimation(btn);
                _this.playerAnswer(btn.tag);
            }, undefined, new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_imgWithShadow__["a" /* ImageWithShadow */](_this.gameKey(__WEBPACK_IMPORTED_MODULE_11__images__["a" /* Images */].item(item)))).updateFields({ tag: item });
            btn.onHover(function (x) { return _this.hoverAnimation(btn, x); });
            btn.symmetricScale = __WEBPACK_IMPORTED_MODULE_8_core_ui_services_instances__["e" /* screenSizeService */].isPortrait ? 0.8 : 1;
            btn.anchorCenter();
            btn.angle = _this.rng.int(360);
            return btn;
        });
        this.group.addChildren(this.images);
        this.updatePositions();
        this.highlightAnswers();
    };
    return AnswersComponent;
}(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 336:
/*!***********************************************!*\
  !*** ./src/core/ui/controls/imgWithShadow.ts ***!
  \***********************************************/
/*! exports provided: ImageWithShadow */
/*! exports used: ImageWithShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageWithShadow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_controls_index__ = __webpack_require__(/*! core/ui/controls/index */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);



var ImageWithShadow = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ImageWithShadow, _super);
    function ImageWithShadow(key) {
        var _this = _super.call(this, key) || this;
        var shadow = _this.add(__WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__["b" /* phaserService */].makeSprite(key));
        shadow.tint = 0x000000;
        shadow.alpha = 0.4;
        shadow.scale.set(1.05, 1.05);
        _this.bringToTop(_this.img);
        return _this;
        // this.img.x = (shadow.width - this.img.width)/2
        // this.img.y = (shadow.height - this.img.height)/2
    }
    return ImageWithShadow;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_controls_index__["d" /* Img */]));



/***/ }),

/***/ 337:
/*!****************************************************!*\
  !*** ./src/games/shop/components/fishComponent.ts ***!
  \****************************************************/
/*! exports provided: FishComponent */
/*! exports used: FishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FishComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components__ = __webpack_require__(/*! core/ui/components */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_shop_images__ = __webpack_require__(/*! games/shop/images */ 172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_shop_sounds__ = __webpack_require__(/*! games/shop/sounds */ 192);







var durations = {
    animation: 2000,
    delay: 400,
    fish: 10
};
var maxSwimCount = 4;
var FishComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](FishComponent, _super);
    function FishComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            fish: Object(__WEBPACK_IMPORTED_MODULE_4_core_utils__["f" /* tuple */])(5, 75),
            right: 55
        });
        _this.frameIndex = 0;
        _this.frames = [1, 2, 3, 0];
        _this.fish = _this.addImage([__WEBPACK_IMPORTED_MODULE_5_games_shop_images__["a" /* Images */].fish(_this.getNextFrame()), _this.positions.fish]);
        _this.fishJump = _this.addImage([__WEBPACK_IMPORTED_MODULE_5_games_shop_images__["a" /* Images */].fish_jump(0), [0, 0]]).updateFields({ visible: false });
        _this.jump = _this.fishJump.img.animations.add("main", __WEBPACK_IMPORTED_MODULE_5_games_shop_images__["a" /* Images */].fishJumpList.map(function (x) { return _this.gameKey(x); }));
        _this.swimCount = 0;
        _this.tween = __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
            to: { x: _this.positions.right },
            delay: durations.delay,
            simpleYoyoDelay: durations.delay,
            target: _this.fish,
            duration: durations.animation,
            simpleYoyo: true,
            onLoop: function () {
                _this.swimCount += 1;
                _this.fish.key = _this.gameKey(__WEBPACK_IMPORTED_MODULE_5_games_shop_images__["a" /* Images */].fish(_this.getNextFrame()));
                _this.delay(durations.delay).addOnce(function () {
                    return _this.fish.key = _this.gameKey(__WEBPACK_IMPORTED_MODULE_5_games_shop_images__["a" /* Images */].fish(_this.getNextFrame()));
                });
            },
            onUpdate: function (v) {
                if (v > 0.4 && _this.swimCount == maxSwimCount && _this.frameIndex == 1) {
                    _this.swimCount = 0;
                    _this.playJump();
                }
            },
            repeat: -1
        });
        return _this;
    }
    FishComponent.prototype.getNextFrame = function () {
        this.frameIndex = (this.frameIndex + 1) % this.frames.length;
        return this.frames[this.frameIndex];
    };
    FishComponent.prototype.playJump = function () {
        var _this = this;
        this.playSound(__WEBPACK_IMPORTED_MODULE_6_games_shop_sounds__["a" /* Sounds */].emerges_fish);
        this.fish.visible = false;
        this.fishJump.visible = true;
        this.tween.pause();
        this.jump.play(durations.fish).onComplete.addOnce(function () {
            _this.fish.visible = true;
            _this.fishJump.visible = false;
            _this.tween.resume();
            _this.playSound(__WEBPACK_IMPORTED_MODULE_6_games_shop_sounds__["a" /* Sounds */].dive_fish);
        });
    };
    FishComponent.prototype.onInit = function () {
    };
    return FishComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components__["e" /* GameComponent */]));



/***/ }),

/***/ 338:
/*!*********************************************************!*\
  !*** ./src/games/shop/components/roomClockComponent.ts ***!
  \*********************************************************/
/*! exports provided: RoomClockComponent */
/*! exports used: RoomClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomClockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_components__ = __webpack_require__(/*! core/ui/components */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_shop_images__ = __webpack_require__(/*! games/shop/images */ 172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_shop_sounds__ = __webpack_require__(/*! games/shop/sounds */ 192);




var durations = {
    tick: 2000
};
var RoomClockComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](RoomClockComponent, _super);
    function RoomClockComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrow = _this.addImage([__WEBPACK_IMPORTED_MODULE_2_games_shop_images__["a" /* Images */].arrow, [0, 0]]).updateAnchor(0.1, 0.5);
        return _this;
    }
    RoomClockComponent.prototype.onInit = function () {
        var _this = this;
        this.interval(function () {
            _this.arrow.angle += 10;
            _this.playSound(__WEBPACK_IMPORTED_MODULE_3_games_shop_sounds__["a" /* Sounds */].clock_loop);
        }, durations.tick);
    };
    return RoomClockComponent;
}(__WEBPACK_IMPORTED_MODULE_1_core_ui_components__["e" /* GameComponent */]));



/***/ }),

/***/ 339:
/*!****************************************************!*\
  !*** ./src/games/shop/components/roomComponent.ts ***!
  \****************************************************/
/*! exports provided: RoomComponent */
/*! exports used: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls__ = __webpack_require__(/*! core/ui/controls */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_shop_components_roomShelfComponent__ = __webpack_require__(/*! games/shop/components/roomShelfComponent */ 340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_shop_logic__ = __webpack_require__(/*! games/shop/logic */ 193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);








var RoomComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](RoomComponent, _super);
    function RoomComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
            marginTop: 8,
            shelfHeight: 107
        });
        _this.images = [];
        _this.shelfGroup = _this.add(new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls__["b" /* Control */]());
        return _this;
    }
    RoomComponent.prototype.onInit = function () {
    };
    RoomComponent.prototype.hideMissingItems = function () {
        var _this = this;
        this.shelfs.forEach(function (x) { return x.setVisibleForAllItems(true); });
        this.shelfs.forEach(function (x) { return x.setVisibleForItems(_this.props.missingItems, false); });
    };
    RoomComponent.prototype.hideAllItems = function () {
        this.shelfs.forEach(function (x) { return x.setVisibleForAllItems(false); });
    };
    RoomComponent.prototype.line = function (index, shelf) {
        var y = this.positions.marginTop + index * this.positions.shelfHeight;
        shelf.updatePos(0, y);
    };
    RoomComponent.prototype.setShelfPositions = function () {
        var _this = this;
        this.shelfs.forEach(function (x, i) {
            _this.line(i, x);
        });
    };
    RoomComponent.prototype.createShelfs = function () {
        var _this = this;
        this.shelfGroup.removeAll(true);
        this.images.forEach(function (x) { return x.visible = true; });
        var emptyShelfs = __WEBPACK_IMPORTED_MODULE_7_lodash__["times"](__WEBPACK_IMPORTED_MODULE_6_games_shop_logic__["c" /* shelfCount */] - this.props.shelfs.length, function () { return ({ items: [], length: 0 }); });
        var notEmptyPosition = emptyShelfs.length >= 2 ? 2 : emptyShelfs.length;
        this.shelfs = __WEBPACK_IMPORTED_MODULE_4_core_utils__["a" /* Arrays */].insert(emptyShelfs, notEmptyPosition, this.props.shelfs).map(function (shelf, index) {
            return _this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_5_games_shop_components_roomShelfComponent__["a" /* RoomShelfComponent */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, shelf, { index: index }));
        });
        this.setShelfPositions();
        this.shelfGroup.addChildren(__WEBPACK_IMPORTED_MODULE_7_lodash__["flatten"](this.shelfs));
    };
    RoomComponent.prototype.onPropsUpdate = function () {
        this.createShelfs();
    };
    return RoomComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 340:
/*!*********************************************************!*\
  !*** ./src/games/shop/components/roomShelfComponent.ts ***!
  \*********************************************************/
/*! exports provided: RoomShelfComponent */
/*! exports used: RoomShelfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomShelfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_shop_images__ = __webpack_require__(/*! games/shop/images */ 172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_shop_logic__ = __webpack_require__(/*! games/shop/logic */ 193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);








var emptyItem = -1;
var rng = new __WEBPACK_IMPORTED_MODULE_4_core_utils__["e" /* RandomGenerator */]();
var books = __WEBPACK_IMPORTED_MODULE_7_lodash__["range"](__WEBPACK_IMPORTED_MODULE_6_games_shop_logic__["c" /* shelfCount */]).map(function (x) { return rng.array(__WEBPACK_IMPORTED_MODULE_6_games_shop_logic__["d" /* shelfMaxPositionCount */], __WEBPACK_IMPORTED_MODULE_5_games_shop_images__["a" /* Images */].bookCount); });
var RoomShelfComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](RoomShelfComponent, _super);
    function RoomShelfComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({
            between: 22
        });
        _this.rng = new __WEBPACK_IMPORTED_MODULE_4_core_utils__["e" /* RandomGenerator */]();
        _this.images = [];
        _this.imageSizes = __WEBPACK_IMPORTED_MODULE_5_games_shop_images__["a" /* Images */].sizes();
        _this.itemScale = _this.imageSizes.itemSmall / _this.imageSizes.item;
        return _this;
    }
    RoomShelfComponent.prototype.setVisibleForItems = function (items, visible) {
        this.images.forEach(function (x) {
            if (__WEBPACK_IMPORTED_MODULE_7_lodash__["includes"](items, x.tag)) {
                x.visible = visible;
            }
        });
    };
    RoomShelfComponent.prototype.setVisibleForAllItems = function (visible) {
        this.images.filter(function (x) { return x.tag != emptyItem; }).forEach(function (x) {
            x.visible = visible;
        });
    };
    RoomShelfComponent.prototype.onAnswer = function (answer) {
        if (__WEBPACK_IMPORTED_MODULE_1_core_types_logic__["a" /* AnswerStatus */].isCorrect(answer.status)) {
            this.setVisibleForItems([answer.answerId], true);
        }
    };
    RoomShelfComponent.prototype.getItemX = function (position) {
        return (this.positions.between + this.imageSizes.itemSmall) * position;
    };
    RoomShelfComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        this.removeAll(true);
        var items = this.props.items.map(function (x) { return ({
            position: x.position,
            item: x.item,
            key: __WEBPACK_IMPORTED_MODULE_5_games_shop_images__["a" /* Images */].item(x.item)
        }); }).concat(__WEBPACK_IMPORTED_MODULE_7_lodash__["range"](__WEBPACK_IMPORTED_MODULE_6_games_shop_logic__["d" /* shelfMaxPositionCount */] - this.props.length).map(function (i) {
            var position = _this.props.length + i;
            return {
                position: position,
                item: emptyItem,
                key: __WEBPACK_IMPORTED_MODULE_5_games_shop_images__["a" /* Images */].book(books[_this.props.index][position])
            };
        }));
        this.images = items
            .map(function (x) {
            var img = _this.addImage([x.key, [_this.getItemX(x.position), 0]]).updateFields({ tag: x.item });
            img.symmetricScale = _this.itemScale;
            return img;
        });
    };
    return RoomShelfComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 341:
/*!********************************************************!*\
  !*** ./src/games/shop/components/roomDarkComponent.ts ***!
  \********************************************************/
/*! exports provided: positions, RoomDarkComponent */
/*! exports used: RoomDarkComponent, positions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return positions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomDarkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components__ = __webpack_require__(/*! core/ui/components */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_shop_images__ = __webpack_require__(/*! games/shop/images */ 172);





var positions = function () { return __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
    right: 45,
    picture: Object(__WEBPACK_IMPORTED_MODULE_3_core_utils__["f" /* tuple */])(500, 133),
    toktok: Object(__WEBPACK_IMPORTED_MODULE_3_core_utils__["f" /* tuple */])(1127, 126)
}); };
var RoomDarkComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](RoomDarkComponent, _super);
    function RoomDarkComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.positions = positions();
        return _this;
    }
    RoomDarkComponent.prototype.onInit = function () {
        this.addImage([__WEBPACK_IMPORTED_MODULE_4_games_shop_images__["a" /* Images */].night, [0, 0]]);
        this.addImage([__WEBPACK_IMPORTED_MODULE_4_games_shop_images__["a" /* Images */].toktokDark, this.positions.toktok]);
    };
    return RoomDarkComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components__["e" /* GameComponent */]));



/***/ }),

/***/ 342:
/*!****************************************!*\
  !*** ./src/games/shop/translations.ts ***!
  \****************************************/
/*! exports provided: Translations */
/*! exports used: Translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Translations; });
var Translations;
(function (Translations) {
    Translations.remember = "remember";
    Translations.title = "title";
    Translations.subtitle = "subtitle";
})(Translations || (Translations = {}));


/***/ }),

/***/ 343:
/*!**********************************!*\
  !*** ./src/games/shop/levels.ts ***!
  \**********************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types__ = __webpack_require__(/*! core/types */ 15);

function level(itemCount, hiddenItemCount, wrongAnswerCount, positionCount) {
    return { itemCount: itemCount, hiddenItemCount: hiddenItemCount, wrongAnswerCount: wrongAnswerCount, positionCount: positionCount };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types__["c" /* createLevels */])({
    // 1: level(9,	6,	18,	14),
    // 1: level(9,	6,	6,	14),
    1: level(3, 1, 2, 5),
    2: level(3, 2, 2, 6),
    3: level(4, 2, 2, 7),
    4: level(4, 3, 3, 8),
    5: level(5, 3, 3, 9),
    6: level(6, 4, 4, 10),
    7: level(7, 4, 5, 11),
    8: level(8, 5, 5, 12),
    9: level(8, 6, 6, 13),
    10: level(9, 6, 6, 14)
});


/***/ })

});
//# sourceMappingURL=5.bundle.js.map