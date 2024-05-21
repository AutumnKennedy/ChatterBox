import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}
