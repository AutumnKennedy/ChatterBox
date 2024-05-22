import {StyleSheet} from "react-native";

const Style = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        marginTop: 15
    },
    column:{
        display: 'flex',
        flexDirection: 'column',
    },
    subtitle:{
        marginTop: -8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    },
    title:{
        fontWeight: 'bold',
        color: '#788797',
    },
})

export default Style;