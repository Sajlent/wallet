import React from 'react';
import styles from './Input.module.scss';

const Input = ({ type, id, name, value, label }) => {
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

export default Input;
