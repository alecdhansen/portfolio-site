import React from "react";
import LightbulbFilled from "../icons/LightbulbFilled";
import { Button } from "./style";
import { ButtonProps } from "./types";
import { titleToggler } from "./utils";

const Toggle: React.FC<ButtonProps> = ({ toggleTheme, colorTheme }) => {
  return (
    <Button title={titleToggler(colorTheme)} onClick={toggleTheme}>
      <LightbulbFilled colorTheme={colorTheme} />
    </Button>
  );
};

export default Toggle;
