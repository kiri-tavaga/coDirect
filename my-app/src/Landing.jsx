import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Divider,FormField, Button} from 'semantic-ui-react'
import {Image, Form, Grid} from 'semantic-ui-react'

export default class Landing extends Component {
  render () {
    return (
    <div>
        <Image centered circular size="medium" src='/images/co.png'></Image>
        <Divider />
        <Grid centered columns={2}>
    <Grid.Column>
      <Form class="ui large form"/>
      <p>Search the companies register to find the business interests they have</p>
        <FormField>
          <div class="ui fluid left icon input">
            <input placeholder="Name" type="text"/>
            <i aria-hidden="true" class="user icon"></i>
          </div>
          <Button as={Link} to='/home'
              className='ui huge button'
              color='red' 
              fluid>
              Search<i className="right arrow icon"></i>
          </Button>
        </FormField>
    </Grid.Column>
    </Grid>
    </div>
    )
  }
}
