import React from 'react';
import './App.css';

import UserInput from './Components/UserInput'

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div>Output</div>
      <div><UserInput/></div>
      
    </div>
  );
}

export default App;
