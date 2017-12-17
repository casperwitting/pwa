// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBH5febPinx8CZ2lbAQ8JXQIrrFBjv3Ydg",
    authDomain: "pwa-demo-51d2c.firebaseapp.com",
    databaseURL: "https://pwa-demo-51d2c.firebaseio.com",
    projectId: "pwa-demo-51d2c",
    storageBucket: "pwa-demo-51d2c.appspot.com",
    messagingSenderId: "965705176673"
  }
};
