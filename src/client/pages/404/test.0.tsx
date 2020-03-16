import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import NotFound from "."

describe("NotFound Component (RTU)", () => {

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
  
  it("renders with or without a text", () => {
    act(() => {
      render(<NotFound text="Test Render" />, container)
    })
  
    expect(container.textContent).toBe("Test Render")
  
    act(() => {
      render(<NotFound text="No GO" />, container)
    })
  
    expect(container.textContent).toBe("No GO")
  })
})
