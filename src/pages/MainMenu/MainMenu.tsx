import React from 'react';
import {Button, View, Text, Modal, TextInput} from 'react-native';

import {useStats} from '../../utils/stats.context';
import {useLinkTo} from '@react-navigation/native';

import {styles} from './mainMenu';
import {Vibration} from 'react-native';
import TamagochiBox from '../../components/tamagochiBox/TamagochiBox';

export const MainMenu = () => {
  const linkTo = useLinkTo();

  const {manageLive, handleName, handleTamagoshi, tamagoshi, changeMood} =
    useStats();

  const [modal, setModal] = React.useState(false);
  const [petName, setPetName] = React.useState('');

  const handleBtn = () => setModal(!modal);

  const startGame = () => {
    handleName(petName);
    manageLive(true);
    changeMood('normal');
    Vibration.vibrate(200);
    setModal(false);
    linkTo('/Game');
  };

  return (
    <>
      <View style={styles.MainContainer}>
        <TamagochiBox />

        <Modal visible={modal} transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Elige el nombre de tu mascota.</Text>
              <TextInput
                placeholder=""
                style={styles.input}
                onChangeText={newText => setPetName(newText)}
                defaultValue={petName}
              />
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Button title=" ok " color={'black'} onPress={startGame} />
                <Text> </Text>
                <Button title=" no " color={'black'} onPress={handleBtn} />
              </View>
            </View>
          </View>
        </Modal>

        <View style={styles.buttonContainer}>
          <Button title="Jugar" color={'black'} onPress={handleBtn} />
        </View>
      </View>
    </>
  );
};
