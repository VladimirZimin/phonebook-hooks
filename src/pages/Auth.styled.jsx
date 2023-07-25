import { css, styled } from "styled-components";
import Theme, { ColorDark, ColorLight } from "../theme/theme";
import { Link } from "react-router-dom";

const buttonStyle = css`
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

export const Title = styled.h1`
  margin-right: 100px;
  font-size: 35px;
  text-align: center;
  color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.TITLE : ColorDark.TITLE};
`;

export const Text = styled.p`
  margin-left: 100px;
  font-size: 21px;
  color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.TITLE : ColorDark.TITLE};
`;

export const Form = styled.form`
  width: 340px;
  margin-top: 50px;
`;

export const Input = styled.input`
  width: 100%;
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

export const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.button`
  ${buttonStyle}
`;

export const LinkButton = styled(Link)`
  ${buttonStyle}
`;
