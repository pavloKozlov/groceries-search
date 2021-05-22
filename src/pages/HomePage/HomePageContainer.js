import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import HomePage from './HomePage';
import { searchGroceries } from '../../services/GroceriesService';
import useDebounce from '../../hooks/useDebounce';

/**
 * The container component for HomePage.
 */
const HomePageContainer = ({ location }) => {
    const searchStr = new URLSearchParams(location.search).get('search') || '';
    const [searchValue, setSearchValue] = useState(searchStr);
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [queryStr, setQueryStr] = useState(searchStr)
    const history = useHistory();

    /**
     * Call searchGroceries with debounce while it's being exectued set isLoading flag to true.
     */
    const debouncedSearchGroceries = useDebounce((value) => {
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
    }, 300);

    const onSearchChange = useCallback((value) => {
        !isLoading && setSearchValue(value);
    }, [setSearchValue, isLoading]);

    useEffect(() => {
        debouncedSearchGroceries(searchValue);
    }, [searchValue, debouncedSearchGroceries]);

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
            searchValue={searchValue}
            isLoading={isLoading}
            onSearchChange={onSearchChange}
            results={results}
        ></HomePage>
    );
};

export default HomePageContainer;