import React from 'react';

import { DataContext } from '../../context';

import {
  Box,
  Container,
  Icons,
  Img_Box,
  Inp,
  InpBox,
  Label,
  Media_Btn,
  Media_Icon,
  Media_Img_Box,
  Parent,
  Text
} from './style'

export default function Media() {
  const [state, disatch] = DataContext();
  return (
    <>
      <Parent>
        <Container>
          <Box>
            <Text p_b size={ 'medium' }>Media</Text>
            <Text gray size={ 'small' }>Featured image</Text>
            <Media_Img_Box>
              {
                state.map(({ MediaImg }) => (
                  MediaImg.map(({ src }) => (
                    <Img_Box>{ src }</Img_Box>
                  ))
                ))
              }
            </Media_Img_Box>
            <Media_Btn>Upload</Media_Btn>
            <Text gray size={ 'small' }>Gallery</Text>
            <Media_Btn>Upload</Media_Btn>
            <Text gray size={ 'small' }>Attachment</Text>
            <Media_Icon>
              <Icons.File />
              <Text gray size={ 'small' }>test_property.pdf</Text>
            </Media_Icon>
            <Media_Btn>Upload</Media_Btn>

            <InpBox>
              <Inp placeholder='Video link' />
            </InpBox>
            <Label>Virtual tour</Label>
            <InpBox>
              <Inp width />
            </InpBox>

          </Box>
        </Container>
      </Parent>
    </>
  )
}
