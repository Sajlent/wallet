import React from 'react';

const months = ['January', 'February', 'March', 'April', 'May'];

const MonthSelect = () => {
    return (
        <>
            <label htmlFor="month-select">Choose a month:</label>
            <select id="month-select" className="select">
                {months.map((month, index) => (
                    <option key={index} value={month.toLowerCase()}>
                        {month}
                    </option>
                ))}
            </select>
        </>
    );
};

export default MonthSelect;
