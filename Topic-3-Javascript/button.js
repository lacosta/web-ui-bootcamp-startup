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

const button3 = document.getElementById('functionChuck');
button3.addEventListener('click', () => {
  let xhr 
  if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
  else xhr = new ActiveXObject('Microsoft.XMLHTTP')
  xhr.open('GET', 'http://api.icndb.com/jokes/random')
  xhr.addEventListener('load', (data) => {
    const apiInfo = JSON.parse(data.target.response)
    chuckP = apiInfo.textContent = `${apiInfo.value.joke}`
    document.getElementById('chuckJoke').innerHTML = (chuckP)
  })
  xhr.send()
}) 

const button4 = document.getElementById('functionChuck2')
const parrafo = document.getElementById('chuckJoke2')
button4.addEventListener('click', () => {
  fetchData('http://api.icndb.com/jokes/random').then(data => {
    chuckJoke2.innerHTML = data.value.joke
  }).catch(err => {
    document.getElementById('idSection').style.backgroundColor = "red";
  })
})

function fetchData(url) {
  return fetch(url).then(x => x.json())
}
