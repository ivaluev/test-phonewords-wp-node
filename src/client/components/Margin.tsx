import React from "react"
import styled from "styled-components";

interface IProps {
  margin?: string;
	className?: string;
	children?: React.ReactNode | React.ReactNodeArray;
}

const StyledMargin = styled.div<IProps>`
  margin: ${props => props.margin};
`

export const Margin = ({ margin, className, children }: IProps) => {
	return (
		<StyledMargin margin={margin} className={className}>
			{children}
		</StyledMargin>
	);
};

Margin.defaultProps = {
	margin: "0px",
	className: ""
};