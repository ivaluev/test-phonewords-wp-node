import React from "react"

import Home from "."
import { ThemeProvider } from "../../theme/styled"
import { theme } from "../../theme/theme"
import { render, fireEvent, wait } from "@testing-library/react"

jest.mock("../../api/phonewords")

describe("<Home />", () => {

  it("gets results when search changes", () => {

    const { container } = render(<ThemeProvider theme={theme}><Home /></ThemeProvider>)

    const input: HTMLInputElement = container.querySelector("input#search")
    // const input = getByTestId("search") as HTMLInputElement // "input#search"

    expect(input).toBeTruthy()

    fireEvent.change(input, { target: { value: "23" } })
  
    expect(input.value).toBe("23") // eewew

    wait(() => {
      // expect(getByText('the lion king')).toBeInTheDocument()
      expect(container.textContent).toContain("Try entering numbers")
    })
  })
})




