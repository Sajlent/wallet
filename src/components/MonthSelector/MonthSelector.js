import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useGetMonthsQuery } from 'app/store';
import Select from 'components/Select/Select';

export const MonthSelector = () => {
    const [months, setMonths] = useState([]);
    const { data, isLoading, isError } = useGetMonthsQuery();
    const history = useHistory();

    const handleMonthChange = (e) => {
        history.push(e.currentTarget.value);
    };

    useEffect(() => {
        if (data) setMonths(data);
    }, [data]);

    return (
        <Select id="month-select" label="Choose a month" options={months} handleChange={handleMonthChange} />
    );
};

export default MonthSelector;