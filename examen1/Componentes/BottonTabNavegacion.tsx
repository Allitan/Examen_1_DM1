import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PantallaInicio from '../Pages/PantallaInicio/PantallaInicio';
import { NavigationContainer } from '@react-navigation/native';
import PantallaTransferencias from '../Pages/PantallaTransferencias/PantallaTransferencias';
import PantallaHistorial from '../Pages/PantallaHistorial/PantallaHistorial';

export default function BottonTabNavegacion() {

    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='PantallaInicio' component={PantallaInicio} />
            <Tab.Screen name='PantallaTransferencias' component={PantallaTransferencias} />
            <Tab.Screen name='PantallaHistorial' component={PantallaHistorial} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}