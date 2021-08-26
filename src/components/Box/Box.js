import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.scss';

const Box = ({ isFullWidth, children }) => (
    <div className={`${styles.box} ${isFullWidth && styles['box-full-width']}`}>
        {children}
    </div>
);

export default Box;

Box.propTypes = {
    isFullWidth: PropTypes.bool,
    children: PropTypes.element.isRequired
}
