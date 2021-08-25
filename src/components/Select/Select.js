import React from 'react';
import styles from './Select.module.scss';

const months = ['January', 'February', 'March', 'April', 'May'];

const Select = () => {
    return (
        <>
            <label htmlFor="month-select">Choose a month:</label>
            <select id="month-select" className={styles.select}>
                {months.map((month, index) => (
                    <option key={index} value={month.toLowerCase()}>
                        {month}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;
