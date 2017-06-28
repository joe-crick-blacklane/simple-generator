import {shallow} from 'enzyme'
import React from 'react'
import <%= name %> from './<%= tagName %>'

describe('<%= name %>', () => {
  it('', () => {
    const app = shallow(<<%= name %> />)
    expect().toEqual()
  })
})
