let button = document.querySelector('button');
button.onclick = function checkPalindrome(){
  word = document.getElementById('userWrite').value;
  var userWrite = parseInt(word);
  if(!Number.isNaN(userWrite)){
    alert(`The type: ${typeof word} isn\'t valid`);
  } else {
    word = word.toLowerCase();
    var isPalindrome = word.split('').reverse().join('');
    word == isPalindrome ? alert('This is a palindrome') : alert('This isn\'t a palindrome');
  }
}