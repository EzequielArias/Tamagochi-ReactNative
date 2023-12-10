import React, { useEffect, useRef } from 'react'
import { Text, TextInput, View, Animated, Easing } from 'react-native'
import { styles } from './Hud'

const HUDbars = ({ filled } : { filled : number}) => {

  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: filled,
      duration: 5000, // Ajusta la duración de la transición según tus necesidades
      easing: Easing.linear, // Ajusta la función de interpolación según tus necesidades
      useNativeDriver: false, // Se establece en "true" si es compatible con el uso del controlador nativo
    }).start();
  }, [filled]);

  const barStyles = {
    height: '100%',
    width: animatedWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    }),
    backgroundColor: 'black',
    zIndex : 999,
    position : "absolute", 
    top : 0, 
    left : 0,
  };


  return (
    <View style={{ position : "relative", width : "auto" }}>
      <Animated.View style={barStyles as any} />
      <Text style={{backgroundColor : "white", width : "100%", borderRadius : 50 }}> </Text>
    </View>
  )
}

const Hud = () => {
  return (
    <>
        <View style={styles.HUDcontainer}>
          <View style={styles.LoadingBarContainer}>
            <HUDbars filled={76}/>
          </View>
          <View style={styles.LoadingBarContainer}>
            <HUDbars filled={100}/>
          </View>
        </View>
        <View style={{ height : 200, backgroundColor : "yellow"}}>
          <Text style={{ color : "white"}}>asdfd</Text>
        </View>
    </>
  )
}

export default Hud