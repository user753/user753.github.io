webpackJsonpNewGames([10],{

/***/ 136:
/*!*******************************!*\
  !*** ./src/games/sea/meta.ts ***!
  \*******************************/
/*! exports provided: gameId, metaData */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameId", function() { return gameId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaData", function() { return metaData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets__ = __webpack_require__(/*! ./assets */ 180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__ = __webpack_require__(/*! ./components/mainComponent */ 261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__levels__ = __webpack_require__(/*! ./levels */ 263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic__ = __webpack_require__(/*! ./logic */ 264);




var gameId = "sea";
var scoreOptions = {
    scoreAnswer: 100,
    scoreBonus: 0,
    scoreBonusPerLevel: 5
};
var levelOptions = {
    levels: __WEBPACK_IMPORTED_MODULE_2__levels__["a" /* levels */],
    levelsSeqCounts: [{ seqCount: 6, maxLevel: 100 }]
};
var metaData = {
    gameId: gameId,
    title: "Word search",
    logic: __WEBPACK_IMPORTED_MODULE_3__logic__["a" /* Logic */],
    component: __WEBPACK_IMPORTED_MODULE_1__components_mainComponent__["a" /* MainComponent */],
    scoreOptions: scoreOptions,
    levelOptions: levelOptions,
    darkBg: true,
    images: __WEBPACK_IMPORTED_MODULE_0__assets__["a" /* Images */].data,
    atlasCount: 2,
    tutorialTaskCount: 3,
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

/***/ 178:
/*!***********************************!*\
  !*** ./src/core/utils/matrixs.ts ***!
  \***********************************/
/*! exports provided: Matrixs */
/*! exports used: Matrixs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matrixs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_utils_tuples__ = __webpack_require__(/*! core/utils/tuples */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_utils_undef__ = __webpack_require__(/*! core/utils/undef */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);



var Matrixs;
(function (Matrixs) {
    Matrixs.directions = {
        up: { x: -1, y: 0 },
        down: { x: 1, y: 0 },
        left: { x: 0, y: -1 },
        right: { x: 0, y: 1 }
    };
    // export const move(p: number[], directions: Direction[]){
    //   // directions.forEach(d => {
    //   //   const {x, y} = directions[d]
    //   // })
    // }
    function get(m, _a, def) {
        var x = _a[0], y = _a[1];
        var row = m[y];
        return row ? row[x] : def;
    }
    Matrixs.get = get;
    function set(m, _a, value) {
        var x = _a[0], y = _a[1];
        var row = m[y];
        if (__WEBPACK_IMPORTED_MODULE_1_core_utils_undef__["a" /* Undef */].is(row)) {
            row = [];
            m[y] = row;
        }
        row[x] = value;
    }
    Matrixs.set = set;
    function compact(m) {
        return m.map(__WEBPACK_IMPORTED_MODULE_2_lodash__["compact"]);
    }
    Matrixs.compact = compact;
    function create(colCount, rowCount, fn) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](rowCount).map(function (y) { return __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](colCount).map(function (x) { return fn(x, y); }); });
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
        __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](Math.max(f.length, s.length)).forEach(function (y) {
            __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](Math.max((f[y] || []).length, (s[y] || []).length)).forEach(function (x) {
                var p = Object(__WEBPACK_IMPORTED_MODULE_0_core_utils_tuples__["a" /* tuple */])(x, y);
                var fe = get(f, p);
                var se = get(s, p);
                if (!__WEBPACK_IMPORTED_MODULE_1_core_utils_undef__["a" /* Undef */].is(fe) && !__WEBPACK_IMPORTED_MODULE_1_core_utils_undef__["a" /* Undef */].is(se)) {
                    both.push([fe, se, p]);
                }
                else if (!__WEBPACK_IMPORTED_MODULE_1_core_utils_undef__["a" /* Undef */].is(fe)) {
                    first.push([fe, p]);
                }
                else if (!__WEBPACK_IMPORTED_MODULE_1_core_utils_undef__["a" /* Undef */].is(se)) {
                    second.push([se, p]);
                }
            });
        });
        return Object(__WEBPACK_IMPORTED_MODULE_0_core_utils_tuples__["a" /* tuple */])(first, second, both);
    }
    Matrixs.intersection = intersection;
})(Matrixs || (Matrixs = {}));


/***/ }),

/***/ 180:
/*!*********************************!*\
  !*** ./src/games/sea/assets.ts ***!
  \*********************************/
/*! exports provided: Translations, Images */
/*! exports used: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Translations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images; });
var Translations;
(function (Translations) {
    Translations.task = "task";
    Translations.category = function (id) { return "category" + id; };
})(Translations || (Translations = {}));
var Images;
(function (Images) {
    Images.bg = "bg";
    Images.sand = "sand";
    Images.line = "line";
    Images.data = {
        sprites: []
    };
})(Images || (Images = {}));


/***/ }),

/***/ 261:
/*!***************************************************!*\
  !*** ./src/games/sea/components/mainComponent.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/*! exports used: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_positions__ = __webpack_require__(/*! core/ui/common/positions */ 67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_baseMainGameComponent__ = __webpack_require__(/*! core/ui/components/games/baseMainGameComponent */ 138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_games_sea_assets__ = __webpack_require__(/*! games/sea/assets */ 180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_sea_components_seaComponent__ = __webpack_require__(/*! games/sea/components/seaComponent */ 262);






var positions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].create({});
var biPositions = __WEBPACK_IMPORTED_MODULE_2_core_ui_common_sizes__["a" /* Sizes */].biUpdate(positions, {});
var biValues = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_positions__["a" /* BiValue */].create({ arrowVisible: true }, { arrowVisible: false });
var durations = {};
var MainComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](MainComponent, _super);
    function MainComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = _this.addImage(__WEBPACK_IMPORTED_MODULE_4_games_sea_assets__["a" /* Images */].bg);
        _this.sea = _this.add(_this.createComponent(__WEBPACK_IMPORTED_MODULE_5_games_sea_components_seaComponent__["a" /* SeaComponent */])).anchorCenter().setPos(_this.center());
        return _this;
    }
    MainComponent.prototype.onInit = function () {
        this.startIntro();
        console.log(this.center());
    };
    MainComponent.prototype.onNewTask = function (task) {
    };
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_3_core_ui_components_games_baseMainGameComponent__["a" /* BaseMainGameComponent */]));



/***/ }),

/***/ 262:
/*!**************************************************!*\
  !*** ./src/games/sea/components/seaComponent.ts ***!
  \**************************************************/
/*! exports provided: SeaComponent */
/*! exports used: SeaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__ = __webpack_require__(/*! core/ui/components/games/gameComponent */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__ = __webpack_require__(/*! core/ui/controls/btn */ 60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_utils_matrixs__ = __webpack_require__(/*! core/utils/matrixs */ 178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_games_sea_assets__ = __webpack_require__(/*! games/sea/assets */ 180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(/*! lodash */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);







var positions = __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].create({
    icon: [211, 170],
    size: 216
});
var SeaComponent = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](SeaComponent, _super);
    function SeaComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeaComponent.prototype.onNewTask = function (task) {
        var _this = this;
        this.removeAll(true);
        var data = this.generate();
        var field = __WEBPACK_IMPORTED_MODULE_4_core_utils_matrixs__["a" /* Matrixs */].map(data, function (item, x, y) {
            var btn = new __WEBPACK_IMPORTED_MODULE_3_core_ui_controls_btn__["c" /* ImageBtn */]("", _this.gameKey(item), function () {
            });
            return btn;
        });
        __WEBPACK_IMPORTED_MODULE_1_core_ui_common_sizes__["a" /* Sizes */].table(field, { x: 0 });
        this.addChildren(__WEBPACK_IMPORTED_MODULE_6_lodash__["flatten"](field));
        this.updatePivot();
    };
    SeaComponent.prototype.onInit = function () {
    };
    SeaComponent.prototype.getSectionIndex = function (full, inner, p) {
        function getIndex(full, inner, x) {
            var start = (full - inner) / 2;
            var end = (full + inner) / 2;
            return x < start ? 0 : (x >= end ? 2 : 1);
        }
        return getIndex(full.h, inner.h, p.y) * 3 + getIndex(full.w, inner.w, p.x);
    };
    SeaComponent.prototype.generate = function () {
        var _this = this;
        var inner = { w: 4, h: 2 };
        var full = { w: 10, h: 6 };
        var data = __WEBPACK_IMPORTED_MODULE_4_core_utils_matrixs__["a" /* Matrixs */].create(full.w, full.h, function (x, y) {
            var index = _this.getSectionIndex(full, inner, { x: x, y: y });
            return index == 4 ? __WEBPACK_IMPORTED_MODULE_5_games_sea_assets__["a" /* Images */].line : __WEBPACK_IMPORTED_MODULE_5_games_sea_assets__["a" /* Images */].sand;
        });
        return data;
    };
    return SeaComponent;
}(__WEBPACK_IMPORTED_MODULE_2_core_ui_components_games_gameComponent__["a" /* GameComponent */]));



/***/ }),

/***/ 263:
/*!*********************************!*\
  !*** ./src/games/sea/levels.ts ***!
  \*********************************/
/*! exports provided: levels */
/*! exports used: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_types_logic__ = __webpack_require__(/*! core/types/logic */ 21);

function level(w, h) {
    return { w: w, h: h };
}
var levels = Object(__WEBPACK_IMPORTED_MODULE_0_core_types_logic__["d" /* createLevelsFromArray */])([
    level(4, 2),
]);


/***/ }),

/***/ 264:
/*!********************************!*\
  !*** ./src/games/sea/logic.ts ***!
  \********************************/
/*! exports provided: Logic */
/*! exports used: Logic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_logic__ = __webpack_require__(/*! core/logic */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_utils__ = __webpack_require__(/*! core/utils */ 8);



var Logic = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](Logic, _super);
    function Logic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_2_core_utils__["e" /* RandomGenerator */]();
        return _this;
    }
    Logic.prototype.nextTask = function (level) {
        var position = [1, 1];
        var answers = [0];
        var w = level.w, h = level.h;
        return {
            w: w,
            h: h,
            position: position,
            answers: answers
        };
    };
    return Logic;
}(__WEBPACK_IMPORTED_MODULE_1_core_logic__["c" /* GameLogic */]));



/***/ })

});
//# sourceMappingURL=10.bundle.js.map