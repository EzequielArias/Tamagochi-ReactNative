import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './tamagochiBox'
import { useStats } from '../../utils/stats.context'
import { bunnyStates, catStates } from '../../pets'

//helpersxd
const petsStack = [bunnyStates.find((p) => p.mood === "normal"), catStates.find((p) => p.mood === "normal")]

const TamagochiBox = () => {

  const { tamagoshi } = useStats();

  const [ pets, setpets ] = React.useState(petsStack.map(p => p?.tamagochi))
  const [ index, setIndex ] = React.useState(0)

  const handleLeft = () => setIndex((i) => i - 1 < 0 ? pets.length - 1 : i - 1)
  const handleRight = () => setIndex((i) => i + 1 > pets.length - 1 ? 0 : i + 1)


  return (
    <>
        <View style={styles.tamagochiContainer}>
            {
              tamagoshi ? 
              (
                <>
                  <Text>{tamagoshi}</Text>
                </>
              )
              :
              (
                <View style={styles.btnContainer}>
                 <Text style={styles.text}>{pets[index]}</Text>
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
              )
            }
        </View>
    </>
  )
}

export default TamagochiBox