import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetOptions } from 'app/store';
import Select from 'components/Select/Select';

export const MonthSelector = () => {
    // const { data, isLoading, isError } = useGetMonthsQuery();
    const { monthID } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const months = useSelector(state => state.expenses.availableMonths);
    const defaultOption = monthID === undefined ? months[0] : monthID;

    const handleMonthChange = (value) => {
        history.push(value);
        dispatch(resetOptions());
    };

    return (
        <Select id="month-select" 
                label="Choose a month" 
                options={months} 
                defaultValue={defaultOption} 
                handleChange={handleMonthChange} />
    );
};

export default MonthSelector;