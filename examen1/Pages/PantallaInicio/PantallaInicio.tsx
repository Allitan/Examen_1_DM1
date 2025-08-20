import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native'
import React, { useContext } from 'react'
import { ContextBanco } from '../../Contex/ContextBanco'
import { Transaccion } from '../../Modelos/Transaccion'


export default function PantallaInicio() {

  const { saldo, transacciones, depositar } = useContext(ContextBanco);

  const manejarDeposito = () => {
    depositar(500);
    Alert.alert('Deposito EXitoso', 'Se han depositado 500 lempiras a la cuenta')
  }

  const renderizarTransaccion = ({ item }: {item:Transaccion}) => {
  return(
    <View >
      <Text>{item.tipo}</Text>
      <Text>{item.tipo === 'Retiro' || item.tipo === 'Transferencia' ? '-':'+'}L.{item.monto}</Text>
    </View>
  )
  }

  
  return (
    <View>
      <Text>App de Banco</Text>
      <View>
        <Text>Saldo Actual: </Text>
        <Text>L. {saldo.toFixed(2)}</Text>
      </View>
      <Button title='Depositar Saldo' onPress={manejarDeposito}></Button>
      <FlatList data={transacciones.slice(0,5)}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderizarTransaccion}
      ListEmptyComponent={<Text>No hay transacciones aun</Text>}
      />
    </View>
  )
}