import React from 'react'
import { Button, View, Text, Modal, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import { useStats } from '../../utils/stats.context';
import { styles } from './mainMenu';
import { Vibration } from 'react-native';
import TamagochiBox from '../../components/tamagochiBox/TamagochiBox';

export const MainMenu = () => {

  const { manageLive, handleName } = useStats();

  const [ modal, setModal ] = React.useState(false);
  const [ petName, setPetName ] = React.useState("");

  const handleBtn = () => setModal(!modal);

  const startGame = () => {
    handleName(petName);
    manageLive(true);
    Vibration.vibrate(250);
  }

  return (
    <>
        <View style={styles.MainContainer}>
            
            <TamagochiBox/>

            <Modal
            visible={modal}
            transparent={true}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text>Elige el nombre de tu mascota.</Text>
                  <TextInput
                    placeholder=''
                    style={styles.input}
                    onChangeText={newText => setPetName(newText)}
                    defaultValue={petName}
                  />
                  <View style={{display : "flex", flexDirection : "row"}}>
                  <Button 
                    title=' ok ' 
                    color={"black"}
                    onPress={startGame}/>
                  <Text> </Text>
                  <Button
                    title=' no '
                    color={"black"}
                    onPress={handleBtn}
                  />
                  </View>
                </View>
              </View>
            </Modal>

            <View style={styles.buttonContainer}>
                  <Button
                  title='Jugar'
                  color={"black"}
                  onPress={handleBtn}
                  />
            </View>
        </View>
    </>
  )
}
