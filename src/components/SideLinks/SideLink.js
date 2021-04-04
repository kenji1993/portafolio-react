import React from 'react'


const SideLink = ({href, icon, style, title}) => {
    return (
        <>
          <li>
              <a href={href}
                 title={title}
                 >
                  <i className={icon} style={style}></i>
              </a>
          </li>  
        </>
    )
}

export default SideLink
