"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3231],{6648:function(e,t,r){r.d(t,{default:function(){return o.a}});var n=r(5601),o=r.n(n)},7138:function(e,t,r){r.d(t,{default:function(){return o.a}});var n=r(231),o=r.n(n)},5601:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},getImageProps:function(){return u}});let n=r(9920),o=r(497),i=r(8173),a=n._(r(1241));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=i.Image},2474:function(e,t,r){e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=void 0,e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=void 0,e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=void 0,Object.assign(e.exports,r(2265))},5536:function(e,t,r){r.d(t,{K:function(){return c}});var n,o=r(2474),i=r(2511),a=r(8164),u=i.aS?Symbol.for("__APOLLO_CONTEXT__"):"__APOLLO_CONTEXT__";function c(){(0,a.kG)("createContext"in(n||(n=r.t(o,2))),46);var e=o.createContext[u];return e||(Object.defineProperty(o.createContext,u,{value:e=o.createContext({}),enumerable:!1,writable:!1,configurable:!0}),e.displayName="ApolloContext"),e}},2471:function(e,t,r){r.d(t,{x:function(){return a}});var n=r(8164),o=r(2474),i=r(5536);function a(e){var t=o.useContext((0,i.K)()),r=e||t.client;return(0,n.kG)(!!r,50),r}},9120:function(e,t,r){r.d(t,{mp:function(){return C},_F:function(){return Q},RN:function(){return T},KH:function(){return x},aM:function(){return P},p1:function(){return w}});var n=r(1735),o=r(8164),i=r(2474),a=r.t(i,2),u=r(2511),c=!1,s=a.useSyncExternalStore||function(e,t,r){var n=t();!1===globalThis.__DEV__||c||n===t()||(c=!0,!1!==globalThis.__DEV__&&o.kG.error(60));var a=i.useState({inst:{value:n,getSnapshot:t}}),s=a[0].inst,f=a[1];return u.JC?i.useLayoutEffect(function(){Object.assign(s,{value:n,getSnapshot:t}),l(s)&&f({inst:s})},[e,n,t]):Object.assign(s,{value:n,getSnapshot:t}),i.useEffect(function(){return l(s)&&f({inst:s}),e(function(){l(s)&&f({inst:s})})},[e]),n};function l(e){var t=e.value,r=e.getSnapshot;try{return t!==r()}catch(e){return!0}}var f=r(4511),d=r(1135),v=r(5536),p=r(1288),b=r(3152),h=r(8607),_=r(2471),g=r(8620),y=r(1567),O=r(2018),S=Symbol.for("apollo.hook.wrappers"),k=Object.prototype.hasOwnProperty;function E(){}var m=Symbol();function P(e,t){var r,n,o,i;return void 0===t&&(t=Object.create(null)),(r=D,(i=(o=(n=(0,_.x)(t&&t.client).queryManager)&&n[S])&&o.useQuery)?i(r):r)(e,t)}function D(e,t){var r=w(e,t),o=r.result,a=r.obsQueryFields;return i.useMemo(function(){return(0,n.pi)((0,n.pi)({},o),a)},[o,a])}function w(e,t){var r,o,a,u,c,l,d=(0,_.x)(t.client),p=i.useContext((0,v.K)()).renderPromises,g=!!p,y=d.disableNetworkFetches,O=!1!==t.ssr&&!t.skip,S=t.partialRefetch,P=C(d,e,t,g),D=function(e,t,r,o,a){function u(n){var i;return(0,h.Vp)(t,h.n_.Query),{client:e,query:t,observable:o&&o.getSSRObservable(a())||e.watchQuery(T(void 0,e,r,a())),resultData:{previousData:null===(i=null==n?void 0:n.resultData.current)||void 0===i?void 0:i.data}}}var c=i.useState(u),s=c[0],l=c[1];function f(e){Object.assign(s.observable,((t={})[m]=e,t));var t,r,o=s.resultData;l((0,n.pi)((0,n.pi)({},s),{query:e.query,resultData:Object.assign(o,{previousData:(null===(r=o.current)||void 0===r?void 0:r.data)||o.previousData,current:void 0})}))}if(e!==s.client||t!==s.query){var d=u(s);return l(d),[d,f]}return[s,f]}(d,e,t,p,P),w=D[0],Q=w.observable,M=w.resultData,I=D[1],j=P(Q);Q[m]&&!(0,f.D)(Q[m],j)&&(Q.reobserve(T(Q,d,t,j)),M.previousData=(null===(r=M.current)||void 0===r?void 0:r.data)||M.previousData,M.current=void 0),Q[m]=j;var G=i.useMemo(function(){return{refetch:Q.refetch.bind(Q),reobserve:Q.reobserve.bind(Q),fetchMore:Q.fetchMore.bind(Q),updateQuery:Q.updateQuery.bind(Q),startPolling:Q.startPolling.bind(Q),stopPolling:Q.stopPolling.bind(Q),subscribeToMore:Q.subscribeToMore.bind(Q)}},[Q]);return p&&O&&(p.registerSSRObservable(Q),Q.getCurrentResult().loading&&p.addObservableQueryPromise(Q)),{result:(o={onCompleted:t.onCompleted||E,onError:t.onError||E},a=i.useRef(o),i.useEffect(function(){a.current=o}),u=(g||y)&&!1===t.ssr&&!t.skip?A:t.skip||"standby"===j.fetchPolicy?L:void 0,c=M.previousData,l=i.useMemo(function(){return u&&x(u,c,Q,d)},[d,Q,u,c]),s(i.useCallback(function(e){if(g)return function(){};var t=function(){var t=M.current,r=Q.getCurrentResult();t&&t.loading===r.loading&&t.networkStatus===r.networkStatus&&(0,f.D)(t.data,r.data)||N(r,M,Q,d,S,e,a.current)},r=function(o){if(n.current.unsubscribe(),n.current=Q.resubscribeAfterError(t,r),!k.call(o,"graphQLErrors"))throw o;var i=M.current;(!i||i&&i.loading||!(0,f.D)(o,i.error))&&N({data:i&&i.data,error:o,loading:!1,networkStatus:b.Ie.error},M,Q,d,S,e,a.current)},n={current:Q.subscribe(t,r)};return function(){setTimeout(function(){return n.current.unsubscribe()})}},[y,g,Q,M,S,d]),function(){return l||R(M,Q,a.current,S,d)},function(){return l||R(M,Q,a.current,S,d)})),obsQueryFields:G,observable:Q,resultData:M,client:d,onQueryExecuted:I}}function C(e,t,r,o){void 0===r&&(r={});var i=r.skip,a=(r.ssr,r.onCompleted,r.onError,r.defaultOptions),u=(0,n._T)(r,["skip","ssr","onCompleted","onError","defaultOptions"]);return function(r){var n=Object.assign(u,{query:t});return o&&("network-only"===n.fetchPolicy||"cache-and-network"===n.fetchPolicy)&&(n.fetchPolicy="cache-first"),n.variables||(n.variables={}),i?(n.initialFetchPolicy=n.initialFetchPolicy||n.fetchPolicy||Q(a,e.defaultOptions),n.fetchPolicy="standby"):n.fetchPolicy||(n.fetchPolicy=(null==r?void 0:r.options.initialFetchPolicy)||Q(a,e.defaultOptions)),n}}function T(e,t,r,n){var o=[],i=t.defaultOptions.watchQuery;return i&&o.push(i),r.defaultOptions&&o.push(r.defaultOptions),o.push((0,g.o)(e&&e.options,n)),o.reduce(d.J)}function N(e,t,r,i,a,u,c){var s=t.current;s&&s.data&&(t.previousData=s.data),!e.error&&(0,y.O)(e.errors)&&(e.error=new p.cA({graphQLErrors:e.errors})),t.current=x(e.partial&&a&&!e.loading&&(!e.data||0===Object.keys(e.data).length)&&"cache-only"!==r.options.fetchPolicy?(r.refetch(),(0,n.pi)((0,n.pi)({},e),{loading:!0,networkStatus:b.Ie.refetch})):e,t.previousData,r,i),u(),function(e,t,r){if(!e.loading){var n=(0,y.O)(e.errors)?new p.cA({graphQLErrors:e.errors}):e.error;Promise.resolve().then(function(){n?r.onError(n):e.data&&t!==e.networkStatus&&e.networkStatus===b.Ie.ready&&r.onCompleted(e.data)}).catch(function(e){!1!==globalThis.__DEV__&&o.kG.warn(e)})}}(e,null==s?void 0:s.networkStatus,c)}function R(e,t,r,n,o){return e.current||N(t.getCurrentResult(),e,t,o,n,function(){},r),e.current}function Q(e,t){var r;return(null==e?void 0:e.fetchPolicy)||(null===(r=null==t?void 0:t.watchQuery)||void 0===r?void 0:r.fetchPolicy)||"cache-first"}function x(e,t,r,o){var i=e.data,a=(e.partial,(0,n._T)(e,["data","partial"]));return(0,n.pi)((0,n.pi)({data:i},a),{client:o,observable:r,variables:r.variables,called:e!==A&&e!==L,previousData:t})}var A=(0,O.J)({loading:!0,data:void 0,error:void 0,networkStatus:b.Ie.loading}),L=(0,O.J)({loading:!1,data:void 0,error:void 0,networkStatus:b.Ie.ready})},8607:function(e,t,r){r.d(t,{Vp:function(){return d},n_:function(){return o}});var n,o,i,a=r(8164),u=r(8288),c=r(1531),s=r(1568);function l(e){var t;switch(e){case o.Query:t="Query";break;case o.Mutation:t="Mutation";break;case o.Subscription:t="Subscription"}return t}function f(e){i||(i=new u.s(c.Q.parser||1e3));var t,r,n=i.get(e);if(n)return n;(0,a.kG)(!!e&&!!e.kind,62,e);for(var s=[],l=[],f=[],d=[],v=0,p=e.definitions;v<p.length;v++){var b=p[v];if("FragmentDefinition"===b.kind){s.push(b);continue}if("OperationDefinition"===b.kind)switch(b.operation){case"query":l.push(b);break;case"mutation":f.push(b);break;case"subscription":d.push(b)}}(0,a.kG)(!s.length||l.length||f.length||d.length,63),(0,a.kG)(l.length+f.length+d.length<=1,64,e,l.length,d.length,f.length),r=l.length?o.Query:o.Mutation,l.length||f.length||(r=o.Subscription);var h=l.length?l:f.length?f:d;(0,a.kG)(1===h.length,65,e,h.length);var _=h[0];t=_.variableDefinitions||[];var g={name:_.name&&"Name"===_.name.kind?_.name.value:"data",type:r,variables:t};return i.set(e,g),g}function d(e,t){var r=f(e),n=l(t),o=l(r.type);(0,a.kG)(r.type===t,66,n,n,o)}(n=o||(o={}))[n.Query=0]="Query",n[n.Mutation=1]="Mutation",n[n.Subscription=2]="Subscription",f.resetCache=function(){i=void 0},!1!==globalThis.__DEV__&&(0,s.zP)("parser",function(){return i?i.size:0})}}]);