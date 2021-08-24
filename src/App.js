import React from 'react';
import Header from 'components/Header';
import Component from 'components/Component';
import MonthSelect from 'components/MonthSelect';
import Categories from 'components/Categories';
import Expenses from 'components/Expenses';

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main container">
                <Component>
                    <MonthSelect />
                </Component>
                <Component>
                    <h2>Component 1</h2>
                </Component>
                <Component>
                    <Categories />
                </Component>
                <Component>
                    <Expenses />
                </Component>
                <Component isFullWidth={ true }>
                    <h2>Component 4 - full width</h2>
                </Component>
            </main>
        </div>
    );
}

export default App;
