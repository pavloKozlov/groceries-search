import React from 'react';
import PropTypes from 'prop-types';
import ResultItem from './ResultItem/ResultsItem';
import '../../types/typedefs';
import { groceryItemPropTypes } from '../../types/propTypes';
import './resultsList.scss';

/**
 * Component that renders grocery items list.
 * 
 * @param {object} params - The react component parameters.
 * @param {GroceryItem[]} params.values - The list of grocery items.
 * @param {string} params.emptyMessage - The message to be displayed when there are no values.
 */
const ResultsList = ({ values, emptyMessage }) => (
    <div className="results-list">
        <ul className="results-list__list">
            {
                values.map((value) => (
                    <ResultItem key={value.id} value={value}></ResultItem>
                ))
            }
        </ul>
        {
            values.length === 0 && <span className="results-list__empty">{emptyMessage}</span>
        }
    </div>
);

ResultsList.propTypes = {
    values: PropTypes.arrayOf(groceryItemPropTypes),
    emptyMessage: PropTypes.string,
};

export default ResultsList;
