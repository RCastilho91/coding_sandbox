/** based on https://edabit.com/challenge/GLbuMfTtDWwDv2F73
* 
* Create a function which returns the number of true values there are in an array.
* Examples
*   countTrue([true, false, false, true, false]) ➞ 2
*   countTrue([false, false, false, false]) ➞ 0
*   countTrue([]) ➞ 0
*/

function countTrue(arr) {

    var trueCounter = 0;

    for(var i = 0; i < arr.length; i++){
        if(arr[ i ] === true){
            trueCounter += 1;
        }
    }

    console.log(trueCounter)

}

countTrue([false,true,false,true])