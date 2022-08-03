//YOUR FIREBASE LINKS
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

 user_name = localStorage.getItem("user_name"); 
 room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+"room_name").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);   
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name + ":"+ "</h4>";
message_with_tag = "<h4 clas='message_h4'>"+ message + "</h4>";

like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+" value= "+like+" onclick = 'updateLike(this.id)'>Likes :"+ like +"</button> ";

row = name_with_tag + message_with_tag + like_button;
document.getElementById("output").innerHTML +=row; 

//End code
    } });  }); }
getData();

function send() 
{
msg = document.getElementById("msg").value;
firebase.database().ref("room_name").push({
 name:user_name,
  message:msg,
  like:0
});

document.getElementById("msg").value = "" ;


}
function updateLike(message_id)
  {
    console.log(" clicked on like button -" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    
    firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
    });
  }