import React from 'react';

import Topmenu from './components/Topmenu';
import {BrowserRouter as Router, Routes, Route,Switch} from 'react-router-dom';
import Home from './container/Home';
import Signin from './container/Signin';
import PrivateRoute from './components/private/PrivateRoute'
import Category from './container/Category'
import Buttononclick from './container/Buttononclick'
function App() {
  return (
    <div className="App">
      
     <Router>
     
          <Switch>
         
          <PrivateRoute path='/signin' component={Signin} />
  <Route exact path='/' component={Signin} />

  <Route path='/seemedicines' component={Category} />
  <Route path='/buttonproduct' component={Buttononclick} />

          <Route path='/home' component={Home} />
 

          </Switch>
       
     </Router>
      
  
  
    </div>
  );
}

export default App;
