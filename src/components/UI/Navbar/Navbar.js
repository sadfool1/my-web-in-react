import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={classes.topNav}>
        <div className={classes.navButtons}>
          <a> Home </a>
          <a> Blog </a>
          <a> Microcaps </a>
          <a> Contact </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
