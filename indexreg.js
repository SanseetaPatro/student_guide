var username = document.getElementById("username");
var password = document.getElementById("password");
var submitBtn = document.getElementById("submitBtn");
var confirmpassword = document.getElementById("confirmpassword");
alert("ok");
 function submitClick(){
   
   var firebaseRef = firebase.database().ref();

   var messageText = username.value;

   firebaseRef.child("Text").set(messageText);

     
    
    
    
}
