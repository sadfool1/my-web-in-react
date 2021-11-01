import classes from "./Navbar.module.css";
import NavElements from "./NavElements/NavElements";

const Navbar = () => {
  return (
    <div>
      <nav className={classes.topNav}>
        <NavElements text="Home"> Test </NavElements>
      </nav>
    </div>
  );
};

export default Navbar;
