import * as React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { FAB, TextInput, Modal, Portal, Text, Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style from './Style';

export default function NewChatButton() {

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onSubmit = () => {
    Alert.alert("Chat Room Created")
  }
  
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return(
    <SafeAreaProvider>
      <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text style={Style.title} variant='titleMedium'>Create a New Chat Room!</Text>
          <TextInput
            label="Enter Chat Room Name"
          />
          <Button style={Style.createButton} mode="contained" onPress={onSubmit} >Create</Button>
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