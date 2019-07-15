function checkPalindrome(word){
  if(typeof word === 'number'){
    console.log(`The type: ${typeof word} isn\'t valid`);
  } else {
    word = word.toLowerCase();
    var isPalindrome = word.split('').reverse().join('');
    word == isPalindrome ? console.log('This is a palindrome') : console.log('This isn\'t a palindrome');
  }
}
checkPalindrome('RaceCar');