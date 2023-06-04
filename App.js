import React , { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/component/Tabs'
import * as Location from 'expo-location'
import {WEATHER_API_KEY} from '@env'
import { useGetWeather } from './src/hoosks/useGetWeather'
// import { createDrawerNavigator } from '@react-navigation/drawer';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// const Drawer = createDrawerNavigator();

const App = () => {
  const [loading, errorMsg, weather] = useGetWeather()

  // console.log(loading, errorMsg, weather)
  // if (loading) {
    
  // }

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  )
 
  

  
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex: 1
  }
})
export default App
