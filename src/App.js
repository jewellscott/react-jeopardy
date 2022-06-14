import './App.css';
import { useState } from 'react';
import { newGame, jeopardy, doubleJeopardy, finalJeopardy, currentRoundCategories } from './game-data';


function App() {

  const [ gameState, setGameState ] = useState(newGame());

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <header>
        <h1>Jeopardy</h1>
      </header>
      <main>
        <div id="game-board">
          {/* <table>
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
                    <td className="card clue" key={k}>
                      ${category.clues[k].value}
                    </td>
              ))}
                </tr>
              ))}
            </tbody>
          </table> */}
          
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
