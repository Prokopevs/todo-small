import React from "react"
import Filters from "./components/Filters"
import TodoInputForm from "./components/TodoInputForm"
import TodoList from "./components/TodoList"

function App() {
    return (
        <div className="App">
            <div className="container">
                <TodoInputForm />
                <Filters />
                <TodoList />      
            </div> 
        </div>
    )
}

export default App
