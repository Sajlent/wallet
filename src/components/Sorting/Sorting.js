import React from 'react';
import { useDispatch } from 'react-redux';
import { setOptions } from 'app/store';

const Sorting = () => {
    const dispatch = useDispatch();

    const changeSorting = (direction) => {
        dispatch(setOptions(direction));
    };

    return (
        <>
            <button onClick={changeSorting('asc')}>
                Sort asc
            </button>
            <button onClick={changeSorting('desc')}>
                Sort desc
            </button>
        </>
    );
};

export default Sorting;
