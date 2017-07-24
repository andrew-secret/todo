import React from 'react'
import styles from './Button.css'

export const Button = (props) => {
    return (
        <button 
            className={styles.buttonStyle}
            type="submit"
            onClick={props.handleClick}>
            {props.label}
        </button>
    )
}