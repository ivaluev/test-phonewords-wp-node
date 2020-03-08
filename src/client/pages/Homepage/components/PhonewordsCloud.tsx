import React from "react"
import styled from "src/client/theme"
import { Chip } from "@material-ui/core"

interface IProps {
  items: string[]
}

export default function PhonewordsCloud({ items }: IProps) {
  return (
    <ChipContainer>{items && items.map(i => <Chip key={i} label={i} />)}</ChipContainer>
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