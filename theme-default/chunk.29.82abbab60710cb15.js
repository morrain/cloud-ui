/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.ttf","md5":"bc7597b6e243406e05a6cccaf3fdbef2"},"eot":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.eot","md5":"8b03caaea215cca447d95812e9e093f6"},"woff":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.woff","md5":"a07ccc30b9c722eb7976fcb6de73ddb7"},"svg":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.svg","md5":"6eb2973eebdcab0ffcbc919285f3fe73"}};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.ttf","md5":"bc7597b6e243406e05a6cccaf3fdbef2"},"eot":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.eot","md5":"8b03caaea215cca447d95812e9e093f6"},"woff":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.woff","md5":"a07ccc30b9c722eb7976fcb6de73ddb7"},"svg":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.svg","md5":"6eb2973eebdcab0ffcbc919285f3fe73"}});
                                }webpackJsonp([29],{

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

var styleId = 'ICON-FONT-FILE-STYLE';
function createStyleContent(fontConfig) {
    var style = fontConfig||window.ICON_FONT_STYLE,
        fontName = style.name,  srcStr = [];

    for(var name in style){
        var path  = style[name].path,hash = style[name].md5;
        if(style.hasOwnProperty(name)) {
            switch (name) {
                case 'eot':
                    srcStr.push('url("'+path+'?'+hash+'#iefix") format("embedded-opentype")');
                    break;
                case 'woff':
                    srcStr.push('url("'+path+'?'+hash+'") format("woff")');
                    break;
                case 'ttf':
                    srcStr.push('url("'+path+'?'+hash+'") format("truetype")');
                    break;
                case 'svg':
                    srcStr.push('url("'+path+'?'+hash+'#'+fontName+'") format("svg")');
                    break;
                default:
                    break;
            }
        }
    }
    srcStr = srcStr.join(",\n\t");
    return '@font-face {\n\tfont-family: "'+fontName+'";\n\tsrc:'+srcStr+";\n}";
}

function addStyle(fontConfig) {
    var styleTag = document.createElement('style'),headElement  = document.getElementsByTagName('head')[0];
    styleTag.innerHTML = createStyleContent(fontConfig);
    styleTag.id = styleId;
    styleTag.type="text/css";
    if(headElement){
        headElement.appendChild(styleTag);
    }else{
        window.addEventListener('load',() => {
            headElement.appendChild(styleTag);
        })
    }
}

function updateStyle(fontConfig) {
    var styleTag = document.getElementById(styleId);
    if(!styleTag){
        addStyle(fontConfig);
    }else{
        styleTag.innerHTML = createStyleContent(fontConfig);
    }
}

module.exports= function() {
    if(window.HAS_CREATE_FONT_STYLE){
        return;
    }
    addStyle();
    window.HAS_CREATE_FONT_STYLE = true;
}
if(false){
    window.ICON_FONT_STYLE.update = updateStyle;
}


/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(751);

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_3eb0eea5_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(752);
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_3eb0eea5_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("弹出层 Popper")]), _vm._v(" "), _c('h2', [_vm._v("示例")]), _vm._v(" "), _c('h3', [_vm._v("基本形式")]), _vm._v(" "), _c('p', [_vm._v("一般情况下，需要用一个popper slot来设置弹出元素，并且要用default slot来设置触发元素，这个触发元素通常也作为参照元素。由于Vue的限制，每个slot中只能有一个根节点。")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-popper', [_c('u-button', [_vm._v("click")]), _c('div', {
    attrs: {
      "slot": "popper"
    },
    slot: "popper"
  }, [_c('u-button', [_vm._v("popper")])], 1)], 1)], 1), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("click"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"popper\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("popper"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("触发事件")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-linear-layout', [_c('u-popper', {
    attrs: {
      "trigger": "click"
    }
  }, [_c('u-button', [_vm._v("click（默认）")]), _c('div', {
    attrs: {
      "slot": "popper"
    },
    slot: "popper"
  }, [_c('u-button', [_vm._v("popper")])], 1)], 1), _c('u-popper', {
    attrs: {
      "trigger": "hover"
    }
  }, [_c('u-button', [_vm._v("hover")]), _c('div', {
    attrs: {
      "slot": "popper"
    },
    slot: "popper"
  }, [_c('u-button', [_vm._v("popper")])], 1)], 1), _c('u-popper', {
    attrs: {
      "trigger": "right-click"
    }
  }, [_c('u-button', [_vm._v("right-click")]), _c('div', {
    attrs: {
      "slot": "popper"
    },
    slot: "popper"
  }, [_c('u-button', [_vm._v("popper")])], 1)], 1), _c('u-popper', {
    attrs: {
      "trigger": "double-click"
    }
  }, [_c('u-button', [_vm._v("double-click")]), _c('div', {
    attrs: {
      "slot": "popper"
    },
    slot: "popper"
  }, [_c('u-button', [_vm._v("popper")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"click\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("click（默认）"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"popper\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("popper"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"hover\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("hover"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"popper\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("popper"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"right-click\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("right-click"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"popper\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("popper"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("trigger")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"double-click\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("double-click"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"popper\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("popper"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("弹出位置")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-linear-layout', [_c('u-popper', {
    attrs: {
      "placement": "bottom-start"
    }
  }, [_c('u-button', [_vm._v("bottom-start（默认）")]), _c('div', {
    attrs: {
      "slot": "popper"
    },
    slot: "popper"
  }, [_c('u-button', [_vm._v("popper")])], 1)], 1), _c('u-popper', {
    attrs: {
      "placement": "bottom"
    }
  }, [_c('u-button', [_vm._v("bottom")]), _c('div', {
    attrs: {
      "slot": "popper"
    },
    slot: "popper"
  }, [_c('u-button', [_vm._v("popper")])], 1)], 1), _c('u-popper', {
    attrs: {
      "placement": "right-start"
    }
  }, [_c('u-button', [_vm._v("right-start")]), _c('div', {
    attrs: {
      "slot": "popper"
    },
    slot: "popper"
  }, [_c('u-button', [_vm._v("popper")])], 1)], 1), _c('u-popper', {
    attrs: {
      "placement": "left"
    }
  }, [_c('u-button', [_vm._v("left")]), _c('div', {
    attrs: {
      "slot": "popper"
    },
    slot: "popper"
  }, [_c('u-button', [_vm._v("popper")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"bottom-start\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("bottom-start（默认）"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"popper\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("popper"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"bottom\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("bottom"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"popper\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("popper"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"right-start\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("right-start"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"popper\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("popper"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placement")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"left\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("left"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("slot")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"popper\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("popper"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-linear-layout")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("禁用")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [_c('u-popper', {
    attrs: {
      "disabled": ""
    }
  }, [_c('u-button', {
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("disabled")])], 1)], 1), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-html"
    }
  }, [_c('code', {
    attrs: {
      "v-pre": ""
    }
  }, [_c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("disabled")]), _vm._v(">")]), _vm._v("disabled"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-popper")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h2', [_vm._v("Popper API")]), _vm._v(" "), _c('h3', [_vm._v("Attrs/Props")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("Attr/Prop")]), _vm._v(" "), _c('th', [_vm._v("Type")]), _vm._v(" "), _c('th', [_vm._v("Default")]), _vm._v(" "), _c('th', [_vm._v("Description")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("trigger")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("'click'")])]), _vm._v(" "), _c('td', [_vm._v("弹出层的触发方式，可选click,hover,manual")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placement")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("'bottom'")])]), _vm._v(" "), _c('td', [_vm._v("弹出层的弹出方向：top,bottom,left,right,top-start,top-end...")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("offset")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("undefined")])]), _vm._v(" "), _c('td', [_vm._v("弹出层偏移，\"10px 10px\",\"10% 10%\"")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("escapeWithReference")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("true")])]), _vm._v(" "), _c('td', [_vm._v("当触发元素离开边际时，弹出层是否跟随离开或保留在边际元素内")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hoverDelay")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("0")])]), _vm._v(" "), _c('td', [_vm._v("trigger为hover时的延迟时间")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("boundariesElement")]), _vm._v(" "), _c('td', [_vm._v("element/String")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("scrollParent")])]), _vm._v(" "), _c('td', [_vm._v("弹出层所在的边框元素，定义弹出层的边际，默认为第一个滚动的父级元素")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("arrowElement")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_c('code', {
    pre: true
  }, [_vm._v("'[u-arrow]'")])]), _vm._v(" "), _c('td', [_vm._v("箭头元素的query值，默认为u-arrow属性，定义该属性则组件会控制箭头元素的偏移量")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("modifiers")]), _vm._v(" "), _c('td', [_vm._v("Object")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("Popper.js的modify参数，具体参照popper.js的文档")])])])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});