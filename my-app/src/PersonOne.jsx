import React, {Component} from 'react'
import {Form, Icon, Header, FormField, Input} from 'semantic-ui-react'

export default class PersonOne extends Component {
  render () {
    return (
      <div>
          <Form>
            <center><Icon centered name='user' circle size='big' /></center>
          <Header textAlign='center'>Person One</Header>
          <br></br>
          <FormField>
          <label htmlFor='Name'>Search</label>
          <br></br>
          <Input
            placeholder='Name'
            type='text' 
            name='Name'
          />
          <Form.Button>Submit</Form.Button>
          </FormField>
          </Form>
      </div>
    )
  }
}
