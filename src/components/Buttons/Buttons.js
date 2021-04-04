import React from 'react'
import Button from './Button'
import './button.css'

const sections = [
    {
        id: 1,
        section: 'Proyectos personales',
        route: '/',
    },
    {
        id: 2,
        section: 'Dibujos CSS',
        route: '/css',
    },
    {
        id: 3,
        section: 'Frontend Mentor',
        route: '/challenges',
    }
]

const Buttons = () => {
    return (
        <div className="row" >
            {

                sections.map(({id, section, route}) => (
                    <div className="col-12 col-md-4" key={id}>
                        <Button
                            section={section}
                            route={route}
                        />
                    </div>
                    
                ))
            }
        </div>
    )
}

export default Buttons
