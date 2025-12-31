import React, { useState, useEffect } from 'react';
import { GameHeader, CardContainer } from '../components/Game';
import { getRandomImages, categoryHints } from '../data/imageData';
import './Game.css';

function Game({ playerName, mode, category, onBackToHome }) {
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(1);
    const [currentImages, setCurrentImages] = useState([]);
    const [revealedCards, setRevealedCards] = useState([]);
    const [roundComplete, setRoundComplete] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [secondChance, setSecondChance] = useState(false);
    const [eliminatedCard, setEliminatedCard] = useState(null);
    const [roundResult, setRoundResult] = useState(null);

    const CARDS_PER_ROUND = 3;
    useEffect(() => {
        loadNewRound();
    }, []);

    const loadNewRound = () => {
        const images = getRandomImages(mode, CARDS_PER_ROUND, category);
        
        const hasAI = images.some(img => img.isAI);
        if (!hasAI && images.length > 0) {
            const allImages = getRandomImages(mode, 10, category);
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
        setSecondChance(false);
        setEliminatedCard(null);
        setRoundResult(null);
    };

    const handleChoose = (selectedImage) => {
        if (roundComplete) return;

        if (selectedImage.isAI) {
            setRevealedCards(currentImages.map(img => img.id));
            setRoundComplete(true);
            const points = secondChance ? (mode === 'hard' ? 10 : 5) : (mode === 'hard' ? 20 : 10);
            setScore(prev => prev + points);
            setFeedback({
                type: 'correct',
                message: secondChance ? `Correct on second try! +${points} points` : `Correct! +${points} points`
            });
            setRoundResult({
                success: true,
                correctImage: selectedImage
            });
        } else {
            if (!secondChance) {
                setSecondChance(true);
                setEliminatedCard(selectedImage.id);
                setRevealedCards([selectedImage.id]);
                setFeedback({
                    type: 'secondChance',
                    message: categoryHints[category] || 'Hint: Look more carefully at the details!'
                });
            } else {
                setRevealedCards(currentImages.map(img => img.id));
                setRoundComplete(true);
                setFeedback({
                    type: 'wrong',
                    message: 'Wrong again! The AI image has been revealed.'
                });
                const aiImage = currentImages.find(img => img.isAI);
                setRoundResult({
                    success: false,
                    correctImage: aiImage
                });
            }
        }
    };

    const handleNextRound = () => {
        setRound(prev => prev + 1);
        loadNewRound();
    };

    const handleShowResults = () => {
        setGameOver(true);
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
                        <br />
                        <span className="rounds-played">Rounds Played: {round}</span>
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
                round={`Round ${round}`} 
            />
            
            <p className="game-instruction">
                Select the image you think is AI-generated
            </p>
            
            <CardContainer 
                images={currentImages}
                onChoose={handleChoose}
                disabled={roundComplete}
                revealedCards={revealedCards}
                eliminatedCard={eliminatedCard}
            />

            {feedback && (
                <div className={`feedback-message ${feedback.type}`}>
                    {feedback.message}
                </div>
            )}

            {roundResult && (
                <div className={`round-result ${roundResult.success ? 'success' : 'failure'}`}>
                    <div className="round-result-buttons">
                        <button className="next-round-button" onClick={handleNextRound}>
                            <span>Start Next Round</span>
                        </button>
                        <button className="next-round-button show-results" onClick={handleShowResults}>
                            <span>Show Results</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Game;
