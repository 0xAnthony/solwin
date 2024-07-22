"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6266:function(e,t,s){s.d(t,{S:function(){return y}});var i=s(6328),r=s(1211),a=s(7759),u=s(1586),n=class extends u.l{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,s){let a=t.queryKey,u=t.queryHash??(0,i.Rm)(a,t),n=this.get(u);return n||(n=new r.A({cache:this,queryKey:a,queryHash:u,options:e.defaultQueryOptions(t),state:s,defaultOptions:e.getQueryDefaults(a)}),this.add(n)),n}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){a.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,i._x)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,i._x)(e,t)):t}notify(e){a.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){a.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){a.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},o=s(2646),h=class extends u.l{constructor(e={}){super(),this.config=e,this.#t=new Map,this.#s=Date.now()}#t;#s;build(e,t,s){let i=new o.m({mutationCache:this,mutationId:++this.#s,options:e.defaultMutationOptions(t),state:s});return this.add(i),i}add(e){let t=l(e),s=this.#t.get(t)??[];s.push(e),this.#t.set(t,s),this.notify({type:"added",mutation:e})}remove(e){let t=l(e);if(this.#t.has(t)){let s=this.#t.get(t)?.filter(t=>t!==e);s&&(0===s.length?this.#t.delete(t):this.#t.set(t,s))}this.notify({type:"removed",mutation:e})}canRun(e){let t=this.#t.get(l(e))?.find(e=>"pending"===e.state.status);return!t||t===e}runNext(e){let t=this.#t.get(l(e))?.find(t=>t!==e&&t.state.isPaused);return t?.continue()??Promise.resolve()}clear(){a.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...this.#t.values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,i.X7)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,i.X7)(e,t))}notify(e){a.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return a.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(i.ZT))))}};function l(e){return e.options.scope?.id??String(e.mutationId)}var c=s(1807),d=s(9436);function f(e,{pages:t,pageParams:s}){let i=t.length-1;return e.getNextPageParam(t[i],t,s[i],s)}var y=class{#i;#r;#a;#u;#n;#o;#h;#l;constructor(e={}){this.#i=e.queryCache||new n,this.#r=e.mutationCache||new h,this.#a=e.defaultOptions||{},this.#u=new Map,this.#n=new Map,this.#o=0}mount(){this.#o++,1===this.#o&&(this.#h=c.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#i.onFocus())}),this.#l=d.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#i.onOnline())}))}unmount(){this.#o--,0===this.#o&&(this.#h?.(),this.#h=void 0,this.#l?.(),this.#l=void 0)}isFetching(e){return this.#i.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#r.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#i.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let s=this.defaultQueryOptions(e),i=this.#i.build(this,s);return e.revalidateIfStale&&i.isStaleByTime(s.staleTime)&&this.prefetchQuery(s),Promise.resolve(t)}}getQueriesData(e){return this.#i.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,s){let r=this.defaultQueryOptions({queryKey:e}),a=this.#i.get(r.queryHash),u=a?.state.data,n=(0,i.SE)(t,u);if(void 0!==n)return this.#i.build(this,r).setData(n,{...s,manual:!0})}setQueriesData(e,t,s){return a.V.batch(()=>this.#i.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,s)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#i.get(t.queryHash)?.state}removeQueries(e){let t=this.#i;a.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let s=this.#i,i={type:"active",...e};return a.V.batch(()=>(s.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(i,t)))}cancelQueries(e={},t={}){let s={revert:!0,...t};return Promise.all(a.V.batch(()=>this.#i.findAll(e).map(e=>e.cancel(s)))).then(i.ZT).catch(i.ZT)}invalidateQueries(e={},t={}){return a.V.batch(()=>{if(this.#i.findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let s={...e,type:e.refetchType??e.type??"active"};return this.refetchQueries(s,t)})}refetchQueries(e={},t){let s={...t,cancelRefetch:t?.cancelRefetch??!0};return Promise.all(a.V.batch(()=>this.#i.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,s);return s.throwOnError||(t=t.catch(i.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(i.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let s=this.#i.build(this,t);return s.isStaleByTime(t.staleTime)?s.fetch(t):Promise.resolve(s.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(i.ZT).catch(i.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,s)=>{let r=async()=>{let s;let r=e.options,a=e.fetchOptions?.meta?.fetchMore?.direction,u=e.state.data?.pages||[],n=e.state.data?.pageParams||[],o=!1,h=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?o=!0:e.signal.addEventListener("abort",()=>{o=!0}),e.signal)})},l=(0,i.cG)(e.options,e.fetchOptions),c=async(t,s,r)=>{if(o)return Promise.reject();if(null==s&&t.pages.length)return Promise.resolve(t);let a={queryKey:e.queryKey,pageParam:s,direction:r?"backward":"forward",meta:e.options.meta};h(a);let u=await l(a),{maxPages:n}=e.options,c=r?i.Ht:i.VX;return{pages:c(t.pages,u,n),pageParams:c(t.pageParams,s,n)}};if(a&&u.length){let e="backward"===a,t={pages:u,pageParams:n},i=(e?function(e,{pages:t,pageParams:s}){return e.getPreviousPageParam?.(t[0],t,s[0],s)}:f)(r,t);s=await c(t,i,e)}else{s=await c({pages:[],pageParams:[]},n[0]??r.initialPageParam);let e=t??u.length;for(let t=1;t<e;t++){let e=f(r,s);s=await c(s,e)}}return s};e.options.persister?e.fetchFn=()=>e.options.persister?.(r,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=r}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(i.ZT).catch(i.ZT)}resumePausedMutations(){return d.N.isOnline()?this.#r.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#i}getMutationCache(){return this.#r}getDefaultOptions(){return this.#a}setDefaultOptions(e){this.#a=e}setQueryDefaults(e,t){this.#u.set((0,i.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#u.values()],s={};return t.forEach(t=>{(0,i.to)(e,t.queryKey)&&(s={...s,...t.defaultOptions})}),s}setMutationDefaults(e,t){this.#n.set((0,i.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#n.values()],s={};return t.forEach(t=>{(0,i.to)(e,t.mutationKey)&&(s={...s,...t.defaultOptions})}),s}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#a.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,i.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===i.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#a.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#i.clear(),this.#r.clear()}}},3722:function(e,t,s){s.d(t,{V:function(){return y}});var i=s(9188);function r(e){return e.state.isPaused}function a(e){return"success"===e.state.status}var u=s(8078),n=s(6328),o=s(6179),h={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},l=/[&><\u2028\u2029]/g;function c(e){return e.replace(l,e=>h[e])}var d=s(7821);Symbol("serialized");var f=function(){let e=u.createContext(null);return{Provider:function(t){let s=`__RQ${u.useId()}`,i=c(JSON.stringify(s)),[r]=u.useState(()=>t.transformer??{serialize:e=>e,deserialize:e=>e}),[a]=u.useState(()=>"undefined"!=typeof window?{push(){}}:[]),h=u.useRef(0);if((0,o.useServerInsertedHTML)(()=>{if(a.push(...t.onFlush?.()??[]),!a.length)return null;let e=a.map(e=>r.serialize(e)).map(e=>JSON.stringify(e)).join(",");a.length=0;let s=[`window[${i}] = window[${i}] || [];`,`window[${i}].push(${c(e)});`];return(0,d.jsx)("script",{dangerouslySetInnerHTML:{__html:s.join("")}},h.current++)}),!n.sk){let e=window;if(!e[s]?.initialized){let i=(...e)=>{let s=e.map(e=>r.deserialize(e));t.onEntries(s)};i(...e[s]??[]),e[s]={initialized:!0,push:i}}}return(0,d.jsx)(e.Provider,{value:{stream:a,id:s},children:t.children})},context:e}}();function y(e){let t=(0,i.NL)(e.queryClient),[s]=u.useState(()=>new Set);return"undefined"==typeof window&&t.getQueryCache().subscribe(e=>{switch(e.type){case"added":case"updated":s.add(e.query.queryHash)}}),(0,d.jsx)(f.Provider,{onFlush:()=>{let i=e.options?.dehydrate?.shouldDehydrateQuery??a,u=function(e,t={}){let s=t.shouldDehydrateMutation??e.getDefaultOptions().dehydrate?.shouldDehydrateMutation??r,i=e.getMutationCache().getAll().flatMap(e=>s(e)?[{mutationKey:e.options.mutationKey,state:e.state,...e.options.scope&&{scope:e.options.scope},...e.meta&&{meta:e.meta}}]:[]),u=t.shouldDehydrateQuery??e.getDefaultOptions().dehydrate?.shouldDehydrateQuery??a;return{mutations:i,queries:e.getQueryCache().getAll().flatMap(e=>u(e)?[{state:e.state,queryKey:e.queryKey,queryHash:e.queryHash,..."pending"===e.state.status&&{promise:e.promise?.catch(e=>Promise.reject(Error("redacted")))},...e.meta&&{meta:e.meta}}]:[])}}(t,{...e.options?.dehydrate,shouldDehydrateQuery:e=>s.has(e.queryHash)&&i(e)});return(s.clear(),u.queries.length)?[u]:[]},onEntries:s=>{for(let i of s)!function(e,t,s){if("object"!=typeof t||null===t)return;let i=e.getMutationCache(),r=e.getQueryCache(),a=t.mutations||[],u=t.queries||[];a.forEach(({state:t,...r})=>{i.build(e,{...e.getDefaultOptions().hydrate?.mutations,...s?.defaultOptions?.mutations,...r},t)}),u.forEach(({queryKey:t,state:i,queryHash:a,meta:u,promise:n})=>{let o=r.get(a);if(o){if(o.state.dataUpdatedAt<i.dataUpdatedAt){let{fetchStatus:e,...t}=i;o.setState(t)}}else o=r.build(e,{...e.getDefaultOptions().hydrate?.queries,...s?.defaultOptions?.queries,queryKey:t,queryHash:a,meta:u},{...i,fetchStatus:"idle"});n&&o.fetch(void 0,{initialPromise:n})})}(t,i,e.options?.hydrate)},transformer:e.transformer,children:e.children})}}}]);