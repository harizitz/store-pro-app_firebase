var firebaseConfig = {
  apiKey: "AIzaSyAY3Fe0J21Fm9E-68HaZp19Qe4iblXkgPs",
  authDomain: "storepro-20665.firebaseapp.com",
  databaseURL: "https://storepro-20665.firebaseio.com",
  projectId: "storepro-20665",
  storageBucket: "storepro-20665.appspot.com",
  messagingSenderId: "602625970099",
  appId: "1:602625970099:web:3f8df75ee2d2e873fe45c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function googleSignin() {
    var provider = new firebase.auth.GoogleAuthProvider();
     firebase.auth().signInWithPopup(provider).then(function(result) {
      window.location.replace("optionpage.html");
     }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
     });
  }
  function adddelete(){
    window.location.replace("add.html");
  }
  function view(){
    window.location.replace("display.html");
  }
  var database=firebase.database();
  function add()
  {
    var rack;
    var column=document.getElementById("col").value;
    var row=document.getElementById("row").value;
    if(document.getElementById("rack1").value=="on")
    {
        rack='A';
    }
    if(document.getElementById("rack2").value=="on")
    {
      rack='B';
    }
    var item=document.getElementById("item").value;
    var pp=document.getElementById("price").value;
    if((column!="") && (row!="") && (rack!="") && (item!="") && (pp!=""))
    {
    var ref=database.ref('storepro/'+item).set({
      Column : column,
      Row : row,
      Rack : rack,
      Price : pp
     });
         alert("Thank you");
         window.location.replace("display.html");
  }}
  function search(){
          var itemvalue=document.getElementById("itemval").value;
          var f=0;    
          
         database.ref('storepro/'+itemvalue).once('value').then(function (snapshort){       
          var i=snapshort.val().Column;
          var j=snapshort.val().Row;
          var c=snapshort.val().Rack;
          var pp=snapshort.val().Price;
          document.getElementById(i+j+c).style.backgroundColor="red";
          document.getElementById("price").innerHTML="Price = "+pp;
          f=1;
          
       }
     );
     if(f==0)
     {
       
       document.getElementById("price").innerHTML="No Stock avaliable ";
     }
    
}
