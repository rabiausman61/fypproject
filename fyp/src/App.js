import './App.css';
import { BrowserRouter as Router, Switch, Route,Link, useHistory, Redirect } from 'react-router-dom';
import Topmenu from './components/Topmenu';
import Landingpage from './components/Landingpage';
import medicines from './components/medicines'
import dc from './components/Dc'
import respondent from './components/respondent'
import Signup from './signup/Signup';
import Login from './login/Login';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const[user,setuserlogin]=useState();
  const[alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({msg:message,
    type:type
  })
    setTimeout(()  =>{
      setalert(null); },1500);
    
  } 
  return (
<Router>
        <div>
        
    
           <Topmenu />
           <Alert alert={alert} />
      <Switch>
     
  
     
      <Route exact path='/' component={Landingpage} /> 

  
      <Route exact path='/signin'>
       <Login showAlert={showAlert} /> 

      </Route>
      <Route exact path='/signup'> <Signup showAlert={showAlert} />
       </Route>

        
 
 
      

      

      <Route path='/respondent' component={respondent} />
      <Route path='/dc' component={dc} />
        <Route path='/medicines' component={medicines} />
   
      

        </Switch>
     
        </div>

      
  
</Router>
   
  );
}

export default App;
