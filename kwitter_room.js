var firebaseConfig = {
  apiKey: "AIzaSyDpG_Zh3i21MU30OzYipmNlOsZxZHbhHD4",
  authDomain: "kwitterapp-cf3ef.firebaseapp.com",
  databaseURL: "https://kwitterapp-cf3ef-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-cf3ef",
  storageBucket: "kwitterapp-cf3ef.appspot.com",
  messagingSenderId: "454873770906",
  appId: "1:454873770906:web:5e22e3b19b54c6dc17a823",
  measurementId: "G-Y7YM99QZF6"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addRoom(){
    roomname = document.getElementById("roomname_input").value;
    firebase.database().ref("/").child(roomname).update({
          purpose: "adding roomname"
    });
    localStorage.setItem("roomname", roomname);
    window.location="kwitter_page.html";
}
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome " + username + "!";

function getData() {
firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("roomname_output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
room_names = childKey;
//Start code
console.log("Room Name - " + roomname);
row="<div class='roomname' id="+ room_names +" onclick='redirectToRoomName(this.id)'>#"+ roomname+"</div><hr>";
document.getElementById("roomname_input").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(username){
  console.log(username);
  localStorage.setItem(roomname, username);
  window.location = "kwitter_page.html";
}

function logOut(){
  localStorage.removeItem(username);
  localStorage.removeItem(roomname);
  window.location="index.html";
  }