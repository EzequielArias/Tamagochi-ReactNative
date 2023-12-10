import React from 'react'
import { Button, View, Text } from 'react-native';

import { useStats } from '../../utils/stats.context';
import { styles } from './mainMenu';

import TamagochiBox from '../../components/tamagochiBox/TamagochiBox';

export const MainMenu = () => {

  const { tamagoshi, isAlive } = useStats();

  return (
    <>
        <View style={styles.MainContainer}>
            
            <TamagochiBox/>

            <View style={styles.buttonContainer}>
              { 
                  !tamagoshi || isAlive ?
                  <Button
                  title='Adoptar tamagochi'
                  color={"black"}
                  />
                  :
                  <Button
                  title='Jugar'
                  color={"black"}
                  />
              }
            </View>
        </View>
    </>
  )
}
