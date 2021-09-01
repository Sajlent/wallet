import React from 'react';
import Header from 'components/Header/Header';
import Box from 'components/Box/Box';
import MonthSelector from '../components/MonthSelector/MonthSelector';
import Categories from 'components/Categories/Categories';
import Expenses from 'components/Expenses/Expenses';
import styles from './App.scss';

function App() {
    return (
        <div className="app">
            <Header />
            <main className={styles.container}>
                <Box>
                    <MonthSelector />
                </Box>
                <Box>
                    <h2>Box 1</h2>
                </Box>
                <Box>
                    <Categories />
                </Box>
                <Box>
                    <Expenses />
                </Box>
                <Box isFullWidth>
                    <h2>Box 4 - full width</h2>
                </Box>
            </main>
        </div>
    );
}

export default App;
