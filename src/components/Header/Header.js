import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/images/logo.svg';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.content}>
            <a href="/">
                <Logo className={styles.logo} alt="Logo" title="Logo"/>
            </a>
            <h1>Wallet</h1>
        </div>
    </header>
);

export default Header;
