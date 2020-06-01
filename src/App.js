import React from 'react';
import './App.css';
import Squares from './Squares/Squares';
import SignUp from './SignUp/SignUp';
import Button from './Buttons/Button';
import Form from './Form/Form';

function App() {
  return (
    <div className="App">
      <Squares color="hotpink" />
      <SignUp minimumLength={12} />
      <Button handleUpdate={console.log} />
      <Form handleSubmit={console.log} />
    </div>
  );
}

export default App;
