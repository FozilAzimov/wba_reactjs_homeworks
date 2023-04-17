import React, { Component } from 'react'

import {
  Parent,
  Container,
  Footer_top,
  Footer_bottom,
  Footer_Box,
  Title,
  Icons,
  Text,
} from './style';
export default class Footer extends Component {
  render() {
    return (
      <Parent>
        <Container>
          <Footer_top>
            <Footer_Box type='large'>
              <Title bold>Contact Us</Title>
              <Text>
                <Icons.Pin />
                <Title>329 Queensberry Street, North Melbourne VIC 3051, Australia.</Title>
              </Text>
              <Text>
                <Icons.Phone />
                <Title>123 456 7890</Title>
              </Text>
              <Text>
                <Icons.Email />
                <Title>support@houzing.com</Title>
              </Text>
            </Footer_Box>
            <Footer_Box type='small'>

            </Footer_Box>
            <Footer_Box type='medium'>

            </Footer_Box>
            <Footer_Box type='medium'>

            </Footer_Box>
          </Footer_top>
        </Container>
        <Footer_bottom>
          <Container>

          </Container>
        </Footer_bottom>
      </Parent>
    )
  }
}
