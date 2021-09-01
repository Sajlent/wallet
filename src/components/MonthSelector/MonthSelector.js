import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'components/Select/Select';

export const MonthSelector = () => {
    const [months, setMonths] = useState([]);
    const history = useHistory();

    const handleMonthChange = (e) => {
        history.push(e.currentTarget.value);
    };

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/months');

            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }

            const data = await response.json();

            setMonths(data.months);
        })();
    }, []);

    return (
        <Select id="month-select" label="Choose a month" options={months} handleChange={handleMonthChange} />
    );
};

export default MonthSelector;