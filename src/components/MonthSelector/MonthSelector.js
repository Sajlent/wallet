import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetMonthsQuery, setAvailableMonths } from 'app/store';
import Select from 'components/Select/Select';

export const MonthSelector = () => {
    const { data, isLoading, isError } = useGetMonthsQuery();
    const { monthID } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const defaultOption = monthID === undefined ? months[0] : monthID;

    const handleMonthChange = (value) => {
        history.push(value);
    };

    useEffect(() => {
        if (data) {
            dispatch(setAvailableMonths(data));
        } 
    }, [data]);

    return (
        <> { 
            isLoading ? <p>Loading...</p> : (
            <Select id="month-select" 
                    label="Choose a month" 
                    options={data} 
                    defaultValue={defaultOption} 
                    handleChange={handleMonthChange} />
            )}
        </>
    );
};

export default MonthSelector;