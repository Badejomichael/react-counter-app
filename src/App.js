import './App.css';
import { useChangeNumber } from './custom-hooks/useChangeNumber';

function App() {

  const [number, increaseNumber, decreaseNumber, resetNumber, message] = useChangeNumber();
  
  
  return (
    <div className="App container app-container">
      <h1>{number}</h1>
      <p>{message}</p>
      <button className="btn btn1 btn-dark" onClick={increaseNumber}>Increase</button>
      <button className="btn btn-dark" onClick={decreaseNumber}>Decrease</button>
      <button className="btn btn-dark" onClick={resetNumber}>Reset</button>  
    </div>
  );
}

export default App;
