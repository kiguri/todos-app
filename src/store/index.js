import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'

import todosSlice from '../components/features/todos/todosSlice'
import filtersSlice from '../components/features/form/filtersSlice'

const reducer = combineReducers({
    todos: todosSlice,
    filters: filtersSlice
})

const store = configureStore({
    reducer
})

export default store;

