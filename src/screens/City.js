import React from "react";
import { SafeAreaView, Text, StyleSheet ,View, StatusBar,ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons'


const City = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/city2_bg.jpg')} 
                style={styles.imageLayout}
            >
                
                <Text style={[styles.cityname, styles.cityText]}>Ghana</Text>
                <Text style={[styles.countryname, styles.cityText]}>Accra</Text>

                <View style={styles.populationWrapper}>
                    <Feather name={'user'} size={50} color={'red'} />
                    <Text style={styles.populationText}>838,000</Text>
                </View>
                <View style={styles.riseSetWrapper}>
                    <Feather name={'sunrise'} size={50} color={'white'} />
                    <Text style={styles.riseSetText}>09:25:15</Text>
                    <Feather name={'sunset'} size={50} color={'white'} />
                    <Text style={styles.riseSetText}>17:25:15</Text>
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
    imageLayout:{
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
        color:'white'
    },
    populationWrapper:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        marginTop:35
    },
    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
        color:'red',
        fontWeight:'bold'
    },
    riseSetWrapper:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop:30
    },
    riseSetText:{
        fontSize: 20,
        color:'white',
        fontWeight: 'bold'
    }
})

export default City