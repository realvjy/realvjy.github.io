(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),f=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=C([].concat(t.fluid))),t.fixed&&(t.fixed=C([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=f(e),a=p(t);return h[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,H=b&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function C(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var V=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},F=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(I,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),I=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,f=e.loading,u=e.draggable,p=e.ariaHidden,m=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:c,ref:t,loading:f,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var _=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&H&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=V(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,H=e.Tag,v=e.itemProp,C=e.loading,w=e.draggable,V=h||g;if(!V)return null;var _=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,M=(0,l.default)({opacity:_?1:0,transition:O?"opacity "+b+"ms":"none"},o),x="boolean"==typeof E?"lightgray":E,z={transitionDelay:b+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&z,o,u),N={title:t,alt:this.state.isVisible?"":a,style:T,className:p,itemProp:v},A=this.state.isHydrated?m(V):V[0];if(h)return d.default.createElement(H,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:A.maxWidth?A.maxWidth+"px":null,maxHeight:A.maxHeight?A.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},d.default.createElement(H,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),x&&d.default.createElement(H,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&z)}),A.base64&&d.default.createElement(F,{ariaHidden:!0,ref:this.placeholderRef,src:A.base64,spreadProps:N,imageVariants:V,generateSources:L}),A.tracedSVG&&d.default.createElement(F,{ariaHidden:!0,ref:this.placeholderRef,src:A.tracedSVG,spreadProps:N,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(V),d.default.createElement(I,{alt:a,title:t,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:C,draggable:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:C},A,{imageVariants:V}))}}));if(g){var Z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},n);return"inherit"===n.display&&delete Z.display,d.default.createElement(H,{className:(r||"")+" gatsby-image-wrapper",style:Z,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},x&&d.default.createElement(H,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:x,width:A.width,opacity:this.state.imgLoaded?0:1,height:A.height},O&&z)}),A.base64&&d.default.createElement(F,{ariaHidden:!0,ref:this.placeholderRef,src:A.base64,spreadProps:N,imageVariants:V,generateSources:L}),A.tracedSVG&&d.default.createElement(F,{ariaHidden:!0,ref:this.placeholderRef,src:A.tracedSVG,spreadProps:N,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(V),d.default.createElement(I,{alt:a,title:t,width:A.width,height:A.height,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:M,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:C,draggable:w})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:C},A,{imageVariants:V}))}}))}return null},t}(d.default.Component);_.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),M=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function x(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}_.propTypes={resolutions:O,sizes:M,fixed:x(c.default.oneOfType([O,c.default.arrayOf(O)])),fluid:x(c.default.oneOfType([M,c.default.arrayOf(M)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=_;t.default=z},I4A6:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz");a("9eSz");t.a=function(){return i.a.createElement(n.Link,{to:"/",className:"brand"},i.a.createElement("svg",{width:"86",height:"17",viewBox:"0 0 86 17",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("defs",null,i.a.createElement("linearGradient",{id:"paint0_linear",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{"stop-color":"#4AB1F1"}),i.a.createElement("stop",{offset:"0.328125","stop-color":"#566CEC"}),i.a.createElement("stop",{offset:"0.65625","stop-color":"#D749AF"}),i.a.createElement("stop",{offset:"1","stop-color":"#FF7C51"})),i.a.createElement("linearGradient",{id:"paint1_linear",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{"stop-color":"#4AB1F1"}),i.a.createElement("stop",{offset:"0.328125","stop-color":"#566CEC"}),i.a.createElement("stop",{offset:"0.65625","stop-color":"#D749AF"}),i.a.createElement("stop",{offset:"1","stop-color":"#FF7C51"})),i.a.createElement("linearGradient",{id:"paint2_linear",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{"stop-color":"#4AB1F1"}),i.a.createElement("stop",{offset:"0.328125","stop-color":"#566CEC"}),i.a.createElement("stop",{offset:"0.65625","stop-color":"#D749AF"}),i.a.createElement("stop",{offset:"1","stop-color":"#FF7C51"})),i.a.createElement("linearGradient",{id:"paint3_linear",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{"stop-color":"#4AB1F1"}),i.a.createElement("stop",{offset:"0.328125","stop-color":"#566CEC"}),i.a.createElement("stop",{offset:"0.65625","stop-color":"#D749AF"}),i.a.createElement("stop",{offset:"1","stop-color":"#FF7C51"})),i.a.createElement("linearGradient",{id:"paint4_linear",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{"stop-color":"#4AB1F1"}),i.a.createElement("stop",{offset:"0.328125","stop-color":"#566CEC"}),i.a.createElement("stop",{offset:"0.65625","stop-color":"#D749AF"}),i.a.createElement("stop",{offset:"1","stop-color":"#FF7C51"})),i.a.createElement("linearGradient",{id:"paint5_linear",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{"stop-color":"#4AB1F1"}),i.a.createElement("stop",{offset:"0.328125","stop-color":"#566CEC"}),i.a.createElement("stop",{offset:"0.65625","stop-color":"#D749AF"}),i.a.createElement("stop",{offset:"1","stop-color":"#FF7C51"})),i.a.createElement("linearGradient",{id:"paint6_linear",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{"stop-color":"#4AB1F1"}),i.a.createElement("stop",{offset:"0.328125","stop-color":"#566CEC"}),i.a.createElement("stop",{offset:"0.65625","stop-color":"#D749AF"}),i.a.createElement("stop",{offset:"1","stop-color":"#FF7C51"}))),i.a.createElement("g",{class:"native-logo"},i.a.createElement("path",{d:"M6.2531 16.488L5.04572 11.0229H4.11697V16.488H0.936005V0.488007H5.44044C6.49302 0.488007 7.28246 0.681806 7.80875 1.0694C8.35052 1.4415 8.71428 1.99963 8.90003 2.74382C9.08578 3.4725 9.17866 4.4725 9.17866 5.74382C9.17866 6.93762 9.09352 7.89886 8.92325 8.62754C8.75298 9.35622 8.42018 9.92211 7.92485 10.3252L9.55016 16.488H6.2531ZM4.90641 8.20894C5.24695 8.20894 5.48688 8.16243 5.62619 8.0694C5.7655 7.96088 5.85838 7.75157 5.90482 7.4415C5.95125 7.11591 5.97447 6.56553 5.97447 5.79033C5.97447 5.03064 5.95125 4.49576 5.90482 4.18568C5.85838 3.8601 5.7655 3.6508 5.62619 3.55777C5.48688 3.44925 5.24695 3.39498 4.90641 3.39498H4.11697V8.20894H4.90641Z"}),i.a.createElement("path",{d:"M15.2137 16.488V0.488007H21.6221V3.39498H18.3947V6.95312H21.2274V9.8601H18.3947V13.581H21.6221V16.488H15.2137Z"}),i.a.createElement("path",{d:"M33.2732 16.488L32.8785 13.302H30.4869L30.0922 16.488H26.9112L29.3028 0.488007H34.1091L36.5006 16.488H33.2732ZM31.764 3.62754H31.6014L30.7888 10.488H32.5766L31.764 3.62754Z"}),i.a.createElement("path",{d:"M42.0685 16.488V0.488007H45.2495V13.5345H48.1751V16.488H42.0685Z"}),i.a.createElement("path",{d:"M54.4532 16.488L52.2939 0.488007H55.498L56.8215 13.1857H57.0537L58.2843 0.488007H61.442L59.2827 16.488H54.4532Z"}),i.a.createElement("path",{d:"M66.2973 13.7671C66.932 13.7671 67.3654 13.7128 67.5975 13.6043C67.8452 13.4958 68 13.2632 68.0619 12.9066C68.1393 12.55 68.178 11.8989 68.178 10.9531V0.488007H71.3822V9.18568C71.3822 11.6818 71.2893 13.395 71.1036 14.3252C70.9178 15.2399 70.4999 15.8291 69.8498 16.0927C69.2151 16.3562 68.031 16.488 66.2973 16.488V13.7671Z"}),i.a.createElement("path",{d:"M79.6902 16.488V10.9299L76.6485 0.488007H79.8527L81.269 7.41824H81.5012L82.8247 0.488007H85.936L82.8943 10.9299V16.488H79.6902Z"})),i.a.createElement("g",{class:"gradient-logo"},i.a.createElement("path",{d:"M6.2531 16.488L5.04572 11.0229H4.11697V16.488H0.936005V0.488007H5.44044C6.49302 0.488007 7.28246 0.681806 7.80875 1.0694C8.35052 1.4415 8.71428 1.99963 8.90003 2.74382C9.08578 3.4725 9.17866 4.4725 9.17866 5.74382C9.17866 6.93762 9.09352 7.89886 8.92325 8.62754C8.75298 9.35622 8.42018 9.92211 7.92485 10.3252L9.55016 16.488H6.2531ZM4.90641 8.20894C5.24695 8.20894 5.48688 8.16243 5.62619 8.0694C5.7655 7.96088 5.85838 7.75157 5.90482 7.4415C5.95125 7.11591 5.97447 6.56553 5.97447 5.79033C5.97447 5.03064 5.95125 4.49576 5.90482 4.18568C5.85838 3.8601 5.7655 3.6508 5.62619 3.55777C5.48688 3.44925 5.24695 3.39498 4.90641 3.39498H4.11697V8.20894H4.90641Z",fill:"url(#paint0_linear)"}),i.a.createElement("path",{d:"M15.2137 16.488V0.488007H21.6221V3.39498H18.3947V6.95312H21.2274V9.8601H18.3947V13.581H21.6221V16.488H15.2137Z",fill:"url(#paint1_linear)"}),i.a.createElement("path",{d:"M33.2732 16.488L32.8785 13.302H30.4869L30.0922 16.488H26.9112L29.3028 0.488007H34.1091L36.5006 16.488H33.2732ZM31.764 3.62754H31.6014L30.7888 10.488H32.5766L31.764 3.62754Z",fill:"url(#paint2_linear)"}),i.a.createElement("path",{d:"M42.0685 16.488V0.488007H45.2495V13.5345H48.1751V16.488H42.0685Z",fill:"url(#paint3_linear)"}),i.a.createElement("path",{d:"M54.4532 16.488L52.2939 0.488007H55.498L56.8215 13.1857H57.0537L58.2843 0.488007H61.442L59.2827 16.488H54.4532Z",fill:"url(#paint4_linear)"}),i.a.createElement("path",{d:"M66.2973 13.7671C66.932 13.7671 67.3654 13.7128 67.5975 13.6043C67.8452 13.4958 68 13.2632 68.0619 12.9066C68.1393 12.55 68.178 11.8989 68.178 10.9531V0.488007H71.3822V9.18568C71.3822 11.6818 71.2893 13.395 71.1036 14.3252C70.9178 15.2399 70.4999 15.8291 69.8498 16.0927C69.2151 16.3562 68.031 16.488 66.2973 16.488V13.7671Z",fill:"url(#paint5_linear)"}),i.a.createElement("path",{d:"M79.6902 16.488V10.9299L76.6485 0.488007H79.8527L81.269 7.41824H81.5012L82.8247 0.488007H85.936L82.8943 10.9299V16.488H79.6902Z",fill:"url(#paint6_linear)"})),i.a.createElement("use",{class:"gradient-logo"})))}},N8DM:function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0;var i=r(a("QL1J"));t.ThemeToggler=i.default},QL1J:function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i=r(a("PJYZ")),n=r(a("VbXa")),s=r(a("lSNA")),o=r(a("q1tI")),l=r(a("17x9")),d=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return t=e.call.apply(e,[this].concat(r))||this,(0,s.default)((0,i.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return o.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(o.default.Component);d.propTypes={children:l.default.func.isRequired};var c=d;t.default=c},"W/9C":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r);a("Wbzz"),a("9eSz");t.a=function(){return i.a.createElement("section",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"footer-wrap"},i.a.createElement("div",{className:"credit"},i.a.createElement("h4",null,"© vijay verma, ",(new Date).getFullYear()," ",i.a.createElement("a",{href:"/version/v3"},"..."))),i.a.createElement("div",{className:"quote"},i.a.createElement("h4",null,"stay hungry, stay foolish")))))}},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=1aa058aeb623e67f1bf9d3c8ef28d4ec4fac512f-25f47976d1179329edb5.js.map