import React, { useState } from "react";
import { BrowserRouter as Router, withRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Quiz from "./components/Quiz";
import Results from "./components/routes/Results";
import About from "./components/About"
import UserForm from "./components/routes/userForm";

function App() {
  const [federal, setFederal] = useState(0);
	const [state, setState] = useState(0);
	const [local, setLocal] = useState(0);
	const [judicial, setJudicial] = useState(0);
	const [measures, setMeasures] = useState(0);
	const [bonus, setBonus] = useState(0);
  
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
		<div className='App'>
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
					<Route
						path='/quiz'
						render={() => {
							return (
								<Quiz
									setFederal={setFederal}
									setState={setState}
									setLocal={setLocal}
									setJudicial={setJudicial}
									setMeasures={setMeasures}
									setBonus={setBonus}
									federal={federal}
									state={state}
									local={local}
									judicial={judicial}
									measures={measures}
									bonus={bonus}
								/>
							);
						}}
					/>
					<Route
						path='/results'
						render={() => {
							return (
								<Results
									setFederal={setFederal}
									setState={setState}
									setLocal={setLocal}
									setJudicial={setJudicial}
									setMeasures={setMeasures}
									setBonus={setBonus}
									federal={federal}
									state={state}
									local={local}
									judicial={judicial}
									measures={measures}
									bonus={bonus}
								/>
							);
						}}
					/>

          <Route path="/about" component={About} />
				</Layout>
			</Switch>
		</div>
	);
}

export default App;
