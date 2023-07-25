import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import Theme, { ColorDark, ColorLight } from "../theme/theme";

const iconStyle = css`
  outline: none;
  font-size: 22px;
  transform: rotate(-360deg);
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(360deg);
    transition: all 0.3s ease;
  }
`;

export const FindWrap = styled.div`
  position: relative;
  z-index: 10;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  background-color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.BG : ColorDark.BG};
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const ThemeBtn = styled(Button)`
  width: 10px;
  top: 3px;
  left: 35px;
`;

export const LogOutBtn = styled(Button)`
  width: 10px;
  top: 2px;
  left: 0px;
`;

export const MdBtn = styled(MdAdd)`
  ${iconStyle}
`;

export const SunBtn = styled(BsSun)`
  ${iconStyle}
`;
export const MoonBtn = styled(HiMoon)`
  ${iconStyle}
`;

export const LogOutIcon = styled(BiLogOut)`
  ${iconStyle}
  transform: rotateY(0);
  &:hover {
    transform: rotateY(360deg);
  }
`;
