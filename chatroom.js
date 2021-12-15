function back() {
    window.location= "index.html";
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

document.getElementById("wlc_h3").innerHTML= "Hello " + user_name;

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log(Room_names);

 row= "<div class='roomName' id='"+ Room_names+ "' onclick='open_room(this.id);'>" + Room_names + "</div>"

 document.getElementById("output").innerHTML += row; 
});});}
getData();

function addRoom() {
  roomName= document.getElementById("addRoom_input").value;

  localStorage.setItem("RoomName" , roomName);

  firebase.database().ref("/").child(roomName).update({
        purpose: "making a room"
  })
}

function open_room(name) {

  console.log(name);
  localStorage.setItem("RoomName" , name);

  window.location= "chatting_page.html";

}

