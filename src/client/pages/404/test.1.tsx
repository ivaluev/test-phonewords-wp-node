import React from "react"
import { render, fireEvent, waitForElement } from "@testing-library/react"
import NotFound, { Props } from "."


function renderNotFoundForm(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    text: "Not Found"
  }
  return render(<NotFound {...defaultProps} {...props} />)
}


describe("NotFound Component (RTL)", () => {

  it("Should display with Not Found text", async () => {

    const { findByTestId } = renderNotFoundForm()

    const notFoundForm = await findByTestId("NotFound")

    expect(notFoundForm).toHaveTextContent("Not Found");

  })
})

