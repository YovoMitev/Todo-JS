import React from 'react'
import Input from '../common/Input'

const DetailsTodoPage = (props) => (
  <form>
    <Input
      name='title'
      type='text'
      placeholder='Todo Title'
      value={props.todo.title}
      onChange={props.onChange}
    />
    <br></br>
    <Input
      name='body'
      size='80'
      type='text'
      placeholder='Todo Body'
      value={props.todo.body}
      onChange={props.onChange}
    />
    <br></br>
    <input type='submit' className='btn btn-danger' onClick={props.onDelete}  value='Delete'/>
    <input type='submit' className='btn btn-primary' onClick={props.onUpdate}  value='Update'/>
  </form>
)

export default DetailsTodoPage