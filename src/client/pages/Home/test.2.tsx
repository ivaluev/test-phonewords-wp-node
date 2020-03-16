import React from "react"

import Home from "."
import { ThemeProvider } from "../../theme/styled"
import { theme } from "../../theme/theme"
import { mount } from "enzyme"
import { InputBase } from "@material-ui/core"
import { act } from "@testing-library/react"

jest.mock("../../api/phonewords")

describe("Home-Enzyme", () => {

  it("gets results when search changes", async () => {

    const wrapper = mount(<ThemeProvider theme={theme}><Home /></ThemeProvider>)

    const input = wrapper.find(InputBase)

    console.log(input.props())
    
    expect(input).toHaveProp("value", "")

    const e: any = { 
      currentTarget: { 
        value: "23",
      }
    }

    act(() => {
      // input.simulate("change", e)
      input.prop("onChange")(e)
    })
    

    const inputNext = wrapper.update().find(InputBase)

    console.log(inputNext.props())
    
    expect(inputNext).toHaveProp("value", "23")
  })
})




