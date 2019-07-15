const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function getDayAfter(day,n){
  if(typeof n !== 'number'){
    console.log(`The ${typeof n} isn\'t valid`);
  } else {
    var position = week.indexOf(day);
    var resp = (n % 7) + position;
    return console.log(week[resp]);
  }
}
getDayAfter('Monday',4);