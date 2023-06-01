import React from "react";
import { SafeAreaView, Text, StyleSheet ,View, StatusBar,ImageBackground } from "react-native";
import {Feather} from '@expo/vector-icons'
const City = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city_bg.jpg')} style={styles.image}>
                
                <Text style={[styles.cityname, styles.cityText]}>City</Text>
                <Text style={[styles.countryname, styles.cityText]}>City</Text>
                <View style={styles.populationWrapper}>
                    <Feather name="user" size={50} color={'black'} />
                    <Text style={styles.populationText}>8000</Text>
                </View>
                <View style={styles.riseSetWrapper}>
                    <Feather name="sunriseText" size={50} color={'white'} />
                    <Text style={styles.sunrise}>09:25:15am</Text>
                    <Feather name="sunsetText" size={50} color={'white'} />
                    <Text style={styles.sunrise}>17:25:15pm</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0        
    },
    image:{
        flex: 1
    },
    cityname:{
       fontSize: 40,
    },
    countryname:{
        
        fontSize: 30,
    },
    cityText:{
        justifyContent:'center',
        alignSelf: 'center',
        fontWeight:'bold',
        color:'#000'
    },
    populationWrapper:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'canter',
        marginTop:30
    },
    populationText:{
        fontSize: 20,
        marginLeft: 7.5,
        color:'red',
        fontWeight:'bold'
    },
    riseSetWrapper:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop:30
    },
    populationText:{
        fontSize: 20,
        marginLeft: 7.5,
        color:'white',
        fontWeight:'bold'
    }
})

export default City