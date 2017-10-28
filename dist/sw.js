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
    "revision": "447cd205ed72049f8012da1e7df60a8b"
  },
  {
    "url": "inline.698d227097ac1633a537.bundle.js",
    "revision": "bab1c6bb1123c88db39a5ba0806dfaba"
  },
  {
    "url": "main.30f99ab5232adc0e422c.bundle.js",
    "revision": "3953a33de9c2f0720bd192d4771d01cc"
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
    "url": "vendor.1944def6fe1f7594ffb7.bundle.js",
    "revision": "bd0d4d365406b33b89c08b4e606bb350"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
