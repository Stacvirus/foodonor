import "./nav.css";
import Button from "../btn/Button";

import { NavLink, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <div className='logo'>Foodonor</div>
        <ul>
          <li><NavLink to="/">home</NavLink></li>
          <li><NavLink to="goals">goals</NavLink></li>
          <li><NavLink to="donations">donations</NavLink></li>
          <li><NavLink to="demands">receipt</NavLink></li>

        </ul>

        <NavLink to="register"><Button label='Register' /></NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
