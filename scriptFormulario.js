var label1 = document.getElementById('label1');
var label2 = document.getElementById('label2');
var label3 = document.getElementById('label3');
var label4 = document.getElementById('label4');

var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');


// var verificacionImagen = document.querySelectorAll(".imagen");
var boton = document.getElementById('botonEnviar');

input1.addEventListener('focus', (e) => {
  if(input1.value === "") {
    label1.classList.toggle("inputSeleccionado");
    formularioCompleto();
    //input1.style.width = "98%";
  }
});

input1.addEventListener('blur', (e) => {
  if(input1.value === "") {
    label1.classList.toggle("inputSeleccionado");
    //input1.style.width = "107.8%";
  }

  if(input1.value.length > 0) {
    input1.classList.add("inputValido");
    input1.classList.remove("inputInvalido");
  }

  if(input1.value.length === 0) {
    input1.classList.add("inputValido");
    input1.classList.add("inputInvalido");
  }
});

input2.addEventListener('focus', (e) => {
  if(input2.value === "") {
    label2.classList.toggle("inputSeleccionado");
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
  }

  if(input2.value.length === 0) {
    input2.classList.remove("inputValido");
    input2.classList.add("inputInvalido");
  }
});

input3.addEventListener('focus', (e) => {
  if(input3.value === "") {
    label3.classList.toggle("inputSeleccionado");
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
  }

  if(input3.value.length === 0) {
    input3.classList.toggle("inputValido");
    input3.classList.add("inputInvalido");
  }
});

input4.addEventListener('focus', (e) => {
  if(input4.value === "") {
    label4.classList.toggle("inputSeleccionado");
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
  }

  if(input4.value.length === 0) {
    input4.classList.toggle("inputValido");
    input4.classList.add("inputInvalido");
  }
});
