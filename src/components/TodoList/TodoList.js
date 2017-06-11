import React from 'react'
import {TodoItem} from '../TodoItem/TodoItem'

export const TodoList = (props) => {
    return (
        <div className="todoList">
            <ul>
                {props.todos.map(todo => <TodoItem
                    handleToggle={props.handleToggle}
                    handleRemove={props.handleRemove}
                    key={todo.key}
                    {...todo}/>)}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
}
