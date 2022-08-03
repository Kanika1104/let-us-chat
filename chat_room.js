var firebaseConfig = {
    apiKey: "AIzaSyD5D47fXoWKhkVvPlW9HWMz3jH-FcgRvbg",
    authDomain: "kwitter-1b59f.firebaseapp.com",
    databaseURL: "https://kwitter-1b59f-default-rtdb.firebaseio.com",
    projectId: "kwitter-1b59f",
    storageBucket: "kwitter-1b59f.appspot.com",
    messagingSenderId: "573747663179",
    appId: "1:573747663179:web:a5f3afb5ded90dc41098ce",
    measurementId: "G-MK5T9GEJQB"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = " Welcome "  + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "<div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location  = "chat_room.html";
}

function redirectToRoomName (name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}