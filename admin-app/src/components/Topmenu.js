import React from 'react';
import { Link } from 'react-router-dom';
import './Topmenu.css'
const Topmenu = () => {

  return (


<div class='topmenu'>
            <ul>
<li> 
   <Link to="/" className='a'>Home</Link>
</li>

<li> <Link to="/signin" className='a'>Sign In</Link>
</li>



            </ul>
        </div>
    )
}

export default Topmenu;
