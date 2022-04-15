import './App.css';
import Pokemon from './components/Pokemon';
import Banner from './components/Banner';
import { useState, useEffect, SetStateAction } from 'react';

export interface cProps {
  score: number;
  setScore: React.Dispatch<SetStateAction<number>>;
  guesses: string[];
  setGuesses: React.Dispatch<SetStateAction<string[]>>;
}

function App() {
  const [score, setScore] = useState<number>(0);
  const [guesses, setGuesses] = useState<string[]>([]);
  useEffect(() => {
    setScore(0);
  }, [])
  return (
    <div className="App">
      <Banner/>
      <div>Your score is: {score}</div>
      <Pokemon guesses={guesses} score={score} setScore={setScore} setGuesses={setGuesses}/>
    </div>
  );
}

export default App;
