(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),o=c.n(n),s=c(6),r=c(4),a=c(5),l=c(8),i=c(7),d=c(1),u=c.n(d),j=(c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:["Jam"]},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{children:[t.length?"".concat(t,"\n            "," ","\n            is selected"):"No goods selected",t.length?Object(j.jsx)("button",{type:"button",onClick:function(){return e.setState({selectedGood:[]})},children:"Clear"}):null]}),Object(j.jsx)("ul",{children:b.map((function(c){return Object(j.jsxs)("li",{className:"".concat(t.includes(c)?"selectedGood":""),children:[c," ",Object(j.jsx)("button",{type:"button",onClick:function(){e.setState({selectedGood:t.includes(c)?t.filter((function(e){return e!==c})):[].concat(Object(s.a)(t),[c])})},children:t.includes(c)?"Remove":"Select"})]},c)}))})]})}}]),c}(u.a.Component),p=h;o.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c261200d.chunk.js.map