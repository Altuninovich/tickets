(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(21),s=c.n(n),i=(c(27),c(8)),l=c(3),d=c.n(l),j=c(5),o=c(6),u=c(4),p=(c(29),c(22)),b=(c(30),c(0)),m=function(e){var t,c=e.ticket,a=e.currency\u0421ode;return Object(b.jsxs)("div",{className:"ticket",children:[Object(b.jsxs)("div",{className:"wrapper-price",children:[Object(b.jsx)("div",{className:"ticket_company-name",children:c.carrier}),Object(b.jsx)("div",{className:"ticket_price-wrapper",children:Object(b.jsxs)("div",{className:"ticket_price",children:[Object(b.jsx)("div",{children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(b.jsx)("div",{children:"\u0437\u0430 ".concat(c.price,"-").concat(a)})]})})]}),Object(b.jsxs)("div",{className:"ticket_content",children:[Object(b.jsxs)("div",{className:"ticket_start-point",children:[Object(b.jsx)("div",{className:"ticket_data-time",children:c.departure_time}),Object(b.jsx)("div",{className:"ticket_data-city",children:c.origin_name}),Object(b.jsx)("div",{className:"ticket_data-date",children:c.departure_date})]}),Object(b.jsx)("div",{className:"ticket_transfers",children:(t=c.stops,{0:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",1:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",2:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",3:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"}[t])}),Object(b.jsxs)("div",{className:"ticket_end-point",children:[Object(b.jsx)("div",{className:"ticket_data-time",children:c.arrival_time}),Object(b.jsx)("div",{className:"ticket_data-city",children:c.destination_name}),Object(b.jsx)("div",{className:"ticket_data-date",children:c.arrival_date})]})]})]})},h=function(e){var t=e.currentStateTickets,c=e.transfersFilter,a=e.currency\u0421ode;if(0===e.currentStateTickets.length)return Object(b.jsx)("div",{children:"\u0431\u0438\u043b\u0435\u0442\u043e\u0432 \u043d\u0435\u0442"});var r=Object.values(c).reduce((function(e,t,c){return t?[].concat(Object(p.a)(e),[c]):e}),[]),n=t.filter((function(e){return r.includes(e.stops)}));return Object(b.jsx)("div",{className:"tickets_wrapper",children:n.map((function(e){return Object(b.jsx)(m,{ticket:e,"currency\u0421ode":a})}))})},v=c(12),O=c.n(v),x=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(!1),s=Object(u.a)(n,2),i=s[0],l=s[1],j=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("http://api.currencylayer.com/live?access_key=816daecdb6c897bdb6ffa5739cf6b342");case 3:return t=e.sent,e.abrupt("return",t.data.quotes);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();function p(){return(p=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/tickets.json");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){l(!0),function(){return p.apply(this,arguments)}().then((function(e){var t=e.data.tickets;r(t),l(!1)}))}),[]),{tickets:c,loading:i,getPrice:j}},f=c(10),k=c.n(f),N=function(){return Object(b.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(b.jsx)("span",{className:"sr-only",children:"Loading..."})})},_={withoutTransplant:!0,oneTransplant:!0,twoTransplants:!0,threeTransplants:!0},w=Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"bi bi-check",viewBox:"2 3 12 12",children:Object(b.jsx)("path",{d:"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"})});var g=function(){var e=x(),t=e.tickets,c=e.loading,r=e.getPrice,n=Object(a.useState)("RUB"),s=Object(u.a)(n,2),l=s[0],p=s[1],m=Object(a.useState)([]),v=Object(u.a)(m,2),O=v[0],f=v[1],g=Object(a.useState)(_),T=Object(u.a)(g,2),y=T[0],S=T[1],U=function(){var e=Object(o.a)(d.a.mark((function e(c){var a,n,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.target.outerText,p(a),e.next=4,r();case 4:n=e.sent,s=n.USDRUB,i=t.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{price:Math.ceil(e.price/s)})})),f(i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(d.a.mark((function e(c){var a,n,s,i,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.target.outerText,p(a),e.next=4,r();case 4:n=e.sent,s=n.USDRUB,i=n.USDEUR,l=t.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{price:Math.ceil(e.price/s*i)})})),f(l);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e){return function(){S(Object(j.a)(Object(j.a)({},y),{},Object(i.a)({},e,!y[e])))}},R=k()({"mode_price-total":!0,"mode_price-rub":!0,"mode_price-active":"RUB"===l}),D=k()({"mode_price-total":!0,"mode_price-usd":!0,"mode_price-active":"USD"===l}),E=k()({"mode_price-total":!0,"mode_price-eur":!0,"mode_price-active":"EUR"===l});return Object(a.useEffect)((function(){return f(t)}),[t]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"App_wrapper",children:[Object(b.jsxs)("div",{className:"modes",children:[Object(b.jsx)("div",{className:"modes_price-title",children:"\u0412\u0410\u041b\u042e\u0422\u0410"}),Object(b.jsxs)("div",{className:"modes_price",children:[Object(b.jsx)("div",{onClick:function(e){var c=e.target.outerText;p(c),f(t)},className:R,children:"RUB"}),Object(b.jsx)("div",{onClick:U,className:D,children:"USD"}),Object(b.jsx)("div",{onClick:C,className:E,children:"EUR"})]}),Object(b.jsxs)("div",{className:"modes_transfer",children:[Object(b.jsx)("div",{className:"modes_transfer-title",children:"\u041a\u041e\u041b\u0418\u0427\u0415\u0421\u0422\u0412\u041e \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041e\u041a"}),Object(b.jsx)("div",{className:"modes_transfer-filtering",children:Object(b.jsxs)("div",{className:"modes_transfer-filtering_wrapper",children:[Object(b.jsxs)("div",{onClick:B("withoutTransplant"),className:"mode_transfer-item withoutTransplant",children:[Object(b.jsx)("div",{className:"checkbox",children:y.withoutTransplant&&w}),Object(b.jsx)("div",{className:"filter-name",children:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"})]}),Object(b.jsxs)("div",{onClick:B("oneTransplant"),className:"mode_transfer-item oneTransplant",children:[Object(b.jsx)("div",{className:"checkbox",children:y.oneTransplant&&w}),Object(b.jsx)("div",{className:"filter-name",children:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"})]}),Object(b.jsxs)("div",{onClick:B("twoTransplants"),className:"mode_transfer-item twoTransplants",children:[Object(b.jsx)("div",{className:"checkbox",children:y.twoTransplants&&w}),Object(b.jsx)("div",{className:"filter-name",children:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"})]}),Object(b.jsxs)("div",{onClick:B("threeTransplants"),className:"mode_transfer-item threeTransplants",children:[Object(b.jsx)("div",{className:"checkbox",children:y.threeTransplants&&w}),Object(b.jsx)("div",{className:"filter-name",children:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"})]})]})})]})]}),Object(b.jsx)("div",{className:"tickets",children:c?Object(b.jsx)(N,{}):Object(b.jsx)(h,{currentStateTickets:O,transfersFilter:y,"currency\u0421ode":l})})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),r(e),n(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),T()}},[[50,1,2]]]);
//# sourceMappingURL=main.2be56218.chunk.js.map