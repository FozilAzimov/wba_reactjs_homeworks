import React from 'react';
import { DataContext } from '../../context';

import {
  Container,
  Form,
  Inp,
  InpBox,
  Parent,
  Text
} from './style'

export default function Price() {
  const [state, dispatch] = DataContext();
  return (
    <>
      <Parent>
        <Container>
          <Form>
            <Text p_b size={ 'medium' }>Price</Text>
            <InpBox>
              {
                state.map(({ Price }) => (

                  Price.map(({ placeholder }) => <Inp placeholder={ placeholder } />)

                ))
              }
            </InpBox>
          </Form>
        </Container>
      </Parent>
    </>
  )
}
