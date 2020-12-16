import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import * as action from './Actions/index';

function App() {
  const counter = useSelector(state => state.counterReduce);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Starter Kit</h1>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(action.Increment())}>+</button>
      <br />
      <button onClick={() => dispatch(action.Decrement())}>-</button>
    </div>
  );
}

export default App;
