(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var r=n("2A+t"),o=n("q1tI"),i=n.n(o),c=n("29yR"),a=n("Bl7J"),u=n("Aw06"),s=n("B4IJ"),l=(n("qKvR"),function(t){var e,n=t.item;return Object(r.c)("li",{sx:(e={borderRadius:function(t){return t.radii[2]},width:"20rem",mr:function(t){return t.space[6]},listStyle:"none","&:last-child":{mr:0}},e[s.j.md]={m:function(t){return"0 "+t.space[6]+" "+t.space[6]+" 0"}},e[s.j.lg]={flexBasis:"45%","&:nth-of-type(3n)":{ml:function(t){return t.space[6]}},"&:nth-of-type(4n)":{mr:0}},e)},Object(r.c)("div",{sx:{display:"flex",flexDirection:"column",height:"100%",position:"relative",p:function(t){return t.space[6]+" "+t.space[6]+" "+t.space[6]+" "+t.space[8]},boxShadow:function(t){return t.shadows.raised},borderRadius:function(t){return t.radii[2]},cursor:"pointer","&:hover":{bg:function(t){return t.colors.ui.hover}},"&:before":{bg:"Explore"===n.type?"#eeebff":"#e6f5f5",position:"absolute",top:0,left:0,bottom:0,content:"''",width:function(t){return t.space[5]},borderRadius:function(t){return t.radii[2]+" 0 0"+t.radii[2]}},"&:after":{position:"absolute",content:"'"+n.type+"'",color:"Explore"===n.type?"#4764ff":"#00bdb6",fontFamily:function(t){return t.fonts.monospace},fontSize:function(t){return t.fontSizes[0]},left:0,bottom:0,letterSpacing:function(t){return t.letterSpacings.tracked},textTransform:"uppercase",transform:"rotate(-90deg) translateX(-0.5rem)",transformOrigin:"top left"}}},Object(r.c)("header",{sx:{display:"flex",alignItems:"flex-start",justifyContent:"space-between"}},Object(r.c)("h3",{sx:{margin:0,fontSize:function(t){return t.fontSizes[2]}}},n.name)),Object(r.c)("div",{sx:{display:"flex",flex:1,justifyContent:"space-between",fontFamily:function(t){return t.fonts.system},p:function(t){return t.space[3]+" 0 0"}}},Object(r.c)("div",{sx:{color:function(t){return t.colors.textMuted},flex:1,fontSize:function(t){return t.fontSizes[1]}},dangerouslySetInnerHTML:{__html:n.description}}))))}),f=function(t){var e,n=t.homeItems;return Object(r.c)(i.a.Fragment,null,Object(r.c)("h3",null,Object(r.c)(c.b,null),"There are things about"),Object(r.c)("div",{sx:{margin:function(t){return"0 -"+t.space[4]},overflowX:"scroll",WebkitOverflowScrolling:"touch",scrollbarWidth:"none",WebkitScroll:{display:"none"}}},Object(r.c)("ul",{sx:(e={display:"inline-flex",p:function(t){return t.space[2]+" "+t.space[4]},m:0},e[s.j.lg]={flexWrap:"wrap"},e)},n.map((function(t){return Object(r.c)(l,{key:t.name,item:t})})))))},p=[{name:"What can you find",description:"Machine Learning, Deep Learning, Front-End and anything I am interested in.",type:"Explore"},{name:"About ME",description:"A graduate student in CS",type:"About"},{name:"About this site",description:"Build with Gatsby and ReactJS",type:"About"},{name:"Issue",description:'If you find something wrong, you can create an issue <a target="_blank" href="https://www.github.com/hsblock/hsblock.github.io">there</a>',type:"Explore"}],b=n("vrFN"),d=n("Wbzz");function m(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t,e,n){void 0===e&&(e=12),void 0===n&&(n=0);for(var r=0,o=1;o<=e;o++)r+=new Date(t,o,o===e?n:0).getDate();return r}var y=function(t){for(var e,n=t.blogs,o=t.commits,c=t.year,a=void 0===c?(new Date).getFullYear():c,s=h(a),l=new Date(a,0,1).getDay(),f=Array.from({length:l+s}),p=m(n);!(e=p()).done;){var b=e.value,d=b.date;if(d[0]===a){var g=h(d[0],d[1],d[2])+l;f[g-1]?f[g-1].blogs.push(b):(f[g-1]={},f[g-1].blogs=[b])}}for(var y,v=Array.from({length:12}).map((function(t,e){return h(a,e,0)+l})),x=m(o);!(y=x()).done;){var j=y.value,w=j.date;if(w[0]===a){var O=h(w[0],w[1],w[2])+l;f[O-1]?f[O-1].commits?f[O-1].commits.push(j):f[O-1].commits=[j]:(f[O-1]={},f[O-1].commits=[j])}}!function(t,e,n){for(var r=0,o=e-1;o>=0;o--){var i=new Date(t-1,11,31-o).toDateString().split(" ");i.shift(),n[r]||(n[r]={}),n[r].offset=20,n[r++].date=i.join(" ")}for(var c=0;c<12;c++)for(var a=1;a<=new Date(t,c+1,0).getDate();a++){var u=new Date(t,c,a).toDateString().split(" ");u.shift(),n[r]||(n[r]={}),r/7<3?n[r].offset=20+r/7*10:Math.floor(r/7)>Math.floor(n.length/7)-4?n[r].offset=85-10*(Math.floor(n.length/7)-Math.floor(r/7)):n[r].offset=50,n[r++].date=u.join(" ")}}(a,l,f);var S=new Date;console.log(S);var k=l+h(S.getFullYear(),S.getMonth()+1,S.getDate());return f[k-1].today=!0,Object(r.c)(i.a.Fragment,null,Object(r.c)("ul",{sx:{listStyle:"none",display:"flex",flexDirection:"column",height:function(t){return"calc("+t.space[4]+" * 7)"},flexWrap:"wrap",overflow:"scroll",m:0,pt:function(t){return t.space[8]},pb:function(t){return t.space[2]},scrollbarWidth:"none",boxSizing:"content-box"}},["","Mon","","Wed","","Fri",""].map((function(t,e){return Object(r.c)("li",{key:e,sx:{width:function(t){return t.space[6]},height:function(e){return t?e.space[4]:e.space[3]},fontSize:function(t){return t.fontSizes[0]},m:t?"0":"2px"}},t)})),f.map((function(t,e){return Object(r.c)("li",{key:e,sx:{position:"relative",pr:function(t){return Math.floor(e/7)===Math.floor(f.length/7)?t.space[1]:t.space[0]},"&::before":Math.floor(e/7)===Math.floor(v[0]/7)&&v.shift()&&{content:"'"+new Date(a,11-v.length,1).toDateString().split(" ")[1]+"'",position:"absolute",top:function(t){return"-"+t.space[5]},left:function(t){return"calc("+t.space[1]+" / 2)"},fontSize:function(t){return t.fontSizes[0]}}}},Object(r.c)("div",{"data-index":e,sx:{backgroundColor:function(t){return f[e].today?t.colors.purple[60]:f[e].blogs||f[e].commits?f[e].blogs?f[e].commits?t.colors.green[60]:t.colors.green[20]:f[e].commits.length>5?t.colors.blue[60]:f[e].commits.length>2?t.colors.blue[40]:t.colors.blue[20]:t.colors.grey[10]},width:function(t){return t.space[3]},height:function(t){return t.space[3]},m:function(t){return"calc("+t.space[1]+" / 2)"},boxSizing:"border-box",border:function(t){return t.borders[1]+" "+t.colors.grey[20]},borderRadius:"1px","&:hover + div":{display:"block"}}}),Object(r.c)("div",{sx:{position:"absolute",display:"none",zIndex:100,top:function(t){return"-"+t.space[8]},left:"8px",whiteSpace:"nowrap",transform:"translateX(-"+f[e].offset+"%)",color:function(t){return t.colors.white},background:function(t){return t.colors.blackFade[80]},borderRadius:"5px",px:function(t){return t.space[3]},py:function(t){return t.space[2]},fontSize:function(t){return t.fontSizes[0]},"&:hover":{display:"inline-block"},"&::after":{content:"''",borderColor:function(t){return t.colors.blackFade[80]+" transparent transparent transparent"},borderWidth:"4px",borderStyle:"solid",position:"absolute",left:"calc("+f[e].offset+"% - 4px)",bottom:"-8px"}}},f[e]&&f[e].blogs&&f[e].blogs.map((function(t,n){return Object(r.c)(i.a.Fragment,{key:t.slug},Object(r.c)(u.a,{to:t.slug,sx:{color:function(t){return t.colors.white},"&:nth-last-child(2)":{mr:function(t){return t.space[2]}}}},t.title),n<f[e].blogs.length-1&&"、")})),f[e]&&f[e].commits&&Object(r.c)("span",{sx:{mr:function(t){return t.space[2]}}},f[e].commits.length+" commit"+(f[e].commits.length>1?"s":"")),Object(r.c)("span",{sx:{color:function(t){return t.colors.whiteFade[60]}}},f[e].date)))}))),Object(r.c)("div",{sx:{fontSize:function(t){return t.fontSizes[0]},display:"flex",alignItems:"center",justifyContent:"flex-end",pb:function(t){return t.space[2]}}},Object(r.c)("span",{sx:{backgroundColor:function(t){return t.colors.green[20]},width:function(t){return t.space[3]},height:function(t){return t.space[3]},mr:function(t){return t.space[1]},boxSizing:"border-box",border:function(t){return t.borders[1]+" "+t.colors.grey[20]},borderRadius:"1px",display:"inline-block"}}),"blog   ",Object(r.c)("span",{sx:{backgroundColor:function(t){return t.colors.blue[20]},width:function(t){return t.space[3]},height:function(t){return t.space[3]},mr:function(t){return t.space[1]},boxSizing:"border-box",border:function(t){return t.borders[1]+" "+t.colors.grey[20]},borderRadius:"1px",display:"inline-block"}}),"commit"))};function v(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var j=function(){for(var t,e=Object(d.useStaticQuery)("1296649487"),n=e.allMdx,o=e.allCommitsYaml.edges,c=i.a.useState((new Date).getFullYear()),a=c[0],u=(c[1],[]),s=v(n.edges);!(t=s()).done;){var l=t.value,f={};f.date=l.node.frontmatter.date.split("-").map((function(t){return+t})),f.type="blog",f.title=l.node.frontmatter.title,f.slug=l.node.fields.slug,u.push(f)}for(var p,b=[],m=v(o);!(p=m()).done;){var g=p.value,h={};h.date=g.node.date.split("-").map((function(t){return parseInt(t)})),h.type="commit",h.version=g.node.version,h.message=g.node.message,b.push(h)}return Object(r.c)("div",null,Object(r.c)("div",{sx:{height:function(t){return t.space[8]},lineHeight:function(t){return t.space[8]}}},a+" contributions"),Object(r.c)("div",{sx:{border:function(t){return t.borders[1]+" "+t.colors.blackFade[20]},borderRadius:function(t){return t.space[4]},px:function(t){return t.space[6]},overflow:"hidden"}},Object(r.c)(y,{blogs:u,commits:b})))};function w(t){var e=t.location;return Object(r.c)(a.a,{location:e},Object(r.c)(b.a,null),Object(r.c)("div",null,Object(r.c)("h1",null,"Welcome!"),Object(r.c)("h4",null,"Find Your Answer HERE!"),Object(r.c)("h4",null,"Can't wait to see the blogs?  ",Object(r.c)(u.a,{to:"/blog/",sx:{color:function(t){return t.colors.blue[60]}}},"GO",Object(r.c)(c.a,null))),Object(r.c)(j,null),Object(r.c)(f,{homeItems:p})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5ecc27029a0197d272de.js.map