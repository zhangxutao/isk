(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-633c6bf9"],{1200:function(t,e,s){},"32c2":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home",class:[t.isMobile?"mobilehome":""]},[s("main-header"),s("div",{staticClass:"homeRight"},[t.isShowView?s("router-view"):t._e()],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainHeader",class:[t.isMobile?"mobileMainHeader":""]},[s("div",{staticClass:"logo"},[s("div",[s("h1",{staticStyle:{"font-size":"30px"}},[t._v(t._s(t.sysName))]),s("h2",{staticStyle:{"margin-top":"5px","font-size":"15px"}},[t._v(t._s(t.sysNameEn)+" ")])])]),s("ul",{directives:[{name:"stopDouble",rawName:"v-stopDouble"}],staticClass:"nav"},t._l(t.navs,(function(e,i){return s("li",{key:i,class:{current:t.currentMenu.sid==e.sid},on:{click:function(s){return t.gotoDetail(e)}}},[t._v(t._s(e.label))])})),0),s("ul",{directives:[{name:"stopDouble",rawName:"v-stopDouble"}],staticClass:"icons"},[s("li",{staticClass:"user"},[s("i",{staticClass:"iconfont iconu502"}),t._v(" "+t._s(t.userName)+" ")]),s("li",{staticClass:"line"},[t._v("|")]),s("li",{staticClass:"zhuxiao",on:{click:function(e){return t.logout()}}},[s("i",{staticClass:"iconfont iconzhuxiao1"}),s("span",[t._v("注销")])])])])},n=[],r=(s("14d9"),{data(){return{isMobile:/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),sysName:GLOBAL_CONFIG.sysName,sysNameEn:GLOBAL_CONFIG.sysNameEn,isShowDropdown:!1,currentMenu:{},userName:"",navs:[{label:"常识",sid:1,path:"/cspd"},{label:"阅读理解",sid:2,path:"/yylj"},{label:"判断推理",sid:3,path:"/pdtl"},{label:"资料分析",sid:4,path:"/zlfx"},{label:"数量关系",sid:5,path:"/slgx"},{label:"申论",sid:6,path:"/sl"}],currentDropdownState:""}},created(){let t=sessionStorage.getItem(GLOBAL_CONFIG.token);t&&this.getUserInfo(t),this.gotoDetail(this.navs[0])},methods:{hideDropdownFn(){this.currentDropdownState="",this.isShowDropdown=!1},getUserInfo(t){this.http.post(GLOBAL_CONFIG.base+"/user/getCurrentUser",{token:t}).then(t=>{if(t&&t.data){let e=t.data.data;localStorage.setItem(GLOBAL_CONFIG.userFlag,e.userFlag),localStorage.getItem(GLOBAL_CONFIG.userInfo)?(localStorage.removeItem(GLOBAL_CONFIG.userInfo),localStorage.setItem(GLOBAL_CONFIG.userInfo,JSON.stringify(e))):localStorage.setItem(GLOBAL_CONFIG.userInfo,JSON.stringify(e)),this.userName=e.userName}})},gotoDetail(t){this.currentMenu=t;let e=this.$route.matched[1]?this.$route.matched[1].path:"",s=t.path;e!=s&&this.$router.replace(s)},goTymh(){window.location.href=GLOBAL_CONFIG.tymh_url},logout(){this.$confirm("您确定要退出登录吗？","提示",{distinguishCancelAndClose:!0,closeOnClickModal:!1,cancelButtonText:"取消",confirmButtonText:"确定"}).then(()=>{this.$router.push({path:"door"})}).catch(t=>{})}}}),l=r,c=(s("b97e"),s("3bec")),u=Object(c["a"])(l,o,n,!1,null,"10407314",null),h=u.exports,d={name:"Home",components:{mainHeader:h},data(){return{isMobile:/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),isShowView:!0}},methods:{reload(){this.isShowView=!1,this.$nextTick(()=>{this.isShowView=!0})}}},m=d,p=(s("954b"),Object(c["a"])(m,i,a,!1,null,"2032768c",null));e["default"]=p.exports},"70c1":function(t,e,s){},"954b":function(t,e,s){"use strict";var i=s("1200"),a=s.n(i);a.a},b97e:function(t,e,s){"use strict";var i=s("70c1"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-633c6bf9.c9bd32a0.js.map