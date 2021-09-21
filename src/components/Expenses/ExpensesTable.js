import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetExpensesQuery } from 'app/store';
import styles from './Expenses.module.scss';

const ExpensesTable = () => {
    const [expenses, setExpenses] = useState([]);
    const { monthID } = useParams();
    const { data, isLoading, isError } = useGetExpensesQuery(monthID);
    
    const options = useSelector((state) => state.expenses.options);

    useEffect(() => {
        if (data) setExpenses(data.expenses);
    }, [data]);

    useEffect(() => {
        console.log('useEffect', options);
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

    return(
        <>
            { isLoading ? <p>Loading...</p> : (
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.name}</td>
                            <td>{expense.category}</td>
                            <td>${expense.cost}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default ExpensesTable;