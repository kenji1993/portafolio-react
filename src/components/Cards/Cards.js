import React from 'react'
import Card from './Card'
import cards from './CardOptions'

const Cards = () => {
    return (
            <>
                {
                    cards.map( ({id, title, image, url, description, github}) => 
                            <Card
                                key={id}
                                title={title}
                                image={image}
                                description={description}
                                url={url}
                                github={github}
                                style={styles.card}
                            />
                    )
                }
            </>
    )
}


export default Cards
