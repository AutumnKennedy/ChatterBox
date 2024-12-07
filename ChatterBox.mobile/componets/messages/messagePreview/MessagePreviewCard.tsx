import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

interface AvatarIconProps {
    size: number;
}


export default function MessagePreviewCard() {
    const LeftContent = (props: AvatarIconProps) => <Avatar.Icon {...props} icon="account" />
    return (
        <Card>
            <Card.Title title="Chat Room Name" subtitle="Message preview..." left={() => <LeftContent size={40}/>} />
            {/* <Card.Content>
            <Text variant="titleLarge">Chat Room Name</Text>
            <Text variant="bodyMedium">Message preview...</Text>
            </Card.Content> */}
        </Card>
    )
    
}
