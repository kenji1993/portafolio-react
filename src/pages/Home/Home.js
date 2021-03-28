import React from 'react'
import Card from '../../components/Cards/Card'
import proyectos from './proyectos'

const Home = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                {
                    proyectos.map(({id, title, image, description, url, github}) => 
                        <div className="col-4" key={id}>
                            <Card
                                title={title}
                                image={image}
                                url={url}
                                description={description}
                                github={github}
                            />
                        </div>
                    )
                }
            </div>        
        </div>
    )
}

export default Home
