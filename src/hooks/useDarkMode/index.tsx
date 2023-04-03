import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [colorTheme, setColorTheme] = useState("light");
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setColorTheme(mode);
  };

  const themeToggler = () => {
    colorTheme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setColorTheme(localTheme);
    setMountedComponent(true);
  }, []);

  return [colorTheme, themeToggler, mountedComponent];
};
