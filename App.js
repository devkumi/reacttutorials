import React from "react"
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native'
import { Feather } from '@expo/vector-icons';
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";

const App = () =>{

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CurrentWeather />
      </View>
    </NavigationContainer>

  )

}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0
  }
})

export default App