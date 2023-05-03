import React, { Component } from 'react';

import {
  Card,
  Icons,
  TopBox,
  Card_title,
} from './style';

export default class Testimonials_Card extends Component {
  render() {
    return (
      <Card>
        <TopBox>“ I believe in lifelong learning and Skola is a great place to learn from experts. I've learned a lot and recommend it to all my friends “</TopBox>
        <Icons.User_img />
        <Card_title bold>Marvin McKinney</Card_title>
        <Card_title>Designer</Card_title>
      </Card>
    )
  }
}
