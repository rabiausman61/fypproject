import React from 'react'
import './searchbar.css'
import download from './images/download.png'
const searchbar = () => {
    return (
<div class='searchbar'>
            <h1> AR MEDICARE</h1>

   <form action="/" >
       
           
  
        <input
            type="text"
            id="header-search"
            placeholder="search"
            name="s"  />
        <button type="submit">Search</button>
        
    </form>     
  


    <img src={download} alt="Italian Trulli" height={25}  width={30} />


           
</div>
        
    )
}

export default searchbar
