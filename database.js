  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5i7tBgrYJzaTlaIfHPgWB99Cf0OqOr4o",
    authDomain: "michelle-c6437.firebaseapp.com",
    databaseURL: "https://michelle-c6437.firebaseio.com",
    storageBucket: "michelle-c6437.appspot.com",
    messagingSenderId: "441345070337"
  };
  firebase.initializeApp(config);

var data = [];

function getData(){
  firebase.database().ref().once('value').then(function(snapshot) {
    data = snapshot.val();
    console.log("Firebase data: " + data)
  });
}

getData()
