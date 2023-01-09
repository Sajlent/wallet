import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useGetMonthsQuery, setAvailableMonths } from '@/app/store';
import Header from '@/components/Header/Header';
import Dashboard from '@/components/Dashboard/Dashboard';
import Loader from '@/components/Loader/Loader';
import styles from './App.scss';

function App() {
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useGetMonthsQuery();

    useEffect(() => {
        if (data) dispatch(setAvailableMonths(data));
    }, [data]);

    if (isLoading) return <Loader />;

    // TODO: add 404 page
    return (
        <div className="app">
            <Header />
            <main className={styles.container}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Navigate
                                to={`/${data[0].toLowerCase()}`}
                                replace={true}
                            />
                        }
                    />
                    <Route path="/:monthID" element={<Dashboard />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
