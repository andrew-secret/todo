import React, {Component} from 'react'
import '../App.css'
import {Header} from './Header/Header'
import {TodoList} from './TodoList/TodoList'
import {addTodo,
        generatedId,
        findById,
        toggleTodo,
        updateTodo,
        removeTodo} from '../lib/todoHelpers'


class App extends Component {
    state = {
        todos: [
            {id: 1, task: 'go to toilet and poo', isComplete: true},
            {id: 2, task: 'wash my hands after that', isComplete: false},
            {id: 3, task: 'buy some peanuts', isComplete: false}
        ],
        currentTodo: ''
    }

    handleToggle = (id) => {
        const todo = findById(id, this.state.todos)
        const toggled = toggleTodo(todo)
        const updatedTodos = updateTodo(this.state.todos, toggled)

        this.setState({todos: updatedTodos})
    }

    handleInputChange = (e) => {
        this.setState({
            currentTodo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newId = generatedId()
        const newTodo = {id: newId, task: this.state.currentTodo, isComplete: false}
        const updatedTodos = addTodo(this.state.todos, newTodo)

        this.setState({
            todos: updatedTodos,
            currentTodo: '',
            errorMessage: ''
        })
    }

    handleEmptySubmit = (e) => {
        e.preventDefault()

        this.setState({
            errorMessage: 'Du musst auch was hinschreiben!'
        })
    }

    handleRemove = (id, e) => {
        e.preventDefault()
        // console.log(this.id)
        const updatedTodos = removeTodo(this.state.todos, id)

        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
        return (
            <div className="App">
                {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
                <Header 
                    handleInputChange={this.handleInputChange}
                    currentTodo={this.state.currentTodo}
                    handleSubmit={submitHandler}/>
                <TodoList
                    handleToggle={this.handleToggle}
                    todos={this.state.todos}
                    handleRemove={this.handleRemove}/>
            </div>
        );
    }
}

export default App
