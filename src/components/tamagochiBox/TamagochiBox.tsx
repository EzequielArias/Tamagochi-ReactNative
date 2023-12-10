import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './tamagochiBox'
import { useStats } from '../../utils/stats.context'
import { bunnyStates, catStates } from '../../pets'
import Room from '../room/Room'

//helpersxd
const petsStack = [{ pet : bunnyStates.pet, state : bunnyStates.states.find((p) => p.mood === "normal")}, { pet : catStates.pet, state : catStates.states.find((p) => p.mood === "normal")}]

const TamagochiBox = () => {

  const { handleTamagoshi, setPetData, changeMood } = useStats();

  const [ pets ] = React.useState(petsStack)
  const [ index, setIndex ] = React.useState(0)

  const handleLeft = () => setIndex((i) => i - 1 < 0 ? pets.length - 1 : i - 1)
  const handleRight = () => setIndex((i) => i + 1 > pets.length - 1 ? 0 : i + 1)

  handleTamagoshi(pets[index].state?.tamagochi as any)
  setPetData(pets[index])
  changeMood("normal")

  return (
    <>
        <View style={styles.tamagochiContainer}>
              <View style={styles.btnContainer}>
              <Text style={styles.text} >{pets[index]?.pet}</Text>
              <Text style={styles.text}>{pets[index]?.state?.tamagochi}</Text>
              <View style={{ display : "flex", width : "100%", flexDirection : "row" }}>
                <View style={styles.btnWrapper}>
                  <Button
                  title='Anterior'
                  color="black"
                  onPress={handleLeft}
                  />
                </View>
                <View style={styles.btnWrapper}>
                  <Button
                  title='Siguiente'
                  color="black"
                  onPress={handleRight}
                  />
                </View>
              </View>
              </View>
        </View>
    </>
  )
}

export default TamagochiBox