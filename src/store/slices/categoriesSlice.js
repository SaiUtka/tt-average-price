import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {getCategoriesRequest} from "../../services";

const getCategories = createAsyncThunk(
    'categories/getCategories',
    async function (_, {rejectWithValue}) {
        try {
            const response = await getCategoriesRequest();
            if (!response.ok) {
                throw new Error('Server Error');
            }
            return response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        status: null,
        errors: null
    },
    reducers: {},
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.status = 'pending';
            state.errors = null;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.errors = null;
            state.status = 'resolved';
            state.categories = action.payload;
        },
        [getCategories.rejected]: (state, action) => {
            state.errors = action.payload;
            state.status = 'rejected';
        }
    }
});

const {reducer: categoriesReducer, actions: {}} = categoriesSlice;

export {categoriesReducer, getCategories};