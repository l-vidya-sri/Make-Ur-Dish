import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div id='logo'>
       <Link to="/"> <img src="/diet1.png" alt="logo" width={50} /></Link>
      <h2>Make Ur Dish</h2>
      </div>
      <Link to="/" className='HomeButton'>Home</Link>
    </nav>
  )
}

export default Navbar