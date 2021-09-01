import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import ExpensesTable from './ExpensesTable';

const Expenses = () => {
    return (
        <>
            <h2>List of expenses</h2>
            <Switch>
                <Route path="/:monthID">
                    <ExpensesTable />
                </Route>
            </Switch>
        </>
    );
};

export default Expenses;
