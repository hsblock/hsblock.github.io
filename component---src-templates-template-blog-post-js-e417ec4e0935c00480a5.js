(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4M6O":function(t,e,n){"use strict";n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b");var r=n("TqRt");e.__esModule=!0,e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,s=function(){r=null,n||t.apply(o,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(s,e),c&&t.apply(o,i)}},e.isReactElement=s,e.shallowComparison=function(t,e){var n,r=new Set(Object.keys(t).concat(Object.keys(e)));return 0!==(n=[]).concat.apply(n,(0,o.default)(r)).filter((function(n){return t[n]!==e[n]&&!s(t[n])})).length};var o=r(n("RIqP")),i=r(n("q1tI"));function s(t){return!!i.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return i.default.isValidElement(t)}))}},"7Eh8":function(t,e,n){"use strict";var r=n("wTIg"),o=n("2A+t"),i=n("q1tI"),s=n.n(i),c=n("ORnI"),a=n("Jf18"),u=(n("qKvR"),Object(r.a)("div",{target:"etog5kz0"})("background:",(function(t){return t.theme.colors.newsletter.background}),";box-shadow:",(function(t){return t.theme.shadows.floating}),",inset 0 0 0 1px ",(function(t){return t.theme.colors.newsletter.border}),";border-radius:",(function(t){return t.theme.radii[2]}),";margin-top:",(function(t){return t.theme.space[4]}),";padding:calc(",(function(t){return t.theme.space[6]})," * 1.2);padding-bottom:calc(",(function(t){return t.theme.space[4]}),");position:relative;:after{border-radius:0 0 ",(function(t){return t.theme.radii[2]})," ",(function(t){return t.theme.radii[2]}),";background:",(function(t){return t.theme.colors.newsletter.background})," repeating-linear-gradient( 135deg,",(function(t){return t.theme.colors.newsletter.stripeColorA}),",",(function(t){return t.theme.colors.newsletter.stripeColorA})," 20px,transparent 20px,transparent 40px,",(function(t){return t.theme.colors.newsletter.stripeColorB})," 40px,",(function(t){return t.theme.colors.newsletter.stripeColorB}),' 60px,transparent 60px,transparent 80px );bottom:0;content:"";height:',(function(t){return t.theme.space[1]}),";left:0;right:0;position:absolute;}",a.mediaQueries.lg,"{flex-direction:row;justify-content:space-between;> *{flex-basis:50%;}}"));e.a=function(t){var e=t.disqusConfig;return Object(o.c)(s.a.Fragment,null,Object(o.c)(u,{sx:{color:"newsletter.heading",fontWeight:"bold",fontSize:3,fontFamily:"heading",lineHeight:"dense"}},Object(o.c)(c.Disqus,{config:e})))}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},I5cv:function(t,e,n){var r=n("XKFU"),o=n("Kuth"),i=n("2OiF"),s=n("y3w9"),c=n("0/R4"),a=n("eeVq"),u=n("8MEG"),l=(n("dyZX").Reflect||{}).construct,d=a((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),f=!a((function(){l((function(){}))}));r(r.S+r.F*(d||f),"Reflect",{construct:function(t,e){i(t),s(e);var n=arguments.length<3?t:i(arguments[2]);if(f&&!d)return l(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(u.apply(t,r))}var a=n.prototype,p=o(c(a)?a:Object.prototype),m=Function.apply.call(t,p,e);return c(m)?m:p}})},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},ORnI:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("VUT9"));e.Disqus=o.default;var i=r(n("qASQ"));e.CommentCount=i.default;var s=r(n("vAJ3"));e.CommentEmbed=s.default;var c=o.default;e.default=c},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),s=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||s()}},VUT9:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),s=r(n("VbXa")),c=r(n("q1tI")),a=r(n("17x9")),u=n("4M6O"),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="bshzzhsb",n}(0,s.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.getDisqusConfig=function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,this.language=t.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.DISQUS&&window.document.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.shortname,(0,u.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body))},n.cleanInstance=function(){(0,u.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)},n.render=function(){var t=this.props,e=(t.config,(0,i.default)(t,["config"]));return c.default.createElement("div",(0,o.default)({id:"disqus_thread"},e,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:76,columnNumber:7}}))},e}(c.default.Component);e.default=l,l.propTypes={config:a.default.shape({identifier:a.default.string,title:a.default.string,url:a.default.string,language:a.default.string,remoteAuthS3:a.default.string,apiKey:a.default.string})}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},X8hv:function(t,e,n){function r(t,e,n){return(r=o()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var d=n("q1tI"),f=n("7ljp"),p=f.useMDXComponents,m=f.mdx,h=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,i=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),c=p(n),a=h(e),l=d.useMemo((function(){if(!o)return null;var t=u({React:d,mdx:m},a),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(s(e),[""+o])).apply(void 0,[{}].concat(s(n)))}),[o,e]);return d.createElement(l,u({components:c},i))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},qASQ:function(t,e,n){"use strict";var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),s=r(n("VbXa")),c=r(n("q1tI")),a=r(n("17x9")),u=n("4M6O"),l=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="bshzzhsb",n}(0,s.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,r=(0,i.default)(t,["config","placeholder"]);return c.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49,columnNumber:7}}),n)},e}(c.default.Component);e.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:a.default.shape({identifier:a.default.string,title:a.default.string,url:a.default.string}),placeholder:a.default.string}},tLhY:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return O}));var r=n("2A+t"),o=n("q1tI"),i=n.n(o),s=n("A2+M"),c=n("Jf18"),a=(n("ORnI"),n("Bl7J")),u=n("+e4l"),l=n("7Eh8"),d=(n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("tUrg"),n("iYmT")),f=n("WSWY"),p=n("NIcq");n("qKvR");function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var h={"&&":{borderBottom:0},color:"gatsby",fontFamily:"heading",fontSize:3,fontWeight:"bold",lineHeight:"dense"},b={color:"textMuted",fontSize:2,fontWeight:"body",mb:2,mt:0},g=function(t){var e,n,o,i,s,a=t.prev,u=void 0===a?null:a,l=t.next,g=void 0===l?null:l,y=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["prev","next"]);return u||g?Object(r.c)("nav",m({"aria-label":"pagination",sx:(e={},e[c.mediaQueries.sm]={display:"flex",justifyContent:"space-between",width:"100%"},e)},y),Object(r.c)("div",{css:Object(d.a)((n={},n[c.mediaQueries.sm]={width:"48%"},n))},u&&Object(r.c)(f.a,{to:u.link,sx:h},Object(r.c)("p",{sx:b},"Previous"),Object(r.c)("span",{sx:(o={},o[c.mediaQueries.md]={ml:"-1.5em"},o.display="inline-flex",o.alignItems="center",o)},Object(r.c)(p.a,{sx:{flexShrink:0,mr:"0.5em",verticalAlign:"sub"}}),u.title))),Object(r.c)("div",{sx:(i={textAlign:"right",mt:5},i[c.mediaQueries.sm]={mt:0,width:"48%"},i)},g&&Object(r.c)(f.a,{to:g.link,sx:h},Object(r.c)("p",{sx:b},"Next"),Object(r.c)("span",{sx:(s={},s[c.mediaQueries.md]={mr:"-1.5em"},s.display="inline-flex",s.alignItems="center",s)},g.title,Object(r.c)(p.b,{sx:{flexShrink:0,ml:"0.5em",verticalAlign:"sub"}}))))):null},y=n("QuW+"),v=n("uAvt");var w=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.prototype.render=function(){var t,e,n=this.props,o=n.pageContext,i=o.prev,d=o.next,f=n.data,p=f.mdx,m=f.site,h={identifier:p.id,title:p.frontmatter.title};return Object(r.c)(a.a,{location:this.props.location,mdxTitle:p.frontmatter.title},Object(r.c)(v.a,{title:p.frontmatter.title}),Object(r.c)(u.a,null,Object(r.c)("main",{id:"reach-skip-nav",className:"post docSearch-content"},Object(r.c)("div",{sx:{display:"flex",flexDirection:"column"}},Object(r.c)("h1",{sx:(t={marginTop:0,order:0,letterSpacing:"tight",lineHeight:"dense",fontSize:[6,7],fontFamily:"noto serif sc"},t[c.mediaQueries.lg]={mb:6},t)},p.frontmatter.title),Object(r.c)("span",{sx:{fontFamily:"Dancing Script",mb:2}},m.siteMetadata.author,"  ·  ",p.frontmatter.date)),Object(r.c)("section",{className:"post-body"},Object(r.c)(s.MDXRenderer,null,p.body),p.frontmatter.last_modified&&Object(r.c)("p",{sx:{textAlign:"right",fontSize:"14px",color:"textMuted",fontFamily:"'Dancing Script', cursive;"}},"last modified "+p.frontmatter.last_modified)),Object(r.c)("div",{sx:{py:8,overflow:"hidden",textAlign:"center"}},Object(r.c)(y.a,null)),Object(r.c)("div",{sx:(e={borderTop:function(t){return"1px solid "+t.colors.ui.border},mt:3},e[c.mediaQueries.md]={pt:3},e[c.mediaQueries.lg]={pt:5},e)},Object(r.c)(u.a,null,Object(r.c)(g,{prev:i,next:d}))),Object(r.c)(l.a,{disqusConfig:h}))))},o}(i.a.Component),O=(e.default=w,"2219909368")},vAJ3:function(t,e,n){"use strict";n("xfY5"),n("a1Th"),n("Btvt");var r=n("TqRt");e.__esModule=!0,e.default=void 0;var o=r(n("VbXa")),i=r(n("q1tI")),s=r(n("17x9")),c=function(t){function e(){return t.apply(this,arguments)||this}(0,o.default)(e,t);var n=e.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},e}(i.default.Component);e.default=c,c.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},c.propTypes={commentId:s.default.string.isRequired,width:s.default.number,height:s.default.number,showMedia:s.default.bool,showParentComment:s.default.bool}}}]);
//# sourceMappingURL=component---src-templates-template-blog-post-js-e417ec4e0935c00480a5.js.map