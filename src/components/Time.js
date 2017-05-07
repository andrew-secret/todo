import React from 'react'
import '../App.css'

export const Time = (props) => {
    return (
        <header className="todoApp-header">
            <h1>
                Es ist genau {new Date().toLocaleTimeString()}
            </h1>
        </header>
    )
}