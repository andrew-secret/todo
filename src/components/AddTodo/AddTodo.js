import React from 'react'
import styles from './AddTodo.css'

export const AddTodo = (props) => {
    return (
        <form
            className={styles.form}
            onSubmit={props.handleSubmit}>
            <input type="text"
                className={styles.input}
                placeholder="add your to do!"
                onChange={props.handleInputChange}
                value={props.currentTodo}/>
            <input
                className={styles.button}
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
