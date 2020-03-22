module.exports = function toReadable (number) {
    let arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
        "nineteen"];
    let arr2 = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    function lessThanTwenty () {
        for (let n = 0; n <= arr1.length; n++) {
            if (n === number) {
                return arr1[n];
            }
        }
    }
    function lessThanHundred () {
        if (number >= 100) {number = number - Math.trunc(number/100)*100;}
        if (number < 20) {
            return lessThanTwenty (number);
        }
        for (let j = 2; j <= 9; j++) {
            if (j === Math.trunc(number / 10) && number % 10 === 0) {
                return arr2[j - 2];
            }
            if (j === Math.trunc(number / 10)) {
                for (let i = j * 10; i <= j * 10 + 9; i++) {
                    if (i === number) {
                        return arr2[j - 2] + " " + arr1[number - j * 10];
                    }
                }
            }
        }
    }
    if (number < 20) {
        return lessThanTwenty (number);
    }
    if (number < 100) {
        return lessThanHundred (number);
    }
    if (number >= 100) {
        for (let k = 1; k <= 9; k++) {
            if (k === Math.trunc(number/100) && number % 100 === 0) {
                return arr1[k] + " " + "hundred";
            }
            if (k === Math.trunc(number/100)) {
                return arr1[k] + " " + "hundred" + " " + lessThanHundred (number);
            }
        }
    }
};

