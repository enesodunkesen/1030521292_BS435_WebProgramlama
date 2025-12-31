import React, {useState} from "react";
import StartButton from "../components/UI/StartButton";
import RulesModal from "../components/UI/RulesModal";
import GameTitle from "../components/Home/GameTitle";
import ModeSelector from "../components/Home/ModeSelector";
import CategorySelector from "../components/Home/CategorySelector";
import PlayerNameInput from "../components/Home/PlayerNameInput";
import Game from "./Game";

function Home(){
    const [gameStarted, setGameStarted] = useState(false)
    const [showRules, setShowRules] = useState(false)

    const [selectedMode, setSelectedMode] = useState('easy');
    const [selectedCategory, setSelectedCategory] = useState('faces');
    const [playerName, setPlayerName] = useState('');

    const onStart = () => {
        if (!playerName.trim()) {
            alert('Please enter your name!');
            return;
        }
        if (!selectedMode) {
            alert('Please select a game mode!');
            return;
        }
        setGameStarted(true)
    }

    const handleBackToHome = () => {
        setGameStarted(false);
        setSelectedMode('easy');
        setSelectedCategory('faces');
        setPlayerName('');
    }

    if (!gameStarted)
    {
        return (
            <>
                <GameTitle/>
                <button className="rules-button" onClick={() => setShowRules(true)}>
                    How to Play
                </button>
                <PlayerNameInput value={playerName} onChange={setPlayerName} />
                <ModeSelector onModeSelect={(mode) => setSelectedMode(mode)} selectedMode={selectedMode} />
                <CategorySelector onCategorySelect={(category) => setSelectedCategory(category)} selectedCategory={selectedCategory} />
                <StartButton onStart={onStart}/>
                <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
            </>
        )
    }
    else{
        return (
            <Game 
                playerName={playerName} 
                mode={selectedMode}
                category={selectedCategory}
                onBackToHome={handleBackToHome}
            />
        )
    }
}

export default Home