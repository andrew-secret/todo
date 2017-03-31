import React from 'react'
import '../App.css'


export const AddTodo = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text"
                placeholder="add your to do!"
                onChange={props.handleInputChange}
                value={props.currentTodo}/>
            <input
                type="submit"
                value="Add"
            />
        </form>
    )
}

AddTodo.propTypes = {
    currentTodo: React.PropTypes.string,
    handleInputChange: React.PropTypes.func,
    handleSubmit: React.PropTypes.func
}
