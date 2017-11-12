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
    "revision": "79a71d2f25a6e1eb0803945d48295af1"
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
    "revision": "1fd2b592e7666bcd9595dae06eed785d"
  },
  {
    "url": "inline.5bf9971f26153cb37a09.bundle.js",
    "revision": "4d0f35bcb9a1a0b8d2f3d0ad5fe8c2dc"
  },
  {
    "url": "main.46fcb82186493c4bbf16.bundle.js",
    "revision": "d3ca300f782f46624547d274f033268c"
  },
  {
    "url": "polyfills.900aaf0d520c2ec873a7.bundle.js",
    "revision": "a1a42d9eb5149e7037b56e5b0ac3d08e"
  },
  {
    "url": "styles.ccac3dbff61cd19109ee.bundle.css",
    "revision": "ccac3dbff61cd19109eecd8d566e595b"
  },
  {
    "url": "vendor.af4586351fb131965cb9.bundle.js",
    "revision": "f8f848dd33891f534b443c26cd123427"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
