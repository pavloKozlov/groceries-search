import React from 'react';
import './DetailsPage.scss';

const DetailsPage = ({details}) => (
    <div className="details-page">
        <h1>{details.name}</h1>
        <p>{details.description}</p>
        <div className="details-page__hr" />
    </div>
);

export default DetailsPage;
