import './App.css';
import gameData from './game-data.js';
import { useState } from 'react';

function App() {

  const [ oneScore, setOneScore ] = useState(0);
  const [ twoScore, setTwoScore ] = useState(0);
  const [ threeScore, setThreeScore ] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Jeopardy</h1>
      </header>
      <main>
        <div id="game-board">
        </div>
        <div id="score-board">
          <div className="score-card">
            <p className="score">${oneScore}</p>
            <p>Contestant 1</p>
            <p>Signature</p>
            <button onClick={() => setOneScore(oneScore - 200)}>- $VAL</button>
            <button onClick={() => setOneScore(oneScore + 200)}>+ $VAL</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
