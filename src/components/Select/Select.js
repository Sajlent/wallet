import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = ({ id, defaultValue, label, options, handleChange }) => {
    const [currentValue, setCurrentValue] = useState(defaultValue);

    const handleValueChange = (value) => {
        setCurrentValue(value);
        handleChange(value);
    };

    return (
        <>
            <label htmlFor={id}>{ label }</label>
            <select id={id} className={styles.select} value={currentValue} onChange={(e) => handleValueChange(e.currentTarget.value)}>
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
