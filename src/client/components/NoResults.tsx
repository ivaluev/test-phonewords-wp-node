import React from "react"
import {
  default as TypographyBase
} from "@material-ui/core/Typography"
import styled from "styled-components"


const Typography = styled(TypographyBase)`
  && {
    display: block;
    margin: 48px 0;
    color: ${({ theme }) => theme.colors.gray3};
  }
`

interface IProps {
  children: React.ReactNode | React.ReactNodeArray
}

export const NoResults = ({ children }: IProps) => {
  return (
    <Typography variant="h4" align="center">
      {children}
    </Typography>
  )
}
