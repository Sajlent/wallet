import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    expenses: [],
    options: {
        month: null,
        category: null
    }
};

const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        setExpenses(state, action) {
            state.expenses = action.payload
        },
        setOptions(state, action) {
            const { optionName, optionValue } = action.payload;

            state.options[optionName] = optionValue;
        }
    }
});

export const { setExpenses, setOptions } = expensesSlice.actions;

export const store = configureStore({
    reducer: {
        expenses: expensesSlice.reducer
    }
});
