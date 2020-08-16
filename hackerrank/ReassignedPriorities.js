/* 
    Create a function that will turn values into the minimum possible while maintaining their order
*/

function reassignedPriorities(priorities){
    var outputList = [];
    const simplifiedList = Array.from(new Set(priorities));
    console.log(`Simplified array: ${ simplifiedList }`);
    simplifiedList.sort(function(a, b){return a-b});
    console.log(`Simplified array: ${ simplifiedList }`);

    for(var i = 0; i < priorities.length; i++){
        for(var j = 0; j < simplifiedList.length; j++){
            priorities[i] == simplifiedList[j] ? outputList.push(j + 1) : null;
        } 
    }

    console.log(outputList)
}

testList = [1, 4, 8, 4];
testList2 = [2, 9, 3, 2, 3];
testList3 = [18, 60, 92, 35, 5, 97, 65];
reassignedPriorities(testList); // should return [1, 2, 3, 2]
reassignedPriorities(testList2); // should return [1, 3, 2, 1, 2]
reassignedPriorities(testList3); // should return [2, 4, 6, 3, 1, 7, 5]