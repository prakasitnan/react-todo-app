import React from "react"
import { v4 as uuidv4 } from "uuid";
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {

    /***************** 
     * set init state
    *****************/
    state = {
        todos: [],
    };

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //     .then(response => response.json())
    //     .then(data => this.setState({ todos: data}));
    // }

    /***********************
     * handle function
     * raising and handling event throng child-component
     ***********************/
    handleChange = (id) => {
        this.setState(pervState => ({
            todos: pervState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo;
            }),
        }));
    }

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
    };

    /****************************
     * init method
     ****************************/
    componentDidMount() {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
    }

    /****************************
     * update method
     ***************************/
    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    }

    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };

    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            }),
        })
    }

    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodosList 
                        todos={this.state.todos} 
                        handleChangeProps={this.handleChange} 
                        deleteTodoProps={this.delTodo}
                        setUpdate={this.setUpdate}
                    />
                </div>
            </div>
        )
    }
}

export default TodoContainer