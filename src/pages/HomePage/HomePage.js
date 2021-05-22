import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';
import ResultsList from '../../components/ResultsList';
import '../../types/typedefs';
import { groceryItemPropTypes } from '../../types/propTypes';
import LoadingOverflow from '../../components/LoadingOverflow';
import './homePage.scss';

/**
 * Component that renders home page.
 * 
 * @param {object} params - The react component parameters.
 * @param {string} params.searchValue - The current search string.
 * @param {string} params.isLoading - The flag that reflects loading state.
 * @param {object} params.onSearchChange - The on change handler for search input.
 * @param {GroceryItem[]} params.results - The list of search results.
 */
const HomePage = ({ searchValue, isLoading, onSearchChange, results }) => {
  return (
    <div className="home-page">
      <Input
        value={searchValue}
        onChange={onSearchChange}
        placeholder="Type here..."
        disabled={isLoading}
        className="home-page__search-input"
      ></Input>
      {/* <Button onClick={() => console.log('click')}>Search</Button> */}
      <div className="home-page-results__container">
        {
          searchValue.length > 0 ?
            <ResultsList values={results}></ResultsList> :
            <span className="home-page-results__empty">Type something in</span>
        }
      </div>
      {
        isLoading && <LoadingOverflow />
      }
    </div>
  );
};

HomePage.propTypes = {
  searchValue: PropTypes.string,
  isLoading: PropTypes.bool,
  onSearchChange: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(groceryItemPropTypes),
}

export default HomePage;
