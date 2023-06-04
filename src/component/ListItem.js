import React from "react"
import { SafeAreaView, StyleSheet, View, Text, FlatList, StatusBar,ImageBackground } from "react-native"
import { Feather } from '@expo/vector-icons'
import { weatherType } from "../Utilities/WeatherType"
import moment from "moment"

const Empty = ()=>{
    <View>
        <Text>No Data Found</Text>
    </View>
}
const ListItem = (props)=>{
    
    const { dt_txt, min, max, condition} = props
    const {date, temp, item} = styles
    // console.log(dt_txt)
    return(
        <View style={styles.item}>
            <Feather name={weatherType[condition].icon} size={50} color={'white'}  />
            <View style={styles.dateTextWrapper}>
                <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
                <Text style={styles.date}>{moment(dt_txt).format('d/MM/Y')}</Text>
            </View>
            <Text style={styles.temp}>{`${Math.round(min)}/${Math.round(max)} °C`} </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
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
        backgroundColor: 'lightblue'

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
    },
    dateTextWrapper:{
        flexDirection: 'column'
    }
})
export default ListItem