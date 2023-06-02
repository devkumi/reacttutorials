import React , { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/component/Tabs'
import * as Location from 'expo-location'
import {WEATHER_API_KEY} from '@env'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  

  const fetchWeatherData = async ()=> {
    console.log(`WEATHER_API_KEY: ${WEATHER_API_KEY}`)
    try {
      const res = await fetch(`https://www.online.xdsdata.com/XDSConnectAPP/Api/Login?username=MobileApp&password=MobileApp`);
      const data = await res.json();
      setWeather(data)
      console.log(`lat ${lat}`)
      setLoading(false)
    } catch (error) {
      setErrorMsg('Could not fetch weather')
    } finally{
      setLoading(false)
    }
    
  }

  useEffect(()=>{
    (async ()=>{
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])

  if (weather) {
    console.log(`weather: ${weather}`)
  }

  if (location) {
  console.log('permission to access location was granted')
  console.log(location)
  }
  
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }

  
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
  

  
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex: 1
  }
})
export default App
