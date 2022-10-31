import React from "react"
import { useAppDispatch } from "../hooks"
import { addTodo, fetchPostItem } from "../store/redusers/todoSlice"
import { pumpkin } from "../pictures"


const TodoInputForm: React.FC = () => {
    const [text, setText] = React.useState("")
    const dispatch = useAppDispatch()

    const handleAction = () => {
        if (text.trim().length) {
            const obj = {
                text: text,
                id: new Date().toISOString(),
                completed: false,
            }
            dispatch(fetchPostItem(obj))
            dispatch(addTodo(obj))
            setText("")
        }
    }

    const handleKey = (event: any) => {
        if (event.key === "Enter") handleAction()
    }

    return (
        <>
            <div className="form__header">
                <h1 className="form__header_text">Todos</h1>
                <img className="todo__header_img" src={String(pumpkin)}></img>
            </div>
            <div className="form">
                <input
                    className="form__input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={handleKey}
                    placeholder="What needs to be done"
                />
                <button className="form__button" onClick={handleAction}>
                    Add todo
                </button>
            </div>
        </>
    )
}

export default TodoInputForm
