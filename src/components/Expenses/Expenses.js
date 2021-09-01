import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import styles from './Expenses.module.scss';
import ExpensesTable from './ExpensesTable';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    let match = useRouteMatch();

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
            <Switch>
                <Route path="/:monthID">
                    <ExpensesTable />
                </Route>
            </Switch>
            {/*{ expenses.length ? (*/}
            {/*    <table className={styles.table}>*/}
            {/*        <thead>*/}
            {/*        <tr>*/}
            {/*            <th>Name</th>*/}
            {/*            <th>Category</th>*/}
            {/*            <th>Cost</th>*/}
            {/*        </tr>*/}
            {/*        </thead>*/}
            {/*        <tbody>*/}
            {/*        {expenses.map((expense, index) => (*/}
            {/*            <tr key={index}>*/}
            {/*                <td>{expense.name}</td>*/}
            {/*                <td>{expense.category}</td>*/}
            {/*                <td>${expense.cost}</td>*/}
            {/*            </tr>*/}
            {/*        ))}*/}
            {/*        </tbody>*/}
            {/*    </table>*/}
            {/*    ) : <p>Loading...</p>*/}
            {/*}*/}
        </>
    );
};

export default Expenses;
