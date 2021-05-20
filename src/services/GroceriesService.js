import data from '../assets/groceries.json';
import { resolveWithDelay, getRandomTime } from '../utils/timeUtils';
import '../typedefs';

/**
 * Get the list of groceries that matches search string.
 * 
 * @param {string} searchStr - The search string to match grocery items.
 * @return {Promise<GroceryItem>} A promise with a list of grocery items that match search string.
 */
const searchGroceries = (searchStr) => {
    const result = data.filter((value) => value.name.includes(searchStr));
    return resolveWithDelay(getRandomTime(2000), result);
}

/**
 * Get the grocery item by id.
 * 
 * @param {string} id - The grocery item id.
 * @return {Promise<GroceryItem>} A promise with a list of grocery items that match search string.
 */
const getGroceryById = (id) => {
    const result = data.find((value) => value.id === id);
    return resolveWithDelay(getRandomTime(2000), result);
}

export {
    searchGroceries,
    getGroceryById
};
