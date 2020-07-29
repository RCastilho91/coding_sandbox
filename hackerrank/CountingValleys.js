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

// probably a pretty similar solutioon to SockMerchant.
// every time the quantity of Us equals that of Ds, a valley has been transposed.

function countingValleys(n, s) {

    // every D will indicate the sea is 1 step upwards, while every U will indicate the opposite
    var stepsToSeaLevel = 0;

    // will be set true once stepsToSeaLevel becomes positive
    var currentlyInValley = false;

    // will increase once stepsTaken is greater than 3 
    var valleysTransposed = 0;

}