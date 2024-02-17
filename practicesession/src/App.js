
import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [num, setNum] = useState(0);
  // function clickBtn(event) {
  //   setInput(event.target.value)
  // }
  return (
    // <>
    //   <div className="form">
    //     <input type="text" placeholder="enter name" onChange={clickBtn} />
    //     {
    //       //<button onClick={clickBtn}>Add</button>
    //     }

    //     {/* <ul>
    //       <li>
    //         {input}
    //       </li>
    //     </ul> */}
    //   </div>
    //   <div className='form'>
    //     <p>{input}</p>
    //   </div>

    // </>
    <>
      <Input setInput={setInput} setInput2={setInput2} setNum={setNum} />

      <Output input={input} input2={input2} num={num} />
    </>
  );
}

export default App;
