import React, { useState, useEffect } from 'react';
import Select from 'components/Select/Select';

export const MonthSelector = () => {
    const [months, setMonths] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/monts');

            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }

            const data = await response.json();

            setMonths(data.months);
        })();
    }, []);

    return (
        <Select id="month-select" label="Choose a month" options={months} />
    );
};

export default MonthSelector;