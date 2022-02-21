import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input,Text } from "react-native-elements";
import { auth } from "../firebase";
const RegisterScreen = (props: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useLayoutEffect(()=>{
    props.navigation.setOptions({
        headerBackTitle: "Volver a LogIn"
    })
  },[props.navigation])
  const register = () =>{
    auth.createUserWithEmailAndPassword(email,password)
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Crear mi cuenta
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Nombre"
          autoFocus
          keyboardType="default"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Clave"
          keyboardType="visible-password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Foto de perfil url (Opcional)"
          keyboardType="default"
          value={imgUrl}
          onChangeText={(text) => setImgUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button title={'Registrarme'} onPress={register} raised style={styles.button} />
      <View style={{height:100}} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: 'white'
  },
  inputContainer: {
      width:300
  },
  button: {
    width:200,
    marginTop:10
  }
});
