import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    HUDcontainer : {
        maxHeight : "55%",
        marginTop : 7,
        width : "100%",
        display : "flex",
        flexDirection : "column",
        flexWrap : "wrap"
    },

    LoadingBarContainer : {
        height : 25,
        borderRadius : 50,
        margin : 10,
        width : "50%",
        display : "flex",
        flexDirection : "row",
    },

    nameBars : {
        textAlign : "center",
        marginLeft : 10,
        fontSize : 20
    },

    buttonContainer : {
        width : "30%",
        display : "flex",
        flexDirection : "row",
        justifyContent : "flex-start",
        alignContent : "center"
    },

    eachBtn : {
        margin : 5
    }
})