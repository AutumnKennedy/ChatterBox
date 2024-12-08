import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DashboardHeader from '../../../componets/headers/DashboardHeader';
import NewChatButton from '../../../componets/createChatModal/NewChatButton';
import SearchBar from '../../../componets/search/SearchBar';
import JoinChatByIdInput from '../../../componets/join/JoinByChatIdInput';
import { View } from 'react-native';
import Style from './Style';
import { Divider, Text } from 'react-native-paper';
import MessagePreviewCard from '../../../componets/messages/messagePreview/MessagePreviewCard';

export default function Dashboard() {
    
    return(
        <SafeAreaProvider>
            <SafeAreaView style={Style.container}>
                <View style={Style.headerContainer}>
                    <DashboardHeader/>
                </View>
                <View style={Style.inputContainer}>
                    <JoinChatByIdInput/>
                </View>
                <View style={Style.messagePreviewContainer}>
                    <Text style={Style.mainText} variant="titleLarge"> Create or Join an Existing {"\n"}Chat Room to Start Chatting!</Text>
                    <MessagePreviewCard/>
                </View>
            </SafeAreaView>
            <NewChatButton/>
        </SafeAreaProvider>
    );
}