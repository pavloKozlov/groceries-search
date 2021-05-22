import PropTypes from 'prop-types';

/**
 * PropTypes for grocery item.
 */
export const groceryItemPropTypes = PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    additionalInformation: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
});
