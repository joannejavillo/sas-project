import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu size='large' inverted>
                <Menu.Item
                    name='HELLO, Welcome to SAS page'
                //   active={activeItem === 'home'}
                //   onClick={this.handleItemClick}
                />
                {/* <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        /> */}

                {/* <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}

                <Menu.Item position="right">
                    <Button inverted color='grey'>Log Out</Button>
                </Menu.Item>
                {/* </Menu> */}
            </Menu >

        )
    }
}