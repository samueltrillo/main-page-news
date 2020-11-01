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


function veriName(){
   a = document.getElementById("completeName").value;
   if (a.indexOf(" ") === -1 || a.length < 7) {
      alert("Ingrese nombre completo con al menos 6 caracteres y un espacio")
   } else {
 
   }
  
}
function veriEmail() {
   a = document.getElementById("email").value;
   if (a.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) === -1) {
      alert("Ingrese una dirección de email correcta");
   }
}
function veriPass() {
   a = document.getElementById("password").value;
   if (/[a-zA-Z]/.test(a) === false || /\s/.test(a) === true || /\d/.test(a) === false || a.length < 8) {
      alert("ingrese contraseña con letras y numeros");
   }

}
function veriPassAgain() {
   a = document.getElementById("password").value;
   b = document.getElementById("passwordAgain").value;
   if (a !== b) {
      alert ("las contraseñas no coinciden");
   }

}
function veriAge() {
   a = document.getElementById("age").value;
   if (a < 18 || Number.isInteger(Number(a)) === false) {
      alert("numero no entero");
   }

}
function veriPhone() {
   a = document.getElementById("phoneNumber").value;
   if ( a.length < 7 || /[a-zA-Z]/.test(a) === true) {
   alert("telefono no valido");

   }
}
function veriAdress() {
   a = document.getElementById("adress").value;
   if ( a.length < 7 || /\s/.test(a) === false || /\d/.test(a) === false || /[a-zA-Z]/.test(a) === false ) {
      alert ("asd");
   }
}
function veriCity() {
   a = document.getElementById("city").value;
   if (a.length < 3) {
      alert ("ciudad con al menos 3 caracteres");

   }

}
function veriZipCode(){
   a = document.getElementById("zipCode").value;
   if (a.length < 3) {
      alert ("ciudad con al menos 3 caracteres");

   }

}
function veriId() {
   a = document.getElementById("idCard").value;
   if (a.length < 7 || a.length > 8) {
      alert("dni de 7 u 8 digitos");

   }


}


//teElement("div"); //Element div created
//var text = document.createTextNode("hooolaaa"); //Text created
//adv.appendChild(text); //Text inside element p
//var container = document.querySelector(".box1");
//var ufff = document.querySelector(".completeName");
//ufff.insertAdjacentElement("afterend",adv);

