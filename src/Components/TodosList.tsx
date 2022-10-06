import { Todo } from "../modals/Todo"
import TodoItem from "./TodoItem"

interface Props {
    todos: Todo[],
    removeTodoFromTodos: (id: string) => void,
    setTodoState: (id: string) => void,
}


const TodosList: React.FC<Props> = props => {
    return (
        <div>
            {props.todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} removeTodoFromTodos={props.removeTodoFromTodos} setTodoState={props.setTodoState} />
            })}
        </div>
    )
}

export default TodosList