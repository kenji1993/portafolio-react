import React from 'react'
import Card from './Card'
import cards from './CardOptions'
import './cards.css'

const Cards = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                {
                    cards.map( ({id, title, image, url, description, github}) => 
                        <div className="col-4" key={id}>
                            <Card
                                title={title}
                                image={image}
                                description={description}
                                url={url}
                                github={github}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cards
