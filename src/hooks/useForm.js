import { useState } from "react";

export const useForm = (initialState = {}, validators = {}) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.dir(formData);

        setErrors(validateFormData(formData, validators));
    };

    return { 
        formData, 
        handleFieldChange, 
        handleSubmit,
        errors 
    };
};

const validateFormData = (formData = {}, validators = {}) => {
    if (Object.keys(validators).length) {
        let valid = true;
        const errors = {};

        for (const key in validators) {
            const value = formData[key];
            const validation = validators[key];

            // required
            if (validation.required) {
                valid = false;
                errors[key] = validators.requiredMessage;
            }

            // pattern
            if (validation.pattern && !RegExp(validation.pattern).test(value)) {
                valid = false;
                errors[key] = validation.message;
            }
        }

        return errors;
    }
};
