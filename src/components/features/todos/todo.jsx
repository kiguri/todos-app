import React from 'react';

import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from './todosSlice';

import './todo.scss'

const Todo = ({ todo, setCurrentId }) => {
    const dispatch = useDispatch()

    const onRemove = () => {
        dispatch(removeTodo(todo))
    }

    const onToggle = () => {
        dispatch(toggleTodo(todo))
    }

    const onEdit = () => {
        setCurrentId(todo.id)
    }

    return (
        <div className={`todo ${todo.completed ? 'completed' : ''}`}>
            <li className='todo-item'>
                {todo.text}
            </li>
            <button onClick={onToggle} className='complete-btn'>
                <i className='fas fa-check' />
            </button>
            <button onClick={onEdit} className='edit-btn'>
                <i className='fas fa-edit' />
            </button>
            <button onClick={onRemove} className='trash-btn'>
                <i className='fas fa-trash' />
            </button>
        </div>
    );
};

export default Todo;