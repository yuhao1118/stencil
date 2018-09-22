/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{a as e,b as s}from"./chunk-b59b7ee0.js";class n{render(){return t("ion-app",null,t("ion-router",{useHash:!1},t("ion-route",{url:"/",component:"screenshot-lookup"}),t("ion-route",{url:"/:a/:b/",component:"screenshot-compare"})),t("ion-nav",null))}static get is(){return"app-root"}}const i=/(^-?\d*\.?\d*)(.*)/,o=32,r=400,a={translateX:1,translateY:1,translateZ:1,scale:1,scaleX:1,scaleY:1,scaleZ:1,rotate:1,rotateX:1,rotateY:1,rotateZ:1,skewX:1,skewY:1,perspective:1},h=window.requestAnimationFrame||(t=>t(Date.now()));class l{constructor(){this._hasDur=!1,this._hasTweenEffect=!1,this._isAsync=!1,this._isReverse=!1,this._destroyed=!1,this.hasChildren=!1,this.isPlaying=!1,this.hasCompleted=!1}addElement(t){if(t)if(t.length)for(let e=0;e<t.length;e++)this._addEl(t[e]);else this._addEl(t);return this}_addEl(t){1===t.nodeType&&(this._elements=this._elements||[]).push(t)}add(t){return t.parent=this,this.hasChildren=!0,(this._childAnimations=this._childAnimations||[]).push(t),this}getDuration(t){return t&&null!=t.duration?t.duration:null!=this._duration?this._duration:this.parent?this.parent.getDuration():0}isRoot(){return!this.parent}duration(t){return this._duration=t,this}getEasing(){return this._isReverse&&this._reversedEasingName?this._reversedEasingName:null!=this._easingName?this._easingName:this.parent&&this.parent.getEasing()||null}easing(t){return this._easingName=t,this}easingReverse(t){return this._reversedEasingName=t,this}from(t,e){return this._addProp("from",t,e),this}to(t,e,s){const n=this._addProp("to",t,e);return s&&this.afterClearStyles([n.trans?"transform":t]),this}fromTo(t,e,s,n){return this.from(t,e).to(t,s,n)}_getProp(t){if(this._fxProperties)return this._fxProperties.find(e=>e.effectName===t)}_addProp(t,e,s){let n=this._getProp(e);if(!n){const t=1===a[e];n={effectName:e,trans:t,wc:t?"transform":e},(this._fxProperties=this._fxProperties||[]).push(n)}const o={val:s,num:0,effectUnit:""};if(n[t]=o,"string"==typeof s&&s.indexOf(" ")<0){const t=s.match(i);if(t){const e=parseFloat(t[1]);isNaN(e)||(o.num=e),o.effectUnit=t[0]!==t[2]?t[2]:""}}else"number"==typeof s&&(o.num=s);return n}beforeAddClass(t){return(this._beforeAddClasses=this._beforeAddClasses||[]).push(t),this}beforeRemoveClass(t){return(this._beforeRemoveClasses=this._beforeRemoveClasses||[]).push(t),this}beforeStyles(t){return this._beforeStyles=t,this}beforeClearStyles(t){this._beforeStyles=this._beforeStyles||{};for(const e of t)this._beforeStyles[e]="";return this}beforeAddRead(t){return(this._readCallbacks=this._readCallbacks||[]).push(t),this}beforeAddWrite(t){return(this._writeCallbacks=this._writeCallbacks||[]).push(t),this}afterAddClass(t){return(this._afterAddClasses=this._afterAddClasses||[]).push(t),this}afterRemoveClass(t){return(this._afterRemoveClasses=this._afterRemoveClasses||[]).push(t),this}afterStyles(t){return this._afterStyles=t,this}afterClearStyles(t){this._afterStyles=this._afterStyles||{};for(const e of t)this._afterStyles[e]="";return this}play(t){this._destroyed||(this._isAsync=this._hasDuration(t),this._clearAsync(),this._playInit(t),h(()=>{h(()=>{this._playDomInspect(t)})}))}playAsync(t){return new Promise(e=>(this.onFinish(e,{oneTimeCallback:!0,clearExistingCallacks:!0}),this.play(t),this))}playSync(){if(!this._destroyed){const t={duration:0};this._isAsync=!1,this._clearAsync(),this._playInit(t),this._playDomInspect(t)}}_playInit(t){this._hasTweenEffect=!1,this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=this.getDuration(t)>o;const e=this._childAnimations;if(e)for(const s of e)s._playInit(t);this._hasDur&&(this._progress(0),this._willChange(!0))}_playDomInspect(t){this._beforeAnimation();const e=this.getDuration(t);this._isAsync&&this._asyncEnd(e,!0),this._playProgress(t),this._isAsync&&!this._destroyed&&h(()=>{this._playToStep(1)})}_playProgress(t){const e=this._childAnimations;if(e)for(const s of e)s._playProgress(t);this._hasDur?this._setTrans(this.getDuration(t),!1):(this._progress(1),this._setAfterStyles(),this._didFinish(!0))}_playToStep(t){if(!this._destroyed){const e=this._childAnimations;if(e)for(const s of e)s._playToStep(t);this._hasDur&&this._progress(t)}}_asyncEnd(t,e){const s=this;s._unregisterTrnsEnd=function(t,e){let s;const n={passive:!0};function i(){s&&s()}function o(s){t===s.target&&(i(),e(s))}return t&&(t.addEventListener("webkitTransitionEnd",o,n),t.addEventListener("transitionend",o,n),s=(()=>{t.removeEventListener("webkitTransitionEnd",o,n),t.removeEventListener("transitionend",o,n)})),i}(s._transEl(),function(){s._clearAsync(),s._playEnd(),s._didFinishAll(e,!0,!1)}),s._timerId=setTimeout(function(){s._timerId=void 0,s._clearAsync(),s._playEnd(e?1:0),s._didFinishAll(e,!0,!1)},t+r)}_playEnd(t){const e=this._childAnimations;if(e)for(const s of e)s._playEnd(t);this._hasDur&&(null!=t&&(this._setTrans(0,!0),this._progress(t)),this._setAfterStyles(),this._willChange(!1))}_hasDuration(t){if(this.getDuration(t)>o)return!0;const e=this._childAnimations;if(e)for(const s of e)if(s._hasDuration(t))return!0;return!1}_hasDomReads(){if(this._readCallbacks&&this._readCallbacks.length>0)return!0;const t=this._childAnimations;if(t)for(const e of t)if(e._hasDomReads())return!0;return!1}stop(t){void 0===t&&(t=1),this._clearAsync(),this._hasDur=!0,this._playEnd(t)}_clearAsync(){this._unregisterTrnsEnd&&this._unregisterTrnsEnd(),this._timerId&&clearTimeout(this._timerId),this._timerId=this._unregisterTrnsEnd=void 0}_progress(t){let e;const s=this._elements,n=this._fxProperties;if(!s||0===s.length||!n||this._destroyed)return;this._isReverse&&(t=1-t);let i,o=0,r=0,a="";for(o=0;o<n.length;o++)if((i=n[o]).from&&i.to){const n=i.from.num,o=i.to.num,h=n!==o;if(h&&(this._hasTweenEffect=!0),0===t?e=i.from.val:1===t?e=i.to.val:h&&(e=(o-n)*t+n+i.to.effectUnit),null!==e){const t=i.effectName;if(i.trans)a+=t+"("+e+") ";else for(r=0;r<s.length;r++)s[r].style.setProperty(t,e)}}if(a.length)for((!this._isReverse&&1!==t||this._isReverse&&0!==t)&&(a+="translateZ(0px)"),o=0;o<s.length;o++)s[o].style.setProperty("transform",a)}_setTrans(t,e){const s=this._elements;if(!s||0===s.length||!this._fxProperties)return;const n=e?"linear":this.getEasing(),i=t+"ms";for(const{style:e}of s)t>0?(e.transitionDuration=i,n&&(e.transitionTimingFunction=n)):e.transitionDuration="0"}_beforeAnimation(){this._fireBeforeReadFunc(),this._fireBeforeWriteFunc(),this._setBeforeStyles()}_setBeforeStyles(){const t=this._childAnimations;if(t)for(const e of t)e._setBeforeStyles();const e=this._elements;if(!e||0===e.length||this._isReverse)return;const s=this._beforeAddClasses,n=this._beforeRemoveClasses;for(const t of e){const e=t.classList;if(s)for(const t of s)e.add(t);if(n)for(const t of n)e.remove(t);if(this._beforeStyles)for(const[e,s]of Object.entries(this._beforeStyles))t.style.setProperty(e,s)}}_fireBeforeReadFunc(){const t=this._childAnimations;if(t)for(const e of t)e._fireBeforeReadFunc();const e=this._readCallbacks;if(e)for(const t of e)t()}_fireBeforeWriteFunc(){const t=this._childAnimations;if(t)for(const e of t)e._fireBeforeWriteFunc();const e=this._writeCallbacks;if(e)for(const t of e)t()}_setAfterStyles(){const t=this._elements;if(t)for(const e of t){const t=e.classList;if(e.style.transitionDuration=e.style.transitionTimingFunction="",this._isReverse){const s=this._beforeAddClasses;if(s)for(const e of s)t.remove(e);const n=this._beforeRemoveClasses;if(n)for(const e of n)t.add(e);const i=this._beforeStyles;if(i)for(const t of Object.keys(i))e.style.removeProperty(t)}else{const s=this._afterAddClasses;if(s)for(const e of s)t.add(e);const n=this._afterRemoveClasses;if(n)for(const e of n)t.remove(e);const i=this._afterStyles;if(i)for(const[t,s]of Object.entries(i))e.style.setProperty(t,s)}}}_willChange(t){let e;const s=this._fxProperties;let n;if(t&&s){e=[];for(const t of s){const s=t.wc;"webkitTransform"===s?e.push("transform","-webkit-transform"):s&&e.push(s)}n=e.join(",")}else n="";const i=this._elements;if(i)for(const t of i)t.style.setProperty("will-change",n)}progressStart(){this._clearAsync(),this._beforeAnimation(),this._progressStart()}_progressStart(){const t=this._childAnimations;if(t)for(const e of t)e._progressStart();this._setTrans(0,!0),this._willChange(!0)}progressStep(t){t=Math.min(1,Math.max(0,t));const e=this._childAnimations;if(e)for(const s of e)s.progressStep(t);this._progress(t)}progressEnd(t,e,s){this._isReverse&&(e=1-e);const n=t?1:0,i=Math.abs(e-n);void 0===s&&(s=-1),s<0?s=this._duration||0:i<.05&&(s=0),this._isAsync=s>30,this._progressEnd(t,n,s,this._isAsync),this._isAsync&&(this._asyncEnd(s,t),this._destroyed||h(()=>{this._playToStep(n)}))}_progressEnd(t,e,s,n){const i=this._childAnimations;if(i)for(const o of i)o._progressEnd(t,e,s,n);n?(this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=!0,this._willChange(!0),this._setTrans(s,!1)):(this._progress(e),this._willChange(!1),this._setAfterStyles(),this._didFinish(t))}onFinish(t,e){return e&&e.clearExistingCallacks&&(this._onFinishCallbacks=this._onFinishOneTimeCallbacks=void 0),e&&e.oneTimeCallback?(this._onFinishOneTimeCallbacks=this._onFinishOneTimeCallbacks||[],this._onFinishOneTimeCallbacks.push(t)):(this._onFinishCallbacks=this._onFinishCallbacks||[],this._onFinishCallbacks.push(t)),this}_didFinishAll(t,e,s){const n=this._childAnimations;if(n)for(const i of n)i._didFinishAll(t,e,s);(e&&this._isAsync||s&&!this._isAsync)&&this._didFinish(t)}_didFinish(t){if(this.isPlaying=!1,this.hasCompleted=t,this._onFinishCallbacks)for(const t of this._onFinishCallbacks)t(this);if(this._onFinishOneTimeCallbacks){for(const t of this._onFinishOneTimeCallbacks)t(this);this._onFinishOneTimeCallbacks.length=0}}reverse(t){void 0===t&&(t=!0);const e=this._childAnimations;if(e)for(const s of e)s.reverse(t);return this._isReverse=!!t,this}destroy(){this._destroyed=!0;const t=this._childAnimations;if(t)for(const e of t)e.destroy();this._clearAsync(),this._elements&&(this._elements.length=0),this._readCallbacks&&(this._readCallbacks.length=0),this._writeCallbacks&&(this._writeCallbacks.length=0),this.parent=void 0,this._childAnimations&&(this._childAnimations.length=0),this._onFinishCallbacks&&(this._onFinishCallbacks.length=0),this._onFinishOneTimeCallbacks&&(this._onFinishOneTimeCallbacks.length=0)}_transEl(){const t=this._childAnimations;if(t)for(const e of t){const t=e._transEl();if(t)return t}return this._hasTweenEffect&&this._hasDur&&this._elements&&this._elements.length>0?this._elements[0]:null}}class c{create(t,e,s){return t?t(l,e,s):Promise.resolve(new l)}static get is(){return"ion-animation-controller"}static get properties(){return{create:{method:!0}}}}const u={ipad:function(t){return g(t,/iPad/i)},iphone:function(t){return g(t,/iPhone/i)},ios:function(t){return g(t,/iPad|iPhone|iPod/i)},android:function(t){return g(t,/android|sink/i)},phablet:function(t){const e=t.innerWidth,s=t.innerHeight,n=Math.min(e,s),i=Math.max(e,s);return n>390&&n<520&&i>620&&i<800},tablet:function(t){const e=t.innerWidth,s=t.innerHeight,n=Math.min(e,s),i=Math.max(e,s);return n>460&&n<820&&i>780&&i<1400},cordova:m,capacitor:p,electron:function(t){return g(t,/electron/)},pwa:function(t){return t.matchMedia("(display-mode: standalone)").matches},mobile:f,desktop:function(t){return!f(t)},hybrid:function(t){return m(t)||p(t)}};function d(t,e){return function(t){return function(t){t.Ionic=t.Ionic||{};let e=t.Ionic.platforms;if(null==e){e=t.Ionic.platforms=function(t){return Object.keys(u).filter(e=>u[e](t))}(t);const s=t.document.documentElement.classList;e.forEach(t=>s.add(`plt-${t}`))}return e}(t)}(t).includes(e)}function f(t){return function(t,e){return t.matchMedia("(any-pointer:coarse)").matches}(t)}function m(t){return!!(t.cordova||t.phonegap||t.PhoneGap)}function p(t){const e=t.Capacitor;return!(!e||!e.isNative)}function g(t,e){return e.test(t.navigator.userAgent)}class w{componentDidLoad(){setTimeout(()=>{!async function(t){(await import("./tap-click.js")).startTapClick(t.document)}(this.win),async function(t,e){e.getBoolean("inputShims",function(t){return d(t,"ios")&&d(t,"mobile")}(t))&&(await import("./input-shims.js")).startInputShims(t.document,e)}(this.win,this.config),async function(t,e){d(t,"hybrid")&&(await import("./status-tap.js")).startStatusTap(t,e)}(this.win,this.queue)},32)}hostData(){return{class:{"ion-page":!0}}}static get is(){return"ion-app"}static get properties(){return{config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}}static get style(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"}}const _=()=>import("./ios.transition.js"),v=()=>import("./md.transition.js");async function y(t){const e=t.enteringEl,s=t.leavingEl;e&&e.classList.remove("ion-page-invisible"),s&&s.classList.remove("ion-page-invisible")}async function b(t,e){const s=(null!=t.deepWait?t.deepWait:e)?[T(t.enteringEl),T(t.leavingEl)]:[R(t.enteringEl),R(t.leavingEl)];await Promise.all(s),await async function(t,e){t&&await t(e)}(t.viewIsReady,t.enteringEl)}function C(t,e,s){E(t,s,"ionViewWillLeave"),E(t,e,"ionViewWillEnter")}function S(t,e,s){E(t,e,"ionViewDidEnter"),E(t,s,"ionViewDidLeave")}function E(t,e,s){if(e){const n=new(0,t.CustomEvent)(s,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}}function R(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}async function T(t){const e=t;if(e){if(e.componentOnReady&&await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(T))}}function A(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}class k{constructor(t,e){this.component=t,this.params=e,this.state=1}async init(t){if(this.state=2,!this.element){const e=this.component;this.element=await async function(t,e,s,n,i){if(t)return t.attachViewToDom(e,s,i,n);if("string"!=typeof s&&!(s instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof s?e.ownerDocument.createElement(s):s;return n&&n.forEach(t=>o.classList.add(t)),i&&Object.assign(o,i),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o}(this.delegate,t,e,["ion-page","ion-page-invisible"],this.params)}}_destroy(){const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=3}}function P(t,e,s){if(!t)return!1;if(t.component!==e)return!1;const n=t.params,i=null==n,o=null==s;if(n===s)return!0;if(i!==o)return!1;if(i&&o)return!0;const r=Object.keys(n),a=Object.keys(s);if(r.length!==a.length)return!1;for(const t of r)if(n[t]!==s[t])return!1;return!0}function D(t,e){return t?t instanceof k?t:new k(t,e):null}class I{constructor(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.setDisabled(!this.swipeGesture)}rootChanged(){this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await import("./gesture.js")).createGesture({el:this.win.document.body,queue:this.queue,gestureName:"goback-swipe",gesturePriority:30,threshold:10,canStart:this.canStart.bind(this),onStart:this.onStart.bind(this),onMove:this.onMove.bind(this),onEnd:this.onEnd.bind(this)}),this.swipeGestureChanged()}componentDidUnload(){for(const t of this.views)E(this.win,t.element,"ionViewWillUnload"),t._destroy();this.gesture&&this.gesture.destroy(),this.sbTrns&&this.sbTrns.destroy(),this.transInstr.length=this.views.length=0,this.sbTrns=void 0,this.destroyed=!0}push(t,e,s,n){return this.queueTrns({insertStart:-1,insertViews:[{page:t,params:e}],opts:s},n)}insert(t,e,s,n,i){return this.queueTrns({insertStart:t,insertViews:[{page:e,params:s}],opts:n},i)}insertPages(t,e,s,n){return this.queueTrns({insertStart:t,insertViews:e,opts:s},n)}pop(t,e){return this.queueTrns({removeStart:-1,removeCount:1,opts:t},e)}popTo(t,e,s){const n={removeStart:-1,removeCount:-1,opts:e};return"object"==typeof t&&t.component?(n.removeView=t,n.removeStart=1):"number"==typeof t&&(n.removeStart=t+1),this.queueTrns(n,s)}popToRoot(t,e){return this.queueTrns({removeStart:1,removeCount:-1,opts:t},e)}removeIndex(t,e=1,s,n){return this.queueTrns({removeStart:t,removeCount:e,opts:s},n)}setRoot(t,e,s,n){return this.setPages([{page:t,params:e}],s,n)}setPages(t,e,s){return e||(e={}),!0!==e.animated&&(e.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:e},s)}setRouteId(t,e,s){const n=this.getActiveSync();if(P(n,t,e))return Promise.resolve({changed:!1,element:n.element});let i;const o=new Promise(t=>i=t);let r;const a={updateURL:!1,viewIsReady:t=>{let e;const s=new Promise(t=>e=t);return i({changed:!0,element:t,markVisible:async()=>{e(),await r}}),s}};if(0===s)r=this.setRoot(t,e,a);else{const n=this.views.find(s=>P(s,t,e));n?r=this.popTo(n,Object.assign({},a,{direction:"back"})):1===s?r=this.push(t,e,a):-1===s&&(r=this.setRoot(t,e,Object.assign({},a,{direction:"back",animated:!0})))}return o}async getRouteId(){const t=this.getActiveSync();return t?{id:t.element.tagName,params:t.params,element:t.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(t){return Promise.resolve(this.views[t])}canGoBack(t){return Promise.resolve(this.canGoBackSync(t))}getPrevious(t){return Promise.resolve(this.getPreviousSync(t))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(t=this.getActiveSync()){return!(!t||!this.getPrevious(t))}getPreviousSync(t=this.getActiveSync()){if(!t)return;const e=this.views,s=e.indexOf(t);return s>0?e[s-1]:void 0}queueTrns(t,e){if(this.isTransitioning&&t.opts&&!0===t.opts.skipIfBusy)return Promise.resolve(!1);const s=new Promise((e,s)=>{t.resolve=e,t.reject=s});return t.done=e,t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),s}success(t,e){if(null!==this.transInstr){if(e.done&&e.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),e.resolve(t.hasCompleted),!1!==e.opts.updateURL&&this.useRouter){const e=this.win.document.querySelector("ion-router");e&&e.navChanged("back"===t.direction?-1:1)}}else this.fireError("nav controller was destroyed",e)}failed(t,e){null!==this.transInstr?(this.transInstr.length=0,this.fireError(t,e)):this.fireError("nav controller was destroyed",e)}fireError(t,e){e.done&&e.done(!1,!1,t),e.reject&&!this.destroyed?e.reject(t):e.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)}async runTransition(t){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);const e=this.getActiveSync(),s=this.getEnteringView(t,e);if(!e&&!s)throw new Error("no views in the stack to be removed");s&&1===s.state&&await s.init(this.el),this.postViewInit(s,e,t);const n=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&s!==e?await this.transition(s,e,t):{hasCompleted:!0,requiresTransition:!1};this.success(n,t),this.ionNavDidChange.emit()}catch(e){this.failed(e,t)}this.isTransitioning=!1,this.nextTrns()}prepareTI(t){const e=this.views.length;if(t.opts=t.opts||{},void 0===t.opts.delegate&&(t.opts.delegate=this.delegate),null!=t.removeView){const e=this.views.indexOf(t.removeView);if(e<0)throw new Error("removeView was not found");t.removeStart+=e}null!=t.removeStart&&(t.removeStart<0&&(t.removeStart=e-1),t.removeCount<0&&(t.removeCount=e-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===e),t.insertViews&&((t.insertStart<0||t.insertStart>e)&&(t.insertStart=e),t.enteringRequiresTransition=t.insertStart===e);const s=t.insertViews;if(!s)return;const n=s.map(t=>t instanceof k?t:"page"in t?D(t.page,t.params):D(t,void 0)).filter(t=>null!==t);if(0===n.length)throw new Error("invalid views to insert");for(const e of n){e.delegate=t.opts.delegate;const s=e.nav;if(s&&s!==this)throw new Error("inserted view was already inserted");if(3===e.state)throw new Error("inserted view was already destroyed")}t.insertViews=n}getEnteringView(t,e){const s=t.insertViews;if(s)return s[s.length-1];const n=t.removeStart;if(null!=n){const s=this.views,i=n+t.removeCount;for(let t=s.length-1;t>=0;t--){const o=s[t];if((t<n||t>=i)&&o!==e)return o}}}postViewInit(t,e,s){const n=s.opts,i=s.insertViews,o=s.removeStart,r=s.removeCount;let a;if(null!=o&&null!=r){a=[];for(let s=0;s<r;s++){const n=this.views[s+o];n&&n!==t&&n!==e&&a.push(n)}n.direction=n.direction||"back"}if(0===this.views.length+(i?i.length:0)-(r||0))throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(i){let t=s.insertStart;for(const e of i)this.insertViewAt(e,t),t++;s.enteringRequiresTransition&&(n.direction=n.direction||"forward")}if(a&&a.length>0){for(const t of a)E(this.win,t.element,"ionViewWillLeave"),E(this.win,t.element,"ionViewDidLeave"),E(this.win,t.element,"ionViewWillUnload");for(const t of a)this.destroyView(t)}}async transition(t,e,s){this.sbTrns&&(this.sbTrns.destroy(),this.sbTrns=void 0);const n=s.opts,i=n.progressAnimation?t=>{this.sbTrns=t}:void 0,o=t.element,r=e&&e.element,a=this.animated&&this.config.getBoolean("animated",!0),h=Object.assign({mode:this.mode,showGoBack:this.canGoBackSync(t),animationCtrl:this.animationCtrl,queue:this.queue,window:this.win,baseEl:this.el,progressCallback:i,animated:a,enteringEl:o,leavingEl:r},n),{hasCompleted:l}=await function(t){return new Promise((e,s)=>{t.queue.write(()=>{!function(t){const e=t.enteringEl,s=t.leavingEl;(function(e,s,n){e&&(e.style.zIndex="back"===t.direction?"99":"101"),s&&(s.style.zIndex="100")})(e,s),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),A(e,!1),s&&A(s,!1)}(t),async function(t){const e=await async function(t){if(t.leavingEl&&!1!==t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await _()).iosTransitionAnimation:(await v()).mdTransitionAnimation}(t);return e?async function(t,e){await b(e,!0);const s=await e.animationCtrl.create(t,e.baseEl,e);return C(e.window,e.enteringEl,e.leavingEl),await function(t,e){const s=e.progressCallback,n=new Promise(e=>t.onFinish(e));return s?(t.progressStart(),s(t)):t.play(),n}(s,e),s.hasCompleted&&S(e.window,e.enteringEl,e.leavingEl),{hasCompleted:s.hasCompleted,animation:s}}(e,t):async function(t){const e=t.enteringEl,s=t.leavingEl;return await b(t,!1),C(t.window,e,s),S(t.window,e,s),{hasCompleted:!0}}(t)}(t).then(s=>{s.animation&&s.animation.destroy(),y(t),e(s)},e=>{y(t),s(e)})})})}(h);return this.transitionFinish(l,t,e,n)}transitionFinish(t,e,s,n){const i=t?e:s;return i&&this.cleanup(i),{hasCompleted:t,requiresTransition:!0,enteringView:e,leavingView:s,direction:n.direction}}insertViewAt(t,e){const s=this.views,n=s.indexOf(t);n>-1?s.splice(e,0,s.splice(n,1)[0]):(t.nav=this,s.splice(e,0,t))}removeView(t){const e=this.views,s=e.indexOf(t);s>=0&&e.splice(s,1)}destroyView(t){t._destroy(),this.removeView(t)}cleanup(t){if(this.destroyed)return;const e=this.views,s=e.indexOf(t);for(let t=e.length-1;t>=0;t--){const n=e[t],i=n.element;t>s?(E(this.win,i,"ionViewWillUnload"),this.destroyView(n)):t<s&&A(i,!0)}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&this.canGoBackSync()}onStart(){this.isTransitioning||this.transInstr.length>0||this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(t){this.sbTrns&&(this.isTransitioning=!0,this.sbTrns.progressStep(t.deltaX/this.win.innerWidth))}onEnd(t){if(this.sbTrns){const e=this.win.innerWidth,s=t.deltaX/e,n=t.velocityX,i=e/2,o=n>=0&&(n>.2||t.deltaX>i),r=(o?1-s:s)*e;let a=0;if(r>5){const t=r/Math.abs(n);a=Math.min(t,300)}this.sbTrns.progressEnd(o,s,a)}}render(){return["ios"===this.mode&&t("div",{class:"nav-decor"}),t("slot",null)]}static get is(){return"ion-nav"}static get encapsulation(){return"shadow"}static get properties(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}.nav-decor{display:none}:host(.show-decor) .nav-decor{left:0;right:0;top:0;bottom:0;display:block;position:absolute;background:#000;z-index:0;pointer-events:none}"}}class V{constructor(){this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const s=t?Object.keys(t):[],n=e?Object.keys(e):[];if(s.length===n.length){for(const n of s)if(t[n]!==e[n])return void this.onUpdate(t)}else this.onUpdate(t)}componentDidLoad(){this.ionRouteDataChanged.emit()}componentDidUnload(){this.ionRouteDataChanged.emit()}static get is(){return"ion-route"}static get properties(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}}static get events(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]}}function F(t){return"/"+t.filter(t=>t.length>0).join("/")}function x(t){if(null==t)return[""];const e=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e}const O=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function N(t){if(!t)return;if(t.matches(O))return t;return t.querySelector(O)||void 0}function L(t,e){return e.find(e=>(function(t,e){const{from:s,to:n}=e;if(void 0===n)return!1;if(s.length>t.length)return!1;for(let e=0;e<s.length;e++){const n=s[e];if("*"===n)return!0;if(n!==t[e])return!1}return s.length===t.length})(t,e))}function q(t,e){const s=Math.min(t.length,e.length);let n=0;for(;n<s&&t[n].toLowerCase()===e[n].id;n++);return n}function W(t,e){const s=new U(t);let n,i=!1;for(let t=0;t<e.length;t++){const o=e[t].path;if(""===o[0])i=!0;else{for(const e of o){const i=s.next();if(":"===e[0]){if(""===i)return null;((n=n||[])[t]||(n[t]={}))[e.slice(1)]=i}else if(i!==e)return null}i=!1}}return i&&i!==(""===s.next())?null:n?e.map((t,e)=>({id:t.id,path:t.path,params:B(t.params,n[e])})):e}function B(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function j(t){let e=1,s=1;for(const n of t)for(const t of n.path)":"===t[0]?e+=Math.pow(1,s):""!==t&&(e+=Math.pow(2,s)),s++;return e}class U{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}function G(t){return Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=H(t,"to");return{from:x(H(t,"from")),to:null==e?void 0:x(e)}})}function M(t){return function(t){const e=[];for(const s of t)X([],e,s);return e}(function t(e,s=e){return Array.from(s.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(s=>{const n=H(s,"component");if(!n)throw new Error("component missing in ion-route");return{path:x(H(s,"url")),id:n.toLowerCase(),params:s.componentProps,children:t(e,s)}})}(t))}function H(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function X(t,e,s){const n=t.slice();if(n.push({id:s.id,path:s.path,params:s.params}),0!==s.children.length)for(const t of s.children)X(n,e,t);else e.push(n)}class Y{constructor(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){var t;await(t=this.win,N(t.document.body)?Promise.resolve():new Promise(e=>{t.addEventListener("ionNavWillLoad",e,{once:!0})})),await this.onRoutesChanged(),this.win.addEventListener("ionRouteRedirectChanged",s(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",s(this.onRoutesChanged.bind(this),100)),this.onRedirectChanged()}onPopState(){const t=this.historyDirection(),e=this.getPath();return this.writeNavStateRoot(e,t)}push(t,e="forward"){const s=x(t),n=Z[e];return this.setPath(s,n),this.writeNavStateRoot(s,n)}printDebug(){this.getPath(),function(t){console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const s=e.map(t=>t.id);F(t),s.join(", ")}console.groupEnd()}(M(this.el)),function(t){console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&(F(e.from),F(e.to));console.groupEnd()}(G(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:s}=await async function(t){const e=[];let s,n=t;for(;s=N(n);){const t=await s.getRouteId();if(!t)break;n=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:s}}(this.win.document.body),n=function(t,e){let s=null,n=0;const i=t.map(t=>t.id);for(const t of e){const e=q(i,t);e>n&&(s=t,n=e)}return s?s.map((e,s)=>({id:e.id,path:e.path,params:B(e.params,t[s]&&t[s].params)})):null}(e,M(this.el));if(!n)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const i=function(t){const e=[];for(const s of t)for(const t of s.path)if(":"===t[0]){const n=s.params&&s.params[t.slice(1)];if(!n)return null;e.push(n)}else""!==t&&e.push(t);return e}(n);return i?(this.setPath(i,t),await this.safeWriteNavState(s,n,0,i,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&L(t,G(this.el))&&this.writeNavStateRoot(t,0)}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),0)}historyDirection(){null===this.win.history.state&&(this.state++,this.win.history.replaceState(this.state,this.win.document.title,this.win.document.location.href));const t=this.win.history.state,e=this.lastState;return this.lastState=t,t>e?1:t<e?-1:0}async writeNavStateRoot(t,e){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const s=L(t,G(this.el));let n=null;s&&(this.setPath(s.to,e),n=s.from,t=s.to);const i=function(t,e){let s=null,n=0;for(const i of e){const e=W(t,i);if(null!==e){const t=j(e);t>n&&(n=t,s=e)}}return s}(t,M(this.el));return i?this.safeWriteNavState(this.win.document.body,i,e,t,n):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,s,n,i,o=0){const r=await this.lock();let a=!1;try{a=await this.writeNavState(t,e,s,n,i,o)}catch(t){console.error(t)}return r(),a}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),t&&await t,e}async writeNavState(t,e,s,n,i,o=0){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const r=this.routeChangeEvent(n,i);r&&this.ionRouteWillChange.emit(r);const a=await async function t(e,s,n,i,o=!1){try{const r=N(e);if(i>=s.length||!r)return o;await r.componentOnReady();const a=s[i],h=await r.setRouteId(a.id,a.params,n);return h.changed&&(n=0,o=!0),o=await t(h.element,s,n,i+1,o),h.markVisible&&await h.markVisible(),o}catch(t){return console.error(t),!1}}(t,e,s,o);return this.busy=!1,r&&this.ionRouteDidChange.emit(r),a}setPath(t,e){this.state++,function(t,e,s,n,i,o){let r=F([...x(e),...n]);s&&(r="#"+r),1===i?t.pushState(o,"",r):t.replaceState(o,"",r)}(this.win.history,this.root,this.useHash,t,e,this.state)}getPath(){return function(t,e,s){let n=t.pathname;if(s){const e=t.hash;n="#"===e[0]?e.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let s=0;s<t.length;s++)if(t[s].length>0&&t[s]!==e[s])return null;return e.length===t.length?[""]:e.slice(t.length)}(x(e),x(n))}(this.win.location,this.root,this.useHash)}routeChangeEvent(t,e){const s=this.previousPath,n=F(t);return this.previousPath=n,n===s?null:{from:s,redirectedFrom:e?F(e):null,to:n}}static get is(){return"ion-router"}static get properties(){return{config:{context:"config"},el:{elementRef:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}}static get events(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"window:popstate",method:"onPopState"}]}}const Z={back:-1,root:0,forward:1};export{n as AppRoot,c as IonAnimationController,w as IonApp,I as IonNav,V as IonRoute,Y as IonRouter};