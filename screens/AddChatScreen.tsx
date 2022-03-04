import { StyleSheet, Text, View } from 'react-native'
import React,{ useLayoutEffect, useState }  from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { StackParams } from '../App'
import { Button, Icon, Input } from 'react-native-elements';
import { db } from '../firebase';
import {collection,addDoc } from 'firebase/firestore';

type Props = NativeStackScreenProps<StackParams,"AddChat">;

const AddChatScreen = (props: Props) => {
    const [input,setInput] = useState("");
    useLayoutEffect(() => {
      props.navigation.setOptions({
          title: "Nuevo chat",
          headerStyle: {backgroundColor:'white'},
          headerTitleStyle: {color: "black"},
          headerTintColor: "black",
          headerBackTitle: "Chats"
      })
    }, [])

    const createChat = async () =>{
        const docRef : any = await addDoc(collection(db, "chats"), {
            chatName: input
          }).then(()=>{
            props.navigation.goBack();
          }).catch((error)=>{
            alert(error);
          })
          console.log("Document written with ID: ", docRef.id);
    
    }
  return (
    <View style={styles.container}>
      <Input placeholder='Ingrese el nombre de un chat' value={input} 
      onChangeText={(text)=> setInput(text)} 
      leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
      }
      onSubmitEditing={createChat}
      />
      <Button onPress={createChat} title="Nuevo chat" />
    </View>
  )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:30,
        height:"100%"
    }
})