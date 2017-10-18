importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "3rdpartylicenses.txt",
    "revision": "a1c2d72d3f2341836f8bf90395cde7ba"
  },
  {
    "url": "assets/loader.svg",
    "revision": "e3076756d6f82b724f917ebf7a689f88"
  },
  {
    "url": "assets/sw.js",
    "revision": "05ad8f93546cdea64cf9566a903c0264"
  },
  {
    "url": "assets/workbox-sw.prod.v2.1.0.js",
    "revision": "e5f207838d7fd9c81835d5705a73cfa2"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "fontawesome-webfont.674f50d287a8c48dc19b.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fontawesome-webfont.912ec66d7572ff821749.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "fontawesome-webfont.af7ae505a9eed503f8b8.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "fontawesome-webfont.b06871f281fee6b241d6.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fontawesome-webfont.fee66e712a8a08eef580.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "index.html",
    "revision": "8aeb361d2ef0fd5f2da847c9a39d806b"
  },
  {
    "url": "inline.c243db80c0a6bfe8f13b.bundle.js",
    "revision": "3b4533f32b216388f0a50bbe6659aa1c"
  },
  {
    "url": "main.eced105697bfe82029fd.bundle.js",
    "revision": "0f1859b5f1d12ba194dbed3ffa0c3e1c"
  },
  {
    "url": "polyfills.900aaf0d520c2ec873a7.bundle.js",
    "revision": "a1a42d9eb5149e7037b56e5b0ac3d08e"
  },
  {
    "url": "styles.5bdc5fdb45bbd1cada38.bundle.css",
    "revision": "5bdc5fdb45bbd1cada38f3d94ea2da81"
  },
  {
    "url": "vendor.7988c55ae7dfbadfaf8a.bundle.js",
    "revision": "6263311dff10b2558130f92f29502fdb"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
