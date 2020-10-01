import React, { useState } from "react";
import { BrowserRouter as Router, withRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Quiz from "./components/Quiz";
import Results from "./components/routes/Results";
import UserForm from "./components/routes/UserForm";

function App() {
  const [address, setAddress] = useState("51 Rose Ave, Venice CA 90291")

  const handleChange = (event) => {
    console.log("Handling address change", event);
    setAddress(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Fetching data for - ", address)
  }

  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route exact path="/" 
            render={(routerProps) => (
              <UserForm
              {...routerProps}
              address={address}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              />
            )}
          />
          <Route path="/results" component={Results} />
        </Layout>
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </div>
  );
}

export default App;
