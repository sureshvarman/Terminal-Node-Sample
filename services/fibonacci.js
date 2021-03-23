/**
 * Function to check the number is integer or not
 * @param {Number} number 
 * @returns {Boolean}
 */
const isInt = function(number) {
    return number % 1 === 0;
 }

/**
 * Function takes the number and calculates fibonnaci series
 * and sends as array
 * @param {Number} number 
 * @returns {Array<Number>}
 */
const getFibonacci = function(number) {
    if (number === null || typeof number === undefined 
        || isNaN(number) || !isInt(number) || number < 0) {
        throw new TypeError("Expected positive Integer")
    }
    const result = [];
    let n1 = 0, n2 = 1, next;
    for (let i = 1; i <= number; i++) {
        result.push(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }

    return result;
}

module.exports = getFibonacci;