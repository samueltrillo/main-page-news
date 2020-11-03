//Elements variable 
var completeName = document.getElementById("completeName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var passwordAgain = document.getElementById("passwordAgain");
var age = document.getElementById("age");
var phoneNumber = document.getElementById("phoneNumber");
var adress = document.getElementById("adress");
var city = document.getElementById("city");
var zipCode = document.getElementById("zipCode");
var idCard = document.getElementById("idCard");
var sendButton = document.getElementById("button");
var closeButton = document.querySelector(".close");

//Keydown function for dynamic title
completeName.addEventListener("keyup", dynamicHello);
function dynamicHello() {
   var helloTitle = document.getElementById("completeName").value;
   document.getElementById("dynamic-hello").innerHTML = "<h2> Hola "+ helloTitle +"</h2>";
}

//Blur event
completeName.addEventListener("blur",veriName);
email.addEventListener("blur",veriEmail);
password.addEventListener("blur",veriPass);
passwordAgain.addEventListener("blur",veriPassAgain);
age.addEventListener("blur",veriAge);
phoneNumber.addEventListener("blur",veriPhone);
adress.addEventListener("blur",veriAdress);
city.addEventListener("blur",veriCity);
zipCode.addEventListener("blur",veriZipCode);
idCard.addEventListener("blur",veriId);

//Onfocus event
completeName.addEventListener("focus",adv);
email.addEventListener("focus",adv);
password.addEventListener("focus",adv);
passwordAgain.addEventListener("focus",adv);
age.addEventListener("focus",adv);
phoneNumber.addEventListener("focus",adv);
adress.addEventListener("focus",adv);
city.addEventListener("focus",adv);
zipCode.addEventListener("focus",adv);
idCard.addEventListener("focus",adv);

//Onclick function
sendButton.onclick = function() {
      document.querySelector(".modal").style.display ="block";
      document.getElementById("id1").innerHTML = "Nombre completo: " + veriName();
      document.getElementById("id2").innerHTML = "Email: " + veriEmail();
      document.getElementById("id3").innerHTML = "Contraseña: " + veriPass();
      document.getElementById("id4").innerHTML = "Contraseña reescrita: " + veriPassAgain();
      document.getElementById("id5").innerHTML = "Edad: "+ veriAge();
      document.getElementById("id6").innerHTML = "Teléfono: " + veriPhone();
      document.getElementById("id7").innerHTML = "Dirección: " + veriAdress();
      document.getElementById("id8").innerHTML = "Ciudad: " + veriCity();
      document.getElementById("id9").innerHTML = "Código postal: " + veriZipCode();
      document.getElementById("id10").innerHTML = "DNI: " + veriId();
}
closeButton.onclick = function() {
   document.querySelector(".modal").style.display ="none";
}
window.onclick = function(event) {
   if (event.target == document.querySelector(".modal")) {
      document.querySelector(".modal").style.display = "none";
   }
 }

 //Validation functions
function veriName(){
   const a = document.getElementById("completeName").value;
   if (a.indexOf(" ") === -1 || a.length < 7) {
      document.querySelector(".advName").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriEmail() {
   const a = document.getElementById("email").value;
   if (a.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) === -1) {
      document.querySelector(".advEmail").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriPass() {
   const a = document.getElementById("password").value;
   if (/[a-zA-Z]/.test(a) === false || /\s/.test(a) === true || /\d/.test(a) === false || a.length < 8) {
      document.querySelector(".advPass").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriPassAgain() {
   const a = document.getElementById("password").value;
   const b = document.getElementById("passwordAgain").value;
   if (a !== b) {
      document.querySelector(".advPassAgain").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriAge() {
   const a = document.getElementById("age").value;
   if (a < 18 || Number.isInteger(Number(a)) === false) {
      document.querySelector(".advAge").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriPhone() {
   const a = document.getElementById("phoneNumber").value;
   if ( a.length < 7 || /[a-zA-Z]/.test(a) === true) {
      document.querySelector(".advPhone").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriAdress() {
   const a = document.getElementById("adress").value;
   if ( a.length < 7 || /\s/.test(a) === false || /\d/.test(a) === false || /[a-zA-Z]/.test(a) === false ) {
      document.querySelector(".advAdress").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriCity() {
   const a = document.getElementById("city").value;
   if (a.length < 3) {
      document.querySelector(".advCity").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriZipCode(){
   const a = document.getElementById("zipCode").value;
   if (a.length < 3) {
      document.querySelector(".advZip").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriId() {
   const a = document.getElementById("idCard").value;
   if (a.length < 7 || a.length > 8) {
      document.querySelector(".advIdCard").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function adv(evt){
   const elementClass = evt && evt.target && evt.target.nextElementSibling && evt.target.nextElementSibling.className;
   document.querySelector("." + elementClass).style.display = "none";
}