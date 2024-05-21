import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./data/types/Screens";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  )
}
