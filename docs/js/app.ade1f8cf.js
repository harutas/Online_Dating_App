(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1cb0":function(t,e,s){},"3dd3":function(t,e,s){},4965:function(t,e,s){"use strict";s("3dd3")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{attrs:{app:"",color:"teal lighten-3",dark:"",fixed:""}},[s("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),s("v-toolbar-title",[t._v("Online Dating App")]),s("v-spacer")],1),s("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",{attrs:{nav:"",dense:""}},[s("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[s("v-list-item",{attrs:{to:"/"}},[s("v-list-item-title",[t._v("User List")])],1),s("v-list-item",{attrs:{to:"/message-list"}},[s("v-list-item-title",[t._v("Message List")])],1)],1)],1)],1),s("v-main",[s("router-view")],1)],1)},n=[],i={name:"App",data:function(){return{drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}},methods:{messageList:function(){this.$router.push("message-list")}}},o=i,l=s("2877"),c=s("6544"),u=s.n(c),d=s("7496"),m=s("40dc"),f=s("5bc1"),p=s("8860"),v=s("da13"),g=s("1baa"),h=s("5d23"),_=s("f6c4"),b=s("f774"),y=s("2fa4"),x=s("2a7f"),C=Object(l["a"])(o,r,n,!1,null,null,null),w=C.exports;u()(C,{VApp:d["a"],VAppBar:m["a"],VAppBarNavIcon:f["a"],VList:p["a"],VListItem:v["a"],VListItemGroup:g["a"],VListItemTitle:h["a"],VMain:_["a"],VNavigationDrawer:b["a"],VSpacer:y["a"],VToolbarTitle:x["a"]});var j=s("8c4f"),V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-center"},[s("div",{staticClass:"d-flex flex-wrap col-12 col-md-8"},t._l(t.getUsers,(function(t){return s("user-list-card",{key:t.login.id,attrs:{user:t}})})),1)])},U=[],$=(s("07ac"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 col-sm-4"},[s("v-card",{staticClass:"pa-2 ma-1",attrs:{elevation:"2"}},[s("div",{on:{click:t.toUserDetail}},[s("v-img",{staticClass:"rounded-circle",attrs:{src:t.user.picture.large}}),s("v-card-title",{staticClass:"ma-0  pa-0 pl-2 ellipsis font-size1rem"},[t._v(t._s(t.getFullName))]),s("v-card-text",{staticClass:"ma-0 pa-0 pl-4 ellipsis"},[t._v("Age: "+t._s(t.user.dob.age)+" / "+t._s(t.user.location.country))])],1),t.$vuetify.breakpoint.mdAndUp?s("div",{staticClass:"d-flex justify-space-between"},[s("div",{staticClass:"col-5 pa-0 ma-2"},[s("v-btn",{attrs:{to:{name:"user-detail",params:{id:t.user.login.uuid}},elevation:"2",width:"100%"}},[t._v("PROFILE")])],1),s("div",{staticClass:"col-5 pa-0 ma-2"},[s("v-btn",{attrs:{to:{name:"chat",params:{id:t.user.login.uuid}},elevation:"2",width:"100%",color:"primary"}},[t._v("MESSAGE")])],1)]):t._e()])],1)}),M=[],O=(s("b0c0"),{name:"UserListCard",props:{user:Object},computed:{getFullName:function(){return this.user.name.first+" "+this.user.name.last}},methods:{toUserDetail:function(){this.$router.push({name:"user-detail",params:{id:this.user.login.uuid}},(function(){}))}}}),k=O,D=(s("4965"),s("8336")),S=s("b0af"),I=s("99d9"),B=s("adda"),A=Object(l["a"])(k,$,M,!1,null,"ea3dcca8",null),E=A.exports;u()(A,{VBtn:D["a"],VCard:S["a"],VCardText:I["a"],VCardTitle:I["b"],VImg:B["a"]});var L={data:function(){return{}},computed:{getUsers:function(){return Object.values(this.$store.getters.getAllUsers)}},components:{UserListCard:E}},F=L,P=Object(l["a"])(F,V,U,!1,null,null,null),T=P.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{userDetail:t.userDetail}},[s("div",{staticClass:"d-flex flex-column align-center mt-5"},[s("v-img",{staticClass:"col-5 col-sm-3",attrs:{src:t.userDetail.picture.large,alt:""}}),s("div",{staticClass:"d-flex justify-center"},[s("v-btn",{staticClass:"my-3 mr-3",attrs:{to:"/"}},[t._v("Back")]),s("v-btn",{staticClass:"my-3",attrs:{to:{name:"chat",params:{id:t.$route.params.id}},color:"primary"}},[t._v("Message")])],1),s("div",{staticClass:"col-11 col-sm-9"},[s("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[s("tbody",[s("tr",[s("td",[t._v("Name")]),s("td",[t._v(t._s(t.userDetail.name.first))])]),s("tr",[s("td",[t._v("Gender")]),s("td",[t._v(t._s(t.userDetail.gender))])]),s("tr",[s("td",[t._v("Age")]),s("td",[t._v(t._s(t.userDetail.dob.age))])]),s("tr",[s("td",[t._v("Country")]),s("td",[t._v(t._s(t.userDetail.location.country))])]),s("tr",[s("td",[t._v("State")]),s("td",[t._v(t._s(t.userDetail.location.state))])]),s("tr",[s("td",[t._v("City")]),s("td",[t._v(t._s(t.userDetail.location.city))])]),s("tr",[s("td",[t._v("Email")]),s("td",[t._v(t._s(t.userDetail.email))])])])]},proxy:!0}])})],1)],1)])},q=[],N={data:function(){return{}},created:function(){},computed:{userDetail:function(){return this.$store.getters.getUserById(this.$route.params.id)}}},G=N,R=s("1f4f"),H=Object(l["a"])(G,z,q,!1,null,null,null),J=H.exports;u()(H,{VBtn:D["a"],VImg:B["a"],VSimpleTable:R["a"]});var Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"pt-3 pb-60px px-5"},[s("v-row",{staticClass:"d-flex justify-center overflow-auto"},[s("v-col",{attrs:{cols:"12",sm:"8"}},[s("h1",[t._v(t._s(t.userFullname))]),t._l(t.getMessages,(function(t){return s("user-chat-box",{key:t.count,attrs:{message:t}})}))],2)],1)],1),s("v-footer",{attrs:{fixed:""}},[s("v-row",{staticClass:"d-flex justify-center"},[s("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[s("v-btn",{attrs:{color:"blue-grey",fab:"","x-small":"",dark:"",to:"/"}},[s("v-icon",[t._v("mdi-arrow-u-left-top-bold")])],1),s("v-text-field",{staticClass:"ml-2",attrs:{placeholder:"Send Message…","hide-details":"false",dense:"",filled:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage.apply(null,arguments)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),s("v-btn",{staticClass:"ml-2",attrs:{color:"blue-grey",fab:"","x-small":"",dark:""},on:{click:t.sendMessage}},[s("v-icon",[t._v("mdi-send")])],1)],1)],1)],1)],1)},K=[],Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},["myId"==t.message.id?s("div",[s("div",{staticClass:"d-flex justify-end"},[s("div",{staticClass:"d-flex flex-column w-300px"},[s("v-card",{staticClass:"rounded-lg green accent-3 pa-2 mb-2",attrs:{elevation:"5"}},[s("p",[t._v(t._s(t.messageContent))])]),s("p",{staticClass:"text-right font-size0q8rem"},[t._v(t._s(t.messageDate))])],1)])]):s("div",[s("div",{staticClass:"d-flex justify-start align-center"},[s("v-avatar",[s("img",{attrs:{src:t.getUser.picture.thumbnail,alt:t.getUser.name.first}})]),s("div",{staticClass:"d-flex flex-column w-300px ml-3"},[s("v-card",{staticClass:"rounded-lg green accent-3 pa-2 mb-2",attrs:{elevation:"5"}},[s("p",[t._v(t._s(t.messageContent))])]),s("p",{staticClass:"text-right font-size0q8rem"},[t._v(t._s(t.messageDate))])],1)],1)])])},W=[],X={name:"UserChatBox",props:{message:Object},computed:{getUser:function(){return this.$store.getters.getUserById(this.$route.params.id)},messageContent:function(){return this.message.content},messageDate:function(){return this.message.date}},methods:{}},Z=X,tt=(s("93e3"),s("8212")),et=Object(l["a"])(Z,Q,W,!1,null,"0011d3c1",null),st=et.exports;u()(et,{VAvatar:tt["a"],VCard:S["a"]});s("4d90"),s("d3b7"),s("25f0"),s("99af");function at(){var t=new Date,e=t.getFullYear(),s=t.getMonth()+1,a=t.getDate(),r=t.getHours().toString().padStart(2,"0"),n=t.getMinutes().toString().padStart(2,"0"),i=t.getSeconds().toString().padStart(2,"0"),o="".concat(e,"/").concat(s,"/").concat(a," ").concat(r,".").concat(n,".").concat(i);return o}var rt={data:function(){return{count:0,content:""}},methods:{sendMessage:function(){if(""!==this.content){var t={id:this.$route.params.id,messages:[]},e={count:this.count,id:"myId",content:this.content,date:at()};this.count++;var s={count:this.count,id:this.$route.params.id,content:"Hello~~",date:at()};this.count++,t.messages.push(e,s),this.$store.commit("messages/setMessages",t),this.content=""}else alert("Please input Message.")}},computed:{getMessages:function(){return this.$store.getters["messages/getMessagesById"](this.$route.params.id)},userFullname:function(){var t=this.$store.getters.getUserById(this.$route.params.id);return t.name.first+" "+t.name.last}},components:{UserChatBox:st}},nt=rt,it=(s("5779"),s("62ad")),ot=s("553a"),lt=s("132d"),ct=s("0fd9"),ut=s("8654"),dt=Object(l["a"])(nt,Y,K,!1,null,"0095aab7",null),mt=dt.exports;u()(dt,{VBtn:D["a"],VCol:it["a"],VFooter:ot["a"],VIcon:lt["a"],VRow:ct["a"],VTextField:ut["a"]});var ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-row",{staticClass:"d-flex justify-center"},[s("v-col",{attrs:{cols:"11",sm:"9"}},t._l(t.getAllMessages,(function(t,e){return s("user-chat-log",{key:e,attrs:{messages:t,id:e}})})),1)],1)],1)},pt=[],vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"d-flex justify-start align-center mt-5 hover",attrs:{latestMessage:t.latestMessage},on:{click:t.toChat}},[s("v-avatar",[s("img",{attrs:{src:t.getUser.picture.thumbnail,alt:t.getUser.name.first}})]),s("div",{staticClass:"d-flex flex-column ml-3"},[s("p",{staticClass:"font-size0q8rem ml-3"},[t._v(t._s(t.userFullname))]),s("p",{staticClass:"font-size0q8rem ml-3"},[t._v(t._s(t.latestMessage.content))]),s("p",{staticClass:"font-size0q8rem ml-3"},[t._v(t._s(t.latestMessage.date))])])],1),s("v-divider",{attrs:{inset:""}})],1)},gt=[],ht={name:"UserChatLog",props:{id:String,messages:Array},computed:{getUser:function(){return this.$store.getters.getUserById(this.id)},userFullname:function(){var t=this.$store.getters.getUserById(this.id);return t.name.first+" "+t.name.last},latestMessage:function(){var t=this.$store.getters["messages/getMessagesById"](this.id);return t[t.length-1]}},methods:{toChat:function(){this.$router.push({name:"chat",params:{id:this.id}})}}},_t=ht,bt=(s("5879"),s("ce7e")),yt=Object(l["a"])(_t,vt,gt,!1,null,"7740d13a",null),xt=yt.exports;u()(yt,{VAvatar:tt["a"],VDivider:bt["a"]});var Ct={data:function(){return{}},computed:{getAllMessages:function(){return this.$store.state.messages.messages}},components:{UserChatLog:xt}},wt=Ct,jt=Object(l["a"])(wt,ft,pt,!1,null,null,null),Vt=jt.exports;u()(jt,{VCol:it["a"],VRow:ct["a"]}),a["a"].use(j["a"]);var Ut=[{path:"/",name:"user-list",component:T},{path:"/user/:id",name:"user-detail",component:J},{path:"/user/:id/chat",name:"chat",component:mt},{path:"/message-list",name:"message-list",component:Vt}],$t=new j["a"]({mode:"history",base:"",routes:Ut}),Mt=$t,Ot=s("2f62"),kt={namespased:!0,state:{users:{}},getters:{getAllUsers:function(t){return t.users},getUserById:function(t){return function(e){return t.users[e]}}},mutations:{setUsers:function(t,e){for(var s={},a=0;a<e.length;a++)s[e[a].login.uuid]=e[a];t.users=Object.assign({},t.users,s)}},actions:{fetchUsers:function(t,e){fetch(e).then((function(e){return e.json().then((function(e){t.commit("setUsers",e.results)}))}))}}},Dt=s("2909"),St={namespaced:!0,state:{messages:{}},getters:{getMessagesById:function(t){return function(e){return t.messages[e]}}},mutations:{setMessages:function(t,e){var s,a=t.messages;e.id in a?(s=a[e.id]).push.apply(s,Object(Dt["a"])(e.messages)):a[e.id]=e.messages;t.messages=Object.assign({},a)}},actions:{}};a["a"].use(Ot["a"]);var It=new Ot["a"].Store({modules:{users:kt,messages:St}}),Bt=s("f309");a["a"].use(Bt["a"]);var At=new Bt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:Mt,store:It,vuetify:At,created:function(){It.dispatch("fetchUsers","https://randomuser.me/api/?results=30&gender=female")},render:function(t){return t(w)}}).$mount("#app")},5779:function(t,e,s){"use strict";s("1cb0")},5879:function(t,e,s){"use strict";s("a63f")},"93e3":function(t,e,s){"use strict";s("942e")},"942e":function(t,e,s){},a63f:function(t,e,s){}});
//# sourceMappingURL=app.ade1f8cf.js.map