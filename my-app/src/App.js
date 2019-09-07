import React, {Component} from 'react'
import PersonOne from './PersonOne'
import PersonTwo from './PersonTwo'
import {Divider} from 'semantic-ui-react'
import {Image, Grid} from 'semantic-ui-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <Image centered circular size="small" src='/images/co.png'></Image>
        <Divider />
      <div>
          <Grid>
          <Grid.Column width={4}>
          <PersonOne />
          </Grid.Column>
          <Grid.Column width={8}>
            <p>This is a graph that shows the relationships</p>
            <p>Click on a company to display the relationships to your person searched</p>
          <Image centered size='large' src='/images/co1.png' />
          </Grid.Column>
          <Grid.Column width={4}>
          <PersonTwo />
          </Grid.Column>
        </Grid>
        </div>
      </div>
    )
  }
}
