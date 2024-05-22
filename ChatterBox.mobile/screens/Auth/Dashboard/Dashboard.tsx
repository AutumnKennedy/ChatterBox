import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DashboardHeader from '../../../componets/headers/DashboardHeader';
import NewChatButton from '../../../componets/NewChatButton';
import SearchBar from '../../../componets/search/SearchBar';
import JoinChatByIdInput from '../../../componets/join/JoinByChatIdInput';
import { View } from 'react-native';
import Style from './Style';
import { Divider } from 'react-native-paper';

export default function Dashboard() {
    
    return(
        <SafeAreaProvider>
                <DashboardHeader/>
                <JoinChatByIdInput/>
            <NewChatButton/>
        </SafeAreaProvider>
    );
}