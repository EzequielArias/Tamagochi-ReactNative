import React from 'react';
import {View} from 'react-native';
import {styles} from '../../components/tamagochiBox/tamagochiBox';
import Room from '../../components/room/Room';
import Hud from '../../components/HUD/Hud.tsx';

const Game = () => {
  return (
    <>
      <View
        style={{
          borderColor: 'black',
          borderBottomWidth: 5,
          borderTopWidth: 5,
          borderLeftWidth: 5,
          borderRightWidth: 5,
          height: '70%',
          width: '98%',
          marginLeft: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <Room />
        <Hud />
      </View>
    </>
  );
};

export default Game;
