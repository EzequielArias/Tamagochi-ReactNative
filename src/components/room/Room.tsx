import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './room';
import {useStats} from '../../utils/stats.context';
import {bunnyStates, catStates} from '../../pets';

const data = [bunnyStates, catStates];

const Room = () => {
  const {
    name,
    mood,
    tamagoshi,
    petData,
    state,
    hungry,
    feedPet,
    changeMood,
    handleTamagoshi,
    petState,
    handlePetLife,
  } = useStats();

  React.useEffect(() => {
    const inter1 = setInterval(() => {
      console.log('hola me ejecuto');
      const tama = data
        .find(el => el.pet === petData.pet)
        ?.states.find(el => el.mood === mood)!;
      handleTamagoshi(tama.tamagochi);

      if (state > 50 && hungry > 60 && state < 80 && hungry < 90) {
        changeMood('normal');
      }

      if (state > 80 && hungry > 90) {
        changeMood('happy');
      }

      if (state < 30 && hungry < 30) {
        changeMood('sad');
      }
      petState(2);
      handlePetLife(2);
      feedPet(-2);
    }, 3000);

    return () => {
      clearInterval(inter1);
    };
  }, [
    changeMood,
    feedPet,
    handlePetLife,
    handleTamagoshi,
    hungry,
    mood,
    petData.pet,
    petState,
    state,
    tamagoshi,
  ]);
  console.log(tamagoshi);
  return (
    <View style={styles.room}>
      <View style={styles.nameAndMood}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 35}}>
          {name}
        </Text>
        <Text style={{textAlign: 'center', fontSize: 20, borderBottomWidth: 1}}>
          Estado de animo : {mood}
        </Text>
      </View>
      <View style={styles.tamagochiDiv}>
        <Text style={{textAlign: 'center', fontSize: 75}}>{tamagoshi}</Text>
      </View>
    </View>
  );
};

export default Room;
