import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsPage from './DetailsPage';
import { getGroceryById } from '../../services/GroceriesService';

/**
 * The container component for DetailsPage.
 */
const DetailsPageContainer = () => {
    const [details, setDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getGroceryById(id)
            .then((result) => setDetails(result));
    }, [id]);

    return (
        <DetailsPage details={details} />
    )
};

export default DetailsPageContainer;