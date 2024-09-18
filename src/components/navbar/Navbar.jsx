import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
        <div className="container">
          <a className='logo' href=""></a>
          <NavLink to={'/'} className={'logo'}><img src="/logo.svg" alt="Christmas logo icon" /><span>Christmas</span></NavLink>
          <ul className="links">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/celebrate'}>Celebrate</NavLink>
            </li>
            <li>
              <NavLink to={'/gift'}>Gift</NavLink>
            </li>
            <li>
              <NavLink to={'/new'}>New</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <button><img src='/moon.svg' alt="" /></button>
            <button className='mobileMenu'><img src='/moon.svg' alt="" /></button>
          </ul>
        </div>
        <div>
          <img className='toys' src="/toys.png" alt="" />
          <button className='exitMenu'>
            <img className='exitImg' src="/xmark.svg" alt="" />
            <img className='exitImgMobile' src="/xmarkDark.svg" alt="" />
          </button>
          <div className="container">
          <ul className="menuLinks">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Celebrate</a>
            </li>
            <li>
              <a href="">Gifts</a>
            </li>
            <li>
              <a href="">New</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          </div>
        </div>
        <hr />
      </nav>
  )
}
export default Navbar