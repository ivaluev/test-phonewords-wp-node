import * as styledComponents from "styled-components";

export const colors = {
  white: "#FFFFFF",
  gray1: "#ECEFF0",
  gray2: "#E4E7E8",
  gray3: "#CCCCCC",
  gray4: "#BDBDBD",
  gray5: "#7D7D7D",
  gray6: "#424242",
  gray7: "#262626",
  gray8: "#20272B",
  black: "#000000",
  red: "#B92D00",
  green: "#078B75",
  blue: "#3F51B5",
  yellow: "#FFFF8D"
};

export const theme = {
  colors,
  name: "theme"
};

export type Theme = typeof theme;
export type ThemeProps<P> = styledComponents.ThemedStyledProps<P, Theme>;

const {
  default: styled,
  css,
  keyframes,
  injectGlobal,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export default styled;
export { css, keyframes, injectGlobal, ThemeProvider };
