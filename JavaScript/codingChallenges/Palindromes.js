/** A palindrome is a word, number, phrase, or another sequence of characters which
reads the same backward as forward, such as madam, racecar, or the number

10801

What is the sum of all numeric palindromes that are less than 10,000?
*/

function createPalindrome(input, b, isOdd) {
  let n = input;
  let palin = input;

  if (isOdd) {
    n = Math.floor(n / b);
  }

  while (n > 0) {
    palin = palin * b + (n % b);
    n = Math.floor(n / b);
  }
  return palin;
}

function generateNumbericPalindromes(n) {
  let number;
  let output = [];

  for (let j = 0; j < 2; j++) {

    let i = 1;
    while ((number = createPalindrome(i, 10, j % 2)) < n) {
      output.push(number);
      i++;
    }
  }
  return output;
}

console.log(
  generateNumbericPalindromes(10000).reduce((acc, next) => acc + next, 0)
);