import React from 'react';
import './GameHeader.css';

function GameHeader({ playerName, mode, score, round }) {
    return (
        <div className="game-header">
            <div className="game-info">
                <div className="info-item">
                    <span className="info-label">Player:</span>
                    <span className="info-value">{playerName}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Mode:</span>
                    <span className={`info-value mode-${mode}`}>
                        {mode === 'hard' ? 'Hard' : 'Easy'}
                    </span>
                </div>
                <div className="info-item">
                    <span className="info-label">Score:</span>
                    <span className="info-value score">{score}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Round:</span>
                    <span className="info-value">{round}</span>
                </div>
            </div>
        </div>
    );
}

export default GameHeader;
