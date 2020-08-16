/* 
    DNA is made of four symbols: A, T, G, C.
        - A and T complement each other
        - C and G complement each other

    create a function that gets a string as input, reverses it, turns A into T, G into G and vice-versa
*/

function dnaComplements(string){
    var arrayedString = string.split('');
    var tempArray = [];
    var outputString = '';

    for(var i = arrayedString.length; i >= 0; i--){
        tempArray.push(arrayedString[i])
    }

    for(var j = 0; j < tempArray.length; j++){
        tempArray[j] == "A" ? outputString += "T" : null;
        tempArray[j] == "T" ? outputString += "A" : null;
        tempArray[j] == "G" ? outputString += "C" : null;
        tempArray[j] == "C" ? outputString += "G" : null;
    }

    console.log(outputString)
}

dnaString = 'CTCAG';
dnaComplements(dnaString) // should return CTGAC