import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputRadio.module.scss';

const InputRadio = ({ id, name, value, label, checked, handleChange }) => {
    return (
        <>
            <input
                className={styles.radio}
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={handleChange}
            />
            <label htmlFor={id}>{label}</label>
        </>
    );
};

InputRadio.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default InputRadio;
