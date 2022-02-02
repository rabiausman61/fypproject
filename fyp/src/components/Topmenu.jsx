import React from 'react'
import './Topmenu.css'
import { Link } from 'react-router-dom'
const Topmenu = () => {
    return (
<div class='topmenu'>
            <ul>
<li> 
   <Link to="/">Home</Link>
</li>
<li> 
    <Link to="/medicines">Medicines</Link>
</li>
<li> <Link to="/dc">Doctors Consultancy</Link>
</li>
<li> <Link to="/respondent">Respondent</Link>
</li>
<li> <Link to="/signin">Sign In</Link>
</li>
<li> <Link to="/signup">Sign Up</Link>
</li>

 
            </ul>
        </div>
    )
}

export default Topmenu
