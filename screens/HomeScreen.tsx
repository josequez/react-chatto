import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React, { useLayoutEffect, useState,useEffect } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CustomListItem from '../components/CustomListItem'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { auth, db } from '../firebase'
import { StackParams } from '../App'
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons'

import {collection,onSnapshot,doc,DocumentData } from 'firebase/firestore';

type Props = NativeStackScreenProps<StackParams,"Home">;
export interface IFireDocument {
  id: string;
  data: DocumentData;
}
const HomeScreen = (props:Props) => {
  const [chats,setChats] = useState<IFireDocument[]>([]);
  const signOutUser = () =>{
    console.log('Intento salir');
    auth.signOut().then(()=>{
      props.navigation.replace("Login");
    })
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "chats"), 
      (snapshot) => {
        /*snapshot.forEach((doc)=>{
          console.log(doc.data())
          
        })*/
        setChats(snapshot.docs.map((doc)=>({
          id: doc.id,
          data: doc.data()
        })))
      },
      (error) => {
        console.log(error);
      });
      return unsubscribe;
  }, [])
  
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "Chatto",
      headerStyle: {backgroundColor:'white'},
      headerTitleStyle: {color: "black"},
      headerTintColor: "black",
      headerLeft: () =>(
        <View style={{marginLeft: 20}}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{uri: auth?.currentUser?.photoURL || 'https://raw.githubusercontent.com/josequez/react-chatto/main/assets/toppng.com-roger-berry-avatar-placeholder-358x358.png'}} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () =>(
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 80,
          marginRight: 20
        }}> 
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <SimpleLineIcons name='pencil' size={24} color="black" onPress={()=>props.navigation.navigate("AddChat")} />
          </TouchableOpacity>
        </View>
      )
    });
  }, [props.navigation])

  const enterChat = (id:string,chatName:string)=>{
    props.navigation.navigate("Chat",{
      id,
      chatName
    });
  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({id,data:{chatName}})=>(
          <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat} />
        ))}
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    height:"100%"
  }
})