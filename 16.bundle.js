webpackJsonpNewGames([16],{

/***/ 141:
/*!************************************!*\
  !*** ./src/games/observer/meta.ts ***!
  \************************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_games_observer_components_mainComponent__ = __webpack_require__(/*! games/observer/components/mainComponent */ 273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_games_observer_images__ = __webpack_require__(/*! games/observer/images */ 189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_games_observer_levels__ = __webpack_require__(/*! games/observer/levels */ 278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_games_observer_logic__ = __webpack_require__(/*! games/observer/logic */ 279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_observer_sounds__ = __webpack_require__(/*! games/observer/sounds */ 199);





var gameId = "observer";
var scoreOptions = {
    time: {
        minAnswerTime: 1500,
        maxAnswerTime: 10000
    },
    scoreAnswer: 100,
    scoreBonus: 50,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_2_games_observer_levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 5, maxLevel: 5 }, { seqCount: 3, maxLevel: 10 }]
};
var metaData = {
    gameId: gameId,
    title: "Observer",
    logic: __WEBPACK_IMPORTED_MODULE_3_games_observer_logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_0_games_observer_components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    sounds: __WEBPACK_IMPORTED_MODULE_4_games_observer_sounds__["a" /* Sounds */].keys,
    images: __WEBPACK_IMPORTED_MODULE_1_games_observer_images__["a" /* Images */].data,
    atlasCount: 6,
    size: {
        width: 2048,
        height: 1280,
        heightMin: 1152
    }
};


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

/***/ 189:
/*!**************************************!*\
  !*** ./src/games/observer/images.ts ***!
  \**************************************/
/*! exports provided: Images */
/*! exports used: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

var Images;
(function (Images) {
    var carCount = 3;
    var shapeCount = 3;
    var colorCount = 3;
    var carFonCount = 3;
    Images.hotelCount = 5;
    Images.cloudCount = 4;
    Images.bgCount = 4;
    function carBody(id) {
        return "car_body_" + id;
    }
    Images.carBody = carBody;
    function carFon(id) {
        return "car_fon_" + id;
    }
    Images.carFon = carFon;
    function carWheel(id) {
        return "car_wheel_" + id;
    }
    Images.carWheel = carWheel;
    function hotel(id) {
        return "hotel_" + id;
    }
    Images.hotel = hotel;
    function cloud(id) {
        return "cloud_" + id;
    }
    Images.cloud = cloud;
    function bg(id) {
        return "bg_" + id;
    }
    Images.bg = bg;
    function item(item) {
        return "item_" + item.shape + "_" + item.color;
    }
    Images.item = item;
    Images.light = "light";
    var items = __WEBPACK_IMPORTED_MODULE_0_lodash__["flatMap"](__WEBPACK_IMPORTED_MODULE_0_lodash__["range"](shapeCount), function (shape) { return __WEBPACK_IMPORTED_MODULE_0_lodash__["range"](colorCount).map(function (color) { return item({ shape: shape, color: color }); }); });
    var carBodies = __WEBPACK_IMPORTED_MODULE_0_lodash__["range"](carCount).map(carBody);
    var carWheels = __WEBPACK_IMPORTED_MODULE_0_lodash__["range"](carCount).map(carWheel);
    Images.bgList = __WEBPACK_IMPORTED_MODULE_0_lodash__["range"](Images.bgCount).map(bg);
    Images.hotelList = __WEBPACK_IMPORTED_MODULE_0_lodash__["range"](Images.hotelCount).map(hotel);
    Images.cloudList = __WEBPACK_IMPORTED_MODULE_0_lodash__["range"](Images.cloudCount).map(cloud);
    Images.carFons = __WEBPACK_IMPORTED_MODULE_0_lodash__["range"](carFonCount).map(carFon);
    Images.win_close = "win_close";
    Images.win_open = "win_open";
    Images.fon_2 = "fon_2";
    Images.keys = [
        Images.light,
        Images.fon_2,
        "bg_left",
        "shar",
        Images.win_close,
        Images.win_open
    ].concat(Images.bgList, Images.cloudList, Images.hotelList, items, Images.carFons, carBodies, carWheels);
    Images.data = {
        sprites: Images.keys,
    };
})(Images || (Images = {}));


/***/ }),

/***/ 199:
/*!**************************************!*\
  !*** ./src/games/observer/sounds.ts ***!
  \**************************************/
/*! exports provided: Sounds */
/*! exports used: Sounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sounds; });
var Sounds;
(function (Sounds) {
    Sounds.car_01 = "car_01";
    Sounds.car_02 = "car_02";
    Sounds.car_03 = "car_03";
    Sounds.background_city = "background_city";
    Sounds.intro = "intro";
    Sounds.neon_lamp = "neon_lamp";
    Sounds.keys = [Sounds.car_01, Sounds.car_02, Sounds.car_03, Sounds.background_city, Sounds.intro, Sounds.neon_lamp];
})(Sounds || (Sounds = {}));


/***/ }),

/***/ 273:
/*!********************************************************!*\
  !*** ./src/games/observer/components/mainComponent.ts ***!
  \********************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_signals__ = __webpack_require__(/*! core/ui/animations/signals */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_answers_answerControlType__ = __webpack_require__(/*! core/ui/components/answers/answerControlType */ 65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_observer_sounds__ = __webpack_require__(/*! games/observer/sounds */ 199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__houseComponent__ = __webpack_require__(/*! ./houseComponent */ 274);






var durations = {
    init: 1000
};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.answersControl = __WEBPACK_IMPORTED_MODULE_2_core_ui_components_answers_answerControlType__["a" /* AnswerControlType */].Numpad;
        return _this;
    }
    MainComponent.prototype.onInit = function () {
        var _this = this;
        this.scene = this.add(this.createComponent(__WEBPACK_IMPORTED_MODULE_5__houseComponent__["a" /* HouseComponent */]));
        this.context.uiService.mainComponent.onIntroComplete.addOnce(function () { return _this.playSound(__WEBPACK_IMPORTED_MODULE_4_games_observer_sounds__["a" /* Sounds */].background_city, true); });
    };
    MainComponent.prototype.onNewTask = function (task) {
        var _this = this;
        if (this.isFirstTask) {
            this.scene.updateWindows(task.initWindows);
        }
        var init = this.isFirstTask
            ? this.startIntro()
            : __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_signals__["a" /* Signals */].memorize();
        init.addOnce(function () {
            return _this.scene.setProps(task.windows);
        });
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 274:
/*!*********************************************************!*\
  !*** ./src/games/observer/components/houseComponent.ts ***!
  \*********************************************************/
/*! exports provided: HouseComponent */
/*! exports used: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic_sys__ = __webpack_require__(/*! core/logic/sys */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__ = __webpack_require__(/*! core/ui/animations/commonAnimations */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_games_observer_components_houseCarComponent__ = __webpack_require__(/*! games/observer/components/houseCarComponent */ 275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_games_observer_components_houseWindowComponent__ = __webpack_require__(/*! games/observer/components/houseWindowComponent */ 276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_games_observer_images__ = __webpack_require__(/*! games/observer/images */ 189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_games_observer_sounds__ = __webpack_require__(/*! games/observer/sounds */ 199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash__);













var durations = {
    truck: 1500,
    car: 1500,
    carDelay: 5000,
    cloud: 40000,
    cloudDelay: 8000,
    hotel: 5000,
    hotelDelay: 100,
    hotelInterval: 10000,
    dayStage: 20000
};
var simpleAnimation = !__WEBPACK_IMPORTED_MODULE_1_core_logic_sys__["a" /* Sys */].isDesktop;
var bg = (simpleAnimation ? [__WEBPACK_IMPORTED_MODULE_10_games_observer_images__["a" /* Images */].bg(0)] : __WEBPACK_IMPORTED_MODULE_10_games_observer_images__["a" /* Images */].bgList).reverse().map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_6_core_utils__["f" /* tuple */])(x, Object(__WEBPACK_IMPORTED_MODULE_6_core_utils__["f" /* tuple */])(0, 0)); });
var HouseComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](HouseComponent, _super);
    function HouseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.windowPositions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].createArray([
            [790, 388],
            [920, 388],
            [1054, 388],
            [1184, 388],
            [790, 545],
            [920, 545],
            [1054, 545],
            [1184, 545],
            [790, 710],
            [920, 710],
            [1054, 710],
            [1184, 710],
            [790, 866],
            [920, 866],
            [1054, 866],
            [1184, 866]
        ]);
        _this.positions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].create({
            truck: [__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].widthNormal, 365],
            car1: [__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].widthNormal, 1000],
            car2: [__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].widthNormal, 1015],
            cloudMin: 20,
            cloudMax: 80,
            light1: Object(__WEBPACK_IMPORTED_MODULE_6_core_utils__["f" /* tuple */])(478, 730),
            light2: Object(__WEBPACK_IMPORTED_MODULE_6_core_utils__["f" /* tuple */])(1468, 730)
        });
        _this.hotelX = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].widthNormal / 2 + 305;
        _this.imagePositions = __WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].createImagePos(bg.concat([
            ['cloud_0', [-1000, 72]],
            ['cloud_1', [-1000, 134]],
            ['cloud_2', [-1000, 182]],
            ['cloud_3', [-1000, 261]],
            ['shar', [-1000, 100]],
            ['fon_2', [0, 0]],
            ['hotel_0', [_this.hotelX, 477]],
            ['hotel_1', [_this.hotelX, 524]],
            ['hotel_2', [_this.hotelX, 571]],
            ['hotel_3', [_this.hotelX, 618]],
            ['hotel_4', [_this.hotelX, 666]]
        ]));
        _this.images = _this.addImages(_this.imagePositions);
        _this.bgList = __WEBPACK_IMPORTED_MODULE_12_lodash__["range"](3).map(function (i) { return _this.images.get(__WEBPACK_IMPORTED_MODULE_10_games_observer_images__["a" /* Images */].bg(i)); });
        _this.hotelList = __WEBPACK_IMPORTED_MODULE_10_games_observer_images__["a" /* Images */].hotelList.map(function (x) { return _this.images.get(x).updateFields({ visible: false }); });
        _this.lights = [_this.positions.light1, _this.positions.light2].map(function (p) { return _this.addImage([__WEBPACK_IMPORTED_MODULE_10_games_observer_images__["a" /* Images */].light, p]).updateFields({ visible: false }); });
        _this.lightsVisibla = false;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_6_core_utils__["e" /* RandomGenerator */]();
        _this.hotelAnimations = [
            [2, 1, 3, 0, 4],
            [0, 1, 2, 3, 4],
            [0, 4, 1, 3, 2],
            [4, 3, 2, 1, 0]
        ];
        _this.hotelSeq = new __WEBPACK_IMPORTED_MODULE_7_core_utils_circleSeq__["a" /* CircleSeq */](__WEBPACK_IMPORTED_MODULE_12_lodash__["range"](_this.hotelAnimations.length));
        return _this;
    }
    // truck = this.add(this.createComponentWithProps(HouseCarComponent, 0)).setPos([300,300])
    HouseComponent.prototype.onInit = function () {
        var _this = this;
        this.windows = this.windowPositions.map(function (_a) {
            var x = _a[0], y = _a[1];
            return _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_9_games_observer_components_houseWindowComponent__["a" /* HouseWindowComponent */]).updatePos(x, y));
        });
        this.car1 = this.add(this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_8_games_observer_components_houseCarComponent__["a" /* HouseCarComponent */], 1)).setPos(this.positions.car1);
        this.car2 = this.add(this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_8_games_observer_components_houseCarComponent__["a" /* HouseCarComponent */], 2)).setPos(this.positions.car2);
        this.context.uiService.mainComponent.onIntroComplete.addOnce(function () { return _this.startAnimations(); });
    };
    HouseComponent.prototype.startAnimations = function () {
        var _this = this;
        var cloudSeq = new __WEBPACK_IMPORTED_MODULE_7_core_utils_circleSeq__["b" /* UniqSeq */](__WEBPACK_IMPORTED_MODULE_10_games_observer_images__["a" /* Images */].cloudList.length);
        var updateCloud = function (c) {
            c.key = _this.gameKey(__WEBPACK_IMPORTED_MODULE_10_games_observer_images__["a" /* Images */].cloudList[cloudSeq.next()]);
            //c.y = this.rng.int(this.positions.cloudMax, this.positions.cloudMin)
        };
        __WEBPACK_IMPORTED_MODULE_10_games_observer_images__["a" /* Images */].cloudList.forEach(function (x) {
            var c = _this.images.get(x);
            updateCloud(c);
            __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].fullScreenWidthInf(c, durations.cloud, durations.cloudDelay).onLoop.add(function () {
                updateCloud(c);
            });
        });
        __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].fullScreenWidthInf(this.images.get("shar"), durations.cloud, durations.cloudDelay);
        this.hotelAnimation();
        if (!simpleAnimation) {
            this.bgAnimation();
        }
        var car1Tween = __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].fullScreenWidthInf(this.car1, durations.car, durations.carDelay, false, false);
        var car2Tween = __WEBPACK_IMPORTED_MODULE_2_core_ui_animations_commonAnimations__["a" /* CommonAnimations */].fullScreenWidthInf(this.car2, durations.car, durations.carDelay, false);
        __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__["a" /* Tweens */].onPercent(car1Tween, 0, function () { return _this.playSound(__WEBPACK_IMPORTED_MODULE_11_games_observer_sounds__["a" /* Sounds */].car_01); });
        __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__["a" /* Tweens */].onPercent(car2Tween, 0, function () { return _this.playSound(__WEBPACK_IMPORTED_MODULE_11_games_observer_sounds__["a" /* Sounds */].car_03); });
    };
    HouseComponent.prototype.bgAnimation = function () {
        var _this = this;
        var _a = this.bgList.map(function (bg, i) {
            return __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__["a" /* Tweens */].start({
                to: { alpha: 0 },
                target: bg,
                duration: durations.dayStage,
                notStart: true,
                onComplete: function () {
                    if (i == 1) {
                        _this.changeLight(true);
                    }
                }
            });
        }), t1 = _a[0], rest = _a.slice(1);
        t1.chain.apply(t1, rest);
        t1.start();
    };
    HouseComponent.prototype.changeLight = function (visible) {
        this.lightsVisibla = visible;
        this.lights.forEach(function (x) { return x.visible = visible; });
    };
    HouseComponent.prototype.enableHotel = function (index) {
        var hotel = this.hotelList[index];
        hotel.visible = true;
        this.delay(durations.hotel).addOnce(function () {
            hotel.visible = false;
        });
    };
    HouseComponent.prototype.hotelAnimation = function (index) {
        var _this = this;
        if (index === void 0) { index = this.hotelSeq.next(); }
        this.playSound(__WEBPACK_IMPORTED_MODULE_11_games_observer_sounds__["a" /* Sounds */].neon_lamp);
        this.hotelAnimations[index].forEach(function (x, i) { return _this.delay(i * durations.hotelDelay).addOnce(function () { return _this.enableHotel(x); }); });
        this.delay(durations.hotelInterval).addOnce(function () { return _this.hotelAnimation(_this.hotelSeq.next()); });
    };
    HouseComponent.prototype.updateWindows = function (props) {
        __WEBPACK_IMPORTED_MODULE_6_core_utils__["a" /* Arrays */].zipTake(this.windows, props).forEach(function (_a) {
            var x = _a[0], y = _a[1];
            x.setProps(y);
        });
    };
    HouseComponent.prototype.transition = function () {
        var _this = this;
        this.disableInput(true);
        this.playSound(__WEBPACK_IMPORTED_MODULE_11_games_observer_sounds__["a" /* Sounds */].car_02);
        var truck = this.add(this.createComponentWithProps(__WEBPACK_IMPORTED_MODULE_8_games_observer_components_houseCarComponent__["a" /* HouseCarComponent */], 0)).setPos(this.positions.truck);
        this.bringToTop(this.car1);
        this.bringToTop(this.car2);
        var updated = false;
        var props = {
            target: truck, to: { x: -__WEBPACK_IMPORTED_MODULE_4_core_ui_common_sizes__["a" /* Sizes */].width },
            duration: durations.truck,
        };
        this.delay(durations.truck * 0.45).addOnce(function () {
            _this.updateWindows(_this.props);
            _this.disableInput(false);
        });
        __WEBPACK_IMPORTED_MODULE_3_core_ui_animations_tweens__["a" /* Tweens */].start(props).onComplete.addOnce(function () { return truck.destroy(true); });
    };
    HouseComponent.prototype.onPropsUpdate = function () {
        this.transition();
    };
    return HouseComponent;
}(__WEBPACK_IMPORTED_MODULE_5_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 275:
/*!************************************************************!*\
  !*** ./src/games/observer/components/houseCarComponent.ts ***!
  \************************************************************/
/*! exports provided: HouseCarComponent */
/*! exports used: HouseCarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseCarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_utils_circleSeq__ = __webpack_require__(/*! core/utils/circleSeq */ 158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_games_observer_images__ = __webpack_require__(/*! games/observer/images */ 189);







var durations = {
    wheel: 250
};
var carFonsSeq = new __WEBPACK_IMPORTED_MODULE_5_core_utils_circleSeq__["b" /* UniqSeq */](__WEBPACK_IMPORTED_MODULE_6_games_observer_images__["a" /* Images */].carFons.length);
var HouseCarComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](HouseCarComponent, _super);
    function HouseCarComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cars = [
            _this.createCar([184, 578, 1140, 1260], 750, 0, true, __WEBPACK_IMPORTED_MODULE_6_games_observer_images__["a" /* Images */].carFons.map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_4_core_utils__["f" /* tuple */])(x, Object(__WEBPACK_IMPORTED_MODULE_4_core_utils__["f" /* tuple */])(532, 21)); })),
            _this.createCar([62, 339], 133, 1),
            _this.createCar([105, 360], 180, 2, false)
        ];
        return _this;
    }
    HouseCarComponent.prototype.createCar = function (wheelXs, wheelY, id, left, images) {
        if (left === void 0) { left = true; }
        if (images === void 0) { images = []; }
        return {
            body: [__WEBPACK_IMPORTED_MODULE_6_games_observer_images__["a" /* Images */].carBody(id), [0, 0]],
            wheels: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].createImagePos(wheelXs.map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_4_core_utils__["f" /* tuple */])(__WEBPACK_IMPORTED_MODULE_6_games_observer_images__["a" /* Images */].carWheel(id), Object(__WEBPACK_IMPORTED_MODULE_4_core_utils__["f" /* tuple */])(x, wheelY)); })),
            left: left,
            images: __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].createImagePos(images)
        };
    };
    HouseCarComponent.prototype.onPropsUpdate = function () {
        var _this = this;
        var car = this.cars[this.props];
        this.addImage(car.body).angle;
        var wheels = car.wheels.map(function (x) { return _this.addImage(x).anchorCenter(); });
        wheels.forEach(function (w) {
            return __WEBPACK_IMPORTED_MODULE_1_core_ui_animations_tweens__["a" /* Tweens */].start({
                to: { angle: (car.left ? -1 : 1) * 360 },
                target: w,
                duration: durations.wheel,
                repeat: -1
            });
        });
        if (car.images.length) {
            this.addImage(car.images[carFonsSeq.next()]);
        }
    };
    return HouseCarComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 276:
/*!***************************************************************!*\
  !*** ./src/games/observer/components/houseWindowComponent.ts ***!
  \***************************************************************/
/*! exports provided: HouseWindowComponent */
/*! exports used: HouseWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_utils_maps__ = __webpack_require__(/*! core/utils/maps */ 277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_observer_images__ = __webpack_require__(/*! games/observer/images */ 189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);






var itemKey = __WEBPACK_IMPORTED_MODULE_4_games_observer_images__["a" /* Images */].item({ shape: 0, color: 0 });
var HouseWindowComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](HouseWindowComponent, _super);
    function HouseWindowComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imgPositions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].createImagePos([
            [__WEBPACK_IMPORTED_MODULE_4_games_observer_images__["a" /* Images */].win_open, [0, 0]],
            [__WEBPACK_IMPORTED_MODULE_4_games_observer_images__["a" /* Images */].win_close, [0, 0]],
            [itemKey, [22, 35]]
        ]);
        return _this;
    }
    HouseWindowComponent.prototype.onInit = function () {
        var images = this.addImages(this.imgPositions);
        var get = function (key) { return __WEBPACK_IMPORTED_MODULE_3_core_utils_maps__["a" /* Maps */].getUnsafe(images, key); };
        this.winClose = get(__WEBPACK_IMPORTED_MODULE_4_games_observer_images__["a" /* Images */].win_close);
        this.winOpen = get(__WEBPACK_IMPORTED_MODULE_4_games_observer_images__["a" /* Images */].win_open);
        this.item = get(itemKey);
    };
    HouseWindowComponent.prototype.onPropsUpdate = function () {
        var item = this.props.item;
        var empty = __WEBPACK_IMPORTED_MODULE_5_lodash__["isNil"](item);
        this.item.visible = !empty;
        this.winClose.visible = empty;
        if (item) {
            this.item.key = this.gameKey(__WEBPACK_IMPORTED_MODULE_4_games_observer_images__["a" /* Images */].item(item));
        }
    };
    return HouseWindowComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 277:
/*!********************************!*\
  !*** ./src/core/utils/maps.ts ***!
  \********************************/
/*! exports provided: Maps */
/*! exports used: Maps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Maps; });
var Maps;
(function (Maps) {
    function getUnsafe(map, key) {
        var v = map.get(key);
        if (v) {
            return v;
        }
        throw new Error("key " + key + " doesn't exists");
    }
    Maps.getUnsafe = getUnsafe;
})(Maps || (Maps = {}));


/***/ }),

/***/ 278:
/*!**************************************!*\
  !*** ./src/games/observer/levels.ts ***!
  \**************************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types__ = __webpack_require__(/*! core/types */ 15);

var max = __WEBPACK_IMPORTED_MODULE_0_core_types__["b" /* NumberIntervalSyntax */].max;
var minMax = __WEBPACK_IMPORTED_MODULE_0_core_types__["b" /* NumberIntervalSyntax */].minMax;
function level(itemCount, shapes, colors, changeCount) {
    return { itemCount: itemCount, shapes: shapes, colors: colors, changeCount: changeCount };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types__["c" /* createLevels */])({
    1: level(3, 1, 1, max(3)),
    2: level(4, 1, 1, max(4)),
    3: level(4, 1, 2, max(4)),
    4: level(5, 1, 2, max(5)),
    5: level(5, 2, 2, max(5)),
    6: level(5, 2, 2, minMax(2, 5)),
    7: level(6, 2, 2, minMax(2, 5)),
    8: level(6, 2, 3, minMax(2, 5)),
    9: level(6, 3, 3, minMax(2, 5)),
    10: level(7, 3, 3, minMax(3, 6))
});


/***/ }),

/***/ 279:
/*!*************************************!*\
  !*** ./src/games/observer/logic.ts ***!
  \*************************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils__ = __webpack_require__(/*! core/utils */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);




var maxWindows = 16;
function newWindow(shape, color) {
    return { shape: shape, color: color };
}
var ChangeType;
(function (ChangeType) {
    ChangeType[ChangeType["Move"] = 0] = "Move";
    ChangeType[ChangeType["ChangeIndex"] = 1] = "ChangeIndex";
})(ChangeType || (ChangeType = {}));
var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.random = new __WEBPACK_IMPORTED_MODULE_2_core_utils__["e" /* RandomGenerator */]();
        _this.allPositions = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](maxWindows);
        return _this;
    }
    Logic.prototype.createRandomItem = function (level) {
        return newWindow(this.random.int(level.shapes), this.random.int(level.colors));
    };
    Logic.prototype.createNewItems = function (level) {
        var _this = this;
        return this.random.uniqArray(maxWindows, level.itemCount)
            .map(function (position) { return ({ position: position, item: _this.createRandomItem(level) }); });
    };
    Logic.prototype.getItems = function (field) {
        return field.map(function (x, position) { return ({ position: position, item: x.item }); }).filter(function (x) { return !__WEBPACK_IMPORTED_MODULE_3_lodash__["isNil"](x.item); });
    };
    Logic.prototype.positionsToWindows = function (itemPositions) {
        var map = new Map(itemPositions.map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_2_core_utils__["f" /* tuple */])(x.position, x.item); }));
        return this.allPositions.map(function (x) { return ({ item: map.get(x) }); });
    };
    Logic.prototype.changesCount = function (task1, task2) {
        return __WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].zip(task1.windows, task2.windows).filter(function (_a) {
            var x = _a[0], y = _a[1];
            var i1 = x.item || {};
            var i2 = y.item || {};
            return y.item && (i1.shape != i2.shape || i1.color != i2.color);
        }).length;
    };
    Logic.prototype.nextTask = function (level) {
        var _this = this;
        var isFirst = !this.prevTask;
        var itemPositions = isFirst ? this.createNewItems(level) : this.getItems(this.prevTask.windows);
        var changeCount = isFirst
            ? level.changeCount.min
            : Math.min(this.prevLevel.changeCount.max, this.random.intInterval(level.changeCount));
        var _a = __WEBPACK_IMPORTED_MODULE_2_core_utils__["a" /* Arrays */].split(itemPositions, changeCount), itemsToChange = _a[0], restItems = _a[1];
        var changeNewPositions = __WEBPACK_IMPORTED_MODULE_3_lodash__["difference"](this.random.range(maxWindows), itemPositions.map(function (x) { return x.position; }));
        var change = function (itemPosition, index) {
            var changeItem = index >= changeNewPositions.length
                || (level.colors > 1 || level.shapes > 1) && _this.random.bool();
            if (changeItem) {
                var changeShape = level.shapes > 1 && _this.random.bool();
                var allShapes = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](level.shapes);
                var allColors = __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](level.colors);
                var newItem = changeShape
                    ? __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, itemPosition.item, { shape: _this.random.sample(allShapes, [itemPosition.item.shape]) }) : __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, itemPosition.item, { color: _this.random.sample(allColors, [itemPosition.item.color]) });
                return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, itemPosition, { item: newItem });
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, itemPosition, { position: changeNewPositions[index] });
            }
        };
        var changedItems = itemsToChange.map(function (x, i) { return change(x, i); });
        var itemsMapData = __WEBPACK_IMPORTED_MODULE_3_lodash__["concat"](changedItems, restItems).map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_2_core_utils__["f" /* tuple */])(x.position, x.item); });
        var newItemsMap = new Map(itemsMapData);
        var addNewItemCount = level.itemCount - newItemsMap.size;
        __WEBPACK_IMPORTED_MODULE_2_core_utils__["b" /* Dbg */].assert(addNewItemCount < 0, "addNewItemCount < 0");
        if (addNewItemCount > 0) {
            var allUsedPositions = __WEBPACK_IMPORTED_MODULE_3_lodash__["concat"](itemPositions.map(function (x) { return x.position; }), changedItems.map(function (x) { return x.position; }));
            var addNewItemPositions = this.random.subset(__WEBPACK_IMPORTED_MODULE_3_lodash__["difference"](this.allPositions, allUsedPositions), addNewItemCount);
            addNewItemPositions.forEach(function (x) {
                newItemsMap.set(x, _this.createRandomItem(level));
            });
        }
        var windows = this.allPositions.map(function (x) { return ({ item: newItemsMap.get(x) }); });
        var initWindows = isFirst ? this.positionsToWindows(itemPositions) : [];
        var answers = [changeCount + addNewItemCount];
        // console.log(answers)
        var task = { initWindows: initWindows, windows: windows, answers: answers };
        this.prevTask = task;
        this.prevLevel = level;
        return task;
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ })

});
//# sourceMappingURL=16.bundle.js.map