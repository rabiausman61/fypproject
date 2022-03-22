import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Home.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Home = () => {
return(
   <>
  <div className='adminlayout'>
  <ul>
  <li> 
     <Link to="/seemedicines" className='a'>Add Categories</Link>
  </li>

  <li> 
     <Link to="/addproducts" className='a'>Add Products</Link>
  </li>
  
  
  
  
  
              </ul>

          </div>
        
         
          </>
)
};

export default Home;
