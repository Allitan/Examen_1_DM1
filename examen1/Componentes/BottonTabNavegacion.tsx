import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function BottonTabNavegacion() {

    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='' component={} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}