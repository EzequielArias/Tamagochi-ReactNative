import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './room';
import { useStats } from '../../utils/stats.context';

const Room = () => {

  const { name, mood, tamagoshi } = useStats();

  console.log("################################")
  console.log(tamagoshi)

  return (
    <View style={styles.room}>
      <View style={styles.nameAndMood}>
        <Text style={{textAlign : "center", fontWeight : "bold", fontSize : 35 }}>{name}</Text>
        <Text style={{ textAlign : "center", fontSize : 20, borderBottomWidth : 1 }}>Estado de animo : {mood}</Text>
      </View>
      <View style={styles.tamagochiDiv}>
        <Text style={{textAlign : "center", fontSize : 75 }}>{tamagoshi}</Text>
      </View>
    </View>
  )
}

export default Room;