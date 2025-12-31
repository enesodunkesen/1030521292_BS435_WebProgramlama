import React from "react";
import './ModeSelector.css'

function ModeSelector({ onModeSelect, selectedMode }) {
    const handleSelect = (mode) => {
        onModeSelect(mode);
    };

    return (
        <div className="ModeSelector">
            <h3>Select Game Mode</h3>
            <div className="radio-input">
                <label>
                    <input onChange={() => handleSelect("hard")} type="radio" id="value-1" name="value-radio" value="1" checked={selectedMode === 'hard'} />
                    <span>Hard Mode</span>
                </label>
                <label>
                    <input onChange={() => handleSelect("easy")} type="radio" id="value-2" name="value-radio" value="2" checked={selectedMode === 'easy'} />
                    <span>Easy Mode</span>
                </label>
                <span className="selection"></span>
            </div>
        </div>
    );
}

export default ModeSelector;
