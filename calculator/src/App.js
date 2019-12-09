import React from 'react';
import './App.css';
import OperandButton from './Components/OperandButton'
import Input from './Components/Input'

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div>Output</div>
      <div><Input/></div>
      <div>
        Row 1
        <OperandButton buttonLabel="C" />
        <OperandButton buttonLabel="+/-" />
        <OperandButton buttonLabel="%" />
        <OperandButton buttonLabel="/" />
      </div>
      <div>Row 2
        <OperandButton buttonLabel="7" />
        <OperandButton buttonLabel="8" />
        <OperandButton buttonLabel="9" />
        <OperandButton buttonLabel = "*"/>
      </div>
      <div>Row 3
        <OperandButton buttonLabel="4" />
        <OperandButton buttonLabel="5" />
        <OperandButton buttonLabel="6" />
        <OperandButton buttonLabel="-" />
      </div>
      <div>Row 4
        <OperandButton buttonLabel="1" />
        <OperandButton buttonLabel="2" />
        <OperandButton buttonLabel="3" />
        <OperandButton buttonLabel="+" />
      </div>
      <div>
        Row 5
        <OperandButton buttonLabel="0" />
        <OperandButton buttonLabel="." />
        <OperandButton buttonLabel="=" />

    
     
      </div>
    </div>
  );
}

export default App;
