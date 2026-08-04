const form = document.querySelector("form");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you for contacting Lenovo!");

form.reset();

});