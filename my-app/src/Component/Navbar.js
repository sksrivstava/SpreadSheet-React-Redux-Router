import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
//NavLink enables active class
const Navbar = (props) => {
  setTimeout(() => {
    //  props.history.push("/about");
  }, 2000);
  return (
    <nav className="nav-navwrapper red darken3">
      <div className="container">
        <ul>
          {/* <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li> */}
          <li>
            {" "}
            <Link to="/">Employee</Link>
          </li>
          <li>
            <NavLink to="/SpredSheet">SpreadSheet</NavLink>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
