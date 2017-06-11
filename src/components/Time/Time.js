import React from 'react'

export const Time = (props) => {
    return (
        <header className="time">
            <span>
                Es ist genau {new Date().toLocaleTimeString()}
            </span>
        </header>
    )
}