import React from 'react';
import PropTypes from 'prop-types';
import ResultsList from '../../components/ResultsList';
import SearchInput from '../../components/SearchInput';
import '../../types/typedefs';
import { groceryItemPropTypes } from '../../types/propTypes';
import './homePage.scss';

/**
 * Component that renders home page.
 * 
 * @param {object} params - The react component parameters.
 * @param {string} params.initialSearchValue - The initial value for search input.
 * @param {boolean} params.isSearchEmpty - The flag that reflects if the search input is empty.
 * @param {boolean} params.isLoading - The flag that reflects loading state.
 * @param {function} params.onSearchChange - The on change handler for search input.
 * @param {GroceryItem[]} params.results - The list of search results.
 */
const HomePage = ({ initialSearchValue, isSearchEmpty, isLoading, onSearchChange, results }) => {
  return (
    <div className="home-page">
      <div className="home-page__search-container">
        <SearchInput 
          initialValue={initialSearchValue}
          isLoading={isLoading}
          onChange={onSearchChange}
        />
      </div>
      <div className="home-page-results__container">
          <ResultsList
            values={results}
            emptyMessage={isSearchEmpty ? 'Type something in' : 'No results'}
          ></ResultsList>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  initialSearchValue: PropTypes.string,
  isSearchEmpty: PropTypes.bool,
  isLoading: PropTypes.bool,
  onSearchChange: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(groceryItemPropTypes),
}

export default HomePage;
