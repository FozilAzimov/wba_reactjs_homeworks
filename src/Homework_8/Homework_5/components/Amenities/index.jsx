import React from 'react';

import { DataContext } from '../../context';

import {
  Box,
  CheckBox,
  CheckBoxContent,
  CheckTitle,
  Container,
  Form,
  Parent,
  Text
} from './style';



export default function Amenities() {

  const [state, dispatch] = DataContext();
  return (
    <>
      <Parent>
        <Container>
          <Box>
            <Text p_b black bold size={ 'medium' }>Amenities</Text>
            <Form>

              <CheckBoxContent>
                {
                  state.map(({ InputData }) => (
                    InputData.map(({ name }) => (
                      <CheckTitle>
                        <CheckBox type='checkbox' />
                        <Text gray size={ 'small' }>{ name }</Text>
                      </CheckTitle>
                    ))
                  ))
                }
              </CheckBoxContent>
            </Form>
          </Box>
        </Container>
      </Parent>
    </>
  )
}
