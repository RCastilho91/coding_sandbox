/**
 * John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
 * Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
 * Complete the sockMerchant function in the editor below. 
 * It must return an integer representing the number of matching pairs of socks that are available.
 * sockMerchant has the following parameter(s):
    n: the number of socks in the pile
    ar: the colors of each sock
*/

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const uniqueColors = Array.from(new Set(ar));
    var currentCounter = 0;

    for(var i = 0; i < n; i++) {
        for(var j = 0; j < ar.length; j++) {
            if( uniqueColors[i] == ar[j] ){
                currentCounter += 1;
            }
        }

        if( currentCounter % 2 > 0 ){
            currentCounter -= 1;
        }
    }

    console.log( Math.floor(currentCounter / 2) );
}

var sockArray = [1, 1, 2, 2, 3, 3, 1, 1, 4, 4, 7, 9, 8, 8, 10, 15]; // has 6 pairs of colors.
var sockLen = sockArray.length;

sockMerchant(sockLen, sockArray);