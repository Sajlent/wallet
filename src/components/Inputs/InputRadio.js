import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputRadio.module.scss';

const InputRadio = ({ id, name, value, label, handleChange }) => {
    return (
        <>
            <input
                className={styles.radio}
                type="radio"
                id={id}
                name={name}
                value={value}
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
    handleChange: PropTypes.func.isRequired
};

export default InputRadio;
