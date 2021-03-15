import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8VFurJh0_Pfv1Ly3IdXaP38QpV4EqVXY",
    authDomain: "whatsapp-clone-701f2.firebaseapp.com",
    projectId: "whatsapp-clone-701f2",
    storageBucket: "whatsapp-clone-701f2.appspot.com",
    messagingSenderId: "258466924981",
    appId: "1:258466924981:web:32f26f87cd40bea4a831fc",
    measurementId: "G-EVZ2QWL94T"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;