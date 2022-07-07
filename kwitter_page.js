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

username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");

function send(){
    msg = document.getElementById("message_input").value;
    firebase.database().ref(roomname).push({
        name:username,
        message:msg,
        like:0
    });
    document.getElementById("message_input").value = "";
}

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

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
    }