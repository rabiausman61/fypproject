import React from 'react';
import './App.css';
import Topmenu from './components/Topmenu';
import {BrowserRouter as Router, Routes, Route,Switch} from 'react-router-dom';
import Home from './container/Home';
import Signin from './container/Signin';

function App() {
  return (
    <div className="App">
      
     <Router>
     <Topmenu/>
          <Switch>
         
  <Route path='/signin' component={Signin} />
  <Route exact path='/' component={Home} />

          </Switch>
       
     </Router>
      
  
  
    </div>
  );
}

export default App;
