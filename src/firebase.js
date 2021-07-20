import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDxUApNveNN_0xS0TFtnuDhrlAt7mWle6I",
    authDomain: "gamil-clone-1ca6c.firebaseapp.com",
    projectId: "gamil-clone-1ca6c",
    storageBucket: "gamil-clone-1ca6c.appspot.com",
    messagingSenderId: "97745268913",
    appId: "1:97745268913:web:5b606e355b477c79b4b290",
    measurementId: "G-M2JF4K5GZ7"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider}
  