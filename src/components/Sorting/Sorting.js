import React from 'react';
import { useDispatch } from 'react-redux';
import { setOptions } from 'app/store';
import styles from './Sorting.module.scss';

const Sorting = () => {
    const dispatch = useDispatch();

    const changeSorting = (direction) => {
        dispatch(setOptions({optionName: 'sorting', optionValue: direction}));
    };

    return (
        <>
            <h3>Sorting</h3>
            <button 
                className={`${styles['btn-sort']} ${styles['btn-sort--asc']}`} 
                onClick={() => changeSorting('asc')}
                aria-label="Sort ascending" />
            <button 
                className={`${styles['btn-sort']}`} 
                onClick={() => changeSorting('desc')}
                aria-label="Sort descending" />
        </>
    );
};

export default Sorting;
