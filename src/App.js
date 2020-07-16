import React, { useState } from 'react';
import Parent from './Parent';
import './App.css';
import CounterContext from './CounterContext';

function App() {
  let [count, setCount] = useState(30)
  
  return (
    <CounterContext.Provider value={count}>
      <div>
        <Parent/>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
