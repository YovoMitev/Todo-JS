import React from 'react'
import Input from '../common/Input'

const CreateTodoForm = (props) => (
        <form>
            <Input
            name='title'
            type='text'
            placeholder='Title'
            value={props.todo.title}
            onChange={props.onChange}
            />
            <Input
                name='body'
                type='text'
                placeholder='Body'
                value={props.todo.body}
                onChange={props.onChange}
            />
            <input type ='submit' onClick={props.onSave} value='Create'/>
        </form>
)

export default CreateTodoForm
