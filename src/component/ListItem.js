import React from "react"
import { SafeAreaView, StyleSheet, View, Text, FlatList, StatusBar,ImageBackground } from "react-native"
import { Feather } from '@expo/vector-icons'


const Empty = ()=>{
    <View>
        <Text>No Data Found</Text>
    </View>
}
const ListItem = (props)=>{
    const { dt_txt, min, max, condition} = props
    const {date, temp, item} = style
    return(
        <View style={style.item}>
            <Feather name={'sun'} size={50} color={'white'}  />
            <Text style={style.date}>{dt_txt}</Text>
            <Text style={style.temp}>{min} °C</Text>
            <Text style={style.temp}>{max} °C</Text>
            
        </View>
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
export default ListItem