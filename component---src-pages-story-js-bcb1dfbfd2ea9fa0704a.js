(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8oxB":function(e,t){var a,n,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(a===setTimeout)return setTimeout(e,0);if((a===s||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:s}catch(e){a=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var i,l=[],m=!1,u=-1;function d(){m&&i&&(m=!1,i.length?l=i.concat(l):u=-1,l.length&&f())}function f(){if(!m){var e=c(d);m=!0;for(var t=l.length;t;){for(i=l,l=[];++u<t;)i&&i[u].run();u=-1,t=l.length}i=null,m=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];l.push(new p(e,t)),1!==l.length||m||c(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"8ujH":function(e,t,a){var n=a("GTTd")("jsonp");e.exports=function(e,t,a){"function"==typeof t&&(a=t,t={});t||(t={});var o,c,i=t.prefix||"__jp",l=t.name||i+r++,m=t.param||"callback",u=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;u&&(c=setTimeout((function(){p(),a&&a(new Error("Timeout"))}),u));function p(){o.parentNode&&o.parentNode.removeChild(o),window[l]=s,c&&clearTimeout(c)}return window[l]=function(e){n("jsonp got",e),p(),a&&a(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+m+"="+d(l)).replace("?&","?"),n('jsonp req "%s"',e),(o=document.createElement("script")).src=e,f.parentNode.insertBefore(o,f),function(){window[l]&&p()}};var r=0;function s(){}},G04T:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=a("8ujH"))&&n.__esModule?n:{default:n},s=a("H/qo");var o=function(e){var t=e.url,a=e.timeout;return new Promise((function(e,n){return(0,r.default)(t,{param:"c",timeout:a},(function(t,a){t&&n(t),a&&e(a)}))}))},c=function(e){var t="";for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n="group["===a.substring(0,6)?a:a.toUpperCase();t=t.concat("&".concat(n,"=").concat(e[a]))}return t},i=function(e,t,a){var n=(0,s.validate)(e),r=encodeURIComponent(e);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var i="https://designletter.us10.list-manage.com/subscribe/post?u=ac670d4650872310b44fc59b4&amp;id=2728fe6fff",l=3500;arguments.length<3&&"string"==typeof t?i=t:"string"==typeof a&&(i=a),i=i.replace(/\/post/g,"/post-json");var m="&EMAIL=".concat(r).concat(c(t)),u="".concat(i).concat(m);return o({url:u,timeout:l})};t.default=i},GTTd:function(e,t,a){(function(n){function r(){var e;try{e=t.storage.debug}catch(a){}return!e&&void 0!==n&&"env"in n&&(e={}.DEBUG),e}(t=e.exports=a("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var a=this.useColors;if(e[0]=(a?"%c":"")+this.namespace+(a?" %c":" ")+e[0]+(a?"%c ":" ")+"+"+t.humanize(this.diff),!a)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var r=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(s=r))})),e.splice(s,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(a){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,a("8oxB"))},"H/qo":function(e,t,a){"use strict";var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},QXP7:function(e,t){var a=1e3,n=6e4,r=60*n,s=24*r;function o(e,t,a){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+a:Math.ceil(e/t)+" "+a+"s"}e.exports=function(e,t){t=t||{};var c,i=typeof e;if("string"===i&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var o=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*o;case"days":case"day":case"d":return o*s;case"hours":case"hour":case"hrs":case"hr":case"h":return o*r;case"minutes":case"minute":case"mins":case"min":case"m":return o*n;case"seconds":case"second":case"secs":case"sec":case"s":return o*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}(e);if("number"===i&&!1===isNaN(e))return t.long?o(c=e,s,"day")||o(c,r,"hour")||o(c,n,"minute")||o(c,a,"second")||c+" ms":function(e){if(e>=s)return Math.round(e/s)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=a)return Math.round(e/a)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},bRoh:function(e,t,a){var n;function r(e){function a(){if(a.enabled){var e=a,r=+new Date,s=r-(n||r);e.diff=s,e.prev=n,e.curr=r,n=r;for(var o=new Array(arguments.length),c=0;c<o.length;c++)o[c]=arguments[c];o[0]=t.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var i=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,(function(a,n){if("%%"===a)return a;i++;var r=t.formatters[n];if("function"==typeof r){var s=o[i];a=r.call(e,s),o.splice(i,1),i--}return a})),t.formatArgs.call(e,o);var l=a.log||t.log||console.log.bind(console);l.apply(e,o)}}return a.namespace=e,a.enabled=t.enabled(e),a.useColors=t.useColors(),a.color=function(e){var a,n=0;for(a in e)n=(n<<5)-n+e.charCodeAt(a),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(a),a}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var a=("string"==typeof e?e:"").split(/[\s,]+/),n=a.length,r=0;r<n;r++)a[r]&&("-"===(e=a[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var a,n;for(a=0,n=t.skips.length;a<n;a++)if(t.skips[a].test(e))return!1;for(a=0,n=t.names.length;a<n;a++)if(t.names[a].test(e))return!0;return!1},t.humanize=a("QXP7"),t.names=[],t.skips=[],t.formatters={}},h1Gf:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("dI71"),r=a("q1tI"),s=a.n(r),o=a("Wbzz"),c=a("Bl7J"),i=a("vrFN"),l=(a("9eSz"),a("G04T"),function(){return s.a.createElement("section",{className:"work story"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"section-info"},s.a.createElement("h1",{className:"gradient orange"},"story."),s.a.createElement("p",null,"I like to think of myself as a design-chef who also happens to love sharing the recipes.")),s.a.createElement("div",{className:"work-wrap "},s.a.createElement("div",{className:"story-box"},s.a.createElement("div",{className:"story-title"},s.a.createElement("a",{href:"https://medium.com/zomato-technology/zomatos-new-sushi-design-system-d7f4f98664c5",className:"article"},s.a.createElement("h1",null,"Zomato’s new Sushi Design System"),s.a.createElement("p",null,"All new Zomato design system to create a smooth and amazing experience for our users."),s.a.createElement("div",{className:"meta"},s.a.createElement("h4",null,"Sep 10, 2019"))))),s.a.createElement("div",{className:"story-box"},s.a.createElement("div",{className:"story-title"},s.a.createElement("a",{href:"https://medium.com/zomato-technology/why-we-switched-to-figma-as-the-primary-design-tool-at-zomato-1aa8fa931b0a",className:"article"},s.a.createElement("h1",null,"Why we switched to Figma as the primary design tool at Zomato"),s.a.createElement("p",null,"Figma makes it so much easier to design together at Zomato."),s.a.createElement("div",{className:"meta"},s.a.createElement("h4",null,"Sep 10, 2019"))))),s.a.createElement("div",{className:"story-box"},s.a.createElement("div",{className:"story-title"},s.a.createElement("a",{href:"https://medium.muz.li/top-5-geometric-fonts-for-modern-ui-6c67bef7e67a",className:"article"},s.a.createElement("h1",null,"Top 5 geometric fonts for modern UI"),s.a.createElement("p",null,"Choosing the “right” font for your design is very important. Every font has specific design…."),s.a.createElement("div",{className:"meta"},s.a.createElement("h4",null,"March 11, 2019"))))),s.a.createElement("div",{className:"story-box"},s.a.createElement("div",{className:"story-title"},s.a.createElement("a",{href:"https://blog.vanila.io/my-design-journey-as-a-product-designer-c6ca991fdc7c",className:"article"},s.a.createElement("h1",null,"My design journey as a product designer"),s.a.createElement("p",null,"A quick story about, how I started my design journey and joined Zomato."),s.a.createElement("div",{className:"meta"},s.a.createElement("h4",null,"Dec 28, 2018")))))),s.a.createElement("div",{className:"story-sub"},s.a.createElement("div",{className:"btns h-btns see-all"},s.a.createElement("a",{href:"https://medium.com/@realvjy",className:"btn btn-outline"},"See other stories."))),s.a.createElement("div",{className:"story-sub"},s.a.createElement("div",{className:"form"},s.a.createElement("h1",null,"Get design recipes from the master chef"),s.a.createElement("p",null,"Subscribe to the ",s.a.createElement("a",{href:"https://designletter.co",className:"blue-link"},"designletter")," to get exclusive updates & digital art inspiration in your inbox."),s.a.createElement("div",{id:"mc_embed_signup"},s.a.createElement("form",{action:"https://designletter.us10.list-manage.com/subscribe/post?u=ac670d4650872310b44fc59b4&id=2728fe6fff",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",novalidate:!0},s.a.createElement("div",{id:"mc_embed_signup_scroll",className:"newsletter"},s.a.createElement("div",{className:"mc-field-group"},s.a.createElement("label",{for:"mce-EMAIL",style:{display:"none"}},"Email Address "),s.a.createElement("div",{className:"inputbox"},s.a.createElement("input",{type:"email",placeholder:"Your email address please",name:"EMAIL",className:"required email",id:"mce-EMAIL"}))),s.a.createElement("div",{className:"sub-action"},s.a.createElement("div",{id:"mce-responses",className:"clear"},s.a.createElement("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),s.a.createElement("div",{clasNames:"response",id:"mce-success-response",style:{display:"none"}})),s.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},s.a.createElement("input",{type:"text",name:"b_ac670d4650872310b44fc59b4_2728fe6fff",tabindex:"-1",value:""})),s.a.createElement("div",{className:"clear"},s.a.createElement("input",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:"button sub-button"}))))))))))}),m=a("W/9C"),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title;e.allMarkdownRemark.edges;return s.a.createElement(c.a,{location:this.props.location,title:t},s.a.createElement(i.a,{title:"vijay verma - stories"}),s.a.createElement("section",{className:"header_section"},s.a.createElement("div",{className:"container"},s.a.createElement("nav",null,s.a.createElement(o.Link,{to:"/",className:"brand"},s.a.createElement("img",{src:"/realvjy.svg",className:"logo"})),s.a.createElement("div",{className:"menu"},s.a.createElement("ul",{className:"menu-links"},s.a.createElement("li",{className:"active"},s.a.createElement("a",{href:"/story"},"story.")),s.a.createElement("li",null,s.a.createElement("a",{href:"/work"},"work.")),s.a.createElement("li",null,s.a.createElement("a",{href:"/contact"},"info."))),s.a.createElement("ul",{className:"menu-social"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://dribbble.com/realvjy",target:"__blank"},s.a.createElement("img",{src:"/dribbble.svg"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://instagram.com/realvjy",target:"__blank"},s.a.createElement("img",{src:"/insta.svg"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://figma.com/@realvjy",target:"__blank"},s.a.createElement("img",{src:"/figma.svg"}))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://twitter.com/realvjy",target:"__blank"},s.a.createElement("img",{src:"/twitter.svg"})))))))),s.a.createElement(l,null),s.a.createElement(m.a,null))},t}(s.a.Component),d=(t.default=u,"173509685")}}]);
//# sourceMappingURL=component---src-pages-story-js-bcb1dfbfd2ea9fa0704a.js.map