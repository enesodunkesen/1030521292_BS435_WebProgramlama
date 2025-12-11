import React from 'react';
import './PlayerNameInput.css';

function PlayerNameInput({ value, onChange }) {
    return (
        <div className="PlayerNameInput">
            <h3>Enter Your Name</h3>
            <input
                type="text"
                placeholder="Player Name"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                maxLength={20}
            />
        </div>
    );
}

export default PlayerNameInput;
