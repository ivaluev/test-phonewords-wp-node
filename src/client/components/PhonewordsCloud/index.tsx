import React from "react"
import { Chip } from "@material-ui/core"
import styled from "styled-components"

export interface IProps {
  items: string[]
}

export default function PhonewordsCloud({ items }: IProps) {
  return (
    <ChipContainer data-testid="chip-container">
      {items && items.map(i => <Chip variant="outlined" key={i} label={i} data-testid="chip"/>)}
    </ChipContainer>
  )
}

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    margin: 10px;
  }
`