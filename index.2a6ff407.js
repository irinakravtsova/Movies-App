let e,t,n,r;var i,s,a,o,l,h,u,c,d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},f={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};const p=new Uint8Array(16),g=[];for(let e=0;e<256;++e)g.push((e+256).toString(16).slice(1));var m=function(t,n,r){if(f.randomUUID&&!n&&!t)return f.randomUUID();let i=(t=t||{}).random||(t.rng||function(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(p)})();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n){r=r||0;for(let e=0;e<16;++e)n[r+e]=i[e];return n}return function(e,t=0){return g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]}(i)},y={},v=y={};function w(){throw Error("setTimeout has not been defined")}function E(){throw Error("clearTimeout has not been defined")}function _(e){if(eK===setTimeout)return setTimeout(e,0);if((eK===w||!eK)&&setTimeout)return eK=setTimeout,setTimeout(e,0);try{return eK(e,0)}catch(t){try{return eK.call(null,e,0)}catch(t){return eK.call(this,e,0)}}}!function(){try{eK="function"==typeof setTimeout?setTimeout:w}catch(e){eK=w}try{eG="function"==typeof clearTimeout?clearTimeout:E}catch(e){eG=E}}();var b=[],T=!1,I=-1;function S(){T&&eH&&(T=!1,eH.length?b=eH.concat(b):I=-1,b.length&&C())}function C(){if(!T){var e=_(S);T=!0;for(var t=b.length;t;){for(eH=b,b=[];++I<t;)eH&&eH[I].run();I=-1,t=b.length}eH=null,T=!1,function(e){if(eG===clearTimeout)return clearTimeout(e);if((eG===E||!eG)&&clearTimeout)return eG=clearTimeout,clearTimeout(e);try{eG(e)}catch(t){try{return eG.call(null,e)}catch(t){return eG.call(this,e)}}}(e)}}function A(e,t){this.fun=e,this.array=t}function D(){}v.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];b.push(new A(e,t)),1!==b.length||T||_(C)},A.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=D,v.addListener=D,v.once=D,v.off=D,v.removeListener=D,v.removeAllListeners=D,v.emit=D,v.prependListener=D,v.prependOnceListener=D,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:(i<2048?t[n++]=i>>6|192:((64512&i)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128):t[n++]=i>>12|224,t[n++]=i>>6&63|128),t[n++]=63&i|128)}return t},k=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},R={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,h=i>>2,u=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),r.push(n[h],n[u],n[c],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(N(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):k(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,a=++t<e.length?n[e.charAt(t)]:64,o=++t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==o)throw new x;let l=i<<2|s>>4;if(r.push(l),64!==a){let e=s<<4&240|a>>2;if(r.push(e),64!==o){let e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class x extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const L=function(e){let t=N(e);return R.encodeByteArray(t,!0)},O=function(e){return L(e).replace(/\./g,"")},M=function(e){try{return R.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},P=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==d)return d;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,V=()=>{if(void 0===y||void 0===y.env)return;let e=void 0;if(e)return JSON.parse(e)},F=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&M(e[1]);return t&&JSON.parse(t)},U=()=>{try{return P()||V()||F()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},B=e=>{var t,n;return null===(n=null===(t=U())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},j=e=>{let t=B(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},q=()=>{var e;return null===(e=U())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function K(){try{return"object"==typeof indexedDB}catch(e){return!1}}class G extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,G.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(Q,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new G(r,a,n)}}const Q=/\{\$([^}]+)}/g;function W(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let n=e[i],s=t[i];if(X(n)&&X(s)){if(!W(n,s))return!1}else if(n!==s)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function X(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){return e&&e._delegate?e._delegate:e}class J{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new $;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:Z})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=Z){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=Z){return this.instances.has(e)}getOptions(e=Z){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(r);return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===Z?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=Z){return this.component?this.component.multipleInstances?e:Z:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new ee(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=[];(ez=eQ||(eQ={}))[ez.DEBUG=0]="DEBUG",ez[ez.VERBOSE=1]="VERBOSE",ez[ez.INFO=2]="INFO",ez[ez.WARN=3]="WARN",ez[ez.ERROR=4]="ERROR",ez[ez.SILENT=5]="SILENT";const er={debug:eQ.DEBUG,verbose:eQ.VERBOSE,info:eQ.INFO,warn:eQ.WARN,error:eQ.ERROR,silent:eQ.SILENT},ei=eQ.INFO,es={[eQ.DEBUG]:"log",[eQ.VERBOSE]:"log",[eQ.INFO]:"info",[eQ.WARN]:"warn",[eQ.ERROR]:"error"},ea=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=es[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class eo{constructor(e){this.name=e,this._logLevel=ei,this._logHandler=ea,this._userLogHandler=null,en.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in eQ))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?er[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,eQ.DEBUG,...e),this._logHandler(this,eQ.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,eQ.VERBOSE,...e),this._logHandler(this,eQ.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,eQ.INFO,...e),this._logHandler(this,eQ.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,eQ.WARN,...e),this._logHandler(this,eQ.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,eQ.ERROR,...e),this._logHandler(this,eQ.ERROR,...e)}}const el=(e,t)=>t.some(t=>e instanceof t),eh=new WeakMap,eu=new WeakMap,ec=new WeakMap,ed=new WeakMap,ef=new WeakMap;let ep={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return eu.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ec.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return eg(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eg(e){var r;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(eg(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eh.set(t,e)}).catch(()=>{}),ef.set(t,e),t}(e);if(ed.has(e))return ed.get(e);let i="function"==typeof(r=e)?r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(r)?function(...e){return r.apply(em(this),e),eg(eh.get(this))}:function(...e){return eg(r.apply(em(this),e))}:function(e,...t){let n=r.call(em(this),e,...t);return ec.set(n,e.sort?e.sort():[e]),eg(n)}:(r instanceof IDBTransaction&&function(e){if(eu.has(e))return;let t=new Promise((t,n)=>{let r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});eu.set(e,t)}(r),el(r,t||(t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(r,ep):r;return i!==e&&(ed.set(e,i),ef.set(i,e)),i}const em=e=>ef.get(e),ey=["get","getKey","getAll","getAllKeys","count"],ev=["put","add","delete","clear"],ew=new Map;function eE(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ew.get(t))return ew.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=ev.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ey.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return ew.set(t,s),s}ep={...r=ep,get:(e,t,n)=>eE(e,t)||r.get(e,t,n),has:(e,t)=>!!eE(e,t)||r.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eb="@firebase/app",eT="0.9.29",eI=new eo("@firebase/app"),eS="[DEFAULT]",eC={[eb]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eA=new Map,eD=new Map;function eN(e){let t=e.name;if(eD.has(t))return eI.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(eD.set(t,e),eA.values()))!function(e,t){try{e.container.addComponent(t)}catch(n){eI.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}const ek=new H("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new J("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ek.create("app-deleted",{appName:this._name})}}function ex(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:eS,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw ek.create("bad-app-name",{appName:String(i)});if(n||(n=q()),!n)throw ek.create("no-options");let s=eA.get(i);if(s){if(W(n,s.options)&&W(r,s.config))return s;throw ek.create("duplicate-app",{appName:i})}let a=new et(i);for(let e of eD.values())a.addComponent(e);let o=new eR(n,r,a);return eA.set(i,o),o}function eL(e,t,n){var r;let i=null!==(r=eC[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eI.warn(e.join(" "));return}eN(new J(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const eO="firebase-heartbeat-store";let eM=null;function eP(){return eM||(eM=(function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=eg(a);return r&&a.addEventListener("upgradeneeded",e=>{r(eg(a.result),e.oldVersion,e.newVersion,eg(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(eO)}catch(e){console.warn(e)}}}).catch(e=>{throw ek.create("idb-open",{originalErrorMessage:e.message})})),eM}async function eV(e){try{let t=(await eP()).transaction(eO),n=await t.objectStore(eO).get(eU(e));return await t.done,n}catch(e){if(e instanceof G)eI.warn(e.message);else{let t=ek.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eI.warn(t.message)}}}async function eF(e,t){try{let n=(await eP()).transaction(eO,"readwrite"),r=n.objectStore(eO);await r.put(t,eU(e)),await n.done}catch(e){if(e instanceof G)eI.warn(e.message);else{let t=ek.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eI.warn(t.message)}}}function eU(e){return`${e.name}!${e.options.appId}`}class eB{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eq(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ej();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=ej(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){let n=[],r=e.slice();for(let i of e){let e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),e$(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),e$(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=O(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ej(){return new Date().toISOString().substring(0,10)}class eq{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!K()&&new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await eV(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return eF(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return eF(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function e$(e){return O(JSON.stringify({version:2,heartbeats:e})).length}eN(new J("platform-logger",e=>new e_(e),"PRIVATE")),eN(new J("heartbeat",e=>new eB(e),"PRIVATE")),eL(eb,eT,""),eL(eb,eT,"esm2017"),eL("fire-js",""),eL("firebase","10.9.0","app");var ez,eK,eG,eH,eQ,eW,eX={},eY=eY||{},eJ=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==d?d:"undefined"!=typeof self?self:{})||self;function eZ(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function e0(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function e1(e,t,n){return e.call.apply(e.bind,arguments)}function e2(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function e9(e,t,n){return(e9=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?e1:e2).apply(null,arguments)}function e4(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function e6(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function e5(){this.s=this.s,this.o=this.o}e5.prototype.s=!1,e5.prototype.sa=function(){this.s||(this.s=!0,this.N())},e5.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const e3=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function e7(e){let t=e.length;if(0<t){let n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function e8(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(eZ(n)){let t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function te(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var tt=function(){if(!eJ.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};eJ.addEventListener("test",e,t),eJ.removeEventListener("test",e,t)}catch(e){}return e}();function tn(e){return/^[\s\xa0]*$/.test(e)}function tr(){var e=eJ.navigator;return e&&(e=e.userAgent)?e:""}function ti(e){return -1!=tr().indexOf(e)}function ts(e){return ts[" "](e),e}ts[" "]=function(){};var ta=ti("Opera"),to=ti("Trident")||ti("MSIE"),tl=ti("Edge"),th=tl||to,tu=ti("Gecko")&&!(-1!=tr().toLowerCase().indexOf("webkit")&&!ti("Edge"))&&!(ti("Trident")||ti("MSIE"))&&!ti("Edge"),tc=-1!=tr().toLowerCase().indexOf("webkit")&&!ti("Edge");function td(){var e=eJ.document;return e?e.documentMode:void 0}e:{var tf,tp="",tg=(tf=tr(),tu?/rv:([^\);]+)(\)|;)/.exec(tf):tl?/Edge\/([\d\.]+)/.exec(tf):to?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(tf):tc?/WebKit\/(\S+)/.exec(tf):ta?/(?:Version)[ \/]?(\S+)/.exec(tf):void 0);if(tg&&(tp=tg?tg[1]:""),to){var tm=td();if(null!=tm&&tm>parseFloat(tp)){s=String(tm);break e}}s=tp}var ty=eJ.document&&to&&(td()||parseInt(s,10))||void 0;function tv(e,t){if(te.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(tu){e:{try{ts(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tw[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&tv.$.h.call(this)}}e6(tv,te);var tw={2:"touch",3:"pen",4:"mouse"};tv.prototype.h=function(){tv.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var tE="closure_listenable_"+(1e6*Math.random()|0),t_=0;function tb(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++t_,this.fa=this.ia=!1}function tT(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function tI(e,t,n){for(let r in e)t.call(n,e[r],r,e)}function tS(e){let t={};for(let n in e)t[n]=e[n];return t}const tC="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tA(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t])e[n]=r[n];for(let t=0;t<tC.length;t++)n=tC[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function tD(e){this.src=e,this.g={},this.h=0}function tN(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=e3(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(tT(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function tk(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!n==s.capture&&s.la==r)return i}return -1}tD.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=tk(e,t,r,i);return -1<a?(t=e[a],n||(t.ia=!1)):((t=new tb(t,this.src,s,!!r,i)).ia=n,e.push(t)),t};var tR="closure_lm_"+(1e6*Math.random()|0),tx={};function tL(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=e0(i)?!!i.capture:!!i,o=tV(e);if(o||(e[tR]=o=new tD(e)),(n=o.add(t,n,r,a,s)).proxy)return n;if(r=function e(t){return tP.call(e.src,e.listener,t)},n.proxy=r,r.src=e,r.listener=n,e.addEventListener)tt||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(tM(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tO(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[tE])tN(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(tM(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=tV(t))?(tN(n,e),0==n.h&&(n.src=null,t[tR]=null)):tT(e)}}}function tM(e){return e in tx?tx[e]:tx[e]="on"+e}function tP(e,t){if(e.fa)e=!0;else{t=new tv(t,this);var n=e.listener,r=e.la||e.src;e.ia&&tO(e),e=n.call(r,t)}return e}function tV(e){return(e=e[tR])instanceof tD?e:null}var tF="__closure_events_fn_"+(1e9*Math.random()>>>0);function tU(e){return"function"==typeof e?e:(e[tF]||(e[tF]=function(t){return e.handleEvent(t)}),e[tF])}function tB(){e5.call(this),this.i=new tD(this),this.S=this,this.J=null}function tj(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"==typeof t)t=new te(t,e);else if(t instanceof te)t.target=t.target||e;else{var i=t;tA(t=new te(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=tq(a,r,!0,t)&&i}if(i=tq(a=t.g=e,r,!0,t)&&i,i=tq(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=tq(a=t.g=n[s],r,!1,t)&&i}function tq(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&tN(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}e6(tB,e5),tB.prototype[tE]=!0,tB.prototype.removeEventListener=function(e,t,n,r){!function e(t,n,r,i,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);else(i=e0(i)?!!i.capture:!!i,r=tU(r),t&&t[tE])?(t=t.i,(n=String(n).toString())in t.g&&-1<(r=tk(a=t.g[n],r,i,s))&&(tT(a[r]),Array.prototype.splice.call(a,r,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=tV(t))&&(n=t.g[n.toString()],t=-1,n&&(t=tk(n,r,i,s)),(r=-1<t?n[t]:null)&&tO(r))}(this,e,t,n,r)},tB.prototype.N=function(){if(tB.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)tT(n[r]);delete t.g[e],t.h--}}this.J=null},tB.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},tB.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var t$=eJ.JSON.stringify,tz=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new tK,e=>e.reset());class tK{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let tG,tH=!1,tQ=new class{constructor(){this.h=this.g=null}add(e,t){let n=tz.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},tW=()=>{let e=eJ.Promise.resolve(void 0);tG=()=>{e.then(tX)}};var tX=()=>{let e;for(var t;e=null,tQ.g&&(e=tQ.g,tQ.g=tQ.g.next,tQ.g||(tQ.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){eJ.setTimeout(()=>{throw e},0)}(e)}tz.j(t),100>tz.h&&(tz.h++,t.next=tz.g,tz.g=t)}tH=!1};function tY(e,t){tB.call(this),this.h=e||1,this.g=t||eJ,this.j=e9(this.qb,this),this.l=Date.now()}function tJ(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function tZ(e,t,n){if("function"==typeof e)n&&(e=e9(e,n));else if(e&&"function"==typeof e.handleEvent)e=e9(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:eJ.setTimeout(e,t||0)}e6(tY,tB),(eW=tY.prototype).ga=!1,eW.T=null,eW.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tj(this,"tick"),this.ga&&(tJ(this),this.start()))}},eW.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},eW.N=function(){tY.$.N.call(this),tJ(this),delete this.g};class t0 extends e5{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=tZ(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(eJ.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function t1(e){e5.call(this),this.h=e,this.g={}}e6(t1,e5);var t2=[];function t9(e,t,n,r){Array.isArray(n)||(n&&(t2[0]=n.toString()),n=t2);for(var i=0;i<n.length;i++){var s=function e(t,n,r,i,s){if(i&&i.once)return function e(t,n,r,i,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=tU(r),t&&t[tE]?t.P(n,r,e0(i)?!!i.capture:!!i,s):tL(t,n,r,!0,i,s)}(t,n,r,i,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],r,i,s);return null}return r=tU(r),t&&t[tE]?t.O(n,r,e0(i)?!!i.capture:!!i,s):tL(t,n,r,!1,i,s)}(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function t4(e){tI(e.g,function(e,t){this.g.hasOwnProperty(t)&&tO(e)},e),e.g={}}function t6(){this.g=!0}function t5(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return t$(n)}catch(e){return t}}(e,n)+(r?" "+r:"")})}t1.prototype.N=function(){t1.$.N.call(this),t4(this)},t1.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},t6.prototype.Ea=function(){this.g=!1},t6.prototype.info=function(){};var t3={},t7=null;function t8(){return t7=t7||new tB}function ne(e){te.call(this,t3.Ta,e)}function nt(e){let t=t8();tj(t,new ne(t))}function nn(e,t){te.call(this,t3.STAT_EVENT,e),this.stat=t}function nr(e){let t=t8();tj(t,new nn(t,e))}function ni(e,t){te.call(this,t3.Ua,e),this.size=t}function ns(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return eJ.setTimeout(function(){e()},t)}t3.Ta="serverreachability",e6(ne,te),t3.STAT_EVENT="statevent",e6(nn,te),t3.Ua="timingevent",e6(ni,te);var na={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},no={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function nl(){}function nh(e){return e.h||(e.h=e.i())}function nu(){}nl.prototype.h=null;var nc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function nd(){te.call(this,"d")}function nf(){te.call(this,"c")}function np(){}function ng(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new t1(this),this.P=ny,e=th?125:void 0,this.V=new tY(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nm}function nm(){this.i=null,this.g="",this.h=!1}e6(nd,te),e6(nf,te),e6(np,nl),np.prototype.g=function(){return new XMLHttpRequest},np.prototype.i=function(){return{}},o=new np;var ny=45e3,nv={},nw={};function nE(e,t,n){e.L=1,e.A=nF(nL(t)),e.u=n,e.S=!0,n_(e,null)}function n_(e,t){e.G=Date.now(),nI(e),e.B=nL(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),nY(n.i,"t",r),e.o=0,n=e.l.J,e.h=new nm,e.g=rB(e.l,n?t:null,!e.u),0<e.O&&(e.M=new t0(e9(e.Pa,e,e.g),e.O)),t9(e.U,e.g,"readystatechange",e.nb),t=e.I?tS(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),nt(),function(e,t,n,r,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");a=2<=c.length&&"type"==c[1]?a+(u+"=")+h+"&":a+(u+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.v,e.B,e.m,e.W,e.u)}function nb(e){return!!e.g&&"GET"==e.v&&2!=e.L&&e.l.Ha}function nT(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if((i=function(e,t){var n=e.o,r=t.indexOf("\n",n);return -1==r?nw:isNaN(n=Number(t.substring(n,r)))?nv:(r+=1)+n>t.length?nw:(t=t.slice(r,r+n),e.o=r+n,t)}(e,n))==nw){4==t&&(e.s=4,nr(14),r=!1),t5(e.j,e.m,null,"[Incomplete Response]");break}else if(i==nv){e.s=4,nr(15),t5(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else t5(e.j,e.m,i,null),nN(e,i);nb(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,nr(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),rx(t),t.M=!0,nr(11))):(t5(e.j,e.m,n,"[Invalid Chunked Response]"),nD(e),nA(e))}function nI(e){e.Y=Date.now()+e.P,nS(e,e.P)}function nS(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=ns(e9(e.lb,e),t)}function nC(e){e.C&&(eJ.clearTimeout(e.C),e.C=null)}function nA(e){0==e.l.H||e.J||rM(e.l,e)}function nD(e){nC(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,tJ(e.V),t4(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function nN(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||n4(n.i,e))){if(!e.K&&n4(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(n.g.G+3e3<e.G)rO(n),rI(n);else break e}rR(n),nr(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=ns(e9(n.ib,n),6e3));if(1>=n9(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else rV(n,11)}else if((e.K||n.g==e)&&rO(n),!tn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let t=o[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));let i=o[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(n6(s,s.h),s.h=null))}if(r.F){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,nV(r.I,r.F,e))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),(r=n).wa=rU(r,r.J?r.pa:null,r.Y),e.K){n5(r.i,e);var a=r.L;a&&e.setTimeout(a),e.C&&(nC(e),nI(e)),r.g=e}else rk(r);0<n.j.length&&rC(n)}else"stop"!=o[0]&&"close"!=o[0]||rV(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?rV(n,7):rT(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}nt(4)}catch(e){}}function nk(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(eZ(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(eZ(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let r in t=[],n=0,e)t[n++]=r;return t}}}(e),r=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(eZ(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(eW=ng.prototype).setTimeout=function(e){this.P=e},eW.nb=function(e){e=e.target;let t=this.M;t&&3==ry(e)?t.l():this.Pa(e)},eW.Pa=function(e){try{if(e==this.g)e:{let u=ry(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>u)&&(3!=u||th||this.g&&(this.h.h||this.g.ja()||rv(this.g)))){this.J||4!=u||7==t||(8==t||0>=c?nt(3):nt(2)),nC(this);var n=this.g.da();this.ca=n;t:if(nb(this)){var r=rv(this.g);e="";var i=r.length,s=4==ry(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){nD(this),nA(this);var a="";break t}this.h.i=new eJ.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tn(o)){var h=o;break t}}h=null}if(n=h)t5(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nN(this,n);else{this.i=!1,this.s=3,nr(12),nD(this),nA(this);break e}}this.S?(nT(this,u,a),th&&this.i&&3==u&&(t9(this.U,this.V,"tick",this.mb),this.V.start())):(t5(this.j,this.m,a,null),nN(this,a)),4==u&&nD(this),this.i&&!this.J&&(4==u?rM(this.l,this):(this.i=!1,nI(this)))}else(function(e){let t={};e=(e.g&&2<=ry(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(tn(e[r]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,nr(12)):(this.s=0,nr(13)),nD(this),nA(this)}}}catch(e){}finally{}},eW.mb=function(){if(this.g){var e=ry(this.g),t=this.g.ja();this.o<t.length&&(nC(this),nT(this,e,t),this.i&&4!=e&&nI(this))}},eW.cancel=function(){this.J=!0,nD(this)},eW.lb=function(){this.C=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.B),2!=this.L&&(nt(),nr(17)),nD(this),this.s=2,nA(this)):nS(this,this.Y-e)};var nR=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nx(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof nx){this.h=e.h,nO(this,e.j),this.s=e.s,this.g=e.g,nM(this,e.m),this.l=e.l;var t=e.i,n=new nH;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),nP(this,n),this.o=e.o}else e&&(t=String(e).match(nR))?(this.h=!1,nO(this,t[1]||"",!0),this.s=nU(t[2]||""),this.g=nU(t[3]||"",!0),nM(this,t[4]),this.l=nU(t[5]||"",!0),nP(this,t[6]||"",!0),this.o=nU(t[7]||"")):(this.h=!1,this.i=new nH(null,this.h))}function nL(e){return new nx(e)}function nO(e,t,n){e.j=n?nU(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nM(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function nP(e,t,n){var r,i;t instanceof nH?(e.i=t,r=e.i,(i=e.h)&&!r.j&&(nQ(r),r.i=null,r.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(nW(this,t),nY(this,n,e))},r)),r.j=i):(n||(t=nB(t,nK)),e.i=new nH(t,e.h))}function nV(e,t,n){e.i.set(t,n)}function nF(e){return nV(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nU(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function nB(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,nj),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nj(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}nx.prototype.toString=function(){var e=[],t=this.j;t&&e.push(nB(t,nq,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(nB(t,nq,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(nB(n,"/"==n.charAt(0)?nz:n$,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",nB(n,nG)),e.join("")};var nq=/[#\/\?@]/g,n$=/[#\?:]/g,nz=/[#\?]/g,nK=/[#\?@]/g,nG=/#/g;function nH(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function nQ(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function nW(e,t){nQ(e),t=nJ(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nX(e,t){return nQ(e),t=nJ(e,t),e.g.has(t)}function nY(e,t,n){nW(e,t),0<n.length&&(e.i=null,e.g.set(nJ(e,t),e7(n)),e.h+=n.length)}function nJ(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(eW=nH.prototype).add=function(e,t){nQ(this),this.i=null,e=nJ(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},eW.forEach=function(e,t){nQ(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},eW.ta=function(){nQ(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){let i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},eW.Z=function(e){nQ(this);let t=[];if("string"==typeof e)nX(this,e)&&(t=t.concat(this.g.get(nJ(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},eW.set=function(e,t){return nQ(this),this.i=null,nX(this,e=nJ(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},eW.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},eW.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];let s=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")};var nZ=class{constructor(e,t){this.g=e,this.map=t}};function n0(e){this.l=e||n1,e=eJ.PerformanceNavigationTiming?0<(e=eJ.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(eJ.g&&eJ.g.Ka&&eJ.g.Ka()&&eJ.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var n1=10;function n2(e){return!!e.h||!!e.g&&e.g.size>=e.j}function n9(e){return e.h?1:e.g?e.g.size:0}function n4(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function n6(e,t){e.g?e.g.add(t):e.h=t}function n5(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function n3(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return e7(e.i)}n0.prototype.cancel=function(){if(this.i=n3(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var n7=class{stringify(e){return eJ.JSON.stringify(e,void 0)}parse(e){return eJ.JSON.parse(e,void 0)}};function n8(){this.g=new n7}function re(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function rt(e){this.l=e.ec||null,this.j=e.ob||!1}function rn(e,t){tB.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=rr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}e6(rt,nl),rt.prototype.g=function(){return new rn(this.l,this.j)},rt.prototype.i=(i={},function(){return i}),e6(rn,tB);var rr=0;function ri(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function rs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ra(e)}function ra(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(eW=rn.prototype).open=function(e,t){if(this.readyState!=rr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ra(this)},eW.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||eJ).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},eW.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,rs(this)),this.readyState=rr},eW.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ra(this)),this.g&&(this.readyState=3,ra(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==eJ.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ri(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},eW.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?rs(this):ra(this),3==this.readyState&&ri(this)}},eW.Za=function(e){this.g&&(this.response=this.responseText=e,rs(this))},eW.Ya=function(e){this.g&&(this.response=e,rs(this))},eW.ka=function(){this.g&&rs(this)},eW.setRequestHeader=function(e,t){this.v.append(e,t)},eW.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},eW.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ro=eJ.JSON.parse;function rl(e){tB.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=rh,this.L=this.M=!1}e6(rl,tB);var rh="",ru=/^https?$/i,rc=["POST","PUT"];function rd(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,rf(e),rg(e)}function rf(e){e.F||(e.F=!0,tj(e,"complete"),tj(e,"error"))}function rp(e){if(e.h&&void 0!==eY&&(!e.C[1]||4!=ry(e)||2!=e.da())){if(e.v&&4==ry(e))tZ(e.La,0,e);else if(tj(e,"readystatechange"),4==ry(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,r=!0;break;default:r=!1}if(!(t=r)){if(n=0===a){var i=String(e.I).match(nR)[1]||null;!i&&eJ.self&&eJ.self.location&&(i=eJ.self.location.protocol.slice(0,-1)),n=!ru.test(i?i.toLowerCase():"")}t=n}if(t)tj(e,"complete"),tj(e,"success");else{e.m=6;try{var s=2<ry(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",rf(e)}}finally{rg(e)}}}}function rg(e,t){if(e.g){rm(e);let n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||tj(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function rm(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(eJ.clearTimeout(e.A),e.A=null)}function ry(e){return e.g?e.g.readyState:0}function rv(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case rh:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function rw(e){let t="";return tI(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function rE(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=rw(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):nV(e,t,n))}function r_(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rb(e){this.Ga=0,this.j=[],this.l=new t6,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=r_("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=r_("baseRetryDelayMs",5e3,e),this.hb=r_("retryDelaySeedMs",1e4,e),this.eb=r_("forwardChannelMaxRetries",2,e),this.xa=r_("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new n0(e&&e.concurrentRequestLimit),this.Ja=new n8,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function rT(e){if(rS(e),3==e.H){var t=e.W++,n=nL(e.I);if(nV(n,"SID",e.K),nV(n,"RID",t),nV(n,"TYPE","terminate"),rD(e,n),(t=new ng(e,e.l,t)).L=2,t.A=nF(nL(n)),n=!1,eJ.navigator&&eJ.navigator.sendBeacon)try{n=eJ.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!n&&eJ.Image&&((new Image).src=t.A,n=!0),n||(t.g=rB(t.l,null),t.g.ha(t.A)),t.G=Date.now(),nI(t)}rF(e)}function rI(e){e.g&&(rx(e),e.g.cancel(),e.g=null)}function rS(e){rI(e),e.u&&(eJ.clearTimeout(e.u),e.u=null),rO(e),e.i.cancel(),e.m&&("number"==typeof e.m&&eJ.clearTimeout(e.m),e.m=null)}function rC(e){if(!n2(e.i)&&!e.m){e.m=!0;var t=e.Na;tG||tW(),tH||(tG(),tH=!0),tQ.add(t,e),e.C=0}}function rA(e,t){var n;n=t?t.m:e.W++;let r=nL(e.I);nV(r,"SID",e.K),nV(r,"RID",n),nV(r,"AID",e.V),rD(e,r),e.o&&e.s&&rE(r,e.o,e.s),n=new ng(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=rN(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),n6(e.i,n),nE(n,r,t)}function rD(e,t){e.na&&tI(e.na,function(e,n){nV(t,n,e)}),e.h&&nk({},function(e,n){nV(t,n,e)})}function rN(e,t,n){n=Math.min(e.j.length,n);var r=e.h?e9(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=i[a].g,o=i[a].map;if(0>(n-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,n){let r=n||"";try{nk(e,function(e,n){let i=e;e0(e)&&(i=t$(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){r&&r(o)}}if(s){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function rk(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;tG||tW(),tH||(tG(),tH=!0),tQ.add(t,e),e.A=0}}function rR(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=ns(e9(e.Ma,e),rP(e,e.A)),e.A++,!0)}function rx(e){null!=e.B&&(eJ.clearTimeout(e.B),e.B=null)}function rL(e){e.g=new ng(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=nL(e.wa);nV(t,"RID","rpc"),nV(t,"SID",e.K),nV(t,"AID",e.V),nV(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&nV(t,"TO",e.qa),nV(t,"TYPE","xmlhttp"),rD(e,t),e.o&&e.s&&rE(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=nF(nL(t)),n.u=null,n.S=!0,n_(n,e)}function rO(e){null!=e.v&&(eJ.clearTimeout(e.v),e.v=null)}function rM(e,t){var n=null;if(e.g==t){rO(e),rx(e),e.g=null;var r=2}else{if(!n4(e.i,t))return;n=t.F,n5(e.i,t),r=1}if(0!=e.H){if(t.i){if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.G;var i,s=e.C;tj(r=t8(),new ni(r,n)),rC(e)}else rk(e)}else if(3==(s=t.s)||0==s&&0<t.ca||!(1==r&&(i=t,!(n9(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=ns(e9(e.Na,e,i),rP(e,e.C)),e.C++,!0)))||2==r&&rR(e)))switch(n&&0<n.length&&((t=e.i).i=t.i.concat(n)),s){case 1:rV(e,5);break;case 4:rV(e,10);break;case 3:rV(e,6);break;default:rV(e,2)}}}function rP(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function rV(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=e9(e.pb,e);n||(n=new nx("//www.google.com/images/cleardot.gif"),eJ.location&&"http"==eJ.location.protocol||nO(n,"https"),nF(n)),function(e,t){let n=new t6;if(eJ.Image){let r=new Image;r.onload=e4(re,n,r,"TestLoadImage: loaded",!0,t),r.onerror=e4(re,n,r,"TestLoadImage: error",!1,t),r.onabort=e4(re,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=e4(re,n,r,"TestLoadImage: timeout",!1,t),eJ.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(n.toString(),r)}else nr(2);e.H=0,e.h&&e.h.za(t),rF(e),rS(e)}function rF(e){if(e.H=0,e.ma=[],e.h){let t=n3(e.i);(0!=t.length||0!=e.j.length)&&(e8(e.ma,t),e8(e.ma,e.j),e.i.i.length=0,e7(e.j),e.j.length=0),e.h.ya()}}function rU(e,t,n){var r=n instanceof nx?nL(n):new nx(n);if(""!=r.g)t&&(r.g=t+"."+r.g),nM(r,r.m);else{var i=eJ.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new nx(null);r&&nO(s,r),t&&(s.g=t),i&&nM(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&nV(r,n,t),nV(r,"VER",e.ra),rD(e,r),r}function rB(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new rl(e.Ha&&!e.va?new rt({ob:n}):e.va)).Oa(e.J),t}function rj(){}function rq(){if(to&&!(10<=Number(ty)))throw Error("Environmental error: no available transport.")}function r$(e,t){tB.call(this),this.g=new rb(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!tn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!tn(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new rG(this)}function rz(e){nd.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function rK(){nf.call(this),this.status=1}function rG(e){this.g=e}function rH(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function rQ(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[1]+3905402710&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[2]+606105819&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[3]+3250441966&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[4]+4118548399&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[5]+1200080426&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[6]+2821735955&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[7]+4249261313&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[8]+1770035416&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[9]+2336552879&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[10]+4294925233&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[11]+2304563134&4294967295,a=t+(s^(n=i+(a<<22&4294967295|a>>>10))&(i^s))+r[12]+1804603682&4294967295,a=s+(i^(t=n+(a<<7&4294967295|a>>>25))&(n^i))+r[13]+4254626195&4294967295,a=i+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+r[14]+2792965006&4294967295,a=n+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+r[15]+1236535329&4294967295,n=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(i^s))+r[12]+2368359562&4294967295,a=t+((n=i+(a<<20&4294967295|a>>>12))^i^s)+r[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[11]+1839030562&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[14]+4259657740&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[7]+4139469664&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[10]+3200236656&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[3]+3572445317&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[6]+76029189&4294967295,a=t+((n=i+(a<<23&4294967295|a>>>9))^i^s)+r[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^i)+r[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^n)+r[15]+530742520&4294967295,a=n+((i=s+(a<<16&4294967295|a>>>16))^s^t)+r[2]+3299628645&4294967295,n=i+(a<<23&4294967295|a>>>9),a=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(a<<21&4294967295|a>>>11),a=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function rW(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}(eW=rl.prototype).Oa=function(e){this.M=e},eW.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():o.g(),this.C=this.u?nh(this.u):nh(o),this.g.onreadystatechange=e9(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){rd(this,e);return}if(e=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let e of r.keys())n.set(e,r.get(e));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[s,a]of(r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=eJ.FormData&&e instanceof eJ.FormData,!(0<=e3(rc,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;rm(this),0<this.B&&((this.L=(s=this.g,to&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=e9(this.ua,this)):this.A=tZ(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){rd(this,e)}},eW.ua=function(){void 0!==eY&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tj(this,"timeout"),this.abort(8))},eW.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tj(this,"complete"),tj(this,"abort"),rg(this))},eW.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rg(this,!0)),rl.$.N.call(this)},eW.La=function(){this.s||(this.G||this.v||this.l?rp(this):this.kb())},eW.kb=function(){rp(this)},eW.isActive=function(){return!!this.g},eW.da=function(){try{return 2<ry(this)?this.g.status:-1}catch(e){return -1}},eW.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},eW.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ro(t)}},eW.Ia=function(){return this.m},eW.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(eW=rb.prototype).ra=8,eW.H=1,eW.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new ng(this,this.l,e),s=this.s;if(this.U&&(s?tA(s=tS(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break t}r=void 0}if(void 0===r)break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=rN(this,i,t),nV(n=nL(this.I),"RID",e),nV(n,"CVER",22),this.F&&nV(n,"X-HTTP-Session-Id",this.F),rD(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(rw(s)))+"&"+t:this.o&&rE(n,this.o,s)),n6(this.i,i),this.bb&&nV(n,"TYPE","init"),this.P?(nV(n,"$req",t),nV(n,"SID","null"),i.aa=!0,nE(i,n,null)):nE(i,n,t),this.H=2}}else 3==this.H&&(e?rA(this,e):0==this.j.length||n2(this.i)||rA(this))}},eW.Ma=function(){if(this.u=null,rL(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ns(e9(this.jb,this),e)}},eW.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nr(10),rI(this),rL(this))},eW.ib=function(){null!=this.v&&(this.v=null,rI(this),rR(this),nr(19))},eW.pb=function(e){e?(this.l.info("Successfully pinged google.com"),nr(2)):(this.l.info("Failed to ping google.com"),nr(1))},eW.isActive=function(){return!!this.h&&this.h.isActive(this)},(eW=rj.prototype).Ba=function(){},eW.Aa=function(){},eW.za=function(){},eW.ya=function(){},eW.isActive=function(){return!0},eW.Va=function(){},rq.prototype.g=function(e,t){return new r$(e,t)},e6(r$,tB),r$.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;nr(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=rU(e,null,e.Y),rC(e)},r$.prototype.close=function(){rT(this.g)},r$.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=t$(e),e=n);t.j.push(new nZ(t.fb++,e)),3==t.H&&rC(t)},r$.prototype.N=function(){this.g.h=null,delete this.j,rT(this.g),delete this.g,r$.$.N.call(this)},e6(rz,nd),e6(rK,nf),e6(rG,rj),rG.prototype.Ba=function(){tj(this.g,"a")},rG.prototype.Aa=function(e){tj(this.g,new rz(e))},rG.prototype.za=function(e){tj(this.g,new rK)},rG.prototype.ya=function(){tj(this.g,"b")},e6(rH,function(){this.blockSize=-1}),rH.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},rH.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)rQ(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){rQ(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){rQ(this,r),i=0;break}}this.h=i,this.i+=t},rH.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var rX={};function rY(e){var t;return -128<=e&&128>e?(t=function(e){return new rW([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(rX,e)?rX[e]:rX[e]=t(e)):new rW([0|e],0>e?-1:0)}function rJ(e){if(isNaN(e)||!isFinite(e))return r0;if(0>e)return r6(rJ(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=rZ;return new rW(t,0)}var rZ=4294967296,r0=rY(0),r1=rY(1),r2=rY(16777216);function r9(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function r4(e){return -1==e.h}function r6(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new rW(n,~e.h).add(r1)}function r5(e,t){return e.add(r6(t))}function r3(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function r7(e,t){this.g=e,this.h=t}function r8(e,t){if(r9(t))throw Error("division by zero");if(r9(e))return new r7(r0,r0);if(r4(e))return t=r8(r6(e),t),new r7(r6(t.g),r6(t.h));if(r4(t))return t=r8(e,r6(t)),new r7(r6(t.g),t.h);if(30<e.g.length){if(r4(e)||r4(t))throw Error("slowDivide_ only works with positive integers.");for(var n=r1,r=t;0>=r.X(e);)n=ie(n),r=ie(r);var i=it(n,1),s=it(r,1);for(r=it(r,2),n=it(n,2);!r9(r);){var a=s.add(r);0>=a.X(e)&&(i=i.add(n),s=a),r=it(r,1),n=it(n,1)}return t=r5(e,i.R(t)),new r7(i,t)}for(i=r0;0<=e.X(t);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,r-48),a=(s=rJ(n)).R(t);r4(a)||0<a.X(e);)n-=r,a=(s=rJ(n)).R(t);r9(s)&&(s=r1),i=i.add(s),e=r5(e,a)}return new r7(i,e)}function ie(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new rW(n,e.h)}function it(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new rW(i,e.h)}(eW=rW.prototype).ea=function(){if(r4(this))return-r6(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:rZ+r)*t,t*=rZ}return e},eW.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(r9(this))return"0";if(r4(this))return"-"+r6(this).toString(e);for(var t=rJ(Math.pow(e,6)),n=this,r="";;){var i=r8(n,t).g,s=((0<(n=r5(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(r9(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},eW.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},eW.X=function(e){return r4(e=r5(this,e))?-1:r9(e)?0:1},eW.abs=function(){return r4(this)?r6(this):this},eW.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),a=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=a>>>16,s&=65535,a&=65535,n[i]=a<<16|s}return new rW(n,-2147483648&n[n.length-1]?-1:0)},eW.R=function(e){if(r9(this)||r9(e))return r0;if(r4(this))return r4(e)?r6(this).R(r6(e)):r6(r6(this).R(e));if(r4(e))return r6(this.R(r6(e)));if(0>this.X(r2)&&0>e.X(r2))return rJ(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,a=65535&this.D(r),o=e.D(i)>>>16,l=65535&e.D(i);n[2*r+2*i]+=a*l,r3(n,2*r+2*i),n[2*r+2*i+1]+=s*l,r3(n,2*r+2*i+1),n[2*r+2*i+1]+=a*o,r3(n,2*r+2*i+1),n[2*r+2*i+2]+=s*o,r3(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new rW(n,0)},eW.gb=function(e){return r8(this,e).h},eW.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new rW(n,this.h&e.h)},eW.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new rW(n,this.h|e.h)},eW.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new rW(n,this.h^e.h)},rq.prototype.createWebChannel=rq.prototype.g,r$.prototype.send=r$.prototype.u,r$.prototype.open=r$.prototype.m,r$.prototype.close=r$.prototype.close,na.NO_ERROR=0,na.TIMEOUT=8,na.HTTP_ERROR=6,no.COMPLETE="complete",nu.EventType=nc,nc.OPEN="a",nc.CLOSE="b",nc.ERROR="c",nc.MESSAGE="d",tB.prototype.listen=tB.prototype.O,rl.prototype.listenOnce=rl.prototype.P,rl.prototype.getLastError=rl.prototype.Sa,rl.prototype.getLastErrorCode=rl.prototype.Ia,rl.prototype.getStatus=rl.prototype.da,rl.prototype.getResponseJson=rl.prototype.Wa,rl.prototype.getResponseText=rl.prototype.ja,rl.prototype.send=rl.prototype.ha,rl.prototype.setWithCredentials=rl.prototype.Oa,rH.prototype.digest=rH.prototype.l,rH.prototype.reset=rH.prototype.reset,rH.prototype.update=rH.prototype.j,rW.prototype.add=rW.prototype.add,rW.prototype.multiply=rW.prototype.R,rW.prototype.modulo=rW.prototype.gb,rW.prototype.compare=rW.prototype.X,rW.prototype.toNumber=rW.prototype.ea,rW.prototype.toString=rW.prototype.toString,rW.prototype.getBits=rW.prototype.D,rW.fromNumber=rJ,rW.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return r6(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=rJ(Math.pow(n,8)),i=r0,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),n);8>a?(a=rJ(Math.pow(n,a)),i=i.R(a).add(rJ(o))):i=(i=i.R(r)).add(rJ(o))}return i};var ir=eX.createWebChannelTransport=function(){return new rq},ii=eX.getStatEventTarget=function(){return t8()},is=eX.ErrorCode=na,ia=eX.EventType=no,io=eX.Event=t3,il=eX.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};eX.FetchXmlHttpFactory=rt;var ih=eX.WebChannel=nu,iu=eX.XhrIo=rl,ic=eX.Md5=rH,id=eX.Integer=rW;const ip="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ig.UNAUTHENTICATED=new ig(null),ig.GOOGLE_CREDENTIALS=new ig("google-credentials-uid"),ig.FIRST_PARTY=new ig("first-party-uid"),ig.MOCK_USER=new ig("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let im="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new eo("@firebase/firestore");function iv(){return iy.logLevel}function iw(e,...t){if(iy.logLevel<=eQ.DEBUG){let n=t.map(ib);iy.debug(`Firestore (${im}): ${e}`,...n)}}function iE(e,...t){if(iy.logLevel<=eQ.ERROR){let n=t.map(ib);iy.error(`Firestore (${im}): ${e}`,...n)}}function i_(e,...t){if(iy.logLevel<=eQ.WARN){let n=t.map(ib);iy.warn(`Firestore (${im}): ${e}`,...n)}}function ib(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(e="Unexpected state"){let t=`FIRESTORE (${im}) INTERNAL ASSERTION FAILED: `+e;throw iE(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class iS extends G{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ig.UNAUTHENTICATED))}shutdown(){}}class iN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ik{constructor(e){this.t=e,this.currentUser=ig.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new iC;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new iC,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{iw("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(iw("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new iC)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(iw("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||iT(),new iA(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||iT(),new ig(e)}}class iR{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=ig.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ix{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new iR(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ig.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&iw("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,iw("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{iw("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):iw("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||iT(),this.R=e.token,new iL(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function iP(e,t){return e<t?-1:e>t?1:0}function iV(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new iS(iI.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new iS(iI.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return iF.fromMillis(Date.now())}static fromDate(e){return iF.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new iF(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?iP(this.nanoseconds,e.nanoseconds):iP(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{constructor(e){this.timestamp=e}static fromTimestamp(e){return new iU(e)}static min(){return new iU(new iF(0,0))}static max(){return new iU(new iF(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e,t,n){void 0===t?t=0:t>e.length&&iT(),void 0===n?n=e.length-t:n>e.length-t&&iT(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===iB.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof iB?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ij extends iB{construct(e,t,n){return new ij(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new iS(iI.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new ij(t)}static emptyPath(){return new ij([])}}const iq=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class i$ extends iB{construct(e,t,n){return new i$(e,t,n)}static isValidIdentifier(e){return iq.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),i$.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new i$(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new iS(iI.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new iS(iI.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new iS(iI.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new iS(iI.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new i$(t)}static emptyPath(){return new i$([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{constructor(e){this.path=e}static fromPath(e){return new iz(ij.fromString(e))}static fromName(e){return new iz(ij.fromString(e).popFirst(5))}static empty(){return new iz(ij.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ij.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ij.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new iz(new ij(e.slice()))}}class iK{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new iK(iU.min(),iz.empty(),-1)}static max(){return new iK(iU.max(),iz.empty(),-1)}}class iG{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iH(e){if(e.code!==iI.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;iw("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iQ{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&iT(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new iQ((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof iQ?t:iQ.resolve(t)}catch(e){return iQ.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):iQ.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):iQ.reject(t)}static resolve(e){return new iQ((t,n)=>{t(e)})}static reject(e){return new iQ((t,n)=>{n(e)})}static waitFor(e){return new iQ((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=iQ.resolve(!1);for(let n of e)t=t.next(e=>e?iQ.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new iQ((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new iQ((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iW{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new iC,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new iJ(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{let n=i9(t.target.error);this.V.reject(new iJ(e,n))}}static open(e,t,n,r){try{return new iW(t,e.transaction(r,n))}catch(e){throw new iJ(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(iw("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new i0(this.transaction.objectStore(e))}}class iX{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===iX.S(z())&&iE("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return iw("SimpleDb","Removing database:",e),i1(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!K())return!1;if(iX.C())return!0;let e=z(),t=iX.S(e),n=iX.v(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<n&&n<4.5)}static C(){var e;return void 0!==y&&"YES"===(null===(e=y.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}static v(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}async O(e){return this.db||(iw("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{let r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{t(e.target.result)},r.onblocked=()=>{n(new iJ(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{let r=t.target.error;"VersionError"===r.name?n(new iS(iI.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new iS(iI.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new iJ(e,r))},r.onupgradeneeded=e=>{iw("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.p.N(t,r.transaction,e.oldVersion,this.version).next(()=>{iw("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.O(e);let t=iW.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next(e=>(t.g(),e)).catch(e=>(t.abort(e),iQ.reject(e))).toPromise();return s.catch(()=>{}),await t.m,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(iw("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class iY{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return i1(this.k.delete())}}class iJ extends iS{constructor(e,t){super(iI.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function iZ(e){return"IndexedDbTransactionError"===e.name}class i0{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(iw("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(iw("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),i1(n)}add(e){return iw("SimpleDb","ADD",this.store.name,e,e),i1(this.store.add(e))}get(e){return i1(this.store.get(e)).next(t=>(void 0===t&&(t=null),iw("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return iw("SimpleDb","DELETE",this.store.name,e),i1(this.store.delete(e))}count(){return iw("SimpleDb","COUNT",this.store.name),i1(this.store.count())}W(e,t){let n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){let e=r.getAll(n.range);return new iQ((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(n),t=[];return this.G(e,(e,n)=>{t.push(n)}).next(()=>t)}}j(e,t){let n=this.store.getAll(e,null===t?void 0:t);return new iQ((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}H(e,t){iw("SimpleDb","DELETE ALL",this.store.name);let n=this.options(e,t);n.J=!1;let r=this.cursor(n);return this.G(r,(e,t,n)=>n.delete())}Y(e,t){let n;t?n=e:(n={},t=e);let r=this.cursor(n);return this.G(r,t)}Z(e){let t=this.cursor({});return new iQ((n,r)=>{t.onerror=e=>{r(i9(e.target.error))},t.onsuccess=t=>{let r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}G(e,t){let n=[];return new iQ((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void r();let s=new iY(i),a=t(i.primaryKey,i.value,s);if(a instanceof iQ){let e=a.catch(e=>(s.done(),iQ.reject(e)));n.push(e)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}}).next(()=>iQ.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function i1(e){return new iQ((t,n)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{n(i9(e.target.error))}})}let i2=!1;function i9(e){let t=iX.S(z());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new iS("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return i2||(i2=!0,setTimeout(()=>{throw e},0)),e}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}function i6(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i5(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function i3(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function i7(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}i4._e=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(e,t){this.comparator=e,this.root=t||st.EMPTY}insert(e,t){return new i8(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new i8(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new se(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new se(this.root,e,this.comparator,!1)}getReverseIterator(){return new se(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new se(this.root,e,this.comparator,!0)}}class se{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:st.RED,this.left=null!=r?r:st.EMPTY,this.right=null!=i?i:st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new st(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return st.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw iT();let e=this.left.check();if(e!==this.right.check())throw iT();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1,st.EMPTY=new class{constructor(){this.size=0}get key(){throw iT()}get value(){throw iT()}get color(){throw iT()}get left(){throw iT()}get right(){throw iT()}copy(e,t,n,r,i){return this}insert(e,t,n){return new st(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.comparator=e,this.data=new i8(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sr(this.data.getIterator())}getIteratorFrom(e){return new sr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof sn)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new sn(this.comparator);return t.data=e,t}}class sr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.fields=e,e.sort(i$.comparator)}static empty(){return new si([])}unionWith(e){let t=new sn(i$.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new si(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return iV(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.binaryString=e}static fromBase64String(e){return new sa(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ss("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new sa(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return iP(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sa.EMPTY_BYTE_STRING=new sa("");const so=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sl(e){if(e||iT(),"string"==typeof e){let t=0,n=so.exec(e);if(n||iT(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:sh(e.seconds),nanos:sh(e.nanos)}}function sh(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function su(e){return"string"==typeof e?sa.fromBase64String(e):sa.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function sd(e){let t=e.mapValue.fields.__previous_value__;return sc(t)?sd(t):t}function sf(e){let t=sl(e.mapValue.fields.__local_write_time__.timestampValue);return new iF(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class sg{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sg("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof sg&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sy(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?sc(e)?4:sk(e)?9007199254740991:10:iT()}function sv(e,t){if(e===t)return!0;let n=sy(e);if(n!==sy(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return sf(e).isEqual(sf(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=sl(e.timestampValue),r=sl(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return su(e.bytesValue).isEqual(su(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return sh(e.geoPointValue.latitude)===sh(t.geoPointValue.latitude)&&sh(e.geoPointValue.longitude)===sh(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return sh(e.integerValue)===sh(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=sh(e.doubleValue),r=sh(t.doubleValue);return n===r?i6(n)===i6(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return iV(e.arrayValue.values||[],t.arrayValue.values||[],sv);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(i5(n)!==i5(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!sv(n[e],r[e])))return!1;return!0}(e,t);default:return iT()}}function sw(e,t){return void 0!==(e.values||[]).find(e=>sv(e,t))}function sE(e,t){if(e===t)return 0;let n=sy(e),r=sy(t);if(n!==r)return iP(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return iP(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=sh(e.integerValue||e.doubleValue),r=sh(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return s_(e.timestampValue,t.timestampValue);case 4:return s_(sf(e),sf(t));case 5:return iP(e.stringValue,t.stringValue);case 6:return function(e,t){let n=su(e),r=su(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=iP(n[e],r[e]);if(0!==t)return t}return iP(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=iP(sh(e.latitude),sh(t.latitude));return 0!==n?n:iP(sh(e.longitude),sh(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=sE(n[e],r[e]);if(t)return t}return iP(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===sm.mapValue&&t===sm.mapValue)return 0;if(e===sm.mapValue)return 1;if(t===sm.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=iP(r[e],s[e]);if(0!==t)return t;let a=sE(n[r[e]],i[s[e]]);if(0!==a)return a}return iP(r.length,s.length)}(e.mapValue,t.mapValue);default:throw iT()}}function s_(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return iP(e,t);let n=sl(e),r=sl(t),i=iP(n.seconds,r.seconds);return 0!==i?i:iP(n.nanos,r.nanos)}function sb(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=sl(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?su(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,iz.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=sb(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${sb(e.fields[i])}`;return n+"}"}(e.mapValue):iT()}function sT(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function sI(e){return!!e&&"integerValue"in e}function sS(e){return!!e&&"arrayValue"in e}function sC(e){return!!e&&"nullValue"in e}function sA(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function sD(e){return!!e&&"mapValue"in e}function sN(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return i3(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=sN(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=sN(e.arrayValue.values[n]);return t}return Object.assign({},e)}function sk(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.value=e}static empty(){return new sR({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!sD(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sN(t)}setAll(e){let t=i$.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=sN(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());sD(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sv(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];sD(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(i3(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new sR(sN(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new sx(e,0,iU.min(),iU.min(),iU.min(),sR.empty(),0)}static newFoundDocument(e,t,n,r){return new sx(e,1,t,iU.min(),n,r,0)}static newNoDocument(e,t){return new sx(e,2,t,iU.min(),iU.min(),sR.empty(),0)}static newUnknownDocument(e,t){return new sx(e,3,t,iU.min(),iU.min(),sR.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(iU.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sR.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sR.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=iU.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof sx&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new sx(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,t){this.position=e,this.inclusive=t}}function sO(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?iz.comparator(iz.fromName(a.referenceValue),n.key):sE(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function sM(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!sv(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{}class sF extends sV{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new sq(e,t,n):"array-contains"===t?new sG(e,n):"in"===t?new sH(e,n):"not-in"===t?new sQ(e,n):"array-contains-any"===t?new sW(e,n):new sF(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new s$(e,n):new sz(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(sE(t,this.value)):null!==t&&sy(this.value)===sy(t)&&this.matchesComparison(sE(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return iT()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sU extends sV{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new sU(e,t)}matches(e){return sB(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function sB(e){return"and"===e.op}function sj(e){for(let t of e.filters)if(t instanceof sU)return!1;return!0}class sq extends sF{constructor(e,t,n){super(e,t,n),this.key=iz.fromName(n.referenceValue)}matches(e){let t=iz.comparator(e.key,this.key);return this.matchesComparison(t)}}class s$ extends sF{constructor(e,t){super(e,"in",t),this.keys=sK("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sz extends sF{constructor(e,t){super(e,"not-in",t),this.keys=sK("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sK(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>iz.fromName(e.referenceValue))}class sG extends sF{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return sS(t)&&sw(t.arrayValue,this.value)}}class sH extends sF{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&sw(this.value.arrayValue,t)}}class sQ extends sF{constructor(e,t){super(e,"not-in",t)}matches(e){if(sw(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!sw(this.value.arrayValue,t)}}class sW extends sF{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!sS(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>sw(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sX{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ce=null}}function sY(e,t=null,n=[],r=[],i=null,s=null,a=null){return new sX(e,t,n,r,i,s,a)}function sJ(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof sF)return t.field.canonicalString()+t.op.toString()+sb(t.value);if(sj(t)&&sB(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>sb(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>sb(e)).join(",")),e.ce=t}return e.ce}function sZ(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof sF?n instanceof sF&&t.op===n.op&&t.field.isEqual(n.field)&&sv(t.value,n.value):t instanceof sU?n instanceof sU&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void iT()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!sM(e.startAt,t.startAt)&&sM(e.endAt,t.endAt)}function s0(e){return iz.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function s2(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function s9(e){return null!==e.collectionGroup}function s4(e){if(null===e.le){let t;e.le=[];let n=new Set;for(let t of e.explicitOrderBy)e.le.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new sn(i$.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.le.push(new sP(t,r))}),n.has(i$.keyField().canonicalString())||e.le.push(new sP(i$.keyField(),r))}return e.le}function s6(e){return e.he||(e.he=function(e,t){if("F"===e.limitType)return sY(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new sP(e.field,t)});let n=e.endAt?new sL(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new sL(e.startAt.position,e.startAt.inclusive):null;return sY(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,s4(e))),e.he}function s5(e,t){let n=e.filters.concat([t]);return new s1(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function s3(e,t,n){return new s1(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function s7(e,t){return sZ(s6(e),s6(t))&&e.limitType===t.limitType}function s8(e){return`${sJ(s6(e))}|lt:${e.limitType}`}function ae(e){var t;let n;return`Query(target=${n=(t=s6(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof sF?`${t.field.canonicalString()} ${t.op} ${sb(t.value)}`:t instanceof sU?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>sb(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>sb(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function at(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):iz.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of s4(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=sO(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,s4(e),t))&&(!e.endAt||!!function(e,t,n){let r=sO(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,s4(e),t))}function an(e){return(t,n)=>{let r=!1;for(let i of s4(e)){let e=function(e,t,n){let r=e.field.isKeyField()?iz.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?sE(r,i):iT()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return iT()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){i3(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return i7(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new i8(iz.comparator),as=new i8(iz.comparator);function aa(...e){let t=as;for(let n of e)t=t.insert(n.key,n);return t}function ao(e){let t=as;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function al(){return new ar(e=>e.toString(),(e,t)=>e.isEqual(t))}const ah=new i8(iz.comparator),au=new sn(iz.comparator);function ac(...e){let t=au;for(let n of e)t=t.add(n);return t}const ad=new sn(iP);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:i6(t)?"-0":t}}function ap(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this._=void 0}}function am(e,t){return e instanceof ab?sI(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class ay extends ag{}class av extends ag{constructor(e){super(),this.elements=e}}function aw(e,t){let n=aI(t);for(let t of e.elements)n.some(e=>sv(e,t))||n.push(t);return{arrayValue:{values:n}}}class aE extends ag{constructor(e){super(),this.elements=e}}function a_(e,t){let n=aI(t);for(let t of e.elements)n=n.filter(e=>!sv(e,t));return{arrayValue:{values:n}}}class ab extends ag{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function aT(e){return sh(e.integerValue||e.doubleValue)}function aI(e){return sS(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,t){this.field=e,this.transform=t}}class aC{constructor(e,t){this.version=e,this.transformResults=t}}class aA{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new aA}static exists(e){return new aA(void 0,e)}static updateTime(e){return new aA(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aD(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class aN{}function ak(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new aF(e.key,aA.none()):new aL(e.key,e.data,aA.none());{let n=e.data,r=sR.empty(),i=new sn(i$.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new aO(e.key,r,new si(i.toArray()),aA.none())}}function aR(e,t,n,r){return e instanceof aL?function(e,t,n,r){if(!aD(e.precondition,t))return n;let i=e.value.clone(),s=aV(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof aO?function(e,t,n,r){if(!aD(e.precondition,t))return n;let i=aV(e.fieldTransforms,r,t),s=t.data;return(s.setAll(aM(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):aD(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function ax(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&iV(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof av&&r instanceof av||n instanceof aE&&r instanceof aE?iV(n.elements,r.elements,sv):n instanceof ab&&r instanceof ab?sv(n.Ie,r.Ie):n instanceof ay&&r instanceof ay)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class aL extends aN{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class aO extends aN{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function aM(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function aP(e,t,n){var r;let i=new Map;e.length===n.length||iT();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof av?aw(o,l):o instanceof aE?a_(o,l):r))}return i}function aV(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof ay?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&sc(t)&&(t=sd(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof av?aw(e,s):e instanceof aE?a_(e,s):function(e,t){let n=am(e,t),r=aT(n)+aT(e.Ie);return sI(n)&&sI(e.Ie)?ap(r):af(e.serializer,r)}(e,s))}return r}class aF extends aN{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aU extends aN{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof aL?function(e,t,n){let r=e.value.clone(),i=aP(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof aO?function(e,t,n){if(!aD(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=aP(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(aM(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=aR(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=aR(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=al();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=ak(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(iU.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ac())}isEqual(e){return this.batchId===e.batchId&&iV(this.mutations,e.mutations,(e,t)=>ax(e,t))&&iV(this.baseMutations,e.baseMutations,(e,t)=>ax(e,t))}}class aj{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){e.mutations.length===n.length||iT();let r=ah,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new aj(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aq{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(e,t){this.count=e,this.unchangedNames=t}}function az(e){if(void 0===e)return iE("GRPC error has no .code"),iI.UNKNOWN;switch(e){case l.OK:return iI.OK;case l.CANCELLED:return iI.CANCELLED;case l.UNKNOWN:return iI.UNKNOWN;case l.DEADLINE_EXCEEDED:return iI.DEADLINE_EXCEEDED;case l.RESOURCE_EXHAUSTED:return iI.RESOURCE_EXHAUSTED;case l.INTERNAL:return iI.INTERNAL;case l.UNAVAILABLE:return iI.UNAVAILABLE;case l.UNAUTHENTICATED:return iI.UNAUTHENTICATED;case l.INVALID_ARGUMENT:return iI.INVALID_ARGUMENT;case l.NOT_FOUND:return iI.NOT_FOUND;case l.ALREADY_EXISTS:return iI.ALREADY_EXISTS;case l.PERMISSION_DENIED:return iI.PERMISSION_DENIED;case l.FAILED_PRECONDITION:return iI.FAILED_PRECONDITION;case l.ABORTED:return iI.ABORTED;case l.OUT_OF_RANGE:return iI.OUT_OF_RANGE;case l.UNIMPLEMENTED:return iI.UNIMPLEMENTED;case l.DATA_LOSS:return iI.DATA_LOSS;default:return iT()}}(h=l||(l={}))[h.OK=0]="OK",h[h.CANCELLED=1]="CANCELLED",h[h.UNKNOWN=2]="UNKNOWN",h[h.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",h[h.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",h[h.NOT_FOUND=5]="NOT_FOUND",h[h.ALREADY_EXISTS=6]="ALREADY_EXISTS",h[h.PERMISSION_DENIED=7]="PERMISSION_DENIED",h[h.UNAUTHENTICATED=16]="UNAUTHENTICATED",h[h.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",h[h.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",h[h.ABORTED=10]="ABORTED",h[h.OUT_OF_RANGE=11]="OUT_OF_RANGE",h[h.UNIMPLEMENTED=12]="UNIMPLEMENTED",h[h.INTERNAL=13]="INTERNAL",h[h.UNAVAILABLE=14]="UNAVAILABLE",h[h.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aK=new id([4294967295,4294967295],0);function aG(e){let t=(new TextEncoder).encode(e),n=new ic;return n.update(t),new Uint8Array(n.digest())}function aH(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new id([n,r],0),new id([i,s],0)]}class aQ{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new aW(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new aW(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new aW(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=id.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(id.fromNumber(n)));return 1===r.compare(aK)&&(r=new id([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,n]=aH(aG(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);if(!this.Ae(r))return!1}return!0}static create(e,t,n){let r=new aQ(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Te)return;let[t,n]=aH(aG(e));for(let e=0;e<this.hashCount;e++){let r=this.de(t,n,e);this.Re(r)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class aW extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aX{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,aY.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new aX(iU.min(),r,new i8(iP),ai,ac())}}class aY{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new aY(n,t,ac(),ac(),ac())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aJ{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class aZ{constructor(e,t){this.targetId=e,this.fe=t}}class a0{constructor(e,t,n=sa.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class a1{constructor(){this.ge=0,this.pe=a4(),this.ye=sa.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ac(),t=ac(),n=ac();return this.pe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:iT()}}),new aY(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=a4()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||iT()}Le(){this.Se=!0,this.we=!0}}class a2{constructor(e){this.Be=e,this.ke=new Map,this.qe=ai,this.Qe=a9(),this.Ke=new i8(iP)}$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:iT()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,n)=>{this.je(n)&&t(n)})}Je(e){let t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){let i=r.target;if(s0(i)){if(0===n){let e=new iz(i.path);this.We(t,e,sx.newNoDocument(e,iU.min()))}else 1===n||iT()}else{let r=this.Ze(t);if(r!==n){let n=this.Xe(e),i=n?this.et(n,e,r):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,n;let r=e.fe.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=su(i).toUint8Array()}catch(e){if(e instanceof ss)return i_("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new aQ(t,s,a)}catch(e){return i_(e instanceof aW?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Te?null:n}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){let n=this.Be.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Be.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)}),r}it(e){let t=new Map;this.ke.forEach((n,r)=>{let i=this.Ye(r);if(i){if(n.current&&s0(i.target)){let t=new iz(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,sx.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}});let n=ac();this.Qe.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.qe.forEach((t,n)=>n.setReadTime(e));let r=new aX(e,t,this.Ke,this.qe,n);return this.qe=ai,this.Qe=a9(),this.Ke=new i8(iP),r}Ue(e,t){if(!this.je(e))return;let n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;let r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new a1,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new sn(iP),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||iw("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Be._t(e)}He(e){this.ke.set(e,new a1),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function a9(){return new i8(iz.comparator)}function a4(){return new i8(iz.comparator)}const a6={asc:"ASCENDING",desc:"DESCENDING"},a5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a3={and:"AND",or:"OR"};class a7{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function a8(e,t){return e.useProto3Json||null==t?t:{value:t}}function oe(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ot(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function on(e){return e||iT(),iU.fromTimestamp(function(e){let t=sl(e);return new iF(t.seconds,t.nanos)}(e))}function or(e,t){return oi(e,t).canonicalString()}function oi(e,t){let n=new ij(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function os(e){let t=ij.fromString(e);return op(t)||iT(),t}function oa(e,t){return or(e.databaseId,t.path)}function oo(e,t){let n=os(t);if(n.get(1)!==e.databaseId.projectId)throw new iS(iI.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new iS(iI.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new iz(ou(n))}function ol(e,t){return or(e.databaseId,t)}function oh(e){return new ij(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ou(e){return e.length>4&&"documents"===e.get(4)||iT(),e.popFirst(5)}function oc(e,t,n){return{name:oa(e,t),fields:n.value.mapValue.fields}}function od(e){return{fieldPath:e.canonicalString()}}function of(e){return i$.fromServerFormat(e.fieldPath)}function op(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t,n,r,i=iU.min(),s=iU.min(),a=sa.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new og(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new og(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new og(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new og(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.ct=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(sh(e.integerValue));else if("doubleValue"in e){let n=sh(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),i6(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(su(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?sk(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):iT()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){let n=e.fields||{};for(let e of(this.Et(t,55),Object.keys(n)))this.Rt(e,t),this.It(n[e],t)}wt(e,t){let n=e.values||[];for(let e of(this.Et(t,50),n))this.It(e,t)}gt(e,t){this.Et(t,37),iz.fromName(e).path.forEach(e=>{this.Et(t,60),this.St(e,t)})}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}oy.bt=new oy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(){this._n=new ow}addToCollectionParentIndex(e,t){return this._n.add(t),iQ.resolve()}getCollectionParents(e,t){return iQ.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return iQ.resolve()}deleteFieldIndex(e,t){return iQ.resolve()}deleteAllFieldIndexes(e){return iQ.resolve()}createTargetIndexes(e,t){return iQ.resolve()}getDocumentsMatchingTarget(e,t){return iQ.resolve(null)}getIndexType(e,t){return iQ.resolve(0)}getFieldIndexes(e,t){return iQ.resolve([])}getNextCollectionGroupToUpdate(e){return iQ.resolve(null)}getMinOffset(e,t){return iQ.resolve(iK.min())}getMinOffsetFromCollectionGroup(e,t){return iQ.resolve(iK.min())}updateCollectionGroup(e,t,n){return iQ.resolve()}updateIndexEntries(e,t){return iQ.resolve()}}class ow{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new sn(ij.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new sn(ij.comparator)).toArray()}}new Uint8Array(0);class oE{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new oE(e,oE.DEFAULT_COLLECTION_PERCENTILE,oE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oE.DEFAULT_COLLECTION_PERCENTILE=10,oE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,oE.DEFAULT=new oE(41943040,oE.DEFAULT_COLLECTION_PERCENTILE,oE.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),oE.DISABLED=new oE(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new o_(0)}static Ln(){return new o_(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.changes=new ar(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,sx.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?iQ.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&aR(n.mutation,e,si.empty(),iF.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,ac()).next(()=>t))}getLocalViewOfDocuments(e,t,n=ac()){let r=al();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=aa();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=al();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ac()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=ai,s=al(),a=al();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof aO)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),aR(a.mutation,t,a.mutation.getFieldMask(),iF.now())):s.set(t.key,si.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new oT(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=al(),r=new i8((e,t)=>e-t),i=ac();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||si.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||ac()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,h=al();l.forEach(e=>{if(!i.has(e)){let r=ak(t.get(e),n.get(e));null!==r&&h.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,h))}return iQ.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return iz.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):s9(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):iQ.resolve(al()),a=-1,o=i;return s.next(t=>iQ.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?iQ.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,ac())).next(e=>({batchId:a,changes:ao(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new iz(t)).next(e=>{let t=aa();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=aa();return this.indexManager.getCollectionParents(e,i).next(a=>iQ.forEach(a,a=>{let o=new s1(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,sx.newInvalidDocument(r)))});let n=aa();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&aR(s.mutation,r,si.empty(),iF.now()),at(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return iQ.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,{id:t.id,version:t.version,createTime:on(t.createTime)}),iQ.resolve()}getNamedQuery(e,t){return iQ.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=os(e);return 4===t.length?ij.emptyPath():ou(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||iT();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=of(e.unaryFilter.field);return sF.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=of(e.unaryFilter.field);return sF.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=of(e.unaryFilter.field);return sF.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=of(e.unaryFilter.field);return sF.create(i,"!=",{nullValue:"NULL_VALUE"});default:return iT()}}(t):void 0!==t.fieldFilter?sF.create(of(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return iT()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?sU.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return iT()}}(t.compositeFilter.op)):iT()}(e);return n instanceof sU&&sj(t=n)&&sB(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new sP(of(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;i.limit&&(h=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let u=null;i.startAt&&(u=function(e){let t=!!e.before;return new sL(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new sL(e.values||[],t)}(i.endAt)),new s1(r,a,l,o,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?s3(t,t.limit,"L"):t}(t.bundledQuery),readTime:on(t.readTime)}),iQ.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.overlays=new i8(iz.comparator),this.hr=new Map}getOverlay(e,t){return iQ.resolve(this.overlays.get(t))}getOverlays(e,t){let n=al();return iQ.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.ht(e,t,r)}),iQ.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.hr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.hr.delete(n)),iQ.resolve()}getOverlaysForCollection(e,t,n){let r=al(),i=t.length+1,s=new iz(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return iQ.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new i8((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=al(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=al(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return iQ.resolve(a)}ht(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new aq(t,n));let i=this.hr.get(t);void 0===i&&(i=ac(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.Pr=new sn(oD.Ir),this.Tr=new sn(oD.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){let n=new oD(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Ar(new oD(e,t))}Rr(e,t){e.forEach(e=>this.removeReference(e,t))}Vr(e){let t=new iz(new ij([])),n=new oD(t,e),r=new oD(t,e+1),i=[];return this.Tr.forEachInRange([n,r],e=>{this.Ar(e),i.push(e.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let t=new iz(new ij([])),n=new oD(t,e),r=new oD(t,e+1),i=ac();return this.Tr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new oD(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class oD{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return iz.comparator(e.key,t.key)||iP(e.pr,t.pr)}static Er(e,t){return iP(e.pr,t.pr)||iz.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new sn(oD.Ir)}checkEmpty(e){return iQ.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new aB(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.wr=this.wr.add(new oD(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return iQ.resolve(s)}lookupMutationBatch(e,t){return iQ.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.br(t+1),r=n<0?0:n;return iQ.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return iQ.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return iQ.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new oD(t,0),r=new oD(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],e=>{let t=this.Sr(e.pr);i.push(t)}),iQ.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new sn(iP);return t.forEach(e=>{let t=new oD(e,0),r=new oD(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],e=>{n=n.add(e.pr)})}),iQ.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;iz.isDocumentKey(i)||(i=i.child(""));let s=new oD(new iz(i),0),a=new sn(iP);return this.wr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.pr)),!0)},s),iQ.resolve(this.Dr(a))}Dr(e){let t=[];return e.forEach(e=>{let n=this.Sr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.Cr(t.batchId,"removed")||iT(),this.mutationQueue.shift();let n=this.wr;return iQ.forEach(t.mutations,r=>{let i=new oD(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.wr=n})}Mn(e){}containsKey(e,t){let n=new oD(t,0),r=this.wr.firstAfterOrEqual(n);return iQ.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,iQ.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){let t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.vr=e,this.docs=new i8(iz.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return iQ.resolve(n?n.document.mutableCopy():sx.newInvalidDocument(t))}getEntries(e,t){let n=ai;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():sx.newInvalidDocument(e))}),iQ.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=ai,s=t.path,a=new iz(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=iz.comparator(e.documentKey,t.documentKey))?n:iP(e.largestBatchId,t.largestBatchId)}(new iK(a.readTime,a.key,-1),n)||(r.has(a.key)||at(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return iQ.resolve(i)}getAllFromCollectionGroup(e,t,n,r){iT()}Fr(e,t){return iQ.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new oR(this)}getSize(e){return iQ.resolve(this.size)}}class oR extends ob{constructor(e){super(),this.ar=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)}),iQ.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.persistence=e,this.Mr=new ar(e=>sJ(e),sZ),this.lastRemoteSnapshotVersion=iU.min(),this.highestTargetId=0,this.Or=0,this.Nr=new oA,this.targetCount=0,this.Lr=o_.Nn()}forEachTarget(e,t){return this.Mr.forEach((e,n)=>t(n)),iQ.resolve()}getLastRemoteSnapshotVersion(e){return iQ.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return iQ.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),iQ.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),iQ.resolve()}qn(e){this.Mr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new o_(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,iQ.resolve()}updateTargetData(e,t){return this.qn(t),iQ.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,iQ.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Mr.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),iQ.waitFor(i).next(()=>r)}getTargetCount(e){return iQ.resolve(this.targetCount)}getTargetData(e,t){let n=this.Mr.get(t)||null;return iQ.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),iQ.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),iQ.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),iQ.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Nr.gr(t);return iQ.resolve(n)}containsKey(e,t){return iQ.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,t){this.Br={},this.overlays={},this.kr=new i4(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new ox(this),this.indexManager=new ov,this.remoteDocumentCache=new ok(e=>this.referenceDelegate.Kr(e)),this.serializer=new om(t),this.$r=new oS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oC,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new oN(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){iw("MemoryPersistence","Starting transaction:",e);let r=new oO(this.kr.next());return this.referenceDelegate.Ur(),n(r).next(e=>this.referenceDelegate.Wr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Gr(e,t){return iQ.or(Object.values(this.Br).map(n=>()=>n.containsKey(e,t)))}}class oO extends iG{constructor(e){super(),this.currentSequenceNumber=e}}class oM{constructor(e){this.persistence=e,this.zr=new oA,this.jr=null}static Hr(e){return new oM(e)}get Jr(){if(this.jr)return this.jr;throw iT()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),iQ.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),iQ.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),iQ.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(e=>this.Jr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Jr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return iQ.forEach(this.Jr,n=>{let r=iz.fromPath(n);return this.Yr(e,r).next(e=>{e||t.removeEntry(r,iU.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return iQ.or([()=>iQ.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=ac(),r=ac();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new oP(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=!function(){var e;let t=null===(e=U())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(d.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:iX.v(z())>0?6:4}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.ji(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Hi(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new oV;return this.Ji(e,t,n).next(r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)})}).next(()=>i.result)}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(iv()<=eQ.DEBUG&&iw("QueryEngine","SDK will not create cache indexes for query:",ae(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),iQ.resolve()):(iv()<=eQ.DEBUG&&iw("QueryEngine","Query:",ae(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(iv()<=eQ.DEBUG&&iw("QueryEngine","The SDK decides to create cache indexes for query:",ae(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,s6(t))):iQ.resolve())}ji(e,t){if(s2(t))return iQ.resolve(null);let n=s6(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=s6(t=s3(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=ac(...r);return this.zi.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,s3(t,null,"F")):this.es(e,s,t,n)}))})))}Hi(e,t,n,r){return s2(t)||r.isEqual(iU.min())?iQ.resolve(null):this.zi.getDocuments(e,n).next(i=>{let s=this.Zi(t,i);return this.Xi(t,s,n,r)?iQ.resolve(null):(iv()<=eQ.DEBUG&&iw("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ae(t)),this.es(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new iK(iU.fromTimestamp(1e9===r?new iF(n+1,0):new iF(n,r)),iz.empty(),-1)}(r,0)).next(e=>e))})}Zi(e,t){let n=new sn(an(e));return t.forEach((t,r)=>{at(e,r)&&(n=n.add(r))}),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return iv()<=eQ.DEBUG&&iw("QueryEngine","Using full collection scan to execute query:",ae(t)),this.zi.getDocumentsMatchingQuery(e,t,iK.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new i8(iP),this.rs=new ar(e=>sJ(e),sZ),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oI(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}async function oB(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=ac();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({us:e,removedBatchIds:i,addedBatchIds:s}))})})}function oj(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}async function oq(e,t,n){let r=e.ns.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!iZ(e))throw e;iw("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ns=e.ns.remove(t),e.rs.delete(r.target)}function o$(e,t,n){let r=iU.min(),i=ac();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.rs.get(n);return void 0!==r?iQ.resolve(e.ns.get(r)):e.Qr.getTargetData(t,n)})(e,s,s6(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ts.getDocumentsMatchingQuery(s,t,n?r:iU.min(),n?i:ac())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ss.get(r)||iU.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ss.set(r,s),{documents:n,hs:i}}))}class oz{constructor(){this.activeTargetIds=ad}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class oK{constructor(){this.no=new oz,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new oz,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oG{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oH{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){for(let e of(iw("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.uo))e(0)}ao(){for(let e of(iw("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.uo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oQ=null;function oW(){return null===oQ?oQ=268435456+Math.round(2147483648*Math.random()):oQ++,"0x"+oQ.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oX={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oY{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oJ="WebChannelConnection";class oZ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${r}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get wo(){return!1}So(e,t,n,r,i){let s=oW(),a=this.bo(e,t.toUriEncodedString());iw("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(o,r,i),this.Co(e,a,o,n).then(t=>(iw("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw i_("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}vo(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+im}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}bo(e,t){let n=oX[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,r){let i=oW();return new Promise((s,a)=>{let o=new iu;o.setWithCredentials(!0),o.listenOnce(ia.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case is.NO_ERROR:let t=o.getResponseJson();iw(oJ,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case is.TIMEOUT:iw(oJ,`RPC '${e}' ${i} timed out`),a(new iS(iI.DEADLINE_EXCEEDED,"Request time out"));break;case is.HTTP_ERROR:let n=o.getStatus();if(iw(oJ,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(iI).indexOf(t)>=0?t:iI.UNKNOWN}(t.status);a(new iS(e,t.message))}else a(new iS(iI.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new iS(iI.UNAVAILABLE,"Connection failed."));break;default:iT()}}finally{iw(oJ,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(r);iw(oJ,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)})}Fo(e,t,n){let r=oW(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ir(),a=ii(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(o.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Do(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let u=i.join("");iw(oJ,`Creating RPC '${e}' stream ${r}: ${u}`,o);let c=s.createWebChannel(u,o),d=!1,f=!1,p=new oY({lo:t=>{f?iw(oJ,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(iw(oJ,`Opening RPC '${e}' stream ${r} transport.`),c.open(),d=!0),iw(oJ,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},ho:()=>c.close()}),g=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(c,ih.EventType.OPEN,()=>{f||iw(oJ,`RPC '${e}' stream ${r} transport opened.`)}),g(c,ih.EventType.CLOSE,()=>{f||(f=!0,iw(oJ,`RPC '${e}' stream ${r} transport closed`),p.Vo())}),g(c,ih.EventType.ERROR,t=>{f||(f=!0,i_(oJ,`RPC '${e}' stream ${r} transport errored:`,t),p.Vo(new iS(iI.UNAVAILABLE,"The operation could not be completed")))}),g(c,ih.EventType.MESSAGE,t=>{var n;if(!f){let i=t.data[0];i||iT();let s=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(s){iw(oJ,`RPC '${e}' stream ${r} received error:`,s);let t=s.status,n=function(e){let t=l[e];if(void 0!==t)return az(t)}(t),i=s.message;void 0===n&&(n=iI.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,p.Vo(new iS(n,i)),c.close()}else iw(oJ,`RPC '${e}' stream ${r} received:`,i),p.mo(i)}}),g(a,io.STAT_EVENT,t=>{t.stat===il.PROXY?iw(oJ,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===il.NOPROXY&&iw(oJ,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.Ro()},0),p}}function o0(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(e){return new a7(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();let t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,t-n);r>0&&iw("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(e,t,n,r,i,s,a,o){this.oi=e,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new o2(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===iI.RESOURCE_EXHAUSTED?(iE(t.toString()),iE("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===iI.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;let e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Wo===t&&this.o_(e,n)},t=>{e(()=>{let e=new iS(iI.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)})})}o_(e,t){let n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{n(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(e=>{n(()=>this.__(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return iw("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(iw("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class o4 extends o9{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:iT(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||iT(),sa.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||iT(),sa.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new a0(s,a,o,l&&new iS(void 0===l.code?iI.UNKNOWN:az(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=oo(e,r.document.name),s=on(r.document.updateTime),a=r.document.createTime?on(r.document.createTime):iU.min(),o=new sR({mapValue:{fields:r.document.fields}}),l=sx.newFoundDocument(i,s,a,o);n=new aJ(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=oo(e,r.document),s=r.readTime?on(r.readTime):iU.min(),a=sx.newNoDocument(i,s);n=new aJ([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=oo(e,r.document);n=new aJ([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return iT();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new a$(r,i);n=new aZ(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return iU.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?iU.min():t.readTime?on(t.readTime):iU.min()}(e);return this.listener.u_(t,n)}c_(e){let t={};t.database=oh(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=s0(r)?{documents:{documents:[ol(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=ol(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof sF?function(e){if("=="===e.op){if(sA(e.value))return{unaryFilter:{field:od(e.field),op:"IS_NAN"}};if(sC(e.value))return{unaryFilter:{field:od(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(sA(e.value))return{unaryFilter:{field:od(e.field),op:"IS_NOT_NAN"}};if(sC(e.value))return{unaryFilter:{field:od(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:od(e.field),op:a5[e.op],value:e.value}}}(t):t instanceof sU?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:a3[t.op],filters:n}}}(t):iT()}(sU.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:od(e.field),direction:a6[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=a8(e,t.limit);return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{ut:s,parent:i}}(e,r).ut}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=ot(e,t.resumeToken);let r=a8(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(iU.min())>0){n.readTime=oe(e,t.snapshotVersion.toTimestamp());let r=a8(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return iT()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){let t={};t.database=oh(this.serializer),t.removeTarget=e,this.t_(t)}}class o6 extends o9{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||iT(),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||iT(),t.map(e=>{let t;return(t=e.updateTime?on(e.updateTime):on(n)).isEqual(iU.min())&&(t=on(n)),new aC(t,e.transformResults||[])})):[]),i=on(e.commitTime);return this.listener.T_(i,r)}return e.writeResults&&0!==e.writeResults.length&&iT(),this.h_=!0,this.listener.E_()}d_(){let e={};e.database=oh(this.serializer),this.t_(e)}I_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof aL)r={update:oc(e,t.key,t.value)};else if(t instanceof aF)r={delete:oa(e,t.key)};else if(t instanceof aO)r={update:oc(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof aU))return iT();r={verify:oa(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof ay)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof av)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof aE)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ab)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw iT()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:oe(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:iT()),r})(this.serializer,e))};this.t_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5 extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new iS(iI.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,oi(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===iI.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new iS(iI.UNKNOWN,e.toString())})}vo(e,t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.vo(e,oi(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===iI.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new iS(iI.UNKNOWN,e.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class o3{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(iE(t),this.g_=!1):iw("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o7{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(e=>{n.enqueueAndForget(async()=>{lo(this)&&(iw("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.v_.add(4),await le(e),e.x_.set("Unknown"),e.v_.delete(4),await o8(e)}(this))})}),this.x_=new o3(n,r)}}async function o8(e){if(lo(e))for(let t of e.F_)await t(!0)}async function le(e){for(let t of e.F_)await t(!1)}function lt(e,t){e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),la(e)?ls(e):lb(e).Jo()&&lr(e,t))}function ln(e,t){let n=lb(e);e.C_.delete(t),n.Jo()&&li(e,t),0===e.C_.size&&(n.Jo()?n.Xo():lo(e)&&e.x_.set("Unknown"))}function lr(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(iU.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}lb(e).c_(t)}function li(e,t){e.O_.Oe(t),lb(e).l_(t)}function ls(e){e.O_=new a2({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),lb(e).start(),e.x_.p_()}function la(e){return lo(e)&&!lb(e).Ho()&&e.C_.size>0}function lo(e){return 0===e.v_.size}async function ll(e){e.C_.forEach((t,n)=>{lr(e,t)})}async function lh(e,t){e.O_=void 0,la(e)?(e.x_.S_(t),ls(e)):e.x_.set("Unknown")}async function lu(e,t,n){if(e.x_.set("Online"),t instanceof a0&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.C_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.C_.delete(r),e.O_.removeTarget(r))}(e,t)}catch(n){iw("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await lc(e,n)}else if(t instanceof aJ?e.O_.$e(t):t instanceof aZ?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(iU.min()))try{let t=await oj(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.O_.it(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.C_.get(r);i&&e.C_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.C_.get(t);if(!r)return;e.C_.set(t,r.withResumeToken(sa.EMPTY_BYTE_STRING,r.snapshotVersion)),li(e,t);let i=new og(r.target,t,n,r.sequenceNumber);lr(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){iw("RemoteStore","Failed to raise snapshot:",t),await lc(e,t)}}async function lc(e,t,n){if(!iZ(t))throw t;e.v_.add(1),await le(e),e.x_.set("Offline"),n||(n=()=>oj(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{iw("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await o8(e)})}function ld(e,t){return t().catch(n=>lc(e,n,t))}async function lf(e){let t=lT(e),n=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;lo(e)&&e.D_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.D_.length&&t.Xo();break}n=r.batchId,function(e,t){e.D_.push(t);let n=lT(e);n.Jo()&&n.P_&&n.I_(t.mutations)}(e,r)}catch(t){await lc(e,t)}lp(e)&&lg(e)}function lp(e){return lo(e)&&!lT(e).Ho()&&e.D_.length>0}function lg(e){lT(e).start()}async function lm(e){lT(e).d_()}async function ly(e){let t=lT(e);for(let n of e.D_)t.I_(n.mutations)}async function lv(e,t,n){let r=e.D_.shift(),i=aj.from(r,t,n);await ld(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await lf(e)}async function lw(e,t){t&&lT(e).P_&&await async function(e,t){var n;if(function(e){switch(e){default:return iT();case iI.CANCELLED:case iI.UNKNOWN:case iI.DEADLINE_EXCEEDED:case iI.RESOURCE_EXHAUSTED:case iI.INTERNAL:case iI.UNAVAILABLE:case iI.UNAUTHENTICATED:return!1;case iI.INVALID_ARGUMENT:case iI.NOT_FOUND:case iI.ALREADY_EXISTS:case iI.PERMISSION_DENIED:case iI.FAILED_PRECONDITION:case iI.ABORTED:case iI.OUT_OF_RANGE:case iI.UNIMPLEMENTED:case iI.DATA_LOSS:return!0}}(n=t.code)&&n!==iI.ABORTED){let n=e.D_.shift();lT(e).Zo(),await ld(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await lf(e)}}(e,t),lp(e)&&lg(e)}async function lE(e,t){e.asyncQueue.verifyOperationInProgress(),iw("RemoteStore","RemoteStore received new credentials");let n=lo(e);e.v_.add(3),await le(e),n&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await o8(e)}async function l_(e,t){t?(e.v_.delete(2),await o8(e)):t||(e.v_.add(2),await le(e),e.x_.set("Unknown"))}function lb(e){var t,n,r;return e.N_||(e.N_=(t=e.datastore,n=e.asyncQueue,r={Po:ll.bind(null,e),To:lh.bind(null,e),u_:lu.bind(null,e)},t.R_(),new o4(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.F_.push(async t=>{t?(e.N_.Zo(),la(e)?ls(e):e.x_.set("Unknown")):(await e.N_.stop(),e.O_=void 0)})),e.N_}function lT(e){var t,n,r;return e.L_||(e.L_=(t=e.datastore,n=e.asyncQueue,r={Po:lm.bind(null,e),To:lw.bind(null,e),E_:ly.bind(null,e),T_:lv.bind(null,e)},t.R_(),new o6(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.F_.push(async t=>{t?(e.L_.Zo(),await lf(e)):(await e.L_.stop(),e.D_.length>0&&(iw("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new iC,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new lI(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new iS(iI.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lS(e,t){if(iE("AsyncQueue",`${t}: ${e}`),iZ(e))return new iS(iI.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.comparator=e?(t,n)=>e(t,n)||iz.comparator(t.key,n.key):(e,t)=>iz.comparator(e.key,t.key),this.keyedMap=aa(),this.sortedSet=new i8(this.comparator)}static emptySet(e){return new lC(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lC)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new lC;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(){this.B_=new i8(iz.comparator)}track(e){let t=e.doc.key,n=this.B_.get(t);n?0!==e.type&&3===n.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==n.type?this.B_=this.B_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.B_=this.B_.remove(t):1===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):iT():this.B_=this.B_.insert(t,e)}k_(){let e=[];return this.B_.inorderTraversal((t,n)=>{e.push(n)}),e}}class lD{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new lD(e,t,lC.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&s7(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class lk{constructor(){this.queries=new ar(e=>s8(e),s7),this.onlineState="Unknown",this.W_=new Set}}async function lR(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.K_()&&t.U_()&&(n=2):(i=new lN,n=t.U_()?0:1);try{switch(n){case 0:i.q_=await e.onListen(r,!0);break;case 1:i.q_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=lS(n,`Initialization of query '${ae(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.Q_.push(t),t.G_(e.onlineState),i.q_&&t.z_(i.q_)&&lM(e)}async function lx(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.Q_.indexOf(t);e>=0&&(i.Q_.splice(e,1),0===i.Q_.length?r=t.U_()?0:1:!i.K_()&&t.U_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function lL(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.Q_)e.z_(r)&&(n=!0);i.q_=r}}n&&lM(e)}function lO(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.Q_)e.onError(n);e.queries.delete(t)}function lM(e){e.W_.forEach(e=>{e.next()})}(c=u||(u={})).j_="default",c.Cache="cache";class lP{constructor(e,t,n){this.query=e,this.H_=t,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=n||{}}z_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new lD(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),t=!0):this.X_(e,this.onlineState)&&(this.ea(e),t=!0),this.Y_=e,t}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let t=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),t=!0),t}X_(e,t){return!(e.fromCache&&this.U_())||(!this.options.ta||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Z_(e){if(e.docChanges.length>0)return!0;let t=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ea(e){e=lD.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==u.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e){this.key=e}}class lF{constructor(e){this.key=e}}class lU{constructor(e,t){this.query=e,this.ua=t,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ac(),this.mutatedKeys=ac(),this.ha=an(e),this.Pa=new lC(this.ha)}get Ia(){return this.ua}Ta(e,t){let n=t?t.Ea:new lA,r=t?t.Pa:this.Pa,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let h=r.get(e),u=at(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),f=!1;h&&u?h.data.isEqual(u.data)?c!==d&&(n.track({type:3,doc:u}),f=!0):this.da(h,u)||(n.track({type:2,doc:u}),f=!0,(o&&this.ha(u,o)>0||l&&0>this.ha(u,l))&&(a=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(o||l)&&(a=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Pa:s,Ea:n,Xi:a,mutatedKeys:i}}da(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;let s=e.Ea.k_();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return iT()}};return n(e)-n(t)})(e.type,t.type)||this.ha(e.doc,t.doc)),this.Aa(n),r=null!=r&&r;let a=t&&!r?this.Ra():[],o=0===this.la.size&&this.current&&!r?1:0,l=o!==this.ca;return(this.ca=o,0!==s.length||l)?{snapshot:new lD(this.query,e.Pa,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new lA,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(e=>this.ua=this.ua.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ua=this.ua.delete(e)),this.current=e.current)}Ra(){if(!this.current)return[];let e=this.la;this.la=ac(),this.Pa.forEach(e=>{this.ma(e.key)&&(this.la=this.la.add(e.key))});let t=[];return e.forEach(e=>{this.la.has(e)||t.push(new lF(e))}),this.la.forEach(n=>{e.has(n)||t.push(new lV(n))}),t}fa(e){this.ua=e.hs,this.la=ac();let t=this.Ta(e.documents);return this.applyChanges(t,!0)}ga(){return lD.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,0===this.ca,this.hasCachedResults)}}class lB{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class lj{constructor(e){this.key=e,this.pa=!1}}class lq{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.ya={},this.wa=new ar(e=>s8(e),s7),this.Sa=new Map,this.ba=new Set,this.Da=new i8(iz.comparator),this.Ca=new Map,this.va=new oA,this.Fa={},this.Ma=new Map,this.xa=o_.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return!0===this.Oa}}async function l$(e,t,n=!0){let r;let i=he(e),s=i.wa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ga()):r=await lK(i,t,n,!0),r}async function lz(e,t){let n=he(e);await lK(n,t,!0,!1)}async function lK(e,t,n,r){var i,s;let a;let o=await (i=e.localStore,s=s6(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Qr.getTargetData(e,s).next(n=>n?(t=n,iQ.resolve(t)):i.Qr.allocateTargetId(e).next(n=>(t=new og(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.Qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.ns.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.ns=i.ns.insert(e.targetId,e),i.rs.set(s,e.targetId)),e})),l=o.targetId,h=n?e.sharedClientState.addLocalQueryTarget(l):"not-current";return r&&(a=await lG(e,t,l,"current"===h,o.resumeToken)),e.isPrimaryClient&&n&&lt(e.remoteStore,o),a}async function lG(e,t,n,r,i){e.Na=(t,n,r)=>(async function(e,t,n,r){let i=t.view.Ta(n);i.Xi&&(i=await o$(e.localStore,t.query,!1).then(({documents:e})=>t.view.Ta(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return l6(e,t.targetId,o.Va),o.snapshot})(e,t,n,r);let s=await o$(e.localStore,t,!0),a=new lU(t,s.hs),o=a.Ta(s.documents),l=aY.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),h=a.applyChanges(o,e.isPrimaryClient,l);l6(e,n,h.Va);let u=new lB(t,n,a);return e.wa.set(t,u),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),h.snapshot}async function lH(e,t,n){let r=e.wa.get(t),i=e.Sa.get(r.targetId);if(i.length>1)return e.Sa.set(r.targetId,i.filter(e=>!s7(e,t))),void e.wa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await oq(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&ln(e.remoteStore,r.targetId),l9(e,r.targetId)}).catch(iH)):(l9(e,r.targetId),await oq(e.localStore,r.targetId,!0))}async function lQ(e,t){let n=e.wa.get(t),r=e.Sa.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ln(e.remoteStore,n.targetId))}async function lW(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=lZ.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=l0.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=iF.now(),s=t.reduce((e,t)=>e.add(t.key),ac());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=ai,l=ac();return e.os.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=am(r.transform,e||null);null!=i&&(null===n&&(n=sR.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new aO(e.key,t,function e(t){let n=[];return i3(t.fields,(t,r)=>{let i=new i$([t]);if(sD(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new si(n)}(t.value.mapValue),aA.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:ao(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Fa[i.currentUser.toKey()])||(e=new i8(iP)),e=e.insert(r,n),i.Fa[i.currentUser.toKey()]=e,await l3(i,s.changes),await lf(i.remoteStore)}catch(t){let e=lS(t,"Failed to persist write");n.reject(e)}}async function lX(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.os.newChangeBuffer({trackRemovals:!0});r=e.ns;let h=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;h.push(e.Qr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Qr.addMatchingKeys(i,s.addedDocuments,a)));let u=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(sa.EMPTY_BYTE_STRING,iU.min()).withLastLimboFreeSnapshotVersion(iU.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,n)),r=r.insert(a,u),o=u,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Qr.updateTargetData(i,u))});let u=ai,c=ac();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),h.push((s=t.documentUpdates,a=ac(),o=ac(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=ai;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(iU.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):iw("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{cs:t,ls:o}})).next(e=>{u=e.cs,c=e.ls})),!n.isEqual(iU.min())){let t=e.Qr.getLastRemoteSnapshotVersion(i).next(t=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,n));h.push(t)}return iQ.waitFor(h).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(t=>(e.ns=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Ca.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||iT(),t.addedDocuments.size>0?r.pa=!0:t.modifiedDocuments.size>0?r.pa||iT():t.removedDocuments.size>0&&(r.pa||iT(),r.pa=!1))}),await l3(e,n,t)}catch(e){await iH(e)}}function lY(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.wa.forEach((e,n)=>{let r=n.view.G_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.Q_)e.G_(t)&&(n=!0)}),n&&lM(r),i.length&&e.ya.u_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function lJ(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Ca.get(t),i=r&&r.key;if(i){let n=new i8(iz.comparator);n=n.insert(i,sx.newNoDocument(i,iU.min()));let r=ac().add(i),s=new aX(iU.min(),new Map,new i8(iP),n,r);await lX(e,s),e.Da=e.Da.remove(i),e.Ca.delete(t),l5(e)}else await oq(e.localStore,t,!1).then(()=>l9(e,t,n)).catch(iH)}async function lZ(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=iQ.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||iT(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ac();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});l2(e,r,null),l1(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await l3(e,i)}catch(e){await iH(e)}}async function l0(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||iT(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});l2(e,t,n),l1(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await l3(e,i)}catch(e){await iH(e)}}function l1(e,t){(e.Ma.get(t)||[]).forEach(e=>{e.resolve()}),e.Ma.delete(t)}function l2(e,t,n){let r=e.Fa[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Fa[e.currentUser.toKey()]=r}}function l9(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Sa.get(t)))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(t=>{e.va.containsKey(t)||l4(e,t)})}function l4(e,t){e.ba.delete(t.path.canonicalString());let n=e.Da.get(t);null!==n&&(ln(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),l5(e))}function l6(e,t,n){for(let r of n)r instanceof lV?(e.va.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(iw("SyncEngine","New document in limbo: "+n),e.ba.add(r),l5(e))}(e,r)):r instanceof lF?(iw("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||l4(e,r.key)):iT()}function l5(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){let t=e.ba.values().next().value;e.ba.delete(t);let n=new iz(ij.fromString(t)),r=e.xa.next();e.Ca.set(r,new lj(n)),e.Da=e.Da.insert(n,r),lt(e.remoteStore,new og(s6(new s1(n.path)),r,"TargetPurposeLimboResolution",i4._e))}}async function l3(e,t,n){let r=[],i=[],s=[];e.wa.isEmpty()||(e.wa.forEach((a,o)=>{s.push(e.Na(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=oP.Ki(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.ya.u_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>iQ.forEach(t,t=>iQ.forEach(t.qi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>iQ.forEach(t.Qi,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!iZ(e))throw e;iw("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.ns.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.ns=e.ns.insert(t,i)}}}(e.localStore,i))}async function l7(e,t){var n;if(!e.currentUser.isEqual(t)){iw("SyncEngine","User change. New user:",t.toKey());let r=await oB(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.Ma.forEach(e=>{e.forEach(e=>{e.reject(new iS(iI.CANCELLED,n))})}),e.Ma.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await l3(e,r.us)}}function l8(e,t){let n=e.Ca.get(t);if(n&&n.pa)return ac().add(n.key);{let n=ac(),r=e.Sa.get(t);if(!r)return n;for(let t of r){let r=e.wa.get(t);n=n.unionWith(r.view.Ia)}return n}}function he(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=lX.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=l8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lJ.bind(null,e),e.ya.u_=lL.bind(null,e.eventManager),e.ya.La=lO.bind(null,e.eventManager),e}class ht{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=o1(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new oU(t,new oF,e.initialUser,this.serializer)}createPersistence(e){return new oL(oM.Hr,this.serializer)}createSharedClientState(e){return new oK}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>lY(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=l7.bind(null,this.syncEngine),await l_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lk}createDatastore(e){let t=o1(e.databaseInfo.databaseId),n=new oZ(e.databaseInfo);return new o5(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new o7(t,this.datastore,e.asyncQueue,e=>lY(this.syncEngine,e,0),oH.D()?new oH:new oG)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new lq(e,t,n,r,i,s);return a&&(o.Oa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){iw("RemoteStore","RemoteStore shutting down."),e.v_.add(5),await le(e),e.M_.shutdown(),e.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):iE("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=ig.UNAUTHENTICATED,this.clientId=iM.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{iw("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(iw("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new iS(iI.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new iC;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=lS(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function hs(e,t){e.asyncQueue.verifyOperationInProgress(),iw("FirestoreClient","Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await oB(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ha(e,t){e.asyncQueue.verifyOperationInProgress();let n=await ho(e);iw("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>lE(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>lE(t.remoteStore,n)),e._onlineComponents=t}async function ho(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){iw("FirestoreClient","Using user provided OfflineComponentProvider");try{await hs(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===iI.FAILED_PRECONDITION||t.code===iI.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;i_("Error using user provided cache. Falling back to memory cache: "+t),await hs(e,new ht)}}else iw("FirestoreClient","Using default OfflineComponentProvider"),await hs(e,new ht)}return e._offlineComponents}async function hl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(iw("FirestoreClient","Using user provided OnlineComponentProvider"),await ha(e,e._uninitializedComponentsProvider._online)):(iw("FirestoreClient","Using default OnlineComponentProvider"),await ha(e,new hn))),e._onlineComponents}async function hh(e){let t=await hl(e),n=t.eventManager;return n.onListen=l$.bind(null,t.syncEngine),n.onUnlisten=lH.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=lz.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=lQ.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(e,t,n){if(!n)throw new iS(iI.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function hf(e){if(!iz.isDocumentKey(e))throw new iS(iI.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function hp(e){if(iz.isDocumentKey(e))throw new iS(iI.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function hg(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":iT()}function hm(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new iS(iI.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=hg(e);throw new iS(iI.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new iS(iI.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new iS(iI.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new iS(iI.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hu(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new iS(iI.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new iS(iI.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new iS(iI.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hv{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hy({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new iS(iI.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new iS(iI.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hy(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new iD;switch(e.type){case"firstParty":return new ix(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new iS(iI.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=hc.get(e);t&&(iw("ComponentProvider","Removing Datastore"),hc.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new hw(this.firestore,e,this._query)}}class hE{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new h_(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hE(this.firestore,e,this._key)}}class h_ extends hw{constructor(e,t,n){super(e,t,new s1(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new hE(this.firestore,null,new iz(e))}withConverter(e){return new h_(this.firestore,e,this._path)}}function hb(e,t,...n){if(e=Y(e),1==arguments.length&&(t=iM.newId()),hd("doc","path",t),e instanceof hv){let r=ij.fromString(t,...n);return hf(r),new hE(e,null,new iz(r))}{if(!(e instanceof hE||e instanceof h_))throw new iS(iI.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(ij.fromString(t,...n));return hf(r),new hE(e.firestore,e instanceof h_?e.converter:null,new iz(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new o2(this,"async_queue_retry"),this.cu=()=>{let e=o0();e&&iw("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};let e=o0();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;let t=o0();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});let t=new iC;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(0!==this.ru.length){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!iZ(e))throw e;iw("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){let t=this.nu.then(()=>(this._u=!0,e().catch(e=>{let t;throw this.ou=e,this._u=!1,iE("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this._u=!1,e))));return this.nu=t,t}enqueueAfterDelay(e,t,n){this.lu(),this.uu.indexOf(e)>-1&&(t=0);let r=lI.createAndSchedule(this,e,t,n,e=>this.Iu(e));return this.su.push(r),r}lu(){this.ou&&iT()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(let t of this.su)if(t.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{for(let t of(this.su.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.su))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){let t=this.su.indexOf(e);this.su.splice(t,1)}}class hI extends hv{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new hT,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hC(this),this._firestoreClient.terminate()}}function hS(e){return e._firestoreClient||hC(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function hC(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new sp(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,hu(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new hi(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hA(sa.fromBase64String(e))}catch(e){throw new iS(iI.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new hA(sa.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new iS(iI.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new i$(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new iS(iI.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new iS(iI.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return iP(this._lat,e._lat)||iP(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=/^__.*__$/;class hx{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new aO(e,this.data,this.fieldMask,t,this.fieldTransforms):new aL(e,this.data,t,this.fieldTransforms)}}class hL{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new aO(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hO(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw iT()}}class hM{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new hM(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.mu({path:n,gu:!1});return r.pu(e),r}yu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.mu({path:n,gu:!1});return r.Ru(),r}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return hX(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(0===e.length)throw this.Su("Document fields must not be empty");if(hO(this.Vu)&&hR.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class hP{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||o1(e)}Cu(e,t,n,r=!1){return new hM({Vu:e,methodName:t,Du:n,path:i$.emptyPath(),gu:!1,bu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hV(e){let t=e._freezeSettings(),n=o1(e._databaseId);return new hP(e._databaseId,!!t.ignoreUndefinedProperties,n)}function hF(e,t,n,r,i,s={}){let a,o;let l=e.Cu(s.merge||s.mergeFields?2:0,t,n,i);hG("Data must be an object, but it was:",l,r);let h=hz(r,l);if(s.merge)a=new si(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=hH(t,r,n);if(!l.contains(i))throw new iS(iI.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);hY(e,i)||e.push(i)}a=new si(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new hx(new sR(h),a,o)}class hU extends hN{_toFieldTransform(e){if(2!==e.Vu)throw 1===e.Vu?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hU}}class hB extends hN{_toFieldTransform(e){return new aS(e.path,new ay)}isEqual(e){return e instanceof hB}}function hj(e,t,n,r){let i=e.Cu(1,t,n);hG("Data must be an object, but it was:",i,r);let s=[],a=sR.empty();return i3(r,(e,r)=>{let o=hW(t,e,n);r=Y(r);let l=i.yu(o);if(r instanceof hU)s.push(o);else{let e=h$(r,l);null!=e&&(s.push(o),a.set(o,e))}}),new hL(a,new si(s),i.fieldTransforms)}function hq(e,t,n,r,i,s){let a=e.Cu(1,t,n),o=[hH(t,r,n)],l=[i];if(s.length%2!=0)throw new iS(iI.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(hH(t,s[e])),l.push(s[e+1]);let h=[],u=sR.empty();for(let e=o.length-1;e>=0;--e)if(!hY(h,o[e])){let t=o[e],n=l[e];n=Y(n);let r=a.yu(t);if(n instanceof hU)h.push(t);else{let e=h$(n,r);null!=e&&(h.push(t),u.set(t,e))}}return new hL(u,new si(h),a.fieldTransforms)}function h$(e,t){if(hK(e=Y(e)))return hG("Unsupported field value:",t,e),hz(e,t);if(e instanceof hN)return function(e,t){if(!hO(t.Vu))throw t.Su(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Su(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.gu&&4!==t.Vu)throw t.Su("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=h$(i,t.wu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Y(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!i6(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?ap(r):af(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=iF.fromDate(e);return{timestampValue:oe(t.serializer,n)}}if(e instanceof iF){let n=new iF(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:oe(t.serializer,n)}}if(e instanceof hk)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof hA)return{bytesValue:ot(t.serializer,e._byteString)};if(e instanceof hE){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Su(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:or(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Su(`Unsupported field value: ${hg(e)}`)}(e,t)}function hz(e,t){let n={};return i7(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):i3(e,(e,r)=>{let i=h$(r,t.fu(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function hK(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof iF||e instanceof hk||e instanceof hA||e instanceof hE||e instanceof hN)}function hG(e,t,n){if(!hK(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=hg(n);throw"an object"===r?t.Su(e+" a custom object"):t.Su(e+" "+r)}}function hH(e,t,n){if((t=Y(t))instanceof hD)return t._internalPath;if("string"==typeof t)return hW(e,t);throw hX("Field path arguments must be of type string or ",e,!1,void 0,n)}const hQ=RegExp("[~\\*/\\[\\]]");function hW(e,t,n){if(t.search(hQ)>=0)throw hX(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new hD(...t.split("."))._internalPath}catch(r){throw hX(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function hX(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new iS(iI.INVALID_ARGUMENT,o+e+l)}function hY(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hJ{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new hE(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new hZ(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(h0("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class hZ extends hJ{data(){return super.data()}}function h0(e,t){return"string"==typeof t?hW(e,t):t instanceof hD?t._internalPath:t._delegate._internalPath}class h1{}class h2 extends h1{}class h9 extends h2{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new h9(e,t,n)}_apply(e){let t=this._parse(e);return h7(e._query,t),new hw(e.firestore,e.converter,s5(e._query,t))}_parse(e){let t=hV(e.firestore);return function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new iS(iI.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){h3(a,s);let t=[];for(let n of a)t.push(h5(r,e,n));o={arrayValue:{values:t}}}else o=h5(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||h3(a,s),o=function(e,t,n,r=!1){return h$(n,e.Cu(r?4:3,t))}(n,t,a,"in"===s||"not-in"===s);return sF.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class h4 extends h1{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new h4(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:sU.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;for(let e of t.getFlattenedFilters())h7(n,e),n=s5(n,e)}(e._query,t),new hw(e.firestore,e.converter,s5(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class h6 extends h2{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new h6(e,t)}_apply(e){let t=function(e,t,n){if(null!==e.startAt)throw new iS(iI.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new iS(iI.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sP(t,n)}(e._query,this._field,this._direction);return new hw(e.firestore,e.converter,function(e,t){let n=e.explicitOrderBy.concat([t]);return new s1(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function h5(e,t,n){if("string"==typeof(n=Y(n))){if(""===n)throw new iS(iI.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!s9(t)&&-1!==n.indexOf("/"))throw new iS(iI.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=t.path.child(ij.fromString(n));if(!iz.isDocumentKey(r))throw new iS(iI.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sT(e,new iz(r))}if(n instanceof hE)return sT(e,n._key);throw new iS(iI.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hg(n)}.`)}function h3(e,t){if(!Array.isArray(e)||0===e.length)throw new iS(iI.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function h7(e,t){let n=function(e,t){for(let n of e)for(let e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new iS(iI.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new iS(iI.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class h8{convertValue(e,t="none"){switch(sy(e)){case 0:return null;case 1:return e.booleanValue;case 2:return sh(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(su(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw iT()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return i3(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new hk(sh(e.latitude),sh(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=sd(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(sf(e));default:return null}}convertTimestamp(e){let t=sl(e);return new iF(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=ij.fromString(e);op(n)||iT();let r=new sg(n.get(1),n.get(3)),i=new iz(n.popFirst(5));return r.isEqual(t)||iE(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class un extends hJ{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let n=this._document.data.field(h0("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ur extends un{data(e={}){return super.data(e)}}class ui{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ut(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ur(this._firestore,this._userDataWriter,n.key,n,new ut(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new iS(iI.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new ur(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ut(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new ur(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ut(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return iT()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class us extends h8{constructor(e){super(),this.firestore=e}convertBytes(e){return new hA(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new hE(this.firestore,null,t)}}function ua(e,t){return function(e,t){let n=new iC;return e.asyncQueue.enqueueAndForget(async()=>lW(await hl(e).then(e=>e.syncEngine),t,n)),n.promise}(hS(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=hV(e)}set(e,t,n){this._verifyNotCommitted();let r=ul(e,this._firestore),i=ue(r.converter,t,n),s=hF(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,aA.none())),this}update(e,t,n,...r){let i;this._verifyNotCommitted();let s=ul(e,this._firestore);return i="string"==typeof(t=Y(t))||t instanceof hD?hq(this._dataReader,"WriteBatch.update",s._key,t,n,r):hj(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,aA.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=ul(e,this._firestore);return this._mutations=this._mutations.concat(new aF(t._key,aA.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new iS(iI.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ul(e,t){if((e=Y(e)).firestore!==t)throw new iS(iI.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}new WeakMap,function(e=!0){im="10.9.0",eN(new J("firestore",(t,{instanceIdentifier:n,options:r})=>{let i=t.getProvider("app").getImmediate(),s=new hI(new ik(t.getProvider("auth-internal")),new iO(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new iS(iI.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sg(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),eL(ip,"4.5.0",void 0),eL(ip,"4.5.0","esm2017")}();const uh={apiKey:"AIzaSyCz-YyFxQo0FfBIzvlSEwALbEqBCjli4aw",authDomain:"movie-app-c505e.firebaseapp.com",projectId:"movie-app-c505e",storageBucket:"movie-app-c505e.appspot.com",messagingSenderId:"680383699723",appId:"1:680383699723:web:6bca7c303bf0539dc2200e"};(function(){var e,t,n;let r=document.querySelector(".js-inputMovie"),i=document.querySelector(".js-btn-new-movie"),s={moviesIds:[],moviesById:{},addMovie:function({title:e}){let t={title:e,done:!1,id:m()};return this.moviesIds.push(t.id),this.moviesById[t.id]=t,t},setMovies:function(e){e.forEach(e=>{this.moviesIds.push(e.id),this.moviesById[e.id]=e})},getMovies:function(){return{moviesById:this.moviesById,moviesIds:this.moviesIds}},toggleMovie:function(e){this.moviesById[e].done=!this.moviesById[e].done},getMovie:function(e){return this.moviesById[e]}},a=(e=".js-output",t=function(e){s.toggleMovie(e),o.update(s.getMovie(e))},n=function(e,t){o.delete(s.getMovie(e))},{node:document.querySelector(e),renderMovies:function({moviesIds:e,moviesById:t}){e.forEach(e=>{this.addMovie(t[e])})},addMovie:function(e){let r=document.createElement("input"),i=document.createElement("label"),s=document.createElement("div"),a=document.createElement("button");r.setAttribute("type","checkbox"),r.setAttribute("id",e.id),r.onclick=function(n){let r=n.target.closest(".movieItem");r&&(r.classList.toggle("movieItem-selected"),t(e.id))},e.done&&(r.setAttribute("checked",!0),s.classList.toggle("movieItem-selected")),i.innerText=e.title,i.setAttribute("for",e.id),s.append(r,i,a),this.node.append(s),s.classList.add("movieItem"),i.classList.add("movieName"),r.classList.add("btn-selected"),a.classList.add("btn-delete"),a.onclick=function(t){let r=t.target.closest(".movieItem");r&&(r.remove(),n(e.id))}}}),o={key:"movies",db:function(e,t){let n=(function(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)})("object"==typeof e?e:function(e=eS){let t=eA.get(e);if(!t&&e===eS&&q())return ex();if(!t)throw ek.create("no-app",{appName:e});return t}(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!n._initialized){let e=j("firestore");e&&function(e,t,n,r={}){var i;let s=(e=hm(e,hv))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&i_("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=ig.MOCK_USER;else{t=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[O(JSON.stringify({alg:"none",type:"JWT"})),O(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new iS(iI.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ig(s)}e._authCredentials=new iN(new iA(t,n))}}(n,...e)}return n}(ex(uh)),pull:async function(){let e=function(e,t,...n){let r=[];for(let i of(t instanceof h1&&r.push(t),function(e){let t=e.filter(e=>e instanceof h4).length,n=e.filter(e=>e instanceof h9).length;if(t>1||t>0&&n>0)throw new iS(iI.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r=r.concat(n)),r))e=i._apply(e);return e}(function(e,t,...n){if(e=Y(e),hd("collection","path",t),e instanceof hv){let r=ij.fromString(t,...n);return hp(r),new h_(e,null,r)}{if(!(e instanceof hE||e instanceof h_))throw new iS(iI.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(ij.fromString(t,...n));return hp(r),new h_(e.firestore,null,r)}}(this.db,this.key),function(e,t="asc"){let n=h0("orderBy",e);return h6._create(n,t)}("createdAdd")),t=await function(e){e=hm(e,hw);let t=hm(e.firestore,hI),n=hS(t),r=new us(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new iS(iI.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let r=new iC;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new lP(n,new hr({next:n=>{t.enqueueAndForget(()=>lx(e,s)),n.fromCache&&"server"===r.source?i.reject(new iS(iI.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),{includeMetadataChanges:!0,ta:!0});return lR(e,s)})(await hh(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new ui(t,r,e,n)))}(e),n=[];return t.forEach(e=>{n.push({id:e.id,title:e.data().title,done:e.data().done}),console.log(`${e.id} => ${e.data().title}`)}),n},push:async function(e){try{await function(e,t,n){e=hm(e,hE);let r=hm(e.firestore,hI),i=ue(e.converter,t,void 0);return ua(r,[hF(hV(r),"setDoc",e._key,i,null!==e.converter,void 0).toMutation(e._key,aA.none())])}(hb(this.db,this.key,e.id),{title:e.title,done:e.done,createdAdd:new hB("serverTimestamp")})}catch(e){console.error("Error adding document: ",e)}},delete:async function(e){var t;let n=(t=this.db,this.key,e.id,hS(t=hm(t,hI)),new uo(t,e=>ua(t,e))),r=hb(this.db,this.key,e.id);n.delete(r),await n.commit()},update:async function(e){let t=hb(this.db,this.key,e.id);console.log(e),await function(e,t,n,...r){e=hm(e,hE);let i=hm(e.firestore,hI),s=hV(i);return ua(i,[("string"==typeof(t=Y(t))||t instanceof hD?hq(s,"updateDoc",e._key,t,void 0,r):hj(s,"updateDoc",e._key,t)).toMutation(e._key,aA.exists(!0))])}(t,{done:e.done})}};return r.focus(),r.addEventListener("input",function(){""!==r.value?i.disabled=!1:i.disabled=!0}),i.addEventListener("click",function(){let e=r.value,t=s.addMovie({title:e});a.addMovie(t),o.push(t),r.value="",r.focus()}),{init(){o.pull().then(e=>{s.setMovies(e),a.renderMovies(s.getMovies())})}}})().init();