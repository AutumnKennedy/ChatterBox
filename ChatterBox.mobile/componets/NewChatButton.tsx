import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, TextInput, Modal, Portal, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function NewChatButton() {

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {backgroundColor: 'white', padding: 20};

  return(
    <SafeAreaProvider>
      <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text variant='titleMedium'>Create a New Chat Room!</Text>
          <TextInput
            label="Enter Chat Room Name"
          />
          </Modal>
      </Portal>
      <FAB
        icon="plus"
        style={styles.fab}
        size= 'large'
        onPress={showModal}
        />
      </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  })