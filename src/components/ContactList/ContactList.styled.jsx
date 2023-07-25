import { styled } from "styled-components";
import { MdClose } from "react-icons/md";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";
import { motion } from "framer-motion";

export const DeleteBtn = styled(MdClose)`
  background-color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.BG : ColorDark.BG};
  color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorDark.BG : ColorLight.DELETEBTN};
`;

export const Button = styled.button`
  padding: 0;
  font-size: 18px;
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
  color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.TEXT : ColorDark.TEXT};
`;

export const Phone = styled.p`
  width: 120px;
  text-align: left;
`;

export const Name = styled.p`
  width: 170px;
  text-align: left;
`;
