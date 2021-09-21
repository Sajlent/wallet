import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.scss';

const Box = ({ isFullWidth, hasRightAlignment, children }) => (
    <div className={`
            ${styles.box} 
            ${isFullWidth ? styles['box-full-width'] : ''}
            ${hasRightAlignment ? styles['box-align-right'] : ''}
    `}>
        {children}
    </div>
);

export default Box;

Box.propTypes = {
    isFullWidth: PropTypes.bool,
    hasRightAlignment: PropTypes.bool,
    children: PropTypes.element.isRequired
}
