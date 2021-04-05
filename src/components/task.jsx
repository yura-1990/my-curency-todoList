import './scss/task.scss'

function Task({ id, text, complated, changeStatus, deleteTask }) {
    return (
        <li className="task">
            <span className="task__num">{id+1}</span>
            <p className={complated ? 'completed' : ''}>{text}</p>
            <input 
                className="task__input"
                onChange={() => changeStatus(id)}
                type="checkbox"
                checked={complated}
            />
            <button className="task__btn" onClick={() => deleteTask(id)}>Delete</button>
        </li>
    )
}

export default Task