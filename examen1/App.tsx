import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProviderBanco from './Providers/ProviderBanco';
import BottonTabNavegacion from './Componentes/BottonTabNavegacion';

export default function App() {
  return (
    <ProviderBanco>
        <BottonTabNavegacion></BottonTabNavegacion>
    </ProviderBanco>
  );
}

