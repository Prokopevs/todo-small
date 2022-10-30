import React from "react"
import { useAppDispatch } from "../hooks"
import { addTodo } from "../store/redusers/todoSlice"

const TodoInputForm: React.FC = () => {
    const [text, setText] = React.useState("")
    const dispatch = useAppDispatch()

    const handleAction = () => {
        if (text.trim().length) {
            dispatch(addTodo(text));
            setText("")
        }
    }

    const handleKey = (event: any) => {
        if (event.key === "Enter") handleAction()
    }

    return (
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
    )
}

export default TodoInputForm
