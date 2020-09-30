import React from 'react';
import './App.css';
import Results from './components/routes/Results'
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Route exact path="/" component={Results} />
      {/* <h1>This is the Main Quiz Panel</h1> */}
    </div>
  );
}

export default App;
