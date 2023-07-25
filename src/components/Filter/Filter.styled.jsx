import { styled } from "styled-components";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";

export const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  padding-left: 30px;
  margin-bottom: 10px;
  border: none;
  outline: 0;
  color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.TEXT : ColorDark.TEXT};
  background-color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.BG : ColorDark.BG};
  box-shadow: 0 5px 4px -5px rgba(0, 0, 0, 0.3);
`;
