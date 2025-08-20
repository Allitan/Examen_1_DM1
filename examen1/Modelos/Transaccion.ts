export interface Transaccion {
    id: number;
    monto: number;
    tipo: 'Deposito' | 'Retiro' | 'Transferencia';
    fecha: string
    destinatario? : string
}