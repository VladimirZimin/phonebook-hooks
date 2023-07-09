import { styled } from "styled-components";
import { MdClose } from "react-icons/md";

export const DeleteBtn = styled(MdClose)`
  background-color: none;
  color: #0f0534;
`;

export const Button = styled.button`
  padding: 0;
  font-size: 18px;
  background-color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const List = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Phone = styled.p`
  width: 120px;
  text-align: left;
`;

export const Name = styled.p`
  width: 170px;
  text-align: left;
`;
