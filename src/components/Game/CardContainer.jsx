import React from 'react';
import ImageCard from './ImageCard';
import './CardContainer.css';

function CardContainer({ images, onChoose, disabled, revealedCards, eliminatedCard }) {
    return (
        <div className="card-container">
            <div className="cards-wrapper">
                {images.map((image) => (
                    <ImageCard
                        key={image.id}
                        image={image}
                        onChoose={onChoose}
                        disabled={disabled || image.id === eliminatedCard}
                        revealed={revealedCards.includes(image.id)}
                        eliminated={image.id === eliminatedCard}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardContainer;
