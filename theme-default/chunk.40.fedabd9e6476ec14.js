"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?4c1956f78ca2ac1a8893ccd86a386d2c") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?4c1956f78ca2ac1a8893ccd86a386d2c#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?4c1956f78ca2ac1a8893ccd86a386d2c") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?4c1956f78ca2ac1a8893ccd86a386d2c#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?4c1956f78ca2ac1a8893ccd86a386d2c") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?4c1956f78ca2ac1a8893ccd86a386d2c#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?4c1956f78ca2ac1a8893ccd86a386d2c") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?4c1956f78ca2ac1a8893ccd86a386d2c#vusion-icon-font") format("svg");\n}'},webpackJsonp([40],{200:function(s,t,a){function h(s){return(s||window.ICON_FONT_STYLE).styleContent||""}function i(s){var t=document.createElement("style"),a=document.getElementsByTagName("head")[0];t.innerHTML=h(s),t.id=r,t.type="text/css",a?a.appendChild(t):window.addEventListener("load",function(){a.appendChild(t)})}var r="ICON-FONT-FILE-STYLE";s.exports=function(){window.HAS_CREATE_FONT_STYLE||(i(),window.HAS_CREATE_FONT_STYLE=!0)}},255:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h={render:function(){var s=this.$createElement;return(this._self._c||s)("u-bar-chart",{attrs:{border:"",legend:"",title:this.title,"x-axis":this.xaxis,"y-axis":this.yaxis,series:this.series,data:this.data}})},staticRenderFns:[]},i={render:function(){var s=this.$createElement;return(this._self._c||s)("u-bar-chart",{attrs:{border:"",legend:"",stack:this.stack,title:this.title,"x-axis":this.xaxis,"y-axis":this.yaxis,series:this.series,data:this.data}})},staticRenderFns:[]},r={components:{Ce3d994:a(0)({data:function(){return{title:"每星期访问量",xaxis:{key:"week"},yaxis:{min:0},series:[{key:"number",name:"访问量"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}}},h,!1,null,null,null).exports,C56220b:a(0)({data:function(){return{title:"每星期访问量",xaxis:{key:"week"},yaxis:{min:0},stack:"stack",series:[{key:"rds"},{key:"ncr"},{key:"nce"}],data:[{week:"星期一",rds:150,ncr:200,nce:50},{week:"星期二",rds:300,ncr:340,nce:20},{week:"星期三",rds:28,ncr:56,nce:28},{week:"星期四",rds:200,ncr:78,nce:40},{week:"星期五",rds:74,ncr:100,nce:74},{week:"星期六",rds:532,ncr:200,nce:32},{week:"星期日",rds:420,ncr:260,nce:20}]}}},i,!1,null,null,null).exports}},n={render:function(){var s=this.$createElement,t=this._self._c||s;return t("u-article",[t("h1",[this._v("柱状图 BarChart")]),t("h2",[this._v("示例")]),t("h3",[this._v("基本形式")]),t("div",{staticClass:"u-example"},[t("u-bar-chart",{attrs:{border:"",legend:"",title:"每星期访问量","x-axis":{key:"week"},"y-axis":{min:0},series:[{key:"number",name:"访问量"}],data:[{week:"星期一",number:150},{week:"星期二",number:300},{week:"星期三",number:28},{week:"星期四",number:200},{week:"星期五",number:74},{week:"星期六",number:532},{week:"星期日",number:420}]}})],1),t("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-bar-chart")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("border")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("legend")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"每星期访问量"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":x-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"{ key: 'week' }\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":y-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"{ min: 0 }"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":series")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{key: 'number', name: '访问量' }]\"")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v("\"[{ week: '星期一', number: 150 }, { week: '星期二', number: 300 }, { week: '星期三', number: 28 }, { week: '星期四', number: 200 }, { week: '星期五', number: 74 }, { week: '星期六', number: 532 }, { week: '星期日', number: 420 }]\"")]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-bar-chart")]),this._v(">")]),this._v("\n")])]),t("h4",[this._v("命令式")]),t("div",{staticClass:"u-example"},[t("Ce3d994")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-bar-chart")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("border")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("legend")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"title"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":x-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"xaxis"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":y-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"yaxis"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":series")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"series"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"data"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-bar-chart")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n\tdata() {\n\t\t"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'每星期访问量'")]),this._v(",\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("xaxis")]),this._v(": { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("key")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'week'")]),this._v(" },\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("yaxis")]),this._v(": { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("min")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("0")]),this._v(" },\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("series")]),this._v(": [{"),t("span",{attrs:{class:"hljs-attr"}},[this._v("key")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'number'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("name")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'访问量'")]),this._v(" }],\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("data")]),this._v(": [{ "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期一'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("150")]),this._v(" }, { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期二'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("300")]),this._v(" }, { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期三'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("28")]),this._v(" }, { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期四'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("200")]),this._v(" }, { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期五'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("74")]),this._v(" }, { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期六'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("532")]),this._v(" }, { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期日'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("number")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("420")]),this._v(" }],\n\t\t}\n\t}\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),t("h4",[this._v("堆叠数据")]),t("div",{staticClass:"u-example"},[t("C56220b")],1),t("pre",{pre:!0,attrs:{class:"hljs lang-vue"}},[t("code",{attrs:{"v-pre":""}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-bar-chart")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("border")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v("legend")]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":stack")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"stack"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":title")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"title"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":x-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"xaxis"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":y-axis")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"yaxis"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":series")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"series"')]),this._v(" "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":data")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"data"')]),this._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("u-bar-chart")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{attrs:{class:"javascript"}},[this._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n\tdata() {\n\t\t"),t("span",{attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'每星期访问量'")]),this._v(",\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("xaxis")]),this._v(": { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("key")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'week'")]),this._v(" },\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("yaxis")]),this._v(": { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("min")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("0")]),this._v(" },\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("stack")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'stack'")]),this._v(",\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("series")]),this._v(": [{ "),t("span",{attrs:{class:"hljs-attr"}},[this._v("key")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'rds'")]),this._v(" }, { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("key")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'ncr'")]),this._v(" }, { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("key")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'nce'")]),this._v(" }],\n\t\t\t"),t("span",{attrs:{class:"hljs-attr"}},[this._v("data")]),this._v(": [\n\t\t\t\t{ "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期一'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("rds")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("150")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("ncr")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("200")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("nce")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("50")]),this._v(" },\n\t            { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期二'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("rds")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("300")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("ncr")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("340")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("nce")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("20")]),this._v(" },\n\t            { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期三'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("rds")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("28")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("ncr")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("56")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("nce")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("28")]),this._v(" },\n\t            { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期四'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("rds")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("200")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("ncr")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("78")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("nce")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("40")]),this._v(" },\n\t            { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期五'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("rds")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("74")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("ncr")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("100")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("nce")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("74")]),this._v(" },\n\t            { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期六'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("rds")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("532")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("ncr")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("200")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("nce")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("32")]),this._v(" },\n\t            { "),t("span",{attrs:{class:"hljs-attr"}},[this._v("week")]),this._v(": "),t("span",{attrs:{class:"hljs-string"}},[this._v("'星期日'")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("rds")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("420")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("ncr")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("260")]),this._v(", "),t("span",{attrs:{class:"hljs-attr"}},[this._v("nce")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("20")]),this._v(" },\n\t\t\t],\n\t\t}\n\t}\n};\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])])])},staticRenderFns:[]},l=a(0)(r,n,!1,null,null,null);t.default=l.exports}});