/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0;
    let findVowel= str.toLowerCase().split('');

    for (const vowel in findVowel){
      if (['a','e','i','o','u'].includes(findVowel[vowel])){
        count+=1;
      }  
    }  

    return count;
}

module.exports = countVowels;