import * as React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import { darken } from "polished"

interface IProps {
  onClick: any;
  page?: number;
  total?: number;
  disabled?: boolean;
  className?: string;
}

export const LoadMore = ({ onClick, page = 0, total = 0, disabled = false, className = "" }: IProps) => {
  return (
      <ButtonContainer>
        <StyledButton
          onClick={onClick}
          className={className}
          disabled={disabled}
        >
          Load More
        </StyledButton>
      </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`

const StyledButton = styled(Button)`
  && {
    padding: 14px 30px;  
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 3px;

    &:hover {
      background-color: ${props => darken(0.15, props.theme.colors.blue)};
    }

    ${({ disabled, theme }) =>
      disabled &&
      `background-color: ${theme.colors.gray3}; 
    `};
  }
`;