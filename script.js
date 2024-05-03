const romanNumerals = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
];

function decimalToRoman(num) {
    let result = '';
    // Iterate through the romanNumerals array
    for (let i = 0; i < romanNumerals.length; i++) {
        const [roman, value] = romanNumerals[i];
        // Check how many times the current value fits into the given number
        while (num >= value) {
            result += roman; // Append the corresponding Roman numeral
            num -= value;    // Subtract the value from the given number
        }
    }
    return result;
}


// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
