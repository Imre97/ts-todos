import classes from './NewTodo.module.css'


interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: React.FormEvent) => void
}

const NewTodo: React.FC<Props> = props => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setTodo(event.target.value)
    }

    return (
        <form className={classes['todo-form']} onSubmit={props.handleSubmit}>
            <div className={classes['todo-form__box']}>
                <input type='text' value={props.todo} onChange={handleChange} placeholder='todo text' />
                <button className={classes['form-button']}>Add</button>
            </div>
        </form>
    )
}
export default NewTodo