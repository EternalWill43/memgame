import './App.css';
import Pokemon from './components/Pokemon';
import Banner from './components/Banner';

function App() {
  //const [score, setScore] = useState<number>(0);
  return (
    <div className="App">
      <Banner/>
      <Pokemon/>
    </div>
  );
}

export default App;
