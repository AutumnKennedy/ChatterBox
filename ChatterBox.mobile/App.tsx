import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./data/types/Screens";
import DashboardHeader from "./componets/headers/DashboardHeader";
import { PaperProvider } from "react-native-paper";
import NewChatButton from "./componets/createChatModal/NewChatButton";
import SearchBar from "./componets/search/SearchBar";
import JoinChatByIdInput from "./componets/join/JoinByChatIdInput";
import Dashboard from "./screens/Auth/Dashboard/Dashboard";
import ChatRoomScreen from "./screens/Auth/ChatRoom/ChatRoomScreen";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <PaperProvider>
      <ChatRoomScreen/>
      {/* <Dashboard/> */}
      {/* <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home" 
      >
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          title: '',
          headerStyle: {
            backgroundColor: '#b887e1',
          },
        }}
        />
        <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ 
          title: '',
          headerStyle: {
            backgroundColor: '#b887e1',
          },
        }}
        />
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ 
          title: '',
          headerStyle: {
            backgroundColor: '#b887e1',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer> */}
    </PaperProvider>
  )
}
