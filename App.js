
import {Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Styles from './styles/Styles';
import { useState } from 'react';

export default function App() {

  return (
    <View style={Styles.container}>
      <View style={Styles.switchRow}>
        <Text>Login/Register</Text>
        <Switch testID='switch' style={Styles.switch}/>
      </View>
      <FormInput label={'Email'}/>
      <FormInput label={'Password'} isPw={true}/>

      <TouchableOpacity>
        <Text style={Styles.button}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

function FormInput({label, isPw}){
  return(
    <View>
      <Text testID='textfield' style={Styles.label}>{label}</Text>
      <TextInput testID='input' secureTextEntry={isPw} style={Styles.textInput}/>
    </View>
  )
}
