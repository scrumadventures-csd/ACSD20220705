import './App.css';
import axios from 'axios';
import {useState} from 'react';

// Configuration parameters
let myLocalMode  = true;
let myClassDate  = "20220705";
let myServerRoot = (myLocalMode) 
                 ? "http://localhost:5000" 
                 : `https://acsd${myClassDate}.herokuapp.com`;



function App() {
  const [gameId,setGameId] = useState();
  const [gameStarted,setGameStarted] = useState(false);
  const [pins,setPins] = useState();
  const [ballRolled,setBallRolled] = useState(false);

  const startGame = e => {
    var myRegisterUrl = `${myServerRoot}/api/mbc/register`;
    console.log (myRegisterUrl);
    alert (myRegisterUrl);
    axios.get(myRegisterUrl).then(response=>{
      setGameId(response.data.id)
      setGameStarted(true)
    })
  }

  const rollOneBall = e => {
    var myRollUrl = `${myServerRoot}/api/mbc/roll?id=${gameId}`;
    console.log (myRollUrl);
    alert (myRollUrl);
    axios.get(myRollUrl).then(response=>{
      setPins(response.data.pins)
      setBallRolled(true)
    })
  }

  return (

    <div className="App">
      <p></p><p></p>
      <button onClick={startGame}>Start Game</button>
      {gameStarted && <p>Your game id is {gameId}</p>}
      {gameStarted &&
      <>
      <button onClick={rollOneBall}>Roll Ball</button>
      {ballRolled && <p>Your pins are {pins}</p>}
      </>
      }
    </div>
  );
}

export default App;
