import React from "react"
import NotFound, { Props } from "."

import { shallow, ShallowWrapper } from "enzyme"

function setUp(props: Props = {}) {
  const wrapper = shallow(<NotFound {...props}/>)
  return wrapper
}

describe("NotFound Component (ENZ)", () => {

  let component: ShallowWrapper
  beforeEach(() => {
    component = setUp()
  })

  it("Should render without errors", () => {
    const txt = component.find(`[data-testid="NotFound"]`)
    expect(txt.length).toBe(1)
  })

  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot()
  })
})