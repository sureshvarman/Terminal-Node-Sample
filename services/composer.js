/**
 * Function to have something similiar to strategy pattern, 
 * where the algorithm to process on stream are dynamic at runtime.
 * here the order is more important, and the chain is more important.
 * Don;t get confused of chain of responsibility pattern
 * @param  {Array<Function>} fn 
 * @returns {Any}
 */
 const compose = function(...fn) {
    return function(valueInput) {
        return fn.reduceRight(function(previous, newFn) {
            return newFn(previous);
        }, valueInput)
    }
}

module.exports = compose;