import styled from "styled-components";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  outline: 0;
  color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.TEXT : ColorDark.TEXT};
  background-color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.BG : ColorDark.BG};
  box-shadow: 0 5px 4px -5px rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  outline: none;
  color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.TEXT : ColorDark.TEXT};
  background-color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.BG : ColorDark.BG};
  border: 1px solid ${ColorLight.BTN};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
`;
