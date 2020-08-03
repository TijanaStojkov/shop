(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{119:function(e,t,r){},120:function(e,t,r){},121:function(e,t,r){},124:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(30),c=r.n(o),l=(r(53),r(54),r(55),r(56),r(22)),s=r(4),i=r(3),u=function(){return a.a.createElement(i.Navbar,{className:"red lighten-3",alignLinks:"left",brand:a.a.createElement("a",{className:"brand-logo right ",href:"google.com"},"Logo"),menuIcon:a.a.createElement(i.Icon,null,"menu"),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0}},a.a.createElement(i.NavItem,{onClick:function(){}},"Getting started"),a.a.createElement(i.NavItem,{href:"components.html"},"Components"))},d=r(26),p=r(10),m=r(11),h=r(13),f=r(12),E=r(14),v=r(19),g=r.n(v),b=r(23),k=r.n(b),C=r(24),O=r.n(C),P=r(25),y=r.n(P),j=(r(119),function(){return a.a.createElement("div",{className:"loader"},"Loading...")}),S=function(e){return a.a.createElement(i.Button,{node:"button",small:!0,style:{marginRight:"5px"},waves:"light",className:e.ClassName,onClick:e.clicked}," ",a.a.createElement(i.Icon,null,e.textOrIcon),e.text," ")},x=function(e){return Number(e.toFixed(2))+"$"},I=function(e){e.productName.charAt(0).toUpperCase(),e.productName.slice(1);var t=e.productSizes.map((function(t,r){return r+1===e.productSizes.length?t:t+", "})),r=e.order?null:[a.a.createElement("span",{key:"1"},a.a.createElement(S,{ClassName:"teal lighten-3",clicked:function(){return e.addProduct(e.productName)},textOrIcon:"add"})),a.a.createElement("span",{key:"2"},a.a.createElement(S,{ClassName:"red lighten-3",clicked:function(){return e.removeProduct(e.productName)},textOrIcon:"remove"}))];return a.a.createElement(i.Col,{m:12,l:6},a.a.createElement(i.Card,{className:"Card",actions:r,closeIcon:a.a.createElement(i.Icon,null,"close"),revealIcon:a.a.createElement(i.Icon,null,"more_vert"),header:a.a.createElement(i.CardTitle,{image:e.productImages}),horizontal:!0},a.a.createElement("h3",null,e.productName),a.a.createElement("h3",null,e.order),a.a.createElement("p",null,"Quantity: ",e.productQuantity),a.a.createElement("p",null,"Price: ",x(e.productPrices)),a.a.createElement("p",null,"Sizes: ",t)))},L=function(e){var t=Object.keys(e.products).map((function(t){if("price"!==t)return e.order?e.products[t]>0?a.a.createElement(I,{order:e.order,key:t,productName:t,productQuantity:e.products[t],productImages:e.productImages[t],productPrices:e.productPrices[t],productSizes:e.productSizes[t]}):null:a.a.createElement(I,{key:t,productName:t,productQuantity:e.products[t],productImages:e.productImages[t],productPrices:e.productPrices[t],productSizes:e.productSizes[t],removeProduct:e.removeProduct,addProduct:e.addProduct})}));return a.a.createElement(i.Row,null,t)},z=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.orderable!==e.orderable||this.props.children!==e.children}},{key:"componentDidUpdate",value:function(){console.log("updated")}},{key:"render",value:function(){return a.a.createElement(i.Modal,{actions:[a.a.createElement("span",{key:"1"},a.a.createElement(i.Button,{flat:!0,modal:"close",node:"button",waves:"green"},"Close")),a.a.createElement("span",{key:"2"},a.a.createElement(i.Button,{flat:!0,modal:"close",node:"button",waves:"green",onClick:this.props.orderHandler},"Order"))],bottomSheet:!1,fixedFooter:!1,header:"Order summary",id:"modal-0",options:{dismissible:!0,endingTop:"10%",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,opacity:.5,outDuration:250,preventScrolling:!0,startingTop:"4%"},trigger:a.a.createElement(i.Button,{node:"button",disabled:!this.props.orderable,onClick:this.props.updateModalComponentHandler},"Order summary")},a.a.createElement("div",null,this.props.children))}}]),t}(n.Component),N=function(e){return e.children},w=function(e,t){return function(r){function n(e){var r;return Object(p.a)(this,n),(r=Object(h.a)(this,Object(f.a)(n).call(this,e))).hideModal=function(){r.setState({error:null})},r.state={error:null},r.reqInterceptor=t.interceptors.request.use((function(e){return r.setState({error:null}),e})),r.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(e){r.setState({error:e.message})})),r}return Object(E.a)(n,r),Object(m.a)(n,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(N,null,a.a.createElement("p",null,this.state.error),a.a.createElement(e,this.props))}}]),n}(n.Component)},X=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.products?Object.keys(this.props.products).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.products[t])})):"";return a.a.createElement(N,null,a.a.createElement("ul",null,t),a.a.createElement("p",null,"Total price: ",x(this.props.totalPrice)))}}]),t}(n.Component),M=(r(120),function(e){return a.a.createElement(N,null,a.a.createElement(i.Row,null,a.a.createElement(i.Col,{s:6},a.a.createElement(i.Select,{label:"Filter by size",id:"Select-9",multiple:!1,onChange:e.filterSize,options:{classes:"",dropdownOptions:{alignment:"left",autoTrigger:!0,closeOnClick:!0,constrainWidth:!0,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250}},value:""},a.a.createElement("option",{disabled:!0,value:""}," ",e.size," "),a.a.createElement("option",{value:"s"}," S "),a.a.createElement("option",{value:"m"}," M "),a.a.createElement("option",{value:"x"}," X "),a.a.createElement("option",{value:"xl"}," XL "),a.a.createElement("option",{value:"xxl"}," XXL "))),a.a.createElement(i.Col,{s:6})))}),D=function(e){return a.a.createElement(N,null,a.a.createElement(L,{order:e.order,products:e.filterProductsList,filterProductsList:e.filterProductsList,productImages:e.productImages,productPrices:e.productPrices,productSizes:e.productSizes}),a.a.createElement(S,{ClassName:"red lighten-3",clicked:e.onCheckoutCancle,text:"Cancle",textOrIcon:""}),a.a.createElement(S,{ClassName:"green lighten-3",clicked:e.onCheckoutContinue,text:"Continue",textOrIcon:""}))},T=(r(121),function(e){function t(){var e,r;Object(p.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={name:"",email:"",address:{street:"",postalCOde:""}},r.orderHandler=function(e){e.preventDefault(),console.log(r.props.products);var t={products:r.props.products,price:r.props.totalPrice,customer:{name:"Tijana Stojkov",address:{street:"Njegoseva",zipCode:"23000",country:"Greece"}},deliveryMethod:"fast"};g.a.post("https://e-commerce-5e72e.firebaseio.com/order.json",t).then((function(e){console.log(e)})).catch((function(e){r.setState({errorMessage:"Network error post"})}))},r}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.a.createElement(i.Row,null,a.a.createElement(i.Col,{s:3}),a.a.createElement(i.Col,{s:6},a.a.createElement("h4",{className:"center "},"Enter your contact data"),a.a.createElement("form",{className:"text-placeholder"},a.a.createElement("input",{type:"text",name:"name",placeholder:"Your name"}),a.a.createElement("input",{type:"email",name:"email",placeholder:"Your email"}),a.a.createElement("input",{type:"text",name:"street",placeholder:"Your street"}),a.a.createElement("input",{type:"text",name:"postal",placeholder:"Your postal"}),a.a.createElement(S,{ClassName:"green lighten-2",text:"Order",textOrIcon:"",clicked:this.orderHandler}))),a.a.createElement(i.Col,{s:3}))}}]),t}(n.Component)),B={shert:k.a,pants:O.a,skirt:y.a},H={shert:10,pants:4.3,skirt:5.4},U={shert:["X","L","XL","XXL"],pants:["X","M","XL"],skirt:["S","X","XXL"]},R=function(e){function t(){var e,r;Object(p.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={products:{pants:0,shert:1,skirt:4},totalPrice:0,orderable:!1,errorMessage:"",size:"",order:!0},r.onCheckoutCancle=function(){r.props.history.goBack()},r.onCheckoutContinue=function(){r.props.history.replace("/checkout/contact-data")},r}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(this.props.location.search);console.log(e);var t={},r=0,n=!0,a=!1,o=void 0;try{for(var c,l=e.entries()[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var s=c.value;"price"===s[0]?r=s[1]:t[s[0]]=+s[1]}}catch(i){a=!0,o=i}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}this.setState({products:t,totalPrice:r})}},{key:"render",value:function(){var e=this;return a.a.createElement(N,null,a.a.createElement(D,{order:this.state.order,filterProductsList:this.state.products,productImages:B,productPrices:H,productSizes:U,onCheckoutCancle:this.onCheckoutCancle,onCheckoutContinue:this.onCheckoutContinue}),a.a.createElement(s.a,{path:this.props.match.path+"/contact-data",render:function(){return a.a.createElement(T,{products:e.state.products,totalPrice:e.state.totalPrice})}}))}}]),t}(n.Component),q={shert:k.a,pants:O.a,skirt:y.a},A={shert:10,pants:4.3,skirt:5.4},Q={shert:["X","L","XL","XXL"],pants:["X","M","XL"],skirt:["S","X","XXL"]},W=w(function(e){function t(){var e,r;Object(p.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={products:null,filterProductsList:null,totalPrice:0,orderable:!1,errorMessage:"",size:"",order:!0},r.removeProduct=function(e){var t=r.state.products[e];if(0!==t){var n=t-1,a=Object(d.a)({},r.state.products);a[e]=n;var o=r.state.totalPrice-A[e];r.setState({products:a,filterProductsList:a,totalPrice:o},(function(){this.listProducts()})),r.updatePurchasable(a)}},r.addProduct=function(e){var t=r.state.products[e]+1,n=Object(d.a)({},r.state.products);n[e]=t;var a=r.state.totalPrice+A[e];r.setState({products:n,filterProductsList:n,totalPrice:a},(function(){this.listProducts()})),r.updatePurchasable(n)},r.updatePurchasable=function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);r.setState({orderable:t>0})},r.orderHandler=function(){var e=[];for(var t in r.state.products)e.push(t+"="+r.state.products[t]);e.push("price="+r.state.totalPrice);var n=e.join("&");r.props.history.push({pathname:"/checkout",search:"?"+n})},r.filterSize=function(e){r.setState({size:e.target.value},(function(){this.listProducts()}))},r.listProducts=function(){if(""!==r.state.size){var e=r.state.size,t=Object(d.a)({},r.state.products);Object.keys(Q).forEach((function(r){Q[r].indexOf(e.toUpperCase())<0&&delete t[r]})),r.setState({filterProductsList:t})}},r}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://e-commerce-5e72e.firebaseio.com/products.json").then((function(t){e.setState({products:t.data,filterProductsList:t.data})})).catch((function(t){e.setState({errorMessage:"Network error get"})}))}},{key:"render",value:function(){var e=this.state.products?a.a.createElement(L,{products:this.state.filterProductsList,filterProductsList:this.state.filterProductsList,productImages:q,productPrices:A,productSizes:Q,removeProduct:this.removeProduct,addProduct:this.addProduct}):a.a.createElement(j,null),t=null,r=null;return this.state.products&&(t=a.a.createElement(X,{products:this.state.products,totalPrice:this.state.totalPrice}),r=a.a.createElement(M,{size:this.state.size,filterSize:this.filterSize})),a.a.createElement("div",null,a.a.createElement("h1",null,"Our shop"),r,e,a.a.createElement("p",null,this.state.errorMessage),a.a.createElement(z,{products:this.state.products,totalPrice:this.state.totalPrice,orderable:this.state.orderable,orderHandler:this.orderHandler},t))}}]),t}(n.Component),g.a),Y=function(){return a.a.createElement("div",null,a.a.createElement(u,null),a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/",component:W}),a.a.createElement(s.a,{path:"/checkout",component:R})))};var F=function(){return a.a.createElement(l.a,{basename:"/shop"},a.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},23:function(e,t,r){e.exports=r.p+"static/media/shert.eda47ffe.jpg"},24:function(e,t,r){e.exports=r.p+"static/media/pants.99ddaf19.jpg"},25:function(e,t,r){e.exports=r.p+"static/media/skirt.64895794.jpg"},48:function(e,t,r){e.exports=r(124)},53:function(e,t,r){},54:function(e,t,r){}},[[48,1,2]]]);
//# sourceMappingURL=main.67192404.chunk.js.map