import React, {Component} from 'react'
import {Embed} from 'semantic-ui-react'

export default class Graph extends Component {
  render () {
    return (
      <div>
        <p>This is a graph that shows the relationships</p>
        <p>Click on a company to display the relationships to your person searched</p>
          <Embed 
          id='0aYWwZ0X65c'
          source='youtube'
          icon='right circle arrow'
          placeholder='/images/neo.png'
          >
          </Embed>
      </div>
    )
  }
}
