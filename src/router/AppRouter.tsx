import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Room from '../components/room/Room.tsx';
import Settings from '../pages/settings/Settings.tsx';
import {MainMenu} from '../pages/MainMenu/MainMenu.tsx';
import Game from '../pages/Game/Game.tsx';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      {/* Este Stack.navigator es similar al Routes de React-router-dom*/}
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainMenu}
          options={{title: 'Menu principal'}}
        />

        <Stack.Screen
          name="Home"
          component={Room}
          options={{title: 'Overview'}}
        />

        <Stack.Screen
          name="Game"
          component={Game}
          options={{title: 'Game room'}}
        />

        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
