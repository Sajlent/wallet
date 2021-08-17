import React from 'react';
import Header from './components/Header';
import MonthSelect from './components/MonthSelect';

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main container">
                <MonthSelect />
                <div className="component">
                    <h2>Component 1</h2>
                </div>
                <div className="component">
                    <h2>Categories</h2>
                </div>
                <div className="component">
                    <h2>List of expenses</h2>
                </div>
                <div className="component component--full-width">
                    <h2>Component 4 - full width</h2>
                </div>
            </main>
        </div>
    );
}

export default App;
