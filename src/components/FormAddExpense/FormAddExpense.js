import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'hooks/useForm';
import Input from 'components/Inputs/Input';
import Select from 'components/Select/Select';
import Button from 'components/Button/Button';
import styles from './FormAddExpense.module.scss';

const FormAddExpense = () => {
    const categories = useSelector(state => state.expenses.availableCategories);
    const { formData, handleFieldChange, handleSubmit } = useForm({ category: categories[0], name: '', cost: '' });

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <Select id="category" 
                label="Category" 
                options={categories} 
                defaultValue={categories[0]}
                handleChange={handleFieldChange} />
            <Input id="name" name="name" label="Name" handleChange={handleFieldChange} />
            <Input id="cost" name="cost" label="Cost" handleChange={handleFieldChange} />
            <Button type="submit" label="Send" customClass={styles.submitButton} />
        </form>
    )
};

export default FormAddExpense;
