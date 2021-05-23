import React from 'react';
import PropTypes from 'prop-types';
import AdditionalInformation from '../../components/AdditionalInformation';
import ImagesGallery from '../../components/ImagesGallery';
import '../../types/typedefs';
import { groceryItemPropTypes } from '../../types/propTypes';
import LoadingOverflow from '../../components/LoadingOverflow';
import './detailsPage.scss';

/**
 * Component that renders details page.
 * 
 * @param {object} params - The react component parameters.
 * @param {GroceryItem} params.details - The details object.
 * @param {boolean} params.isLoading - The flag that reflects loading state.
 */
const DetailsPage = ({ details, isLoading }) => (
    <div className="details-page">
        <h1>{details.name}</h1>
        <p>{details.description}</p>
        <div className="details-page__hr" />
        {
            details.additionalInformation && <AdditionalInformation data={details.additionalInformation} />
        }
        {
            details.images && <ImagesGallery values={details.images} />
        }
        {
            isLoading && <LoadingOverflow />
        }
    </div>
);

DetailsPage.propTypes = {
    details: groceryItemPropTypes,
    isLoading: PropTypes.bool,
};

DetailsPage.defaultProps = {
    isLoading: false,
};

export default DetailsPage;
