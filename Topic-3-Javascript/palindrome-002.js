let button = document.querySelector('button');
button.onclick = function checkPalindrome2(){
  word2 = document.getElementById('userWrite').value;
  var userWrite = parseInt(word2);
  if(!Number.isNaN(userWrite)){
    document.getElementById('salida').innerText = `The type: ${typeof userWrite} isn\'t valid`;
  } else {
    word2 = word2.replace(/\W/g, '');
    word2 = word2.toLowerCase();
    var reversedWord = word2.split('').reverse().join('');
    document.getElementById('salida').innerText = word2 == reversedWord ? 'This is a palindrome' : 'This isn\'t a palindrome';
  }
}