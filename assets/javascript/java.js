
var config = {
  apiKey: "AIzaSyAjWtvjhLPyIL502brUaU_R2S6axL7a_5k",
  authDomain: "contacts-1f45d.firebaseapp.com",
  databaseURL: "https://contacts-1f45d.firebaseio.com",
  projectId: "contacts-1f45d",
  storageBucket: "contacts-1f45d.appspot.com",
  // messagingSenderId: "743721269474"
  };


  firebase.initializeApp(config);







var contacts = firebase.database();

var name = "";
var email = "";
var message = "";





//button click
$("#add-user").on("click", function(event) {
    event.preventDefault();

    name = $("#name-input").val().trim();
    email = $("#email-input").val().trim();
    message = $("#message-input").val().trim();

// Code for handling the push
contacts.ref().push({
    name: name,
    email: email,
    message: message,
    // dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

});

 // Firebase watcher 
 database.ref().on("value", function(snapshot) {
    // storing the snapshot.val() 
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.email);
    console.log(sv.message);

    
    $("#name-display").text(sv.name);
    $("#email-display").text(sv.email);
    $("#message-display").text(sv.message);

    // Handles  errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });