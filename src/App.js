import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz'

function App() {
  return (
    <div className="App">
      <h1>This is the Main Quiz Panel</h1>
    <Route path='/quiz' component={Quiz}/>
    </div>
  );
}

export default App;
