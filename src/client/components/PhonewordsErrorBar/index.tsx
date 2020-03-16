import React from "react"
import { rgba } from "polished"
import styled from "styled-components"

interface IProps {
  className?: string
  children: React.ReactNode | React.ReactNodeArray
}

const StyledError = styled.div<IProps>`
  padding: 15px 20px;
  color: ${({ theme }) => theme.colors.white};  
  font-weight: 600;  
  background-color: ${({ theme }) => rgba(theme.colors.red, 0.7)};
`;

export default function PhonewordsErrorBar({ className, children }: IProps) {
  return <StyledError className={className}>{children}</StyledError>
}

PhonewordsErrorBar.defaultProps = {
  className: ""
}
