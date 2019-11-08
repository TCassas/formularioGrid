var label1 = document.getElementById('label1');
var label2 = document.getElementById('label2');
var label3 = document.getElementById('label3');
var label4 = document.getElementById('label4');

var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');

input1.addEventListener('focus', (e) => {
  if(input1.value === "") {
    label1.classList.toggle("inputSeleccionado");
  }
});

input1.addEventListener('blur', (e) => {
  if(input1.value === "") {
    label1.classList.toggle("inputSeleccionado");
  }
});

input2.addEventListener('focus', (e) => {
  if(input2.value === "") {
    label2.classList.toggle("inputSeleccionado");
  }
});

input2.addEventListener('blur', (e) => {
  if(input2.value === "") {
    label2.classList.toggle("inputSeleccionado");
  }
});

input3.addEventListener('focus', (e) => {
  if(input3.value === "") {
    label3.classList.toggle("inputSeleccionado");
  }
});

input3.addEventListener('blur', (e) => {
  if(input3.value === "") {
    label3.classList.toggle("inputSeleccionado");
  }
});

input4.addEventListener('focus', (e) => {
  if(input4.value === "") {
    label4.classList.toggle("inputSeleccionado");
  }
});

input4.addEventListener('blur', (e) => {
  if(input4.value === "") {
    label4.classList.toggle("inputSeleccionado");
  }
});
