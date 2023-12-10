import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    HUDcontainer : {
        maxHeight : "50%",
        backgroundColor : "red",
        marginTop : 7,
        width : "100%",
        display : "flex",
        flexDirection : "column",
        flexWrap : "wrap"
    },

    LoadingBarContainer : {
        height : 15,
        borderRadius : 50,
        borderWidth : 1,
        margin : 10,
        width : "30%",
    }
})