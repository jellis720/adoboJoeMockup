"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/adoboJoeMockup/index.html","3f4aadd2bd11b9d2e86bcaec0036e2a5"],["/adoboJoeMockup/static/css/main.ec224018.css","1e9e5ff562d723fa08ff30fca6e449cd"],["/adoboJoeMockup/static/js/main.2efa4804.js","420f86fdf7496bff798999c584c00e82"],["/adoboJoeMockup/static/media/emaillogo.ec46f34a.png","ec46f34a97582e9783adbc29c376ad75"],["/adoboJoeMockup/static/media/fb.0731de09.png","0731de09a76b5a2db3d64d7a5f2fd0e1"],["/adoboJoeMockup/static/media/insta.03f40b67.png","03f40b67b63d9c1c1a5a792109bbc699"],["/adoboJoeMockup/static/media/logo.480cb440.jpg","480cb440d4ed9747601f40341e039514"],["/adoboJoeMockup/static/media/phonelogo.9aff05cc.png","9aff05cce2d5b44eeea6492b9371114b"],["/adoboJoeMockup/static/media/ron2.bcd87f6c.jpeg","bcd87f6ccdb3f77ee4e4658b902d4fb5"],["/adoboJoeMockup/static/media/streetfoodfinderlogo.df3ce099.png","df3ce09970c332fd6860e766a6f443e0"],["/adoboJoeMockup/static/media/truck.af361e35.jpg","af361e35c313b9ae5017f69865819b1d"],["/adoboJoeMockup/static/media/truck2.4f201bd3.jpeg","4f201bd354b40d397ee76cbb4fbcdc0e"],["/adoboJoeMockup/static/media/twitter.b0ffa4ee.png","b0ffa4ee880f27a4662b1450dca973f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/adoboJoeMockup/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});