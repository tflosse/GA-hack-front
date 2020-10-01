import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz'
function App() {
  return (
    <div className="App">
    <Route path='/quiz' component={Quiz}/>
    </div>
  );
}

export default App;
