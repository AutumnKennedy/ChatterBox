import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style from './Style';

type FormData = {
  ChatId: number;
};

export default function JoinChatByIdInput() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      ChatId: 0,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    Alert.alert("Form Submitted", `ChatId: ${data.ChatId}`);
  };

  return (
    <SafeAreaProvider>
      <View style={Style.container}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Join By Chat Id"
              placeholder="Enter ChatId"
              onBlur={onBlur}
              onChangeText={onChange}
              value={String(value)}
              mode="outlined"
              style={Style.input}
              error={!!errors.ChatId}
            />
          )}
          name="ChatId"
        />
        {errors.ChatId && (
          <Text style={Style.errorText}>ChatId cannot be blank.</Text>
        )}
      </View>
    </SafeAreaProvider>
  );
}