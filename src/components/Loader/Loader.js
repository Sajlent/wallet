import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => (
    <div className={styles.loader}>
        <div className={styles['loader__inner-1']}></div>
        <div className={styles['loader__inner-2']}></div>
    </div>
);

export default Loader;
