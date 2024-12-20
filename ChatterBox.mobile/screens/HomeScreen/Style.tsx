import {StyleSheet} from "react-native";

const Style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        marginTop: 100,
        textAlign: 'center',
        color: '#FAF9F6',
    },
    logo:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    subtitle:{
        textAlign: 'center',
        color: '#FAF9F6',
        fontWeight: 'bold',
        marginTop: 20,
    },
     buttons:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
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