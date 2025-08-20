import { createContext, ReactNode } from "react";
import { Transaccion } from "../Modelos/Transaccion";

export interface IBancoContext{
    saldo: number;
    transacciones: Transaccion[];
    depositar: (monto: number) => void;
    transferir: (monto: number, destinatario: string)=> void;
    obtenerConteoTRansacciones: () => number;
}

export const ContextBanco= createContext<IBancoContext>({
    saldo: 0,
    transacciones: [],
    depositar: () => {},
    transferir: () => {},
    obtenerConteoTRansacciones: () => 0
})

