import { View, Text, TextInput, Button, StyleSheet, Alert, Keyboard } from 'react-native'
import React, { useContext, useState } from 'react'
import { ContextBanco } from '../../Contex/ContextBanco'
import { useNavigation } from '@react-navigation/native'

export default function PantallaTransferencias() {
  const { transferir, saldo }= useContext(ContextBanco);
  const navigation = useNavigation();

  const [cuentaDestinatario, setCuentaDestinatario] = useState<string>('');
  const [nombreDestinatario, setNombreDestinatario] = useState<string>('')
  const [montoTransferir, setMontoTransferir] = useState<string>('')

  const manejarTransferencia =()=> {
    if(!cuentaDestinatario.trim() || !nombreDestinatario.trim() || !montoTransferir.trim()){
      Alert.alert('Error', 'Todos los campos son obligatorio')
      return;
    }

    const monto = parseFloat(montoTransferir)

    if(isNaN(monto) || monto <=0){
      Alert.alert('ERROR','por favor ingrese un monto valido');
      return
    }

    if(monto>saldo){
      Alert.alert('ERror', 'Por favor ingese un monto valido')
      return;
    }

    const exito = transferir(monto, nombreDestinatario);

    if(exito){
      Alert.alert('Exito', `Transferencia de L.${monto} es exitoso a ${nombreDestinatario}`)
      setCuentaDestinatario('')
      setNombreDestinatario('')
      setMontoTransferir('');
      Keyboard.dismiss()
      navigation.navigate('Inicio' as never);
    }
  }
  return (
    <View>
      <Text>Realizar Transferencia</Text>

      <TextInput placeholder='Numero de Cuenta' keyboardType='numeric' value={cuentaDestinatario} onChangeText={setCuentaDestinatario}></TextInput>

      <TextInput placeholder='Nombre del Destinatario' value={nombreDestinatario} onChangeText={setNombreDestinatario}></TextInput>

      <TextInput placeholder='Monto a Transferir' keyboardType='numeric' value={montoTransferir} onChangeText={setMontoTransferir}></TextInput>
      
      <Button title='Transferir saldo' onPress={manejarTransferencia}/>
    </View>
  )
}