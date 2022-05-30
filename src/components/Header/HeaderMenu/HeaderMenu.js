import classes from "./styles/headerMenuStyles.module.css";
import { Link } from "react-router-dom";

export function HeaderMenu() {
  return (
    <nav className={classes.headerMenu}>
      <ul className={classes.headerMenu__list}>
        <li className={classes.headerMenu__item}>
          <Link className={classes.headerMenu__item} to="/">
            Все котики
          </Link>
        </li>
        <li className={classes.headerMenu__item}>
          <Link className={classes.headerMenu__item} to="/favorites">
            Любимые котики
          </Link>
        </li>
      </ul>
    </nav>
  );
}
