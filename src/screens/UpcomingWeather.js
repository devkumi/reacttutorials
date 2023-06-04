import React from "react"
import { SafeAreaView, StyleSheet, View, Text, FlatList, StatusBar,ImageBackground } from "react-native"
import { Feather } from '@expo/vector-icons'
import ListItem from "../component/ListItem"


const Empty = ()=>{
    <View>
        <Text>No Data Found</Text>
    </View>
}

const UpcomingWeather = ({weatherData})=>{

    // console.log(weatherData)
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
   
            <FlatList  
                data={weatherData}
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