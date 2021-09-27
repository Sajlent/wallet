import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ type = 'text', id, name, value = '', label, handleChange }) => {
    return (
        <>
            <label htmlFor={id} className={styles.label}>{label}</label>
            <input
                className={`${styles[`input`]} ${styles[`input--${type}`]}`}
                type={type}
                id={id}
                name={name}
                defaultValue={value}
                onChange={handleChange}
            />
        </>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string || PropTypes.number,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default Input;
