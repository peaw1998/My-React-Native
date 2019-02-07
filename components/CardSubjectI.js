import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardSubjectI extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header button>
              <Left>
                <Thumbnail source={require('../pics/1.png')} />
                <Body>
                  <Text>Subject 1</Text>
                  <Text note>Detail</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../pics/test.jpg')} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
          </Card>
          <Card>
            <CardItem header button>
              <Left>
                <Thumbnail source={require('../pics/2.png')} />
                <Body>
                  <Text>Subject 2</Text>
                  <Text note>Detail</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../pics/test2.jpg')} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
          </Card>
          <Card>
            <CardItem header button>
              <Left>
                <Thumbnail source={require('../pics/3.png')} />
                <Body>
                  <Text>Subject 3</Text>
                  <Text note>Detail</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../pics/test.jpg')} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem >
          </Card>
          <Card>
            <CardItem header button>
              <Left>
                <Thumbnail source={require('../pics/4.png')} />
                <Body>
                  <Text>Subject 4</Text>
                  <Text note>Detail</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../pics/test3.jpg')} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}





