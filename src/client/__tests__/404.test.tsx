import React from "react"
import { render, fireEvent, waitForElement } from "@testing-library/react"

import NotFound, { Props } from "../pages/404"

describe("<NotFound />", () => {
  test("should display with Not Found text", async () => {
    const { findByTestId } = renderNotFoundForm()
    const notFoundForm = await findByTestId("not-found-form")

    expect(notFoundForm).toHaveTextContent("Not Found");

  });
});

function renderNotFoundForm(props: Partial<Props> = {}) {
  const defaultProps: Props = {
    text: "Not Found"
  }
  return render(<NotFound {...defaultProps} {...props} />)
}