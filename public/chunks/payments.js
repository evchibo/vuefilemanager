(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"9ZF6":function(t,e,a){"use strict";var n={name:"CardNavigation",props:["pages"],computed:{routeName:function(){return this.$route.name}}},s=a("KHd+"),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"whitespace-nowrap overflow-x-auto"},t._l(t.pages,(function(e,n){return a("router-link",{key:n,staticClass:"inline-block text-sm font-bold px-4 py-5 border-b-2 border-transparent border-bottom-theme",class:{"text-theme":t.routeName===e.route,"dark:text-gray-400 text-gray-600":t.routeName!==e.route},attrs:{to:{name:e.route},replace:""}},[t._v("\n\t\t"+t._s(e.title)+"\n\t")])})),1)}),[],!1,null,null,null);e.a=r.exports},znQZ:function(t,e,a){"use strict";a.r(e);var n={name:"PaymentSettings",components:{CardNavigation:a("9ZF6").a},data:function(){return{pages:[{title:this.$t("admin_settings.tabs.payments"),route:"AppPayments"},{title:this.$t("admin_settings.tabs.billings"),route:"AppBillings"}]}},mounted:function(){this.$router.replace({name:"AppPayments"})}},s=a("KHd+"),r=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"card shadow-card sticky top-0 z-10",staticStyle:{"padding-bottom":"0","padding-top":"0"}},[e("CardNavigation",{staticClass:"-mx-1",attrs:{pages:this.pages}})],1),this._v(" "),e("router-view")],1)}),[],!1,null,null,null);e.default=r.exports}}]);