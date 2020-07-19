const counterReducer = (state, action) => {
  //state: current state
  //action: defined /used under
    switch (action) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        throw new Error()
  }
}

export default counterReducer;

/*
 https://flaviocopes.com/react-hook-usereducer/
*/