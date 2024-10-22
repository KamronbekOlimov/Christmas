import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar({ toggleMode, moon, menu, changeMenu, activeMenu, menuExit }) {
  return (
    <nav>
      <div className="container">
        <NavLink to={"/"} className={"logo"}>
          <img src="/logo.svg" alt="Christmas logo icon" />
          <span>Christmas</span>
        </NavLink>
        <ul className="links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/celebrate"}>Celebrate</NavLink>
          </li>
          <li>
            <NavLink to={"/gift"}>Gift</NavLink>
          </li>
          <li>
            <NavLink to={"/new"}>New</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <button onClick={() => toggleMode()}>
            <img src={moon} alt="" />
          </button>
          <button onClick={()=>changeMenu()} className="menubtn">
            <img src={menu} alt="" />
          </button>
        </ul>
      </div>
      <div className={activeMenu?'menuBar':'menuBar active'}>
        <img className="toys" src="/toys.png" alt="" />
        <button onClick={()=>changeMenu()} className="exitMenu"><img src={menuExit} alt="" /></button>
        <ul className="menuLinks">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/celebrate"}>Celebrate</NavLink>
          </li>
          <li>
            <NavLink to={"/gift"}>Gift</NavLink>
          </li>
          <li>
            <NavLink to={"/new"}>New</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
