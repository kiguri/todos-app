import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo } from '../todos/todosSlice';
import { toggleFilters } from './filtersSlice';

import './form.scss'

const Form = ({ todoText, setTodoText, currentId, setCurrentId }) => {

    const dispatch = useDispatch()
    const todo = useSelector(state => currentId ? state.todos.find(todo => todo.id === currentId) : null)

    useEffect(() => {
        if(todo) {
            setTodoText(todo.text)
        }
    }, [todo])

    const onChange = e => setTodoText(e.target.value)

    const onSubmit = e => {
        e.preventDefault()

        if (!todoText.trim()) {
            return
        }
        if (!currentId) {
            dispatch(addTodo(todoText))
        } else {
            dispatch(editTodo({
                id: currentId,
                text: todoText
            }))
        }

        setCurrentId(null)
        setTodoText('')
    }

    const onHandleFilter = e => {
        dispatch(toggleFilters(e.target.value))
    }

    return (
        <div className='form-container'>
            <form onSubmit={onSubmit}>
                <input
                    value={todoText}
                    onChange={onChange}
                    type='text'
                    className='todo-input'/>
                <button
                    type='submit'
                    className='todo-button'>
                    <i className='fas fa-plus-square' />
                </button>

                <div className='select-wrap'>
                    <select onChange={onHandleFilter} name='todos' className='filter-todo'>
                        <option value='all'>All</option>
                        <option value='active'>Active</option>
                        <option value='completed'>Completed</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Form;