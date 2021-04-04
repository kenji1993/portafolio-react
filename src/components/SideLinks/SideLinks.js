import React from 'react'
import SideLink from './SideLink'
import contacto from './SideLinkOptions'
import './sideLinks.css'

const SideLinks = () => {
    return (
        <div className="contacto">
            <ul>
                {
                    contacto.map(({id, href, title, icon, style}) => 
                        <div key={id}>
                            <SideLink
                                title={title}
                                href={href}
                                icon={icon}
                                style={style}
                            />
                        </div>
                    )
                }
            </ul>
        </div>
    )
    }

export default SideLinks
