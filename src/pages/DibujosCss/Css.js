import React from 'react'
import Card from '../../components/Cards/Card'
import dibujos from './dibujos'

const Css = () => {
    return (
        <div className="container d-flex justify-content-center">
        <div className="row">
            {
                dibujos.map(({id, title, image, description, url, github}) => 
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

export default Css
