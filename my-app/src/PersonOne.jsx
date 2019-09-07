import React, {Component} from 'react'
import {Form, Icon, Header, FormField, Input} from 'semantic-ui-react'

export default class PersonOne extends Component {
  render () {
    return (
      <div>
          <Form>
            <Icon name='user' circle size='big' />
          <Header>Person One</Header>
          <br></br>
          <FormField>
          <label htmlFor='Name'>Search</label>
          <br></br>
          <Input
            placeholder='Name'
            type='text' 
            name='Name'
          />
          <br></br>
          <Input
            placeholder='Address'
            type='text' 
            name='Address'
          />
          <Form.Button>Submit</Form.Button>
          </FormField>
          </Form>
      </div>
    )
  }
}
