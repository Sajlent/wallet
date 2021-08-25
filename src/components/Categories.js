import React from 'react';

const categoryList = ['travel', 'food', 'pets', 'clothes', 'bills', 'misc'];

const Categories = () => {
    return (
        <>
            <h2>Categories</h2>
            {categoryList.map((category, index) => (
                <React.Fragment key={index}>
                    <input
                        type="radio"
                        id={category}
                        name="category"
                        value={category}
                    />
                    <label htmlFor={category}>{category}</label>
                </React.Fragment>
            ))}
        </>
    );
};

export default Categories;
