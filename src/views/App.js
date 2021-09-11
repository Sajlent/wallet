import React from 'react';
import Header from 'components/Header/Header';
import Dashboard from 'components/Dashboard/Dashboard';
import styles from './App.scss';

function App() {

     return (
        <div className="app"> 
            <Header />
            <main className={styles.container}>
                <Dashboard />
            </main>
        </div>
    );
}

export default App;
