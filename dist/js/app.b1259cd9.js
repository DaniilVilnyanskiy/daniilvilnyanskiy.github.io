(function(){"use strict";var t={8272:function(t,e,r){var n=r(9242),a=r(3396);function i(t,e,r,n,i,s){const c=(0,a.up)("FormCalcCar");return(0,a.wg)(),(0,a.j4)(c)}const s={class:"form"},c=(0,a._)("h1",{class:"first-title"},"Рассчитайте стоимость автомобиля в лизинг",-1),o={class:"input-container"},u={class:"input-content input-content__button"};function l(t,e,r,n,i,l){const p=(0,a.up)("InputScroll"),m=(0,a.up)("InputScrollPercent"),P=(0,a.up)("ResultComponent"),h=(0,a.up)("CustomButton");return(0,a.wg)(),(0,a.iD)("div",s,[c,(0,a._)("div",o,[(0,a.Wm)(p,{params:i.carPrice},null,8,["params"]),(0,a.Wm)(m,{params:i.firstPay},null,8,["params"]),(0,a.Wm)(p,{params:i.periodLeasing},null,8,["params"]),(0,a.Wm)(P,{title:"Сумма договора лизинга",result:l.sumOrder},null,8,["result"]),(0,a.Wm)(P,{title:"Ежемесячный платёж",result:l.sumMonthPay},null,8,["result"]),(0,a._)("div",u,[(0,a.Wm)(h,{onPreviewButtonWasClicked:l.request,params:i.button},null,8,["onPreviewButtonWasClicked","params"])])])])}var p=r(7139);const m={class:"input-content__inner"},P=["value"],h={class:"input-content__slider"},d=["min","max"];function g(t,e,r,i,s,c){const o=(0,a.Q2)("mask");return(0,a.wg)(),(0,a.iD)("div",{class:(0,p.C_)(["input-content",{notinput:r.params.noInput}])},[(0,a._)("span",null,(0,p.zw)(r.params.title),1),(0,a._)("label",m,[(0,a._)("label",null,(0,p.zw)(r.params.unit),1),(0,a.wy)((0,a._)("input",{value:r.params.priceCar?r.params.priceCar:r.params.period,onKeyup:e[0]||(e[0]=(...t)=>c.setInputValue&&c.setInputValue(...t)),onInput:e[1]||(e[1]=e=>t.$emit("minMaxCount"))},null,40,P),[[o,s.paramsPrice.month?["##"]:["# ### ###"]]])]),(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{type:"range",min:r.params.minPrice?r.params.minPrice:r.params.minPercent,max:r.params.maxPrice?r.params.maxPrice:r.params.maxPercent,"onUpdate:modelValue":e[2]||(e[2]=t=>s.paramsPrice.priceCar=t),style:(0,p.j5)({backgroundSize:c.num}),step:"1"},null,12,d),[[n.nr,s.paramsPrice.priceCar,void 0,{number:!0}]])])],2)}var f={name:"InputScroll",data(){return{paramsPrice:this.params}},props:{params:{minPrice:Number,maxPrice:Number,minPercent:Number,maxPercent:Number,priceCar:Number,title:String,unit:String,period:String,noInput:Boolean,month:String}},computed:{num(){return this.params.maxPrice?(this.params.priceCar-this.params.minPrice)/(this.params.maxPrice-this.params.minPrice)*100+"% 100%":this.params.priceCar/this.params.maxPercent*100+"% 100%"}},methods:{setInputValue(t){let e=Number(t.target.closest("input").value.replaceAll(" ",""));console.log(e),console.log(this.params),e>this.params.maxPrice&&(e=this.params.maxPrice),e<this.params.minPrice&&(e=this.params.minPrice),this.paramsPrice.priceCar=e,console.log(e),console.log(this.paramsPrice.priceCar)}}},v=r(89);const C=(0,v.Z)(f,[["render",g]]);var b=C;const y={class:"input-content"},_={class:"input-content__inner"},w={class:"input-content__inner_percent"},x=["value"],S=["value"],k={class:"input-content__slider"},I=["min","max"];function N(t,e,r,i,s,c){const o=(0,a.Q2)("mask");return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("span",null,(0,p.zw)(r.params.title),1),(0,a._)("label",_,[(0,a._)("label",w,[(0,a.wy)((0,a._)("input",{value:s.paramsPrice.unit+"%",onKeyup:e[0]||(e[0]=(...t)=>c.setInputValuePercent&&c.setInputValuePercent(...t))},null,40,x),[[o,["##%"]]])]),(0,a.wy)((0,a._)("input",{disabled:"",value:parseInt(c.percent*r.params.priceCar)},null,8,S),[[o,["# ### ###"]]])]),(0,a._)("div",k,[(0,a.wy)((0,a._)("input",{type:"range",min:r.params.minPercent,max:r.params.maxPercent,"onUpdate:modelValue":e[1]||(e[1]=t=>s.paramsPrice.unit=t),style:(0,p.j5)({backgroundSize:c.num}),step:"1"},null,12,I),[[n.nr,s.paramsPrice.unit,void 0,{number:!0}]])])])}var O={name:"InputScrollPercent",data(){return{paramsPrice:this.params}},props:{params:{minPrice:Number,maxPrice:Number,minPercent:Number,maxPercent:Number,priceCar:Number,title:String,unit:String}},methods:{setInputValuePercent(t){console.log(t.target.closest("input").value);let e=Number(t.target.closest("input").value.replaceAll(" ","").replaceAll("%",""));console.log("-----------"),console.log(e),console.log(this.params),e>=this.params.maxPercent&&(e=this.params.maxPercent),e<this.params.minPercent&&(e=this.params.minPercent),this.paramsPrice.unit=e,console.log(this.paramsPrice),console.log(e)}},computed:{percent(){return this.params.unit/100},num(){return(this.params.unit-10)/(this.params.maxPercent-this.params.minPercent)*100+"%100%"}},watch:{params:function(){console.log(this.params)}}};const j=(0,v.Z)(O,[["render",N]]);var L=j;const W={class:"input-content input-content__result"},V={class:""},z={class:"first-title sub-title"};function B(t,e,r,n,i,s){return(0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("span",V,(0,p.zw)(r.title),1),(0,a._)("span",z,(0,p.zw)(r.result.toLocaleString("")),1)])}var D={name:"ResultComponent",data(){return{paramsPrice:this.params}},props:{title:String,result:Number},computed:{},methods:{},watch:{}};const M=(0,v.Z)(D,[["render",B]]);var Z=M;const T={key:0,class:"btn-span-large"};function A(t,e,r,n,i,s){const c=(0,a.up)("LoadingProcess");return(0,a.wg)(),(0,a.iD)("button",{onClick:e[0]||(e[0]=(...t)=>s.onClick&&s.onClick(...t)),class:(0,p.C_)(["btn",[r.params.className,{"btn-disable":r.params.loadingProcess}]])},[0==r.params.loadingProcess?((0,a.wg)(),(0,a.iD)("span",T,"Отправить")):((0,a.wg)(),(0,a.j4)(c,{key:1}))],2)}const F={class:"lds-dual-ring"};function R(t,e){return(0,a.wg)(),(0,a.iD)("div",F)}const q={},K=(0,v.Z)(q,[["render",R]]);var Q=K,U={name:"CustomButton",components:{LoadingProcess:Q},data(){return{paramsList:this.params}},props:{params:{className:String,loadingProcess:Number}},computed:{},methods:{onClick(t){this.$emit("previewButtonWasClicked",t)}}};const $=(0,v.Z)(U,[["render",A]]);var E=$,J={name:"FormCalcCar",components:{InputScrollPercent:L,InputScroll:b,ResultComponent:Z,CustomButton:E},data(){return{carPrice:{minPrice:1e6,maxPrice:6e6,priceCar:33e5,title:"Стоимость автомобиля",unit:"₽"},firstPay:{minPercent:10,maxPercent:60,priceCar:33e5,title:"Первоначальный взнос",unit:13},periodLeasing:{minPrice:1,maxPrice:60,priceCar:60,title:"Срок лизинга",unit:"мес.",month:"m"},button:{className:"w100 btn-large",loadingProcess:!1}}},computed:{sumOrder(){return parseInt(this.initialPay+this.periodLeasing.priceCar*this.sumMonthPay)},initialPay(){return this.firstPay.unit/100*this.carPrice.priceCar},sumMonthPay(){return parseInt((this.carPrice.priceCar-this.initialPay)*(.035*Math.pow(1.035,this.periodLeasing.priceCar)/(Math.pow(1.035,this.periodLeasing.priceCar)-1)))}},methods:{async request(t){console.log(t),this.button.loadingProcess=!0;const e="https://eoj3r7f3r4ef6v4.m.pipedream.net",r=this.carPrice.priceCar,n=this.initialPay,a=this.periodLeasing.priceCar,i={priceCar:r,initPay:n,month:a};console.log(this.loadingProcess);await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((t=>t.text())).then((()=>setTimeout((()=>{}),1e3))).catch((t=>{console.log(t)})).finally((()=>{console.log("finally"),setTimeout((()=>{this.button.loadingProcess=!1}),500)}))}},watch:{"carPrice.priceCar":function(){this.firstPay.priceCar=this.carPrice.priceCar}}};const G=(0,v.Z)(J,[["render",l]]);var H=G,X={name:"App",components:{FormCalcCar:H}};const Y=(0,v.Z)(X,[["render",i]]);var tt=Y,et=r(9414),rt=r.n(et);const nt=(0,n.ri)(tt);nt.use(rt()),nt.mount("#app")}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,n,a,i){if(!n){var s=1/0;for(l=0;l<t.length;l++){n=t[l][0],a=t[l][1],i=t[l][2];for(var c=!0,o=0;o<n.length;o++)(!1&i||s>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[o])}))?n.splice(o--,1):(c=!1,i<s&&(s=i));if(c){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,a,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,s=n[0],c=n[1],o=n[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(o)var l=o(r)}for(e&&e(n);u<s.length;u++)i=s[u],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},n=self["webpackChunkcalc_test"]=self["webpackChunkcalc_test"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(8272)}));n=r.O(n)})();
//# sourceMappingURL=app.b1259cd9.js.map