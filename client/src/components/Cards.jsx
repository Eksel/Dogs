import React from 'react';
import './card.css'

const Cards = ({dog}) => {
    return (
        <div className='card'>
            <img src={dog.image} alt="" />
            <div className="informations">
                <h3>Imie:</h3>
                <p>{dog.name}</p>
                <h3>Płeć: </h3>
                <p>{dog.gender}</p>
                <h3>Rasa:</h3>
                <p>{dog.breedName}</p>
            </div>
            
            
        </div>
    );
}

export default Cards;
