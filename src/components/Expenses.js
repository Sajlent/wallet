import React from 'react';

const expensesData = [
    {
        "name": "Plane tickets",
        "category": "travel",
        "cost": 330
    },
    {
        "name": "Cat food",
        "category": "pets",
        "cost": 89
    },
    {
        "name": "Dinner in chinese restaurant",
        "category": "food",
        "cost": 223
    },
    {
        "name": "Winter jacket",
        "category": "clothes",
        "cost": 459
    },
    {
        "name": "Electricity bill",
        "category": "bill",
        "cost": 230
    }
];

const Expenses = () => {
    return(
        <>
            <h2>List of expenses</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    { expensesData.map((expense, index) =>
                        <tr>
                            <td>{ expense.name }</td>
                            <td>{ expense.category }</td>
                            <td>${ expense.cost }</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
};

export default Expenses;