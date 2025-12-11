import './StartButton.css'

function StartButton({ onStart }) {
    return <div className='ButtonContainer'>
        <button className="StartButton" onClick={onStart}><span>Ready</span></button>
    </div>
}

export default StartButton