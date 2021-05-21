import React, { useState, useEffect, useCallback } from 'react';
import {useHistory} from 'react-router-dom';
import HomePage from './HomePage';
import { searchGroceries } from '../../services/GroceriesService';

const HomePageContainer = ({ location }) => {
    const searchStr = new URLSearchParams(location.search).get('search') || '';
    const [searchValue, setSearchValue] = useState(searchStr);
    const [results, setResults] = useState([]);
    const [queryStr, setQueryStr] = useState(searchStr)
    const history = useHistory();
    
    const onSearchChange = useCallback((value) => {
        setSearchValue(value);
    }, [setSearchValue]);
    
    useEffect(() => {
        searchGroceries(searchValue)
            .then((values) => {
                setResults(values);
                setQueryStr(searchValue);
            });
    }, [searchValue]);

    useEffect(() => {
        const params = new URLSearchParams()
        if (queryStr) {
            params.append('search', queryStr)
        }
        history.replace({search: params.toString()});
        console.log('here');
      }, [queryStr, history])

    return (
        <HomePage
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            results={results}
        ></HomePage>
    );
};

export default HomePageContainer;