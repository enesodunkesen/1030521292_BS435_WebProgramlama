import React, { useState, useEffect } from 'react';
import { GameHeader, CardContainer } from '../components/Game';
import { getRandomImages } from '../data/imageData';
import './Game.css';

function Game({ playerName, mode, onBackToHome }) {
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(1);
    const [currentImages, setCurrentImages] = useState([]);
    const [revealedCards, setRevealedCards] = useState([]);
    const [roundComplete, setRoundComplete] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const TOTAL_ROUNDS = 3;
    const CARDS_PER_ROUND = 3;
    useEffect(() => {
        loadNewRound();
    }, []);

    const loadNewRound = () => {
        const images = getRandomImages(mode, CARDS_PER_ROUND);
        
        const hasAI = images.some(img => img.isAI);
        if (!hasAI && images.length > 0) {
            const allImages = getRandomImages(mode, 10);
            const aiImage = allImages.find(img => img.isAI);
            if (aiImage) {
                images[0] = aiImage;
            }
        }
        const shuffled = images.sort(() => Math.random() - 0.5);
        setCurrentImages(shuffled);
        setRevealedCards([]);
        setRoundComplete(false);
        setFeedback(null);
    };

    const handleChoose = (selectedImage) => {
        if (roundComplete) return;
        setRevealedCards(currentImages.map(img => img.id));
        setRoundComplete(true);

        if (selectedImage.isAI) {
            const points = mode === 'hard' ? 20 : 10;
            setScore(prev => prev + points);
            setFeedback({
                type: 'correct',
                message: `Correct! +${points} points`
            });
        } else {
            setFeedback({
                type: 'wrong',
                message: 'Wrong! That was a real photo.'
            });
        }
    };

    const handleNextRound = () => {
        if (round >= TOTAL_ROUNDS) {
            setGameOver(true);
        } else {
            setRound(prev => prev + 1);
            loadNewRound();
        }
    };

    const handlePlayAgain = () => {
        setScore(0);
        setRound(1);
        setGameOver(false);
        loadNewRound();
    };

    if (gameOver) {
        return (
            <div className="game-page">
                <div className="game-over-container">
                    <h1 className="game-over-title">Game Over!</h1>
                    <div className="final-score">
                        <span className="score-label">Final Score</span>
                        <span className="score-value">{score}</span>
                    </div>
                    <p className="player-result">
                        Great job, <span className="player-highlight">{playerName}</span>!
                    </p>
                    <div className="game-over-buttons">
                        <button className="action-button play-again" onClick={handlePlayAgain}>
                            <span>Play Again</span>
                        </button>
                        <button className="action-button back-home" onClick={onBackToHome}>
                            <span>Back to Home</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="game-page">
            <GameHeader 
                playerName={playerName} 
                mode={mode} 
                score={score} 
                round={`${round}/${TOTAL_ROUNDS}`} 
            />
            
            <p className="game-instruction">
                Select the image you think is AI-generated
            </p>
            
            <CardContainer 
                images={currentImages}
                onChoose={handleChoose}
                disabled={roundComplete}
                revealedCards={revealedCards}
            />

            {feedback && (
                <div className={`feedback-message ${feedback.type}`}>
                    {feedback.message}
                </div>
            )}

            {roundComplete && !gameOver && (
                <button className="next-round-button" onClick={handleNextRound}>
                    <span>{round >= TOTAL_ROUNDS ? 'See Results' : 'Next Round'}</span>
                </button>
            )}
        </div>
    );
}

export default Game;
