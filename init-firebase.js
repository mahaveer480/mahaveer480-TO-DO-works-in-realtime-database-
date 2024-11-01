

const firebaseConfig = {
    apiKey: "AIzaSyDT6mFGUOXuwIOJjvP6MZwCXQvLi2gPUDA",
  authDomain: "todo-lists-7de74.firebaseapp.com",
  projectId: "todo-lists-7de74",
  storageBucket: "todo-lists-7de74.appspot.com",
  messagingSenderId: "208331364205",
  appId: "1:208331364205:web:e9ee50d6fe8350bb4cac64",
  measurementId: "G-9B94L7YR9Y"
};


firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const dbRef = firebase.database().ref();

var database = firebase.database();