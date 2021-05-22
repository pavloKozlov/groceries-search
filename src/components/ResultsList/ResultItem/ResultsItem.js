import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import { groceryItemPropTypes } from '../../../types/propTypes';
import '../../../types/typedefs';
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
        <Link className="results-list-item__link" to={`/details/${value.id}`}>
            <Button className="results-list-item__button">View Details</Button>
        </Link>
    </li>
);

ResultItem.propTypes = {
    value: groceryItemPropTypes,
};

export default ResultItem;
