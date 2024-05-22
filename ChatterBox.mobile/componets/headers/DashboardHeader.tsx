import * as React from 'react';
import { View } from 'react-native';
import { Divider, IconButton, Menu, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style from './Style';
import { Ionicons } from '@expo/vector-icons';


export default function DashboardHeader () {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
     const closeMenu = () => setVisible(false);

    return (
        <SafeAreaProvider>
            <View style={Style.column}>
                <View style={Style.container}>
                        <Text style={Style.title} variant='headlineSmall'>Chatter Box</Text>
                        <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<IconButton icon="menu" size={30} onPress={openMenu} />}
                        >
                            <Menu.Item leadingIcon='account' onPress={() => {}} title="Profile" />
                            <Menu.Item leadingIcon='cog' onPress={() => {}} title="Settings" />
                            <Divider />
                            <Menu.Item leadingIcon='logout' onPress={() => {}} title="Sign Out" />
                        </Menu>
                </View>
                <View style={Style.subtitle}>
                    <Ionicons name="chatbubbles" size={28} color="black" />
                    <Text variant='headlineSmall'>Chats</Text>
                </View>
                <Divider/>
            </View>
        </SafeAreaProvider>
    )
}