(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,n,t){e.exports=t(43)},34:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),u=t.n(o),i=(t(32),t(34),t(45)),c=t(48),l=t(47),s=t(46),p=t(2),m=t(3),g=t(9),f=t(44);function d(){var e=Object(p.a)(["\n  margin-left: auto;\n  padding: 5px 20px;\n  text-decoration: none;\n  border: 0.5px solid #3ac831;\n  color: #3ac831;\n  border-radius: 5px;\n  background: white;\n  cursor: pointer;\n  transition: 0.5s ease;\n  &:hover,\n  &:focus {\n    background: rgba(58, 200, 49, 0.15);\n  }\n"]);return d=function(){return e},e}function h(){var e=Object(p.a)(["\n  margin: 0 0 0 10px;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 1;\n"]);return h=function(){return e},e}function b(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n  border: 0.5px solid #d7d7d7;\n  margin-bottom: 10px;\n  padding: 10px;\n"]);return b=function(){return e},e}function v(){var e=Object(p.a)(["\n  margin-top: 20px;\n"]);return v=function(){return e},e}var _=m.a.ul(v()),E=m.a.li(b()),x=m.a.h3(h()),j=Object(m.a)(f.a)(d()),O=function(e){var n=e.operators;return r.a.createElement(_,null,n.map(function(e){return r.a.createElement(E,{key:e.id},r.a.createElement("img",{src:e.icon_url,alt:e.title}),r.a.createElement(x,null,e.title),r.a.createElement(j,{to:"/pay_mobile/".concat(e.id)},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c"))}))};function y(){var e=Object(p.a)(["\n  margin: 0;\n  font-size: 30px;\n  line-height: 1;\n"]);return y=function(){return e},e}var S=m.a.h1(y()),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null,"\u041e\u043f\u043b\u0430\u0442\u0430 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438"),r.a.createElement(O,{operators:g.a}))},k=t(10),C=t(11),M=t(15),z=t(12),R=t(16);function F(){var e=Object(p.a)(["\n  margin: 0;\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 1;\n"]);return F=function(){return e},e}function T(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]);return T=function(){return e},e}var V=m.a.h1(T()),I=m.a.span(F()),A=function(e){var n=e.icon_url,t=e.title;return r.a.createElement(V,null,r.a.createElement("img",{src:n,alt:t}),r.a.createElement(I,null,t))},B=t(24),H=t.n(B);function J(){var e=Object(p.a)(["\n  padding: 5px 20px;\n  text-decoration: none;\n  border: 0.5px solid #3ac831;\n  color: #3ac831;\n  border-radius: 5px;\n  background: white;\n  transition: 0.5s ease;\n  cursor: pointer;\n  outline: none;\n  &:disabled {\n    cursor: default;\n    background: rgba(206, 206, 206, 0.3);\n    border-color: rgba(206, 206, 206, 0.6);\n    &:hover,\n    &:focus {\n      background: rgba(206, 206, 206, 0.3);\n    }\n  }\n  &:hover,\n  &:focus {\n    background: rgba(58, 200, 49, 0.15);\n  }\n"]);return J=function(){return e},e}function P(){var e=Object(p.a)(["\n  font-weight: bold;\n  margin-left: 10px;\n  font-size: 20px;\n  line-height: 1;\n"]);return P=function(){return e},e}function D(){var e=Object(p.a)(["\n  display: block;\n  margin: ",";\n  color: ",";\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 1;\n"]);return D=function(){return e},e}function q(){var e=Object(p.a)(["\n  display: block;\n  font-weight: normal;\n  font-size: 25px;\n  line-height: 1;\n"]);return q=function(){return e},e}function G(){var e=Object(p.a)(["\n  margin-top: 10px;\n"]);return G=function(){return e},e}function K(){var e=Object(p.a)(["\n  margin-top: 10px;\n"]);return K=function(){return e},e}function L(){var e=Object(p.a)(["\n  margin: 0;\n"]);return L=function(){return e},e}var N=m.a.form(L()),Q=m.a.input(K()),U=Object(m.a)(H.a)(G()),W=m.a.label(q()),X=m.a.span(D(),function(e){return e.pushTop||"0 0 10px"},function(e){return e.statusColor||"red"}),Y=m.a.span(P()),Z=m.a.button(J()),$=function(e){function n(){var e,t;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(M.a)(this,(e=Object(z.a)(n)).call.apply(e,[this].concat(r)))).state={phone_value:"",range_value_error:"",phone_value_error:"",statusMessage:"",submitSuccess:"",range_value:""},t.onPhoneValueChange=function(e){t.setState({phone_value:e.target.value.split("_").join("").replace(/\s/g,"")})},t.onRangeValueChange=function(e){e.target.value>=1e3?t.setState({range_value:1e3}):t.setState({range_value:e.target.value})},t.submitSuccess=function(){100*Math.random()<50?(t.setState({submitSuccess:!0,statusMessage:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e, \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u043d\u0438\u0446\u0443"}),setTimeout(function(){return t.props.handleRedirect(!0)},5e3)):t.setState({submitSuccess:!1,statusMessage:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435"})},t.onHandleSubmit=function(e){e.preventDefault(),t.state.range_value?t.setState({range_value_error:""}):t.setState({range_value_error:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443"}),12!==t.state.phone_value.length?t.setState({phone_value_error:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}):t.setState({phone_value_error:""}),t.state.range_value&&12===t.state.phone_value.length&&t.submitSuccess()},t}return Object(R.a)(n,e),Object(C.a)(n,[{key:"render",value:function(){var e=this.state,n=e.phone_value,t=e.range_value,a=e.range_value_error,o=e.phone_value_error,u=e.submitSuccess,i=e.statusMessage;return r.a.createElement(N,{onSubmit:this.onHandleSubmit},r.a.createElement(W,{htmlFor:"phone"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430:",r.a.createElement("br",null),r.a.createElement(U,{id:"phone",type:"phone",mask:"+7\\ 999 999 99 99",value:n,onChange:this.onPhoneValueChange})),r.a.createElement(X,null,o),r.a.createElement(W,{htmlFor:"number"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443:",r.a.createElement("br",null),r.a.createElement(Q,{id:"number",type:"number",value:t,onChange:this.onRangeValueChange}),r.a.createElement(Y,null,"\u20bd")),r.a.createElement(X,null,a),r.a.createElement(Z,{type:"submit",disabled:u},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c"),i&&r.a.createElement(X,{pushTop:"10px 0 0",statusColor:u&&"green"},i))}}]),n}(r.a.Component),ee=function(e){function n(){var e,t;Object(k.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(M.a)(this,(e=Object(z.a)(n)).call.apply(e,[this].concat(r)))).state={redirect:!1},t.handleRedirect=function(e){t.setState({redirect:e})},t}return Object(R.a)(n,e),Object(C.a)(n,[{key:"render",value:function(){var e=this,n=this.state.redirect,t=g.a.filter(function(n){return n.id===e.props.match.params.operatorId})[0];return n?r.a.createElement(s.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{to:"/"},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement(A,{icon_url:t.icon_url,title:t.title}),r.a.createElement($,{handleRedirect:this.handleRedirect}))}}]),n}(r.a.Component),ne=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(l.a,{exact:!0,path:"/",component:w}),r.a.createElement(l.a,{path:"/pay_mobile/:operatorId?",component:ee}),r.a.createElement(s.a,{to:"/"})))};u.a.render(r.a.createElement(ne,null),document.getElementById("root"))},9:function(e){e.exports={a:[{id:"1",title:"MTS",icon_url:"https://citycard.ru/i/landing-features/operator-mts.svg"},{id:"2",title:"Megafon",icon_url:"https://citycard.ru/i/landing-features/operator-megafon.svg"},{id:"3",title:"Beeline",icon_url:"https://citycard.ru/i/landing-features/beeline.svg"}]}}},[[26,2,1]]]);
//# sourceMappingURL=main.feef6eb9.chunk.js.map