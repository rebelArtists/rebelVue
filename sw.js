if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,r,i)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const d={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return c;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-7ce2238d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/404.34bf79ed.js",revision:"cccd8c8c84c9f40f371968dcb516a5a7"},{url:"assets/404.a9a6e4f2.css",revision:"2bd416b9b908fd1896a32bc6679822c5"},{url:"assets/CrowdsaleComp.5ed713a4.js",revision:"154b8c902ad5c33e19ab78548d87e072"},{url:"assets/CrowdsaleComp.e046f00b.css",revision:"0f38c12616f50fc006c21b90d7b44103"},{url:"assets/index.498ab9da.css",revision:"6ec3e3753a3a8a02874d8263b5a2ba88"},{url:"assets/index.50cd9a22.js",revision:"3422236cc5f51178031cc68b26ac5682"},{url:"assets/mdb.umd.min.3b31480c.js",revision:"588ed88accc370525ccfeb32f295adb1"},{url:"assets/mdb.umd.min.72a548b4.css",revision:"bdde5b5e28bf0bf04f29e95276620657"},{url:"assets/VAbout.1a2abd1d.css",revision:"a8a8ef4369e3457c9bb9c5667278bd61"},{url:"assets/VAbout.daa2786a.js",revision:"a3d1300e7cf7426e7387e8cbc3c5426f"},{url:"assets/vendor.1b9cd890.css",revision:"b2eda931afa5522db8c5fd4a305f11c7"},{url:"assets/vendor.b087ac14.js",revision:"93629aa0e7ceb43c01d6e5f86e09f6f3"},{url:"assets/VFeed.3cb17118.css",revision:"871a5698c446bdd9fc4971d804096f65"},{url:"assets/VFeed.42259287.js",revision:"2d6f83822b0464ebe0ffaa393c6cbe54"},{url:"assets/VPost.6f6780ca.js",revision:"87d70b2f373e65a0a1144d220edbeadc"},{url:"assets/VPost.81f6d8d0.css",revision:"17e8378fda44bad13bac52d227d65183"},{url:"assets/VUser.0816751d.css",revision:"3156d2ef160bf437274f328eed52f5bf"},{url:"assets/VUser.09f8113a.js",revision:"dcd2de7cafe3f2e2ae1a32e276539fd7"},{url:"index.html",revision:"27611df7bd00227c360722f4e5cf22a6"},{url:"icons/icon-192x192.png",revision:"15508ba99434da116111915c8ff9de51"},{url:"icons/icon-256x256.png",revision:"c19b111e2c53dd0357e1cb910da3ebb2"},{url:"icons/icon-384x384.png",revision:"123b7d9d954e39448e1ba6efe4b5edad"},{url:"icons/icon-512x512.png",revision:"41eba7568f9eeadd81c5eb1403162705"},{url:"manifest.webmanifest",revision:"e9db0b5e0c984cc6099cbcc0885c27e8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
