import React from 'react';
import { useParams } from 'react-router-dom';

const ExpensesTable = () => {
    let { monthID } = useParams();

    return <h3>Requested topic ID: {monthID}</h3>;
};

export default ExpensesTable;