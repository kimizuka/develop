/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nError: unable to locate 'src/img' at '/Users/ki_230/Git/develop/src/note-cover-generator/src/img'\\n    at processPattern (/Users/ki_230/Git/develop/src/note-cover-generator/node_modules/copy-webpack-plugin/dist/processPattern.js:31:26)\\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)\\n    at async /Users/ki_230/Git/develop/src/note-cover-generator/node_modules/copy-webpack-plugin/dist/index.js:53:27\");\n\n//# sourceURL=webpack:///./src/css/index.scss?");

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n    var canvas = document.createElement('canvas');\n    var subCanvas = document.createElement('canvas');\n    var img = document.getElementById('img');\n    var txt = document.getElementById('txt');\n    var btns = document.getElementById('btns');\n    var width = 1280;\n    var height = 670;\n    var fontSize = 64;\n    var fontFamily = 'Noto Sans JP';\n    if (!canvas) {\n        return;\n    }\n    var ctx = canvas.getContext('2d');\n    var subCtx = subCanvas.getContext('2d');\n    canvas.width = subCanvas.width = width;\n    canvas.height = subCanvas.height = height;\n    var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);\n    buildGradient(gradient);\n    draw();\n    if (btns) {\n        btns.addEventListener('click', function (evt) {\n            var text = evt.target.innerText;\n            switch (text) {\n                case 'color':\n                    gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);\n                    buildGradient(gradient);\n                    break;\n                case '-':\n                    fontSize = Math.max(fontSize - 8, 8);\n                    break;\n                case '+':\n                    fontSize = Math.min(fontSize + 8, 240);\n                    break;\n            }\n        });\n    }\n    function buildGradient(gradient) {\n        gradient.addColorStop(0, \"rgb(\" + getColorLevel() + \", \" + getColorLevel() + \", \" + getColorLevel());\n        gradient.addColorStop(1, \"rgb(\" + getColorLevel() + \", \" + getColorLevel() + \", \" + getColorLevel());\n    }\n    function draw() {\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        ctx.save();\n        ctx.fillStyle = '#fafafa';\n        ctx.fillRect(0, 0, canvas.width, canvas.height);\n        ctx.restore();\n        // subCtx.save();\n        //   subCtx.fillStyle = gradient;\n        //   subCtx.fillRect(0, 0, canvas.width, canvas.height);\n        // subCtx.restore();\n        subCtx.save();\n        subCtx.clearRect(0, 0, canvas.width, canvas.height);\n        // subCtx.globalCompositeOperation = 'destination-in';\n        // subCtx.fillStyle = '#000';\n        subCtx.textAlign = 'center';\n        subCtx.textBaseline = 'middle';\n        subCtx.font = \"bold \" + fontSize + \"px \" + fontFamily;\n        subCtx.fillText(\"\" + txt.innerText, canvas.width / 2, canvas.height / 2);\n        subCtx.restore();\n        ctx.save();\n        ctx.drawImage(subCanvas, 0, 0);\n        ctx.restore();\n        img.src = canvas.toDataURL('image/png');\n        requestAnimationFrame(draw);\n    }\n    function getColorLevel() {\n        return Math.round(Math.random() * 255);\n    }\n})();\n\n\n//# sourceURL=webpack:///./src/js/index.ts?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/js/index.ts ./src/css/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/ki_230/Git/develop/src/note-cover-generator/src/js/index.ts */\"./src/js/index.ts\");\nmodule.exports = __webpack_require__(/*! /Users/ki_230/Git/develop/src/note-cover-generator/src/css/index.scss */\"./src/css/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.ts_./src/css/index.scss?");

/***/ })

/******/ });