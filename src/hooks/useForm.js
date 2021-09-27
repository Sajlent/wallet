import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState);

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.dir(formData);
    };

    return { formData, handleFieldChange, handleSubmit };
};
