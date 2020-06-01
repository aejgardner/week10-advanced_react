import React from 'react';
import './App.css';
import Squares from './Squares/Squares';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Squares color="hotpink" />
      <SignUp minimumLength={12} />
    </div>
  );
}

export default App;
