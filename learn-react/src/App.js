import React from 'react';

// useSelector hook enables choosing various states from store, useDispatch hook helps to dispatch an action.
import { useSelector, useDispatch } from 'react-redux';

// if a functionor component is present with index.js file, the file name is not needed to be mentioned in the import statement.
import { increment, decrement, login } from './actions';

function App() {

  const count = useSelector(state => state.counter);
  const logStatus = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  console.log(count, logStatus);

  return (
    <div className="App">
        <p>The count is {count}.</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        {logStatus ? <><p>The user is logged in.</p><button onClick={() => dispatch(login())}>Sign out</button></> : 
                      <><p>The user is not logged in.</p><button onClick={() => dispatch(login())}>Sign in</button></>}
    </div>
  );
}

export default App;
