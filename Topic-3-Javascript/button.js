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
  let xhr;
  if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
  }
  else xhr = new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('GET', 'http://api.icndb.com/jokes/random');
  xhr.addEventListener('load', (data) => {
    const apiInfo = JSON.parse(data.target.response);
    chuckP = apiInfo.textContent = `${apiInfo.value.joke}`;
    document.getElementById('chuckJoke').innerHTML = (chuckP);
  })
  xhr.send();
}) 

const button4 = document.getElementById('functionChuck2');
const parrafo = document.getElementById('chuckJoke2');
button4.addEventListener('click', () => {
  fetchData('http://api.icndb.com/jokes/random').then(data => {
    chuckJoke2.innerHTML = data.value.joke;
  }).catch(err => {
    document.getElementById('idSection').style.backgroundColor = "red";
  })
})

function fetchData(url) {
  return fetch(url).then(x => x.json());
}

const button5 = document.getElementById('listButton');
button5.addEventListener('click', () => {
  fetch('https://api.github.com/search/repositories?q=JavaScript')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
      const list = document.getElementById('list');
      for (const repoInfo of res.items){
        const listItem = document.createElement('LI');
        listItem.textContent = `${repoInfo.full_name}`;
        list.appendChild(listItem);
      }
    })
})

const searchBook = document.getElementById('searchForm');
  searchBook.addEventListener('keyup',function(x){
    const term = x.target.value.toLowerCase();
    const repos = list.getElementsByTagName('li');
    Array.from(repos).forEach(function(repo){
      const title = repo.textContent;
      title.toLowerCase().indexOf(term) != -1 
      ? repo.style.display = 'block'
      : repo.style.display = 'none'
  })
})
