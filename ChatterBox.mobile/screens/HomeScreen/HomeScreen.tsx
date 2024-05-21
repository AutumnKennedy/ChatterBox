import * as React from 'react';
import {Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Style from "./Style";

export default function HomeScreen () {

    return (
        <SafeAreaView style={Style.container}>
        <ScrollView>
            <Text style={Style.title} variant="displayLarge"> Chatter Box </Text>
            <View style={Style.logo}>
              <Icon name="wechat" size={200} color="#fff" />
            </View> 
            <View>
                <Text style={Style.subtitle}
                variant="headlineSmall"
                >
                The newest and coolest way to connect with your friends! Chat like you’ve never chatted before!
                </Text>
            </View>
            <View style={Style.buttons}>
            <Button
                        buttonColor='#6558f5'
                        mode='contained'
                        contentStyle={Style.buttonContent}
                        labelStyle={Style.buttonLabel}
                    >
                        Sign Up
                    </Button>
                    <Button
                        textColor='#6558f5'
                        buttonColor='#fff'
                        mode='outlined'
                        contentStyle={Style.buttonContent}
                        labelStyle={Style.buttonLabel}
                    >
                        Sign In
                    </Button>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
        </SafeAreaView>
    );
}
