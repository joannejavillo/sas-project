import React from 'react'
import { Container,Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Login = () => (
  <Container>
     <Segment color='grey' inverted padded='very' vertical align>
      <Header as='h1'>Welcome to RAH-Pharmacy Procurement-SAS Log In page</Header>
      <Image centered circular src={'pharmacy_it.jpg'} size='massive' />
    </Segment>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='purple' textAlign='center'>
        <Image src='' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='purple' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='/signup'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  <Segment color='grey'inverted='very' vertical textAlign>email:Health.RAHPharmacyProcurement@sa.gov.au-2021</Segment>
  </Container>
)

export default Login;
