import React, {Component} from 'react'
import {Divider} from 'semantic-ui-react'
import {Image} from 'semantic-ui-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>co-Director</h1>
        <Divider />
        <Image centered size='medium' src='./../public/coDirect logo.png' />
      </div>
    )
  }
}
