import React from 'react';
import Header from 'components/Header/Header';
import Box from 'components/Box/Box';
import Select from 'components/Select/Select';
import Categories from 'components/Categories/Categories';
import Expenses from 'components/Expenses/Expenses';

import './App.scss';

function App() {
    return (
        <div className="app">
            <Header />
            <main className="main container">
                <Box>
                    <Select />
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
                <Box isFullWidth={true}>
                    <h2>Box 4 - full width</h2>
                </Box>
            </main>
        </div>
    );
}

export default App;
