import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act, Simulate } from "react-dom/test-utils"

import Home from "."
import { theme } from "../../theme/theme"
import { ThemeProvider } from "styled-components"

jest.mock("../../api/phonewords")

let container: HTMLDivElement = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders using async", () => {

  // expect.assertions(1)
  // const words = await getPhonewords("123")
  // expect(words).toContain("efwefefew")

  // Use the asynchronous version of act to apply resolved promises
  act(() => {
    render(<ThemeProvider theme={theme}><Home /></ThemeProvider>, container)
  });

  
  expect(container.textContent).toContain("Try entering numbers")

  const input: HTMLInputElement = container.querySelector("input#search")

  act(() => {
    input.value = "23"
    Simulate.change(input)
  });

  expect(input.value).toBe("23") // eewew

  expect(container.textContent).toContain("Try entering numbers")
  // const chipsContainer = container.querySelector("div[data-testid='chip-container']")
  
  // expect(chipsContainer).toBeTruthy()
})


