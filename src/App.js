import React from 'react';
import './App.css';
import Squares from './Squares/Squares';
import SignUp from './SignUp/SignUp';
import Button from './Buttons/Button';
import Form from './Form/Form';
// import ToDoList from './ToDoList/ToDoList';
import Articles from './News/Articles';

// react router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/news" component={Articles} />
          <Squares color="hotpink" />
          <SignUp minimumLength={12} />
          <Button handleUpdate={console.log} />
          <Form
            handleSubmit={console.log}
            fields={[
              { label: "Name", name: "name", type: "text" },
              { label: "E-mail", name: "email", type: "email" },
              { label: "Telephone Number", name: "telephone", type: "tel" },
              { label: "Date of Birth", name: "dob", type: "date" },
            ]} />
          {/* <ToDoList /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
