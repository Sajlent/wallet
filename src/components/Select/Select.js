import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = ({ id, label, options, handleChange }) => {
    return (
        <>
            <label htmlFor={id}>{ label }</label>
            <select id={id} className={styles.select} onChange={handleChange}>
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
