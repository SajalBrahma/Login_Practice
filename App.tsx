// importing states 
import { Text, TextInput, View, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// function app to username and password input
function App() {
  const [name, setName] = useState("")
  const [pass, setpass] = useState("")

  function handlename(val : string){
    setName(val)
  }
  function handlepass(val : string){
    setpass(val)
  }

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text style={style2.text}> Login Page</Text>
      <Text style={style3.xyz}> Username : </Text>
      <TextInput placeholder='Username' value={name} onChangeText={handlename} style={style1.textInput}/>
      <Text style={style3.xyz}> Password : </Text>
      <TextInput placeholder='Password' secureTextEntry={true} value={pass} onChangeText={handlepass} style={style4.passInput}/>
      <Text style={style5.submit}>SUBMIT</Text>

    </View>
  );
} 

export default App

// style for page background
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  }
})

// style for Username Input
const style1 = StyleSheet.create({
  textInput : {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    paddingLeft: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
  }
})

// style for Title "Login Page"
const style2 = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
  }
})

// style for Title "Username" & "Password"
const style3 = StyleSheet.create({
  xyz: {
    marginLeft: 20,
  }
})

// style for Password Input
const style4 = StyleSheet.create({
  passInput : {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    paddingLeft: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 20, 
  }
})

// style for submit button
const style5 = StyleSheet.create({
  submit: {
    textAlign: 'center',
    backgroundColor: '#3B71F3',
    marginHorizontal: 50,
    marginVertical: 10,
    borderWidth: 2,
    padding: 15,
  }
})