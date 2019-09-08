import React, {Component} from 'react'
import {Image} from 'semantic-ui-react'

export default class Graph extends Component {
  render () {
    return (
      <div>
        <p>This is a graph that shows the relationships</p>
        <p>Click on a company to display the relationships to your person searched</p>
          <Image centered size='large' src='/images/neo.png' />
      </div>
    )
  }
}
