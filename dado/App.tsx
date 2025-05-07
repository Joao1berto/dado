import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ladosDado = {
  1: require('./assets/lado1.png'),
  2: require('./assets/lado2.png'),
  3: require('./assets/lado3.png'),
  4: require('./assets/lado4.png'),
  5: require('./assets/lado5.png'),
  6: require('./assets/lado6.png'),
};

export default function App() {
  const [ladoDado, setLadoDado] = useState<number>(1);
  const [ultimoLado, setUltimoLado] = useState<number>(0);

  const girarDado = () => {
	let novoLado: number;
	do {
  	novoLado = Math.floor(Math.random() * 6) + 1;
	} while (novoLado === ladoDado);

	setUltimoLado(ladoDado);
	setLadoDado(novoLado);
  };

  const getBackgroundColor = (numero: number) => {
	if (numero >= 1 && numero <= 3) return '#d0f0fd'; // cor clara
	if (numero >= 4 && numero <= 5) return '#59a5d8'; // cor média
	return '#1c7ed6'; // cor intensa para 6
  };

  return (
	<View style={[styles.container, { backgroundColor: getBackgroundColor(ladoDado) }]}>
  	<Text style={styles.title}>Jogo do Dado</Text>
  	<TouchableOpacity onPress={girarDado} activeOpacity={0.7}>
    	<Image source={ladosDado[ladoDado]} style={styles.imagemDado} />
  	</TouchableOpacity>
  	<Text style={styles.resultadoTexto}>Você tirou o número {ladoDado}!</Text>
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	padding: 20,
  },
  title: {
	fontSize: 28,
	marginBottom: 20,
	fontWeight: 'bold',
	color: '#222',
  },
  imagemDado: {
	width: 150,
	height: 150,
	marginBottom: 20,
  },
  resultadoTexto: {
	fontSize: 20,
	fontWeight: '600',
	color: '#222',
  },
});
