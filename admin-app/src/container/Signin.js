import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Signin = (props) => {
    let history=useHistory();

    const [userRegisteration, setUserRegistration] = useState({
      email: "",
      password: "",
    })
  const handlesubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/adminauth/admin/signin", {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: userRegisteration.email,
          password: userRegisteration.password
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
  
  const onChange = (e) => {
      setUserRegistration({
        ...userRegisteration,
        [e.target.name]: e.target.value})
    }
  
  return (
      <div>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              value={userRegisteration.email}
              id="email"
              onChange={onChange}
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              value={userRegisteration.password}
              id="password"
              onChange={onChange}
              placeholder="Password"
              name="password"
            />
          </div>
  
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
  )
};

export default Signin;
