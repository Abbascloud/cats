import classes from "./styles/headerStyles.module.css";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
  return (
    <header className={classes.header}>
      <HeaderMenu className={classes.header__menu} />
    </header>
  );
}
