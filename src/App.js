import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Quiz from "./components/Quiz";
import Results from "./components/routes/Results";
import UserForm from "./components/routes/UserForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserForm} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={Results} />
      </Switch>
    </div>
  );
}

export default App;
