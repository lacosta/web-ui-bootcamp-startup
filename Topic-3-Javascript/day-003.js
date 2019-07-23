let button = document.querySelector('button');
const week = 
['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
button.onclick = function getDayAfter(){
  day = document.getElementById('userWriteDay').value;
  n = document.getElementById('userWriteN').value;
  if(typeof n === 'number'){
    document.getElementById('salida').innerText = `The ${typeof n} isn\'t valid`;
  } else {
    var position = week.indexOf(day);
    var resp = (n % 7) + position;
    return document.getElementById('salida').innerText = (week[resp]);
  }
} 