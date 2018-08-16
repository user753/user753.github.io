webpackJsonpNewGames([20],{

/***/ 154:
/*!****************************************************!*\
  !*** ./src/core/ui/phaser/benchmarks/benchmark.ts ***!
  \****************************************************/
/*! exports provided: Benchmark */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Benchmark", function() { return Benchmark; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_ui_phaser_benchmarks_benchmarkControl__ = __webpack_require__(/*! core/ui/phaser/benchmarks/benchmarkControl */ 365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_ui_phaser_benchmarks_benchmarkStorage__ = __webpack_require__(/*! core/ui/phaser/benchmarks/benchmarkStorage */ 72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);



var defaultFpsCount = 30;
var Benchmark;
(function (Benchmark) {
    function startRenderer(renderer) {
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__["b" /* phaserService */].createGame({ renderer: renderer });
            var game = __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__["b" /* phaserService */].game;
            game.state.add("boot", {
                preload: function () { return __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__["b" /* phaserService */].setupScaleMode({
                    width: 2048,
                    height: 1280,
                    heightMin: 1152
                }); },
                create: function () {
                    if (renderer == Phaser.WEBGL && __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__["b" /* phaserService */].game.renderType == Phaser.CANVAS) {
                        setTimeout(function () {
                            __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__["b" /* phaserService */].destroy();
                            resolve([Phaser.CANVAS, defaultFpsCount]);
                        });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__["b" /* phaserService */].initIsCompleted();
                        game.time.advancedTiming = true;
                        __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__["e" /* screenSizeService */].updateScreenSize();
                        var control = new __WEBPACK_IMPORTED_MODULE_0_core_ui_phaser_benchmarks_benchmarkControl__["a" /* BenchmarkControl */]();
                        __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__["b" /* phaserService */].root.add(control);
                        control.start().then(function (fps) {
                            var renderType = __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__["b" /* phaserService */].game.renderType;
                            __WEBPACK_IMPORTED_MODULE_2_core_ui_services_instances__["b" /* phaserService */].destroy();
                            resolve([renderType, fps]);
                        });
                    }
                }
            }, true);
        });
    }
    function saveResult(_a) {
        var renderer = _a[0], fps = _a[1];
        __WEBPACK_IMPORTED_MODULE_1_core_ui_phaser_benchmarks_benchmarkStorage__["a" /* BenchmarkStorage */].storage.save({ renderer: renderer, fps: fps });
        Benchmark.isRunning = false;
    }
    Benchmark.isRunning = false;
    function start() {
        if (Benchmark.isRunning) {
            return;
        }
        Benchmark.isRunning = true;
        return new Promise(function (resolve) {
            startRenderer(Phaser.AUTO).then(function (_a) {
                var renderer = _a[0], fps = _a[1];
                if (renderer == Phaser.WEBGL) {
                    var glFps_1 = fps;
                    startRenderer(Phaser.CANVAS).then(function (_a) {
                        var renderer = _a[0], fps = _a[1];
                        var canvasFps = fps;
                        var bestRenderer = glFps_1 > canvasFps ? [Phaser.WEBGL, glFps_1] : [Phaser.CANVAS, canvasFps];
                        saveResult(bestRenderer);
                        resolve();
                    });
                }
                else {
                    saveResult([Phaser.CANVAS, fps]);
                    resolve();
                }
            });
        });
    }
    Benchmark.start = start;
})(Benchmark || (Benchmark = {}));


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

/***/ 365:
/*!***********************************************************!*\
  !*** ./src/core/ui/phaser/benchmarks/benchmarkControl.ts ***!
  \***********************************************************/
/*! exports provided: BenchmarkControl */
/*! exports used: BenchmarkControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenchmarkControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(/*! tslib */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_assets_coreTranslations__ = __webpack_require__(/*! core/assets/coreTranslations */ 366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_assets_fonts__ = __webpack_require__(/*! core/assets/fonts */ 34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_services_instances__ = __webpack_require__(/*! core/services/instances */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__ = __webpack_require__(/*! core/ui/animations/tweens */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__ = __webpack_require__(/*! core/ui/common/sizes */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameUI_textPanelComponent__ = __webpack_require__(/*! core/ui/components/games/gameUI/textPanelComponent */ 162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__ = __webpack_require__(/*! core/ui/controls/control */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_GraphicsImg__ = __webpack_require__(/*! core/ui/controls/GraphicsImg */ 155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__ = __webpack_require__(/*! core/ui/services/instances */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_utils_randomGenerator__ = __webpack_require__(/*! core/utils/randomGenerator */ 64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash__ = __webpack_require__(/*! lodash */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash__);







// import {CoreColors} from "core/assets/fonts"
// import {Sizes} from "core/ui/common/sizes"





var durations = {
    fps: 5000
};
var BenchmarkControl = /** @class */ (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](BenchmarkControl, _super);
    function BenchmarkControl() {
        var _this = _super.call(this) || this;
        _this.rng = new __WEBPACK_IMPORTED_MODULE_10_core_utils_randomGenerator__["a" /* RandomGenerator */]();
        _this.positions = __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].create({
            text: { y: 60 },
            margin: { x: 5, y: 5 }
        });
        _this.biPositions = __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].bi({
            taskSize: { width: 900, height: 160 },
        }, {
            taskSize: { width: 700, height: 220 },
        });
        __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["b" /* phaserService */].game.time.advancedTiming = true;
        return _this;
    }
    BenchmarkControl.prototype.start = function () {
        var _this = this;
        var colCount = 20;
        var size = Math.min(__WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].screenSize.width, __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].screenSize.height)
            / (colCount * __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].scale);
        var images = __WEBPACK_IMPORTED_MODULE_11_lodash__["range"](colCount * colCount).map(function () { return new __WEBPACK_IMPORTED_MODULE_8_core_ui_controls_GraphicsImg__["b" /* GraphicsImg */](function (g) {
            g.beginFill(__WEBPACK_IMPORTED_MODULE_11_lodash__["random"](10000, 100000));
            g.drawRect(0, 0, size, size);
        }).anchorCenter(); });
        var group = this.add(new __WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__["a" /* Control */]()).anchorCenterX().updatePos(__WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].w2, 0);
        group.addChildren(images);
        __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].tableFromList(images, colCount, this.positions.margin);
        group.updatePivot();
        var sign = this.rng.sign();
        images.forEach(function (x, i) {
            __WEBPACK_IMPORTED_MODULE_4_core_ui_animations_tweens__["a" /* Tweens */].start({
                target: x,
                to: { y: __WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].height, symmetricScale: 2, angle: sign * 720, alpha: 0.5 },
                // delay: _.random(500, 1000),
                easing: Phaser.Easing.Sinusoidal.InOut,
                simpleYoyo: true,
                repeat: -1,
                duration: __WEBPACK_IMPORTED_MODULE_11_lodash__["random"](600, 1200),
            });
        });
        var font = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_2_core_assets_fonts__["c" /* CoreFonts */].tutorial(false), { font: "Arial", fontSize: 60 });
        var panel = this.add(new __WEBPACK_IMPORTED_MODULE_6_core_ui_components_games_gameUI_textPanelComponent__["a" /* TextPanelComponent */]({ size: this.biPositions.taskSize.landscape, font: font }))
            .onBiValueChange(this.biPositions.taskSize, function (c, v) { return c.changePanel({ size: v }); });
        var intervalTime = 500;
        var fpsCount = durations.fps / intervalTime;
        var fps = [];
        function updateText(time) {
            panel.setProps(__WEBPACK_IMPORTED_MODULE_3_core_services_instances__["e" /* translationService */].getTranslation(__WEBPACK_IMPORTED_MODULE_1_core_assets_coreTranslations__["a" /* CoreTranslations */].benchmark_test) + (" [" + time + "]"));
        }
        updateText(fpsCount);
        panel.anchorCenter().updatePos(__WEBPACK_IMPORTED_MODULE_5_core_ui_common_sizes__["a" /* Sizes */].w2, this.positions.text.y - __WEBPACK_IMPORTED_MODULE_9_core_ui_services_instances__["e" /* screenSizeService */].topOffset);
        return new Promise(function (resolve) {
            setTimeout(function () {
                var interval = setInterval(function () {
                    fps.push(_this.game.time.fps);
                    updateText(fpsCount - fps.length);
                    if (fps.length >= fpsCount) {
                        clearInterval(interval);
                        resolve(__WEBPACK_IMPORTED_MODULE_11_lodash__["mean"](fps));
                    }
                }, 500);
            }, 1000);
        });
    };
    return BenchmarkControl;
}(__WEBPACK_IMPORTED_MODULE_7_core_ui_controls_control__["a" /* Control */]));



/***/ }),

/***/ 366:
/*!*********************************************!*\
  !*** ./src/core/assets/coreTranslations.ts ***!
  \*********************************************/
/*! exports provided: CoreTranslations */
/*! exports used: CoreTranslations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreTranslations; });
var CoreTranslations;
(function (CoreTranslations) {
    CoreTranslations.benchmark_test = "benchmark_test";
})(CoreTranslations || (CoreTranslations = {}));


/***/ })

});
//# sourceMappingURL=20.bundle.js.map