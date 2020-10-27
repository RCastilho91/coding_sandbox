/**
 * Epigram on Failure
Given the following quote by Alan Perlis

“Dealing with failure is easy: Work hard to improve. Success is also easy to
handle: You’ve solved the wrong problem. Work hard to improve.”

Considering only the alphabetical characters, consonants having the value of
their ASCII codes, and vowels having the inverse value of their ASCII codes,
what is the sum of the sentence?

Example:
Using the phrase “why and how”, w=119, h=104, y=121, d=100, n=110. 
A and O are vowels, so a=-97 o=-111. The sum of ‘why and how’ = 569.
*/

var targetString =
  "Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You’ve solved the wrong problem. Work hard to improve.";
targetString = targetString.replace(/\W/g, "");
var targetArray = targetString.split("");

function asciiTransform(array) {
  var outputArray = [];
  var output = 0;
  var vowelList = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < array.length; i++) {
    vowelList.includes(array[i])
      ? outputArray.push(array[i].charCodeAt(0))
      : outputArray.push(array[i].charCodeAt(0) * -1);
  }

  output = outputArray.reduce((a, b) => a + b, 0);
  console.log(output * -1)
  return output
}

asciiTransform(targetArray);
