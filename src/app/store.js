import { createSlice, configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
    availableMonths: [],
    availableCategories: [],
    options: {
        category: null,
        sorting: null
    }
};

const expensesAPI = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '/api'
    }),
    tagTypes: ['Expenses'],
    endpoints: (builder) => ({
        getExpenses: builder.query({
            query: (monthID) => `expenses/${monthID}`,
            providesTags: ['Expenses']
        }),
        getMonths: builder.query({
            query: () => 'months',
            providesTags: ['Months']
        }),
        getCategories: builder.query({
            query: () => 'categories',
            providesTags: ['Categories']
        })
    })
});

export const { useGetExpensesQuery, useGetMonthsQuery, useGetCategoriesQuery } = expensesAPI;

const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        setAvailableMonths(state, action) {
            state.availableMonths = action.payload;
        },
        setAvailableCategories(state, action) {
            state.availableCategories = action.payload;
        },
        setOptions(state, action) {
            const { optionName, optionValue } = action.payload;

            state.options[optionName] = optionValue;
        },
        resetOptions(state) {
            state.options = initialState.options;
        }
    }
});

export const { setAvailableMonths, setAvailableCategories, setOptions, resetOptions } = expensesSlice.actions;

export const store = configureStore({
    reducer: {
        [expensesAPI.reducerPath]: expensesAPI.reducer,
        expenses: expensesSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(expensesAPI.middleware)
});
