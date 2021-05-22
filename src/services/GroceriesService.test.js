import { searchGroceries, getGroceryById } from './GroceriesService';
import groceries from '../assets/groceries.json';

describe('GroceriesService', () => {
    describe('searchGroceries', () => {
        it('should resolve promise with the list of all groceries for empty search', () => {
            return searchGroceries('')
                .then((data) => {
                    expect(data).toEqual(groceries);
                });
        });

        it('should resolve promise with an empty list is search string doesn\'t match any names', () => {
            return searchGroceries('fake-name')
                .then((data) => {
                    expect(data).toEqual([]);
                });
        });

        it('should resolve promise with the list groceries that contains search string in the name', () => {
            const searchStr = 'berrie';
            const expectedResult = [groceries[2], groceries[4], groceries[5]];
            return searchGroceries(searchStr)
                .then((data) => {
                    expect(data).toEqual(expectedResult);
                });
        });

        it('should resolve promise with the list groceries that contains search string in the name case insensitive', () => {
            const searchStr = 'kuMq';
            const expectedResult = [groceries[8]]
            return searchGroceries(searchStr)
                .then((data) => {
                    expect(data).toEqual(expectedResult);
                });
        });
    });

    describe('getGroceryById', () => {
        it('should resolve promise with the grocery item that matches id', () => {
            const groceryItem = groceries[3];
            const id = groceryItem.id;
            return getGroceryById(id)
                .then((data) => {
                    expect(data).toEqual(groceryItem);
                });
        });

        it('should revolve promise with undefined if the there is no match by id', () => {
            return getGroceryById('fake-id')
                .then((data) => {
                    expect(data).toBe(undefined);
                });
        })
    });
});