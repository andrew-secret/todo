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
import * as firebase from 'firebase'

const todosStore = JSON.parse(localStorage.getItem('todos')) || [];

class App extends Component {
    state = {
        todos: todosStore,
        date: new Date(),
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
        localStorage.setItem('todos', JSON.stringify(updatedTodos))

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
        const updatedTodos = removeTodo(this.state.todos, id)
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
        this.setState({
            todos: updatedTodos,
        })
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
        const rootRef = firebase.database().ref()
        rootRef.set({ todos: todosStore})
        .then(function() {
            return rootRef.once("value")
        })
        .then(function(snapshot) {
            const data = snapshot.val()
            console.log('data', data)
            // data is { "name": "Ada", "age": 36 }
            // data.name === "Ada"
            // data.age === 36
        });
    }

    tick = () => {
        this.setState({
            date: new Date()
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
                    handleSubmit={submitHandler}
                    date={this.state.date}/>
                <TodoList
                    handleToggle={this.handleToggle}
                    todos={this.state.todos}
                    handleRemove={this.handleRemove}/>
            </div>
        );
    }
}

export default App
