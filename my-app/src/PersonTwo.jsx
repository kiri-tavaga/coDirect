import React, {Component} from 'react'
import {Form, Icon, Header, FormField, Input} from 'semantic-ui-react'

export default class PersonTwo extends Component {
  render () {
    return (
      <div>
          <Form>
            <Icon name='building outline' circle size='big' />
          <Header textAlign='center'>Companies and Relationships</Header>
          <br></br>
          <FormField>
          <label htmlFor='Name'>Companies</label>
          <p>This shows the companies your person has interests in as a director or shareholder</p>
          <br></br>
          <Input
            placeholder='Name'
            type='text' 
            name='Companies'
          />
          <br></br>
          </FormField>
          <FormField>
          <label htmlFor='Name'>Relationships</label>
          <p>This shows other people with interests in the same companies as a director or shareholder</p>
          <br></br>
          <Input
            placeholder='Name'
            type='text' 
            name='Companies'
          />
          </FormField>
          </Form>
      </div>
    )
  }
}
