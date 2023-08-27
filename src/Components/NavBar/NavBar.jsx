import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='navbar'>
        <div className="leftSection">
            <img className='neflixLogo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix logo" />
            <a className='hideItem' href="">Home</a>
            <a className='hideItem' href="">TV Shows</a>
            <a className='hideItem' href="">Movies</a>
            <a className='hideItem' href="">New & Popular</a>
            <a className='hideItem' href="">My List</a>
            <a className='hideItem' href="">Browser by Languages</a>
        </div>
        <div className="rightSection">
        <span className="material-symbols-outlined searchIcon hideItem">search</span>
            <a className='hideItem'  href="">Children</a>
            <span className="material-symbols-outlined notificationIcon hideItem">notifications</span>
            <img className='netlfixAvatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="dropdown" />
        </div>
    </div>
  )
}

export default NavBar