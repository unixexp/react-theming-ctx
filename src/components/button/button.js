import React from "react"
import "./button.scss"

const Button = ({ theme, onClick, children }) => {

    return (
        <button
                onClick={onClick}
                className={`btn ${theme}`}>
            {children}
        </button>
    )
}

export default Button