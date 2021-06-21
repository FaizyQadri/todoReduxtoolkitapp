(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),o=n(8),u=n.n(o),i=(n(16),n(17),n(7)),s=n(6),l=n(2),d=n.n(l),f=n(5),j=n(4),b=function(){var e=Object(f.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"post",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(n)});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(f.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:n,headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")}});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=Object(j.b)("signupuser",function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/signup",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(j.b)("signinuser",function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/signin",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(j.c)({name:"user",initialState:{token:"",loading:!1,error:""},reducers:{addToken:function(e,t){e.token=localStorage.getItem("token")},logout:function(e,t){e.token=null,localStorage.removeItem("token")}},extraReducers:(r={},Object(s.a)(r,O.fulfilled,(function(e,t){var n=t.payload,r=n.error,c=n.message;e.loading=!1,e.error=r||c})),Object(s.a)(r,O.pending,(function(e,t){e.loading=!0})),Object(s.a)(r,h.pending,(function(e,t){e.loading=!0})),Object(s.a)(r,h.fulfilled,(function(e,t){var n=t.payload,r=n.error,c=n.token;e.loading=!1,r?e.error=r:(e.token=c,localStorage.setItem("token",c))})),r)}),g=v.actions,m=g.addToken,x=g.logout,k=v.reducer,w=n(3),y=n(1);var S,C=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),u=o[0],s=o[1],l=Object(w.b)(),d=Object(c.useState)("signin"),f=Object(i.a)(d,2),j=f[0],b=f[1],p=Object(w.c)((function(e){return e.user})),v=p.loading,g=p.error;return Object(y.jsxs)("div",{children:[v&&Object(y.jsx)("div",{className:"progress",children:Object(y.jsx)("div",{className:"indeterminate"})}),Object(y.jsxs)("h1",{children:["please ",j,"!"]}),g&&Object(y.jsx)("h5",{children:g}),Object(y.jsx)("input",{type:"email",value:n,onChange:function(e){return r(e.target.value)}}),Object(y.jsx)("input",{type:"password",value:u,onChange:function(e){return s(e.target.value)}}),"signin"==j?Object(y.jsx)("h6",{onClick:function(){return b("signup")},children:"Dont have an account ?"}):Object(y.jsx)("h6",{onClick:function(){return b("signin")},children:"Already have an account?"}),Object(y.jsx)("button",{className:"btn #ff4081 pink accent-2",onClick:function(){l("signin"==j?h({email:n,password:u}):O({email:n,password:u}))},children:j})]})},N=Object(j.b)("createtodo",function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/createtodo",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(j.b)("fetchtodos",Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/gettodos","get");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),A=Object(j.b)("deletetodo",function(){var e=Object(f.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/remove/".concat(t),"delete");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T=Object(j.c)({name:"todo",initialState:[],reducers:{},extraReducers:(S={},Object(s.a)(S,N.fulfilled,(function(e,t){var n=t.payload.message;n&&e.push(n)})),Object(s.a)(S,I.fulfilled,(function(e,t){return t.payload.message})),Object(s.a)(S,A.fulfilled,(function(e,t){var n=t.payload.message;return e.filter((function(e){return e._id!=n._id}))})),S)}).reducer;function _(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(w.b)(),o=Object(w.c)((function(e){return e.todos}));return Object(c.useEffect)((function(){a(I())}),[]),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{placeholder:"write todo here",value:n,onChange:function(e){return r(e.target.value)}}),Object(y.jsx)("button",{className:"btn #ff4081 pink accent-2",onClick:function(){a(N({todo:n}))},children:"Add todo"}),Object(y.jsx)("ul",{className:"collection",children:o.map((function(e){return Object(y.jsx)("li",{className:"collection-item",onClick:function(){return a(A(e._id))},children:e.todo},e._id)}))}),Object(y.jsx)("button",{className:"btn #ff4081 pink accent-2",onClick:function(){return a(x())},children:"Logout"})]})}var E=function(){var e=Object(w.c)((function(e){return e.user.token})),t=Object(w.b)();return Object(c.useEffect)((function(){t(m())}),[]),Object(y.jsx)("div",{className:"App",children:e?Object(y.jsx)(_,{}):Object(y.jsx)(C,{})})},J=Object(j.a)({reducer:{user:k,todos:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(w.a,{store:J,children:Object(y.jsx)(E,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.53cf1fef.chunk.js.map