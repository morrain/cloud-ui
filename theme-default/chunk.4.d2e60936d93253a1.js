/* icon font style message */
                                if (typeof window !== "undefined" && !window.ICON_FONT_STYLE) {
                                    window.ICON_FONT_STYLE = {"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.ttf","md5":"bc7597b6e243406e05a6cccaf3fdbef2"},"eot":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.eot","md5":"8b03caaea215cca447d95812e9e093f6"},"woff":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.woff","md5":"a07ccc30b9c722eb7976fcb6de73ddb7"},"svg":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.svg","md5":"6eb2973eebdcab0ffcbc919285f3fe73"}};
                                } else if (typeof window !== "undefined" && window.ICON_FONT_STYLE && window.ICON_FONT_STYLE.update) {
                                    window.ICON_FONT_STYLE.update({"name":"vusion-icon-font","ttf":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.ttf","md5":"bc7597b6e243406e05a6cccaf3fdbef2"},"eot":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.eot","md5":"8b03caaea215cca447d95812e9e093f6"},"woff":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.woff","md5":"a07ccc30b9c722eb7976fcb6de73ddb7"},"svg":{"path":"\\cloud-ui\\theme-default\\vusion-icon-font.svg","md5":"6eb2973eebdcab0ffcbc919285f3fe73"}});
                                }webpackJsonp([4],{

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

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(731);

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_6258503d_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__ = __webpack_require__(733);
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_script_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_template_compiler_index_id_data_v_6258503d_hasScoped_false_C_Users_hzhaoxutong_AppData_Roaming_npm_node_modules_vusion_cli_node_modules_14_0_0_vusion_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_README_md__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: {
        tdata: [{
            date: 1501977600000,
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            female: '男',
            use: 12,
            total: 20
        }, {
            date: 1502236800000,
            name: '王大虎',
            address: '上海市普陀区金沙江路 1517 弄',
            female: '女',
            use: 12,
            total: 20
        }, {
            date: 1503100800000,
            name: '天王盖地虎',
            address: '上海市普陀区金沙江路 1519 弄',
            female: '男',
            use: 12,
            total: 20
        }, {
            date: 1503964800000,
            name: '小鸡炖蘑菇',
            address: '上海市普陀区金沙江路 1516 弄',
            female: '女',
            use: 12,
            total: 20
        }],
        options: [{
            name: '全部',
            value: ''
        }, {
            name: '男',
            value: '男'
        }, {
            name: '女',
            value: '女'
        }],
        value: '',
        current: {},
        visible: false
    },
    methods: {
        filterMethod(value, columnValue) {
            if (value === '') return true;
            return columnValue === value;
        },
        dateFormat(row) {
            const value = row.date;
            const year = new Date(value).getFullYear();
            let month = new Date(value).getMonth() + 1;
            month += '';
            if (month.length === 1) month = '0' + month;
            const date = new Date(value).getDate();
            return year + '-' + month + '-' + date;
        },
        click(row) {
            console.log('click');
            console.log(row);
            this.visible = true;
            this.current = row;
        }
    }
});

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('u-article', [_c('h1', [_vm._v("表格（Table）")]), _vm._v(" "), _c('h2', [_vm._v("示例")]), _vm._v(" "), _c('h3', [_vm._v("基本形式")]), _vm._v(" "), _c('h3', [_vm._v("demo1 排序和格式化")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('div', [_c('u-table-view', {
      attrs: {
        "data": _vm.tdata
      }
    }, [_c('u-table-view-column', {
      attrs: {
        "title": "日期",
        "label": "date",
        "sortable": ""
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "姓名",
        "label": "name",
        "formatter": _vm.formatter
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "地址",
        "label": "address"
      }
    })], 1)], 1)]
  ], 2), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-vue"
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
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"tdata\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"日期\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"date\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("sortable")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"姓名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"name\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":formatter")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"formatter\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"地址\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"address\"")]), _vm._v(" >")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "javascript"
    }
  }, [_vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("default")]), _vm._v(" {\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("data")]), _vm._v(": {\n        "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("tdata")]), _vm._v(": [{\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-02'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'王小虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1518 弄'")]), _vm._v(",\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-04'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'王大虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1517 弄'")]), _vm._v("\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-01'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'天王盖地虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1519 弄'")]), _vm._v("\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-03'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'小鸡炖蘑菇'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1516 弄'")]), _vm._v("\n        }],\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        formatter(row, column) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" (row.name === "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'天王盖地虎'")]), _vm._v(")\n                "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'逗比一号'")]), _vm._v(";\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("else")]), _vm._v("\n                "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" row.name;\n        }\n    }\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("demo2 自定义排序方法")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-table-view', {
      attrs: {
        "data": _vm.tdata
      }
    }, [_c('u-table-view-column', {
      attrs: {
        "title": "日期",
        "label": "date",
        "sortable": "",
        "sort-method": _vm.sortMethod
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "姓名",
        "label": "name"
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "地址",
        "label": "address"
      }
    })], 1)]
  ], 2), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-vue"
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
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"tdata\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"日期\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"date\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("sortable")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":sort-method")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"sortMethod\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"姓名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"name\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"地址\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"address\"")]), _vm._v(" >")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "javascript"
    }
  }, [_vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("default")]), _vm._v(" {\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("data")]), _vm._v(": {\n        "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("tdata")]), _vm._v(": [{\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-02'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'王小虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1518 弄'")]), _vm._v(",\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-04'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'王大虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1517 弄'")]), _vm._v("\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-01'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'天王盖地虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1519 弄'")]), _vm._v("\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-03'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'小鸡炖蘑菇'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1516 弄'")]), _vm._v("\n        }],\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        sortMethod(a, b) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("let")]), _vm._v(" va = "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Date")]), _vm._v("(a).getTime();\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("let")]), _vm._v(" vb = "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Date")]), _vm._v("(b).getTime();\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" (va -vb < "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("0")]), _vm._v(")\n                "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(";\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("else")]), _vm._v("\n                "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(";\n        }\n    }\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("demo3 全选")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-table-view', {
      attrs: {
        "data": _vm.tdata
      }
    }, [_c('u-table-view-column', {
      attrs: {
        "type": "selection"
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "日期",
        "label": "date",
        "sortable": ""
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "姓名",
        "label": "name"
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "地址",
        "label": "address"
      }
    })], 1)]
  ], 2), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-vue"
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
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"tdata\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("type")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"selection\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"日期\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"date\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("sortable")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"姓名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"name\"")]), _vm._v(" >")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"地址\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"address\"")]), _vm._v(" >")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "javascript"
    }
  }, [_vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("default")]), _vm._v(" {\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("data")]), _vm._v(": {\n        "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("tdata")]), _vm._v(": [{\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-02'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'王小虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1518 弄'")]), _vm._v(",\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-04'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'王大虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1517 弄'")]), _vm._v("\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-01'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'天王盖地虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1519 弄'")]), _vm._v("\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'2016-05-03'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'小鸡炖蘑菇'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1516 弄'")]), _vm._v("\n        }],\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        formatter(row, column) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" (row.name === "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'天王盖地虎'")]), _vm._v(")\n                "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'逗比一号'")]), _vm._v(";\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("else")]), _vm._v("\n                "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" row.name;\n        }\n    }\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("demo4 select")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('u-table-view', {
      attrs: {
        "data": _vm.tdata
      }
    }, [_c('u-table-view-column', {
      attrs: {
        "title": "日期",
        "label": "date",
        "sortable": "",
        "formatter": _vm.dateFormat
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "姓名",
        "label": "name"
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "地址",
        "label": "address"
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "性别",
        "label": "female",
        "filter": "",
        "options": _vm.options,
        "value": _vm.value,
        "filter-method": _vm.filterMethod
      }
    })], 1)]
  ], 2), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-vue"
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
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"tdata\"")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"日期\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"date\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("sortable")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":formatter")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"dateFormat\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"姓名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"name\"")]), _vm._v(" >")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"地址\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"address\"")]), _vm._v(" >")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"性别\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"female\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("filter")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":options")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"options\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"value\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":filter-method")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"filterMethod\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "javascript"
    }
  }, [_vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("default")]), _vm._v(" {\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("data")]), _vm._v(": {\n        "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("tdata")]), _vm._v(": [{\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1501977600000")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'王小虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1518 弄'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("female")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'男'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("use")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("total")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("20")]), _vm._v(",\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1502236800000")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'王大虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1517 弄'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("female")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'女'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("use")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("total")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("20")]), _vm._v(",\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1503100800000")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'天王盖地虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1519 弄'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("female")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'男'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("use")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("total")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("20")]), _vm._v(",\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1503964800000")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'小鸡炖蘑菇'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1516 弄'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("female")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'女'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("use")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("total")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("20")]), _vm._v(",\n        }],\n        "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("options")]), _vm._v(": [\n            {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'全部'")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n            },\n            {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'男'")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'男'")]), _vm._v("\n            },\n            {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'女'")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'女'")]), _vm._v("\n            },\n        ],\n        "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v("\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        filterMethod(value, columnValue) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" (value === "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(")\n                "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(";\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" columnValue === value;\n        },\n        dateFormat(row) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("const")]), _vm._v(" value = row.date;\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("const")]), _vm._v(" year = "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Date")]), _vm._v("(value).getFullYear();\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("let")]), _vm._v(" month = "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Date")]), _vm._v("(value).getMonth() + "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v(";\n            month += "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(";\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v("(month.length === "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v(")\n                month = "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'0'")]), _vm._v(" + month;\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("const")]), _vm._v(" date = "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Date")]), _vm._v("(value).getDate();\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" year + "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'-'")]), _vm._v(" + month + "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'-'")]), _vm._v(" + date;\n        },\n    }\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("demo5 作用域插槽方式")]), _vm._v(" "), _c('div', {
    staticClass: "u-example"
  }, [
    [_c('div', [_c('u-table-view', {
      attrs: {
        "data": _vm.tdata
      }
    }, [_c('u-table-view-column', {
      attrs: {
        "title": "日期",
        "label": "date",
        "sortable": "",
        "formatter": _vm.dateFormat
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "姓名",
        "label": "name"
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "地址",
        "label": "address",
        "tooltip": ""
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "性别",
        "width": "30%",
        "label": "female",
        "filter": "",
        "options": _vm.options,
        "value": _vm.value,
        "filter-method": _vm.filterMethod
      }
    }), _c('u-table-view-column', {
      attrs: {
        "title": "占比"
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function(scope) {
          return [_c('u-button', {
            on: {
              "click": function($event) {
                _vm.click(scope.row)
              }
            }
          }, [_vm._v("配置")])]
        }
      }])
    })], 1), _c('u-modal', {
      attrs: {
        "visible": _vm.visible
      },
      on: {
        "update:visible": function($event) {
          _vm.visible = $event
        }
      }
    }, [_c('div', [_c('span', [_vm._v(_vm._s(_vm.current.name))]), _c('span', {
      staticStyle: {
        "margin-left": "10px"
      }
    }, [_vm._v(_vm._s(_vm.current.address))])])])], 1)]
  ], 2), _vm._v(" "), _c('pre', {
    pre: true,
    attrs: {
      "class": "hljs lang-vue"
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
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":data")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"tdata\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"日期\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"date\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("sortable")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":formatter")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"dateFormat\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"姓名\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"name\"")]), _vm._v(" >")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"地址\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"address\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("tooltip")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"性别\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("width")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"30%\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"female\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("filter")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":options")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"options\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":value")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"value\"")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":filter-method")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"filterMethod\"")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"占比\"")]), _vm._v(">")]), _vm._v("\n                "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("scope")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"scope\"")]), _vm._v(">")]), _vm._v("\n                    "), _c('span', {
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
  }, [_vm._v("@click")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"click(scope.row)\"")]), _vm._v(">")]), _vm._v("配置"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-button")]), _vm._v(">")]), _vm._v("\n                "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view-column")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-table-view")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-modal")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":visible.sync")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"visible\"")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n                "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("{{current.name}}"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n                "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("style")]), _vm._v("="), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"margin-left:10px;\"")]), _vm._v(">")]), _vm._v("{{current.address}}"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("span")]), _vm._v(">")]), _vm._v("\n            "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("div")]), _vm._v(">")]), _vm._v("\n        "), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("u-modal")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
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
  }, [_vm._v("template")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _c('span', {
    attrs: {
      "class": "javascript"
    }
  }, [_vm._v("\n"), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("default")]), _vm._v(" {\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("data")]), _vm._v(": {\n        "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("tdata")]), _vm._v(": [{\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1501977600000")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'王小虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1518 弄'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("female")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'男'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("use")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("total")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("20")]), _vm._v(",\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1502236800000")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'王大虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1517 弄'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("female")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'女'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("use")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("total")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("20")]), _vm._v(",\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1503100800000")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'天王盖地虎'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1519 弄'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("female")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'男'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("use")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("total")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("20")]), _vm._v(",\n        }, {\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("date")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1503964800000")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'小鸡炖蘑菇'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("address")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'上海市普陀区金沙江路 1516 弄'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("female")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'女'")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("use")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("12")]), _vm._v(",\n            "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("total")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("20")]), _vm._v(",\n        }],\n        "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("options")]), _vm._v(": [\n            {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'全部'")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n            },\n            {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'男'")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'男'")]), _vm._v("\n            },\n            {\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("name")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'女'")]), _vm._v(",\n                "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'女'")]), _vm._v("\n            },\n        ],\n        "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n        "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("current")]), _vm._v(": {},\n        "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("visible")]), _vm._v(": "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(",\n    },\n    "), _c('span', {
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        filterMethod(value, columnValue) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" (value === "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(")\n                "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(";\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" columnValue === value;\n        },\n        dateFormat(row) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("const")]), _vm._v(" value = row.date;\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("const")]), _vm._v(" year = "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Date")]), _vm._v("(value).getFullYear();\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("let")]), _vm._v(" month = "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Date")]), _vm._v("(value).getMonth() + "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v(";\n            month += "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(";\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v("(month.length === "), _c('span', {
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v(")\n                month = "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'0'")]), _vm._v(" + month;\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("const")]), _vm._v(" date = "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Date")]), _vm._v("(value).getDate();\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" year + "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'-'")]), _vm._v(" + month + "), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'-'")]), _vm._v(" + date;\n        },\n        click(row) {\n            "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log("), _c('span', {
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'click'")]), _vm._v(");\n            "), _c('span', {
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log(row);\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".visible = "), _c('span', {
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(";\n            "), _c('span', {
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".current = row;\n        }\n    }\n};\n")]), _c('span', {
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("script")]), _vm._v(">")]), _vm._v("\n")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});