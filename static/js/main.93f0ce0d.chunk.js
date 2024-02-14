(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(2),i=c(1),d=(c(13),c(14),c(8)),o=c(6),r=c.n(o);!function(e){e.Active="active",e.Completed="completed",e.All="all"}(s||(s={}));var j=c(0);var b=function(e){var t=e.todos,c=void 0===t?[]:t,a=e.query,n=void 0===a?"":a,o=e.sortBy,b=void 0===o?s.All:o,u=e.selectedTodo,h=void 0===u?null:u,m=e.setSelectedTodo,O=void 0===m?function(){}:m,x=Object(i.useState)(c),f=Object(l.a)(x,2),v=f[0],p=f[1];return Object(i.useEffect)((function(){var e=function(e,t,c){var a=Object(d.a)(e);switch(t&&(a=a.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))),c){case s.Active:a=a.filter((function(e){return!e.completed}));break;case s.Completed:a=a.filter((function(e){return e.completed}));break;default:return a}return a}(c,n,b);p(e)}),[n,c,b]),Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:v.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":e.id===(null===h||void 0===h?void 0:h.id)}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return O(e)},children:Object(j.jsx)("span",{className:"icon",children:e.id===(null===h||void 0===h?void 0:h.id)?Object(j.jsx)("i",{className:"far fa-eye-slash"}):Object(j.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},u=function(e){var t=e.query,c=e.setQuery,a=e.setSort;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return a(e.target.value)},children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.currentTarget.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")},"aria-label":"Clear Search"})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.todo,c=e.onClose,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1];return Object(i.useEffect)((function(){var e;(e=t.userId,m("/users/".concat(e))).then(d)}),[t.userId]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(j.jsx)(h,{})]})},x=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(null),d=Object(l.a)(n,2),o=d[0],r=d[1],x=Object(i.useState)(""),f=Object(l.a)(x,2),v=f[0],p=f[1],N=Object(i.useState)(s.All),y=Object(l.a)(N,2),g=y[0],k=y[1];return Object(i.useEffect)((function(){m("/todos").then(a)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(u,{query:v,setQuery:p,setSort:k})}),Object(j.jsx)("div",{className:"block",children:c.length>0?Object(j.jsx)(b,{todos:c,query:v,selectedTodo:o,setSelectedTodo:r,sortBy:g}):Object(j.jsx)(h,{})})]})})}),o&&Object(j.jsx)(O,{todo:o,onClose:function(){return r(null)}})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.93f0ce0d.chunk.js.map