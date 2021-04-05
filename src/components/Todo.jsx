import React, { useState, useRef } from 'react'
import './scss/todo.scss'
import Task from "./task";

function Todo() {
    const [todoLists, setTodolists] = useState([
        {
            text: "learn React.js",
            complated: false
        },
        {
            text: "Learn PHP",
            complated: true
        }

    ])

    const formText = useRef()
    const getInfoOnSubmit = (e) => {
        e.preventDefault()
        if (formText.current.value === '') {
            alert('You should add any task!')
        } else {
            const newTask = {
                text: formText.current.value,
                complated: false
            }

            const newList = [...todoLists, newTask]
            setTodolists(newList)
        }

        e.currentTarget.reset()
    }

    const deleteTask = (id) => {
        if (window.confirm('Do you really delete this task?')) {
            const newTaskList = todoLists.filter((_, i) => i !== id)
            setTodolists(newTaskList)
        }
    }

    const changeStatus = (id) => {
        const newTaskList = [...todoLists]
        newTaskList[id].complated = newTaskList[id].complated === false ? true : false
        setTodolists(newTaskList)
    }

    return (
        <main className="todo">
            <form className="todo__form" onSubmit={getInfoOnSubmit}>
                <input type="text" className="todo__input" ref={formText} />
                <button className="todo__btn">Add</button>
            </form>
            <ul className="todo__tasks">
                {todoLists.map(({ text, complated }, index) =>
                    <Task
                        key={index}
                        id={index}
                        text={text}
                        complated={complated}
                        changeStatus={changeStatus}
                        deleteTask={deleteTask}
                    />
                )}
            </ul>
        </main>
    )
}

export default Todo
