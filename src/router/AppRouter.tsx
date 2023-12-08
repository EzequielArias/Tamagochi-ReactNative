import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Room from '../components/room/Room.tsx';
import Settings from '../components/settings/Settings.tsx';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
        {/* Este Stack.navigator es similar al Routes de React-router-dom*/}
        <Stack.Navigator initialRouteName='Home'>

            <Stack.Screen 
              name='Home' 
              component={Room}
              options={{ title : "Overview"}}
              />

            <Stack.Screen name='Settings' component={Settings} />

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter