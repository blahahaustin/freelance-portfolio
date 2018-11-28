"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","7b434c7cfb7c75faebd031d90effb90c"],["/static/css/main.58c5da92.css","e65ab140a82b84f005ff509929707658"],["/static/js/main.712419f2.js","e14e37afabe802698d6317049cadc733"],["/static/media/css-grid.b7eecc11.svg","b7eecc11978f3ba5f8271122f68cd5cf"],["/static/media/css.bd2a923b.svg","bd2a923b24170f2561574a7e7e5a08ba"],["/static/media/facebook.ea3e031f.svg","ea3e031f458ef9fed8ad05b78eaafcdc"],["/static/media/github.d35eca5f.svg","d35eca5fccf0638183f2caa728504b4c"],["/static/media/html.dfd27fcc.svg","dfd27fcc1d2bf4c7b72a175585bd4f5b"],["/static/media/instagram.25da043d.svg","25da043d6c34f9d3055debc44b1910d1"],["/static/media/javascript.e335794c.svg","e335794c806d6f77f8ce0d6dae289ae4"],["/static/media/jquery.7c4aefc4.svg","7c4aefc469da2d4fb889e1b950b7b970"],["/static/media/linkedin.ca38b531.svg","ca38b531a681ff50579916d4322851fb"],["/static/media/mail.fcc1a02c.png","fcc1a02c43f8b747800efad74e216e10"],["/static/media/nand-mahasuwan.2ca70219.jpg","2ca70219f36c406b021f3ae621f17ae0"],["/static/media/profile-photo.56775cd9.jpg","56775cd9419e06dccab255d45627430b"],["/static/media/random-quote-machine.e1fbbd17.jpg","e1fbbd17b2c3f8d045674a399d5df901"],["/static/media/react.1a2e6932.svg","1a2e6932e63ee4637912ab6d92eccce5"],["/static/media/single-page-weather.a0ce5d02.jpg","a0ce5d023fc64fb0a47046f5d43813ae"],["/static/media/twitter.dadbb711.svg","dadbb7110ca3dd74bbfdc827fb72bf5d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});