import React from 'react'
import { useSelector } from 'react-redux';
import './todoList.scss'
import Todo from './todo';

const TodoList = ({ setCurrentId }) => {
    const todos = useSelector(state => state.todos)
    const filter = useSelector(state => state.filters)

    let filteredTodos = todos
    switch (filter) {
        case 'active':
            filteredTodos = todos.filter(todo => todo.completed === false)
            break
        case 'completed':
            filteredTodos = todos.filter(todo => todo.completed === true)
            break
        default:
            filteredTodos = todos;
            break;
    }

    return (
        <div className="todo-container">
            <ul className="todo-list">
                { filteredTodos.map(todo => (
                    <Todo key={todo.id} todo={todo}  setCurrentId={setCurrentId}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;