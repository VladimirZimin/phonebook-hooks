import React from "react";
import { LogOutBtn, LogOutIcon } from "../../style/Button.styled";
import { useTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/operations";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";

const LogOutButton = () => {
  const { current } = useTheme();
  const dispatch = useDispatch();
  return (
    <>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        <LogOutIcon
          color={current === Theme.LIGHT ? ColorDark.BTN : ColorLight.BTN}
        />
      </LogOutBtn>
    </>
  );
};

export default LogOutButton;
