import React from 'react';

const DetailsPage = ({details}) => (
    <div>
        <h1>{details.name}</h1>
        <p>{details.description}</p>
    </div>
);

export default DetailsPage;
