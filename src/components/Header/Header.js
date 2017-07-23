import React from 'react'
import {AddTodo} from '../AddTodo/AddTodo'
import {Time} from '../Time/Time'
import styles from './Header.css'


export const Header = (props) => {
    return (
        <header className={ styles.Header }>
            <h1 className={ styles.headline}>
                Todo-list
            </h1>
        <AddTodo
            handleInputChange={props.handleInputChange}
            handleSubmit={props.handleSubmit}/>
        <Time date={props.date}/>
        </header>
    )
}
