import React from 'react';
import { DataContext } from '../../context';

import {
  Container,
  Form,
  Inp,
  InpBox,
  Parent,
  Property_Btn,
  Property_BtnBox,
  Text
} from './style'

export default function Energy() {

  const [state, dispatch] = DataContext();
  return (
    <>
      <Parent>
        <Container>
          <Form>
            <Text p_b size={ 'medium' }>Select Energy Class</Text>
            <InpBox>
              {
                state.map(({ Energy }) => (

                  Energy.map(({ placeholder }) => <Inp placeholder={ placeholder } />)

                ))
              }
            </InpBox>
          </Form>
          <Property_BtnBox>
            <Property_Btn>Submit</Property_Btn>
          </Property_BtnBox>
        </Container>
      </Parent>
    </>
  )
}
