import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import classes from "./header.module.css";
import { cookies } from "next/headers";
const Header = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return (
    <header className={classes.header}>
      <p className={classes["header__title"]}>Where in the world?</p>
      <div className={classes["header__theme-cont"]}>
        <ThemeToggle initialValue={theme?.value as "light" | "dark"} />
      </div>
    </header>
  );
};

export default Header;
