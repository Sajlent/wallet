import React from 'react';
import styles from './Box.module.scss';

const Box = ({ isFullWidth, children }) => (
    <div className={`${styles.box} ${isFullWidth && styles['box-full-width']}`}>
        {children}
    </div>
);

export default Box;
