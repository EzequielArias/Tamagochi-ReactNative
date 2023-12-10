import React from 'react'
import { Button, Text, View } from 'react-native'

const Settings = ( { navigation } : any ) => {
  return (
    <View>
        <Text>Settings</Text>
        <Button
          title='to Home'
          onPress={() => navigation.goBack()}
        />
    </View>
  )
}

export default Settings;