import React, { useState } from 'react';
import App from './App';
import { searchGroceries } from './services/GroceriesService';

const AppContainer = () => {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);

    const onSearchChange = (value) => {
        setSearchValue(value);
        searchGroceries(value)
            .then((values) => setResults(values));
    }
    
    return (
        <App
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            results={results}
        ></App>
    );
};

export default AppContainer;