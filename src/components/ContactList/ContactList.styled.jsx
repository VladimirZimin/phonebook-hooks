import { css, styled } from "styled-components";
import { MdClose } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";
import { motion } from "framer-motion";

const buttonStyle = css`
  background-color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.BG : ColorDark.BG};
  color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorDark.BG : ColorLight.DELETEBTN};
`;

export const DeleteBtn = styled(MdClose)`
  ${buttonStyle}
`;

export const EditBtn = styled(AiOutlineEdit)`
  ${buttonStyle}
  margin-right: -10px;
`;

export const Button = styled.button`
  padding: 0;
  font-size: 22px;
  background-color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.BG : ColorDark.BG};
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const List = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.TEXT : ColorDark.TEXT};
`;

export const Phone = styled.p`
  width: 170px;
  text-align: left;
`;

export const Name = styled.p`
  width: 140px;
  text-align: left;
`;
