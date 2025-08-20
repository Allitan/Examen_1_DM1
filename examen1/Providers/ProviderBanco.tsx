import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react';
import { Transaccion } from '../Modelos/Transaccion'
import { ContextBanco } from '../Contex/ContextBanco'

interface ProviderBancoProps{
    children: ReactNode;
}

export default function ProviderBanco({children}: ProviderBancoProps){

} {
  return (
    <View>
      <Text>ProviderBanco</Text>
    </View>
  )
}