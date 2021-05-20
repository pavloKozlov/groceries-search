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

export {
    resolveWithDelay,
    getRandomTime,
};
