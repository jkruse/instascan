"use strict";var t,e=this&&this.__extends||(t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)},function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}),n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(i,o){function a(t){try{c(n.next(t))}catch(t){o(t)}}function s(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):new r(function(e){e(t.value)}).then(a,s)}c((n=n.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var s=require("./ScanProvider"),c=require("events"),f=require("visibilityjs"),d=require("fsm-as-promised"),l=function(t){function i(e){var r=t.call(this)||this;r.video=r.configureVideo(e),r.mirror=!1!==e.mirror,r.backgroundScan=!1!==e.backgroundScan,r._continuous=!1!==e.continuous;var n=e.captureImage||!1,i=e.scanPeriod||500,o=e.refractoryPeriod||5e3;return r._scanProvider=new s.default(r,r.video,n,i,o),r._fsm=r.createStateMachine(),e.camera&&(r.camera=e.camera),f.change(function(t,e){"visible"===e?setTimeout(function(){r._fsm.can("activate")&&r._fsm.activate()},0):!r.backgroundScan&&r._fsm.can("deactivate")&&r._fsm.deactivate()}),r.addListener("active",function(){r.video.classList.remove("inactive"),r.video.classList.add("active")}),r.addListener("inactive",function(){r.video.classList.remove("active"),r.video.classList.add("inactive")}),r.emit("inactive"),r}return e(i,t),i.prototype.scan=function(){return n(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,this._scanProvider.scan()];case 1:return[2,t.sent()]}})})},i.prototype.start=function(){return n(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return this._fsm.can("start")?[4,this._fsm.start()]:[3,2];case 1:return t.sent(),[3,5];case 2:return[4,this._fsm.stop()];case 3:return t.sent(),[4,this._fsm.start()];case 4:t.sent(),t.label=5;case 5:return[2]}})})},i.prototype.stop=function(){return n(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return this._fsm.can("stop")?[4,this._fsm.stop()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},Object.defineProperty(i.prototype,"camera",{get:function(){return this._scanProvider.camera},set:function(t){this._scanProvider.camera&&this._scanProvider.camera.stop(),this._scanProvider.camera=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"captureImage",{get:function(){return this._scanProvider.captureImage},set:function(t){this._scanProvider.captureImage=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scanPeriod",{get:function(){return this._scanProvider.scanPeriod},set:function(t){this._scanProvider.scanPeriod=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"refractoryPeriod",{get:function(){return this._scanProvider.refractoryPeriod},set:function(t){this._scanProvider.refractoryPeriod=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"continuous",{get:function(){return this._continuous},set:function(t){this._continuous=t,t&&"active"===this._fsm.current?this._scanProvider.start():this._scanProvider.stop()},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"mirror",{get:function(){return this._mirror},set:function(t){this._mirror=t,t?(this.video.style.webkitTransform="scaleX(-1)",this.video.style.transform="scaleX(-1)",this.video.style.filter="FlipH"):(this.video.style.webkitTransform=null,this.video.style.transform=null,this.video.style.filter=null)},enumerable:!0,configurable:!0}),i.prototype.enableScan=function(){return n(this,void 0,void 0,function(){var t,e,n=this;return r(this,function(r){switch(r.label){case 0:if(!this.camera)throw new Error("Camera is not defined.");return[4,this.camera.start()];case 1:return t=r.sent(),this.video.srcObject=t,this.video.play(),this._continuous&&(e=function(){n._scanProvider.start(),n.video.removeEventListener("playing",e)},this.video.addEventListener("playing",e)),[2]}})})},i.prototype.disableScan=function(){this.video.src="",this._scanProvider&&this._scanProvider.stop(),this.camera&&this.camera.stop()},i.prototype.configureVideo=function(t){if(t.video&&"VIDEO"!==t.video.tagName)throw new Error("Video must be a <video> element.");var e=t.video||document.createElement("video");return e.setAttribute("autoplay",""),e.setAttribute("playsinline",""),e.setAttribute("muted",""),e},i.prototype.createStateMachine=function(){var t=this;return d.create({initial:"stopped",events:[{name:"start",from:"stopped",to:"started"},{name:"stop",from:["started","active","inactive"],to:"stopped"},{name:"activate",from:["started","inactive"],to:["active","inactive"],condition:function(){return"visible"===f.state()||this.backgroundScan?"active":"inactive"}},{name:"deactivate",from:["started","active"],to:"inactive"}],callbacks:{onenteractive:function(){return n(t,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,this.enableScan()];case 1:return t.sent(),this.emit("active"),[2]}})})},onleaveactive:function(){return n(t,void 0,void 0,function(){return r(this,function(t){return this.disableScan(),this.emit("inactive"),[2]})})},onenteredstarted:function(){return n(t,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return[4,this._fsm.activate()];case 1:return t.sent(),[2]}})})}}})},i}(c.EventEmitter);exports.default=l;