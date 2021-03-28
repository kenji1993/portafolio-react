import React from 'react'
import Technology from './Technology'
import tecnologias from './tecnologias'


const Technologies = () => {
    return (
        <ul className="row">
            {
                tecnologias.map(({id, title, logo, color}) => 
                <div key={id}>
                    <Technology 
                        title={title}
                        logo={logo}
                    />
                </div>
                )
            }
        </ul>  
    )
}

export default Technologies
