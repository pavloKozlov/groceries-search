import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import HomePage from './HomePage';
import { searchGroceries } from '../../services/GroceriesService';

/**
 * The container component for HomePage.
 */
const HomePageContainer = ({ location }) => {
    const initialSearchValue = new URLSearchParams(location.search).get('search') || '';
    const [isLoading, setIsLoading] = useState(false);
    const [isSearchEmpty, setIsSearchEmpty] = useState(initialSearchValue.length === 0);
    const [results, setResults] = useState([]);
    const [queryStr, setQueryStr] = useState(initialSearchValue)
    const history = useHistory();

    const onSearchChange = useCallback((value) => {
        setIsSearchEmpty(value.length === 0);
        if (value === '') {
            // don't fetch data for empty value. Set empty results immediatelly instead
            setResults([]);
            setQueryStr(value);
            return;
        }
        setIsLoading(true);
        searchGroceries(value)
            .then((values) => {
                setResults(values);
                setQueryStr(value);
            })
            .catch(() => {/* do soemthing */ })
            .finally(() => setIsLoading(false))
    }, [setIsSearchEmpty]);

    useEffect(() => {
        onSearchChange(initialSearchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const params = new URLSearchParams()
        if (queryStr) {
            // populate current search string to url query params
            params.append('search', queryStr)
        }
        history.replace({ search: params.toString() });
    }, [queryStr, history])

    return (
        <HomePage
            initialSearchValue={initialSearchValue}
            isSearchEmpty={isSearchEmpty}
            isLoading={isLoading}
            onSearchChange={onSearchChange}
            results={results}
        ></HomePage>
    );
};

export default HomePageContainer;