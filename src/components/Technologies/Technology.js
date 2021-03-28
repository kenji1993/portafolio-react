import React, { useState } from 'react'

const Technology = ({logo, title, style}) => {

    const [click, setClick] = useState(styles.li);

    const grow = () => {
        setClick(styles.liHover)
        setTimeout(() => setClick(styles.li), 2000)
    }

    return (
        <li className="col" style={click} onPointerOver={grow}>
            <i className={logo} title={title} style={style}/>
        </li>
    )
}

export default Technology

const styles = {
    li: {
        listStyle: 'none',
        transition: 'all 700ms ease',
    },
    liHover: {
        listStyle: 'none',
        transition: 'all 700ms ease',
        transform: 'scale(1.2)',
    }
}