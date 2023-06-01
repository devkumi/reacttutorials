import React from "react"
import { SafeAreaView, StyleSheet, View, Text, FlatList, StatusBar,ImageBackground } from "react-native"
import { Feather } from '@expo/vector-icons'
import ListItem from "../component/ListItem"

const Data = [
    {
        "main": {
          "temp_min": 296.34,
          "temp_max": 298.24,
        },
        "weather": [
          {
            "main": "Rain",
          }
        ],
        "dt_txt": "2022-08-30 16:00:00"
    },
    {
        "main": {
            "temp_min": 296.2,
            "temp_max": 296.31,
        },
        "weather": [
            {
            "main": "Rain",
            }
        ],
        "dt_txt": "2022-08-30 17:00:00"
    },
    {
        "main": {
            "temp_min": 292.84,
            "temp_max": 294.94,
        },
        "weather": [
            {
            "main": "Rain",
            }
        ],
        
        "dt_txt": "2022-08-30 18:00:00"
    },
    
    {
        "main": {
            "temp_min": 294.14,
            "temp_max": 294.14,
        },
        "weather": [
            {
            "main": "Clouds",
            }
        ],
        "dt_txt": "2022-09-03 15:00:00"
    }
]
const Empty = ()=>{
    <View>
        <Text>No Data Found</Text>
    </View>
}

const UpcomingWeather = ()=>{

    const renderItem = ({item}) => (
        <ListItem condition={
            
            item.weather[0].main} 
            dt_txt={item.dt_txt} 
            min={item.main.temp_min} 
            max={item.main.temp_min} 
        />
    )

    const {container, image} = style
    return (
        <SafeAreaView style={style.container}>
            <ImageBackground source={require('../../assets/upcoming_bg.jpg')} style={style.image} >
            <Text>Upcoming Weather</Text>

            <FlatList  
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
                ItemSeparatorComponent={(item) => <View style={{backgroundColor: 'royalblue', height: 2}} />}

            />
            </ImageBackground>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    item:{
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'

    },
    temp:{
        color: 'white',
        fontSize: 20
    },
    date:{
        color: 'white',
        fontSize: 15
    },
    image:{
        flex: 1
    }
})
export default UpcomingWeather