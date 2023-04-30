import React from 'react';
import {
  Container,
  Form,
  Img_Location,
  Inp,
  InpBox,
  Parent,
  Text,
} from './style';

import img_location from '../../assets/imgs/image.png';

export default function Location() {
  return (
    <>
      <Parent>
        <Container>
          <Form>
            <Text p_b size={ 'medium' }>Location</Text>
            <InpBox>
              <Inp placeholder='Regions' />
              <Inp placeholder='Friendly address' />
              <Inp placeholder='Map location' width m_b />
              <Img_Location src={ img_location } />
              <Inp placeholder='Latidude' />
              <Inp placeholder='Logtitude' />
            </InpBox>
          </Form>
        </Container>
      </Parent>
    </>
  )
}
