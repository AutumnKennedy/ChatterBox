import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Style from './Style';
import { View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import MessageCard from '../../../componets/messages/message/messageCard';
import ChatRoomTextInput from '../../../componets/textInput/input/ChatRoomTextInput';
import ChatRoomHeader from '../../../componets/headers/ChatRoomHeader';

interface AvatarIconProps {
    size: number;
}

export default function ChatRoomScreen() {
    const LeftContent = (props: AvatarIconProps) => <Avatar.Icon {...props} icon="account" />
    return (
        <SafeAreaProvider>
            <SafeAreaView style={Style.container}>
                <View style={Style.headerContainer}>
                    <ChatRoomHeader/>
                </View>
                <View style={Style.messageContainer}>
                    <MessageCard/>
                </View>
                <View style={Style.textInputContainer}>
                    <ChatRoomTextInput/>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
} 