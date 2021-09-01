import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = ({ id, label, options }) => {
    return (
        <>
            <label htmlFor={id}>{ label }</label>
            <select id={id} className={styles.select}>
                {options.map((option, index) => (
                    <option key={index} value={option.id.toLowerCase()}>
                        {option.id}
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
