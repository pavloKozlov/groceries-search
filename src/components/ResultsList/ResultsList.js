import React from 'react';
import PropTypes from 'prop-types';
import ResultItem from './ResultItem/ResultsItem';
import '../../typedefs';
import './ResultsList.scss';

/**
 * Component that renders grocery items list.
 * 
 * @param {object} params - The react component parameters.
 * @param {GroceryItem[]} params.values - The list of grocery items.
 */
const ResultsList = ({ values }) => (
    <ul className="results-list">
        {
            values.map((value) => (
                <ResultItem key={value.id} value={value}></ResultItem>
            ))
        }
    </ul>
);

ResultsList.propTypes = {
    values: PropTypes.arrayOf(ResultItem.propTypes.value),
};

export default ResultsList;
