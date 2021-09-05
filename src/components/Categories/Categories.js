import React, { useState } from 'react';
import InputRadio from 'components/Inputs/InputRadio';

const categoryList = ['travel', 'food', 'pets', 'clothes', 'bills', 'misc'];

const Categories = () => {
    const [currentCategory, setCurrentCategory] = useState(null);

    const handleCategoryChange = (e) => {
        setCurrentCategory(e.currentTarget.value);
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
