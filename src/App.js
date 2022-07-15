import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from './redux/store'

function App() {

  const counterReducer = useSelector((state) => state.counterReducer)
  const dispatch = useDispatch()
  const action = (type, payload) => dispatch({ type, payload })

  return (
    <div>
      <button onClick={() => action('INCREMENT_REQ')}>Increment</button>
      <button onClick={() => action('INCREMENT_ASYNC_REQ')}>Increment async</button>
      <button onClick={() => action('DECREMENT_REQ')}>Decrement</button>
      <button onClick={() => action('ADD_REQ', 10)}>Add 10</button>

      <h1>{counterReducer.counter}</h1>
    </div>
  );
}

export default App;
