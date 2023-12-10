import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    tamagochiContainer : {
        borderColor : "black",
        borderBottomWidth : 5,
        borderTopWidth : 5,
        borderLeftWidth : 5,
        borderRightWidth : 5,
        height : "70%",
        width : "98%",
        marginLeft : 5,
        display : "flex",
        justifyContent : "center",
        alignContent : "center"
    },

    text : {
        fontSize : 45,
        fontFamily :"Montserrat",
        fontWeight : "bold",
        padding : 15,
        textAlign : "center"
    },

    btnContainer : {
        display : "flex",
        flexDirection : "column",
        alignContent : "center",
        height : "100%",
        width : "100%",
        justifyContent : "space-between"
    },

    btnWrapper : {
        width : "50%",
        padding : 5
    }
})