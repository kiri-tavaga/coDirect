import React, {Component} from 'react'
import {Form, Icon, Header, FormField, Input} from 'semantic-ui-react'

export default class PersonTwo extends Component {
  render () {
    return (
      <div>
          <Form>
            <center><Icon name='building outline' circle size='big' /> </center>
          <Header textAlign='center'>Companies and Relationships</Header>
          <br></br>
          <FormField>
          <center><label htmlFor='Name'>Companies</label></center>
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
          <center><label htmlFor='Name'>Relationships</label></center>
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
