/*! Packed by Vusion. */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Library"] = factory();
	else
		root["Library"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 464);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(97)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return warning; });
/* harmony export (immutable) */ __webpack_exports__["d"] = format;
/* harmony export (immutable) */ __webpack_exports__["e"] = isEmptyValue;
/* unused harmony export isEmptyObject */
/* harmony export (immutable) */ __webpack_exports__["a"] = asyncMap;
/* harmony export (immutable) */ __webpack_exports__["b"] = complementError;
/* harmony export (immutable) */ __webpack_exports__["c"] = deepMerge;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);


var formatRegExp = /%[sdj%]/g;

var warning = function warning() {};

// don't print warning message when in production env or node runtime
if (false) {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function format() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += ' ' + arg;
    }
    return str;
  }
  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var flattenArr = flattenObjArr(objArr);
    return asyncSerialArray(flattenArr, func, callback);
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var next = function next(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === objArrLength) {
      callback(results);
    }
  };
  objArrKeys.forEach(function (key) {
    var arr = objArr[key];
    if (firstFields.indexOf(key) !== -1) {
      asyncSerialArray(arr, func, next);
    } else {
      asyncParallelArray(arr, func, next);
    }
  });
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(value)) === 'object' && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(target[s]) === 'object') {
          target[s] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__required__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__whitespace__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__range__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enum__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pattern__ = __webpack_require__(448);







/* harmony default export */ __webpack_exports__["a"] = ({
  required: __WEBPACK_IMPORTED_MODULE_0__required__["a" /* default */],
  whitespace: __WEBPACK_IMPORTED_MODULE_1__whitespace__["a" /* default */],
  type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
  range: __WEBPACK_IMPORTED_MODULE_3__range__["a" /* default */],
  'enum': __WEBPACK_IMPORTED_MODULE_4__enum__["a" /* default */],
  pattern: __WEBPACK_IMPORTED_MODULE_5__pattern__["a" /* default */]
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(75)
  , defined = __webpack_require__(34);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(10)
  , createDesc = __webpack_require__(23);
module.exports = __webpack_require__(11) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(21)
  , IE8_DOM_DEFINE = __webpack_require__(72)
  , toPrimitive    = __webpack_require__(33)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(15)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(37)('wks')
  , uid        = __webpack_require__(24)
  , Symbol     = __webpack_require__(6).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_3765e252_preserveWhitespace_false_index_html__ = __webpack_require__(176);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(173);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_3765e252_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;
function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(74)
  , enumBugKeys = __webpack_require__(38);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_20154b5e_preserveWhitespace_false_index_html__ = __webpack_require__(177);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(170);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_20154b5e_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const EventUtil = {
    addHandler(element, type, handler) {
        if (element.addEventListener)
            element.addEventListener(type, handler, false);
        else if (element.attachEvent)
            element.attachEvent('on' + type, handler);
        else
            element['on' + type] = handler;
    },
    removeHandler(element, type, handler) {
        if (element.removeEventListener)
            element.removeEventListener(type, handler, false);
        else if (element.detachEvent)
            element.detachEvent('on' + type, handler);
        else
            element['on' + type] = null;
    },
};
/* harmony default export */ __webpack_exports__["a"] = (EventUtil);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".m68uK2bPAJAeUVo6{overflow:auto}.m68uK2bPAJAeUVo6[inline] .m68uK2bPAJAeUVo6{margin-right:20px;width:auto;display:inline-block;float:none;margin-left:10px}", ""]);

// exports
exports.locals = {
	"root": "m68uK2bPAJAeUVo6",
	"item": "m68uK2bPAJAeUVo6",
	"item-title": "m68uK2bPAJAeUVo6",
	"item-field": "m68uK2bPAJAeUVo6"
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(418);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(430);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(145);
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event_js__ = __webpack_require__(18);


const clickoutside = {
    bind(el, binding, vnode) {
        const documentHandler = function (e) {
            if (el.contains(e.target))
                return false;

            if (binding.expression)
                binding.value(e);
        };
        el.__vueClickOutside__ = documentHandler;
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].addHandler(document, 'click', documentHandler);
    },
    unbind(el, binding) {
        __WEBPACK_IMPORTED_MODULE_0__event_js__["a" /* default */].removeHandler(document, 'click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    },
};

/* harmony default export */ __webpack_exports__["a"] = ({ clickoutside });


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toDate(date) {
  (0, _assertString2.default)(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = toString;
function toString(input) {
  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }
  return String(input);
}
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFDQN;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(14);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFDQN(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, i = 0; i < parts.length; i++) {
    part = parts[i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(6)
  , core      = __webpack_require__(20)
  , ctx       = __webpack_require__(412)
  , hide      = __webpack_require__(9)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(22);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(37)('keys')
  , uid    = __webpack_require__(24);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f
  , has = __webpack_require__(7)
  , TAG = __webpack_require__(12)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(12);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(6)
  , core           = __webpack_require__(20)
  , LIBRARY        = __webpack_require__(40)
  , wksExt         = __webpack_require__(43)
  , defineProperty = __webpack_require__(10).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(106);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(104);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(180);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(178);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(187);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(185);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(194);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(192);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_082f2e30_preserveWhitespace_false_index_html__ = __webpack_require__(209);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(200);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_082f2e30_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_582e226b_preserveWhitespace_false_index_html__ = __webpack_require__(208);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(203);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_582e226b_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(206);
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 52 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isObject = function (value) {
    if (value === null || value === undefined)
        return false;
    return value.toString() === '[object Object]';
};

const isArray = function (value) {
    return Array.isArray(value);
};

const deepcopy = function (result, source) {
    for (const key in source) {
        const copy = source[key];
        if (isObject(copy))
            result[key] = deepcopy(result[key] || {}, copy);
        else if (isArray(copy))
            result[key] = deepcopy(result[key] || [], copy);
        else
            result[key] = copy;
    }
    return result;
};
// 判断参数是否属于数组中的值 返回值Boolean
const oneOf = function (target, source) {
    const flag = source.some((item) => {
        if (target === item)
            return true;
        else
            return false;
    });
    return flag;
};

/* harmony default export */ __webpack_exports__["a"] = ({ isObject, isArray, deepcopy, oneOf });


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_20b73cf0_preserveWhitespace_false_index_html__ = __webpack_require__(223);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(220);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_20b73cf0_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_0cdd2ab8_preserveWhitespace_false_index_html__ = __webpack_require__(237);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(234);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_0cdd2ab8_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_142f07e0_preserveWhitespace_false_index_html__ = __webpack_require__(271);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(268);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_142f07e0_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_8a7137ba_preserveWhitespace_false_index_html__ = __webpack_require__(348);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(296);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_8a7137ba_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toFloat;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFloat(str) {
  (0, _assertString2.default)(str);
  return parseFloat(str);
}
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmail;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _merge = __webpack_require__(14);

var _merge2 = _interopRequireDefault(_merge);

var _isByteLength = __webpack_require__(60);

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isFQDN = __webpack_require__(31);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();
  if (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com') {
    user = user.replace(/\./g, '').toLowerCase();
  }

  if (!(0, _isByteLength2.default)(user, { max: 64 }) || !(0, _isByteLength2.default)(domain, { max: 254 })) {
    return false;
  }

  if (!(0, _isFQDN2.default)(domain, { require_tld: options.require_tld })) {
    return false;
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var i = 0; i < user_parts.length; i++) {
    if (!pattern.test(user_parts[i])) {
      return false;
    }
  }

  return true;
}
module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isByteLength;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIP;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var alpha = exports.alpha = {
  'en-US': /^[A-Z]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'nl-NL': /^[A-ZÉËÏÓÖÜ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЩЬЮЯЄIЇҐ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var alphanumeric = exports.alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nl-NL': /^[0-9A-ZÉËÏÓÖÜ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var englishLocales = exports.englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = 'en-' + englishLocales[i];
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];

// Source: http://www.localeplanet.com/java/
var arabicLocales = exports.arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = 'ar-' + arabicLocales[_i];
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fullWidth = undefined;
exports.default = isFullWidth;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullWidth = exports.fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isFullWidth(str) {
  (0, _assertString2.default)(str);
  return fullWidth.test(str);
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.halfWidth = undefined;
exports.default = isHalfWidth;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var halfWidth = exports.halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isHalfWidth(str) {
  (0, _assertString2.default)(str);
  return halfWidth.test(str);
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexadecimal;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
  (0, _assertString2.default)(str);
  return hexadecimal.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ltrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
  return str.replace(pattern, '');
}
module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtrim;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rtrim(str, chars) {
  (0, _assertString2.default)(str);
  var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

  var idx = str.length - 1;
  while (idx >= 0 && pattern.test(str[idx])) {
    idx--;
  }

  return idx < str.length ? str.substr(0, idx + 1) : str;
}
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blacklist;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function blacklist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_328b7480_preserveWhitespace_false_index_html__ = __webpack_require__(352);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(349);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_328b7480_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(389);
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(409);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(11) && !__webpack_require__(15)(function(){
  return Object.defineProperty(__webpack_require__(73)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22)
  , document = __webpack_require__(6).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(7)
  , toIObject    = __webpack_require__(8)
  , arrayIndexOf = __webpack_require__(415)(false)
  , IE_PROTO     = __webpack_require__(36)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(76);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(34);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(40)
  , $export        = __webpack_require__(32)
  , redefine       = __webpack_require__(79)
  , hide           = __webpack_require__(9)
  , has            = __webpack_require__(7)
  , Iterators      = __webpack_require__(41)
  , $iterCreate    = __webpack_require__(422)
  , setToStringTag = __webpack_require__(42)
  , getPrototypeOf = __webpack_require__(425)
  , ITERATOR       = __webpack_require__(12)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(21)
  , dPs         = __webpack_require__(423)
  , enumBugKeys = __webpack_require__(38)
  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(73)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(424).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(74)
  , hiddenKeys = __webpack_require__(38).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(4);


/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || __WEBPACK_IMPORTED_MODULE_0__util__["e" /* isEmptyValue */](value, type || rule.type))) {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.required, rule.fullField));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (required);

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.4.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (false) {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (false) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  "production" !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (false) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  "production" !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (false) {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  "production" !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (false) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "production" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  if (false) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, null, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners, null, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (false) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    if (false) {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (false
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    false
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (modelRs.exp) + ", " + (modelRs.idx) + ", " + assignment + ")")
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (false) {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (false) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (false) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (false
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (false) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (false) {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (false) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (false
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "production" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        if (false) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (false) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (false) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (false) {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "production" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (false) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (false) {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (false) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (false) {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (false) {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      false
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if (false
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function on (el, dir) {
  if (false) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "production" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (false
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (false) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el, state) || 'void 0'
      : genElement(el, state)) + "}}"
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    if (false) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (false) {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (false) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (false) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "production" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (false) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (false) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (false) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (false) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue$3);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(52)))

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_u_base_vue_base_css__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_u_base_vue_base_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_u_base_vue_base_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_u_base_vue_directives__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_u_base_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_u_link_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_u_button_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_u_linear_progress_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_u_linear_layout_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_u_circular_progress_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_u_pagination_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_u_sidebar_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_u_sidebar_item_vue__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_u_sidebar_menu_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_u_tabs_vue__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_u_tab_vue__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_u_pills_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_u_pill_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_u_capsules_vue__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_u_capsule_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_u_tablets_vue__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_u_tablet_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_u_modal_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_u_calendar_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_u_subnav_item_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_u_subnav_vue__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_u_number_input_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_u_date_picker_vue__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_u_time_picker_vue__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_u_chart_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_u_pie_chart_vue__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_u_line_chart_vue__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_u_bar_chart_vue__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_u_date_time_picker_vue__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_u_select_vue__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_u_toast_vue__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_u_tag_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_u_multi_select_vue__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_u_switch_vue__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_u_xbar_chart_vue__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_u_blank_vue__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_u_validation_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_u_field_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__src_u_input_field_vue__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__src_u_table_view_vue__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__src_u_table_view_column_vue__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__src_u_select_color_vue__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__src_u_popper_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__src_u_popover_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__src_u_badge_vue__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__src_u_input_vue__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__src_u_form_vue__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__src_u_form_item_vue__ = __webpack_require__(400);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return __WEBPACK_IMPORTED_MODULE_2__src_u_base_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_3__src_u_link_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_4__src_u_button_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LinearProgress", function() { return __WEBPACK_IMPORTED_MODULE_5_u_linear_progress_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LinearLayout", function() { return __WEBPACK_IMPORTED_MODULE_6_u_linear_layout_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CircularProgress", function() { return __WEBPACK_IMPORTED_MODULE_7_u_circular_progress_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return __WEBPACK_IMPORTED_MODULE_8__src_u_pagination_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return __WEBPACK_IMPORTED_MODULE_9__src_u_sidebar_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarItem", function() { return __WEBPACK_IMPORTED_MODULE_10__src_u_sidebar_item_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMenu", function() { return __WEBPACK_IMPORTED_MODULE_11__src_u_sidebar_menu_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return __WEBPACK_IMPORTED_MODULE_12__src_u_tabs_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return __WEBPACK_IMPORTED_MODULE_13__src_u_tab_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Pills", function() { return __WEBPACK_IMPORTED_MODULE_14__src_u_pills_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Pill", function() { return __WEBPACK_IMPORTED_MODULE_15__src_u_pill_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Capsules", function() { return __WEBPACK_IMPORTED_MODULE_16__src_u_capsules_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Capsule", function() { return __WEBPACK_IMPORTED_MODULE_17__src_u_capsule_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tablets", function() { return __WEBPACK_IMPORTED_MODULE_18__src_u_tablets_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tablet", function() { return __WEBPACK_IMPORTED_MODULE_19__src_u_tablet_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_20__src_u_modal_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return __WEBPACK_IMPORTED_MODULE_21__src_u_calendar_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SubnavItem", function() { return __WEBPACK_IMPORTED_MODULE_22__src_u_subnav_item_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Subnav", function() { return __WEBPACK_IMPORTED_MODULE_23__src_u_subnav_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return __WEBPACK_IMPORTED_MODULE_24__src_u_number_input_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return __WEBPACK_IMPORTED_MODULE_25__src_u_date_picker_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return __WEBPACK_IMPORTED_MODULE_26__src_u_time_picker_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return __WEBPACK_IMPORTED_MODULE_27__src_u_chart_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PieChart", function() { return __WEBPACK_IMPORTED_MODULE_28__src_u_pie_chart_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LineChart", function() { return __WEBPACK_IMPORTED_MODULE_29__src_u_line_chart_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return __WEBPACK_IMPORTED_MODULE_31__src_u_date_time_picker_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return __WEBPACK_IMPORTED_MODULE_30__src_u_bar_chart_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_32__src_u_select_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return __WEBPACK_IMPORTED_MODULE_33__src_u_toast_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return __WEBPACK_IMPORTED_MODULE_34__src_u_tag_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelect", function() { return __WEBPACK_IMPORTED_MODULE_35__src_u_multi_select_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_36__src_u_switch_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "XBarChart", function() { return __WEBPACK_IMPORTED_MODULE_37__src_u_xbar_chart_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Blank", function() { return __WEBPACK_IMPORTED_MODULE_38__src_u_blank_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Validation", function() { return __WEBPACK_IMPORTED_MODULE_39__src_u_validation_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return __WEBPACK_IMPORTED_MODULE_40__src_u_field_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return __WEBPACK_IMPORTED_MODULE_41__src_u_input_field_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TableView", function() { return __WEBPACK_IMPORTED_MODULE_42__src_u_table_view_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TableViewColumn", function() { return __WEBPACK_IMPORTED_MODULE_43__src_u_table_view_column_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SelectColor", function() { return __WEBPACK_IMPORTED_MODULE_44__src_u_select_color_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return __WEBPACK_IMPORTED_MODULE_45__src_u_popper_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return __WEBPACK_IMPORTED_MODULE_46__src_u_popover_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return __WEBPACK_IMPORTED_MODULE_47__src_u_badge_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_48__src_u_input_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_49__src_u_form_vue__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormItem", function() { return __WEBPACK_IMPORTED_MODULE_50__src_u_form_item_vue__["a"]; });




















































const Components = {
    Base: __WEBPACK_IMPORTED_MODULE_2__src_u_base_vue__["a" /* default */],
    Link: __WEBPACK_IMPORTED_MODULE_3__src_u_link_vue__["a" /* default */],
    Button: __WEBPACK_IMPORTED_MODULE_4__src_u_button_vue__["a" /* default */],
    LinearProgress: __WEBPACK_IMPORTED_MODULE_5_u_linear_progress_vue__["a" /* default */],
    LinearLayout: __WEBPACK_IMPORTED_MODULE_6_u_linear_layout_vue__["a" /* default */],
    CircularProgress: __WEBPACK_IMPORTED_MODULE_7_u_circular_progress_vue__["a" /* default */],
    Pagination: __WEBPACK_IMPORTED_MODULE_8__src_u_pagination_vue__["a" /* default */],
    Sidebar: __WEBPACK_IMPORTED_MODULE_9__src_u_sidebar_vue__["a" /* default */],
    SidebarItem: __WEBPACK_IMPORTED_MODULE_10__src_u_sidebar_item_vue__["a" /* default */],
    SidebarMenu: __WEBPACK_IMPORTED_MODULE_11__src_u_sidebar_menu_vue__["a" /* default */],
    Tabs: __WEBPACK_IMPORTED_MODULE_12__src_u_tabs_vue__["a" /* default */],
    Tab: __WEBPACK_IMPORTED_MODULE_13__src_u_tab_vue__["a" /* default */],
    Pills: __WEBPACK_IMPORTED_MODULE_14__src_u_pills_vue__["a" /* default */],
    Pill: __WEBPACK_IMPORTED_MODULE_15__src_u_pill_vue__["a" /* default */],
    Capsules: __WEBPACK_IMPORTED_MODULE_16__src_u_capsules_vue__["a" /* default */],
    Capsule: __WEBPACK_IMPORTED_MODULE_17__src_u_capsule_vue__["a" /* default */],
    Tablets: __WEBPACK_IMPORTED_MODULE_18__src_u_tablets_vue__["a" /* default */],
    Tablet: __WEBPACK_IMPORTED_MODULE_19__src_u_tablet_vue__["a" /* default */],
    Modal: __WEBPACK_IMPORTED_MODULE_20__src_u_modal_vue__["a" /* default */],
    Calendar: __WEBPACK_IMPORTED_MODULE_21__src_u_calendar_vue__["a" /* default */],
    SubnavItem: __WEBPACK_IMPORTED_MODULE_22__src_u_subnav_item_vue__["a" /* default */],
    Subnav: __WEBPACK_IMPORTED_MODULE_23__src_u_subnav_vue__["a" /* default */],
    NumberInput: __WEBPACK_IMPORTED_MODULE_24__src_u_number_input_vue__["a" /* default */],
    DatePicker: __WEBPACK_IMPORTED_MODULE_25__src_u_date_picker_vue__["a" /* default */],
    TimePicker: __WEBPACK_IMPORTED_MODULE_26__src_u_time_picker_vue__["a" /* default */],
    Chart: __WEBPACK_IMPORTED_MODULE_27__src_u_chart_vue__["a" /* default */],
    PieChart: __WEBPACK_IMPORTED_MODULE_28__src_u_pie_chart_vue__["a" /* default */],
    LineChart: __WEBPACK_IMPORTED_MODULE_29__src_u_line_chart_vue__["a" /* default */],
    DateTimePicker: __WEBPACK_IMPORTED_MODULE_31__src_u_date_time_picker_vue__["a" /* default */],
    BarChart: __WEBPACK_IMPORTED_MODULE_30__src_u_bar_chart_vue__["a" /* default */],
    Select: __WEBPACK_IMPORTED_MODULE_32__src_u_select_vue__["a" /* default */],
    Toast: __WEBPACK_IMPORTED_MODULE_33__src_u_toast_vue__["a" /* default */],
    Tag: __WEBPACK_IMPORTED_MODULE_34__src_u_tag_vue__["a" /* default */],
    MultiSelect: __WEBPACK_IMPORTED_MODULE_35__src_u_multi_select_vue__["a" /* default */],
    Switch: __WEBPACK_IMPORTED_MODULE_36__src_u_switch_vue__["a" /* default */],
    XBarChart: __WEBPACK_IMPORTED_MODULE_37__src_u_xbar_chart_vue__["a" /* default */],
    Blank: __WEBPACK_IMPORTED_MODULE_38__src_u_blank_vue__["a" /* default */],
    Validation: __WEBPACK_IMPORTED_MODULE_39__src_u_validation_vue__["a" /* default */],
    Field: __WEBPACK_IMPORTED_MODULE_40__src_u_field_vue__["a" /* default */],
    InputField: __WEBPACK_IMPORTED_MODULE_41__src_u_input_field_vue__["a" /* default */],
    TableView: __WEBPACK_IMPORTED_MODULE_42__src_u_table_view_vue__["a" /* default */],
    TableViewColumn: __WEBPACK_IMPORTED_MODULE_43__src_u_table_view_column_vue__["a" /* default */],
    SelectColor: __WEBPACK_IMPORTED_MODULE_44__src_u_select_color_vue__["a" /* default */],
    Popper: __WEBPACK_IMPORTED_MODULE_45__src_u_popper_vue__["a" /* default */],
    Popover: __WEBPACK_IMPORTED_MODULE_46__src_u_popover_vue__["a" /* default */],
    Badge: __WEBPACK_IMPORTED_MODULE_47__src_u_badge_vue__["a" /* default */],
    Input: __WEBPACK_IMPORTED_MODULE_48__src_u_input_vue__["a" /* default */],
    Form: __WEBPACK_IMPORTED_MODULE_49__src_u_form_vue__["a" /* default */],
    FormItem: __WEBPACK_IMPORTED_MODULE_50__src_u_form_item_vue__["a" /* default */],
};



const Library = {
    install(Vue) {
        for (const key in __WEBPACK_IMPORTED_MODULE_1_u_base_vue_directives__)
            Vue.directive(key, __WEBPACK_IMPORTED_MODULE_1_u_base_vue_directives__[key]);
        for (const key in Components)
            Vue.component(Components[key].name, Components[key]);
    },
};

/* harmony default export */ __webpack_exports__["default"] = (Library);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(87)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../Vusion/vusion-cli/node_modules/vusion-css-loader/index.js??ref--2-1!../../../../Vusion/vusion-cli/node_modules/icon-font-loader/index.js!../../../../Vusion/vusion-cli/node_modules/postcss-loader/lib/index.js??ref--2-3!../../../../Vusion/vusion-cli/node_modules/import-global-loader/index.js!./base.css", function() {
			var newContent = require("!!../../../../Vusion/vusion-cli/node_modules/vusion-css-loader/index.js??ref--2-1!../../../../Vusion/vusion-cli/node_modules/icon-font-loader/index.js!../../../../Vusion/vusion-cli/node_modules/postcss-loader/lib/index.js??ref--2-3!../../../../Vusion/vusion-cli/node_modules/import-global-loader/index.js!./base.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "/*! normalize.css v6.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}html{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:sans-serif}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}dd,dl,dt,li,ol,ul{margin:0;padding:0}ol,ul{list-style:none}table{border-collapse:collapse}a{text-decoration:none;color:inherit;cursor:pointer}body{font:14px/1.6 Microsoft YaHei,Hiragino Sans GB,WenQuanYi Micro Hei,sans-serif}", ""]);

// exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(88);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 88 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const href = {
    bind(el, binding) {
        el.bindingValue = binding.value;
        el.addEventListener('click', (e) => location.href = el.bindingValue);
    },
    componentUpdated(el, binding) {
        el.bindingValue = binding.value;
    },
};
/* harmony export (immutable) */ __webpack_exports__["href"] = href;


const to = {
    bind(el, binding, vnode) {
        const $router = vnode.componentInstance.$router;
        if (!$router)
            return console.warn('[proto-ui] Cannot find vue router.');

        el.bindingValue = binding.value;
        el.addEventListener('click', (e) => $router.push(el.bindingValue));
    },
    componentUpdated(el, binding) {
        el.bindingValue = binding.value;
    },
};
/* harmony export (immutable) */ __webpack_exports__["to"] = to;



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(91);
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_base_vue__ = __webpack_require__(92);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_u_base_vue__["a" /* default */]);


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(93);
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-base',
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(98);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(95);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("065be0d7", content, true);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._4x6kqzYblkICOSUF{color:#67aaf5}._4x6kqzYblkICOSUF:hover{text-decoration:underline}._4x6kqzYblkICOSUF{color:#5494db}._4x6kqzYblkICOSUF[disabled]{cursor:not-allowed;color:#ccc}", ""]);

// exports
exports.locals = {
	"root": "_4x6kqzYblkICOSUF"
};

/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_link_vue__ = __webpack_require__(99);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_u_link_vue__["a" /* default */]);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_25f15600_preserveWhitespace_false_index_html__ = __webpack_require__(103);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(100);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_25f15600_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1545acc6", content, true);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._37VUwL_5KR9UqC1j{color:#67aaf5}._37VUwL_5KR9UqC1j:hover{text-decoration:underline}", ""]);

// exports
exports.locals = {
	"root": "_37VUwL_5KR9UqC1j"
};

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-link',
});


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', _vm._g({
    class: _vm.$style.root
  }, _vm.$listeners), [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1e42364e", content, true);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._14Psrw8smLh9O-Ab{-webkit-appearance:none;margin:0;border:none;overflow:visible;font:inherit;text-transform:none;text-decoration:none;cursor:pointer;background:none;display:inline-block;text-align:center;padding:0 12px;height:34px;line-height:32px;background:#fff;color:#345;border:1px solid #ccc}._14Psrw8smLh9O-Ab:hover{color:#67aaf5;border-color:#67aaf5}._14Psrw8smLh9O-Ab:focus,._14Psrw8smLh9O-Ab:hover{outline:none;text-decoration:none}._14Psrw8smLh9O-Ab:active{background:#eee}._14Psrw8smLh9O-Ab[disabled]{cursor:not-allowed;background:#fff;border-color:#ccc}._14Psrw8smLh9O-Ab{border-color:#cdcdcd;color:#333;padding:0 30px}._14Psrw8smLh9O-Ab:active{background-color:#fff;-webkit-box-shadow:inset 0 1px 3px rgba(0,0,0,.2);box-shadow:inset 0 1px 3px rgba(0,0,0,.2)}._14Psrw8smLh9O-Ab[disabled]{color:#ccc;border-color:#ddd}._14Psrw8smLh9O-Ab[color=primary]{background:#67aaf5;color:#fff;border:none}._14Psrw8smLh9O-Ab[color=primary]:hover{background:#5b96d9}._14Psrw8smLh9O-Ab[color=primary][disabled]{background:#d9d9d9}._14Psrw8smLh9O-Ab[size=small]{height:30px;line-height:30px;padding:0 10px}._14Psrw8smLh9O-Ab[square]{width:34px;padding:0}._14Psrw8smLh9O-Ab[icon=create]:before{content:\"\\F101\";margin-right:8px}._14Psrw8smLh9O-Ab[icon=create]:before,._14Psrw8smLh9O-Ab[square][icon=refresh]:before{font-family:vusion-icon-font;font-style:normal;font-weight:400;font-variant:normal;text-decoration:inherit;text-rendering:optimizeLegibility;text-transform:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;vertical-align:-2px}._14Psrw8smLh9O-Ab[square][icon=refresh]:before{content:\"\\F102\";color:#9ba4ad}._14Psrw8smLh9O-Ab[square][icon=refresh]:hover:before{color:#67aaf5}._14Psrw8smLh9O-Ab[icon=loading]:before{content:\"\";display:inline-block;vertical-align:-4px;margin-left:-2px;margin-right:6px;width:18px;height:18px;border:2px solid currentColor;border-top-color:transparent;border-radius:100%;-webkit-animation:_14Psrw8smLh9O-Ab 1s ease-in-out 0s infinite;animation:_14Psrw8smLh9O-Ab 1s ease-in-out 0s infinite}@-webkit-keyframes _14Psrw8smLh9O-Ab{0%{-webkit-transform:rotate(0);transform:rotate(0)}80%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes _14Psrw8smLh9O-Ab{0%{-webkit-transform:rotate(0);transform:rotate(0)}80%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""]);

// exports
exports.locals = {
	"root": "_14Psrw8smLh9O-Ab",
	"rotate": "_14Psrw8smLh9O-Ab"
};

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_button_vue__ = __webpack_require__(107);


/**
 * @class Button
 * @extends Base
 * @param {string=''}           attrs.color                     Color
 * @param {string=''}           attrs.size                      Size
 * @param {boolean=false}       attrs.square                    Shape is a square
 * @param {boolean=false}       attrs.disabled                  Disabled the button
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_u_button_vue__["a" /* default */]);


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_ddf7e490_preserveWhitespace_false_index_html__ = __webpack_require__(111);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(108);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_ddf7e490_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(109);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("e43f14a4", content, true);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3FyxbNAgpTBNoNjL{-webkit-appearance:none;margin:0;border:none;overflow:visible;font:inherit;text-transform:none;text-decoration:none;cursor:pointer;background:none;display:inline-block;text-align:center;padding:0 12px;height:34px;line-height:32px;background:#fff;color:#345;border:1px solid #ccc}._3FyxbNAgpTBNoNjL:hover{color:#67aaf5;border-color:#67aaf5}._3FyxbNAgpTBNoNjL:focus,._3FyxbNAgpTBNoNjL:hover{outline:none;text-decoration:none}._3FyxbNAgpTBNoNjL:active{background:#eee}._3FyxbNAgpTBNoNjL[disabled]{cursor:not-allowed;background:#fff;border-color:#ccc;color:#ccc}", ""]);

// exports
exports.locals = {
	"root": "_3FyxbNAgpTBNoNjL"
};

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-button',
});


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', _vm._g({
    class: _vm.$style.root
  }, _vm.$listeners), [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_39953ebf_preserveWhitespace_false_index_html__ = __webpack_require__(116);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(113);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_39953ebf_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7281322f", content, true);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3Sh78Jz59rEBu81u{overflow:hidden;height:12px;line-height:12px;background:#eee;width:0;height:100%;float:left;background:#67aaf5;font-size:12px;color:#fff;-webkit-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}", ""]);

// exports
exports.locals = {
	"root": "_3Sh78Jz59rEBu81u",
	"track": "_3Sh78Jz59rEBu81u",
	"trail": "_3Sh78Jz59rEBu81u"
};

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-linear-progress',
    props: {
        percent: { type: Number, default: 0 },
    },
});


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root
  }, [_c('div', {
    class: _vm.$style.track
  }, [_c('div', {
    class: _vm.$style.trail,
    style: ({
      width: _vm.percent + '%'
    })
  })]), _vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_db5ef088_preserveWhitespace_false_index_html__ = __webpack_require__(121);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(118);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_db5ef088_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("18f122a2", content, true);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1PSr6Y_rxd_ybBS6[direction=horizontal]>*{margin-right:20px}._1PSr6Y_rxd_ybBS6[direction=vertical]>*{margin-bottom:20px}", ""]);

// exports
exports.locals = {
	"root": "_1PSr6Y_rxd_ybBS6"
};

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-linear-layout',
    props: {
        direction: { default: 'horizontal', validator: (value) => ['horizontal', 'vertical'].includes(value) },
    },
});


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root,
    attrs: {
      "direction": _vm.direction
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_0669d105_preserveWhitespace_false_index_html__ = __webpack_require__(126);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(123);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_0669d105_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("76912132", content, true);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2j9gWBftvk3_eSJz{display:inline-block;position:relative;width:100px;height:100px;width:100%;height:100%;stroke:#eee;fill:none;stroke-width:6px;stroke:#67aaf5;-webkit-transition:stroke .6s ease,stroke-dasharray .6s ease;-o-transition:stroke .6s ease,stroke-dasharray .6s ease;transition:stroke .6s ease,stroke-dasharray .6s ease;position:absolute;top:0;left:0;right:0;text-align:center;line-height:100px;font-size:18px;color:#666}", ""]);

// exports
exports.locals = {
	"root": "_2j9gWBftvk3_eSJz",
	"svg": "_2j9gWBftvk3_eSJz",
	"track": "_2j9gWBftvk3_eSJz",
	"trail": "_2j9gWBftvk3_eSJz",
	"text": "_2j9gWBftvk3_eSJz"
};

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-circular-progress',
    props: {
        percent: { type: Number, default: 0 },
    },
    data() {
        return {
            radius: 45,
        };
    },
    computed: {
        strokeDasharray() {
            return 2 * Math.PI * this.radius * this.percent * 0.01 + 'px 1000px';
        },
    },
});


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root
  }, [_c('svg', {
    class: _vm.$style.svg,
    attrs: {
      "viewBox": "0 0 100 100"
    }
  }, [_c('g', {
    attrs: {
      "transform": "translate(50, 50) rotate(-90)"
    }
  }, [_c('circle', {
    class: _vm.$style.track,
    attrs: {
      "cx": "0",
      "cy": "0",
      "r": _vm.radius
    }
  }), _c('circle', {
    class: _vm.$style.trail,
    style: ({
      strokeDasharray: _vm.strokeDasharray
    }),
    attrs: {
      "cx": "0",
      "cy": "0",
      "r": _vm.radius
    }
  })])]), _c('div', {
    class: _vm.$style.text
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.percent + '%'))])], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(130);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(128);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(129);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("64a2e839", content, true);

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3e4M5x897tcL2oxv{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;margin-bottom:15px;display:inline-block;text-decoration:none;padding:0 10px;min-width:32px;height:32px;line-height:32px;font-size:12px;text-align:center;background:#eee;color:#345}._3e4M5x897tcL2oxv[disabled]{color:#ccc}._3e4M5x897tcL2oxv[role=prev]:before{content:\"\\2039\"}._3e4M5x897tcL2oxv[role=next]:before{content:\"\\203A\"}._3e4M5x897tcL2oxv[role=blank]{color:#345}._3e4M5x897tcL2oxv[disabled]{cursor:not-allowed}._3e4M5x897tcL2oxv[disabled] ._3e4M5x897tcL2oxv{color:#ccc}._3e4M5x897tcL2oxv[disabled] ._3e4M5x897tcL2oxv[selected]{background:#ddd}._3e4M5x897tcL2oxv{text-align:right;padding:0;min-width:auto;width:30px;height:30px;line-height:28px;background:#fff;color:#555;border:1px solid #ccc;margin-left:-1px}._3e4M5x897tcL2oxv:hover{background:#eee;color:#67aaf5}._3e4M5x897tcL2oxv[selected]{position:relative;background:#67aaf5;color:#fff;border-color:#67aaf5}._3e4M5x897tcL2oxv[disabled]{background:none;color:#bbb;border-color:#dedede}._3e4M5x897tcL2oxv[role=prev]{border-radius:2px 0 0 2px;color:#999}._3e4M5x897tcL2oxv[role=next]{border-radius:0 2px 2px 0;color:#999}._3e4M5x897tcL2oxv[role=blank]{background:none;border:none;color:#555}._3e4M5x897tcL2oxv[disabled] ._3e4M5x897tcL2oxv{background:none;color:#bbb}._3e4M5x897tcL2oxv[disabled] ._3e4M5x897tcL2oxv[selected]{background:#fff}", ""]);

// exports
exports.locals = {
	"root": "_3e4M5x897tcL2oxv",
	"item": "_3e4M5x897tcL2oxv"
};

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_pagination_vue__ = __webpack_require__(131);


/**
 * @class Pagination
 * @extends Base
 * @param {number=1}            props.current                   Current page number
 * @param {number=11}           props.total                     Total count of pages
 * @param {number=2}            props.side                      Count of pages at side position
 * @param {number=5}            props.around                    Count of pages around the current position
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
/**
 * @method select(page) - Select a page
 * @public
 * @param  {number} page - The page number to select
 * @return {void}
 */
/**
 * @event select - Emit when selecting a page
 * @property {number} current - The current page
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_u_pagination_vue__["a" /* default */]);


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_50d88320_preserveWhitespace_false_index_html__ = __webpack_require__(135);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(132);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_50d88320_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(133);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("cbc58802", content, true);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2k4zYgkJeoQCgJuj{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;padding:0;margin-bottom:15px;display:inline-block;text-decoration:none;padding:0 10px;min-width:32px;height:32px;line-height:32px;font-size:12px;text-align:center;background:#eee;color:#345}._2k4zYgkJeoQCgJuj:hover{color:#67aaf5}._2k4zYgkJeoQCgJuj[selected]{background:#67aaf5;color:#fff}._2k4zYgkJeoQCgJuj[disabled]{color:#ccc}._2k4zYgkJeoQCgJuj[role=prev]:before{content:\"\\2039\"}._2k4zYgkJeoQCgJuj[role=next]:before{content:\"\\203A\"}._2k4zYgkJeoQCgJuj[role=blank]{background:none;color:#345}._2k4zYgkJeoQCgJuj[disabled]{cursor:not-allowed}._2k4zYgkJeoQCgJuj[disabled] ._2k4zYgkJeoQCgJuj{color:#ccc}._2k4zYgkJeoQCgJuj[disabled] ._2k4zYgkJeoQCgJuj[selected]{background:#ddd}", ""]);

// exports
exports.locals = {
	"root": "_2k4zYgkJeoQCgJuj",
	"item": "_2k4zYgkJeoQCgJuj"
};

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-pagination',
    props: {
        total: { type: Number, default: 11 },
        current: { type: Number, default: 1 },
        side: { type: Number, default: 2 },
        around: { type: Number, default: 5 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            current_: this.current,
        };
    },
    computed: {
        pages() {
            const pages = [];

            const part = this.around >> 1;
            let start = this.current_ - part;
            let end = start + this.around - 1;
            if (start < 1) {
                end += 1 - start;
                start = 1;
            } else if (end > this.total) {
                start -= end - this.total;
                end = this.total;
            }

            start = Math.max(1, Math.min(start, this.total - this.side + 1));
            end = Math.min(this.total, Math.max(end, this.side));

            let page = 1;
            while (page <= this.total) {
                if (page <= this.side || (page >= start && page <= end) || page > this.total - this.side)
                    pages.push(page);
                else {
                    pages.push(undefined);

                    if (page < start)
                        page = start - 1;
                    if (page > end)
                        page = this.total - this.side;
                }

                page++;
            }

            return pages;
        },
    },
    methods: {
        select(page) {
            if (this.readonly || this.disabled)
                return;

            if (page < 1 || page > this.total || page === this.current_)
                return;

            this.current_ = page;

            this.$emit('select', {
                current: page,
            });
        },
    },
});


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    class: _vm.$style.root,
    attrs: {
      "disabled": _vm.disabled
    }
  }, [_c('li', {
    class: _vm.$style.item,
    attrs: {
      "role": "prev",
      "disabled": _vm.current_ <= 1
    },
    on: {
      "click": function($event) {
        _vm.select(_vm.current_ - 1)
      }
    }
  }), _vm._l((_vm.pages), function(page) {
    return [(page) ? _c('li', {
      class: _vm.$style.item,
      attrs: {
        "selected": _vm.current_ === page
      },
      on: {
        "click": function($event) {
          _vm.select(page)
        }
      }
    }, [_vm._v(_vm._s(page))]) : _c('li', {
      class: _vm.$style.item,
      attrs: {
        "role": "blank"
      }
    }, [_vm._v("...")])]
  }), _c('li', {
    class: _vm.$style.item,
    attrs: {
      "role": "next",
      "disabled": _vm.current_ >= _vm.total
    },
    on: {
      "click": function($event) {
        _vm.select(_vm.current_ + 1)
      }
    }
  })], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_32529ba2_preserveWhitespace_false_index_html__ = __webpack_require__(140);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(137);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_32529ba2_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("ab17cbe6", content, true);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2V_3Q_lAblalevsU{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#f0f6fa}", ""]);

// exports
exports.locals = {
	"root": "_2V_3Q_lAblalevsU"
};

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-sidebar',
    props: {
        accordion: { type: Boolean, default: false },
    },
});


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    class: _vm.$style.root
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_09f7c6e4_preserveWhitespace_false_index_html__ = __webpack_require__(146);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(142);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_09f7c6e4_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("218d3e13", content, true);

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Yn7uIfr_4RHvKyj6{display:block;cursor:pointer;height:52px;line-height:52px;color:#9dabc2;padding-left:20px;-webkit-transition:color .2s;-o-transition:color .2s;transition:color .2s}.Yn7uIfr_4RHvKyj6:hover,.Yn7uIfr_4RHvKyj6[selected]{color:#2cb78e;background-color:#dde8f0}", ""]);

// exports
exports.locals = {
	"root": "Yn7uIfr_4RHvKyj6"
};

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_router_item_vue__ = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-sidebar-item',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_router_item_vue__["a" /* default */]],
});


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-router-item',
    props: {
        to: [String, Object],
        replace: { type: Boolean, default: false },
        exact: { type: Boolean, default: false },
    },
    computed: {
        active() {
            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[proto-ui] Cannot find vue router.');

            const current = this.$route;
            const location = this.$router.resolve(this.to).location;

            return this.exact ? location.path === current.path : current.path.startsWith(location.path);
        },
    },
    methods: {
        navigate() {
            if (this.to === undefined)
                return;

            if (!this.$router)
                return console.warn('[proto-ui] Cannot find vue router.');

            const router = this.$router;
            this.replace ? router.replace(this.to) : router.push(this.to);

            this.$emit('navigate', {
                to: this.to,
                exact: this.exact,
                replace: this.replace,
            });
        },
    },
});


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    class: _vm.$style.root,
    attrs: {
      "selected": _vm.active
    },
    on: {
      "click": _vm.navigate
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_de509e4c_preserveWhitespace_false_index_html__ = __webpack_require__(151);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(148);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_de509e4c_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2cf8e5a4", content, true);

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1mg6VG_VIB-5-QVP{display:block;cursor:pointer;height:52px;line-height:52px;color:#9dabc2;padding-left:20px;-webkit-transition:color .2s;-o-transition:color .2s;transition:color .2s}._1mg6VG_VIB-5-QVP:after{float:right;content:\"\";display:block;border:5px solid transparent;border-left-color:#9dabc2;margin:21px 0;margin-right:12px}._1mg6VG_VIB-5-QVP:hover{color:#2cb78e;background-color:#dde8f0}._1mg6VG_VIB-5-QVP:hover:after{border-left-color:#fff}._1mg6VG_VIB-5-QVP[open]:after{border:5px solid transparent;border-top-color:#9dabc2;margin:24px 0 18px;margin-right:15px}._1mg6VG_VIB-5-QVP[open]:hover:after{border-top-color:#fff}._1mg6VG_VIB-5-QVP{clear:both;background:#f0f6fa}", ""]);

// exports
exports.locals = {
	"root": "_1mg6VG_VIB-5-QVP",
	"item": "_1mg6VG_VIB-5-QVP",
	"list": "_1mg6VG_VIB-5-QVP"
};

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-sidebar-menu',
    props: {
        title: String,
        open: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            open_: this.open,
        };
    },
    computed: {
        accordion() {
            return this.$parent.accordion;
        },
    },
    methods: {
        handleClick() {
            if (this.accordion) {
                this.$parent.$children.forEach((item) => {
                    if (item.$options.name === 'u-sidebar-menu' && item !== this)
                        item.open_ = false;
                });
            }

            this.open_ = !this.open_;
        },
    },
});


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    class: _vm.$style.root
  }, [_c('div', {
    class: _vm.$style.item,
    attrs: {
      "open": _vm.open_
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.open_),
      expression: "open_"
    }],
    class: _vm.$style.list
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(155);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(153);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("9c52e832", content, true);

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3WTVLup7ZkBOTcDV{margin-bottom:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-bottom:1px solid #ccc;cursor:pointer;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;height:30px;line-height:30px;padding:0 20px;border:1px solid transparent;border-bottom:none;margin-bottom:-1px}._3WTVLup7ZkBOTcDV:hover{background:#eee}._3WTVLup7ZkBOTcDV[selected]{border-color:#ccc;border-bottom-color:transparent;padding-bottom:1px}._3WTVLup7ZkBOTcDV[disabled]{background:none;color:#ccc;cursor:not-allowed}._3WTVLup7ZkBOTcDV[selected][disabled]{background:#fff}._3WTVLup7ZkBOTcDV{padding-top:10px;border-bottom:1px solid #e0e6ed;height:36px;line-height:34px;padding:0 30px}._3WTVLup7ZkBOTcDV:hover{background:#f6f7f9}._3WTVLup7ZkBOTcDV[selected]{background:#fff;color:#67aaf5;border-color:#e0e6ed;border-top:2px solid #67aaf5}._3WTVLup7ZkBOTcDV[disabled]{background:#fff}", ""]);

// exports
exports.locals = {
	"root": "_3WTVLup7ZkBOTcDV",
	"head": "_3WTVLup7ZkBOTcDV",
	"item": "_3WTVLup7ZkBOTcDV",
	"body": "_3WTVLup7ZkBOTcDV"
};

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_tabs_vue__ = __webpack_require__(156);


/**
 * @class Tabs
 * @extends Base
 * @param {number=0}            props.selectedIndex             Index of selected tab
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
/**
 * @method select(index) - Select a tab
 * @public
 * @param  {number} index - Index of tab to select
 * @return {void}
 */
/**
 * @event select - Emit when selecting a tab
 * @property {number} selectedTab - The selected tab
 * @property {number} selectedIndex - Index of selected tab
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_u_tabs_vue__["a" /* default */]);


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_ac8110f8_preserveWhitespace_false_index_html__ = __webpack_require__(160);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(157);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_ac8110f8_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("9d934a3a", content, true);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1zOJJdqwIkJ5ElmD{margin-bottom:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-bottom:1px solid #ccc;cursor:pointer;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;height:30px;line-height:30px;padding:0 20px;border:1px solid transparent;border-bottom:none;margin-bottom:-1px}._1zOJJdqwIkJ5ElmD:hover{background:#eee}._1zOJJdqwIkJ5ElmD[selected]{background:#fff;border-color:#ccc;color:#67aaf5;border-bottom-color:transparent;padding-bottom:1px}._1zOJJdqwIkJ5ElmD[disabled]{background:none;color:#ccc;cursor:not-allowed}._1zOJJdqwIkJ5ElmD[selected][disabled]{background:#fff}._1zOJJdqwIkJ5ElmD{padding-top:10px}", ""]);

// exports
exports.locals = {
	"root": "_1zOJJdqwIkJ5ElmD",
	"head": "_1zOJJdqwIkJ5ElmD",
	"item": "_1zOJJdqwIkJ5ElmD",
	"body": "_1zOJJdqwIkJ5ElmD"
};

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-tabs',
    props: {
        selectedIndex: { type: Number, default: 0 },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        router: { type: Boolean, default: false },
    },
    data() {
        return {
            tabs: [],
            selectedIndex_: this.selectedIndex,
        };
    },
    computed: {
        selectedTab() {
            return this.tabs[this.selectedIndex_];
        },
    },
    methods: {
        add(tab) {
            this.tabs.push(tab);
        },
        remove(tab) {
            const index = this.tabs.indexOf(tab);
            ~index && this.tabs.splice(index, 1);
        },
        select(index) {
            if (this.readonly || this.disabled || this.tabs[index].disabled)
                return;

            const tab = this.tabs[index];
            this.selectedIndex_ = index;

            this.$emit('select', {
                selectedTab: tab,
                selectedIndex: index,
            });

            this.router && tab.navigate();
        },
    },
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root,
    attrs: {
      "disabled": _vm.disabled
    }
  }, [_c('ul', {
    class: _vm.$style.head
  }, _vm._l((_vm.tabs), function(tab, index) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!tab.hidden),
        expression: "!tab.hidden"
      }],
      class: _vm.$style.item,
      attrs: {
        "title": tab.title,
        "selected": _vm.router ? tab.active : _vm.selectedIndex_ === index,
        "disabled": tab.disabled || _vm.disabled
      },
      on: {
        "click": function($event) {
          _vm.select(index)
        }
      }
    }, [_vm._v("\n            " + _vm._s(tab.title) + "\n        ")])
  })), _c('div', {
    class: _vm.$style.body
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(162);
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_tab_vue__ = __webpack_require__(163);


/**
 * @class Tab
 * @extends Base
 * @param {string}              props.title                     Tab title
 * @param {boolean=false}       props.hidden                    Hide this tab
 * @param {boolean=false}       props.disabled                  Disabled
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_u_tab_vue__["a" /* default */]);


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_16514d02_preserveWhitespace_false_index_html__ = __webpack_require__(165);
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_16514d02_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_router_item_vue__ = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-tab',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_router_item_vue__["a" /* default */]],
    props: {
        title: String,
        hidden: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    computed: {
        visible() {
            return this.$parent.selectedTab === this;
        },
    },
    beforeCreate() {
        this.$parent.add(this);
    },
    destroyed() {
        this.$parent.remove(this);
    },
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }]
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(169);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(167);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("825ef346", content, true);

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._17jrk_84JTFaQeoJ{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block}", ""]);

// exports
exports.locals = {
	"root": "_17jrk_84JTFaQeoJ"
};

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_list_view_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__u_pill_vue__ = __webpack_require__(46);



/**
 * @class Pills
 * @extends ListView
 * @param {Array}               props.data                      Pass a data list and don't need to loop tags manually
 * @param {any}                 props.value                     Value of selected item
 * @param {boolean=false}       props.cancelable                Select twice to cancel
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
const Pills = {
    name: 'u-pills',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_list_view_vue__["a" /* default */]],
    data() {
        return {
            ChildComponent: __WEBPACK_IMPORTED_MODULE_1__u_pill_vue__["a" /* default */],
        };
    },
    /**
     * @method select(item) - Select a item
     * @public
     * @param  {number} item - Item to select
     * @return {void}
     */
    /**
     * @event select - Emit when selecting an item
     * @property {number} selectedItem - The selected item
     */
};

/* harmony default export */ __webpack_exports__["a"] = (Pills);


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("40bf8ab7", content, true);

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._35o4V98tE5BkGJAm{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#fff;border:1px solid #ccc;margin-bottom:15px}", ""]);

// exports
exports.locals = {
	"root": "_35o4V98tE5BkGJAm"
};

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_list_view_item_vue__ = __webpack_require__(13);


const ListView = {
    name: 'u-list-view',
    props: {
        data: Array,
        value: null,
        field: { type: String, default: 'text' },
        cancelable: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            ChildComponent: __WEBPACK_IMPORTED_MODULE_0_u_list_view_item_vue__["a" /* default */], // easy for SubComponent to extend
            items: [],
            selectedItem: undefined,
        };
    },
    watch: {
        // It is dynamic to find selected item by value
        // so using watcher is better than computed property.
        value(value) {
            if (this.selectedItem && this.selectedItem.value === value)
                return;
            if (value === undefined)
                this.selectedItem = undefined;
            else {
                // Must trigger `value` watcher at next tick.
                // Otherwise, items may not be pushed.
                this.$nextTick(() => this.selectedItem = this.items.find((item) => item.value === value));
            }
        },
    },
    created() {
        // @TODO: Suggest to add a nextTick option in Vue.js
        // Must trigger `value` watcher at next tick.
        // If not, items have not been pushed.
        this.$nextTick(() => ListView.watch.value.call(this, this.value));
    },
    methods: {
        add(item) {
            this.items.push(item);
        },
        remove(item) {
            const index = this.items.indexOf(item);
            ~index && this.items.splice(index, 1);
        },
        select(item) {
            if (this.readonly || this.disabled)
                return;

            if (this.cancelable && this.selectedItem === item)
                this.selectedItem = undefined;
            else
                this.selectedItem = item;

            this.$emit('select', {
                selectedItem: this.selectedItem,
                value: this.selectedItem && this.selectedItem.value,
            });
        },
    },
};

/* harmony default export */ __webpack_exports__["a"] = (ListView);


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(174);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("fb597678", content, true);

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".ZmVl8Pgz7LsY0xJB{cursor:pointer;padding:4px 12px}.ZmVl8Pgz7LsY0xJB:hover{background:#eee}.ZmVl8Pgz7LsY0xJB[readonly]{cursor:default;background:none}.ZmVl8Pgz7LsY0xJB[selected]{background:#67aaf5;color:#fff}.ZmVl8Pgz7LsY0xJB[disabled]{cursor:not-allowed;background:none;color:#ccc}.ZmVl8Pgz7LsY0xJB[selected][disabled]{background:#ddd}", ""]);

// exports
exports.locals = {
	"root": "ZmVl8Pgz7LsY0xJB"
};

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-list-view-item',
    props: {
        value: null,
        disabled: { type: Boolean, default: false },
    },
    computed: {
        selected() {
            return this.$parent.selectedItem === this;
        },
    },
    beforeCreate() {
        this.$parent.add(this);
    },
    destroyed() {
        this.$parent.remove(this);
    },
    methods: {
        select() {
            if (this.disabled || this.$parent.readonly || this.$parent.disabled)
                return;

            this.$emit('select', {
                selectedItem: this,
                value: this.value,
            });

            this.$parent.select(this);
        },
    },
});


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    class: _vm.$style.root,
    attrs: {
      "selected": _vm.selected,
      "readonly": _vm.$parent.readonly,
      "disabled": _vm.disabled || _vm.$parent.disabled
    },
    on: {
      "click": function($event) {
        _vm.select()
      }
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    class: _vm.$style.root,
    attrs: {
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    }
  }, [_vm._l((_vm.data), function(item) {
    return (_vm.data) ? _c(_vm.ChildComponent, {
      tag: "component",
      attrs: {
        "value": item.value,
        "disabled": item.disabled || _vm.disabled
      }
    }, [_vm._v(_vm._s(item[_vm.field]))]) : _vm._e()
  }), _vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("46a7d4e4", content, true);

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3TfIk3uTvCYRyPo3{cursor:pointer;display:inline-block;height:30px;line-height:28px;padding:0 12px;background:#fff;color:#666;border:1px solid #cbd5dd;border-radius:2px;margin-right:5px}._3TfIk3uTvCYRyPo3:hover{border-color:#67aaf5}._3TfIk3uTvCYRyPo3[selected]{background:#67aaf5;color:#fff;border-color:#67aaf5}._3TfIk3uTvCYRyPo3[disabled]{cursor:not-allowed;color:#cbd5dd;border-color:#cbd5dd}._3TfIk3uTvCYRyPo3[selected][disabled]{background:#eee}", ""]);

// exports
exports.locals = {
	"root": "_3TfIk3uTvCYRyPo3"
};

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_list_view_item_vue__ = __webpack_require__(13);


/**
 * @class Pill
 * @extends ListViewItem
 * @param {any}                 props.value                     Value of this item
 * @param {boolean=false}       props.disabled                  Disabled
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-pill',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_list_view_item_vue__["a" /* default */]],
});


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(184);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(182);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4b53e745", content, true);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2aw03e6uGToZQMIE{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;font-size:0}", ""]);

// exports
exports.locals = {
	"root": "_2aw03e6uGToZQMIE"
};

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_list_view_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__u_capsule_vue__ = __webpack_require__(47);



/**
 * @class Capsules
 * @extends ListView
 * @param {Array}               props.data                      Pass a data list and don't need to loop tags manually
 * @param {any}                 props.value                     Value of selected item
 * @param {boolean=false}       props.cancelable                Select twice to cancel
 * @param {boolean=false}       attrs.flag                      Add a flag at the top right corner
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
const Capsules = {
    name: 'u-capsules',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_list_view_vue__["a" /* default */]],
    data() {
        return {
            ChildComponent: __WEBPACK_IMPORTED_MODULE_1__u_capsule_vue__["a" /* default */],
        };
    },
    /**
     * @method select(item) - Select a item
     * @public
     * @param  {number} item - Item to select
     * @return {void}
     */
    /**
     * @event select - Emit when selecting an item
     * @property {number} selectedItem - The selected item
     */
};

/* harmony default export */ __webpack_exports__["a"] = (Capsules);


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(186);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("765d2295", content, true);

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2TaBOojcngRyi9U4{cursor:pointer;display:inline-block;height:30px;line-height:28px;font-size:14px;padding:0 16px;margin-right:-1px;background:#fff;color:#666;border:1px solid #67aaf5}._2TaBOojcngRyi9U4:first-child{border-top-left-radius:2px;border-bottom-left-radius:2px}._2TaBOojcngRyi9U4:last-child{border-top-right-radius:2px;border-bottom-right-radius:2px}._2TaBOojcngRyi9U4[selected]{position:relative;background:#67aaf5;color:#fff}._2TaBOojcngRyi9U4[flag]{position:relative}._2TaBOojcngRyi9U4[flag]:after{content:\"\";position:absolute;top:0;right:0;border:5px solid;border-color:#fc7272 #fc7272 transparent transparent}._2TaBOojcngRyi9U4[disabled]{position:relative;z-index:-1;color:#d6d6d6;border-color:#cbd5dd}._2TaBOojcngRyi9U4[selected][disabled]{background:#eee}", ""]);

// exports
exports.locals = {
	"root": "_2TaBOojcngRyi9U4"
};

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_list_view_item_vue__ = __webpack_require__(13);


/**
 * @class Capsule
 * @extends ListViewItem
 * @param {any}                 props.value                     Value of this item
 * @param {boolean=false}       props.disabled                  Disabled
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-capsule',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_list_view_item_vue__["a" /* default */]],
});


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(191);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(189);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3b9258ac", content, true);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3cwZS-3OHI6l-hc9{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block}", ""]);

// exports
exports.locals = {
	"root": "_3cwZS-3OHI6l-hc9"
};

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_list_view_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__u_tablet_vue__ = __webpack_require__(48);



/**
 * @class Tablets
 * @extends ListView
 * @param {Array}               props.data                      Pass a data list and don't need to loop tags manually
 * @param {any}                 props.value                     Value of selected item
 * @param {boolean=false}       props.cancelable                Select twice to cancel
 * @param {boolean=false}       props.readonly                  Readonly
 * @param {boolean=false}       props.disabled                  Disabled
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-tablets',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_list_view_vue__["a" /* default */]],
    data() {
        return {
            ChildComponent: __WEBPACK_IMPORTED_MODULE_1__u_tablet_vue__["a" /* default */],
        };
    },
    /**
     * @method select(item) - Select a item
     * @public
     * @param  {number} item - Item to select
     * @return {void}
     */
    /**
     * @event select - Emit when selecting an item
     * @property {number} selectedItem - The selected item
     */
});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("267c943e", content, true);

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3CzDDlx9Lzh0KrE9{cursor:pointer;display:inline-block;margin-right:8px;padding:0 15px;height:32px;line-height:30px;color:#999;background:#f7f8fa;border:1px solid #d7dae0;border-radius:2px}._3CzDDlx9Lzh0KrE9:hover{-webkit-box-shadow:0 0 10px 0 rgba(80,90,109,.16);box-shadow:0 0 10px 0 rgba(80,90,109,.16)}._3CzDDlx9Lzh0KrE9[selected]{position:relative;background-color:#f7fcfe;color:#333;border-color:#67aaf5;-webkit-box-shadow:inset 0 0 0 1px #67aaf5;box-shadow:inset 0 0 0 1px #67aaf5}._3CzDDlx9Lzh0KrE9[disabled]{cursor:not-allowed;color:#d6d6d6;border-color:#cbd5dd;-webkit-box-shadow:none;box-shadow:none}._3CzDDlx9Lzh0KrE9[selected][disabled]{background:#eee;border-color:#67aaf5;-webkit-box-shadow:inset 0 0 0 1px #67aaf5;box-shadow:inset 0 0 0 1px #67aaf5}", ""]);

// exports
exports.locals = {
	"root": "_3CzDDlx9Lzh0KrE9"
};

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_list_view_item_vue__ = __webpack_require__(13);


/**
 * @class Tablet
 * @extends ListViewItem
 * @param {any}                 props.value                     Value of this item
 * @param {boolean=false}       props.disabled                  Disabled
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_list_view_item_vue__["a" /* default */]],
    name: 'u-tablet',
});


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_1ca58df3_preserveWhitespace_false_index_html__ = __webpack_require__(199);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(196);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_1ca58df3_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("55605e54", content, true);

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2WQY3JbD9UsvF2IN{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;overflow-y:auto;-webkit-overflow-scrolling:touch;-ms-touch-action:cross-slide-y pinch-zoom double-tap-zoom;touch-action:cross-slide-y pinch-zoom double-tap-zoom;overflow:hidden;background:rgba(0,0,0,.6)}._2WQY3JbD9UsvF2IN:before{content:\"\";display:inline-block;vertical-align:middle;height:100%}._2WQY3JbD9UsvF2IN{display:inline-block;vertical-align:middle;text-align:left;background:#fff;-webkit-box-shadow:0 0 3px rgba(0,0,0,.3);box-shadow:0 0 3px rgba(0,0,0,.3);position:relative;border-bottom:1px solid #f4f4f4;margin:0;font-size:18px;position:absolute;right:15px;top:18px;line-height:1;color:#bbb}._2WQY3JbD9UsvF2IN:hover{color:#888}._2WQY3JbD9UsvF2IN:before{content:\"\\D7\";display:block;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2)}._2WQY3JbD9UsvF2IN{min-height:10px;padding:15px;text-align:center;border-top:1px solid #f4f4f4}._2WQY3JbD9UsvF2IN ._2WQY3JbD9UsvF2IN{margin-right:20px}._2WQY3JbD9UsvF2IN ._2WQY3JbD9UsvF2IN:last-child{margin-right:0}@media (max-width:767px){._2WQY3JbD9UsvF2IN{width:auto;margin:10px}}._2WQY3JbD9UsvF2IN[static]{position:static;padding:20px}", ""]);

// exports
exports.locals = {
	"root": "_2WQY3JbD9UsvF2IN",
	"dialog": "_2WQY3JbD9UsvF2IN",
	"head": "_2WQY3JbD9UsvF2IN",
	"title": "_2WQY3JbD9UsvF2IN",
	"close": "_2WQY3JbD9UsvF2IN",
	"body": "_2WQY3JbD9UsvF2IN",
	"foot": "_2WQY3JbD9UsvF2IN",
	"button": "_2WQY3JbD9UsvF2IN",
	"item": "_2WQY3JbD9UsvF2IN"
};

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Modal = {
    name: 'u-modal',
    props: {
        title: { type: String, default: '提示' },
        okButton: { type: String, default: '确定' },
        cancelButton: { type: String, default: '取消' },
        content: { type: String, default: '提示内容' },
        visible: { type: Boolean, default: false },
        width: { type: [String, Number], default: '400' },
    },
    data() {
        return {
            visible_: this.visible,
        };
    },
    watch: {
        visible(visible) {
            this.visible_ = visible;
        },
    },
    methods: {
        open() {
            this.visible_ = true;
            if (!this.$el) {
                const ele = document.createElement('div');
                this.$mount(ele);
                document.body.appendChild(this.$el);
            }

            this.$emit('open');
        },
        close() {
            this.visible_ = false;
            this.$emit('close');
        },
        ok() {
            this.$emit('ok');
            this.close();
        },
        cancel() {
            this.$emit('cancel');
            this.close();
        },
    },
};

/**
 * @method alert(content[,title]) 弹出一个alert模态框。关闭时始终触发确定事件。
 * @static
 * @public
 * @param  {string=''} content 模态框内容
 * @param  {string='提示'} title 模态框标题
 */
Modal.alert = (content, title = '提示', okButton = '确定') => {
    const modal = new Modal({
        data: { content, title, okButton, cancelButton: '' },
    });

    modal.open();
};

/**
 * @method confirm(content[,title]) 弹出一个confirm模态框
 * @static
 * @public
 * @param  {string=''} content 模态框内容
 * @param  {string='提示'} title 模态框标题
 */
Modal.confirm = (content, title = '提示', okButton = '确定', cancelButton = '取消') => {
    const modal = new Modal({
        data: { content, title, okButton, cancelButton },
    });

    modal.open();
};

/* harmony default export */ __webpack_exports__["a"] = (Modal);


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible_) ? _c('div', {
    class: _vm.$style.root
  }, [_c('div', {
    class: _vm.$style.dialog,
    style: ({
      width: _vm.width + 'px'
    })
  }, [_c('div', {
    class: _vm.$style.head
  }, [_vm._t("head", [(_vm.title) ? _c('div', {
    class: _vm.$style.title
  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2) : _vm._e(), _c('a', {
    class: _vm.$style.close,
    on: {
      "click": function($event) {
        _vm.cancel()
      }
    }
  })])], 2), _c('div', {
    class: _vm.$style.body
  }, [_vm._t("body", [_vm._t("default", [_vm._v(_vm._s(_vm.content))])])], 2), _c('div', {
    class: _vm.$style.foot
  }, [_vm._t("foot", [(_vm.okButton) ? _c('u-button', {
    class: _vm.$style.button,
    attrs: {
      "color": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.ok()
      }
    }
  }, [_vm._v(_vm._s(_vm.okButton))]) : _vm._e(), (_vm.cancelButton) ? _c('u-button', {
    class: _vm.$style.button,
    nativeOn: {
      "click": function($event) {
        _vm.cancel()
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelButton))]) : _vm._e()])], 2)])]) : _vm._e()
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2a898f63", content, true);

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".OM9riWktDMXg-mVO{width:238px;padding:4px;background:#fff;color:#555;border:1px solid #d2d6de;border-radius:4px;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OM9riWktDMXg-mVO{width:32px;height:30px;line-height:30px;margin:1px;border-radius:3px;cursor:pointer;display:inline-block;text-align:center;border-radius:50%}.OM9riWktDMXg-mVO[role=week]{color:#f99}.OM9riWktDMXg-mVO:hover{color:#444;border-color:#2cb78e}.OM9riWktDMXg-mVO[sel=sel]{background:#67aaf5;color:#fff}.OM9riWktDMXg-mVO[role=muted]{color:#999}.OM9riWktDMXg-mVO[disabled]{background:0 0;color:#999;cursor:not-allowed}.OM9riWktDMXg-mVO{line-height:32px;*zoom:1}.OM9riWktDMXg-mVO:before{display:table;content:\"\";line-height:0}.OM9riWktDMXg-mVO:after{display:table;line-height:0;clear:both}.OM9riWktDMXg-mVO{width:1em;clear:both}.OM9riWktDMXg-mVO .OM9riWktDMXg-mVO{background:0 0;cursor:default;font-weight:700}.OM9riWktDMXg-mVO[disabled] .OM9riWktDMXg-mVO{background:#fff;color:#999;cursor:not-allowed}.OM9riWktDMXg-mVO[disabled] .OM9riWktDMXg-mVO[sel=sel]{background:#eee;color:#999}.OM9riWktDMXg-mVO{white-space:normal;width:78px;padding:7px 10px 0;width:138px;padding:10px 6px;list-style:none;overflow:hidden;float:left;width:30px;height:30px;line-height:30px;border-radius:50%;text-align:center}.OM9riWktDMXg-mVO[role]{background-color:#67aaf5;color:#fff;border-radius:50%}.OM9riWktDMXg-mVO[disabled],.OM9riWktDMXg-mVO[disabled]:hover{cursor:not-allowed;background-color:#fff;color:#999}.OM9riWktDMXg-mVO:hover{background:#f4f4f4}.OM9riWktDMXg-mVO{width:60px;text-align:left;padding:7px 24px 0 10px;padding-right:0;display:inline-block;border:1px solid #fff;cursor:pointer;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.OM9riWktDMXg-mVO:after{position:absolute;content:\"\";width:0;height:0;top:8px;right:-15px;border:4px solid #666;border-color:#666 transparent transparent}.OM9riWktDMXg-mVO{float:right}", ""]);

// exports
exports.locals = {
	"root": "OM9riWktDMXg-mVO",
	"item": "OM9riWktDMXg-mVO",
	"dayitem": "OM9riWktDMXg-mVO",
	"head": "OM9riWktDMXg-mVO",
	"prev": "OM9riWktDMXg-mVO",
	"next": "OM9riWktDMXg-mVO",
	"icon": "OM9riWktDMXg-mVO",
	"body": "OM9riWktDMXg-mVO",
	"week": "OM9riWktDMXg-mVO",
	"day": "OM9riWktDMXg-mVO",
	"year": "OM9riWktDMXg-mVO",
	"textYear": "OM9riWktDMXg-mVO",
	"monthList": "OM9riWktDMXg-mVO",
	"listitem": "OM9riWktDMXg-mVO",
	"month": "OM9riWktDMXg-mVO",
	"textMonth": "OM9riWktDMXg-mVO",
	"monthPopper": "OM9riWktDMXg-mVO"
};

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__u_popover_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_u_list_view_item_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_u_list_view_vue__ = __webpack_require__(17);



const MS_OF_DAY = 24 * 3600 * 1000;

/**
 * @class Calendar
 * @extend Component
 * @param {object}                  options                    =  绑定属性
 * @param {Date|string=TODAY}       options.date               <=> 当前选择的日期
 * @param {Date|string=null}        options.minDate             => 最小日期，如果为空则不限制
 * @param {Date|string=null}        options.maxDate             => 最大日期，如果为空则不限制
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {disabled=disabled}       options.disabled            => 是否禁用
 */
const Calendar = {
    name: 'u-calendar',
    props: {
        date: {
            type: [String, Number, Date],
            default() {
                return new Date();
            },
        },
        readonly: [String, Boolean],
        disabled: [String, Boolean],
        minDate: [String, Object, Number],
        maxDate: [String, Object, Number],
        yearDiff: {
            type: [String, Number],
            default: 3,
        },
        yearAdd: {
            type: [String, Number],
            default: 1,
        },
    },
    data() {
        return {
            days_: [],
            showDate: this.date,
            updateFlag: false,
            monthCol: this.getMonthCol(),
            yearCol: this.getYearCol(),
            yearvisible: false,
            monthvisible: false,
        };
    },
    computed: {
        showYear: {
            get() {
                const date = this.transformDate(this.showDate);
                return date.getFullYear();
            },
            set(value) {
                const date = this.showDate;
                const oldMonth = date.getMonth();
                date.setFullYear(value);
                if (date.getMonth() !== oldMonth)
                    date.setDate(0);

                this.updateFlag = true;
                this.showDate = new Date(date);
            },
        },
        showMonth: {
            get() {
                const date = this.transformDate(this.showDate);
                const month = date.getMonth() + 1;
                return month;
            },
            set(value) {
                const date = this.showDate;
                date.setMonth(value - 1);

                this.updateFlag = true;
                this.showDate = new Date(date);
            },
        },
        // yearCol() {
        //     const date = this.transformDate(this.showDate);
        //     const currentYear = date.getFullYear();
        //     const yearcol = [];
        //     const yearmin = currentYear - this.yearDiff;
        //     const yearmax = parseInt(currentYear) + parseInt(this.yearAdd);
        //     for (let i = yearmin; i <= yearmax; i++)
        //         yearcol.push(i);

        //     return yearcol;
        // },
    },
    components: {
        uPopover: __WEBPACK_IMPORTED_MODULE_0__u_popover_vue__["a" /* default */],
        uListView: __WEBPACK_IMPORTED_MODULE_2_u_list_view_vue__["a" /* default */],
        uListViewItem: __WEBPACK_IMPORTED_MODULE_1_u_list_view_item_vue__["a" /* default */],
    },
    watch: {
        date(newValue) {
            this.showDate = this.transformDate(newValue);
            this.updateFlag = true;
        },
        showDate(newValue) {
            // 如果超出日期范围，则设置为范围边界的日期
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange) {
                this.showDate = isOutOfRange;

                // 防止第二次刷新同月
                this.update();
                return;
            }

            if (this.updateFlag) {
                this.updateFlag = false;
                this.update();
            }

            /**
             * @event change 日期改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 改变后的日期
             */
            this.$emit('change', {
                sender: this,
                date: newValue,
            });
        },
        // 最小值 最大值 发生变化 需要监听
    },
    filters: {
        format(value, type) {
            if (!value)
                return '';
            const fix = (str) => {
                str = '' + (String(str) || '');
                return str.length <= 1 ? '0' + str : str;
            };
            const maps = {
                yyyy(date) { return date.getFullYear(); },
                MM(date) { return fix(date.getMonth() + 1); },
                dd(date) { return fix(date.getDate()); },
                HH(date) { return fix(date.getHours()); },
                mm(date) { return fix(date.getMinutes()); },
                ss(date) { return fix(date.getSeconds()); },
            };
            const trunk = new RegExp(Object.keys(maps).join('|'), 'g');
            type = type || 'yyyy-MM-dd HH:mm';
            value = new Date(value);
            return type.replace(trunk, (capture) => maps[capture] ? maps[capture](value) : '');
        },
    },
    created() {
        this.update();
    },
    methods: {
        yearSelect(value) {
            this.showYear = value;
            this.yearvisible = false;
        },
        monthSelect(month) {
            this.showMonth = month.value;
            this.monthvisible = false;
        },
        getYearCol() {
            const date = this.transformDate(this.date);
            let minDate = null,
                maxDate = null;

            if (this.minDate)
                minDate = this.transformDate(this.minDate).getFullYear();

            if (this.maxDate)
                maxDate = this.transformDate(this.maxDate).getFullYear();

            const currentYear = date.getFullYear();
            const yearcol = [];
            const yearmin = currentYear - this.yearDiff;
            const yearmax = currentYear + parseInt(this.yearAdd);
            for (let i = yearmin; i <= yearmax; i++) {
                const obj = {
                    value: i,
                };
                if (minDate && (i < minDate))
                    obj.disabled = true;
                else if (maxDate && (i > maxDate))
                    obj.disabled = true;
                else
                    obj.disabled = false;

                yearcol.push(obj);
            }

            return yearcol;
        },
        getMonthCol() {
            const date = this.transformDate(this.date);
            let minDate = null,
                maxDate = null;

            if (this.minDate) {
                minDate = this.transformDate(this.minDate);
                const minYear = minDate.getFullYear();
                const minMonth = minDate.getMonth();
                const minFormat = minYear + '/' + (minMonth + 1);
                minDate = new Date(minFormat).getTime();
            }

            if (this.maxDate) {
                maxDate = this.transformDate(this.maxDate);
                const maxYear = maxDate.getFullYear();
                const maxMonth = maxDate.getMonth();
                const maxFormat = maxYear + '/' + (maxMonth + 1);
                maxDate = new Date(maxFormat).getTime();
            }

            const currentYear = date.getFullYear();
            const monthcol = [];
            // const mindate = currentYear - this.yearDiff;
            // const maxdate = parseInt(currentYear) + parseInt(this.yearAdd);
            for (let i = 1; i <= 12; i++) {
                const obj = {
                    value: i,
                };
                const dateFormat = currentYear + '/' + i;
                const dateTime = new Date(dateFormat).getTime;
                if (minDate && (dateTime < minDate))
                    obj.disabled = true;
                else if (maxDate && (dateTime > maxDate))
                    obj.disabled = true;
                else
                    obj.disabled = false;

                monthcol.push(obj);
            }

            return monthcol;
        },
        /**
         * @method update() 日期改变后更新日历
         * @private
         * @return {void}
         */
        update() {
            this.days_ = [];
            this.showDate = this.transformDate(this.showDate);
            const date = this.showDate;
            const month = date.getMonth();
            const mfirst = new Date(date);
            mfirst.setDate(1);
            mfirst.setHours(0, 0, 0, 0);
            const mfirstTime = +mfirst;
            const nfirst = new Date(mfirst); nfirst.setMonth(month + 1); nfirst.setDate(1);
            const nfirstTime = +nfirst;
            const lastTime = nfirstTime + ((7 - nfirst.getDay()) % 7 - 1) * MS_OF_DAY;
            let num = -mfirst.getDay();
            let tmpTime, tmp;
            do {
                tmpTime = mfirstTime + (num++) * MS_OF_DAY;
                tmp = new Date(tmpTime);
                this.days_.push(tmp);
            } while (tmpTime < lastTime);
        },
        /**
         * @method addYear(year) 调整年份
         * @public
         * @param  {number=0} year 加/减的年份
         * @return {void}
         */
        addYear(year) {
            if (this.readonly || this.disabled || !year)
                return;

            if (isNaN(year))
                throw new TypeError(year + ' is not a number!');

            const date = this.showDate;
            const oldMonth = date.getMonth();
            date.setFullYear(date.getFullYear() + year);
            if (date.getMonth() !== oldMonth)
                date.setDate(0);

            this.updateFlag = true;
            this.showDate = new Date(date);
        },
        /**
         * @method addMonth(month) 调整月份
         * @public
         * @param  {number=0} month 加/减的月份
         * @return {void}
         */
        addMonth(month) {
            if (this.readonly || this.disabled || !month)
                return;

            if (isNaN(month))
                throw new TypeError(month + ' is not a number!');

            const date = this.showDate;
            const correctMonth = date.getMonth() + month;
            date.setMonth(correctMonth);
            // 如果跳月，则置为上一个月
            if ((date.getMonth() - correctMonth) % 12)
                date.setDate(0);
            this.updateFlag = true;
            this.showDate = new Date(date);
        },
        /**
         * @method select(date) 选择一个日期
         * @public
         * @param  {Date=null} date 选择的日期
         * @return {void}
         */
        select(date) {
            if (this.readonly || this.disabled || this.isOutOfRange(date))
                return;
            const _month = date.getMonth() + 1;

            if (this.showMonth !== _month)
                this.updateFlag = true;

            this.showDate = new Date(date);

            /**
             * @event select 选择某一个日期时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 当前选择的日期
             */
            this.$emit('select', {
                sender: this,
                date,
            });
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期范围
         * @public
         * @param {Date} date 待测的日期
         * @return {boolean|Date} date 如果没有超出日期范围，则返回false；如果超出日期范围，则返回范围边界的日期
         */
        isOutOfRange(date) {
            let minDate = this.transformDate(this.minDate);
            let maxDate = this.transformDate(this.maxDate);

            // 不要直接在$watch中改变`minDate`和`maxDate`的值，因为有时向外绑定时可能不希望改变它们。
            minDate = minDate && minDate.setHours(0, 0, 0, 0);
            maxDate = maxDate && maxDate.setHours(0, 0, 0, 0);

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期
            return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
        },
        transformDate(date) {
            if (typeof date === 'string')
                return new Date(date.replace(/-/g, '/'));
            else if (typeof date === 'number')
                return new Date(date);
            else if (typeof date === 'object')
                return date;
        },
        fix(str) {
            str = '' + (String(str) || '');
            return str.length <= 1 ? '0' + str : str;
        },
    },
};

const DateRangeError = function (minDate, maxDate) {
    this.name = 'DateRangeError';
    this.message = 'Wrong Date Range where `minDate` is ' + minDate + ' and `maxDate` is ' + maxDate + '!';
};
DateRangeError.prototype = Object.create(RangeError.prototype);
Calendar.DateRangeError = DateRangeError.prototype.constructor = DateRangeError;

/* harmony default export */ __webpack_exports__["a"] = (Calendar);


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("24594e59", content, true);

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2n5AnBXT_1P340ee{display:inline-block}._2n5AnBXT_1P340ee,._2n5AnBXT_1P340ee:after{display:block;width:0;height:0;position:absolute;border:6px solid transparent}._2n5AnBXT_1P340ee{display:block;visibility:visible;position:absolute;line-height:1.5;z-index:1060}._2n5AnBXT_1P340ee[x-placement^=top]{padding:5px 0 8px}._2n5AnBXT_1P340ee[x-placement^=right]{padding:0 5px 0 8px}._2n5AnBXT_1P340ee[x-placement^=bottom]{padding:8px 0 5px}._2n5AnBXT_1P340ee[x-placement^=left]{padding:0 8px 0 5px}popper[x-placement^=top] ._2n5AnBXT_1P340ee{bottom:3px;border-width:6px 6px 0}popper[x-placement^=top] ._2n5AnBXT_1P340ee:after{content:\"\";bottom:1px;margin-left:-6px;border-bottom-width:0;border-top-color:rgba(71,88,107,.9)}._2n5AnBXT_1P340ee[x-placement=top] ._2n5AnBXT_1P340ee{left:50%;margin-left:-6px}._2n5AnBXT_1P340ee[x-placement=top-start] ._2n5AnBXT_1P340ee{left:16px}._2n5AnBXT_1P340ee[x-placement=top-end] ._2n5AnBXT_1P340ee{right:16px}._2n5AnBXT_1P340ee[x-placement^=right] ._2n5AnBXT_1P340ee{left:3px;border-width:6px 6px 6px 0}._2n5AnBXT_1P340ee[x-placement^=right] ._2n5AnBXT_1P340ee:after{content:\"\";left:1px;bottom:-6px;border-left-width:0;border-right-color:rgba(71,88,107,.9)}._2n5AnBXT_1P340ee[x-placement=right] ._2n5AnBXT_1P340ee{top:50%;margin-top:-6px}._2n5AnBXT_1P340ee[x-placement=right-start] ._2n5AnBXT_1P340ee{top:8px}._2n5AnBXT_1P340ee[x-placement=right-end] ._2n5AnBXT_1P340ee{bottom:8px}._2n5AnBXT_1P340ee[x-placement^=left] ._2n5AnBXT_1P340ee{right:3px;border-width:6px 0 6px 6px}._2n5AnBXT_1P340ee[x-placement^=left] ._2n5AnBXT_1P340ee:after{content:\"\";right:1px;bottom:-6px;border-right-width:0;border-left-color:rgba(71,88,107,.9)}._2n5AnBXT_1P340ee[x-placement=left] ._2n5AnBXT_1P340ee{top:50%;margin-top:-6px}._2n5AnBXT_1P340ee[x-placement=left-start] ._2n5AnBXT_1P340ee{top:8px}._2n5AnBXT_1P340ee[x-placement=left-end] ._2n5AnBXT_1P340ee{bottom:8px}._2n5AnBXT_1P340ee[x-placement^=bottom] ._2n5AnBXT_1P340ee{top:3px;border-width:0 6px 6px}._2n5AnBXT_1P340ee[x-placement^=bottom] ._2n5AnBXT_1P340ee:after{content:\"\";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:rgba(71,88,107,.9)}._2n5AnBXT_1P340ee[x-placement=bottom] ._2n5AnBXT_1P340ee{left:50%;margin-left:-6px}._2n5AnBXT_1P340ee[x-placement=bottom-start] ._2n5AnBXT_1P340ee{left:16px}._2n5AnBXT_1P340ee[x-placement=bottom-end] ._2n5AnBXT_1P340ee{right:16px}._2n5AnBXT_1P340ee{width:100%;border-radius:2px;white-space:nowrap;-webkit-box-shadow:0 0 8px rgba(151,164,175,.35);box-shadow:0 0 8px rgba(151,164,175,.35);-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}._2n5AnBXT_1P340ee:after{content:\"\";display:block;position:absolute;left:8px;right:8px;bottom:0;background:#e9eaec;height:1px}._2n5AnBXT_1P340ee{text-align:right;padding:8px 16px;margin-right:10px;background-color:#fff}._2n5AnBXT_1P340ee[role]{color:#fff;background:rgba(71,88,107,.9)}", ""]);

// exports
exports.locals = {
	"root": "_2n5AnBXT_1P340ee",
	"reference": "_2n5AnBXT_1P340ee",
	"arrow": "_2n5AnBXT_1P340ee",
	"popper": "_2n5AnBXT_1P340ee",
	"wrap": "_2n5AnBXT_1P340ee",
	"title": "_2n5AnBXT_1P340ee",
	"content": "_2n5AnBXT_1P340ee",
	"message": "_2n5AnBXT_1P340ee",
	"linkGroup": "_2n5AnBXT_1P340ee",
	"linkitem": "_2n5AnBXT_1P340ee",
	"body": "_2n5AnBXT_1P340ee"
};

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__u_button_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__u_popper_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_utils_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_directives_js__ = __webpack_require__(28);





/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-poptip',
    props: {
        trigger: {
            validator(value) {
                return __WEBPACK_IMPORTED_MODULE_2__util_utils_js__["a" /* default */].oneOf(value, ['click', 'hover']);
            },
            default: 'hover',
        },
        placement: {
            validator(value) {
                return __WEBPACK_IMPORTED_MODULE_2__util_utils_js__["a" /* default */].oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
            },
            default: 'bottom',
        },
        title: String,
        width: {
            type: [String, Number],
        },
        content: String,
        confirm: {
            type: Boolean,
            default: false,
        },
        confirmOk: {
            type: String,
            default: '确定',
        },
        confirmCancel: {
            type: String,
            default: '取消',
        },
        message: String,
        arrow: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            enterTimer: null,
        };
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_1__u_popper_vue__["a" /* default */]],
    components: {
        uButton: __WEBPACK_IMPORTED_MODULE_0__u_button_vue__["a" /* default */],
    },
    directives: {
        clickoutside: __WEBPACK_IMPORTED_MODULE_3__util_directives_js__["a" /* default */].clickoutside,
    },
    methods: {
        handleMouseenter() {
            if (this.trigger !== 'hover' || this.confirm)
                return false;

            if (this.enterTimer)
                clearTimeout(this.enterTimer);
            this.enterTimer = setTimeout(() => {
                this.visible = true;
            }, 100);
        },
        handleMouseleave() {
            if (this.trigger !== 'hover' || this.confirm)
                return false;

            if (this.enterTimer) {
                clearTimeout(this.enterTimer);
                this.enterTimer = setTimeout(() => {
                    this.visible = false;
                }, 100);
            }
        },
        handleClick() {
            if (this.confirm) {
                this.visible = !this.visible;
                return true;
            }
            if (this.trigger !== 'click')
                return false;

            this.visible = !this.visible;
        },
        handleClose() {
            if (this.confirm) {
                this.visible = false;
                return true;
            }
            if (this.trigger !== 'click')
                return false;

            this.visible = false;
        },
    },
});


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_popper_js__ = __webpack_require__(207);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-popper',
    props: {
        placement: {
            type: String,
            default: 'bottom',
        },
        reference: Object,
        popper: Object,
        value: {
            type: Boolean,
            default: false,
        },
        offset: {
            type: Number,
            default: 0,
        },
        options: {
            type: Object,
            default() {
                return {
                    modifiers: {
                        boundariesElement: 'body',
                    },
                };
            },
        },
    },
    data() {
        return {
            visible: this.value,
        };
    },
    watch: {
        value: {
            immediate: true,
            handler(value) {
                this.visible = value;
                this.$emit('input', value);
            },
        },
        visible(value) {
            if (value)
                this.updatePopper();
            else
                this.destroyPopper();

            this.$emit('input', value);
        },
    },
    methods: {
        createPopper() {
            if (!/^(top|bottom|left|right)(-start|-end)?$/.test(this.placement))
                return false;

            const options = this.options;
            const popper = this.popper || this.$refs.popper;
            const reference = this.reference || this.$refs.reference;

            if (!popper || !reference)
                return false;

            if (this.popperInstance && this.popperInstance.hasOwnProperty('destroy'))
                this.popperInstance.destroy();

            options.placement = this.placement;
            options.modifiers.offset = this.offset;

            this.popperInstance = new __WEBPACK_IMPORTED_MODULE_0_popper_js__["a" /* default */](reference, popper, options);
        },
        updatePopper() {
            this.popperInstance ? this.popperInstance.update() : this.createPopper();
        },
        destroyPopper() {
            if (this.visible)
                return false;
            this.popperInstance.destroy();
            this.popperInstance = null;
        },
    },
});


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var nativeHints = ['native code', '[object MutationObserverConstructor]'];

/**
 * Determine if a function is implemented natively (as opposed to a polyfill).
 * @method
 * @memberof Popper.Utils
 * @argument {Function | undefined} fn the function to check
 * @returns {Boolean}
 */
var isNative = (function (fn) {
  return nativeHints.some(function (hint) {
    return (fn || '').toString().indexOf(hint) > -1;
  });
});

var isBrowser = typeof window !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');

  // MutationObserver provides a mechanism for scheduling microtasks, which
  // are scheduled *before* the next task. This gives us a way to debounce
  // a function but ensure it's called *before* the next paint.
  var observer = new MutationObserver(function () {
    fn();
    scheduled = false;
  });

  observer.observe(elem, { attributes: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.setAttribute('x-index', i);
      i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
    }
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

// It's common for MutationObserver polyfills to be seen in the wild, however
// these rely on Mutation Events which only occur when an element is connected
// to the DOM. The algorithm used in this module does not use a connected element,
// and so we must ensure that a *native* MutationObserver is available.
var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
    return window.document.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return window.document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = window.document.documentElement;
    var scrollingElement = window.document.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = window.document.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = window.document.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = window.document.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier.function) {
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier.function || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? window : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  window.addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  window.removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
  var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference.jquery ? reference[0] : reference;
    this.popper = popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(52)))

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: (_vm.handleClose),
      expression: "handleClose"
    }],
    class: _vm.$style.root,
    on: {
      "mouseenter": _vm.handleMouseenter,
      "mouseleave": _vm.handleMouseleave
    }
  }, [_c('div', {
    ref: "reference",
    class: _vm.$style.reference,
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("default")], 2), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    ref: "popper",
    class: _vm.$style.popper,
    style: ({
      width: _vm.width + 'px'
    }),
    on: {
      "mouseenter": _vm.handleMouseenter,
      "mouseleave": _vm.handleMouseleave
    }
  }, [_c('div', {
    class: _vm.$style.body,
    attrs: {
      "role": _vm.arrow
    }
  }, [(_vm.arrow) ? _c('div', {
    class: _vm.$style.arrow
  }) : _vm._e(), (_vm.confirm) ? _c('div', {
    class: _vm.$style.wrap
  }, [_c('div', {
    class: _vm.$style.chead
  }, [_vm._t("confirm", [_c('div', {
    class: _vm.$style.message
  }, [_vm._v(_vm._s(_vm.message))])])], 2), _c('div', {
    class: _vm.$style.linkGroup
  }, [(_vm.confirmOk) ? _c('u-link', {
    class: _vm.$style.linkitem,
    nativeOn: {
      "click": function($event) {
        _vm.handleClose($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.confirmOk))]) : _vm._e(), (_vm.confirmCancel) ? _c('u-link', {
    class: _vm.$style.linkitem,
    nativeOn: {
      "click": function($event) {
        _vm.handleClose($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.confirmCancel))]) : _vm._e()], 1)]) : _c('div', {
    class: _vm.$style.wrap
  }, [_vm._t("title", [(_vm.title) ? _c('div', {
    class: _vm.$style.title
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e()]), _vm._t("content", [(_vm.content) ? _c('div', {
    class: _vm.$style.content
  }, [_vm._v(_vm._s(_vm.content))]) : _vm._e()])], 2)])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root,
    attrs: {
      "disabled": _vm.disabled
    }
  }, [_c('div', {
    class: _vm.$style.head
  }, [_c('u-popover', {
    attrs: {
      "trigger": "click"
    },
    model: {
      value: (_vm.yearvisible),
      callback: function($$v) {
        _vm.yearvisible = $$v
      },
      expression: "yearvisible"
    }
  }, [_c('div', {
    class: _vm.$style.year
  }, [_c('span', {
    class: _vm.$style.textYear
  }, [_vm._v(_vm._s(_vm.showYear) + "年")])]), _c('template', {
    slot: "content"
  }, [_c('u-list-view', {
    attrs: {
      "value": _vm.showYear
    },
    on: {
      "select": function($event) {
        _vm.yearSelect($event.value)
      }
    }
  }, _vm._l((_vm.yearCol), function(year, index) {
    return _c('u-list-view-item', {
      attrs: {
        "value": year.value,
        "disabled": year.disabled
      }
    }, [_vm._v(_vm._s(year.value) + "年")])
  }))], 1)], 2), _c('u-popover', {
    class: _vm.$style.monthPopper,
    attrs: {
      "trigger": "click",
      "placement": "bottom-end"
    },
    model: {
      value: (_vm.monthvisible),
      callback: function($$v) {
        _vm.monthvisible = $$v
      },
      expression: "monthvisible"
    }
  }, [_c('div', {
    class: _vm.$style.month
  }, [_c('span', {
    class: _vm.$style.textMonth
  }, [_vm._v(_vm._s(_vm.showMonth) + "月")])]), _c('template', {
    slot: "content"
  }, [_c('ul', {
    class: _vm.$style.monthList
  }, _vm._l((_vm.monthCol), function(month, mindex) {
    return _c('li', {
      class: _vm.$style.listitem,
      attrs: {
        "role": month.value === _vm.showMonth,
        "disabled": month.disabled
      },
      on: {
        "click": function($event) {
          _vm.monthSelect(month, mindex)
        }
      }
    }, [_vm._v(_vm._s(month.value))])
  }))])], 2)], 1), _c('div', {
    class: _vm.$style.content
  }, [_c('div', {
    class: _vm.$style.week
  }, [_c('span', {
    class: _vm.$style.dayitem,
    attrs: {
      "role": "week"
    }
  }, [_vm._v("日")]), _c('span', {
    class: _vm.$style.dayitem
  }, [_vm._v("一")]), _c('span', {
    class: _vm.$style.dayitem
  }, [_vm._v("二")]), _c('span', {
    class: _vm.$style.dayitem
  }, [_vm._v("三")]), _c('span', {
    class: _vm.$style.dayitem
  }, [_vm._v("四")]), _c('span', {
    class: _vm.$style.dayitem
  }, [_vm._v("五")]), _c('span', {
    class: _vm.$style.dayitem,
    attrs: {
      "role": "week"
    }
  }, [_vm._v("六")])]), _c('div', {
    class: _vm.$style.day
  }, _vm._l((_vm.days_), function(day) {
    return _c('span', {
      class: _vm.$style.item,
      attrs: {
        "sel": _vm.showDate.toDateString() === day.toDateString() ? 'sel' : '',
        "disabled": !!_vm.isOutOfRange(day),
        "role": _vm.showDate.getMonth() !== day.getMonth() ? 'muted' : ''
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select(day)
        }
      }
    }, [_vm._v(_vm._s(_vm._f("format")(day, 'dd')))])
  })), _vm._t("default")], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_3418a083_preserveWhitespace_false_index_html__ = __webpack_require__(214);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(211);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_3418a083_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5bb16b49", content, true);

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1CHhQ3JcsuVDB2pu{display:inline-block;cursor:pointer;height:35px;line-height:35px;color:#9dabc2;padding:0 20px;-webkit-transition:color .2s;-o-transition:color .2s;transition:color .2s}._1CHhQ3JcsuVDB2pu:hover,._1CHhQ3JcsuVDB2pu[selected]{color:#2cb78e}", ""]);

// exports
exports.locals = {
	"root": "_1CHhQ3JcsuVDB2pu"
};

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_router_item_vue__ = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-subnav-item',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_router_item_vue__["a" /* default */]],
});


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    class: _vm.$style.root,
    attrs: {
      "selected": _vm.active
    },
    on: {
      "click": _vm.navigate
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_7c5eb28d_preserveWhitespace_false_index_html__ = __webpack_require__(219);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(216);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_7c5eb28d_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(217);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("15c1dcef", content, true);

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3XP-utR_Ag55z_hb{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""]);

// exports
exports.locals = {
	"root": "_3XP-utR_Ag55z_hb"
};

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-subnav',
});


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    class: _vm.$style.root
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("89fe3278", content, true);

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._15WiQAawGnWiKHx3{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:middle;color:#555;margin:0;padding:6px 12px;border:1px solid #d2d6de;border-radius:3px;background:#fff}._15WiQAawGnWiKHx3[disabled]{color:#999;border:1px solid #d2d6de;background:#eee}._15WiQAawGnWiKHx3[readonly],._15WiQAawGnWiKHx3[readonly]~._15WiQAawGnWiKHx3{cursor:not-allowed}._15WiQAawGnWiKHx3{position:absolute;right:2px;top:2px;height:14px;line-height:14px;padding:0 4px;cursor:pointer;border:1px solid #ddd;background:#f4f4f4}._15WiQAawGnWiKHx3[disabled]{cursor:not-allowed;opacity:.65;border:1px solid #ccc;background:#fff}._15WiQAawGnWiKHx3+._15WiQAawGnWiKHx3{top:auto;bottom:2px}._15WiQAawGnWiKHx3{width:1em;display:inline-block;font-style:normal;text-align:center}._15WiQAawGnWiKHx3[role=up]:before{content:\"\\394\";display:inline-block;height:14px}._15WiQAawGnWiKHx3[role=down]{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}._15WiQAawGnWiKHx3[role=down]:before{content:\"\\394\";display:inline-block;height:14px}", ""]);

// exports
exports.locals = {
	"root": "_15WiQAawGnWiKHx3",
	"input": "_15WiQAawGnWiKHx3",
	"btn": "_15WiQAawGnWiKHx3",
	"icon": "_15WiQAawGnWiKHx3"
};

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @class NumberInput
 * @extend Input2
 * @param {object}                  options                    =  绑定属性
 * @param {string=0}                options.value              <=> 文本框的值
 * @param {string=''}               options.state              <=> 文本框的状态
 * @param {number}                  options.min                 => 最小值
 * @param {number}                  options.max                 => 最大值
 * @param {boolean=false}           options.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {string='140'}            options.width               => 输入框宽度
 * @param {string='34'}             options.width               => 输入框高度
 */
const NumberInput = {
    name: 'u-number-input',
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        format: String,
        placeholder: String,
        autofocus: [String, Boolean],
        readonly: [String, Boolean],
        disabled: [String, Boolean],
        min: [String, Number],
        max: [String, Number],
        width: {
            type: [String, Number],
            default: '140',
        },
        height: {
            type: [String, Number],
            default: '34',
        },
    },
    data() {
        return {
            showValue: this.formatNumber(this.value),
        };
    },
    watch: {
        value(newValue) {
            // 如果超出数值范围，则设置为范围边界的数值
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange !== false)
                return this.showValue = this.formatNumber(isOutOfRange);
            this.showValue = this.formatNumber(newValue);
        },
        showValue(newValue, oldValue) {
            if (typeof newValue === 'string') {
                const _newValue = +newValue;
                if (isNaN(_newValue))
                    this.showValue = this.formatNumber(this.value);
                else
                    this.showValue = this.formatNumber(_newValue);
            }

            // 如果超出数值范围，则设置为范围边界的数值
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange !== false)
                return this.showValue = this.formatNumber(isOutOfRange);

            // this.showValue = this.formatNumber(newValue);

            /**
             * @event change 数值改变时触发
             * @property {object} sender 事件发送对象
             * @property {number} value 改变后的数值
             */
            this.$emit('change', {
                sender: this,
                value: this.showValue,
            });
        },
        min(newValue, oldValue) {
            const _max = this.max;
            if (!isNaN(newValue) && newValue - _max > 0)
                throw new NumberInput.NumberRangeError(newValue, _max);

            // 如果超出数值范围，则设置为范围边界的数值
            const isOutOfRange = this.isOutOfRange(this.showValue);
            if (isOutOfRange !== false)
                return this.showValue = isOutOfRange;
        },
        max(newValue, oldValue) {
            const _min = this.min;
            if (!isNaN(newValue) && _min - newValue > 0)
                throw new NumberInput.NumberRangeError(_min, newValue);

            // 如果超出数值范围，则设置为范围边界的数值
            const isOutOfRange = this.isOutOfRange(this.showValue);
            if (isOutOfRange !== false)
                return this.showValue = isOutOfRange;
        },
    },
    methods: {
        /**
         * @method add(value) 调整数值
         * @public
         * @param  {number=0} value 加/减的值
         * @return {number} value 计算后的值
         */
        add(value) {
            let _showValue = +this.showValue;
            if (this.readonly || this.disabled || !value)
                return;

            if (isNaN(value))
                throw new TypeError(value + ' is not a number!');

            _showValue += value;
            this.showValue = this.formatNumber(_showValue);
        },
        /**
         * @method isOutOfRange(value) 是否超出规定的数值范围
         * @public
         * @param {number} value 待测的值
         * @return {boolean|number} number 如果没有超出数值范围，则返回false；如果超出数值范围，则返回范围边界的数值
         */
        isOutOfRange(value) {
            const min = +this.min;
            const max = +this.max;

            // min && value < min && min，先判断是否为空，再判断是否超出数值范围，如果超出则返回范围边界的数值
            if (!isNaN(min) && value < min)
                return this.formatNumber(min);
            else if (!isNaN(max) && value > max)
                return this.formatNumber(max);
            else
                return false;
        },
        formatNumber(value) {
            value = '' + (value || 0);
            if (this.format)
                return this.format.replace(new RegExp('\\d{0,' + value.length + '}$'), value);
            return value;
        },
    },
};

const NumberRangeError = function (min, max) {
    this.type = 'NumberRangeError';
    this.message = 'Wrong Number Range where `min` is ' + min + ' and `max` is ' + max + '!';
};
NumberRangeError.prototype = Object.create(RangeError.prototype);
NumberInput.NumberRangeError = NumberRangeError.prototype.constructor = NumberRangeError;

/* harmony default export */ __webpack_exports__["a"] = (NumberInput);


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    class: _vm.$style.root
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.showValue),
      expression: "showValue"
    }],
    class: _vm.$style.input,
    style: ({
      width: _vm.width + 'px',
      height: _vm.height + 'px'
    }),
    attrs: {
      "placeholder": _vm.placeholder,
      "autofocus": _vm.autofocus,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": (_vm.showValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.showValue = $event.target.value
      }
    }
  }), _c('a', {
    class: _vm.$style.btn,
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.add(1)
      }
    }
  }, [_c('i', {
    class: _vm.$style.icon,
    attrs: {
      "role": "up"
    }
  })]), _c('a', {
    class: _vm.$style.btn,
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.add(-1)
      }
    }
  }, [_c('i', {
    class: _vm.$style.icon,
    attrs: {
      "role": "down"
    }
  })])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_47a5ac53_preserveWhitespace_false_index_html__ = __webpack_require__(228);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(225);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_47a5ac53_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(226);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("315b05ce", content, true);

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3gihG4SPKXAJhMaG{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:6px 12px;vertical-align:middle;border:1px solid #d2d6de;color:#555;background:#fff;border-radius:3px;height:34px;line-height:34px}._3gihG4SPKXAJhMaG[disabled]{cursor:not-allowed;background:#eee;color:#999}._3gihG4SPKXAJhMaG{position:absolute;z-index:1;width:100%;top:100%;min-width:160px;margin-top:2px}", ""]);

// exports
exports.locals = {
	"root": "_3gihG4SPKXAJhMaG",
	"input": "_3gihG4SPKXAJhMaG",
	"body": "_3gihG4SPKXAJhMaG"
};

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__u_calendar_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_directives_js__ = __webpack_require__(28);

const MS_OF_DAY = 24 * 3600 * 1000;


/**
 * @class DatePicker
 * @extend Dropdown
 * @param {object}                  options                     =  绑定属性
 * @param {object=null}             options.date               <=> 当前选择的日期
 * @param {string='请输入'}         options.placeholder         => 文本框的占位文字
 * @param {Date|string=null}        options.minDate             => 最小日期，如果为空则不限制
 * @param {Date|string=null}        options.maxDate             => 最大日期，如果为空则不限制
 * @param {boolean=false}           options.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-date-picker',
    props: {
        date: [String, Number],
        minDate: [String, Number, Object],
        maxDate: [String, Number, Object],
        disabled: [Boolean, String],
        autofocus: [Boolean, String],
        readonly: [Boolean, String],
        placeholder: {
            type: String,
            default: '请输入',
        },
        width: { type: [String, Number], default: 154 },
    },
    data() {
        return {
            showDate: this.format(this.date, 'yyyy/MM/dd'),
            open: false,
        };
    },
    created() {
        const minDate = new Date(this.minDate);
        const maxDate = new Date(this.maxDate);
        if (minDate && maxDate) {
            if (minDate / MS_OF_DAY >> 0 > maxDate / MS_OF_DAY >> 0)
                throw new __WEBPACK_IMPORTED_MODULE_0__u_calendar_vue__["a" /* default */].DateRangeError(minDate, maxDate);
        }

        // document.addEventListener('click', this.fadeOut.bind(this), false);
    },
    directives: {
        clickoutside: __WEBPACK_IMPORTED_MODULE_1__util_directives_js__["a" /* default */].clickoutside,
    },
    watch: {
        date(newValue) {
            this.showDate = this.format(newValue, 'yyyy/MM/dd');
        },
        showDate(newValue) {
            /**
             * @event change 日期改变时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 改变后的日期 返回格式为日期对象
             */
            this.$emit('change', {
                sender: this,
                date: new Date(newValue),
            });
        },
        minDate(newValue) {
            if (!newValue)
                return;

            if (newValue === 'Invalid Date' || newValue === 'NaN')
                throw new TypeError('Invalid Date');
        },
        maxDate(newValue) {
            if (!newValue)
                return;

            if (newValue === 'Invalid Date' || newValue === 'NaN')
                throw new TypeError('Invalid Date');
        },
        open(newValue) {
            this.$emit('toggle', {
                sender: this,
                open: newValue,
            });
        },
    },
    methods: {
        /**
         * @method select(date) 选择一个日期
         * @public
         * @param  {Date=null} date 选择的日期
         * @return {void}
         */
        select(date) {
            // debugger;
            if (this.readonly || this.disabled || this.isOutOfRange(date))
                return;

            this.showDate = this.format(date, 'yyyy/MM/dd');

            /**
             * @event select 选择某一项时触发
             * @property {object} sender 事件发送对象
             * @property {number} date 当前选择项 返回格式是日期对象
             */
            this.$emit('select', {
                sender: this,
                date: new Date(this.showDate),
            });

            this.toggle(false);
        },
        /**
         * @method onInput($event) 输入日期
         * @private
         * @param  {object} $event
         * @return {void}
         */
        onInput($event) {
            const value = $event.target.value;
            const date = value ? new Date(value) : null;

            if (date.toString() !== 'Invalid Date')
                this.showDate = this.format(date, 'yyyy/MM/dd');
            else
                this.$refs.input.value = this.format(this.showDate, 'yyyy-MM-dd');
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期范围
         * @public
         * @param {Date} date 待测的日期
         * @return {boolean|Date} date 如果没有超出日期范围，则返回false；如果超出日期范围，则返回范围边界的日期
         */
        isOutOfRange(date) {
            let minDate = this.transformDate(this.minDate);
            let maxDate = this.transformDate(this.maxDate);

            // 不要直接在$watch中改变`minDate`和`maxDate`的值，因为有时向外绑定时可能不希望改变它们。
            minDate = minDate && minDate.setHours(0, 0, 0, 0);
            maxDate = maxDate && maxDate.setHours(0, 0, 0, 0);

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期。
            return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
        },
        /**
         * @method toggle(flag) 是否显示日历组件
         * @public
         * @param {flag} true 显示 false 隐藏
         */
        toggle(flag) {
            this.open = flag;
        },
        format(value, type) {
            if (!value)
                return undefined;
            const fix = (str) => {
                str = '' + (String(str) || '');
                return str.length <= 1 ? '0' + str : str;
            };
            const maps = {
                yyyy(date) { return date.getFullYear(); },
                MM(date) { return fix(date.getMonth() + 1); },
                dd(date) { return fix(date.getDate()); },
                HH(date) { return fix(date.getHours()); },
                mm(date) { return fix(date.getMinutes()); },
                ss(date) { return fix(date.getSeconds()); },
            };
            const trunk = new RegExp(Object.keys(maps).join('|'), 'g');
            type = type || 'yyyy-MM-dd HH:mm';
            value = new Date(value);
            return type.replace(trunk, (capture) => maps[capture] ? maps[capture](value) : '');
        },
        // fadeOut(event) {
        //     debugger;
        //     const _target = event.target;
        //     if (_target !== this.$refs.input && this.open)
        //         this.toggle(false);
        // },
        transformDate(date) {
            if (typeof date === 'string')
                return new Date(date);
            else if (typeof date === 'number')
                return new Date(date);
            else if (typeof date === 'object')
                return date;
        },
        handleClose() {
            this.open = false;
        },
    },
});


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: (_vm.handleClose),
      expression: "handleClose"
    }],
    ref: "element",
    class: _vm.$style.root
  }, [_c('div', {
    class: _vm.$style.header
  }, [_c('input', {
    ref: "input",
    class: _vm.$style.input,
    style: ({
      width: _vm.width + 'px'
    }),
    attrs: {
      "placeholder": _vm.placeholder,
      "autofocus": _vm.autofocus,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.format(_vm.showDate, 'yyyy-MM-dd')
    },
    on: {
      "focus": function($event) {
        _vm.toggle(true)
      },
      "change": function($event) {
        _vm.onInput($event)
      }
    }
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.open),
      expression: "open"
    }],
    class: _vm.$style.body
  }, [_c('u-calendar', {
    attrs: {
      "minDate": _vm.minDate,
      "maxDate": _vm.maxDate,
      "date": _vm.showDate
    },
    on: {
      "select": function($event) {
        _vm.select($event.date)
      }
    }
  })], 1)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_6eb56fd4_preserveWhitespace_false_index_html__ = __webpack_require__(233);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(230);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_6eb56fd4_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0dfe3559", content, true);

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._39yzKCtszblOS0Yh{display:inline-block}._39yzKCtszblOS0Yh ._39yzKCtszblOS0Yh input{padding:6px}._39yzKCtszblOS0Yh ._39yzKCtszblOS0Yh{padding:0 5px}", ""]);

// exports
exports.locals = {
	"root": "_39yzKCtszblOS0Yh",
	"item": "_39yzKCtszblOS0Yh",
	"dot": "_39yzKCtszblOS0Yh"
};

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__u_number_input_vue__ = __webpack_require__(54);


const HOUR_MIN = '00';
const MINUTE_MIN = '00';
const SECOND_MIN = '00';
const HOUR_MAX = '23';
const MINUTE_MAX = '59';
const SECOND_MAX = '59';

/**
 * @class TimePicker
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {string='00:00'}          options.data.time               <=> 当前的时间值
 * @param {string='00:00'}          options.data.minTime             => 最小时间
 * @param {string='23:59'}          options.data.maxTime             => 最大时间
 * @param {boolean=false}           options.data.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const TimePicker = {
    name: 'u-time-picker',
    props: {
        time: {
            type: String,
            default: '00:00:00',
        },
        autofocus: [String, Boolean],
        disabled: [String, Boolean],
        readonly: [String, Boolean],
        width: String,
        minTime: {
            type: String,
            default: '00:00:00',
        },
        maxTime: {
            type: String,
            default: '23:59:59',
        },
    },
    data() {
        return {
            showTime: this.time,
            hourmin: HOUR_MIN,
            hourmax: HOUR_MAX,
            minutemin: MINUTE_MIN,
            minutemax: MINUTE_MAX,
            secondmin: SECOND_MIN,
            secondmax: SECOND_MAX,
        };
    },
    computed: {
        hour() {
            const isOutOfRange = this.isOutOfRange(this.showTime);
            if (isOutOfRange)
                this.showTime = isOutOfRange;
            return this.showTime.split(':')[0];
        },
        minute() {
            const isOutOfRange = this.isOutOfRange(this.showTime);
            if (isOutOfRange)
                this.showTime = isOutOfRange;
            return this.showTime.split(':')[1];
        },
        second() {
            const isOutOfRange = this.isOutOfRange(this.showTime);
            if (isOutOfRange)
                this.showTime = isOutOfRange;
            return this.showTime.split(':')[2];
        },
        sphourmin() {
            return this.minTime.split(':')[0];
        },
        sphourmax() {
            return this.maxTime.split(':')[0];
        },
        spminutemin() {
            return this.minTime.split(':')[1];
        },
        spminutemax() {
            return this.maxTime.split(':')[1];
        },
        spsecondmin() {
            return this.minTime.split(':')[2];
        },
        spsecondmax() {
            return this.maxTime.split(':')[2];
        },
    },
    watch: {
        time(newValue) {
            if (!newValue)
                throw new TypeError('Invalid Time');

            // 如果超出时间范围，则设置为范围边界的时间
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange)
                return this.showTime = isOutOfRange;
            this.showTime = newValue;
        },
        showTime(newValue) {
            if (!newValue)
                throw new TypeError('Invalid Time');

            // 如果超出时间范围，则设置为范围边界的时间
            const isOutOfRange = this.isOutOfRange(newValue);
            if (isOutOfRange)
                return this.showTime = isOutOfRange;
            if (this.showTime === this.minTime) {
                this.hourmin = this.sphourmin;
                this.minutemin = this.spminutemin;
                this.secondmin = this.spsecondmin;
            } else if (this.showTime === this.maxTime) {
                this.hourmax = this.sphourmax;
                this.minutemax = this.spminutemax;
                this.secondmax = this.spsecondmax;
            } else {
                this.hourmin = HOUR_MIN;
                this.minutemin = MINUTE_MIN;
                this.secondmin = SECOND_MIN;
                this.hourmax = HOUR_MAX;
                this.minutemax = MINUTE_MAX;
                this.secondmax = SECOND_MAX;
            }

            /**
             * @event change 时间改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} time 改变后的时间
             */
            this.$emit('change', {
                sender: this,
                time: newValue,
            });
        },
        minTime(newValue, oldValue) {
            this.hourmin = HOUR_MIN;
            this.minutemin = MINUTE_MIN;
            this.secondmin = SECOND_MIN;
            this.hourmax = HOUR_MAX;
            this.minutemax = MINUTE_MAX;
            this.secondmax = SECOND_MAX;
        },
        maxTime(newValue, oldValue) {
            this.hourmin = HOUR_MIN;
            this.minutemin = MINUTE_MIN;
            this.secondmin = SECOND_MIN;
            this.hourmax = HOUR_MAX;
            this.minutemax = MINUTE_MAX;
            this.secondmax = SECOND_MAX;
        },
    },
    methods: {
        /**
         * @method isOutOfRange(time) 是否超出规定的时间范围
         * @public
         * @param {Time} time 待测的时间
         * @return {boolean|Time} time 如果没有超出时间范围，则返回false；如果超出时间范围，则返回范围边界的时间
         */
        isOutOfRange(time) {
            const minTime = this.minTime;
            const maxTime = this.maxTime;

            // minTime && time < minTime && minTime，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的时间
            return (minTime && time < minTime && minTime) || (maxTime && time > maxTime && maxTime);
        },
        changeHour(hour) {
            hour = '' + hour;
            this.showTime = (hour.length > 1 ? hour : '0' + hour) + ':' + this.minute + ':' + this.second;
        },
        changeMinute(minute) {
            minute = '' + minute;
            this.showTime = this.hour + ':' + (minute.length > 1 ? minute : '0' + minute) + ':' + this.second;
        },
        changeSecond(second) {
            second = '' + second;
            this.showTime = this.hour + ':' + this.minute + ':' + (second.length > 1 ? second : '0' + second);
        },
    },
};

const TimeRangeError = function (minTime, maxTime) {
    this.name = 'TimeRangeError';
    this.message = 'Wrong Time Range where `minTime` is ' + minTime + ' and `maxTime` is ' + maxTime + '!';
};

TimeRangeError.prototype = Object.create(Error.prototype);
TimePicker.TimeRangeError = TimeRangeError.prototype.constructor = TimeRangeError;

/* harmony default export */ __webpack_exports__["a"] = (TimePicker);


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.$style.root
  }, [_c('u-number-input', {
    class: _vm.$style.item,
    attrs: {
      "min": _vm.hourmin,
      "max": _vm.hourmax,
      "format": "00",
      "value": _vm.hour,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "width": _vm.width
    },
    on: {
      "change": function($event) {
        _vm.changeHour($event.value)
      }
    }
  }), _c('span', {
    class: _vm.$style.dot
  }, [_vm._v(":")]), _c('u-number-input', {
    class: _vm.$style.item,
    attrs: {
      "min": _vm.minutemin,
      "max": _vm.minutemax,
      "format": "00",
      "value": _vm.minute,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled,
      "width": _vm.width
    },
    on: {
      "change": function($event) {
        _vm.changeMinute($event.value)
      }
    }
  }), _c('span', {
    class: _vm.$style.dot
  }, [_vm._v(":")]), _c('u-number-input', {
    class: _vm.$style.item,
    attrs: {
      "min": _vm.secondmin,
      "max": _vm.secondmax,
      "format": "00",
      "value": _vm.second,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled,
      "width": _vm.width
    },
    on: {
      "change": function($event) {
        _vm.changeSecond($event.value)
      }
    }
  })], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(235);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1ad7a40f", content, true);

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".J4OGlldZnNIRGW3W{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:800px;height:480px;padding:15px}.J4OGlldZnNIRGW3W[role=empty] .J4OGlldZnNIRGW3W{display:none}.J4OGlldZnNIRGW3W{z-index:5;height:40px;line-height:40px;font-size:16px;height:30px;line-height:30px;font-size:12px;text-align:center;display:inline-block;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.J4OGlldZnNIRGW3W:before{display:inline-block;content:\"\";width:10px;height:10px;vertical-align:text-bottom;margin-right:4px;position:relative;top:-2px}.J4OGlldZnNIRGW3W:first-of-type:before{background:hsla(5,77%,71%,.6)}.J4OGlldZnNIRGW3W:nth-of-type(2):before{background:rgba(128,93,207,.6)}.J4OGlldZnNIRGW3W:nth-of-type(3):before{background:rgba(64,204,202,.6)}.J4OGlldZnNIRGW3W:nth-of-type(4):before{background:rgba(255,202,18,.6)}.J4OGlldZnNIRGW3W:nth-of-type(5):before{background:rgba(48,168,220,.6)}.J4OGlldZnNIRGW3W:nth-of-type(6):before{background:rgba(225,174,246,.6)}.J4OGlldZnNIRGW3W:nth-of-type(7):before{background:hsla(0,0%,82%,.6)}.J4OGlldZnNIRGW3W:nth-of-type(8):before{background:rgba(188,224,90,.6)}.J4OGlldZnNIRGW3W+.J4OGlldZnNIRGW3W{margin-left:2em}.J4OGlldZnNIRGW3W[disabled]{color:#ccc}.J4OGlldZnNIRGW3W[disabled]:before{background:#ccc}.J4OGlldZnNIRGW3W{position:absolute;top:15px;left:15px;right:15px;bottom:15px}.J4OGlldZnNIRGW3W~.J4OGlldZnNIRGW3W{top:65px;bottom:45px}.J4OGlldZnNIRGW3W[border]{border:1px solid #eee}", ""]);

// exports
exports.locals = {
	"root": "J4OGlldZnNIRGW3W",
	"legend": "J4OGlldZnNIRGW3W",
	"ittitle": "J4OGlldZnNIRGW3W",
	"item": "J4OGlldZnNIRGW3W",
	"content": "J4OGlldZnNIRGW3W"
};

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-chart',
    props: {
        title: String,
        titleTemplate: { type: Boolean, default: false },
        caption: String,
        captionTemplate: { type: Boolean, default: false },
        series: Array,
        data: Array,
        border: {
            type: Boolean,
            default: false,
        },
        legend: {
            type: Boolean,
            default: true,
        },
        width: String,
        height: String,
        titleAlign: { type: String, default: 'center' },
    },
    data() {
        return {
            visible: true,
            current: undefined,
        };
    },
    watch: {
        data(newVal) {
            if (newVal && newVal.length)
                this.draw();
        },
    },
    methods: {
        draw() {
            this.$emit('draw', {
                sender: this,
            });
        },
        toggle(index) {
            const _obj = {};
            Object.keys(this.series[index]).forEach((item) => _obj[item] = this.series[index][item]);
            _obj.hidden = !_obj.hidden;
            this.series.splice(index, 1, _obj);
        },
    },
});


/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    class: _vm.$style.root,
    style: ({
      width: _vm.width,
      height: _vm.height
    }),
    attrs: {
      "border": _vm.border,
      "loading": !_vm.data,
      "empty": _vm.data && !_vm.data.length
    }
  }, [(_vm.titleTemplate) ? _c('div', {
    class: _vm.$style.ittitle,
    style: ({
      textAlign: _vm.titleAlign
    })
  }, [_vm._t("titleTemplate")], 2) : (_vm.title) ? _c('div', {
    class: _vm.$style.ittitle,
    style: ({
      textAlign: _vm.titleAlign
    })
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.captionTemplate) ? _c('div', {
    class: _vm.$style.caption
  }, [_vm._t("captionTemplate")], 2) : (_vm.caption) ? _c('div', {
    class: _vm.$style.caption
  }, [_vm._v(_vm._s(_vm.caption))]) : _vm._e(), (_vm.legend) ? _c('div', {
    class: _vm.$style.legend
  }, _vm._l((_vm.series), function(sery, index) {
    return _c('div', {
      class: _vm.$style.item,
      attrs: {
        "disabled": sery.hidden
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.toggle(index)
        }
      }
    }, [_vm._v(_vm._s(sery.name || sery.key))])
  })) : _vm._e(), _c('div', {
    class: _vm.$style.content
  }, [_vm._t("default")], 2), _c('div', {
    class: _vm.$style.operate
  }, [_vm._t("operate")], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_c5558eba_preserveWhitespace_false_index_html__ = __webpack_require__(242);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(239);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_c5558eba_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("19beaf55", content, true);

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2l81xrgOcuF_uP8D{width:100%;height:100%;display:block;margin:0 auto}._2l81xrgOcuF_uP8D ._2l81xrgOcuF_uP8D{width:120px;height:120px}._2l81xrgOcuF_uP8D{fill:blue;stroke:#fff;stroke-width:.5px;-webkit-transition:opacity .2s ease;-o-transition:opacity .2s ease;transition:opacity .2s ease}._2l81xrgOcuF_uP8D:hover{opacity:.8}._2l81xrgOcuF_uP8D{position:absolute;top:50%;left:50%;text-align:center;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;cursor:default}._2l81xrgOcuF_uP8D ._2l81xrgOcuF_uP8D{display:none}._2l81xrgOcuF_uP8D:hover{z-index:1}._2l81xrgOcuF_uP8D:hover ._2l81xrgOcuF_uP8D{display:block;position:absolute;margin-left:100%;left:8px;top:0}._2l81xrgOcuF_uP8D{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:200px;padding:4px 8px;font-size:12px;background:#333;color:#eee}._2l81xrgOcuF_uP8D:after{content:\"\";display:block;position:absolute;border:5px solid #333;left:-5px;top:10px;border-left:none;border-top-color:transparent;border-bottom-color:transparent}._2l81xrgOcuF_uP8D ._2l81xrgOcuF_uP8D:first-of-type{fill:#09f}._2l81xrgOcuF_uP8D ._2l81xrgOcuF_uP8D:nth-of-type(2){fill:#ffae3c}._2l81xrgOcuF_uP8D ._2l81xrgOcuF_uP8D:nth-of-type(3){fill:#4ec9ab}._2l81xrgOcuF_uP8D ._2l81xrgOcuF_uP8D:nth-of-type(4){fill:#f5837a}._2l81xrgOcuF_uP8D ._2l81xrgOcuF_uP8D:nth-of-type(5){fill:#9e9cf6}", ""]);

// exports
exports.locals = {
	"elsvg": "_2l81xrgOcuF_uP8D",
	"elg": "_2l81xrgOcuF_uP8D",
	"item": "_2l81xrgOcuF_uP8D",
	"text": "_2l81xrgOcuF_uP8D",
	"u-tooltip": "_2l81xrgOcuF_uP8D",
	"root": "_2l81xrgOcuF_uP8D"
};

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-pie-chart',
    props: {
        data: Array,
        title: String,
        titleTemplate: String,
        tooltipTemplate: String,
        caption: String,
        captionTemplate: String,
        series: Array,
        border: Boolean,
        legend: Boolean,
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '480px',
        },
    },
    data() {
        return {
            RADIUS: 30,
            current: undefined,
        };
    },
    computed: {
        posData() {
            const data = this.data;
            data && data.reduce((prev, current) => {
                current._pos = prev._pos + prev.percent;
                return current;
            }, { percent: 0, _pos: 0 });
            return data;
        },
    },
    methods: {
        getPosition(pos, length) {
            pos = pos || 0;
            length = length || this.RADIUS;
            const arc = Math.PI * 2 * pos * 0.01;
            return { x: length * Math.sin(arc), y: -length * Math.cos(arc) };
        },
        getD(item) {
            const start = this.getPosition(item._pos);
            const end = this.getPosition(item._pos + item.percent);

            let d = '';
            d += 'M ';
            d += start.x + ',' + start.y;
            d += ' A ' + this.RADIUS + ',' + this.RADIUS + ' 0 ';
            d += item.percent > 50 ? 1 : 0;
            d += ' 1 ';
            d += end.x + ',' + end.y;
            d += ' L 0,0 Z';

            return d;
        },
        getTextStyle(item) {
            const middle = this.getPosition(item._pos + item.percent / 2);
            const height = this.height.replace('px', '');
            middle.x *= height / 100 / 2;
            middle.y *= height / 100 / 2;

            const result = [
                'margin-left: ' + (middle.x) + 'px',
                'margin-top: ' + (middle.y) + 'px',
            ];

            return result.join('; ');
        },
        onMouseOver(item) {
            this.current = item;
        },
        toggleHidden(index) {
            this.data[index].hidden = !this.data[index].hidden;
        },
    },
});


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-chart', {
    class: _vm.$style.root,
    attrs: {
      "title": _vm.title,
      "border": _vm.border,
      "width": _vm.width,
      "height": _vm.height,
      "legend": _vm.legend,
      "titleTemplate": _vm.titleTemplate,
      "tooltipTemplate": _vm.tooltipTemplate,
      "series": _vm.data
    }
  }, [_c('svg', {
    ref: "svg",
    class: _vm.$style.elsvg,
    attrs: {
      "viewBox": "0 0 100 100"
    }
  }, [_c('g', {
    class: _vm.$style.elg,
    attrs: {
      "transform": "translate(50, 50)"
    }
  }, [_vm._l((_vm.data), function(item, index) {
    return (item.percent === 100) ? _c('circle', {
      class: _vm.$style.item,
      attrs: {
        "cx": "0",
        "cy": "0",
        "r": _vm.RADIUS
      }
    }) : _vm._e()
  }), _vm._l((_vm.posData), function(item, index) {
    return (item.percent !== 100) ? _c('path', {
      class: _vm.$style.item,
      attrs: {
        "d": _vm.getD(item)
      },
      on: {
        "mouseover": function($event) {
          _vm.onMouseOver(item)
        }
      }
    }) : _vm._e()
  })], 2)]), _vm._l((_vm.posData), function(item) {
    return _c('div', {
      class: _vm.$style.text,
      style: (_vm.getTextStyle(item))
    }, [_vm._v("\n        " + _vm._s(item ? item.percent + '%' : '') + "\n        "), _c('div', {
      class: _vm.$style['u-tooltip'],
      attrs: {
        "size": "size"
      }
    }, [(_vm.tooltipTemplate) ? _vm._t("tooltipTemplate") : _c('div', [_vm._v(_vm._s(item.name || item.key) + ": " + _vm._s(item.percent) + "%")])], 2)])
  })], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_447aea6f_preserveWhitespace_false_index_html__ = __webpack_require__(247);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(244);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_447aea6f_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(245);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("16a37226", content, true);

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._35R9ykRTeYRBn059[role=empty] ._35R9ykRTeYRBn059{display:none}._35R9ykRTeYRBn059{height:100%;bottom:30px;top:15px;left:40px;right:20px;font-size:0}._35R9ykRTeYRBn059[role=x]{left:-6px;right:-1px;border-top:1px solid #eee}._35R9ykRTeYRBn059[role=y]{top:-1px;bottom:-6px;border-left:1px solid #eee}._35R9ykRTeYRBn059{z-index:2}._35R9ykRTeYRBn059[role=axisx]{left:40px;right:19px;bottom:0;height:30px;border-top:1px solid #ccc}._35R9ykRTeYRBn059[role=axisy]{left:0;top:14px;bottom:30px;width:40px;border-right:1px solid #ccc}._35R9ykRTeYRBn059{font-size:12px}._35R9ykRTeYRBn059[role=label-xName]{right:-50px;top:6px;bottom:0}._35R9ykRTeYRBn059[role=label-yName]{right:10px;top:-30px;text-align:center}._35R9ykRTeYRBn059[role=labelx]{top:6px;bottom:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);text-align:center}._35R9ykRTeYRBn059[role=labely]{left:0;right:10px;-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%);text-align:right}._35R9ykRTeYRBn059{right:-50px;top:6px;right:10px;top:-30px;text-align:right;z-index:10}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059{top:0;left:0;width:100%;height:100%}._35R9ykRTeYRBn059[role=layersvg]{bottom:28px}._35R9ykRTeYRBn059{fill-opacity:0;stroke-width:2px;stroke-opacity:0}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:first-of-type ._35R9ykRTeYRBn059{stroke:hsla(5,77%,71%,.6);fill:hsla(5,77%,71%,.3)}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(2) ._35R9ykRTeYRBn059{stroke:#805dcf;fill:rgba(128,93,207,.1)}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(3) ._35R9ykRTeYRBn059{stroke:#40ccca;fill:rgba(64,204,202,.1)}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(4) ._35R9ykRTeYRBn059{stroke:#ffca12;fill:rgba(255,202,18,.1)}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(5) ._35R9ykRTeYRBn059{stroke:#30a8dc;fill:rgba(48,168,220,.1)}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(6) ._35R9ykRTeYRBn059{stroke:#e1aef6;fill:rgba(225,174,246,.1)}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(7) ._35R9ykRTeYRBn059{stroke:#d2d2d2;fill:hsla(0,0%,82%,.1)}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(8) ._35R9ykRTeYRBn059{stroke:#bce05a;fill:rgba(188,224,90,.1)}._35R9ykRTeYRBn059{top:0;bottom:0;border-left:1px solid transparent}._35R9ykRTeYRBn059:before{content:\"\";position:absolute;top:0;bottom:0;left:-50%;width:50%}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059{display:none;position:absolute;z-index:10;margin-top:-16px;white-space:nowrap;padding:4px 12px;font-size:12px;background:#333;color:#eee;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:230px}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:after{content:\"\";display:block;position:absolute;border:5px solid #333}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059[role=u-tooltip-right-top]{margin-left:4px}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059[role=u-tooltip-right-top]:after{top:10px;left:-5px;border-left:none;border-top-color:transparent;border-bottom-color:transparent}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059[role=u-tooltip-right-bottom]{margin-left:4px}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059[role=u-tooltip-right-bottom]:after{top:10px;left:-5px;border-left:none;border-top-color:transparent;border-bottom-color:transparent}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059[role=u-tooltip-left-top]{margin-right:10px;right:100%}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059[role=u-tooltip-left-top]:after{top:10px;right:-5px;border-right:none;border-top-color:transparent;border-bottom-color:transparent}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059[role=u-tooltip-left-bottom]{margin-right:10px;right:100%}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059[role=u-tooltip-left-bottom]:after{top:10px;right:-5px;border-right:none;border-top-color:transparent;border-bottom-color:transparent}._35R9ykRTeYRBn059:hover{border-left:1px solid rgba(0,0,0,.2)}._35R9ykRTeYRBn059:hover ._35R9ykRTeYRBn059{display:block}._35R9ykRTeYRBn059{position:absolute;left:-1px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;border:2px solid rgba(0,153,255,.6);margin-bottom:-4px;margin-left:-4px;width:9px;height:9px;border-radius:100%}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:first-of-type{border-color:hsla(5,77%,71%,.6)}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(2){border-color:#805dcf}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(3){border-color:#40ccca}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(4){border-color:#ffca12}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(5){border-color:#30a8dc}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(6){border-color:#e1aef6}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(7){border-color:#d2d2d2}._35R9ykRTeYRBn059 ._35R9ykRTeYRBn059:nth-of-type(8){border-color:#bce05a}", ""]);

// exports
exports.locals = {
	"root": "_35R9ykRTeYRBn059",
	"wrap": "_35R9ykRTeYRBn059",
	"grid": "_35R9ykRTeYRBn059",
	"layer": "_35R9ykRTeYRBn059",
	"line": "_35R9ykRTeYRBn059",
	"axis": "_35R9ykRTeYRBn059",
	"label": "_35R9ykRTeYRBn059",
	"label-xName": "_35R9ykRTeYRBn059",
	"label-yName": "_35R9ykRTeYRBn059",
	"elsvg": "_35R9ykRTeYRBn059",
	"area": "_35R9ykRTeYRBn059",
	"piece": "_35R9ykRTeYRBn059",
	"u-tooltip": "_35R9ykRTeYRBn059",
	"point": "_35R9ykRTeYRBn059"
};

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__u_chart_vue__ = __webpack_require__(55);


const TICKES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 30, 40, 50, 100, 200, 500, 1000, 1];

/**
 * @class LineChart
 * @extends Chart
 * @param {Object}                  options                    =  绑定属性
 * @param {string='100%'}           options.width               => 图表宽度
 * @param {string='480px'}          options.height              => 图表高度
 * @param {string=''}               options.title               => 标题
 * @param {string=''}               options.titleTemplate      @=> 标题模板
 * @param {string=''}               options.tooltipTemplate    @=> 工具提示模板
 * @param {Array}                   options.data                => 数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
 * @param {Object}                  options.xAxis               => 横坐标信息
 * @param {Object}                  options.yAxis               => 纵坐标信息
 * @param {Array=[]}                options.series              => 序列信息
 * @param {boolean=false}           options.smooth              => 是否用光滑曲线
 * @param {boolean=false}           options.fill                => 是否填充区域
 * @param {boolean=false}           options.border              => 是否显示边框
 * @param {boolean=true}            options.legend              => 是否显示图例
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-line-chart',
    props: {
        data: Array,
        title: String,
        titleTemplate: Boolean,
        tooltipTemplate: Boolean,
        caption: String,
        captionTemplate: Boolean,
        series: Array,
        border: Boolean,
        legend: Boolean,
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '480px',
        },
        xAxis: Object,
        xLabelTemplate: { type: Boolean, default: false },
        yAxis: Object,
        smooth: Boolean,
        fill: Boolean,
        titleAlign: { type: String, default: 'center' },
    },
    data() {
        return {
            width_: undefined,
            height_: undefined,
            xAxis_: {
                data: [],
            },
            yAxis_: {
                data: [],
            },
            percent_: undefined,
        };
    },
    created() {
        this.draw();
    },
    watch: {
        data(newValue) {
            this.draw();
        },
    },
    mounted() {
        this._onResize = this._onResize.apply(this);
        window.addEventListener('resize', this._onResize, false);
    },
    methods: {
        _getSize() {
            if (!this.$refs)
                return;

            this.width_ = this.$refs.grid && this.$refs.grid.offsetWidth;
            this.height_ = this.$refs.grid && this.$refs.grid.offsetHeight;
        },
        /**
         * @private
         */
        _onResize() {
            this._getSize();
        },
        draw() {
            // debugger;
            if (!this.data || !this.data.length)
                return;

            this._getSize();

            //
            // 确定横坐标
            //
            {
                const xAxis_ = this.xAxis_;
                xAxis_.count = this.xAxis.count || 12;
                let pieceCounts = this.data.length - 1;
                let tick = pieceCounts / xAxis_.count;
                if (tick !== parseInt(tick)) {
                    tick = 1;
                    while (!(pieceCounts / tick <= xAxis_.count && pieceCounts % tick === 0)) {
                        for (let i = 0; i < TICKES.length; i++) {
                            tick = TICKES[i];
                            if (pieceCounts / tick <= xAxis_.count && pieceCounts % tick === 0)
                                break;
                        }

                        // 如果不能整除，则补充空数据
                        if (tick === 1) {
                            this.data.push({ hidden: true });
                            pieceCounts++;
                        } else
                            break;
                    }
                }

                xAxis_.tick = tick;
                xAxis_.data = [];
                this.data.forEach((item, index) =>
                    index % tick === 0 && xAxis_.data.push(item[this.xAxis.key]));
            }

            //
            // 确定纵坐标
            //
            {
                const yAxis_ = this.yAxis_;

                // 如果没有设置最小值和最大值，则寻找
                if (this.yAxis.min !== undefined)
                    yAxis_.min = this.yAxis.min;
                else {
                    yAxis_.min = Math.min(...this.series.map((sery) =>
                        Math.min(...this.data.map((item) =>
                            item[sery.key] !== undefined ? item[sery.key] : Infinity)
                        )
                    )); // 支持空数据
                }
                if (this.yAxis.max !== undefined)
                    yAxis_.max = this.yAxis.max;
                else {
                    yAxis_.max = Math.max(...this.series.map((sery) =>
                        Math.max(...this.data.map((item) =>
                            item[sery.key] !== undefined ? item[sery.key] : -Infinity)
                        )
                    )); // 支持空数据
                }

                yAxis_.count = this.yAxis.count || 8;
                const tick = this.roundToFirst((yAxis_.max - yAxis_.min) / yAxis_.count) || 1;
                const fixedCount = this.getFixedCount(tick);
                yAxis_.min = Math.floor(yAxis_.min / tick) * tick;
                yAxis_.max = Math.ceil(yAxis_.max / tick) * tick;

                // 如果最小值和最大值相等，则强行区分
                if (yAxis_.min === yAxis_.max)
                    yAxis_.max = yAxis_.min + yAxis_.count;

                yAxis_.data = [];
                for (let i = yAxis_.min; i <= yAxis_.max; i += tick)
                    yAxis_.data.push(i.toFixed(fixedCount)); // 防止+的时候出现无限小数的情况
            }

            setTimeout(() => {
                this._getSize();
            });
        },
        getD(sery, type) {
            if (!this.width_ || !this.height_ || !this.data || !this.xAxis_.data.length || !this.yAxis_.data.length)
                return;
            if (this.data.length <= 1) // 一个点无需绘制线条
                return;

            const width = this.width_;
            const height = this.height_;
            const delta = width / (this.data.length - 1) / 2;

            const points = this.data.map((item, index) => {
                if (isNaN(item[sery.key]))
                    return null;
                else {
                    return [
                        width * index / (this.data.length - 1),
                        height * (1 - (item[sery.key] - this.yAxis_.min) / (this.yAxis_.max - this.yAxis_.min)),
                    ];
                }
            });
            points.push(null); // 起始点也可以看做间断结束，最后一个null看做间断开始

            const cmds = [];
            let discontinued = true;
            for (let i = 0; i < points.length; i++) {
                const point = points[i];
                let cmd = '';

                if (!point) {
                    if (!discontinued) {
                        discontinued = true;
                        if (type === 'area')
                            cmd = 'V' + height;
                    }
                } else {
                    const pointStr = point.join(',');
                    if (discontinued) { // discontinue end
                        discontinued = false;
                        if (type !== 'area')
                            cmd = 'M ' + pointStr;
                        else {
                            const bottomPointStr = [point[0], height].join(',');
                            cmd = `M ${bottomPointStr} L ${pointStr}`;
                        }

                        const nextPoint = points[i + 1];
                        if (this.smooth && nextPoint) {
                            const helperPointStr = [point[0] + delta, point[1]].join(',');
                            const nextHelperPointStr = [nextPoint[0] - delta, nextPoint[1]].join(',');
                            cmd += ` C ${helperPointStr} ${nextHelperPointStr} ` + nextPoint.join(',');
                            i++;
                        }
                    } else {
                        if (!this.smooth)
                            cmd = 'L ' + pointStr;
                        else {
                            const helperPointStr = [point[0] - delta, point[1]].join(',');
                            cmd = `S ${helperPointStr} ${pointStr}`;
                        }
                    }
                }

                cmds.push(cmd);
            }

            return cmds.join(' ');
        },
        getTopOne(item) {
            return Math.max(...this.series.map((sery) => !sery.hidden && item[sery.key] ? item[sery.key] : 0));
        },
        format(value) {
            return value;
        },
        roundToFirst(num) {
            if (num >= 1) {
                const power = Math.pow(10, String(Math.round(num)).length - 1);
                return Math.round(num / power) * power;
            } else if (num > 0)
                return +num.toFixed(String(num).match(/^0\.0*/)[0].length - 1);
            else // 不解决0或负数
                return num;
        },
        getFixedCount(num) {
            const m = String(num).match(/\.\d+/);
            return m ? m[0].length - 1 : 0;
        },
        getPercent(item) {
            return 100 * (this.yAxis_.max - this.getTopOne(item)) / (this.yAxis_.max - this.yAxis_.min);
        },
    },
    destroyed() {
        window.removeEventListener('resize', this._onResize, false);
    },
    components: {
        'u-blank': {
            template: '',
            props: {
                item: Object,
                index: Number,
            },
        },
    },
});


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-chart', {
    class: _vm.$style.root,
    attrs: {
      "role": _vm.data.length === 0 ? 'empty' : '',
      "title": _vm.title,
      "border": _vm.border,
      "width": _vm.width,
      "height": _vm.height,
      "legend": _vm.legend,
      "titleTemplate": _vm.titleTemplate,
      "series": _vm.series,
      "data": _vm.data,
      "title-align": _vm.titleAlign
    }
  }, [_c('div', {
    class: _vm.$style.wrap
  }, [_c('div', {
    ref: "grid",
    class: _vm.$style.grid
  }, [_vm._l((_vm.xAxis_.data), function(xLablel, index) {
    return _c('div', {
      class: _vm.$style.line,
      style: ({
        left: 100 * index / (_vm.xAxis_.data.length - 1) + '%'
      }),
      attrs: {
        "role": "y"
      }
    })
  }), _vm._l((_vm.yAxis_.data), function(yLabel, index) {
    return _c('div', {
      class: _vm.$style.line,
      style: ({
        bottom: 100 * index / (_vm.yAxis_.data.length - 1) + '%'
      }),
      attrs: {
        "role": "x"
      }
    })
  })], 2), _c('div', {
    class: _vm.$style.axis,
    attrs: {
      "role": "axisx"
    }
  }, [_vm._l((_vm.xAxis_.data), function(xLabel, index) {
    return _c('div', {
      class: _vm.$style.label,
      style: ({
        left: 100 * index / (_vm.xAxis_.data.length - 1) + '%',
        width: 100 / _vm.xAxis_.data.length + '%'
      }),
      attrs: {
        "role": "labelx",
        "title": "xLabel"
      }
    }, [(_vm.xLabelTemplate) ? _vm._t("xLabelTemplate") : _c('span', [_vm._v(_vm._s(xLabel))])], 2)
  }), _c('div', {
    class: _vm.$style.label,
    attrs: {
      "role": "label-xName"
    }
  }, [_vm._v(_vm._s(_vm.xAxis.name))])], 2), _c('div', {
    class: _vm.$style.axis,
    attrs: {
      "role": "axisy"
    }
  }, [_vm._l((_vm.yAxis_.data), function(yLabel, index) {
    return _c('div', {
      class: _vm.$style.label,
      style: ({
        bottom: 100 * index / (_vm.yAxis_.data.length - 1) + '%'
      }),
      attrs: {
        "role": "labely",
        "title": "yLabel"
      }
    }, [_vm._v(_vm._s(_vm.format(yLabel)))])
  }), _c('div', {
    class: _vm.$style.label,
    attrs: {
      "role": "label-yName"
    }
  }, [_vm._v(_vm._s(_vm.yAxis.name))])], 2), _c('div', {
    class: _vm.$style.layer,
    attrs: {
      "role": "layersvg"
    }
  }, _vm._l((_vm.series), function(sery) {
    return _c('svg', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!sery.hidden),
        expression: "!sery.hidden"
      }],
      class: _vm.$style.elsvg
    }, [(_vm.fill) ? _c('path', {
      class: _vm.$style.area,
      attrs: {
        "d": _vm.getD(sery, 'area')
      }
    }) : _vm._e(), _c('path', {
      class: _vm.$style.line,
      attrs: {
        "d": _vm.getD(sery)
      }
    })])
  })), _c('div', {
    class: _vm.$style.layer
  }, _vm._l((_vm.data), function(item, index) {
    return (!item.hidden) ? _c('div', {
      class: _vm.$style.piece,
      style: ({
        left: 100 * index / (_vm.data.length - 1) + '%',
        width: 100 / (_vm.data.length - 1) + '%'
      })
    }, [_vm._l((_vm.series), function(sery) {
      return _c('div', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (item[sery.key] !== undefined && !sery.hidden),
          expression: "item[sery.key] !== undefined && !sery.hidden"
        }],
        class: _vm.$style.point,
        style: ({
          bottom: 100 * (item[sery.key] - _vm.yAxis_.min) / (_vm.yAxis_.max - _vm.yAxis_.min) + '%'
        })
      }, [_c('div', {
        staticClass: "value"
      }, [_vm._v(_vm._s(_vm.format(item[sery.key])))])])
    }), _c('div', {
      class: _vm.$style['u-tooltip'],
      style: ({
        top: _vm.getPercent(item) + '%'
      }),
      attrs: {
        "role": 'u-tooltip-' + (index >= _vm.data.length / 2 ? 'left' : 'right') + '-' + (_vm.getPercent(item) < 50 ? 'top' : 'bottom')
      }
    }, [(_vm.tooltipTemplate) ? _c('u-blank', {
      attrs: {
        "item": item,
        "index": index,
        "series": _vm.series,
        "y-axis": _vm.yAxis
      }
    }) : _vm._l((_vm.series), function(sery) {
      return _c('div', [_vm._v(_vm._s(sery.name || sery.key) + ": " + _vm._s(_vm.format(item[sery.key])))])
    })], 2)], 2) : _vm._e()
  }))]), _c('div', {
    class: _vm.$style.operate,
    slot: "operate"
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_378a732c_preserveWhitespace_false_index_html__ = __webpack_require__(252);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(249);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_378a732c_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(250);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("22ece79e", content, true);

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2o7yL0LafAcMP0Zn{bottom:30px;top:15px;left:40px;right:20px;font-size:0}._2o7yL0LafAcMP0Zn[role=line-x]{left:-6px;right:-1px;border-top:1px solid #eee}._2o7yL0LafAcMP0Zn[role=line-y]{top:-1px;bottom:-6px;border-left:1px solid #eee}._2o7yL0LafAcMP0Zn{z-index:2}._2o7yL0LafAcMP0Zn[role=axis-x]{left:40px;right:19px;bottom:0;height:30px;border-top:1px solid #ccc}._2o7yL0LafAcMP0Zn[role=axis-y]{left:0;top:14px;bottom:30px;width:40px;border-right:1px solid #ccc}._2o7yL0LafAcMP0Zn[role=label-x]{top:6px;bottom:0;text-align:center}._2o7yL0LafAcMP0Zn[role=label-y]{left:0;right:10px;-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%);text-align:right}._2o7yL0LafAcMP0Zn[role=label-xName]{right:-50px;top:6px;bottom:0}._2o7yL0LafAcMP0Zn[role=label-yName]{right:10px;top:-30px;text-align:right}._2o7yL0LafAcMP0Zn{top:0;bottom:0;width:60px;left:50%;margin-left:-30px;background:hsla(5,77%,71%,.3);border:2px solid hsla(5,77%,71%,.6);border-bottom:none;display:none;position:absolute;z-index:10;left:100%;top:-2px;margin-left:5px;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:200px;padding:4px 8px;font-size:12px;background:#333;color:#eee}._2o7yL0LafAcMP0Zn:after{content:\"\";display:block;position:absolute;border:5px solid #333}._2o7yL0LafAcMP0Zn[role=tooltip-right-top]{margin-left:4px}._2o7yL0LafAcMP0Zn[role=tooltip-right-top]:after{top:10px;left:-5px;border-left:none;border-top-color:transparent;border-bottom-color:transparent}._2o7yL0LafAcMP0Zn:hover ._2o7yL0LafAcMP0Zn{display:block}._2o7yL0LafAcMP0Zn[role=bar-stack]{border:none;background:none}._2o7yL0LafAcMP0Zn[role=bar-static]{position:static;width:auto;margin:0}._2o7yL0LafAcMP0Zn[role=bar-static]:first-of-type{border-color:hsla(5,77%,71%,.6);background:hsla(5,77%,71%,.3)}._2o7yL0LafAcMP0Zn[role=bar-static]:nth-of-type(2){border-color:rgba(128,93,207,.6);background:rgba(128,93,207,.3)}._2o7yL0LafAcMP0Zn[role=bar-static]:nth-of-type(3){border-color:rgba(64,204,202,.6);background:rgba(64,204,202,.3)}._2o7yL0LafAcMP0Zn[role=bar-static]:nth-of-type(4){border-color:rgba(255,202,18,.6);background:rgba(255,202,18,.3)}._2o7yL0LafAcMP0Zn[role=bar-static]:nth-of-type(5){border-color:rgba(48,168,220,.6);background:rgba(48,168,220,.3)}._2o7yL0LafAcMP0Zn[role=bar-static]:nth-of-type(6){border-color:rgba(225,174,246,.6);background:rgba(225,174,246,.3)}._2o7yL0LafAcMP0Zn[role=bar-static]:nth-of-type(7){border-color:hsla(0,0%,82%,.6);background:hsla(0,0%,82%,.3)}._2o7yL0LafAcMP0Zn[role=bar-static]:nth-of-type(8){border-color:rgba(188,224,90,.6);background:rgba(188,224,90,.3)}", ""]);

// exports
exports.locals = {
	"root": "_2o7yL0LafAcMP0Zn",
	"grid": "_2o7yL0LafAcMP0Zn",
	"layer": "_2o7yL0LafAcMP0Zn",
	"line": "_2o7yL0LafAcMP0Zn",
	"axis": "_2o7yL0LafAcMP0Zn",
	"label": "_2o7yL0LafAcMP0Zn",
	"piece": "_2o7yL0LafAcMP0Zn",
	"bar": "_2o7yL0LafAcMP0Zn",
	"tooltip": "_2o7yL0LafAcMP0Zn"
};

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @class BarChart
 * @extends Chart
 * @param {Object}                  options                     =  绑定属性
 * @param {string='100%'}           options.width               => 图表宽度
 * @param {string='480px'}          options.height              => 图表高度
 * @param {string=''}               options.title               => 标题
 * @param {string=''}               options.titleTemplate      @=> 标题模板
 * @param {string=''}               options.tooltipTemplate    @=> 工具提示模板
 * @param {Array}                   options.data                => 数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
 * @param {Object}                  options.xAxis               => 横坐标信息
 * @param {Object}                  options.yAxis               => 纵坐标信息
 * @param {Array=[]}                options.series              => 序列信息
 * @param {boolean=false}           options.border              => 是否显示边框
 * @param {boolean=true}            options.legend              => 是否显示图例
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-bar-chart',
    props: {
        data: Array,
        title: String,
        titleTemplate: String,
        tooltipTemplate: String,
        caption: String,
        captionTemplate: String,
        series: Array,
        border: Boolean,
        legend: Boolean,
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '480px',
        },
        xAxis: Object,
        xLabelTemplate: String,
        yAxis: Object,
        stack: [String, Boolean],
    },
    data() {
        return {
            xAxis_: { data: [] },
            yAxis_: { data: [] },
        };
    },
    created() {
        this.draw();
    },
    watch: {
        data(newValue) {
            this.draw();
        },
    },
    methods: {
        draw() {
            if (!this.data || !this.data.length)
                return;

            // 堆叠模式
            if (this.stack) {
                this.data.forEach((item) => {
                    if (item.total !== undefined)
                        return;

                    item.total = 0;
                    this.series.forEach((sery) => item.total += item[sery.key]);
                });
            }

            //
            // 确定横坐标
            //
            {
                const xAxis_ = this.xAxis_;

                xAxis_.count = this.xAxis.count || 12;
                // 柱状图数据全部显示，暂不考虑收缩间隔的情况
                xAxis_.data = this.data.map((item) => item[this.xAxis.key]);
            }

            //
            // 确定纵坐标
            //
            {
                const yAxis_ = this.yAxis_;

                // 如果没有设置最小值和最大值，则寻找
                if (this.yAxis.min !== undefined)
                    yAxis_.min = this.yAxis.min;
                else if (this.stack)
                    yAxis_.min = Math.min(...this.data.map((item) => item.total));
                else {
                    yAxis_.min = Math.min(...this.series.map((sery) =>
                        Math.min(...this.data.map((item) => item[sery.key]))
                    ));
                }
                if (this.yAxis.max !== undefined)
                    yAxis_.max = this.yAxis.max;
                else if (this.stack)
                    yAxis_.max = Math.max(...this.data.map((item) => item.total));
                else {
                    yAxis_.max = Math.max(...this.series.map((sery) =>
                        Math.max(...this.data.map((item) => item[sery.key]))
                    ));
                }

                yAxis_.count = this.yAxis.count || 8;
                const tick = this.roundToFirst((yAxis_.max - yAxis_.min) / yAxis_.count) || 1;
                yAxis_.min = Math.floor(yAxis_.min / tick) * tick;
                yAxis_.max = Math.ceil(yAxis_.max / tick) * tick;

                // 如果最小值和最大值相等，则强行区分
                if (yAxis_.min === yAxis_.max)
                    yAxis_.max = yAxis_.min + yAxis_.count;

                yAxis_.data = [];
                for (let i = yAxis_.min; i <= yAxis_.max; i += tick)
                    yAxis_.data.push(i);
            }
        },
        format(value) {
            return value;
        },
        roundToFirst(num) {
            if (num >= 1) {
                const power = Math.pow(10, String(Math.round(num)).length - 1);
                return Math.round(num / power) * power;
            } else if (num > 0)
                return +num.toFixed(String(num).match(/^0\.0*/)[0].length - 1);
            else // 不解决0或负数
                return num;
        },
    },
});


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-chart', {
    class: _vm.$style.root,
    attrs: {
      "title": _vm.title,
      "border": _vm.border,
      "width": _vm.width,
      "height": _vm.height,
      "legend": _vm.legend,
      "titleTemplate": _vm.titleTemplate,
      "tooltipTemplate": _vm.tooltipTemplate,
      "series": _vm.series,
      "data": _vm.data
    }
  }, [_c('div', {
    class: _vm.$style.grid
  }, [_vm._l((_vm.xAxis_.data), function(xLabel, index) {
    return _c('div', {
      class: _vm.$style.line,
      style: ({
        left: 100 * index / _vm.xAxis_.data.length + '%'
      }),
      attrs: {
        "role": "line-y"
      }
    })
  }), _c('div', {
    class: _vm.$style.line,
    staticStyle: {
      "left": "100%"
    },
    attrs: {
      "role": "line-y"
    }
  }), _vm._l((_vm.yAxis_.data), function(yLabel, index) {
    return _c('div', {
      class: _vm.$style.line,
      style: ({
        bottom: 100 * index / (_vm.yAxis_.data.length - 1) + '%'
      }),
      attrs: {
        "role": "line-x"
      }
    })
  })], 2), _c('div', {
    class: _vm.$style.axis,
    attrs: {
      "role": "axis-x"
    }
  }, [_vm._l((_vm.xAxis_.data), function(xLabel, index) {
    return _c('div', {
      class: _vm.$style.label,
      style: ({
        left: 100 * index / _vm.xAxis_.data.length + '%',
        width: 100 / _vm.xAxis_.data.length + '%'
      }),
      attrs: {
        "role": "label-x",
        "title": xLabel
      }
    }, [_vm._t("xLabelTemplate", [_vm._v("\n                " + _vm._s(xLabel) + "\n            ")])], 2)
  }), _c('div', {
    class: _vm.$style.label,
    attrs: {
      "role": "label-xName"
    }
  }, [_vm._v(_vm._s(_vm.xAxis.name))])], 2), _c('div', {
    class: _vm.$style.axis,
    attrs: {
      "role": "axis-y"
    }
  }, [_vm._l((_vm.yAxis_.data), function(yLabel, index) {
    return _c('div', {
      class: _vm.$style.label,
      style: ({
        bottom: 100 * index / (_vm.yAxis_.data.length - 1) + '%'
      }),
      attrs: {
        "role": "label-y",
        "title": yLabel
      }
    }, [_vm._v(_vm._s(_vm.format(yLabel)))])
  }), _c('div', {
    class: _vm.$style.label,
    attrs: {
      "role": "label-yName"
    }
  }, [_vm._v(_vm._s(_vm.yAxis.name))])], 2), _c('div', {
    class: _vm.$style.layer
  }, _vm._l((_vm.data), function(item, index) {
    return _c('div', {
      class: _vm.$style.piece,
      style: ({
        left: 100 * index / _vm.data.length + '%',
        width: 100 / _vm.data.length + '%'
      })
    }, _vm._l((_vm.series), function(sery) {
      return (!_vm.stack) ? _c('div', {
        class: _vm.$style.bar,
        style: ({
          height: 100 * (item[sery.key] - _vm.yAxis_.min) / _vm.yAxis_.max + '%'
        })
      }, [_c('div', {
        class: _vm.$style.value
      }, [_vm._v(_vm._s(_vm.format(item[sery.key])))]), _c('div', {
        class: _vm.$style.tooltip,
        attrs: {
          "role": "tooltip-right-top"
        }
      }, [_vm._t("tooltipTemplate", [_vm._v("\n                        " + _vm._s(sery.name || sery.key) + ": " + _vm._s(_vm.format(item[sery.key])) + "\n                    ")])], 2)]) : _c('div', {
        class: _vm.$style.bar,
        style: ({
          height: 100 * (item.total - _vm.yAxis_.min) / _vm.yAxis_.max + '%'
        }),
        attrs: {
          "role": "bar-stack"
        }
      }, [_vm._l((_vm.series), function(sery) {
        return (item[sery.key]) ? _c('div', {
          class: _vm.$style.bar,
          style: ({
            height: 100 * (item[sery.key]) / item.total + '%'
          }),
          attrs: {
            "role": "bar-static"
          }
        }) : _vm._e()
      }), _c('div', {
        class: _vm.$style.tooltip,
        attrs: {
          "role": "tooltip-right-top"
        }
      }, [_vm._t("tooltipTemplate", _vm._l((_vm.series), function(sery) {
        return _c('div', [_vm._v(_vm._s(sery.name || sery.key) + ": " + _vm._s(_vm.format(item[sery.key])))])
      }))], 2)], 2)
    }))
  }))])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_41de3719_preserveWhitespace_false_index_html__ = __webpack_require__(257);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(254);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_41de3719_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(255);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3030b421", content, true);

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".bI_sk4LHdPTZWGft{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:6px 12px;vertical-align:middle;border:1px solid #d2d6de;color:#555;background:#fff;border-radius:3px;height:34px;line-height:34px;position:absolute;z-index:1;top:100%;margin-top:2px;min-width:160px}.bI_sk4LHdPTZWGft[disabled]{cursor:not-allowed;background:#eee;color:#999}.bI_sk4LHdPTZWGft{text-align:center;width:100%}", ""]);

// exports
exports.locals = {
	"root": "bI_sk4LHdPTZWGft",
	"input": "bI_sk4LHdPTZWGft",
	"body": "bI_sk4LHdPTZWGft",
	"timePicker": "bI_sk4LHdPTZWGft"
};

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_directives_js__ = __webpack_require__(28);

/**
 * @class DateTimePicker
 * @extend Dropdown
 * @param {object}                  options                     =  绑定属性
 * @param {object=null}             options.date               <=> 当前选择的日期时间
 * @param {string='请输入'}         options.placeholder         => 文本框的占位文字
 * @param {Date|string=null}        options.minDate             => 最小日期时间，如果为空则不限制
 * @param {Date|string=null}        options.maxDate             => 最大日期时间，如果为空则不限制
 * @param {boolean=false}           options.autofocus           => 是否自动获得焦点
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {width|string|number}     options.width               => 输入框长度
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-date-time-picker',
    props: {
        disabled: [String, Boolean],
        placeholder: {
            type: String,
            default: '请输入',
        },
        readonly: [String, Boolean],
        autofocus: [String, Boolean],
        minDate: [String, Number, Object],
        maxDate: [String, Number, Object],
        date: [String, Number, Date],
        width: {
            type: [String, Number],
            default: '154',
        },

    },
    data() {
        return {
            dateTime: this.format(this.date, 'yyyy-MM-dd HH:mm:ss'),
            open: false,
            minTime: undefined,
            maxTime: undefined,
        };
    },
    computed: {
        showTime() {
            return this.format(this.dateTime, 'HH:mm:ss');
        },
        showDate() {
            return this.format(this.dateTime, 'yyyy-MM-dd');
        },
        minCalendarDate() {
            return this.format(this.minDate, 'yyyy-MM-dd');
        },
        maxCalendarDate() {
            return this.format(this.maxDate, 'yyyy-MM-dd');
        },
        spMinTime() {
            return this.format(this.minDate, 'HH:mm:ss');
        },
        spMaxTime() {
            return this.format(this.maxDate, 'HH:mm:ss');
        },
    },
    directives: {
        clickoutside: __WEBPACK_IMPORTED_MODULE_0__util_directives_js__["a" /* default */].clickoutside,
    },
    watch: {
        date(newValue) {
            this.dateTime = this.format(newValue, 'yyyy-MM-dd HH:mm:ss');
        },
        dateTime(newValue) {
            // 字符类型自动转为日期类型

            if (newValue === 'Invalid Date' || newValue === 'NaN')
                throw new TypeError('Invalid Date');

            // 如果不为空并且超出日期范围，则设置为范围边界的日期
            if (newValue) {
                const isOutOfRange = this.isOutOfRange(newValue);
                if (isOutOfRange)
                    return this.dateTime = this.format(isOutOfRange, 'yyyy-MM-dd HH:mm:ss');
            }

            if (newValue === this.minDate) {
                this.minTime = this.spMinTime;
                this.maxTime = undefined;
            } else if (newValue === this.maxDate) {
                this.minTime = undefined;
                this.maxTime = this.spMaxTime;
            } else {
                this.minTime = undefined;
                this.maxTime = undefined;
            }

            /**
             * @event change 日期时间改变时触发
             * @property {object} sender 事件发送对象
             * @property {object} date 改变后的日期时间
             */
            this.$emit('change', {
                sender: this,
                date: new Date(newValue.replace(/-/g, '/')).getTime(),
            });
        },
    },
    methods: {
        /**
         * @method outRangeDateTime(date, time) 修改日期为最大日期或最小日期
         * @private
         * @return {void}
         */
        outRangeDateTime(date, time) {
            if (!time)
                time = '00:00:00';

            date = new Date(date);
            time = time.split(':');
            date.setHours(time[0]);
            date.setMinutes(time[1]);
            date.setSeconds(time[2]);
            const datetime = this.format(date, 'yyyy-MM-dd');
            const dtime = this.format(date, 'HH:mm:ss');
            if (datetime === this.minCalendarDate && dtime < this.spMinTime) {
                const spMinTime = this.spMinTime.split(':');
                date.setHours(spMinTime[0]);
                date.setMinutes(spMinTime[1]);
                date.setSeconds(spMinTime[2]);
            } else if (datetime === this.maxCalendarDate && dtime > this.spMaxTime) {
                const spMaxTime = this.spMaxTime.split(':');
                date.setHours(spMaxTime[0]);
                date.setMinutes(spMaxTime[1]);
                date.setSeconds(spMaxTime[2]);
            }
            if (datetime === this.minCalendarDate || datetime === this.maxCalendarDate)
                this.dateTime = this.format(date, 'yyyy-MM-dd HH:mm:ss');
        },
        /**
         * @method onDateTimeChange(date, time) 日期或时间改变后更新日期时间
         * @private
         * @return {void}
         */
        onDateTimeChange(date, time) {
            if (!time)
                time = '00:00:00';

            date = new Date(date);
            time = time.split(':');
            date.setHours(time[0]);
            date.setMinutes(time[1]);
            date.setSeconds(time[2]);
            this.dateTime = this.format(date, 'yyyy-MM-dd HH:mm:ss');
        },
        /**
         * @method onInput($event) 输入日期
         * @private
         * @param  {object} $event
         * @return {void}
         */
        onInput($event) {
            const value = $event.target.value;
            const date = value ? new Date(value) : null;

            if (date.toString() !== 'Invalid Date')
                this.dateTime = this.format(date, 'yyyy-MM-dd HH:mm:ss');
            else
                this.$refs.input.value = this.format(this.dateTime, 'yyyy-MM-dd HH:mm:ss');
        },
        /**
         * @method isOutOfRange(date) 是否超出规定的日期时间范围
         * @public
         * @param {Date} date 待测的日期时间
         * @return {boolean|Date} date 如果没有超出日期时间范围，则返回false；如果超出日期时间范围，则返回范围边界的日期时间
         */
        isOutOfRange(date) {
            date = this.transformDate(date);
            const minDate = this.transformDate(this.minDate);
            const maxDate = this.transformDate(this.maxDate);

            // minDate && date < minDate && minDate，先判断是否为空，再判断是否超出范围，如果超出则返回范围边界的日期时间。
            return (minDate && date < minDate && minDate) || (maxDate && date > maxDate && maxDate);
        },
        format(value, type) {
            if (!value)
                return;
            const fix = (str) => {
                str = '' + (String(str) || '');
                return str.length <= 1 ? '0' + str : str;
            };
            const maps = {
                yyyy(date) { return date.getFullYear(); },
                MM(date) { return fix(date.getMonth() + 1); },
                dd(date) { return fix(date.getDate()); },
                HH(date) { return fix(date.getHours()); },
                mm(date) { return fix(date.getMinutes()); },
                ss(date) { return fix(date.getSeconds()); },
            };
            const trunk = new RegExp(Object.keys(maps).join('|'), 'g');
            type = type || 'yyyy-MM-dd HH:mm';
            if (typeof value === 'string')
                value = value.replace(/-/g, '/');
            value = new Date(value);
            if (value.toString() === 'Invalid Date')
                return;
            return type.replace(trunk, (capture) => maps[capture] ? maps[capture](value) : '');
        },
        toggle(value) {
            this.open = value;
        },
        transformDate(date) {
            if (typeof date === 'string')
                return new Date(date.replace(/-/g, '/'));
            else if (typeof date === 'number')
                return new Date(date);
            else if (typeof date === 'object')
                return date;
        },
        handleClose() {
            this.open = false;
        },
    },
});


/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "clickoutside",
      rawName: "v-clickoutside",
      value: (_vm.handleClose),
      expression: "handleClose"
    }],
    ref: "element",
    class: _vm.$style.root
  }, [_c('div', {
    class: _vm.$style.head
  }, [_c('input', {
    ref: "input",
    class: _vm.$style.input,
    style: ({
      width: _vm.width + 'px'
    }),
    attrs: {
      "placeholder": _vm.placeholder,
      "autofocus": _vm.autofocus,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.dateTime
    },
    on: {
      "focus": function($event) {
        _vm.toggle(true)
      },
      "change": function($event) {
        _vm.onInput($event)
      }
    }
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.open),
      expression: "open"
    }],
    class: _vm.$style.body
  }, [_c('u-calendar', {
    attrs: {
      "readonly": _vm.readonly,
      "min-date": _vm.minCalendarDate,
      "max-date": _vm.maxCalendarDate,
      "date": _vm.showDate
    },
    on: {
      "select": function($event) {
        _vm.onDateTimeChange($event.date, _vm.showTime)
      },
      "change": function($event) {
        _vm.outRangeDateTime($event.date, _vm.showTime)
      }
    }
  }, [_c('u-time-picker', {
    class: _vm.$style.timePicker,
    attrs: {
      "readonly": _vm.readonly,
      "time": _vm.showTime,
      "width": "50",
      "min-time": _vm.minTime,
      "max-time": _vm.maxTime
    },
    on: {
      "change": function($event) {
        _vm.onDateTimeChange(_vm.showDate, $event.time)
      }
    }
  })], 1)], 1)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_6e18f026_preserveWhitespace_false_index_html__ = __webpack_require__(262);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(259);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_6e18f026_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(260);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("64eaf50a", content, true);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._23CtEZezN312iT9Q{display:inline-block;vertical-align:middle}._23CtEZezN312iT9Q[disabled]{background:#eee;border:1px solid #d3d6de}._23CtEZezN312iT9Q{word-wrap:normal;height:34px;line-height:32px;padding-left:14px;padding-right:28px;border-radius:3px}._23CtEZezN312iT9Q:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #9dabc2;float:right;position:relative;left:10px;top:14px}._23CtEZezN312iT9Q{margin-top:2px;width:100%;position:absolute;top:100%;left:0;z-index:100;overflow-x:hidden;overflow-y:auto;max-height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 0;background:#fff;color:#555;border-radius:4px;border:1px solid #d2d6de;list-style:none;margin:0;max-height:152px;padding:3px 14px;color:#777;cursor:pointer;position:relative;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}._23CtEZezN312iT9Q[divider]{margin:9px 0;padding:0;height:1px;background:#e5e5e5;overflow:hidden;cursor:default}._23CtEZezN312iT9Q[disabled]{cursor:not-allowed;color:#999}._23CtEZezN312iT9Q:hover{background:#f4f4f4;color:#444}._23CtEZezN312iT9Q[role=z-sel]{background:#67aaf5;color:#fff}", ""]);

// exports
exports.locals = {
	"root": "_23CtEZezN312iT9Q",
	"head": "_23CtEZezN312iT9Q",
	"body": "_23CtEZezN312iT9Q",
	"listview": "_23CtEZezN312iT9Q",
	"listitem": "_23CtEZezN312iT9Q"
};

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_event_js__ = __webpack_require__(18);


/**
 * @class Select
 * @extend Base
 * @param {Array}                   options.options             => 下拉菜单列表
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {string|number}     options.width               => 输入框长度
 */
const Select = {
    name: 'u-select',
    props: {
        options: Array,
        readonly: Boolean,
        disabled: Boolean,
        // visible: { type: Boolean, default: true },
        width: { type: [String, Number], default: '160' },
        value: [String, Number],
    },
    data() {
        return {
            open: false,
            selectedIndex: this.initSelectedIndex(this.value),
        };
    },
    created() {
        __WEBPACK_IMPORTED_MODULE_0__util_event_js__["a" /* default */].addHandler(document, 'click', this.fadeOut.bind(this));
    },
    computed: {
        selected() {
            if (this.options.length === 0)
                return { name: '请选择', value: '' };
            return this.options[this.selectedIndex];
        },
    },
    methods: {
        toggle(value) {
            if (this.disabled)
                return;
            if (value)
                this.open = value;
            else
                this.open = !this.open;
        },
        select(event, index) {
            if (this.readonly)
                return;
            if (this.options[index].disabled || this.options[index].divider) {
                event.stopPropagation();
                return false;
            }
            // this.selected = this.options[index];
            this.selectedIndex = index;

            /**
             * @event select 选中列表项时触发
             * @property {object} sender 事件发送对象
             * @property {object} selected 选中后的列表对象
             * @property {String} value 选中后的列表对象的值
             */
            this.$emit('select', {
                sender: this,
                selected: this.options[index],
                value: this.options[index].value,
            });
        },
        initSelectedIndex(value) {
            if (this.options.length === 0)
                return;
            let selIndex = 0;
            this.options.some((item, index) => {
                if (item.value === value) {
                    selIndex = index;
                    return true;
                }
                return false;
            });
            return selIndex;
        },
        fadeOut(event) {
            Select.opens.forEach((item, index) => {
                // 这个地方不能用stopPropagation来处理，因为展开一个Select的同时要收起其他Select
                const element = item.$refs.element;
                let element2 = event.target;
                while (element2) {
                    if (element === element2)
                        return;
                    element2 = element2.parentElement;
                }
                item.toggle(false);
            });
        },
    },
    watch: {
        open(newValue) {
            const index = Select.opens.indexOf(this);
            if (newValue && index < 0)
                Select.opens.push(this);
            else if (!newValue && index > -1)
                Select.opens.splice(index, 1);
        },
        options(newValue) {
            this.selectedIndex = this.initSelectedIndex(this.value);
        },
        value(newValue) {
            this.selectedIndex = this.initSelectedIndex(newValue);
        },
        /**
         * @event change 选中列表项改变时触发
         * @property {object} sender 事件发送对象
         * @property {object} selected 改变后的列表对象
         * @property {String} value 改变后的列表对象的值
         */
        selected(newValue) {
            this.$emit('change', {
                sender: this,
                selected: newValue,
                value: newValue.value,
            });
        },
    },
};

// Select 类的静态属性 用来保存当前处于open状态的Select对象
Select.opens = [];

/* harmony default export */ __webpack_exports__["a"] = (Select);


/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "element",
    class: _vm.$style.root,
    style: ({
      width: _vm.width + 'px'
    }),
    attrs: {
      "readonly": _vm.readonly
    },
    on: {
      "click": function($event) {
        _vm.toggle()
      }
    }
  }, [_c('div', {
    class: _vm.$style.head,
    attrs: {
      "disabled": _vm.disabled
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.selected.name))])]), (_vm.open && _vm.options.length !== 0) ? _c('div', {
    class: _vm.$style.body
  }, [_c('ul', {
    class: _vm.$style.listview
  }, _vm._l((_vm.options), function(item, index) {
    return _c('li', {
      class: _vm.$style.listitem,
      attrs: {
        "disabled": item.disabled,
        "divider": item.divider,
        "role": (index === _vm.selectedIndex) ? 'z-sel' : '',
        "title": item.name
      },
      on: {
        "click": function($event) {
          _vm.select($event, index)
        }
      }
    }, [_vm._v(_vm._s(item.name))])
  }))]) : _vm._e()])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_aa0c4726_preserveWhitespace_false_index_html__ = __webpack_require__(267);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(264);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_aa0c4726_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(265);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7eeb30b1", content, true);

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Mntt6eFhoQr2qNgn{-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;z-index:1040;top:10px;left:10px;width:320px}.Mntt6eFhoQr2qNgn[role=bottom-center],.Mntt6eFhoQr2qNgn[role=top-center]{left:50%;margin-left:-160px}.Mntt6eFhoQr2qNgn[role=bottom-center],.Mntt6eFhoQr2qNgn[role=bottom-left],.Mntt6eFhoQr2qNgn[role=bottom-right]{left:50%;bottom:10px}.Mntt6eFhoQr2qNgn[role=bottom-right],.Mntt6eFhoQr2qNgn[role=top-right]{left:auto;right:10px}.Mntt6eFhoQr2qNgn[role=static]{position:static;width:auto}.Mntt6eFhoQr2qNgn{margin-bottom:10px;padding:15px;background:#444;color:#fff;border:1px solid #444;border-radius:3px}.Mntt6eFhoQr2qNgn[role=info]{background:#00c0ef;color:#fff;border:1px solid #00acd6}.Mntt6eFhoQr2qNgn[role=success]{background:#00a65a;color:#fff;border:1px solid #008d4c}.Mntt6eFhoQr2qNgn[role=warnning]{background:#f39c12;color:#fff;border:1px solid #e08e0b}.Mntt6eFhoQr2qNgn[role=error]{background:#dd4b39;color:#fff;border:1px solid #d73925}.Mntt6eFhoQr2qNgn{float:right;color:inherit;opacity:.7}.Mntt6eFhoQr2qNgn:before{content:\"\\D7\"}", ""]);

// exports
exports.locals = {
	"root": "Mntt6eFhoQr2qNgn",
	"item": "Mntt6eFhoQr2qNgn",
	"close": "Mntt6eFhoQr2qNgn"
};

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(83);


/**
 * @class Toast
 * @extend Base
 * @param {String}                   options.position         => 显示位置
 * @param {boolean=false}            options.single           => 始终只显示一个提示
 * @param {String}                   options.state            => info,success,warnning,error不同类型的提示
 * @param {String}                   options.message          => 提示信息
 *@param {boolean=true}              options.visible          => 显示/隐藏
 */
const Toast = {
    name: 'u-toast',
    props: {
        position: { type: String, default: 'top-center' },
        single: Boolean,
        duration: { type: Number, default: 2000 },
        state: { type: String, default: '' },
        message: String,
        visible: { type: Boolean, default: true },
    },
    data() {
        return {
            list: [],
            showState: this.state,
        };
    },
    methods: {
        show(message, duration, state) {
            if (!this.$el) {
                const ele = document.createElement('div');
                this.$mount(ele);
                document.body.appendChild(this.$el);
            }
            const options = {
                message: message || this.message,
                duration: duration || this.duration,
            };
            this.showState = state || this.showState;
            this.open(options);
        },
        open(options) {
            if (this.single && this.list[0]) {
                Object.assign(this.list[0], options);
                this.list[0].counter++;
            } else {
                this.list.unshift(options);
                this.list[0].counter = 0;
            }

            const item = this.list[0];

            if (item.duration) {
                setTimeout(() => {
                    if (!item.counter)
                        this.close(item);
                    else
                        item.counter--;
                }, item.duration);
            }
        },
        close(item) {
            const index = this.list.indexOf(item);
            if (index < 0)
                return;
            this.list.splice(index, 1);

            this.$emit('close', {
                sender: this,
                item,
            });
        },
        /**
         * @method closeAll() 关闭所有消息
         * @public
         * @return {void}
         */
        closeAll() {
            this.list = [];
        },
    },
    watch: {
        // 此处有坑啊 由于message的内容是放在数组中，msg在父组件更新后，并不会触发数组内msg的更新
        message(newValue, oldValue) {
            this.list.some((item, index) => {
                if (item.message === oldValue) {
                    item.message = newValue;
                    return true;
                }
                return false;
            });
        },
    },
};

const STATES = Toast.STATES = ['success', 'warning', 'info', 'error'];
/**
 * @method [info|success|warning|error](message[,duration]) 弹出特殊类型的消息。为show方法的简写方式。
 * @public
 * @param  {string=''} message 消息内容
 * @param  {number=toast.duration} duration 该条消息的停留毫秒数。如果为0，则表示消息常驻不消失。如果不填，则使用toast默认的duration。
 * @return {void}
 */
STATES.forEach((state) => {
    Toast.methods[state] = function (message, duration) {
        this.show(message, duration, state);
    };
});

/**
 * @static
 * @private {Toast}
 * @description 直接初始化一个实例
 */
const toast = Toast.toast = new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */](Toast);
const METHODS = Toast.METHODS = ['show', 'close', 'closeAll', 'success', 'warning', 'info', 'error'];
/**
 * @method show(message[,duration][,state]) 弹出一个消息
 * @static
 * @public
 * @param  {string=''} message 消息内容
 * @param  {number=toast.duration} duration 该条消息的停留毫秒数。如果为0，则表示消息常驻不消失。如果不填，则使用toast默认的duration。
 * @param  {string=''} state 消息状态，可选参数：`info`、`success`、`warning`、`error`
 * @return {object} item 返回弹出的消息项
 */
/**
 * @method [info|success|warning|error](message[,duration]) 弹出特殊类型的消息。为show方法的简写方式。
 * @static
 * @public
 * @param  {string=''} message 消息内容
 * @param  {number=toast.duration} duration 该条消息的停留毫秒数。如果为0，则表示消息常驻不消失。如果不填，则使用toast默认的duration。
 * @return {void}
 */
/**
 * @method close(item) 关闭某条消息
 * @static
 * @public
 * @param  {object} item 需要关闭的消息对象
 * @return {void}
 */
/**
 * @method closeAll() 关闭所有消息
 * @static
 * @public
 * @return {void}
 */
METHODS.forEach((method) => Toast[method] = toast[method].bind(toast));
/* harmony default export */ __webpack_exports__["a"] = (Toast);


/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    class: _vm.$style.root,
    attrs: {
      "role": _vm.position
    }
  }, _vm._l((_vm.list), function(item) {
    return _c('div', {
      class: _vm.$style.item,
      attrs: {
        "role": _vm.showState
      }
    }, [_vm._v("\n        " + _vm._s(item.message) + "\n        "), _c('a', {
      class: _vm.$style.close,
      on: {
        "click": function($event) {
          _vm.close(item)
        }
      }
    })])
  })) : _vm._e()
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(269);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("ea062d40", content, true);

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1wmZcesOMOFlntU_{background-color:#67aaf5;color:#fff;display:inline-block;padding:0 5px;height:32px;line-height:32px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid transparent;white-space:nowrap}._1wmZcesOMOFlntU_[role=gray]{background-color:#e4e8f1;border-color:#e4e8f1;color:#48576a}._1wmZcesOMOFlntU_[role=primary]{background-color:rgba(32,160,255,.1);border-color:rgba(32,160,255,.2);color:#20a0ff}._1wmZcesOMOFlntU_[role=success]{background-color:rgba(18,206,102,.1);border-color:rgba(18,206,102,.2);color:#13ce66}._1wmZcesOMOFlntU_[role=warning]{background-color:rgba(247,186,41,.1);border-color:rgba(247,186,41,.2);border-color:#f7ba2a}._1wmZcesOMOFlntU_[range=error]{background-color:rgba(255,73,73,.1);border-color:rgba(255,73,73,.2);color:#ff4949}._1wmZcesOMOFlntU_{position:relative;right:0;top:2px;line-height:1;cursor:pointer}._1wmZcesOMOFlntU_:hover{color:#888}._1wmZcesOMOFlntU_:before{content:\"\\D7\";padding-left:5px;font-size:20px}.tag-enter-active,.tag-leave-active{-webkit-transition:all .3s cubic-bezier(.55,0,.1,1);-o-transition:all .3s cubic-bezier(.55,0,.1,1);transition:all .3s cubic-bezier(.55,0,.1,1)}.tag-enter,.tag-leave-active{opacity:0;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0)}", ""]);

// exports
exports.locals = {
	"root": "_1wmZcesOMOFlntU_",
	"close": "_1wmZcesOMOFlntU_"
};

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @class Tag
 * @extend Base
 * @param {boolean=false}                          options.closeable           => 是否显示删除
 * @param {string}                                 options.color               => 背景颜色
 * @param {gray|primary|success|warning|error}     options.type                => 类型
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-tag',
    props: {
        closeable: Boolean,
        color: String,
        type: String,
    },
    data() {
        return {
            visible: true,
        };
    },
    methods: {
        handleClose(event) {
            this.visible = false;
            this.$emit('close', event);
        },
    },
});


/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "tag"
    }
  }, [(_vm.visible) ? _c('span', {
    class: _vm.$style.root,
    style: ({
      background: _vm.color
    }),
    attrs: {
      "role": _vm.type
    }
  }, [_vm._t("default"), (_vm.closeable) ? _c('i', {
    class: _vm.$style.close,
    on: {
      "click": _vm.handleClose
    }
  }) : _vm._e()], 2) : _vm._e()])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_664583ba_preserveWhitespace_false_index_html__ = __webpack_require__(276);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(273);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_664583ba_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(274);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("4e5106dc", content, true);

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3FmV34NHchkaC878{display:inline-block;vertical-align:middle}._3FmV34NHchkaC878[disabled]{background:#eee;border:1px solid #d3d6de}._3FmV34NHchkaC878{padding-left:10px;padding-right:28px;border-radius:3px;line-height:38px;max-width:208px;margin:3px 0 3px 6px;width:35px;height:100%;right:0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);text-align:center}._3FmV34NHchkaC878:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #9dabc2;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}._3FmV34NHchkaC878:after,._3FmV34NHchkaC878[role=up]:after{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;-o-transition:transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}._3FmV34NHchkaC878[role=up]:after{-webkit-transform:translateY(-50%) rotate(-180deg);-ms-transform:translateY(-50%) rotate(-180deg);transform:translateY(-50%) rotate(-180deg)}._3FmV34NHchkaC878{margin-top:2px;width:100%;position:absolute;top:100%;left:0;z-index:100;overflow-x:hidden;overflow-y:auto;max-height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 0;background:#fff;color:#555;border-radius:4px;border:1px solid #d2d6de;list-style:none;margin:0;padding:3px 14px;color:#777;cursor:pointer;position:relative}._3FmV34NHchkaC878[divider]{margin:9px 0;padding:0;height:1px;background:#e5e5e5;overflow:hidden;cursor:default}._3FmV34NHchkaC878[disabled]{cursor:not-allowed;color:#999}._3FmV34NHchkaC878:hover{background:#f4f4f4;color:#444}._3FmV34NHchkaC878[role=z-sel]{background:#67aaf5;color:#fff}", ""]);

// exports
exports.locals = {
	"root": "_3FmV34NHchkaC878",
	"head": "_3FmV34NHchkaC878",
	"tiptext": "_3FmV34NHchkaC878",
	"wraptag": "_3FmV34NHchkaC878",
	"tag": "_3FmV34NHchkaC878",
	"icon": "_3FmV34NHchkaC878",
	"body": "_3FmV34NHchkaC878",
	"listview": "_3FmV34NHchkaC878",
	"listitem": "_3FmV34NHchkaC878"
};

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__u_tag_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_event_js__ = __webpack_require__(18);



/**
 * @class MultiSelect
 * @extend Base
 * @param {Array}                   options.options             => 下拉菜单列表
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {width|string|number}     options.width               => 输入框长度
 */
const MultiSelect = {
    name: 'u-multi-select',
    props: {
        options: Array,
        readonly: Boolean,
        disabled: Boolean,
        visible: { type: Boolean, default: true },
        width: { type: [String, Number], default: '240' },
        value: Array,
    },
    data() {
        return {
            open: false,
            optionsData: this.initOptionsData(),
            selFlag: this.initSelFlag(),
            closeable: true,
        };
    },
    created() {
        __WEBPACK_IMPORTED_MODULE_1__util_event_js__["a" /* default */].addHandler(document, 'click', this.fadeOut.bind(this));
    },
    computed: {
        selItems() {
            const selItem = [];
            this.value.forEach((item) => {
                this.options.forEach((option) => {
                    if (option.value === item)
                        selItem.push(option);
                });
            });
            return selItem;
        },
    },
    methods: {
        toggle(value) {
            if (this.disabled)
                return;
            if (value)
                this.open = value;
            else
                this.open = !this.open;
        },
        select(event, index) {
            if (this.readonly)
                return;
            if (this.options[index].disabled || this.options[index].divider) {
                event.stopPropagation();
                return false;
            }

            if (this.value.indexOf(this.options[index].value) === -1)
                this.value.push(this.options[index].value);
            else
                this.value.splice(this.value.indexOf(this.options[index].value), 1);

            /**
             * @event select 选中列表项时触发
             * @property {object} sender 事件发送对象
             * @property {object} selected 选中后的列表对象
             * @property {String} value 选中后的列表对象的值
             */
            this.$emit('select', {
                sender: this,
                selected: this.options[index],
                value: this.value,
            });
        },
        initSelFlag() {
            if (this.value.length === 0)
                return false;
            else
                return true;
        },
        initOptionsData() {
            this.options.forEach((item) => {
                if (this.value.indexOf(item.value) !== -1)
                    item.selected = true;
                else
                    item.selected = false;
            });
            return this.options;
        },
        close(index) {
            this.value.splice(index, 1);
        },
        fadeOut(event) {
            MultiSelect.opens.forEach((item, index) => {
                // 这个地方不能用stopPropagation来处理，因为展开一个Select的同时要收起其他Select
                const element = item.$refs.element;
                let element2 = event.target;
                while (element2) {
                    if (element === element2)
                        return;
                    element2 = element2.parentElement;
                }
                item.toggle(false);
            });
        },
    },
    watch: {
        open(newValue) {
            const index = MultiSelect.opens.indexOf(this);
            if (newValue && index < 0)
                MultiSelect.opens.push(this);
            else if (!newValue && index > -1)
                MultiSelect.opens.splice(index, 1);
        },
        options(newValue) {
            this.optionsData = this.initOptionsData();
        },
        value(newValue) {
            this.selFlag = this.initSelFlag();
            this.optionsData = this.initOptionsData();
        },
    },
};

// MultiSelect 类的静态属性 用来保存当前处于open状态的MultiSelect对象
MultiSelect.opens = [];

/* harmony default export */ __webpack_exports__["a"] = (MultiSelect);


/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    ref: "element",
    class: _vm.$style.root,
    style: ({
      width: _vm.width + 'px'
    }),
    attrs: {
      "readonly": _vm.readonly
    },
    on: {
      "click": function($event) {
        _vm.toggle()
      }
    }
  }, [_c('div', {
    class: _vm.$style.head,
    attrs: {
      "disabled": _vm.disabled
    }
  }, [(!_vm.selFlag) ? _c('span', {
    class: _vm.$style.tiptext
  }, [_vm._v("请选择")]) : _c('div', {
    class: _vm.$style.wraptag
  }, [_c('span', _vm._l((_vm.selItems), function(selItem, index) {
    return _c('u-tag', {
      key: selItem.value,
      class: _vm.$style.tag,
      attrs: {
        "closeable": _vm.closeable
      },
      on: {
        "close": function($event) {
          $event.stopPropagation();
          _vm.close(index)
        }
      }
    }, [_vm._v(_vm._s(selItem.name))])
  }))]), _c('i', {
    class: _vm.$style.icon,
    attrs: {
      "role": _vm.open ? 'up' : ''
    }
  })]), (_vm.open) ? _c('div', {
    class: _vm.$style.body
  }, [_c('ul', {
    class: _vm.$style.listview
  }, _vm._l((_vm.optionsData), function(item, index) {
    return _c('li', {
      class: _vm.$style.listitem,
      attrs: {
        "disabled": item.disabled,
        "role": item.selected ? 'z-sel' : ''
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select($event, index)
        }
      }
    }, [_c('span', {
      class: _vm.$style.listcontent
    }, [_vm._v(_vm._s(item.name))])])
  }))]) : _vm._e()]) : _vm._e()
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(280);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(278);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(279);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5cb0adf6", content, true);

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1FH_bsm3kRy46QZk{display:inline-block;position:relative;line-height:22px;height:22px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:$outline-base;width:44px;background:#ccc;color:#fff;position:absolute;left:2px;top:2px;border-radius:100px;width:18px;height:18px;background:#fff;display:block;text-align:right;margin:0 5px}._1FH_bsm3kRy46QZk[checked]{background:#67aaf5}._1FH_bsm3kRy46QZk[checked] ._1FH_bsm3kRy46QZk{left:24px;text-align:left}._1FH_bsm3kRy46QZk[width=wide]{width:54px}._1FH_bsm3kRy46QZk[width=wide][checked] ._1FH_bsm3kRy46QZk{left:34px}._1FH_bsm3kRy46QZk[disabled]{cursor:not-allowed;background:#eee}._1FH_bsm3kRy46QZk{-webkit-transition:background .2s;-o-transition:background .2s;transition:background .2s;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}._1FH_bsm3kRy46QZk[with-text]{width:54px}._1FH_bsm3kRy46QZk[with-text][checked] ._1FH_bsm3kRy46QZk{left:34px}._1FH_bsm3kRy46QZk[with-text] ._1FH_bsm3kRy46QZk:before{content:\"OFF\"}._1FH_bsm3kRy46QZk[with-text][checked] ._1FH_bsm3kRy46QZk:before{content:\"ON\"}", ""]);

// exports
exports.locals = {
	"root": "_1FH_bsm3kRy46QZk",
	"button": "_1FH_bsm3kRy46QZk",
	"text": "_1FH_bsm3kRy46QZk"
};

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_switch_vue__ = __webpack_require__(281);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_u_switch_vue__["a" /* default */]);


/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_66f1ccba_preserveWhitespace_false_index_html__ = __webpack_require__(285);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(282);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_66f1ccba_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(283);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6adce37e", content, true);

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1eXjUWzw0UtEvTwN{display:inline-block;position:relative;line-height:22px;height:22px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:$outline-base;width:44px;background:#ccc;color:#fff;position:absolute;left:2px;top:2px;border-radius:100px;width:18px;height:18px;background:#fff;display:block;text-align:right;margin:0 5px}._1eXjUWzw0UtEvTwN[checked]{background:#67aaf5}._1eXjUWzw0UtEvTwN[checked] ._1eXjUWzw0UtEvTwN{left:24px;text-align:left}._1eXjUWzw0UtEvTwN[width=wide]{width:54px}._1eXjUWzw0UtEvTwN[width=wide][checked] ._1eXjUWzw0UtEvTwN{left:34px}._1eXjUWzw0UtEvTwN[disabled]{cursor:not-allowed;background:#eee}", ""]);

// exports
exports.locals = {
	"root": "_1eXjUWzw0UtEvTwN",
	"button": "_1eXjUWzw0UtEvTwN",
	"text": "_1eXjUWzw0UtEvTwN"
};

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-switch',
    props: {
        value: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            value_: this.value,
        };
    },
    watch: {
        value(value) {
            this.value_ = value;
        },
    },
    methods: {
        change() {
            if (this.readonly || this.disabled)
                return;

            const oldValue = this.value_;
            this.value_ = !this.value_;

            this.$emit('input', this.value_);
            this.$emit('change', this.value_, oldValue);
            this.$emit('update:value', this.value_);
        },
    },
});


/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    class: _vm.$style.root,
    attrs: {
      "checked": _vm.value_,
      "disabled": _vm.disabled,
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        _vm.change()
      },
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) { return null; }
        $event.preventDefault();
      },
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "space", 32)) { return null; }
        $event.preventDefault();
        _vm.change()
      }
    }
  }, [_c('span', {
    class: _vm.$style.button
  }), _c('span', {
    class: _vm.$style.text
  }, [_vm._t("default")], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_fe3a4354_preserveWhitespace_false_index_html__ = __webpack_require__(290);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(287);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_fe3a4354_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(288);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("56d109c2", content, true);

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2Kqv3I6QCNb3cBM_{bottom:30px;top:15px;left:100px;right:20px;font-size:0}._2Kqv3I6QCNb3cBM_[role=line-x]{left:0;right:-1px;border-top:1px solid #eee}._2Kqv3I6QCNb3cBM_[role=line-y]{top:-1px;bottom:-6px;border-left:1px solid #eee}._2Kqv3I6QCNb3cBM_{z-index:2}._2Kqv3I6QCNb3cBM_[role=axis-x]{left:100px;right:19px;bottom:0;height:30px;border-top:1px solid #ccc}._2Kqv3I6QCNb3cBM_[role=axis-y]{left:0;top:14px;bottom:30px;width:100px;border-right:1px solid #ccc}._2Kqv3I6QCNb3cBM_{left:-50%;text-align:center;display:block;position:relative}._2Kqv3I6QCNb3cBM_[role=label-x]{top:6px;bottom:0;text-align:left;width:40px}._2Kqv3I6QCNb3cBM_[role=label-y]{left:0;right:10px;text-align:right}._2Kqv3I6QCNb3cBM_[role=label-xName]{right:-50px;top:6px;bottom:0}._2Kqv3I6QCNb3cBM_[role=label-yName]{right:10px;top:-30px;text-align:right}._2Kqv3I6QCNb3cBM_{bottom:0;width:60px;left:0;margin-left:0;background:hsla(5,77%,71%,.3);border:2px solid hsla(5,77%,71%,.6);border-left:none;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:none;position:absolute;z-index:10;left:100%;top:0;margin-left:5px;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:200px;padding:4px 8px;font-size:12px;background:#333;color:#eee}._2Kqv3I6QCNb3cBM_:after{content:\"\";display:block;position:absolute;border:5px solid #333}._2Kqv3I6QCNb3cBM_[role=tooltip-right-top]{margin-left:5px}._2Kqv3I6QCNb3cBM_[role=tooltip-right-top]:after{top:10px;left:-5px;border-left:none;border-top-color:transparent;border-bottom-color:transparent}._2Kqv3I6QCNb3cBM_:hover ._2Kqv3I6QCNb3cBM_{display:block}._2Kqv3I6QCNb3cBM_[role=bar-stack]{border:none;background:none}._2Kqv3I6QCNb3cBM_[role=bar-static]{position:absolute;margin:0;display:inline-block}._2Kqv3I6QCNb3cBM_[role=bar-static]:first-of-type{border-color:hsla(5,77%,71%,.6);background:hsla(5,77%,71%,.3)}._2Kqv3I6QCNb3cBM_[role=bar-static]:nth-of-type(2){border-color:rgba(128,93,207,.6);background:rgba(128,93,207,.3)}._2Kqv3I6QCNb3cBM_[role=bar-static]:nth-of-type(3){border-color:rgba(64,204,202,.6);background:rgba(64,204,202,.3)}._2Kqv3I6QCNb3cBM_[role=bar-static]:nth-of-type(4){border-color:rgba(255,202,18,.6);background:rgba(255,202,18,.3)}._2Kqv3I6QCNb3cBM_[role=bar-static]:nth-of-type(5){border-color:rgba(48,168,220,.6);background:rgba(48,168,220,.3)}._2Kqv3I6QCNb3cBM_[role=bar-static]:nth-of-type(6){border-color:rgba(225,174,246,.6);background:rgba(225,174,246,.3)}._2Kqv3I6QCNb3cBM_[role=bar-static]:nth-of-type(7){border-color:hsla(0,0%,82%,.6);background:hsla(0,0%,82%,.3)}._2Kqv3I6QCNb3cBM_[role=bar-static]:nth-of-type(8){border-color:rgba(188,224,90,.6);background:rgba(188,224,90,.3)}", ""]);

// exports
exports.locals = {
	"root": "_2Kqv3I6QCNb3cBM_",
	"grid": "_2Kqv3I6QCNb3cBM_",
	"layer": "_2Kqv3I6QCNb3cBM_",
	"line": "_2Kqv3I6QCNb3cBM_",
	"axis": "_2Kqv3I6QCNb3cBM_",
	"xlabel": "_2Kqv3I6QCNb3cBM_",
	"ylabel": "_2Kqv3I6QCNb3cBM_",
	"label": "_2Kqv3I6QCNb3cBM_",
	"piece": "_2Kqv3I6QCNb3cBM_",
	"bar": "_2Kqv3I6QCNb3cBM_",
	"tooltip": "_2Kqv3I6QCNb3cBM_"
};

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_utils_js__ = __webpack_require__(53);


/**
 * @class BarChart
 * @extends Chart
 * @param {Object}                  options                     =  绑定属性
 * @param {string='100%'}           options.width               => 图表宽度
 * @param {string='480px'}          options.height              => 图表高度
 * @param {string=''}               options.title               => 标题
 * @param {string=''}               options.titleTemplate      @=> 标题模板
 * @param {string=''}               options.tooltipTemplate    @=> 工具提示模板
 * @param {Array}                   options.data                => 数据。如果为`undefined`，表示数据正在加载；如果为`[]`，表示数据为空。
 * @param {Object}                  options.xAxis               => 横坐标信息
 * @param {Object}                  options.yAxis               => 纵坐标信息
 * @param {Array=[]}                options.series              => 序列信息
 * @param {boolean=false}           options.border              => 是否显示边框
 * @param {boolean=true}            options.legend              => 是否显示图例
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-xbar-chart',
    props: {
        data: Array,
        title: String,
        titleTemplate: String,
        tooltipTemplate: String,
        caption: String,
        captionTemplate: String,
        series: Array,
        border: Boolean,
        legend: Boolean,
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '480px',
        },
        xAxis: Object,
        xLabelTemplate: String,
        yAxis: Object,
        stack: [String, Boolean],
        order: { type: String, default: 'desc' },
    },
    data() {
        return {
            xAxis_: { data: [] },
            yAxis_: { data: [] },
            chartData: this.initChartData(),
        };
    },
    created() {
        this.draw();
    },
    watch: {
        data(newValue) {
            this.chartData = this.initChartData();
            this.draw();
        },
    },
    methods: {
        draw() {
            if (!this.chartData || !this.chartData.length)
                return;

            // 堆叠模式
            // if (this.stack) {
            this.chartData.forEach((item) => {
                if (item.total !== undefined)
                    return;

                item.total = 0;
                this.series.forEach((sery) => item.total += item[sery.key]);
            });
            // }

            if (this.stack) {
                this.chartData.forEach((item) => {
                    this.series.forEach((sery, index) => {
                        if (index === 0) {
                            item['part' + index] = 0;
                            item['part' + (index + 1)] = item[sery.key] / item.total;
                        } else if (index !== this.series.length - 1)
                            item['part' + (index + 1)] = item['part' + index] + item[sery.key] / item.total;
                    });
                });
            }

            // 此处对data数据进行排序处理 默认降序 升序 按原始数据排序三种
            if (this.order === 'desc')
                this.chartData.sort(this.sortDesc);
            else if (this.order === 'asc')
                this.chartData.sort(this.sortAsc);

            //
            // 确定纵坐标
            //
            {
                const yAxis_ = this.yAxis_;

                yAxis_.count = this.yAxis.count || 12;
                // 柱状图数据全部显示，暂不考虑收缩间隔的情况
                yAxis_.data = this.chartData.map((item) => item[this.yAxis.key]);
            }

            //
            // 确定横坐标
            //
            {
                const xAxis_ = this.xAxis_;

                // 如果没有设置最小值和最大值，则寻找
                if (this.xAxis.min !== undefined)
                    xAxis_.min = this.xAxis.min;
                else if (this.stack)
                    xAxis_.min = Math.min(...this.chartData.map((item) => item.total));
                else {
                    xAxis_.min = Math.min(...this.series.map((sery) =>
                        Math.min(...this.chartData.map((item) => item[sery.key]))
                    ));
                }
                if (this.xAxis.max !== undefined)
                    xAxis_.max = this.xAxis.max;
                else if (this.stack)
                    xAxis_.max = Math.max(...this.chartData.map((item) => item.total));
                else {
                    xAxis_.max = Math.max(...this.series.map((sery) =>
                        Math.max(...this.chartData.map((item) => item[sery.key]))
                    ));
                }

                xAxis_.count = this.xAxis.count || 8;
                const tick = this.roundToFirst((xAxis_.max - xAxis_.min) / xAxis_.count) || 1;
                xAxis_.min = Math.floor(xAxis_.min / tick) * tick;
                xAxis_.max = Math.ceil(xAxis_.max / tick) * tick;

                // 如果最小值和最大值相等，则强行区分
                if (xAxis_.min === xAxis_.max)
                    xAxis_.max = xAxis_.min + xAxis_.count;

                xAxis_.data = [];
                for (let i = xAxis_.min; i <= xAxis_.max; i += tick)
                    xAxis_.data.push(i);
            }
        },
        format(value) {
            return value;
        },
        roundToFirst(num) {
            if (num >= 1) {
                const power = Math.pow(10, String(Math.round(num)).length - 1);
                return Math.round(num / power) * power;
            } else if (num > 0)
                return +num.toFixed(String(num).match(/^0\.0*/)[0].length - 1);
            else // 不解决0或负数
                return num;
        },
        initChartData() {
            return __WEBPACK_IMPORTED_MODULE_0__util_utils_js__["a" /* default */].deepcopy([], this.data);
        },
        sortAsc(value1, value2) {
            return value1.total - value2.total;
        },
        sortDesc(value1, value2) {
            return value1.total - value2.total;
        },
    },
});


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-chart', {
    class: _vm.$style.root,
    attrs: {
      "title": _vm.title,
      "border": _vm.border,
      "width": _vm.width,
      "height": _vm.height,
      "legend": _vm.legend,
      "titleTemplate": _vm.titleTemplate,
      "tooltipTemplate": _vm.tooltipTemplate,
      "series": _vm.series,
      "data": _vm.data
    }
  }, [_c('div', {
    class: _vm.$style.grid
  }, [_vm._l((_vm.xAxis_.data), function(xLabel, index) {
    return _c('div', {
      class: _vm.$style.line,
      style: ({
        left: 100 * index / (_vm.xAxis_.data.length - 1) + '%'
      }),
      attrs: {
        "role": "line-y"
      }
    })
  }), _vm._l((_vm.yAxis_.data), function(yLabel, index) {
    return _c('div', {
      class: _vm.$style.line,
      style: ({
        bottom: 100 * index / (_vm.yAxis_.data.length) + '%'
      }),
      attrs: {
        "role": "line-x"
      }
    })
  }), _c('div', {
    class: _vm.$style.line,
    staticStyle: {
      "bottom": "100%"
    },
    attrs: {
      "role": "line-x"
    }
  })], 2), _c('div', {
    class: _vm.$style.axis,
    attrs: {
      "role": "axis-x"
    }
  }, [_vm._l((_vm.xAxis_.data), function(xLabel, index) {
    return _c('div', {
      class: _vm.$style.label,
      style: ({
        left: 100 * index / (_vm.xAxis_.data.length - 1) + '%'
      }),
      attrs: {
        "role": "label-x",
        "title": xLabel
      }
    }, [_vm._t("xLabelTemplate", [_c('div', {
      class: _vm.$style.xlabel
    }, [_vm._v(_vm._s(xLabel))])])], 2)
  }), _c('div', {
    class: _vm.$style.label,
    attrs: {
      "role": "label-xName"
    }
  }, [_vm._v(_vm._s(_vm.xAxis.name))])], 2), _c('div', {
    class: _vm.$style.axis,
    attrs: {
      "role": "axis-y"
    }
  }, [_vm._l((_vm.yAxis_.data), function(yLabel, index) {
    return _c('div', {
      class: _vm.$style.label,
      style: ({
        bottom: 100 * index / (_vm.yAxis_.data.length) + '%',
        height: 100 / _vm.yAxis_.data.length + '%'
      }),
      attrs: {
        "role": "label-y",
        "title": yLabel
      }
    }, [_c('span', {
      class: _vm.$style.ylabel
    }, [_vm._v(_vm._s(_vm.format(yLabel)))])])
  }), _c('div', {
    class: _vm.$style.label,
    attrs: {
      "role": "label-yName"
    }
  }, [_vm._v(_vm._s(_vm.yAxis.name))])], 2), _c('div', {
    class: _vm.$style.layer
  }, _vm._l((_vm.chartData), function(item, index) {
    return _c('div', {
      class: _vm.$style.piece,
      style: ({
        top: 100 * (1 - (index + 1) / _vm.chartData.length) + '%',
        height: 100 / _vm.chartData.length + '%',
        width: 100 * (item.total - _vm.xAxis_.min) / _vm.xAxis_.max + '%'
      })
    }, _vm._l((_vm.series), function(sery) {
      return (!_vm.stack) ? _c('div', {
        class: _vm.$style.bar,
        style: ({
          height: 80 + '%',
          width: 100 + '%'
        })
      }, [_c('div', {
        class: _vm.$style.value
      }, [_vm._v(_vm._s(_vm.format(item[sery.key])))]), _c('div', {
        class: _vm.$style.tooltip,
        attrs: {
          "role": "tooltip-right-top"
        }
      }, [_vm._t("tooltipTemplate", [_vm._v("\n                        " + _vm._s(sery.name || sery.key) + ": " + _vm._s(_vm.format(item[sery.key])) + "\n                    ")])], 2)]) : _c('div', {
        class: _vm.$style.bar,
        style: ({
          height: 80 + '%',
          width: 100 + '%'
        }),
        attrs: {
          "role": "bar-stack"
        }
      }, [_vm._l((_vm.series), function(sery, seryindex) {
        return (item[sery.key]) ? _c('div', {
          class: _vm.$style.bar,
          style: ({
            width: 100 * (item[sery.key]) / item.total + '%',
            height: 100 + '%',
            left: 100 * item['part' + seryindex] + '%'
          }),
          attrs: {
            "role": "bar-static"
          }
        }) : _vm._e()
      }), _c('div', {
        class: _vm.$style.tooltip,
        attrs: {
          "role": "tooltip-right-top"
        }
      }, [_vm._t("tooltipTemplate", _vm._l((_vm.series), function(sery) {
        return _c('div', [_vm._v(_vm._s(sery.name || sery.key) + ": " + _vm._s(_vm.format(item[sery.key])))])
      }))], 2)], 2)
    }))
  }))])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_05010dcc_preserveWhitespace_false_index_html__ = __webpack_require__(295);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(292);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_05010dcc_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("37c17131", content, true);

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @class Blank
 * @extends Base
 * @param {string=block}           display                     定义元素的显示方式 是块状方式
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-blank',
    props: {
        display: { type: String, default: 'block' },
    },
});


/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      display: _vm.display
    })
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("c1367c86", content, true);

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports
exports.locals = {
	"root": "_1i-50xTOpc0vU3Aa"
};

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator__);


/**
 * @class Validation
 * @extends Component
 * @param {Object}                  options.data                     =  绑定属性
 * @param {boolean=false}           options.data.disabled            => 是否禁用。当禁用时，验证始终通过。
 */
const Validation = {
    name: 'u-validation',
    props: {
        disabled: { type: Boolean, default: false },
    },
    data() {
        return {
            fields: [],
        };
    },
    methods: {
        /**
         * @method validate() 验证所有内部的表单域
         * @public
         * @return {void}
         */
        validate() {
            if (this.disabled) {
                return {
                    success: true,
                    message: 'Validation is disabled.',
                };
            }

            const conclusion = {
                results: [],
                success: true,
                message: '',
            };

            let restCount = this.fields.length;

            const final = () => {
                if (restCount === 0) {
                    /**
                     * @event validate 验证表单时触发
                     * @property {object} sender 事件发送对象
                     * @property {boolean} success 验证是否通过
                     * @property {string} message 验证不通过时的消息
                     * @property {object} results 每个表单域的结果
                     */
                    this.$emit('validate', Object.assign({
                        sender: this,
                    }, conclusion));
                }
            };

            final();
            const done = function (result) {
                delete result.sender;
                conclusion.results.push(result);
                if (!result.success) {
                    conclusion.success = false;
                    conclusion.message = conclusion.message || result.message;
                }

                restCount--;
                final();
            };

            // 这里用$once的方法是由于使用使用一次就会注销 不然会执行很多次validate的
            this.fields.forEach((field) =>
                field.$once('validate', done.bind(this)).validate());
        },
    },
};

/**
 * @method validate(value,rules,callback) 根据规则验证单个值
 * @static
 * @public
 * @param {var} value 待验证的值，会自动转为string类型
 * @param {Object} rules 验证规则集
 * @callback {object} result 验证结果
 * @callback {boolean} result.success 验证是否正确
 * @callback {string} result.message 验证不通过时的消息
 * @callback {object} result.firstRule 第一条验证不通过的规则
 */
Validation.validate = function (value, rules, callback) {
    const result = {
        success: true,
        message: '',
    };

    value = __WEBPACK_IMPORTED_MODULE_0_validator___default.a.toString(value);

    let restCount = rules.length;

    const final = () => restCount === 0 && callback && callback(result);

    final();
    const done = function (success) {
        const rule = this;

        if (!success) {
            result.success = false;
            result.firstRule = rule;
            result.message = rule.message;

            callback && callback(result);
        } else {
            restCount--;
            final();
        }
    };

    for (let i = 0; i < rules.length; i++) {
        if (!result.success)
            break;

        const rule = rules[i];
        // 在value为空情况下，只有`isRequired`会阻止，其他类型都通过。
        if (rule.type === 'isRequired')
            done.call(rule, !!value);
        else if (!value)
            done.call(rule, true);
        else if (rule.type === 'isFilled')
            done.call(rule, !!value.trim());
        else if (rule.type === 'is')
            done.call(rule, rule.options.test(value));
        else if (rule.type === 'isNot')
            done.call(rule, !rule.options.test(value));
        else if (rule.type === 'method')
            done.call(rule, !!rule.options(value));
        else if (rule.type === 'async')
            rule.options && rule.options(value, done.bind(rule));
        else
            done.call(rule, __WEBPACK_IMPORTED_MODULE_0_validator___default.a[rule.type](value, rule.options));
    }
};

Validation.validator = __WEBPACK_IMPORTED_MODULE_0_validator___default.a;

/* harmony default export */ __webpack_exports__["a"] = (Validation);


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toDate = __webpack_require__(29);

var _toDate2 = _interopRequireDefault(_toDate);

var _toFloat = __webpack_require__(58);

var _toFloat2 = _interopRequireDefault(_toFloat);

var _toInt = __webpack_require__(300);

var _toInt2 = _interopRequireDefault(_toInt);

var _toBoolean = __webpack_require__(301);

var _toBoolean2 = _interopRequireDefault(_toBoolean);

var _equals = __webpack_require__(302);

var _equals2 = _interopRequireDefault(_equals);

var _contains = __webpack_require__(303);

var _contains2 = _interopRequireDefault(_contains);

var _matches = __webpack_require__(304);

var _matches2 = _interopRequireDefault(_matches);

var _isEmail = __webpack_require__(59);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isURL = __webpack_require__(305);

var _isURL2 = _interopRequireDefault(_isURL);

var _isMACAddress = __webpack_require__(306);

var _isMACAddress2 = _interopRequireDefault(_isMACAddress);

var _isIP = __webpack_require__(61);

var _isIP2 = _interopRequireDefault(_isIP);

var _isFQDN = __webpack_require__(31);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isBoolean = __webpack_require__(307);

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isAlpha = __webpack_require__(308);

var _isAlpha2 = _interopRequireDefault(_isAlpha);

var _isAlphanumeric = __webpack_require__(309);

var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

var _isNumeric = __webpack_require__(310);

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _isLowercase = __webpack_require__(311);

var _isLowercase2 = _interopRequireDefault(_isLowercase);

var _isUppercase = __webpack_require__(312);

var _isUppercase2 = _interopRequireDefault(_isUppercase);

var _isAscii = __webpack_require__(313);

var _isAscii2 = _interopRequireDefault(_isAscii);

var _isFullWidth = __webpack_require__(63);

var _isFullWidth2 = _interopRequireDefault(_isFullWidth);

var _isHalfWidth = __webpack_require__(64);

var _isHalfWidth2 = _interopRequireDefault(_isHalfWidth);

var _isVariableWidth = __webpack_require__(314);

var _isVariableWidth2 = _interopRequireDefault(_isVariableWidth);

var _isMultibyte = __webpack_require__(315);

var _isMultibyte2 = _interopRequireDefault(_isMultibyte);

var _isSurrogatePair = __webpack_require__(316);

var _isSurrogatePair2 = _interopRequireDefault(_isSurrogatePair);

var _isInt = __webpack_require__(317);

var _isInt2 = _interopRequireDefault(_isInt);

var _isFloat = __webpack_require__(318);

var _isFloat2 = _interopRequireDefault(_isFloat);

var _isDecimal = __webpack_require__(319);

var _isDecimal2 = _interopRequireDefault(_isDecimal);

var _isHexadecimal = __webpack_require__(65);

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

var _isDivisibleBy = __webpack_require__(320);

var _isDivisibleBy2 = _interopRequireDefault(_isDivisibleBy);

var _isHexColor = __webpack_require__(321);

var _isHexColor2 = _interopRequireDefault(_isHexColor);

var _isISRC = __webpack_require__(322);

var _isISRC2 = _interopRequireDefault(_isISRC);

var _isMD = __webpack_require__(323);

var _isMD2 = _interopRequireDefault(_isMD);

var _isJSON = __webpack_require__(324);

var _isJSON2 = _interopRequireDefault(_isJSON);

var _isEmpty = __webpack_require__(325);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isLength = __webpack_require__(326);

var _isLength2 = _interopRequireDefault(_isLength);

var _isByteLength = __webpack_require__(60);

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isUUID = __webpack_require__(327);

var _isUUID2 = _interopRequireDefault(_isUUID);

var _isMongoId = __webpack_require__(328);

var _isMongoId2 = _interopRequireDefault(_isMongoId);

var _isAfter = __webpack_require__(329);

var _isAfter2 = _interopRequireDefault(_isAfter);

var _isBefore = __webpack_require__(330);

var _isBefore2 = _interopRequireDefault(_isBefore);

var _isIn = __webpack_require__(331);

var _isIn2 = _interopRequireDefault(_isIn);

var _isCreditCard = __webpack_require__(332);

var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

var _isISIN = __webpack_require__(333);

var _isISIN2 = _interopRequireDefault(_isISIN);

var _isISBN = __webpack_require__(334);

var _isISBN2 = _interopRequireDefault(_isISBN);

var _isISSN = __webpack_require__(335);

var _isISSN2 = _interopRequireDefault(_isISSN);

var _isMobilePhone = __webpack_require__(336);

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _isCurrency = __webpack_require__(337);

var _isCurrency2 = _interopRequireDefault(_isCurrency);

var _isISO = __webpack_require__(338);

var _isISO2 = _interopRequireDefault(_isISO);

var _isBase = __webpack_require__(339);

var _isBase2 = _interopRequireDefault(_isBase);

var _isDataURI = __webpack_require__(340);

var _isDataURI2 = _interopRequireDefault(_isDataURI);

var _ltrim = __webpack_require__(66);

var _ltrim2 = _interopRequireDefault(_ltrim);

var _rtrim = __webpack_require__(67);

var _rtrim2 = _interopRequireDefault(_rtrim);

var _trim = __webpack_require__(341);

var _trim2 = _interopRequireDefault(_trim);

var _escape = __webpack_require__(342);

var _escape2 = _interopRequireDefault(_escape);

var _unescape = __webpack_require__(343);

var _unescape2 = _interopRequireDefault(_unescape);

var _stripLow = __webpack_require__(344);

var _stripLow2 = _interopRequireDefault(_stripLow);

var _whitelist = __webpack_require__(345);

var _whitelist2 = _interopRequireDefault(_whitelist);

var _blacklist = __webpack_require__(68);

var _blacklist2 = _interopRequireDefault(_blacklist);

var _isWhitelisted = __webpack_require__(346);

var _isWhitelisted2 = _interopRequireDefault(_isWhitelisted);

var _normalizeEmail = __webpack_require__(347);

var _normalizeEmail2 = _interopRequireDefault(_normalizeEmail);

var _toString = __webpack_require__(30);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '8.0.0';

var validator = {
  version: version,
  toDate: _toDate2.default,
  toFloat: _toFloat2.default,
  toInt: _toInt2.default,
  toBoolean: _toBoolean2.default,
  equals: _equals2.default,
  contains: _contains2.default,
  matches: _matches2.default,
  isEmail: _isEmail2.default,
  isURL: _isURL2.default,
  isMACAddress: _isMACAddress2.default,
  isIP: _isIP2.default,
  isFQDN: _isFQDN2.default,
  isBoolean: _isBoolean2.default,
  isAlpha: _isAlpha2.default,
  isAlphanumeric: _isAlphanumeric2.default,
  isNumeric: _isNumeric2.default,
  isLowercase: _isLowercase2.default,
  isUppercase: _isUppercase2.default,
  isAscii: _isAscii2.default,
  isFullWidth: _isFullWidth2.default,
  isHalfWidth: _isHalfWidth2.default,
  isVariableWidth: _isVariableWidth2.default,
  isMultibyte: _isMultibyte2.default,
  isSurrogatePair: _isSurrogatePair2.default,
  isInt: _isInt2.default,
  isFloat: _isFloat2.default,
  isDecimal: _isDecimal2.default,
  isHexadecimal: _isHexadecimal2.default,
  isDivisibleBy: _isDivisibleBy2.default,
  isHexColor: _isHexColor2.default,
  isISRC: _isISRC2.default,
  isMD5: _isMD2.default,
  isJSON: _isJSON2.default,
  isEmpty: _isEmpty2.default,
  isLength: _isLength2.default,
  isByteLength: _isByteLength2.default,
  isUUID: _isUUID2.default,
  isMongoId: _isMongoId2.default,
  isAfter: _isAfter2.default,
  isBefore: _isBefore2.default,
  isIn: _isIn2.default,
  isCreditCard: _isCreditCard2.default,
  isISIN: _isISIN2.default,
  isISBN: _isISBN2.default,
  isISSN: _isISSN2.default,
  isMobilePhone: _isMobilePhone2.default,
  isCurrency: _isCurrency2.default,
  isISO8601: _isISO2.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI2.default,
  ltrim: _ltrim2.default,
  rtrim: _rtrim2.default,
  trim: _trim2.default,
  escape: _escape2.default,
  unescape: _unescape2.default,
  stripLow: _stripLow2.default,
  whitelist: _whitelist2.default,
  blacklist: _blacklist2.default,
  isWhitelisted: _isWhitelisted2.default,
  normalizeEmail: _normalizeEmail2.default,
  toString: _toString2.default
};

exports.default = validator;
module.exports = exports['default'];

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(str, radix) {
  (0, _assertString2.default)(str);
  return parseInt(str, radix || 10);
}
module.exports = exports['default'];

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toBoolean;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toBoolean(str, strict) {
  (0, _assertString2.default)(str);
  if (strict) {
    return str === '1' || str === 'true';
  }
  return str !== '0' && str !== 'false' && str !== '';
}
module.exports = exports['default'];

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function equals(str, comparison) {
  (0, _assertString2.default)(str);
  return str === comparison;
}
module.exports = exports['default'];

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = __webpack_require__(30);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(str, elem) {
  (0, _assertString2.default)(str);
  return str.indexOf((0, _toString2.default)(elem)) >= 0;
}
module.exports = exports['default'];

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = matches;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matches(str, pattern, modifiers) {
  (0, _assertString2.default)(str);
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isURL;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _isFQDN = __webpack_require__(31);

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isIP = __webpack_require__(61);

var _isIP2 = _interopRequireDefault(_isIP);

var _merge = __webpack_require__(14);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  (0, _assertString2.default)(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = (0, _merge2.default)(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (options.allow_protocol_relative_urls && url.substr(0, 2) === '//') {
    split[0] = url.substr(2);
  }
  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!(0, _isIP2.default)(host) && !(0, _isFQDN2.default)(host, options) && (!ipv6 || !(0, _isIP2.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}
module.exports = exports['default'];

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMACAddress;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;

function isMACAddress(str) {
  (0, _assertString2.default)(str);
  return macAddress.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBoolean(str) {
  (0, _assertString2.default)(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}
module.exports = exports['default'];

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlpha;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlpha(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alpha) {
    return _alpha.alpha[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAlphanumeric;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _alpha = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  (0, _assertString2.default)(str);
  if (locale in _alpha.alphanumeric) {
    return _alpha.alphanumeric[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numeric = /^[-+]?[0-9]+$/;

function isNumeric(str) {
  (0, _assertString2.default)(str);
  return numeric.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLowercase;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLowercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toLowerCase();
}
module.exports = exports['default'];

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUppercase;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isUppercase(str) {
  (0, _assertString2.default)(str);
  return str === str.toUpperCase();
}
module.exports = exports['default'];

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAscii;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  (0, _assertString2.default)(str);
  return ascii.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVariableWidth;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _isFullWidth = __webpack_require__(63);

var _isHalfWidth = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isVariableWidth(str) {
  (0, _assertString2.default)(str);
  return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMultibyte;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  (0, _assertString2.default)(str);
  return multibyte.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSurrogatePair;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  (0, _assertString2.default)(str);
  return surrogatePair.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInt;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

  // Check min/max/lt/gt
  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
module.exports = exports['default'];

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var float = /^(?:[-+])?(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/;

function isFloat(str, options) {
  (0, _assertString2.default)(str);
  options = options || {};
  if (str === '' || str === '.') {
    return false;
  }
  return float.test(str) && (!options.hasOwnProperty('min') || str >= options.min) && (!options.hasOwnProperty('max') || str <= options.max) && (!options.hasOwnProperty('lt') || str < options.lt) && (!options.hasOwnProperty('gt') || str > options.gt);
}
module.exports = exports['default'];

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDecimal;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var decimal = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;

function isDecimal(str) {
  (0, _assertString2.default)(str);
  return str !== '' && decimal.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDivisibleBy;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _toFloat = __webpack_require__(58);

var _toFloat2 = _interopRequireDefault(_toFloat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDivisibleBy(str, num) {
  (0, _assertString2.default)(str);
  return (0, _toFloat2.default)(str) % parseInt(num, 10) === 0;
}
module.exports = exports['default'];

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHexColor;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

function isHexColor(str) {
  (0, _assertString2.default)(str);
  return hexcolor.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISRC;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
  (0, _assertString2.default)(str);
  return isrc.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMD5;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  (0, _assertString2.default)(str);
  return md5.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isJSON;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isJSON(str) {
  (0, _assertString2.default)(str);
  try {
    var obj = JSON.parse(str);
    return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  } catch (e) {/* ignore */}
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmpty(str) {
  (0, _assertString2.default)(str);
  return str.length === 0;
}
module.exports = exports['default'];

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isLength;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  (0, _assertString2.default)(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}
module.exports = exports['default'];

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUUID;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

  (0, _assertString2.default)(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMongoId;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _isHexadecimal = __webpack_require__(65);

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isMongoId(str) {
  (0, _assertString2.default)(str);
  return (0, _isHexadecimal2.default)(str) && str.length === 24;
}
module.exports = exports['default'];

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAfter;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = __webpack_require__(29);

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original > comparison);
}
module.exports = exports['default'];

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBefore;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _toDate = __webpack_require__(29);

var _toDate2 = _interopRequireDefault(_toDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  (0, _assertString2.default)(str);
  var comparison = (0, _toDate2.default)(date);
  var original = (0, _toDate2.default)(str);
  return !!(original && comparison && original < comparison);
}
module.exports = exports['default'];

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isIn;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _toString = __webpack_require__(30);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isIn(str, options) {
  (0, _assertString2.default)(str);
  var i = void 0;
  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];
    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = (0, _toString2.default)(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCreditCard;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  (0, _assertString2.default)(str);
  var sanitized = str.replace(/[- ]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports['default'];

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISIN;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  (0, _assertString2.default)(str);
  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });

  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = true;
  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}
module.exports = exports['default'];

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISBN;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  (0, _assertString2.default)(str);
  version = String(version);
  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }
  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i = void 0;
  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }
    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }
    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }
    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }
  return false;
}
module.exports = exports['default'];

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isISSN;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  (0, _assertString2.default)(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
  if (!testIssn.test(str)) {
    return false;
  }
  var issnDigits = str.replace('-', '');
  var position = 8;
  var checksum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = issnDigits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var digit = _step.value;

      var digitValue = digit.toUpperCase() === 'X' ? 10 : +digit;
      checksum += digitValue * position;
      --position;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return checksum % 11 === 0;
}
module.exports = exports['default'];

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobilePhone;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
var phones = {
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
  'da-DK': /^(\+?45)?(\d{8})$/,
  'el-GR': /^(\+?30)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
  'en-IN': /^(\+?91|0)?[789]\d{9}$/,
  'en-KE': /^(\+?254|0)?[7]\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)2\d{7,9}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'id-ID': /^(\+?62|0[1-9])[\s|\d]+$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'ja-JP': /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
  'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
  'zh-CN': /^(\+?0?86\-?)?1[345789]\d{9}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */

// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale) {
  (0, _assertString2.default)(str);
  if (locale in phones) {
    return phones[locale].test(str);
  } else if (locale === 'any') {
    return !!Object.values(phones).find(function (phone) {
      return phone.test(str);
    });
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}
module.exports = exports['default'];

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCurrency;

var _merge = __webpack_require__(14);

var _merge2 = _interopRequireDefault(_merge);

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currencyRegex(options) {
  var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*',
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?',
      decimal_amount = '(\\' + options.decimal_separator + '\\d{2})?';
  var pattern = whole_dollar_amount + decimal_amount;

  // default is negative sign before symbol, but there are two other options (besides parens)
  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  }

  // South African Rand, for example, uses R 123 (space) and R-123 (no space)
  if (options.allow_negative_sign_placeholder) {
    pattern = '( (?!\\-))?' + pattern;
  } else if (options.allow_space_after_symbol) {
    pattern = ' ?' + pattern;
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  }

  // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space
  return new RegExp('^(?!-? )(?=.*\\d)' + pattern + '$');
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  (0, _assertString2.default)(str);
  options = (0, _merge2.default)(options, default_currency_options);
  return currencyRegex(options).test(str);
}
module.exports = exports['default'];

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iso8601 = undefined;

exports.default = function (str) {
  (0, _assertString2.default)(str);
  return iso8601.test(str);
};

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = exports.iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBase64;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  (0, _assertString2.default)(str);
  var len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}
module.exports = exports['default'];

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataURI = /^\s*data:([a-z]+\/[a-z0-9\-\+]+(;[a-z\-]+=[a-z0-9\-]+)?)?(;base64)?,[a-z0-9!\$&',\(\)\*\+,;=\-\._~:@\/\?%\s]*\s*$/i; // eslint-disable-line max-len

function isDataURI(str) {
  (0, _assertString2.default)(str);
  return dataURI.test(str);
}
module.exports = exports['default'];

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _rtrim = __webpack_require__(67);

var _rtrim2 = _interopRequireDefault(_rtrim);

var _ltrim = __webpack_require__(66);

var _ltrim2 = _interopRequireDefault(_ltrim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trim(str, chars) {
  return (0, _rtrim2.default)((0, _ltrim2.default)(str, chars), chars);
}
module.exports = exports['default'];

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
  (0, _assertString2.default)(str);
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}
module.exports = exports['default'];

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unescape;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unescape(str) {
  (0, _assertString2.default)(str);
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#96;/g, '`');
}
module.exports = exports['default'];

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripLow;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

var _blacklist = __webpack_require__(68);

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stripLow(str, keep_new_lines) {
  (0, _assertString2.default)(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return (0, _blacklist2.default)(str, chars);
}
module.exports = exports['default'];

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = whitelist;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function whitelist(str, chars) {
  (0, _assertString2.default)(str);
  return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
}
module.exports = exports['default'];

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isWhitelisted;

var _assertString = __webpack_require__(2);

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWhitelisted(str, chars) {
  (0, _assertString2.default)(str);
  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}
module.exports = exports['default'];

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeEmail;

var _isEmail = __webpack_require__(59);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _merge = __webpack_require__(14);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,

  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,

  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,

  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,

  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
};

// List of domains used by iCloud
var icloud_domains = ['icloud.com', 'me.com'];

// List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com'];

// List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com'];

function normalizeEmail(email, options) {
  options = (0, _merge2.default)(options, default_normalize_email_options);

  if (!(0, _isEmail2.default)(email)) {
    return false;
  }

  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain];

  // The domain is always lowercased, as it's case-insensitive per RFC 1035
  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (options.gmail_remove_dots) {
      parts[0] = parts[0].replace(/\./g, '');
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (~icloud_domains.indexOf(parts[1])) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~outlookdotcom_domains.indexOf(parts[1])) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (~yahoo_domains.indexOf(parts[1])) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }
  return parts.join('@');
}
module.exports = exports['default'];

/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5b0eddb5", content, true);

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports
exports.locals = {
	"root": "_25Wbktu5JVVb-lej"
};

/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__u_validation_vue__ = __webpack_require__(57);


/**
 * @class Field
 * @extends Component
 * @param {Object}                  options.data                     =  绑定属性
 * @param {string=''}               options.data.value              <=> 表单域的值
 * @param {string=''}               options.data.state              <=> 表单域的状态
 * @param {string=''}               options.data.tip                <=> 小贴示
 * @param {Object[]=[]}             options.data.rules               => 验证规则集
 * @param {boolean=false}           options.data.readonly            => 是否只读
 * @param {boolean=false}           options.data.disabled            => 是否禁用
 * @param {boolean=true}            options.data.visible             => 是否显示
 */
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-field',
    /**
     * @protected
     * @override
     */
    props: {
        rules: Array,
        tipInfo: String,
        value: [String, Number, Boolean],
        status: { type: String, default: '' },
    },
    data() {
        return {
            // value: '',
            state: this.status,
            tip: '',
            compositionInputing: false,
            showValue: this.value,
        };
    },
    created() {
        let parentEl = this.$parent;
        while (parentEl) {
            if (parentEl.$options.name === 'u-validation') {
                parentEl.fields.push(this);
                break;
            }
            parentEl = parentEl.$parent;
        }
    },
    /**
     * @protected
     * @override
     */
    destroyed() {
        if (this.$parent && this.$parent.$options.name === 'u-validation') {
            // 从$parent组件的列表中删除自己
            const index = this.$parent.fields.indexOf(this);
            ~index && this.$parent.fields.splice(index, 1);
        }
    },
    methods: {
        /**
         * @method validate(trigger) 根据`rules`验证表单域的值是否正确
         * @public
         * @param {string='submit'} trigger 验证触发方式
         * @return {void}
         */
        validate(trigger = 'submit') {
            const value = this.showValue;
            if (!this.rules)
                return;
            const rules = this.rules.filter((rule) => (rule.trigger + '+submit').includes(trigger));

            this.state = 'validating';
            __WEBPACK_IMPORTED_MODULE_0__u_validation_vue__["a" /* default */].validate(value, rules, (result) => {
                // @TODO
                if (result.firstRule && !(result.firstRule.mute || '').includes(trigger))
                    this.tip = result.message;
                else
                    this.tip = '';

                this.state = result.success ? 'success' : 'error';

                /**
                 * @event validate 验证表单域时触发
                 * @property {object} sender 事件发送对象
                 * @property {string} trigger 验证触发方式
                 * @property {boolean} success 验证是否通过
                 * @property {string} message 验证不通过时的消息
                 * @property {object} firstRule 第一条验证不通过的规则
                 */
                this.$emit('validate', Object.assign({
                    sender: this,
                    trigger,
                }, result));
            });
        },
    },
    watch: {
        tipInfo(newValue) {
            this.tip = newValue;
        },
        value(newValue) {
            this.showValue = newValue;
        },
        status(newValue) {
            this.state = newValue;
        },
    },
});


/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.$style.root
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_1eb630fd_preserveWhitespace_false_index_html__ = __webpack_require__(357);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(354);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_1eb630fd_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(355);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("eca126cc", content, true);

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3Y1AF7jEZWuWHff_{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;vertical-align:middle;padding:6px 12px;border:1px solid #d2d6de;color:#666;background:#fff;border-radius:3px;font-size:14px;line-height:28px;height:34px}._3Y1AF7jEZWuWHff_:focus{outline:none;background:#fff;color:#666;border:1px solid #67aaf5}._3Y1AF7jEZWuWHff_[role=error]{color:#dd4d39;border-color:#dd4b39}._3Y1AF7jEZWuWHff_{margin-left:4px;display:inline-block;padding:0 6px;background:#f4f4f4;border-radius:2px}._3Y1AF7jEZWuWHff_[role=error]{background:#fcedeb;color:#dd4b39}._3Y1AF7jEZWuWHff_{position:relative;right:40px}._3Y1AF7jEZWuWHff_[disabled]{cursor:not-allowed;background:#eee;border:1px solid #d3d6de;color:#999}", ""]);

// exports
exports.locals = {
	"root": "_3Y1AF7jEZWuWHff_",
	"input": "_3Y1AF7jEZWuWHff_",
	"tip": "_3Y1AF7jEZWuWHff_",
	"unit": "_3Y1AF7jEZWuWHff_"
};

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__u_field_vue__ = __webpack_require__(69);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-input-field',
    mixins: [__WEBPACK_IMPORTED_MODULE_0__u_field_vue__["a" /* default */]],
    props: {
        name: String,
        visible: { type: Boolean, default: true },
        type: { type: String, default: 'text' },
        placeholder: String,
        maxlength: String,
        autofocus: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        width: { type: String, default: '160' },
        disabled: { type: Boolean, default: false },
        unit: String,
    },
    methods: {
        /**
         * @private
         */
        onInput($event) {
            // this.$refs.input.value = $event.target.value;
            this.showValue = $event.target.value;
            // setTimeout(() => !this.compositionInputing && this.validate('input'));wei
            // 为保证可以实现所有项内容正确可点 确保在inputfield组件的input事件中对所有inputfield的状态进行验证 所以emit事件语句必须在验证validate方法之后调用
            if (!this.compositionInputing)
                this.validate('input');
            this.$emit('input', $event.target.value);
        },
        /**
         * @private
         */
        onFocus($event) {
            this.state = this.status;
            this.tip = this.tipInfo;
            this.$emit('focus', $event);
        },
        /**
         * @private
         */
        onBlur($event) {
            this.validate('blur');
            this.$emit('blur', $event);
        },
    },
});


/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('span', {
    class: _vm.$style.root
  }, [_c('input', _vm._b({
    ref: "input",
    class: _vm.$style.input,
    style: ({
      width: _vm.width + 'px'
    }),
    attrs: {
      "role": _vm.state,
      "name": _vm.name,
      "type": _vm.type,
      "placeholder": _vm.placeholder,
      "maxlength": _vm.maxlength,
      "autofocus": _vm.autofocus,
      "readonly": _vm.readonly,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.showValue
    },
    on: {
      "compositionstart": function($event) {
        _vm.compositionInputing = true
      },
      "compositionend": function($event) {
        _vm.compositionInputing = false
      },
      "input": function($event) {
        _vm.onInput($event)
      },
      "focus": function($event) {
        _vm.onFocus($event)
      },
      "blur": function($event) {
        _vm.onBlur($event)
      }
    }
  }, 'input', _vm.$props, false)), (_vm.unit) ? _c('span', {
    class: _vm.$style.unit
  }, [_vm._v(_vm._s(_vm.unit))]) : _vm._e(), (_vm.tip) ? _c('span', {
    class: _vm.$style.tip,
    attrs: {
      "role": _vm.state
    }
  }, [_vm._v(_vm._s(_vm.tip))]) : _vm._e()]) : _vm._e()
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_0345e124_preserveWhitespace_false_index_html__ = __webpack_require__(363);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(359);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_0345e124_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(360);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a2ba7d6e", content, true);

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._3oJnuvT5CJ50CooD ._3oJnuvT5CJ50CooD{position:relative;vertical-align:middle;padding-right:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px 0 12px 30px;line-height:20px;overflow:hidden;width:auto;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;text-align:left;font-weight:400}._3oJnuvT5CJ50CooD{background-color:#f5f7fa;border-bottom:1px solid #ebf0f5;overflow:auto;width:100%}._3oJnuvT5CJ50CooD ._3oJnuvT5CJ50CooD:first-child{border-top:none}._3oJnuvT5CJ50CooD ._3oJnuvT5CJ50CooD{border-top:1px solid #ebf0f5}._3oJnuvT5CJ50CooD ._3oJnuvT5CJ50CooD[role]{border-bottom:1px solid #ebf0f5}._3oJnuvT5CJ50CooD ._3oJnuvT5CJ50CooD ._3oJnuvT5CJ50CooD{position:relative;vertical-align:middle;padding-right:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px 0 12px 30px;line-height:20px;overflow:hidden;width:auto;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;color:#999}._3oJnuvT5CJ50CooD{height:30px;margin-left:4px;margin-top:-1px;vertical-align:middle;cursor:pointer;position:relative;display:inline-block;width:0;height:0;border:0;content:\"\";position:absolute;left:3px;z-index:2}._3oJnuvT5CJ50CooD[role=up]{top:9px;border-top:none;border-bottom:5px solid #97a8be}._3oJnuvT5CJ50CooD[role=down],._3oJnuvT5CJ50CooD[role=up]{border-right:5px solid transparent;border-left:5px solid transparent}._3oJnuvT5CJ50CooD[role=down]{bottom:9px;border-top:5px solid #97a8be;border-bottom:none}._3oJnuvT5CJ50CooD[role=up][sel]{border-bottom-color:#48576a}._3oJnuvT5CJ50CooD[role=down][sel]{border-top-color:#48576a}._3oJnuvT5CJ50CooD{-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:normal;word-break:break-all;line-height:24px}", ""]);

// exports
exports.locals = {
	"root": "_3oJnuvT5CJ50CooD",
	"thead": "_3oJnuvT5CJ50CooD",
	"hthSpan": "_3oJnuvT5CJ50CooD",
	"htrItem": "_3oJnuvT5CJ50CooD",
	"body": "_3oJnuvT5CJ50CooD",
	"tbody": "_3oJnuvT5CJ50CooD",
	"btrItem": "_3oJnuvT5CJ50CooD",
	"btdSpan": "_3oJnuvT5CJ50CooD",
	"wrapicon": "_3oJnuvT5CJ50CooD",
	"icon": "_3oJnuvT5CJ50CooD",
	"ditem": "_3oJnuvT5CJ50CooD"
};

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_style_js__ = __webpack_require__(362);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-table-view',
    props: {
        title: String,
        data: Array,
        allChecked: { type: Boolean, default: false },
    },
    data() {
        return {
            columns: [],
            tdata: [],
            allSel: this.allChecked,
            columnsWidth: [],
        };
    },
    mounted() {
        this.tdata = this.initTableData();
        this.handleResize();
    },
    methods: {
        add(item) {
            this.columns.push(item);
        },
        remove(item) {
            const index = this.columns.indexOf(item);
            ~index && this.columns.splice(index, 1);
        },
        setCellWidth(column, index) {
            // debugger;
            // console.log(index);
            let width = '';
            if (column.width)
                width = column.width;
            else if (this.columnsWidth[index])
                width = this.columnsWidth[index].width;

            // when browser has scrollBar,set a width to resolve scroll position bug
            if (width === '0')
                width = '';
            return width;
        },
        handleSort(type, column) {
            // console.log(type);
            // debugger;
            const order = type === 'asc' ? -1 : 1;
            const label = column.label;
            if (column.sortMethod)
                this.tdata.sort((value1, value2) => column.sortMethod(value1[label], value2[label]) ? order : -order);
            else {
                this.tdata.sort((value1, value2) => {
                    if (value1[label] === value2[label])
                        return 0;
                    return value1[label] < value2[label] ? order : -order;
                });
            }
            column.sortoperate = type;
        },
        allSelected() {
            const flag = this.allSel;
            const copydata = this.tdata.concat();
            copydata.forEach((item) => {
                item.selected = flag;
            });
            this.tdata = copydata;
        },
        initTableData() {
            const tdata = [];
            const selection = this.columns && this.columns.some((item) => item.type && item.type === 'selection');
            if (selection) {
                this.data.forEach((item) => {
                    item.selected = false;
                    tdata.push(item);
                });
            } else {
                this.data.forEach((item) => {
                    tdata.push(item);
                });
            }
            return tdata;
        },
        handleResize() {
            this.$nextTick(() => {
                const allWidth = !this.columns.some((cell) => !cell.width); // each column set a width
                if (allWidth)
                    this.tableWidth = this.columns.map((cell) => cell.width).reduce((a, b) => a + b);
                else
                    this.tableWidth = parseInt(__WEBPACK_IMPORTED_MODULE_0__util_style_js__["a" /* default */].getStyle(this.$el, 'width')) - 1;
                this.columnsWidth = [];
                this.$nextTick(() => {
                    if (this.data.length) {
                        const $td = this.$refs.body.querySelectorAll('tbody tr')[0].querySelectorAll('td');
                        for (let i = 0; i < $td.length; i++) {
                            const column = this.columns[i];
                            let width;
                            if (column.width)
                                width = column.width;
                            else
                                width = parseInt(__WEBPACK_IMPORTED_MODULE_0__util_style_js__["a" /* default */].getStyle($td[i], 'width'));

                            this.columnsWidth.push(width);
                            // this.columnsWidth[i].width = width;
                        }
                    }
                });
            });
        },
    },
});


/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

const camelCase = function (name) {
    return name.replace(SPECIAL_CHARS_REGEXP, (_, separator, letter, offset) => offset ? letter.toUpperCase() : letter).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

const getStyle = function (element, styleName) {
    if (!element || !styleName)
        return null;

    styleName = camelCase(styleName);

    if (styleName === 'float')
        styleName = 'cssFloat';

    try {
        const computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({ getStyle });



/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root
  }, [(_vm.title) ? _c('div', {
    class: _vm.$style.title
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n        "), _vm._t("title")], 2) : _vm._e(), _c('div', {
    class: _vm.$style.header
  }, [_c('table', {
    class: _vm.$style.thead,
    attrs: {
      "cellspacing": "0",
      "cellpadding": "0",
      "border": "0"
    }
  }, [_c('colgroup', _vm._l((_vm.columnsWidth), function(column, index) {
    return _c('col', {
      attrs: {
        "width": column
      }
    })
  })), _c('thead', [_c('tr', {
    class: _vm.$style.htrItem
  }, _vm._l((_vm.columns), function(column, index) {
    return _c('th', {
      class: _vm.$style.hthSpan
    }, [_c('span', {
      class: _vm.$style.itemtitle
    }, [_vm._v(_vm._s(column.title))]), (column.type === 'selection') ? [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.allSel),
        expression: "allSel"
      }],
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": Array.isArray(_vm.allSel) ? _vm._i(_vm.allSel, null) > -1 : (_vm.allSel)
      },
      on: {
        "change": _vm.allSelected,
        "__c": function($event) {
          var $$a = _vm.allSel,
            $$el = $event.target,
            $$c = $$el.checked ? (true) : (false);
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.allSel = $$a.concat($$v))
            } else {
              $$i > -1 && (_vm.allSel = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
            }
          } else {
            _vm.allSel = $$c
          }
        }
      }
    })] : [(column.sortable) ? _c('span', {
      class: _vm.$style.wrapicon
    }, [_c('i', {
      class: _vm.$style.icon,
      attrs: {
        "role": "up",
        "sel": column.sortoperate === 'asc'
      },
      on: {
        "click": function($event) {
          _vm.handleSort('asc', column)
        }
      }
    }), _c('i', {
      class: _vm.$style.icon,
      attrs: {
        "role": "down",
        "sel": column.sortoperate === 'desc'
      },
      on: {
        "click": function($event) {
          _vm.handleSort('desc', column)
        }
      }
    })]) : _vm._e(), (column.selectable) ? _c('span', [_c('u-select', {
      attrs: {
        "options": column.options,
        "value": column.value
      }
    })], 1) : _vm._e()]], 2)
  }))])])]), _c('div', {
    ref: "body",
    class: _vm.$style.body
  }, [_c('table', {
    class: _vm.$style.tbody,
    attrs: {
      "cellspacing": "0",
      "cellpadding": "0",
      "border": "0"
    }
  }, [_c('colgroup', _vm._l((_vm.columnsWidth), function(column, index) {
    return _c('col', {
      attrs: {
        "width": column
      }
    })
  })), _c('tbody', {
    class: _vm.$style.btbody
  }, [_vm._l((_vm.tdata), function(row, index) {
    return [_c('tr', {
      class: _vm.$style.btrItem,
      attrs: {
        "role": index === (_vm.tdata.length - 1)
      }
    }, _vm._l((_vm.columns), function(column, cindex) {
      return _c('td', {
        class: _vm.$style.btdSpan
      }, [(column.type === 'selection') ? _c('span', [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (row.selected),
          expression: "row.selected"
        }],
        attrs: {
          "type": "checkbox"
        },
        domProps: {
          "checked": Array.isArray(row.selected) ? _vm._i(row.selected, null) > -1 : (row.selected)
        },
        on: {
          "__c": function($event) {
            var $$a = row.selected,
              $$el = $event.target,
              $$c = $$el.checked ? (true) : (false);
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v);
              if ($$el.checked) {
                $$i < 0 && (row.selected = $$a.concat($$v))
              } else {
                $$i > -1 && (row.selected = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
              }
            } else {
              row.selected = $$c
            }
          }
        }
      })]) : (!column.label) ? _c('div', {
        domProps: {
          "innerHTML": _vm._s(column.$slots.default && column.$slots.default[0].elm.innerHTML)
        }
      }) : (column.formatter) ? _c('span', {
        class: _vm.$style.ditem
      }, [_vm._v(_vm._s(column.formatter(row, column, index, cindex)))]) : _c('span', {
        class: _vm.$style.ditem
      }, [_vm._v(_vm._s(row[column.label]))])])
    }))]
  })], 2)])]), _c('div', [_vm._t("default")], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_100e0576_preserveWhitespace_false_index_html__ = __webpack_require__(368);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(365);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_100e0576_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(366);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7452070f", content, true);

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports
exports.locals = {
	"root": "_3eN1n9XwuFjyLMp_"
};

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-table-view-column',
    props: {
        title: String,
        sortable: { type: Boolean, default: false },
        selectable: { type: Boolean, default: false },
        options: Array,
        value: [String, Number, Boolean],
        label: String,
        type: String,
        width: String,
        minWidth: { type: [String, Number], default: '80' },
        formatter: Function,
        sortMethod: Function,
    },
    data() {
        return {
            index: 0,
            sortoperate: '',
        };
    },
    beforeCreate() {
        this.$parent.add(this);
    },
    mounted() {
        this.index = this.$parent.columns.indexOf(this);
    },
    destroyed() {
        this.$parent.remove(this);
    },
});


/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root
  }, [_vm._t("default", null, {
    index: _vm.index
  })], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_01809408_preserveWhitespace_false_index_html__ = __webpack_require__(373);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(370);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_01809408_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(371);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7509fd73", content, true);

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2Z--HUBWnhWD05hF{vertical-align:middle}._2Z--HUBWnhWD05hF[disabled]{background:#eee;border:1px solid #d3d6de}._2Z--HUBWnhWD05hF{overflow:hidden;word-wrap:normal;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;height:34px;line-height:32px;padding-right:20px;border-radius:3px}._2Z--HUBWnhWD05hF:after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #9dabc2;float:right;position:absolute;right:5px;top:14px}._2Z--HUBWnhWD05hF{display:inline-block;height:100%;margin-top:2px;width:100%;position:absolute;top:100%;left:0;z-index:100;overflow-x:hidden;overflow-y:auto;max-height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;color:#555;border-radius:4px;border:1px solid #d2d6de;list-style:none;margin:0;padding:3px 14px;color:#777;cursor:pointer;position:relative;height:20px;line-height:20px}._2Z--HUBWnhWD05hF[disabled]{cursor:not-allowed;color:#999}", ""]);

// exports
exports.locals = {
	"root": "_2Z--HUBWnhWD05hF",
	"head": "_2Z--HUBWnhWD05hF",
	"colorShow": "_2Z--HUBWnhWD05hF",
	"body": "_2Z--HUBWnhWD05hF",
	"listview": "_2Z--HUBWnhWD05hF",
	"listitem": "_2Z--HUBWnhWD05hF"
};

/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_event_js__ = __webpack_require__(18);


/**
 * @class Select
 * @extend Base
 * @param {Array}                   options.options             => 下拉菜单列表
 * @param {boolean=false}           options.readonly            => 是否只读
 * @param {boolean=false}           options.disabled            => 是否禁用
 * @param {string|number}     options.width               => 输入框长度
 */
const SelectColor = {
    name: 'u-select-color',
    props: {
        options: Array,
        readonly: Boolean,
        disabled: Boolean,
        // visible: { type: Boolean, default: true },
        width: { type: [String, Number], default: '160' },
        value: String,
    },
    data() {
        return {
            open: false,
            selectedIndex: this.initSelectedIndex(this.value),
        };
    },
    created() {
        __WEBPACK_IMPORTED_MODULE_0__util_event_js__["a" /* default */].addHandler(document, 'click', this.fadeOut.bind(this));
    },
    computed: {
        selected() {
            if (this.options.length === 0)
                return { name: '请选择', value: '' };
            return this.options[this.selectedIndex];
        },
    },
    methods: {
        toggle(value) {
            if (this.disabled)
                return;
            if (value)
                this.open = value;
            else
                this.open = !this.open;
        },
        select(event, index) {
            if (this.readonly)
                return;
            if (this.options[index].disabled || this.options[index].divider) {
                event.stopPropagation();
                return false;
            }
            // this.selected = this.options[index];
            this.selectedIndex = index;

            /**
             * @event select 选中列表项时触发
             * @property {object} sender 事件发送对象
             * @property {object} selected 选中后的列表对象
             * @property {String} value 选中后的列表对象的值
             */
            this.$emit('select', {
                sender: this,
                selected: this.options[index],
                value: this.options[index].value,
            });
        },
        initSelectedIndex(value) {
            if (this.options.length === 0)
                return;
            let selIndex = 0;
            this.options.some((item, index) => {
                if (item.value === value) {
                    selIndex = index;
                    return true;
                }
                return false;
            });
            return selIndex;
        },
        fadeOut(event) {
            SelectColor.opens.forEach((item, index) => {
                // 这个地方不能用stopPropagation来处理，因为展开一个Select的同时要收起其他Select
                const element = item.$refs.element;
                let element2 = event.target;
                while (element2) {
                    if (element === element2)
                        return;
                    element2 = element2.parentElement;
                }
                item.toggle(false);
            });
        },
    },
    watch: {
        open(newValue) {
            const index = SelectColor.opens.indexOf(this);
            if (newValue && index < 0)
                SelectColor.opens.push(this);
            else if (!newValue && index > -1)
                SelectColor.opens.splice(index, 1);
        },
        options(newValue) {
            this.selectedIndex = this.initSelectedIndex(this.value);
        },
        value(newValue) {
            this.selectedIndex = this.initSelectedIndex(newValue);
        },
        /**
         * @event change 选中列表项改变时触发
         * @property {object} sender 事件发送对象
         * @property {object} selected 改变后的列表对象
         * @property {String} value 改变后的列表对象的值
         */
        selected(newValue) {
            this.$emit('change', {
                sender: this,
                selected: newValue,
                value: newValue.value,
            });
        },
    },
};

// Select 类的静态属性 用来保存当前处于open状态的Select对象
SelectColor.opens = [];

/* harmony default export */ __webpack_exports__["a"] = (SelectColor);


/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "element",
    class: _vm.$style.root,
    style: ({
      width: _vm.width + 'px'
    }),
    attrs: {
      "readonly": _vm.readonly
    },
    on: {
      "click": function($event) {
        _vm.toggle()
      }
    }
  }, [_c('div', {
    class: _vm.$style.head,
    attrs: {
      "disabled": _vm.disabled
    }
  }, [_c('span', {
    class: _vm.$style.colorShow,
    style: ({
      background: _vm.selected.value
    })
  }, [_vm._v(_vm._s(_vm.selected.name))])]), (_vm.open && _vm.options.length !== 0) ? _c('div', {
    class: _vm.$style.body
  }, [_c('ul', {
    class: _vm.$style.listview
  }, _vm._l((_vm.options), function(item, index) {
    return _c('li', {
      class: _vm.$style.listitem,
      style: ({
        background: item.value
      }),
      attrs: {
        "disabled": item.disabled,
        "role": (index === _vm.selectedIndex) ? 'z-sel' : ''
      },
      on: {
        "click": function($event) {
          _vm.select($event, index)
        }
      }
    }, [_vm._v(_vm._s(item.name))])
  }))]) : _vm._e()])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_193ec3e9_preserveWhitespace_false_index_html__ = __webpack_require__(378);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(375);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_193ec3e9_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(376);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("74b8f035", content, true);

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._16KoKf5t_HNvqV66{position:relative;display:inline-block;vertical-align:middle;-webkit-transform:translateX(50%);-ms-transform:translateX(50%);transform:translateX(50%);top:-10px;right:0;min-width:20px;height:20px;line-height:18px;border-radius:10px;color:#fff;text-align:center;padding:0 6px;position:absolute;top:-3px;right:-3px;height:6px;width:6px;background:red;border-radius:50%}", ""]);

// exports
exports.locals = {
	"root": "_16KoKf5t_HNvqV66",
	"content": "_16KoKf5t_HNvqV66",
	"count": "_16KoKf5t_HNvqV66",
	"dot": "_16KoKf5t_HNvqV66"
};

/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-badge',
    props: {
        dot: {
            type: Boolean,
            default: false,
        },
        count: [Number, String],
        limitation: {
            type: [Number, String],
            default: 99,
        },
    },
    computed: {
        badge() {
            let flag = false;

            if (this.count)
                flag = !(parseInt(this.count) === 0);

            return flag;
        },
        limitationText() {
            return parseInt(this.count) >= parseInt(this.limitation) ? `${this.limitation}+` : this.count;
        },
    },
});


/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root
  }, [(_vm.dot) ? _c('span', {
    class: _vm.$style.content
  }, [_vm._t("default"), _c('sup', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.badge),
      expression: "badge"
    }],
    class: _vm.$style.dot
  })], 2) : _c('span', {
    class: _vm.$style.content
  }, [_vm._t("default"), _c('sup', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.badge),
      expression: "badge"
    }],
    class: _vm.$style.count
  }, [_vm._v(_vm._s(_vm.limitationText))])], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(382);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(380);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(381);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1385ed70", content, true);

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2r0J4pZBGTtgHjMC{display:inline-block;margin:0;padding:0 8px;background:#fff;font:inherit;color:inherit;border:1px solid #ccc;border-radius:0;line-height:34px;height:34px}._2r0J4pZBGTtgHjMC:focus{outline:none;border-color:#67aaf5}._2r0J4pZBGTtgHjMC[color=error]{color:#d43;border-color:#d43}._2r0J4pZBGTtgHjMC[disabled]{cursor:not-allowed;background:#ddd}._2r0J4pZBGTtgHjMC{width:440px;height:40px;padding:0 12px;color:#666;border-color:#e1e8ed;border-radius:3px;-webkit-transition:border-color .2s;-o-transition:border-color .2s;transition:border-color .2s}._2r0J4pZBGTtgHjMC::-webkit-input-placeholder{opacity:1;color:#999}._2r0J4pZBGTtgHjMC:-ms-input-placeholder{opacity:1;color:#999}._2r0J4pZBGTtgHjMC::placeholder{opacity:1;color:#999}._2r0J4pZBGTtgHjMC:focus{border-color:#8ebee9}._2r0J4pZBGTtgHjMC[disabled]{background-color:#e9f0f5;border-color:#e9f0f5}._2r0J4pZBGTtgHjMC[size=small]{width:200px;height:34px}", ""]);

// exports
exports.locals = {
	"root": "_2r0J4pZBGTtgHjMC",
	"input": "_2r0J4pZBGTtgHjMC"
};

/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_input_vue__ = __webpack_require__(383);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_u_input_vue__["a" /* default */]);


/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_6168a2b4_preserveWhitespace_false_index_html__ = __webpack_require__(390);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(384);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_6168a2b4_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(385);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("57a6b0d7", content, true);

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2bHpklBiGAMtd2uW{display:inline-block;margin:0;padding:0 8px;background:#fff;font:inherit;color:inherit;border:1px solid #ccc;border-radius:0;line-height:34px;height:34px}._2bHpklBiGAMtd2uW:focus{outline:none;border-color:#67aaf5}._2bHpklBiGAMtd2uW[color=error]{color:#d43;border-color:#d43}._2bHpklBiGAMtd2uW[disabled]{cursor:not-allowed;background:#ddd}", ""]);

// exports
exports.locals = {
	"root": "_2bHpklBiGAMtd2uW",
	"input": "_2bHpklBiGAMtd2uW"
};

/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_field_vue__ = __webpack_require__(387);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-input',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_field_vue__["a" /* default */]],
    props: {
        value: { type: String },
    },
    data() {
        return {
            currentValue: this.value,
            compositionInputing: false,
        };
    },
    watch: {
        value(value) {
            this.currentValue = value;
        },
    },
    methods: {
        onInput(e) {
            this.currentValue = e.target.value;
            this.$emit('input', this.currentValue);
        },
        onFocus(e) {
            this.$emit('focus', this.currentValue);
        },
        onBlur(e) {
            this.$emit('blur', this.currentValue);
        },
    },
});


/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(388);
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_emitter_vue__ = __webpack_require__(70);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-field',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_emitter_vue__["a" /* default */]],
    created() {
        this.$on('input', () => this.dispatch('u-form-item', 'input', this.currentValue));
        this.$on('focus', () => this.dispatch('u-form-item', 'focus', this.currentValue));
        this.$on('blur', () => this.dispatch('u-form-item', 'blur', this.currentValue));
    },
});


/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const broadcast = function (name, eventName, ...params) {
    this.$children.forEach(($child) => {
        if ($child.$options.name)
            $child.$emit(eventName, ...params);
        else
            broadcast.apply($child, [name, eventName].concat(params));
    });
};

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-emitter',
    methods: {
        dispatch(name, eventName, ...params) {
            let $parent = this.$parent || this.$root;
            while ($parent && $parent.$options.name !== name)
                $parent = $parent.$parent;

            $parent && $parent.$emit(eventName, ...params);
        },
        broadcast(name, eventName, ...params) {
            broadcast.apply(this, [name, eventName].concat(params));
        },
    },
});


/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    class: _vm.$style.root
  }, [_c('input', _vm._g(_vm._b({
    class: _vm.$style.input,
    domProps: {
      "value": _vm.currentValue
    },
    on: {
      "input": _vm.onInput,
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "compositionstart": function($event) {
        _vm.compositionInputing = true
      },
      "compositionend": function($event) {
        _vm.compositionInputing = false
      }
    }
  }, 'input', _vm.$attrs, false), _vm.$listeners)), _vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(394);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(392);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(393);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("c51c402e", content, true);

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".m68uK2bPAJAeUVo6{overflow:auto}.m68uK2bPAJAeUVo6[inline] .m68uK2bPAJAeUVo6{margin-right:20px;width:auto;display:inline-block;float:none;margin-left:10px}", ""]);

// exports
exports.locals = {
	"root": "m68uK2bPAJAeUVo6",
	"item": "m68uK2bPAJAeUVo6",
	"item-title": "m68uK2bPAJAeUVo6",
	"item-field": "m68uK2bPAJAeUVo6"
};

/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_form_vue__ = __webpack_require__(395);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_u_form_vue__["a" /* default */]);


/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_0a01846c_preserveWhitespace_false_index_html__ = __webpack_require__(399);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(396);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_0a01846c_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(397);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("ca395d9c", content, true);

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._2mv_L3KC6fyLO8Ds{overflow:auto}", ""]);

// exports
exports.locals = {
	"root": "_2mv_L3KC6fyLO8Ds"
};

/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-form',
    props: {
        model: Object,
        rules: Object,
    },
    data() {
        return {
            // @TODO: Optimize
            state: '',
            items: [],
        };
    },
    created() {
        this.$on('addItem', (item) => {
            item.form = this;
            this.items.push(item);
        });
        this.$on('removeItem', (item) => {
            item.form = undefined;
            this.items.splice(this.items.indexOf(item), 1);
        });
        this.$on('validateItem', () => {
            this.state = this.getState();
            this.$emit('validate', this.state === 'success');
        });
    },
    methods: {
        validate(silent = false) {
            return Promise.all(this.items.map((item) => item.validate('submit', silent)
                .catch((errors) => errors)
            )).then((results) => {
                if (results.some((result) => !!result))
                    throw new Error(results);
            });
        },
        getState() {
            const STATE_LEVEL = {
                '': 3,
                validating: 2,
                error: 1,
                success: 0,
            };

            let state = 'success';
            this.items.forEach((item) => {
                if (item.currentRules && STATE_LEVEL[item.state] > STATE_LEVEL[state])
                    state = item.state;
            });

            return state;
        },
    },
});


/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    class: _vm.$style.root,
    on: {
      "submit": function($event) {
        $event.preventDefault();
      }
    }
  }, [_vm._t("default")], 2)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(403);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(401);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */
var __vue_html__ = null
/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __vue_html__, __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(402);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1a46cea8", content, true);

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.i(__webpack_require__(19), undefined);

// module
exports.push([module.i, "._2Jd5wXxfgrnEjTUP{clear:both;margin-bottom:20px;float:left;width:80px;padding:5px 0}._2Jd5wXxfgrnEjTUP[required]:after{content:\"*\";color:#d43}._2Jd5wXxfgrnEjTUP{margin-left:80px;margin-left:5px;padding:0 5px;background:#eee}._2Jd5wXxfgrnEjTUP[color=error]{background:#d43}._2Jd5wXxfgrnEjTUP{margin-bottom:30px;padding:9px 0;color:#999;position:relative;display:inline-block;margin-left:10px;padding:0 10px;line-height:26px;height:26px;font-size:12px;white-space:nowrap}._2Jd5wXxfgrnEjTUP:after{content:\"\";position:absolute;right:100%;top:8px;width:0;height:0;border-top:4px solid transparent;border-right:4px solid #ff867f;border-bottom:4px solid transparent}._2Jd5wXxfgrnEjTUP[color=error]{background-color:#ff867f;color:#fff}._2Jd5wXxfgrnEjTUP[color=error]:after{border-right-color:#ff867f}", ""]);

// exports
exports.locals = {
	"root": "_2Jd5wXxfgrnEjTUP " + __webpack_require__(19).locals["item"] + "",
	"title": "_2Jd5wXxfgrnEjTUP " + __webpack_require__(19).locals["item-title"] + "",
	"field": "_2Jd5wXxfgrnEjTUP " + __webpack_require__(19).locals["item-field"] + "",
	"message": "_2Jd5wXxfgrnEjTUP"
};

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_form_item_vue__ = __webpack_require__(404);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_u_form_item_vue__["a" /* default */]);


/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_732e9366_preserveWhitespace_false_index_html__ = __webpack_require__(463);
var cssModules = {};
function injectStyle (ssrContext) {
cssModules['$style'] = __webpack_require__(405);
  this['$style'] = cssModules['$style']

}
var normalizeComponent = __webpack_require__(0);
/* script */

/* template */

/* styles */
var __vue_css__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__Vusion_vusion_cli_node_modules_vue_multifile_loader_node_modules_vusion_vue_loader_lib_template_compiler_index_js_id_data_v_732e9366_preserveWhitespace_false_index_html__["a" /* default */], __vue_css__, __vue_scopeId__, __vue_module_identifier__)
/* harmony default export */ __webpack_exports__["a"] = (Component.exports);

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(406);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2903d300", content, true);

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "._1E_EIA9FakNmBVns{clear:both;margin-bottom:20px;float:left;width:80px;padding:5px 0}._1E_EIA9FakNmBVns[required]:after{content:\"*\";color:#d43}._1E_EIA9FakNmBVns{position:relative;margin-left:80px;margin-left:5px;padding:0 5px;background:#eee}._1E_EIA9FakNmBVns[color=error]{background:#d43;color:#fff}", ""]);

// exports
exports.locals = {
	"root": "_1E_EIA9FakNmBVns",
	"title": "_1E_EIA9FakNmBVns",
	"field": "_1E_EIA9FakNmBVns",
	"message": "_1E_EIA9FakNmBVns"
};

/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_u_emitter_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_async_validator__ = __webpack_require__(408);



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'u-form-item',
    mixins: [__WEBPACK_IMPORTED_MODULE_0_u_emitter_vue__["a" /* default */]],
    props: {
        name: String,
        title: String,
        rules: Array,
        message: String,
    },
    data() {
        return {
            value: undefined,
            state: '',
            color: '',
            currentMessage: '',
        };
    },
    computed: {
        currentRules() {
            return this.rules || (this.form && this.form.rules && this.form.rules[this.name]);
        },
        required() {
            return this.currentRules && this.currentRules.some((rule) => rule.required);
        },
    },
    created() {
        this.dispatch('u-form', 'addItem', this);
        this.$on('input', this.onInput);
        this.$on('change', this.onChange);
        this.$on('focus', this.onFocus);
        this.$on('blur', this.onBlur);
    },
    destroyed() {
        this.dispatch('u-form', 'removeItem', this);
    },
    methods: {
        onInput(value) {
            this.value = value;
            this.validate('input').catch((errors) => errors);
        },
        onChange(value) {
            this.value = value;
        },
        onFocus(value) {
            this.color = this.state = '';
            this.currentMessage = this.message;
        },
        onBlur(value) {
            this.value = value;
            this.validate('blur').catch((errors) => errors);
        },
        validate(trigger = 'submit', silent = false) {
            let rules = this.currentRules;
            rules = rules && rules.filter((rule) => (rule.trigger + '+submit').includes(trigger));
            if (!rules || !rules.length)
                return Promise.resolve();

            this.state = 'validating';
            if (!silent)
                this.color = this.state;

            const name = this.name || 'field';
            const validator = new __WEBPACK_IMPORTED_MODULE_1_async_validator__["a" /* default */]({
                [name]: rules,
            });

            return new Promise((resolve, reject) => {
                validator.validate({ [name]: this.value }, { firstFields: true }, (errors, fields) => {
                    this.state = errors ? 'error' : 'success';
                    if (!silent) {
                        this.color = this.state;
                        this.currentMessage = errors ? errors[0].message : this.message;
                    }

                    this.dispatch('u-form', 'validateItem', !errors);
                    errors ? reject(errors) : resolve();
                });
            });
        },
    },
});


/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator___ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages__ = __webpack_require__(462);






/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
function Schema(descriptor) {
  this.rules = null;
  this._messages = __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* messages */];
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* deepMerge */])(Object(__WEBPACK_IMPORTED_MODULE_4__messages__["b" /* newMessages */])(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((typeof rules === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(rules)) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z = void 0;
    var item = void 0;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_) {
    var _this = this;

    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var oc = arguments[2];

    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return;
    }
    function complete(results) {
      var i = void 0;
      var field = void 0;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          errors = errors.concat.apply(errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        for (i = 0; i < errors.length; i++) {
          field = errors[i].field;
          fields[field] = fields[field] || [];
          fields[field].push(errors[i]);
        }
      }
      callback(errors, fields);
    }

    if (options.messages) {
      var messages = this.messages();
      if (messages === __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* messages */]) {
        messages = Object(__WEBPACK_IMPORTED_MODULE_4__messages__["b" /* newMessages */])();
      }
      Object(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* deepMerge */])(messages, options.messages);
      options.messages = messages;
    } else {
      options.messages = this.messages();
    }
    var arr = void 0;
    var value = void 0;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* asyncMap */])(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(rule.fields) === 'object' || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, schema, {
          fullField: rule.fullField + '.' + key
        });
      }

      function cb() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (errors.length) {
          Object(__WEBPACK_IMPORTED_MODULE_2__util__["f" /* warning */])('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* complementError */])(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(Object(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* complementError */])(rule));
            } else if (options.error) {
              errors = [options.error(rule, Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* format */])(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }

          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, fieldsSchema, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            doIt(errs && errs.length ? errors.concat(errs) : errs);
          });
        }
      }

      var res = rule.validator(rule, data.value, cb, data.source, options);
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !__WEBPACK_IMPORTED_MODULE_3__validator___["a" /* default */].hasOwnProperty(rule.type)) {
      throw new Error(Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* format */])('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return __WEBPACK_IMPORTED_MODULE_3__validator___["a" /* default */].required;
    }
    return __WEBPACK_IMPORTED_MODULE_3__validator___["a" /* default */][this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  __WEBPACK_IMPORTED_MODULE_3__validator___["a" /* default */][type] = validator;
};

Schema.messages = __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* messages */];

/* harmony default export */ __webpack_exports__["a"] = (Schema);

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(410), __esModule: true };

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(411);
module.exports = __webpack_require__(20).Object.assign;

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(32);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(414)});

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(413);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 413 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(16)
  , gOPS     = __webpack_require__(39)
  , pIE      = __webpack_require__(25)
  , toObject = __webpack_require__(77)
  , IObject  = __webpack_require__(75)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(15)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8)
  , toLength  = __webpack_require__(416)
  , toIndex   = __webpack_require__(417);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(419), __esModule: true };

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(420);
__webpack_require__(426);
module.exports = __webpack_require__(43).f('iterator');

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(421)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(78)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35)
  , defined   = __webpack_require__(34);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(80)
  , descriptor     = __webpack_require__(23)
  , setToStringTag = __webpack_require__(42)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(12)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(10)
  , anObject = __webpack_require__(21)
  , getKeys  = __webpack_require__(16);

module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6).document && document.documentElement;

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(7)
  , toObject    = __webpack_require__(77)
  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(427);
var global        = __webpack_require__(6)
  , hide          = __webpack_require__(9)
  , Iterators     = __webpack_require__(41)
  , TO_STRING_TAG = __webpack_require__(12)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(428)
  , step             = __webpack_require__(429)
  , Iterators        = __webpack_require__(41)
  , toIObject        = __webpack_require__(8);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(78)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 428 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 429 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(431), __esModule: true };

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(432);
__webpack_require__(439);
__webpack_require__(440);
__webpack_require__(441);
module.exports = __webpack_require__(20).Symbol;

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(6)
  , has            = __webpack_require__(7)
  , DESCRIPTORS    = __webpack_require__(11)
  , $export        = __webpack_require__(32)
  , redefine       = __webpack_require__(79)
  , META           = __webpack_require__(433).KEY
  , $fails         = __webpack_require__(15)
  , shared         = __webpack_require__(37)
  , setToStringTag = __webpack_require__(42)
  , uid            = __webpack_require__(24)
  , wks            = __webpack_require__(12)
  , wksExt         = __webpack_require__(43)
  , wksDefine      = __webpack_require__(44)
  , keyOf          = __webpack_require__(434)
  , enumKeys       = __webpack_require__(435)
  , isArray        = __webpack_require__(436)
  , anObject       = __webpack_require__(21)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(33)
  , createDesc     = __webpack_require__(23)
  , _create        = __webpack_require__(80)
  , gOPNExt        = __webpack_require__(437)
  , $GOPD          = __webpack_require__(438)
  , $DP            = __webpack_require__(10)
  , $keys          = __webpack_require__(16)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(81).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(25).f  = $propertyIsEnumerable;
  __webpack_require__(39).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(40)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(24)('meta')
  , isObject = __webpack_require__(22)
  , has      = __webpack_require__(7)
  , setDesc  = __webpack_require__(10).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(15)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(16)
  , toIObject = __webpack_require__(8);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(16)
  , gOPS    = __webpack_require__(39)
  , pIE     = __webpack_require__(25);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(76);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(8)
  , gOPN      = __webpack_require__(81).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(25)
  , createDesc     = __webpack_require__(23)
  , toIObject      = __webpack_require__(8)
  , toPrimitive    = __webpack_require__(33)
  , has            = __webpack_require__(7)
  , IE8_DOM_DEFINE = __webpack_require__(72)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 439 */
/***/ (function(module, exports) {



/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('asyncIterator');

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('observable');

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__method__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boolean__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__regexp__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__integer__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__float__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__array__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__object__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__enum__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pattern__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__date__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__required__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__type__ = __webpack_require__(461);















/* harmony default export */ __webpack_exports__["a"] = ({
  string: __WEBPACK_IMPORTED_MODULE_0__string__["a" /* default */],
  method: __WEBPACK_IMPORTED_MODULE_1__method__["a" /* default */],
  number: __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */],
  boolean: __WEBPACK_IMPORTED_MODULE_3__boolean__["a" /* default */],
  regexp: __WEBPACK_IMPORTED_MODULE_4__regexp__["a" /* default */],
  integer: __WEBPACK_IMPORTED_MODULE_5__integer__["a" /* default */],
  float: __WEBPACK_IMPORTED_MODULE_6__float__["a" /* default */],
  array: __WEBPACK_IMPORTED_MODULE_7__array__["a" /* default */],
  object: __WEBPACK_IMPORTED_MODULE_8__object__["a" /* default */],
  'enum': __WEBPACK_IMPORTED_MODULE_9__enum__["a" /* default */],
  pattern: __WEBPACK_IMPORTED_MODULE_10__pattern__["a" /* default */],
  date: __WEBPACK_IMPORTED_MODULE_11__date__["a" /* default */],
  url: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
  hex: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
  email: __WEBPACK_IMPORTED_MODULE_13__type__["a" /* default */],
  required: __WEBPACK_IMPORTED_MODULE_12__required__["a" /* default */]
});

/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);



/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string') && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, 'string');
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string')) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (string);

/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(4);


/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.whitespace, rule.fullField));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (whitespace);

/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__required__ = __webpack_require__(82);




/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  object: function object(value) {
    return (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(value)) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email);
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};

/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    Object(__WEBPACK_IMPORTED_MODULE_2__required__["a" /* default */])(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* format */](options.messages.types[ruleType], rule.fullField, rule.type));
    }
    // straight typeof check
  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(value)) !== rule.type) {
    errors.push(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* format */](options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (type);

/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(4);


/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number';
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  }
  // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type
  if (!key) {
    return false;
  }
  if (str || arr) {
    val = value.length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (range);

/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(4);

var ENUM = 'enum';

/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (enumerable);

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(4);


/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      if (!rule.pattern.test(value)) {
        errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* format */](options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (pattern);

/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);



/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (method);

/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);



/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (number);

/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rule___ = __webpack_require__(5);



/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__util__["e" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_1__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_1__rule___["a" /* default */].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (boolean);

/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);



/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value)) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (regexp);

/***/ }),
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);



/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (integer);

/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);



/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (floatFn);

/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);


/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'array') && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, 'array');
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'array')) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (array);

/***/ }),
/* 456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);



/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value !== undefined) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (object);

/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);


var ENUM = 'enum';

/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (value) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */][ENUM](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (enumerable);

/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);



/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string') && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, 'string')) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (pattern);

/***/ }),
/* 459 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);



function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  // console.log('validate on %s value', value);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options);
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value)) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
      if (value) {
        __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].range(rule, value.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (date);

/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rule___ = __webpack_require__(5);



function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(value);
  __WEBPACK_IMPORTED_MODULE_1__rule___["a" /* default */].required(rule, value, source, errors, options, type);
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (required);

/***/ }),
/* 461 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rule___ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(4);



function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, ruleType) && !rule.required) {
      return callback();
    }
    __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].required(rule, value, source, errors, options, ruleType);
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* isEmptyValue */])(value, ruleType)) {
      __WEBPACK_IMPORTED_MODULE_0__rule___["a" /* default */].type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/* harmony default export */ __webpack_exports__["a"] = (type);

/***/ }),
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = newMessages;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messages; });
function newMessages() {
  return {
    'default': 'Validation error on field %s',
    required: '%s is required',
    'enum': '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = newMessages();

/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.$style.root
  }, [_c('label', {
    class: _vm.$style.title,
    attrs: {
      "required": _vm.required
    }
  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
    class: _vm.$style.field
  }, [_vm._t("default"), (_vm.currentMessage) ? _c('span', {
    class: _vm.$style.message,
    attrs: {
      "color": _vm.color
    }
  }, [_vm._v(_vm._s(_vm.currentMessage))]) : _vm._e()], 2)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_library__ = __webpack_require__(84);



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_library__["default"]);
window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */];


/***/ })
/******/ ]);
});