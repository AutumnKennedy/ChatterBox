import * as React from 'react';
import { View } from 'react-native';
import { Divider, IconButton, Menu, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style from './Style';
import { Ionicons } from '@expo/vector-icons';


export default function ChatRoomHeader () {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
     const closeMenu = () => setVisible(false);

     let ChatroomTitle; //Will be passed in through props
     let ChatroomIcon;  //Will be passed in through props

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
                            <Menu.Item leadingIcon='account-plus' onPress={() => {}} title="Invite"/>
                            <Divider />
                            <Menu.Item leadingIcon='close' onPress={() => {}} title="Unsubscribe" />
                        </Menu>
                </View>
                <View style={Style.subtitle}>
                    <Ionicons name={ChatroomIcon} size={28} color="black" />
                    <Text variant='headlineSmall'>{ChatroomTitle}</Text>
                </View>
                <Divider/>
            </View>
        </SafeAreaProvider>
    )
}