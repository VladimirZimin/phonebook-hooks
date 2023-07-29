import styled from "styled-components";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";

const StyleSection = styled.section`
  position: relative;
  width: 440px;
  margin: 40px auto;
  margin-top: 30px;
  padding: 0 15px;
`;

const StyleTitle = styled.h3`
  margin-top: 70px;
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
