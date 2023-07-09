import styled from "styled-components";
import { MdAdd } from "react-icons/md";

export const FindWrap = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  background-color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const MdBtn = styled(MdAdd)`
  outline: none;
  color: 0f0534;
  font-size: 22px;
  transform: rotate(-180deg);
  transition: all 0.3s ease;
  &:hover {
    transform: rotate(180deg);
    transition: all 0.3s ease;
  }
`;

// export const Title = styled.h3`
//   margin-bottom: 20px;
//   font-size: 28px;
//   text-align: center;
//   color: #0f0534;
// `;
