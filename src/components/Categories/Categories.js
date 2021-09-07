import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCategoriesQuery, setOptions } from 'app/store';
import InputRadio from 'components/Inputs/InputRadio';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const { data } = useGetCategoriesQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) setCategories(data);
    }, [data]);

    const handleCategoryChange = (e) => {
        const currentCategory = e.currentTarget.value;

        dispatch(setOptions({ optionName: 'category', optionValue: currentCategory }));
    };

    return (
        <>
            <h2>Categories</h2>
            {categories.map((category, index) => (
                <InputRadio
                    key={index}
                    id={category}
                    name="category"
                    value={category}
                    label={category}
                    handleChange={handleCategoryChange}
                />
            ))}
        </>
    );
};

export default Categories;
