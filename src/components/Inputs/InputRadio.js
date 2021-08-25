import React from 'react';
import styles from './InputRadio.module.scss';

const InputRadio = ({ id, name, value, label }) => {
    return (
        <>
            <input
                className={styles.radio}
                type="radio"
                id={id}
                name={name}
                value={value}
            />
            <label htmlFor={id}>{label}</label>
        </>
    );
};

export default InputRadio;
