/**
 * Resolve promise with a value after a delay.
 * 
 * @param {Number} delay - The delay in ms.
 * @param {*} result - The value to resolve the promise with.
 */
const resolveWithDelay = (delay, result) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, delay);
    })

/**
 * Get random number between 0 and max.
 * 
 * @param {Number} max - The maximum number to generate;
 */
const getRandomTime = (max = 3000) => Math.random() * max;


/**
 * Creates a debounced function that delays invoking callback until there are no new invocation during last `delay` miliseconds.
 * 
 * @param {Function} fn - The callback function that will be called.
 * @param {number} delay - The delay in miliseconds.
 */
const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(null, args);
        }, delay);
    }
}

export {
    resolveWithDelay,
    getRandomTime,
    debounce,
};
