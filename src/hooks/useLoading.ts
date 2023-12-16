import { useState } from 'react';

const useLoading = (initialState = false) => {
    const [loading, setLoading] = useState<boolean>(initialState);

    const startLoading = () => setLoading(true);

    const stopLoading = () => setLoading(false);

    return { loading, startLoading, stopLoading };
};

export default useLoading;
