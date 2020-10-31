def aVeryBigSum(ar):
    totalSum = 0

    for value in ar:
        totalSum += value
    
    return totalSum

testArray = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
aVeryBigSum(testArray)