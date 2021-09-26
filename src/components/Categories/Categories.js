import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCategoriesQuery, setAvailableCategories, setOptions } from 'app/store';
import InputRadio from 'components/Inputs/InputRadio';

const Categories = () => {
    const dispatch = useDispatch();
    const { data, isLoading } = useGetCategoriesQuery();
    const chosenCategory = useSelector(state => state.expenses.options.category);

    useEffect(() => {
        if (data) dispatch(setAvailableCategories(data));
    }, [data]);

    const handleCategoryChange = (e) => {
        const currentCategory = e.currentTarget.value;

        dispatch(setOptions({ optionName: 'category', optionValue: currentCategory }));
    };

    return (
        <>
            <h2>Categories</h2>
            { isLoading ? <p>Loading...</p> : (
                data.map((category, index) => (
                    <InputRadio
                        key={index}
                        id={category}
                        name="category"
                        value={category}
                        label={category}
                        checked={chosenCategory === category}
                        handleChange={handleCategoryChange}
                    />
                ))
            )}
        </>
    );
};

export default Categories;
