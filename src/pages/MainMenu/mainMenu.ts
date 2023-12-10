import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    MainContainer : {
        height : "100%",
        width : "100%",
        display : "flex",
        justifyContent : "center",
        alignContent : "center"
    },

    buttonContainer : {
        color : "black",
        marginLeft : 50,
        marginRight : 50,
        marginTop : 10,
        marginBottom : 10
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },

      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },

      input : {
        borderWidth : 1,
        margin : 10,
        paddingRight : 5,
        paddingLeft : 5,
        width : 150
      }
})