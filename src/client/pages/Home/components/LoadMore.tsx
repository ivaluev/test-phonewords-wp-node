import * as React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import styled from "src/client/theme/index";
import { darken } from "polished";

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

const StyledButton = styled<ButtonProps>(Button)`
  && {
    padding: 14px 30px;  
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 3px;

    &:hover {
      background-color: ${({ theme }) => darken(0.15, theme.colors.blue)};
    }

    ${({ disabled, theme }) =>
      disabled &&
      `
    background-color: ${theme.colors.gray3}; 
    `};
  }
`;