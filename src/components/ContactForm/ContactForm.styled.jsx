import styled from "styled-components";

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
  background-color: #fff;
  box-shadow: 0 5px 4px -5px rgba(0, 0, 0, 0.3);
`;

export const Button = styled.button`
  margin-top: 10px;
  border: none;
  outline: none;
  background-color: white;
  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
`;
