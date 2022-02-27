import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image,Input } from 'react-native-elements';
import { auth } from "../firebase";

const LoginScreen = (props:any) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        props.navigation.replace('Home')
      }
    });
    return unsubscribe;
  },[])
  const signIn = () =>{

  }
  const signUp = () =>{

  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Image 
      source={{
        uri:"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"

      }}
      style={{width:200,height:200}}
      />
      <View style={styles.inputContainer}>
        <Input placeholder="E-mail" autoFocus={true} keyboardType='email-address'
        value={email} onChangeText={(text)=>setEmail(text)} />
        <Input placeholder="Password" autoFocus={true} secureTextEntry={true}
        value={password} onChangeText={(text)=>setPassword(text)} />
      </View>
      <Button title="Login" containerStyle={styles.button} onPress={signIn}  />
      <Button title="Registrarme" containerStyle={styles.button} type='outline' onPress={() =>props.navigation.navigate('Register')}  />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    alignContent: 'center',
    alignItems:'center',
    backgroundColor: "white"
  },
  inputContainer: {
    width:300
  },
  button:{
    width:200,
    marginTop:10,
  },
  
});
