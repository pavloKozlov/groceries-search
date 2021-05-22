import React from 'react';
import AdditionalInformation from '../../components/AdditionalInformation';
import ImagesGallery from '../../components/ImagesGallery';
import '../../types/typedefs';
import { groceryItemPropTypes } from '../../types/propTypes';
import './detailsPage.scss';

/**
 * Component that renders details page.
 * 
 * @param {object} params - The react component parameters.
 * @param {GroceryItem} params.details - The details object.
 */
const DetailsPage = ({ details }) => (
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
    </div>
);

DetailsPage.propTypes = {
    details: groceryItemPropTypes,
};

export default DetailsPage;
