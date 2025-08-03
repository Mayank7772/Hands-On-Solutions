import './App.css';
import Welcome from './Components/Welcome';
import Greet from './Components/Greet';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      Welcome to Score Calculator App
      <Welcome/>
      <Greet/>
      <CalculateScore/>
    </div>
  );
}

export default App;
