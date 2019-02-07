import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text, H2 } from 'native-base';

export default class Profile extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <H2>NAME</H2>
                    <Thumbnail source={require('../pics/4.png')} />
                    {/* <Thumbnail source={require('../pics/test.jpg')} />
                    <Thumbnail large source={require('../pics/4.png')} /> */}
                </Content>
            </Container>
        );
    }
}