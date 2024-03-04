"use client";

import classes from "./themetoggle.module.css";
import { FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function ThemeToggle({ initialValue }: { initialValue: Theme }) {
  const [theme, setTheme] = useState(initialValue);

  useEffect(() => {
    if (theme) {
      document.cookie = `theme=${theme};path=/;`;
      document.querySelector("html")!.setAttribute("data-theme", theme);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
  }, [theme]);

  return (
    <div
      className={classes.toggle}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <FiMoon />
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </div>
  );
}

export default ThemeToggle;
