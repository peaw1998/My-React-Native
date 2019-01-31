import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class MainHeader extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
           
          </Right>
        </Header>
      </Container>
    );
  }
}