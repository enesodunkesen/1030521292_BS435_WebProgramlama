import React, {useState} from "react";
import StartButton from "../components/UI/StartButton";
import GameTitle from "../components/Home/GameTitle";

function Home(){
    const [gameStarted, setGameStarted] = useState(false)

    const onStart = () => {
        setGameStarted(true)
    }

    if (!gameStarted)
    {
        return (
            <>
                <GameTitle/>
                <StartButton onStart={onStart}/>
            </>
        )
    }
    else{
        return (
            <>
                <p>Game is started</p>
            </>
        )
    }
}

export default Home