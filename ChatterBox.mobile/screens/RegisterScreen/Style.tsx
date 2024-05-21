import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b887e1',
  },
  title: {
    marginTop: 100,
    textAlign: 'center',
    color: '#fff',
  },
  form: {
    width: '100%',
    marginTop: 100,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Style;
