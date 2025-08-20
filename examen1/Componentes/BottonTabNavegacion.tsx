import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PantallaInicio from '../Pages/PantallaInicio/PantallaInicio';
import PantallaTransferencias from '../Pages/PantallaTransferencias/PantallaTransferencias';

export default function BottonTabNavegacion() {

    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='PantallaInicio' component={PantallaInicio} />
            <Tab.Screen name='PantallaTransferencias' component={PantallaTransferencias} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}