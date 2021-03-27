import React from 'react'
import PropTypes from 'prop-types'

const Card = ({image, title, description, url, github}) => {
    return (
        <div className="card">
            <div className="overflow">
                <img src={image} alt={image}/>
            </div>
            <div className="card-body">
                <h4 className="card-title"> {title} </h4>
                <p> {description} </p>
                <a href={url} className="btn btn-outline-secondary"> Proyecto </a>
                <a href={github} className="btn btn-outline-secondary"> Github </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    github: PropTypes.string,
}

export default Card
