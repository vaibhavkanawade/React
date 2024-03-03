
import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");


  return (

    <>
      <Input setInput={setInput} setInput2={setInput2} />

      <Output input={input} input2={input2} />
    </>
  );
}

export default App;
