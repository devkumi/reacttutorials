import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../component/RowText'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels Like 5</Text>
        <RowText
          messageOne={'High: 8'}
          messageTwo={'Low: 6'}
          containerStyles={styles.highlowwrapper}
          messageOneStyle={styles.highlow}
          messageTwoStyle={styles.highlow}
        />
        
      </View>
      <RowText
          messageOne={'Its Sunny '}
          messageTwo={'Its Perfect T-Shirt Weather'}
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
