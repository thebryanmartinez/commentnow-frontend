import './Header.css'
import { Home, LogOut, User } from 'react-feather'

const Header = () => {
  return (
    <div className='header-container'>
      <div className="posts--button">
        <Home size={36}></Home>
        <p>Posts</p>
      </div>
      <div className="user--button">
        <User size={36}></User>
        <p>User</p>
      </div>
      <div className="logout--button">
        <LogOut size={36}></LogOut>
        <p>Logout</p>
      </div>
    </div>
  )
}

export default Header;
