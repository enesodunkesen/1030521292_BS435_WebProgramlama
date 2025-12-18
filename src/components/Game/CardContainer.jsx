import React from 'react';
import ImageCard from './ImageCard';
import './CardContainer.css';

function CardContainer({ images, onChoose, disabled, revealedCards }) {
    return (
        <div className="card-container">
            <div className="cards-wrapper">
                {images.map((image) => (
                    <ImageCard
                        key={image.id}
                        image={image}
                        onChoose={onChoose}
                        disabled={disabled}
                        revealed={revealedCards.includes(image.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardContainer;
