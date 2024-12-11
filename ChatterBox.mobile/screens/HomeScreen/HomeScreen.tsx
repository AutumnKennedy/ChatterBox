import * as React from 'react';
import { Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Style from './Style';
import { LinearGradient } from 'expo-linear-gradient';
import { HomeScreenProps } from '../../data/types/Screens';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
      <LinearGradient
        colors={['#781a44','#5252d4', '#7575dd', 'white']}
        style={Style.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
      <SafeAreaView style={Style.container}>
      <ScrollView>
        <Text style={Style.title} variant="displayMedium">
          Chatter Box
        </Text>
        <View style={Style.logo}>
        <Image 
            source={require('../../assets/logo.webp')}  
            style={{ width: 300, height: 300 }} 
          />
        </View>
        <View>
          <Text style={Style.subtitle} variant="titleMedium">
            Discover and connect with new friends! {"\n"}Chat like you’ve never chatted before!
          </Text>
        </View>
        <View style={Style.buttons}>
        <Button
            textColor="#5252d4"
            buttonColor="#FAF9F6"
            mode="elevated"
            contentStyle={Style.buttonContent}
            labelStyle={Style.buttonLabel}
            onPress={() => navigation.navigate('Login')}
          >
            Sign In
          </Button>
          <Button
            textColor="#FAF9F6"
            mode="outlined"
            contentStyle={Style.buttonContent}
            labelStyle={Style.buttonLabel}
            theme={{ colors: { outline: '#FAF9F6' } }}
            onPress={() => navigation.navigate('Register')}
          >
            Sign Up
          </Button>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
