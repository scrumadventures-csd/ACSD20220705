import './App.css';
import axios from 'axios';
import {useState} from 'react';
import bowling from '../src/bowling.png';

// Configuration parameters
let myLocalMode = false
let myClassDate = "20220705";
let myServerRoot = (myLocalMode)
    ? "http://localhost:5001"
    : `https://acsd${myClassDate}.herokuapp.com`;


function App() {
    const [gameId, setGameId] = useState();
    const [gameStarted, setGameStarted] = useState(false);
    const [pins, setPins] = useState();
    const [ballPins, setBallPins] = useState(0);
    const [ballRolled, setBallRolled] = useState(false);
    const [name, setName] = useState("");
    const [frameNumber, setFrameNumber] = useState(0);
    const [myPins, setMyPins] = useState(0);
    const [ballNumber, setBallNumber] = useState(0);
    const [totalInframe, setTotalInframe] = useState(0);

    const startGame = e => {
        var myRegisterUrl = `${myServerRoot}/api/mbc/register`;
        //  alert (myRegisterUrl);

        axios.get(myRegisterUrl).then(response => {
            setGameId(response.data.id)
            setGameStarted(true)
        })
    }

    const rollOneBall = e => {
        var myRollUrl = `${myServerRoot}/api/mbc/roll?id=${gameId}`;
        //  alert (myRollUrl);

        axios.get(myRollUrl).then(response => {
            console.log(response.data)
            setPins(response.data.pins)
            setBallRolled(true)
            setBallPins(response.data.bullPins)
            setFrameNumber(response.data.frameNumber)
            setBallNumber(response.data.ballInFrame)
            setMyPins(response.data.myPins)
            setTotalInframe(response.data.totalInframe)
        })
    }

    return (
        <div className="App">
            <img src={bowling} alt="bowling" width={400}/>
            <p></p><p></p>

            {!gameStarted && <>
                <input size={50} onChange={(e) => setName(e.target.value)}
                       type="text"
                       placeholder="Enter your Name and start the Party !!"
                       required
                />
                <>&nbsp;</>
                <button onClick={startGame}>Goooooo!</button>
            </>
            }

            {gameStarted && <p>Welcome {name} !</p>}
            {gameStarted && <p>Your game has unique id which  {gameId}</p>}
            {gameStarted &&
                <>
                    <button onClick={rollOneBall}>Roll Ball</button>
                    {ballRolled && <p>Frame n°:  {frameNumber}</p>}
                    {ballRolled && <p>Balle n°:  {ballNumber}</p>}
                    {ballRolled && <p>You got {myPins} -> That's a total of {ballPins} pins ! </p>}
                    {ballRolled && <p>Your total in frame is {totalInframe}</p>}
                    {ballRolled && <p>Your total Score are {pins}</p>}

                </>
            }
        </div>
    );
}

export default App;
