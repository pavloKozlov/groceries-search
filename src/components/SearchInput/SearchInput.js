import React from 'react';
import PropTypes from 'prop-types';
import LoadingOverflow from '../../components/LoadingOverflow';
import Input from '../Input';
import './searchInput.scss';

/**
 * Component that renders search input.
 * 
 * @param {object} params - The react component parameters.
 * @param {string} params.value - The input value.
 * @param {function} params.onChange - The onChange handler.
 */
const SearchInput = ({ value, isLoading, onChange }) => (
    <div className="search-input">
        <Input
            value={value}
            onChange={onChange}
            placeholder="Type here..."
            className="search-input__input"
        ></Input>
        {
            isLoading && <LoadingOverflow />
        }
    </div>
);

SearchInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
    value: '',
};

export default SearchInput;
