(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"4TWA":function(a,e,t){"use strict";var i=t("CjXH"),o=t("LvDl"),n={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:i.u,UserIcon:i.mb,ChevronDownIcon:i.g},watch:{query:Object(o.debounce)((function(a){this.searchedResults=Object(o.omitBy)(this.options,(function(e){return!e.label.toLowerCase().includes(a.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(a){this.$emit("input",a.value),this.selected=a,this.isOpen=!1},openMenu:function(){var a=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return a.$refs.search.focus()}))}},created:function(){var a=this;this.default&&(this.selected=this.options.find((function(e){return e.value===a.default})))}},r=(t("h8fA"),t("KHd+")),d=Object(r.a)(n,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"select"},[t("div",{staticClass:"input-area",class:{"is-active":a.isOpen,"is-error":a.isError},on:{click:a.openMenu}},[a.selected?t("div",{staticClass:"selected"},[a.selected.icon?t("div",{staticClass:"option-icon"},["user"===a.selected.icon?t("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===a.selected.icon?t("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),t("span",{staticClass:"option-value"},[a._v(a._s(a.selected.label))])]):a._e(),a._v(" "),a.selected?a._e():t("div",{staticClass:"not-selected"},[t("span",{staticClass:"option-value placehoder"},[a._v(a._s(a.placeholder))])]),a._v(" "),t("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),a._v(" "),t("transition",{attrs:{name:"slide-in"}},[a.isOpen?t("div",{staticClass:"input-options"},[a.options.length>5?t("div",{staticClass:"select-search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:a.$t("select_search_placeholder")},domProps:{value:a.query},on:{input:function(e){e.target.composing||(a.query=e.target.value)}}})]):a._e(),a._v(" "),t("ul",{staticClass:"option-list"},a._l(a.optionList,(function(e,i){return t("li",{key:i,staticClass:"option-item",on:{click:function(t){return a.selectOption(e)}}},[e.icon?t("div",{staticClass:"option-icon"},["user"===e.icon?t("user-icon",{attrs:{size:"14"}}):a._e(),a._v(" "),"user-edit"===e.icon?t("edit2-icon",{attrs:{size:"14"}}):a._e()],1):a._e(),a._v(" "),t("span",{staticClass:"option-value"},[a._v(a._s(e.label))])])})),0)]):a._e()])],1)}),[],!1,null,"0e43906c",null);e.a=d.exports},"5b+A":function(a,e,t){"use strict";t("vRyx")},"8PNr":function(a,e,t){var i=t("StbF");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,o);i.locals&&(a.exports=i.locals)},"8cuL":function(a,e,t){var i=t("gzm+");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,o);i.locals&&(a.exports=i.locals)},"9kSd":function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form[data-v-7eaabd11]{max-width:700px}.form.inline-form[data-v-7eaabd11]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-7eaabd11]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-7eaabd11]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-7eaabd11]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-7eaabd11]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-7eaabd11]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-7eaabd11]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-7eaabd11]:last-child{margin-bottom:0}.form.block-form .button[data-v-7eaabd11]{margin-top:50px}.form .inline-wrapper[data-v-7eaabd11]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-7eaabd11]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-7eaabd11]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-7eaabd11]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-7eaabd11]{display:flex}.single-line-form .submit-button[data-v-7eaabd11]{margin-left:20px}.error-message[data-v-7eaabd11]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-7eaabd11]{width:100%}input[type=email][data-v-7eaabd11],input[type=number][data-v-7eaabd11],input[type=password][data-v-7eaabd11],input[type=text][data-v-7eaabd11],textarea[data-v-7eaabd11]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-7eaabd11],input[type=number].is-error[data-v-7eaabd11],input[type=password].is-error[data-v-7eaabd11],input[type=text].is-error[data-v-7eaabd11],textarea.is-error[data-v-7eaabd11]{border-color:#fd397a}input[type=email][data-v-7eaabd11]::-moz-placeholder,input[type=number][data-v-7eaabd11]::-moz-placeholder,input[type=password][data-v-7eaabd11]::-moz-placeholder,input[type=text][data-v-7eaabd11]::-moz-placeholder,textarea[data-v-7eaabd11]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-7eaabd11]:-ms-input-placeholder,input[type=number][data-v-7eaabd11]:-ms-input-placeholder,input[type=password][data-v-7eaabd11]:-ms-input-placeholder,input[type=text][data-v-7eaabd11]:-ms-input-placeholder,textarea[data-v-7eaabd11]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-7eaabd11]::placeholder,input[type=number][data-v-7eaabd11]::placeholder,input[type=password][data-v-7eaabd11]::placeholder,input[type=text][data-v-7eaabd11]::placeholder,textarea[data-v-7eaabd11]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-7eaabd11],input[type=number][disabled][data-v-7eaabd11],input[type=password][disabled][data-v-7eaabd11],input[type=text][disabled][data-v-7eaabd11],textarea[disabled][data-v-7eaabd11]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-7eaabd11]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-7eaabd11]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-7eaabd11],.additional-link b[data-v-7eaabd11]{cursor:pointer}.additional-link a[data-v-7eaabd11]:hover,.additional-link b[data-v-7eaabd11]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-7eaabd11]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-7eaabd11]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-7eaabd11],.form textarea[data-v-7eaabd11]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-7eaabd11]{display:block}.form.block-form .block-wrapper label[data-v-7eaabd11]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-7eaabd11]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-7eaabd11]{display:block}.form.inline-form .input-wrapper .error-message[data-v-7eaabd11]{position:relative;bottom:0}.form .button[data-v-7eaabd11]{padding:14px 32px}.single-line-form[data-v-7eaabd11]{display:block}.single-line-form .submit-button[data-v-7eaabd11]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-7eaabd11],input[type=number][data-v-7eaabd11],input[type=password][data-v-7eaabd11],input[type=text][data-v-7eaabd11],textarea[data-v-7eaabd11]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-7eaabd11]{display:block}}.dark-mode .form .input-help[data-v-7eaabd11]{color:#7d858c}.dark-mode .form.block-form .block-wrapper label[data-v-7eaabd11],.dark-mode .form .inline-wrapper .switch-label .input-label[data-v-7eaabd11]{color:#bec6cf}.dark-mode input[type=email][data-v-7eaabd11],.dark-mode input[type=number][data-v-7eaabd11],.dark-mode input[type=password][data-v-7eaabd11],.dark-mode input[type=text][data-v-7eaabd11],.dark-mode textarea[data-v-7eaabd11]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark-mode input[type=email][data-v-7eaabd11]::-moz-placeholder,.dark-mode input[type=number][data-v-7eaabd11]::-moz-placeholder,.dark-mode input[type=password][data-v-7eaabd11]::-moz-placeholder,.dark-mode input[type=text][data-v-7eaabd11]::-moz-placeholder,.dark-mode textarea[data-v-7eaabd11]::-moz-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-7eaabd11]:-ms-input-placeholder,.dark-mode input[type=number][data-v-7eaabd11]:-ms-input-placeholder,.dark-mode input[type=password][data-v-7eaabd11]:-ms-input-placeholder,.dark-mode input[type=text][data-v-7eaabd11]:-ms-input-placeholder,.dark-mode textarea[data-v-7eaabd11]:-ms-input-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-7eaabd11]::placeholder,.dark-mode input[type=number][data-v-7eaabd11]::placeholder,.dark-mode input[type=password][data-v-7eaabd11]::placeholder,.dark-mode input[type=text][data-v-7eaabd11]::placeholder,.dark-mode textarea[data-v-7eaabd11]::placeholder{color:#7d858c}.dark-mode input[type=email][disabled][data-v-7eaabd11],.dark-mode input[type=number][disabled][data-v-7eaabd11],.dark-mode input[type=password][disabled][data-v-7eaabd11],.dark-mode input[type=text][disabled][data-v-7eaabd11],.dark-mode textarea[disabled][data-v-7eaabd11]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark-mode .popup-wrapper input[type=email][data-v-7eaabd11],.dark-mode .popup-wrapper input[type=number][data-v-7eaabd11],.dark-mode .popup-wrapper input[type=password][data-v-7eaabd11],.dark-mode .popup-wrapper input[type=text][data-v-7eaabd11],.dark-mode .popup-wrapper textarea[data-v-7eaabd11]{background:#25272c}.auth-logo-text[data-v-7eaabd11]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-7eaabd11]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-7eaabd11]{min-width:310px}.auth-form .additional-link a[data-v-7eaabd11]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-7eaabd11]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-7eaabd11]{width:120px;margin-bottom:20px}.auth-form h1[data-v-7eaabd11]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-7eaabd11]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-7eaabd11]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-7eaabd11]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-7eaabd11]{width:100%}.auth-form h1[data-v-7eaabd11]{font-size:1.875em}.auth-form h2[data-v-7eaabd11]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-7eaabd11]{font-size:1.375em}.auth-form h2[data-v-7eaabd11]{font-size:1.125em}.auth-form input[data-v-7eaabd11]{min-width:0}.auth-form .additional-link[data-v-7eaabd11]{font-size:.9375em}}.dark-mode .auth-form .additional-link[data-v-7eaabd11],.dark-mode .auth-form h1[data-v-7eaabd11],.dark-mode .auth-form h2[data-v-7eaabd11]{color:#bec6cf}.content-headline[data-v-7eaabd11]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-7eaabd11]{min-width:0}.duplicator .duplicator-add-button[data-v-7eaabd11]{width:100%}.duplicator .duplicator-item[data-v-7eaabd11]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-7eaabd11]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-7eaabd11]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-7eaabd11]{stroke:#00bc7e}.duplicator .duplicator-item input[data-v-7eaabd11],.duplicator .duplicator-item textarea[data-v-7eaabd11]{box-shadow:none;background:#fafafa}.form[data-v-7eaabd11]{max-width:580px;text-align:left}.submit-wrapper[data-v-7eaabd11]{text-align:right}.submit-wrapper .button[data-v-7eaabd11]{margin:58px 0 50px;width:100%}.title-icon[data-v-7eaabd11]{margin-bottom:10px;-webkit-animation:spinner-data-v-7eaabd11 5s linear infinite;animation:spinner-data-v-7eaabd11 5s linear infinite}.title-icon circle[data-v-7eaabd11],.title-icon path[data-v-7eaabd11]{color:inherit}@-webkit-keyframes spinner-data-v-7eaabd11{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-7eaabd11{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.dark-mode .duplicator .duplicator-item[data-v-7eaabd11]{background:#1e2024}.dark-mode .duplicator .duplicator-item input[data-v-7eaabd11],.dark-mode .duplicator .duplicator-item textarea[data-v-7eaabd11]{background:#131414}",""])},ASoH:function(a,e,t){"use strict";var i={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(t("AUMa"),t("KHd+")),n=Object(o.a)(i,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("button",{staticClass:"button outline hover-text-theme hover-border-theme"},[t("span",{staticClass:"text-label"},[a._v(a._s(a.text))]),a._v(" "),a.loading?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{staticClass:"sync-alt svg-color-theme",attrs:{icon:"sync-alt"}})],1):a._e(),a._v(" "),!a.loading&&a.icon?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{staticClass:"svg-color-theme",attrs:{icon:a.icon}})],1):a._e()])}),[],!1,null,"2a4dfe94",null);e.a=n.exports},AUMa:function(a,e,t){"use strict";t("8cuL")},G6zf:function(a,e,t){"use strict";t.r(e);var i=t("o0o1"),o=t.n(i),n=t("A5+z"),r=t("bDRN"),d=t("4TWA"),l=t("eZ9V"),s=t("KnjL"),p=t("j8qy"),c=t("ASoH"),u=t("CjXH"),b=t("TJPC"),m=t("L2JU"),v=t("vDqi"),f=t.n(v);function g(a,e,t,i,o,n,r){try{var d=a[n](r),l=d.value}catch(a){return void t(a)}d.done?e(l):Promise.resolve(l).then(i,o)}function h(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,i)}return t}function x(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var y={name:"BillingsDetail",components:{AuthContentWrapper:r.a,ValidationProvider:n.ValidationProvider,ValidationObserver:n.ValidationObserver,SettingsIcon:u.cb,SelectInput:d.a,AuthContent:p.a,AuthButton:c.a,FormLabel:l.a,required:b.a,InfoBox:s.a},computed:function(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){x(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}({},Object(m.b)(["countries"])),data:function(){return{isLoading:!1,billingInformation:{billing_phone_number:"",billing_postal_code:"",billing_vat_number:"",billing_address:"",billing_country:"",billing_state:"",billing_city:"",billing_name:""}}},methods:{billingInformationSubmit:function(){var a,e=this;return(a=o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$refs.billingInformation.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:e.isLoading=!0,f.a.post("/api/setup/stripe-billings",e.billingInformation).then((function(){e.$router.push({name:"SubscriptionPlans"})})).catch((function(a){})).finally((function(){e.isLoading=!1}));case 7:case"end":return a.stop()}}),a)})),function(){var e=this,t=arguments;return new Promise((function(i,o){var n=a.apply(e,t);function r(a){g(n,i,o,r,d,"next",a)}function d(a){g(n,i,o,r,d,"throw",a)}r(void 0)}))})()}},created:function(){this.$scrollTop()}},_=(t("5b+A"),t("KHd+")),k=Object(_.a)(y,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("AuthContentWrapper",{ref:"auth"},[t("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[t("div",{staticClass:"content-headline"},[t("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),a._v(" "),t("h1",[a._v("Setup Wizard")]),a._v(" "),t("h2",[a._v("Set up your billing information.")])],1),a._v(" "),t("ValidationObserver",{ref:"billingInformation",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),a.billingInformationSubmit(e)}},scopedSlots:a._u([{key:"default",fn:function(e){e.invalid;return[t("FormLabel",[a._v("Company Information")]),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Company Name:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_name,expression:"billingInformation.billing_name"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your company name",type:"text"},domProps:{value:a.billingInformation.billing_name},on:{input:function(e){e.target.composing||a.$set(a.billingInformation,"billing_name",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("VAT Number:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Vat Number",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_vat_number,expression:"billingInformation.billing_vat_number"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your VAT number",type:"text"},domProps:{value:a.billingInformation.billing_vat_number},on:{input:function(e){e.target.composing||a.$set(a.billingInformation,"billing_vat_number",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("FormLabel",{staticClass:"mt-70"},[a._v("Billing Information")]),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Billing Country:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Country",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("SelectInput",{attrs:{options:a.countries,placeholder:"Select your billing country",isError:i[0]},model:{value:a.billingInformation.billing_country,callback:function(e){a.$set(a.billingInformation,"billing_country",e)},expression:"billingInformation.billing_country"}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Billing Address:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Address",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_address,expression:"billingInformation.billing_address"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing address",type:"text"},domProps:{value:a.billingInformation.billing_address},on:{input:function(e){e.target.composing||a.$set(a.billingInformation,"billing_address",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"wrapper-inline"},[t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Billing City:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing City",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_city,expression:"billingInformation.billing_city"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing city",type:"text"},domProps:{value:a.billingInformation.billing_city},on:{input:function(e){e.target.composing||a.$set(a.billingInformation,"billing_city",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Billing Postal Code:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Postal Code",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_postal_code,expression:"billingInformation.billing_postal_code"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing postal code",type:"text"},domProps:{value:a.billingInformation.billing_postal_code},on:{input:function(e){e.target.composing||a.$set(a.billingInformation,"billing_postal_code",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1)]),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Billing State:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing State",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_state,expression:"billingInformation.billing_state"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing state",type:"text"},domProps:{value:a.billingInformation.billing_state},on:{input:function(e){e.target.composing||a.$set(a.billingInformation,"billing_state",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Billing Phone Number (optional):")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Billing Phone Number"},scopedSlots:a._u([{key:"default",fn:function(e){var i=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.billingInformation.billing_phone_number,expression:"billingInformation.billing_phone_number"}],class:{"is-error":i[0]},attrs:{placeholder:"Type your billing phone number",type:"text"},domProps:{value:a.billingInformation.billing_phone_number},on:{input:function(e){e.target.composing||a.$set(a.billingInformation,"billing_phone_number",e.target.value)}}}),a._v(" "),i[0]?t("span",{staticClass:"error-message"},[a._v(a._s(i[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"submit-wrapper"},[t("AuthButton",{attrs:{icon:"chevron-right",text:"Save and Create Plans",loading:a.isLoading,disabled:a.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"7eaabd11",null);e.default=k.exports},Jx8r:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},KnjL:function(a,e,t){"use strict";var i={name:"InfoBox",props:["type"]},o=(t("twCh"),t("KHd+")),n=Object(o.a)(i,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"384ec59e",null);e.a=n.exports},N3BI:function(a,e,t){"use strict";t("8PNr")},StbF:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form-label[data-v-7f5410c4]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-7f5410c4]{margin-right:10px}.form-label .icon circle[data-v-7f5410c4],.form-label .icon line[data-v-7f5410c4],.form-label .icon path[data-v-7f5410c4],.form-label .icon rect[data-v-7f5410c4]{color:inherit}.form-label .label[data-v-7f5410c4]{font-size:1.125em;font-weight:700}.dark-mode .form-label .label[data-v-7f5410c4]{color:#bec6cf}",""])},TJPC:function(a,e,t){"use strict";t.d(e,"a",(function(){return n}));function i(a){return null==a}function o(a){return Array.isArray(a)&&0===a.length}var n={validate:function(a,e){var t=(void 0===e?{allowFalse:!0}:e).allowFalse,n={valid:!1,required:!0};return i(a)||o(a)?n:!1!==a||t?(n.valid=!!String(a).trim().length,n):n},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},TxpJ:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".select[data-v-0e43906c]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-0e43906c]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-0e43906c]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-0e43906c]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-0e43906c]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-0e43906c]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-0e43906c]:last-child{border-bottom:none}.input-area[data-v-0e43906c]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-0e43906c],.input-area .chevron[data-v-0e43906c]{transition:all .15s ease}.input-area.is-active .chevron[data-v-0e43906c]{transform:rotate(180deg)}.input-area.is-error[data-v-0e43906c]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-0e43906c]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-0e43906c]{margin-top:-4px;vertical-align:middle}.option-value[data-v-0e43906c]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-0e43906c]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-0e43906c]{transition:all .15s ease}.slide-in-enter[data-v-0e43906c]{opacity:0;transform:translateY(-50px)}.dark-mode .select-search[data-v-0e43906c]{background:#1e2024}.dark-mode .select-search .search-input[data-v-0e43906c]{background:#131414}.dark-mode .input-area[data-v-0e43906c]{background:#1e2024;border-color:#1e2024}.dark-mode .popup-wrapper .input-area[data-v-0e43906c]{background:#25272c}.dark-mode .input-options[data-v-0e43906c]{background:#1e2024}.dark-mode .input-options .option-item[data-v-0e43906c]{border-bottom:none}.dark-mode .input-options .option-item[data-v-0e43906c]:hover{background:#2a2c32}.dark-mode .input-options .option-item:hover .option-icon circle[data-v-0e43906c],.dark-mode .input-options .option-item:hover .option-icon path[data-v-0e43906c]{color:inherit}.dark-mode .input-options .option-item[data-v-0e43906c]:last-child{border-bottom:none}.dark-mode .option-value.placehoder[data-v-0e43906c]{color:#7d858c}",""])},bDRN:function(a,e,t){"use strict";var i={name:"AuthContentWrapper"},o=(t("iYAH"),t("KHd+")),n=Object(o.a)(i,(function(){var a=this.$createElement;return(this._self._c||a)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);e.a=n.exports},eZ9V:function(a,e,t){"use strict";var i=t("CjXH"),o={name:"FormLabel",props:["icon"],components:{KeyIcon:i.J,Edit2Icon:i.u,SettingsIcon:i.cb,SmartphoneIcon:i.eb}},n=(t("N3BI"),t("KHd+")),r=Object(n.a)(o,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"form-label"},[a.icon?a._e():t("edit-2-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}),a._v(" "),"settings"===a.icon?t("settings-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),"smartphone"===a.icon?t("smartphone-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),"key"===a.icon?t("key-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):a._e(),a._v(" "),t("b",{staticClass:"label"},[a._t("default")],2)],1)}),[],!1,null,"7f5410c4",null);e.a=r.exports},"gzm+":function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".button[data-v-2a4dfe94]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-2a4dfe94]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-2a4dfe94]{margin-left:12px;font-size:1em}.button.solid[data-v-2a4dfe94]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-2a4dfe94]{color:#fff}.button.outline[data-v-2a4dfe94]{border:2px solid #1b2539}.button.outline .text-label[data-v-2a4dfe94]{color:#1b2539}.button.outline .icon path[data-v-2a4dfe94]{fill:inherit}.button.outline[data-v-2a4dfe94]:hover{border-color:inherit}.button.outline:hover .text-label[data-v-2a4dfe94]{color:inherit}.dark-mode .button.outline[data-v-2a4dfe94]{background:#131414;border-color:#bec6cf}.dark-mode .button.outline .text-label[data-v-2a4dfe94]{color:#bec6cf}.sync-alt[data-v-2a4dfe94]{-webkit-animation:spin-data-v-2a4dfe94 1s linear infinite;animation:spin-data-v-2a4dfe94 1s linear infinite}@-webkit-keyframes spin-data-v-2a4dfe94{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-2a4dfe94{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},h8fA:function(a,e,t){"use strict";t("umRX")},iYAH:function(a,e,t){"use strict";t("lh0Q")},j8qy:function(a,e,t){"use strict";var i={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=t("KHd+"),n=Object(o.a)(i,(function(){var a=this.$createElement,e=this._self._c||a;return this.isVisible?e("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);e.a=n.exports},lh0Q:function(a,e,t){var i=t("Jx8r");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,o);i.locals&&(a.exports=i.locals)},qmhD:function(a,e,t){var i=t("z7Fm");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,o);i.locals&&(a.exports=i.locals)},twCh:function(a,e,t){"use strict";t("qmhD")},umRX:function(a,e,t){var i=t("TxpJ");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,o);i.locals&&(a.exports=i.locals)},vRyx:function(a,e,t){var i=t("9kSd");"string"==typeof i&&(i=[[a.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,o);i.locals&&(a.exports=i.locals)},z7Fm:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".info-box[data-v-384ec59e]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-384ec59e]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-384ec59e],.info-box.error p[data-v-384ec59e]{color:#fd397a}.info-box.error a[data-v-384ec59e]{text-decoration:underline}.info-box p[data-v-384ec59e]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-384ec59e],.info-box p[data-v-384ec59e] a{font-size:15px}.info-box p[data-v-384ec59e] b{font-size:15px;font-weight:700}.info-box a[data-v-384ec59e],.info-box b[data-v-384ec59e]{font-weight:700}.info-box a[data-v-384ec59e]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-384ec59e]{margin-top:15px}.info-box ul[data-v-384ec59e],.info-box ul li[data-v-384ec59e],.info-box ul li a[data-v-384ec59e]{display:block}@media only screen and (max-width:690px){.info-box[data-v-384ec59e]{padding:15px}}.dark-mode .info-box[data-v-384ec59e]{background:#1e2024}.dark-mode .info-box p[data-v-384ec59e],.dark-mode .info-box ul li[data-v-384ec59e]{color:#bec6cf}",""])}}]);