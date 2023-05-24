import React from 'react'
import {FaReact} from 'react-icons/fa'

const Header = () => {
  return (
    <>
    <nav className='nav'>
        <div className='logo'>
          <FaReact className="img-logo"/>
           <h2>ReactFacts</h2>
        
            
        </div>
        <div className="nav-items">
            <li>Home</li>
            <li>Price</li>
            <li>About</li>
            
        </div>
    </nav>
      
    </>
  )
}

export default Header
