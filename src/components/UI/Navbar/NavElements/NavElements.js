import classes from "./NavElements.module.css";

const NavElements = props => {
  return <div className={classes.navButton}>{props.text}</div>;
};

export default NavElements;
