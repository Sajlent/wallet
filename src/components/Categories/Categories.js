import React from 'react';
import InputRadio from 'components/Inputs/InputRadio';

const categoryList = ['travel', 'food', 'pets', 'clothes', 'bills', 'misc'];

const Categories = () => {
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
                />
            ))}
        </>
    );
};

export default Categories;
