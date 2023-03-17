"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,s){s.d(t,{PL:function(){return rJ},ad:function(){return rM},hJ:function(){return rL}});var r,n,i=s(5816),a=s(740),o=s(3333),l=s(4444),u=s(3510);s(3454);let h="@firebase/firestore";/**
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
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
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
 */let d="9.18.0",m=new o.Yd("@firebase/firestore");function f(){return m.logLevel}function g(e,...t){if(m.logLevel<=o.in.DEBUG){let s=t.map(v);m.debug(`Firestore (${d}): ${e}`,...s)}}function p(e,...t){if(m.logLevel<=o.in.ERROR){let s=t.map(v);m.error(`Firestore (${d}): ${e}`,...s)}}function y(e,...t){if(m.logLevel<=o.in.WARN){let s=t.map(v);m.warn(`Firestore (${d}): ${e}`,...s)}}function v(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
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
 */function w(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
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
 */let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class C{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class S{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class N{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i,r=e=>this.i!==s?(s=this.i,t(e)):Promise.resolve(),n=new C;this.o=()=>{this.i++,this.currentUser=this.u(),n.resolve(),n=new C,e.enqueueRetryable(()=>r(this.currentUser))};let i=()=>{let t=n;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),n.resolve(),n=new C)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||w(),new I(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||w(),new c(e)}}class k{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r,this.type="FirstParty",this.user=c.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():("object"==typeof this.h&&null!==this.h&&this.h.auth&&this.h.auth.getAuthHeaderValueForFirstParty||w(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class _{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r}getToken(){return Promise.resolve(new k(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let s=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let s=e.token!==this.A;return this.A=e.token,g("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>s(t))};let r=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?r(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||w(),this.A=e.token,new D(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class R{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,s="";for(;s.length<20;){let r=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),s=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(s);else for(let t=0;t<e;t++)s[t]=Math.floor(256*Math.random());return s}(40);for(let n=0;n<r.length;++n)s.length<20&&r[n]<t&&(s+=e.charAt(r[n]%e.length))}return s}}function x(e,t){return e<t?-1:e>t?1:0}function L(e,t,s){return e.length===t.length&&e.every((e,r)=>s(e,t[r]))}/**
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
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new V(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new V(0,0))}static max(){return new F(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class M{constructor(e,t,s){void 0===t?t=0:t>e.length&&w(),void 0===s?s=e.length-t:s>e.length-t&&w(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return 0===M.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof M?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let s=Math.min(e.length,t.length);for(let r=0;r<s;r++){let s=e.get(r),n=t.get(r);if(s<n)return -1;if(s>n)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class O extends M{construct(e,t,s){return new O(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let s of e){if(s.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(e=>e.length>0))}return new O(t)}static emptyPath(){return new O([])}}let U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class P extends M{construct(e,t,s){return new P(e,t,s)}static isValidIdentifier(e){return U.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),P.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new P(["__name__"])}static fromServerFormat(e){let t=[],s="",r=0,n=()=>{if(0===s.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""},i=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(s+=t,r++):(n(),r++)}if(n(),i)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new P(t)}static emptyPath(){return new P([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(O.fromString(e))}static fromName(e){return new q(O.fromString(e).popFirst(5))}static empty(){return new q(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===O.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return O.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new O(e.slice()))}}class K{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new K(F.min(),q.empty(),-1)}static max(){return new K(F.max(),q.empty(),-1)}}class B{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z((s,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(s,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof z?t:z.resolve(t)}catch(e){return z.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):z.reject(t)}static resolve(e){return new z((t,s)=>{t(e)})}static reject(e){return new z((t,s)=>{s(e)})}static waitFor(e){return new z((t,s)=>{let r=0,n=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++n,i&&n===r&&t()},e=>s(e))}),i=!0,n===r&&t()})}static or(e){let t=z.resolve(!1);for(let s of e)t=t.next(e=>e?z.resolve(e):s());return t}static forEach(e,t){let s=[];return e.forEach((e,r)=>{s.push(t.call(this,e,r))}),this.waitFor(s)}static mapArray(e,t){return new z((s,r)=>{let n=e.length,i=Array(n),a=0;for(let o=0;o<n;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===n&&s(i)},e=>r(e))}})}static doWhile(e,t){return new z((s,r)=>{let n=()=>{!0===e()?t().next(()=>{n()},r):s()};n()})}}function Q(e){return"IndexedDbTransactionError"===e.name}/**
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
 */class G{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}G.at=-1;/**
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
 */class j{constructor(e,t,s,r,n,i,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=n,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class H{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new H("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof H&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function W(e){let t=0;for(let s in e)Object.prototype.hasOwnProperty.call(e,s)&&t++;return t}function Y(e,t){for(let s in e)Object.prototype.hasOwnProperty.call(e,s)&&t(s,e[s])}function X(e){return 0===e&&1/e==-1/0}/**
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
 */class J extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Z{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw e instanceof DOMException?new J("Invalid base64 string: "+e):e}}(e);return new Z(t)}static fromUint8Array(e){let t=function(e){let t="";for(let s=0;s<e.length;++s)t+=String.fromCharCode(e[s]);return t}(e);return new Z(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Z.EMPTY_BYTE_STRING=new Z("");let ee=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function et(e){if(e||w(),"string"==typeof e){let t=0,s=ee.exec(e);if(s||w(),s[1]){let e=s[1];t=Number(e=(e+"000000000").substr(0,9))}let r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:es(e.seconds),nanos:es(e.nanos)}}function es(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function er(e){return"string"==typeof e?Z.fromBase64String(e):Z.fromUint8Array(e)}/**
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
 */function en(e){var t,s;return"server_timestamp"===(null===(s=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===s?void 0:s.stringValue)}function ei(e){let t=et(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
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
 */let ea={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function eo(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?en(e)?4:ew(e)?9007199254740991:10:w()}function el(e,t){if(e===t)return!0;let s=eo(e);if(s!==eo(t))return!1;switch(s){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ei(e).isEqual(ei(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let s=et(e.timestampValue),r=et(t.timestampValue);return s.seconds===r.seconds&&s.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return er(e.bytesValue).isEqual(er(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return es(e.geoPointValue.latitude)===es(t.geoPointValue.latitude)&&es(e.geoPointValue.longitude)===es(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return es(e.integerValue)===es(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let s=es(e.doubleValue),r=es(t.doubleValue);return s===r?X(s)===X(r):isNaN(s)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],el);case 10:return function(e,t){let s=e.mapValue.fields||{},r=t.mapValue.fields||{};if(W(s)!==W(r))return!1;for(let e in s)if(s.hasOwnProperty(e)&&(void 0===r[e]||!el(s[e],r[e])))return!1;return!0}(e,t);default:return w()}}function eu(e,t){return void 0!==(e.values||[]).find(e=>el(e,t))}function eh(e,t){if(e===t)return 0;let s=eo(e),r=eo(t);if(s!==r)return x(s,r);switch(s){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){let s=es(e.integerValue||e.doubleValue),r=es(t.integerValue||t.doubleValue);return s<r?-1:s>r?1:s===r?0:isNaN(s)?isNaN(r)?0:-1:1}(e,t);case 3:return ec(e.timestampValue,t.timestampValue);case 4:return ec(ei(e),ei(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){let s=er(e),r=er(t);return s.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let s=e.split("/"),r=t.split("/");for(let e=0;e<s.length&&e<r.length;e++){let t=x(s[e],r[e]);if(0!==t)return t}return x(s.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let s=x(es(e.latitude),es(t.latitude));return 0!==s?s:x(es(e.longitude),es(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let s=e.values||[],r=t.values||[];for(let e=0;e<s.length&&e<r.length;++e){let t=eh(s[e],r[e]);if(t)return t}return x(s.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ea.mapValue&&t===ea.mapValue)return 0;if(e===ea.mapValue)return 1;if(t===ea.mapValue)return -1;let s=e.fields||{},r=Object.keys(s),n=t.fields||{},i=Object.keys(n);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){let t=x(r[e],i[e]);if(0!==t)return t;let a=eh(s[r[e]],n[i[e]]);if(0!==a)return a}return x(r.length,i.length)}(e.mapValue,t.mapValue);default:throw w()}}function ec(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);let s=et(e),r=et(t),n=x(s.seconds,r.seconds);return 0!==n?n:x(s.nanos,r.nanos)}function ed(e){var t,s;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=et(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?er(e.bytesValue).toBase64():"referenceValue"in e?(s=e.referenceValue,q.fromName(s).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",s=!0;for(let r of e.values||[])s?s=!1:t+=",",t+=ed(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),s="{",r=!0;for(let n of t)r?r=!1:s+=",",s+=`${n}:${ed(e.fields[n])}`;return s+"}"}(e.mapValue):w()}function em(e){return!!e&&"integerValue"in e}function ef(e){return!!e&&"arrayValue"in e}function eg(e){return!!e&&"nullValue"in e}function ep(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ey(e){return!!e&&"mapValue"in e}function ev(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return Y(e.mapValue.fields,(e,s)=>t.mapValue.fields[e]=ev(s)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let s=0;s<(e.arrayValue.values||[]).length;++s)t.arrayValue.values[s]=ev(e.arrayValue.values[s]);return t}return Object.assign({},e)}function ew(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class eE{constructor(e,t){this.position=e,this.inclusive=t}}function eT(e,t,s){let r=0;for(let n=0;n<e.position.length;n++){let i=t[n],a=e.position[n];if(r=i.field.isKeyField()?q.comparator(q.fromName(a.referenceValue),s.key):eh(a,s.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function eC(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let s=0;s<e.position.length;s++)if(!el(e.position[s],t.position[s]))return!1;return!0}/**
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
 */class eI{}class eA extends eI{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,s):new e_(e,t,s):"array-contains"===t?new ex(e,s):"in"===t?new eL(e,s):"not-in"===t?new eV(e,s):"array-contains-any"===t?new eF(e,s):new eA(e,t,s)}static createKeyFieldInFilter(e,t,s){return"in"===t?new eD(e,s):new eb(e,s)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(eh(t,this.value)):null!==t&&eo(this.value)===eo(t)&&this.matchesComparison(eh(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class eS extends eI{constructor(e,t){super(),this.filters=e,this.op=t,this.ft=null}static create(e,t){return new eS(e,t)}matches(e){return eN(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ft||(this.ft=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.dt(e=>e.isInequality());return null!==e?e.field:null}dt(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function eN(e){return"and"===e.op}function ek(e){for(let t of e.filters)if(t instanceof eS)return!1;return!0}class e_ extends eA{constructor(e,t,s){super(e,t,s),this.key=q.fromName(s.referenceValue)}matches(e){let t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class eD extends eA{constructor(e,t){super(e,"in",t),this.keys=eR("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eb extends eA{constructor(e,t){super(e,"not-in",t),this.keys=eR("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eR(e,t){var s;return((null===(s=t.arrayValue)||void 0===s?void 0:s.values)||[]).map(e=>q.fromName(e.referenceValue))}class ex extends eA{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ef(t)&&eu(t.arrayValue,this.value)}}class eL extends eA{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&eu(this.value.arrayValue,t)}}class eV extends eA{constructor(e,t){super(e,"not-in",t)}matches(e){if(eu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!eu(this.value.arrayValue,t)}}class eF extends eA{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ef(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>eu(this.value.arrayValue,e))}}/**
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
 */class eM{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class eO{constructor(e,t){this.comparator=e,this.root=t||eP.EMPTY}insert(e,t){return new eO(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,eP.BLACK,null,null))}remove(e){return new eO(this.comparator,this.root.remove(e,this.comparator).copy(null,null,eP.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let s=this.comparator(e,t.key);if(0===s)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){let r=this.comparator(e,s.key);if(0===r)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){let e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eU(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eU(this.root,e,this.comparator,!1)}getReverseIterator(){return new eU(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eU(this.root,e,this.comparator,!0)}}class eU{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let n=1;for(;!e.isEmpty();)if(n=t?s(e.key,t):1,t&&r&&(n*=-1),n<0)e=this.isReverse?e.left:e.right;else{if(0===n){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class eP{constructor(e,t,s,r,n){this.key=e,this.value=t,this.color=null!=s?s:eP.RED,this.left=null!=r?r:eP.EMPTY,this.right=null!=n?n:eP.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,n){return new eP(null!=e?e:this.key,null!=t?t:this.value,null!=s?s:this.color,null!=r?r:this.left,null!=n?n:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this,n=s(e,r.key);return(r=n<0?r.copy(null,null,null,r.left.insert(e,t,s),null):0===n?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s))).fixUp()}removeMin(){if(this.left.isEmpty())return eP.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let s,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return eP.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,eP.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,eP.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();let e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}eP.EMPTY=null,eP.RED=!0,eP.BLACK=!1,eP.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,s,r,n){return this}insert(e,t,s){return new eP(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class eq{constructor(e){this.comparator=e,this.data=new eO(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){let s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){let r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eK(this.data.getIterator())}getIteratorFrom(e){return new eK(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eq)||this.size!==e.size)return!1;let t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=s.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eq(this.comparator);return t.data=e,t}}class eK{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class eB{constructor(e){this.fields=e,e.sort(P.comparator)}static empty(){return new eB([])}unionWith(e){let t=new eq(P.comparator);for(let e of this.fields)t=t.add(e);for(let s of e)t=t.add(s);return new eB(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class e${constructor(e){this.value=e}static empty(){return new e$({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(!ey(t=(t.mapValue.fields||{})[e.get(s)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ev(t)}setAll(e){let t=P.emptyPath(),s={},r=[];e.forEach((e,n)=>{if(!t.isImmediateParentOf(n)){let e=this.getFieldsMap(t);this.applyChanges(e,s,r),s={},r=[],t=n.popLast()}e?s[n.lastSegment()]=ev(e):r.push(n.lastSegment())});let n=this.getFieldsMap(t);this.applyChanges(n,s,r)}delete(e){let t=this.field(e.popLast());ey(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return el(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];ey(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){for(let r of(Y(t,(t,s)=>e[t]=s),s))delete e[r]}clone(){return new e$(ev(this.value))}}/**
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
 */class ez{constructor(e,t,s,r,n,i,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=n,this.data=i,this.documentState=a}static newInvalidDocument(e){return new ez(e,0,F.min(),F.min(),F.min(),e$.empty(),0)}static newFoundDocument(e,t,s,r){return new ez(e,1,t,F.min(),s,r,0)}static newNoDocument(e,t){return new ez(e,2,t,F.min(),F.min(),e$.empty(),0)}static newUnknownDocument(e,t){return new ez(e,3,t,F.min(),F.min(),e$.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(F.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=e$.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=e$.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ez&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ez(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eQ{constructor(e,t=null,s=[],r=[],n=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=n,this.startAt=i,this.endAt=a,this._t=null}}function eG(e,t=null,s=[],r=[],n=null,i=null,a=null){return new eQ(e,t,s,r,n,i,a)}function ej(e){let t=e;if(null===t._t){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(e=>(function e(t){if(t instanceof eA)return t.field.canonicalString()+t.op.toString()+ed(t.value);if(ek(t)&&eN(t))return t.filters.map(t=>e(t)).join(",");{let s=t.filters.map(t=>e(t)).join(",");return`${t.op}(${s})`}})(e)).join(",")+"|ob:"+t.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ed(e)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ed(e)).join(",")),t._t=e}return t._t}function eH(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++){var s,r;if(s=e.orderBy[n],r=t.orderBy[n],!(s.dir===r.dir&&s.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(!function e(t,s){return t instanceof eA?s instanceof eA&&t.op===s.op&&t.field.isEqual(s.field)&&el(t.value,s.value):t instanceof eS?s instanceof eS&&t.op===s.op&&t.filters.length===s.filters.length&&t.filters.reduce((t,r,n)=>t&&e(r,s.filters[n]),!0):void w()}(e.filters[s],t.filters[s]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eC(e.startAt,t.startAt)&&eC(e.endAt,t.endAt)}function eW(e){return q.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
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
 */class eY{constructor(e,t=null,s=[],r=[],n=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=n,this.limitType=i,this.startAt=a,this.endAt=o,this.wt=null,this.gt=null,this.startAt,this.endAt}}function eX(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function eJ(e){let t=e;if(null===t.wt){t.wt=[];let e=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(t),s=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==e&&null===s)e.isKeyField()||t.wt.push(new eM(e)),t.wt.push(new eM(P.keyField(),"asc"));else{let e=!1;for(let s of t.explicitOrderBy)t.wt.push(s),s.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new eM(P.keyField(),e))}}}return t.wt}function eZ(e){let t=e;if(!t.gt){if("F"===t.limitType)t.gt=eG(t.path,t.collectionGroup,eJ(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let s of eJ(t)){let t="desc"===s.dir?"asc":"desc";e.push(new eM(s.field,t))}let s=t.endAt?new eE(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eE(t.startAt.position,t.startAt.inclusive):null;t.gt=eG(t.path,t.collectionGroup,e,t.filters,t.limit,s,r)}}return t.gt}function e0(e,t,s){return new eY(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,s,e.startAt,e.endAt)}function e1(e,t){return eH(eZ(e),eZ(t))&&e.limitType===t.limitType}function e2(e){return`${ej(eZ(e))}|lt:${e.limitType}`}function e4(e){var t;let s;return`Query(target=${s=(t=eZ(e)).path.canonicalString(),null!==t.collectionGroup&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eA?`${t.field.canonicalString()} ${t.op} ${ed(t.value)}`:t instanceof eS?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(s+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>ed(e)).join(",")),t.endAt&&(s+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>ed(e)).join(",")),`Target(${s})`}; limitType=${e.limitType})`}function e3(e,t){return t.isFoundDocument()&&function(e,t){let s=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(s):q.isDocumentKey(e.path)?e.path.isEqual(s):e.path.isImmediateParentOf(s)}(e,t)&&function(e,t){for(let s of eJ(e))if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1;return!0}(e,t)&&function(e,t){for(let s of e.filters)if(!s.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,s){let r=eT(e,t,s);return e.inclusive?r<=0:r<0}(e.startAt,eJ(e),t))&&(!e.endAt||!!function(e,t,s){let r=eT(e,t,s);return e.inclusive?r>=0:r>0}(e.endAt,eJ(e),t))}function e9(e){return(t,s)=>{let r=!1;for(let n of eJ(e)){let e=function(e,t,s){let r=e.field.isKeyField()?q.comparator(t.key,s.key):function(e,t,s){let r=t.data.field(e),n=s.data.field(e);return null!==r&&null!==n?eh(r,n):w()}(e.field,t,s);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return w()}}(n,t,s);if(0!==e)return e;r=r||n.field.isKeyField()}return 0}}/**
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
 */class e5{constructor(){this._=void 0}}class e6 extends e5{}class e8 extends e5{constructor(e){super(),this.elements=e}}function e7(e,t){let s=tn(t);for(let t of e.elements)s.some(e=>el(e,t))||s.push(t);return{arrayValue:{values:s}}}class te extends e5{constructor(e){super(),this.elements=e}}function tt(e,t){let s=tn(t);for(let t of e.elements)s=s.filter(e=>!el(e,t));return{arrayValue:{values:s}}}class ts extends e5{constructor(e,t){super(),this.Tt=e,this.It=t}}function tr(e){return es(e.integerValue||e.doubleValue)}function tn(e){return ef(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class ti{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ti}static exists(e){return new ti(void 0,e)}static updateTime(e){return new ti(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ta(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class to{}function tl(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tp(e.key,ti.none()):new tc(e.key,e.data,ti.none());{let s=e.data,r=e$.empty(),n=new eq(P.comparator);for(let e of t.fields)if(!n.has(e)){let t=s.field(e);null===t&&e.length>1&&(e=e.popLast(),t=s.field(e)),null===t?r.delete(e):r.set(e,t),n=n.add(e)}return new td(e.key,r,new eB(n.toArray()),ti.none())}}function tu(e,t,s,r){return e instanceof tc?function(e,t,s,r){if(!ta(e.precondition,t))return s;let n=e.value.clone(),i=tg(e.fieldTransforms,r,t);return n.setAll(i),t.convertToFoundDocument(t.version,n).setHasLocalMutations(),null}(e,t,s,r):e instanceof td?function(e,t,s,r){if(!ta(e.precondition,t))return s;let n=tg(e.fieldTransforms,r,t),i=t.data;return(i.setAll(tm(e)),i.setAll(n),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===s)?null:s.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,s,r):ta(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):s}function th(e,t){var s,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(s=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===s&&void 0===r||!(!s||!r)&&L(s,r,(e,t)=>{var s,r;return e.field.isEqual(t.field)&&(s=e.transform,r=t.transform,s instanceof e8&&r instanceof e8||s instanceof te&&r instanceof te?L(s.elements,r.elements,el):s instanceof ts&&r instanceof ts?el(s.It,r.It):s instanceof e6&&r instanceof e6)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tc extends to{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class td extends to{constructor(e,t,s,r,n=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=n,this.type=1}getFieldMask(){return this.fieldMask}}function tm(e){let t=new Map;return e.fieldMask.fields.forEach(s=>{if(!s.isEmpty()){let r=e.data.field(s);t.set(s,r)}}),t}function tf(e,t,s){var r;let n=new Map;e.length===s.length||w();for(let i=0;i<s.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);n.set(a.field,(r=s[i],o instanceof e8?e7(o,l):o instanceof te?tt(o,l):r))}return n}function tg(e,t,s){let r=new Map;for(let n of e){let e=n.transform,i=s.data.field(n.field);r.set(n.field,e instanceof e6?function(e,t){let s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(s.fields.__previous_value__=t),{mapValue:s}}(t,i):e instanceof e8?e7(e,i):e instanceof te?tt(e,i):function(e,t){var s,r;let n=(s=e,r=t,s instanceof ts?em(r)||r&&"doubleValue"in r?r:{integerValue:0}:null),i=tr(n)+tr(e.It);return em(n)&&em(e.It)?{integerValue:""+i}:/**
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
 */function(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:X(t)?"-0":t}}(e.Tt,i)}(e,i))}return r}class tp extends to{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ty{constructor(e){this.count=e}}function tv(e){if(void 0===e)return p("GRPC error has no .code"),E.UNKNOWN;switch(e){case r.OK:return E.OK;case r.CANCELLED:return E.CANCELLED;case r.UNKNOWN:return E.UNKNOWN;case r.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case r.INTERNAL:return E.INTERNAL;case r.UNAVAILABLE:return E.UNAVAILABLE;case r.UNAUTHENTICATED:return E.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case r.NOT_FOUND:return E.NOT_FOUND;case r.ALREADY_EXISTS:return E.ALREADY_EXISTS;case r.PERMISSION_DENIED:return E.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case r.ABORTED:return E.ABORTED;case r.OUT_OF_RANGE:return E.OUT_OF_RANGE;case r.UNIMPLEMENTED:return E.UNIMPLEMENTED;case r.DATA_LOSS:return E.DATA_LOSS;default:return w()}}(n=r||(r={}))[n.OK=0]="OK",n[n.CANCELLED=1]="CANCELLED",n[n.UNKNOWN=2]="UNKNOWN",n[n.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",n[n.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",n[n.NOT_FOUND=5]="NOT_FOUND",n[n.ALREADY_EXISTS=6]="ALREADY_EXISTS",n[n.PERMISSION_DENIED=7]="PERMISSION_DENIED",n[n.UNAUTHENTICATED=16]="UNAUTHENTICATED",n[n.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",n[n.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",n[n.ABORTED=10]="ABORTED",n[n.OUT_OF_RANGE=11]="OUT_OF_RANGE",n[n.UNIMPLEMENTED=12]="UNIMPLEMENTED",n[n.INTERNAL=13]="INTERNAL",n[n.UNAVAILABLE=14]="UNAVAILABLE",n[n.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class tw{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),s=this.inner[t];if(void 0!==s){for(let[t,r]of s)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let s=this.mapKeyFn(e),r=this.inner[s];if(void 0===r)return this.inner[s]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),s=this.inner[t];if(void 0===s)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return 1===s.length?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Y(this.inner,(t,s)=>{for(let[t,r]of s)e(t,r)})}isEmpty(){return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(this.inner)}size(){return this.innerSize}}/**
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
 */let tE=new eO(q.comparator),tT=new eO(q.comparator);function tC(...e){let t=tT;for(let s of e)t=t.insert(s.key,s);return t}function tI(){return new tw(e=>e.toString(),(e,t)=>e.isEqual(t))}new eO(q.comparator);let tA=new eq(q.comparator);function tS(...e){let t=tA;for(let s of e)t=t.add(s);return t}let tN=new eq(x);/**
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
 */class tk{constructor(e,t,s,r,n){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=n}static createSynthesizedRemoteEventForCurrentChange(e,t,s){let r=new Map;return r.set(e,t_.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new tk(F.min(),r,tN,tE,tS())}}class t_{constructor(e,t,s,r,n){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=n}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new t_(s,t,tS(),tS(),tS())}}/**
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
 */class tD{constructor(e,t,s,r){this.Et=e,this.removedTargetIds=t,this.key=s,this.At=r}}class tb{constructor(e,t){this.targetId=e,this.Rt=t}}class tR{constructor(e,t,s=Z.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class tx{constructor(){this.Pt=0,this.vt=tF(),this.bt=Z.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return 0!==this.Pt}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=tS(),t=tS(),s=tS();return this.vt.forEach((r,n)=>{switch(n){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:w()}}),new t_(this.bt,this.Vt,e,t,s)}kt(){this.St=!1,this.vt=tF()}$t(e,t){this.St=!0,this.vt=this.vt.insert(e,t)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class tL{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=tE,this.Kt=tV(),this.Gt=new eq(x)}Qt(e){for(let t of e.Et)e.At&&e.At.isFoundDocument()?this.jt(t,e.At):this.zt(t,e.key,e.At);for(let t of e.removedTargetIds)this.zt(t,e.key,e.At)}Wt(e){this.forEachTarget(e,t=>{let s=this.Ht(t);switch(e.state){case 0:this.Jt(t)&&s.xt(e.resumeToken);break;case 1:s.Ft(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.Ft(),s.Dt||this.removeTarget(t);break;case 3:this.Jt(t)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(t)&&(this.Yt(t),s.xt(e.resumeToken));break;default:w()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qt.forEach((e,s)=>{this.Jt(s)&&t(s)})}Zt(e){let t=e.targetId,s=e.Rt.count,r=this.Xt(t);if(r){let e=r.target;if(eW(e)){if(0===s){let s=new q(e.path);this.zt(t,s,ez.newNoDocument(s,F.min()))}else 1===s||w()}else this.te(t)!==s&&(this.Yt(t),this.Gt=this.Gt.add(t))}}ee(e){let t=new Map;this.qt.forEach((s,r)=>{let n=this.Xt(r);if(n){if(s.current&&eW(n.target)){let t=new q(n.target.path);null!==this.Ut.get(t)||this.ne(r,t)||this.zt(r,t,ez.newNoDocument(t,e))}s.Ct&&(t.set(r,s.Nt()),s.kt())}});let s=tS();this.Kt.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)}),r&&(s=s.add(e))}),this.Ut.forEach((t,s)=>s.setReadTime(e));let r=new tk(e,t,this.Gt,this.Ut,s);return this.Ut=tE,this.Kt=tV(),this.Gt=new eq(x),r}jt(e,t){if(!this.Jt(e))return;let s=this.ne(e,t.key)?2:0;this.Ht(e).$t(t.key,s),this.Ut=this.Ut.insert(t.key,t),this.Kt=this.Kt.insert(t.key,this.se(t.key).add(e))}zt(e,t,s){if(!this.Jt(e))return;let r=this.Ht(e);this.ne(e,t)?r.$t(t,1):r.Mt(t),this.Kt=this.Kt.insert(t,this.se(t).delete(e)),s&&(this.Ut=this.Ut.insert(t,s))}removeTarget(e){this.qt.delete(e)}te(e){let t=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let t=this.qt.get(e);return t||(t=new tx,this.qt.set(e,t)),t}se(e){let t=this.Kt.get(e);return t||(t=new eq(x),this.Kt=this.Kt.insert(e,t)),t}Jt(e){let t=null!==this.Xt(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){let t=this.qt.get(e);return t&&t.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new tx),this.Lt.getRemoteKeysForTarget(e).forEach(t=>{this.zt(e,t,null)})}ne(e,t){return this.Lt.getRemoteKeysForTarget(e).has(t)}}function tV(){return new eO(q.comparator)}function tF(){return new eO(q.comparator)}/**
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
 */let tM={asc:"ASCENDING",desc:"DESCENDING"},tO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tU={and:"AND",or:"OR"};class tP{constructor(e,t){this.databaseId=e,this.yt=t}}function tq(e){return e||w(),F.fromTimestamp(function(e){let t=et(e);return new V(t.seconds,t.nanos)}(e))}function tK(e){let t=O.fromString(e);return tH(t)||w(),t}function tB(e,t){let s=tK(t);if(s.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+s.get(1)+" vs "+e.databaseId.projectId);if(s.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+s.get(3)+" vs "+e.databaseId.database);return new q(tQ(s))}function t$(e,t){var s;return s=e.databaseId,new O(["projects",s.projectId,"databases",s.database]).child("documents").child(t).canonicalString()}function tz(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tQ(e){return e.length>4&&"documents"===e.get(4)||w(),e.popFirst(5)}function tG(e){return{fieldPath:e.canonicalString()}}function tj(e){return P.fromServerFormat(e.fieldPath)}function tH(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class tW{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){let s=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let n=this.mutations[t];if(n.key.isEqual(e.key)){var r;r=s[t],n instanceof tc?function(e,t,s){let r=e.value.clone(),n=tf(e.fieldTransforms,t,s.transformResults);r.setAll(n),t.convertToFoundDocument(s.version,r).setHasCommittedMutations()}(n,e,r):n instanceof td?function(e,t,s){if(!ta(e.precondition,t))return void t.convertToUnknownDocument(s.version);let r=tf(e.fieldTransforms,t,s.transformResults),n=t.data;n.setAll(tm(e)),n.setAll(r),t.convertToFoundDocument(s.version,n).setHasCommittedMutations()}(n,e,r):function(e,t,s){t.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let s of this.baseMutations)s.key.isEqual(e.key)&&(t=tu(s,e,t,this.localWriteTime));for(let s of this.mutations)s.key.isEqual(e.key)&&(t=tu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let s=tI();return this.mutations.forEach(r=>{let n=e.get(r.key),i=n.overlayedDocument,a=this.applyToLocalView(i,n.mutatedFields);a=t.has(r.key)?null:a;let o=tl(i,a);null!==o&&s.set(r.key,o),i.isValidDocument()||i.convertToNoDocument(F.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tS())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>th(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>th(e,t))}}/**
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
 */class tY{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class tX{constructor(e,t,s,r,n=F.min(),i=F.min(),a=Z.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=n,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a}withSequenceNumber(e){return new tX(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new tX(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new tX(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class tJ{constructor(e){this.oe=e}}/**
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
 */class tZ{constructor(){}ae(e,t){this.he(e,t),t.le()}he(e,t){if("nullValue"in e)this.fe(t,5);else if("booleanValue"in e)this.fe(t,10),t.de(e.booleanValue?1:0);else if("integerValue"in e)this.fe(t,15),t.de(es(e.integerValue));else if("doubleValue"in e){let s=es(e.doubleValue);isNaN(s)?this.fe(t,13):(this.fe(t,15),X(s)?t.de(0):t.de(s))}else if("timestampValue"in e){let s=e.timestampValue;this.fe(t,20),"string"==typeof s?t._e(s):(t._e(`${s.seconds||""}`),t.de(s.nanos||0))}else if("stringValue"in e)this.we(e.stringValue,t),this.me(t);else if("bytesValue"in e)this.fe(t,30),t.ge(er(e.bytesValue)),this.me(t);else if("referenceValue"in e)this.ye(e.referenceValue,t);else if("geoPointValue"in e){let s=e.geoPointValue;this.fe(t,45),t.de(s.latitude||0),t.de(s.longitude||0)}else"mapValue"in e?ew(e)?this.fe(t,Number.MAX_SAFE_INTEGER):(this.pe(e.mapValue,t),this.me(t)):"arrayValue"in e?(this.Ie(e.arrayValue,t),this.me(t)):w()}we(e,t){this.fe(t,25),this.Te(e,t)}Te(e,t){t._e(e)}pe(e,t){let s=e.fields||{};for(let e of(this.fe(t,55),Object.keys(s)))this.we(e,t),this.he(s[e],t)}Ie(e,t){let s=e.values||[];for(let e of(this.fe(t,50),s))this.he(e,t)}ye(e,t){this.fe(t,37),q.fromName(e).path.forEach(e=>{this.fe(t,60),this.Te(e,t)})}fe(e,t){e.de(t)}me(e){e.de(2)}}tZ.Ee=new tZ;/**
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
 */class t0{constructor(){this.Ze=new t1}addToCollectionParentIndex(e,t){return this.Ze.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Ze.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(K.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(K.min())}updateCollectionGroup(e,t,s){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class t1{constructor(){this.index={}}add(e){let t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new eq(O.comparator),n=!r.has(s);return this.index[t]=r.add(s),n}has(e){let t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new eq(O.comparator)).toArray()}}new Uint8Array(0);class t2{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new t2(e,t2.DEFAULT_COLLECTION_PERCENTILE,t2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */t2.DEFAULT_COLLECTION_PERCENTILE=10,t2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,t2.DEFAULT=new t2(41943040,t2.DEFAULT_COLLECTION_PERCENTILE,t2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),t2.DISABLED=new t2(-1,0,0);/**
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
 */class t4{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new t4(0)}static Sn(){return new t4(-1)}}/**
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
 */class t3{constructor(){this.changes=new tw(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ez.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let s=this.changes.get(t);return void 0!==s?z.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class t9{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class t5{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==s&&tu(s.mutation,e,eB.empty(),V.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tS()).next(()=>t))}getLocalViewOfDocuments(e,t,s=tS()){let r=tI();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(e=>{let t=tC();return e.forEach((e,s)=>{t=t.insert(e,s.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let s=tI();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,tS()))}populateOverlays(e,t,s){let r=[];return s.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,s)=>{t.set(e,s)})})}computeViews(e,t,s,r){let n=tE,i=tI(),a=tI();return t.forEach((e,t)=>{let a=s.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof td)?n=n.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),tu(a.mutation,t,a.mutation.getFieldMask(),V.now())):i.set(t.key,eB.empty())}),this.recalculateAndSaveOverlays(e,n).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var s;return a.set(e,new t9(t,null!==(s=i.get(e))&&void 0!==s?s:null))}),a))}recalculateAndSaveOverlays(e,t){let s=tI(),r=new eO((e,t)=>e-t),n=tS();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let n of e)n.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=s.get(e)||eB.empty();a=n.applyToLocalView(i,a),s.set(e,a);let o=(r.get(n.batchId)||tS()).add(e);r=r.insert(n.batchId,o)})}).next(()=>{let i=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=tI();l.forEach(e=>{if(!n.has(e)){let r=tl(t.get(e),s.get(e));null!==r&&u.set(e,r),n=n.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,o,u))}return z.waitFor(i)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,s){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(n=>{let i=r-n.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-n.size):z.resolve(tI()),a=-1,o=n;return i.next(t=>z.forEach(t,(t,s)=>(a<s.largestBatchId&&(a=s.largestBatchId),n.get(t)?z.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,n)).next(()=>this.computeViews(e,o,t,tS())).next(e=>{let t;return{batchId:a,changes:(t=tT,e.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(e=>{let t=tC();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,s){let r=t.collectionGroup,n=tC();return this.indexManager.getCollectionParents(e,r).next(i=>z.forEach(i,i=>{var a;let o=(a=i.child(r),new eY(a,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,o,s).next(e=>{e.forEach((e,t)=>{n=n.insert(e,t)})})}).next(()=>n))}getDocumentsMatchingCollectionQuery(e,t,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(n=>(r=n,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r))).next(e=>{r.forEach((t,s)=>{let r=s.getKey();null===e.get(r)&&(e=e.insert(r,ez.newInvalidDocument(r)))});let s=tC();return e.forEach((e,n)=>{let i=r.get(e);void 0!==i&&tu(i.mutation,n,eB.empty(),V.now()),e3(t,n)&&(s=s.insert(e,n))}),s})}}/**
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
 */class t6{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,t){return z.resolve(this.es.get(t))}saveBundleMetadata(e,t){return this.es.set(t.id,{id:t.id,version:t.version,createTime:tq(t.createTime)}),z.resolve()}getNamedQuery(e,t){return z.resolve(this.ns.get(t))}saveNamedQuery(e,t){return this.ns.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,s,r,n,i,a,o,l;let u,h=function(e){let t=tK(e);return 4===t.length?O.emptyPath():tQ(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,m=null;if(d>0){1===d||w();let e=c.from[0];e.allDescendants?m=e.collectionId:h=h.child(e.collectionId)}let f=[];c.where&&(f=function(e){var t;let s=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=tj(e.unaryFilter.field);return eA.create(t,"==",{doubleValue:NaN});case"IS_NULL":let s=tj(e.unaryFilter.field);return eA.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=tj(e.unaryFilter.field);return eA.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let n=tj(e.unaryFilter.field);return eA.create(n,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(t):void 0!==t.fieldFilter?eA.create(tj(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eS.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return w()}}(t.compositeFilter.op)):w()}(e);return s instanceof eS&&ek(t=s)&&eN(t)?s.getFilters():[s]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(e=>new eM(tj(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let p=null;c.limit&&(p=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,s=e.values||[];return new eE(s,t)}(c.startAt));let v=null;return c.endAt&&(v=function(e){let t=!e.before,s=e.values||[];return new eE(s,t)}(c.endAt)),s=h,r=m,n=g,i=f,a=p,o=y,l=v,new eY(s,r,n,i,a,"F",o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e0(t,t.limit,"L"):t}(t.bundledQuery),readTime:tq(t.readTime)}),z.resolve()}}/**
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
 */class t8{constructor(){this.overlays=new eO(q.comparator),this.ss=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){let s=tI();return z.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&s.set(t,e)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((s,r)=>{this.ce(e,t,r)}),z.resolve()}removeOverlaysForBatchId(e,t,s){let r=this.ss.get(s);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.ss.delete(s)),z.resolve()}getOverlaysForCollection(e,t,s){let r=tI(),n=t.length+1,i=new q(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===n&&e.largestBatchId>s&&r.set(e.getKey(),e)}return z.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let n=new eO((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>s){let t=n.get(e.largestBatchId);null===t&&(t=tI(),n=n.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tI(),o=n.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return z.resolve(a)}ce(e,t,s){let r=this.overlays.get(s.key);if(null!==r){let e=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(s.key,new tY(t,s));let n=this.ss.get(t);void 0===n&&(n=tS(),this.ss.set(t,n)),this.ss.set(t,n.add(s.key))}}/**
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
 */class t7{constructor(){this.rs=new eq(se.os),this.us=new eq(se.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,t){let s=new se(e,t);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ls(new se(e,t))}fs(e,t){e.forEach(e=>this.removeReference(e,t))}ds(e){let t=new q(new O([])),s=new se(t,e),r=new se(t,e+1),n=[];return this.us.forEachInRange([s,r],e=>{this.ls(e),n.push(e.key)}),n}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){let t=new q(new O([])),s=new se(t,e),r=new se(t,e+1),n=tS();return this.us.forEachInRange([s,r],e=>{n=n.add(e.key)}),n}containsKey(e){let t=new se(e,0),s=this.rs.firstAfterOrEqual(t);return null!==s&&e.isEqual(s.key)}}class se{constructor(e,t){this.key=e,this.gs=t}static os(e,t){return q.comparator(e.key,t.key)||x(e.gs,t.gs)}static cs(e,t){return x(e.gs,t.gs)||q.comparator(e.key,t.key)}}/**
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
 */class st{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ys=1,this.ps=new eq(se.os)}checkEmpty(e){return z.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,s,r){let n=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new tW(n,t,s,r);for(let t of(this.mutationQueue.push(i),r))this.ps=this.ps.add(new se(t.key,n)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return z.resolve(i)}lookupMutationBatch(e,t){return z.resolve(this.Is(t))}getNextMutationBatchAfterBatchId(e,t){let s=this.Ts(t+1),r=s<0?0:s;return z.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(0===this.mutationQueue.length?-1:this.ys-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let s=new se(t,0),r=new se(t,Number.POSITIVE_INFINITY),n=[];return this.ps.forEachInRange([s,r],e=>{let t=this.Is(e.gs);n.push(t)}),z.resolve(n)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new eq(x);return t.forEach(e=>{let t=new se(e,0),r=new se(e,Number.POSITIVE_INFINITY);this.ps.forEachInRange([t,r],e=>{s=s.add(e.gs)})}),z.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,t){let s=t.path,r=s.length+1,n=s;q.isDocumentKey(n)||(n=n.child(""));let i=new se(new q(n),0),a=new eq(x);return this.ps.forEachWhile(e=>{let t=e.key.path;return!!s.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.gs)),!0)},i),z.resolve(this.Es(a))}Es(e){let t=[];return e.forEach(e=>{let s=this.Is(e);null!==s&&t.push(s)}),t}removeMutationBatch(e,t){0===this.As(t.batchId,"removed")||w(),this.mutationQueue.shift();let s=this.ps;return z.forEach(t.mutations,r=>{let n=new se(r.key,t.batchId);return s=s.delete(n),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}Pn(e){}containsKey(e,t){let s=new se(t,0),r=this.ps.firstAfterOrEqual(s);return z.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}As(e,t){return this.Ts(e)}Ts(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Is(e){let t=this.Ts(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ss{constructor(e){this.Rs=e,this.docs=new eO(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let s=t.key,r=this.docs.get(s),n=r?r.size:0,i=this.Rs(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:i}),this.size+=i-n,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let s=this.docs.get(t);return z.resolve(s?s.document.mutableCopy():ez.newInvalidDocument(t))}getEntries(e,t){let s=tE;return t.forEach(e=>{let t=this.docs.get(e);s=s.insert(e,t?t.document.mutableCopy():ez.newInvalidDocument(e))}),z.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let n=tE,i=t.path,a=new q(i.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||0>=function(e,t){let s=e.readTime.compareTo(t.readTime);return 0!==s?s:0!==(s=q.comparator(e.documentKey,t.documentKey))?s:x(e.largestBatchId,t.largestBatchId)}(new K(a.readTime,a.key,-1),s)||(r.has(a.key)||e3(t,a))&&(n=n.insert(a.key,a.mutableCopy()))}return z.resolve(n)}getAllFromCollectionGroup(e,t,s,r){w()}Ps(e,t){return z.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sr(this)}getSize(e){return z.resolve(this.size)}}class sr extends t3{constructor(e){super(),this.Xn=e}applyChanges(e){let t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),z.waitFor(t)}getFromCache(e,t){return this.Xn.getEntry(e,t)}getAllFromCache(e,t){return this.Xn.getEntries(e,t)}}/**
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
 */class sn{constructor(e){this.persistence=e,this.vs=new tw(e=>ej(e),eH),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.bs=0,this.Vs=new t7,this.targetCount=0,this.Ss=t4.Vn()}forEachTarget(e,t){return this.vs.forEach((e,s)=>t(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.bs&&(this.bs=t),z.resolve()}xn(e){this.vs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ss=new t4(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.xn(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.xn(t),z.resolve()}removeTargetData(e,t){return this.vs.delete(t.target),this.Vs.ds(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,s){let r=0,n=[];return this.vs.forEach((i,a)=>{a.sequenceNumber<=t&&null===s.get(a.targetId)&&(this.vs.delete(i),n.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),z.waitFor(n).next(()=>r)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){let s=this.vs.get(t)||null;return z.resolve(s)}addMatchingKeys(e,t,s){return this.Vs.hs(t,s),z.resolve()}removeMatchingKeys(e,t,s){this.Vs.fs(t,s);let r=this.persistence.referenceDelegate,n=[];return r&&t.forEach(t=>{n.push(r.markPotentiallyOrphaned(e,t))}),z.waitFor(n)}removeMatchingKeysForTargetId(e,t){return this.Vs.ds(t),z.resolve()}getMatchingKeysForTargetId(e,t){let s=this.Vs.ws(t);return z.resolve(s)}containsKey(e,t){return z.resolve(this.Vs.containsKey(t))}}/**
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
 */class si{constructor(e,t){var s;this.Ds={},this.overlays={},this.Cs=new G(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new sn(this),this.indexManager=new t0,this.remoteDocumentCache=(s=e=>this.referenceDelegate.ks(e),new ss(s)),this.Tt=new tJ(t),this.$s=new t6(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new t8,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Ds[e.toKey()];return s||(s=new st(t,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,t,s){g("MemoryPersistence","Starting transaction:",e);let r=new sa(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(e=>this.referenceDelegate.Os(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Fs(e,t){return z.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,t)))}}class sa extends B{constructor(e){super(),this.currentSequenceNumber=e}}class so{constructor(e){this.persistence=e,this.Bs=new t7,this.Ls=null}static qs(e){return new so(e)}get Us(){if(this.Ls)return this.Ls;throw w()}addReference(e,t,s){return this.Bs.addReference(s,t),this.Us.delete(s.toString()),z.resolve()}removeReference(e,t,s){return this.Bs.removeReference(s,t),this.Us.add(s.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.Us.add(t.toString()),z.resolve()}removeTarget(e,t){this.Bs.ds(t.targetId).forEach(e=>this.Us.add(e.toString()));let s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Us.add(e.toString()))}).next(()=>s.removeTargetData(e,t))}Ms(){this.Ls=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Us,s=>{let r=q.fromPath(s);return this.Ks(e,r).next(e=>{e||t.removeEntry(r,F.min())})}).next(()=>(this.Ls=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ks(e,t).next(e=>{e?this.Us.delete(t.toString()):this.Us.add(t.toString())})}ks(e){return 0}Ks(e,t){return z.or([()=>z.resolve(this.Bs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Fs(e,t)])}}/**
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
 */class sl{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ci=s,this.xi=r}static Ni(e,t){let s=tS(),r=tS();for(let e of t.docChanges)switch(e.type){case 0:s=s.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new sl(e,t.fromCache,s,r)}}/**
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
 */class su{constructor(){this.ki=!1}initialize(e,t){this.$i=e,this.indexManager=t,this.ki=!0}getDocumentsMatchingQuery(e,t,s,r){return this.Mi(e,t).next(n=>n||this.Oi(e,t,r,s)).next(s=>s||this.Fi(e,t))}Mi(e,t){if(eX(t))return z.resolve(null);let s=eZ(t);return this.indexManager.getIndexType(e,s).next(r=>0===r?null:(null!==t.limit&&1===r&&(s=eZ(t=e0(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{let n=tS(...r);return this.$i.getDocuments(e,n).next(r=>this.indexManager.getMinOffset(e,s).next(s=>{let i=this.Bi(t,r);return this.Li(t,i,n,s.readTime)?this.Mi(e,e0(t,null,"F")):this.qi(e,i,t,s)}))})))}Oi(e,t,s,r){return eX(t)||r.isEqual(F.min())?this.Fi(e,t):this.$i.getDocuments(e,s).next(n=>{let i=this.Bi(t,n);return this.Li(t,i,s,r)?this.Fi(e,t):(f()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),e4(t)),this.qi(e,i,t,function(e,t){let s=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,n=F.fromTimestamp(1e9===r?new V(s+1,0):new V(s,r));return new K(n,q.empty(),-1)}(r,0)))})}Bi(e,t){let s=new eq(e9(e));return t.forEach((t,r)=>{e3(e,r)&&(s=s.add(r))}),s}Li(e,t,s,r){if(null===e.limit)return!1;if(s.size!==t.size)return!0;let n="F"===e.limitType?t.last():t.first();return!!n&&(n.hasPendingWrites||n.version.compareTo(r)>0)}Fi(e,t){return f()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",e4(t)),this.$i.getDocumentsMatchingQuery(e,t,K.min())}qi(e,t,s,r){return this.$i.getDocumentsMatchingQuery(e,s,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class sh{constructor(e,t,s,r){this.persistence=e,this.Ui=t,this.Tt=r,this.Ki=new eO(x),this.Gi=new tw(e=>ej(e),eH),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new t5(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ki))}}async function sc(e,t){return await e.persistence.runTransaction("Handle user change","readonly",s=>{let r;return e.mutationQueue.getAllMutationBatches(s).next(n=>(r=n,e.zi(t),e.mutationQueue.getAllMutationBatches(s))).next(t=>{let n=[],i=[],a=tS();for(let e of r)for(let t of(n.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(s,a).next(e=>({Wi:e,removedBatchIds:n,addedBatchIds:i}))})})}function sd(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ns.getLastRemoteSnapshotVersion(t))}async function sm(e,t,s){let r=e,n=r.Ki.get(t);try{s||await r.persistence.runTransaction("Release target",s?"readwrite":"readwrite-primary",e=>r.persistence.referenceDelegate.removeTarget(e,n))}catch(e){if(!Q(e))throw e;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ki=r.Ki.remove(t),r.Gi.delete(n.target)}function sf(e,t,s){let r=F.min(),n=tS();return e.persistence.runTransaction("Execute query","readonly",i=>(function(e,t,s){let r=e.Gi.get(s);return void 0!==r?z.resolve(e.Ki.get(r)):e.Ns.getTargetData(t,s)})(e,i,eZ(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Ns.getMatchingKeysForTargetId(i,t.targetId).next(e=>{n=e})}).next(()=>e.Ui.getDocumentsMatchingQuery(i,t,s?r:F.min(),s?n:tS())).next(s=>{var r;let i;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),i=e.Qi.get(r)||F.min(),s.forEach((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)}),e.Qi.set(r,i),{documents:s,Yi:n}}))}class sg{constructor(){this.activeTargetIds=tN}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sp{constructor(){this.Ur=new sg,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,t,s){this.Kr[e]=t}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new sg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sy{Gr(e){}shutdown(){}}/**
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
 */class sv{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Hr))e(0)}Wr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Hr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let sw=null;function sE(){return null===sw?sw=268435456+Math.round(2147483648*Math.random()):sw++,"0x"+sw.toString(16)}/**
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
 */let sT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sC{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */let sI="WebChannelConnection";class sA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.co=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,t,s,r,n){let i=sE(),a=this.fo(e,t);g("RestConnection",`Sending RPC '${e}' ${i}:`,a,s);let o={};return this._o(o,r,n),this.wo(e,a,o,s).then(t=>(g("RestConnection",`Received RPC '${e}' ${i}: `,t),t),t=>{throw y("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",s),t})}mo(e,t,s,r,n,i){return this.lo(e,t,s,r,n)}_o(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,s)=>e[s]=t),s&&s.headers.forEach((t,s)=>e[s]=t)}fo(e,t){let s=sT[e];return`${this.co}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,t,s,r){let n=sE();return new Promise((i,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();g(sI,`XHR for RPC '${e}' ${n} received:`,JSON.stringify(t)),i(t);break;case u.jK.TIMEOUT:g(sI,`RPC '${e}' ${n} timed out`),a(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let s=o.getStatus();if(g(sI,`RPC '${e}' ${n} failed with status:`,s,"response text:",o.getResponseText()),s>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(t.status);a(new T(e,t.message))}else a(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new T(E.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{g(sI,`RPC '${e}' ${n} completed.`)}});let l=JSON.stringify(r);g(sI,`RPC '${e}' ${n} sending request:`,r),o.send(t,"POST",l,s,15)})}yo(e,t,s){let n=sE(),i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new u.zI({})),this._o(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;let h=i.join("");g(sI,`Creating RPC '${e}' stream ${n}: ${h}`,l);let c=a.createWebChannel(h,l),d=!1,m=!1,f=new sC({Yr:t=>{m?g(sI,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(d||(g(sI,`Opening RPC '${e}' stream ${n} transport.`),c.open(),d=!0),g(sI,`RPC '${e}' stream ${n} sending:`,t),c.send(t))},Zr:()=>c.close()}),p=(e,t,s)=>{e.listen(t,e=>{try{s(e)}catch(e){setTimeout(()=>{throw e},0)}})};return p(c,u.ii.EventType.OPEN,()=>{m||g(sI,`RPC '${e}' stream ${n} transport opened.`)}),p(c,u.ii.EventType.CLOSE,()=>{m||(m=!0,g(sI,`RPC '${e}' stream ${n} transport closed`),f.oo())}),p(c,u.ii.EventType.ERROR,t=>{m||(m=!0,y(sI,`RPC '${e}' stream ${n} transport errored:`,t),f.oo(new T(E.UNAVAILABLE,"The operation could not be completed")))}),p(c,u.ii.EventType.MESSAGE,t=>{var s;if(!m){let i=t.data[0];i||w();let a=i.error||(null===(s=i[0])||void 0===s?void 0:s.error);if(a){g(sI,`RPC '${e}' stream ${n} received error:`,a);let t=a.status,s=function(e){let t=r[e];if(void 0!==t)return tv(t)}(t),i=a.message;void 0===s&&(s=E.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),m=!0,f.oo(new T(s,i)),c.close()}else g(sI,`RPC '${e}' stream ${n} received:`,i),f.uo(i)}}),p(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?g(sI,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===u.kN.NOPROXY&&g(sI,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{f.ro()},0),f}}function sS(){return"undefined"!=typeof document?document:null}/**
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
 */class sN{constructor(e,t,s=1e3,r=1.5,n=6e4){this.Ys=e,this.timerId=t,this.po=s,this.Io=r,this.To=n,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();let t=Math.floor(this.Eo+this.bo()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,t-s);r>0&&g("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
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
 */class sk{constructor(e,t,s,r,n,i,a,o){this.Ys=e,this.So=s,this.Do=r,this.connection=n,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new sN(e,t)}$o(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&null===this.xo&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,t){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,4!==e?this.ko.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(t)}Go(){}auth(){this.state=1;let e=this.Qo(this.Co),t=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,s])=>{this.Co===t&&this.jo(e,s)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.zo(e)})})}jo(e,t){let s=this.Qo(this.Co);this.stream=this.Wo(e,t),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(e=>{s(()=>this.zo(e))}),this.stream.onMessage(e=>{s(()=>this.onMessage(e))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return t=>{this.Ys.enqueueAndForget(()=>this.Co===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class s_ extends sk{constructor(e,t,s,r,n,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,i),this.Tt=n}Wo(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.ko.reset();let t=function(e,t){let s;if("targetChange"in t){var r,n;t.targetChange;let i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:w(),a=t.targetChange.targetIds||[],o=(n=t.targetChange.resumeToken,e.yt?(void 0===n||"string"==typeof n||w(),Z.fromBase64String(n||"")):(void 0===n||n instanceof Uint8Array||w(),Z.fromUint8Array(n||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?E.UNKNOWN:tv(e.code);return new T(t,e.message||"")}(l);s=new tR(i,a,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let n=tB(e,r.document.name),i=tq(r.document.updateTime),a=r.document.createTime?tq(r.document.createTime):F.min(),o=new e$({mapValue:{fields:r.document.fields}}),l=ez.newFoundDocument(n,i,a,o),u=r.targetIds||[],h=r.removedTargetIds||[];s=new tD(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let n=tB(e,r.document),i=r.readTime?tq(r.readTime):F.min(),a=ez.newNoDocument(n,i),o=r.removedTargetIds||[];s=new tD([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let n=tB(e,r.document),i=r.removedTargetIds||[];s=new tD([],i,n,null)}else{if(!("filter"in t))return w();{t.filter;let e=t.filter;e.targetId;let r=e.count||0,n=new ty(r),i=e.targetId;s=new tb(i,n)}}return s}(this.Tt,e),s=function(e){if(!("targetChange"in e))return F.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?F.min():t.readTime?tq(t.readTime):F.min()}(e);return this.listener.Ho(t,s)}Jo(e){let t={};t.database=tz(this.Tt),t.addTarget=function(e,t){var s,r;let n;let i=t.target;return(n=eW(i)?{documents:{documents:[t$(e,i.path)]}}:{query:function(e,t){var s,r,n;let i={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i.parent=t$(e,a),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=t$(e,a.popLast()),i.structuredQuery.from=[{collectionId:a.lastSegment()}]);let o=function(e){if(0!==e.length)return function e(t){return t instanceof eA?function(e){if("=="===e.op){if(ep(e.value))return{unaryFilter:{field:tG(e.field),op:"IS_NAN"}};if(eg(e.value))return{unaryFilter:{field:tG(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ep(e.value))return{unaryFilter:{field:tG(e.field),op:"IS_NOT_NAN"}};if(eg(e.value))return{unaryFilter:{field:tG(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tG(e.field),op:tO[e.op],value:e.value}}}(t):t instanceof eS?function(t){let s=t.getFilters().map(t=>e(t));return 1===s.length?s[0]:{compositeFilter:{op:tU[t.op],filters:s}}}(t):w()}(eS.create(e,"and"))}(t.filters);o&&(i.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:tG(e.field),direction:tM[e.dir]}))}(t.orderBy);l&&(i.structuredQuery.orderBy=l);let u=(r=t.limit,e.yt||null==r?r:{value:r});return null!==u&&(i.structuredQuery.limit=u),t.startAt&&(i.structuredQuery.startAt={before:(s=t.startAt).inclusive,values:s.position}),t.endAt&&(i.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),i}(e,i)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=(s=t.resumeToken,e.yt?s.toBase64():s.toUint8Array()):t.snapshotVersion.compareTo(F.min())>0&&(n.readTime=(r=t.snapshotVersion.toTimestamp(),e.yt?`${new Date(1e3*r.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+r.nanoseconds).slice(-9)}Z`:{seconds:""+r.seconds,nanos:r.nanoseconds})),n}(this.Tt,e);let s=function(e,t){let s=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return w()}}(0,t.purpose);return null==s?null:{"goog-listen-tags":s}}(this.Tt,e);s&&(t.labels=s),this.qo(t)}Yo(e){let t={};t.database=tz(this.Tt),t.removeTarget=e,this.qo(t)}}/**
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
 */class sD extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,t,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,n])=>this.connection.lo(e,t,s,r,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}mo(e,t,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.mo(e,t,s,n,i,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.iu=!0}}class sb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){0===this.ou&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){"Online"===this.state?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,"Online"===e&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(p(t),this.cu=!1):g("OnlineStateTracker",t)}du(){null!==this.uu&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class sR{constructor(e,t,s,r,n){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=n,this.yu.Gr(e=>{s.enqueueAndForget(async()=>{sq(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.mu.add(4),await sL(e),e.pu.set("Unknown"),e.mu.delete(4),await sx(e)}(this))})}),this.pu=new sb(s,r)}}async function sx(e){if(sq(e))for(let t of e.gu)await t(!0)}async function sL(e){for(let t of e.gu)await t(!1)}function sV(e,t){e.wu.has(t.targetId)||(e.wu.set(t.targetId,t),sP(e)?sU(e):sj(e).Mo()&&sM(e,t))}function sF(e,t){let s=sj(e);e.wu.delete(t),s.Mo()&&sO(e,t),0===e.wu.size&&(s.Mo()?s.Bo():sq(e)&&e.pu.set("Unknown"))}function sM(e,t){e.Iu.Ot(t.targetId),sj(e).Jo(t)}function sO(e,t){e.Iu.Ot(t),sj(e).Yo(t)}function sU(e){e.Iu=new tL({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ie:t=>e.wu.get(t)||null}),sj(e).start(),e.pu.au()}function sP(e){return sq(e)&&!sj(e).$o()&&e.wu.size>0}function sq(e){return 0===e.mu.size}async function sK(e){e.wu.forEach((t,s)=>{sM(e,t)})}async function sB(e,t){e.Iu=void 0,sP(e)?(e.pu.fu(t),sU(e)):e.pu.set("Unknown")}async function s$(e,t,s){if(e.pu.set("Online"),t instanceof tR&&2===t.state&&t.cause)try{await async function(e,t){let s=t.cause;for(let r of t.targetIds)e.wu.has(r)&&(await e.remoteSyncer.rejectListen(r,s),e.wu.delete(r),e.Iu.removeTarget(r))}(e,t)}catch(s){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await sz(e,s)}else if(t instanceof tD?e.Iu.Qt(t):t instanceof tb?e.Iu.Zt(t):e.Iu.Wt(t),!s.isEqual(F.min()))try{let t=await sd(e.localStore);s.compareTo(t)>=0&&await function(e,t){let s=e.Iu.ee(t);return s.targetChanges.forEach((s,r)=>{if(s.resumeToken.approximateByteSize()>0){let n=e.wu.get(r);n&&e.wu.set(r,n.withResumeToken(s.resumeToken,t))}}),s.targetMismatches.forEach(t=>{let s=e.wu.get(t);if(!s)return;e.wu.set(t,s.withResumeToken(Z.EMPTY_BYTE_STRING,s.snapshotVersion)),sO(e,t);let r=new tX(s.target,t,1,s.sequenceNumber);sM(e,r)}),e.remoteSyncer.applyRemoteEvent(s)}(e,s)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await sz(e,t)}}async function sz(e,t,s){if(!Q(t))throw t;e.mu.add(1),await sL(e),e.pu.set("Offline"),s||(s=()=>sd(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await s(),e.mu.delete(1),await sx(e)})}async function sQ(e,t){e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let s=sq(e);e.mu.add(3),await sL(e),s&&e.pu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.mu.delete(3),await sx(e)}async function sG(e,t){t?(e.mu.delete(2),await sx(e)):t||(e.mu.add(2),await sL(e),e.pu.set("Unknown"))}function sj(e){var t,s,r;return e.Tu||(e.Tu=(t=e.datastore,s=e.asyncQueue,r={Xr:sK.bind(null,e),no:sB.bind(null,e),Ho:s$.bind(null,e)},t.ru(),new s_(s,t.connection,t.authCredentials,t.appCheckCredentials,t.Tt,r)),e.gu.push(async t=>{t?(e.Tu.Fo(),sP(e)?sU(e):e.pu.set("Unknown")):(await e.Tu.stop(),e.Iu=void 0)})),e.Tu}/**
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
 */class sH{constructor(e,t,s,r,n){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=n,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,s,r,n){let i=Date.now()+s,a=new sH(e,t,i,r,n);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sW(e,t){if(p("AsyncQueue",`${t}: ${e}`),Q(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class sY{constructor(e){this.comparator=e?(t,s)=>e(t,s)||q.comparator(t.key,s.key):(e,t)=>q.comparator(e.key,t.key),this.keyedMap=tC(),this.sortedSet=new eO(this.comparator)}static emptySet(e){return new sY(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sY)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=s.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let s=new sY;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class sX{constructor(){this.Au=new eO(q.comparator)}track(e){let t=e.doc.key,s=this.Au.get(t);s?0!==e.type&&3===s.type?this.Au=this.Au.insert(t,e):3===e.type&&1!==s.type?this.Au=this.Au.insert(t,{type:s.type,doc:e.doc}):2===e.type&&2===s.type?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):2===e.type&&0===s.type?this.Au=this.Au.insert(t,{type:0,doc:e.doc}):1===e.type&&0===s.type?this.Au=this.Au.remove(t):1===e.type&&2===s.type?this.Au=this.Au.insert(t,{type:1,doc:s.doc}):0===e.type&&1===s.type?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):w():this.Au=this.Au.insert(t,e)}Ru(){let e=[];return this.Au.inorderTraversal((t,s)=>{e.push(s)}),e}}class sJ{constructor(e,t,s,r,n,i,a,o,l){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=n,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,s,r,n){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new sJ(e,t,sY.emptySet(t),i,s,r,!0,!1,n)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e1(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==s[e].type||!t[e].doc.isEqual(s[e].doc))return!1;return!0}}/**
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
 */class sZ{constructor(){this.Pu=void 0,this.listeners=[]}}class s0{constructor(){this.queries=new tw(e=>e2(e),e1),this.onlineState="Unknown",this.vu=new Set}}async function s1(e,t){let s=t.query,r=!1,n=e.queries.get(s);if(n||(r=!0,n=new sZ),r)try{n.Pu=await e.onListen(s)}catch(s){let e=sW(s,`Initialization of query '${e4(t.query)}' failed`);return void t.onError(e)}e.queries.set(s,n),n.listeners.push(t),t.bu(e.onlineState),n.Pu&&t.Vu(n.Pu)&&s9(e)}async function s2(e,t){let s=t.query,r=!1,n=e.queries.get(s);if(n){let e=n.listeners.indexOf(t);e>=0&&(n.listeners.splice(e,1),r=0===n.listeners.length)}if(r)return e.queries.delete(s),e.onUnlisten(s)}function s4(e,t){let s=!1;for(let r of t){let t=r.query,n=e.queries.get(t);if(n){for(let e of n.listeners)e.Vu(r)&&(s=!0);n.Pu=r}}s&&s9(e)}function s3(e,t,s){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(s);e.queries.delete(t)}function s9(e){e.vu.forEach(e=>{e.next()})}class s5{constructor(e,t,s){this.query=e,this.Su=t,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){let t=[];for(let s of e.docChanges)3!==s.type&&t.push(s);e=new sJ(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Du?this.xu(e)&&(this.Su.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.ku(e),t=!0),this.Cu=e,t}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),t=!0),t}Nu(e,t){return!e.fromCache||(!this.options.$u||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}xu(e){if(e.docChanges.length>0)return!0;let t=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ku(e){e=sJ.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class s6{constructor(e){this.key=e}}class s8{constructor(e){this.key=e}}class s7{constructor(e,t){this.query=e,this.Ku=t,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=tS(),this.mutatedKeys=tS(),this.ju=e9(e),this.zu=new sY(this.ju)}get Wu(){return this.Ku}Hu(e,t){let s=t?t.Ju:new sX,r=t?t.zu:this.zu,n=t?t.mutatedKeys:this.mutatedKeys,i=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),h=e3(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),m=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(s.track({type:3,doc:h}),m=!0):this.Yu(u,h)||(s.track({type:2,doc:h}),m=!0,(o&&this.ju(h,o)>0||l&&0>this.ju(h,l))&&(a=!0)):!u&&h?(s.track({type:0,doc:h}),m=!0):u&&!h&&(s.track({type:1,doc:u}),m=!0,(o||l)&&(a=!0)),m&&(h?(i=i.add(h),n=d?n.add(e):n.delete(e)):(i=i.delete(e),n=n.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){let e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),n=n.delete(e.key),s.track({type:1,doc:e})}return{zu:i,Ju:s,Li:a,mutatedKeys:n}}Yu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){let r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;let n=e.Ju.Ru();n.sort((e,t)=>(function(e,t){let s=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return s(e)-s(t)})(e.type,t.type)||this.ju(e.doc,t.doc)),this.Zu(s);let i=t?this.Xu():[],a=0===this.Qu.size&&this.current?1:0,o=a!==this.Gu;return(this.Gu=a,0!==n.length||o)?{snapshot:new sJ(this.query,e.zu,r,n,e.mutatedKeys,0===a,o,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:i}:{tc:i}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new sX,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(e=>this.Ku=this.Ku.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ku=this.Ku.delete(e)),this.current=e.current)}Xu(){if(!this.current)return[];let e=this.Qu;this.Qu=tS(),this.zu.forEach(e=>{this.ec(e.key)&&(this.Qu=this.Qu.add(e.key))});let t=[];return e.forEach(e=>{this.Qu.has(e)||t.push(new s8(e))}),this.Qu.forEach(s=>{e.has(s)||t.push(new s6(s))}),t}nc(e){this.Ku=e.Yi,this.Qu=tS();let t=this.Hu(e.documents);return this.applyChanges(t,!0)}sc(){return sJ.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,0===this.Gu,this.hasCachedResults)}}class re{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class rt{constructor(e){this.key=e,this.ic=!1}}class rs{constructor(e,t,s,r,n,i){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=n,this.maxConcurrentLimboResolutions=i,this.rc={},this.oc=new tw(e=>e2(e),e1),this.uc=new Map,this.cc=new Set,this.ac=new eO(q.comparator),this.hc=new Map,this.lc=new t7,this.fc={},this.dc=new Map,this._c=t4.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return!0===this.wc}}async function rr(e,t){let s,r;let n=function(e){let t=e;return t.remoteStore.remoteSyncer.applyRemoteEvent=ra.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rl.bind(null,t),t.rc.Ho=s4.bind(null,t.eventManager),t.rc.gc=s3.bind(null,t.eventManager),t}(e),i=n.oc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{let e=await function(e,t){let s=e;return s.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return s.Ns.getTargetData(e,t).next(n=>n?(r=n,z.resolve(r)):s.Ns.allocateTargetId(e).next(n=>(r=new tX(t,n,0,e.currentSequenceNumber),s.Ns.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=s.Ki.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(s.Ki=s.Ki.insert(e.targetId,e),s.Gi.set(t,e.targetId)),e})}(n.localStore,eZ(t));n.isPrimaryClient&&sV(n.remoteStore,e);let i=n.sharedClientState.addLocalQueryTarget(e.targetId);s=e.targetId,r=await rn(n,t,s,"current"===i,e.resumeToken)}return r}async function rn(e,t,s,r,n){e.mc=(t,s,r)=>(async function(e,t,s,r){let n=t.view.Hu(s);n.Li&&(n=await sf(e.localStore,t.query,!1).then(({documents:e})=>t.view.Hu(e,n)));let i=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(n,e.isPrimaryClient,i);return rc(e,t.targetId,a.tc),a.snapshot})(e,t,s,r);let i=await sf(e.localStore,t,!0),a=new s7(t,i.Yi),o=a.Hu(i.documents),l=t_.createSynthesizedTargetChangeForCurrentChange(s,r&&"Offline"!==e.onlineState,n),u=a.applyChanges(o,e.isPrimaryClient,l);rc(e,s,u.tc);let h=new re(t,s,a);return e.oc.set(t,h),e.uc.has(s)?e.uc.get(s).push(t):e.uc.set(s,[t]),u.snapshot}async function ri(e,t){let s=e.oc.get(t),r=e.uc.get(s.targetId);if(r.length>1)return e.uc.set(s.targetId,r.filter(e=>!e1(e,t))),void e.oc.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(s.targetId),e.sharedClientState.isActiveQueryTarget(s.targetId)||await sm(e.localStore,s.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(s.targetId),sF(e.remoteStore,s.targetId),ru(e,s.targetId)}).catch($)):(ru(e,s.targetId),await sm(e.localStore,s.targetId,!0))}async function ra(e,t){try{let s=await function(e,t){let s=e,r=t.snapshotVersion,n=s.Ki;return s.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var i;let a,o;let l=s.ji.newChangeBuffer({trackRemovals:!0});n=s.Ki;let u=[];t.targetChanges.forEach((i,a)=>{var o;let l=n.get(a);if(!l)return;u.push(s.Ns.removeMatchingKeys(e,i.removedDocuments,a).next(()=>s.Ns.addMatchingKeys(e,i.addedDocuments,a)));let h=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?h=h.withResumeToken(Z.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):i.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(i.resumeToken,r)),n=n.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size>0)&&u.push(s.Ns.updateTargetData(e,h))});let h=tE,c=tS();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(s.persistence.referenceDelegate.updateLimboDocument(e,r))}),u.push((i=t.documentUpdates,a=tS(),o=tS(),i.forEach(e=>a=a.add(e)),l.getEntries(e,a).next(e=>{let t=tE;return i.forEach((s,r)=>{let n=e.get(s);r.isFoundDocument()!==n.isFoundDocument()&&(o=o.add(s)),r.isNoDocument()&&r.version.isEqual(F.min())?(l.removeEntry(s,r.readTime),t=t.insert(s,r)):!n.isValidDocument()||r.version.compareTo(n.version)>0||0===r.version.compareTo(n.version)&&n.hasPendingWrites?(l.addEntry(r),t=t.insert(s,r)):g("LocalStore","Ignoring outdated watch update for ",s,". Current version:",n.version," Watch version:",r.version)}),{Hi:t,Ji:o}})).next(e=>{h=e.Hi,c=e.Ji})),!r.isEqual(F.min())){let t=s.Ns.getLastRemoteSnapshotVersion(e).next(t=>s.Ns.setTargetsMetadata(e,e.currentSequenceNumber,r));u.push(t)}return z.waitFor(u).next(()=>l.apply(e)).next(()=>s.localDocuments.getLocalViewOfDocuments(e,h,c)).next(()=>h)}).then(e=>(s.Ki=n,e))}(e.localStore,t);t.targetChanges.forEach((t,s)=>{let r=e.hc.get(s);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||w(),t.addedDocuments.size>0?r.ic=!0:t.modifiedDocuments.size>0?r.ic||w():t.removedDocuments.size>0&&(r.ic||w(),r.ic=!1))}),await rm(e,s,t)}catch(e){await $(e)}}function ro(e,t,s){let r=e;if(r.isPrimaryClient&&0===s||!r.isPrimaryClient&&1===s){let e=[];r.oc.forEach((s,r)=>{let n=r.view.bu(t);n.snapshot&&e.push(n.snapshot)}),function(e,t){let s=e;s.onlineState=t;let r=!1;s.queries.forEach((e,s)=>{for(let e of s.listeners)e.bu(t)&&(r=!0)}),r&&s9(s)}(r.eventManager,t),e.length&&r.rc.Ho(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function rl(e,t,s){let r=e;r.sharedClientState.updateQueryState(t,"rejected",s);let n=r.hc.get(t),i=n&&n.key;if(i){let e=new eO(q.comparator);e=e.insert(i,ez.newNoDocument(i,F.min()));let s=tS().add(i),n=new tk(F.min(),new Map,new eq(x),e,s);await ra(r,n),r.ac=r.ac.remove(i),r.hc.delete(t),rd(r)}else await sm(r.localStore,t,!1).then(()=>ru(r,t,s)).catch($)}function ru(e,t,s=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.uc.get(t)))e.oc.delete(r),s&&e.rc.gc(r,s);e.uc.delete(t),e.isPrimaryClient&&e.lc.ds(t).forEach(t=>{e.lc.containsKey(t)||rh(e,t)})}function rh(e,t){e.cc.delete(t.path.canonicalString());let s=e.ac.get(t);null!==s&&(sF(e.remoteStore,s),e.ac=e.ac.remove(t),e.hc.delete(s),rd(e))}function rc(e,t,s){for(let r of s)r instanceof s6?(e.lc.addReference(r.key,t),function(e,t){let s=t.key,r=s.path.canonicalString();e.ac.get(s)||e.cc.has(r)||(g("SyncEngine","New document in limbo: "+s),e.cc.add(r),rd(e))}(e,r)):r instanceof s8?(g("SyncEngine","Document no longer in limbo: "+r.key),e.lc.removeReference(r.key,t),e.lc.containsKey(r.key)||rh(e,r.key)):w()}function rd(e){for(;e.cc.size>0&&e.ac.size<e.maxConcurrentLimboResolutions;){var t;let s=e.cc.values().next().value;e.cc.delete(s);let r=new q(O.fromString(s)),n=e._c.next();e.hc.set(n,new rt(r)),e.ac=e.ac.insert(r,n),sV(e.remoteStore,new tX(eZ((t=r.path,new eY(t))),n,2,G.at))}}async function rm(e,t,s){let r=[],n=[],i=[];e.oc.isEmpty()||(e.oc.forEach((a,o)=>{i.push(e.mc(o,t,s).then(t=>{if((t||s)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=sl.Ni(o.targetId,t);n.push(e)}}))}),await Promise.all(i),e.rc.Ho(r),await async function(e,t){let s=e;try{await s.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>z.forEach(t,t=>z.forEach(t.Ci,r=>s.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>z.forEach(t.xi,r=>s.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Q(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(let e of t){let t=e.targetId;if(!e.fromCache){let e=s.Ki.get(t),r=e.snapshotVersion,n=e.withLastLimboFreeSnapshotVersion(r);s.Ki=s.Ki.insert(t,n)}}}(e.localStore,n))}async function rf(e,t){let s=e;if(!s.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let e=await sc(s.localStore,t);s.currentUser=t,s.dc.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),s.dc.clear(),s.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await rm(s,e.Wi)}}function rg(e,t){let s=e.hc.get(t);if(s&&s.ic)return tS().add(s.key);{let s=tS(),r=e.uc.get(t);if(!r)return s;for(let t of r){let r=e.oc.get(t);s=s.unionWith(r.view.Wu)}return s}}class rp{constructor(){this.synchronizeTabs=!1}async initialize(e){var t;this.Tt=(t=e.databaseInfo.databaseId,new tP(t,!0)),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,t){return null}Rc(e,t){return null}Ec(e){var t,s,r,n;return t=this.persistence,s=new su,r=e.initialUser,n=this.Tt,new sh(t,s,r,n)}Tc(e){return new si(so.qs,this.Tt)}Ic(e){return new sp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ry{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ro(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=rf.bind(null,this.syncEngine),await sG(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s0}createDatastore(e){var t,s,r,n;let i=(s=e.databaseInfo.databaseId,new tP(s,!0)),a=(t=e.databaseInfo,new sA(t));return r=e.authCredentials,n=e.appCheckCredentials,new sD(r,n,a,i)}createRemoteStore(e){var t,s,r,n,i;return t=this.localStore,s=this.datastore,r=e.asyncQueue,n=e=>ro(this.syncEngine,e,0),i=sv.C()?new sv:new sy,new sR(t,s,r,n,i)}createSyncEngine(e,t){return function(e,t,s,r,n,i,a){let o=new rs(e,t,s,r,n,i);return a&&(o.wc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){g("RemoteStore","RemoteStore shutting down."),e.mu.add(5),await sL(e),e.yu.shutdown(),e.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class rv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):p("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class rw{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=c.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(s,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(s){let t=sW(s,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function rE(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let s=await e.getConfiguration();await t.initialize(s);let r=s.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await sc(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function rT(e,t){e.asyncQueue.verifyOperationInProgress();let s=await rC(e);g("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(s,r),e.setCredentialChangeListener(e=>sQ(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,s)=>sQ(t.remoteStore,s)),e.onlineComponents=t}async function rC(e){return e.offlineComponents||(g("FirestoreClient","Using default OfflineComponentProvider"),await rE(e,new rp)),e.offlineComponents}async function rI(e){return e.onlineComponents||(g("FirestoreClient","Using default OnlineComponentProvider"),await rT(e,new ry)),e.onlineComponents}async function rA(e){let t=await rI(e),s=t.eventManager;return s.onListen=rr.bind(null,t.syncEngine),s.onUnlisten=ri.bind(null,t.syncEngine),s}let rS=new Map;function rN(e){if(q.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function rk(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let s=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let s=(t=e).constructor?t.constructor.name:null;return s?`a custom ${s} object`:"an object"}}return"function"==typeof e?"a function":w()}(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${s}`)}}return e}/**
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
 */class r_{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,s,r){if(!0===t&&!0===r)throw new T(E.INVALID_ARGUMENT,`${e} and ${s} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class rD{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r_(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new A;switch(e.type){case"gapi":let t=e.client;return new _(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=rS.get(e);t&&(g("ComponentProvider","Removing Datastore"),rS.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class rb{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rx(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rb(this.firestore,e,this._key)}}class rR{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new rR(this.firestore,e,this._query)}}class rx extends rR{constructor(e,t,s){super(e,t,new eY(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new rb(this.firestore,null,new q(e))}withConverter(e){return new rx(this.firestore,e,this._path)}}function rL(e,t,...s){if(e=(0,l.m9)(e),/**
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
 */function(e,t,s){if(!s)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof rD){let r=O.fromString(t,...s);return rN(r),new rx(e,null,r)}{if(!(e instanceof rb||e instanceof rx))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(O.fromString(t,...s));return rN(r),new rx(e.firestore,null,r)}}/**
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
 */class rV{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new sN(this,"async_queue_retry"),this.Hc=()=>{let e=sS();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ko.Vo()};let e=sS();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;let t=sS();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});let t=new C;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Q(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){let t=this.qc.then(()=>(this.jc=!0,e().catch(e=>{let t;this.Qc=e,this.jc=!1;let s=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw p("INTERNAL UNHANDLED ERROR: ",s),e}).then(e=>(this.jc=!1,e))));return this.qc=t,t}enqueueAfterDelay(e,t,s){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);let r=sH.createAndSchedule(this,e,t,s,e=>this.Xc(e));return this.Gc.push(r),r}Jc(){this.Qc&&w()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(let t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{for(let t of(this.Gc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Gc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){let t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}class rF extends rD{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new rV,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rO(this),this._firestoreClient.terminate()}}function rM(e,t){let s="object"==typeof e?e:(0,i.Mq)(),r=(0,i.qX)(s,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,s,r={}){var n;let i=(e=rk(e,rD))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&y("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${s}`,ssl:!1})),r.mockUserToken){let t,s;if("string"==typeof r.mockUserToken)t=r.mockUserToken,s=c.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,null===(n=e._app)||void 0===n?void 0:n.options.projectId);let i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");s=new c(i)}e._authCredentials=new S(new I(t,s))}}(r,...e)}return r}function rO(e){var t,s,r,n;let i=e._freezeSettings(),a=(s=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",n=e._persistenceKey,new j(s,r,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams));e._firestoreClient=new rw(e._authCredentials,e._appCheckCredentials,e._queue,a)}/**
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
 */class rU{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rU(Z.fromBase64String(e))}catch(e){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new rU(Z.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class rP{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new P(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rq{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}let rK=RegExp("[~\\*/\\[\\]]");function rB(e,t,s,r,n){let i=r&&!r.isEmpty(),a=void 0!==n,o=`Function ${t}() called with invalid data`;s&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${n}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}/**
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
 */class r${constructor(e,t,s,r,n){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=n}get id(){return this._key.path.lastSegment()}get ref(){return new rb(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new rz(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(rQ("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class rz extends r${data(){return super.data()}}function rQ(e,t){return"string"==typeof t?function(e,t,s){if(t.search(rK)>=0)throw rB(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,s);try{return new rP(...t.split("."))._internalPath}catch(r){throw rB(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,s)}}(e,t):t instanceof rP?t._internalPath:t._delegate._internalPath}class rG{convertValue(e,t="none"){switch(eo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return es(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw w()}}convertObject(e,t){let s={};return Y(e.fields,(e,r)=>{s[e]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new rq(es(e.latitude),es(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let s=function e(t){let s=t.mapValue.fields.__previous_value__;return en(s)?e(s):s}(e);return null==s?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ei(e));default:return null}}convertTimestamp(e){let t=et(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){let s=O.fromString(e);tH(s)||w();let r=new H(s.get(1),s.get(3)),n=new q(s.popFirst(5));return r.isEqual(t)||p(`Document ${n} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),n}}/**
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
 */class rj{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rH extends r${constructor(e,t,s,r,n,i){super(e,t,s,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=n}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new rW(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let s=this._document.data.field(rQ("DocumentSnapshot.get",e));if(null!==s)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class rW extends rH{data(e={}){return super.data(e)}}class rY{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new rj(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new rW(this._firestore,this._userDataWriter,s.key,s,new rj(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(s=>{let r=new rW(e._firestore,e._userDataWriter,s.doc.key,s.doc,new rj(e._snapshot.mutatedKeys.has(s.doc.key),e._snapshot.fromCache),e.query.converter);return s.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let s=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new rW(e._firestore,e._userDataWriter,t.doc.key,t.doc,new rj(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),n=-1,i=-1;return 0!==t.type&&(n=s.indexOf(t.doc.key),s=s.delete(t.doc.key)),1!==t.type&&(i=(s=s.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}(t.type),doc:r,oldIndex:n,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class rX extends rG{constructor(e){super(),this.firestore=e}convertBytes(e){return new rU(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new rb(this.firestore,null,t)}}function rJ(e){e=rk(e,rR);let t=rk(e.firestore,rF),s=(t._firestoreClient||rO(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),r=new rX(t);return(/**
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
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,s={}){let r=new C;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,s,r,n){let i=new rv({next:s=>{t.enqueueAndForget(()=>s2(e,a)),s.fromCache&&"server"===r.source?n.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):n.resolve(s)},error:e=>n.reject(e)}),a=new s5(s,i,{includeMetadataChanges:!0,$u:!0});return s1(e,a)})(await rA(e),e.asyncQueue,t,s,r)),r.promise})(s,e._query).then(s=>new rY(t,r,e,s)))}!function(e,t=!0){d=i.Jn,(0,i.Xd)(new a.wA("firestore",(e,{instanceIdentifier:s,options:r})=>{let n=e.getProvider("app").getImmediate(),i=new rF(new N(e.getProvider("auth-internal")),new b(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new H(e.options.projectId,t)}(n,s),n);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(h,"3.9.0",void 0),(0,i.KN)(h,"3.9.0","esm2017")}()}}]);