import React from 'react';

const months = ['January', 'February', 'March', 'April', 'May'];

const MonthSelect = () => {
    return(
        <div className="component">
            <label htmlFor="month-select">Choose a month:</label>
            <select id="month-select" className="select">
                { months.map((month, index) =>
                    <option key={ index } value={ month.toLowerCase() }>{ month }</option>
                )}
            </select>
        </div>
    );
};

export default MonthSelect;