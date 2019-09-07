import React, {Component} from 'react'
import {Divider} from 'semantic-ui-react'
import {Form, Header, Image, Grid, FormField, Input} from 'semantic-ui-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Co-Director</h1>
        <Divider />
        <Image centered circular size="small" src='/images/co.png'></Image>
        <br></br>
        <br></br>
      <div>
          <Grid>
          <Grid.Column width={4}>
          <Form>
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
          </Grid.Column>
          <Grid.Column width={8}>
          <Image centered size='large' src='/images/co1.png' />
          </Grid.Column>
          <Grid.Column width={4}>
          <Form>
          <Header>Person Two</Header>
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
          </Grid.Column>
        </Grid>
        </div>
      </div>
    )
  }
}
