import React from 'react';
import { useFilter } from 'hooks/useFilter';
import styles from './Expenses.module.scss';

const ExpensesTable = () => {
    const expenses = useFilter();

    return(
        <>
            { expenses.isLoading ? <p>Loading...</p> : (
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    { expenses.data.map((expense, index) => (
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
