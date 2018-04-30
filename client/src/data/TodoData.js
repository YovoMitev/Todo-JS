import requester from './requester'

const BASE_URL = 'http://localhost:7070/todos'

//simple get request
function getTodos () {
  const serviceUrl = `${BASE_URL}/all`
  return requester.get(serviceUrl)
}

function creteTodo(todo){
    const serviceUtl = `${BASE_URL}/create`
    return requester.post(serviceUtl, todo)
}


export default {
    getTodos,
    creteTodo
}