import React from 'react'
import "../styles/Navbar.css"

export default function Navbar({setTaskArr}) {
  function handelClick(){
    setTaskArr([])
  }
  return (
    <>
        <nav className='navbar'>
            <h1 className='navbar--heading'>Your Daily Task Tracker</h1>
            <ul className='navbar--ul'>
                {/* <li><button className='navbar--add'>Add</button></li> */}
                <li><button className='navbar--clearAll' onClick={handelClick}>Clear All</button></li>
            </ul>
        </nav>
    </>
  )
}
