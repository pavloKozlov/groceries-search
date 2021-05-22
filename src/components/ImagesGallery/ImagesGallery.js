import React from 'react';
import PropTypes from 'prop-types';
import './ImagesGallery.scss';

/**
 * Component that displays the list of images.
 * 
 * @param {object} params - The react component parameters.
 * @param {string[]} params.values - The list of image urls. 
 */
const ImagesGallery = ({ values }) => (
    <div className="images-list">
        {
            values.map((url) => (
                <img
                    key={url}
                    src={url}
                    alt="description goes here"
                    className="images-list__img"
                />
            ))
        }
    </div>
);

ImagesGallery.propTypes = {
    values: PropTypes.arrayOf(PropTypes.string),
};

export default ImagesGallery;
