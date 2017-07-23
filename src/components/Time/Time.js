import React from 'react'

export const Time = (props) => {
    return (
        <header className="time">
            <span>
                Es ist genau {props.date.toLocaleTimeString()}
            </span>
        </header>
    )
}