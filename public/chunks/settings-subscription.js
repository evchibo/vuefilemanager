(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"/KYE":function(t,a,e){"use strict";e("joq4")},"1G3X":function(t,a,e){"use strict";e("dX2P")},"3sV/":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".page-tab-group[data-v-445d3e0e]{margin-bottom:65px}",""])},"4YFD":function(t,a,e){"use strict";e("lX4n")},"5hN9":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"",""])},"6TPS":function(t,a,e){"use strict";var i=e("CjXH"),s={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}},n=(e("YLwN"),e("KHd+")),o=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",{staticClass:"table-row"},t._l(t.normalizedColumns,(function(a,i){return e("td",{key:i,staticClass:"table-cell"},[e("span",[t._v(t._s(a))])])})),0)}),[],!1,null,"b0f3a8d0",null).exports,r=e("vDqi"),l=e.n(r),c={name:"DatatableWrapper",props:["columns","scope","paginator","api","tableData"],components:{ChevronRightIcon:i.i,ChevronLeftIcon:i.h,DatatableCell:o,ChevronUpIcon:i.j},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(t){t>this.data.meta.last_page||0===t||(this.pageIndex=t,this.getPage(t))},sort:function(t,a){a&&(this.filter.field=t,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(t){var a=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+t),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,l.a.get(this.URI).then((function(t){a.data=t.data,a.$emit("data",t.data)})).catch((function(){return a.$isSomethingWrong()})).finally((function(){a.$emit("init",!0),a.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}},d=(e("4YFD"),Object(n.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"datatable"},[t.hasData?e("table",{staticClass:"table"},[e("thead",{staticClass:"table-header"},[e("tr",t._l(t.columns,(function(a,i){return a.hidden?t._e():e("th",{key:i,class:{sortable:a.sortable},on:{click:function(e){return t.sort(a.field,a.sortable)}}},[e("span",{staticClass:"text-theme dark-text-theme"},[t._v(t._s(a.label))]),t._v(" "),a.sortable?e("chevron-up-icon",{staticClass:"filter-arrow",class:{"arrow-down":"ASC"===t.filter.sort},attrs:{size:"14"}}):t._e()],1)})),0)]),t._v(" "),e("tbody",{staticClass:"table-body"},[t._l(t.data.data,(function(a){return t._t("default",[e("DatatableCell",{key:a.id,attrs:{data:a}})],{row:a})}))],2)]):t._e(),t._v(" "),t.isLoading||t.hasData?t._e():t._t("empty-page"),t._v(" "),t.paginator&&t.hasData?e("div",{staticClass:"paginator-wrapper"},[t.data.meta.total>20&&t.data.meta.last_page<=6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t._l(6,(function(a,i){return e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])])})),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),t.data.meta.total>20&&t.data.meta.last_page>6?e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item previous"},[e("a",{staticClass:"page-link",class:{disabled:0==t.pageIndex},on:{click:function(a){return t.goToPage(t.pageIndex-1)}}},[e("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(1)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    1\n                ")])]):t._e(),t._v(" "),t._l(5,(function(a,i){return t.pageIndex<5?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex>=5?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(t.floatPages,(function(a,i){return t.pageIndex>=5&&t.pageIndex<t.data.meta.last_page-3?e("li",{key:i,staticClass:"page-item",on:{click:function(e){return t.goToPage(a)}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===a}},[t._v("\n                    "+t._s(a)+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link"},[t._v("...")])]):t._e(),t._v(" "),t._l(5,(function(a,i){return t.pageIndex>t.data.meta.last_page-4?e("li",{key:i,staticClass:"page-item",on:{click:function(a){t.goToPage(t.data.meta.last_page-(4-i))}}},[e("a",{staticClass:"page-link",class:{active:t.pageIndex===t.data.meta.last_page-(4-i)}},[t._v("\n                    "+t._s(t.data.meta.last_page-(4-i))+"\n                ")])]):t._e()})),t._v(" "),t.pageIndex<t.data.meta.last_page-3?e("li",{staticClass:"page-item",on:{click:function(a){return t.goToPage(t.data.meta.last_page)}}},[e("a",{staticClass:"page-link"},[t._v("\n                    "+t._s(t.data.meta.last_page)+"\n                ")])]):t._e(),t._v(" "),e("li",{staticClass:"page-item next"},[e("a",{staticClass:"page-link",class:{disabled:t.pageIndex+1==t.data.meta.last_page},on:{click:function(a){return t.goToPage(t.pageIndex+1)}}},[e("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):t._e(),t._v(" "),e("span",{staticClass:"paginator-info"},[t._v(t._s(t.$t("datatable.paginate_info",{visible:t.data.meta.per_page,total:t.data.meta.total})))])]):t._e()],2)}),[],!1,null,"484a8dec",null));a.a=d.exports},"8N1S":function(t,a,e){var i=e("3sV/");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},"8PNr":function(t,a,e){var i=e("StbF");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},"8YPn":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"",""])},"9sCX":function(t,a,e){"use strict";e("8N1S")},B023:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".list-info-item[data-v-32ac3d67]{display:block;padding-bottom:20px}.list-info-item .action-button[data-v-32ac3d67]{cursor:pointer}.list-info-item .action-button .edit-icon[data-v-32ac3d67]{display:inline-block;margin-left:3px}.list-info-item b[data-v-32ac3d67]{display:block;font-size:.8125em;margin-bottom:2px}.list-info-item span[data-v-32ac3d67]{display:inline-block;font-size:.875em;font-weight:700;color:#1b2539}.dark-mode .list-info-item .action-button .icon[data-v-32ac3d67],.dark-mode .list-info-item span[data-v-32ac3d67]{color:#bec6cf}",""])},BfOa:function(t,a,e){var i=e("5hN9");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},CK9m:function(t,a,e){var i=e("Wx07");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},GN0Y:function(t,a,e){"use strict";e.r(a);var i=e("6TPS"),s=e("gahf"),n=e("gy3V"),o=e("eZ9V"),r=e("Nv84"),l=e("qefO"),c=e("KnjL"),d=e("VPMc"),p=e("CjXH"),u=e("xCqy"),f=e("vDqi"),b=e.n(f),g={name:"UserSubscription",components:{ExternalLinkIcon:p.v,DatatableWrapper:i.a,ListInfoItem:n.a,PageTabGroup:s.a,ButtonBase:r.a,FormLabel:o.a,ListInfo:d.a,InfoBox:c.a,PageTab:l.a},computed:{cancelButtonText:function(){return this.isConfirmedCancel?this.$t("popup_share_edit.confirm"):this.$t("user_subscription.cancel_plan")},cancelButtonStyle:function(){return this.isConfirmedCancel?"danger-solid":"secondary"},resumeButtonText:function(){return this.isConfirmedResume?this.$t("popup_share_edit.confirm"):this.$t("user_subscription.resume_plan")},resumeButtonStyle:function(){return this.isConfirmedResume?"theme-solid":"secondary"},status:function(){return this.subscription.data.attributes.incomplete?this.$t("global.incomplete"):this.subscription.data.attributes.canceled?this.$t("global.canceled"):this.subscription.data.attributes.active?this.$t("global.active"):void 0}},data:function(){return{subscription:void 0,isConfirmedCancel:!1,isConfirmedResume:!1,isDeleting:!1,isResuming:!1,isLoading:!0}},methods:{cancelSubscription:function(){var t=this;this.isConfirmedCancel?(this.isDeleting=!0,this.isLoading=!0,b.a.post("/api/user/subscription/cancel").then((function(){t.$store.dispatch("getAppData").then((function(){t.fetchSubscriptionDetail()})),u.a.$emit("alert:open",{emoji:"👍",title:t.$t("popup_subscription_cancel.title"),message:t.$t("popup_subscription_cancel.message"),buttonStyle:"theme",button:t.$t("popup_subscription_cancel.button")})})).catch((function(){u.a.$emit("alert:open",{title:t.$t("popup_error.title"),message:t.$t("popup_error.message")})})).finally((function(){t.isDeleting=!1,t.isLoading=!1,t.isConfirmedCancel=!1}))):this.isConfirmedCancel=!0},resumeSubscription:function(){var t=this;this.isConfirmedResume?(this.isResuming=!0,this.isLoading=!0,b.a.post("/api/user/subscription/resume").then((function(){t.$store.dispatch("getAppData").then((function(){t.fetchSubscriptionDetail()})),u.a.$emit("alert:open",{emoji:"👍",title:t.$t("popup_subscription_resumed.title"),message:t.$t("popup_subscription_resumed.message"),buttonStyle:"theme",button:t.$t("popup_subscription_resumed.button")})})).catch((function(){u.a.$emit("alert:open",{title:t.$t("popup_error.title"),message:t.$t("popup_error.message")})})).finally((function(){t.isResuming=!1,t.isLoading=!1,t.isConfirmedResume=!1}))):this.isConfirmedResume=!0},fetchSubscriptionDetail:function(){var t=this;b.a.get("/api/user/subscription").then((function(a){204==a.status&&(t.subscription=void 0),200==a.status&&(t.subscription=a.data)})).finally((function(){t.isLoading=!1}))}},created:function(){this.fetchSubscriptionDetail()}},v=(e("1G3X"),e("KHd+")),m=Object(v.a)(g,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("PageTab",{attrs:{"is-loading":t.isLoading}},[t.subscription&&!t.isLoading?e("PageTabGroup",[e("FormLabel",[t._v("\n            "+t._s(t.$t("user_subscription.title"))+"\n        ")]),t._v(" "),t.subscription.data.attributes.canceled?t._e():e("div",{staticClass:"state active"},[e("ListInfo",{staticClass:"list-info"},[e("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.plan"),content:t.subscription.data.attributes.name+" - "+t.subscription.data.attributes.capacity_formatted}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.billed"),content:t.$t("admin_page_user.subscription.interval_mo")}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.status"),content:t.status}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.created_at"),content:t.subscription.data.attributes.created_at}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.renews_at"),content:t.subscription.data.attributes.ends_at}})],1),t._v(" "),e("div",{staticClass:"plan-action"},[e("ButtonBase",{staticClass:"confirm-button",attrs:{disabled:t.isDeleting,"button-style":t.cancelButtonStyle},nativeOn:{click:function(a){return t.cancelSubscription(a)}}},[t._v("\n                    "+t._s(t.cancelButtonText)+"\n                ")])],1)],1),t._v(" "),t.subscription.data.attributes.canceled?e("div",{staticClass:"state canceled"},[e("ListInfo",{staticClass:"list-info"},[e("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.plan"),content:t.subscription.data.attributes.name+" - "+t.subscription.data.attributes.capacity_formatted}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item",attrs:{title:t.$t("user_subscription.status"),content:t.status}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.canceled_at"),content:t.subscription.data.attributes.canceled_at}}),t._v(" "),e("ListInfoItem",{staticClass:"list-item capitalize",attrs:{title:t.$t("user_subscription.ends_at"),content:t.subscription.data.attributes.ends_at}})],1),t._v(" "),e("div",{staticClass:"plan-action"},[e("ButtonBase",{staticClass:"confirm-button",attrs:{disabled:t.isResuming,"button-style":t.resumeButtonStyle},nativeOn:{click:function(a){return t.resumeSubscription(a)}}},[t._v("\n                    "+t._s(t.resumeButtonText)+"\n                ")])],1)],1):t._e()],1):t._e(),t._v(" "),t.subscription||t.isLoading?t._e():e("InfoBox",[e("p",[t._v(t._s(t.$t("user_subscription.empty")))])])],1)}),[],!1,null,"24f5cdf4",null);a.default=m.exports},HucI:function(t,a,e){"use strict";e("pToe")},KnjL:function(t,a,e){"use strict";var i={name:"InfoBox",props:["type"]},s=(e("twCh"),e("KHd+")),n=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"384ec59e",null);a.a=n.exports},N3BI:function(t,a,e){"use strict";e("8PNr")},StbF:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form-label[data-v-7f5410c4]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-7f5410c4]{margin-right:10px}.form-label .icon circle[data-v-7f5410c4],.form-label .icon line[data-v-7f5410c4],.form-label .icon path[data-v-7f5410c4],.form-label .icon rect[data-v-7f5410c4]{color:inherit}.form-label .label[data-v-7f5410c4]{font-size:1.125em;font-weight:700}.dark-mode .form-label .label[data-v-7f5410c4]{color:#bec6cf}",""])},VPMc:function(t,a,e){"use strict";var i={name:"ListInfo"},s=(e("HucI"),e("KHd+")),n=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("ul",{staticClass:"list-info"},[this._t("default")],2)}),[],!1,null,"fc1884d8",null);a.a=n.exports},Wx07:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".table-row[data-v-b0f3a8d0]{border-radius:8px}.table-row[data-v-b0f3a8d0]:hover{background:#f4f5f6}.table-row .table-cell[data-v-b0f3a8d0]{padding-top:15px;padding-bottom:15px}.table-row .table-cell[data-v-b0f3a8d0]:first-child{padding-left:15px}.table-row .table-cell[data-v-b0f3a8d0]:last-child{padding-right:15px;text-align:right}.table-row .table-cell span[data-v-b0f3a8d0]{font-size:1em;font-weight:700}",""])},YLwN:function(t,a,e){"use strict";e("CK9m")},dX2P:function(t,a,e){var i=e("jhGq");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},eZ9V:function(t,a,e){"use strict";var i=e("CjXH"),s={name:"FormLabel",props:["icon"],components:{KeyIcon:i.J,Edit2Icon:i.u,SettingsIcon:i.cb,SmartphoneIcon:i.eb}},n=(e("N3BI"),e("KHd+")),o=Object(n.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-label"},[t.icon?t._e():e("edit-2-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}),t._v(" "),"settings"===t.icon?e("settings-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"smartphone"===t.icon?e("smartphone-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"key"===t.icon?e("key-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),e("b",{staticClass:"label"},[t._t("default")],2)],1)}),[],!1,null,"7f5410c4",null);a.a=o.exports},gahf:function(t,a,e){"use strict";var i={name:"PageTabGroup"},s=(e("9sCX"),e("KHd+")),n=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"445d3e0e",null);a.a=n.exports},gy3V:function(t,a,e){"use strict";var i={name:"ListInfoItem",props:["title","content"]},s=(e("/KYE"),e("KHd+")),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"list-info-item"},[e("b",{staticClass:"text-theme dark-text-theme"},[t._v(t._s(t.title))]),t._v(" "),t.content?e("span",[t._v(t._s(t.content))]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"32ac3d67",null);a.a=n.exports},hJ7W:function(t,a,e){"use strict";e("BfOa")},jhGq:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".plan-action[data-v-24f5cdf4]{margin-top:10px}.list-info[data-v-24f5cdf4]{display:flex;flex-wrap:wrap}.list-info .list-item[data-v-24f5cdf4]{flex:0 0 50%}",""])},joq4:function(t,a,e){var i=e("B023");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},lX4n:function(t,a,e){var i=e("sS3Q");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},pToe:function(t,a,e){var i=e("8YPn");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},qefO:function(t,a,e){"use strict";var i={name:"PageTab",props:["isLoading"],components:{Spinner:e("zTYo").a}},s=(e("hJ7W"),e("KHd+")),n=Object(s.a)(i,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"page-tab"},[a("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[a("Spinner")],1),this._v(" "),this._t("default")],2)}),[],!1,null,"71034d34",null);a.a=n.exports},qmhD:function(t,a,e){var i=e("z7Fm");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,s);i.locals&&(t.exports=i.locals)},sS3Q:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".datatable[data-v-484a8dec]{height:100%}.table-row[data-v-484a8dec]{transition:all .3s ease}.table-row-enter[data-v-484a8dec],.table-row-leave-to[data-v-484a8dec]{opacity:0;transform:translateY(-100%)}.table-row-leave-active[data-v-484a8dec]{position:absolute}.table[data-v-484a8dec]{border-collapse:collapse;overflow-x:auto}.table[data-v-484a8dec],.table tr[data-v-484a8dec]{width:100%}.table tr td[data-v-484a8dec]:first-child,.table tr th[data-v-484a8dec]:first-child{padding-left:15px}.table tr td[data-v-484a8dec]:last-child,.table tr th[data-v-484a8dec]:last-child{padding-right:15px;text-align:right}.table .table-header[data-v-484a8dec]{margin-bottom:10px}.table .table-header tr td[data-v-484a8dec],.table .table-header tr th[data-v-484a8dec]{padding:12px;text-align:left}.table .table-header tr td span[data-v-484a8dec],.table .table-header tr th span[data-v-484a8dec]{font-weight:700;font-size:.75em;white-space:nowrap}.table .table-header tr td.sortable[data-v-484a8dec],.table .table-header tr th.sortable[data-v-484a8dec]{cursor:pointer}.table .table-header tr td.sortable:hover .filter-arrow[data-v-484a8dec],.table .table-header tr th.sortable:hover .filter-arrow[data-v-484a8dec]{opacity:1}.table .table-header tr td[data-v-484a8dec]:last-child,.table .table-header tr th[data-v-484a8dec]:last-child{text-align:right}.table .table-header .filter-arrow[data-v-484a8dec]{vertical-align:middle;margin-left:8px;transition:all .3s ease;opacity:0}.table .table-header .filter-arrow path[data-v-484a8dec]{fill:rgba(27,37,57,.7)}.table .table-header .filter-arrow.arrow-down[data-v-484a8dec]{transform:rotate(180deg)}.table .table-header span[data-v-484a8dec]{font-size:13px;font-weight:700}.table .table-body tr[data-v-484a8dec]{border-radius:8px}.table .table-body tr[data-v-484a8dec]:hover{background:#f4f5f6}.table .table-body tr td[data-v-484a8dec],.table .table-body tr th[data-v-484a8dec]{padding:12px}.table .table-body tr td:last-child button[data-v-484a8dec],.table .table-body tr th:last-child button[data-v-484a8dec]{margin-right:0}.table .table-body a.page-link[data-v-484a8dec],.table .table-body span[data-v-484a8dec]{font-size:.9375em;font-weight:700;padding:10px 35px 10px 0;display:block;white-space:nowrap}.pagination .page-item[data-v-484a8dec]{padding:3px;display:inline-block}.pagination .page-link[data-v-484a8dec]{width:30px;height:30px;display:block;color:#1b2539;border-radius:6px;text-align:center;line-height:2.4;font-weight:700;font-size:13px;cursor:pointer;transition:all .15s ease}.pagination .page-link .icon[data-v-484a8dec]{vertical-align:middle;margin-top:-2px}.pagination .page-link.active[data-v-484a8dec],.pagination .page-link[data-v-484a8dec]:hover:not(.disabled){background:#f4f5f6;color:#1b2539}.pagination .page-link.disabled[data-v-484a8dec]{background:transparent;cursor:default}.pagination .page-link.disabled svg path[data-v-484a8dec]{fill:rgba(27,37,57,.7)}.paginator-wrapper[data-v-484a8dec]{margin-top:30px;margin-bottom:40px;display:flex;justify-content:space-between;align-items:center}.paginator-wrapper .paginator-info[data-v-484a8dec]{font-size:13px;color:rgba(27,37,57,.7)}.user-preview[data-v-484a8dec]{display:flex;align-items:center;cursor:pointer}.user-preview img[data-v-484a8dec]{width:45px;margin-right:22px}@media only screen and (max-width:690px){.paginator-wrapper[data-v-484a8dec]{display:block;text-align:center}.paginator-wrapper .paginator-info[data-v-484a8dec]{margin-top:10px;display:block}}.dark-mode .table .table-body th[data-v-484a8dec]:hover,.dark-mode .table .table-body tr[data-v-484a8dec]:hover{background:#1e2024}.dark-mode .pagination .page-link[data-v-484a8dec],.dark-mode .paginator-wrapper .paginator-info[data-v-484a8dec]{color:#7d858c}.dark-mode .pagination .page-link svg polyline[data-v-484a8dec]{stroke:#bec6cf}.dark-mode .pagination .page-link.active[data-v-484a8dec],.dark-mode .pagination .page-link[data-v-484a8dec]:hover:not(.disabled){color:#00bc7e;background:rgba(0,188,126,.1)}.dark-mode .pagination .page-link.disabled[data-v-484a8dec]{background:transparent;cursor:default}.dark-mode .pagination .page-link.disabled svg polyline[data-v-484a8dec]{stroke:#7d858c}",""])},twCh:function(t,a,e){"use strict";e("qmhD")},z7Fm:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".info-box[data-v-384ec59e]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-384ec59e]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-384ec59e],.info-box.error p[data-v-384ec59e]{color:#fd397a}.info-box.error a[data-v-384ec59e]{text-decoration:underline}.info-box p[data-v-384ec59e]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-384ec59e],.info-box p[data-v-384ec59e] a{font-size:15px}.info-box p[data-v-384ec59e] b{font-size:15px;font-weight:700}.info-box a[data-v-384ec59e],.info-box b[data-v-384ec59e]{font-weight:700}.info-box a[data-v-384ec59e]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-384ec59e]{margin-top:15px}.info-box ul[data-v-384ec59e],.info-box ul li[data-v-384ec59e],.info-box ul li a[data-v-384ec59e]{display:block}@media only screen and (max-width:690px){.info-box[data-v-384ec59e]{padding:15px}}.dark-mode .info-box[data-v-384ec59e]{background:#1e2024}.dark-mode .info-box p[data-v-384ec59e],.dark-mode .info-box ul li[data-v-384ec59e]{color:#bec6cf}",""])}}]);