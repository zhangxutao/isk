(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-357ea596"],{1391:function(s,e,a){},4969:function(s,e,a){"use strict";e["a"]={data(){return{isMobile:/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}},created(){},methods:{}}},"4a46":function(s,e,a){"use strict";a.r(e);var i=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{ref:"mianscroll",staticClass:"system flex"},[a("div",{staticClass:"left",class:[s.isMobile?"mobileLeft":""]},[a("zz-tree",{ref:"tree",attrs:{datalist:s.treeData,nodeClick:s.currentTree,width:"200"},on:{"update:nodeClick":function(e){s.currentTree=e},"update:node-click":function(e){s.currentTree=e}}})],1),a("div",{staticClass:"right",class:[s.isMobile?"mobileRight":""]},[a("div",{staticClass:"con"},[a(s.classnames,{tag:"component",staticClass:"markdown-body"})],1)])])},t=[],n=a("4969"),l={mixins:[n["a"]],components:{},data(){return{treeData:[{fjid:0,sid:1,label:"判断推理",classnames:""},{fjid:1,sid:2,label:"图形推理—平移",classnames:""},{fjid:1,sid:3,label:"平面类",classnames:""},{fjid:1,sid:4,label:"立体类",classnames:""},{fjid:1,sid:5,label:"类比推理",classnames:""},{fjid:1,sid:6,label:"定义判断",classnames:""},{fjid:1,sid:7,label:"翻译推理",classnames:""},{fjid:1,sid:8,label:"分析推理",classnames:""},{fjid:1,sid:9,label:"真假推理.归纳推理.原因解释",classnames:""},{fjid:1,sid:10,label:"论证",classnames:""}],classnames:"",currentTree:{}}},created(){},watch:{currentTree(s){this.classnames=s.classnames}},methods:{init(){},reload(){this.isViewShow=!1,this.$nextTick(()=>{this.isViewShow=!0})}}},c=l,d=(a("5864"),a("3bec")),r=Object(d["a"])(c,i,t,!1,null,"f445474a",null);e["default"]=r.exports},5864:function(s,e,a){"use strict";var i=a("1391"),t=a.n(i);t.a}}]);
//# sourceMappingURL=chunk-357ea596.3a30f28b.js.map