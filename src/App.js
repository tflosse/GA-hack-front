import React from "react";
import { BrowserRouter as Router, withRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Quiz from "./components/Quiz";
import Results from "./components/routes/Results";
import UserForm from "./components/routes/UserForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route exact path="/" component={UserForm} />
          <Route path="/results" component={Results} />
        </Layout>
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </div>
  );
}

export default App;
