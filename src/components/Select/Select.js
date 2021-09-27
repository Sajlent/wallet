import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = ({ id, defaultValue, label, options, handleChange }) => {
    const [currentValue, setCurrentValue] = useState(defaultValue);

    const handleValueChange = (e) => {
        setCurrentValue(e.target.value);
        handleChange(e);
    };

    return (
        <>
            <label htmlFor={id} className={styles.label}>{ label }</label>
            <select id={id} name={id} className={styles.select} value={currentValue} onChange={handleValueChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.toLowerCase()}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    );
};

Select.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}

export default Select;
