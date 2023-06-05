import { View, Text } from 'react-native'
import React from 'react'

const TabHeader = (props) => {
  return (
    <View style={{ flex: 1,
        alignItems: 'center',
        justifyContent: 'center'}}>
      <Text
        style={{
            textAlign:"center", 
          fontSize: 20,
          color: '#fff'
        }}
      >
        {props.name}
      </Text>
    </View>
  )
}

export default TabHeader
