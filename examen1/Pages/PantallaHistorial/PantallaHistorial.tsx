import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { ContextBanco } from '../../Contex/ContextBanco'
import { Transaccion } from '../../Modelos/Transaccion'

export default function PantallaHistorial() {
    const { transacciones, obtenerConteoTRansacciones } = useContext(ContextBanco);
    const totalTransacciones = obtenerConteoTRansacciones();

    const renderizarTransaccion = ({ item } : {item:Transaccion}) => {
       return( 
        <View>
            <Text>{item.fecha}</Text>
            <Text>{item.tipo} : {item.tipo === 'Transferencia' ? `a ${item.destinatario}`: ''}</Text>
            <Text>{item.tipo === 'Deposito' ? '+' : '-'}L.{item.monto.toFixed(2)}</Text>
        </View>
       ) 
    }
  return (
    <View>
      <Text>Historial de Transferencias</Text>
      <Text>Total de Trsnsacciones: {totalTransacciones}</Text>

      <FlatList data={transacciones} keyExtractor={(item) => item.id.toString()} renderItem={renderizarTransaccion}
        ListEmptyComponent={<Text>No hay transacciones en el historial</Text>}>

      </FlatList>
    </View>
  )
}