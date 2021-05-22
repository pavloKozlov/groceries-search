import React from 'react';
import PropTypes from 'prop-types';
import './AdditionalInformation.scss';

/**
 * Component that renders additional information.
 * 
 * @param {object} params - The react component parameters.
 * @param {string} params.data - The additional information to display.
 */
const AdditionalInformation = ({data}) => (
    <div className="additional-information">{data}</div>
);

AdditionalInformation.propTypes = {
    data: PropTypes.string,
};

export default AdditionalInformation;
