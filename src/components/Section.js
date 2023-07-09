import styled from "styled-components";

const StyleSection = styled.section`
  position: relative;
  width: 400px;
  margin: 20px auto;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const StyleTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 35px;
  text-align: center;
  color: #0f0534;
`;

export default function Section({ title, children }) {
  return (
    <StyleSection>
      {title && <StyleTitle>{title}</StyleTitle>}
      {children}
    </StyleSection>
  );
}
