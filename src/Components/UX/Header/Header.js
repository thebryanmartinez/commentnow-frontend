import './Header.css'
import { useSelector } from 'react-redux'
import { Home, LogOut, User } from 'react-feather'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const { _id, roles } = useSelector((state) => state.security);
  if (_id) {
    return (
      <div className='header-container'>
        <NavLink to='/home' className='posts--button'>
          <Home size={36}></Home>
          <p>Posts</p>
        </NavLink>
        <NavLink to='/usuario' className="user--button">
          <User size={36}></User>
          <p>User</p>
        </NavLink>
        <NavLink to='/' className="logout--button">
          <LogOut size={36}></LogOut>
          <p>Logout</p>
        </NavLink>
      </div>
    )
  }
}

export default Header;
