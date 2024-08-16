import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import axios from 'axios';

export default function HomeScreen() {
  const [counter, setCounter] = useState(0);
  const [stage, setStage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('http://localhost:5000/detect')
        .then(response => {
          setCounter(response.data.counter);
          setStage(response.data.stage);
        })
        .catch(error => {
          console.error(error);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Push-ups: {counter}</Text>
      <Text style={styles.text}>Stage: {stage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background color
  },
  text: {
    fontSize: 24,
    margin: 10,
    fontWeight: 'bold',
  },
});
