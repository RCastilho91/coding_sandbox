/**
 * The Fibonacci sequence begins like this:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34
(each number is the sum of the previous two)

What is the sum of all odd numbers in the Fibonacci sequence that are less
than 10,000?
*/

var fibonacciSequence = [0, 1];
var lastIndex = 0;
var prevLastIndex = 0;
var limitValue = 10000;
var newLastValue = 0;

function createOddValues(fibonacci, limit) {
  while (newLastValue < limit) {
    lastIndex = fibonacci.length - 1;
    prevLastIndex = lastIndex - 1;

    newLastValue =
      parseInt(fibonacci[lastIndex]) + parseInt(fibonacci[prevLastIndex]);

    fibonacci.push(newLastValue);
  }

  sumOddValues(fibonacci);
}

function sumOddValues(fibonacci){
    let sum = 0

    for(let i = 0; i < fibonacci.length; i++){
        fibonacci[i] % 2 > 0 ? sum += fibonacci[i] : null
    }

    console.log(sum);
}

createOddValues(fibonacciSequence, limitValue);
