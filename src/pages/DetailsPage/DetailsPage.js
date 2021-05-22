import React from 'react';
import ImagesGallery from '../../components/ImagesGallery';
import './DetailsPage.scss';

const DetailsPage = ({details}) => (
    <div className="details-page">
        <h1>{details.name}</h1>
        <p>{details.description}</p>
        <div className="details-page__hr" />
        {
            details.images && <ImagesGallery values={details.images} />
        }
    </div>
);

export default DetailsPage;
