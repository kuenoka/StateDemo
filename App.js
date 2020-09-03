import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  //TODO FIX IT
  //let counter = 0;
  const [counter, setCounter] = useState(0);
  const [myRandomNumber, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      <Button style = {styles.increaseStyle} title = 'Increase' onPress = { ()=> {
        setCounter(counter + 1);
        console.log(counter);
      }}/>
      <Button style = {styles.decreaseStyle} title = 'Decrease' onPress = { ()=> {
        setCounter(counter - 1);
        console.log(counter);
      }}/>
      <Text>Current Count {counter}</Text>
      <Button title = 'Get Random Number' onPress = { ()=> {
        setSelected(Math.floor(Math.random() * 10))
      }}/>
      <Text>Random Number {myRandomNumber}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  increaseStyle: {
    backgroundColor: '#00ff00'
  },
  decreaseStyle: {
    backgroundColor: '#ff0000'
  }
});
