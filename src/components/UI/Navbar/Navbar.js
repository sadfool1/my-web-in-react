import classes from "./Navbar.module.css";
import React from "react";
import { MenuItems } from "./NavElements/NavElements.js";

const Navbar = () => {
  return (
    <div>
      <nav className={classes.topNav}>
        <h1 className={classes.navBarLogo}>
          {" "}
          MCGH <i src="..../static/mylogo.jpg"> </i>{" "}
        </h1>
        <div className="menuIcon"> </div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={MenuItems.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
