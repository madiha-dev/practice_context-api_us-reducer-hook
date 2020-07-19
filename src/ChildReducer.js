import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const ChildReducer =() =>{
    let [state, dispatch] = useReducer(CounterReducer, 10) 
    /* [state, dispatch] called destructing : taking something from useReducer(? , ?)
        if 2nd value eg 10 missing , it will be undefined
        this is initial value of reducer

         dispatch (pass action here)
    */
    /*console.log(state) */
    return(
        <div>
           <p> This is Reducer Child</p> 
            <p>value of Reducer: {state}</p>
            <button
            onClick = { () => dispatch ('INCREMENT')}
            >
                INCREMENT Reducer Btn
            </button>
            <button
            onClick = {() => dispatch('DECREMENT')}
            >
            DECREMENT reducer btn
            </button>
        </div>

    );
}

export default ChildReducer;