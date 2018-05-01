import React from 'react'

const TodoListing = (props) => (
    <li>
        <p>{props.todo.title}</p>
        <button onClick={props.redirect}>Details</button>
    </li>
)

export default TodoListing
