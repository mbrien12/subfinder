// Initialize Firebase
var config = {
  apiKey: "AIzaSyD5i7tBgrYJzaTlaIfHPgWB99Cf0OqOr4o",
  authDomain: "michelle-c6437.firebaseapp.com",
  databaseURL: "https://michelle-c6437.firebaseio.com",
  storageBucket: "michelle-c6437.appspot.com",
  messagingSenderId: "441345070337"
};
firebase.initializeApp(config);

// Storing data from Firebase as variable


var peopleList = getData();

function getData(){
  firebase.database().ref().once('value').then(function(snapshot) {
    peopleList = snapshot.val();
    peopleList = Object.values(peopleList);
  });
}

$('#details').hide();

$('button').click( function() { 
  // get user input
  var selectedOption = $('select').val(); // this is jQuery val()
  console.log(selectedOption)
  // filter people by user selection
  var resultsList = filterAndSortList(peopleList, selectedOption);
  console.log(resultsList);
  // and show the results
  showList(resultsList);
})


