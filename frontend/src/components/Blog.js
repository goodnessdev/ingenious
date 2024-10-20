import Themes from "./Themes";
import { ThemeContext } from "../context/ThemeContext";
import React, { useContext } from "react";

const Blog = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className={`${theme.bg} h-screen`}>
      <Themes />
    </div>
  );
};

export default Blog;
