import React from 'react'
import { observer } from 'mobx-react'
import applyStyles from 'next-style-loader/applyStyles'
import styles from './<%= tagName %>.scss'

const <%= name %> = observer(props => (
  <div className="<%= tagName %>">
  </div>
))

export default applyStyles(styles)(<%= name %>)
