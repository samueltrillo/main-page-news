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
//Keydown function for dynamic title
completeName.addEventListener("keydown", dynamicHello);
function dynamicHello() {
   a = document.getElementById("completeName").value;
   document.getElementById("dynamic-hello").innerHTML = "<h2> Hola "+ a +"</h2>";
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
completeName.addEventListener("focus",adv1);
email.addEventListener("focus",adv2);
password.addEventListener("focus",adv3);
passwordAgain.addEventListener("focus",adv4);
age.addEventListener("focus",adv5);
phoneNumber.addEventListener("focus",adv6);
adress.addEventListener("focus",adv7);
city.addEventListener("focus",adv8);
zipCode.addEventListener("focus",adv9);
idCard.addEventListener("focus",adv10);
//Onclick function
sendButton.onclick = function() {
   alert ("Nombre completo " + veriName() +
         " - Email " + veriEmail() +
         " - Contraseña " + veriPass() +
         " - Repetir contraseña " + veriPass() +
         " - Edad " + veriAge() +
         " - Teléfono " + veriPhone() +
         " - Dirección" + veriAdress() +
         " - Ciudad " + veriCity() +
         " - Código Postal " + veriZipCode() +
         " - DNI " +veriId());
  
}

function veriName(){
   a = document.getElementById("completeName").value;
   if (a.indexOf(" ") === -1 || a.length < 7) {
      document.querySelector(".advName").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriEmail() {
   a = document.getElementById("email").value;
   if (a.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) === -1) {
      document.querySelector(".advEmail").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriPass() {
   a = document.getElementById("password").value;
   if (/[a-zA-Z]/.test(a) === false || /\s/.test(a) === true || /\d/.test(a) === false || a.length < 8) {
      document.querySelector(".advPass").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriPassAgain() {
   a = document.getElementById("password").value;
   b = document.getElementById("passwordAgain").value;
   if (a !== b) {
      document.querySelector(".advPassAgain").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriAge() {
   a = document.getElementById("age").value;
   if (a < 18 || Number.isInteger(Number(a)) === false) {
      document.querySelector(".advAge").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriPhone() {
   a = document.getElementById("phoneNumber").value;
   if ( a.length < 7 || /[a-zA-Z]/.test(a) === true) {
      document.querySelector(".advPhone").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriAdress() {
   a = document.getElementById("adress").value;
   if ( a.length < 7 || /\s/.test(a) === false || /\d/.test(a) === false || /[a-zA-Z]/.test(a) === false ) {
      document.querySelector(".advAdress").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriCity() {
   a = document.getElementById("city").value;
   if (a.length < 3) {
      document.querySelector(".advCity").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriZipCode(){
   a = document.getElementById("zipCode").value;
   if (a.length < 3) {
      document.querySelector(".advZip").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function veriId() {
   a = document.getElementById("idCard").value;
   if (a.length < 7 || a.length > 8) {
      document.querySelector(".advIdCard").style.display = "block";
      return ("Error, revisar condiciones del campo");
   } else {
      return a;
   }
}
function adv1(){
   document.querySelector(".advName").style.display = "none";
}
function adv2(){
   document.querySelector(".advEmail").style.display = "none";
}
function adv3(){
   document.querySelector(".advPass").style.display = "none";
}
function adv4(){
   document.querySelector(".advPassAgain").style.display = "none";
}
function adv5(){
   document.querySelector(".advAge").style.display = "none";
}
function adv6(){
   document.querySelector(".advPhone").style.display = "none";
}
function adv7(){
   document.querySelector(".advAdress").style.display = "none";
}
function adv8(){
   document.querySelector(".advCity").style.display = "none";
}
function adv9(){
   document.querySelector(".advZip").style.display = "none";
}
function adv10(){
   document.querySelector(".advIdCard").style.display = "none";
}

//teElement("div"); //Element div created
//var text = document.createTextNode("hooolaaa"); //Text created
//adv.appendChild(text); //Text inside element p
//var container = document.querySelector(".box1");
//var ufff = document.querySelector(".completeName");
//ufff.insertAdjacentElement("afterend",adv);