const btn = document.querySelector('button');
btn.onclick = function(){
  alertMessage();
}
function alertMessage(){
  alert('I\'ve been called');
}

const button = document.getElementById('functionButton');
button.onclick = function fadein(){
  let hidden = document.querySelector('section');
  hidden.classList.remove('hidden');
}