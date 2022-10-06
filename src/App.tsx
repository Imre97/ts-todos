import { useState } from 'react'
import NewTodo from './Components/NewTodo';
import TodosList from './Components/TodosList';
import { Todo } from './modals/Todo'

import classes from './App.module.css'




function App() {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if(!todo) {
      return
    }

    setTodos(prevTodos => {
      return [...prevTodos, {id: String(Math.ceil(Math.random() * 10000000)), todo: todo, done: false}]
    })

    setTodo('')
  }

  const removeTodoFromTodos = (id: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  const setTodoState = (id: string) => {
    let arr = [...todos]
    let index = arr.findIndex(obj => obj.id === id)
    arr[index].done = !arr[index].done
    setTodos(arr)
  }

  return (
    <div className={classes.container}>
      <header>
        <span>TS-Todos</span>
      </header>
      <NewTodo todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
      <TodosList todos={todos} removeTodoFromTodos={removeTodoFromTodos} setTodoState={setTodoState} />
    </div>
  );
}

export default App;
