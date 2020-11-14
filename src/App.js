import React, { useState } from 'react'

import Form from './components/features/form/todoForm'
import TodoList from './components/features/todos/todoList'

function App() {
    const [todoText, setTodoText] = useState('')
    const [currentId, setCurrentId] = useState(null)
    return (
        <div>
            <header>
                <h1>Todos list</h1>
            </header>

            <Form
                todoText={todoText}
                setTodoText={setTodoText}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />
            <TodoList
                setTodoText={setTodoText}
                setCurrentId={setCurrentId}
            />

        </div>
    )
}

export default App;
