/** A palindrome is a word, number, phrase, or another sequence of characters which
reads the same backward as forward, such as madam, racecar, or the number

10801

What is the sum of all numeric palindromes that are less than 10,000?
*/

var palindromeSum = 0;
var limit = 10000;

function sumPalindromeValues(limit) {
  for (let i = 10; i < limit; i++) {
    let stringifier = (i + "").split("");
    let reversed = parseInt(stringifier.reverse().join(""));

    i === reversed ? (palindromeSum += i) : null;
  }

  return palindromeSum
}

sumPalindromeValues(10000)