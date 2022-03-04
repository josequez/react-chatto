import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = (props: any) => {

  return (
    <ListItem key={props.id} bottomDivider onPress={()=> props.enterChat(props.id,props.chatName)}> 
        <Avatar
            rounded
            source={{
                uri:"https://raw.githubusercontent.com/josequez/react-chatto/main/assets/toppng.com-roger-berry-avatar-placeholder-358x358.png"
            }}
        />
        <ListItem.Content>
            <ListItem.Title style={{fontWeight:"800"}}>
                {props.chatName}
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                Ult. vez visto @
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})