import React, { useEffect } from "react";
import { View, Text,TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import  { useState, useRef } from "react";


const  { width, height}= Dimensions.get('screen')
const HomeScreen = ({ route,navigation }: any) => {
  const [playetName, setPlayerName] = useState<String>("");
  const user = useRef(null);
  useEffect(() => {
    user.current.focus();
  },[])

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBdu_gayp1X2uJQaYb6Yw8SWxe9MjiKxeq57-qjnFFJw2tRYruqQjRa4YsBq6Txb2O48&usqp=CAU",
        }}
        style={{ width: width * 0.7, height: height *0.25 }}
      />
      <TouchableOpacity onPress={() => {navigation.push("Game", {playetName,results: route?.params?.results || []})}} style={styles.button}>
        <Text>
          LETS PLAY
        </Text>
        </TouchableOpacity>
        <TextInput ref = {user} style = {styles.PlayerName} placeholder = "Player Name" onChangeText={name => setPlayerName(name)}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  button:{
    marginTop: 60,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 5
  },
  PlayerName:{
    marginTop:5,
  }
});
