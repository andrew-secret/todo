import React from 'react'
import styles from './TodoItem.css'
import {partial} from '../../lib/utils'
import {Button} from '../Button/Button'


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
                <Button
                    label="remove2"
                    type="button"
                    value="test"
                    onClick={removeTodo}/>
            ) : (
                <input
                    type="button"
                    value="edit" />
            )}
            <input
                type="button"
                value="test"
                onClick={removeTodo}/>

            <div className={styles.TodoExpandItem}>
                Test Pest!!
                <input
                    type="text"
                    placeholder="Type your description here..."/>
            </div>
        </li>
    )
}

TodoItem.propTypes = {
    isComplete: React.PropTypes.bool,
    task: React.PropTypes.string.isRequired,
    id: React.PropTypes.number.isRequired
}
