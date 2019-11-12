var label1 = document.getElementById('label1');
var label2 = document.getElementById('label2');
var label3 = document.getElementById('label3');
var label4 = document.getElementById('label4');

var input1 = document.getElementById('nombre');
var input2 = document.getElementById('apellido');
var input3 = document.getElementById('email');
var input4 = document.getElementById('contrasenia');

var verificadorTexto = document.getElementsByClassName("cantidadLetras");


// var verificacionImagen = document.querySelectorAll(".imagen");
var boton = document.getElementById('botonEnviar');

input1.addEventListener('focus', (e) => {
  if(input1.value === "") {
    label1.classList.toggle("inputSeleccionado");
    verificadorTexto[0].style.left = "-80px";
    //input1.style.width = "98%";
  }
});

input1.addEventListener('blur', (e) => {
  if(input1.value === "") {
    label1.classList.toggle("inputSeleccionado");
    verificadorTexto[0].style.opacity = "4px solid red";
    //input1.style.width = "107.8%";
  }

  if(input1.value.length > 0) {
    input1.classList.add("inputValido");
    input1.classList.remove("inputInvalido");
    verificadorTexto[0].style.borderLeft = "4px solid hsl(154, 59%, 51%)";
    verificadorTexto[0].style.left = "-80px";
  }

  if(input1.value.length === 0 || input1.value.length > 50) {
    input1.classList.add("inputValido");
    input1.classList.add("inputInvalido");
    verificadorTexto[0].style.borderLeft = "4px solid red";
  }
});

input2.addEventListener('focus', (e) => {
  if(input2.value === "") {
    label2.classList.toggle("inputSeleccionado");
    verificadorTexto[1].style.left = "-80px";
    //input2.style.width = "98%";
  }
});

input2.addEventListener('blur', (e) => {
  if(input2.value === "") {
    label2.classList.toggle("inputSeleccionado");
    //input2.style.width = "107.8%";
  }

  if(input2.value.length > 0) {
    input2.classList.add("inputValido");
    input2.classList.remove("inputInvalido");
    verificadorTexto[1].style.borderLeft = "4px solid hsl(154, 59%, 51%)";
    verificadorTexto[1].style.left = "-80px";
  }

  if(input2.value.length === 0 || input2.value.length > 50) {
    input2.classList.remove("inputValido");
    input2.classList.add("inputInvalido");
    verificadorTexto[1].style.borderLeft = "4px solid red";
  }
});

input3.addEventListener('focus', (e) => {
  if(input3.value === "") {
    label3.classList.toggle("inputSeleccionado");
    verificadorTexto[2].style.left = "-80px";
    //input3.style.width = "98%";
  }
});

input3.addEventListener('blur', (e) => {
  if(input3.value === "") {
    label3.classList.toggle("inputSeleccionado");
    //input3.style.width = "107.8%";
  }

  if(input3.value.length > 0) {
    input3.classList.add("inputValido");
    input3.classList.remove("inputInvalido");
    verificadorTexto[2].style.borderLeft = "4px solid hsl(154, 59%, 51%)";
    verificadorTexto[2].style.left = "-80px";
  }

  if(input3.value.length === 0 || input3.value.length > 50) {
    input3.classList.toggle("inputValido");
    input3.classList.add("inputInvalido");
    verificadorTexto[2].style.borderLeft = "4px solid red";
  }
});

input4.addEventListener('focus', (e) => {
  if(input4.value === "") {
    label4.classList.toggle("inputSeleccionado");
    verificadorTexto[3].style.left = "-80px";
    //input4.style.width = "98%";
  }
});

input4.addEventListener('blur', (e) => {
  if(input4.value === "") {
    label4.classList.toggle("inputSeleccionado");
    //input4.style.width = "107.8%";
  }

  if(input4.value.length > 0) {
    input4.classList.add("inputValido");
    input4.classList.remove("inputInvalido");
    verificadorTexto[3].style.borderLeft = "4px solid hsl(154, 59%, 51%)";
    verificadorTexto[3].style.left = "-80px";
  }

  if(input4.value.length === 0 || input4.value.length > 50) {
    input4.classList.toggle("inputValido");
    input4.classList.add("inputInvalido");
    verificadorTexto[3].style.borderLeft = "4px solid red";
  }
});

boton.addEventListener('submit', (e) => {
  alert("uwu!");
});
