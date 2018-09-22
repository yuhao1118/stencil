/*! Built with http://stenciljs.com */
const{h:t}=window.App;class e{constructor(t,e,s,r,i){this.id=e,this.name=s,this.priority=r,this.disableScroll=i,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class s{constructor(t,e,s,r){this.id=t,this.disable=s,this.disableScroll=r,this.ctrl=e}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const r=new class{constructor(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set,this.capturedId=null}createGesture(t){return new e(this,this.newID(),t.name,t.priority?t.priority:0,!!t.disableScroll)}createBlocker(t={}){return new s(this.newID(),this,t.disable,!!t.disableScroll)}start(t,e,s){return this.canStart(t)?(this.requestedStart.set(e,s),!0):(this.requestedStart.delete(e),!1)}capture(t,e,s){if(!this.start(t,e,s))return!1;const r=this.requestedStart;let i=-1e4;if(r.forEach(t=>{i=Math.max(i,t)}),i===s){this.capturedId=e,r.clear();const s=new CustomEvent("ionGestureCaptured",{detail:t});return this.doc.body.dispatchEvent(s),!0}return r.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId&&t===this.capturedId&&(this.capturedId=null)}disableGesture(t,e){let s=this.disabledGestures.get(t);s||(s=new Set,this.disabledGestures.set(t,s)),s.add(e)}enableGesture(t,e){const s=this.disabledGestures.get(t);s&&s.delete(e)}disableScroll(t){this.disabledScroll.add(t)}enableScroll(t){this.disabledScroll.delete(t)}canStart(t){return!this.capturedId&&!this.isDisabled(t)}isCaptured(){return!!this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}}(document);let i;function n(t,e,s,r){const n=function(t){if(void 0===i)try{const e=Object.defineProperty({},"passive",{get:()=>{i=!0}});t.addEventListener("optsTest",()=>{},e)}catch(t){i=!1}return!!i}(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;let c,a;return t.__zone_symbol__addEventListener?(c="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(c="addEventListener",a="removeEventListener"),t[c](e,s,n),()=>{t[a](e,s,n)}}const c=2e3;function a(t){return t instanceof Document?t:t.ownerDocument}function l(t){const e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),s=e.canStart,i=e.onWillStart,l=e.onStart,h=e.onEnd,p=e.notCaptured,b=e.onMove,f=e.threshold,S=e.queue,m={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},v=function(t,e,s,r,i){let l,o,d,u,h,p,b,f=0;function S(r){f=Date.now()+c,e(r)&&(!o&&s&&(o=n(t,"touchmove",s,i)),d||(d=n(t,"touchend",v,i)),u||(u=n(t,"touchcancel",v,i)))}function m(r){f>Date.now()||e(r)&&(!p&&s&&(p=n(a(t),"mousemove",s,i)),b||(b=n(a(t),"mouseup",y,i)))}function v(t){X(),r&&r(t)}function y(t){Y(),r&&r(t)}function X(){o&&o(),d&&d(),u&&u(),o=d=u=void 0}function Y(){p&&p(),b&&b(),p=b=void 0}function g(){X(),Y()}function w(e){e?(l&&l(),h&&h(),l=h=void 0,g()):(l||(l=n(t,"touchstart",S,i)),h||(h=n(t,"mousedown",m,i)))}return{setDisabled:w,stop:g,destroy:function(){w(!0),r=s=e=void 0}}}(e.el,function(t){const e=u(t);return!(g||!w)&&(d(t,m),m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp=e,m.velocityX=m.velocityY=m.deltaX=m.deltaY=0,m.event=t,(!s||!1!==s(m))&&(X.release(),!!X.start()&&(g=!0,0===f?G():(y.start(m.startX,m.startY),!0))))},function(t){Y?!D&&w&&(D=!0,o(m,t),S.write(_)):(o(m,t),y.detect(m.currentX,m.currentY)&&(y.isGesture()&&G()||(E(),v.stop(),p&&p(m))))},function(t){const e=Y,s=w;E(),s&&(o(m,t),e?h&&h(m):p&&p(m))},{capture:!1}),y=function(t,s,r){const i=e.maxAngle*(Math.PI/180),n="x"===e.direction,c=Math.cos(i),a=s*s;let l=0,o=0,d=!1,u=0;return{start(t,e){l=t,o=e,u=0,d=!0},detect(t,e){if(!d)return!1;const s=t-l,r=e-o,i=s*s+r*r;if(i<a)return!1;const h=Math.sqrt(i),p=(n?s:r)/h;return u=p>c?1:p<-c?-1:0,d=!1,!0},isGesture:()=>0!==u,getDirection:()=>u}}(0,e.threshold),X=r.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll});let Y=!1,g=!1,w=!0,D=!1;function _(){Y&&(D=!1,b&&b(m))}function G(){return!(X&&!X.capture()||(Y=!0,w=!1,m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp,i?i(m).then(I):I(),0))}function I(){l&&l(m),w=!0}function E(){Y=!1,g=!1,D=!1,w=!0,X.release()}return{setDisabled(t){v.setDisabled(t)},destroy(){X.destroy(),v.destroy()}}}function o(t,e){const s=t.currentX,r=t.currentY,i=t.timeStamp;d(e,t);const n=t.currentX,c=t.currentY,a=(t.timeStamp=u(e))-i;if(a>0&&a<100){const e=(c-r)/a;t.velocityX=(n-s)/a*.7+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}t.deltaX=n-t.startX,t.deltaY=c-t.startY,t.event=e}function d(t,e){let s=0,r=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];s=t.clientX,r=t.clientY}else void 0!==t.pageX&&(s=t.pageX,r=t.pageY)}e.currentX=s,e.currentY=r}function u(t){return t.timeStamp||Date.now()}export{l as createGesture};