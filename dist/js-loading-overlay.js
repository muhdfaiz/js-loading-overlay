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

/***/ "./src/js-loading-overlay.js":
/*!***********************************!*\
  !*** ./src/js-loading-overlay.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var JSLoadingOverlay = /*#__PURE__*/function () {
  function JSLoadingOverlay() {
    _classCallCheck(this, JSLoadingOverlay);

    this.options = {
      'overlayBackgroundColor': '#666666',
      'overlayOpacity': 0.6,
      'spinnerIcon': 'ball-circus',
      'spinnerColor': '#000',
      'spinnerSize': '3x',
      'overlayIDName': 'overlay',
      'spinnerIDName': 'spinner',
      'offsetY': 0,
      'offsetX': 0,
      'lockScroll': false,
      'containerID': null,
      'spinnerZIndex': 99999,
      'overlayZIndex': 99998
    };
    this.stylesheetBaseURL = 'https://cdn.jsdelivr.net/npm/load-awesome@1.1.0/css/';
    this.spinner = null;
    this.spinnerStylesheetURL = null;
    this.numberOfEmptyDivForSpinner = {
      'ball-8bits': 16,
      'ball-atom': 4,
      'ball-beat': 3,
      'ball-circus': 5,
      'ball-climbing-dot': 1,
      'ball-clip-rotate': 1,
      'ball-clip-rotate-multiple': 2,
      'ball-clip-rotate-pulse': 2,
      'ball-elastic-dots': 5,
      'ball-fall': 3,
      'ball-fussion': 4,
      'ball-grid-beat': 9,
      'ball-grid-pulse': 9,
      'ball-newton-cradle': 4,
      'ball-pulse': 3,
      'ball-pulse-rise': 5,
      'ball-pulse-sync': 3,
      'ball-rotate': 1,
      'ball-running-dots': 5,
      'ball-scale': 1,
      'ball-scale-multiple': 3,
      'ball-scale-pulse': 2,
      'ball-scale-ripple': 1,
      'ball-scale-ripple-multiple': 3,
      'ball-spin': 8,
      'ball-spin-clockwise': 8,
      'ball-spin-clockwise-fade': 8,
      'ball-spin-clockwise-fade-rotating': 8,
      'ball-spin-fade': 8,
      'ball-spin-fade-rotating': 8,
      'ball-spin-rotate': 2,
      'ball-square-clockwise-spin': 8,
      'ball-square-spin': 8,
      'ball-triangle-path': 3,
      'ball-zig-zag': 2,
      'ball-zig-zag-deflect': 2,
      'cog': 1,
      'cube-transition': 2,
      'fire': 3,
      'line-scale': 5,
      'line-scale-party': 5,
      'line-scale-pulse-out': 5,
      'line-scale-pulse-out-rapid': 5,
      'line-spin-clockwise-fade': 8,
      'line-spin-clockwise-fade-rotating': 8,
      'line-spin-fade': 8,
      'line-spin-fade-rotating': 8,
      'pacman': 6,
      'square-jelly-box': 2,
      'square-loader': 1,
      'square-spin': 1,
      'timer': 1,
      'triangle-skew-spin': 1
    };
  }
  /**
   * Show loading overlay including the spinner.
   *
   * @param options
   */


  _createClass(JSLoadingOverlay, [{
    key: "show",
    value: function show(options) {
      // Override default options if options parameter exist.
      this.setOptions(options); // Add spinner stylesheet from https://cdn.jsdelivr.net in head.

      this.addSpinnerStylesheet(); // Generate spinner html element.

      this.generateSpinnerElement();

      if (this.options.lockScroll) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      } // Generate overlay html element in full page.


      this.generateAndAddOverlayElement();
    }
    /**
     * Hide Loading Overlay
     */

  }, {
    key: "hide",
    value: function hide() {
      // Unlock scroll.
      if (this.options.lockScroll) {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }

      var stylesheet = document.getElementById('loading-overlay-stylesheet'); // Remove stylesheet.

      if (stylesheet) {
        stylesheet.disabled = true;
        stylesheet.parentNode.removeChild(stylesheet);
        document.getElementById(this.options.overlayIDName).remove();
        document.getElementById(this.options.spinnerIDName).remove();
      }
    }
    /**
     * Override default options with user specified options.
     *
     * @param options
     */

  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (typeof options !== 'undefined') {
        for (var key in options) {
          this.options[key] = options[key];
        }
      }
    }
    /**
     * Generate overlay html element in full page.
     * - class name
     * - background color
     * - opacity
     *
     * @returns {string}
     */

  }, {
    key: "generateAndAddOverlayElement",
    value: function generateAndAddOverlayElement() {
      var left = '50%'; // Check if spinner X offset not zero

      if (this.options.offsetX !== 0) {
        left = 'calc(50% + ' + this.options.offsetX + ')';
      }

      var top = '50%'; // Check if spinner Y offset not zero

      if (this.options.offsetY !== 0) {
        top = 'calc(50% + ' + this.options.offsetY + ')';
      } // Generate overlay html element in container.


      if (this.options.containerID && document.body.contains(document.getElementById(this.options.containerID))) {
        var _loadingOverlay = "<div id=\"".concat(this.options.overlayIDName, "\" style=\"display: block !important; position: absolute; top: 0; left: 0; overflow: auto; opacity: ").concat(this.options.overlayOpacity, "; background: ").concat(this.options.overlayBackgroundColor, "; z-index: 50; width: 100%; height: 100%;\"></div><div id=\"").concat(this.options.spinnerIDName, "\" style=\"display: block !important; position: absolute; top: ").concat(top, "; left: ").concat(left, "; -webkit-transform: translate(-50%); -ms-transform: translate(-50%); transform: translate(-50%); z-index: 9999;\">").concat(this.spinner, "</div>");

        var containerID = document.getElementById(this.options.containerID);
        containerID.style.position = 'relative';
        containerID.insertAdjacentHTML('beforeend', _loadingOverlay);
        return;
      }

      var loadingOverlay = "<div id=\"".concat(this.options.overlayIDName, "\" style=\"display: block !important; position: fixed; top: 0; left: 0; overflow: auto; opacity: ").concat(this.options.overlayOpacity, "; background: ").concat(this.options.overlayBackgroundColor, "; z-index: ").concat(this.options.overlayZIndex, "; width: 100%; height: 100%;\"></div><div id=\"").concat(this.options.spinnerIDName, "\" style=\"display: block !important; position: fixed; top: ").concat(top, "; left: ").concat(left, "; -webkit-transform: translate(-50%); -ms-transform: translate(-50%); transform: translate(-50%); z-index: ").concat(this.options.spinnerZIndex, ";\">").concat(this.spinner, "</div>"); // Insert the overlay html element in body.

      document.body.insertAdjacentHTML("beforeend", loadingOverlay);
    }
    /**
     * Generate spinner html element. Spinner html element must follow template from https://github.danielcardoso.net/load-awesome/
     */

  }, {
    key: "generateSpinnerElement",
    value: function generateSpinnerElement() {
      var _this = this;

      var emptyDivKey = Object.keys(this.numberOfEmptyDivForSpinner).find(function (element) {
        return element === _this.options.spinnerIcon;
      });
      var emptyDivElement = this.generateEmptyDivElement(this.numberOfEmptyDivForSpinner[emptyDivKey]);
      this.spinner = "<div style=\"color: ".concat(this.options.spinnerColor, "\" class=\"la-").concat(this.options.spinnerIcon, " la-").concat(this.options.spinnerSize, "\">").concat(emptyDivElement, "</div>");
    }
    /**
     * Add spinner stylesheet tag in head section.
     * All stylesheet URL are from CDN. Using Load Awesome CSS Spinner.
     *
     * @see https://github.danielcardoso.net/load-awesome/
     * @see https://www.jsdelivr.com/package/npm/load-awesome?path=css
     */

  }, {
    key: "addSpinnerStylesheet",
    value: function addSpinnerStylesheet() {
      this.setSpinnerStylesheetURL();
      var link = document.createElement('link');
      link.setAttribute('id', 'loading-overlay-stylesheet');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('type', 'text/css');
      link.setAttribute('href', this.spinnerStylesheetURL);
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    /**
     * Set spinner stylesheet based on the icon specify in options.
     * All stylesheet URL are from CDN. Using Load Awesome CSS Spinner.
     *
     * @see https://github.danielcardoso.net/load-awesome/
     * @see https://www.jsdelivr.com/package/npm/load-awesome?path=css
     *
     * @returns {string}
     */

  }, {
    key: "setSpinnerStylesheetURL",
    value: function setSpinnerStylesheetURL() {
      this.spinnerStylesheetURL = this.stylesheetBaseURL + this.options.spinnerIcon + '.min.css';
    }
    /**
     * Generate empty div element for spinner element.
     *
     * @param numberOfEmptyDiv
     * @returns {string}
     */

  }, {
    key: "generateEmptyDivElement",
    value: function generateEmptyDivElement(numberOfEmptyDiv) {
      var emptyDivElement = '';

      for (var i = 1; i <= numberOfEmptyDiv; i++) {
        emptyDivElement += '<div></div>';
      }

      return emptyDivElement;
    }
  }]);

  return JSLoadingOverlay;
}();

window.JsLoadingOverlay = new JSLoadingOverlay();
module.exports = JsLoadingOverlay;

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/js-loading-overlay.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js-loading-overlay.js */"./src/js-loading-overlay.js");


/***/ })

/******/ });
//# sourceMappingURL=js-loading-overlay.js.map