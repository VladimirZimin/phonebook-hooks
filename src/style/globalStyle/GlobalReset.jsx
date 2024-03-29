import { createGlobalStyle } from "styled-components";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";

const GlobalReset = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: ${({ theme }) =>
    theme.current === Theme.LIGHT ? ColorLight.BG : ColorDark.BG} 
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.react-icons {
  position: absolute;
  top: 7px;
  left: 6px;
}

input {
  padding-left: 25px;
}
`;

export default GlobalReset;
