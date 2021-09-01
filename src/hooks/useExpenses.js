import {useCallback} from 'react';

export const useExpenses = () => {
    const getExpenses = useCallback(async () => {
        try {
            const response = await fetch('/api/expenses');

            console.log(response.json());
        } catch(err) {
            console.log(err);
        }
    }, []);

    return {
        getExpenses
    }
}