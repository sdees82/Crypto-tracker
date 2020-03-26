import React from 'react';
import "./card.style.css";

const Card = ({imageurl, title, url, body, info, author}) => {
    return ( 
        <div className="card">
        <div className="image-container">
            <a href={url}><img src={imageurl} alt="News"/></a>
        </div>
            <div className="info-container">
            <a href={url} target="_blank" rel="noopener noreferrer">
            <h3>{title}</h3>
            </a>
                <p>{body}</p>
                <div className="source-container">
                <img className="source" src={author} alt="source"/>
                <p><strong>Source: {info}</strong></p>
                </div>
            </div>
        </div>
     );
}
 
export default Card;