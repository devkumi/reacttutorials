import React from "react";
import { SafeAreaView, Text, StyleSheet ,View, StatusBar,ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons'
import IconText from "../component/IconText";


const City = () =>{
    const {container, cityText,cityname,countryname,imageLayout,populationText,populationWrapper,riseSetText,riseSetWrapper,rowLayout} = styles
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={require('../../assets/city2_bg.jpg')} 
                style={styles.imageLayout}
            >
              
                <Text style={[styles.cityname, styles.cityText]}>Ghana</Text>
                <Text style={[styles.countryname, styles.cityText]}>Accra</Text>

                <View style={[styles.populationWrapper, styles.rowLayout]}>
                    <IconText iconName={'user'} iconColor={'red'}  bodyText={'854,520'}  bodyTextStyles={styles.populationText} />
                </View>
                <View style={[styles.riseSetWrapper, styles.rowLayout]}>
                    <IconText iconName={'sunrise'} iconColor={'white'}  bodyText={'09:25:15'}  bodyTextStyles={styles.riseSetText} />
                    <IconText iconName={'sunset'} iconColor={'white'}  bodyText={'17:25:15'}  bodyTextStyles={styles.riseSetText} />
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
        justifyContent:'center',
        marginTop:35
    },
    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
        color:'red'  
    },
    riseSetWrapper:{
        justifyContent: 'space-around',
        marginTop:30
    },
    riseSetText:{
        fontSize: 20,
        color:'white'
    },
    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City