import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import Style from './Style';


export default function TypingIndicator() {
    let username = "Wendy"; //Will be passed in through props in the future
    return(
        <View style={Style.container}>
            <Avatar.Icon size={24} icon="account" />
            <Text variant='labelLarge'>{username} is typing...</Text>
        </View>
    )
}