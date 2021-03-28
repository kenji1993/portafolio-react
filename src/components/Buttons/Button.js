import React from 'react'
import { Link } from 'react-router-dom'


const Button = ({route, section}) => {
    return (
        <button type="button" className="btn btn-info btn-block">
            <Link to={route}>{section}</Link>
        </button>
    )
}

export default Button
