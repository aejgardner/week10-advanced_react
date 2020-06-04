import React from 'react';
import './App.css';
import Squares from './Squares/Squares';
import SignUp from './SignUp/SignUp';
import Button from './Buttons/Button';
import Form from './Form/Form';
import ToDoList from './ToDoList/ToDoList';
import Articles from './News/Articles';
import Article from './News/Article';
import CreateArticle from './News/CreateArticle';
import EditArticle from './News/EditArticle';

// hook components
import HookClicked from './Hooks/Clicked';
import HookSquare from './Hooks/Square';
import HookToggleText from './Hooks/ToggleText';
import HookCounter from './Hooks/Counter';
import HookStepCounter from './Hooks/StepCounter';
import HookCatchMeIfYouCan from './Hooks/CatchMeIfYouCan';
import HookRollCall from './Hooks/RollCall';
import HookPasswordStrength from './Hooks/PasswordStrength';

// react router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// names for HookRollCall component
let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
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
            <HookClicked />
            <HookSquare colour="hotpink" />
            <HookToggleText initial="Hello" alternate="World" />
            <HookCounter initial={50} max={100} />
            <HookStepCounter max={100} step={30} />
            <HookCatchMeIfYouCan jump={100} />
            <HookRollCall names={names} />
            <HookPasswordStrength />
          </Route>
          <Route exact path="/todo-list" component={ToDoList} />
          <Route exact path="/news" component={Articles} />
          <Route path="/articles/:id" render={({ match }) => (
            <Article article={match.params.id} />
          )} />
          <Route exact path="/news/create" component={CreateArticle} />
          <Route path="/news/:id" render={({ match }) => (
            <EditArticle article={match.params.id} />
          )} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
