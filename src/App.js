import React, { useState } from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';
import './App.css';

function App(){
//let [count, setCount] = useState(55);
let countState = useState(34)
//useState is now arry containing count, stCount variables

  return(
    //<CounterContext.Provider value={count}>
    <CounterContext.Provider value={countState}>
      <div>
        <Parent/>
      </div>
    </CounterContext.Provider>
  );
}

export default App;