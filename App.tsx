import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";

export type StackParams={
  Login:undefined;
  Register:undefined;
  Home:undefined;
  AddChat: undefined;
  Chat: {id:string,chatName:string};
}

const Stack = createStackNavigator<StackParams>();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white"},
  headerTintColor: "white",
  
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login"  component={LoginScreen} options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="Register"  component={RegisterScreen} options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="Home"  component={HomeScreen} options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="AddChat"  component={AddChatScreen} options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="Chat"  component={ChatScreen} options={{headerTitleAlign:'center'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
