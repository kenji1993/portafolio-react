import React from 'react'
import Card from '../../components/Cards/Card'
import proyectos from './proyectos'

const Home = () => {
    return (
            <>
                {
                    proyectos.map(({id, title, image, description, url, github}) => 
                            <Card
                                key={id}
                                title={title}
                                image={image}
                                url={url}
                                description={description}
                                github={github}
                            />
                    )
                }
            </>        
    )
}

export default Home
