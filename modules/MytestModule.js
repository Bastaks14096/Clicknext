// No. 1
function findPairs(arr, sum) {
    var pairs = [];
    var pairsCount = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                pairs[pairsCount] = [arr[i], arr[j]];
                pairsCount++;

                // Move the found element to the end and reduce array length
                var temp = arr[j];
                for (var k = j; k < arr.length - 1; k++) {
                    arr[k] = arr[k + 1];
                }
                arr[arr.length - 1] = temp;
                arr.length--;
            }
        }
    }

    return pairs; // [ [ 1, 4 ], [ 2, 3 ] ]
}

// No. 2
function compareStr(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let temp = "";
    let temp2 = "";
    let all_freq = {};
    let all_freq2 = {};

    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < upper.length; j++) {
            if (str1[i] === upper[j] || str1[i] === lower[j]) {
                temp += lower[j];
            }

            if (str2[i] === upper[j] || str2[i] === lower[j]) {
                temp2 += lower[j];
            }
        }
    }

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] in all_freq) {
            all_freq[temp[i]] += 1;
        } else {
            all_freq[temp[i]] = 1;
        }

        if (temp2[i] in all_freq2) {
            all_freq2[temp2[i]] += 1;
        } else {
            all_freq2[temp2[i]] = 1;
        }
    }

    for (let prop in all_freq) {
        if (all_freq[prop] === all_freq2[prop]) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}


// No. 3
function formatDateRange(dates) {
    if (dates.length === 0) return "";

    let result = "";
    let start = dates[0];
    let end = dates[0];

    for (let i = 1; i < dates.length; i++) {
        if (dates[i] === end + 1) {
            end = dates[i];
        } else {
            result += start === end ? start + ", " : start + "-" + end + ", ";
            start = end = dates[i];
        }
    }
    // Handling the final pair
    result += start === end ? start : start + "-" + end;

    return result; // 1, 4, 6, 9-10, 14, 16-17
}

// No. 4
function printInvertedPyramid(height) {
    for (let i = height; i >= 1; i--) {
        let spaces = "";
        for (let j = 0; j < height - i; j++) {
            spaces += " ";
        }

        let stars = "";
        for (let k = 0; k < 2 * i - 1; k++) {
            stars += "*";
        }


        console.log(spaces + stars);
    }
}

// No. 5
function printNumberTriangle(input) {
    let currentNumber = 1;

    for (let row = 1; row <= input; row++) {
        let spaces = "";
        for (let s = 0; s < input - row; s++) {
            spaces += " ";
        }
        let line = spaces;

        for (let col = 1; col <= row; col++) {
            line += currentNumber;
            if (col < row) {
                line += " "; // Add a space after each number except the last one
            }
            currentNumber = currentNumber === 9 ? 0 : currentNumber + 1;
        }

        console.log(line)
    }
}

// No. 6
function sortDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Assume the max element is the i-th element
        let maxIndex = i;

        // Check the rest of the array to see if there's something larger
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        // If the max isn't the current i-th element, swap them
        if (maxIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }

    return arr;
}

// No. 7
function toHHMMSS(seconds) {
    var hours = 0,
        minutes = 0;

    // Calculating hours
    while (seconds >= 3600) {
        hours++;
        seconds -= 3600;
    }

    // Calculating minutes
    while (seconds >= 60) {
        minutes++;
        seconds -= 60;
    }

    // Formatting the output to "hh:mm:ss"
    var paddedHours = hours < 10 ? "0" + hours : "" + hours;
    var paddedMinutes = minutes < 10 ? "0" + minutes : "" + minutes;
    var paddedSeconds = seconds < 10 ? "0" + seconds : "" + seconds;

    return paddedHours + ":" + paddedMinutes + ":" + paddedSeconds;
}

// No. 8
function calculateChange(amount) {
    let change = 1000 - amount;
    let changeDenominations = {
        "500 bills": 0,
        "100 bills": 0,
        "50 bills": 0,
        "10 coins": 0,
        "5 coins": 0,
        "1 coins": 0,
    };

    if (change >= 500) {
        changeDenominations["500 bills"] = 1;
        change -= 500;
    }
    changeDenominations["100 bills"] = Math.floor(change / 100);
    change -= changeDenominations["100 bills"] * 100;
    changeDenominations["50 bills"] = Math.floor(change / 50);
    change -= changeDenominations["50 bills"] * 50;
    changeDenominations["10 coins"] = Math.floor(change / 10);
    change -= changeDenominations["10 coins"] * 10;
    changeDenominations["5 coins"] = Math.floor(change / 5);
    change -= changeDenominations["5 coins"] * 5;
    changeDenominations["1 coins"] = change;

    let result = `จำนวนเงินทอน ${1000 - amount} บาท\n`;
    for (let denomination in changeDenominations) {
        if (changeDenominations[denomination] > 0) {
            result += `${denomination}: ${changeDenominations[denomination]}\n`;
        }
    }

    return result;
}

// No. 9
function reverseEachWord(str) {
    let reversedStr = "";
    let word = "";

    for (let i = 0; i < str.length; i++) {
        // If the character is not a space, add it to the word
        if (str[i] !== " ") {
            word = str[i] + word;
        } else {
            // If it's a space, then the word is complete and we add it to the reversedStr
            reversedStr += word + " ";
            word = "";
        }
    }

    // Add the last word to the reversedStr
    reversedStr += word;

    return reversedStr;
}

// No. 10
function printPyramid(height) {
    for (let i = 1; i <= height; i++) {
        let spaces = "";
        for (let j = 0; j < height - i; j++) {
            spaces += " ";
        }

        let stars = "";
        for (let k = 0; k < 2 * i - 1; k++) {
            stars += "*";
        }

        console.log(spaces + stars);
    }
}

// No. 11
function sortAscendingOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Assume the max element is the i-th element
        let maxIndex = i;

        // Check the rest of the array to see if there's something larger
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[maxIndex]) {
                maxIndex = j;
            }
        }

        // If the max isn't the current i-th element, swap them
        if (maxIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }

    return arr;
}

module.exports = {
    findPairs : findPairs,
    compareStr: compareStr,
    formatDateRange: formatDateRange,
    printInvertedPyramid: printInvertedPyramid,
    printNumberTriangle: printNumberTriangle,
    sortDescending: sortDescending,
    toHHMMSS: toHHMMSS,
    calculateChange: calculateChange,
    reverseEachWord: reverseEachWord,
    printPyramid : printPyramid,
    sortAscendingOrder: sortAscendingOrder
}