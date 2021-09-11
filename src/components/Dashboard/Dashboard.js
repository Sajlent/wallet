import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useGetMonthsQuery, setAvailableMonths } from 'app/store';
import Box from 'components/Box/Box';
import MonthSelector from 'components/MonthSelector/MonthSelector';
import Categories from 'components/Categories/Categories';
import Expenses from 'components/Expenses/Expenses';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useGetMonthsQuery();
    
    useEffect(() => {
        if (data) {
            dispatch(setAvailableMonths(data));
        } 
    }, [data]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={`/${data[0].toLowerCase()}`} />
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
    );
};

export default Dashboard;
