import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './room';
import TamagochiBox from '../tamagochiBox/TamagochiBox';

const Room = ( { navigation } : any ) => {
  return (
    <View style={styles.room}>
        <TamagochiBox/>
    </View>
  )
}

export default Room;