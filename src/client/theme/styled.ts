// styled-components.ts
import * as styledComponents from "styled-components"
import { theme } from "./theme"
import { DefaultTheme as Theme } from "styled-components"

// export type Theme = typeof theme
export type ThemeProps<P> = styledComponents.ThemedStyledProps<P, Theme>;

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, keyframes, ThemeProvider }
export default styled