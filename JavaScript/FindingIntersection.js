/**
 * An array of two arrays, containing comma separated values in ascending order
 * Only values existing in both arrays should be returned
 */

function intersectingValues(strArr){
    var firstArray = strArr[0].split(',').map(x => +x);
    var secondArray = strArr[1].split(',').map(x => +x);
    var outputArray = [];

    for(var i = 0; i < firstArray.length; i++){
        for(var j = 0; j < secondArray.length; j++){
            firstArray[i] == secondArray[j] ? outputArray.push(firstArray[i]) : null;
        }
    }

    outputArray.sort(function(a, b) {
        return a - b;
    });
    outputArray = outputArray.join();
    console.log(outputArray);
}

var testArray = [ "1,2,3", "2,3,5" ]

intersectingValues(testArray) // should return [ 2, 3 ]