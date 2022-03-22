import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { isUserLogin, login} from '../actions'
import authreducers from "../reducers/authreducers";

const Signin = (props) => {
 
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const dispatch=useDispatch();

 const auth=useSelector(state => state.auth);

 
    useEffect(()=>{
  if(!auth.authenticate)
  {
    dispatch(isUserLogin());
  }
 
},[]);

  const userlogin=(e)=>{
    e.preventDefault();

    const admin={
          email,password
    }
  dispatch(login(admin));
  }

  if (auth.authenticate){
   return <Redirect to='/home'/>
  }

 
  
  return (
      <div>
        <form onSubmit={userlogin}>
          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
             // value={userRegisteration.email}
             value= {email}
              id="email"
            // onChange={onChange}
            onChange={(e)=>setEmail(
e.target.value

            )}
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
           //  value={userRegisteration.password}
           value={password}
              id="password"
            // onChange={onChange}
            onChange={(e)=>setPassword(
              e.target.value
              
                          )}
              placeholder="Password"
              name="password"
            />
          </div>
  
          <button type="submit" onClick={()=>{
            if (auth.authenticate)
          {
            <Redirect to='/home'/>
          }}} class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
  )
};

export default Signin;

/*const handlesubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/adminauth/admin/signin", {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
   //     body: JSON.stringify({
     //     email: userRegisteration.email,
       //   password: userRegisteration.password
        })
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
  
              localStorage.setItem('token',json.authToken);
              history.push("/");
              props.showAlert("Login Successful","success");
  
  
      }
  
      else{
        props.showAlert("Invalid Credentials","danger");
  
      }
    };
  */


     //  let history=useHistory();

   /* const [userRegisteration, setUserRegistration] = useState({
      email: "",
      password: "",
    })
  
  const onChange = (e) => {
      setUserRegistration({
        ...userRegisteration,
        [e.target.name]: e.target.value})
    }*/