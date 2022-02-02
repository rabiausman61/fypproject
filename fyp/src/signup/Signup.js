import React, { useState } from "react";
import "./signup.css";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const history = useHistory();
  const [userRegisteration, setUserRegistration] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    phonenumber: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
   const {  email,password,confirmpassword,phonenumber}=userRegisteration;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,password,confirmpassword,phonenumber})
    });


    const json = await response.json();
    console.log(json);
if (json.success)
{
            localStorage.setItem('token',json.authToken);
            history.push("/");
            props.showAlert("Account Creation Successful","success");
        
}


else{
    props.showAlert("Invalid Credentials","danger");
}
   
  };

  
  const onChange = (e) => {
    setUserRegistration({
      ...userRegisteration,
      [e.target.name]: e.target.value,
    });
  };

  return (
      
    <div className="mb-3">
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlhtmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            placeholder="Enter email"
          />
        </div>

        <div class="mb-3">
          <label htmlhtmlFor="password">Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            id="password"
            onChange={onChange}

            placeholder="Password"
            minLength={5}
            required
          />
        </div>

        <div class="mb-3">
          <label htmlFor="Confirm Password">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            name="confirmpassword"
            id="confirmpassword"
            onChange={onChange}
            minLength={5}
            required
            placeholder="Confirm Password"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="Phone Number">Phone Number</label>
          <input
            type="number"
            class="form-control"
            name="phonenumber"
            id="confirmpassword"
            onChange={onChange}

            placeholder="Phone Number"
            minLength={11}
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
