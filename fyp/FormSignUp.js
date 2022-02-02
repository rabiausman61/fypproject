import React,{useState} from 'react'
import "./Form.css"
const FormSignUp = () => {
    const [userRegisteration,setUserRegistration]= useState({
        email:'',
        password:'',
        confirmpassword:'',
        phonenumber:'',

    });

    const handleinput =(e)=>
    {
const name=e.target.name;
const value=e.target.value;

console.log(name,value);
setUserRegistration({ ...userRegisteration, [name]:value})
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        const newRecord ={...userRegisteration}
    }
    return (
     
<>
        <form action='' onSubmit={handleSubmit}>  
            
        <div>
      <input type="text"   name= 'email'  id='email'   placeholder='email' 
      autoComplete="off"
      value={userRegisteration.email}
      onChange={handleinput} />
        </div>

    <br></br>
            <div>
      <input type="password"   name= 'password'  id='password'   placeholder='password'
   autoComplete="off"
   value={userRegisteration.password}
   onChange={handleinput}    />
            </div>
            <br></br>
            <div>
      <input type="password"   name= 'confirmpassword'  id='confirmpassword'   placeholder='confirm password'
      autoComplete="off"
      value={userRegisteration.confirmpassword}
      onChange={handleinput} />
            </div>
            <br></br>

            <div>
      <input type="number"   name= 'phonenumber'  id='phonenumber'   placeholder='phone number' 
      autoComplete="off"
      value={userRegisteration.phonenumber}
      onChange={handleinput}/>
        </div> 
        <br></br>
        <button type='submit'> Submit </button>
        </form>
</>
    )
}

export default FormSignUp;
