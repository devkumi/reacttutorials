import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../component/RowText'
import { weatherType } from '../Utilities/WeatherType'

const CurrentWeather = ({weatherData}) => {

  console.log(weatherData)

  const {main:{temp, feels_like, temp_max, temp_min}, weather} = weatherData
  const weatherCondition = weather[0].main
  return (
    <SafeAreaView style={[styles.wrapper,{ backgroundColor: weatherType[weatherCondition].backgroundColor}]}>
      <View style={styles.container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
        <Text style={styles.temp}>{temp}</Text>
        <Text style={styles.feels}>{`Feels Like ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max} `}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={styles.highlowwrapper}
          messageOneStyle={styles.highlow}
          messageTwoStyle={styles.highlow}
        />
        
      </View>
      <RowText
          messageOne={weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
          containerStyles={styles.bodywrapper}
          messageOneStyle={styles.description}
          messageTwoStyle={styles.message}
        />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },

  temp: {
    color: 'black',
    fontSize: 48
  },

  feels: {
    color: 'black',
    fontSize: 30
  },

  highlowwrapper: {
    flexDirection: 'row'
  },

  highlow: {
    color: 'black',
    fontSize: 20
  },

  bodywrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },

  description: {
    color: 'black',
    fontSize: 48
  },

  message: {
    color: 'black',
    fontSize: 30
  }
})

export default CurrentWeather
