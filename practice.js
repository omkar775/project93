var firebaseConfig = {
    apiKey: "AIzaSyDUKV2vq5VbsUgM3sqxNuUFyKmQsdkYfCI",
    authDomain: "kwitter-f628f.firebaseapp.com",
    databaseURL: "https://kwitter-f628f-default-rtdb.firebaseio.com",
    projectId: "kwitter-f628f",
    storageBucket: "kwitter-f628f.appspot.com",
    messagingSenderId: "432376489417",
    appId: "1:432376489417:web:0d413119846bf4e4fdf418",
    measurementId: "G-P9MWSZ2KQR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
}