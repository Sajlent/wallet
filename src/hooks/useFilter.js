import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetExpensesQuery } from 'app/store';

export const useFilter = () => {
    const [expenses, setExpenses] = useState([]);
    const { monthID } = useParams();
    const { data, isLoading, isError } = useGetExpensesQuery(monthID);
    const options = useSelector((state) => state.expenses.options);

    useEffect(() => {
        if (data) setExpenses(data.expenses);
    }, [data]);

    useEffect(() => {
        if (data) {
            let filteredExpenses = [...data.expenses];

            if (options.category) {
                filteredExpenses = filteredExpenses.filter(item => item.category === options.category);
            }

            if (options.sorting) {
                if (options.sorting === 'asc') {
                    filteredExpenses.sort((a, b) => a.cost - b.cost);
                } else if (options.sorting === 'desc') {
                    filteredExpenses.sort((a, b) => b.cost - a.cost);
                }
            }

            setExpenses(filteredExpenses);
        } 
    }, [options]);

    return {
        data: expenses,
        isLoading,
        isError
    };
};
