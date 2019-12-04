import firebase from 'firebase'
import firestore from 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDHHk4zicVjTjDsIWvnTbrc9sUxLVxgr10",
    authDomain: "vue-live-chat-7aea8.firebaseapp.com",
    databaseURL: "https://vue-live-chat-7aea8.firebaseio.com",
    projectId: "vue-live-chat-7aea8",
    storageBucket: "vue-live-chat-7aea8.appspot.com",
    messagingSenderId: "926641928037",
    appId: "1:926641928037:web:2bbe0b79e32ca6a6f8938c",
    measurementId: "G-XDG3XPR9ZF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})
//firebase.analytics();

export default firebaseApp.firestore()