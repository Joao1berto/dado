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
  const [ladoDado, setDiceNumber] = useState<number>(1);

  const girarDado = () => {
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(newNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo do dado</Text>
      <TouchableOpacity onPress={girarDado}>
        <Image source={ladosDado[ladoDado]} style={styles.imagemDado} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  imagemDado: {
    width: 150,
    height: 150,
  },
});
