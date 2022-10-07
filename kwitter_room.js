


//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyC77Nc8yBLtIdwkAivAzT0T9DbszMAMHFU",
   authDomain: "kkproject94.firebaseapp.com",
   projectId: "kkproject94",
   storageBucket: "kkproject94.appspot.com",
   messagingSenderId: "1044728709364",
   appId: "1:1044728709364:web:c151900b2a9b7206e79ea1"
 };
    // Initialize Firebase
   

function addRoom() {
      room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
            purpose : "Adding room name"
      });

      localStorage.setItem("roomname",room_name);

      windows.location = "kwitter_message_page.html";
}

firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("roomname");
user_name = localStorage.getItem("username");

function Send()
{ 
     msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            })
           document.getElementById("msg").value = "";
}

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      firebase_message_id = childKey;
      message_data = childData;
    //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
    
     row = name_with_tag + message_with_tag +like_button + span_with_tag;       
     document.getElementById("output").innerHTML += row;
    
      });});}
getData();

function updateLike(message_id)
{
 console.log("clicked on like button -" + message_id);
 button_id = message_id;
 likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);
}

function logout()  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }
      

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
     window.location = "kwitter.html";
}


firebase.database().ref(room_name).child(message_id).update({
  like : updated_likes
});

