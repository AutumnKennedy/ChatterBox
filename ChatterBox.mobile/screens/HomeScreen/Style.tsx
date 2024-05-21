import {StyleSheet} from "react-native";

const Style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b887e1',
    },
    title:{
        marginTop: 120,
        textAlign: 'center',
        color: '#fff',
    },
    logo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    subtitle:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 20,
    },
     buttons:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        marginTop: 40,
     },
     buttonContent: {
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    buttonLabel: {
        fontSize: 16,
    }
})

export default Style;