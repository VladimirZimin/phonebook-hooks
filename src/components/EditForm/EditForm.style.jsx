import { styled } from "styled-components";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";

export const Form = styled.form`
  display: flex;
  gap: 20px;
  margin-bottom: 5px;
`;

export const InputName = styled.input`
  width: 155px;
  padding: 0;
  text-align: left;
  font-weight: 700;
  border: none;
  outline: 0;
  color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? "#1A237E" : "white"};
  background-color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.BG : ColorDark.BG};
`;

export const InputPhone = styled(InputName)`
  width: 165px;
`;

export const Button = styled.button`
  padding: 2px 10px;
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
