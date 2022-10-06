import { Todo } from "../modals/Todo"
import classes from './TodoItem.module.css'

interface Props {
    todo: Todo,
    removeTodoFromTodos: (id: string) => void,
    setTodoState: (id: string) => void
}


const TodoItem: React.FC<Props> = (props) => {
    return (
        <div className={classes['item-box']}>
            <div style={{ textDecoration: props.todo.done ? 'line-through' : '' }}>{props.todo.todo}</div>
            <div className={classes['item-buttons']}>
                <button onClick={() => props.removeTodoFromTodos(props.todo.id)}>Delete</button>
                <button onClick={() => props.setTodoState(props.todo.id)}>Done</button>
            </div>
        </div>
    )
}

export default TodoItem