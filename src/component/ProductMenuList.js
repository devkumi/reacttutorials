import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'

import { Feather, AntDesign } from '@expo/vector-icons'

const ProductMenuList = (props) => {
    console.log(props.menuTitle)
  return (
    <View style={[styles.item, styles.card, styles.shadowProp]}>
      <AntDesign name={'creditcard'} size={50} color={'#54B847'} />
      <View style={styles.dateTextWrapper}>
        <Text style={styles.heading}>{props.menuTitle}</Text>
        <Text style={styles.subHeading}>{props.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  image: {
    flex: 1
  },
  dateTextWrapper: {
    flexDirection: 'column',
    marginLeft: 10
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 13,
  },
  subHeading: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 25,
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
})

export default ProductMenuList
