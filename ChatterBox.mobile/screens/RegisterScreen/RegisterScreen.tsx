import * as React from 'react';
import {Text, TextInput, Button } from 'react-native-paper';
import { SafeAreaView, ScrollView, View, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Style from "./Style";
import { Controller, useForm } from 'react-hook-form';

type FormData = {
    username: string
    password: string
  }
export default function RegisterScreen () {
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        defaultValues: {
          username: "",
          password: "",
        },
      })
      const onSubmit = (data: FormData) => {
        console.log(data);
        Alert.alert("Form Submitted", `Username: ${data.username}\nPassword: ${data.password}`);
      };

    return (
        <SafeAreaView style={Style.container}>
        <ScrollView>
          <Text style={Style.title} variant="displayLarge">
            Register
          </Text>
          <View style={Style.form}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="Username"
                  placeholder="Username"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  mode="outlined"
                  style={Style.input}
                  error={!!errors.username}
                />
              )}
              name="username"
            />
            {errors.username && <Text style={Style.errorText}>Username is required.</Text>}
  
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="Password"
                  placeholder="Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  mode="outlined"
                  secureTextEntry
                  style={Style.input}
                  error={!!errors.password}
                />
              )}
              name="password"
            />
            {errors.password && <Text style={Style.errorText}>Password is required.</Text>}
  
            <Button
              buttonColor="#6558f5"
              mode="contained"
              onPress={handleSubmit(onSubmit)}
              style={Style.button}
            >
              Register
            </Button>
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
}
