import './Header.css'
import { useSelector } from 'react-redux'
import { Home, LogOut, User } from 'react-feather'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
      <NavLink to='/home' className='posts--button'>
        <Home size={36}></Home>
        <p>Posts</p>
      </NavLink>
      <NavLink to='/login' className="user--button">
        <User size={36}></User>
        <p>User</p>
      </NavLink>
      <div className="logout--button">
        <LogOut size={36}></LogOut>
        <p>Logout</p>
      </div>
    </div>
  )
}

export default Header;
