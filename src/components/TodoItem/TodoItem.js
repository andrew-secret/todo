import React from 'react'
import styles from './TodoItem.css'
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
    const handleToggle = partial(props.handleToggle, props.id)
    const removeTodo = partial(props.handleRemove, props.id)
    return (
        <li className={styles.TodoItem}>
            <input
                type="checkbox"
                onChange={handleToggle}
                checked={props.isComplete} />
            {props.task}
            {props.isComplete === true ? (
                <input
                    type="button"
                    value="remove"
                    onClick={removeTodo}/>
            ) : (
                <input
                    type="button"
                    value="edit" />
            )}
        </li>
    )
}

TodoItem.propTypes = {
    isComplete: React.PropTypes.bool,
    task: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired
}
