import React, {useState} from "react";
import StartButton from "../components/UI/StartButton";
import GameTitle from "../components/Home/GameTitle";
import ModeSelector from "../components/Home/ModeSelector";
import PlayerNameInput from "../components/Home/PlayerNameInput";
import Game from "./Game";

function Home(){
    const [gameStarted, setGameStarted] = useState(false)

    const [selectedMode, setSelectedMode] = useState(null);
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
        setSelectedMode(null);
        setPlayerName('');
    }

    if (!gameStarted)
    {
        return (
            <>
                <GameTitle/>
                <PlayerNameInput value={playerName} onChange={setPlayerName} />
                <ModeSelector onModeSelect={(mode) => setSelectedMode(mode)} />
                <StartButton onStart={onStart}/>
            </>
        )
    }
    else{
        return (
            <Game 
                playerName={playerName} 
                mode={selectedMode} 
                onBackToHome={handleBackToHome}
            />
        )
    }
}

export default Home