import { Link, NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";

export default function MainNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ref-login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Login-Ref
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/state-login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Login-State
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Login-Data
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
