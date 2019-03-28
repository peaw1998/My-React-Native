import React, { Component } from 'react';
import { Container, Header, Left, Body, Content, Thumbnail, Text, H2, Card, CardItem } from 'native-base';
import { View, StyleSheet, Image } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            
            <Container>
                <Content >
                    <Text> </Text>
                    <Text> </Text>
                    <H2>  Name</H2>
                    <Text> </Text>
                    <Thumbnail square large source={require('../pics/User.png')} />

               
                </Content> 
            </Container>
           

        );
    }
}


