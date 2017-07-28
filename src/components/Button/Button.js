import React from 'react'
import styles from './Button.css'

export const Button = (props) => {

    return (
        <button 
            className={styles.buttonStyle}
            type={props.type}
            onClick={props.onClick}>
            {props.label}
        </button>
    )
}