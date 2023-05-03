import React from 'react';
import {
  Container,
  Form,
  Inp,
  InpBox,
  Option,
  Parent,
  Select,
  Text,
} from './style';

export default function Additional() {
  return (
    <>
      <Parent>
        <Container>
          <Form>
            <Text p_b bold size={ 'medium' }>Additional</Text>
            <InpBox>
              <Inp placeholder='Property ID' />
              <Select>
                <Option value={ 'Parent property-1' } >Parent property</Option>
                <Option value={ 'Parent property-2' } >Parent property-2</Option>
                <Option value={ 'Parent property-3' } >Parent property-3</Option>
              </Select>
              <Select>
                <Option value={ 'Status-1' } >Status</Option>
                <Option value={ 'Status-2' } >Status-2</Option>
                <Option value={ 'Status-3' } >Status-3</Option>
              </Select>
              <Inp placeholder='Label' />
              <Inp placeholder='Material' />
              <Inp placeholder='Rooms' />
              <Inp placeholder='Beds' />
              <Inp placeholder='Baths' />
              <Inp placeholder='Garages' />
              <Inp placeholder='Year bulid' />
              <Inp placeholder='Home area (sqft)' />
              <Inp placeholder='Lot dimensions' />
              <Inp placeholder='Lot area (sqft)' />
            </InpBox>
          </Form>
        </Container>
      </Parent>
    </>
  )
}
