(this["webpackJsonpspa-2"]=this["webpackJsonpspa-2"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(19),r=n.n(i),s=(n(26),n(10)),o=n(11),j=n(13),l=n(12),u=(n(27),n(6)),d=n.p+"static/media/header1.e210d623.jpg",m=n.p+"static/media/header2.26d6661b.jpg",p=n.p+"static/media/header3.1b8172a4.jpg",b=(n(28),n(2)),h=n(0),x=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(b.e,{children:[Object(h.jsx)(b.c,{path:"/",exact:!0,render:function(){return Object(h.jsx)("img",{src:d,alt:"miasto"})}}),Object(h.jsx)(b.c,{path:"/products",render:function(){return Object(h.jsx)("img",{src:m,alt:"miasto"})}}),Object(h.jsx)(b.c,{path:"/contact",render:function(){return Object(h.jsx)("img",{src:p,alt:"miasto"})}}),Object(h.jsx)(b.c,{path:"/admin",render:function(){return Object(h.jsx)("img",{src:p,alt:"miasto"})}}),Object(h.jsx)(b.c,{render:function(){return Object(h.jsx)("img",{src:d,alt:"miasto"})}})]})})},O=(n(35),[{name:"start",path:"/",exact:!0},{name:"produkty",path:"/products"},{name:"kontakt",path:"/contact"},{name:"panel admina",path:"/admin"}]),f=function(){var e=O.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(u.c,{to:e.path,exact:!!e.exact&&e.exact,children:e.name})},e.name)}));return Object(h.jsx)("nav",{className:"main",children:Object(h.jsx)("ul",{children:e})})},v=n(21),g=function(e){var t=e.title,n=e.author,a=e.text;return Object(h.jsxs)("article",{style:{marginTop:"40px"},children:[Object(h.jsxs)("h3",{style:{marginBottom:3,textTransform:"uppercase"},children:[" ",t," "]}),Object(h.jsx)("span",{style:{display:"block",marginBottom:10,fontSize:12},children:n}),Object(h.jsxs)("p",{style:{fontSize:15},children:[" ",a," "]})]})},y=[{id:1,title:"Czym jest teoria strun",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt magnam odio consequuntur unde, illo, magni debitis earum, aperiam dolorem quia animi! Impedit enim tenetur ipsa odit optio dolore exercitationem Autem similique veniam vel repellat officiis, error sint vero? Dolore quas molestias ea facere vel, et placeat explicabo? Ipsa dolorum saepe molestias laboriosam suscipit sequi fugiat ab dolores veniam sed."},{id:2,title:"Czym jest paradoks Fermiego?",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt magnam odio consequuntur unde, illo, magni debitis earum, aperiam dolorem quia animi! Impedit enim tenetur ipsa odit optio dolore exercitationem Autem similique veniam vel repellat officiis, error sint vero? Dolore quas molestias ea facere vel, et placeat explicabo? Ipsa dolorum saepe molestias laboriosam suscipit sequi fugiat ab dolores veniam sed."},{id:3,title:"Ciemna materia i ciemna energia?",author:"Jan Nowak",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nesciunt magnam odio consequuntur unde, illo, magni debitis earum, aperiam dolorem quia animi! Impedit enim tenetur ipsa odit optio dolore exercitationem Autem similique veniam vel repellat officiis, error sint vero? Dolore quas molestias ea facere vel, et placeat explicabo? Ipsa dolorum saepe molestias laboriosam suscipit sequi fugiat ab dolores veniam sed."}],k=function(){var e=y.map((function(e){return Object(h.jsx)(g,Object(v.a)({},e),e.id)}));return Object(h.jsx)("div",{className:"home",children:e})},w=(n(36),["car","bike","motocycle"]),q=function(){var e=w.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/product/".concat(e),children:e})},e)}));return Object(h.jsxs)("div",{className:"products",children:[Object(h.jsx)("h2",{children:"Lista Produkt\xf3w"}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:e})})]})},N=function(e){return Object(h.jsx)("article",{className:"product",children:Object(h.jsx)("h1",{children:e.id})})},z=function(e){var t=e.match;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{children:"Strona produktu"}),Object(h.jsx)(N,{id:t.params.id}),Object(h.jsx)(u.b,{to:"/products",children:"Powr\xf3t do listy produkt\xf3w"})]})},S=(n(37),function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:""})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("h3",{children:"Napisz do nas"}),Object(h.jsx)("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Wpisz wiadomo\u015b\u0107..."}),Object(h.jsx)("button",{children:"Wy\u015blij"})]}),Object(h.jsx)(b.a,{when:this.state.value,message:"Masz niewys\u0142any formularz. Czy na pewno chcesz opu\u015bci\u0107 t\u0119 stron\u0119"})]})}}]),n}(a.Component)),C=function(){return Object(h.jsx)(b.c,{render:function(){return Object(h.jsx)(b.b,{to:"/login"})}})},J=function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"",children:["Podaj Login",Object(h.jsx)("input",{type:"text"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"",children:["Podaj Has\u0142o",Object(h.jsx)("input",{type:"password"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{children:"Zaloguj"})]})},A=function(){return Object(h.jsx)("div",{children:"Nie ma takiej strony"})},F=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(b.e,{children:[Object(h.jsx)(b.c,{path:"/",exact:!0,component:k}),Object(h.jsx)(b.c,{path:"/products",exact:!0,component:q}),Object(h.jsx)(b.c,{path:"/product/:id",exact:!0,component:z}),Object(h.jsx)(b.c,{path:"/contact",exact:!0,component:S}),Object(h.jsx)(b.c,{path:"/admin",exact:!0,component:C}),Object(h.jsx)(b.c,{path:"/login",exact:!0,component:J}),Object(h.jsx)(b.c,{component:A})]})})},I=(n(38),function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Stopka"}),Object(h.jsx)(b.c,{path:"/",exact:!0,render:function(e){return Object(h.jsxs)("p",{children:["Jeste\u015b na ",Object(h.jsx)("span",{children:"stronie g\u0142\xf3wnej"})]})}}),Object(h.jsx)(b.c,{path:"/:page",exact:!0,render:function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{children:["Jeste\u015b na ",Object(h.jsx)("span",{children:e.match.params.page})]}),Object(h.jsxs)("p",{children:["Jeste\u015b na ",Object(h.jsx)("span",{children:e.match.url})]}),Object(h.jsxs)("p",{children:["Jeste\u015b na ",Object(h.jsx)("span",{children:e.match.path})]})]})}})]})}),L=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(u.a,{basename:"/app-rr",children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("header",{children:Object(h.jsx)(x,{})}),Object(h.jsxs)("main",{children:[Object(h.jsx)("aside",{children:Object(h.jsx)(f,{})}),Object(h.jsx)("section",{className:"page",children:Object(h.jsx)(F,{})})]}),Object(h.jsx)("footer",{children:Object(h.jsx)(I,{})})]})})}}]),n}(a.Component);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.343e34a0.chunk.js.map