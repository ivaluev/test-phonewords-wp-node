// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    name: string

    colors: {
      white: string
      gray1: string
      gray2: string
      gray3: string
      gray4: string
      gray5: string
      gray6: string
      gray7: string
      gray8: string,
      black: string,
      red: string,
      green: string,
      blue: string,
      yellow: string
    }
  }
}