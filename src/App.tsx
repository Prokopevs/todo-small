import React from "react"
import Filters from "./components/Filters"
import TodoInputForm from "./components/TodoInputForm"
import TodoList from "./components/TodoList"

function App() {
    return (
        <div className="App">
            <TodoInputForm />
            <TodoList />
            <Filters />
        </div>
    )
}

export default App
