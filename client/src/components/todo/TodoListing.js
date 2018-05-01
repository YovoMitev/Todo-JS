import React from 'react'

const TodoListing = (props) => (
    <li>
        {props.todo.completed ? <p className='Pcompleted'>{props.todo.title}</p> : <p>{props.todo.title}</p>}

        <button onClick={props.redirect}>Details</button>

        {props.todo.completed ? 'Completed' : <button onClick={props.completeTodo}>Complete</button>}

    </li>
)

export default TodoListing
