import React from 'react'

const Technology = ({logo, title, style}) => {
    return (
        <li className="col">
            <i className={logo} title={title} style={style}/>
        </li>
    )
}

export default Technology
