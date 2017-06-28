import React from 'react'
import { observer } from 'mobx'

@observer
export default class <%= name %> extends React.Component {
  constructor(props) {
    super(props)
  }

  render({}) {
    return (
      <div className="<%= tagName %> ">
      </div >
  )
  }
}
