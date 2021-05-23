import React from 'react';
import {
  Header,
  Image,
  Segment
} from 'semantic-ui-react'



const Title = ({name}) => {
  return (
    <Segment color='grey'inverted padded='very' vertical>
      <Header as='h1'> Royal Adelaide Hospital - {name}</Header>
      <Image centered src={'RAH.jpeg'} size={'medium'}/>
      <Header as='h3'> Pharmacy Procurement - SAS drugs - SOS page </Header>
    </Segment>
  )
}

export default Title
