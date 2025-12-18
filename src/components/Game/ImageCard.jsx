import React, { useState } from 'react';
import './ImageCard.css';

function ImageCard({ image, onChoose, disabled, revealed, isCorrect }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleChoose = () => {
        if (!disabled) {
            onChoose(image);
        }
    };

    const getCardClass = () => {
        let className = 'image-card';
        if (revealed) {
            className += image.isAI ? ' revealed-ai' : ' revealed-real';
        }
        if (disabled) {
            className += ' disabled';
        }
        return className;
    };

    return (
        <div className={getCardClass()}>
            <div className="card-inner">
                <div className="card-image-container">
                    {!imageLoaded && !imageError && (
                        <div className="image-placeholder">
                            <span>Loading...</span>
                        </div>
                    )}
                    {imageError ? (
                        <div className="image-placeholder error">
                            <span>Image not found</span>
                        </div>
                    ) : (
                        <img
                            src={image.src}
                            alt={image.alt || 'Game image'}
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageError(true)}
                            style={{ display: imageLoaded ? 'block' : 'none' }}
                        />
                    )}
                </div>
                
                {revealed && (
                    <div className="card-result">
                        <span className={image.isAI ? 'ai-label' : 'real-label'}>
                            {image.isAI ? '🤖 AI Generated' : '📷 Real Photo'}
                        </span>
                    </div>
                )}
                
                <button 
                    className="choose-button"
                    onClick={handleChoose}
                    disabled={disabled}
                >
                    <span>Choose</span>
                </button>
            </div>
        </div>
    );
}

export default ImageCard;
