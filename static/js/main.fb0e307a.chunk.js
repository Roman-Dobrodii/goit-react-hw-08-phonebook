(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var c,a,r,s,o,i=n(0),u=n(23),l=n.n(u),b=n(5),j=n(29),d=n(4),O=n(11),f=n(2),m=Object(f.b)("contacts/addRequest"),h=Object(f.b)("contacts/addSuccess"),p={addContactError:Object(f.b)("contacts/addError"),addContactSuccess:h,addContactRequest:m,removeContactRequest:Object(f.b)("contacts/removeRequest"),removeContactSuccess:Object(f.b)("contacts/removeSuccess"),removeContactError:Object(f.b)("contacts/removeError"),fetchContactsRequest:Object(f.b)("contacts/fetchRequest"),fetchContactsSuccess:Object(f.b)("contacts/fetchSuccess"),fetchContactsError:Object(f.b)("contacts/fetchError"),changeFilter:Object(f.b)("contacts/changeFilter")},v=Object(f.c)([],(c={},Object(d.a)(c,p.fetchContactsSuccess,(function(e,t){return t.payload})),Object(d.a)(c,p.addContactSuccess,(function(e,t){return[].concat(Object(j.a)(e),[t.payload])})),Object(d.a)(c,p.removeContactSuccess,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),c)),k=Object(f.c)("",Object(d.a)({},p.changeFilter,(function(e,t){return t.payload}))),g=Object(f.c)(!1,(a={},Object(d.a)(a,p.addContactRequest,(function(){return!0})),Object(d.a)(a,p.addContactSuccess,(function(){return!1})),Object(d.a)(a,p.addContactError,(function(){return!1})),Object(d.a)(a,p.removeContactRequest,(function(){return!0})),Object(d.a)(a,p.removeContactSuccess,(function(){return!1})),Object(d.a)(a,p.removeContactError,(function(){return!1})),a)),y=Object(O.c)({items:v,filter:k,loading:g}),x={registerRequest:Object(f.b)("auth/registrationRequest"),registerSuccess:Object(f.b)("auth/registrationSuccess"),registerError:Object(f.b)("auth/registrationError"),loginRequest:Object(f.b)("auth/loginRequest"),loginSuccess:Object(f.b)("auth/loginSuccess "),loginError:Object(f.b)("auth/loginError "),logoutRequest:Object(f.b)("auth/logOutRequest"),logoutSuccess:Object(f.b)("auth/logOutSuccess"),logoutError:Object(f.b)("auth/logOutError "),getCurrentUserRequest:Object(f.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(f.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(f.b)("auth/getCurrentUserError")},N={name:null,email:null},z=Object(f.c)(N,(r={},Object(d.a)(r,x.registerSuccess,(function(e,t){return t.payload.user})),Object(d.a)(r,x.loginSuccess,(function(e,t){return t.payload.user})),Object(d.a)(r,x.getCurrentUserSuccess,(function(e,t){return t.payload})),Object(d.a)(r,x.logoutSuccess,(function(){return N})),r)),C=Object(f.c)(null,(s={},Object(d.a)(s,x.registerSuccess,(function(e,t){return t.payload.token})),Object(d.a)(s,x.loginSuccess,(function(e,t){return t.payload.token})),Object(d.a)(s,x.logoutSuccess,(function(){return null})),s)),P=Object(f.c)(null,(o={},Object(d.a)(o,x.registerError,(function(e,t){return t.payload})),Object(d.a)(o,x.loginError,(function(e,t){return t.payload})),Object(d.a)(o,x.getCurrentUserError,(function(e,t){return t.payload})),Object(d.a)(o,x.logoutError,(function(e,t){return t.payload})),o)),T=Object(O.c)({user:z,token:C,error:P}),R=n(47),J=n.n(R),S=n(22),M=Object(j.a)(Object(f.d)({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}})),Z={key:"token",storage:J.a,whitelist:["token"]},H=Object(f.a)({reducer:{contacts:y,auth:Object(S.g)(Z,T)},middleware:M,devTools:!1}),L=Object(S.h)(H),X=(n(61),n(16)),I=n(17),E=n(20),K=n(19),w=n(7),B=n(1);function D(){return Object(B.jsx)("section",{className:"home-wrapper ",children:Object(B.jsx)("div",{className:"container container-home",children:Object(B.jsx)("h1",{children:"This is a Phonebook application!"})})})}var U="/",q="/register",F="/login",Q="/contacts",W=n(8),G=n(21),V=n.n(G),Y=n(26),A=n(14),_=n.n(A);_.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var $=function(e){_.a.defaults.headers.common.Authorization="Bearer ".concat(e)},ee=function(){_.a.defaults.headers.common.Authorization=""},te={register:function(e){return function(){var t=Object(Y.a)(V.a.mark((function t(n){var c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x.registerRequest()),t.prev=1,t.next=4,_.a.post("/users/signup",e);case 4:c=t.sent,$(c.data.token),n(x.registerSuccess(c.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(x.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},login:function(e){return function(){var t=Object(Y.a)(V.a.mark((function t(n){var c;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(x.loginRequest()),t.prev=1,t.next=4,_.a.post("/users/login",e);case 4:c=t.sent,$(c.data.token),n(x.loginSuccess(c.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(x.loginError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logout:function(){return function(){var e=Object(Y.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x.logoutRequest()),e.prev=1,e.next=4,_.a.post("/users/logout");case 4:ee(),t(x.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(x.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(Y.a)(V.a.mark((function e(t,n){var c,a,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n(),a=c.auth.token){e.next=3;break}return e.abrupt("return");case 3:return $(a),t(x.getCurrentUserRequest()),e.prev=5,e.next=8,_.a.get("/users/current");case 8:r=e.sent,t(x.getCurrentUserSuccess(r.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(x.getCurrentUserError(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()}},ne=function(e){Object(E.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(X.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).loginInitialState={email:"",password:""},e.state=Object(W.a)({},e.loginInitialState),e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(d.a)({},c,a))},e.handleSubmit=function(t){t.preventDefault(),e.props.onLogin(Object(W.a)({},e.state))},e}return Object(I.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(B.jsx)("div",{className:" container",children:Object(B.jsxs)("section",{className:"wrapper ",children:[Object(B.jsx)("h1",{children:"Login page"}),Object(B.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(B.jsx)("label",{children:Object(B.jsx)("input",{className:"input",type:"text",name:"email",value:t,onChange:this.handleChange,placeholder:"Enter email"})}),Object(B.jsx)("label",{children:Object(B.jsx)("input",{className:"input",type:"password",value:n,onChange:this.handleChange,name:"password",placeholder:"Enter password"})}),Object(B.jsx)("button",{type:"submit",className:"addContact-button signIn-button",children:"Sign in"})]})]})})}}]),n}(i.Component),ce=Object(b.b)(null,{onLogin:te.login})(ne),ae=function(e){Object(E.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(X.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",email:"",password:""},e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(d.a)({},c,a))},e.handleSubmit=function(t){t.preventDefault(),e.props.onRegister(Object(W.a)({},e.state)),e.setState({name:"",email:"",password:""})},e}return Object(I.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,c=e.password;return Object(B.jsx)("div",{className:"container",children:Object(B.jsxs)("section",{className:"wrapper",children:[Object(B.jsx)("h1",{children:"Register form"}),Object(B.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(B.jsx)("label",{children:Object(B.jsx)("input",{className:"input",type:"text",name:"name",value:t,onChange:this.handleChange,placeholder:"Enter name"})}),Object(B.jsx)("label",{children:Object(B.jsx)("input",{className:"input",type:"email",value:n,onChange:this.handleChange,name:"email",placeholder:"Enter email"})}),Object(B.jsx)("label",{children:Object(B.jsx)("input",{className:"input",type:"password",value:c,onChange:this.handleChange,name:"password",placeholder:"Enter password"})}),Object(B.jsx)("button",{type:"submit",className:"addContact-button signIn-button",children:"Sign Up"})]})]})})}}]),n}(i.Component),re=Object(b.b)(null,{onRegister:te.register})(ae),se=n(48),oe=n.n(se),ie=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("h1",{className:"mainTitle",children:"Phonebook"})})},ue=n(102);_.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var le={addContact:function(e,t){return function(n){n(p.addContactRequest()),_.a.post("/contacts",{name:e,number:t}).then((function(c){n(p.addContactSuccess({name:e,number:t,id:c.data.name}))})).catch((function(e){return n(p.addContactError(e))}))}},fetchContacts:function(){return function(e,t){e(p.fetchContactsRequest());var n=t().auth.token;$(n),_.a.get("/contacts").then((function(t){var n=t.data,c=Object.keys(n).reduce((function(e,t){return e.push(Object(W.a)({id:t},n[t])),e}),[]);e(p.fetchContactsSuccess(c))})).catch((function(t){return e(p.fetchContactsError(t))}))}},removeContact:function(e){return function(t){t(p.removeContactRequest()),_.a.delete("/contacts/".concat(e)).then((function(){return t(p.removeContactSuccess(e))})).catch((function(e){return t(p.removeContactError(e))}))}}},be=n(28),je=function(e){return e.contacts.filter},de=function(e){return e.contacts.items},Oe={getLoading:function(e){return e.contacts.loading},getFilter:je,getContacts:de,getContactById:Object(be.a)([function(e,t){return t},de],(function(e,t){return t.find((function(t){return t.id===e}))})),getContactsFiltered:Object(be.a)([de,je],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}))},fe=function(e){Object(E.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(X.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).formInitialState={name:"",number:""},e.state=Object(W.a)(Object(W.a)({},e.formInitialState),{},{alertMessageShow:!1}),e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(d.a)({},c,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,c=n.name,a=n.number;if(e.props.contacts.find((function(e){return e.name===c})))return e.setState({alertMessageShow:!0}),e.setState(Object(W.a)({},e.formInitialState));e.props.onAddContact(c,a),e.setState({name:"",number:""})},e.toggleAlert=function(){e.setState({alertMessageShow:!1})},e}return Object(I.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,c=e.alertMessageShow;return Object(B.jsxs)("section",{className:"wrapper",children:[Object(B.jsx)(ue.a,{in:c,timeout:250,classNames:"alertFade",unmountOnExit:!0,children:Object(B.jsx)("button",{className:"alertMessage",onClick:this.toggleAlert,children:Object(B.jsx)("p",{children:"Contact already exists"})})}),Object(B.jsxs)("form",{onSubmit:this.handleSubmit,className:"form",children:[Object(B.jsx)("label",{children:Object(B.jsx)("input",{className:"input",type:"text",name:"name",value:t,onChange:this.handleChange,placeholder:"Enter name"})}),Object(B.jsx)("label",{children:Object(B.jsx)("input",{className:"input",type:"tel",value:n,onChange:this.handleChange,name:"number",placeholder:"Enter number"})}),Object(B.jsx)("button",{type:"submit",className:"addContact-button",children:"Add contact"})]})]})}}]),n}(i.Component),me={onAddContact:le.addContact},he=Object(b.b)((function(e){return{contacts:Oe.getContacts(e),filter:Oe.getFilter(e)}}),me)(fe);var pe=Object(b.b)((function(e){return{value:Oe.getFilter(e)}}),(function(e){return{onChange:function(t){return e(p.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(B.jsx)("div",{className:"find-input_frame ",children:Object(B.jsx)("label",{children:Object(B.jsx)("input",{placeholder:"Find contact...",className:"input",type:"text",value:t,onChange:n})})})})),ve=Object(b.b)((function(e,t){var n=Oe.getContactById(e,t.id);return Object(W.a)({},n)}),(function(e,t){return{deleteContact:function(n){return e(le.removeContact(t.id))}}}))((function(e){var t=e.id,n=e.name,c=e.number,a=e.deleteContact;return Object(B.jsxs)("li",{className:"contact",children:[Object(B.jsx)("span",{children:n}),Object(B.jsx)("span",{children:c}),Object(B.jsx)("button",{className:"deleteBtn",type:"button",onClick:function(){return a(t)},children:"x"})]})})),ke=n(103),ge=Object(b.b)((function(e){return{items:Oe.getContactsFiltered(e),contacts:Oe.getContacts(e)}}))((function(e){var t=e.items,n=e.contacts;return Object(B.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:n.length>0&&0===t.length?Object(B.jsx)("h4",{children:"...Nothing Found"}):Object(B.jsx)(ke.a,{component:"ul",className:"contacts-list",children:t.map((function(e){var t=e.id;return Object(B.jsx)(ue.a,{classNames:"taskList-fade",timeout:250,unmountOnExit:!0,children:Object(B.jsx)(ve,{id:t})},t)}))})})})),ye=function(e){Object(E.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(X.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={showContacts:!1},e}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"componentDidUpdate",value:function(e,t){}},{key:"render",value:function(){return Object(B.jsxs)("div",{className:"container ",children:[Object(B.jsx)(ue.a,{in:!0,appear:!0,classNames:"mainTitle-slideIn",timeout:5e3,unmountOnExit:!0,children:Object(B.jsx)(ie,{})}),Object(B.jsx)(he,{}),Object(B.jsx)(ue.a,{in:this.props.filteredContacts.length>1||this.props.contacts.length>1,timeout:250,classNames:"findContact",unmountOnExit:!0,children:Object(B.jsx)(pe,{})}),Object(B.jsx)(ge,{}),this.props.IsLoadingContacts&&Object(B.jsx)(oe.a,{style:{display:"flex ",justifyContent:"center"},type:"ThreeDots",color:"#00BFFF",height:80,width:80})]})}}]),n}(i.Component),xe={onFetchContacts:le.fetchContacts},Ne=Object(b.b)((function(e){var t=e.contacts,n=t.items,c=t.filter;return{filteredContacts:n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})),IsLoadingContacts:Oe.getLoading(e),filter:Oe.getFilter(e),contacts:e.contacts.items}}),xe)(ye),ze=n(18);function Ce(){var e=Object(b.c)((function(e){return e.auth.token}));return Object(B.jsx)("nav",{children:Object(B.jsxs)("ul",{className:"navList",children:[Object(B.jsx)("li",{children:Object(B.jsx)(ze.b,{to:U,className:"nav-link",activeClassName:"nav-link_active ",exact:!0,children:"Home"})}),e?Object(B.jsx)("li",{children:Object(B.jsx)(ze.b,{to:Q,className:"nav-link",activeClassName:"nav-link_active ",exact:!0,children:"Contacts"})}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("li",{children:Object(B.jsx)(ze.b,{to:q,className:"nav-link",activeClassName:"nav-link_active ",exact:!0,children:"Register"})}),Object(B.jsx)("li",{children:Object(B.jsx)(ze.b,{to:F,className:"nav-link",activeClassName:"nav-link_active",exact:!0,children:"Login"})})]})]})})}var Pe=Object(b.b)((function(e){return{name:e.auth.user.name,avatar:"data:image/png;base64,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"}}),(function(e){return{logout:function(){return e(te.logout())}}}))((function(e){var t=e.name,n=e.avatar,c=e.logout;return Object(B.jsxs)("div",{className:"userMenu",children:[Object(B.jsxs)("div",{className:"userMenu-wrapper",children:[Object(B.jsx)("div",{className:"userMenu-avatar",children:Object(B.jsx)("img",{className:"userMenu-avatar_img",src:n,alt:t,width:"32"})}),Object(B.jsxs)("span",{className:"userMenu-name",children:["Welcome ",t,"!"]})]}),Object(B.jsx)("button",{type:"button",className:"logout-button",onClick:c,children:"Logout"})]})}));var Te=Object(b.b)((function(e){return{token:e.auth.token}}))((function(e){var t=e.token;return Object(B.jsx)("header",{children:Object(B.jsx)("section",{className:"navigation",children:Object(B.jsxs)("div",{className:" wrapper",children:[Object(B.jsx)(Ce,{}),t&&Object(B.jsx)(Pe,{})]})})})})),Re=n(30),Je=Object(b.b)((function(e){return{token:e.auth.token}}))((function(e){var t=e.component,n=e.token,c=e.redirectTo,a=Object(Re.a)(e,["component","token","redirectTo"]);return Object(B.jsx)(w.b,Object(W.a)(Object(W.a)({},a),{},{render:function(e){return n&&a.restricted?Object(B.jsx)(w.a,{to:c}):Object(B.jsx)(t,Object(W.a)({},e))}}))})),Se=Object(b.b)((function(e){return{token:e.auth.token}}))((function(e){var t=e.component,n=e.token,c=e.redirectTo,a=Object(Re.a)(e,["component","token","redirectTo"]);return Object(B.jsx)(w.b,Object(W.a)(Object(W.a)({},a),{},{render:function(e){return n?Object(B.jsx)(t,Object(W.a)({},e)):Object(B.jsx)(w.a,{to:c})}}))})),Me=function(e){Object(E.a)(n,e);var t=Object(K.a)(n);function n(){return Object(X.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.getUserInfo()}},{key:"render",value:function(){return Object(B.jsxs)("div",{children:[Object(B.jsx)(Te,{}),Object(B.jsx)(i.Suspense,{fallback:Object(B.jsx)("h1",{children:"...Loading"}),children:Object(B.jsxs)(w.d,{children:[Object(B.jsx)(Je,{exact:!0,path:U,component:D}),Object(B.jsx)(Je,{path:F,restricted:!0,redirectTo:Q,component:ce}),Object(B.jsx)(Je,{path:q,restricted:!0,redirectTo:Q,component:re}),Object(B.jsx)(Se,{path:Q,redirectTo:F,component:Ne})]})})]})}}]),n}(i.Component),Ze=Object(b.b)(null,(function(e){return{getUserInfo:function(){return e(te.getCurrentUser())}}}))(Me),He=n(49);l.a.render(Object(B.jsx)("div",{children:Object(B.jsx)(b.a,{store:H,children:Object(B.jsx)(He.a,{loading:null,persistor:L,children:Object(B.jsx)(ze.a,{children:Object(B.jsx)(Ze,{})})})})}),document.getElementById("root"))},61:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.fb0e307a.chunk.js.map