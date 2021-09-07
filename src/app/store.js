import { createSlice, configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
    options: {
        month: null,
        category: null
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
        setOptions(state, action) {
            const { optionName, optionValue } = action.payload;

            state.options[optionName] = optionValue;
        }
    }
});

export const { setOptions } = expensesSlice.actions;

export const store = configureStore({
    reducer: {
        [expensesAPI.reducerPath]: expensesAPI.reducer,
        expenses: expensesSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(expensesAPI.middleware)
});
