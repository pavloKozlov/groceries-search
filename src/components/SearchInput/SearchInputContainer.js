import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useDebounce from '../../hooks/useDebounce';
import SearchInput from './SearchInput';

/**
 * The container component for HomePage.
 * 
 * @param {object} params - The react component parameters.
 * @param {string} params.initialValue - The initial input value.
 * @param {boolean} params.isLoading - The flag that reflects loading state.
 * @param {function} params.onChange - The onChange handler.
 */
const SearchInputContainer = ({ initialValue, isLoading, onChange }) => {
    const [inputValue, setInputValue] = useState(initialValue);

    /**
     * Call searchGroceries with debounce while it's being exectued set isLoading flag to true.
     */
    const debouncedSearchGroceries = useDebounce((value) => {
        onChange(value)
    }, 500);

    const onValueChange = useCallback((value) => {
        !isLoading && setInputValue(value);
    }, [setInputValue, isLoading]);


    useEffect(() => {
        debouncedSearchGroceries(inputValue);
    }, [inputValue, debouncedSearchGroceries]);

    return (
        <SearchInput
            value={inputValue}
            isLoading={isLoading}
            onChange={onValueChange}
        />
    )
}

SearchInputContainer.propTypes = {
    initialValue: PropTypes.string,
    isLoading: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

SearchInputContainer.defaultProps = {
    initialValue: '',
    isLoading: false,
};

export default SearchInputContainer;
