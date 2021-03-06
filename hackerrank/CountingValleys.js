/** Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. 
 * During his last hike he took exactly N steps. For every step he took, he noted if it was an uphill, U, 
 * or a downhill, D step. Gary's hikes start and end at sea level and each step up or down represents a 1 
 * unit change in altitude. We define the following terms:

 * A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level 
 and ending with a step down to sea level.
* A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level 
and ending with a step up to sea level.

* Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys 
he walked through.

For example, if Gary's path is [DDUUUUDD], he first enters a valley 2 units deep. 
Then he climbs out an up onto a mountain 2 units high. Finally, he returns to sea level and ends his hike.

* Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

* countingValleys has the following parameter(s):

n: the number of steps Gary takes
s: a string describing his path
*/

// A counter will be made for every D and U. Every time they equal each other and their number
// is higher than zero, a valley will be assumed to have been transposed.

function countingValleys(n, s) {

    var arrayedS = s.split('');

    var valleysTransposed = 0;
    var groundLevel = 0;

    for (var i = 0; i < n; i++){
        if(groundLevel == 1){
            if(arrayedS[i] == "U"){
                groundLevel -= 1;
                valleysTransposed += 1;
            }
        } else {
            arrayedS[i] == "U" ? groundLevel -= 1 : groundLevel += 1;
        }
    }

    return valleysTransposed

}

countingValleys(8,'DDUUUUDD')