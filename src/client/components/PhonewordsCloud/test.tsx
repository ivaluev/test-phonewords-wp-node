import React from "react"

import PhonewordsCloud, { IProps } from ".";
import { render } from "@testing-library/react";

describe("PhonewordsCloud Component", () => {

  test("should display items when thouse passed", async () => {
    const { findByTestId } = renderPhonewordsCloud()
    const chip = await findByTestId("chip")

    expect(chip).toHaveTextContent("one");

  })
  
})


function renderPhonewordsCloud(props: Partial<IProps> = {}) {
  const defaultProps: IProps = {
    items: ["one"]
  }
  return render(<PhonewordsCloud {...defaultProps} {...props} />)
}