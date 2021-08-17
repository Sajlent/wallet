import React from 'react';
import logo from '../images/logo.svg';

const Header = () => (
    <header className="header">
        <div className="header__content">
            <a href="/">
                <img src={ logo } className="logo" alt="Logo" title="Logo" />
            </a>
            <h1>Wallet</h1>
        </div>
    </header>
);

export default Header;