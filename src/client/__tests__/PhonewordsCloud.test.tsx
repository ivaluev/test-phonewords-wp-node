import React from "react"
import { render, fireEvent, waitForElement } from "@testing-library/react"

import PhonewordsCloud, { IProps } from "../pages/Home/components/PhonewordsCloud";

describe("<PhonewordsCloud />", () => {
  test("should display items when thouse passed", async () => {
    const { findByTestId } = renderPhonewordsCloud()
    const chip = await findByTestId("chip")

    expect(chip).toHaveTextContent("one");

  });
});

function renderPhonewordsCloud(props: Partial<IProps> = {}) {
  const defaultProps: IProps = {
    items: ["one"]
  }
  return render(<PhonewordsCloud {...defaultProps} {...props} />)
}