import styled from "styled-components";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";

const StyleSection = styled.section`
  position: relative;
  width: 400px;
  margin: 20px auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyleTitle = styled.h3`
  padding-bottom: 25px;
  font-size: 35px;
  text-align: center;
  color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.TITLE : ColorDark.TITLE};
`;

export default function Section({ title, children }) {
  return (
    <StyleSection>
      {title && <StyleTitle>{title}</StyleTitle>}
      {children}
    </StyleSection>
  );
}
