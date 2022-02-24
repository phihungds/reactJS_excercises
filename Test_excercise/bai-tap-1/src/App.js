import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const getSum = (number1, number2) => {
  return number1 + number2
}
function App() {
  const [numOne, setNumOne] = useState('');
  const [numTwo, setNumTwo] = useState('')
  const [sum, setSum] = useState(0)

  const add = () => {
    const result = getSum(parseFloat(numOne), parseFloat(numTwo));
    setSum(result)
  }


  return (
    <div className="App">
      <form>
        <input type="number" id='num-one-input' value={numOne} onChange={e => { setNumOne(e.target.value) }} />
        <input type="number" id='num-two-input' value={numOne} onChange={e => { setNumTwo(e.target.value) }} />
        <button onClick={add} aria-label="Add">Add</button>
        <p className='result'>{sum}</p>
      </form>
    </div>
  );
}
export {getSum}
export default App;
