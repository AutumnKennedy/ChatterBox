import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import Style from './Style';

interface AvatarIconProps {
    size: number;
}


export default function MessageCard() {
    const LeftContent = (props: AvatarIconProps) => <Avatar.Icon {...props} icon="account" />
    return (
        <View style={Style.messageContainer}>
            <Card style={Style.message} mode='contained'>
                <Card.Title title="Quincy" subtitle="What's the move?" left={() => <LeftContent size={40}/>} />
            </Card>
            <Card style={Style.message} mode='contained'>
                <Card.Title title="Wendy" subtitle="We can meet up at my place for 7" left={() => <LeftContent size={40}/>} />
            </Card>
            <Card style={Style.message} mode='contained'>
                <Card.Title title="Brad" subtitle="Say lesssss" left={() => <LeftContent size={40}/>} />
            </Card>
            <Card style={Style.message} mode='contained'>
                <Card.Title title="Quincy" subtitle="Ight bet" left={() => <LeftContent size={40}/>} />
            </Card>
            <Card style={Style.message} mode='contained'>
                <Card.Title title="Wendy" subtitle="Any snack request?" left={() => <LeftContent size={40}/>} />
            </Card>
            <Card style={Style.message} mode='contained'>
                <Card.Title title="Brad" subtitle="Doritos plssss" left={() => <LeftContent size={40}/>} />
            </Card>
            <Card style={Style.message} mode='contained'>
                <Card.Title title="Quincy" subtitle="^^^" left={() => <LeftContent size={40}/>} />
            </Card>
        </View>
    )
    
}
