import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
export default class Lesson extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem header button >
                            <Text>Lesson 1</Text>
                            <Text note>    Detail</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header button>
                            <Text>Lesson 2</Text>
                            <Text note>    Detail</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header button >
                            <Text>Lesson 3</Text>
                            <Text note>    Detail</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header button >
                            <Text>Lesson 4</Text>
                            <Text note>    Detail</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}