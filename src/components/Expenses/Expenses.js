import React, { useState, useEffect } from 'react';
import styles from './Expenses.module.scss';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        getExpenses();
    }, []);

    const getExpenses = () => {
        fetch('/api/expenses')
            .then((res) => res.json())
            .then((data) => setExpenses(data.expenses))
            .catch((error) => console.log('Error fetching data', error));
    };

    return (
        <>
            <h2>List of expenses</h2>
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
        </>
    );
};

export default Expenses;
