"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1374],{41374:function(t,e,n){n.d(e,{ZP:function(){return F}});var r=n(82394),o=n(77837),u=n(12757),c=n(38860),a=n.n(c),i=(n(83455),n(96040)),s=n(55056),p=n.n(s),l=n(59e3),f=n(554);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h="DELETE",y="GET",b="POST",g="PUT";function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.body,o=(e.ctx,e.method),c=void 0===o?y:o,a=e.query,i=void 0===a?{}:a,s=(e.token,{"Content-Type":"application/json"}),p={method:c};if(n){var d=n.file;if(d){d.name,d.size,d.type;var h=new FormData,b=Object.keys(n).filter((function(t){return"file"!==t}))[0];h.set("json_root_body",JSON.stringify((0,r.Z)({api_key:f.env.NEXT_PUBLIC_API_KEY},b,n[b]))),h.append("file",d),p.body=h,delete s["Content-Type"]}else p.body=JSON.stringify(v(v({},n),{},{api_key:f.env.NEXT_PUBLIC_API_KEY}))}p.headers=new Headers(s);var g=v(v({},(0,l.iV)(t)),i);f.env.NEXT_PUBLIC_API_KEY&&(g.api_key=f.env.NEXT_PUBLIC_API_KEY);var O=Object.entries(g).reduce((function(t,e){var n=(0,u.Z)(e,2),r=n[0],o=n[1];return t.concat("".concat(r,"=").concat(o))}),[]).join("&");return{data:p,headers:s,method:c,queryString:O,url:t.split("?")[0]}}function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=O(t,e),r=n.data,o=n.queryString,u=n.url,c=o?"".concat(u,"?").concat(o):u;return fetch(c,r)}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=O(t,e),r=n.data,o=n.headers,u=n.method,c=n.queryString,a=n.url,i=c?"".concat(a,"?").concat(c):a;return p().request({data:r.body,headers:o,method:u,onUploadProgress:null===e||void 0===e?void 0:e.onUploadProgress,url:i})}function P(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return w(t,e).then((function(t){return t.clone().json()}))}var j=n(28799);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function E(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m((0,j.Q2)(t),_(_({},n),{},{body:e,method:b}))}function k(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=(0,j.Q2)(e,n,t);return m(u,_(_({},o),{},{body:r,method:b}))}function Z(t,e,n,r,o){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},c=(0,j.Q2)(e,n,t,r);return m(c,_(_({},u),{},{body:o,method:g}))}function D(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return w((0,j.Q2)(e,n),{ctx:t,query:r,method:y})}function A(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return w((0,j.Q2)(e),{ctx:t,query:n,method:y})}function C(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return w((0,j.Q2)(n,r,e),{ctx:t,query:o,method:y})}function Q(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=(0,j.Q2)(t,e,null,null,r);return m(o,{body:n,method:g})}function S(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=(0,i.ZP)(e?(0,j.Q2)(t,e):null,(function(t){return P(t,{method:y,query:n})}),r),u=o.data,c=o.error,a=o.mutate;return{data:u,error:c,mutate:a}}function T(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},c=arguments.length>6?arguments[6]:void 0,a=(0,i.ZP)(e&&(r?(0,j.Q2)(n,r,t,e,o,c):null),(function(t){return P(t,{method:y,query:o})}),u),s=a.data,p=a.error,l=a.mutate;return{data:s,error:p,mutate:l}}function L(t,e){return w((0,j.Q2)(t,e),{method:h})}function I(t,e,n,r){return w((0,j.Q2)(e,n,t,r),{method:h})}function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(0,i.ZP)((0,j.Q2)(t,null,null,null,e),(function(t){return P(t)}),n),o=r.data,u=r.error,c=r.mutate;return{data:o,error:u,loading:!o&&!u,mutate:c}}function q(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=(0,i.ZP)(n?(0,j.Q2)(e,n,t,null,r):null,(function(t){return P(t)}),o),c=u.data,a=u.error,s=u.mutate;return{data:c,error:a,loading:!c&&!a,mutate:s}}function N(t,e,n,r){return w((0,j.Q2)(e,n),{ctx:t,body:r,method:g})}var B=n(96510);function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?K(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var X="blocks",Y="feature_sets",J="kernels",R="pipelines",z={};[["execute",R],["autocomplete_items"],[X],[X,R],[X,R,"analyses"],[X,R,"outputs"],["columns",Y],["data_providers"],["downloads",Y],[Y],["files"],["file_contents"],[J],["interrupt",J],["restart",J],[R],["pipeline_schedules"],["status"],["variables",R],["versions",Y],["widgets",R]].forEach((function(t){var e=(0,u.Z)(t,4),n=e[0],r=e[1],c=e[2],i=e[3];z[n]||(z[n]={deleteAsync:function(){var t=(0,o.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(n,e);case 2:return r=t.sent,t.next=5,(0,B.pr)(r);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),detail:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;return S(n,t,e,H(H({},i),r))},detailAsync:function(){var t=(0,o.Z)(a().mark((function t(e,r){var o,u,c=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=c.length>2&&void 0!==c[2]?c[2]:{},t.next=3,D(e,n,r,o);case 3:return u=t.sent,t.next=6,(0,B.pr)(u);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),updateAsync:function(){var t=(0,o.Z)(a().mark((function t(e,r,o){var u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N(e,n,r,o);case 2:return u=t.sent,t.next=5,(0,B.pr)(u);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),useUpdate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var r=(0,o.Z)(a().mark((function r(o){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Q(n,t,o,e));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}),c?(z[n][r][c]={},z[n][r][c].detail=function(t,e,o,u){return T(n,e,r,t,o,H(H({},i),u),c)}):r?(z[n][r]={},z[n][r].useCreate=function(t,e){return function(){var u=(0,o.Z)(a().mark((function o(u){return a().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",k(n,r,t,u,e));case 1:case"end":return o.stop()}}),o)})));return function(t){return u.apply(this,arguments)}}()},z[n][r].useCreateWithParentIdLater=function(t){return function(){var e=(0,o.Z)(a().mark((function e(o){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(n,r,o.parentId,o.body,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z[n][r].useUpdate=function(t,e,u){return function(){var c=(0,o.Z)(a().mark((function o(c){return a().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Z(n,r,t,e,c,u));case 1:case"end":return o.stop()}}),o)})));return function(t){return c.apply(this,arguments)}}()},z[n][r].useDelete=function(t,e){return(0,o.Z)(a().mark((function o(){var u;return a().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,I(n,r,t,e);case 2:return u=o.sent,o.next=5,(0,B.pr)(u);case 5:return o.abrupt("return",o.sent);case 6:case"end":return o.stop()}}),o)})))},z[n][r].listAsync=function(){var t=(0,o.Z)(a().mark((function t(e,o){var u,c,i=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=i.length>2&&void 0!==i[2]?i[2]:{},t.next=3,C(e,n,r,o,u);case 3:return c=t.sent,t.next=6,(0,B.pr)(c);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),z[n][r].list=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;return q(n,r,t,e,H(H({},i),o))},z[n][r].detail=function(t,e,o,u){return T(n,e,r,t,o,H(H({},i),u))}):(z[n].create=function(){var t=(0,o.Z)(a().mark((function t(e,r){var o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(n,e,r);case 2:return o=t.sent,t.next=5,(0,B.pr)(o);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),z[n].useCreate=function(t){return function(){var e=(0,o.Z)(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E(n,r,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z[n].useDelete=function(t){return(0,o.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(n,t);case 2:return r=e.sent,e.next=5,(0,B.pr)(r);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))},z[n].listAsync=function(){var t=(0,o.Z)(a().mark((function t(e){var r,o,u=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},t.next=3,A(e,n,r);case 3:return o=t.sent,t.next=6,(0,B.pr)(o);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z[n].list=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return U(n,t,H(H({},i),e))})}));var F=z},28799:function(t,e,n){n.d(e,{Ib:function(){return c},Q2:function(){return a}});var r=n(59e3);function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"localhost",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"6789",r=e;return t&&(r=window.location.hostname),r===e?r="".concat(r,":").concat(n):t&&window.location.port&&(r="".concat(r,":").concat(window.location.port)),r}function u(){var t="localhost",e="/CLOUD_NOTEBOOK_BASE_PATH_PLACEHOLDER_",n=o(true,t,"6789"),r=function(t,e){var n,r="http://";return e!==(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"localhost")&&(r="https://",!t||null!==(n=window.location.protocol)&&void 0!==n&&n.match(/https/)||(r="http://")),r}(true,n,t),u="";return e.includes("CLOUD_NOTEBOOK_BASE_PATH_PLACEHOLDER")||(u=e),"".concat(r).concat(n).concat(u,"/api")}function c(){return"ws://".concat(o(!0,"localhost","6789"),"/websocket/")}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,i="".concat(u(),"/").concat(t);return e&&(i="".concat(i,"/").concat(e)),n&&(i="".concat(i,"/").concat(n)),o&&(i="".concat(i,"/").concat(o)),a&&(i="".concat(i,"/").concat(a)),Object.values(c).length>=1&&(i="".concat(i,"?").concat((0,r.uM)(c))),i}}}]);