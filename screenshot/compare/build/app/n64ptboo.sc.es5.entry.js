/*! Built with http://stenciljs.com */
var t=this&&this.__awaiter||function(t,e,o,r){return new(o||(o=Promise))(function(n,l){function i(t){try{s(r.next(t))}catch(t){l(t)}}function c(t){try{s(r.throw(t))}catch(t){l(t)}}function s(t){t.done?n(t.value):new o(function(e){e(t.value)}).then(i,c)}s((r=r.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var o,r,n,l,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function c(l){return function(c){return function(l){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,r&&(n=2&l[0]?r.return:l[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,l[1])).done)return n;switch(r=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===l[0]||2===l[0])){i=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){i.label=l[1];break}if(6===l[0]&&i.label<n[1]){i.label=n[1],n=l;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(l);break}n[2]&&i.ops.pop(),i.trys.pop();continue}l=e.call(t,i)}catch(t){l=[6,t],r=0}finally{o=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};App.loadBundle("n64ptboo",["exports"],function(o){var r=window.App.h;function n(t){var e;return t?((e={"ion-color":!0})["ion-color-"+t]=!0,e):null}function l(t,e){var o;return(o={})[e]=!0,o[e+"-"+t]=!!t,o}var i=function(){function o(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}return o.prototype.onNavChanged=function(){this.resize()},o.prototype.componentWillLoad=function(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&"ontouchstart"in this.win)},o.prototype.componentDidLoad=function(){this.resize()},o.prototype.componentDidUnload=function(){this.watchDog&&clearInterval(this.watchDog)},o.prototype.resize=function(){this.fullscreen?this.queue.read(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())},o.prototype.readDimensions=function(){var t=function(t){var e=t.closest("ion-tabs");if(e)return e;var o=t.closest("ion-app,ion-page,.ion-page,page-inner");return o||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)}(this.el),e=Math.max(this.el.offsetTop,0),o=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);(e!==this.cTop||o!==this.cBottom)&&(this.cTop=e,this.cBottom=o,this.el.forceUpdate())},o.prototype.onScroll=function(t){var e=this,o=Date.now(),r=!this.isScrolling;this.lastScroll=o,r&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(function(o){e.queued=!1,e.detail.event=t,function(t,e,o,r){var n=t.currentX,l=t.currentY,i=t.timeStamp,c=e.scrollLeft,s=e.scrollTop;r&&(t.startTimeStamp=o,t.startX=c,t.startY=s,t.velocityX=t.velocityY=0),t.timeStamp=o,t.currentX=t.scrollLeft=c,t.currentY=t.scrollTop=s,t.deltaX=c-t.startX,t.deltaY=s-t.startY;var a=o-i;if(a>0&&a<100){var u=(s-l)/a;t.velocityX=.7*((c-n)/a)+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}}(e.detail,e.scrollEl,o,r),e.ionScroll.emit(e.detail)}))},o.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)},o.prototype.scrollToTop=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,0,t)},o.prototype.scrollToBottom=function(t){return void 0===t&&(t=0),this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)},o.prototype.scrollByPoint=function(t,e,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,o)},o.prototype.scrollToPoint=function(o,r,n){return void 0===n&&(n=0),t(this,void 0,void 0,function(){var t,l,i,c,s,a,u,f,p;return e(this,function(e){return t=this.scrollEl,n<32?(null!=r&&(t.scrollTop=r),null!=o&&(t.scrollLeft=o),[2]):(i=0,c=new Promise(function(t){return l=t}),s=t.scrollTop,a=t.scrollLeft,u=null!=r?r-s:0,f=null!=o?o-a:0,p=function(e){var o=Math.min(1,(e-i)/n)-1,r=Math.pow(o,3)+1;0!==u&&(t.scrollTop=Math.floor(r*u+s)),0!==f&&(t.scrollLeft=Math.floor(r*f+a)),r<1?requestAnimationFrame(p):l()},requestAnimationFrame(function(t){i=t,p(t)}),[2,c])})})},o.prototype.onScrollStart=function(){var t=this;this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(function(){t.lastScroll<Date.now()-120&&t.onScrollEnd()},100)},o.prototype.onScrollEnd=function(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1})},o.prototype.hostData=function(){return{class:Object.assign({},n(this.color),{overscroll:this.forceOverscroll}),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}}},o.prototype.render=function(){var t=this,e=this.scrollX,o=this.scrollY,n=this.forceOverscroll;return this.resize(),[r("div",{class:{"inner-scroll":!0,"scroll-x":e,"scroll-y":o,overscroll:(e||o)&&!!n},ref:function(e){return t.scrollEl=e},onScroll:function(e){return t.onScroll(e)}},r("slot",null)),r("slot",{name:"fixed"})]},Object.defineProperty(o,"is",{get:function(){return"ion-content"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},scrollX:{type:Boolean,attr:"scroll-x"},scrollY:{type:Boolean,attr:"scroll-y"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"events",{get:function(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(o,"listeners",{get:function(){return[{name:"body:ionNavDidChange",method:"onNavChanged"}]},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return".sc-ion-content-h{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0!important;margin:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);contain:layout size style}.ion-color.sc-ion-content-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.outer-content.sc-ion-content-h{--background:var(--ion-background-color-step-50, #f2f2f2)}.inner-scroll.sc-ion-content{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding:calc(var(--padding-top) + var(--offset-top)) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom)) var(--padding-start);position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.scroll-x.sc-ion-content, .scroll-y.sc-ion-content{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y.sc-ion-content{overflow-y:auto}.scroll-x.sc-ion-content{overflow-x:auto}.overscroll.sc-ion-content::after, .overscroll.sc-ion-content::before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll.sc-ion-content::before{bottom:-1px}.overscroll.sc-ion-content::after{top:-1px}"},enumerable:!0,configurable:!0}),o}(),c=function(){function t(){this.translucent=!1}return t.prototype.hostData=function(){var t=l(this.mode,"header"),e=this.translucent?l(this.mode,"header-translucent"):null;return{class:Object.assign({},t,e)}},Object.defineProperty(t,"is",{get:function(){return"ion-header"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-header{display:block;position:relative;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){}return t.prototype.getMode=function(){var t=this.el.closest("ion-toolbar");return t&&t.mode||this.mode},t.prototype.hostData=function(){var t,e=this.getMode();return{class:Object.assign({},n(this.color),(t={},t["title-"+e]=!0,t))}},t.prototype.render=function(){return[r("div",{class:"toolbar-title"},r("slot",null))]},Object.defineProperty(t,"is",{get:function(){return"ion-title"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-title-h{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.title-ios.sc-ion-title-h{left:0;top:0;padding:0 90px;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}.title-md.sc-ion-title-h{padding:0 12px;font-size:20px;font-weight:500}.ion-color.sc-ion-title-h{color:var(--ion-color-base)}.toolbar-title.sc-ion-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(){}return t.prototype.hostData=function(){return{class:n(this.color)}},t.prototype.render=function(){return[r("div",{class:"toolbar-background"}),r("div",{class:"toolbar-container"},r("slot",{name:"start"}),r("slot",{name:"secondary"}),r("div",{class:"toolbar-content"},r("slot",null)),r("slot",{name:"primary"}),r("slot",{name:"end"}))]},Object.defineProperty(t,"is",{get:function(){return"ion-toolbar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-toolbar-ios-h{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box;--background:var(--ion-toolbar-background-color, #f8f8f8);--color:var(--ion-toolbar-text-color, var(--ion-text-color, #000));--border-color:rgba(var(--ion-toolbar-border-color-rgb, 0, 0, 0), 0.2);--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:44px}.ion-color.sc-ion-toolbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-toolbar-ios-h   .toolbar-background.sc-ion-toolbar-ios{background:var(--ion-color-base)}.toolbar-container.sc-ion-toolbar-ios{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background.sc-ion-toolbar-ios{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-content.sc-ion-toolbar-ios{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;min-width:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();o.IonContent=i,o.IonHeader=c,o.IonTitle=s,o.IonToolbar=a,Object.defineProperty(o,"__esModule",{value:!0})});