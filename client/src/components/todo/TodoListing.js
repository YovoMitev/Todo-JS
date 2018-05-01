import React from 'react'

const TodoListing = (props) => (
    <li className='list-group-item '>
        {props.todo.completed ? <div className='Pcompleted d-inline     '>{props.todo.title}</div> : <div className='d-inline'>{props.todo.title}</div>}

        <button className='btn btn-primary d-inline float-right m-1' onClick={props.redirect}> Details </button>

        {props.todo.completed ? '' : <button className='btn btn-success float-right m-1' onClick={props.completeTodo}> Complete </button>}
    </li>
)

export default TodoListing
