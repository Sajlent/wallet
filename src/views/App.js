import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from 'components/Header/Header';
import Box from 'components/Box/Box';
import MonthSelector from '../components/MonthSelector/MonthSelector';
import Categories from 'components/Categories/Categories';
import Expenses from 'components/Expenses/Expenses';
import styles from './App.scss';

function App() {
    // TODO: move months switch to Dashboard component
    const availableMonths = useSelector((state) => state.expenses.availableMonths);

     return (
        <div className="app"> 
            <Header />
            <main className={styles.container}>
                <Switch>
                    <Route exact path="/">
                        <Redirect to={`/${availableMonths[0].toLowerCase()}`} />
                    </Route>
                    <Route path="/:monthID">
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
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
