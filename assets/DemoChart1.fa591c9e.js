import{l as e}from"./index.b22432d7.js";import{C as t}from"./index.7db33356.js";import{o as n,r,e as o,f as i,j as a}from"./vendor.f4e9483c.js";import"./omit.f6b2584c.js";import"./tslib.es6.d4493459.js";const s=[{genre:"Sports",sold:275},{genre:"Strategy",sold:115},{genre:"Action",sold:120},{genre:"Shooter",sold:350},{genre:"Other",sold:150}],l={name:"DemoChart1",setup:()=>(n((()=>{const n=new t({container:"c2",width:600,height:300});n.data(s),n.interval().position("genre*sold"),n.render(),fetch("https://gw.alipayobjects.com/os/antvdemo/assets/data/flare.json").then((e=>e.json())).then((n=>{const r=(new e.View).source(n,{type:"hierarchy"});r.transform({type:"hierarchy.circle-packing"});const o=Math.min(window.innerWidth,500),i=new t({container:"c1",height:o,width:o,padding:0});i.axis(!1),i.legend(!1),i.tooltip({showTitle:!1,showMarkers:!1});const a=r.getAllNodes().map((e=>({hasChildren:!(!e.data.children||!e.data.children.length),name:e.data.name.split(/(?=[A-Z][^A-Z])/g).join("\n"),value:e.value,depth:e.depth,x:e.x,y:e.y,r:e.r})));i.data(a),i.scale({x:{nice:!0},y:{nice:!0}}),i.point().position("x*y").color("hasChildren").shape("circle").tooltip("name").size("r",(e=>e*o)).color("r","rgb(252, 253, 191)-rgb(231, 82, 99)-rgb(183, 55, 121)").style({stroke:"rgb(183, 55, 121)"}).label("name",{offset:0,style:{textBaseline:"middle",fill:"grey",fontSize:9,textAlign:"center"},layout:{type:"fixed-overlap"}}),i.interaction("element-active"),i.render()}))})),{})},d={style:{"text-align":"center"}},c=a("h2",null,"Plot of circular stuff",-1),h=a("div",{id:"c1"},null,-1),p=a("h2",null,"Show Nothing Here",-1),g=a("h2",null,"Some Bars",-1),m=a("div",{id:"c2"},null,-1);l.render=function(e,t,n,s,l,f){const y=r("a-divider"),u=r("a-empty");return o(),i("div",d,[c,h,a(y),p,a(u,{"image-style":{height:"400px"},description:"Not Enough Data To Generate Chart"}),a(y),g,m])};export default l;
