import * as React from 'react';
import { Avatar, Button, Card, Divider, Text } from 'react-native-paper';
import Style from './Style';
import { View } from 'react-native';

interface AvatarIconProps {
    size: number;
}


export default function MessagePreviewCard() {
    const LeftContent = (props: AvatarIconProps) => <Avatar.Icon {...props} icon="account" />
    return (
        <View>
            <Divider/>
            <Card style={Style.messagePreview} mode="contained">
                <Card.Title title="Chat Room Name" subtitle="Message preview..." left={() => <LeftContent size={40}/>} />
            </Card>
            <Divider/>
        </View>
        
    )
    
}
