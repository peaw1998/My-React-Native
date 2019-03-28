import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardSubjectI extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>

                        <CardItem cardBody>
                            <Image source={require('../pics/test.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                    </Card>
                </Content>
            </Container>

        );
    }
}





