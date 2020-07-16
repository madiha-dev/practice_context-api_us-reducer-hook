import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(counterContext)
    console.log(counterValue);
    return (
        <div>
            <h4>This is 1st child</h4>  
            <h5>counter value is: {counterValue}</h5>
            <button onClick={() => {++counterValue}}>Counter Btn</button>
        </div>
    );
}

export default Child;

/*Diff. b/w local and state var
 - Local var has its own data, 
        has R/W power, 
        UI never update/render
 - state var using other var data, can read only it
    if state render again , then we get updated state var
    
 */