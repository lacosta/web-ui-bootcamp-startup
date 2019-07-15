function checkPalindrome2(word2){
  if(typeof word2 === 'number'){
    console.log(`The type: ${typeof word2} isn\'t valid`);
  } else {
    word2 = word2.replace(/\W/g, '');
    word2 = word2.toLowerCase();
    var isPalindrome2 = word2.split('').reverse().join('');
    word2 == isPalindrome2 ? console.log('This is a palindrome') : console.log('This isn\'t a palindrome');
  }
}
checkPalindrome2('Eva, can I see bees in a cave?');