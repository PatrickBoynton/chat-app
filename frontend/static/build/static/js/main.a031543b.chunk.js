(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(9),h=n.n(c),s=(n(17),n(8)),l=n.n(s),r=n(10),u=n(11),o=n(12),d=n(3),p=n(4),j=n(2),b=n(6),O=n(5),m=(n(19),n(0)),x=function(t){Object(b.a)(n,t);var e=Object(O.a)(n);function n(t){return Object(d.a)(this,n),e.call(this,t)}return Object(p.a)(n,[{key:"render",value:function(){var t,e,n,a=this;return Object(m.jsxs)("form",{action:"",onSubmit:function(t){return a.props.handleSubmit(t)},children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{type:"text",value:null===(t=this.props.chat)||void 0===t?void 0:t.name,name:"name",onChange:this.props.handleInput}),Object(m.jsx)("label",{htmlFor:"title",children:"Title"}),Object(m.jsx)("input",{type:"text",value:null===(e=this.props.chat)||void 0===e?void 0:e.text,name:"title",onChange:this.props.handleInput}),Object(m.jsx)("label",{htmlFor:"text",children:"Share your thoughts!"}),Object(m.jsx)("input",{type:"text",value:null===(n=this.props.chat)||void 0===n?void 0:n.text,name:"text",onChange:this.props.handleInput}),Object(m.jsx)("button",{type:"submit",children:"Chat!"})]})}}]),n}(a.Component),f=function(t){Object(b.a)(n,t);var e=Object(O.a)(n);function n(t){return Object(d.a)(this,n),e.call(this,t)}return Object(p.a)(n,[{key:"render",value:function(){var t,e=this,n=null===(t=this.props.chat)||void 0===t?void 0:t.map((function(t){return Object(m.jsxs)("li",{onClick:function(){return console.log("clicked!")},children:[Object(m.jsx)("p",{children:t.name}),Object(m.jsx)("h1",{children:t.title}),Object(m.jsx)("p",{children:t.text}),Object(m.jsx)("button",{onClick:function(n){return e.props.handleEdit(t.id,n)},children:"Edit"}),Object(m.jsx)("button",{onClick:function(){return e.props.handleDelete(t.id,e.state)},children:"Delete"})]},t.id)}));return Object(m.jsx)("div",{className:"chat-display",children:Object(m.jsx)("ul",{children:n})})}}]),n}(a.Component),v=function(t){Object(b.a)(n,t);var e=Object(O.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={chat:[]},a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.handleEdit=a.handleEdit.bind(Object(j.a)(a)),a.handleDelete=a.handleDelete.bind(Object(j.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("/api/v1/chat").then((function(t){return t.json()})).then((function(e){return t.setState({chat:Object(o.a)(e)})}))}},{key:"handleInput",value:function(t){this.setState(Object(u.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(){var t=Object(r.a)(l.a.mark((function t(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,fetch("/api/v1/chat/",{method:"POST",headers:{"Content-Type":"Application/JSON"},body:JSON.stringify({name:this.state.name,title:this.state.title,text:this.state.text})});case 3:this.setState({name:this.state.name,title:this.state.title,text:this.state.text});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleEdit",value:function(t){fetch("/api/v1/chat/"+t+"/update/",{method:"PUT",headers:{"Content-Type":"Application/Json"},body:JSON.stringify({name:this.state.name,title:this.state.title,text:this.state.text})})}},{key:"handleDelete",value:function(t){fetch("api/v1/chat/"+t+"/delete/",{method:"DELETE"}),this.setState({name:this.state.name,title:this.state.title,text:this.state.text})}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Chat App"}),Object(m.jsx)(x,{handleInput:this.handleInput,handleSubmit:this.handleSubmit}),Object(m.jsx)(f,{chat:this.state.chat,handleEdit:this.handleEdit,handleDelete:this.handleDelete})]})})}}]),n}(a.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,h=e.getTTFB;n(t),a(t),i(t),c(t),h(t)}))};h.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),y()}},[[21,1,2]]]);
//# sourceMappingURL=main.a031543b.chunk.js.map