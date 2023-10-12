import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  /*return (
    <div className='navbar'>
      <Link to={"/"}>Home</Link>  |  
      <Link to={"/Cart"}>Cart</Link>  |  
      <Link to={"/Login"}>Login</Link>  |  
      <Link to={"/Signup"}>Signup</Link>
    </div>
    );*/
    
    return (
        <>
           <img src="https://internationalhockeywiki.com/ihw/images/5/5a/Misto-Logo.png" />
           <div className='navbar'>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/Cart"}>Cart</Link></li>
                    <li><Link to={"/Login"}>Login</Link></li>
                    <li><Link to={"/Signup"}>Signup</Link></li>
                </ul>
            </div>
        </>
    );
}