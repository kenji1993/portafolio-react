import React from 'react'

const Technology = ({logo, title}) => {
    return (
        <li>
            <i className={logo} title={title}/>
        </li>
    )
}

export default Technology
