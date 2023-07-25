import React from "react";
import { useTheme } from "styled-components";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";
import { ThemeBtn, MoonBtn, SunBtn } from "../../style/Button.styled";

const ThemeButton = () => {
  const { current, toggleTheme } = useTheme();

  return (
    <ThemeBtn type="button" onClick={toggleTheme}>
      {current === "light" ? (
        <MoonBtn
          color={current === Theme.LIGHT ? ColorDark.BTN : ColorLight.BTN}
          size={18}
        />
      ) : (
        <SunBtn
          color={current === Theme.LIGHT ? ColorDark.BTN : ColorLight.BTN}
          size={20}
        />
      )}
    </ThemeBtn>
  );
};

export default ThemeButton;
