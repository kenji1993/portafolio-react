import React from 'react'
import Card from '../../components/Cards/Card'
import dibujos from './dibujos'

const Css = () => {
    return (
        <>
            {
                dibujos.map(({id, title, image, description, url, github}) => 
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

export default Css
