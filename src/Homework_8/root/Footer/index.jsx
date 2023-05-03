import React from 'react';

import {
  Parent,
  Container,
  Footer_top,
  Footer_bottom,
  Footer_Box,
  Title,
  Icons,
  Text,
  Footer_icons,
  Opasity,
  Footer_logo,
  Footer_title,
  Footer_text,
  Top_icon
} from './style';

export default function Footer() {
  return (
    <Parent>
      <Container>
        <Footer_top>
          <Footer_Box type='large'>
            <Title bold>Contact Us</Title>
            <Text height>
              <Icons.Pin />
              <Title type="margin">329 Queensberry Street, North Melbourne VIC 3051, Australia.</Title>
            </Text>
            <Text height>
              <Icons.Phone />
              <Title type="margin">123 456 7890</Title>
            </Text>
            <Text height>
              <Icons.Email />
              <Title type="margin">support@houzing.com</Title>
            </Text>
            <Footer_icons>
              <Icons.Facebook />
              <Icons.Twitter />
              <Icons.Instagram active />
              <Icons.Linkedin />
              <Opasity />
            </Footer_icons>
          </Footer_Box>
          <Footer_Box type='small'>
            <Title bold>Discover</Title>
            <Text>
              <Title>Chicago</Title>
            </Text>
            <Text>
              <Title>Los Angeles</Title>
            </Text>
            <Text>
              <Title>Miami</Title>
            </Text>
            <Text>
              <Title>New York</Title>
            </Text>
          </Footer_Box>
          <Footer_Box type='medium'>
            <Title bold>Lists by Category</Title>
            <Text>
              <Title>Apartments</Title>
            </Text>
            <Text>
              <Title>Condos</Title>
            </Text>
            <Text>
              <Title>Houses</Title>
            </Text>
            <Text>
              <Title>Offices</Title>
            </Text>
            <Text>
              <Title>Retail</Title>
            </Text>
            <Text>
              <Title>Villas</Title>
            </Text>
          </Footer_Box>
          <Footer_Box type='medium'>
            <Title bold>Lists by Category</Title>
            <Text>
              <Title>About Us</Title>
            </Text>
            <Text>
              <Title>Terms & Conditions</Title>
            </Text>
            <Text>
              <Title>Support Center</Title>
            </Text>
            <Text>
              <Title>Contact Us</Title>
            </Text>
          </Footer_Box>
        </Footer_top>
      </Container>
      <Footer_bottom>
        <Container>
          <Footer_logo>
            <Footer_title>
              <Icons.Logo />
              <Title bold>Houzing</Title>
            </Footer_title>
            <Footer_text>
              <Title>Copyright © 2023 CreativeLayers. All Right Reserved.</Title>
              <Top_icon><Icons.TopIcon /></Top_icon>
            </Footer_text>
          </Footer_logo>
        </Container>
      </Footer_bottom>
    </Parent>
  )
}
