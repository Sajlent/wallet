import React from 'react';
import { useDispatch } from 'react-redux';
import { setOptions } from 'app/store';
import InputRadio from 'components/Inputs/InputRadio';

const categoryList = ['travel', 'food', 'pets', 'clothes', 'bills', 'misc'];

const Categories = () => {
    const dispatch = useDispatch();

    const handleCategoryChange = (e) => {
        const currentCategory = e.currentTarget.value;

        dispatch(setOptions({ optionName: 'category', optionValue: currentCategory }));
    };

    return (
        <>
            <h2>Categories</h2>
            {categoryList.map((category, index) => (
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
