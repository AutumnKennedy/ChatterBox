import * as React from 'react';
import { View } from 'react-native';
import { Divider, FAB, TextInput } from 'react-native-paper';
import Style from './Style';
import TypingIndicator from '../typingIndicator/typingIndicator';

export default function ChatRoomTextInput() {
    const [text, setText] = React.useState("Type message");
    return (
        <View style={Style.container}>
            <Divider/>
            <TypingIndicator/>
            <FAB
                icon="plus"
                style={Style.FAB}
                onPress={() => console.log('Pressed')}
            />
            <View style={Style.textInput}>
                <TextInput
                value={text}
                onChangeText={text => setText(text)}
                right={<TextInput.Icon icon="microphone"/>}
                mode="outlined"
                />
            </View>
        </View>
    );
}