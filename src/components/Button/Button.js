import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ type = 'button', label, customClass }) => (
    <button className={ `${styles.btn} ${customClass}` } type={ type }>{ label }</button>
);

Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string.isRequired
};

export default Button;
