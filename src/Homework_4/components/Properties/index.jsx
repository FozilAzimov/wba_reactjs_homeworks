import React from 'react';

import { CardContext } from '../../context';
import {
  Icons,
  Parent,
  Container,
  Title,
  Text,
  Sort_Result,
  Result,
  Sort,
  Inp,
  Card_Img,
  Card_Box,
  Card,
  Card_title,
  User_img,
  Btn,
  Card_titleTop,
  Card_titleBottom,
  IconCard,
  IconBox,
  CardFooter_left,
  CardFooter_right,
  Button,
} from './style';

export default function Properties() {
  const [state, dispatch] = CardContext();
  return (
    <Parent>
      <Container>
        <Title>
          <Text type={ 'large' } m_b={ 'orta' } bold black m_t >Properties</Text>
          <Text type={ 'small' } m_b={ 'katta' } className='text'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Text>
          <Sort_Result>
            <Result>
              <Text type={ 'small' }><span style={ { color: "#0D263B" } }>13,474</span> result</Text>
            </Result>
            <Sort>
              <Text type={ 'small' }><span style={ { color: "#0D263B" } }>Sort by: </span>
                <Inp type='text' placeholder='Newest Listings' />
              </Text>
              <Icons.strelka_bottom />
            </Sort>
          </Sort_Result>

          <Card_Box>
            {
              state.map(({ src, user_img, title, text, box: { name1, name2, name3, name4 }, sum1, sum2 }) => {
                return (
                  <Card>

                    <Btn bg>featured</Btn>
                    <Btn>for sale</Btn>

                    <Card_Img src={ src } />

                    <Card_title>

                      <Card_titleTop>
                        <User_img src={ user_img } alt="user" />
                        <Text type={ 'medium' } m_b={ 'orta' } bold black>{ title }</Text>
                        <Text type={ 'small' } m_b={ 'orta' }>{ text }</Text>
                        <IconCard>
                          <IconBox>
                            <Icons.bed />
                            <Text type={ 'small' }>{ name1 }</Text>
                          </IconBox>
                          <IconBox>
                            <Icons.bath />
                            <Text type={ 'small' }>{ name2 }</Text>
                          </IconBox>
                          <IconBox>
                            <Icons.garage />
                            <Text type={ 'small' }>{ name3 }</Text>
                          </IconBox>
                          <IconBox>
                            <Icons.ruler />
                            <Text type={ 'small' }>{ name4 }</Text>
                          </IconBox>
                        </IconCard>
                      </Card_titleTop>

                      <Card_titleBottom>
                        <CardFooter_left>
                          <Text type={ 'small' } m_b={ 'orta' }>{ sum1 }</Text>
                          <Text type={ 'medium' } bold black >{ sum2 }</Text>
                        </CardFooter_left>
                        <CardFooter_right>
                          <Icons.strelka />
                          <Icons.yurak />
                        </CardFooter_right>
                      </Card_titleBottom>

                    </Card_title>
                  </Card>
                )
              })
            }
          </Card_Box>
          <Button>Show more</Button>

        </Title>
      </Container>
    </Parent>
  )
}
