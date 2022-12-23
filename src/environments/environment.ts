// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDuekJ8EvdJB4Hpj9sNGLGkWYL0ofJkqxA",
    authDomain: "drip-trip-c1c9c.firebaseapp.com",
    projectId: "drip-trip-c1c9c",
    storageBucket: "drip-trip-c1c9c.appspot.com",
    messagingSenderId: "691297381529",
    appId: "1:691297381529:web:ec4a94ad5f206a74e81c08",
    measurementId: "G-BL0KVCGSB0"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
