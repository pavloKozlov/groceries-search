import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import '../../../typedefs';
import '../ResultsList.scss';

/**
 * Component that renders grocery item.
 * 
 * @param {object} params - The react component parameters.
 * @param {GroceryItem} params.value - The object that represents single grocery item.
 */
const ResultItem = ({ value }) => (
    <li className="results-list-item">
        <span>{value.name}</span>
        <a className="results-list-item__link" href={`/details/${value.id}`}>
            <Button className="results-list-item__button">View Details</Button>
        </a>
    </li>
);

ResultItem.propTypes = {
    value: PropTypes.shape({
        name: PropTypes.string.isRequired,
    })
};

export default ResultItem;
