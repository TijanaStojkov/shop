(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{109:function(e,t,r){},129:function(e,t,r){},131:function(e,t,r){},132:function(e,t,r){},133:function(e,t,r){},134:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(24),c=r.n(o),l=(r(61),r(62),r(63),r(64),r(21)),i=r(5),u=r(3),s=(r(109),function(){return a.a.createElement(u.Navbar,{className:"red lighten-3",alignLinks:"left",brand:a.a.createElement("a",{className:"brand-logo right ",href:"google.com"},"Logo"),menuIcon:a.a.createElement(u.Icon,null,"menu"),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0}},a.a.createElement(l.b,{to:"/",exact:!0},"Shop"),a.a.createElement(l.b,{to:"/Orders"},"Orders"))}),d=r(7),p=r(8),m=r(10),h=r(9),f=r(11),v=r(22),g=r.n(v),E=r(29),b=r.n(E),O=r(30),y=r.n(O),C=r(31),k=r.n(C),j=(r(129),function(){return a.a.createElement("div",{className:"loader"},"Loading...")}),P=function(e){return a.a.createElement(u.Button,{node:"button",small:!0,style:{marginRight:"5px"},waves:"light",className:e.ClassName,onClick:e.clicked,disabled:e.disabled}," ",a.a.createElement(u.Icon,null,e.textOrIcon),e.text," ")},S=function(e){return Number(e.toFixed(2))+"$"},L=function(e){var t=e.productSizes.map((function(t,r){return r+1===e.productSizes.length?t:t+", "})),r=e.order?null:[a.a.createElement("span",{key:"1"},a.a.createElement(P,{ClassName:"teal lighten-3",clicked:function(){return e.addProduct(e.productName)},textOrIcon:"add"})),a.a.createElement("span",{key:"2"},a.a.createElement(P,{ClassName:"red lighten-3",clicked:function(){return e.removeProduct(e.productName)},textOrIcon:"remove"}))];return a.a.createElement(u.Col,{m:12,l:6},a.a.createElement(u.Card,{className:"Card",actions:r,closeIcon:a.a.createElement(u.Icon,null,"close"),revealIcon:a.a.createElement(u.Icon,null,"more_vert"),header:a.a.createElement(u.CardTitle,{image:e.productImages}),horizontal:!0},a.a.createElement("h3",null,e.productName),a.a.createElement("h3",null,e.order),a.a.createElement("p",null,"Quantity: ",e.productQuantity),a.a.createElement("p",null,"Price: ",S(e.productPrices)),a.a.createElement("p",null,"Sizes: ",t)))},x=r(18),I=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.order?Object.keys(this.props.products).map((function(t){return e.props.products[t]>0?a.a.createElement(L,{order:e.props.order,key:t,productName:t,productQuantity:e.props.products[t],productImages:e.props.productImages[t],productPrices:e.props.productPrices[t],productSizes:e.props.productSizes[t]}):null})):Object.keys(this.props.filterProductsList).map((function(t){return a.a.createElement(L,{key:t,productName:t,productQuantity:e.props.filterProductsList[t],productImages:e.props.productImages[t],productPrices:e.props.productPrices[t],productSizes:e.props.productSizes[t],removeProduct:e.props.removeProduct,addProduct:e.props.addProduct})}));return a.a.createElement(u.Row,null,t)}}]),t}(n.Component),z=Object(x.b)((function(e){return{state:e,filterProductsList:e.filterProductsList,products:e.products}}))(I),N=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.orderable!==e.orderable||this.props.children!==e.children}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return a.a.createElement(u.Modal,{actions:[a.a.createElement("span",{key:"1"},a.a.createElement(u.Button,{flat:!0,modal:"close",node:"button",waves:"green"},"Close")),a.a.createElement("span",{key:"2"},a.a.createElement(u.Button,{flat:!0,modal:"close",node:"button",waves:"green",onClick:this.props.orderHandler},"Order"))],bottomSheet:!1,fixedFooter:!1,header:"Order summary",id:"modal-0",options:{dismissible:!0,endingTop:"10%",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,opacity:.5,outDuration:250,preventScrolling:!0,startingTop:"4%"},trigger:a.a.createElement(u.Button,{node:"button",disabled:!this.props.orderable,onClick:this.props.updateModalComponentHandler},"Order summary")},a.a.createElement("div",null,this.props.children))}}]),t}(n.Component),X=function(e){return e.children},w=function(e,t){return function(r){function n(e){var r;return Object(d.a)(this,n),(r=Object(m.a)(this,Object(h.a)(n).call(this,e))).hideModal=function(){r.setState({error:null})},r.state={error:null},r.reqInterceptor=t.interceptors.request.use((function(e){return r.setState({error:null}),e})),r.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(e){r.setState({error:e.message})})),r}return Object(f.a)(n,r),Object(p.a)(n,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(X,null,a.a.createElement("p",null,this.state.error),a.a.createElement(e,this.props))}}]),n}(n.Component)},T=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.products?Object.keys(this.props.products).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.products[t])})):"";return a.a.createElement(X,null,a.a.createElement("ul",null,t),a.a.createElement("p",null,"Total price: ",S(this.props.totalPrice)))}}]),t}(n.Component),D=(r(131),function(e){return a.a.createElement(X,null,a.a.createElement(u.Row,null,a.a.createElement(u.Col,{s:6},a.a.createElement(u.Select,{label:"Filter by size",id:"Select-9",multiple:!1,onChange:function(t){return e.filterSize(t.target.value)},options:{classes:"",dropdownOptions:{alignment:"left",autoTrigger:!0,closeOnClick:!0,constrainWidth:!0,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250}},value:""},a.a.createElement("option",{disabled:!0,value:""}," ",e.size," "),a.a.createElement("option",{value:"s"}," S "),a.a.createElement("option",{value:"m"}," M "),a.a.createElement("option",{value:"x"}," X "),a.a.createElement("option",{value:"xl"}," XL "),a.a.createElement("option",{value:"xxl"}," XXL "))),a.a.createElement(u.Col,{s:6})))}),M={shert:b.a,pants:y.a,skirt:k.a},_={shert:10,pants:4.3,skirt:5.4},F={shert:["X","L","XL","XXL"],pants:["X","M","XL"],skirt:["S","X","XXL"]},R=function(e){function t(){var e,r;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={orderable:!1,errorMessage:"",size:"",order:!0},r.updatePurchasable=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},r.orderHandler=function(){r.props.history.push("/checkout")},r.addProduct=function(e){r.props.addProduct(e)},r.removeProduct=function(e){r.props.removeProduct(e)},r}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.products?a.a.createElement(z,{productImages:M,productPrices:_,productSizes:F,removeProduct:this.removeProduct,addProduct:this.addProduct}):a.a.createElement(j,null),t=null,r=null;return this.props.products&&(t=a.a.createElement(T,{products:this.props.products,totalPrice:this.props.totalPrice}),r=a.a.createElement(D,{size:this.props.size,filterSize:this.props.filterSize})),a.a.createElement("div",null,a.a.createElement("h1",null,"Our shop"),r,e,a.a.createElement("p",null,this.state.errorMessage),a.a.createElement(N,{products:this.props.products,totalPrice:this.state.totalPrice,orderable:this.updatePurchasable(this.props.products),orderHandler:this.orderHandler},t))}}]),t}(n.Component),V=Object(x.b)((function(e){return{products:e.products,filterProductsList:e.filterProductsList,size:e.size,totalPrice:e.totalPrice}}),(function(e){return{addProduct:function(t){return e(function(e){return{type:"ADD_PRODUCT",productName:e}}(t))},removeProduct:function(t){return e(function(e){return{type:"REMOVE_PRODUCT",productName:e}}(t))},filterSize:function(t){return e(function(e){return{type:"FILTER_SIZE",size:e}}(t))}}}))(w(R,g.a)),q=function(e){return a.a.createElement(X,null,a.a.createElement(z,{order:e.order,filterProductsList:e.products,productImages:e.productImages,productPrices:e.productPrices,productSizes:e.productSizes}),a.a.createElement(P,{ClassName:"red lighten-3",clicked:e.onCheckoutCancle,text:"Cancle",textOrIcon:""}),a.a.createElement(P,{ClassName:"green lighten-3",clicked:e.onCheckoutContinue,text:"Continue",textOrIcon:""}))},H=r(17),U=(r(132),r(54)),B=r.n(U),A=(r(133),function(e){var t=null,r=[];switch(e.invalid&&e.shouldValidate&&e.tuched&&r.push("Invalid"),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:r},e.elementConfig,{value:e.value,onChange:e.change}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:r},e.elementConfig,{value:e.value,onChange:e.change}));break;case"select":t=a.a.createElement("select",{value:e.value,onChange:e.change},e.elementConfig.options.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.deliveryValue)})));break;default:t=a.a.createElement("input",Object.assign({},e.elementConfig,{value:e.value,onChange:e.change}))}return a.a.createElement("div",null,t)}),Y=function(e){function t(){var e,r;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your name"},value:"",validation:{required:!0},valid:!1,tuched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your street"},value:"",validation:{required:!0},valid:!1,tuched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Your zipCode"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,tuched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Your country"},value:"",validation:{required:!0},valid:!1,tuched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your email"},value:"",validation:{required:!0},valid:!1,tuched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",deliveryValue:"Fastest"},{value:"cheapest",deliveryValue:"Cheapest"}]},validation:{},value:"fastest",valid:!0}},formIsValid:!1,loading:!1},r.orderHandler=function(e){e.preventDefault(),r.setState({loading:!0});var t={};for(var n in r.state.orderForm)t[n]=r.state.orderForm[n].value;var a={products:r.props.products,price:r.props.totalPrice,orderData:t};g.a.post("https://e-commerce-5e72e.firebaseio.com/order.json",a).then((function(e){r.setState({loading:!1}),r.props.history.push("/")})).catch((function(e){r.setState({loading:!1,errorMessage:"Network error post"})}))},r.inputChangedHandler=function(e,t){var n=Object(H.a)({},r.state.orderForm),a=Object(H.a)({},n[t]);a.value=e.target.value,a.valid=r.checkValidity(a.value,a.validation),a.tuched=!0,n[t]=a,console.log(n);var o=!0;for(var c in n)o=n[c].valid&&o,console.log(o);console.log(o),r.setState({orderForm:n,formIsValid:o})},r}return Object(f.a)(t,e),Object(p.a)(t,[{key:"checkValidity",value:function(e,t){var r=!0;return t.required&&(r=""!==e.trim()&&r),t.minLength&&(r=e.length>=t.minLength&&r),t.maxLength&&(r=e.length<=t.maxLength&&r),r}},{key:"componentDidMount",value:function(){B()(document).ready((function(){window.$("select").formSelect()}))}},{key:"render",value:function(){var e=this,t=[];for(var r in this.state.orderForm)t.push({id:r,config:this.state.orderForm[r]});var n=a.a.createElement("form",{onSubmit:this.orderHandler,className:"text-placeholder"},t.map((function(t){return a.a.createElement(A,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,change:function(r){return e.inputChangedHandler(r,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation,tuched:t.config.tuched})})),a.a.createElement(P,{ClassName:"green lighten-2",text:"Order",textOrIcon:"",disabled:!this.state.formIsValid}));return this.state.loading&&(n=a.a.createElement(j,null)),a.a.createElement("div",null,a.a.createElement(u.Row,null,a.a.createElement(u.Col,{s:3}),a.a.createElement(u.Col,{s:6},a.a.createElement("h4",{className:"center "},"Enter your contact data"),n),a.a.createElement(u.Col,{s:3})))}}]),t}(n.Component),Q=Object(x.b)((function(e){return{products:e.products,totalPrice:e.totalPrice}}))(Y),W={shert:b.a,pants:y.a,skirt:k.a},$={shert:10,pants:4.3,skirt:5.4},J={shert:["X","L","XL","XXL"],pants:["X","M","XL"],skirt:["S","X","XXL"]},Z=function(e){function t(){var e,r;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={orderable:!1,errorMessage:"",order:!0},r.onCheckoutCancle=function(){r.props.history.goBack()},r.onCheckoutContinue=function(){r.props.history.replace("/checkout/contact-data")},r}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(X,null,a.a.createElement(q,{order:this.state.order,products:this.props.products,productImages:W,productPrices:$,productSizes:J,onCheckoutCancle:this.onCheckoutCancle,onCheckoutContinue:this.onCheckoutContinue}),a.a.createElement(i.a,{path:this.props.match.path+"/contact-data",component:Q}))}}]),t}(n.Component),G=Object(x.b)((function(e){return{products:e.products}}))(Z),K=function(e){var t=[];for(var r in e.products)t.push({name:r,amounth:e.products[r]});var n=t.map((function(e){return a.a.createElement("li",{key:e.name},a.a.createElement("span",{style:{textTransform:"capitalize"}},e.name),": ",e.amounth)}));return a.a.createElement(u.CollapsibleItem,{expanded:!1,header:e.name,node:"div",onSelect:function(){}},a.a.createElement("ul",null,n,a.a.createElement("li",null,a.a.createElement("b",null,"Total price: ",S(4.3))),a.a.createElement("li",null)))},ee=w(function(e){function t(){var e,r;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={orders:[],loading:!0},r}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://e-commerce-5e72e.firebaseio.com/order.json").then((function(t){var r=[];for(var n in t.data)console.log(t.data[n],n,t.data),r.push(Object(H.a)({},t.data[n],{id:n}));console.log(r),e.setState({orders:r,loading:!1})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state.orders?a.a.createElement(u.Collapsible,{accordion:!0,popout:!0},this.state.orders.map((function(e){return a.a.createElement(K,{key:e.id,name:e.orderData.name,deliveryMethod:e.orderData.deliveryMethod,products:e.products})}))):null;return this.state.loading&&(e=a.a.createElement(j,null)),a.a.createElement(X,null,a.a.createElement("h3",null,"Orders"),e)}}]),t}(n.Component),g.a),te=function(){return a.a.createElement("div",null,a.a.createElement(s,null),a.a.createElement(i.c,null,a.a.createElement(i.a,{exact:!0,path:"/",component:V}),a.a.createElement(i.a,{path:"/checkout",component:G}),a.a.createElement(i.a,{path:"/orders",component:ee})))};var re=function(){return a.a.createElement(l.a,{basename:"/shop"},a.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=r(23),ae=function(e,t){return Object(H.a)({},e,{},t)},oe={totalPrice:0,products:{pants:0,shert:0,skirt:0},filterProductsList:{pants:0,shert:0,skirt:0},size:""},ce={shert:["X","L","XL","XXL"],pants:["X","M","XL"],skirt:["S","X","XXL"]},le={shert:10,pants:4.3,skirt:5.4},ie=function(e,t,r){if(""!==e.size||""!==r){var n=""!==r?r:e.size,a=Object(H.a)({},t);return Object.keys(ce).forEach((function(e){ce[e].indexOf(n.toUpperCase())<0&&delete a[e]})),a}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":var r=Object(H.a)({},e.products),n=r[t.productName]+1;r[t.productName]=n;var a=ie(e,r,""),o=a||r;return console.log("state-add",e),ae(e,{products:r,filterProductsList:o,totalPrice:e.totalPrice+le[t.productName]});case"REMOVE_PRODUCT":var c=Object(H.a)({},e.products),l=c[t.productName]-1;c[t.productName]=l;var i=ie(e,c,""),u=i||c;return console.log("state-remove",e),ae(e,{products:c,filterProductsList:u,totalPrice:e.totalPrice-le[t.productName]});case"FILTER_SIZE":var s=ie(e,e.products,t.size);return ae(e,{size:t.size,filterProductsList:s});default:return e}},se=r(55),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.c,pe=Object(ne.d)(ue,de(Object(ne.a)((function(e){return function(t){return function(r){console.log("[Middleware] Dispaching",r);var n=t(r);return console.log("[Middleware] next state",e.getState()),n}}}),se.a)));c.a.render(a.a.createElement(x.a,{store:pe},a.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,r){e.exports=r.p+"static/media/shert.eda47ffe.jpg"},30:function(e,t,r){e.exports=r.p+"static/media/pants.99ddaf19.jpg"},31:function(e,t,r){e.exports=r.p+"static/media/skirt.64895794.jpg"},56:function(e,t,r){e.exports=r(134)},61:function(e,t,r){},62:function(e,t,r){}},[[56,1,2]]]);
//# sourceMappingURL=main.dd87aace.chunk.js.map