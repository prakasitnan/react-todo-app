import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router} from 'react-router-dom'

// const element = <h1>Hello from Create React App</h1>
// import TodoContainer from "./components/TodoContainer"
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css'

// import TodoContainer from './classBased/components/TodoContainer'
// import './classBased/App.css'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
     </React.StrictMode>
    ,document.getElementById("root"))