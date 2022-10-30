import React from "react"
import { useAppDispatch } from "../hooks"
import { IList } from "../models/IList"
import { removeTodo, toggleComplete } from "../store/redusers/todoSlice"
import { close } from "../pictures"

const TodoItem: React.FC<IList> = ({ id, text, completed }) => {
    const dispatch = useAppDispatch()

    return (
        <div className="todo__item">
            {/* <input
                type="checkbox"
                className="todo__item_input"
                checked={completed}
                onChange={() => dispatch(toggleComplete(id))}
            /> */}

            {/* <div>
                <input type="checkbox" id="check1" />
                <label htmlFor="check1">
                    <div>
                        <i className="fa fa-check"></i>
                    </div>{" "}
                    I like Codepen!
                </label>
            </div> */}

            <p className="todo__item_text">{text}</p>

            <img
                className="todo__item_img"
                src={String(close)}
                onClick={() => dispatch(removeTodo(id))}
            ></img>
        </div>
    )
}

export default TodoItem
