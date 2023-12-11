import React, { useEffect, useRef } from 'react'
import { Text, TextInput, View, Animated, Easing, Button } from 'react-native'
import { styles } from './Hud'
import { useStats } from '../../utils/stats.context'

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
    borderRadius : 50,
  };


  return (
    <View style={{ position : "relative", width : "100%" }}>
      <Animated.View style={barStyles as any} />
      <Text style={{backgroundColor : "white", width : "100%", borderRadius : 50, height : "100%" }}> </Text>
    </View>
  )
}

const Hud = () => {

  const { life, hungry, state, handlePetLife, feedPet, playWithPet  } = useStats();

  React.useEffect(() => {
    setInterval(() => {
      handlePetLife(1)
    },5000)
  },[])

  const feedBtn = () => feedPet(2);

  const playBtn = () => playWithPet(2)

  return (
    <>
        <View style={styles.HUDcontainer}>
          <View style={styles.LoadingBarContainer}>
            <HUDbars filled={life}/>
            <Text style={styles.nameBars}>Vida</Text>
          </View>
          <View style={styles.LoadingBarContainer}>
            <HUDbars filled={hungry}/>
            <Text style={styles.nameBars}>Hambre</Text>
          </View>
          <View style={styles.LoadingBarContainer}>
            <HUDbars filled={state}/>
            <Text style={styles.nameBars}>Diversion</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>

          <View style={styles.eachBtn}>
            <Button title='Comida' onPress={feedBtn} color={"black"}/>
          </View>

          <View style={styles.eachBtn}>
            <Button title='Alimentar' color={"black"}/>
          </View>

          <View style={styles.eachBtn}>
            <Button title='Jugar' onPress={playBtn} color={"black"}/>
          </View>

        </View>
    </>
  )
}

export default Hud;