import React , { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import {WEATHER_API_KEY} from '@env'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=matric`
      )
      const data = await res.json()
      setWeather(data)
    //   console.log(`lat ${lat}`)
      setLoading(false)
    } catch (error) {
      setErrorMsg('Could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
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
  return[loading, errorMsg, weather ]
}
