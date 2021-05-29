import React, { useState } from 'react'
import { Container, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import Footer from '../Footer';

function Login() {
  const [email, loginMail] = useState();
  const [password, loginPass] = useState();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(email);
    //console.log(password);
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log({ response });
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        history.push('/homepage');
      } else {
        console.log(response);
      }
    }

  }

  return (
    <>
      <Container>
        <Segment color='grey' inverted padded='very' vertical align>
          <Header as='h1'>Welcome to RAH-Pharmacy Procurement-SAS Log In page</Header>
          <Image centered circular src={'pharmacy_it.jpg'} size='massive' />
        </Segment>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='purple' textAlign='center'>
              <FontAwesomeIcon icon="prescription" /> Log-in to your account
      </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={e => loginMail(e.target.value)} />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={e => loginPass(e.target.value)}
                />

                <Button color='purple' fluid size='large' onClick={handleLogin}>
                  Login
          </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='/signup'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </Container>
      <Footer fluid > </Footer>
    </>
  )

}
export default Login;
