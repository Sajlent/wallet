import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Expenses.module.scss';

let monthExpenses = [];

const ExpensesTable = () => {
    const { monthID } = useParams();
    const options = useSelector((state) => state.expenses.options);
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/expenses/${monthID}`);

            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }

            const data = await response.json();

            monthExpenses = data.expenses;
            setExpenses(data.expenses);
        })();
    }, []);

    useEffect(() => {
        setExpenses(monthExpenses.filter(item => item.category === options.category));
    }, [options]);

    return(
        <>
            { expenses.length ? (
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
            ) : <p>Loading...</p>
            }
        </>
    );
};

export default ExpensesTable;