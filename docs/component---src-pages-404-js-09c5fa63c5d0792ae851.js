(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"284h":function(e,t,n){var a=n("cDf5");function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}return n.default=e,t&&t.set(e,n),n}},"2qpI":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("kCIJ"),l=n("OHgN"),i=n.n(l),c=n("g67X");t.a=function(){var e=Object(r.useIntl)();return o.a.createElement("nav",{className:i.a.nav},o.a.createElement("ul",null,o.a.createElement("li",{className:i.a.navLink},o.a.createElement(r.Link,{activeClassName:i.a.active,to:"/"},o.a.createElement(c.a,{name:"Home",size:"m"}),o.a.createElement("span",{className:i.a.linkText},e.formatMessage({id:"homeMobNav"})))),o.a.createElement("li",{className:i.a.navLink},o.a.createElement(r.Link,{activeClassName:i.a.active,to:"/work"},o.a.createElement(c.a,{name:"Album",size:"m"}),o.a.createElement("span",{className:i.a.linkText},e.formatMessage({id:"workMobNav"})))),o.a.createElement("li",{className:i.a.navLink},o.a.createElement(r.Link,{activeClassName:i.a.active,to:"/about"},o.a.createElement(c.a,{name:"Info",size:"m"}),o.a.createElement("span",{className:i.a.linkText},e.formatMessage({id:"aboutMobNav"}))))))}},GCtb:function(e,t,n){"use strict";n("OG14");var a=n("TqRt");t.__esModule=!0,t.changeLocale=t.navigate=t.default=void 0;var o=a(n("pVnL")),r=a(n("8OQS")),l=a(n("q1tI")),i=a(n("17x9")),c=n("Wbzz"),u=n("n83N"),s=function(e){var t=e.to,n=e.language,a=e.children,i=e.onClick,s=(0,r.default)(e,["to","language","children","onClick"]);return l.default.createElement(u.IntlContextConsumer,null,(function(e){var r=n||e.language,u=e.routed||n?"/"+r+t:""+t;return l.default.createElement(c.Link,(0,o.default)({},s,{to:u,onClick:function(e){n&&localStorage.setItem("gatsby-intl-language",n),i&&i(e)}}),a)}))};s.propTypes={children:i.default.node.isRequired,to:i.default.string,language:i.default.string},s.defaultProps={to:""};var g=s;t.default=g;t.navigate=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl,a=n.language,o=n.routed?"/"+a+e:""+e;(0,c.navigate)(o,t)}};t.changeLocale=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,a="/"+e+(t||function(e){if(!n)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",e),(0,c.navigate)(a)}}},OHgN:function(e,t,n){e.exports={nav:"navbar-module--nav--3tXeg",navLink:"navbar-module--nav-link--1B3j_",active:"navbar-module--active--C5ISV",linkText:"navbar-module--link-text--2jaEV"}},Wmhb:function(e,t,n){e.exports={header:"header-module--header--3QwAt",page_title:"header-module--page_title--3dLiq"}},XCvZ:function(e,t,n){e.exports={ggHome:"icons-module--gg-home--15pcO",ggAlbum:"icons-module--gg-album--LG0Fy",ggArrowTopRightR:"icons-module--gg-arrow-top-right-r--3jJ4X",ggCodeSlash:"icons-module--gg-code-slash--OSQnf",ggColorBucket:"icons-module--gg-color-bucket--3-Eky",ggCopyright:"icons-module--gg-copyright--PNiBL",ggDanger:"icons-module--gg-danger--3cFdz",ggEditContrast:"icons-module--gg-edit-contrast--3a9Xr",ggExternal:"icons-module--gg-external--1rFpq",ggInfo:"icons-module--gg-info--3ykiZ",ggLink:"icons-module--gg-link--34H9e",ggStack:"icons-module--gg-stack--1tndJ"}},bZuh:function(e,t,n){e.exports={container:"container-module--container--3wAek",noNav:"container-module--no-nav--2FnPO",hasNav:"container-module--has-nav--2Mw4Y",langTool:"container-module--langTool--wboJe",active:"container-module--active--pE2WZ",footer:"container-module--footer--1Hszj"}},cDf5:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},dE6H:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("bZuh"),l=n.n(r),i=n("kCIJ"),c={en:"🇺🇸",ne:"🇳🇵",fr:"🇫🇷"};t.a=function(e){var t=e.children,n=e.nav,a=Object(i.useIntl)(),r=n;return o.a.createElement(i.IntlContextConsumer,null,(function(e){var n=e.languages,u=e.language;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:l.a.container+" intl-"+u+" "+(r?l.a.hasNav:l.a.noNav)},o.a.createElement("div",{className:l.a.langTool},o.a.createElement("label",null,a.formatMessage({id:"langLabel"})," "),n.map((function(e){return o.a.createElement("button",{type:"button",key:e,onClick:function(){return Object(i.changeLocale)(e)},className:e===u?l.a.active:void 0,disabled:e===u},c[e])}))),t),o.a.createElement("footer",{className:""+l.a.footer},"© 2010 - ",(new Date).getFullYear()," - ",a.formatMessage({id:"fullname"})))}))}},e2gX:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),r=n("7++0");t.default=function(e){return function(t){return console.warn("withIntl is deprecated. Please use injectIntl instead."),o.default.createElement((0,r.injectIntl)(e),t)}}},g67X:function(e,t,n){"use strict";n("f3/d");var a=n("q1tI"),o=n.n(a),r=n("XCvZ"),l=n.n(r);t.a=function(e){var t=e.name,n=e.size,a=e.color,r=e.inline,i="gg"+t;return o.a.createElement("i",{className:"icon "+l.a[i]+" icon-"+(n||"r")+" icon-"+(r?"i":"b"),style:{color:a}})}},ihrq:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("kCIJ"),l=n("Wmhb"),i=n.n(l);t.a=function(){var e=Object(r.useIntl)();return o.a.createElement("header",{className:i.a.header},o.a.createElement(r.Link,{to:"/",className:i.a.page_title},e.formatMessage({id:"name"})))}},kCIJ:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var a=n("TqRt"),o=n("284h");t.__esModule=!0;var r={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};t.IntlContextConsumer=t.IntlContextProvider=t.changeLocale=t.navigate=t.withIntl=t.Link=void 0;var l=n("7++0");Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||(t[e]=l[e]))}));var i=o(n("GCtb"));t.Link=i.default,t.navigate=i.navigate,t.changeLocale=i.changeLocale;var c=a(n("e2gX"));t.withIntl=c.default;var u=n("n83N");t.IntlContextProvider=u.IntlContextProvider,t.IntlContextConsumer=u.IntlContextConsumer},w2l6:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("dE6H"),l=n("ihrq"),i=n("2qpI");t.default=function(){return o.a.createElement(r.a,{nav:!0},o.a.createElement(l.a,null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h1",{className:"page-title",style:{textAlign:"center"}},"Oop! ",o.a.createElement("br",null),"Found nothing!"),o.a.createElement(i.a,null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-09c5fa63c5d0792ae851.js.map