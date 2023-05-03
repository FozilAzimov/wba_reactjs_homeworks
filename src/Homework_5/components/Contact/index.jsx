import React, { useRef } from 'react';
import {
  Container,
  Form,
  Inp,
  InpBox,
  Label,
  Parent,
  Text
} from './style';

export default function Contact() {

  const value = useRef(<input />);
  const func = () => {
    console.log(value.current.value);
  }
  return (
    <>
      <Parent>
        <Container>
          <button onClick={ func }>Click</button>
          <Text p_t p_b bold size={ 'large' }>Add new property</Text>
          <Form>
            <Text bold size={ 'medium' }>Contact information</Text>
            <InpBox>
              <Inp ref={ value } placeholder='Property title*' />
              <Inp placeholder='Type' />
            </InpBox>
            <Label>Property Description*</Label>
            <InpBox>
              <Inp width />
            </InpBox>
          </Form>
        </Container>
      </Parent>
    </>
  )
}
