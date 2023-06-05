import React, { useState, useEffect, useRef } from 'react'
import {
  ActivityIndicator,
  DrawerLayoutAndroid,
  View,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/component/Tabs'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import { useGetWeather } from './src/hoosks/useGetWeather'
import { Feather } from '@expo/vector-icons'
import SideMenu from './src/component/SideMenu'
// import { createDrawerNavigator } from '@react-navigation/drawer';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// const Drawer = createDrawerNavigator();

const App = () => {
  const [loading, errorMsg, weather] = useGetWeather()
  const drawer = useRef(null)
  const navigationView = () => (
    <View style={[styles.sideMenu, styles.navigationContainer]}>
      <SideMenu />
    </View>
  )

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition={'left'}
          renderNavigationView={navigationView}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                backgroundColor: 'purple',
                alignContent: 'center',
                justifyContent: 'center',
                paddingHorizontal: 16
              }}
            >
            </View>
            <Tabs weather={weather} drawerpro={drawer} />
          </SafeAreaView>
        </DrawerLayoutAndroid>
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
  container: {
    justifyContent: 'center',
    flex: 1
  },
  containerr: {
    flex: 1,
    padding: 16
  },
  navigationContainer: {
    backgroundColor: '#fff'
  },
  sideMenu: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: StatusBar.currentHeight,
    paddingTop: 10
  }
})
export default App
