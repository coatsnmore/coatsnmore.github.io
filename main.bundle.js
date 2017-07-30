webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\r\n    list-style-type: circle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div>\r\n  <h2>\r\n    <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> About\r\n  </h2>\r\n  \r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"twelve columns\">\r\n    <section>\r\n      <em>I am...</em>\r\n      <br>\r\n      <ul>\r\n        <li>Nicholas J Coats.</li>\r\n        <li>a Software Developer whose been hacking away at Enterprise software for over a decade..</li>\r\n        <li>a Devoted Dogfather.</li>\r\n        <li>a Manic Musician.</li>\r\n      </ul>\r\n    </section>\r\n\r\n    <section>\r\n      <em>I work on...</em>\r\n      <br>\r\n      <ul>\r\n        <li>Java.</li>\r\n        <li>Javascript.</li>\r\n        <li>REST APIs.</li>\r\n        <li>My Abs.</li>\r\n      </ul>\r\n    </section>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.title = 'About Section';
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading {\r\n    background-color: #f4b342;\r\n    padding: 0.5em;\r\n}\r\n\r\n.navigation-pane {\r\n    /*background-color: #41a6f4;*/\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"three columns navigation-pane\">\n      <navigation></navigation>\n    </div>\n\n    <div class=\"nine columns\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'CoatsWorld';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__experiments_experiments_component__ = __webpack_require__("../../../../../src/app/experiments/experiments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__webgl_webgl_component__ = __webpack_require__("../../../../../src/app/webgl/webgl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notification_notification_component__ = __webpack_require__("../../../../../src/app/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__audio_audio_component__ = __webpack_require__("../../../../../src/app/audio/audio.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */] },
    {
        path: 'experiments',
        component: __WEBPACK_IMPORTED_MODULE_6__experiments_experiments_component__["a" /* ExperimentsComponent */]
    },
    {
        path: 'webgl',
        component: __WEBPACK_IMPORTED_MODULE_9__webgl_webgl_component__["a" /* WebglComponent */]
    },
    {
        path: 'notifications',
        component: __WEBPACK_IMPORTED_MODULE_10__notification_notification_component__["a" /* NotificationComponent */]
    },
    {
        path: 'audio',
        component: __WEBPACK_IMPORTED_MODULE_11__audio_audio_component__["a" /* AudioComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_6__experiments_experiments_component__["a" /* ExperimentsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__webgl_webgl_component__["a" /* WebglComponent */],
            __WEBPACK_IMPORTED_MODULE_10__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_11__audio_audio_component__["a" /* AudioComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            )
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/audio/Notes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Notes {
    static all() {
        return {
            'C0': 16.35,
            'C#0/Db0': 17.32,
            'D0': 18.35,
            'D#0/Eb0': 19.45,
            'E0': 20.60,
            'F0': 21.83,
            'F#0/Gb0': 23.12,
            'G0': 24.50,
            'G#0/Ab0': 25.96,
            'A0': 27.50,
            'A#0/Bb0': 29.14,
            'B0': 30.87,
            'C1': 32.70,
            'C#1/Db1': 34.65,
            'D1': 36.71,
            'D#1/Eb1': 38.89,
            'E1': 41.20,
            'F1': 43.65,
            'F#1/Gb1': 46.25,
            'G1': 49.00,
            'G#1/Ab1': 51.91,
            'A1': 55.00,
            'A#1/Bb1': 58.27,
            'B1': 61.74,
            'C2': 65.41,
            'C#2/Db2': 69.30,
            'D2': 73.42,
            'D#2/Eb2': 77.78,
            'E2': 82.41,
            'F2': 87.31,
            'F#2/Gb2': 92.50,
            'G2': 98.00,
            'G#2/Ab2': 103.83,
            'A2': 110.00,
            'A#2/Bb2': 116.54,
            'B2': 123.47,
            'C3': 130.81,
            'C#3/Db3': 138.59,
            'D3': 146.83,
            'D#3/Eb3': 155.56,
            'E3': 164.81,
            'F3': 174.61,
            'F#3/Gb3': 185.00,
            'G3': 196.00,
            'G#3/Ab3': 207.65,
            'A3': 220.00,
            'A#3/Bb3': 233.08,
            'B3': 246.94,
            'C4': 261.63,
            'C#4/Db4': 277.18,
            'D4': 293.66,
            'D#4/Eb4': 311.13,
            'E4': 329.63,
            'F4': 349.23,
            'F#4/Gb4': 369.99,
            'G4': 392.00,
            'G#4/Ab4': 415.30,
            'A4': 440.00,
            'A#4/Bb4': 466.16,
            'B4': 493.88,
            'C5': 523.25,
            'C#5/Db5': 554.37,
            'D5': 587.33,
            'D#5/Eb5': 622.25,
            'E5': 659.25,
            'F5': 698.46,
            'F#5/Gb5': 739.99,
            'G5': 783.99,
            'G#5/Ab5': 830.61,
            'A5': 880.00,
            'A#5/Bb5': 932.33,
            'B5': 987.77,
            'C6': 1046.50,
            'C#6/Db6': 1108.73,
            'D6': 1174.66,
            'D#6/Eb6': 1244.51,
            'E6': 1318.51,
            'F6': 1396.91,
            'F#6/Gb6': 1479.98,
            'G6': 1567.98,
            'G#6/Ab6': 1661.22,
            'A6': 1760.00,
            'A#6/Bb6': 1864.66,
            'B6': 1975.53,
            'C7': 2093.00,
            'C#7/Db7': 2217.46,
            'D7': 2349.32,
            'D#7/Eb7': 2489.02,
            'E7': 2637.02,
            'F7': 2793.83,
            'F#7/Gb7': 2959.96,
            'G7': 3135.96,
            'G#7/Ab7': 3322.44,
            'A7': 3520.00,
            'A#7/Bb7': 3729.31,
            'B7': 3951.07,
            'C8': 4186.01,
            'C#8/Db8': 4434.92,
            'D8': 4698.63,
            'D#8/Eb8': 4978.03,
            'E8': 5274.04,
            'F8': 5587.65,
            'F#8/Gb8': 5919.91,
            'G8': 6271.93,
            'G#8/Ab8': 6644.88,
            'A8': 7040.00,
            'A#8/Bb8': 7458.62,
            'B8': 7902.13
        };
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Notes);

/***/ }),

/***/ "../../../../../src/app/audio/Synth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notes__ = __webpack_require__("../../../../../src/app/audio/Notes.js");


class Synth {

    constructor() {
        this.notes = __WEBPACK_IMPORTED_MODULE_0__Notes__["a" /* default */].all();
        // var context = {};
        let ContextClass = (window.AudioContext ||
            window.webkitAudioContext ||
            window.mozAudioContext ||
            window.oAudioContext ||
            window.msAudioContext);
        if (ContextClass) {
            // Web Audio API is available.
            this.context = new ContextClass();
        } else {
            console.error('Browser does not support AudioContext, uh oh!');
        }
    }

    playSong(song, osc) {
        let duration = 0.5,
            startTime = this.context.currentTime,
            // song = ['G3', 'A#3/Bb3', 'D#4/Eb4', 'G3', 'A#3/Bb3', 'G#3/Ab3', 'G3'],
            // song = ['G3', 'G3', 'G3', 'G3', 'G3', 'G#3/Ab3', 'G3'],
            oscillatorType = osc,
            masterVolume = 0.1;


        for (var i = 0; i < song.length; i++) {
            // controller.updateSpheresByNote(song[i]);
            this.play(song[i], startTime + duration * i, duration, oscillatorType, masterVolume);
        }
    }

    play(note, startTime, duration, type, volumeLevel) {
        let osc1 = this.context.createOscillator(),
            osc2 = this.context.createOscillator(),
            volume = this.context.createGain(),
            frequency = this.notes[note];

        volume.gain.value = volumeLevel;

        // Set oscillator wave type
        osc1.type = type;
        osc2.type = type;

        // tune
        osc1.frequency.value = frequency;
        osc2.frequency.value = frequency - 3;

        // wire em up
        // osc1.connect(analyser);
        // analyser.connect(freqAnalyser);
        // freqAnalyser.connect(volume);
        osc1.connect(volume);

        osc2.connect(volume);
        volume.connect(this.context.destination);

        // Fade out
        volume.gain.setValueAtTime(0.1, startTime + duration - 0.25);
        volume.gain.linearRampToValueAtTime(0, startTime + duration);

        // Start oscillators
        osc1.start(startTime);
        osc2.start(startTime);

        // Stop oscillators
        osc1.stop(startTime + duration);
        osc2.stop(startTime + duration);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Synth;


/* unused harmony default export */ var _unused_webpack_default_export = (Synth);

/***/ }),

/***/ "../../../../../src/app/audio/audio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".song-display ol li {\r\n    list-style-type: none;\r\n    float: left;\r\n    margin-right: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/audio/audio.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h2><i class=\"fa fa-soundcloud\" aria-hidden=\"true\"></i> Web Audio</h2>\n\t<p>The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose\n\t\taudio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more.</p>\n\n\t<div class=\"notes\">\n\t\t<h4>Notes</h4>\n\t\t<button (click)=\"add('G3')\">G</button>\n\t\t<button (click)=\"add('G#3/Ab3')\">Ab</button>\n\t\t<button (click)=\"add('A#3/Bb3')\">Bb</button>\n\t\t<button (click)=\"add('B3')\">B</button>\n\t\t<button (click)=\"add('C4')\">C</button>\n\t\t<button (click)=\"add('C#4/Db4')\">Db</button>\n\t\t<button (click)=\"add('D4')\">D</button>\n\t\t<button (click)=\"add('D#4/Eb4')\">Eb</button>\n\t\t<button (click)=\"add('E4')\">E</button>\n\t\t<button (click)=\"add('F4')\">F</button>\n\t\t<button (click)=\"add('F#4/Gb4')\">Gb</button>\n\t</div>\n\n\t<br>\n\n\t<div>\n\t\t<h4>Current Song</h4>\n\t\t<div class=\"song-display\">\n\t\t\t<ol>\n\t\t\t\t<li *ngFor=\"let note of song\">\n\t\t\t\t\t{{ note }}\n\t\t\t\t</li>\n\t\t\t</ol>\n\t\t</div>\n\t</div>\n\n\t<br>\n\t<br>\n\n\t<div>\n\t\t<h4>Oscillators</h4>\n\t\t<button (click)=\"changeOscillator('sine')\">Sine</button>\n\t\t<button (click)=\"changeOscillator('square')\">Square</button>\n\t\t<button (click)=\"changeOscillator('sawtooth')\">Sawtooth</button>\n\t\t<button (click)=\"changeOscillator('triangle')\">Triangle</button>\n\t</div>\n\n\t<br>\n\t<br>\n\n\t<div>\n\t\t<h4>Controls</h4>\n\t\t<button (click)=\"play()\" class=\"button-primary\">Play!</button>\n\t\t<button (click)=\"clear()\" class=\"button-primary\">Clear</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/audio/audio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Synth__ = __webpack_require__("../../../../../src/app/audio/Synth.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AudioComponent = (function () {
    function AudioComponent() {
    }
    AudioComponent.prototype.ngOnInit = function () {
        this.synth = new __WEBPACK_IMPORTED_MODULE_1__Synth__["a" /* Synth */]();
        this.song = ['G3', 'A#3/Bb3', 'D#4/Eb4', 'G3', 'A#3/Bb3', 'G#3/Ab3', 'G3'];
        this.oscillator = 'sine';
    };
    AudioComponent.prototype.play = function () {
        this.synth.playSong(this.song, this.oscillator);
    };
    AudioComponent.prototype.add = function (note) {
        console.log("note " + note);
        this.song.push(note);
    };
    AudioComponent.prototype.getSong = function () {
        console.log("getting song: " + this.song);
        return this.song;
    };
    AudioComponent.prototype.clear = function () {
        this.song = [];
    };
    AudioComponent.prototype.changeOscillator = function (osc) {
        this.oscillator = osc;
    };
    return AudioComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], AudioComponent.prototype, "song", void 0);
AudioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-audio',
        template: __webpack_require__("../../../../../src/app/audio/audio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/audio/audio.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AudioComponent);

//# sourceMappingURL=audio.component.js.map

/***/ }),

/***/ "../../../../../src/app/experiments/experiments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/experiments/experiments.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h2>\r\n    Experiments\r\n  </h2>\r\n\r\n</div>\r\n<div class=\"row\">\r\n\r\n  <app-webgl></app-webgl>\r\n</div>\r\n<div class=\"row\">\r\n\r\n  Another Experiment\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/experiments/experiments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperimentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExperimentsComponent = (function () {
    function ExperimentsComponent() {
        this.title = 'Experiments';
    }
    return ExperimentsComponent;
}());
ExperimentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'experiments',
        template: __webpack_require__("../../../../../src/app/experiments/experiments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/experiments/experiments.component.css")]
    })
], ExperimentsComponent);

//# sourceMappingURL=experiments.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div>\r\n  <h2>\r\n    <i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home\r\n  </h2>\r\n\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"twelve columns\">\r\n    <p>This is the personal website of Nicholas J Coats.</p>\r\n    <p>Explore my web experiments.</p>\r\n    <p>Read my blog.</p>\r\n    <p>Check out my <a href=\"http://github.com/coatsnmore\">code</a></p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'Home Section';
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-button {\r\n    width: 100%;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <img width=\"300\" class=\"img-circle\" src=\"https://avatars3.githubusercontent.com/u/2763721?v=4&s=460\">\r\n  <nav>\r\n    <a routerLink=\"/\" routerLinkActive=\"active\" class=\"button nav-button fa fa-home fa-2x\">Home</a>\r\n    <a routerLink=\"/webgl\" routerLinkActive=\"active\" class=\"button nav-button fa fa-gamepad fa-2x\">WebGL + Gamepad</a>\r\n    <a routerLink=\"/notifications\" routerLinkActive=\"active\" class=\"button nav-button fa fa-exclamation-circle fa-2x\">Web Notifications</a>\r\n    <a routerLink=\"/audio\" routerLinkActive=\"active\" class=\"button nav-button fa fa-soundcloud fa-2x\">Web Audio</a>\r\n    <a routerLink=\"/about\" routerLinkActive=\"active\" class=\"button nav-button fa fa-user-o fa-2x\">About</a>\r\n  </nav>\r\n  <a href=\"https://www.facebook.com/nick.coats.go\" class=\"fa fa-facebook-square fa-2x\"></a>\r\n  <a href=\"https://twitter.com/coatsnmore\" class=\"fa fa-twitter-square fa-2x\"></a>\r\n  <a href=\"https://github.com/coatsnmore\" class=\"fa fa-github-square fa-2x\"></a>\r\n  <a href=\"https://stackoverflow.com/users/262106/nick\" class=\"fa fa-stack-overflow fa-2x\"></a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
    })
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/notification/EventNotification.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class EventNotification {

    constructor() {
        if (Notification.permission !== "granted")
            Notification.requestPermission();
    }

    meow(name) {

        let moniker = name || "stranger";

        if (!Notification) {
            window.alert('Desktop notifications not available in your browser. Try Chromium.');
            return;
        }

        if (Notification.permission !== "granted")
            Notification.requestPermission();
        else {
            var notification = new Notification('MEOW!!!', {
                icon: 'A_magical_kitten.png',
                body: `Hey ${moniker}! You've been notified! Meow!`,
            });

            notification.onclick = function () {
                window.open("http://stackoverflow.com/a/13328397/1269037");
            };
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventNotification;


/* unused harmony default export */ var _unused_webpack_default_export = (EventNotification);

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t\t<h2> <i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i> Web Notifications</h2>\n\t\t<p>The Notifications API allows web pages to control the display of system notifications to the end user — these are outside\n\t\t\tthe top-level browsing context viewport, so therefore can be displayed even the user has switched tabs or moved to a different\n\t\t\tapp. The API is designed to be compatible with existing notification systems across different platforms.</p>\n\t\t<div>\n\t\t\t<input [(ngModel)]=\"name\" placeholder=\"First and Last Name\" />\n\t\t\t<!--<p>Name: {{name}}</p>-->\n\t\t</div>\n    <br>\n\t\t<div>\n\t\t\t<button (click)=\"notify(name)\" class=\"button-primary\">Notify Me!</button>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EventNotification__ = __webpack_require__("../../../../../src/app/notification/EventNotification.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.notify = function (name) {
        var eventNotification = new __WEBPACK_IMPORTED_MODULE_1__EventNotification__["a" /* EventNotification */]();
        eventNotification.meow(name);
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notification/notification.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);

//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/webgl/Controls.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Gamepad__ = __webpack_require__("../../../../../src/app/webgl/Gamepad.js");


class Controls {

    constructor() {
        this.state = {
            left: false,
            right: false,
            up: false,
            down: false,
            fire: false
        };

        this.gamepad = new __WEBPACK_IMPORTED_MODULE_0__Gamepad__["a" /* default */]();

        // setup PC keyboard interaction
        window.addEventListener('keydown', function (e) {
            this.changeControls(e.keyCode, true);
        }.bind(this), false);

        window.addEventListener('keyup', function (e) {
            this.changeControls(e.keyCode, false);
        }.bind(this), false);
    }

    getState() {

        // gamepad will override keyboard if connected
        if (this.gamepad.connected()) {
            let gamepadState = this.gamepad.getState();
            return gamepadState;
        }

        return this.state;
    }

    changeControls(code, state) {

        // console.log('key code: ' + code);
        switch (code) {

            // d-pad
            case 37:
                this.state.left = state;
                break;
            case 39:
                this.state.right = state;
                break;
            case 38:
                this.state.up = state;
                break;
            case 40:
                this.state.down = state;
                break;
            case 32:
                this.state.fire = state;
                break;
        }
    }

}
/* unused harmony export Controls */


/* harmony default export */ __webpack_exports__["a"] = (Controls);

/***/ }),

/***/ "../../../../../src/app/webgl/Gamepad.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Gamepad {

    constructor() {
        this.gamepads = {};
        this.state = {
            left: false,
            right: false,
            up: false,
            down: false
        };
    }

    getState() {
        this.queryGamepad();
        return this.state;
    }

    queryGamepad() {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
        // query all gamepads
        for (var i = 0; i < gamepads.length; i++) {
            var gp = gamepads[i];
            if (gp) {
                console.log()
                this.state.up = gp.buttons[12].pressed ? true : false;
                this.state.down = gp.buttons[13].pressed ? true : false;
                this.state.right = gp.buttons[15].pressed ? true : false;
                this.state.left = gp.buttons[14].pressed ? true : false;
                this.state.fire = gp.buttons[0].pressed ? true : false;
            }
        }
    }

    connected() {
        var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
        // query all gamepads
        for (var i = 0; i < gamepads.length; i++) {
            var gp = gamepads[i];
            if (gp) {
                return true;
            }
        }

        return false;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Gamepad);

/***/ }),

/***/ "../../../../../src/app/webgl/Player.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Player {

    constructor(size, x, y) {
        this.size = size;
        this.graphics(x, y);
        this.body(x, y);
        this.speed = 100;
        this.turnSpeed = 2;
        this.bullets = {
            collection: [],
            speed: 50,
            max: 1,
            size: 5,
            rate: 1, // second(s)
            okayToFire: true
        };
    }

    graphics(x, y) {
        this.graphics = new PIXI.Container();

        let hull = new PIXI.Graphics();
        this.hull = hull;
        hull.beginFill(0xBAC6D6);
        // player.graphics.lineStyle(5, 0xFF0000);
        hull.moveTo(0, this.size);
        hull.lineTo(0, this.size * (2 / 3));
        hull.lineTo(this.size / 2, 0);
        hull.lineTo(this.size, this.size * (2 / 3));
        hull.lineTo(this.size, this.size);
        hull.lineTo(this.size * (2 / 3), this.size * (2 / 3));
        hull.lineTo(this.size * (1 / 3), this.size * (2 / 3));
        hull.endFill();
        this.graphics.addChildAt(hull, 0);

        let engine = new PIXI.Graphics();
        this.engine = engine;
        engine.beginFill(0xF7ED60);
        // player.graphics.lineStyle(5, 0xFF0000);
        engine.moveTo(this.size * (1 / 3), this.size * (2 / 3));
        engine.lineTo(this.size * (2 / 3), this.size * (2 / 3));
        engine.lineTo(this.size * (1 / 2), this.size);
        engine.endFill();
        engine.alpha = 0;

        this.graphics.addChildAt(engine, 1);

        // position
        this.graphics.x = x;
        this.graphics.y = y;

        // adjust graphics center
        this.graphics.pivot.x = this.size / 2;
        this.graphics.pivot.y = this.size / 2;

        return this.graphics;
    }

    body(x, y) {
        this.body = new p2.Body({
            mass: 1,
            angularVelocity: 0,
            damping: 0,
            angularDamping: 0,
            position: [x, y]
        });

        this.shape = new p2.Box({
            width: this.size,
            height: this.size
        });
        this.body.addShape(this.shape);
        return this.body;
    }

    update(controls, sceneWidth, sceneHeight) {
        // basicContols(controls);

        // player angles
        if (controls.left) {
            this.body.angularVelocity = -1 * this.turnSpeed;
        } else if (controls.right) {
            this.body.angularVelocity = this.turnSpeed;
        } else {
            this.body.angularVelocity = 0;
        }

        // console.log('this.body.angularVelocity: ' + this.body.angularVelocity);

        // velocity
        if (controls.up) {
            let angle = this.body.angle + Math.PI / 2;
            // console.log('angle: ' + angle);
            this.body.force[0] -= this.speed * Math.cos(angle);
            this.body.force[1] -= this.speed * Math.sin(angle);
            this.engine.alpha = 1;
        } else {
            this.engine.alpha = 0;
        }

        // warp player on boundaries
        this.warp(sceneWidth, sceneHeight);

        // update player graphics
        this.graphics.x = this.body.position[0];
        this.graphics.y = this.body.position[1];
        this.graphics.rotation = this.body.angle;

        // update bullets graphics
        for (var j = 0; j < this.bullets.collection.length; j++) {
            var bullet = this.bullets.collection[j];
            bullet.graphics.x = bullet.body.position[0];
            bullet.graphics.y = bullet.body.position[1];
        }
    }

    warp(sceneWidth, sceneHeight) {

        let x = this.body.position[0],
            y = this.body.position[1];
        if (x < 0) {
            this.body.position[0] = sceneWidth;
        } else if (x > sceneWidth) {
            this.body.position[0] = 0;
        }

        if (y < 0) {
            this.body.position[1] = sceneHeight;
        } else if (y > sceneHeight) {
            this.body.position[1] = 0;
        }
    }

    /**
     * Basic Controls for testing.
     */
    basicContols(controls) {
        if (controls.left) {
            this.graphics.x--;
        } else if (controls.right) {
            this.graphics.x++;
        } else if (controls.up) {
            this.graphics.y--;
        } else if (controls.down) {
            this.graphics.y++;
        }
    }

    fire(stage, world) {
        if (!this.bullets.okayToFire) {
            return false;
        }
        var magnitude = this.speed * 1.5,
            angle = this.body.angle - Math.PI / 2;

        var bullet = {
            graphics: new PIXI.Graphics(),
            body: new p2.Body({
                mass: 0,
                damping: 0,
                angularDamping: 0
            }),
            active: false
        };

        // adjust physics
        bullet.body.velocity[0] += magnitude * Math.cos(angle) + this.body.velocity[0];
        bullet.body.velocity[1] += magnitude * Math.sin(angle) + this.body.velocity[1];
        bullet.body.position[0] = (this.size / 2) * Math.cos(angle) + this.body.position[0];
        bullet.body.position[1] = (this.size / 2) * Math.sin(angle) + this.body.position[1];

        // Create bullet shape
        var bulletShape = new p2.Circle({
            radius: this.bullets.size
        });
        bullet.body.addShape(bulletShape);
        world.addBody(bullet.body);

        //graphics
        bullet.graphics.beginFill(0xFFFFFF);
        bullet.graphics.lineStyle(1, 0xFF0000);
        bullet.graphics.drawRect(0, 0, this.bullets.size, this.bullets.size);
        bullet.graphics.drawCircle(0, 0, this.bullets.size);
        bullet.graphics.endFill();
        stage.addChild(bullet.graphics);

        this.bullets.collection.push(bullet);

        // handle fire rate
        this.bullets.okayToFire = false;
        let restartFire = function () {
            this.bullets.okayToFire = true;
            // console.log('itso kay to fire again');
        }.bind(this);
        setTimeout(restartFire, this.bullets.rate * 1000);
    }
}
/* unused harmony export Player */


/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),

/***/ "../../../../../src/app/webgl/Scene.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Player__ = __webpack_require__("../../../../../src/app/webgl/Player.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Controls__ = __webpack_require__("../../../../../src/app/webgl/Controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__World__ = __webpack_require__("../../../../../src/app/webgl/World.js");




class Scene {

    constructor(domId, width, height) {
        this.controls = new __WEBPACK_IMPORTED_MODULE_1__Controls__["a" /* default */]();
        this.width = width;
        this.height = height;

        // builds the webgl renderer if available in browser
        this.renderer = new PIXI.autoDetectRenderer(width, height);
        this.renderer.view.setAttribute('class', 'renderer');

        // attach the scene to the DOM
        let sceneElement = document.getElementById(domId);
        sceneElement.append(this.renderer.view);

        // create stage
        this.stage = new PIXI.Container();

        // add new player to stage
        this.player = new __WEBPACK_IMPORTED_MODULE_0__Player__["a" /* default */](50, 100, 100, this.world, this.stage);
        this.stage.addChild(this.player.graphics);

        // create world and add physics
        this.world = new __WEBPACK_IMPORTED_MODULE_2__World__["a" /* default */](60);
        this.world.addBody(this.player.body);
    }

    tick() {
        // draw
        this.renderer.render(this.stage);
        window.requestAnimationFrame(this.tick.bind(this));

        // step physics
        this.world.update();

        // update positions of objects in scene
        this.player.update(this.controls.getState(), this.width, this.height);

        // handle player fire
        if(this.controls.getState().fire){
            this.player.fire(this.stage, this.world);
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;


/* unused harmony default export */ var _unused_webpack_default_export = (Scene);

/***/ }),

/***/ "../../../../../src/app/webgl/World.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class World {
    constructor(fps) {
        this.fps = fps || 60;
        this.world = new p2.World({
            gravity: [0, 0]
        });
    }

    addBody(body) {
        this.world.addBody(body);
    }

    update() {
        this.world.step(1 / this.fps)
    }
}

/* harmony default export */ __webpack_exports__["a"] = (World);

/***/ }),

/***/ "../../../../../src/app/webgl/webgl.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/webgl/webgl.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h2> <i class=\"fa fa-gamepad\" aria-hidden=\"true\"></i> Web GL</h2>\n\t<p>WebGL (Web Graphics Library) is a JavaScript API for rendering interactive 3D and 2D graphics within any compatible web\n\t\tbrowser without the use of plug-ins. WebGL does so by introducing an API that closely conforms to OpenGL ES 2.0 that can\n\t\tbe used in HTML5 canvas elements.</p>\n\n\t<p>In this little demo, I have used Pixi.js for convenient rendering, p2.js for physics, the Gamepad API for controls, and\n\t\tsome custom code to drive a little spaceship around and shoot some lasers.</p>\n\n\t<div>\n\t\t<i class=\"fa fa-gamepad fa-3x\" aria-hidden=\"true\"></i> <b>Gamepad Controls</b>\n\t\t<div>Left/Right to turn</div>\n\t\t<div>Up to Accelerate</div>\n\t\t<div>A to shoot.</div>\n\t</div>\n\t<div>\n\t\t<i class=\"fa fa-keyboard-o fa-3x\" aria-hidden=\"true\"></i> <b>Keyboard Controls</b>\n\t\t<div>Left/Right to turn</div>\n\t\t<div>Up to Accelerate</div>\n\t\t<div>Space bar to shoot.</div>\n\t</div>\n\n\t<div id=\"scene\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/webgl/webgl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Scene_js__ = __webpack_require__("../../../../../src/app/webgl/Scene.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebglComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebglComponent = (function () {
    function WebglComponent() {
    }
    WebglComponent.prototype.ngOnInit = function () {
        var scene = new __WEBPACK_IMPORTED_MODULE_1__Scene_js__["a" /* Scene */]('scene', 600, 300);
        scene.tick();
    };
    return WebglComponent;
}());
WebglComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-webgl',
        template: __webpack_require__("../../../../../src/app/webgl/webgl.component.html"),
        styles: [__webpack_require__("../../../../../src/app/webgl/webgl.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WebglComponent);

//# sourceMappingURL=webgl.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map