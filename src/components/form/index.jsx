import React from 'react';

import './form.scss'

const Form = () => {
    return (
        <div className='form-container'>
            <form>
                <input type='text' className='todo-input'/>
                <button type='submit' className='todo-button'>
                    <i className='fas fa-plus-square' />
                </button>

                <div className='select-wrap'>
                    <select name='todos' className='filter-todo'>
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='uncompleted'>Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Form;