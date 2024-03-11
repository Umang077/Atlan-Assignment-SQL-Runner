import React from 'react';
import './Navbar.css'
const Navbar=()=>{
    return(
        <div className='nav' style={{marginLeft:'40px',marginRight:'40px'}}>
            <div className="nav-logo">
                SQL Executor
            </div>
            <ul className="nav-menu">
                <a href="
                /"><li className='button-24'>
                Home   
            </li></a>
                <a href="/editor1">
                <li  className='button-24'>
                    Editor 1
                </li>
                </a>
                
                <a href="/editor2">
                <li  className='button-24'>
                    Editor 2
                </li>
                </a>
                
                {/* <a href="">
                <li className='button-24'>
                    Back 
                </li>
                </a> */}
                
            </ul>
        </div>
    )
}
export default Navbar;