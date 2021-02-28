(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(11),r=n.n(i),o=(n(18),n(7)),h=n.n(o),c=n(10),l=n(12),u=n(13),p=n(2),d=n(3),j=n(6),b=n(5),m=n(4),O=(n(20),n(0)),x=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){fetch("/")}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Login"}),Object(O.jsxs)("form",{action:"",onSubmit:function(t){return e.props.handleLogin(t,e.props)},children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username"}),Object(O.jsx)("input",{type:"text",name:"username",value:this.props.username,onChange:this.props.handleInput}),Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{type:"email",name:"email",value:this.props.email,onChange:this.props.handleInput}),Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password",value:this.props.password,onChange:this.props.handleInput}),Object(O.jsx)("button",{type:"submit",children:"Login"}),Object(O.jsxs)("p",{children:["Don't have an account? Why not ",Object(O.jsx)("a",{href:"/",children:"Register"}),"first?"]})]})]})}}]),n}(a.Component),f=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Register"}),Object(O.jsxs)("form",{action:"",onSubmit:function(t){return e.props.handleRegistration(t,e.props)},children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username"}),Object(O.jsx)("input",{type:"text",name:"username",value:this.props.username,onChange:this.props.handleInput}),Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{type:"email",name:"email",value:this.props.email,onChange:this.props.handleInput}),Object(O.jsx)("label",{htmlFor:"password1",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password1",value:this.props.password1,onChange:this.props.handleInput}),Object(O.jsx)("label",{htmlFor:"password2",children:"Confirm Password"}),Object(O.jsx)("input",{type:"password",name:"password2",value:this.props.password2,onChange:this.props.handleInput}),Object(O.jsx)("button",{type:"submit",children:"Register"}),Object(O.jsxs)("p",{children:["Already have an account? Why not ",Object(O.jsx)("a",{href:"/",children:"Login"}),"?"]})]})]})}}]),n}(a.Component);var v=function(e){var t,n,a;return Object(O.jsxs)("form",{action:"",onSubmit:function(t){return e.handlePost(t)},children:[Object(O.jsx)("label",{htmlFor:"name",children:"Name"}),Object(O.jsx)("input",{type:"text",value:null===(t=e.chat)||void 0===t?void 0:t.name,name:"name",onChange:e.handleInput}),Object(O.jsx)("label",{htmlFor:"title",children:"Title"}),Object(O.jsx)("input",{type:"text",value:null===(n=e.chat)||void 0===n?void 0:n.text,name:"title",onChange:e.handleInput}),Object(O.jsx)("label",{htmlFor:"text",children:"Share your thoughts!"}),Object(O.jsx)("input",{type:"text",value:null===(a=e.chat)||void 0===a?void 0:a.text,name:"text",onChange:e.handleInput}),Object(O.jsx)("button",{type:"submit",children:"Chat!"})]})},g=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e,t=this,n=null===(e=this.props.chat)||void 0===e?void 0:e.map((function(e){return Object(O.jsxs)("li",{onClick:function(){return console.log(e.id)},children:[Object(O.jsx)("p",{children:e.name}),Object(O.jsx)("h1",{children:e.title}),Object(O.jsx)("p",{children:e.text}),Object(O.jsx)("button",{onClick:function(n){return t.props.handleEdit(e.id,n)},children:"Edit"}),Object(O.jsx)("button",{onClick:function(){return t.props.handleDelete(e.id,t.state)},children:"Delete"})]},e.id)}));return Object(O.jsx)("div",{className:"chat-display",children:Object(O.jsx)("ul",{children:n})})}}]),n}(a.Component),y=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{handleInput:this.props.handleInput,handlePost:this.props.handlePost}),Object(O.jsx)(g,{chat:this.props.chat,handleEdit:this.props.handleEdit,handleDelete:this.props.handleDelete}),Object(O.jsx)(x,{user:this.props.user,handleLogin:this.props.handleLogin,handleInput:this.props.handleInput}),Object(O.jsx)(f,{user:this.props.user,handleRegistration:this.props.handleRegistration,handleInput:this.props.handleInput})]})}}]),n}(a.Component),w=n(8),C=n.n(w),k=function(e){Object(b.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={chat:[],isLoggedIn:!!C.a.get("Authorization"),username:"",email:"",password:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.handlePost=a.handlePost.bind(Object(j.a)(a)),a.handleEdit=a.handleEdit.bind(Object(j.a)(a)),a.handleDelete=a.handleDelete.bind(Object(j.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(j.a)(a)),a.handleLogin=a.handleLogin.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/chat").then((function(e){return e.json()})).then((function(t){return e.setState({chat:Object(u.a)(t)})}))}},{key:"handleInput",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handlePost",value:function(){var e=Object(c.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/v1/chat/",{method:"POST",headers:{"Content-Type":"Application/JSON"},body:JSON.stringify({name:this.state.name,title:this.state.title,text:this.state.text})});case 3:this.setState({name:this.state.name,title:this.state.title,text:this.state.text});case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleEdit",value:function(e){fetch("/api/v1/chat/"+e+"/update/",{method:"PUT",headers:{"Content-Type":"Application/Json"},body:JSON.stringify({name:this.state.name,title:this.state.title,text:this.state.text})})}},{key:"handleDelete",value:function(e){fetch("api/v1/chat/"+e+"/delete/",{method:"DELETE"}),this.setState({name:this.state.name,title:this.state.title,text:this.state.text})}},{key:"handleRegistration",value:function(){var e=Object(c.a)(h.a.mark((function e(t,n){var a,s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":C.a.get("csrftoken")},body:JSON.stringify({username:n.user.username,email:n.user.email,password1:n.user.password1,password2:n.user.password2})},e.next=4,fetch("/rest-auth/registration/",a);case 4:return s=e.sent,e.next=7,s.json().catch((function(e){return console.log(e)}));case 7:(i=e.sent).key&&C.a.set("Authorization","Token ".concat(i.key));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleLogin",value:function(e,t){console.log(t.user),e.preventDefault()}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"Chat App"}),Object(O.jsx)(y,{user:this.state,chat:this.state.chat,handlePost:this.handlePost,handleEdit:this.handleEdit,handleDelete:this.handleDelete,handleRegistration:this.handleRegistration,handleLogin:this.handleLogin,handleInput:this.handleInput})]})})}}]),n}(a.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),I()}},[[22,1,2]]]);
//# sourceMappingURL=main.f6ea8090.chunk.js.map