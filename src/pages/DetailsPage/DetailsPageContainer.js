import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailsPage from './DetailsPage';
import { getGroceryById } from '../../services/GroceriesService';

/**
 * The container component for DetailsPage.
 */
const DetailsPageContainer = () => {
    const [details, setDetails] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getGroceryById(id)
            .then((result) => setDetails(result))
            .finally(() => setIsLoading(false));
    }, [id]);

    return (
        <DetailsPage details={details} isLoading={isLoading} />
    )
};

export default DetailsPageContainer;