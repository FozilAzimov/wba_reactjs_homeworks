import React from 'react';
import {
  Icons,
  Parent,
  Container,
  Filter,
  First_Filter_input,
  Modal_btn,
  Input_icon,
  Search_inp,
} from './style';

export default function Filter_Section() {
  return (
    <Parent>
      <Container>
        <Filter>
          <Input_icon>
            <Icons.filter_home />
            <First_Filter_input placeholder='Enter an address, neighborhood, city, or ZIP code' />
          </Input_icon>
          <Input_icon>
            <Icons.status />
            <Modal_btn type='submit' value="Status" />
          </Input_icon>
          <Input_icon>
            <Icons.price />
            <Modal_btn type='submit' value="Price" />
          </Input_icon>
          <Input_icon>
            <Icons.modal_icon />
            <Modal_btn type='submit' value="Advenced" />
          </Input_icon>
          <Input_icon>
            <Icons.btn_search />
            < Search_inp placeholder='Search' />
          </Input_icon>
        </Filter>
      </Container>
    </Parent>
  )
}

