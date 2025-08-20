import { View, Text } from 'react-native'
import React, { ReactNode, useState, useEffect } from 'react'
import { Transaccion } from '../Modelos/Transaccion'
import { ContextBanco } from '../Contex/ContextBanco'

interface ProviderBancoProps{
  children: ReactNode;
}

export default function ProviderBanco({children}: ProviderBancoProps) {

  const [saldo, setSaldo ] = useState<number>(10000);
  const [transacciones, setTransacciones]= useState<Transaccion[]>([]);

  const agregarTransaccion = (nuevaTransaccion: Omit<Transaccion, 'id' | 'fecha'>) => {
    const registroTransaccion: Transaccion = {
      ...nuevaTransaccion,
      id: Date.now(),
      fecha: new Date().toLocaleDateString('es-HN', {
        year: 'numeric',
        month: 'long',
        day : 'numeric'
      })
    }
    setTransacciones(prevTransacciones => [registroTransaccion, ...prevTransacciones])
  }

  const depositar = (monto:number) =>{
    setSaldo(prevSaldo => prevSaldo + monto)
    agregarTransaccion({tipo: 'Deposito', monto})
  }

  const transferir = (monto: number, destinatario: string): boolean=>{
    if(monto<=saldo){
      setSaldo(prevSaldo => prevSaldo - monto);
      agregarTransaccion({tipo: 'Transferencia', monto, destinatario})
      return true
    }
    return false;
  }

  const obtenerConteoTRansacciones = () =>{
    return transacciones.length;
  }


  return (
    <ContextBanco.Provider value={{ saldo, transacciones, depositar, transferir, obtenerConteoTRansacciones}}>
        {children}
    </ContextBanco.Provider>
  )
}