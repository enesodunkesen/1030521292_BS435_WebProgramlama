import React from 'react';
import './RulesModal.css';

function RulesModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                
                <h2 className="modal-title">Welcome to Guess the AI generated picture</h2>
                
                <div className="modal-intro">
                    <p>
                        Test your skills at spotting AI-generated images! In this game, 
                        you'll be shown a set of images and your goal is to identify which 
                        one was created by artificial intelligence.
                    </p>
                </div>

                <h3 className="rules-heading">How to Play</h3>
                <ul className="rules-list">
                    <li>
                        <span>Each round shows you 3 images - one is AI-generated, two are real photos</span>
                    </li>
                    <li>
                        <span>Click on the image you think is AI-generated</span>
                    </li>
                    <li>
                        <span>If you guess wrong, you get a second chance with the remaining images</span>
                    </li>
                    <li>
                        <span>Earn more points for correct first guesses (10 pts Easy, 20 pts Hard)</span>
                    </li>
                    <li>
                        <span>Play as many rounds as you want, then click "Show Results" to see your score</span>
                    </li>
                </ul>

                <h3 className="rules-heading">Difficulty Modes</h3>
                <div className="difficulty-info">
                    <div className="difficulty-card easy">
                        <strong>Easy Mode</strong>
                        <p>AI images have more obvious artifacts and imperfections</p>
                    </div>
                    <div className="difficulty-card hard">
                        <strong>Hard Mode</strong>
                        <p>AI images are more realistic and harder to detect</p>
                    </div>
                </div>

                <h3 className="rules-heading">Image Categories</h3>
                <div className="category-info">
                    <div className="category-card faces">
                        <strong>Faces</strong>
                        <p>Human portraits and face images</p>
                    </div>
                    <div className="category-card cities">
                        <strong>Cities</strong>
                        <p>Urban landscapes and cityscapes</p>
                    </div>
                    <div className="category-card cats">
                        <strong>Cats</strong>
                        <p>Cat photos and feline images</p>
                    </div>
                </div>

                <button className="modal-start-btn" onClick={onClose}>
                    <span>Got it!</span>
                </button>
            </div>
        </div>
    );
}

export default RulesModal;
