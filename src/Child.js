import React, {useContext} from 'react';
import CounterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(CounterContext);// like a getter
    let countState = 
    
    console.log(counterValue);

     return (
         <div>
            <p>This is first Child</p>
            {/* <p>Child value: {counterValue}</p> */}
            <p>Child value: {counterValue[0]}</p>
            <button
            onClick = {() => {counterValue[1](++counterValue[0])}}
            >
            Counter Btn
            </button>
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