"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?4c1956f78ca2ac1a8893ccd86a386d2c") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?4c1956f78ca2ac1a8893ccd86a386d2c#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?4c1956f78ca2ac1a8893ccd86a386d2c") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?4c1956f78ca2ac1a8893ccd86a386d2c#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?4c1956f78ca2ac1a8893ccd86a386d2c") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?4c1956f78ca2ac1a8893ccd86a386d2c#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?4c1956f78ca2ac1a8893ccd86a386d2c") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?4c1956f78ca2ac1a8893ccd86a386d2c#vusion-icon-font") format("svg");\n}'},webpackJsonp([56],{200:function(s,t,a){function h(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function i(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=h(s),t.id=n,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var n="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},210:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("徽章 Badge")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("div",{staticClass:"u-example"},[t("p",[this._v("消息 "),t("u-badge",{attrs:{value:3}})],1),t("p",[this._v("消息 "),t("u-badge",{attrs:{value:"new"}})],1)]),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("消息 "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"3"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("消息 "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"new"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("右上角")]),t("div",{staticClass:"u-example"},[t("u-badge",{attrs:{value:3,corner:""}},[t("u-button",[this._v("评论")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"3"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("corner")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("评论"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("最大值")]),t("div",{staticClass:"u-example"},[t("u-badge",{attrs:{value:120,max:99,corner:""}},[t("u-button",[this._v("评论")])],1)],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"120"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":max")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"99"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("corner")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("评论"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(">")]),this._v("\n")])]),t("h3",[this._v("小圆点")]),t("div",{staticClass:"u-example"},[t("p",[this._v("消息 "),t("u-badge",{attrs:{value:3,dot:""}})],1),t("p",[t("u-badge",{attrs:{value:3,corner:"",dot:""}},[t("u-button",[this._v("评论")])],1)],1)]),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("消息 "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"3"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("dot")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":value")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"3"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("corner")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("dot")]),this._v(">")]),this._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("评论"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-button")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-badge")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n")])]),t("h2",[this._v("API")]),t("h3",[this._v("Props/Attrs")]),t("table",[t("thead",[t("tr",[t("th",[this._v("Prop/Attr")]),t("th",[this._v("Type")]),t("th",[this._v("Default")]),t("th",[this._v("Description")])])]),t("tbody",[t("tr",[t("td",[this._v("value")]),t("td",[this._v("Number | String")]),t("td"),t("td",[this._v("显示的值")])]),t("tr",[t("td",[this._v("max")]),t("td",[this._v("Number")]),t("td"),t("td",[this._v("最大值，超过最大值会显示为"),t("code",{pre:!0},[this._v("max+")]),this._v("的形式，要求"),t("code",{pre:!0},[this._v("value")]),this._v("是 "),t("code",{pre:!0},[this._v("Number")]),this._v("类型。")])]),t("tr",[t("td",[this._v("corner")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否插入到右上角")])]),t("tr",[t("td",[this._v("dot")]),t("td",[this._v("Boolean")]),t("td",[t("code",{pre:!0},[this._v("false")])]),t("td",[this._v("是否显示为小圆点")])])])]),t("h3",[this._v("Slots")]),t("h4",[this._v("(default)")]),t("p",[this._v("插入需要附加徽章的元素。")])])},staticRenderFns:[]},i=a(0)(null,h,!1,null,null,null);t.default=i.exports}});