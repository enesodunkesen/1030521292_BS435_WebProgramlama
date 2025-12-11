import React, { useState } from "react";
import './ModeSelector.css'

function ModeSelector({ onModeSelect }) {
    const [selectedMode, setSelectedMode] = useState(null);

    const handleSelect = (mode) => {
        setSelectedMode(mode);
        onModeSelect(mode);
    };

    return (
        <div className="ModeSelector">
            <h3>Select Game Mode</h3>
            <div class="radio-input">
                <label>
                    <input onClick={() => handleSelect("hard")} type="radio" id="value-1" name="value-radio" value="1" />
                    <span>Hard Mode</span>
                </label>
                <label>
                    <input onClick={() => handleSelect("easy")} type="radio" id="value-2" name="value-radio" value="2" />
                    <span>Easy Mode</span>
                </label>
                <span class="selection"></span>
            </div>
        </div>
    );
}

export default ModeSelector;
