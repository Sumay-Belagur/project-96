function back_to_room() {
    window.location= "chatroom.html"
}

room_name_inRoom= localStorage.getItem("RoomName");

document.getElementById("room_h1").innerHTML= "You have entered "  + room_name_inRoom;

function btn_change1() {
    document.getElementById("backToRoom_btn").innerHTML= "🔙" + "Back to rooms";
}

function btn_change2() {
    document.getElementById("backToRoom_btn").innerHTML= "Back to rooms";
}

var firebaseConfig = {
    apiKey: "AIzaSyDe9sgDxPTnwrGPWYfTuqK4YuI_RGR7AI8",
    authDomain: "project-94-a7aba.firebaseapp.com",
    databaseURL: "https://project-94-a7aba-default-rtdb.firebaseio.com",
    projectId: "project-94-a7aba",
    storageBucket: "project-94-a7aba.appspot.com",
    messagingSenderId: "720869870493",
    appId: "1:720869870493:web:bb47469d775e0a4b95bd74",
    measurementId: "${config.measurementId}"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("login_input");
  room_name= localStorage.getItem("RoomName");

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send() {
    console.log("message sent");
    msg= document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
        Name: user_name,
        message: msg,
        likes:0
    })
    document.getElementById("msg").value= "";
}

function placeholder_change() {
document.getElementById("msg").placeholder= "Send a message to " + room_name_inRoom;
}
placeholder_change();

