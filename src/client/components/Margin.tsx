import React from "react"
import styled from "src/client/theme/index"

const StyledMargin = styled<IProps, "div">("div")`
	margin: ${({ margin }) => margin};
`

interface IProps {
	margin?: string;
	className?: string;
	children?: React.ReactNode | React.ReactNodeArray;
}

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