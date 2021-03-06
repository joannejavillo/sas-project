import React from 'react'
import { Container, Button, Form, Icon, Message } from 'semantic-ui-react'

const SignUp = ({ signup }) => (
  <Container>
    <Message
      attached
      header='Welcome to Pharmacy Procurement-SAS Page!'
      content='Fill out the form below to sign-up for a new account'
    />
    <Form className='attached fluid segment'>
      <Form.Group widths='equal'>
        <Form.Input
          fluid
          label='First Name'
          placeholder='First Name'
          type='text'
        />
        <Form.Input
          fluid
          label='Last Name'
          placeholder='Last Name'
          type='text'
        />
      </Form.Group>
      <Form.Input label='Username' placeholder='Username' type='text' />
      <Form.Input label='E-mail address' placeholder='E-mail' type='text' />
      <Form.Input label='Password' type='password' />
      <Form.Checkbox inline label='I agree to the terms and conditions' />
      <Button color='purple'>Submit</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already signed up?&nbsp;<a href='/LogInForm'>Login here</a>&nbsp;instead.
    </Message>
  </Container>
)

export default SignUp