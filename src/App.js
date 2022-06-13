import './App.css';
import gameData from './game-data.js';
import { useState } from 'react';

function App() {

  const [ oneScore, setOneScore ] = useState(0);
  const [ twoScore, setTwoScore ] = useState(0);
  const [ threeScore, setThreeScore ] = useState(0);

  const [ clueValue, setClueValue ] = useState(200);

  const [ wager, setWager ] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWager(0);
  }

  return (
    <div className="App">
      <header>
        <h1>Jeopardy</h1>
      </header>
      <main>
        <div id="game-board">
          <table>
            <thead>
              <tr>
                {gameData.game.jeopardy.map((categories, i) => (
                <th className="card category" key={i}>
                  {categories.category}
                 </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {gameData.game.jeopardy[0].clues.map((value,k) => (
                <tr key={k}>
                  {gameData.game.jeopardy.map((category, i) => (
                    /*{  
                      The magic happens here? 

                      onClick -> a link that opens a generic clue component that passes the data (category, clue, and value), which passses that data to the scores component to update it and to the main app component to blank out that clue

                      The clicked modal component opens a new component that is passed the "answer" data

                      question - does the entire page have to refresh or can i have just this board change views, and let the scores operate on their own
                    } */
                    <td className="card clue" key={k}>
                      ${category.clues[k].value}
                    </td>
              ))}
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
        <div id="score-board">
          <div className="score-card">
            <p className="score">${oneScore.toLocaleString('en')}</p>
            <p>Contestant 1</p>
            <p>Signature</p>
          </div>
          {/* conditionally render the second half of the score card (empty, inc or wager) */}
          <div className="score-card score-inc">
            <p className="score">${oneScore.toLocaleString('en')}</p>
            <p>Contestant 1</p>
            <p>Signature</p>
            <button onClick={() => setOneScore(oneScore - parseInt(clueValue))}>- ${clueValue}</button>
            <button onClick={() => setOneScore(oneScore + parseInt(clueValue))}>+ ${clueValue}</button>
          </div>
          <div className="score-card score-wager">
            <p className="score">${oneScore.toLocaleString('en')}</p>
            <p>Contestant 1</p>
            <p>Signature</p>
            <form onSubmit={handleSubmit}>
              <input 
              type="number"
              value={wager}
              onInput={(e) => setWager(e.target.value)}
              >
              </input>
              <button type="submit" onClick={(e) => setOneScore(oneScore - parseInt(wager))}>- ${wager}</button>
              <button type ="submit" onClick={(e) => setOneScore(oneScore + parseInt(wager))}>+ ${wager}</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
