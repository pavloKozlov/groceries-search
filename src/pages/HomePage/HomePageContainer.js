import React, { useState, useCallback } from 'react';
import HomePage from './HomePage';
import { searchGroceries } from '../../services/GroceriesService';

const HomePageContainer = () => {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);

    const onSearchChange = useCallback((value) => {
        setSearchValue(value);
        searchGroceries(value)
            .then((values) => setResults(values));
    }, [setSearchValue]);
    
    return (
        <HomePage
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            results={results}
        ></HomePage>
    );
};

export default HomePageContainer;