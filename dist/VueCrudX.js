module.exports=function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=1)}([function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,i){try{var o=t[a](i),s=o.value}catch(e){return void r(e)}if(!o.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}var i=r(9),o=r.n(i),s=r(11),c=r.n(s),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l={namespaced:!0,state:{records:[],totalRecs:0,record:{},pagination:{},filterData:{},defaultRec:{},crudOps:{export:null,find:null,delete:null,findOne:null,create:null,update:null}},getters:{record:function(e){return e.record},records:function(e){return e.records},totalRecs:function(e){return e.totalRecs},filterData:function(e){return e.filterData},pagination:function(e){return e.pagination},defaultRec:function(e){return e.defaultRec},crudOps:function(e){return e.crudOps}},mutations:{setRecords:function(e,t){e.records=t.records,e.totalRecs=t.totalRecs},setRecord:function(e,t){e.record=null===t?"function"==typeof e.defaultRec?e.defaultRec():c()(e.defaultRec):c()(t)},setPagination:function(e,t){e.pagination=t},setFilterData:function(e,t){e.filterData=t}},actions:{setPagination:function(e,t){(0,e.commit)("setPagination",t)},deleteRecord:function(){function e(e,r){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t,r){var n,a=(t.commit,t.getters);return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.user=this.getters.user,e.next=3,a.crudOps.delete(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return e}(),getRecord:function(){function e(e,r){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t,r){var n,a=t.commit,i=t.getters;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.user=this.getters.user,e.next=3,i.crudOps.findOne(r);case 3:n=e.sent,a("setRecord",n);case 5:case"end":return e.stop()}},e,this)}));return e}(),getRecords:function(){function e(e,r){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t,r){var n,a,i,s,c=t.commit,u=t.getters;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.user=this.getters.user,e.next=3,u.crudOps.find(r);case 3:n=e.sent,a=n.records,i=n.pagination,s=r.doPage?i.totalItems:a.length,c("setPagination",i),c("setFilterData",r.filterData),c("setRecords",{records:a,totalRecs:s});case 10:case"end":return e.stop()}},e,this)}));return e}(),exportRecords:function(){function e(e,r){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t,r){var n=(t.commit,t.getters);return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.user=this.getters.user,e.next=3,n.crudOps.export(r);case 3:case"end":return e.stop()}},e,this)}));return e}(),updateRecord:function(){function e(e,r){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t,r){var n,a=(t.commit,t.getters);return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.user=this.getters.user,e.next=3,a.crudOps.update(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return e}(),createRecord:function(){function e(e,r){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t,r){var n,a=(t.commit,t.getters);t.dispatch;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.user=this.getters.user,e.next=3,a.crudOps.create(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return e}()}};t.a={props:{parentId:{type:String,default:null},storeName:{type:String,required:!0},crudFilter:{type:Object,required:!0},crudTable:{type:Object,required:!0},crudForm:{type:Object,required:!0},crudOps:{type:Object,required:!0},crudSnackBar:{type:Object,default:function(){return{bottom:!0,timeout:6e3}}}},created:function(){function e(){return t.apply(this,arguments)}var t=a(o.a.mark(function e(){var t,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.$store,r=this.storeName,t&&t.state&&t.state[r]||(t.registerModule(r,c()(l)),t.state[r].defaultRec=this.crudForm.defaultRec,t.state[r].filterData=this.crudFilter.filterData,t.state[r].crudOps=this.crudOps),this.$options.filters.formatters=this.crudTable.formatters,this.crudTable.inline&&(this.inline=this.crudTable.inline),this.inlineButtons=!1!==this.crudTable.inlineButtons,this.actionColumn=!0===this.crudTable.actionColumn,this.actionColumn?this.headers=[{text:this.$t("vueCrudX.actions"),value:"id",sortable:!1}].concat(n(this.crudTable.headers)):this.headers=this.crudTable.headers,this.formAutoData=this.isObject(this.crudForm.formAutoData)?this.crudForm.formAutoData:null,this.hasFormVue="function"==typeof this.crudForm.FormVue||this.formAutoData,this.hasFilterData=this.isObject(this.crudFilter.filterData),this.hasFilterVue="function"==typeof this.crudFilter.FilterVue,this.addrowCreate=!0===this.crudTable.addrowCreate,this.onRowClickOpenForm=!1!==this.crudTable.onRowClickOpenForm,this.confirmCreate=!0===this.crudTable.confirmCreate,this.confirmUpdate=!0===this.crudTable.confirmUpdate,this.confirmDelete=!1!==this.crudTable.confirmDelete,this.doPage=!1!==this.crudTable.doPage,this.crudTitle=this.crudTable.crudTitle||"",this.showGoBack=!1!==this.crudTable.showGoBack,this.fullscreenForm=!0===this.crudTable.fullscreenForm,this.onCreatedOpenForm=!0===this.crudTable.onCreatedOpenForm,this.hideHeaders=!0===this.crudTable.hideHeaders,this.isFluid=!1!==this.crudTable.isFluid,this.dark=!!this.$attrs.dark,this.fab=!1!==this.$attrs.fab,this.noDataColor=this.crudTable.noDataColor||"grey",this.formToolbarColor=this.crudTable.formToolbarColor||"grey",this.filterHeaderColor=this.crudTable.filterHeaderColor||"grey",this.hasFilterVue&&(this.$options.components["crud-filter"]=this.crudFilter.FilterVue),this.hasFormVue&&(this.$options.components["crud-form"]=this.crudForm.FormVue),this.onCreatedOpenForm&&this.record.id&&(this.crudFormFlag=!0),this.isMounted=!1;case 33:case"end":return e.stop()}},e,this)}));return e}(),mounted:function(){function e(){return t.apply(this,arguments)}var t=a(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.hasFilterVue){e.next=10;break}e.t0=o.a.keys(this.filterData);case 2:if((e.t1=e.t0()).done){e.next=10;break}if(t=e.t1.value,!this.filterData[t].attrs||!this.filterData[t].attrs.itemsFn){e.next=8;break}return e.next=7,this.filterData[t].attrs.itemsFn();case 7:this.filterData[t].attrs.items=e.sent;case 8:e.next=2;break;case 10:this.isMounted=!0;case 11:case"end":return e.stop()}},e,this)}));return e}(),beforeUpdate:function(){this.hasFilterVue&&(this.$options.components["crud-filter"]=this.crudFilter.FilterVue),this.hasFormVue&&(this.$options.components["crud-form"]=this.crudForm.FormVue)},beforeRouteEnter:function(e,t,r){r(function(e){})},data:function(){return{crudFormFlag:!1,validForm:!0,onCreatedOpenForm:!1,onRowClickOpenForm:!0,hasFormVue:!1,formAutoData:null,fullscreenForm:!1,validFilter:!0,hasFilterVue:!1,hasFilterData:!1,loading:!1,inlineValue:null,headers:[],inline:!1,inlineButtons:!0,actionColumn:!1,addrowCreate:!1,confirmCreate:!1,confirmUpdate:!1,confirmDelete:!0,doPage:!0,crudTitle:"",showGoBack:!1,isFluid:!0,hideHeaders:!1,dark:!1,fab:!1,noDataColor:"grey",formToolbarColor:"grey",filterHeaderColor:"grey",snackbar:!1,snackbarText:""}},computed:{showTitle:function(){return this.crudTitle||this.storeName},records:function(){return this.$store.getters[this.storeName+"/records"]},totalRecs:function(){return this.$store.getters[this.storeName+"/totalRecs"]},filterData:function(){return this.$store.getters[this.storeName+"/filterData"]},record:function(){return this.$store.getters[this.storeName+"/record"]},pagination:{get:function(){var e={};try{e=this.$store.state[this.storeName].pagination}catch(e){}return e},set:function(e){this.setPagination(e)}},canCreate:function(){return this.can("create",this.crudOps.create&&(this.addrowCreate||this.hasFormVue||this.formAutoData))},canUpdate:function(){return this.can("update",this.crudOps.update&&(this.hasFormVue||this.formAutoData))},canDelete:function(){return this.can("delete",this.crudOps.delete)}},filters:{capitalize:function(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""}},watch:{loading:function(e,t){},pagination:{handler:function(){this.getRecordsHelper()},deep:!0},parentId:function(e){this.getRecordsHelper()}},methods:{can:function(e,t){if(this.$store.getters.user&&this.$store.getters.user.rules){var r=this.$store.getters.user.rules;return!((!r[this.storeName]||-1===r[this.storeName].indexOf(e)&&-1===r[this.storeName].indexOf("*"))&&(!r["*"]||-1===r["*"].indexOf(e)&&-1===r["*"].indexOf("*")))&&t}return!0},isObject:function(e){return null!==e&&"object"===(void 0===e?"undefined":u(e))},setSnackBar:function(e){this.crudSnackBar&&e&&(this.snackbarText=this.$t("vueCrudX.unknownOperation"),200===e||201===e?this.snackbarText=this.$t("vueCrudX.operationOk"):500===e?this.snackbarText=this.$t("vueCrudX.operationError"):409===e&&(this.snackbarText=this.$t("vueCrudX.duplicateError")),this.snackbar=!0)},getRecords:function(){function e(e){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch(this.storeName+"/getRecords",t);case 2:case"end":return e.stop()}},e,this)}));return e}(),setPagination:function(e){this.$store.dispatch(this.storeName+"/setPagination",e)},deleteRecord:function(){function e(e){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.$store.dispatch(this.storeName+"/deleteRecord",t);case 3:return r=e.sent,this.loading=!1,this.setSnackBar(r),e.abrupt("return",200===r);case 7:case"end":return e.stop()}},e,this)}));return e}(),updateRecord:function(){function e(e){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.$store.dispatch(this.storeName+"/updateRecord",t);case 3:return r=e.sent,this.loading=!1,this.setSnackBar(r),e.abrupt("return",200===r);case 7:case"end":return e.stop()}},e,this)}));return e}(),createRecord:function(){function e(e){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.$store.dispatch(this.storeName+"/createRecord",t);case 3:return r=e.sent,this.loading=!1,this.setSnackBar(r),e.abrupt("return",201===r);case 7:case"end":return e.stop()}},e,this)}));return e}(),getRecord:function(){function e(e){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.$store.dispatch(this.storeName+"/getRecord",t);case 3:this.loading=!1;case 4:case"end":return e.stop()}},e,this)}));return e}(),setRecord:function(e){this.$store.commit(this.storeName+"/setRecord",null)},exportRecords:function(){function e(e){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch(this.storeName+"/exportRecords",t);case 2:case"end":return e.stop()}},e,this)}));return e}(),closeCrudForm:function(){this.setRecord(),this.crudFormFlag=!1,this.$emit("form-close")},crudFormOpen:function(){function e(e){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,this.getRecord({id:t});case 3:e.next=6;break;case 5:this.setRecord();case 6:this.crudFormFlag=!0;case 7:case"end":return e.stop()}},e,this)}));return e}(),crudFormSave:function(){function e(e){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.record.id||!this.confirmCreate){e.next=3;break}if(confirm(this.$t("vueCrudX.confirm"))){e.next=3;break}return e.abrupt("return");case 3:if(this.record.id||!this.confirmUpdate){e.next=6;break}if(confirm(this.$t("vueCrudX.confirm"))){e.next=6;break}return e.abrupt("return");case 6:if(!this.record.id){e.next=11;break}return e.next=9,this.updateRecord({record:this.record});case 9:e.next=13;break;case 11:return e.next=13,this.createRecord({record:this.record,parentId:this.parentId});case 13:return e.next=15,this.getRecordsHelper();case 15:this.closeCrudForm();case 16:case"end":return e.stop()}},e,this)}));return e}(),crudFormDelete:function(){function e(e){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.confirmDelete){e.next=3;break}if(confirm(this.$t("vueCrudX.confirm"))){e.next=3;break}return e.abrupt("return");case 3:if(!(r=this.record.id)){e.next=9;break}return e.next=7,this.deleteRecord({id:r});case 7:return e.next=9,this.getRecordsHelper();case 9:this.closeCrudForm();case 10:case"end":return e.stop()}},e,this)}));return e}(),getRecordsHelper:function(){function e(){return t.apply(this,arguments)}var t=a(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.getRecords({doPage:this.doPage,pagination:this.pagination,filterData:this.filterData,parentId:this.parentId});case 3:this.loading=!1;case 4:case"end":return e.stop()}},e,this)}));return e}(),submitFilter:function(){function e(){return t.apply(this,arguments)}var t=a(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRecordsHelper();case 2:case"end":return e.stop()}},e,this)}));return e}(),exportBtnClick:function(){function e(){return t.apply(this,arguments)}var t=a(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.exportRecords({pagination:this.pagination,filterData:this.filterData,parentId:this.parentId});case 3:this.loading=!1;case 4:case"end":return e.stop()}},e,this)}));return e}(),goBack:function(){this.$router.back()},inlineOpen:function(e,t,r){if(this.inlineValue=e,void 0!==t&&void 0!==r){var n=this.$refs["edit-"+t+"-"+r][0];this.$nextTick(function(){var e=n.$children[0].$children[0].$children[0];"v-textarea"===e.$options._componentTag&&setTimeout(function(){return e.focus()},50)})}},inlineUpdate:function(){function e(e,r,n,a){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t,r,n,a){var i,s,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t[r]===this.inlineValue){e.next=5;break}return e.next=3,this.updateRecord({record:t});case 3:i=e.sent,i||(t[r]=this.inlineValue);case 5:void 0!==n&&void 0!==a&&(s=this.$refs["edit-"+n+"-"+a][0],"v-date-picker"!==(c=s.$children[0].$children[0].$children[0].$options._componentTag)&&"v-time-picker"!==c&&"v-textarea"!==c||s.save(t[r]));case 6:case"end":return e.stop()}},e,this)}));return e}(),inlineCreate:function(){function e(){return t.apply(this,arguments)}var t=a(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.confirmCreate){e.next=3;break}if(confirm(this.$t("vueCrudX.confirm"))){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.createRecord({record:"function"==typeof this.crudForm.defaultRec?this.crudForm.defaultRec():this.crudForm.defaultRec,parentId:this.parentId});case 5:this.$nextTick(a(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRecordsHelper();case 2:case"end":return e.stop()}},e,this)})));case 6:case"end":return e.stop()}},e,this)}));return e}(),inlineDelete:function(){function e(e){return t.apply(this,arguments)}var t=a(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.confirmDelete){e.next=3;break}if(confirm(this.$t("vueCrudX.confirm"))){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.deleteRecord({id:t});case 5:this.$nextTick(a(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRecordsHelper();case 2:case"end":return e.stop()}},e,this)})));case 6:case"end":return e.stop()}},e,this)}));return e}(),rowClicked:function(e,t){!this.actionColumn&&this.onRowClickOpenForm&&this.crudFormOpen(e.id),this.inline||this.$emit("selected",{item:e,event:t})},testFunction:function(){function e(){return t.apply(this,arguments)}var t=a(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)}));return e}()}}},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";function n(e){r(3)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),i=r(12),o=r(8),s=n,c=o(a.a,i.a,!1,s,"data-v-5de8aa57",null);t.default=c.exports},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(6)("19007316",n,!0,{sourceMap:!1})},function(e,t,r){t=e.exports=r(5)(!1),t.push([e.i,".make-modal-disabled[data-v-5de8aa57]{margin:0;position:fixed;top:0;left:0;z-index:100;padding:0;min-width:100%;min-height:100%;background-color:#fff}",""])},function(e,t){function r(e,t){var r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var i=n(a);return[r].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([i]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(n[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&n[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),t.push(o))}},t}},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=l[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(i(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var o=[],a=0;a<r.parts.length;a++)o.push(i(r.parts[a]));l[r.id]={id:r.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,r,n=document.querySelector("style["+b+'~="'+e.id+'"]');if(n){if(h)return v;n.parentNode.removeChild(n)}if(g){var i=p++;n=f||(f=a()),t=o.bind(null,n,i,!1),r=o.bind(null,n,i,!0)}else n=a(),t=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function o(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function s(e,t){var r=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),m.ssrId&&e.setAttribute(b,t.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=r(7),l={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},m=null,b="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,a){h=r,m=a||{};var i=u(e,t);return n(i),function(t){for(var r=[],a=0;a<i.length;a++){var o=i[a],s=l[o.id];s.refs--,r.push(s)}t?(i=u(e,t),n(i)):i=[];for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],n={},a=0;a<t.length;a++){var i=t[a],o=i[0],s=i[1],c=i[2],u=i[3],l={id:e+":"+a,css:s,media:c,sourceMap:u};n[o]?n[o].parts.push(l):r.push(n[o]={id:o,parts:[l]})}return r}},function(e,t){e.exports=function(e,t,r,n,a,i){var o,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId=a);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=l):n&&(l=n),l){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(e,t){return l.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:o,exports:s,options:u}}},function(e,t,r){e.exports=r(10)},function(e,t){e.exports=require("regenerator-runtime")},function(e,t){e.exports=require("lodash.clonedeep")},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{class:{"make-modal":e.parentId},attrs:{fluid:e.isFluid}},[r("v-expansion-panel",[r("v-expansion-panel-content",{class:e.filterHeaderColor},[r("div",{attrs:{slot:"header"},slot:"header"},[r("v-icon",[e._v("search")]),e._v(" "+e._s(e._f("capitalize")(e.showTitle))+" "+e._s(e.doPage?"":" - "+e.records.length+" Records"))],1),e._v(" "),e.hasFilterData?r("v-form",{ref:"searchForm",staticClass:"grey lighten-3 pa-2",attrs:{"lazy-validation":""},model:{value:e.validFilter,callback:function(t){e.validFilter=t},expression:"validFilter"}},[e.hasFilterVue?r("crud-filter",{attrs:{filterData:e.filterData,parentId:e.parentId,storeName:e.storeName}}):r("v-layout",{attrs:{row:"",wrap:""}},e._l(e.filterData,function(t,n){return r("v-flex",{key:n,staticClass:"pa-2",attrs:{sm6:t.halfSize,xs12:""}},["select-kv"===t.type?r("v-select",{tag:"component",attrs:{multiple:t.multiple,label:t.label,items:t.items,rules:t.rules,"item-value":"value","item-text":"text","return-object":""},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"filter.value"}}):"date"===t.type?r("v-text-field",{tag:"component",attrs:{label:t.label,rules:t.rules,type:"date"},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"filter.value"}}):"text"===t.type?r("v-text-field",{tag:"component",attrs:{label:t.label,rules:t.rules,clearable:!!t.clearable,type:"text"},model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"filter.value"}}):r("v-"+t.type,e._b({tag:"component",model:{value:t.value,callback:function(r){e.$set(t,"value",r)},expression:"filter.value"}},"component",t.attrs,!1))],1)})),e._v(" "),r("v-layout",{attrs:{row:"","justify-end":""}},[r("v-btn",{attrs:{fab:e.fab,disabled:!e.validFilter||e.loading},on:{click:e.submitFilter}},[r("v-icon",[e._v("replay")])],1)],1)],1):e._e()],1)],1),e._v(" "),r("v-data-table",{attrs:{headers:e.headers,items:e.records,"total-items":e.totalRecs,pagination:e.pagination,loading:e.loading,"hide-actions":!e.doPage,"hide-headers":e.hideHeaders,dark:e.dark,light:!e.dark},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[r("tr",{on:{click:function(r){r.stopPropagation(),e.rowClicked(t.item,r)}}},[e.actionColumn?r("td",{staticClass:"justify-center layout",attrs:{valign:"middle"}},[e.canUpdate?r("v-icon",{staticClass:"mr-2",attrs:{small:"",disabled:e.loading},on:{click:function(r){r.stopPropagation(),e.crudFormOpen(t.item.id)}}},[e._v("edit")]):e._e(),e._v(" "),e.canDelete?r("v-icon",{staticClass:"mr-2",attrs:{small:"",disabled:e.loading},on:{click:function(r){r.stopPropagation(),e.inlineDelete(t.item.id)}}},[e._v("delete")]):e._e()],1):e._e(),e._v(" "),e._l(e.headers,function(n,a){return(e.actionColumn?a>0:a>=0)?r("td",{key:n.value,class:{"grey lighten-4":e.inline[n.value]&&e.crudOps.update}},[e.inline[n.value]?"date-picker"===e.inline[n.value].field||"time-picker"===e.inline[n.value].field||"textarea"===e.inline[n.value].field?r("v-edit-dialog",{ref:"edit-"+t.index+"-"+a,refInFor:!0,attrs:{"return-value":t.item[n.value],large:e.inline[n.value].buttons,persistent:!1,"cancel-text":e.$t("vueCrudX.cancel"),"save-text":e.$t("vueCrudX.save"),lazy:""},on:{"update:returnValue":function(r){e.$set(t.item,n.value,r)},save:function(r){e.inlineUpdate(t.item,n.value)},cancel:function(){},open:function(r){e.inlineOpen(t.item[n.value],t.index,a)},close:function(){}}},[r("div",[e._v(e._s(t.item[n.value]))]),e._v(" "),r("v-"+e.inline[n.value].field,e._b({tag:"component",attrs:{slot:"input"},on:{input:function(r){"textarea"!==e.inline[n.value].field&&e.inlineUpdate(t.item,n.value,t.index,a)},blur:function(r){"textarea"===e.inline[n.value].field&&e.inlineUpdate(t.item,n.value,t.index,a)}},slot:"input",model:{value:t.item[n.value],callback:function(r){e.$set(t.item,n.value,r)},expression:"props.item[header.value]"}},"component",e.inline[n.value].attrs,!1))],1):"text-field"===e.inline[n.value].field||"select"===e.inline[n.value].field||"combobox"===e.inline[n.value].field||"autocomplete"===e.inline[n.value].field?r("v-"+e.inline[n.value].field,e._b({tag:"component",on:{focus:function(r){e.inlineOpen(t.item[n.value])},blur:function(r){e.inlineUpdate(t.item,n.value)}},model:{value:t.item[n.value],callback:function(r){e.$set(t.item,n.value,r)},expression:"props.item[header.value]"}},"component",e.inline[n.value].attrs,!1)):e._e():r("span",[e._v(e._s(e._f("formatters")(t.item[n.value],n.value)))])],1):e._e()})],2)]}}])},[r("template",{slot:"no-data"},[r("v-flex",{staticClass:"text-xs-center"},[r("v-alert",{attrs:{value:!0,color:e.noDataColor,icon:""}},[r("v-icon",[e._v("warning")]),e._v(" "+e._s(e.$t?e.$t("vueCrudX.noData"):"NO DATA"))],1)],1)],1)],2),e._v(" "),r("v-layout",{attrs:{row:"","justify-center":""}},[r("v-dialog",{attrs:{fullscreen:e.fullscreenForm,scrollable:"",transition:"dialog-bottom-transition",overlay:!1},model:{value:e.crudFormFlag,callback:function(t){e.crudFormFlag=t},expression:"crudFormFlag"}},[r("v-card",[r("v-toolbar",{attrs:{dark:!e.dark,light:e.dark,color:e.formToolbarColor}},[r("v-toolbar-title",[r("v-icon",[e._v("mode_edit")]),e._v(" "+e._s(e._f("capitalize")(e.showTitle)))],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-toolbar-items")],1),e._v(" "),r("v-progress-linear",{attrs:{indeterminate:e.loading,"ma-0":""}}),e._v(" "),e.hasFormVue?r("v-form",{staticClass:"grey lighten-3 pa-2",attrs:{"lazy-validation":""},model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[e.formAutoData?r("v-layout",{attrs:{row:"",wrap:""}},e._l(e.formAutoData,function(t,n,a){return r("v-flex",{key:a,staticClass:"pa-2",attrs:{sm6:t.halfSize,xs12:""}},["select-kv"===t.type?r("v-select",{tag:"component",attrs:{multiple:t.multiple,label:t.label,items:t.items,rules:t.rules,"item-value":"value","item-text":"text","return-object":""},model:{value:e.record[n],callback:function(t){e.$set(e.record,n,t)},expression:"record[objKey]"}}):"date"===t.type?r("v-text-field",{tag:"component",attrs:{label:t.label,rules:t.rules,type:"date"},model:{value:e.record[n],callback:function(t){e.$set(e.record,n,t)},expression:"record[objKey]"}}):"text"===t.type?r("v-text-field",{tag:"component",attrs:{label:t.label,rules:t.rules,type:"text"},model:{value:e.record[n],callback:function(t){e.$set(e.record,n,t)},expression:"record[objKey]"}}):"hidden"===t.type?r("div",{tag:"component"}):r("v-"+t.type,e._b({tag:"component",model:{value:e.record[n],callback:function(t){e.$set(e.record,n,t)},expression:"record[objKey]"}},"component",t.attrs,!1))],1)})):r("crud-form",{attrs:{record:e.record,parentId:e.parentId,storeName:e.storeName}}),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{fab:e.fab,dark:!e.dark,light:e.dark},nativeOn:{click:function(t){return e.closeCrudForm(t)}}},[r("v-icon",[e._v("reply")])],1),e._v(" "),e.canDelete&&e.record.id?r("v-btn",{attrs:{fab:e.fab,dark:!e.dark,light:e.dark},nativeOn:{click:function(t){return e.crudFormDelete(t)}}},[r("v-icon",[e._v("delete")])],1):e._e(),e._v(" "),e.canUpdate&&e.record.id||e.canCreate&&!e.record.id?r("v-btn",{attrs:{fab:e.fab,dark:!e.dark,light:e.dark,disabled:!e.validForm},nativeOn:{click:function(t){return e.crudFormSave(t)}}},[r("v-icon",[e._v("done_all")])],1):e._e()],1)],1):e._e()],1)],1)],1),e._v(" "),r("v-layout",{attrs:{row:"","justify-end":""}},[e.parentId&&e.showGoBack?r("v-btn",{attrs:{fab:e.fab,top:"",dark:!e.dark,light:e.dark,disabled:e.loading},on:{click:function(t){return t.stopPropagation(),e.goBack(t)}}},[r("v-icon",[e._v("reply")])],1):e._e(),e._v(" "),e.canCreate?r("v-btn",{attrs:{fab:e.fab,top:"",dark:!e.dark,light:e.dark,disabled:e.loading},on:{click:function(t){t.stopPropagation(),e.addrowCreate?e.inlineCreate():e.crudFormOpen(null)}}},[r("v-icon",[e._v("add")])],1):e._e(),e._v(" "),e.crudOps.export?r("v-btn",{attrs:{fab:e.fab,top:"",dark:!e.dark,light:e.dark,disabled:e.loading},on:{click:function(t){return t.stopPropagation(),e.exportBtnClick(t)}}},[r("v-icon",{class:[{"white--text":!e.loading}]},[e._v("print")])],1):e._e()],1),e._v(" "),e.crudSnackBar?r("v-snackbar",e._b({model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},"v-snackbar",e.crudSnackBar,!1),[e._v("\n    "+e._s(e.snackbarText)+"\n    "),r("v-btn",{attrs:{fab:"",flat:""},on:{click:function(t){e.snackbar=!1}}},[r("v-icon",[e._v("close")])],1)],1):e._e()],1)},a=[],i={render:n,staticRenderFns:a};t.a=i}]);