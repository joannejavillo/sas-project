import React from 'react';
import {
  Container,
  Header,
  Image,
  Segment
} from 'semantic-ui-react'
import SignUp from '../SignupForm';


const Title = ({name}) => {
  return (
    <Container>
    <Segment color='grey'inverted padded='very' vertical>
      <Header as='h1'> Royal Adelaide Hospital - {name}</Header>
      <Image centered src={'RAH.jpeg'} size={'medium'}/>
      <Header as='h3'> Pharmacy Procurement - SAS drugs - SOS page </Header>
      <SignUp/>
    </Segment>
    </Container>
  )
}

export default Title
