import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';
import ResultsList from '../../components/ResultsList';
import { groceryItemPropTypes } from '../../types/propTypes';
import './HomePage.scss';

/**
 * Component that renders home page.
 * 
 * @param {object} params - The react component parameters.
 * @param {string} params.searchValue - The current search string.
 * @param {object} params.onSearchChange - The on change handler for search input.
 * @param {object[]} params.results - The list of search results.
 */
const HomePage = ({ searchValue, onSearchChange, results }) => {
  return (
    <div className="home-page">
      <Input value={searchValue} onChange={onSearchChange} placeholder="Type here..."></Input>
      {/* <Button onClick={() => console.log('click')}>Search</Button> */}
      <div className="home-page-results__container">
        {
          searchValue.length > 0 ?
            <ResultsList values={results}></ResultsList> :
            <span className="home-page-results__empty">Type something in</span>
        }
      </div>
    </div>
  );
};

HomePage.propTypes = {
  searchValue: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(groceryItemPropTypes),
}

export default HomePage;
