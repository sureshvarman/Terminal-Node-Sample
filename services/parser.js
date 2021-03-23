/**
 * Function to convert the array to parser
 * @param {Array<Number>} input 
 * @returns {String}
 */
const arrayToString = function(input) {
    if (!Array.isArray(input)) {
        throw new TypeError("Expected Array")
    }
    return input.join(", ");
}

module.exports = {
    arrayToString: arrayToString
}