(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bba5c38"],{"52d0":function(t,e,s){},"58ac":function(t,e,s){},9689:function(t,e,s){"use strict";var i=s("52d0"),a=s.n(i);a.a},a678:function(t,e,s){"use strict";var i=s("58ac"),a=s.n(i);a.a},f008:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home",class:[t.isMobile?"mobilehome":""]},[s("main-header"),s("div",{staticClass:"homeRight"},[t.isShowView?s("router-view"):t._e()],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mainHeader",class:[t.isMobile?"mobileMainHeader":""]},[s("div",{staticClass:"logo"},[s("div",[s("h1",{staticStyle:{"font-size":"30px"}},[t._v(t._s(t.sysName))]),s("h2",{staticStyle:{"margin-top":"5px","font-size":"15px"}},[t._v(t._s(t.sysNameEn)+" ")])])]),s("ul",{directives:[{name:"stopDouble",rawName:"v-stopDouble"}],staticClass:"nav"},t._l(t.navs,(function(e,i){return s("li",{key:i,class:{current:t.currentMenu.sid==e.sid},on:{click:function(s){return t.gotoDetail(e)}}},[t._v(t._s(e.label))])})),0),s("ul",{directives:[{name:"stopDouble",rawName:"v-stopDouble"}],staticClass:"icons"},[s("li",{staticClass:"user"},[s("i",{staticClass:"iconfont iconu502"}),t._v(" "+t._s(t.userName)+" ")]),s("li",{staticClass:"line"},[t._v("|")]),s("li",{staticClass:"zhuxiao",on:{click:function(e){return t.logout()}}},[s("i",{staticClass:"iconfont iconzhuxiao1"}),s("span",[t._v("注销")])])])])},n=[],r=(s("14d9"),{data(){return{isMobile:/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),sysName:GLOBAL_CONFIG.sysName,sysNameEn:GLOBAL_CONFIG.sysNameEn,isShowDropdown:!1,currentMenu:{},userName:"",navs:[{label:"常识",sid:1,path:"/cs"}],currentDropdownState:""}},created(){let t=sessionStorage.getItem(GLOBAL_CONFIG.token);t&&this.getUserInfo(t),this.gotoDetail(this.navs[0])},methods:{hideDropdownFn(){this.currentDropdownState="",this.isShowDropdown=!1},getUserInfo(t){this.http.post(GLOBAL_CONFIG.base+"/user/getCurrentUser",{token:t}).then(t=>{if(t&&t.data){let e=t.data.data;localStorage.setItem(GLOBAL_CONFIG.userFlag,e.userFlag),localStorage.getItem(GLOBAL_CONFIG.userInfo)?(localStorage.removeItem(GLOBAL_CONFIG.userInfo),localStorage.setItem(GLOBAL_CONFIG.userInfo,JSON.stringify(e))):localStorage.setItem(GLOBAL_CONFIG.userInfo,JSON.stringify(e)),this.userName=e.userName}})},gotoDetail(t){this.currentMenu=t;let e=this.$route.matched[1]?this.$route.matched[1].path:"",s=t.path;e!=s&&this.$router.replace(s)},goTymh(){window.location.href=GLOBAL_CONFIG.tymh_url},logout(){this.$confirm("您确定要退出登录吗？","提示",{distinguishCancelAndClose:!0,closeOnClickModal:!1,cancelButtonText:"取消",confirmButtonText:"确定"}).then(()=>{this.$router.push({path:"door"})}).catch(t=>{})}}}),l=r,c=(s("a678"),s("3bec")),u=Object(c["a"])(l,o,n,!1,null,"1bb68413",null),h=u.exports,d={name:"Home",components:{mainHeader:h},data(){return{isMobile:/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),isShowView:!0}},methods:{reload(){this.isShowView=!1,this.$nextTick(()=>{this.isShowView=!0})}}},m=d,f=(s("9689"),Object(c["a"])(m,i,a,!1,null,"71f620de",null));e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-3bba5c38.266199ff.js.map