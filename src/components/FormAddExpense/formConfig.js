export const formConfig = {
    initialState:  {
        category: '', 
        name: '', 
        cost: '' 
    }, 
    validators: {
        name: {
            required: true,
            pattern: '^[A-Za-z]*$',
            message: 'Name must contain only letters without numbers or special characters'
        }, 
        requiredMessage: 'This field is required.'
    }
}