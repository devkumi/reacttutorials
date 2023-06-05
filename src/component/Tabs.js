import React, { useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import TabHeader from './TabHeader'
import Home from '../screens/Home'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather, drawerpro }) => {
  // const { weather } = props
  // console.log(weather)
  const drawer = useRef(null)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#54B847',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#fff'
        },
        headerStyle: {
          backgroundColor: '#54B847'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'white'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        screenOptions={{ headerTitleAlign: 'center' }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? '#54B847' : 'black'}
            />
          ),
          headerTitle: () => <TabHeader name="Name it" />,
          headerRight: () => (
            <Feather
              style={{ marginRight: 10 }}
              name={'droplet'}
              size={25}
              color={'white'}
            />
          ),
          headerLeft: () => (
            <Feather
              style={{ marginLeft: 10 }}
              name={'menu'}
              size={25}
              color={'white'}
              onPress={() => drawerpro.current.openDrawer()}
            />
          )
        }}
      >
        {() => <Home weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="Current"
        screenOptions={{ headerTitleAlign: 'center' }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? '#54B847' : 'black'}
            />
          ),
          headerTitle: () => <TabHeader name="Name it" />,
          headerRight: () => (
            <Feather
              style={{ marginRight: 10 }}
              name={'droplet'}
              size={25}
              color={'white'}
            />
          ),
          headerLeft: () => (
            <Feather
              style={{ marginLeft: 10 }}
              name={'menu'}
              size={25}
              color={'white'}
              onPress={() => drawerpro.current.openDrawer()}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name="Upcoming"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'white' : 'black'}
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'white' : 'black'}
            />
          )
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default Tabs
