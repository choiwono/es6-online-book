/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5dc5138775c805a66885bb55c4d4bac6"
  },
  {
    "url": "assets/css/0.styles.048fa2d9.css",
    "revision": "9ffe14d91188af760a9ea46fc7332ca2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fe138930.js",
    "revision": "f4c9ae08f065badd403c8edfa6c8e94c"
  },
  {
    "url": "assets/js/11.8c772880.js",
    "revision": "669986d052aee4206f187128e9dce9dc"
  },
  {
    "url": "assets/js/12.c928e8cc.js",
    "revision": "5082021b68ac65b7ae205b1cfd6dc258"
  },
  {
    "url": "assets/js/13.859d13f3.js",
    "revision": "3792b398aea0a3306c1fa422b1e3c5e3"
  },
  {
    "url": "assets/js/14.61aff327.js",
    "revision": "f2879386e38409a1a21ee0afd47c9dda"
  },
  {
    "url": "assets/js/2.ba394695.js",
    "revision": "bb1a83ff6da134be8b2ef2cbecdb292e"
  },
  {
    "url": "assets/js/3.4f9727e1.js",
    "revision": "68c0e23444dbbaad8c33c2a96f45f3d1"
  },
  {
    "url": "assets/js/4.78a95f3c.js",
    "revision": "0c597629183941fca3d73a6519c08e8f"
  },
  {
    "url": "assets/js/5.75b55f2c.js",
    "revision": "7ef9150e9639740cc1c62ced2f386893"
  },
  {
    "url": "assets/js/6.89525a3a.js",
    "revision": "84a470fa65f36e8604d05aaa0dea58ea"
  },
  {
    "url": "assets/js/7.0307bdcc.js",
    "revision": "59f53779bc34541606557220ed50102c"
  },
  {
    "url": "assets/js/8.4120cf47.js",
    "revision": "d25a57891f1403612984e30245724376"
  },
  {
    "url": "assets/js/9.03367c02.js",
    "revision": "36e08f94ba3804cea8f4399f2a3046e9"
  },
  {
    "url": "assets/js/app.3b2aabc5.js",
    "revision": "e240c0d8e8b29affe5880ebe2dc0301e"
  },
  {
    "url": "const-let.html",
    "revision": "8b1f350e96b24b4dd4020d377c9bc924"
  },
  {
    "url": "destructuring.html",
    "revision": "9902113f64eb6fa6fcfb3ebd71f22ffa"
  },
  {
    "url": "enhanced-object-literals.html",
    "revision": "5256b9ce5440d0c7883bff40fa731e22"
  },
  {
    "url": "fat-arrow.html",
    "revision": "3b83c5573d8ea096ef93ef56a1991a74"
  },
  {
    "url": "guide.html",
    "revision": "61b8ed01a2e188dfdb3603a95791065c"
  },
  {
    "url": "images/icons/120x.png",
    "revision": "bdbb30ccb538ba228c8df4eead21e5de"
  },
  {
    "url": "images/icons/128x.png",
    "revision": "9c3ba34e48ac1acc8eaa5ac68a72c544"
  },
  {
    "url": "images/icons/144x.png",
    "revision": "202ab576d05bae1b5bef5706c6d16084"
  },
  {
    "url": "images/icons/152x.png",
    "revision": "c5a0fc796d0059ee5c400cd835aa30a4"
  },
  {
    "url": "images/icons/167x.png",
    "revision": "1881e234ec550072f06f0cb423e7c9bf"
  },
  {
    "url": "images/icons/180x.png",
    "revision": "af405def5da96beb1860580c52d99f5c"
  },
  {
    "url": "images/icons/192x.png",
    "revision": "3aa2b606bccadc8a3463c3ee24c03a96"
  },
  {
    "url": "images/icons/384x.png",
    "revision": "c8661c6f25676397bd24ea6f99054e19"
  },
  {
    "url": "images/icons/512x.png",
    "revision": "12a26264e5fb40aab70b51c375a5ab54"
  },
  {
    "url": "images/icons/72x.png",
    "revision": "692868f0e1e6c63ccd49fe843cb8382f"
  },
  {
    "url": "images/icons/96x.png",
    "revision": "4f4a131b91c32a1a509bdbd5e27dc636"
  },
  {
    "url": "index.html",
    "revision": "c7b2f3a2abfdc58895c89561f874bf7f"
  },
  {
    "url": "logo.png",
    "revision": "f86547f8a0cdc19a7b62a82909ac02a5"
  },
  {
    "url": "spread-operator.html",
    "revision": "272a0945dd8eb0a455a5390f747c108a"
  },
  {
    "url": "template-literal.html",
    "revision": "993dd4f07b846a1a6e960af98f6c7c80"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
