import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ type = 'text', id, name, value, label }) => {
    return (
        <>
            <input
                className={styles.input}
                type={type}
                id={id}
                name={name}
                defaultValue={value}
            />
            <label htmlFor={id}>{label}</label>
        </>
    );
};

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired || PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
};

export default Input;
