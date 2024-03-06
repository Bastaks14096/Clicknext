const TestString = require('./modules/MytestModule')

// no. 1
console.log('---------------- NO1. ----------------')
console.log(TestString.findPairs([1 ,2, 3, 4, 5], 5))

// no. 2
console.log('---------------- NO2. ----------------')
console.log(TestString.compareStr('Mary', 'Army'))

// no. 3
console.log('---------------- NO3. ----------------')
console.log(TestString.formatDateRange([1, 4, 6, 9, 10, 14, 16, 17]))

// no. 4
console.log('---------------- NO4. ----------------')
TestString.printInvertedPyramid(5)

// no. 5
console.log('---------------- NO5. ----------------')
TestString.printNumberTriangle(4)

// no. 6
console.log('---------------- NO6. ----------------')
console.log(TestString.sortDescending([ 1, 2, 9, 4, 5, 8, 7, 6, 3, 10]))

// no. 7
console.log('---------------- NO7. ----------------')
console.log(TestString.toHHMMSS(90))

// no. 8
console.log('---------------- NO8. ----------------')
console.log(TestString.calculateChange(32))

// no. 9
console.log('---------------- NO9. ----------------')
console.log(TestString.reverseEachWord('Welcome to clicknext'))

// no. 10
console.log('---------------- NO10. ----------------')
TestString.printPyramid(5)

// no. 11
console.log('---------------- NO11. ----------------')
console.log(TestString.sortAscendingOrder([ 1, 2, 9, 4, 5, 8, 7, 6, 3, 10]))